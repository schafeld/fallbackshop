<template>
    <div class="rfs-fallback">
        <div class="formrow">
            <div class="formrow-col postcode" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
                <float-label>
                <input
                    type="text"
                    id="zip_fallback"
                    name="zip_fallback"
                    pattern="[0-9]{5}"
                    maxlength="5"
                    minlength="5"
                    aria-required="true"
                    tabindex="6"
                    v-validate="{ required: true, min: 5, max: 5, regex: /[0-9]{5}$/ }"
                    :class="{'input required ': true, 'error': errors.has('zip_fallback'), 'valid':(inputRfsZipFlags.valid && inputRfsZipFlags.dirty) }"
                    v-model="inputRfsZip"
                    @change="updateRfsZip"
                    @click="trackFormfield('zip_fallback')"
                    placeholder="PLZ *"
                >
                </float-label>
            </div>

            <div id="selectCities" class="formrow-col city" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
                <float-label>
                <input
                    type="text"
                    id="city_fallback"
                    name="city_fallback"
                    maxlength="25"
                    aria-required="true"
                    tabindex="7"
                    :class="{'input required ': true, 'error': errors.has('city_fallback'), 'valid':(inputRfsCityFlags.valid && inputRfsCityFlags.dirty) }"
                    v-validate="{ required: true, min: 2 }"
                    v-model="inputRfsCity"
                    @change="updateRfsCity"
                    @click="trackFormfield('city_fallback')"
                    placeholder="Wohnort *"
                >
                </float-label>
            </div>
        </div>
        <div class="formrow">
            <div class="formrow-col street" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
                <float-label>
                <input
                    type="text"
                    id="street_fallback"
                    name="street_fallback"
                    maxlength="50"
                    aria-required="true"
                    tabindex="8"
                    :class="{'input required ': true, 'error': errors.has('street_fallback'), 'valid':(inputRfsStreetFlags.valid && inputRfsStreetFlags.dirty) }"
                    v-validate="{ required: true, min: 2 }"
                    v-model="inputRfsStreet"
                    @change="updateRfsStreet"
                    @click="trackFormfield('street_fallback')"
                    placeholder="Straße *"
                >
                </float-label>
            </div>
            <div class="formrow-col house_number" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
                <float-label>
                <input
                    type="text"
                    id="streetno_fallback"
                    name="streetno_fallback"
                    maxlength="12"
                    aria-required="true"
                    tabindex="9"
                    :class="{'input required': true, 'error': errors.has('streetno_fallback'), 'valid':(inputRfsHouseNumberFlags.valid && inputRfsHouseNumberFlags.dirty) }"
                    v-validate="{ required: true, min: 1 }"
                    v-model="inputRfsHouseNumber"
                    @change="updateRfsHouseNumber"
                    @click="trackFormfield('streetno_fallback')"
                    placeholder="Nr. *"
                >
                </float-label>
            </div>
        </div>
        <span v-show="errors.has('zip_fallback') || errors.has('city_fallback') || errors.has('street_fallback') || errors.has('streetno_fallback')" class="error">Bitte <em>vollständige Anschlussadresse</em> angeben. Nur so kann von uns die Verfügbarkeit geprüft werden.</span>
    </div>
</template>

<script>
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'
import updateSalesId from '@/helper/updateSalesId'

export default {
  data: () => ({
    inputRfsZip: '',
    inputRfsCity: '',
    inputRfsStreet: '',
    inputRfsHouseNumber: ''
  }),
  computed: {
    ...mapFields({
      inputRfsZipFlags: 'zip_fallback',
      inputRfsCityFlags: 'city_fallback',
      inputRfsStreetFlags: 'street_fallback',
      inputRfsHouseNumberFlags: 'streetno_fallback'
    })
  },
  methods: {
    updateSalesId,
    trackFormfield,
    updateRfsZip () {
      this.$store.commit('setRfsZip', this.inputRfsZip)
    },
    updateRfsCity () {
      this.$store.commit('setRfsCity', this.inputRfsCity)
    },
    updateRfsStreet () {
      this.$store.commit('setRfsStreet', this.inputRfsStreet)
    },
    updateRfsHouseNumber () {
      this.$store.commit('setRfsHouseNumber', this.inputRfsHouseNumber)

      // Status readyForService etc. needs to be assumed true while RFS check is not available,
      // otherwise form validation would not pass in checkout step 1.
      // TODO: Refine this, e.g. reset to false if RFS input incomplete...
      this.$store.commit('setReadyForService', true)
      this.$store.commit('setRfsInternetAvailability', true)
      this.$store.commit('setRfsBuildingId', 'unknownrfs')
    },
    setSalesIdEffective (salesIdEffective) {
      this.$store.commit('setSalesIdEffective', salesIdEffective)
    }
  },
  mounted: function () {
    // Tracking RFS check failure (i.e. Dcomm RFS Ajax request failed)
    // no rfs result available, 'norfs', DA-3599
    // Referencing sncf from global window object avoids Vue linting error
    if (window.ANALYTICS_ALLOWED) {
      try {
        // If tracking is not allowed don't trigger it.
        window.sncf.clearVars() // clear data in sncf object
        window.sncf.eVar44 = 'Digital Commerce Fallback' // Checkout type
        window.sncf.events = 'event99' // Checkout step1 & norfs
        window.sncf.products = this.$store.getters.basketSkuList // basket
        window.sncf.pageName = 'privatkunden/checkout_step1:norfs' // content description
        window.sncf.t() // trigger tracking
      } catch (e) {
        console.warn('Tracking failed for page RFS Check Fallback. Exception: ' + e)
      }
    }

    // Fallback RFS check cannot determine region, so set default salesID unless overruled by cookie
    this.setSalesIdEffective(this.updateSalesId())

    if (this.$data.DEBUG) {
      console.log('RFS failed. Tracking: ' + window.sncf.eVar44 + ', products: ' + window.sncf.products + ', page: ' + window.sncf.pageName)
    }
  }
}
</script>

<style scoped>
.rfs-fallback {
  padding-top: 10px;
}
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
input, select {
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
@media screen and (max-width: 479px) {
  .formrow {
    padding-left: 8px;
  }
  .formrow-col {
    padding: 10px 0 8px 8px;
  }
  .tick-label {
    margin: .2rem 1.5rem 1rem 2.2rem;
    font-size: 1.8rem;
  }
  .tick > input[type="checkbox"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="checkbox"]:checked ~ .tick-label::before {
    width: 20px;
    height: 20px;
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
  input#zip_fallback,
  input#city_fallback,
  input#street_fallback,
  input#streetno_fallback {
    font-size: 1.3em;
  }
}
</style>
