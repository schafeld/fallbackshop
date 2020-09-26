<template>
  <div class="faq section">
    <h2 class="h2 align-left">{{headlineText}}</h2>
    <ul class="faq-list">
      <slot/>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    headline: {
      type: String,
      required: false
    }
  },
  computed: {
    headlineText () {
      let helperText = 'Gut zu wissen'
      if (this.headline) {
        helperText = this.headline
      }
      return helperText
    }
  }
}
</script>
