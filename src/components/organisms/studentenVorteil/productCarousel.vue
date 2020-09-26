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
        sku="2P_RIP_50_1"
        :salesId="48576"
      >
        <li>Wunschgutschein von BestChoice: 50 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_250_1"
        :salesId="43328"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_500_1"
        :salesId="48575"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_1000_1"
        :salesId="48036"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
      </product-box>
    </category-slider-parsys>
    <category-slider-parsys
      :selected="selected[1]"
      :label="categories[1]"
      :amount="4"
    >
      <product-box
        sku="2P_RIP_50_1"
        :salesId="48866"
      >
        <li>Wunschgutschein von BestChoice: 50 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_250_1"
        :salesId="48865"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_500_1"
        :salesId="48867"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
      </product-box>
      <product-box
        sku="2P_RIP_1000_1"
        :salesId="48867"
      >
        <li>Wunschgutschein von BestChoice: 100 €</li>
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
      categories: ['Studenten-Aktion', 'Azubi-Aktion'],
      selected: [true, false]
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
