<template>
  <module-wrapper
    :background="product.gradient"
    :darkBg="false"
  >
    <div class="section-header">
      <h2 class="h2">Sie möchten nicht alleine mit Highspeed surfen?</h2>
    </div>
    <div class="section-body">
      <div class="modulContent parsys">
        <div class="ume-relative section">
          <div class="ume-compact grid">
            <div class="grid-col w-1of3 w-1of1-sm center-column-sm w-1of1-md center-column-md">
              <div class="gridcol parsys">
                <div class="image section">
                  <div class="textcenter">
                    <div class="floatleft None clearboth">
                      <!--
                        currently no plans for a mgm promotion
                      <img
                        v-if="PROMOTION.mgm && mgmObject.mgmSku === '2P_FLY_400_12M_1'"
                        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/juni/mgm/VIS_MGM_Praemien_doppelt_empfehlung_200_A.png"
                        alt="200 Euro in vier Scheinen"
                        data-upc-tooltip-type="none"
                        title
                        data-upctooltip
                      >
                      <img
                        v-else-if="PROMOTION.mgm && mgmObject.mgmSku === '3PLAY_FLY_400'"
                        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/juni/mgm/VIS_MGM_Praemien_doppelt_empfehlung_300_A.png"
                        alt="300 Euro in vier Scheinen"
                        data-upc-tooltip-type="none"
                        title
                        data-upctooltip
                      >
                        v-else
                      -->
                      <img
                        :src="'https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/mgm/VIS_MGM_Praemien_' + mgmObject.mgmValue[0] + '.png'"
                        :alt="mgmObject.mgmValue[0] + ' Euro in Scheinen'"
                        data-upc-tooltip-type="none"
                        title
                        data-upctooltip
                      >
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
            <div class="grid-col w-2of3 w-1of1-sm center-column-sm w-1of1-md center-column-md align-left">
              <div class="gridcol_0 parsys">
                <div class="richtext section">
                    <ul class="check-list">
                      <li>Ansteigende Geldprämien bei Mehrfachempfehlungen</li>
                      <li>
                        Ganz einfach mit Geworbenem teilen
                        <span class="tooltip js_tooltip">
                          <span class="tooltip-icon icon-info"></span>
                          <span class="tooltip-layer">Sie wollen die Prämie mit Ihrem Freund oder Bekannten teilen? Kein Problem, Sie können dies bereits online festlegen.</span>
                        </span>
                      </li>
                      <li>
                        Überweisung auf Ihr Konto
                        <br>(und bei Prämienteilung auch auf das Konto Ihres Freundes)
                      </li>
                      <li v-if="PROMOTION.mgm && (mgmObject.mgmSku === '2P_FLY_400_12M_1' || mgmObject.mgmSku === '3PLAY_FLY_400')">
                        DOPPELTE Prämie kassieren.
                        <span class="tooltip js_tooltip left-tooltip">
                          <span class="btn asterisk-orb tooltip-icon"></span>
                          <span class="tooltip-layer">Verlängerung vorbehalten</span>
                        </span>
                      </li>
                      <li v-else>
                        {{mgmObject.mgmValue[0]}} € Prämie kassieren
                        <br>
                      </li>
                    </ul>

                    <p>
                      <router-link to="/privatkunden/angebote/aktionen/kunden-werben/praemien">
                        Geldprämien aller Produkte und Teilnahmebedingungen
                      </router-link>
                    </p>
                </div>
                <mgm-button :mgmSku="mgmObject.mgmSku" :mediacode="$data.window.width < 479 ? 'FBXMOB' : 'FBXPS'"/>
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
import mgmButton from '@/components/molecules/mgmButton.vue'
export default {
  name: 'mgmBox',
  components: {
    moduleWrapper,
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
    },
    backgroundStyle () {
      return (
        'background: #0e9a98;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0e9a98, endColorstr=#08346c);background: ' +
        this.product.gradient +
        ';background-position: 0% 0%;background-size: auto;background-repeat: no-repeat;'
      )
    }
  }
}
</script>
