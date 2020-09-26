<template>
  <module-wrapper
    class="wechselvorteil-modul-BG"
    :darkBg="false"
    backgroundRepeat="no-repeat"
    background="url('//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_wechselvorteil_0euro@2x.png');"
  >
    <div class="spacer section">
      <div class="upc_spacer_height_4">
        <!---->
      </div>
    </div>
    <div class="ume-relative section">
      <div class="ume-compact grid ">
        <div class="grid-col w-1of2 w-1of1-sm w-1of1-md ">
          <div class="gridcol parsys">
            <div class="richtext section">
              <p class="h2a">Wechseln statt warten</p>
              <p class="body-large">Nutz {{family}} trotz laufendem DSL-Vertrag sofort.</p>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
            <div class="dcomm_button section">
              <div class="btnalign btnalign--left">
                <router-link
                  to="/privatkunden/angebote/aktionen-und-kampagnen/wechseln/"
                  target="_top"
                  id="par_modul_wrapper_2017807006_modulcontent_flexible_grid_gridcol_dcomm_button"
                  class="btn btn--grey"
                >
                  <span>Mehr erfahren</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wechselvorteil-modul"></div>
    <div class="spacer section">
      <div class="upc_spacer_height_4">
        <!---->
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
    family: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.wechselvorteil-modul-BG .section-content {
  background-position: 50vw 100% !important;
  background-size: 450px auto, auto !important;
}

.wechselvorteil-modul {
  padding-bottom: 0px;
}

@media screen and (max-width: 879px) {
  .wechselvorteil-modul-BG .section-content {
    background-size: 50vw auto, auto !important;
  }
}
@media screen and (max-width: 639px) {
  .wechselvorteil-modul-BG .section-content {
    background-position: bottom right, center !important;
    background-size: 320px, auto !important;
  }
}

@media screen and (max-width: 519px) {
  .section-content.wechselvorteil-modul-BG {
    background-size: 100% auto, auto !important;
  }

  .wechselvorteil-modul {
    padding-bottom: 40vw;
  }
}
</style>
