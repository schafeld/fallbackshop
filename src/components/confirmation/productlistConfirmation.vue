<template>
  <div class="confirmationTutorial section">
    <div class="section confirmationTutorial">
      <div class="box confirmation__box confirmation-tutorial">
        <div class="grid">
          <div class="grid-col w-1of5 w-1of8-md w-hidden-xs"></div>
          <div class="grid-col w-3of5 w-3of4-md w-1of1-xs confirmation-tutorial__fullwidth">
            <div class="confirmation-tutorial__headline">
              <div class="confirmation__h2 confirmation__h2--body confirmation-tutorial__h2 h2">
                Und so geht's jetzt weiter
              </div>
            </div>
            <div class="confirmationNextSteps parsys">
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
                <div class="confirmation__section confirmation-tutorial__section">
                  <div class="confirmation-tutorial__icon">
                    <img
                      src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/price-promise-mid.svg"
                      alt=""
                      class=""
                    >
                  </div>
                  <div class="confirmation-tutorial__text">
                    <div class="confirmation__h3 confirmation-tutorial__h3 h3">Bitte bestätige Deine E-Mail-Adresse</div>
                    <div class="confirmation-tutorial__copy">Damit wir Dir vertrauliche Informationen zu Deinem Vertrag zukommen lassen können, bestätige bitte kurz Deine E-Mail-Adresse. Eine E-Mail dazu findest Du in Deinem Postfach.</div>
                  </div>
                </div>
              </div>
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
                <div class="confirmation__section confirmation-tutorial__section">
                  <div class="confirmation-tutorial__icon">
                    <img
                      src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/mail-new-mid.svg"
                      alt=""
                      class=""
                    >
                  </div>
                  <div class="confirmation-tutorial__text">
                    <div class="confirmation__h3 confirmation-tutorial__h3 h3">Wir prüfen Deine Bestellung und senden Dir eine Auftragsbestätigung zu</div>
                    <div class="confirmation-tutorial__copy">Nach einer erfolgreichen Prüfung senden wir Dir innerhalb einer Woche eine schriftliche Auftragsbestätigung per Post zu. Mit dieser erhälst Du auch Deine Kundennummer.</div>
                  </div>
                </div>
              </div>
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
                <div class="confirmation__section confirmation-tutorial__section">
                  <div class="confirmation-tutorial__icon">
                    <img
                      src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/call-outgoing-mid.svg"
                      alt=""
                      class=""
                    >
                  </div>
                  <div class="confirmation-tutorial__text">
                    <div class="confirmation__h3 confirmation-tutorial__h3 h3">Mitnahme Deiner Festnetznummer</div>
                    <div class="confirmation-tutorial__copy">Du hast einen Telefonanschluss bestellt und möchtest Deine bisherige Rufnummer behalten? Wir kümmern uns darum und beantragen bei Deinem alten Anbieter die Mitnahme Deiner Telefonnummer. Dazu erhälst Du mit Deiner Auftragsbestätigung das Formular zur Rufnummernmitnahme schon vorausgefüllt zugeschickt.</div>
                  </div>
                </div>
              </div>
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
                <div class="confirmation__section confirmation-tutorial__section">
                  <div class="confirmation-tutorial__icon">
                    <img
                      src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/engineer-mid.svg"
                      alt=""
                      class=""
                    >
                  </div>
                  <div class="confirmation-tutorial__text">
                    <div class="confirmation__h3 confirmation-tutorial__h3 h3">Installiere Dein Produkt</div>
                    <div class="confirmation-tutorial__copy">Du kannst unsere Hardware für Dein Produkt ganz einfach selbst installieren. Diese bekommst Du innerhalb der nächsten 5 Tage mit DHL zugestellt. Sollten die technischen Voraussetzungen nicht gegeben sein, meldet sich einer unserer Service-Techniker telefonisch bei Dir, um einen Termin für die Installation auszumachen. In diesem Fall bringt unser Service-Techniker Deine Hardware direkt zu dem Termin mit.</div>
                  </div>
                </div>
              </div>
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
              </div>
              <div class="confirmationNextSteps orderConfirmationSteps mvcComponent parbase section">
                <!-- Logic for enabling disabling the component -->
                <div class="confirmation__section confirmation-tutorial__section">
                  <div class="confirmation-tutorial__icon">
                    <img
                      src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/clapping-mid.svg"
                      alt=""
                      class=""
                    >
                  </div>
                  <div class="confirmation-tutorial__text">
                    <div class="confirmation__h3 confirmation-tutorial__h3 h3">Los geht’s, genieße Dein Vodafone Produkt!</div>
                    <div class="confirmation-tutorial__copy"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="confirmation-tutorial__mycare">
              <img src="//www.unitymedia.de/privatkunden/checkout_confirmation/_jcr_content/redesignedNextSteps/confirmationtutorial/imageMycare.img.svg/1582030115073.svg">
              <h3 class="confirmation-tutorial__h4 h4">
                Registrier Dich in unserem Online-Kundencenter
              </h3>
              <div class="confirmation-tutorial__copy">
                Profitiere von unseren Serviceangeboten und sehe Deine Rechnungen direkt ein.<br> Eine Einladung dazu findest Du in Kürze in deinem Postfach.
              </div>
            </div>
            <div
              class="confirmation-tutorial__details"
              id="anchor_purchaseDetails"
            >
              <div class="confirmation-tutorial__headline">
                <div class="confirmation__h2 confirmation__h2--body confirmation-tutorial__h2 h2">Ihre Bestellung im Detail</div>
              </div>
              <br>
              <table class="confirmation-tutorial__table">
                <thead>
                  <tr>
                    <th>Bestellpositionen</th>
                    <th>einmalig</th>
                    <th>mtl.</th>
                  </tr>
                </thead>
                <tbody
                  v-for="(product, index) in basketObject"
                  :key="index"
                >
                  <tr>
                    <th>
                      {{product.title}}
                      <sup>{{index+1}}</sup>
                      <br>
                      <div
                        class="confirmation-tutorial__blocktext"
                        v-if="product.contract_duration"
                      >Mindestvertragslaufzeit: {{product.contract_duration}} Monate</div>
                    </th>
                    <th></th>
                    <th v-if="product.monthly_price">
                      {{product.monthly_price}} €
                      <br>
                      <div
                        class="confirmation-tutorial__blocktext"
                        v-if="product.productrateplans"
                      >ab dem {{product.monthOfPriceChange}}. Monat: {{product.productrateplans}} €</div>
                    </th>
                    <th v-else>0 €</th>
                  </tr>
                  <tr v-if="product.upfront_price">
                    <th>
                      <div class="confirmation-tutorial__blocktext">Aktivierungsgebühr</div>
                    </th>
                    <th>{{product.upfront_price}} €</th>
                    <th></th>
                  </tr>
                </tbody>
                <tbody>
                  <tr class="confirmation-tutorial__result">
                    <td>
                      <div>Gesamtkosten</div>
                      <div class="confirmation-tutorial__blocktext">inkl. 19% MwSt.</div>
                    </td>
                    <td>{{totalBasketUpfront}} €</td>
                    <td>
                      {{totalBasketMonthly}} €
                      <br>
                      <div
                        class="confirmation-tutorial__blocktext"
                        v-if="totalBasketMonthly !== totalBasketProductrateplans"
                      >ab dem {{basketObject[0].monthOfPriceChange}}. Monat {{totalBasketProductrateplans}} €</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <cablemax-availability-notice />

              <div
                class="confirmation-tutorial__personal-data"
                v-if="$store.getters.desiredActivationDate === 'true'"
              >
                <div class="confirmation-tutorial__personal-headline">Ihre Wunschtermin</div>
                <div class="grid">
                  <div class="grid-col w-1of2 w-1of1-sm">
                    <p>Ihr Wunschtermin: {{ $store.getters.activationDate }}</p>
                  </div>
                  <div class="grid-col w-1of2 w-1of1-sm">
                    <p>Wir werden Sie zeitnah kontaktieren um den Wunschtermin zu bestätigen oder einen anderen zu vereinbaren.</p>
                  </div>
                </div>
              </div>

              <div class="confirmation-tutorial__personal-data">
                <div class="confirmation-tutorial__personal-headline">Ihre persönlichen Daten</div>
                <div class="grid">
                  <div class="grid-col w-1of2 w-1of1-sm">
                    <div>{{customerData.title}} {{customerData.givenName}} {{customerData.familyName}}</div>
                    <div>{{customerData.installationAddress.street}} {{customerData.installationAddress.houseNumber}}</div>
                    <div>{{customerData.installationAddress.zip}} {{customerData.installationAddress.city}}</div>
                    <br>
                  </div>
                  <div class="grid-col w-1of2 w-1of1-sm">
                    <div class="confirmation-tutorial__phone">
                      <strong>Telefon:</strong>
                      {{customerData.phonePrefix}} {{customerData.phoneNumber}}
                    </div>
                    <div>
                      <strong>E-Mail:</strong>
                      {{customerData.email}}
                    </div>
                    <div class="confirmation-tutorial__birthday">
                      <strong>Geburtsdatum:</strong>
                      {{customerData.dateOfBirth}}
                    </div>
                    <p class="confirmation-tutorial__birth-note">
                      Wichtig für die Registrierung im Online-Kundencenter und die Validierung
                      Ihrer E-Mail-Adresse
                    </p>
                  </div>
                </div>
              </div>
              <checkout-footnotes />
            </div>
          </div>
          <div class="grid-col w-1of5 w-1of8-md w-hidden-xs"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkoutFootnotes from '@/components/atoms/checkoutFootnotes.vue'
