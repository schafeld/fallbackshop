<template>
  <div class="alternative-form">
    <form class="flex column space-evenly">
      <div class="flex row">
        <label
          for="option1"
          class="tick"
        ><input
            class="required"
            required
            type="radio"
            name="alternativeMode"
            id="option1"
            value="contactMe"
            checked
            v-model="setCableMaxAlternative"
          >
          <span class="tick-label">Mich kontaktieren</span></label>
      </div>
      <div class="flex row">
        <label
          for="option2"
          class="tick"
        >
          <input
            type="radio"
            name="alternativeMode"
            id="option2"
            value="cancelMyOrder"
            v-model="setCableMaxAlternative"
          >
          <span class="tick-label">Meine Bestellung stornieren</span></label>
        <tooltip content="Wir schicken Dir eine Bestätigung per E-Mail" />
      </div>
      <div class="flex row">
        <label
          for="option3"
          class="tick"
        >
          <input
            type="radio"
            name="alternativeMode"
            id="option3"
            value="orderCableMax500"
            v-model="setCableMaxAlternative"
          >
          <span class="tick-label">Automatisch <router-link to="/privatkunden/2play/internet-phone-500">Red Internet and Phone 500 Cable</router-link> buchen</span></label>
        <tooltip content="Wir schicken Dir eine Bestätigung per E-Mail" />
      </div>
      <add-to-basket-button
        :skus="skus"
        renderStyle="button-only"
        label="Weiter"
      />
    </form>
  </div>
</template>
<script>
import tooltip from '@/components/atoms/tooltip.vue'
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
export default {
  components: {
    tooltip,
    addToBasketButton
  },
  props: {
    skus: {
      type: Array,
      required: true
    }
  },
  computed: {
    setCableMaxAlternative: {
      get () {
        return this.$store.state.visitor.customer.cableMaxRFSAlternative
      },
      set (value) {
        this.$store.commit('setCableMaxAlternativeProcess', value)
      }
    }
  }
}
</script>
<style>
span.tick-label {
  margin-bottom: 20px;
}
</style>
