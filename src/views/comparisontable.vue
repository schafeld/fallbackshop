<template>
  <div class="comparisontable">
    <header-container/>
    <compare-products-page :gradient="setObject.gradient" :set="setObject.title"/>
    <footer-container/>
  </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import compareProductsPage from '@/components/pageTemplates/compareProductsPage.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'comparisontable',
  computed: {
    setObject () {
      return this.$store.getters.getSetinfoBySettitle(this.set)
    }
  },
  props: {
    set: {
      type: String,
      requied: true
    }
  },
  components: {
    headerContainer,
    footerContainer,
    compareProductsPage
  },
  methods: {
    updateTealiumDataLayerFromComponent,
    pushToTopseller () {
      let helperNumber = this.setObject.skus.length
      if (helperNumber <= 2) {
        this.$router.push(this.$store.getters.getProduct(this.setObject.skus[helperNumber - 1]).url)
      } else if (helperNumber > 2) {
        this.$router.push(this.$store.getters.getProduct(this.setObject.skus[helperNumber - 2]).url)
      }
    }
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
    if (this.$data.window.width < 479) {
      this.pushToTopseller()
    }
  }
}
</script>
