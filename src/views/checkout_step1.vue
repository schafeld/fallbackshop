<template>
  <div class="checkout js_chat-checkout">
    <checkout-header :checkoutStep="1"/>
    <dcomm-checkout/>
  </div>
</template>

<script>
import checkoutHeader from '@/components/molecules/dcommCheckoutHeader.vue'
import dcommCheckout from '@/components/checkout_step1/dcommCheckout.vue'
import getCookieJson from '@/helper/getCookieJson'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'checkout',
  components: {
    dcommCheckout,
    checkoutHeader
  },
  methods: {
    getCookieJson,
    updateTealiumDataLayerFromComponent,
    updateCookieClick (salesId) {
      this.$store.commit('setSalesIdClick', salesId)
    },
    updateCookiePostView (salesId) {
      this.$store.commit('setSalesIdPostView', salesId)
    },
    trackPage () {
      // SiteCatalyst tracking, DA-3599
      // Checkout Page 1
      if (window.ANALYTICS_ALLOWED) {
        try {
          window.UPC.vars.siteSection = 'Sales'
          // Referencing sncf from global window object avoids Vue linting error
          window.sncf.eVar44 = 'Digital Commerce Fallback' // Checkout type
          window.sncf.prop69 = window.CONFIG_BBCT.shopId
          window.sncf.events = 'scCheckout' // Checkout step1
          window.sncf.products = this.$store.getters.basketSncfProductsList // PRODUKTLISTE
          window.sncf.pageName = 'privatkunden/checkout_step1/homepage' // Contentbeschreibung
          window.sncf.t()
        } catch (e) {
          console.log('Tracking failed for checkout page 1. ' + e)
        }
        if (this.$data.DEBUG) {
          console.log('Tracking: ' + window.sncf.eVar44 + ', products: ' + window.sncf.products)
        }
      } else {
        console.log('SiteCatalyst (sncf) not available (GDPR opt-out).')
      }
    },
    determineTrackingDetail () {
      // Sampling: Detailled tracking of user interaction (clicking each form element) is to be done
      // for random 50% sample of visitors to checkout page 1 only. See DA-3600.
      if (Math.random() > 0.5) {
        this.$store.commit('setDetailledAnalytics', true)
        console.log('All clicks in CP1 should be counted (sampling).')
      } else {
        this.$store.commit('setDetailledAnalytics', false)
        console.warn('Clicks in CP1 are deliberately not being registered (sampling).')
      }
    }
  },
  created: function () {
    this.updateCookieClick(this.getCookieJson('click').sales_id)
    this.updateCookiePostView(this.getCookieJson('post_view').sales_id)

    this.trackPage()

    this.determineTrackingDetail()
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
    if (this.$data.MOCKDATA) {
      this.$store.commit('setMockData')
    }
  },
  destroyed: function () {
    // console.log('Analytics level of detail reset to true.')
    this.$store.commit('setDetailledAnalytics', true)
  }
}
</script>
