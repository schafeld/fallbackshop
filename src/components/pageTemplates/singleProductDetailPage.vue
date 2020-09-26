<template>
  <div class="body">
    <div class="par parsys">
      <product-intro
        :skus="skus"
        :product="productObject"
        :gradient="productObject.gradient"
        renderMode="header-only"
        detailPage="true"
      />
      <contract-details
        :product="productObject"
        tableHeader="Detailübersicht - Alles auf einen Blick"
        includeProductElements="full"
        :background="productObject.gradient"
      />
      <mgm-box
        :product="productObject"
        :gradient="productObject.gradient"
      />
      <wechselvorteil
        v-if="productObject.promoCodes.findIndex(i => i.promoCode === 'wechselvorteil') > -1"
        :gradient="productObject.gradient"
      />
    </div>
  </div>
</template>
<script>
import productIntro from '@/components/organisms/productintro.vue'
import contractDetails from '@/components/organisms/contractDetails.vue'
import mgmBox from '@/components/organisms/mgmBox.vue'
import wechselvorteil from '@/components/organisms/wechselvorteil.vue'

export default {
  name: 'product-detail-page',
  components: {
    productIntro,
    mgmBox,
    wechselvorteil,
    contractDetails
  },
  props: {
    skus: {
      type: Array,
      required: true
    }
  },
  computed: {
    productObject () {
      let tempProduct = this.$store.getters.getProductBySku(this.skus)
      if (tempProduct) {
        return tempProduct
      } else {
        console.log('unable to find product based on SKU: ' + this.skus)
        return {}
      }
    },
    productBundle () {
      let tempProduct = this.$store.getters.getSetinfoBySettitle(this.productObject.set)
      if (tempProduct) {
        return tempProduct
      } else {
        console.log('unable to find bundleInfo based on SKU: ' + this.skus)
        return {}
      }
    }
  },
  mounted () {
    if (this.$data.window.width < 479) {
      this.$router.push(this.productObject.url)
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
