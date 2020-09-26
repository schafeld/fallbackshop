<template>
  <div class="mfdd-teaser-box">
    <div class="banner-text ">
      <div class="flex wrap space-evenly icons" style="min-width: 320px;">

        <div class="block promo-monthly-discount" v-if="bundleType === 'threePlay'">
          <p class="h4" style="font-size: 22px;">
            <strong>Nur noch bis 01.12.:</strong>
          </p>
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/fdami/type_5euro.png"
            width="100px"
          >
          <p class="h4">
            <strong>mtl. günstiger</strong><br>
            <span style="text-decoration: line-through;">
              <strong>29,99 €</strong>
            </span>
            <strong>24,99 €</strong>
            <sup>&nbsp;<umefn id="UMEFN_220" tooltipWrapperCss="left-tooltip"/></sup>
          </p>
        </div>

        <div class="block" v-if="this.$data.PROMOTION.otc">
          <p class="h4" style="font-size: 22px;">
            <strong>Nur noch bis 01.12.:</strong>
          </p>
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/fdami/type_0euro.png"
            width="100px"
          >
          <p class="h4 promo-text">
            <strong>Aktivierung<br>
            statt 69,99 €&nbsp;</strong>
            <umefn id="UMEFN_215" tooltipWrapperCss="left-tooltip"/>
          </p>
        </div>
        <div class="block" v-else-if="bundleType === 'twoPlay'">
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/oct/UM_Mobile_PDP_MWI_visual.png"
            width="180px"
          >
          <!-- "Freu dich auf mehr"
          -->
        </div>
      </div>
    </div>
    <!-- TODO: Fix this layout, drop inline styles! -->
    <div class="banner-text">

      <p class="h4" style="text-align: left; font-size: 22px; color: white;" v-if="bundleType === 'threePlay'">
        <strong>Immer dabei: deine Wechselgarantie</strong>
      </p>

      <ul class="check-list left">
        <li style="font-size: 16px; font-weight: normal;">
          Genieß dein Red Internet and Phone Paket 6 Monate für 19,99 €
          <umefn tooltipWrapperCss="left-tooltip" id="UMEFN_234"/> mtl.
        </li>
        <li style="font-size: 16px; font-weight: normal;">Auf Wunsch wechsle bis Ende des 6. Monats</li>
        <li style="font-size: 16px; font-weight: normal;">Surf dann ab 7. Monat im neuen Speed</li>
      </ul>
    </div>
  </div>
</template>
<script>
import umefn from '@/components/atoms/umefn.vue'
export default {
  name: 'mfddTeaser',
  components: {
    umefn
  },
  props: {
    bundleType: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.mfdd-teaser-box {
  background: linear-gradient(135deg, #00B0CA, #007C92);
  padding-top: 12px;
  padding-bottom: 15px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.mfdd-teaser-box.no-margin {
  margin-bottom: 0px;
}
p.h4 {
  font-size: 19px;
  color: white;
}
.banner-text {
  padding-left: 5%;
  min-height: 200px;
  padding-top: 20px;
}
ul.check-list.left li {
  font-size: 16px;
  color: white;
  text-align: left;
}
.check-list {
  padding-bottom: 0px;
}
.section-body .check-list {
  margin-top: 0px;
}
.promo-monthly-discount {
  margin-right: 20px;
}
@media screen and (max-width: 679px) {
  .mfdd-teaser-box p,
  .mfdd-teaser-box ul.check-list.left li {
    font-weight: bold;
    font-size: 1.9rem;
  }
}
@media screen and (max-width: 679px) {
  .mfdd-teaser-box {
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;
  }
  .mfdd-teaser-box.no-margin {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
  }
  .mfdd-teaser-box.no-margin div {
    float: none;
  }
}
@media screen and (max-width: 533px) {
  .mfdd-teaser-box {
    padding: 10px 30px;
  }
  .flex.wrap.space-evenly.icons {
    flex-direction: column;
  }
}
</style>
