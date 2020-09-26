<template>
  <div class="single-aspot-toggle" :style="'display: ' + displayMe">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'singleASpot',
  props: {
    displaySlide: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    displayMe () {
      if (this.displaySlide) {
        return 'block'
      } else {
        return 'none'
      }
    }
  }
}
</script>
<style>
@media screen and (max-width: 879px) {
  .text-container {
    padding: 0 20px;
  }
  .dcomm_button.section {
    text-align: center;
  }
}
</style>
