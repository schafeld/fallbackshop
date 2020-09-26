<template>
  <div class="wifioptin mvcComponent parbase section">
    <div>
      <fieldset class="fieldset wideform wifioptcontainer" id="wifiopt" data-sccompid="wifiopt">
        <h3 class="h5">WifiSpot - Dein kostenloses WLAN für unterwegs</h3>
        <span
          class="label"
          v-if="this.$data.window.width > 479"
        >Mit Unitymedia WifiSpot können Sie unterwegs kostenloses öffentliches WLAN nutzen und mobiles Datenvolumen sparen – so einfach und komfortabel wie zu Hause.
          <br>
          <br>
        </span>
        <div class="radioContainer">
          <label class="tick">
            <input
              type="radio"
              name="wifiopt"
              value="true"
              checked="checked"
              tabindex="59"
              v-model="setWifispot"
              @click="trackFormfield('wifiopt_true')"
            >
            <span
              class="tick-label"
            >Ja, ich möchte WifiSpot nutzen und stimme der Einrichtung eines separaten WLAN auf dem von Unitymedia-Router zu.
              <tooltip
                content="Wenn Sie WifiSpot aktivieren, können Sie kostenlos WifiSpot nutzen und unterwegs mit Highspeed surfen – so komfortabel wie zu Hause. Mit der Aktivierung wird auf dem Unitymedia WLAN-Router das separate WLAN-Signal für WifiSpot aktiviert. Sie haben dadurch keine Nachteile, der WifiSpot ist sicher vom privaten Netz getrennt und hat keinen Einfluss auf Ihre gebuchte Internetgeschwindigkeit. Sie haften nicht für die Internetnutzung durch Dritte am WifiSpot. Sie können WifiSpot jederzeit deaktivieren und auch wieder aktivieren."
              />
            </span>
          </label>
          <label class="tick">
            <input
              type="radio"
              name="wifiopt"
              value="false"
              tabindex="60"
              v-model="setWifispot"
              @click="trackFormfield('wifiopt_false')"
            >
            <span class="tick-label">Nein, ich möchte WifiSpot nicht nutzen.</span>
          </label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'Wifispot',
  components: {
    tooltip
  },
  methods: {
    trackFormfield
  },
  computed: {
    setWifispot: {
      get () {
        return this.$store.state.visitor.customer.wifiSpotConsent
      },
      set (value) {
        this.$store.commit('setWifispot', value)
      }
    }
  }
}
</script>
<style scoped>
.formrow {
  margin-top: 10px;
  padding-left: 15px;
}
.fieldset {
    margin-bottom: 0;
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
