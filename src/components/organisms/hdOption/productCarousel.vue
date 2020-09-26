<template>
  <category-slider-tabs
    :categories="categories"
    v-on:setCategory="updateSelected($event)"
  >
    <category-slider-parsys
      :selected="selected[0]"
      :label="categories[0]"
      :amount="4"
    >
      <product-box
        sku="SA-HRZ_TV_0420_1"
      >
      </product-box>
      <product-box
        sku="2P_RIP_250_1"
      >
      </product-box>
      <product-box
        sku="2P_RIP_500_1"
      >
      </product-box>
    </category-slider-parsys>
  </category-slider-tabs>
</template>
<script>
import categorySliderTabs from '@/components/molecules/categorySlider/tabs.vue'
import categorySliderParsys from '@/components/molecules/categorySlider/parsys.vue'
import productBox from '@/components/molecules/rbProduktBox.vue'

export default {
  components: {
    categorySliderTabs,
    categorySliderParsys,
    productBox
  },
  data () {
    return {
      categories: ['HD-Option ist hier bereits enthalten'],
      selected: [true]
    }
  },
  methods: {
    updateSelected (index) {
      if (index > -1) {
        let localIndex = this.selected.indexOf(true)
        if (index !== localIndex) {
          this.selected.splice(localIndex, 1, false)
          this.selected.splice(index, 1, true)
        }
      }
    }
  }
}
</script>
