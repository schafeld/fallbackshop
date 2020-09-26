<template>
  <div class="dslswitcher section">
    <span>
      <span class="section-headline">Ihr bisheriger Vertrag</span>
      <tooltip
        content="Bitte geben Sie bei der Auftragserteilung an, dass Sie noch bei einem anderen Telefonanbieter gebunden sind, damit wir Ihnen bis zum Ende der Laufzeit des bisherigen Festnetztelefonanschlussvertrages, maximal 12 Monate, die monatliche Grundgebühr für Ihren Breitband-Tarif (nicht aber für einen etwaig erforderlichen Kabelanschluss) erlassen. Bitte vergessen Sie nicht nach der Bestellung innerhalb von 2 Wochen einen Nachweis über Ihren bisherigen Vertrag an uns zu senden."
      />
    </span>
    <div class>
      <div class="formrow-col w-1of1">
        <span
          class="label req"
        >Bei einem Anbieterwechsel können Sie Ihr neues Unitymedia Paket bis zu 12 Monate gratis nutzen</span>
      </div>
      <div class="formrow-col w-1of2">
        <select
          v-validate.immediate="{required: true}"
          data-vv-as="selected"
          name="dsl_switch_select"
          id="dsl_switch_select"
          class="switcher"
          :class="{required: true, 'error': errors.has('dsl_switch_select'), 'valid' :(dsl_switch_select) }"
          tabindex="1"
          v-model="dsl_switch_select"
          @click="trackFormfield('dsl_switch_select')"
        >
          <!-- String(!) value "undefined" is for validation only. -->
          <option value selected="selected">Bitte wählen</option>
          <option value="true">Ja, ich habe bereits einen DSL Vertrag.</option>
          <option value="false">Nein, ich habe keinen DSL Vertrag.</option>
        </select>
        <span v-show="errors.has('dsl_switch_select')">Bitte Auswahl treffen</span>
      </div>
    </div>
  </div>
</template>

<script>
import trackFormfield from '@/helper/trackFormfield'
import tooltip from '@/components/atoms/tooltip.vue'

export default {
  name: 'dslSwitcher',
  components: {
    tooltip
  },
  methods: {
    trackFormfield
  },
  computed: {
    dsl_switch_select: {
      get () {
        return this.$store.state.visitor.customer.dslSwitch
      },
      set (value) {
        this.$store.commit('setDslSwitch', value)
      }
    }
  }
}
</script>

<style scoped>
.dslswitcher {
  padding-bottom: 0px;
  padding-left: 0px;
}
.formrow {
  margin-top: 10px;
  padding-left: 15px;
}
@media screen and (min-width: 820px) {
  .formrow {
    padding-left: 25%;
  }
}
@media screen and (max-width: 480px) {
  .w-1of2 {
    width: 100%;
  }
}
.section-headline {
  font-family: VodafoneRg;
  font-size: 18px;
  font-weight: bold;
  line-height: 20´4px;
}
.label.req {
  font-family: Helvetica;
  font-size: 14px;
  line-height: 18px;
}
span {
  color: #333333;
  font-family: Helvetica;
  font-size: 14px;
  line-height: 18px;
  font-weight: lighter;
}
.formrow-col {
  padding: 0;
}
@media screen and (max-width: 479px) {
  .formrow {
    padding: 0 16px;
  }
  .dslswitcher {
    padding-bottom: 35px;
  }
  select.switcher {
    font-size: 1.2em;
  }
  .label.req {
    padding: 10px;
  }
}
</style>
