
<template>
  <div class="table-wrapper">
    <div class="comparison_table section">
      <div class="ume-table comparison-table table-scroll w-1of1 js_comparison-table">
        <table class="table-3-columns">
          <tbody>
            <comparison-product-table-header :set="set" />

            <table-row>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <button-element
                  :linkTo="product.url"
                  :transparent="true"
                  label="zur Produktseite"
                  type="hyperlink"
                ></button-element>
              </table-data>
            </table-row>
            <table-row>
              <table-data :colspan="productObject.length">
                <strong>Hol Dir Dein persönliches Angebot.</strong>
                <br>Ruf uns an und lass Dich beraten
                <br>
                <span class="telefon-wird-ersetzt-fuer-bk">0221 466 190 82</span>
                <tooltip content="Mo bis Fr 8 - 22 Uhr, Sa 8 - 20 Uhr. Nicht an Sonn- und Feiertagen" />
              </table-data>
            </table-row>

            <table-header-row :length="productObject.length"
              header="Aktionen und Vorteile"
              headerClass="h4"
            />
            <table-row
              :colspan="1 + productObject.length"
              v-if="setObject.title !== 'mobile'"
            />

            <table-header-row :length="productObject.length"
              v-if="setObject.internet && setObject.telephone"
              header="Wechselgarantie"
            />
            <table-row v-if="setObject.internet && setObject.telephone">
              <table-data :colspan="productObject.length">
                <p>
                  Bis zum Ende des 6. Vertragsmonats die Möglichkeit nutzen, unter 0800 700 11 77 in ein anderes Red Internet and Phone Wunschpaket zu wechseln.
                  <umefn id="UMEFN_234" />
                </p>
              </table-data>
            </table-row>

            <table-header-row :length="productObject.length"
              header="Startguthaben nur bei Online-Bestellung"
              v-if="setObject.title !== 'mobile'"
            />
            <table-row v-if="setObject.title !== 'mobile'">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
                :class="{'gradient-1 online-vorteil':setObject.title === 'twoPlay' || setObject.title === 'threePlay' || setObject.title === 'topseller', 'promotion':PROMOTION.dov && setObject.title === 'twoPlay'}"
                :optionalCssClasses="'sku_' + product.sku"
              >
                <span
                  v-for="(promoCodes, index) in product.promoCodes"
                  :key="index"
                >
                  <span v-if="promoCodes.promoCode==='online-advantage' || promoCodes.promoCode === 'double-online-advantage'">
                    <div
                      class="parsys banner-online-advantage"
                      v-if="setObject.title === 'twoPlay' || setObject.title === 'threePlay' || setObject.title === 'topseller'"
                    >
                      <div class="richtext section">
                        <div style="word-wrap:break-word;">
                          <p
                            class="h3"
                            style="text-align: center;"
                            v-if="set==='twoPlay' && PROMOTION.dov"
                          >
                            <b>
                              <!-- Bis 30.09.: -->
                              <br>
                              Doppelter Online-Vorteil {{promoCodes.promoValue}} €
                            </b>
                            <sup>
                              &nbsp;
                              <umefn id="UMEFN_235" />
                            </sup>
                          </p>
                          <p
                            class="h3"
                            style="text-align: center;"
                            v-else
                          >
                            <b>{{promoCodes.promoValue}} € </b>
                            <sup>
                              <umefn
                                id="UMEFN_235"
                                tooltipWrapperCss="light-asterisk"
                              />
                            </sup>
                          </p>
                        </div>
                      </div>
                      <!-- currently no images are present
                      TODO: update once we have images ready again
                      <img
                        v-if="promoCodes.promoValue < 100 && promoCodes.promoValue !== 50"
                        :src="'//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/ov/ov_cut_tab_0' + promoCodes.promoValue + '.png'"
                        style="align-self:flex-start;padding-left: 20px;"
                      >
                      <img
                        v-else-if="promoCodes.promoValue >= 100 && promoCodes.promoValue< 120"
                        :src="'//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/ov/ov_cut_tab_' + promoCodes.promoValue + '.png'"
                        style="align-self:flex-start;padding-left: 20px;"
                      >
                      <img
                        v-else-if="promoCodes.promoValue === 120"
                        :src="'//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/ov/ov_cut_tab_' + promoCodes.promoValue + 'eur.png'"
                        style="align-self:flex-start;padding-left: 20px;"
                      >
                      <img
                        v-else-if="promoCodes.promoValue === 160"
                        :src="'https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/ov/ov_cut_tab_160.png'"
                        style="align-self:flex-start;padding-left: 20px;"
                      >
                      -->
                    </div>
                    <div
                      class="parsys"
                      v-else
                    >
                      <p style="text-align: center;">
                        <b>{{promoCodes.promoValue}} €</b>
                        <sup>
                          <umefn id="UMEFN_235" />
                        </sup>
                      </p>
                    </div>
                  </span>
                </span>
              </table-data>
            </table-row>

            <!--
            Banner for advertising OTC Free promotion
            <table-header-row :length="productObject.length" header="Aktion Aktivierung"
              v-if="setObject.internet && setObject.telephone"
            />
            <table-row v-if="setObject.internet && setObject.telephone" >
              <table-data :colspan="productObject.length">
                <p>
                  0 €
                  <sup>
                    <umefn id="UMEFN_215" />
                  </sup> statt 69,99 € Aktivierung – nur für kurze Zeit zusätzlich sparen
                </p>
              </table-data>
            </table-row>
            -->
            <table-header-row :length="productObject.length"
              header="Studentenaktion"
              v-if="setObject.internet && !setObject.tv && !setObject.mobile"
            />
            <table-row v-if="setObject.internet && !setObject.tv && !setObject.mobile">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span
                  v-for="(promoCodes, index) in product.promoCodes"
                  :key="index"
                >
                  <span v-if="promoCodes.promoCode==='student-advantage'">
                    <span v-if="promoCodes.promoValue">
                      <span v-html="promoCodes.promoValue" /> € BestChoice-Gutschein
                      <br>
                      <a href="/privatkunden/angebote/aktionen-und-kampagnen/studentenaktion/">Wichtige Infos zu unseren Studentenaktionen</a>
                    </span>
                  </span>
                </span>
              </table-data>
            </table-row>

            <table-header-row :length="productObject.length"
              header="Wechselprämie"
              v-if="setObject.internet && setObject.telephone"
            />
            <table-row v-if="setObject.internet && setObject.telephone">
              <table-data :colspan="productObject.length">
                <p>
                  Schon heute zu Unitymedia wechseln und Red Internet and Phone bis zu 12 Monate für 0 € mtl. parallel zu Ihrem alten DSL-Vertrag nutzen.
                  <umefn id="UMEFN_236" />
                </p>
              </table-data>
            </table-row>

            <table-header-row :length="productObject.length"
              header="Hauptmerkmale des Produkts"
              headerClass="h4"
            />
            <table-header-row :length="productObject.length" header="Produkt-Informationsblatt" />
            <table-header-row :length="productObject.length"
              header="Kombi-Deal Angebot"
              v-if="setObject.title === 'mobile'"
            />

            <table-header-row :length="productObject.length"
              header="Telefonieren zu Unitymedia Mobil und ins Unitymedia Festnetz"
              v-if="setObject.title === 'mobile'"
            />
            <table-row v-if="setObject.title === 'mobile'">
              <table-data>
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
                <br>unbegrenzt
              </table-data>
              <table-data>
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
                <br>unbegrenzt
              </table-data>
              <table-data>
                –
              </table-data>
            </table-row>

            <table-row
              header="Telefonieren in dt. Festnetz und in alle dt. Mobilfunknetze"
              v-if="setObject.title === 'mobile'"
            >
              <table-data>
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
                <br>unbegrenzt
              </table-data>
              <table-data>
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
                <br>unbegrenzt
              </table-data>
              <table-data>
                –
              </table-data>
            </table-row>
            <table-row
              header="SMS in alle deutschen Netze"
              v-if="setObject.title === 'mobile'"
            >
              <table-data>
                <p>9 ct/SMS</p>
              </table-data>
              <table-data>
                <p>9 ct/SMS</p>
              </table-data>
              <table-data>
                –
              </table-data>
            </table-row>
            <table-row
              header="Mindestvertragslaufzeit"
              v-if="setObject.title === 'mobile'"
            >
              <span class="h4">
                Hauptmerkmale des Produkts
              </span>
            </table-row>
            <table-row>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <button-element
                  :href="product.pib"
                  :transparent="true"
                  :label="'<strong>' + product.title + ' (PDF)</strong>'"
                  type="hyperlink"
                ></button-element>
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              Internet-Geschwindigkeit
            </table-header>
            <table-row v-if="setObject.title !== 'mobile'">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <div
                  class="image"
                  section
                >
                  <div style="text-align: center;">
                    <img
                      :src="product.speedometerURL"
                      width="62px"
                      class="center"
                    >
                  </div>
                </div>
                <div class="richtext section">
                  <div style="word-wrap:break-word;">
                    <p style="text-align: center;">
                      Bis zu {{product.download}} Mbit/s Download
                      <br>
                      und {{product.upload}} Mbit/s Upload
                    </p>
                  </div>
                </div>
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              Internet-Flatrate
            </table-header>
            <table-row v-if="setObject.title !== 'mobile'">
              <table-data
                v-for="n in productObject.length"
                :key="n"
              >
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              WLAN
            </table-header>
            <table-row>
              <table-data
                v-for=" n in productObject.length"
                :key="n"
              >
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              WifiSpot unbegrenzt nutzen<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Wenn Sie der Einrichtung eines separaten WLAN für WifiSpot auf dem von Unitymedia zur Verfügung gestellten WLAN-Router widersprechen (durch Abwahl dieses Produktbestandteils), entfällt die Berechtigung zur Nutzung von WifiSpot.</span></span>
            </table-header>
            <table-row v-if="setObject.title !== 'mobile'">
              <table-data
                v-for=" n in productObject.length"
                :key="n"
              >
                <img
                  :src="checkMarkIconUrl"
                  class="center svg-icon"
                >
              </table-data>
            </table-row>
            <table-row v-if="!isExtended">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
                :amount="productObject.length"
              >
                <button-element
                  :linkTo="product.url"
                  label="Details anzeigen"
                  :transparent="true"
                  type="dcomm_button"
                />
                <div class="order-link">
                  <add-to-basket-button
                    renderStyle="direct-link"
                    :sku="product.sku"
                  />
                </div>
              </table-data>
            </table-row>
            <extended-details
              v-if="!isExtended"
              v-on:exntendedDetails="toggleExtendedTable()"
              class="extended-details"
              :length="productObject.length"
            />
          </tbody>
          <tbody v-if="isExtended">
            <table-header :colspan="productObject.length">
              Telefon-Flatrate ins dt. Festnetz
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              Kabelanschlussvertrag notwendig<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Kein Kabelanschlussvertrag notwendig, es muss lediglich ein Kabelanschluss an Ihrem Wohnort verfügbar sein.</span></span>
            </table-header>
            <table-row>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'onePlay' || product.set === 'twoPlay'">Nein</span>
                <span v-else>Ja</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Digitales Fernsehen mit Horizon TV
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  Große Programmvielfalt: auch die beliebtesten privaten Sender in HD sehen –
                  <br>öffentlich-rechtliche sind als unverschlüsselte HD-Sender im Kabelanschluss enthalten
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              <span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Mit Horizon Go Free – im ganzen Haus auf bis zu 3 mobilen Endgeräten gleichzeitig fernsehen.</span></span> Multiscreen &amp; Multiroom
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Zeitversetztes Fernsehen
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :isMain="true"
              :colspan="productObject.length"
            >
              <span class="h4">
                Hardware immer inklusive
              </span>
            </table-header>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Für Horizon TV
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    style="text-align: center;"
                    src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/DEV_Horizon_HD_Recorder_Incl.png"
                    class="center"
                  >
                  <br>
                  <strong style="word-wrap:break-word;">Horizon HD Recorder</strong>
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              Für WLAN
            </table-header>
            <table-row>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <img
                  style="text-align: center;"
                  src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/DEV_Vodafone_WLAN-Kabelrouter_RouterIncl.png"
                  class="center"
                  width="120px"
                  v-if="product.hardware[0] === 'Vodafone-Station'"
                >
                <img
                  style="text-align: center;"
                  src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/DEV_ConnectBox_RouterIncl_PDP.png"
                  class="center"
                  width="100px"
                  v-else-if="product.hardware[0] === 'Connect-Box'"
                >
                <br>
                <strong style="word-wrap:break-word;">Highspeed WLAN-Kabelrouter Vodafone Station</strong>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Fernsehen und Radio
            </table-header>
            <table-row
              :colspan="1 + productObject.length"
              headerClass="h4"
              v-if="setObject.tv"
            />
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Zeitversetztes Fernsehen
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Aufnahme
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Unitymedia Videothek<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Über 10.000 Top-Titel: Blockbuster, Serienstaffeln, Klassiker und das Beste aus dem TV. Schon ab 0,49 pro Artikel für 48 Stunden.</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Horizon Go<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Zugriff auf Ihr gesamtes TV-Programm (inkl. Videothek) von überall – von Ihrem Laptop/PC (webbasiert), Smartphone oder Tablet (per App, iOS oder Android Betriebssystem) – unterwegs oder zuhause.</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">4,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              HD-Option<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>HDTV ist standardmäßig in allen Paketen enthalten: Sie sehen sämtliche in HD verfügbaren Programme Ihrer Programmauswahl in HD (außer Sky, hierzu Buchung von Sky und Sky Premium HD nötig).</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              ALLSTARS<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>53 Premium TV-Sender (davon 32 in HD).</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">11,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Digitale Radiosender<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Mit Ihrem digitalen Empfangsgerät (z. B. HD-Receiver, Horizon HD-Recorder) hören Sie Radio in ausgezeichneter Klang-Qualität, ganz ohne Rauschen und Knarzen.</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">89 Sender</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if="setObject.tv"
            >
              Stingray Music<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>47 digitale Audiokanäle auf Ihrem Fernseher – von Jazz bis Hip Hop, Klassik, Reggae u. v. m. – ohne Werbe- und Moderationsunterbrechungen.</span></span>
            </table-header>
            <table-row v-if="setObject.tv">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay'">Kostenlos in Verbindung mit ALLSTARS</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :isMain="true"
              :colspan="productObject.length"
            >
              <span class="h4">
                Internet
              </span>
            </table-header>
            <table-row
              :colspan="1 + productObject.length"
              headerClass="h4"
              v-if="setObject.title !== 'mobile'"
            />
            <table-header :colspan="productObject.length">
              Verbindungstechnologie
            </table-header>
            <table-row>
              <table-data
                v-for="n in productObject.length"
                :key="n"
              >COAX-Glasfaser</table-data>
            </table-row>
            <table-header :colspan="productObject.length">
              Sicherheitspaket<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Wirksamer Schutz vor Gefahren aus dem Internet mit preisgekrönter Software (Best-Protection-Auszeichnung AV-TEST 2011-2013).</span></span>
            </table-header>
            <table-row v-if="setObject.title !== 'mobile'">
              <table-data
                v-for="n in productObject.length"
                :key="n"
              >
                <p>
                  Bei Buchung der Option.
                  <br>
                  <span style="line-height: 1.28571;">
                    Die ersten 3 Monate
                    <br>kostenlos, danach 3,99 € mtl.
                  </span>
                </p>
              </table-data>
            </table-row>
            <table-header
              :isMain="true"
              :colspan="productObject.length"
            >
              <span class="h4">
                Telefon
              </span>
            </table-header>
            <table-row
              :colspan="1 + productObject.length"
              headerClass="h4"
              v-if="setObject.telephone"
            />
            <table-header :colspan="productObject.length">
              Rufnummernmitnahme möglich
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">
                  <img
                    :src="checkMarkIconUrl"
                    class="center svg-icon"
                  >
                </span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :colspan="productObject.length"
              v-if='this.$store.getters.getProduct(["Telefon_Komfort_1"]).availability === true'
            >
              Telefon KOMFORT-Option<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>HD-Telefonie, mehrere Rufnummern. Fax u.v.m.</span></span>
            </table-header>
            <table-row v-if='this.$store.getters.getProduct(["Telefon_Komfort_1"]).availability === true'>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span>
                  4,99 € mtl.
                  <br>Inklusive FRITZ!Box 6591 Cable
                </span>
              </table-data>
            </table-row>
            <table-header
              v-if="setObject.telephone"
              :colspan="productObject.length"
            >Euro-Flat Plus<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Flatrate ins Festnetz von über 25 europäischen und weiteren Ländern</span></span>
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">4,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              v-if="setObject.telephone"
              :colspan="productObject.length"
            >Mobile & Euro-Flat Plus<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Flatrate in die deutschen Mobilfunknetze<br>
                  Flatrate ins Festnetz von über 25 europäischen und weiteren Ländern</span></span>
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">9,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              v-if="setObject.telephone"
              :colspan="productObject.length"
            >Mobile & International-Flat<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Flatrate in die deutschen Mobilfunknetze<br>Flatrate ins Festnetz von über 60 Ländern</span></span>
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">14,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              v-if="setObject.telephone"
              :colspan="productObject.length"
            >Mobile & International-Allnet-Flat<span
                class='tooltip js_tooltip'
                data-tt
              ><span class='tooltip-icon icon-info'></span><span class='tooltip-layer'>Flatrate in die deutschen Mobilfunknetze<br>Flatrate ins Fest- und Mobilfunknetz von über 60 Ländern</span></span>
            </table-header>
            <table-row v-if="setObject.telephone">
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
              >
                <span v-if="product.set === 'threePlay' || product.set === 'twoPlay'">19,99 € mtl.</span>
                <span v-else>—</span>
              </table-data>
            </table-row>
            <table-header
              :isMain="true"
              :colspan="productObject.length"
            >
              <span class="h4">
                Mobilfunk
              </span>
            </table-header>
            <table-row
              :colspan="1 + productObject.length"
              headerClass="h4"
            />
            <table-row v-if="setObject.internet">
              <table-data :colspan="productObject.length">
                <p>Hol Dir einen Vodafone Red-Mobilfunk-Tarif in Kombination mit Unitymedia-Internet und profitiere von 5 GB Extra-Daten, 10€ Rabatt pro Monat sowie von weiteren wechselnden zusätzlichen Aktionsrabatten.<a
                    data-action="Hyperlink"
                    href="/privatkunden/mobil/mobilfunk/reds"
                  >Mehr erfahren</a><br> </p>
              </table-data>
            </table-row>
            <table-row>
              <table-data
                v-for="(product, index) in productObject"
                :key="index"
                :amount="productObject.length"
              >
                <button-element
                  :linkTo="product.url"
                  label="Details anzeigen"
                  :transparent="true"
                  type="dcomm_button"
                />
                <br>
                <add-to-basket-button
                  renderStyle="direct-link"
                  :sku="product.sku"
                />
              </table-data>
            </table-row>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import comparisonProductTableHeader from '@/components/molecules/comparisonProductTableHeader.vue'
