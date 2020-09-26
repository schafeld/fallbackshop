<template>
  <div class="second_layer_html">
    <div class="section-drawer light-bg js_toggle js_toggle-scroll-to">
      <button class="section-drawer-btn js_toggle-trigger" :class="{'is-active':open}" @click="toggleLayer()">
        <span v-if="open">Weniger anzeigen</span>
        <span v-else>Mehr anzeigen</span>
      </button>
      <div class="section-drawer-wrapper js_toggle-wrapper" :style="'height: ' + heightValue">
        <div class="toggle-content js_toggle-content">
          <div class="section-drawer-content container">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    heightValue () {
      if (this.open) {
        return 'auto'
      } else { return '0px' }
    }
  },
  methods: {
    toggleLayer () {
      this.open = !this.open
    }
  }
}
</script>
