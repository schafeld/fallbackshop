<template>
  <div class="checkout js_chat-checkout">
    <checkout-header :checkoutStep="2"/>
    <dcomm-checkout/>
  </div>
</template>

<script>
import dcommCheckout from '@/components/checkout_step2/dcommCheckout.vue'
import checkoutHeader from '@/components/molecules/dcommCheckoutHeader.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'checkout',
  components: {
    dcommCheckout,
    checkoutHeader
  },
  methods: {
    updateTealiumDataLayerFromComponent,
    setUniqueOrderId () {
      // Set unique order id (for analytics and affiliates tracking),
      // 'fictional' id, i.e. not received from DWH/backend.
      // max 20 characters, UTF-8 encoded, defined prefix
      // Prefix 'UMX', 10 characters buildingId or 'unknownrfs', '_', 5 characters pseudo hash from timestamp
      // i.e. 19 characters (leave one as reserve)
      let orderId = 'UMX'
      orderId += this.$store.getters.rfsBuildingId + '_'
      orderId += Date.now()
        .toString()
        .substring(8, 13) // pseudo hash

      this.$store.commit('setUniqueOrderId', orderId)
    },
    trackPage () {
      // SiteCatalyst tracking, DA-3599
      // Checkout Page 2
      try {
        if (window.ANALYTICS_ALLOWED) {
          // If tracking is not allowed don't trigger it.
          window.sncf.clearVars() // clear data from sncf object
          window.sncf.eVar44 = 'Digital Commerce Fallback' // Checkout type
          window.sncf.prop69 = window.CONFIG_BBCT.shopId
          window.sncf.events = 'event14' // Checkout step2
          window.sncf.products = this.$store.getters.basketSncfProductsList // PRODUKTLISTE
          window.sncf.pageName = 'privatkunden/checkout_step2/homepage' // content description
          if (this.$store.getters.dslSwitch === 'true') {
            // dslSwitch = false means customer does not already have a DSL contract,
            // i.e. does not qualify for Wechslervorteil (provider change incentive)
            // this stored value is saved as string type, hence the weird check
            window.sncf.products = window.sncf.apl(
              window.sncf.products,
              ';Wechslervorteil',
              ',',
              2
            )
          }
          window.sncf.t() // trigger tracking
        }
      } catch (e) {
        console.warn('Tracking failed for checkout page 2. ' + e)
      }
      if (this.$data.DEBUG) {
        console.log(
          'Tracking Checkout Page 2: ' +
            window.sncf.eVar44 +
            ', products: ' +
            window.sncf.products,
          ', "Wechslervorteil": ' + this.$store.getters.dslSwitch
        )
      }
    },
    enableOrderTracking () {
      // Default in store should be false to prevent order tracking by page reload of checkout_confirmation.
      // Setting value to *false* (i.e. not yet tracked) will *allow* order tracking in checkout_confirmation.
      this.$store.commit('setOrderTracked', false)
    }
  },
  beforeRouteLeave (to, from, next) {
    if (
      to.fullPath !== '/privatkunden/checkout_step1' &&
      to.fullPath !== '/privatkunden/checkout_confirmation'
    ) {
      const answer = window.confirm(
        'Möchten Sie wirklich die Seite verlassen? Ihre Bestelldaten gehen ansonsten verloren.'
      )
      if (answer) {
        this.$store.commit('emptyCustomerData')
        this.$store.commit('emptyBasket')
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  },
  mounted: function () {
    this.setUniqueOrderId()
    this.trackPage()
    this.enableOrderTracking()
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
