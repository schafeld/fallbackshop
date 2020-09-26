<template>
  <!-- ### right box ### -->
  <div class="box checkout-box checkout-step-paymentdata">
    <foldable-tab headline="2. Ihre Zahlungsdaten">
      <div class="rightContent parsys">
        <div class="bankdetails parbase section">
          <div class="formpayment">
            <div class="js_toggle">
              <div class="mandatory-label">Pflichtfeld</div>
              <div class="formrow">
                <div class="formrow-col w-1of1 iban">
                  <label class="tick use-iban">
                    <input
                      type="checkbox"
                      id="useIban"
                      name="useIban"
                      value="on"
                      tabindex="61"
                      v-model="checkedIban"
                      @click="trackFormfield('useIban')"
                    >
                    <span class="tick-label fresh">IBAN verwenden</span>
                  </label>
                </div>
              </div>
              <div class="formrow nolabel">
                <div class="formrow-col w-1of1">
                  <!-- Max lenght of account owner name must not be less than sum of first and last name. -->
                  <float-label>
                    <input
                      type="text"
                      id="paymentname"
                      name="paymentname"
                      :class="{'required': true, 'error': errors.has('paymentname') , 'valid': (paymentNameFlag.valid && paymentNameFlag.dirty)}"
                      minlength="2"
                      maxlength="64"
                      :readonly="!differentPayer"
                      aria-required="true"
                      tabindex="62"
                      placeholder="Kontoinhaber *"
                      v-model="differentPayerName"
                      v-validate="{ 'required':true, min: 2, max: 64, regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/ }"
                      @click="trackFormfield('paymentname')"
                    >
                  </float-label>
                  <span
                    v-show="errors.has('paymentname')"
                  >Bitte den Namen des Kontoinhabers korrigieren</span>
                </div>
              </div>

              <!-- Alternate account owner details. -->
              <div :class="{'js_toggle-wrapper': true, 'toggle-wrapper': !differentPayer}">
                <div class="toggle-content js_toggle-content" id="checkbox_toggle">
                  <div>
                    <div class="formrow nolabel">
                      <div class="formrow-col w-1of3">
                        <float-label>
                          <input
                            type="text"
                            id="paymentPostalCode"
                            name="postcode"
                            pattern="[0-9]{5}"
                            placeholder="PLZ"
                            minlength="5"
                            maxlength="5"
                            :class="{'required': true, 'error': errors.has('postcode') , 'valid': (paymentPostCodeFlag.valid && paymentPostCodeFlag.dirty) }"
                            :disabled="!differentPayer"
                            tabindex="63"
                            v-model="paymentPostalCode"
                            v-validate="{ 'required':true, min: 5, max: 5, regex:  /[0-9]{5}/ }"
                            @click="trackFormfield('postcode')"
                          >
                        </float-label>
                        <span v-show="errors.has('postcode')">Bitte die Postleitzahl korrigieren</span>
                      </div>
                      <div class="formrow-col w-2of3">
                        <float-label>
                          <input
                            type="text"
                            id="paymentcity"
                            name="paymentcity"
                            pattern="\D+"
                            placeholder="Wohnort "
                            minlength="2"
                            maxlength="25"
                            :class="{'required': true, 'error': errors.has('paymentcity'), 'valid': (paymentCityFlag.valid && paymentCityFlag.dirty) }"
                            aria-required="true"
                            :disabled="!differentPayer"
                            tabindex="64"
                            v-model="paymentCity"
                            v-validate="{ 'required':true, min: 2, max: 25, regex:  /\D+/ }"
                            @click="trackFormfield('paymentcity')"
                          >
                        </float-label>
                        <span v-show="errors.has('paymentcity')">Bitte die Stadt korrigieren</span>
                      </div>
                    </div>
                    <div class="formrow nolabel">
                      <div class="formrow-col w-2of3">
                        <float-label>
                          <input
                            type="text"
                            id="paymentstreet"
                            name="paymentstreet"
                            pattern="\D+"
                            placeholder="Straße"
                            minlength="2"
                            maxlength="50"
                            :class="{'required': true, 'error': errors.has('paymentstreet'), 'valid': (paymentStreetFlag.valid && paymentStreetFlag.dirty) }"
                            aria-required="true"
                            :disabled="!differentPayer"
                            tabindex="65"
                            v-model="paymentStreet"
                            v-validate="{ 'required':true, min: 2, max: 50, regex:  /\D+/ }"
                            @click="trackFormfield('paymentstreet')"
                          >
                        </float-label>
                        <span v-show="errors.has('paymentstreet')">Bitte die Strasse korrigieren</span>
                      </div>
                      <div class="formrow-col w-1of3">
                        <float-label>
                          <input
                            type="text"
                            id="paymentstreetnumber"
                            name="houseNumber"
                            placeholder="Hausnr."
                            maxlength="12"
                            :class="{'required': true, 'error': errors.has('houseNumber'), 'valid': (paymentStreetNumberFlag.valid && paymentStreetNumberFlag.dirty) }"
                            aria-required="true"
                            :disabled="!differentPayer"
                            tabindex="66"
                            v-model="paymentStreetNumber"
                            v-validate="{ 'required':true, max: 12 }"
                            @click="trackFormfield('houseNumber')"
                          >
                        </float-label>
                        <span v-show="errors.has('houseNumber')">Bitte die Hausnummer korrigieren</span>
                      </div>
                      <div class="formrow-col w-1of1">
                        <input type="text" value="DEUTSCHLAND" readonly disabled tabindex="67">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nosepa js_nosepa" :class="{'hidden' : checkedIban}">
                <div class="formrow nolabel">
                  <div class="formrow-col w-1of1">
                    <float-label>
                      <input
                        type="text"
                        id="kto"
                        name="kto"
                        pattern="\d+"
                        placeholder="Kontonummer *"
                        minlength="5"
                        maxlength="12"
                        :class="{'required': true, 'error': errors.has('kto'), 'valid': (paymentKtoFlag.valid && paymentKtoFlag.dirty) }"
                        aria-required="true"
                        tabindex="68"
                        :disabled="checkedIban"
                        v-model="accountNumber"
                        v-validate="{ 'required':true, min: 5, max: 12, regex: /^([0-9]{5,12})$/ }"
                        @click="trackFormfield('kto')"
                      >
                    </float-label>
                    <span
                      v-show="errors.has('kto')"
                    >Bitte die Kontonummer korrigieren, keine Leerzeichen verwenden.</span>
                  </div>
                </div>
                <div class="formrow nolabel">
                  <div class="formrow-col w-1of1">
                    <float-label>
                      <input
                        type="text"
                        id="blz"
                        name="blz"
                        pattern="\d+"
                        placeholder="Bankleitzahl *"
                        minlength="8"
                        maxlength="8"
                        :class="{'required': true, 'blz': true, 'error': errors.has('blz'), 'valid': (paymentBlzFlag.valid && paymentBlzFlag.dirty) }"
                        aria-required="true"
                        tabindex="69"
                        :disabled="checkedIban"
                        v-model="bankNumber"
                        v-validate="{ 'required':true, min:8, max: 8, regex: /^([0-9]{8})$/ }"
                        @click="trackFormfield('blz')"
                      >
                    </float-label>
                    <span
                      v-show="errors.has('blz')"
                    >Bitte die Bankleitzahl korrigieren, keine Leerzeichen verwenden</span>
                  </div>
                </div>
              </div>
              <div class="sepa js_sepa" :class="{'hidden' : !checkedIban}">
                <div class="formrow nolabel">
                  <div class="formrow-col w-1of1">
                    <float-label>
                      <input
                        type="text"
                        id="iban"
                        name="iban"
                        placeholder="Iban *"
                        minlength="22"
                        maxlength="22"
                        :class="{'required': true, 'iban': true, 'error': errors.has('iban'), 'valid': (paymentIbanFlag.valid && paymentIbanFlag.dirty) }"
                        tabindex="59"
                        :disabled="!checkedIban"
                        v-model="ibanNumber"
                        v-validate="{ required :true, min: 22, regex: /^([A-Z]{2})([0-9]{2})([A-Z0-9]{9,30})$/ }"
                        @click="trackFormfield('iban')"
                      >
                    </float-label>
                    <span
                      v-show="errors.has('iban')"
                    >Bitte die Iban korrigieren, keine Leerzeichen verwenden.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="formrow">
          <div class="w-1of1 iban">
            <div class="different-payer">
              <label class="tick js_toggle-trigger">
                <input
                  type="checkbox"
                  id="differentPayer"
                  value="differentPayer"
                  name="differentPayer"
                  tabindex="60"
                  v-model="differentPayer"
                  @click="trackFormfield('differentPayer')"
                >
                <span class="tick-label fresh tt-label">
                  <span>Abweichender Kontoinhaber</span>
                </span>
              </label>
              <tooltip
                tooltipWrapperCss="left-tooltip"
                content="Ab der Umstellung auf das SEPA-Lastschriftverfahren muss der Kontoinhaber vor der ersten Abbuchung und bei Änderungen des Betrags oder Abbuchungstermins schriftlich informiert werden. Aus diesem Grund benötigen wir stets die aktuelle Adresse des Kontoinhabers."
              />
            </div>
          </div>
        </div>
        <div class="sepaTerms section">
          <div>
            <div class="js_errorbar errorbar-wrapper">
              <div class="content js_sticky">
                <div
                  class="errorbar"
                >Es sind Fehler bei der Eingabe aufgetreten. Bitte korrigieren Sie diese, bevor Sie fortfahren.</div>
              </div>
            </div>
            <fieldset class="fieldset" data-sccompid="sepa terms and conditions check">
              <div class="formrow nolabel">
                <div
                  class="formrow-col w-1of1"
                  :class="{'error': errors.has('termsAndConditions') }"
                >
                  <label class="tick">
                    <input
                      type="checkbox"
                      name="termsAndConditions"
                      :class="{'input': true, 'required': true, 'error': errors.has('termsAndConditions') }"
                      aria-required="true"
                      tabindex="61"
                      v-validate.immediate="'required:true'"
                      v-model="checkTerms"
                      @click="trackFormfield('termsAndConditions')"
                    >
                    <span class="tick-label fresh">SEPA-Lastschriftmandat *</span>
                  </label>
                  <label class="tick" v-show="!checkTerms">
                    <span class="tick-smalltext">
                      <p>
                        <strong>Für Red Internet and Phone oder Mobilfunktarif:</strong>
                        <br>Bitte geben Sie uns Ihr SEPA-Lastschriftmandat. Eine andere Zahlungsart ist derzeit nicht möglich.
                      </p>
                      <p>Ich ermächtige Unitymedia widerruflich, Forderungen von meinem Konto mittels Lastschrift einzuziehen. Das gilt für alle zu entrichtenden Rechnungsbeträge. Die Mandatsreferenznr. wird in der Rechnung mitgeteilt. Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten die mit meinem Geldinstitut vereinbarten Bedingungen.</p>
                      <p>
                        <strong>Hinweis:</strong> Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen. Meine Rechte zu dem obigen Mandat sind in einem Merkblatt enthalten, das ich von meinem Kreditinstitut erhalten kann.&nbsp;
                      </p>
                    </span>
                  </label>
                  <em
                    id="termsandconditions-error"
                    class="error"
                    v-show="errors.has('termsAndConditions')"
                  >Bitte erteilen Sie uns das Lastschriftmandat für den Zahlungsverkehr.</em>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <spacer setting="5" v-if="this.$data.window.width < 819"/>
        <div class="formactionbutton parbase section">
          <button-element
            type="form_submit_button"
            :inactive="!checkoutComplete"
            label="Zur Bestellübersicht"
            v-on:buttonClicked="sendToStep2()"
          />
          <div class v-if="!checkoutComplete">
            <span
              class="tick-smalltext"
            >Es fehlen noch Pflichtangaben im Checkout. Bitte prüfen sie alle Felder mit * neben der Beschreibung</span>
          </div>
        </div>
      </div>
      <span v-if="DEBUG">
        Payment Form Check:
        <span
          class="check-type"
          :class="{'valid':paymentFormCheck}"
        >{{paymentFormCheck}}</span>
        <br>Number Porting Form Check:
        <span
          class="check-type"
          :class="{'valid':$store.state.visitor.checkoutFormCheck.numberPortingCheck}"
        >{{$store.state.visitor.checkoutFormCheck.numberPortingCheck}}</span>
        <br>Alternate Bill Form Check:
        <span
          class="check-type"
          :class="{'valid':$store.state.visitor.checkoutFormCheck.alternateBillCheck}"
        >{{$store.state.visitor.checkoutFormCheck.alternateBillCheck}}</span>
        <br>Contact Info Form Check:
        <span
          class="check-type"
          :class="{'valid':$store.state.visitor.checkoutFormCheck.contactInfoFormCheck}"
        >{{$store.state.visitor.checkoutFormCheck.contactInfoFormCheck}}</span>
        <br>Profile Form Check:
        <span
          class="check-type"
          :class="{'valid':$store.state.visitor.checkoutFormCheck.profileFormCheck}"
        >{{$store.state.visitor.checkoutFormCheck.profileFormCheck}}</span>
        <br>SEPA Terms Check:
        <span class="check-type" :class="{'valid':checkTerms}">{{checkTerms}}</span>
        <br>DSL Switch Selection Check:
        <span
          class="check-type valid"
          v-if="$store.state.visitor.customer.dslSwitch"
        >true</span>
        <span v-else class="check-type">false</span>
        <br>Ready for Service Check:
        <span
          class="check-type"
          :class="{'valid':$store.state.visitor.customer.installationAddress.rfsCheckResult.readyForService}"
        >{{$store.state.visitor.customer.installationAddress.rfsCheckResult.readyForService}}</span>
      </span>
    </foldable-tab>
  </div>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import spacer from '@/components/atoms/spacer.vue'
