<template>
  <div class="home">
    <header-container/>
    <!-- Product: {{ $route.params.productName }} -->
    <div v-if="skus.indexOf('Power_Upload_1') > -1">
      <power-upload-product-page :skus="skus"/>
    </div>
    <div v-else-if="skus.indexOf('HRZ_TV_0420_1') > -1">
      <horizon-tv-product-page :sku="skus[0]"/>
    </div>
    <div v-else>
      <productpage :skus="skus" :gradient="product.gradient"/>
    </div>
    <footer-container/>
  </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import productpage from '@/components/pageTemplates/simpleProductPage.vue'
import powerUploadProductPage from '@/components/pageTemplates/specialOptions/powerUploadProductPage.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'simple-product-page',
  computed: {
    product () {
      return this.$store.getters.getProduct(this.sku)
    }
  },
  components: {
    headerContainer,
    footerContainer,
    productpage,
    powerUploadProductPage
  },
  props: {
    skus: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  updated: function () {
    // Must use *updated* hook for dynamic product views!
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
