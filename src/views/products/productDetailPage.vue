<template>
  <div class="home">
    <header-container/>
    <productpage :skus="skus"/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import productpage from '@/components/pageTemplates/singleProductDetailPage.vue'

export default {
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
  }
}
</script>
