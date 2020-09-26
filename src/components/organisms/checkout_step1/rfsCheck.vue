<template>
  <div class="installationaddress parbase section">
    <!-- TODO: Clean out unused CSS IDs and classes. -->
    <fieldset class="fieldset wideform" id="personal_data">
      <div
        v-show="rfsErrors.length > 0 || this.$data.RFSFALLBACK === true"
        class="errorMessages section"
        id="availability_error"
      >
        <div class="js_errorbar">
          <div class="content">
            <div class="important" v-if="this.$data.RFSFALLBACK === true || this.rfsErrors[0] === 'forced_error'">
              Bitte geben Sie die gewünschte Anschlussadresse möglichst exakt an. Nach Ihrer Bestellung prüfen wir die Adresse für Sie manuell und setzen uns falls nötig mit Ihnen in Verbindung.
            </div>
            <div class="important" v-else>
              Lieber Interessent, leider ist die automatische Verfügbarkeitsprüfung derzeit nicht funktionsfähig.<br><br><u>Sie können aber weiter bestellen:</u> Bitte geben Sie die gewünschte Anschlussadresse möglichst exakt an. Nach Ihrer Bestellung prüfen wir die Adresse für Sie manuell und setzen uns falls nötig mit Ihnen in Verbindung.
            </div>
            <rfs-fallback-cablemax-availability-notice />
          </div>
        </div>
      </div>

      <!-- If any RFS Ajax request throws error, switch to static input form. -->
      <div class="rfs-fallback" v-if="rfsErrors.length > 0 || this.$data.RFSFALLBACK  === true">
        <rfs-check-fallback />
      </div>
      <div class="rfs-standard" v-else>
        <h3 class="h5 bold" v-if="this.$data.window.width > 819">
          Hier möchten Sie Unitymedia nutzen
          <tooltip
            content="Die Eingabe Ihrer Anschluss-Adresse nutzen wir parallel als Verfügbarkeitscheck. So erfahren Sie gleich, ob Unitymedia und Ihr Wunsch-Produkt für Ihre Adresse verfügbar sind."
          />
        </h3>
        <div class="formrow">
          <div
            class="formrow-col"
            :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}"
          >
            <float-label>
              <input
                type="text"
                id="zip"
                name="zip"
                v-validate="{ required: true, min: 5, max: 5, regex: /[0-9]{5}$/ }"
                :class="{'input required js_ac-zip js_av_post_code': true, 'error': errors.has('zip') }"
                pattern="[0-9]{5}"
                maxlength="5"
                minlength="5"
                aria-required="true"
                tabindex="6"
                @change="updateRfsZip"
                v-model="inputRfsZip"
                placeholder="PLZ *"
                @click="trackFormfield('zip')"
                :disabled="formInactive"
              />
            </float-label>
          </div>
          <div
            id="selectCities"
            class="formrow-col"
            :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}"
          >
            <float-label :dispatch="false">
              <select
                class="select required standard-font-color disable js_ac-city js_av_city"
                id="city"
                name="city"
                maxlength="25"
                aria-required="true"
                tabindex="7"
                v-model="selectedCity"
                @change="requestRFSData( 'STREETS_FOR_POSTCODE', selectedCity, '' ), updateRfsCity(selectedCity)"
                @click="trackFormfield('city')"
                :disabled="formInactive"
              >
                <option value disabled selected>Wohnort *</option>
                <option
                  v-for="resultStreet of resultsStreets"
                  :key="resultStreet.city"
                  v-bind:value="resultStreet.city"
                >{{ resultStreet.city }}</option>
              </select>
            </float-label>
          </div>
        </div>
        <div class="formrow">
          <div
            class="formrow-col street"
            :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}"
          >
            <float-label :dispatch="false">
              <select
                class="select required disable js_ac-street js_av_street js_np_street"
                id="street"
                name="street"
                maxlength="50"
                aria-required="true"
                tabindex="8"
                v-model="selectedStreet"
                @change="requestRFSData( 'BUILDINGS_FOR_STREET', selectedCity, selectedStreet ), updateRfsStreet(selectedStreet)"
                @click="trackFormfield('street')"
                :disabled="formInactive"
              >
                <option disabled value selected>Straße *</option>
                <option
                  v-for="resultBuilding of resultsBuildings"
                  :key="resultBuilding.streetName"
                  v-bind:value="resultBuilding.streetName"
                >{{ resultBuilding.streetName }}</option>
              </select>
            </float-label>
          </div>
          <div
            class="formrow-col house_number"
            :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}"
          >
            <float-label :dispatch="false">
              <select
                class="select required disable js_ac-streetno js_av_house_number"
                id="streetno"
                name="streetno"
                maxlength="12"
                aria-required="true"
                tabindex="9"
                v-model="selectedNumberAddressIdRegion"
                @change="requestRFSResult( selectedNumberAddressIdRegion, inputRfsZip, selectedCity, selectedStreet), updateRfsHouseNumber(selectedNumberAddressIdRegion)"
                @click="trackFormfield('streetno')"
                :disabled="formInactive"
              >
                <option disabled value selected>Nr. *</option>
                <option
                  v-for="resultNumber of resultsNumbers"
                  :key="resultNumber.addressId"
                  v-bind:value="resultNumber.houseNumber + ';' + resultNumber.addressId + ';' + resultNumber.region"
                >{{ resultNumber.houseNumber }}</option>
              </select>
            </float-label>
          </div>
        </div>

        <div class="formrow" v-show="readyForService.status !== 'idle'">
          <!-- CR-51781: Show simple banner and link to Vodafone instaed of text-only message if result 'out-of-footprint' -->
          <div
            v-if="readyForService.status !== 'internetNotAvailable'"
            class="formrow-col w-1of1"
            :class="{'ume-spinner': readyForService.status === 'searching', 'error': readyForService.status === 'internetNotAvailable', 'success': readyForService.status === 'internetAvailable' || readyForService.status === 'gigabitAvailable'}"
          >{{ readyForService.text }}
          </div>
          <div v-else class="formrow-col w-1of1">
            <rfs-vodafone-banner />
          </div>

          <div class="alternative-offer cablemax-500 formrow-col w-1of1" v-if="readyForService.status === 'internetAvailable'">
            <div v-if="JSON.stringify(this.$store.getters.basketSkuList) === JSON.stringify(['2P_RIP_1000_1'])">
              <p>
                Red Internet and Phone 1000 Cable ist leider nicht verfügbar. Sie können stattdessen <router-link to="/privatkunden/kombipakete/2play/internet-phone-500" class="link">Red Internet and Phone 500 Cable</router-link> wählen.
              </p>
              <cablemax-rfs-alternative-product-dialog
                :isVisible="true"
                productLink="/privatkunden/kombipakete/2play/internet-phone-500"
              />
            </div>
            <div v-if="JSON.stringify(this.$store.getters.basketSkuList) === JSON.stringify(['2P_RIP_1000_1'],['HRZ_TV_0420_1'])">
              <p>
                Red Internet and Phone 1000 Cable + Horizon TV ist leider nicht verfügbar. Sie können stattdessen <router-link to="/privatkunden/kombipakete/3play/internet-phone-tv-500" class="link">Red Internet and Phone 500 Cable + Horizon TV</router-link> wählen.
              </p>
              <cablemax-rfs-alternative-product-dialog
                :isVisible="true"
                productLink="/privatkunden/kombipakete/3play/internet-phone-tv-500"
              />
            </div>
          </div>

        </div>

      </div>
      <div class="formrow">
        <div class="formrow-col">
          <label class="tick js_toggle-trigger">
            <input
              type="checkbox"
              class="product-option"
              name="configuration_selected_options_TELEPORT"
              autocomplete="off"
              tabindex="10"
              @click="toggleRfsFallback('forced_error')"
              :checked="rfsFallbackStaticSelected"
            />
          <span class="tick-label">
            Adresse nicht gefunden / Eingabe ohne Prüfung
            <tooltip
              content="Wenn Sie Ihre Adresse nicht auswählen konnten, dann ist sie leider noch nicht an unser Kabelnetz angeschlossen. Da wir ständig am Ausbau unserer Reichweite arbeiten, informieren wir Sie gerne, wenn unsere Produkte bei Ihnen verfügbar sind. Nutzen Sie dazu einfach unseren Informationsservice.
                  <br>
                  <br>
                  <a
                    href='https://www.unitymedia.de/privatkunden/netzanschluss/ausbaugebiete/verfuegbarkeitsanfrage'
                  >Zum Informationsservice</a>
                  <br>
                  <br>Möglich ist auch eine Störung der automatischen Prüfung. Bitte klicken Sie dann auf 'Eingabe ohne Prüfung' und geben Sie die gewünschte Anschlussadresse ein. Wir prüfen dann für Sie und melden uns mit dem Ergebnis der Verfügbarkeitsprüfung zurück."
            />
          </span>
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
/* Mind that there are two different RFS checks in Dcomm, one in OAS sidebar, another slightly different one in checkout page 1. Here we use the OAS example which works without token and uses Get for the final request. */
// import tooltip from '@/components/atoms/tooltip.vue'
import rfsCheckFallback from '@/components/organisms/checkout_step1/rfsCheckFallback.vue'
import axios from 'axios'
import updateSalesId from '@/helper/updateSalesId'
import trackFormfield from '@/helper/trackFormfield'
import tooltip from '@/components/atoms/tooltip.vue'
import rfsVodafoneBanner from '@/components/organisms/checkout_step1/rfsVodafoneBanner.vue'
import RfsFallbackCablemaxAvailabilityNotice from '@/components/atoms/RfsFallbackCablemaxAvailabilityNotice.vue'
import CablemaxRfsAlternativeProductDialog from '@/components/molecules/CablemaxRfsAlternativeProductDialog.vue'

