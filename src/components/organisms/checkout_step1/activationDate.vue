<template>
  <div class="parbase section">
      <!-- TODO: Make analytics team aware of new tracking parameter desiredActivationDate_true (analogous to wifiopt_true). -->
    <div>
      <fieldset class="fieldset wideform" id="activation-date">
        <span
          class="label"
        >Ab welchem Zeitpunkt möchten Sie ihr neues Unitymedia Produkt nutzen?
          <br>
          <br>
        </span>
        <div class="radioContainer">
          <label class="tick">
            <input
              type="radio"
              name="desiredActivationDate"
              value="false"
              checked="checked"
              tabindex="2"
              v-model="desiredActivationDate"
              @click="trackFormfield('desiredActivationDate_false'), resetActivationDate()"
            >
            <span class="tick-label">Schnellstmöglich <tooltip
                content="In der Regel können Sie Ihr Produkt nach Erhalt der Hardware sofort in Betrieb nehmen. Sofern eine Technikerinstallation nötig ist, melden wir uns telefonisch bei Ihnen zur Terminabsprache."
              />
            </span>
          </label>
          <label class="tick">
            <input
              type="radio"
              name="desiredActivationDate"
              value="true"
              tabindex="3"
              v-model="desiredActivationDate"
              @click="trackFormfield('desiredActivationDate_true')"
            >
            <span class="tick-label">Wunschtermin <tooltip
                content="Dieses Datum wird von uns als Vertragsbeginn übernommen, die Hardware liefern wir passend zum Wunschtermin. Dieser sollte mindestens 4 Tage in der Zukunft liegen. <br/><b>Bitte beachten Sie:</b> Die Hardware wird standardmäßig an Ihre Anschlussadresse geliefert. Sollten Sie umziehen bzw. an der Anschlussadresse noch keine Pakete empfangen können, verwenden Sie bitte eine 'abweichende Lieferadresse' für die Hardware."
              /></span>

          </label>
        </div>

      <div class="activation-date">
        <div class="formrow-col w-1of1">
          <float-label label="Wunschtermin">
            <input
              type="text"
              v-validate="{ rules: { regex: /^\d\d\.\d\d\.\d\d\d\d$/} }"
              :class="{'input': true, 'required': false, 'error': errors.has('activationDate')}"
              id="activationDate"
              name="activationDate"
              maxlength="10"
              pattern="^\d\d\.\d\d\.\d\d\d\d$"
              tabindex="4"
              v-model="activationDate"
              @click="trackFormfield('activationDate')"
              placeholder="Wunschtermin"
              :disabled="desiredActivationDate === 'false'"
            >
          </float-label>
          <span
            v-show="errors.has('activationDate')"
          >Bitte Wunschtermin korrigieren (Format TT.MM.JJJJ).</span>

          <span v-if="this.$data.DEBUG">
            Wunschtermin: {{ activationDate }}
            Wunschtermin gewünscht: {{ desiredActivationDate }}
          </span>
        </div>
      </div>

      </fieldset>
    </div>
  </div>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import trackFormfield from '@/helper/trackFormfield'

export default {
  components: {
    tooltip
  },
  methods: {
    trackFormfield,
    resetActivationDate: function () {
      // delete actual date if desired activation date ('Wunschtermin') is deselected
      this.$store.commit('setActivationDate', null)
    }
  },
  computed: {
    desiredActivationDate: {
      get () {
        return this.$store.state.visitor.customer.desiredActivationDate
      },
      set (value) {
        this.$store.commit('setDesiredActivationDate', value)
      }
    },
    activationDate: {
      get () {
        return this.$store.state.visitor.customer.activationDate
      },
      set (value) {
        this.$store.commit('setActivationDate', value)
      }
    }
  }
}
</script>
<style scoped>
.formrow {
  margin-top: 10px;
}
.fieldset {
    margin-bottom: 0;
  }
input#activationDate {
    margin-top: 20px;
}
@media screen and (min-width: 820px) {
  .formrow {
    padding-left: 25%;
  }
}
@media screen and (max-width: 479px) {
  p, .formrow {
    margin: 0 0 5px 0;
    font-size: 1.2em;
  }
  .formrow,
  .formrow-col {
    margin: 0;
    padding: 0;
  }
  .tick {
    padding-top: 10px;
  }
  .tick-label {
    margin: .2rem 1.5rem 1rem 2.2rem;
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
    background-color: #6FB621;
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
  .select, option {
    font-size: 16px;
  }
  .vfl-has-label {
    width: 100%;
  }
}
</style>
