<template>
  <div class="ume-compact grid">
    <div class="grid-col w-1of3 w-1of1-sm center-column-sm w-1of3-md align-center">
      <div class="gridcol parsys">
        <div class="richtext section">
          <div
            id="par_copy_of_modul_wrapper_2_modulcontent_flexible_grid_0_gridcol_richtext"
            class=""
            style="word-wrap:break-word;"
          >
            <div class="cspot">
              <div class="image">
                <img
                  src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/engineer-hi.svg"
                  width="80px"
                  height="80px"
                >
              </div>
              <div class="copy">
                Schnell angeschlossen:
                <br> Einfach &amp; unkomplizierte Installation
              </div>
              <a
                class="cta"
                href="//unitymedia.de/privatkunden/hilfe_service/hilfe_themen/installation/"
              >Mehr Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-col w-1of3 w-1of1-sm center-column-sm w-1of3-md align-center">
      <div class="gridcol_0 parsys">
        <div class="richtext section">
          <div
            id="par_copy_of_modul_wrapper_2_modulcontent_flexible_grid_0_gridcol_0_richtext"
            class=""
            style="word-wrap:break-word;"
          >
            <div class="cspot">
              <div class="image">
                <img
                  src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/my-vodafone-hi.svg"
                  width="80px"
                  height="80px"
                >
              </div>
              <div class="copy">
                Online Kundencenter:
                <br> Verwalte Deine Produkte und Rechnungen
              </div>
              <a
                class="cta"
                href="//unitymedia.de/kundencenter/"
              >Jetzt einloggen</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-col w-1of3 w-1of1-sm center-column-sm w-1of3-md align-center">
      <div class="gridcol_1 parsys">
        <div class="richtext section">
          <div
            id="par_copy_of_modul_wrapper_2_modulcontent_flexible_grid_0_gridcol_1_richtext"
            class=""
            style="word-wrap:break-word;"
          >
            <div class="cspot">
              <img
                src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/ICO_internetspeed_16_100-hi.svg"
                width="80px"
                height="80px"
              >
              <div class="copy">
                Schneller als mit (V)DSL surfen:
                <br> Die Vorteile der Kabel-Technologie
              </div>
              <a
                class="cta"
                href="//unitymedia.de/privatkunden/beratung/persoenliche-beratung/kabel-vs-dsl/"
              >Mehr Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cspot-Container',
  props: {
    boxSet: {
      type: Array,
      required: true
    }
  },
  computed: {
    boxSetObject () {
      let tempArray = []
      if (this.boxSet) {
        for (let index = 0; index < this.boxSet.length; index++) {
          tempArray[index] = this.$store.getters.getSingleCSpot(this.boxSet[index])[0]
        }
      }
      if (!tempArray) {
        tempArray = ''
      }
      return tempArray
    }
  }
}
</script>
<style scoped>
.cspot {
  margin: 0 0 20px;
  padding: 25px 20px 30px 20px;
  border: 1px solid #cccccc;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 190px;
  background-color: #ffffff;
}
.cspot .cta,
.cspot .copy {
  color: #333333;
  font-family: "VodafoneRg";
  text-align: center;
  line-height: 22px;
}
.cspot .copy {
  font-size: 16px;
}
.cspot .cta {
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
}
@media screen and (max-width: 979px) {
  .grid-col .parsys {
    width: 100%;
  }
}
</style>
