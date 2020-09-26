<template>
  <div class="form parbase section">
    <form
      name="checkoutFormAltExperience_9283943"
      id="checkoutFormAltExperience_9283943"
      action="javascript://"
      enctype="multipart/form-data"
      method="POST"
      novalidate="novalidate"
      accept-charset="utf-8"
      data-form-name="checkoutFormAltExperience_9283943"
      data-widget="AjaxFormSubmitter"
      data-edit-mode="false"
      data-date-format="DD.MM.YYYY"
    >
      <input type="hidden" required name="_charset_" value="UTF-8">
      <!-- TODO: Document resourcePath and clean up form templates in AEM (no duplicates). -->
      <input
        type="hidden"
        required
        name="resourcePath"
        :value="'/content/dcomm-unitymedia-de/de' + formAddress + '/jcr:content/par/form'"
      >
      <input
        type="hidden"
        required
        name="requestURI"
        :value="formAddress + '.html'"
      >
      <input type="hidden" required name="slingSelector" value>
      <!-- TODO: Does the AEM form servlet need this odd hidden input? -->
      <input type="text" name="wkhxojnrsinln" class="hidden">
      <div class="form-elements parsys">
        <div class="hidden_field parbase section">
          <input type="hidden" name="salutation" :value="customerData.title">
          <input type="hidden" name="region" :value="customerData.installationAddress.region">
          <input type="hidden" name="given_name" :value="customerData.givenName">
          <input type="hidden" name="family_name" :value="customerData.familyName">
          <input type="hidden" name="dateOfBirth" :value="customerData.dateOfBirth">
          <input type="hidden" name="email" :value="customerData.email">
          <input type="hidden" name="phone" :value="customerData.phonePrefix">
          <input type="hidden" name="phonenumber" :value="customerData.phoneNumber">
          <input type="hidden" name="dsl_switch_select" :value="customerData.dslSwitch">
          <input type="hidden" name="zip" :value="customerData.installationAddress.zip">
          <input type="hidden" name="city" :value="customerData.installationAddress.city">
          <input type="hidden" name="street" :value="customerData.installationAddress.street">
          <input type="hidden" name="buildingId" :value="customerData.installationAddress.buildingId">
          <input type="hidden" name="trackingOrderId" :value="uniqueOrderId">
          <input
            type="hidden"
            name="streetno"
            :value="customerData.installationAddress.houseNumber"
          >
          <input
            type="hidden"
            name="configuration_selected_options_TELEPORT"
            :value="customerData.telephonePorting.teleportWanted"
          >
          <input
            type="hidden"
            name="telePortProvider"
            :value="customerData.telephonePorting.numberportingProvider"
          >
          <input
            type="hidden"
            name="portingAreaCode1"
            :value="customerData.telephonePorting.portingPhonePrefix"
          >
          <input
            type="hidden"
            name="portingNumber1"
            :value="customerData.telephonePorting.portingPhoneNumber"
          >
          <input
            type="hidden"
            name="fixedPortingPostalCode"
            :value="customerData.telephonePorting.portingZip"
          >
          <input
            type="hidden"
            name="fixedPortingCity"
            :value="customerData.telephonePorting.portingCity"
          >
          <input
            type="hidden"
            name="fixedPortingStreet"
            :value="customerData.telephonePorting.portingStreet"
          >
          <input
            type="hidden"
            name="fixedPortingHouseNo"
            :value="customerData.telephonePorting.portingHouseNumber"
          >
          <input
            type="hidden"
            name="fixedPortingFirstName0"
            :value="customerData.telephonePorting.portingGivenName"
          >
          <input
            type="hidden"
            name="fixedPortingLastName0"
            :value="customerData.telephonePorting.portingFamilyName"
          >
          <input
            type="hidden"
            name="desiredActivationDate"
            :value="$store.getters.desiredActivationDate"
          >
          <input
            type="hidden"
            name="activationDate"
            :value="$store.getters.activationDate"
          >
          <input
            type="hidden"
            name="alternativeBillAddressChk"
            :value="customerData.alternativeAddress.alternativeWanted"
          >
          <input
            type="hidden"
            name="bill_salutation"
            :value="customerData.alternativeAddress.title"
          >
          <input
            type="hidden"
            name="bill_firstname"
            :value="customerData.alternativeAddress.givenName"
          >
          <input
            type="hidden"
            name="bill_lastname"
            :value="customerData.alternativeAddress.familyName"
          >
          <input type="hidden" name="bill_zip" :value="customerData.alternativeAddress.zip">
          <input type="hidden" name="bill_city" :value="customerData.alternativeAddress.city">
          <input type="hidden" name="bill_street" :value="customerData.alternativeAddress.street">
          <input
            type="hidden"
            name="bill_streetno"
            :value="customerData.alternativeAddress.houseNumber"
          >
          <input
            type="hidden"
            name="adress_adition_differ"
            :value="customerData.alternativeAddress.extraInformation"
          >
          <input
            type="hidden"
            name="alternativeDeliveryAddressChk"
            :value="customerData.deliveryAddress.alternativeWanted"
          >
          <input
            type="hidden"
            name="delivery_salutation"
            :value="customerData.deliveryAddress.title"
          >
          <input
            type="hidden"
            name="delivery_firstname"
            :value="customerData.deliveryAddress.givenName"
          >
          <input
            type="hidden"
            name="delivery_lastname"
            :value="customerData.deliveryAddress.familyName"
          >
          <input type="hidden" name="delivery_zip" :value="customerData.deliveryAddress.zip">
          <input type="hidden" name="delivery_city" :value="customerData.deliveryAddress.city">
          <input type="hidden" name="delivery_street" :value="customerData.deliveryAddress.street">
          <input
            type="hidden"
            name="delivery_streetno"
            :value="customerData.deliveryAddress.houseNumber"
          >
          <input type="hidden" name="wifiopt" :value="customerData.wifiSpotConsent">
          <input
            type="hidden"
            name="itemizedBill"
            :value="customerData.itemizedBill.itemizedBillWanted"
          >
          <input type="hidden" name="billtype_itemized" :value="customerData.itemizedBill.billtype">
          <input
            type="hidden"
            name="EVNNOTICE_checkbox"
            :value="customerData.itemizedBill.coUsersInformed"
          >
          <input type="hidden" name="phoneBookEntry" :value="customerData.phoneBookEntry">
        </div>
        <input type="hidden" name="paymentname" :value="paymentName">
        <input type="hidden" name="kto" :value="customerData.paymentDetails.accountNumber">
        <input type="hidden" name="blz" :value="customerData.paymentDetails.bankNumber">
        <input type="hidden" name="useIban" :value="customerData.paymentDetails.ibanSelected">
        <input type="hidden" name="iban" :value="customerData.paymentDetails.ibanNumber">
        <input
          type="hidden"
          name="differentPayer"
          :value="customerData.paymentDetails.alternateBillingAddress.alternateBillWanted"
        >
        <input
          type="hidden"
          name="postcode"
          :value="customerData.paymentDetails.alternateBillingAddress.zip"
        >
        <input
          type="hidden"
          name="paymentcity"
          :value="customerData.paymentDetails.alternateBillingAddress.city"
        >
        <input
          type="hidden"
          name="paymentstreet"
          :value="customerData.paymentDetails.alternateBillingAddress.street"
        >
        <input
          type="hidden"
          name="houseNumber"
          :value="customerData.paymentDetails.alternateBillingAddress.streetNumber"
        >
        <input
          type="hidden"
          name="paymentCountry"
          :value="customerData.paymentDetails.alternateBillingAddress.country"
        >
        <input type="hidden" name="termsandconditions" value="true">
        <input type="hidden" name="creditworthinessCheck" value="true">
        <input type="hidden" name="permissiontype" value="true">
        <input type="hidden" name="salesId" :value="salesId">
        <input type="hidden" name="productSku" :value="skuCollection">
        <input type="hidden" name="productSkuOne" :value="basketData[0].skus[0]">
        <input type="hidden" name="productSkuTwo" :value="basketData[1].skus" v-if="basketData[1]">
        <input type="hidden" name="productSkuThree" :value="basketData[2].skus[0]" v-if="basketData[2]">
        <input type="hidden" name="productDescription" :value="titleCollection">
        <input type="hidden" name="productDescriptionOne" :value="basketData[0].title">
        <input type="hidden" name="productDescriptionTwo" :value="basketData[1].title" v-if="basketData[1]">
        <input type="hidden" name="productDescriptionThree" :value="basketData[2].title" v-if="basketData[2]">
        <input type="hidden" name="shortSkuSummary" :value="$store.getters.getShortSkuCollection">
        <input type="hidden" name="otcvalue" :value="$store.getters.OneTimeChargesTotalFloat">
        <input type="hidden" name="onlineadvantage" :value="$store.getters.onlineAdvantageValue">
        <input type="hidden" name="cableMaxAlternativeProcess" :value="$store.getters.getCableMaxAlternativeProcess">
      </div>
      <div class="termsAndConds section">
        <p class="startext">Pflichtfeld</p>
        <fieldset class="fieldset" data-sccompid="review terms and conditions">
          <div class="formrow nolabel">
            <div class="formrow-col w-1of1">
              <label class="tick">
                <input
                  type="checkbox"
                  name="termsandconditions"
                  class="required"
                  aria-required="true"
                  v-model="termsandconditions"
                  @change="updateTermsAndConditions()"
                  @click="trackFormfield('termsandconditions')"
                >
                <span class="tick-label" @click="updateTermsAndConditions()">
                  <p>
                    *
                    Hiermit bestätige ich, dass ich die
                    <a
                      href="/content/dam/dcomm-unitymedia-de/Privatkunden/AGB_Checkout/digitaltv/agb-unitymedia.pdf"
                      target="_blank"
                    >Allgemeinen Geschäftsbedingungen nebst Besonderen Geschäftsbedingungen TV Pakete &amp; TV Services (PDF)</a>
                    und die
                    <a
                      href="/content/dam/dcomm-unitymedia-de/Privatkunden/global/docs/agb/BesGB-Internet-Telefonie.pdf"
                      target="_blank"
                    >Besondere Geschäftsbedingungen Internet und Telefonie und Besondere Geschäftsbedingungen WifiSpot, jeweils nebst Ergänzender Informationen (PDF)</a> der Unitymedia NRW GmbH anerkenne sowie mein
                    <a
                      href="/content/dam/dcomm-unitymedia-de/Privatkunden/AGB_Checkout/withdrawal_right/widerruf-nrw.pdf"
                      target="_blank"
                    >Widerrufsrecht und die Folgen des Widerrufsrechtes (PDF)</a> sowie die
                    <a
                      href="/content/dam/dcomm-unitymedia-de/Privatkunden/AGB_Checkout/data_security/hinweise-zum-datenschutz-unitymedia.pdf"
                      target="_blank"
                    >Hinweise zum Datenschutz (PDF)</a>
                    zur Kenntnis genommen habe.
                    <br>
                    <span v-for="(product, index) in basketData" :key="index">
                      <span v-if="product.pib">
                        Hiermit bestätige ich außerdem, dass ich die Produktinformationen zu
                        <a
                          :href="product.pib"
                          target="_blank"
                        >{{product.title}}</a>
                        zur Kenntnis genommen habe.
                      </span>
                    </span>
                  </p>
                </span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="creditworthinessCheck section">
        <fieldset class="fieldset">
          <div class="formrow nolabel">
            <div class="formrow-col w-1of1">
              <label class="tick">
                <input
                  type="checkbox"
                  name="creditworthinessCheck"
                  class="required"
                  aria-required="true"
                  v-model="creditworthiness"
                  @change="updateCreditworthiness()"
                  @click="trackFormfield('creditworthinessCheck')"
                >
                <span class="tick-label tick-label--inline" @click="updateCreditworthiness()">*
                  <p>
                    Ich nehme zur Kenntnis, dass die Unitymedia NRW GmbH, die Unitymedia Hessen GmbH &amp; Co KG bzw. die Unitymedia BW GmbH (zusammen Unitymedia) zum Abschluss oder zur Änderung des Vertrages eine Bonitätsanfrage durchführt. Im Rahmen der Anfrage bei den Auskunfteien (Schufa Holding AG, CRIF Bürgel GmbH) können unter anderem auch Adressdaten herangezogen werden. Diese Anfrage hat keinerlei Auswirkung auf die Bonitätseinstufung bei den Auskunfteien.<br><br>Ich bin damit einverstanden, dass Unitymedia zum Zwecke der Bonitätsprüfung auch meine Vertrags-, Produkt- und Zahlungsdaten betreffend die Unitymedia Finanz-Service GmbH verwenden darf.<br><br>Bitte beachten Sie unsere <a href="https://www.unitymedia.de/datenschutz/" target="_blank">Datenschutzhinweise</a> einschließlich der bestehenden Möglichkeit, bestimmten Datenverarbeitungen (bspw. persönliche Produktempfehlungen) zu widersprechen.
                  </p>
                </span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="permissionManagement section">
        <fieldset class="fieldset permission-checkout js_permission-fieldset">

          <cablemax-availability-notice />

          <h3
            class="h5 bold"
          >Wir stimmen unsere Produkte, Angebote und Services auf Ihre Bedürfnisse ab</h3>
          <input type="hidden" name="permissionversion" value="1">
          <div class="formrow nolabel js_toggle">
            <div class="formrow-col w-1of1">
              <label class="tick js_toggle-trigger">
                <input
                  type="checkbox"
                  name="permissiontype"
                  value="Analytics"
                  v-model="permissionManagement"
                  @change="updatePermissionManagement()"
                  @click="trackFormfield('permissiontype')"
                >
                <span class="tick-label">
                  Ich stimme zu, dass
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >Unitymedia</a>
                  zur Beratung und Marktforschung, für individualisierte
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >Angebote</a>
                  , zur Verbesserung des Kundenservice sowie der Produkte von Unitymedia
                  meine
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >Bestands-</a>
                  und
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >Nutzungsdaten</a>
                  verwendet.
                  <br>Für die
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >bedarfsgerechte Gestaltung</a>
                  und Vermarktung von Telekommunikationsdiensten und zur Bereitstellung
                  von Diensten mit Zusatznutzen bin ich auch mit der Verwendung der
                  <a
                    href="/content/dcomm-unitymedia-de/de/privatkunden/permisson-analytics.html?id=Analytics&amp;version=1"
                    target="_blank"
                  >Verkehrsdaten</a>
                  durch Unitymedia einverstanden.
                </span>
              </label>
            </div>
            <div
              :class="{'is-active':permissionManagement}"
              class="toggle-wrapper js_toggle-wrapper"
              :style="permissionMgmtStyle"
              v-if="permissionManagement"
            >
              <div class="formrow permission-options toggle-content js_toggle-content">
                <div class="formrow-col action-text">
                  Ich möchte von der Unitymedia zu diesen Zwecken wie folgt kontaktiert
                  werden (Mehrfachnennungen möglich)
                </div>

                <div class="formrow-col permission-option">
                  <label class="tick">
                    <input
                      type="checkbox"
                      name="emailchannel"
                      value="on"
                      v-model="emailchannel"
                      @change="updateEmailChannel()"
                      @click="trackFormfield('emailchannel')"
                    >
                    <span class="tick-label">E-Mail</span>
                  </label>
                </div>

                <div class="formrow-col permission-option">
                  <label class="tick">
                    <input
                      type="checkbox"
                      name="postchannel"
                      value="on"
                      v-model="postchannel"
                      @change="updatePostChannel()"
                      @click="trackFormfield('postchannel')"
                    >
                    <span class="tick-label">Brief</span>
                  </label>
                </div>

                <div class="formrow-col permission-option">
                  <label class="tick">
                    <input
                      type="checkbox"
                      name="smschannel"
                      value="on"
                      v-model="smschannel"
                      @change="updateSmsChannel()"
                      @click="trackFormfield('smschannel')"
                    >
                    <span class="tick-label">SMS/MMS</span>
                  </label>
                </div>

                <div class="formrow-col permission-option">
                  <label class="tick">
                    <input
                      type="checkbox"
                      name="telephonechannel"
                      value="on"
                      v-model="telephonechannel"
                      @change="updateTelephoneChannel()"
                      @click="trackFormfield('telephonechannel')"
                    >
                    <span class="tick-label">Telefon</span>
                  </label>
                </div>
                <div class="formrow-col footnotes">
                  Hinweis: Sie können Ihre Einwilligungen jederzeit mit Wirkung für die Zukunft im Online-Kundencenter<br>oder per Email an datenschutz@unitymedia.de widerrufen.
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <!-- Workaround to avoid corrupted XHR2 request body in IE10 / IE11 -->
        <!-- Issue is around since at least 2014 -->
        <!-- first noticed here: https://blog.yorkxin.org/2014/02/06/ajax-with-formdata-is-broken-on-ie10-ie11.html -->
        <input type="hidden" name="_dontcare">
        <!-- workaround end -->
      </div>
      <button-element
        type="order_submit_button"
        :label="spinButton ? 'Wird bearbeitet...' : 'Zahlungspflichtig bestellen'"
        :inactive="!checkoutComplete"
        :spinner="spinButton"
        v-on:buttonClicked="orderButtonAlreadyClicked ? null : sendOrder()"
      />
      <div class="error-message" v-if="!step1Completed">
        <div class="js_errorbar">
          <div class="content">
            <div
              class="errorbar"
            >Da ist wohl etwas schief gelaufen, ihre Daten aus Schritt 1 sind nicht vollständig, bitte kehren Sie zur vorherigen Seite zurück und prüfen Sie ihre Daten.</div>
          </div>
        </div>
      </div>
      <div class="error-message" v-if="errorSending">
        <div class="js_errorbar">
          <div class="content">
            <div
              class="errorbar"
            >Ihre Bestellung kann leider gerade nicht versendet werden. Bitte versuchen Sie es zu einem späteren Zeitpunkt noch einmal.</div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'
