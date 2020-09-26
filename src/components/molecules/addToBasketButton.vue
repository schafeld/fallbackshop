<template>
  <div class="btn-legal">
    <form
      v-if="renderStyle === 'button-only'"
      name="addToBasket"
      data-widget="AddToBasket"
      data-load-price="true"
      data-purchase-legal-text
    >
      <input
        v-if="skus"
        type="hidden"
        name="skus"
        :value="skus"
      />
      <input
        v-else-if="sku"
        type="hidden"
        name="skus"
        :value="sku"
      />
      <input
        v-if="salesId"
        type="hidden"
        :data-sales-id="salesId"
      />
      <order-button
        type="button_element"
        :inverted="whiteBtn"
        :label="label?label:'Direkt bestellen'"
        v-on:buttonClicked="trackAddToBasketButtonClick(), openOverlay()"
        v-if="overlay"
      />
      <order-button
        type="button_element"
        :inverted="whiteBtn"
        :label="label?label:'Direkt bestellen'"
        v-else
        v-on:buttonClicked="trackAddToBasketButtonClick(), addToBasket()"
      />
    </form>
    <form
      v-else-if="renderStyle === 'price-above'"
      name="addToBasket"
      data-widget="AddToBasket"
      data-load-price="true"
      data-purchase-legal-text
    >
      <input
        v-if="skus"
        type="hidden"
        name="skus"
        :value="skus"
      />
      <input
        v-else-if="sku"
        type="hidden"
        name="skus"
        :value="sku"
      />
      <input
        v-if="salesId"
        type="hidden"
        :data-sales-id="salesId"
      />
      <div class="btn-prefixed price-on-top">
        <div class="basket-box-wrapper">
          <div class="basket-box__body">
            <div class="basket-box__price basket-box__price--above normal">
              <div class="basket-box__amount basket-box__amount--full js_purchase_price js_price_euro">{{orderValueArray[0]}},</div>
              <div class="basket-box__cents js_purchase_price js_price_cent">{{orderValueArray[1]}} €</div>
              <umefn
                v-if="legaltext"
                :id="legaltext"
                :additional="optionLegaltext"
                style="top: -20px; left: 5px; position: relative;"
              />
              <umefn
                v-else
                :id="orderCollection[0].legaltext"
                :additional="optionLegaltext"
                style="top: -20px; left: 5px; position: relative;"
              />
              <span class="js_price_period">pro Monat</span>
            </div>
            <div
              class="flex column"
              v-if="orderProductrateplans.length > 0"
            >
              <p
                class="js_rate_list left"
                v-for="(productrateplan, index) in orderProductrateplans"
                :key="index"
              >Ab dem {{productrateplan.time}}. Monat {{String(productrateplan.value).replace('.',',')}} € pro Monat </p>
            </div>
          </div>
        </div>
        <order-button
          type="button_element"
          :label="label?label:'Direkt bestellen'"
          class="flex center"
          :inverted="whiteBtn"
          v-on:buttonClicked="trackAddToBasketButtonClick(), openOverlay()"
          v-if="overlay"
        />
        <order-button
          type="button_element"
          :label="label?label:'Direkt bestellen'"
          class="flex center"
          :inverted="whiteBtn"
          v-else
          v-on:buttonClicked="trackAddToBasketButtonClick(), addToBasket()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import umefn from '@/components/atoms/umefn.vue'
import orderButton from '@/components/atoms/buttonElement.vue'

