<template>
  <div class="nav main-nav js_main-nav hidden-sm">
    <nav-container v-bind:navigationObject="navigationObject"/>
    <layer-navigation/>
    <div class="nav-btn nav-close" data-nav="close" @click="$emit('closeLayer')"></div>
  </div>
</template>
<script>
import layerNavigation from '@/components/molecules/layerNavigation.vue'
import navContainer from '@/components/molecules/navContainer.vue'

export default {
  components: {
    navContainer,
    layerNavigation
  },
  props: {
    navigationObject: {
      type: Array,
      required: true
    }
  }
}
</script>
