<template>
  <div class="billingaddress section" :class="{'': alternateBillCheck}">
    <div
      :class="{'formrow': this.$data.window.width < 479,'formrow-col': this.$data.window.width >= 479}"
      class="w-1of1 js_toggle"
    >
      <label class="tick js_toggle-trigger">
        <input
          v-model="checkedAlternateBillAddressChk"
          type="checkbox"
          id="alternativeBillAddressChk"
          name="alternativeBillAddressChk"
          tabindex="12"
          @click="trackFormfield('alternativeBillAddressChk')"
        >
        <span class="tick-label fresh">
          <span>Abweichende Rechnungsadresse</span>
        </span>
      </label>
    </div>
    <div class="js_toggle-wrapper" v-if="checkedAlternateBillAddressChk">
        <p>Falls Sie keine abweichende Rechnungsadresse angeben, wird Ihre Rechnung auf die oben genannte Adresse ausgestellt.</p>
      <fieldset class="fieldset wideform">
        <div class="formrow">
          <div class="flex w-1of1 title">
            <label class="tick">
              <input
                type="radio"
                name="bill_salutation"
                value="Frau"
                class="required bill_salutationFrau"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="13"
                v-model="alternateBillTitle"
                v-validate="'required'"
                @click="trackFormfield('bill_salutation_frau')"
              >
              <span class="tick-label fresh">Frau</span>
            </label>
            <label class="tick">
              <input
                type="radio"
                name="bill_salutation"
                value="Herr"
                class="required bill_salutationHerr"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="14"
                v-model="alternateBillTitle"
                v-validate="'required'"
                @click="trackFormfield('bill_salutation_herr')"
              >
              <span class="tick-label fresh">Herr</span>
            </label>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col w-1of1">
            <float-label>
              <input
                type="text"
                id="bill_firstname"
                name="bill_firstname"
                v-validate="{ 'required':true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,\- ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_firstname'), 'valid':(billFirstnameFlags.valid && billFirstnameFlags.dirty)}"
                minlength="2"
                maxlength="32"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="15"
                v-model="alternateBillGivenName"
                @click="trackFormfield('bill_firstname')"
                placeholder="Vorname *"
              >
            </float-label>
            <span v-show="errors.has('bill_firstname')">Bitte Vornamen korrigieren</span>
          </div>
          <span>{{ errors.first('bill_firstname') }}</span>
        </div>
        <div class="formrow">
          <div class="formrow-col w-1of1">
            <float-label>
              <input
                type="text"
                id="bill_lastname"
                name="bill_lastname"
                v-validate="{ 'required':true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,\- ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_lastname'), 'valid':(billLastnameFlags.valid && billLastnameFlags.dirty) }"
                minlength="2"
                maxlength="32"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="16"
                v-model="alternateBillFamilyName"
                @click="trackFormfield('bill_lastname')"
                placeholder="Nachname *"
              >
            </float-label>
            <span v-show="errors.has('bill_lastname')">Bitte Nachnamen korrigieren</span>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="number"
                id="bill_zip"
                name="bill_zip"
                v-validate="{ 'required':true, min: 2, max: 5, regex:  /[0-9]{5}/ }"
                pattern="[0-9]{5}"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_zip'), 'valid':(billZipFlags.valid && billZipFlags.dirty) }"
                minlength="5"
                maxlength="5"
                value
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="17"
                v-model="alternateBillZip"
                @click="trackFormfield('bill_zip')"
                placeholder="PLZ *"
              >
            </float-label>
            <span v-show="errors.has('bill_zip')">Bitte Postleitzahl korrigieren</span>
          </div>
          <div class="formrow-col" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="bill_city"
                name="bill_city"
                v-validate="{ 'required':true, min: 2, max: 25, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_city') , 'valid':(billCityFlags.valid && billCityFlags.dirty)}"
                minlength="2"
                maxlength="25"
                value
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="18"
                v-model="alternateBillCity"
                @click="trackFormfield('bill_city')"
                placeholder="Wohnort *"
              >
            </float-label>
            <span v-show="errors.has('bill_city')">Bitte Stadt korrigieren</span>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="bill_street"
                name="bill_street"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_street'), 'valid':(billStreetFlags.valid && billStreetFlags.dirty) }"
                minlength="2"
                maxlength="50"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="19"
                v-model="alternateBillStreet"
                v-validate="{'required':true, min: 2, max: 50, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+$/ }"
                @click="trackFormfield('bill_street')"
                placeholder="Straße *"
              >
            </float-label>
            <span v-show="errors.has('bill_street')">Bitte Strasse korrigieren</span>
          </div>
          <div class="formrow-col" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="bill_streetno"
                name="bill_streetno"
                :class="{'input': true, 'required': true, 'error': errors.has('bill_streetno'), 'valid':(billStreetNoFlags.valid && billStreetNoFlags.dirty) }"
                maxlength="12"
                aria-required="true"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="20"
                v-model="alternateBillHouseNumber"
                v-validate="{'required':true, min: 1, regex: /^\d+[a-zA-Z]*$/ }"
                @click="trackFormfield('bill_streetno')"
                placeholder="Hausnr. *"
              >
            </float-label>
            <span v-show="errors.has('bill_streetno')">Bitte Hausnummer korrigieren</span>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col w-1of1">
            <float-label>
              <input
                type="text"
                id="address_additional_differentiation"
                name="address_additional_differentiation"
                maxlength="30"
                :disabled="!checkedAlternateBillAddressChk"
                tabindex="21"
                v-model="alternateBillExtraInformation"
                @click="trackFormfield('address_additional_differentiation')"
                placeholder="Adresszusatz *"
              >
            </float-label>
          </div>
        </div>
        <span v-if="$data.DEBUG">Billing Address Form Check Parameter: {{alternateBillCheck}}</span>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'billingAdress',
  methods: {
    trackFormfield,
    billingAddressFormValid () {
      return (
        this.billSalutationFlags.valid &&
        this.billFirstnameFlags.valid &&
        this.billLastnameFlags.valid &&
        this.billZipFlags.valid &&
        this.billCityFlags.valid &&
        this.billStreetFlags.valid &&
        this.billStreetNoFlags.valid
      )
    }
  },
  computed: {
    ...mapFields({
      billSalutationFlags: 'bill_salutation',
      billFirstnameFlags: 'bill_firstname',
      billLastnameFlags: 'bill_lastname',
      billZipFlags: 'bill_zip',
      billCityFlags: 'bill_city',
      billStreetFlags: 'bill_street',
      billStreetNoFlags: 'bill_streetno'
    }),
    checkedAlternateBillAddressChk: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress
          .alternativeWanted
      },
      set (value) {
        this.$store.commit('setAlternateBillWanted', value)
      }
    },
    alternateBillTitle: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.title
      },
      set (value) {
        this.$store.commit('setAlternateBillTitle', value)
      }
    },
    alternateBillExtraInformation: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress
          .extraInformation
      },
      set (value) {
        this.$store.commit('setAlternateBillExtraInformation', value)
      }
    },
    alternateBillHouseNumber: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress
          .houseNumber
      },
      set (value) {
        this.$store.commit('setAlternateBillHouseNumber', value)
      }
    },
    alternateBillStreet: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.street
      },
      set (value) {
        this.$store.commit('setAlternateBillStreet', value)
      }
    },
    alternateBillCity: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.city
      },
      set (value) {
        this.$store.commit('setAlternateBillCity', value)
      }
    },
    alternateBillZip: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.zip
      },
      set (value) {
        this.$store.commit('setAlternateBillZip', value)
      }
    },
    alternateBillFamilyName: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.familyName
      },
      set (value) {
        this.$store.commit('setAlternateBillFamilyName', value)
      }
    },
    alternateBillGivenName: {
      get () {
        return this.$store.state.visitor.customer.alternativeAddress.givenName
      },
      set (value) {
        this.$store.commit('setAlternateBillGivenName', value)
      }
    },
    alternateBillCheck () {
      if (!this.checkedAlternateBillAddressChk) {
        this.$store.commit('setAlternateBillCheck', true)
        return true
      } else {
        if (this.billingAddressFormValid()) {
          this.$store.commit('setAlternateBillCheck', true)
        } else {
          this.$store.commit('setAlternateBillCheck', false)
        }
      }
      return this.$store.state.visitor.checkoutFormCheck.alternateBillCheck
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
  margin: 5px;
  padding-left: 0;
  padding-right: 15px;
}
.fieldset {
  margin-bottom: 0px;
}
input, select {
  margin-top: 10px;
}
input[type="checkbox"] {
  margin-top: 0;
}

.tick-label.fresh {
  margin: 0.2rem 1.5rem 0.6rem 2.2rem;
}
@media screen and (max-width: 479px) {
  .formrow {
    padding: 0 8px 0 16px;
  }
  .formrow-col {
    padding: 20px 8px 0 0;
  }
  .tick > input[type="checkbox"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="checkbox"]:checked ~ .tick-label::before,
  .tick > input[type="radio"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="radio"]:checked ~ .tick-label::before {
    width: 24px;
    height: 24px;
    font-size: 1.6em;
  }
  .checkout input[type="radio"]:checked ~ .tick-label::after {
    width: 16px;
    height: 16px;
    background-color: #6fb621;
  }
  span.link {
    color: #666666;
  }
  .tick-label {
    padding-left: 15px;
    line-height: 24px;
    margin: 0.2rem 1.5rem 1rem 4.2rem;
    font-size: 1.6rem;
  }
  input {
    font-size: 1.2em;
  }
  .vfl-has-label {
    width: 100%;
  }
}
</style>
