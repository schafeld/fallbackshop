<template>
  <module-wrapper
    background="url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/wifi-module/visual_vf-hotspot@2x.png), linear-gradient(45deg, #007C92, #00B0CA);"
    :darkBg="true"
    backgroundRepeat="no-repeat"
    backgroundPosition="right 200px bottom 0px, center"
    backgroundSize="25%, auto"
  >
    <div class="ume-relative">
      <div class="ume-compact grid ">
        <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
          <div class="gridcol parsys">
            <div class="richtext section">
              <div
                id="par_flexible_grid_gridcol_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <p class="h2a">WifiSpot – Dein kostenloses WLAN für unterwegs</p>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_5">
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col w-2of3 w-1of1-sm w-2of3-md ">
          <div class="gridcol_0 parsys">
            <div class="richtext section">
              <div
                id="par_flexible_grid_gridcol_0_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <ul class="check-list">
                  <li style="font-size: 16px;">Große mobile Freiheit: kostenloses WLAN an insgesamt über 1 Million WifiSpots</li>
                  <li style="font-size: 16px;">Einmal einrichten, immer automatisch verbunden</li>
                  <li style="font-size: 16px;">Surf an unseren öffentlichen WifiSpots mit bis zu 150 Mbit/s</li>
                </ul>
              </div>
            </div>
            <div class="dcomm_button section">
              <div class="btnalign btnalign--left">
                <a
                  href="/privatkunden/internet/unitymedia-wifispot/wifi-fuer-unsere-kunden/"
                  target="_top"
                  id="par_flexible_grid_gridcol_0_dcomm_button"
                  class="btn btn--white"
                >
                  <span>Alle Infos zu WifiSpot</span>
                </a>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_5">
                <!---->
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col w-1of3 w-1of1-sm w-1of3-md ">
          <div class="gridcol_1 parsys">
          </div>
        </div>
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  name: 'wifispotInfoBox',
  components: {
    moduleWrapper
  },
  props: {
    gradient: {
      type: String,
      required: true
    }
  }
}
</script>
