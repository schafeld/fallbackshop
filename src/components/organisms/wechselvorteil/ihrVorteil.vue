<template>
  <div class="howToModule">
    <module-wrapper
    class="peoepleMotiveBg"
      background="url('//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Aktuelles/wechselvorteil/Fatboy.png');" backgroundPosition="right bottom" backgroundSize="auto" backgroundRepeat="no-repeat"
    >
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of5-sm w-1of5-md align-center">
            <div class="gridcol parsys">
            </div>
          </div>
          <div class="grid-col w-1of1 w-3of5-sm w-3of5-md align-center">
            <div class="gridcol_0 parsys">
              <div class="richtext section">
                <div
                  id="par_modul_wrapper_0_modulcontent_flexible_grid_gridcol_0_richtext"
                  class=""
                  style="word-wrap:break-word;"
                >
                  <p
                    class="h2a"
                    style="text-align: center;"
                  >Deine Vorteile beim Wechsel</p>
                </div>
              </div>
              <div class="spacer section">
                <div class="upc_spacer_height_3">
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div class="grid-col w-1of1 w-1of5-sm w-1of5-md align-center">
            <div class="gridcol_1 parsys">
            </div>
          </div>
        </div>
      </div>
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of2 w-1of1-sm w-1of1-md ">
            <div class="gridcol parsys">
              <div class="richtext section">
                <div
                  id="par_modul_wrapper_0_modulcontent_flexible_grid_0_gridcol_richtext_0"
                  class=""
                  style="word-wrap:break-word;"
                >
                  <p
                    class="h2"
                    style="font-family: VodafoneLt;"
                  >Darum bieten wir Dir die Wechselprämie:</p>
                  <p class="body-style">Kabel und DSL sind unterschiedliche Technologien, die in einem Haushalt parallel betrieben werden können. Weil wir davon überzeugt sind, dass Du bei uns im Kabelnetz zufrieden sein wirst, möchten wir Dir den Wechsel zu uns sofort ermöglichen. Und damit Du nicht doppelt zahlen, übernehmen wir die monatlichen Kosten für Dein neues Red Internet and Phone-Paket, solange Dein DSL-Vertrag noch läuft (max. 12 Monate).<br> </p>
                </div>
              </div>
              <div class="spacer section">
                <div class="upc_spacer_height_3">
                  <!---->
                </div>
              </div>
              <div class="spacer section">
                <div class="upc_spacer_height_3">
                  <!---->
                </div>
              </div>
              <div class="richtext section">
                <div
                  id="par_modul_wrapper_0_modulcontent_flexible_grid_0_gridcol_richtext"
                  class=""
                  style="word-wrap:break-word;"
                >
                  <p
                    class="h3"
                    style="font-family: 'VodafoneBd';"
                  >Deine Vorteile beim Wechsel von DSL- zum Kabelnetz</p>
                  <ul class="check-list check-list--copy">
                    <li>Stabiles und wenig störanfälliges Internet durch modernste COAX-Glasfaser-Technologie</li>
                    <li>Ultraschnelle Downloads mit bis zu 1000 Mbit/s</li>
                    <li>Leistungsstarkes WLAN mit Vodafone Station oder Horizon HD Recorder</li>
                    <li>WifiSpot: Dein kostenloses WLAN für unterwegs (auch im Ausland nutzbar)
                      <span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                          WifiSpot ist für unsere Internet-Kunden kostenlos verfügbar. Voraussetzung ist, dass Du den von uns zur Verfügung gestellten WLAN-Router nutzt. Und Du der Einrichtung des WifiSpot an diesem WLAN-Router nicht widersprochen hast.
                        </span></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-col w-1of2 w-1of1-sm w-1of2-md ">
            <div class="gridcol_0 parsys">
            </div>
          </div>
        </div>
      </div>
      <div class="people-motive"></div>
    </module-wrapper>
    <second-layer-kabel-vorteil />
  </div>
</template>
<script>
import secondLayerKabelVorteil from '@/components/molecules/kabelVsDslSecondLayer.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  name: 'ihrWechselvorteil',
  components: {
    secondLayerKabelVorteil,
    moduleWrapper
  }
}
</script>

<style>
.people-motive {
  padding-bottom: 100px;
}

@media screen and (max-width: 1579px) {
  .ume-relative.section.peoepleMotiveBg .section-content {
    background-position: calc(10% + 633px) 100% !important;
  }
}

@media screen and (max-width: 989px) {
  .ume-relative.section.peoepleMotiveBg .section-content {
    background-size: 40% auto !important;
    background-position: 50% 100% !important;
  }

  .people-motive {
    padding-bottom: 33vw;
  }
}

@media screen and (max-width: 819px) {
  .ume-relative.section.peoepleMotiveBg .section-content {
    background-size: 100% auto !important;
  }

  .people-motive {
    padding-bottom: 87vw;
  }
}
</style>
