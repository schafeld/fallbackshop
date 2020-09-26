<template>
  <div class="second_layer_html">
    <div class="section-drawer light-bg js_toggle js_toggle-scroll-to">
      <button
        class="section-drawer-btn js_toggle-trigger"
        :class="{'is-active':open}"
        @click="toggleLayer()"
      >
        <span v-if="open">Weniger anzeigen</span>
        <span v-else>Mehr anzeigen</span>
      </button>
      <div
        class="section-drawer-wrapper js_toggle-wrapper"
        :style="'height: ' + heightValue"
      >
        <div class="toggle-content js_toggle-content">
          <div class="section-drawer-content container">
            <div class="ume-relative">
              <div class="ume-compact grid">
                <div class="grid-col w-1of1">
                  <div class="gridcol parsys">
                    <div class="ume-relative section">
                      <div class="ume-compact grid">
                        <div class="grid-col w-1of3 w-1of1-sm center-column-sm w-1of1-md center-column-md">
                          <div class="gridcol parsys"></div>
                        </div>
                        <div class="grid-col w-2of3 w-1of1-sm center-column-sm w-1of1-md center-column-md">
                          <div class="gridcol_0 parsys">
                            <div class="spacer section">
                              <div class="upc_spacer_height_5">
                              </div>
                            </div>
                            <div class="spacer section">
                              <div class="upc_spacer_height_5">
                              </div>
                            </div>
                            <div class="spacer section">
                              <div class="upc_spacer_height_5">
                              </div>
                            </div>
                            <div class="headline parbase section">
                              <h2
                                class="h2"
                                style="text-align: left;"
                              >Auf das Kabel kommt es an!</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flexible_table parbase section">
                      <div class="table-scroll">
                        <table class="table flexible-table table-fixed">
                          <tbody>
                            <tr>
                              <td style="width: 20%;">
                                <div class="cell_1433792274957_1 parsys">
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792274957_2 parsys">
                                  <div class="headline parbase section">
                                    <h3
                                      class="h3"
                                      style="text-align: center;"
                                    >
                                      DSL-Netz
                                    </h3>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792274957_3 parsys">
                                  <div class="headline parbase section">
                                    <h3
                                      class="h3"
                                      style="text-align: center;"
                                    >
                                      Kabelnetz
                                    </h3>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 20%;">
                                <div class="cell_1433792286200_1 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Verbindung bis zum Verteilerkasten</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792286200_2 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p> Glasfaser</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792286200_3 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p> Glasfaser</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 20%;">
                                <div class="cell_1433792289336_1 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Verbindung vom Verteiler bis zum Teilnehmerhaushalt („letzte Meile“)</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792289336_2 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p> Kupfer (Telefonkabel)</p>
                                    </div>
                                  </div>
                                  <div class="image section">
                                    <div style="text-align: left;">
                                      <a
                                        href="#"
                                        target="_top"
                                      >
                                        <img
                                          src="//unitymedia.de/content/dcomm-unitymedia-de/de/privatkunden/angebote/aktionen-und-kampagnen/wechseln/_jcr_content/par/modul_wrapper_1873495920/modulContent/accordion/toggle_0/flexible_table/cell_1433792289336_2/image.img.260.png/1459350070233.png"
                                          class="left"
                                        >
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792289336_3 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Kupfer (Koaxialkabel)</p>
                                    </div>
                                  </div>
                                  <div class="image section">
                                    <div style="text-align: left;">
                                      <a
                                        href="#"
                                        target="_top"
                                      >
                                        <img
                                          src="//unitymedia.de/content/dcomm-unitymedia-de/de/privatkunden/angebote/aktionen-und-kampagnen/wechseln/_jcr_content/par/modul_wrapper_1873495920/modulContent/accordion/toggle_0/flexible_table/cell_1433792289336_3/image.img.300.png/1459350077852.png"
                                          class="left"
                                        >
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 20%;">
                                <div class="cell_1433792294190_1 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Eigenschaften&nbsp;des Kabels</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792294190_2 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <ul>
                                        <li>Einfache Umschirmung</li>
                                        <li>Hohe Störanfälligkeit</li>
                                        <li>Starker Bandbreitenverlust über Entfernung</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792294190_3 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <ul>
                                        <li>Mehrfache Umschirmung</li>
                                        <li>Geringe Störanfälligkeit</li>
                                        <li>Geringer Bandbreitenverlust über Entfernung</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 20%;">
                                <div class="cell_1433792308896_1 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p> Internetbandbreiten</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792308896_2 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Bandbreiten können durch rechnerische Abschirmung des Kabels, das sogenannte "Vectoring", stark verbessert werden. Dies jedoch selbst bei VDSL-Technologie nur auf bis zu 100 Mbit/s im Download.</p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td style="width: 40%;">
                                <div class="cell_1433792308896_3 parsys">
                                  <div class="richtext section">
                                    <div
                                      style="word-wrap:break-word;"
                                    >
                                      <p>Aufgrund der Qualität des Koaxialkabels sind die Bandbreiten sehr gut erweiterbar. Unsere aktuelle Technik ermöglicht schon heute in vielen Gebieten bis zu 400 Mbit/s im Download.<br> </p>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
export default {
  name: 'kabelVsDslVorteil',
  data () {
    return {
      open: false
    }
  },
  computed: {
    heightValue () {
      if (this.open) {
        return 'auto'
      } else { return '0px' }
    }
  },
  methods: {
    toggleLayer () {
      this.open = !this.open
    }
  }
}
</script>