export default {
  name: 'rfsCheck',
  components: {
    tooltip,
    rfsCheckFallback,
    rfsVodafoneBanner,
    RfsFallbackCablemaxAvailabilityNotice,
    CablemaxRfsAlternativeProductDialog
  },
  data: () => ({
    inputRfsZip: '',
    rfsErrors: [], // 'errors' is already in use by VeeValidate
    rfsUrl: '/content/dcomm-services.rfsinstallationinfo/',
    // This RFS result would report max 400 availability
    // rfsResultUrl: '/content/dcomm-unitymedia-de/dialog_content/rfs-dialog/_jcr_content/content/rfscheck.result',
    // This RFS result will report 500 or 1000 MBit availability (Besit)
    rfsResultUrl: '/content/dcomm-unitymedia-de/dialog_content/rfs_besit/_jcr_content/content/rfscheck.result',
    resultResponseString: '',
    results: null,
    resultsStreets: null,
    resultsBuildings: null,
    resultsNumbers: null,
    selectedCity: '',
    selectedStreet: '',
    selectedNumberAddressIdRegion: '',
    readyForService: {
      status: 'idle',
      text: 'RFS Check unberührt'
    },
    formInactive: false,
    rfsFallbackStaticSelected: false
  }),
  methods: {
    trackFormfield,
    updateSalesId,
    trackRfsResultOutOfFootprint () {
      // Tracking RFS address out of footprint/ Unitymedia not available
      // negative rfs result, 'nrfs', DA-3599
      if (window.ANALYTICS_ALLOWED) {
        // If tracking is not allowed don't trigger it.
        window.sncf.clearVars()
        window.sncf.eVar44 = 'Digital Commerce Fallback' // Checkout type
        window.sncf.events = 'event99' // Checkout step1 & nrfs
        window.sncf.products = this.$store.getters.basketSncfProductsList // basket
        window.sncf.pageName = 'privatkunden/checkout_step1:nrfs' // content description
        window.sncf.t() // trigger tracking
      }

      if (this.$data.DEBUG) {
        console.log(
          'RFS result out of footprint. Tracking: ' +
            window.sncf.eVar44 +
            ', products: ' +
            window.sncf.products +
            ', page: ' +
            window.sncf.pageName
        )
      }
    },
    forceRfsFallback (fallbackCause) {
      // Simulate RFS error to force static fallback RFS form display.
      // Reason: We encountered case that RFS check returned status 200 OK but response contained only
      // non-standard text error message or was empty.
      console.warn('Forced manual RFS form, probably due to faulty service response.')
      if (fallbackCause === 'forced_error') {
        this.rfsErrors.push('forced_error')
      } else {
        this.rfsErrors.push('caught_exception')
      }
      this.rfsFallbackStaticSelected = true
    },
    toggleRfsFallback (message) {
      this.rfsFallbackStaticSelected = !this.rfsFallbackStaticSelected
      if (this.rfsFallbackStaticSelected === true) {
        this.forceRfsFallback(message)
      } else {
        // Reset RFS error observer array.
        this.rfsErrors.splice(0)
        // Reset standard zip input so search gets triggered upon new entry
        this.inputRfsZip = ''
      }
    },
    updateRfsZip () {
      this.$store.commit('setRfsZip', this.inputRfsZip)

      if (this.inputRfsZip.length === 5) {
        if (this.$data.MOCKDATA) {
          import('@/assets/mockdata/rfsMock.js')
            .then(module => {
              console.log(module.default.mockData)
              this.resultsStreets = module.default.mockData.zip
              this.resultsBuildings = module.default.mockData.cities
              this.resultsNumbers = module.default.mockData.streets
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          this.readyForService.status = 'touched'
          this.readyForService.text = ' Bitte Adresse vollständig ausfüllen...'
          this.resultsStreets = 'Wähle Stadt'
          this.resultsBuildings = 'Wähle Straße'
          this.resultsNumbers = 'Wähle Hausnummer'
          this.requestRFSData('CITIES_FOR_POSTCODE', '', '')
        }
      }

      if (this.$data.DEBUG) {
        console.log('zip characters: ' + this.inputRfsZip.length)
      }
    },
    updateRfsCity (city) {
      this.$store.commit('setRfsCity', city)
    },
    updateRfsStreet (street) {
      this.$store.commit('setRfsStreet', street)
    },
    updateRfsHouseNumber (addressNumberIdRegion) {
      const houseNumber = addressNumberIdRegion.split(';')[0]
      this.$store.commit('setRfsHouseNumber', houseNumber)
    },
    updateRfsRegion (region) {
      this.$store.commit('setRfsRegion', region)
    },
    updateRfsBuildingId (buildingId) {
      this.$store.commit('setRfsBuildingId', buildingId)
    },
    setInternetAvailability (internetAvailability) {
      this.$store.commit('setRfsInternetAvailability', internetAvailability)
    },
    setGigabitAvailability (gigabitAvalability) {
      this.$store.commit('setRfsGigabitAvailability', gigabitAvalability)
    },
    setReadyForService (readyForService) {
      this.$store.commit('setReadyForService', readyForService)
    },
    setSalesIdEffective (salesIdEffective) {
      this.$store.commit('setSalesIdEffective', salesIdEffective)
    },
    requestRFSData (rfsServiceName, city, streetName) {
      if (this.$data.DEBUG) {
        console.log(
          '#### this.rfsUrl: ' +
            this.rfsUrl +
            ', rfsServiceName: ' +
            rfsServiceName +
            ', streetName: ' +
            streetName
        )
      }
      this.readyForService.status = 'searching'
      this.readyForService.text =
        ' Weitere Angaben werden geladen. Bitte warten...'
      this.formInactive = true
      if (this.$data.MOCKDATA === true) {
        this.readyForService.status = 'idle'
        this.formInactive = false
        console.log('moving on')
      } else {
        this.formInactive = true

        // CR-48944: These are deviations from the previous naming pattern
        let rfsServiceNameType = rfsServiceName
        if (rfsServiceName === 'CITIES_FOR_POSTCODE') {
          rfsServiceNameType = 'CITIES_FOR_POST_CODE'
        }
        if (rfsServiceName === 'STREETS_FOR_POSTCODE') {
          rfsServiceNameType = 'STREETS_FOR_POST_CODE'
        }

        axios
          .post(
            this.rfsUrl + rfsServiceName + '.json',
            'cty=DE&chl=Dcom&pCode=' +
              this.inputRfsZip +
              '&streetName=' +
              streetName +
              '&city=' +
              city +
              '&region=&type=' +
              rfsServiceNameType,
            {
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }
          )
          .then(response => {
            let responsePostCode = null
            try {
              responsePostCode = response.data[0].postcode
            } catch (e) {
              console.warn('No responsePostCode available. Exception: ' + e)
            }

            if (this.$data.DEBUG) {
              console.log(
                '### requestRFSData() Debug log: this.inputRfsZip: ' +
                  this.inputRfsZip +
                  ' city: ' +
                  city +
                  ' streetName: ' +
                  streetName +
                  ' houseNumber: ' +
                  response.data[0].houseNumber +
                  ' rfsServiceName: ' +
                  rfsServiceName +
                  ' postcode: ' +
                  responsePostCode +
                  ' has type of ' +
                  typeof (responsePostCode)
              )
              console.log('Response: ' + response)
              console.table(response)
              this.resultResponseString = JSON.stringify(response.data[0])
            }

            if (typeof (responsePostCode) !== 'string') {
              // If response data doesn't contain a postcode string then response was
              // a non-standard error message, thus falling back to manual RFS form.
              this.forceRfsFallback('faulty_response')
              // Break then chain with empty callback (noop)
              // return {then: () => {}}
              throw new Error('No postcode in data response. Server error?')
            }

            switch (rfsServiceName) {
              case 'CITIES_FOR_POSTCODE':
                this.resultsStreets = response.data
                if (this.$data.DEBUG) {
                  this.resultsStreets.forEach(function (street, index) {
                    console.log('RFS Response ' + index + ': ' + street.city)
                  })
                }
                break
              case 'STREETS_FOR_POSTCODE':
                this.resultsBuildings = response.data
                if (this.$data.DEBUG) {
                  this.resultsBuildings.forEach(function (street, index) {
                    console.log(
                      'RFS Response ' + index + ': ' + street.streetName
                    )
                  })
                }
                break
              case 'BUILDINGS_FOR_STREET':
                this.resultsNumbers = response.data
                if (this.$data.DEBUG) {
                  this.resultsNumbers.forEach(function (street, index) {
                    console.log(
                      'RFS Response ' + index + ': ' + street.houseNumber
                    )
                  })
                }
                break
              default:
                this.results = response.data // currently unused
            }
            this.readyForService.status = 'idle'
            this.readyForService.text = ''
            this.formInactive = false
          })
          .catch(e => {
            console.log('An error occurred in requestRFSData: ' + e)
            // this.rfsErrors.push(e)
            this.forceRfsFallback(e)
            this.readyForService.status = 'error'
            this.readyForService.text =
              ' Es ist ein Fehler aufgetreten. Versuchen Sie es später noch einmal oder nutzen Sie die manuelle Adresseingabe.'
            this.formInactive = false
          })
      }
    },
    requestRFSResult: function (
      addressNumberIdRegion,
      postcode,
      city,
      streetName
    ) {
      // CAUTION: Sending incorrect addressId or other mixed up address details may result in inaccurate response,
      // BUT will NOT cause an error message!
      const houseNumber = addressNumberIdRegion.split(';')[0]
      const addressId = addressNumberIdRegion.split(';')[1]
      this.updateRfsBuildingId(addressId)
      const region = addressNumberIdRegion.split(';')[2]
      this.updateRfsRegion(region)

      // Passing skuCode '2play_1000_1' will result in gigabit-availability response
      // (e.g. for Uhlandstr. 50, 44791 Bochum).
      // Gigabit availability is shown for *all* even if only 'internet available' should be displayed,
      // thus commented out. Empty skuCode string will trigger old search with 400 product teaser.
      // const skuCode = '3PLAY_FLY_1000_1' // TODO: Pass actual SKU here? (Why?) // '' // '2play_1000_1'

      const skuCode = '2P_RIP_1000_1'

      const RFS_RESPONSE = {
        GIGABIT_SERVICE_AVAILABLE: 'Vodafone CableMax 1000 ist verfügbar',
        BASIC_SERVICE_AVAILABLE: 'Vodafone CableMax 1000 ist an Deiner Adresse noch nicht verfügbar.'
        /*
        GIGABIT_SERVICE_AVAILABLE: 'Vodafone Red Internet and Phone 1000 Cable ist verfügbar',
        BASIC_SERVICE_AVAILABLE: 'Vodafone Red Internet and Phone 1000 Cable ist an Deiner Adresse noch nicht verfügbar.'
        */
        // NO_SERVICE_AVAILABLE: 'An dieser Adresse ist noch kein Produkt von Unitymedia verfügbar.' // else/default
      }

      const that = this

      this.setSalesIdEffective(this.updateSalesId(region))

      this.readyForService.status = 'searching'
      this.readyForService.text =
        ' Verfügbarkeitsinfo an der Adresse wird abgerufen...'
      this.formInactive = true
      if (this.$data.MOCKDATA === true) {
        if (
          postcode === '50933' &&
          city === 'Köln' &&
          streetName === 'Aachener Str.' &&
          houseNumber === '746-750'
        ) {
          that.setInternetAvailability(true)
          that.setGigabitAvailability(false)
          that.setReadyForService(true)
          that.readyForService.status = 'internetAvailable'
          that.readyForService.text =
            ' Unitymedia ist an der Adresse verfügbar. ✓'
        } else {
          that.setInternetAvailability(false)
          that.setGigabitAvailability(false)
          that.setReadyForService(false)
          that.readyForService.status = 'internetNotAvailable'
          that.readyForService.text =
            ' Unitymedia ist an der Adresse leider nicht verfügbar. ✗'
          // 'out of footprint'
          that.trackRfsResultOutOfFootprint()
        }
        this.formInactive = false
      } else {
        axios
          .get(
            this.rfsResultUrl +
              '?buildingid=' +
              addressId +
              '&slots=rfstv%2Crfsinternet%2Crfsphone%2Crfsmobile%2Crfsgigabit%2Crfscheckresultupsell%2Crfsbottomteaser&page=&skucode=' +
              skuCode +
              '&zip=' +
              postcode +
              '&city=' +
              city +
              '&street=' +
              streetName +
              '&streetno=' +
              houseNumber
          )
          .then(function (response) {
            // Backend service responds with HTML snippet (product banners etc)
            const rfsResultHtml = response.data

            if (that.$data.DEBUG) {
              // 'this' has different scope in here!
              console.log('Response HTML: ' + rfsResultHtml)
            }
            // Information about product availability depends on received banner markup in server response.
            // Old check without Besit (still available in OAS sidebar)
            // if (rfsResultHtml.indexOf('data-rfsinternet=') >= 0) {
            //   that.setInternetAvailability(true)
            //   that.setGigabitAvailability(false)
            //   that.setReadyForService(true)
            //   that.readyForService.status = 'internetAvailable'
            //   that.readyForService.text =
            //     ' Unitymedia ist an der Adresse verfügbar. ✓'
            // } else if (rfsResultHtml.indexOf('data-rfsgigabit=') >= 0) {
            //   that.setInternetAvailability(true)
            //   that.setGigabitAvailability(true)
            //   that.setReadyForService(true)
            //   that.readyForService.status = 'gigabitAvailable' // currently unused
            //   that.readyForService.text =
            //     ' Unitymedia Gigabit ist an der Adresse verfügbar. ✓'
            // } else {
            //   that.setInternetAvailability(false)
            //   that.setGigabitAvailability(false)
            //   that.setReadyForService(false)
            //   that.readyForService.status = 'internetNotAvailable'
            //   that.readyForService.text =
            //     ' Unitymedia ist an der Adresse leider nicht verfügbar. ✗'
            //   // 'out of footprint'
            //   that.trackRfsResultOutOfFootprint()
            // }

            if (rfsResultHtml.indexOf(RFS_RESPONSE['BASIC_SERVICE_AVAILABLE']) >= 0) {
              that.setInternetAvailability(true)
              that.setGigabitAvailability(false)
              that.setReadyForService(true)
              that.readyForService.status = 'internetAvailable'
              that.readyForService.text =
                'Vodafone ist an der Adresse verfügbar (aber noch kein Red Internet and Phone 1000). ✓'
            } else if (rfsResultHtml.indexOf(RFS_RESPONSE['GIGABIT_SERVICE_AVAILABLE']) >= 0) {
              that.setInternetAvailability(true)
              that.setGigabitAvailability(true)
              that.setReadyForService(true)
              that.readyForService.status = 'gigabitAvailable' // currently unused, use this as CableMax flag?
              that.readyForService.text =
                'Vodafone ist an der Adresse verfügbar (auch Red Internet and Phone 1000). ✓'
            } else {
              that.setInternetAvailability(false)
              that.setGigabitAvailability(false)
              that.setReadyForService(false)
              that.readyForService.status = 'internetNotAvailable'
              that.readyForService.text =
                'Vodafone ist an der Adresse leider nicht verfügbar. ✗'
              // 'out of footprint'
              that.trackRfsResultOutOfFootprint()
            }

            if (that.$data.DEBUG) {
              console.log(
                'readyForService Status: ' +
                  that.readyForService.status +
                  ' ' +
                  that.readyForService.text
              )
            }
          })
          .catch(rfsError => {
            console.log('An error occurred in requestRFSResult: ' + rfsError)
            // reset form and store?
          })
        this.formInactive = false
      }
    }
  },
  mounted () {
    // if Mockdata is true, load the rfsMock.js and replace all options with preconfigured adress-infos
    if (this.$data.MOCKDATA) {
      import('@/assets/mockdata/rfsMock.js')
        .then(module => {
          console.log(module.default.mockData)
          this.resultsStreets = module.default.mockData.zip
          this.resultsBuildings = module.default.mockData.cities
          this.resultsNumbers = module.default.mockData.streets
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.formrow {
  padding-bottom: 0px;
  padding-left: 15px;
}
.formrow-col {
  margin: 0;
  padding-left: 0;
  padding-right: 15px;
}
.fieldset {
  margin-bottom: 0px;
}
input,
select {
  margin-top: 10px;
}
@media screen and (max-width: 879px) {
  .formrow {
    padding-bottom: 10px;
  }
  .checkout .wideform .formrow > .label {
    display: none;
  }
}

.tick-label.fresh {
  margin: 0.2rem 1.5rem 0.6rem 3rem;
}
#availability_error .important {
  margin: 10px 0;
  border: 1px solid grey;
  padding: 1em;
  border-radius: 9px;
  background: lightyellow;
}
.rfs-standard .success {
  color: #40920f;
}
.rfs-standard .error {
  color: #af0b37;
}
a.subtle {
  color: gray;
  cursor: pointer;
}
@media screen and (max-width: 479px) {
  .fieldset {
    margin: 0;
  }
  .formrow {
    padding: 0 8px 0 16px;
  }
  .formrow-col {
    padding: 20px 8px 0 0;
  }
  .tick-label {
    margin: 0.2rem 1.5rem 1rem 2.2rem;
    font-size: 1.8rem;
  }
  .tick > input[type="checkbox"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="checkbox"]:checked ~ .tick-label::before {
    width: 24px;
    height: 24px;
    font-size: 1.6em;
  }
  span.link {
    color: #666666;
  }
  span.tick-label {
    padding-left: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  input#zip {
    font-size: 1.3em;
  }
  select#city,
  select#street,
  select#streetno {
    font-size: 1.2em;
  }
}
</style>
