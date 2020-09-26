<template>
  <div class="tabs__container js_tabs-views">
    <div
      class="tabs__content js_tabs-content-item"
      style="display: block;"
    >
      <div class="tab0 parsys">
        <div class="content_logged_in_aware parbase section">
          <div class="forallcontent parsys">
            <div class="flexible_table parbase section">

              <div
                class="table-scroll"
                v-if="dataValue.mgmSkus.length > 0"
              >
                <table class="table flexible-table table-fixed">
                  <tbody>
                    <tr>
                      <td style="width:20%">
                        <p>
                          <span class="h3">
                            <strong>Ihre {{dataValue.title}}-Prämien</strong>
                          </span>
                        </p>
                      </td>

                      <td style="width: 15%; vertical-align: bottom;">
                        <div style="text-align: center;">
                          <strong>Erste</strong>
                          erfolgreiche
                          <br>Empfehlung
                        </div>
                      </td>
                      <td style="width: 15%;">
                      </td>
                    </tr>

                    <tr
                      v-for="(tablerow, index) in tableArray"
                      :key="index"
                    >
                      <th style="width: 20%;">
                        <div>
                          <p style="font-size: 24px;">
                            <strong v-html="skuToLabel(tablerow.skus)"></strong>
                          </p>
                        </div>
                        <div>
                          <!--
                          <img
                            :src="'//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/mobile-journey/mgm-box/VIS_MGM_Praemien_'  + tablerow.mgmValue[0] + '.png'"
                            class="center resp-img"
                            :alt="tablerow.mgmValue[0] + ' Euro in Schein(en)'"
                          >
                          -->
                        </div>
                      </th>
                      <th
                        v-for="(mgmValue, index) in tablerow.mgmValue"
                        :key="index"
                        style="width: 15%;"
                      >
                        <div style="text-align: center;">
                          <strong>
                            <span>{{mgmValue}} €</span>
                            <span v-if="tablerow.bonus"> für Sie + {{tablerow.bonus}} € für Ihren geworbenen Freund</span>
                          </strong>
                        </div>
                      </th>

                      <th style="width: 15%;">
                        <mgm-button :mgmSku="tablerow.mgmSku" :mediacode="$data.window.width < 479?'FBXMOB':'FBXKWK'"/>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-else>
                <!-- Show this content if there are no SKUs configured, currently only for businesss customers. -->
                <div
                  class="tabs__content js_tabs-content-item"
                  style=""
                >
                  <div class="tab3 parsys">
                    <div class="richtext section">
                      <p class="h4">
                        Unsere Business-Tarife können Sie exklusiv in unserem Empfehlungsportal für Geschäftskunden weiterempfehlen:
                      </p>
                    </div>
                    <div class="image section">
                      <div style="text-align: center;">
                        <a
                          href="https://aktionen.unitymediabusiness.de/kunden-werben?CMP=b2c_unitymedia_internal_b2c-mgm-subpage&amp;source=consumer"
                          target="_blank"
                          class=""
                        >
                          <img
                            src="https://www.unitymedia.de/content/dcomm-unitymedia-de/de/privatkunden/angebote/aktionen/kunden-werben/praemien/_jcr_content/par/modul_wrapper/modulContent/tabs/tab3/image.img.png/1551877012926.png"
                            class="center "
                            alt="Unitymedia Business - Jetzt Business-Tarife empfehlen!"
                            id="par_modul_wrapper_modulcontent_tabs_tab3_image"
                          >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ume-relative section">
                  <div class="ume-compact grid ">
                    <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md ">
                      <div class="gridcol parsys">
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                        <div class="richtext section">
                          <div
                            id="par_modul_wrapper_modulcontent_flexible_grid_gridcol_richtext_0"
                            class=""
                            style="word-wrap:break-word;"
                          >
                            <div
                              style="background-image: url('https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/Teaser/Kunden_werben_vis_01.jpg'); background-repeat: no-repeat; background-size: 70%; background-position: right; height: 300px;"
                              class="box teaser-box m light-bg w-1of1 default left"
                            >
                              <div class="box-body">
                                <div class="w-1of2">
                                  <div class="h4">
                                    <div class="p">
                                      Was zeichnet Unitymedia aus?
                                    </div>
                                  </div>
                                  <div class="p">
                                    Hier finden Sie die Übersicht Ihrer
                                    <br> Empfehlungen und bereits
                                    <br> erhaltenen Prämien.
                                  </div>
                                </div>
                                <div
                                  class="teaser-cta"
                                  style="margin-top: 10%;"
                                >
                                  <div class="btn-prefix">
                                    <a
                                      data-upc-tooltip-type="none"
                                      class="btn"
                                      href="https://www.unitymedia.de/privatkunden/aktionen/kunden_werben/empfehlen/vorteile/"
                                    >
                                      Mehr Infos
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md ">
                      <div class="gridcol_0 parsys">
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                        <div class="richtext section">
                          <div
                            id="par_modul_wrapper_modulcontent_flexible_grid_gridcol_0_richtext_0"
                            class=""
                            style="word-wrap:break-word;"
                          >
                            <div
                              class="box teaser-box m light-bg w-1of1 default left"
                              style="background-image: url('https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/Teaser/Kunden_werben_vis_04.jpg'); background-repeat: no-repeat; background-size: 70%; background-position: right; height: 300px;"
                            >
                              <div class="box-body">
                                <div class="w-1of2">
                                  <div class="h4">
                                    <div class="p">
                                      Haben Sie noch Fragen?
                                    </div>
                                  </div>
                                  <div class="p">
                                    Hier finden Sie die Übersicht Ihrer
                                    <br> Empfehlungen und bereits
                                    <br> erhaltenen Prämien.
                                  </div>
                                </div>
                                <div
                                  style="margin-top: 10%;"
                                  class="teaser-cta"
                                >
                                  <div class="btn-prefix">
                                    <a
                                      href="https://www.unitymedia.de/privatkunden/aktionen/kunden_werben/empfehlen/haeufige-fragen/"
                                      class="btn"
                                    >
                                      Mehr Infos
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ume-relative section">
                  <div class="ume-compact grid ">
                    <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md ">
                      <div class="gridcol parsys">
                        <div class="richtext section">
                          <div
                            id="par_modul_wrapper_modulcontent_flexible_grid_0_gridcol_richtext_0"
                            class=""
                            style="word-wrap:break-word;"
                          >
                            <div
                              class="box teaser-box m light-bg w-1of1 default left"
                              style="background-image: url('https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/Teaser/Kunden_werben_vis_03.jpg'); background-repeat: no-repeat; background-size: 70%; background-position: right; height: 300px;"
                            >
                              <div class="box-body">
                                <div class="w-1of2">
                                  <div class="h4">
                                    <div class="p">
                                      Wollen Sie es genau wissen?
                                    </div>
                                  </div>
                                  <div class="p">
                                    Hier finden Sie wichtige Infor-
                                    <br> mationen zum Ablauf und die Teilnahmebedingungen
                                  </div>
                                </div>
                                <div
                                  style="margin-top: 10%;"
                                  class="teaser-cta"
                                >
                                  <div class="btn-prefix">
                                    <a
                                      href="https://www.unitymedia.de/privatkunden/aktionen/kunden_werben/empfehlen/teilnahmebedingungen/"
                                      class="btn"
                                    >Mehr Infos</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md ">
                      <div class="gridcol_0 parsys">
                        <div class="richtext section">
                          <div
                            id="par_modul_wrapper_modulcontent_flexible_grid_0_gridcol_0_richtext_0"
                            class=""
                            style="word-wrap:break-word;"
                          >
                            <div
                              class="box teaser-box m light-bg w-1of1 default left"
                              style="background-image: url('https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/Teaser/Kunden_werben_vis_04.jpg'); background-repeat: no-repeat; background-size: 70%; background-position: right; height: 300px;"
                            >
                              <div class="box-body">
                                <div class="w-1of2">
                                  <div class="h4">
                                    <div class="p">
                                      Hat es sich schon ausgezahlt?
                                    </div>
                                  </div>
                                  <div class="p">
                                    Hier finden Sie die Übersicht Ihrer
                                    <br> Empfehlungen und bereits
                                    <br> erhaltenen Prämien.
                                  </div>
                                </div>
                                <div
                                  style="margin-top: 10%;"
                                  class="teaser-cta"
                                >
                                  <div class="btn-prefix">
                                    <a
                                      href="https://unitymedia.tellja.de/"
                                      class="btn"
                                    >
                                      Zum Empfehlungsportal
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="spacer section">
                          <div class="upc_spacer_height_5">
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end else -->
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
  name: 'mgmTableEntry',
  components: {
    mgmButton
  },
  props: {
    dataValue: {
      type: Object,
      required: true
    }
  },
  computed: {
    tableArray () {
      let tempArray = []
      this.dataValue.mgmSkus.forEach(mgmSku => {
        tempArray.push(this.$store.getters.getMgmValueSetByMgmsku(mgmSku))
      })
      return tempArray
    }
  },
  methods: {
    skuToLabel (sku) {
      return this.$store.getters.getProduct(sku).title
    }
  }
}
</script>

<style scoped>
p.h4 {
  margin: 1em;
}
.mgm-qualifier {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
}
</style>
