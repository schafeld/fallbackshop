<template>
    <div class="component-fbx-section-promo-mgm ume-relative section">
        <div class="ume-section light-bg comp-prefix-d0b70290-b549-4025-9e4f-c792581a508f/par/modul_wrapper_2069896928"
            data-title="Gut zu wissen">
            <div class="section-content" style="background: #FFFFFF;background-repeat: no-repeat; ">
            <div class="container">

                <div class="section-body">
                <div class="modulContent parsys">

                    <div class="spacer section">
                    <div class="upc_spacer_height_5">
                        <!---->
                    </div>
                    </div>
                    <div class="spacer section">
                    <div class="upc_spacer_height_5">
                        <!---->
                    </div>
                    </div>
                    <div class="headline parbase section">
                    <h2 class="h2" style="text-align: center;">
                        Freunde werben und Prämie sichern
                    </h2>
                    </div>
                    <div class="spacer section">
                    <div class="upc_spacer_height_3">
                        <!---->
                    </div>
                    </div>
                    <div class="reference parbase section">
                    <div class="cq-dd-paragraph">
                        <div class="ume-relative">
                        <div class="ume-compact grid ">
                            <div class="grid-col w-1of3 w-1of1-sm w-1of1-md ">
                            <div class="gridcol parsys">
                                <div class="image section">
                                <div class="textcenter">
                                    <div class="floatleft lgi-img-effect-none clearboth">
                                    <img
                                        src="https://www.unitymedia.de/privatkunden/showcase-komponenten/referenzmodule/praemienaktion-cablemax-1000/_jcr_content/par/modul_wrapper/modulContent/flexible_grid/gridcol/image.img.png/1490959632505.png"
                                        id="par_modul_wrapper_modulcontent_flexible_grid_gridcol_image"
                                        data-upc-tooltip-type="none">
                                    </div>
                                </div>
                                <div class="clear"></div>
                                </div>
                            </div>
                            </div>
                            <div class="grid-col w-2of3 w-1of1-sm w-1of1-md align-left">
                                <div class="gridcol_0 parsys">
                                    <div class="richtext section">
                                        <div id="par_modul_wrapper_modulcontent_flexible_grid_gridcol_0_richtext"   style="word-wrap:break-word;">
                                            <ul class="check-list">
                                            <li>Empfiehl unsere Produkte weiter.<br> </li>
                                            <li>Kassier 100 € Prämie.</li>
                                            <li>Freu dich auf Überweisung auf Dein Konto – und bei Prämienteilung auch auf das Deines
                                                Freundes. <span class="tooltip js_tooltip"><span
                                                    class="tooltip-icon icon-info"></span><span class="tooltip-layer">Du möchtest die
                                                    Prämie mit Deinem Freund oder Bekannten teilen? Kein Problem, Du kannst das schon
                                                    online festlegen.</span></span></li>
                                            <li>Hol Dir ansteigende Geldprämien bei Mehrfach-Empfehlungen.</li>
                                            </ul>
                                            <p>Wichtige Info für Dich: Unser Kundenwerbungsprogramm ist nur für Neukunden. Tarifwechsel
                                            und Eigenwerbung sind nicht möglich.</p>
                                            <p>
                                                <a data-action="Hyperlink" data-upc-tooltip-type="none"
                                                href="/privatkunden/angebote/aktionen/kunden-werben/"
                                                style="color: #333333;">Geldprämien aller Produkte und Teilnahmebedingungen</a>
                                            </p>
                                            <!-- TODO: MGM overlay needs rebranding styles. -->
                                            <mgm-button :mgmSku="mgmObject.mgmSku" :mediacode="$data.window.width < 479?'FBXMOB':'FBXPS'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
import mgmButton from '@/components/molecules/mgmButton.vue'

export default {
  name: 'mgmBox',
  components: {
    mgmButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    mgmObject () {
      return this.$store.getters.getMgmValueBySku(this.product.skus)
    }
  }
}
</script>