import CablemaxAvailabilityNotice from '@/components/atoms/CablemaxAvailabilityNotice.vue'

export default {
  name: 'productlistconfirmation',
  components: {
    checkoutFootnotes,
    CablemaxAvailabilityNotice
  },
  // TODO: Refactoring advisable. Why is this computed/reactive? The order confirmation can't change at this point anymore.
  computed: {
    basketObject () {
      return this.$store.state.visitor.basket
    },
    customerData () {
      return this.$store.state.visitor.customer
    },
    totalBasketMonthly () {
      let tempValue = 0
      for (let index = 0; index < this.basketObject.length; index++) {
        if (this.basketObject[index].productrateplans) {
          tempValue += this.basketObject[index].monthly_price * 100
        } else {
          tempValue += this.basketObject[index].monthly_price * 100
        }
      }
      return String(tempValue / 100).replace('.', ',')
    },
    totalBasketUpfront () {
      let tempValue = 0
      for (let index = 0; index < this.basketObject.length; index++) {
        if (this.basketObject[index].upfront_price) {
          tempValue += this.basketObject[index].upfront_price * 100
        }
      }
      return String(tempValue / 100).replace('.', ',')
    },
    totalBasketProductrateplans () {
      let tempPrp = 0
      for (let index = 0; index < this.basketObject.length; index++) {
        if (this.basketObject[index].productrateplans) {
          tempPrp += this.basketObject[index].productrateplans * 100
        } else {
          tempPrp += this.basketObject[index].monthly_price * 100
        }
      }
      return String(tempPrp / 100).replace('.', ',')
    }
  }
}
</script>
