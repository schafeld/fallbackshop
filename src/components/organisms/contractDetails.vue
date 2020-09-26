<template>
  <module-wrapper
    :background="background"
    backgroundPosition="top center"
    backgroundRepeat="no-repeat"
    backgroundSize="100%"
    :darkBg="false"
  >
    <div
      v-if="includeProductElements === 'full'"
      style="padding-bottom: 80px"
    />
    <div class="section-body">
      <div class="modulContent parsys">
        <div class="flexible_table_logged_in parbase section">
          <div class="table-scroll">
            <table class="table flexible-table">
              <tv-details-row
                :tvSet="product.set === 'threePlay'"
                v-if="includeProductElements === 'full'"
              />
              <internet-details-row
                :product="product"
                v-if="includeProductElements === 'full' && product.family !== 'mobile'"
              />
              <telephone-details-row v-if="includeProductElements === 'full' && product.family !== 'mobile' && product.family !== 'Internet'" />
              <mobile-details-row v-if="includeProductElements === 'full' && product.family !== 'mobile'" />
              <hardware-details-row
                :hardware="product.hardware"
                v-if="includeProductElements === 'full' && product.family !== 'mobile'"
              />
              <contract-details-row
                :product="product"
                :headerless="includeProductElements === 'full'"
              />
              <promotion-details-row
                :product="product"
                :headerless="includeProductElements === 'full'"
                v-if="product.promoCodes && $data.window.width > 479"
              />
              <promotion-details-mobile-row
                :product="product"
                v-if="product.promoCodes && $data.window.width < 479"
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import contractDetailsRow from '@/components/molecules/contractDetails/contractDetails.vue'
import hardwareDetailsRow from '@/components/molecules/contractDetails/hardwareDetails.vue'
import internetDetailsRow from '@/components/molecules/contractDetails/internetDetails.vue'
import mobileDetailsRow from '@/components/molecules/contractDetails/mobileDetails.vue'
import promotionDetailsRow from '@/components/molecules/contractDetails/promotionDetails.vue'
import promotionDetailsMobileRow from '@/components/molecules/contractDetails/promotionDetailsMobile.vue'
import telephoneDetailsRow from '@/components/molecules/contractDetails/telephoneDetails.vue'
import tvDetailsRow from '@/components/molecules/contractDetails/tvDetails.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'

export default {
  name: 'contractDetails',
  props: {
    product: {
      type: Object,
      required: true
    },
    includeProductElements: {
      type: String,
      required: false
    },
    background: {
      type: String,
      required: true
    }
  },
  components: {
    contractDetailsRow,
    hardwareDetailsRow,
    internetDetailsRow,
    mobileDetailsRow,
    promotionDetailsRow,
    promotionDetailsMobileRow,
    telephoneDetailsRow,
    tvDetailsRow,
    moduleWrapper
  },
  computed: {
    promotionList () {
      let promotionArray = []
      this.product.promoCodes.forEach(promoCode => {
        promotionArray.push(
          this.$store.getters.getPromotionByPromocode(promoCode.promoCode)
        )
      })
      return promotionArray
    }
  },
  methods: {
    contentWithValue (promoCode) {
      if (promoCode) {
        let tempIndex = this.product.promoCodes.findIndex(
          i => i.promoCode === promoCode
        )
        let tempText = this.promotionList[this.promotionList.findIndex(i => i.promoCode === promoCode)].content
        tempText = tempText.replace(
          '{{VALUE}}',
          this.product.promoCodes[tempIndex].promoValue
        )
        return tempText
      } else {
        return ''
      }
    }
  }
}
</script>
