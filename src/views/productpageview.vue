<template>
  <div class="home">
    <header-container/>
    <!-- Product: {{ $route.params.productName }} -->
    <productpage :skus="skus"/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import productpage from '@/components/pageTemplates/singleProductPage.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'single-product-page',
  components: {
    headerContainer,
    footerContainer,
    productpage
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
