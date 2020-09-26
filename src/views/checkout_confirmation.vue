<template>
  <div class="checkout thankyou-page">
    <confirmation-header/>
    <div class="body js_chat-checkout">
      <div class="container">
        <div class="confirmation">
          <div class="confirmationNextSteps parsys">
            <headline-confirmation v-on:scrollTo="scrollTo('anchor_purchaseDetails')"/>
            <productlist-confirmation/>
            <confirmation-footer/>
          </div>
        </div>
      </div>
      <to-top-button/>
    </div>
  </div>
</template>
<script>
import confirmationHeader from '@/components/confirmation/confirmationHeader.vue'
import headlineConfirmation from '@/components/confirmation/headlineConfirmation.vue'
import productlistConfirmation from '@/components/confirmation/productlistConfirmation.vue'
import confirmationFooter from '@/components/confirmation/confirmationFooter.vue'
import toTopButton from '@/components/atoms/toTopButton.vue'
// import updateTealiumDataLayer from '@/helper/updateTealiumDataLayer'
// import setCookie from '@/helper/setCookie'
// import getCookie from '@/helper/getCookie'

export default {
  components: {
    confirmationHeader,
    headlineConfirmation,
    productlistConfirmation,
    confirmationFooter,
    toTopButton
  },
  methods: {
    // setCookie,
    // getCookie,
    // updateTealiumDataLayer,
    scrollTo (refName) {
      var element = document.getElementById(refName)
      var toTop = element.offsetTop
      window.scrollTo(0, toTop + 500)
    },
    trackPage () {
      // SiteCatalyst tracking, DA-3599
      // Checkout Confirmation
      try {
        if (window.ANALYTICS_ALLOWED) {
          // If tracking is not allowed don't trigger it.
          window.sncf.clearVars() // clear data from sncf object
          window.sncf.eVar44 = 'Digital Commerce Fallback' // Checkout type
          window.sncf.prop69 = window.CONFIG_BBCT.shopId
          window.sncf.events = 'purchase' // Order
          window.sncf.products = this.$store.getters.basketSncfProductsList // see DA-3599 "PRODUKTLISTE" for details on format
          window.sncf.purchaseID = window.sncf.eVar34 = window.sncf.eVar70 = this.$store.getters.uniqueOrderId // 'Bestellnummer' fictional order number.
          window.sncf.pageName = 'privatkunden/checkout_confirmation/homepage'
          if (this.$store.getters.dslSwitch === 'true') {
            // dslSwitch = false means customer does not already have a DSL contract,
            // i.e. does not qualify for Wechslervorteil (provider change incentive)
            // this stored value is saved as string type, hence the weird check
            window.sncf.products = window.sncf.apl(window.sncf.products, ';Wechslervorteil', ',', 2)
          }

          // TODO: Delete or make DEBUG output
          console.info('DEBUG: Checkout Confirmation – getOrderTracked: ' + this.$store.getters.getOrderTracked)

          if (this.$store.getters.getOrderTracked !== true) {
          // CR-51535: prevent page reload from triggering another order tracking

            window.sncf.t() // trigger tracking

            this.$store.commit('setOrderTracked', true)

            console.info('Checkout Confirmation (order) tracking was triggered. getOrderTracked: ' + this.$store.getters.getOrderTracked)
          } else {
            console.warn('Tracking Checkout Confirmation was prevented (page reload / empty basket). getOrderTracked: ' + this.$store.getters.getOrderTracked)
          }
        }
      } catch (e) {
        console.error('Tracking failed for checkout confirmation. ' + e)
      }
      if (this.$data.DEBUG) {
        console.log('Tracking Checkout Confirmation: ' + window.sncf.eVar44 + ', products: ' + window.sncf.products, ', "Wechslervorteil": ' + this.$store.getters.dslSwitch)
      }
    }
  },
  mounted: function () {
    this.trackPage()
  },
  beforeRouteLeave (to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    console.log('Leaving Checkout Confirmation page, deleting all session data...')
    this.$store.commit('emptyBasket')
    this.$store.commit('resetState')
    next() // without this, navigation would be prohibited
  }
}
</script>
