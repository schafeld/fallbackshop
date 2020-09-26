<template>
  <module-wrapper :darkBg="false">
    <div class="richtext section">
      <p
        class="h2a"
        style="text-align: center;"
      >Das ist Dein {{gigabit?'Gigabit-Produkt':''}}
        {{title}}</p>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_3">
        <!---->
      </div>
    </div>
    <div class="ume-relative section">
      <div class="ume-compact grid ">
        <div
          class="grid-col w-1of4 w-1of1-sm center-column-sm w-1of1-md center-column-md "
          v-if="!partials.tv && partials.internet"
        >
          <div class="gridcol parsys">
          </div>
        </div>
        <div
          class="grid-col"
          :class="{'w-1of4 w-1of1-sm center-column-sm w-1of2-md center-column-md': !partials.tv && partials.telephone, 'w-1of3 w-1of1-sm center-column-sm w-1of1-md center-column-md':partials.tv, 'w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md':!partials.tv && !partials.telephone}"
          v-if="partials.internet"
        >
          <div class="gridcol_0 parsys">
            <div class="image section">
              <div style="text-align: center;">
                <a
                  href="#"
                  target="_top"
                  class=""
                >
                  <img
                    src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/broadband-or-wifi-hi.svg"
                    class="center "
                    alt=""
                    id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_0_image"
                    width="100"
                    height="100"
                  >
                </a>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_0_richtext_572573608"
                class=""
                style="word-wrap:break-word;"
              >
                <p
                  class="h5"
                  style="text-align: center;"
                  v-if="gigabit"
                >Internet-Flatrate mit <br> Gigabit Geschwindigkeit</p>
                <p class="h5"
                  style="text-align: center;"
                  v-else>
                  Highspeed<br>Internet-Flatrate
                </p>
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_0_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <ul class="check-list" v-if="gigabit">
                  <li>Extraschnelles Internet: HD-Streaming, Online-Gaming und Cloud-Computing</li>
                  <li>Gleichzeitig surfen: mit mehreren Personen und Endgeräten</li>
                  <li>Zukunftsweisende Technologie: COAX-Glasfaser</li>
                </ul>
                <ul class="check-list" v-else>
                  <li>Zukunftsweisende Technologie: Glasfaser- und Koaxialkabel</li>
                  <li>Stabile Leitung: für hohe Internet-Geschwindigkeiten</li>
                </ul>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid-col"
          :class="{'w-1of4 w-1of1-sm center-column-sm w-1of2-md center-column-md': !partials.tv && partials.telephone, 'w-1of3 w-1of1-sm center-column-sm w-1of1-md center-column-md':partials.tv,}"
          v-if="partials.telephone"
        >
          <div class="gridcol_1 parsys">
            <div class="image section">
              <div style="text-align: center;">
                <a
                  href="#"
                  target="_top"
                  class=""
                >
                  <img
                    src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/call-hi.svg"
                    class="center "
                    alt=""
                    id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_1_image"
                    width="100"
                    height="100"
                  >
                </a>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_1_richtext_538742506"
                class=""
                style="word-wrap:break-word;"
              >
                <p
                  class="h5"
                  style="text-align: center;"
                >Telefon-Flatrate<br>ins deutsche Festnetz<br> </p>
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modulcontent_modul_wrapper_1065220487_modulcontent_flexible_grid_1815089311_gridcol_1_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <ul class="check-list">
                  <li>Sprachqualität: sehr gut</li>
                  <li>Rufnummern-Mitnahme:&nbsp;ganz einfach<br> </li>
                  <li>Auslandsoptionen: bequem hinzubuchen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid-col w-1of3 w-1of1-sm w-1of1-md "
          v-if="partials.tv"
        >
          <div class="gridcol_1 parsys">
            <div class="image section">
              <div style="text-align: center;">
                <a
                  href="#"
                  target="_top"
                  class=""
                >
                  <img
                    src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/tv-hi.svg"
                    class="center resp-img "
                    alt=""
                    id="par_modul_wrapper_742930219_modulcontent_flexible_grid_gridcol_1_image"
                    width="100"
                    height="100"
                  >
                </a>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modul_wrapper_742930219_modulcontent_flexible_grid_gridcol_1_richtext_1294827329"
                class=""
                style="word-wrap:break-word;"
              >
                <p
                  class="body-large"
                  style="text-align: center;"
                ><strong>Digitales Fernsehen in HD-Qualität</strong></p>
                <ul class="check-list">
                  <li style="font-size: 16px;"><strong>Brillante Bildqualität:</strong> auch bei den beliebtesten privaten Sendern</li>
                  <li style="font-size: 16px;"><strong>Horizon Go Free:</strong> zu Hause auf Smartphone und Tablet streamen</li>
                  <li style="font-size: 16px;"><strong>Horizon HD Recorder:</strong> für Aufnahmen, Apps, TV-Mediatheken</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  components: {
    moduleWrapper
  },
  props: {
    partials: {
      type: Object,
      required: true
    },
    gigabit: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
