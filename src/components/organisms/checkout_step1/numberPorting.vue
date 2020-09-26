<template>
  <div class="formNumberPorting section" :class="{'': portingCheck}">
    <fieldset class="fieldset wideform">
      <div class="js_number-porting">
        <div class="js_number-porting-group">
          <div class="formrow">
            <div class="formrow-col w-1of1">
              <label class="tick js_toggle-trigger">
                <input
                  v-model="checkedTeleport"
                  class="product-option"
                  name="configuration_selected_options_TELEPORT"
                  type="checkbox"
                  value="TELEPORT"
                  autocomplete="off"
                  tabindex="44"
                  @click="trackFormfield('configuration_selected_options_TELEPORT')"
                />
                <span class="tick-label">
                  <span
                    class="link"
                    v-if="this.$data.window.width > 879"
                  >Mitnahme Ihrer Festnetznummer</span>
                  <span class="link" v-else>
                    Festnetznummer mitnehmen
                    <tooltip
                      tooltipWrapperCss="size6"
                      content="Ihre Rufnummer können Sie nur mitnehmen, wenn Sie innerhalb desselben Vorwahlbereichs wohnen bleiben."
                    />
                  </span>
                </span>
              </label>
            </div>
          </div>
          <!--  TODO: Provider list could be populated through service (do not implement for fallback, rather wait for Third Party API) -->
          <div class="js_toggle-wrapper" v-if="checkedTeleport">
            <div class="formrow">
              <div class="formrow-col w-1of1">
                <span>Ihre Rufnummer können Sie nur mitnehmen, wenn Sie innerhalb desselben Vorwahlbereichs wohnen bleiben.</span>
              </div>
            </div>
            <div class="toggle-content js_toggle-content autoHeight">
              <fieldset class="fieldset wideform js_number-porting-toggle">
                <div class="formrow">
                  <div class="formrow-col w-1of1">
                    <float-label :dispatch="false">
                      <select
                        required
                        name="telePortProvider"
                        id="numberporting_provider"
                        class="select required"
                        aria-required="true"
                        :disabled="!checkedTeleport"
                        tabindex="45"
                        v-model="numberportingProvider"
                        v-validate="{required: true, min: 1}"
                        @click="trackFormfield('telePortProvider')"
                      >
                        <option value disabled selected>Bisheriger Anbieter*</option>
                        <option value="1und1">1&amp;1</option>
                        <option value="1und1voip">1und1voip</option>
                        <option value="netzquadrat GmbH">[netzquadrat] GmbH</option>
                        <option value="Accom">Accom</option>
                        <option value="Alice HanseNet GmbH">Alice HanseNet GmbH</option>
                        <option value="Arcor AG & Co. KG">Arcor AG &amp; Co. KG</option>
                        <option value="BITel GmbH">BITel GmbH</option>
                        <option value="Blatzheim GmbH">Blatzheim GmbH</option>
                        <option value="BT Germany GmbH & Co.">BT Germany GmbH &amp; Co.</option>
                        <option value="Carpo GmbH">Carpo GmbH</option>
                        <option value="Citykom Münster GmbH">Citykom Münster GmbH</option>
                        <option value="CNE">CNE</option>
                        <option value="Colt Telekom">Colt Telekom</option>
                        <option value="Congstar">Congstar</option>
                        <option value="Deutsche Telekom">Deutsche Telekom</option>
                        <option value="DOKOM GmbH">DOKOM GmbH</option>
                        <option value="DUSnet">DUSnet</option>
                        <option value="EWE Tel GmbH">EWE Tel GmbH</option>
                        <option value="freenet GmbH">freenet GmbH</option>
                        <option value="GELSEN-NET">GELSEN-NET</option>
                        <option value="HEAG MediaNet GmbH">HEAG MediaNet GmbH</option>
                        <option value="HeLi NET GmbH & Co. KG">HeLi NET GmbH &amp; Co. KG</option>
                        <option value="HLKOMM GMBH">HLKOMM GMBH</option>
                        <option value="MEOCOM GmbH">MEOCOM GmbH</option>
                        <option value="MK Netzdienste">MK Netzdienste</option>
                        <option value="MR Net">MR Net</option>
                        <option value="NetCologne GmbH">NetCologne GmbH</option>
                        <option value="Netcom Kassel GmbH">Netcom Kassel GmbH</option>
                        <option value="O2 Genion">O2 Genion</option>
                        <option value="Opennumbers">Opennumbers</option>
                        <option value="Osnatel GmbH">Osnatel GmbH</option>
                        <option value="Outbox">Outbox</option>
                        <option value="Purpurnetworks">Purpurnetworks</option>
                        <option value="QSC AG">QSC AG</option>
                        <option value="QSC/Broadnet GmbH">QSC/Broadnet GmbH</option>
                        <option value="QSC/Ventelo GmbH">QSC/Ventelo GmbH</option>
                        <option value="QSCVOIP">QSCVOIP</option>
                        <option value="sdt.net AG">sdt.net AG</option>
                        <option value="SNT-Multiconnect">SNT-Multiconnect</option>
                        <option value="Soco Network">Soco Network</option>
                        <option value="TELE2 GmbH">TELE2 GmbH</option>
                        <option value="telebel GmbH">telebel GmbH</option>
                        <option value="Telefonica GmbH">Telefonica GmbH</option>
                        <option value="telelev GmbH">telelev GmbH</option>
                        <option value="Teleos GmbH & Co. KG">Teleos GmbH &amp; Co. KG</option>
                        <option value="Teliko GmbH">Teliko GmbH</option>
                        <option value="Toplink">Toplink</option>
                        <option value="Tropolys Service">Tropolys Service</option>
                        <option value="Verizon">Verizon</option>
                        <option value="Versatel Süd GmbH">Versatel Süd GmbH</option>
                        <option value="Versatel West GmbH">Versatel West GmbH</option>
                        <option value="Vodafone">Vodafone</option>
                        <option value="VSE Net">VSE Net</option>
                      </select>
                    </float-label>
                  </div>
                </div>
                <div class="formrow">
                  <label
                    class="formrow-col"
                    :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}"
                  >
                    <float-label>
                      <input
                        placeholder="Vorwahl"
                        :class="{'vorwahl': true, 'required': true, 'error': errors.has('portingAreaCode1'), 'valid':(portingPhonePrefixFlags.valid && portingPhonePrefixFlags.dirty) }"
                        minlength="3"
                        maxlength="5"
                        size="5"
                        type="tel"
                        pattern="^[0][0-9]+"
                        name="portingAreaCode1"
                        id="portingAreaCode1"
                        required="required"
                        aria-required="true"
                        :disabled="!checkedTeleport"
                        tabindex="46"
                        v-model="portingPhonePrefix"
                        v-validate="{required: true, min: 3, max: 5, regex:  /^[0][0-9]+/ }"
                        @click="trackFormfield('portingAreaCode1')"
                      />
                    </float-label>
                    <span v-show="errors.has('portingAreaCode1')">Bitte Vorwahl korrigieren</span>
                  </label>
                  <label
                    class="formrow-col"
                    :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}"
                  >
                    <float-label>
                      <input
                        placeholder="Rufnummer"
                        maxlength="10"
                        size="10"
                        type="tel"
                        pattern="[0-9]+"
                        name="portingNumber1"
                        id="portingNumber1"
                        required="required"
                        :class="{'numberPortingValid': true, 'required': true, 'error': errors.has('portingNumber1'), 'valid':(portingPhoneNumberFlags.valid && portingPhoneNumberFlags.dirty) }"
                        aria-required="true"
                        :disabled="!checkedTeleport"
                        tabindex="47"
                        v-model="portingPhoneNumber"
                        v-validate="{required: true, max: 10, regex:  /[0-9]+/ }"
                        @click="trackFormfield('portingNumber1')"
                      />
                    </float-label>
                    <span v-show="errors.has('portingNumber1')">Bitte Telefonnummer korrigieren</span>
                  </label>
                </div>
              </fieldset>
              <fieldset class="fieldset wideform">
                <div class="formrow">
                  <div class="formrow-col w-1of1">
                    <span>Geben Sie die im bisherigen Vertrag eingetragene Adresse an, falls abweichend von der Obigen.</span>
                  </div>
                </div>
                <div class="formrow">
                  <label
                    class="formrow-col"
                    :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}"
                  >
                    <float-label>
                      <input
                        maxlength="5"
                        size="5"
                        type="number"
                        name="fixedPortingPostalCode"
                        id="fixedPortingPostalCode"
                        :disabled="!checkedTeleport"
                        tabindex="48"
                        v-model="portingZip"
                        :class="{'portingZip': true, 'error': errors.has('fixedPortingPostalCode'), 'valid':(portingZipFlags.valid && portingZipFlags.dirty) }"
                        v-validate="{min: 2, max: 5, regex:  /[0-9]{5}/ }"
                        @click="trackFormfield('fixedPortingPostalCode')"
                        placeholder="PLZ *"
                      />
                    </float-label>
                    <span
                      v-show="errors.has('fixedPortingPostalCode')"
                    >Bitte Postleitzahl korrigieren</span>
                  </label>
                  <label
                    class="formrow-col"
                    :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}"
                  >
                    <float-label>
                      <input
                        maxlength="25"
                        size="25"
                        type="text"
                        name="fixedPortingCity"
                        id="fixedPortingCity"
                        :disabled="!checkedTeleport"
                        tabindex="49"
                        v-model="portingCity"
                        :class="{'portingCity': true, 'error': errors.has('fixedPortingCity'), 'valid':(portingCityFlags.valid && portingCityFlags.dirty) }"
                        v-validate="{min: 2, max: 25, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]/ }"
                        @click="trackFormfield('fixedPortingCity')"
                        placeholder="Wohnort *"
                      />
                    </float-label>
                    <span v-show="errors.has('fixedPortingCity')">Bitte Stadt korrigieren</span>
                  </label>
                </div>
                <div class="formrow">
                  <label class="formrow-col w-3of4">
                    <float-label>
                      <input
                        maxlength="25"
                        size="25"
                        type="text"
                        name="fixedPortingStreet"
                        id="fixedPortingStreet"
                        :disabled="!checkedTeleport"
                        tabindex="50"
                        v-model="portingStreet"
                        :class="{'portingStreet': true, 'error': errors.has('fixedPortingStreet'), 'valid':(portingStreetFlags.valid && portingStreetFlags.dirty) }"
                        v-validate="{ min: 2, max: 25, regex:  /[a-zA-Z0-9'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.\-\\\/\[\]\(\) ]/ }"
                        @click="trackFormfield('fixedPortingStreet')"
                        placeholder="Straße *"
                      />
                    </float-label>
                    <span v-show="errors.has('fixedPortingStreet')">Bitte Strasse korrigieren</span>
                  </label>
                  <label class="formrow-col w-1of4">
                    <float-label>
                      <input
                        maxlength="8"
                        size="8"
                        type="text"
                        name="fixedPortingHouseNo"
                        id="fixedPortingHouseNo"
                        :disabled="!checkedTeleport"
                        tabindex="51"
                        v-model="portingHouseNumber"
                        :class="{'portingHouseNumber': true, 'error': errors.has('fixedPortingHouseNo'), 'valid':(portingHouseNumberFlags.valid && portingHouseNumberFlags.dirty) }"
                        v-validate="{min: 1, max: 8, regex: /^\d+[a-zA-Z]*$/ }"
                        @click="trackFormfield('fixedPortingHouseNo')"
                        placeholder="Hausnr. *"
                      />
                    </float-label>
                    <span v-show="errors.has('fixedPortingHouseNo')">Bitte Hausnummer korrigieren</span>
                  </label>
                </div>
              </fieldset>
              <fieldset class="fieldset wideform">
                <div class="formrow">
                  <div class="formrow-col w-1of1">
                    <span>Geben Sie den Namen an, auf den der Anschluss angemeldet ist. Bitte überprüfen Sie, ob im bisherigen Vertrag mehrere Anschluss-Inhaber genannt sind und tragen Sie diese ebenfalls ein.</span>
                  </div>
                </div>
                <div class="formrow">
                  <label class="formrow-col w-1of1">
                    <float-label>
                      <input
                        type="text"
                        name="fixedPortingFirstName0"
                        id="fixedPortingFirstName_0"
                        class="required"
                        maxlength="30"
                        aria-required="true"
                        :disabled="!checkedTeleport"
                        tabindex="52"
                        v-model="portingGivenName"
                        :class="{'portingGivenName': true, 'error': errors.has('fixedPortingFirstName0'), 'valid':(portingGivenNameFlags.valid && portingGivenNameFlags.dirty) }"
                        v-validate="{'required': true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                        @click="trackFormfield('fixedPortingFirstName_0')"
                        placeholder="Vorname *"
                      />
                    </float-label>
                    <span v-show="errors.has('fixedPortingFirstName0')">Bitte Vorname korrigieren</span>
                  </label>
                </div>
                <div class="formrow">
                  <label class="formrow-col w-1of1">
                    <float-label>
                      <input
                        type="text"
                        name="fixedPortingLastName0"
                        id="fixedPortingLastName_0"
                        class="required"
                        maxlength="30"
                        aria-required="true"
                        :disabled="!checkedTeleport"
                        tabindex="53"
                        v-model="portingFamilyName"
                        :class="{'portingFamilyName': true, 'error': errors.has('fixedPortingLastName0'), 'valid':(portingFamilyNameFlags.valid && portingFamilyNameFlags.dirty) }"
                        v-validate="{ 'required':true, min: 2, max: 32, regex:  /[a-zA-Z'`ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ\.,/\- ]+$/ }"
                        @click="trackFormfield('fixedPortingLastName_0')"
                        placeholder="Nachname *"
                      />
                    </float-label>
                    <span v-show="errors.has('fixedPortingLastName0')">Bitte Nachnamen korrigieren</span>
                  </label>
                  <span v-if="$data.DEBUG">Number Porting Form Check Parameter: {{portingCheck}}</span>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'numberPorting',
  components: {
    tooltip
  },
  methods: {
    trackFormfield,
    portingFlagsValid () {
      return (
        this.numberportingProviderFlags.valid &&
        this.portingPhonePrefixFlags.valid &&
        this.portingPhoneNumberFlags.valid &&
        this.portingZipFlags.valid &&
        this.portingStreetFlags.valid &&
        this.portingCityFlags.valid &&
        this.portingHouseNumberFlags.valid &&
        this.portingGivenNameFlags.valid &&
        this.portingFamilyNameFlags.valid
      )
    }
  },
  computed: {
    ...mapFields({
      numberportingProviderFlags: 'telePortProvider',
      portingPhonePrefixFlags: 'portingAreaCode1',
      portingPhoneNumberFlags: 'portingNumber1',
      portingZipFlags: 'fixedPortingPostalCode',
      portingStreetFlags: 'fixedPortingStreet',
      portingCityFlags: 'fixedPortingCity',
      portingHouseNumberFlags: 'fixedPortingHouseNo',
      portingGivenNameFlags: 'fixedPortingFirstName0',
      portingFamilyNameFlags: 'fixedPortingLastName0'
    }),
    checkedTeleport: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .teleportWanted
      },
      set (value) {
        this.$store.commit('setTeleport', value)
      }
    },
    numberportingProvider: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .numberportingProvider
      },
      set (value) {
        this.$store.commit('setNumberportingProvider', value)
      }
    },
    portingPhonePrefix: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingPhonePrefix
      },
      set (value) {
        this.$store.commit('setPortingPhonePrefix', value)
      }
    },
    portingPhoneNumber: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingPhoneNumber
      },
      set (value) {
        this.$store.commit('setPortingPhoneNumber', value)
      }
    },
    portingZip: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting.portingZip
      },
      set (value) {
        this.$store.commit('setPortingZip', value)
      }
    },
    portingCity: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting.portingCity
      },
      set (value) {
        this.$store.commit('setPortingCity', value)
      }
    },
    portingStreet: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingStreet
      },
      set (value) {
        this.$store.commit('setPortingStreet', value)
      }
    },
    portingHouseNumber: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingHouseNumber
      },
      set (value) {
        this.$store.commit('setPortingHouseNumber', value)
      }
    },
    portingGivenName: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingGivenName
      },
      set (value) {
        this.$store.commit('setPortingGivenName', value)
      }
    },
    portingFamilyName: {
      get () {
        return this.$store.state.visitor.customer.telephonePorting
          .portingFamilyName
      },
      set (value) {
        this.$store.commit('setPortingFamilyName', value)
      }
    },
    portingCheck () {
      if (!this.checkedTeleport) {
        this.$store.commit('setNumberPortingCheck', true)
        return true
      } else {
        if (this.portingFlagsValid()) {
          this.$store.commit('setNumberPortingCheck', true)
        } else {
          this.$store.commit('setNumberPortingCheck', false)
        }
      }
      return this.$store.state.visitor.checkoutFormCheck.numberPortingCheck
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
input, select {
  margin-top: 10px;
}
input[type="checkbox"] {
  margin-top: 0;
}
@media screen and (max-width: 879px) {
  .formrow {
    padding-top: 10px;
  }
  .checkout .wideform .formrow > .label {
    display: none;
  }
}
@media screen and (max-width: 479px) {
  .formNumberPorting {
    margin-top: 20px;
  }
  p {
    margin: 0 0 5px 0;
    font-size: 1.2em;
  }
  .formrow {
    font-size: 1.2em;
  }
  .tick {
    padding-top: 10px;
  }
  .formrow-col {
    padding: 0 8px 0 0;
  }
  .tick-label {
    margin: 0.2rem 1.5rem 1rem 2.2rem;
    font-size: 1.8rem;
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
    font-weight: 300;
  }
  span.tick-label {
    padding-left: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  input {
    font-size: 1.2em;
  }
  .select,
  option {
    font-size: 16px;
  }
  .vfl-has-label {
    width: 100%;
  }
}
</style>
