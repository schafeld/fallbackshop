<template>
  <div class="option_box parbase section">
    <div
      class="option-box-container js_option-box-container"
      data-widget="OptionBox"
      data-skus=""
      data-parent-sku=""
      data-exclude-skus=""
      data-message-timeout=""
      data-is-direct-checkout="true"
      data-disable-default-direct-checkout="false"
    >

      <div class="option-box">
        <div class="option-head option-head--black">
          <div class="option-titles ">
            <div v-if="title">{{title}}</div>
            <div v-else>{{orderCollection[0].title}}</div>
          </div>
        </div>
        <div class="option-body option-showAdd option-showMore">
          <div class="option-top">
            <div class="option-content">
              <div class="option-contentLess">
                <ul>
                  <li
                    v-for="bullet in orderCollection[0].bullets"
                    :key="bullet.id"
                  >
                    <span v-html="bullet"/>
                  </li>
                  <slot />
                </ul>
              </div>
            </div>
          </div>
          <div class="option-bottom">
            <div class="option-bottomContainer">
              <add-to-basket-button
                renderStyle="price-above"
                :sku="sku"
                :skus="skus"
                :salesId="salesId"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
export default {
  components: {
    addToBasketButton
  },
  props: {
    skus: {
      type: Array,
      required: false
    },
    sku: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    salesId: {
      type: Number,
      required: false
    }
  },
  computed: {
    orderCollection () {
      let tempOrder = []
      let index = 0 // define here otherwise index is undefined outside for scope
      if (this.skus) {
        for (index = 0; index < this.skus.length; index++) {
          tempOrder.push(this.$store.getters.getProduct(this.skus[index]))
        }
      } else if (this.sku) {
        tempOrder.push(this.$store.getters.getProduct(this.sku))
      }
      if (tempOrder) {
        // console.log('+++++++++++++++++ order changed ' + this.renderCurrentBasket(tempOrder).skuList + ' | ' + this.renderCurrentBasket(tempOrder).priceTotal)
        return tempOrder
      } else {
        console.log(
          'Could not find product from database. Skus: ' +
          this.skus[index] +
          'Could not find product from database. Sku: ' +
          this.sku
        )
        return {
          sku: '',
          monthly_price: '-,-',
          contract_duration: null,
          legaltext: ''
        }
      }
    }
  }
}
</script>
