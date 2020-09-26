<template>
  <div class="deliveryingaddress section" :class="{'': alternateDeliveryCheck}">
    <div
      :class="{'formrow': this.$data.window.width < 479,'formrow-col': this.$data.window.width >= 479}"
      class="w-1of1 js_toggle"
    >
      <label class="tick js_toggle-trigger">
        <input
          v-model="checkedAlternateDeliveryAddressChk"
          type="checkbox"
          id="alternativeBillAddressChk"
          name="alternativeBillAddressChk"
          tabindex="22"
          @click="trackFormfield('alternativeBillAddressChk')"
        >
        <span class="tick-label fresh">
          <span>Abweichende Lieferadresse (für Hardware)</span>
        </span>
      </label>
    </div>
    <div class="js_toggle-wrapper" v-if="checkedAlternateDeliveryAddressChk">
        <p>Falls sie keine abweichende Lieferadresse angeben, wird ihre Hardware an die oben genannte Adresse gesendet.</p>
      <fieldset class="fieldset wideform">
        <div class="formrow">
          <div class="flex w-1of1 title">
            <label class="tick">
              <input
                type="radio"
                name="delivery_salutation"
                value="Frau"
                class="required delivery_salutationFrau"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="23"
                v-model="alternateDeliveryTitle"
                v-validate="'required'"
                @click="trackFormfield('delivery_salutation_frau')"
              >
              <span class="tick-label fresh">Frau</span>
            </label>
            <label class="tick">
              <input
                type="radio"
                name="delivery_salutation"
                value="Herr"
                class="required delivery_salutationHerr"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="24"
                v-model="alternateDeliveryTitle"
                v-validate="'required'"
                @click="trackFormfield('delivery_salutation_herr')"
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
                id="delivery_firstname"
                name="delivery_firstname"
                v-validate="{ 'required':true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,\- ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_firstname'), 'valid':(deliveryFirstnameFlags.valid && deliveryFirstnameFlags.dirty)}"
                minlength="2"
                maxlength="32"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="25"
                v-model="alternateDeliveryGivenName"
                @click="trackFormfield('delivery_firstname')"
                placeholder="Vorname *"
              >
            </float-label>
            <span v-show="errors.has('delivery_firstname')">Bitte Vornamen korrigieren</span>
          </div>
          <span>{{ errors.first('delivery_firstname') }}</span>
        </div>
        <div class="formrow">
          <div class="formrow-col w-1of1">
            <float-label>
              <input
                type="text"
                id="delivery_lastname"
                name="delivery_lastname"
                v-validate="{ 'required':true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,\- ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_lastname'), 'valid':(deliveryLastnameFlags.valid && deliveryLastnameFlags.dirty) }"
                minlength="2"
                maxlength="32"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="26"
                v-model="alternateDeliveryFamilyName"
                @click="trackFormfield('delivery_lastname')"
                placeholder="Nachname *"
              >
            </float-label>
            <span v-show="errors.has('delivery_lastname')">Bitte Nachnamen korrigieren</span>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="number"
                id="delivery_zip"
                name="delivery_zip"
                v-validate="{ 'required':true, min: 2, max: 5, regex:  /[0-9]{5}/ }"
                pattern="[0-9]{5}"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_zip'), 'valid':(deliveryZipFlags.valid && deliveryZipFlags.dirty) }"
                minlength="5"
                maxlength="5"
                value
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="27"
                v-model="alternateDeliveryZip"
                @click="trackFormfield('delivery_zip')"
                placeholder="PLZ *"
              >
            </float-label>
            <span v-show="errors.has('delivery_zip')">Bitte Postleitzahl korrigieren</span>
          </div>
          <div class="formrow-col" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="delivery_city"
                name="delivery_city"
                v-validate="{ 'required':true, min: 2, max: 25, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]/ }"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_city') , 'valid':(deliveryCityFlags.valid && deliveryCityFlags.dirty)}"
                minlength="2"
                maxlength="28"
                value
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="28"
                v-model="alternateDeliveryCity"
                @click="trackFormfield('delivery_city')"
                placeholder="Wohnort *"
              >
            </float-label>
            <span v-show="errors.has('delivery_city')">Bitte Stadt korrigieren</span>
          </div>
        </div>
        <div class="formrow">
          <div class="formrow-col" :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="delivery_street"
                name="delivery_street"
                pattern="[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_street'), 'valid':(deliveryStreetFlags.valid && deliveryStreetFlags.dirty) }"
                minlength="2"
                maxlength="50"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="29"
                v-model="alternateDeliveryStreet"
                v-validate="{'required':true, min: 2, max: 50, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]+$/ }"
                @click="trackFormfield('delivery_street')"
                placeholder="Straße *"
              >
            </float-label>
          </div>
          <div class="formrow-col" :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}">
            <float-label>
              <input
                type="text"
                id="delivery_streetno"
                name="delivery_streetno"
                :class="{'input': true, 'required': true, 'error': errors.has('delivery_streetno'), 'valid':(deliveryStreetNoFlags.valid && deliveryStreetNoFlags.dirty) }"
                maxlength="12"
                aria-required="true"
                :disabled="!checkedAlternateDeliveryAddressChk"
                tabindex="30"
                v-model="alternateDeliveryHouseNumber"
                v-validate="{'required':true, min: 1, regex: /^\d+[a-zA-Z]*$/ }"
                @click="trackFormfield('delivery_streetno')"
                placeholder="Hausnr. *"
              >
            </float-label>
            <span v-show="errors.has('delivery_streetno')">Bitte Hausnummer korrigieren</span>
          </div>
        </div>
        <span v-if="$data.DEBUG">Billing Address Form Check Parameter: {{alternateDeliveryCheck}}</span>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  methods: {
    trackFormfield,
    deliveryingAddressFormValid () {
      return (
        this.deliverySalutationFlags.valid &&
        this.deliveryFirstnameFlags.valid &&
        this.deliveryLastnameFlags.valid &&
        this.deliveryZipFlags.valid &&
        this.deliveryCityFlags.valid &&
        this.deliveryStreetFlags.valid &&
        this.deliveryStreetNoFlags.valid
      )
    }
  },
  computed: {
    ...mapFields({
      deliverySalutationFlags: 'delivery_salutation',
      deliveryFirstnameFlags: 'delivery_firstname',
      deliveryLastnameFlags: 'delivery_lastname',
      deliveryZipFlags: 'delivery_zip',
      deliveryCityFlags: 'delivery_city',
      deliveryStreetFlags: 'delivery_street',
      deliveryStreetNoFlags: 'delivery_streetno'
    }),
    checkedAlternateDeliveryAddressChk: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.alternativeWanted
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryWanted', value)
      }
    },
    alternateDeliveryTitle: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.title
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryTitle', value)
      }
    },
    alternateDeliveryHouseNumber: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress
          .houseNumber
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryHouseNumber', value)
      }
    },
    alternateDeliveryStreet: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.street
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryStreet', value)
      }
    },
    alternateDeliveryCity: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.city
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryCity', value)
      }
    },
    alternateDeliveryZip: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.zip
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryZip', value)
      }
    },
    alternateDeliveryFamilyName: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.familyName
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryFamilyName', value)
      }
    },
    alternateDeliveryGivenName: {
      get () {
        return this.$store.state.visitor.customer.deliveryAddress.givenName
      },
      set (value) {
        this.$store.commit('setAlternateDeliveryGivenName', value)
      }
    },
    alternateDeliveryCheck () {
      if (!this.checkedAlternateDeliveryAddressChk) {
        this.$store.commit('setAlternateDeliveryCheck', true)
        return true
      } else {
        if (this.deliveryingAddressFormValid()) {
          this.$store.commit('setAlternateDeliveryCheck', true)
        } else {
          this.$store.commit('setAlternateDeliveryCheck', false)
        }
      }
      return this.$store.state.visitor.checkoutFormCheck.alternateDeliveryCheck
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