export default {
  name: 'addToBasketButton',
  components: {
    umefn,
    orderButton
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
    renderStyle: {
      type: String,
      required: false
    },
    salesId: {
      type: Number,
      required: false
    },
    whiteBtn: {
      type: Boolean,
      required: false
    },
    overlay: {
      type: Boolean,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    legaltext: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      toggleValue: ''
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
    },
    orderValue () {
      return (this.calculateOrderValue === 0)
        ? '0,00'
        : String(this.calculateOrderValue).replace('.', ',')
    },
    orderValueArray () {
      // return an array of [0] full euro and [1] cents amount
      let tempValue = this.calculateOrderValue
      let returnArray = []
      if (tempValue === 0) {
        returnArray[0] = '0'
        returnArray[1] = '00'
      } else {
        returnArray[0] = String(tempValue).substring(0, String(tempValue).length - 3) // 3 because the dot counts as character + cents
        returnArray[1] = String(tempValue).substring(String(tempValue).length - 2) // just the last digits means only the cents
      }
      return returnArray
    },
    optionLegaltext () {
      let helperArray = []
      if (this.orderCollection.length > 1) {
        for (let i = 1; i < this.orderCollection.length; i++) {
          helperArray.push(this.orderCollection[i].legaltext)
        }
      }
      // if we find a produkt in the total order collection that is a BB product
      let doWeBB = ([['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1']].find(sku => {
        if (sku[0] === this.orderCollection[0].skus[0]) {
          return sku
        }
      }))
      // and we have a horizon tv on the 2nd spot in the order array
      if (this.orderCollection.length > 1 && doWeBB && this.orderCollection[1].skus[0] === 'HRZ_TV_0420_1') {
        // then remove the htv legaltext from the legaltext requirement
        helperArray.splice(0, 1)
      }
      return helperArray
    },
    monthlyPayment () {
      let helperBoolean = true
      if (!this.orderCollection[0].monthly_price) {
        helperBoolean = false
      }
      return helperBoolean
    },
    calculateOrderValue () {
      let tempValue = 0
      for (let index = 0; index < this.orderCollection.length; index++) {
        if (this.orderCollection[index].monthly_price) {
          tempValue += Math.round(this.orderCollection[index].monthly_price * 100)
        } else {
          tempValue += Math.round(this.orderCollection[index].upfront_price * 100)
        }
      }
      return tempValue / 100
    },
    orderProductrateplans () {
      let tempArray = []
      let productsWithRateplan = this.orderCollection.filter(product => product.productrateplans)
      // sort rateplans (special case RIP 50 + Horizon tv)
      productsWithRateplan.sort(function (a, b) {
        return a.monthOfPriceChange - b.monthOfPriceChange
      })

      if (productsWithRateplan.length > 0) {
        let helperValue = 0 // our calculated costs for the current price change
        let repeatFor = productsWithRateplan.length // the maximum amount of recalculations based on the amount of products that have a price change
        let repetition = 0 // since one products is the minimum requirement, we start our counter at the start of the array index
        do { // run the loop at least once, for that we have the do while loop
          let counter = 0 // we allow at least one addition of the productrateplanss
          for (let index = 0; index < this.orderCollection.length; index++) { // calculate over all products in the orderCollection the value
            // if our amount of repetitions is smaller or equal to the amounts of rounds we have to go for
            // and if the current product in orderCollection has an index inside of the products with PRP
            if (productsWithRateplan.indexOf(this.orderCollection[index]) > -1 && counter <= repetition) {
              // then add the productrateplan amount to the total cost
              helperValue += Math.round(this.orderCollection[index].productrateplans * 100)
              counter++
            } else {
              // if not, add the monthly_price to the total cost or the upfront price if no monthly_cost is provided
              if (this.orderCollection[index].monthly_price) {
                helperValue += Math.round(this.orderCollection[index].monthly_price * 100)
              } else helperValue += Math.round(this.orderCollection[index].upfront_price * 100)
            }
          }
          tempArray.push(
            {
              time: productsWithRateplan[repetition].monthOfPriceChange,
              value: helperValue / 100 // divide by 100 to get the decimal amount again
            }
          )
          helperValue = 0 // reset helperValue at the end for a new round of cost calculation
          repetition++
        } while (repeatFor > repetition) // we repeat as long as we have rounds left defined by the amount of products that have a productrateplan
      }
      return tempArray
    }
  },
  methods: {
    renderCurrentBasket (currentBasket = []) {
      // TODO: Use helper for this peculiar formatting (similarly used in trackGenericPage)?
      // return currentBasketArr[0].sku
      // Observe slight difference (number) in multiple products string formatting and leading semicolon.
      let skuList = ''
      let priceTotal = 0
      if (currentBasket.length > 1) {
        // For several products: ';2P_JUMP_150_12M_1;1;19,99,;Power_Upload_1;1;2,99,;Telefon_Komfort_1;1;4,99,;BOOSTERSTART_1;1;2,99'
        for (let i = 0; i < currentBasket.length; i++) {
          skuList += ';'
          skuList += currentBasket[i].skus[0]
          skuList += ';1'
          if (currentBasket[i].monthly_price) {
            skuList += ';' + currentBasket[i].monthly_price
          } else {
            skuList += ';0.00'
          }
          if (i < currentBasket.length - 1) {
            skuList += ','
          }
          if (currentBasket[i].monthly_price) {
            priceTotal += parseFloat(
              currentBasket[i].monthly_price
            )
          } else {
            priceTotal += '0.00'
          }
        }
      } else {
        // For one product: ';2P_JUMP_150_12M_1;1;19.99'
        if (currentBasket[0].monthly_price) {
          priceTotal += parseFloat(
            currentBasket[0].monthly_price
          )
        } else {
          priceTotal += '0.00'
        }
        skuList = ';' + currentBasket[0].skus[0] + ';1' + ';' + priceTotal
      }
      return {
        skuList: skuList,
        priceTotal: priceTotal.toFixed(2)
      }
    },
    addToBasket () {
      this.$store.commit('emptyBasket')
      for (let index = 0; index < this.orderCollection.length; index++) {
        this.$store.commit('addToBasket', this.orderCollection[index])
        if (this.$data.DEBUG) {
          console.log(
            'putting ' + this.orderCollection[index].sku + ' into basket'
          )
        }
      }
      this.redirectUser()
    },
    redirectUser () {
      let targetURL =
        window.location
          .toString()
          .substring(0, window.location.toString().indexOf('#')) +
        '#/privatkunden/checkout_step1'
      if (this.salesId) {
        window.location.href =
          'https://scb.unitymedia.de/click?sales_id=' +
          this.salesId +
          '&redirect_to=' +
          targetURL
      } else {
        this.$router.push('/privatkunden/checkout_step1')
      }
    },
    trackAddToBasketButtonClick () {
      const cachedSncfPageName = window.sncf.pageName
      try {
        window.sncf.clearVars()
        window.sncf.linkTrackVars = 'eVar75,prop33,prop69,products,events'
        window.sncf.linkTrackEvents = 'scAdd,scOpen'
        window.sncf.events = 'scAdd,scOpen'
        window.sncf.products = this.renderCurrentBasket(
          this.orderCollection
        ).skuList
        window.sncf.eVar75 =
          '+' + this.renderCurrentBasket(this.orderCollection).priceTotal
        window.sncf.prop69 = window.CONFIG_BBCT.shopId
        window.sncf.pageName = cachedSncfPageName
        window.sncf.prop33 = window.sncf.pageName
        window.sncf.tl(true, 'o', 'add to basket')
        window.sncf.linkTrackVars = 'None'
        window.sncf.linkTrackEvents = 'None'
      } catch (e) {
        console.log()
      }
    },
    openOverlay () {
      const umeOverlay = document.querySelector('.ume-overlay')
      umeOverlay.classList.add('is-visible')
      // Set navigation background layer height to full page height
      umeOverlay.style.height = document.body.scrollHeight + 'px'
      this.$emit('openOverlay')
    }
  },
  mounted () {
    if (this.renderStyle === 'toggle-style') {
      this.toggleValue = this.skus[0]
    }
  }
}
</script>
