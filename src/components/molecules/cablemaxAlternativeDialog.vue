<template>
  <div class="static-dialog section light-bg">
    <div
      data-dialog="redxs-details"
      class="dialog js_dialog"
      :class="{'is-visible':isVisible}"
    >
      <div class="dialog-box">
        <button
          class="btn close-btn js_dialog-close"
          @click="$emit('closeDialog')"
        ></button>
        <div class="box-body">
          <div class="dialog_content_html">
            <div class="content parsys">
              <p class="h2a">Probleme mit der Verfügbarkeitsprüfung</p>
              <p
                class="body-style"
                v-if="step === 1"
              >Aufgrund der großen Nachfrage haben wir aktuell Probleme mit unserer Online Verfügbarkeitsprüfung. Du kannst im nächsten Schritt Deine Adresse aber selbst eintragen und die Bestellung absenden. Sofern wir Dich an Deiner Adresse noch nicht oder nur mit niedrigerer Geschwindigkeit beliefern können, melden wir uns umgehend bei Dir.</p>
              <div
                class="flex row space-between"
                v-if="step === 1"
              >
                <add-to-basket-button renderStyle="button-only" label="weiter" :skus="skus"/>
                <!--
                  <button-element
                  label="weiter"
                  type="form_submit_button"
                  v-on:buttonClicked="step = 2"
                />
                -->
              </div>
              <p
                class="body-style"
                v-if="step === 2"
              >Da die Online Verfügbarkeitsprüfung derzeit nicht verfügbar ist, können wir noch nicht garantieren, dass wir Dich mit Red Internet and Phone 1000 Cable beliefern können.</p>
              <p
                class="body-style"
                v-if="step === 2"
              >Sofern keine Verfügbarkeit vorliegt, können wir Dir Red Internet and Phone 500 Cable mit bis zu 500 Mbit/s im Download und 25 Mbit/s im Upload anbieten, zu den gleichen monatlichen Kosten von 19,99 € in den ersten 6 Monaten.</p>
              <p
                class="body-style"
                v-if="step === 2"
              >Bitte gib uns an, wie wir im Falle einer Nichtverfügbarkeit von Red Internet and Phone 1000 Cable an Deiner Adresse verfahren sollen:</p>
              <div
                class="flex row space-between"
                v-if="step === 2"
              >
                <!--<besit-alternative-confirm :skus="skus"/>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import buttonElement from '@/components/atoms/buttonElement.vue'
// import besitAlternativeConfirm from '@/components/molecules/besitAlternativeConfirm.vue'
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
export default {
  components: {
    // buttonElement,
    // besitAlternativeConfirm,
    addToBasketButton
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    skus: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      step: 1
    }
  },
  mounted () {
    this.step = 1
  }
}
</script>
