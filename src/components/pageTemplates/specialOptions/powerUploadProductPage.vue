<template>
  <div class="body">
    <div class="par parsys">
      <product-intro :skus="skus" :product="productObject">
      <speed-visualization/>
      </product-intro>
    </div>
  </div>
</template>
<script>
import productIntro from '@/components/organisms/productintro.vue'
import speedVisualization from '@/components/molecules/internetSpeedVisualization.vue'

export default {
  components: {
    productIntro,
    speedVisualization
  },
  props: {
    skus: {
      type: Array,
      required: true
    }
  },
  computed: {
    productObject () {
      let tempProduct = this.$store.getters.getProduct(this.skus)
      if (tempProduct) {
        return tempProduct
      } else {
        console.log('unable to find product based on SKU: ' + this.skus)
        return {}
      }
    }
  }
}
</script>

<style>
/* Style "Wechselererinnerung" dialog, but not basket overlay! */
.discovery-body .dialog-box {
   background-color: #eff2fb;
}
</style>
