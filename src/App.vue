<template>
  <div id="app">

    <!--
      <Banner-tax-reduction />
      -->

    <div
      id="nav"
      v-if="this.$data.DEBUG"
    >
      <router-link to="/">Home</router-link>|
      <router-link to="/privatkunden/checkout_step1">Checkout_Step1</router-link>|
      <router-link to="/privatkunden/checkout_step2">Checkout_Step2</router-link>|
      <router-link to="/privatkunden/checkout_confirmation">Bestellbestätigung</router-link>|
    </div>
    <transition
      :name="$route.name + '_' + transitionName"
      mode="out-in"
    >
      <router-view />
    </transition>
    <to-top-button />
    <ume-overlay />
  </div>
</template>

<script>
import umeOverlay from '@/components/atoms/umeOverlay.vue'
import toTopButton from '@/components/atoms/toTopButton.vue'
// import BannerTaxReduction from '@/components/organisms/BannerTaxReduction.vue'

export default {
  name: 'App',
  data: () => ({
    transitionName: 'slide-fade'
  }),
  components: {
    umeOverlay,
    toTopButton
    // BannerTaxReduction
  },
  created () {
    // set up all promotions on creating the app so the vuex is ready when user starts to interact with the software
    // if OnlineVorteil OLV is true then add online-vorteil to all products set up in store of promotions
    if (this.PROMOTION.olv) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('online-advantage')
      let listOfValues = this.$store.getters.getValuesFromPromotion('online-advantage')
      this.$store.commit('addPromotion', { skus: listOfSkus, promoValue: listOfValues, promoCode: 'online-advantage', valueToChange: 'onlinePromotionValue' })
    }
    // if double Online Vorteil dov is true then replace online-vorteil at all products defined in DOV sku set with new values
    if (this.PROMOTION.dov) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('double-online-advantage')
      let listOfValues = this.$store.getters.getValuesFromPromotion('double-online-advantage')
      this.$store.commit('replacePromotion', { skus: listOfSkus, promoValue: listOfValues, valueToChange: 'onlinePromotionValue', oldPromoCode: 'online-advantage', newPromoCode: 'double-online-advantage' })
    }
    // if one time charge promotion otc is true then add otc-advantage to all products set up in store of promotions
    // additionally update the upfront_price value in the store for products with the promotion value
    if (this.PROMOTION.otc) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('otc-befreiung')
      let valueForAll = this.$store.getters.getValueForAllFromPromotion('otc-befreiung')
      this.$store.commit('addPromotion', { skus: listOfSkus, valueForAll: valueForAll, promoCode: 'otc-befreiung', valueToChange: 'upfront_price' })
    }
    // add test the best promotion to all applicable products
    if (this.PROMOTION.tpp) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('threeplayPromo')
      this.$store.commit('addPromotion', { skus: listOfSkus, promoCode: 'threeplayPromo' })
    }
    // add test the best promotion to all applicable products
    if (this.PROMOTION.miw) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('fdami')
      this.$store.commit('addPromotion', { skus: listOfSkus, promoCode: 'fdami' })
    }
    // if wechselvorteil promotion is true then add wechselvorteil to all products set up in store of promotions
    if (this.PROMOTION.wvt) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('wechselvorteil')
      this.$store.commit('addPromotion', { skus: listOfSkus, promoCode: 'wechselvorteil' })
    }
    // if mgm promotion is true then add bonus mgm values to all products set up in store of promotions
    if (this.PROMOTION.mgm) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('mgm-bonus')
      let listOfValues = this.$store.getters.getValuesFromPromotion('mgm-bonus')
      this.$store.commit('updateMgmValueByPromotion', { skus: listOfSkus, promoValue: listOfValues })
    }
    // if studentenvorteil sdv is true then add the studentenvorteil values to all products set up in store of promotions
    if (this.PROMOTION.sdv) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('student-advantage')
      let listOfValues = this.$store.getters.getValuesFromPromotion('student-advantage')
      this.$store.commit('addPromotion', { skus: listOfSkus, promoValue: listOfValues, promoCode: 'student-advantage' })
    }
    // if studentenvorteil promotion sdp is true then replace the studentenvorteil values at all products for the new promotion values set up in store of promotions
    if (this.PROMOTION.sdp) {
      let listOfSkus = this.$store.getters.getSkusFromPromotion('bonus-student-advantage')
      let listOfValues = this.$store.getters.getValuesFromPromotion('bonus-student-advantage')
      this.$store.commit('replacePromotion', { skus: listOfSkus, promoValue: listOfValues, oldPromoCode: 'student-advantage', newPromoCode: 'bonus-student-advantage' })
    }

    if (this.AVAILABILITY) {
      this.AVAILABILITY.forEach(product => {
        this.$store.commit('setProductAvailability', product)
      })
    }

    /*    if (this.RFSFALLBACK) {
      this.$store.commit('replaceSkuInSets', ['2P_RIP_1000_1', '2P_RIP_1000_500_1'])
    } */
  }
}
</script>

<style>
@import "./assets/dcomm.css";
@import "./assets/altx.css";
.debugging-info {
  display: inline-block;
  border: 1px dashed #ddd;
  padding: 5px 20px;
}
/* TODO: Reopen CR-51040, this breaks horizontal alignment, makes main menu overflow to right side.
div#app {
  position: absolute;
} */

.checkout_step1_slide-fade-enter-active {
  transition: all 0.3s ease;
}
.checkout_step1_slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.checkout_step1_slide-fade-enter,
.checkout_step1_slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
