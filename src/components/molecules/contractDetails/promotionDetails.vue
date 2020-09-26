<template>
  <tbody>
    <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Aktionen und Vorteile</p>
          </div>
        </div>
      </div>
    </th>
    <tr
      class
      data-widget="CustomerShow"
      data-show-for-customer="false"
      v-for="(promotion, index) in promotionList"
      :key="index"
    >
      <td
        style="width:25%"
        v-if="promotion.promoCode === 'otc-befreiung' || promotion.promoCode === 'online-advantage' || promotion.promoCode === 'double-online-advantage' || promotion.promoCode === 'wechselvorteil' || promotion.promoCode === 'student-advantage'"
      >
        {{promotion.title}}
        <umefn
          :id="promotion.legaltext"
          v-if="promotion.legaltext"
        />
      </td>
      <td
        style="width: 75%;"
        v-if="promotion.promoCode === 'otc-befreiung'"
      >
        0 € <sup>
          <umefn id="UMEFN_215" /></sup> statt 69,99 € Aktivierung – nur für kurze Zeit zusätzlich sparen
      </td>
      <td
        style="width: 75%;"
        v-else-if="promotion.promoCode === 'online-advantage'"
      >
        {{product.promoCodes[product.promoCodes.findIndex(i => i.promoCode === 'online-advantage' )].promoValue}} €
        <sup>
          <umefn id="UMEFN_235" /></sup>
      </td>
      <td
        style="width: 75%;"
        v-else-if="promotion.promoCode === 'double-online-advantage'"
      >
        {{product.promoCodes[product.promoCodes.findIndex(i => i.promoCode === 'double-online-advantage' )].promoValue}} €
        <sup>
          <umefn id="UMEFN_235" /></sup>
      </td>
      <td
        style="width: 75%;"
        v-else-if="promotion.promoCode === 'wechselvorteil'"
      >
        Sie sind noch gebunden an einen anderen Vertrag, möchten aber eigentlich nicht mehr warten? Wir bieten Ihnen bis zu 12 Monate ohne Grundgebühr – bei Wechsel von einem anderen Anbieter.
        <spacer setting="3" />
        <button-element
          type="dcomm_button"
          :linkTo="promotion.landingPage"
          label="Mehr Infos zur Wechselprämie"
        />
        <spacer setting="1" />
        Sie haben noch mehr als 12 Monate Restlaufzeit bei Ihrem jetzigen Anbieter oder wollen mit einem Wechsel noch warten? Lassen Sie sich von uns an Ihr Vertragsende erinnern.
      </td>
      <td
        style="width: 75%;"
        v-else-if="promotion.promoCode === 'student-advantage'"
      >
        <span v-html="contentWithValue(promotion.promoCode)" /><br>
        <a :href="promotion.landingPage">Weitere Infos</a>
      </td>
    </tr>
  </tbody>
</template>

<script>
import umefn from '@/components/atoms/umefn.vue'
import spacer from '@/components/atoms/spacer.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'promotionDetails',
  components: {
    umefn,
    buttonElement,
    spacer
  },
  props: {
    product: {
      type: Object,
      requried: true
    }
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
<style scoped>
tr td:nth-child(1) {
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: VodafoneBd, Arial, sans-serif;
}
</style>
