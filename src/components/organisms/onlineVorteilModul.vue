<template>
  <div class="ume-relative">
    <div class="ume-section dark-bg">
      <div class="section-content online-vorteil-modul-c-BG">
        <div class="container">
          <div class="section-body">
            <div class="modulContent parsys">
              <div class="online-vorteil-modul-c">
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
                <div class="ume-relative section">
                  <div class="ume-compact grid ">
                    <div class="grid-col w-1of2 w-1of1-sm w-1of2-md ">
                      <div class="gridcol parsys">
                      </div>
                    </div>
                    <div class="grid-col w-1of2 w-1of1-sm w-1of2-md ">
                      <div class="gridcol_0 parsys">
                        <div class="richtext section">
                          <div
                            id="par_modul_wrapper_1680409583_modulcontent_flexible_grid_2081576523_gridcol_0_richtext"
                            class=""
                            style="word-wrap:break-word;"
                          >
                            <p class="h2a">Wer online bestellt,<br> kann noch mehr sparen</p>
                            <p class="body-large">Wir schenken Dir zusätzlich bis zu</p>
                            <p
                              class="h3"
                              style="font-size: 45px; font-weight: bold; line-height: 50px;"
                            >{{onlineVorteil}} € <sup>
                                <umefn id="UMEFN_235" /></sup></p>
                            <p class="body-large">Rechnungsgutschrift.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import umefn from '@/components/atoms/umefn.vue'
export default {
  components: {
    umefn
  },
  props: {
    doubleAdvantage: {
      type: Boolean,
      required: false
    },
    onlineVorteil: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.section-content.online-vorteil-modul-c-BG {
  background-size: 302px 320px, auto !important;
  background-position: calc(50% - 240px) 100%, center !important;
  background: url("//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_online-vorteil@2x.png"),
    linear-gradient(270deg, #ff0000, #e60000, #820000);
  background-position: left bottom, 0% 0%;
  background-size: auto auto, auto;
  background-repeat: no-repeat;
  padding-top: 0;
  padding-bottom: 0;
}

.online-vorteil-modul-c {
  padding-bottom: 0px;
}

@media screen and (max-width: 1379px) {
  .section-content.online-vorteil-modul-c-BG {
    background-position: bottom 50%, center !important;
  }

  .online-vorteil-modul-c {
    padding-bottom: 0px;
  }
}

@media screen and (max-width: 819px) {
  .section-content.online-vorteil-modul-c-BG {
    background-position: bottom right, center !important;
    background-size: 320px, auto !important;
  }

  .online-vorteil-modul-c {
    padding-bottom: 40px;
  }
}

@media screen and (max-width: 519px) {
  .section-content.online-vorteil-modul-c-BG {
    background-size: 80%, auto !important;
  }

  .online-vorteil-modul-c {
    padding-bottom: 50vw;
  }
}
</style>
