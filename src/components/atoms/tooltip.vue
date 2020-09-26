<template>
  <span :class="'tooltip ' + tooltipWrapperCss" >
    <span class="tooltip-icon icon-info" > </span>
    <span class="tooltip-layer" v-html="content" v-if="content"/>
    <span class="tooltip-layer" v-else>
      <slot/>
    </span>
  </span>
</template>

<script>
// TODO: Refactor umefn.vue and tooltip.vue into 1 tooltip component.
export default {
  name: 'tooltip',
  /* Align tooltip left by passing optional CSS class 'left-tooltip' in prop tooltipWrapperCss */
  /* Assign size by passing optional CSS class 'size6' */
  props: {
    content: {
      type: String,
      required: false
    },
    tooltipWrapperCss: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