import extendedDetails from '@/components/atoms/extendedDetails.vue'
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
import tableRow from '@/components/atoms/tableRow.vue'
import TableHeaderRow from '@/components/atoms/TableHeaderRow.vue'
import tableData from '@/components/atoms/tableData.vue'
import tableHeader from '@/components/atoms/tableHeader.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
import umefn from '@/components/atoms/umefn.vue'
import tooltip from '@/components/atoms/tooltip.vue'
// import mfddTeaserProductModule from '@/components/molecules/mfddTeaserProductModule.vue'

export default {
  name: 'comparisontablesection',
  data () {
    return {
      isExtended: false,
      checkMarkIconUrl:
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/System-Icons/tick-simple.svg'
    }
  },
  props: {
    set: {
      type: String,
      required: true
    }
  },
  computed: {
    setObject () {
      return this.$store.getters.getSetinfoBySettitle(this.set)
    },
    gigabitProductSku () {
      if (this.set !== 'threePlay') {
        return ['2P_RIP_1000_1']
      }
      return ['2P_RIP_1000_1', 'HRZ_TV_0420_1']
    },
    productObject () {
      let tempObject = []
      if (this.set !== 'topseller') {
        let tempSet = this.$store.getters.getSetinfoBySettitle(this.set)
        tempSet.skus.forEach(sku => {
          tempObject.push(this.$store.getters.getProduct(sku))
        })
      } else {
        tempObject = this.$store.getters.getTopsellers()
      }
      return tempObject
    }
  },
  components: {
    comparisonProductTableHeader,
    extendedDetails,
    addToBasketButton,
    tableRow,
    tableData,
    tableHeader,
    TableHeaderRow,
    buttonElement,
    umefn,
    tooltip
    // mfddTeaserProductModule
  },
  methods: {
    toggleExtendedTable () {
      this.isExtended = !this.isExtended
    }
  },
  watch: {
    $route (to, from) {
      this.isExtended = false
    }
  }
}
</script>

