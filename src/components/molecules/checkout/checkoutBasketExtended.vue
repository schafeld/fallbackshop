<template>
  <div class="reviewordersummary section">
    <div class="cart new-cart">
      <div class="basketProductItem"></div>
      <table>
        <thead class="dark-bg">
          <tr>
            <th>
              <h3 class="cart-headline"></h3>
            </th>
            <th>einmalig</th>
            <th>monatlich</th>
          </tr>
        </thead>
        <tbody v-for="(product, index) in basket" :key="index">
          <tr class="main-product">
            <td>
              <!-- Product Details -->
              <div class="product-details" :data-product-title="product.title">
                <!--Product Title-->
                <h4 class="product-headline">
                  {{product.title}}
                  <tooltip v-if="product.bullets" :content="getChecklist(product.bullets)" />
                  <sup>{{index+ 1}}</sup>
                </h4>
                <!--Handset Details-->
                <!-- Legal texts (Contract duration, Total price, Rates) -->
                <span
                  v-if="product.productrateplans || product.contract_duration"
                  class="product-info-legal"
                >
                  <span
                    v-if="product.productrateplans"
                  >Ab dem {{product.monthOfPriceChange}}. Monat {{product.productrateplans}} €</span>
                  <br />
                  <span
                    v-if="product.contract_duration"
                  >Mindestvertragslaufzeit: {{product.contract_duration}} Monate</span>
                </span>
                <!-- OTC Promotion Details -->
                <div v-for="(promos, index) in promotionSet[index]" :key="index">
                  <div class="product-bubble" v-if="promos">
                    {{promos.tagline}}
                    <umefn :id="promos.legaltext" />
                  </div>
                </div>
                <!-- Replaced child message DCOMMR2-286 -->
              </div>
            </td>
            <td class="upfront-price"></td>
            <td class="monthly-price" v-if="product.monthly_price">{{String(product.monthly_price).replace('.',',')}} €</td>
            <td class="monthly-price" v-else>0,00 €</td>
          </tr>

          <tr v-if="product.upfront_price" class="main-product product-fee product-border">
            <td>
              <div class="product-details">
                <h5 class="product-headline">Aktivierungsgebühr</h5>
              </div>
            </td>
            <td v-if="product.upfront_price" class="upfront-price">{{String(product.upfront_price).replace('.',',')}} €</td>
            <td class="monthly-price"></td>
          </tr>
        </tbody>
        <tfoot class="dark-bg">
          <tr>
            <th>
              <span class="left">zzgl. 9,99€ Lieferpauschale (Versand/Techniker)</span>
              <br />
              <span class="left">Alle Preise inkl. 19% MwSt.</span>
            </th>
            <th>einmalig</th>
            <th>monatlich</th>
          </tr>
          <tr class="totalcost">
            <th>
              <h3 class="cart-headline">Gesamtkosten</h3>
            </th>
            <td>{{collectiveOneTimePayments}} €</td>
            <td>{{initialPrice}} €</td>
          </tr>
          <!-- Rates -->
          <tr v-for="(productrateplans, index) in orderProductrateplans" :key="index" class="laterprice">
            <th colspan="2">Ab dem {{productrateplans.time}}. Monat</th>
            <td>{{String(productrateplans.value).replace('.',',')}} €</td>
          </tr>
          <!-- Credit List -->
          <tr class="promotion" v-if="onlineAdvantage">
            <th colspan="3">
              <span class="icon-green-tick">{{onlineAdvantage.title}}</span>
              <tooltip
                :content="'<strong>Rechtliche Hinweise</strong><br>' + onlineAdvantage.fulltext.content"
              />
              <span class="starting-credit-value">Rechnungsguthaben von {{onlineAdvantage.value}} €</span>
            </th>
          </tr>
          <!-- Display Coupon Section -->
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import umefn from '@/components/atoms/umefn.vue'
export default {
  name: 'CheckoutExtendedBasket',
  components: {
    tooltip,
    umefn
  },
  computed: {
    basket () {
      return this.$store.getters.getBasket
    },
    promotionSet () {
      var helperProductArray = []
      this.basket.forEach(product => {
        var helperPromotionArray = []
        if (product.promoCodes) {
          product.promoCodes.forEach(promotion => {
            let helperPromotion = this.$store.getters.getPromotionByPromocode(
              promotion.promoCode
            )
            if (helperPromotion.tagline) {
              helperPromotionArray.push(helperPromotion)
            }
          })
          helperProductArray.push(helperPromotionArray)
        } else helperProductArray.push(null)
      })
      return helperProductArray
    },
    initialPrice () {
      let tempPrp = 0
      for (let index = 0; index < this.basket.length; index++) {
        if (this.basket[index].monthly_price) {
          tempPrp += this.basket[index].monthly_price * 100
        }
      }
      return String(tempPrp / 100).replace('.', ',')
    },
    laterPrice () {
      let tempPrp = 0
      for (let index = 0; index < this.basket.length; index++) {
        if (this.basket[index].productrateplans) {
          tempPrp += this.basket[index].productrateplans * 100
        } else {
          if (this.basket[index].monthly_price) {
            tempPrp += this.basket[index].monthly_price * 100
          }
        }
      }
      return String(tempPrp / 100).replace('.', ',')
    },
    collectiveOneTimePayments () {
      let tempPrp = 0
      for (let index = 0; index < this.basket.length; index++) {
        if (this.basket[index].upfront_price) {
          tempPrp += this.basket[index].upfront_price * 100
        }
      }
      return String(tempPrp / 100).replace('.', ',')
    },
    onlineAdvantage () {
      let helperPromotion = null
      if (this.basket[0]) {
        let helperArray = this.basket[0].promoCodes
        if (helperArray) {
          helperArray.forEach(promo => {
            if (promo.promoCode === 'online-advantage') {
              helperPromotion = this.$store.getters.getPromotionByPromocode(
                promo.promoCode
              )
              helperPromotion.value = promo.promoValue
              helperPromotion.fulltext = this.$store.getters.getLegalText(
                helperPromotion.legaltext
              )
            } else if (promo.promoCode === 'double-online-advantage') {
              helperPromotion = this.$store.getters.getPromotionByPromocode(
                promo.promoCode
              )
              helperPromotion.value = promo.promoValue
              helperPromotion.fulltext = this.$store.getters.getLegalText(
                helperPromotion.legaltext
              )
            }
          })
        }
      }
      return helperPromotion
    },
    orderProductrateplans () {
      let tempArray = []
      let productsWithRateplan = this.basket.filter(product => product.productrateplans)
      if (productsWithRateplan.length > 0) {
        let helperValue = 0 // our calculated costs for the current price change
        let repeatFor = productsWithRateplan.length // the maximum amount of recalculations based on the amount of products that have a price change
        let repetition = 0 // since one products is the minimum requirement, we start our counter at the start of the array index
        do { // run the loop at least once, for that we have the do while loop
          let counter = 0 // we allow at least one addition of the productrateplanss
          for (let index = 0; index < this.basket.length; index++) { // calculate over all products in the basket the value
            // if our amount of repetitions is smaller or equal to the amounts of rounds we have to go for
            // and if the current product in basket has an index inside of the products with PRP
            if (productsWithRateplan.indexOf(this.basket[index]) > -1 && counter <= repetition) {
              // then add the productrateplan amount to the total cost
              helperValue += Math.round(this.basket[index].productrateplans * 100)
              counter++
            } else {
              // if not, add the monthly_price to the total cost or the upfront price if no monthly_cost is provided
              if (this.basket[index].monthly_price) {
                helperValue += Math.round(this.basket[index].monthly_price * 100)
              } else helperValue += Math.round(this.basket[index].upfront_price * 100)
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
    getChecklist (helperArray) {
      if (helperArray) {
        let helperString = ''
        helperString += '<ul class="check-list">'
        helperArray.forEach(bullet => {
          helperString += '<li>' + bullet + '</li>'
        })
        helperString += '</ul>'
        return helperString
      } else return ''
    }
  }
}
</script>

<style>
</style>
