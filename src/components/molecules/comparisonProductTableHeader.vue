<template>
  <tr class="comparison-products">
    <!-- <td></td> -->
    <th
      v-for="(product, index) in workingProducts"
      :key="index"
      class="align-center th-4-columns"
      :class="'sku_' + product.skus[0]"
      :style="'width: ' + (100 / workingProducts.length) + '%;'"
      :data-sku="product.skus"
      :data-contract-duration-template="'Laufzeit: ' + product.contract_duration"
    >

      <div class="product-column-top">
        <!-- give extra height to titles that have a shorter title than the cutoff length in case of one or more too long titles -->
        <div
          class="headline-container"
          :class="{'useExtraHeight':useExtraHeight&&product.title.length < cutOffLength}"
        >
          <h3 class="h3 js_basket-box-headline bold">
            <router-link
              :to="product.url"
              :title="'Produktdetailseite ' + product.title"
            >
              <span class="product-title">{{product.title}}</span>
            </router-link>
          </h3>
        </div>

        <div
          class="comparison-table-copy"
          v-if="$data.RFSFALLBACK && (product.skus[0]==='2P_RIP_1000_500_1')"
        >
          Je nach Verfügbarkeit an Ihrem Wohnort<br>
          Bis zu 1000 Mbit/s Download und 50 Mbit/s Upload<br>
          ODER<br>
          Bis zu 500 Mbit/s Download und 20 Mbit/s Upload
        </div>
        <div
          class="comparison-table-copy"
          :class="{useExtraMargin}"
          v-else
        >
          Bis zu {{product.download}} MBit/s Download und {{product.upload}} MBit/s Upload
        </div>

        <div class="basket-box-wrapper">
          <div class="basket-box__price basket-box__price--above">
            <div class="basket-box__cents js_purchase_price js_price_cent">
              {{String(product.monthly_price).replace('.',',')}} €
            </div>
            <umefn
              :id="product.legaltext"
              tooltipWrapperCss="dark-asterisk"
              style="top: -20px; left: 5px; position: relative;"
            />
            <span class="js_price_period">pro Monat</span>
          </div>
        </div>

        <div
          class="js_rate_list"
          v-if="Array.isArray(product.productrateplans)"
        >
          <p
            class="size7 productrateplans"
            v-for="(rateplan, index) in product.productrateplans"
            :key="index"
          >
            <span>Ab dem {{product.monthOfPriceChange[index]}}. Monat {{String(rateplan).replace('.',',')}} mtl.</span>
          </p>
        </div>
        <div
          class="js_rate_list"
          v-else-if="product.productrateplans"
        >
          <p class="size7 productrateplans">
            <span>Ab dem {{product.monthOfPriceChange}}. Monat {{String(product.productrateplans).replace('.',',')}} mtl.</span>
          </p>
        </div>
        <div
          class="js_rate_list"
          v-else
        >
          <p class="size7 productrateplans">
            <span>&nbsp;</span>
          </p>
        </div>
        <p class="size7 contractTerms">
          <span class="js_contract_duration">Laufzeit: {{product.contract_duration}} Monate</span>
        </p>
        <span v-if="product.onlinePromotion">
          <online-advantage-teaser-mini-box
            :promoValue="product.onlinePromotionValue"
            :promotion="product.set==='twoPlay' && PROMOTION.dov"
          />
        </span>
        <add-to-basket-button
          :skus="product.skus"
          renderStyle="button-only"
          :label="$data.RFSFALLBACK && (product.skus[0] === '2P_RIP_1000_500_1')?'Mehr Infos':'Direkt Bestellen'"
          :overlay="$data.RFSFALLBACK && (product.skus[0] === '2P_RIP_1000_500_1')?true:false"
          v-on:openOverlay="showDialog()"
        />
      </div>
    </th>
    <cablemax-alternative-dialog
      :isVisible="visibleDialog"
      v-on:closeDialog="closeDialog()"
      :skus="set === 'threePlay'?['2P_RIP_1000_500_1', 'HRZ_TV_0420_1']:['2P_RIP_1000_500_1']"
    />
  </tr>