import trackFormfield from '@/helper/trackFormfield'
import CablemaxAvailabilityNotice from '@/components/atoms/CablemaxAvailabilityNotice.vue'

// TODO: Refactor or remove sendOrderReader
export default {
  name: 'hiddenCheckoutForm',
  data () {
    return {
      errorSending: false,
      termsandconditions: '',
      creditworthiness: '',
      permissionManagement: '',
      emailchannel: '',
      smschannel: '',
      postchannel: '',
      telephonechannel: '',
      spinButton: false,
      sendOrderReader: true,
      orderButtonAlreadyClicked: false
    }
  },
  components: {
    buttonElement,
    CablemaxAvailabilityNotice
  },
  computed: {
    formAddress () {
      // Deactivate Prod form-mailer page at 'hashed' url to test for submission failure (make sure to reenable!)
      // /content/dcomm-unitymedia-de/de/onlineshop/da39a3ee5e6b4b0d3255bfef95601890afd80709/DONOTDELETE.html
      // TODO: Reenable this Debug check before going live or disable for testing, respectively.
      // let helperText = '/privatkunden/showcase-komponenten/BBCT/fallback/DONOTDELETE'
      let helperText = ''
      if (!this.$data.DEVROUTE) {
        helperText = '/onlineshop/da39a3ee5e6b4b0d3255bfef95601890afd80709/DONOTDELETE'
      } else helperText = '/online-shop-development/DONOTDELETE'

      return helperText
    },
    step1Completed () {
      let helperBoolean = false
      let helperObject = this.$store.getters.checkoutCompleted
      if (
        helperObject.numberPortingCheck &&
        helperObject.alternateBillCheck &&
        helperObject.contactInfoFormCheck &&
        helperObject.profileFormCheck &&
        helperObject.paymentFormCheck
      ) {
        helperBoolean = true
      }
      return helperBoolean
    },
    customerData () {
      return this.$store.state.visitor.customer
    },
    basketData () {
      return this.$store.state.visitor.basket
    },
    skuCollection () {
      let helperString = ''
      for (let i = 0; i < this.basketData.length; i++) {
        if (i === this.basketData.length - 1) {
          helperString += this.basketData[i].skus[0]
        } else {
          helperString += this.basketData[i].skus[0] + ' + '
        }
      }
      return helperString
    },
    titleCollection () {
      let helperString = ''
      this.basketData.forEach(product => {
        helperString += product.title + ' '
      })
      return helperString
    },
    salesId () {
      return this.$store.state.visitor.session.salesId.effective
    },
    permissionMgmtStyle () {
      if (this.permissionManagement) {
        return 'height:auto;'
      } else return ''
    },
    checkoutComplete () {
      if (
        this.termsandconditions &&
        this.creditworthiness &&
        this.sendOrderReader &&
        this.step1Completed
      ) {
        if (this.$data.DEBUG) {
          console.log('ready for sending order')
        }
        return true
      } else return false
    },
    paymentName () {
      if (
        this.customerData.paymentDetails.alternateBillingAddress.fullName !== ''
      ) {
        return this.customerData.paymentDetails.alternateBillingAddress
          .fullName
      } else {
        return this.customerData.givenName + ' ' + this.customerData.familyName
      }
    },
    uniqueOrderId () {
      return this.$store.getters.uniqueOrderId
    }
  },
  watch: {
    errorSending: function (val) {
      if (window.ANALYTICS_ALLOWED) {
        // Tracking order form submission failure, DA-3599
        window.sncf.linkTrackVars = 'eVar72,prop33'
        window.sncf.linkTrackEvents = 'None'
        window.sncf.eVar72 = 'DCOMM-Checkout_Fallback: Ihre Bestellung kann leider gerade nicht versendet werden. Bitte versuchen Sie es zu einem späteren Zeitpunkt noch einmal.'
        window.sncf.prop33 = window.sncf.pageName
        window.sncf.tl(true, 'o', 'Checkout: Formularfehler')
        window.sncf.linkTrackVars = 'None'
        window.sncf.linkTrackEvents = 'None'
      }
      if (this.$data.DEBUG) {
        console.log('Order form submission failed. Tracking: ' + window.sncf.eVar72 + ', val: ' + val)
      }
    }
  },
  methods: {
    trackFormfield,
    sendOrder () {
      this.orderButtonAlreadyClicked = true
      // get array of forms from given name
      let myForm = document.getElementsByName(
        'checkoutFormAltExperience_9283943'
      )
      // take the first entry in the array as we know it is the only one we need
      let aform = myForm[0]
      // from this form, get the formdata by FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
      let formData = new FormData(aform)
      // sending from UAT1 IP config
      // let url = "http://172.16.42.76:4503/content/dcomm/servlets/form";

      // sending from UAT1 DNS config
      // let url = https://aem6-www-unitymedia-de-shortterm.uat.upc.biz/content/dcomm/servlets/form

      var self = this
      // var debug = this.$data.DEBUG
      this.sendOrderReader = false
      this.spinButton = true
      this.$http
        .post('/content/dcomm/servlets/form', formData)
        .then(function (response) {
          // if (debug) {
          console.log('1: Response status: ' + response.data.status)
          console.log('1: Response technical error: ' + response.data.technicalError)
          // }
          if (response.data.status === 'SUCCESS') {
            self.$router.push('/privatkunden/checkout_confirmation')
          } else if (response.data.status === 'INTERNAL_SERVER_ERROR') {
            self.errorSending = true

            self.spinButton = false
            self.sendOrderReader = true
            // if (debug) {
            console.log('2: Response status: ' + response.data.status)
            console.log('2: Response technical error: ' + response.data.technicalError)
            // }
          } else {
            self.errorSending = true

            self.spinButton = false
            self.sendOrderReader = true
            // if (debug) {
            console.log('3: Response status: ' + response.data.status)
            console.log('3: Response technical error: ' + response.data.technicalError)
            // }
          }
        })
        .catch(function (error) {
          console.warn('Form servlet responded: ' + error + '. But order was very likely sent anyway.')
          // This is a risky hotfix for when email servlet sends emails but returns error anyway.
          self.errorSending = true // comment out for hotfix
          // self.$router.push('/privatkunden/checkout_confirmation') // use only for hotfix
          self.spinButton = false // true (for hotfix)
          self.sendOrderReader = true
        })
    },
    updatePermissionManagement () {
      if (this.$data.DEBUG) {
        console.log('box of PermissionManagement hit')
      }
      this.$store.commit('setPermissionManagement', this.permissionManagement)
    },
    updateCreditworthiness () {
      if (this.$data.DEBUG) {
        console.log('box of CreditWorthinessCheck hit')
      }
      this.$store.commit('setCreditWorthiness', this.creditworthiness)
    },
    updateTermsAndConditions () {
      if (this.$data.DEBUG) {
        console.log('box of Terms and Conditions hit')
      }
      this.$store.commit('setTermsAndConditions', this.termsandconditions)
    },
    updateEmailChannel () {
      if (this.$data.DEBUG) {
        console.log('box of PermissionManagement hit')
      }
      this.$store.commit('setEmailChannel', this.emailchannel)
    },
    updateSmsChannel () {
      if (this.$data.DEBUG) {
        console.log('box of PermissionManagement hit')
      }
      this.$store.commit('setSMSChannel', this.smschannel)
    },
    updateTelephoneChannel () {
      if (this.$data.DEBUG) {
        console.log('box of PermissionManagement hit')
      }
      this.$store.commit('setTelephoneChannel', this.telephonechannel)
    },
    updatePostChannel () {
      if (this.$data.DEBUG) {
        console.log('box of PermissionManagement hit')
      }
      this.$store.commit('setPostChannel', this.postchannel)
    }
  },
  mounted () {
    if (this.$data.MOCKDATA) {
      this.$store.commit('setMockData')
    }
  }
}
</script>

<style scoped>
.hidden_field.parbase.section {
  display: none;
}
.errorbar {
  padding: 10px;
}
.error-message span {
  width: 80%;
}
.btn.full-btn.inactive {
  color: var(--color-vodafone-silver);
  background-color: var(--color-vodafone-light-grey);
}
</style>
