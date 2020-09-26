<template>
  <module-wrapper
    :dark-bg="false"
    background="url('//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Aktuelles/wechselvorteil/wechselvorteil_visual_desktop_lp@1,5x.png');"
    class="wechselvorteilBg"
  >
    <div class="richtext section">
      <div
        id="par_modul_wrapper_1621505373_modulcontent_richtext"
        class=""
        style="word-wrap:break-word;"
      >
        <p
          class="h1"
          style="text-align: center;"
        >Wechseln statt warten</p>
      </div>
    </div>
    <div class="ume-relative section">
      <div class="ume-compact grid ">
        <div class="grid-col w-1of3 w-1of1-sm w-1of1-md ">
          <div class="gridcol parsys">
            <div class="richtext section">
              <div
                id="par_modul_wrapper_1621505373_modulcontent_flexible_grid_gridcol_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <p class="h2">Entscheid Dich schon heute für Vodafone. Und nutz trotz laufendem DSL-Vertrag sofort ein neues Red Internet and Phone-Paket.<br> </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col w-2of3 w-1of1-sm w-1of1-md ">
          <div class="gridcol_0 parsys">
          </div>
        </div>
      </div>
    </div>
    <div class="wechselvorteil"></div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  components: { moduleWrapper }
}
</script>
<style>
.ume-relative.section.wechselvorteilBg .section-content {
  background-position: 70% 100% !important;
  background-repeat: no-repeat;
}
.wechselvorteil {
  padding-bottom: 350px;
}
@media screen and (max-width: 989px) {
  .ume-relative.section.wechselvorteilBg .section-content {
    background-size: 40% auto !important;
    background-position: 50% 100% !important;
  }
}
@media screen and (max-width: 819px) {
  .ume-relative.section.wechselvorteilBg .section-content {
    background-size: 100% auto !important;
  }
  .wechselvorteil {
    padding-bottom: 92vw;
  }
}
/* This needs style from Dcomm context, otherwise tooltips will appear broken. */
.tooltip__wechslervorteil {
  position: absolute;
  left: calc(70% + 50px);
  bottom: 315px;
  z-index: 2;
}
@media screen and (max-width: 989px) {
  .tooltip__wechslervorteil {
    left: calc(50% + 105px);
    bottom: 185px;
  }
}
@media screen and (max-width: 819px) {
  .tooltip__wechslervorteil {
    left: 78vw;
    bottom: 51vw;
  }
}
</style>
