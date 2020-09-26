<template>
  <!-- ### left box ### -->
  <div class="grid-col w-1of3 w-1of1-sm">
    <foldable-tab headline="3. Ihre Daten" style="padding-bottom: 20px;">
      <div class="reviewpersonaldata section">
        <div class="review-section" data-sccompid="review? personal data">
          <span class="h3 review-section-headline">
            <span style="word-wrap: anywhere">Lieferadresse/</span>
            <span style="word-wrap:normal">Anschlussadresse</span>
          </span>
          <p>
            <span class="customer-name">
              {{ customerData.givenName }}
              {{ customerData.familyName }}
            </span>
            {{ customerData.dateOfBirth }}
            <br>
            {{ customerData.installationAddress.street }} {{ customerData.installationAddress.houseNumber}}
            <br>
            {{ customerData.installationAddress.zip }} {{ customerData.installationAddress.city }}
          </p>
          <ul class="customer-additional">
            <li class="icon-telefon">
              {{ customerData.phonePrefix }}
              - {{ customerData.phoneNumber }}
            </li>
            <li class="icon-mail">{{ customerData.email }}</li>
          </ul>
          <div class="change">
            <router-link to="/privatkunden/checkout_step1">Ändern</router-link>
          </div>
        </div>
        <div class="review-section">
          <h3 class="review-section-headline">So bezahlen Sie monatlich Ihre Dienste</h3>
          <p>
            <span class="customer-name">
              <span v-if="!customerData.paymentDetails.alternateBillingAddress.alternateBillWanted">
                {{ customerData.givenName }}
                {{ customerData.familyName }}
              </span>
              <span v-else>{{ customerData.paymentDetails.alternateBillingAddress.fullName }}</span>
            </span>

            <span
              v-if="customerData.paymentDetails.ibanSelected"
            >IBAN: {{ customerData.paymentDetails.ibanNumber }}</span>
            <span v-else>
              Kontonummer: {{ customerData.paymentDetails.accountNumber }}
              <br>
              Bankleitzahl: {{ customerData.paymentDetails.bankNumber }}
            </span>
            <br>
          </p>
          <ul class="payment-check">
            <li class="icon-green-tick">Lastschriftmandat erteilt</li>
          </ul>
          <div class="change">
            <router-link to="/privatkunden/checkout_step1">Ändern</router-link>
          </div>
        </div>
      </div>
    </foldable-tab>

    <div v-if="this.$data.DEBUG" class="debugging-info">
      <!-- Set DEBUG to false in mixin in main.js to hide debugging info throughout app. -->
      <h3 class="h4">Debugging Info</h3>
      <p>{{ customerData.title }}</p>
      <p>{{ customerData.givenName }} {{ customerData.familyName }}</p>
      <p>DSL Wechsler: {{ customerData.dslSwitch }}</p>
      <p>Mitnahme Telefonnummer: {{ customerData.teleport }}</p>
      <p>Abweichende Rechnungsadresse: {{ customerData.alternateBill }}</p>
      <p>Einzelverbindungsnachweis gewünscht: {{ customerData.itemizedBill }}</p>
      <p>IBAN gewählt: {{ customerData.ibanSelected }}</p>
    </div>

    <div class="checkout_bottom_icons iparsys parsys">
      <div class="section">
        <div class="new"></div>
      </div>
      <div class="iparys_inherited">
        <div class="checkout_bottom_icons iparsys parsys">
          <div class="richtext section">
            <div id="checkout_bottom_icons_richtext" class style="word-wrap:break-word;">
              <div class="footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import foldableTab from '@/components/atoms/foldableTab.vue'
export default {
  name: 'leftBox',
  components: {
    foldableTab
  },
  computed: {
    customerData () {
      return this.$store.getters.customerData
    }
  }
}
</script>

<style scoped>
.review-section .change{
bottom: -40px;
}
</style>