import foldableTab from '@/components/atoms/foldableTab.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  data () {
    return {
      checkTerms: false
    }
  },
  components: {
    tooltip,
    buttonElement,
    foldableTab,
    spacer
  },
  computed: {
    ...mapFields({
      paymentNameFlag: 'paymentname',
      paymentPostCodeFlag: 'postcode',
      paymentCityFlag: 'paymentcity',
      paymentStreetFlag: 'paymentstreet',
      paymentStreetNumberFlag: 'houseNumber',
      paymentKtoFlag: 'kto',
      paymentBlzFlag: 'blz',
      paymentIbanFlag: 'iban'
    }),
    checkoutComplete () {
      if (
        this.paymentFormCheck &&
        this.$store.state.visitor.checkoutFormCheck.numberPortingCheck &&
        this.$store.state.visitor.checkoutFormCheck.alternateBillCheck &&
        this.$store.state.visitor.checkoutFormCheck.contactInfoFormCheck &&
        this.$store.state.visitor.checkoutFormCheck.profileFormCheck &&
        this.$store.state.visitor.checkoutFormCheck.paymentFormCheck &&
        this.checkTerms &&
        this.$store.state.visitor.customer.dslSwitch !== '' &&
        this.$store.state.visitor.customer.installationAddress.rfsCheckResult
          .readyForService
      ) {
        this.$store.commit('setCheckoutState', true)
      } else {
        this.$store.commit('setCheckoutState', false)
      }
      return this.$store.getters.checkoutFormComplete
    },
    differentPayer: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails
          .alternateBillingAddress.alternateBillWanted
      },
      set (value) {
        this.$store.commit('setDifferentPayer', value)
      }
    },
    accountNumber: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails.accountNumber
      },
      set (value) {
        this.$store.commit('setAccountNumber', value)
      }
    },
    bankNumber: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails.bankNumber
      },
      set (value) {
        this.$store.commit('setBankNumber', value)
      }
    },
    checkedIban: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails.ibanSelected
      },
      set (value) {
        this.$store.commit('setIban', value)
      }
    },
    ibanNumber: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails.ibanNumber
      },
      set (value) {
        this.$store.commit('setIbanNumber', value)
      }
    },
    paymentPostalCode: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails
          .alternateBillingAddress.zip
      },
      set (value) {
        this.$store.commit('setPaymentPostalCode', value)
      }
    },
    paymentCity: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails
          .alternateBillingAddress.city
      },
      set (value) {
        this.$store.commit('setPaymentCity', value)
      }
    },
    paymentStreet: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails
          .alternateBillingAddress.street
      },
      set (value) {
        this.$store.commit('setPaymentStreet', value)
      }
    },
    paymentStreetNumber: {
      get () {
        return this.$store.state.visitor.customer.paymentDetails
          .alternateBillingAddress.streetNumber
      },
      set (value) {
        this.$store.commit('setPaymentStreetNumber', value)
      }
    },
    differentPayerName: {
      get () {
        let helperValue = ''
        if (
          this.$store.state.visitor.customer.givenName === '' &&
          this.$store.state.visitor.customer.familyName === '' &&
          this.$store.state.visitor.customer.paymentDetails
            .alternateBillingAddress.fullName === ''
        ) {
          helperValue = ''
        } else {
          if (this.differentPayer) {
            helperValue = this.$store.state.visitor.customer.paymentDetails
              .alternateBillingAddress.fullName
          } else if (!this.differentPayer) {
            helperValue =
              this.$store.state.visitor.customer.givenName +
              ' ' +
              this.$store.state.visitor.customer.familyName
          }
        }
        return helperValue
      },
      set (value) {
        this.$store.commit('setDifferentPayerName', value)
      }
    },
    paymentFormCheck () {
      if (this.checkPaymentInfoFlags && this.checkPaymentInfoFlags) {
        this.$store.commit('setPaymentFormCheck', true)
      } else {
        this.$store.commit('setPaymentFormCheck', false)
      }
      // return this.$store.state.visitor.checkoutFormCheck.paymentFormCheck
      return this.$store.getters.paymentFormCheck
    },
    checkPaymentInfoFlags () {
      let helperBooleanAccount = false
      if (!this.checkedIban) {
        if (
          this.paymentKtoFlag.valid &&
          this.paymentKtoFlag.dirty &&
          this.accountNumber !== '' &&
          this.paymentBlzFlag.valid &&
          this.paymentBlzFlag.dirty &&
          this.bankNumber !== ''
        ) {
          helperBooleanAccount = true
        } else helperBooleanAccount = false
      } else if (this.checkedIban) {
        if (
          this.paymentIbanFlag.valid &&
          this.paymentIbanFlag.dirty &&
          this.ibanNumber !== ''
        ) {
          helperBooleanAccount = true
        } else helperBooleanAccount = false
      }
      return helperBooleanAccount
    },
    checkAccountInfoFlags () {
      let helperBooleanPayer = false
      if (this.differentPayer) {
        if (this.differentPayerInfoValid()) {
          console.log(
            'if this.differentPayerInfoValid() ' +
              this.differentPayerInfoValid()
          )
          helperBooleanPayer = true
        } else {
          console.log(
            'else this.differentPayerInfoValid() ' +
              this.differentPayerInfoValid()
          )
          helperBooleanPayer = false
        }
      } else if (!this.differentPayer) {
        helperBooleanPayer = true
      }
      return helperBooleanPayer
    }
  },
  methods: {
    trackFormfield,
    sendToStep2 () {
      this.$router.push('/privatkunden/checkout_step2')
    }
  },
  mounted () {
    this.errors.clear()
    this.$store.commit('emptyPaymentData')
  }
}
</script>