</template>
<script>
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
import umefn from '@/components/atoms/umefn.vue'
import onlineAdvantageTeaserMiniBox from '@/components/molecules/onlineAdvantageTeaserMiniBox.vue'
import cablemaxAlternativeDialog from '@/components/molecules/cablemaxAlternativeDialog.vue'
import closeNavigationOverlay from '@/helper/closeNavigationOverlay'

export default {
  name: 'comparisonProductTableHeader',
  components: {
    addToBasketButton,
    umefn,
    onlineAdvantageTeaserMiniBox,
    cablemaxAlternativeDialog
  },
  data () {
    return {
      productList: Object,
      visibleDialog: false,
      cutOffLength: 26
    }
  },
  props: {
    set: {
      type: String,
      required: true
    }
  },
  computed: {
    workingProducts () {
      let tempObject = []
      if (this.set !== 'topseller') {
        let tempSet = this.$store.getters.getSetinfoBySettitle(this.set)
        tempSet.skus.forEach(sku => {
          tempObject.push(this.$store.getters.getProduct(sku))
        })
      } else {
        tempObject = this.$store.getters.getTopsellers()
      }
      return tempObject
    },
    useExtraHeight () {
      let helperBoolean = false
      this.workingProducts.forEach(product => {
        if (product.title.length > this.cutOffLength) {
          helperBoolean = true
        }
      })
      return helperBoolean
    },
    useExtraMargin () {
      let helperBoolean = false
      this.workingProducts.forEach(product => {
        if (this.$data.RFSFALLBACK && (product.sku === '2P_RIP_1000_500_1')) {
          helperBoolean = true
        }
      })
      return helperBoolean
    }
  },
  methods: {
    showDialog () {
      this.visibleDialog = true
    },
    closeDialog () {
      this.visibleDialog = false
      closeNavigationOverlay()
    }
  }
}
</script>

<style>
.login-btn-wrapper.login-btn--comparison {
  margin: 0px;
}

.comparison-table table tr.comparison-products .login-button {
  bottom: 0px;
}
.comparison-products p {
  text-align: center;
}

.js_basket-box-headline {
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3rem;
  font-family: VodafoneBd, Arial, sans-serif;
}

.comparison-table table .comparison-table-price .tooltip {
  vertical-align: top;
  display: inline-block;
}
.basket-box-wrapper .basket-box__price .tooltip {
  position: absolute;
  margin-top: 9px;
  margin-left: 15px;
}
.tooltip {
  position: relative;
  white-space: normal;
  display: inline-block;
}

.comparison-table table .productrateplans,
.comparison-table table .contractTerms {
  margin-bottom: 0;
  margin-top: 0;
}
.comparison-table table .comparison-table-copy {
  margin-bottom: 20px;
}

.basket-box-wrapper {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  justify-content: center;
}
.basket-box-wrapper .basket-box__price.basket-box__price--above {
  margin-bottom: 10px;
  white-space: normal;
}
.basket-box-wrapper .basket-box__price {
  text-align: center;
  margin: -5px 0 10px;
}
.basket-box-wrapper .basket-box__amount {
  font-family: VodafoneBd, Arial, sans-serif;
  display: inline-block;
  font-weight: normal;
  font-size: 4.5rem;
  line-height: 5rem;
}
.basket-box-wrapper .basket-box__cents {
  font-family: VodafoneBd, Arial, sans-serif;
  display: inline-block;
  font-weight: normal;
  font-size: 4.5rem;
  line-height: 5rem;
}
.basket-box-wrapper
  .basket-box__price.basket-box__price--above
  .js_price_period {
  font-family: VodafoneRg, Arial, sans-serif;
  margin-left: 12px;
  font-size: 1.6rem;
}

.product-column-top .headline-container a:link {
  text-decoration: none;
}
.comparison-table
  table
  tr.comparison-products
  .headline-container.useExtraHeight {
  padding-bottom: 55px;
}
.comparison-table table .comparison-table-copy.useExtraMargin {
  margin-bottom: 66px;
}

.product-title {
  width: 86%;
  display: block;
  margin: 0 auto;
}
</style>
