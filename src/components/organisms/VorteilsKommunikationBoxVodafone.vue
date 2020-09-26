<template>
  <div
    class="component-fbx-vorteils-kommunikation mfdd-teaser-box dark-bg flex column "
    style="background: linear-gradient(135deg, #00B0CA, #007C92);"
  >
    <p class="h3">Das sind Deine Vorteile:</p>
    <div :class="{'flex row space-between':$data.window.width > 479,'flex column space-between':($data.window.width <= 479)}">
      <ul
        v-for="(promotion, id) in promotions"
        :key="id"
      >
        <li>
          <div v-if="promotion.promoCode === 'double-online-advantage'">
            <img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/System-Icons/saving_white.svg" />
            <p class="h4 bold">{{promotion.promoValue}} € Startguthaben bei<br />Online-Bestellung
              <umefn id="UMEFN_235" />
            </p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'otc-befreiung'">
            <img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vorteile/ICO_aktivierungsgebuehr.svg" />
            <p class="h4 bold">0 € Aktivierungsgebühr<br>nur noch bis 30.04.
              <umefn id="UMEFN_215" />
            </p>
          </div>
        </li>
        <li v-if="false">
          <div v-if="promotion.promoCode === 'threeplayPromo'">
            <img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vorteile/ICO_testthebest.svg" />
            <p class="h4 bold">Nur noch bis 30.04.:<br><span style="text-decoration: line-through;">29,98 €</span> 24,98 €
              <umefn id="UMEFN_220" />
            </p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'online-advantage'">
            <img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/System-Icons/saving_white.svg"
              width="75px"
            />
            <p class="h4 bold">{{promotion.promoValue}} € Startguthaben<br>bei Online-Bestellung
              <umefn id="UMEFN_235" />
            </p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'fdami'">
            <img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/System-Icons/wechselgarantie_white.svg"
              width="75px"
            />
            <p class="h4 bold">Wechselgarantie:<br />kostenlos Tarif wechseln
              <umefn id="UMEFN_234" />
            </p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'wechselvorteil'">
            <img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/System-Icons/hand-shake_white.svg"
              width="75px"
            />
            <p class="h4 bold">Wechselprämie: bis zu<br />12 Monate 0 € mtl.
              <umefn id="UMEFN_236" />
            </p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'student-advantage'">
            <img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vorteile/ICO_azubistudentenaktion.svg" />
            <p class="h4 bold">Einkaufsgutschein für<br />Azubis und Studenten</p>
          </div>
        </li>
        <li>
          <div v-if="promotion.promoCode === 'bonus-student-advantage'">
            <img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vorteile/ICO_azubistudentenaktion.svg" />
            <p class="h4 bold">Einkaufsgutschein für<br />Azubis und Studenten</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- TODO: Insert Besit RFS Check for CableMax 1000 products. -->
  </div>
</template>

<script>
import umefn from '@/components/atoms/umefn.vue'
export default {
  components: {
    umefn
  },
  props: {
    bundleType: {
      type: String,
      required: true
    },
    gradient: {
      type: String,
      required: false
    },
    promotions: {
      type: Array,
      required: true
    }
  },
  computed: {
    newGradient () {
      return 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), ' + this.gradient
    }
  }
}
</script>

<style scoped>
.mfdd-teaser-box {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  padding-top: 12px;
  padding-bottom: 15px;
  text-align: center;
  position: relative;
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

li {
  margin: 0 10px;
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