<style scoped>
.formrow {
  margin-top: 10px;
}
.tick-label.fresh {
  margin: 0 0 0 20px;
}
/* button#personaldet:disabled {
  background-color: white;
  color: #40920f;
  background-image: none;
  border: 1px solid;
} */
span#personaldet.inactive {
  color: var(--color-vodafone-silver);
  background-color: var(--color-vodafone-light-grey);
}

#personalform_checkout_bottom_icons_richtext {
  word-wrap: break-word;
}

.check-type {
  color: red;
}
.check-type.valid {
  color: green;
}

[readonly="readonly"].error {
  border-color: #af0b37;
}
.w-1of1.iban {
  padding-left: 10px;
}
@media screen and (max-width: 479px) {
.w-1of1.iban {
  padding-left: 0;
}
  .fieldset {
    margin-bottom: 0;
  }
  .formrow {
    padding: 0 8px 0 16px;
  }
  .formrow-col {
    padding: 20px 8px 0 0;
  }
  .tick-label {
    margin: 0.2rem 1.5rem 1rem 2.2rem;
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
  input {
    font-size: 1.2em;
  }
}
.different-payer {
  margin-bottom: 20px;
}
.formrow-col.w-1of1.iban {
  padding-bottom: 0px;
}
.tick-smalltext {
  padding-top: 20px;
}
</style>
