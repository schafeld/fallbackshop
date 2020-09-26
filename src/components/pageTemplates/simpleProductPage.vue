<template>
  <div class="body">
    <div class="par parsys">
      <product-intro :sku="sku" :gradient="productObject.gradient">
        <slot/>
      </product-intro>
      <hardware v-if="sku === 'Telefon_Komfort_1'"/>
      <!-- TODO (?): Refactor fritzBox.vue so it uses simpleProductPage with hardware.vue component as well. Then use IconRowFritzBox in hardware. (See: #/privatkunden/telefon/festnetz-optionen/komfort-option/ and #/privatkunden/internet/internet-optionen/wlan-erweiterungen/fritzbox/)-->
      <icon-row-fritz-box v-if="sku === 'Telefon_Komfort_1'" />
      <explainer v-if="sku === 'Telefon_Komfort_1'"/>
    </div>
  </div>
</template>
<script>
import productIntro from '@/components/organisms/productintro.vue'
import explainer from '@/components/organisms/fritzBox/explainer.vue'
import hardware from '@/components/organisms/fritzBox/hardware.vue'
import iconRowFritzBox from '@/components/molecules/IconRowFritzBox.vue'

export default {
  name: 'product-detail-page',
  components: {
    productIntro,
    explainer,
    hardware,
    iconRowFritzBox
  },
  props: {
    skus: {
      type: Array,
      required: true
    },
    gradient: {
      type: String,
      required: true
    }
  },
  computed: {
    productObject () {
      let tempProduct = this.$store.getters.getProduct(this.sku)
      if (tempProduct) {
        return tempProduct
      } else {
        console.log('unable to find product based on SKU: ' + this.sku)
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