<style>
.tooltip:hover > .tooltip-layer {
  min-width: 30rem;
}
td.gradient-1.online-vorteil {
  background: linear-gradient(180deg, #00b0ca 0%, #007c92 100%);
}
td.gradient-1.online-vorteil .h3 {
  color: #ffffff;
}
td.sku_2P_RIP_1000_1.gradient-1.online-vorteil,
td.sku_2P_RIP_1000_500_1.gradient-1.online-vorteil {
  background: transparent;
}

td.online-vorteil {
  border-style: none !important;
  padding: 0 !important;
  padding-top: 0px;
  padding-top: 20px !important;
}

.comparison-table p {
  text-align: center;
}

div.parsys.banner-online-advantage {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  flex-direction: column;

  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-family: VodafoneRg, Arial, sans-serif;
  font-size: 24px;
  padding-bottom: 20px;
}

img.center.svg-icon {
  width: 50px;
}

.order-link {
  margin-top: 1em;
}
.order-link a {
  cursor: pointer;
}

/* The following belongs into Gigaproduct teaser component, see Todo above.  */
.add_to_basket.parbase.section.giga-teaser {
  margin: 2rem 0 0 0;
}
span.comparison-table-price-rate.js_price {
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
  font-size: 48px;
  display: inline-block;
}
.center-child > * {
  text-align: center;
}
.tooltip.giga-teser .asterisk-orb:after {
  color: #fff !important;
}
.giga-teaser span.tooltip.js_tooltip {
  position: relative;
  top: -20px;
  left: -20px;
}
.btn.tertiary-btn {
  margin: 0px;
}
</style>
