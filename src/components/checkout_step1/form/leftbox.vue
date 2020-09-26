<template>
  <!-- TODO: Choose more consistent form field names for Alt-X design (when legacy Dcomm CSS classes/ids no longer apply). -->
  <!-- TODO: Refactor into smaller components and improve component naming (describe what a component does, rather than what it looks like). -->
  <!-- Hint/TODO? Previously selections are 'remembered' in VueX but not 'recreated' in GUI for Teleport and DslSwitch. Maybe consider implementation in new Alt-X design? -->
  <div class="checkout js_chat-checkout">
    <div :class="{'body':this.$data.window.width > 479}">
      <div :class="{'container':this.$data.window.width > 479}">
        <div :class="{'personalform personalformsubmission':this.$data.window.width > 479}">
          <!--<div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="1. Persönliche Daten">
              <div class="login-link">
                <div class="new-customer" v-show="!isExistingCustomer()">
                  <button-login
                    wrapperClasses
                    trackingString_prop75="privatkunden/fallback_checkout_step1: Login-Knopf"
                    trackingString_tl="Fallback Checkout: Login-Knopf"
                    :urlButton="true"
                  />
                </div>
              </div>
              <dsl-switcher v-if="dslShow"/>
              <rfs-check/>
              <activation-date />
              <billing-address/>
              <profile-form/>
              <contact-info-form/>
              <number-porting v-if="numberPortingShow"/>
              <itemized-bill v-if="itemizedBillShow"/>
              <telephone-book-entry v-if="telephoneBookEntryShow"/>
              <wifispot v-if="wifiSpotShow"/>
            </foldable-tab>
          </div>-->
          <div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="Vertragswechsler" v-if="dslShow">
              <div class="login">
                <div class="new-customer" v-show="!isExistingCustomer()">
                  <button-login
                    wrapperClasses
                    trackingString_prop75="privatkunden/fallback_checkout_step1: Login-Knopf"
                    trackingString_tl="Fallback Checkout: Login-Knopf"
                    :urlButton="true"
                  />
                </div>
              </div>
              <dsl-switcher />
            </foldable-tab>
          </div>
          <div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="Wunschtermin">
              <activation-date />
              </foldable-tab>
          </div>
          <div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="Adressdaten">
              <rfs-check />
              <billing-address />
              <deliveryAddress />
            </foldable-tab>
          </div>
          <div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="Kontaktdaten">
              <profile-form />
              <contact-info-form />
            </foldable-tab>
          </div>
          <div
            class="box checkout-box checkout-step-personaldata"
            v-if="numberPortingShow || itemizedBillShow || telephoneBookEntryShow"
          >
            <foldable-tab headline="Telefon Angaben">
              <number-porting v-if="numberPortingShow" />
              <itemized-bill v-if="itemizedBillShow" />
              <telephone-book-entry v-if="telephoneBookEntryShow" />
            </foldable-tab>
          </div>
          <div class="box checkout-box checkout-step-personaldata">
            <foldable-tab headline="Wifispot" v-if="wifiSpotShow">
              <wifispot />
            </foldable-tab>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foldableTab from '@/components/atoms/foldableTab.vue'
import buttonLogin from '@/components/atoms/buttonLogin.vue'
import profileForm from '@/components/organisms/checkout_step1/profileForm.vue'
import contactInfoForm from '@/components/organisms/checkout_step1/contactInfoForm.vue'
import rfsCheck from '@/components/organisms/checkout_step1/rfsCheck.vue'
import dslSwitcher from '@/components/organisms/checkout_step1/dslSwitcher.vue'
import billingAddress from '@/components/organisms/checkout_step1/billingAddress.vue'
import deliveryAddress from '@/components/organisms/checkout_step1/deliveryAddress.vue'
import numberPorting from '@/components/organisms/checkout_step1/numberPorting.vue'
import wifispot from '@/components/organisms/checkout_step1/wifispot.vue'
import itemizedBill from '@/components/organisms/checkout_step1/itemizedBill.vue'
import telephoneBookEntry from '@/components/organisms/checkout_step1/telephoneBookEntry.vue'
import activationDate from '@/components/organisms/checkout_step1/activationDate.vue'

export default {
  components: {
    foldableTab,
    buttonLogin,
    profileForm,
    contactInfoForm,
    rfsCheck,
    dslSwitcher,
    numberPorting,
    billingAddress,
    deliveryAddress,
    wifispot,
    itemizedBill,
    telephoneBookEntry,
    activationDate
  },
  computed: {
    family () {
      let familyCheck = this.$store.state.visitor.basket[0].family
      if (!familyCheck) {
        familyCheck = false
      }
      return familyCheck
    },
    dslShow () {
      if (this.family === '2play' || this.family === '3play') {
        return true
      } else {
        this.$store.commit('setDslSwitch', false)
        return false
      }
    },
    numberPortingShow () {
      if (
        this.family === '2play' ||
        this.family === '3play' ||
        this.family === 'Telefon'
      ) {
        return true
      } else {
        this.$store.commit('setDslSwitch', false)
        return false
      }
    },
    wifiSpotShow () {
      if (
        this.family === '2play' ||
        this.family === '3play' ||
        this.family === 'Internet'
      ) {
        return true
      } else {
        this.$store.commit('setWifispot', false)
        return false
      }
    },
    telephoneBookEntryShow () {
      if (
        this.family === '2play' ||
        this.family === '3play' ||
        this.family === 'Telefon'
      ) {
        return true
      } else {
        return false
      }
    },
    itemizedBillShow () {
      if (
        this.family === '2play' ||
        this.family === '3play' ||
        this.family === 'Telefon'
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    updateCheckoutState (checkoutFormComplete) {
      this.$store.commit('setCheckoutState', checkoutFormComplete)
    },
    isExistingCustomer () {
      return this.$store.getters.existingCustomer
    }
  }
}
</script>

<style scoped>
.checkout {
  background: none;
}
.login-button {
  position: relative;
  text-align: center;
  padding-left: 0px;
}
.login-link .login-btn-wrapper {
  left: 0;
}
.step-headline {
  font-size: 32px;
  font-size: 3.2rem;
  line-height: 1.125;
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
  margin-bottom: 0px;
  padding-bottom: 0px;
  white-space: normal;
  color: #002c77;
  font-weight: bold;
}
.new-customer {
  margin-bottom: 10px;
}
[data-checked] ~ .tick-label:after {
  /* Validation seems to interfere with default checked attribute, thus using custom attribute data-checked */
  content: "";
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  background-color: #40920f;
  border-radius: 50%;
  margin-top: 0.3rem;
  left: -1.7rem;
  top: 0;
}

@media screen and (max-width: 810px) {
  .checkout .container {
    padding: 0 0px;
  }
}
</style>
