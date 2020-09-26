<template>
    <div class="ume-overlay js_overlay" :class="{'displacement-for-vodafone-banner':offsetVodafoneBanner, 'displacement-for-debug-output':this.$data.DEBUG}" @click="closeDialog()"></div>
</template>
<script>
export default {
  name: 'umeOverlay',
  data: () => ({
    // CR-51040, Vodafone Kiss banner displaces page overlay.
    offsetVodafoneBanner: window.OFFSET_VODAFONE_BANNER || false
  })
}
</script>
<style>
div.ume-overlay.js_overlay {
  top: 175px;
}
div.ume-overlay.js_overlay.displacement-for-debug-output {
  top: 190px;
}
div.ume-overlay.js_overlay.displacement-for-vodafone-banner {
  /* top: 175px; without USt-Banner */
  top: 263px;
}
</style>
