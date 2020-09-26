<template>
  <div class="spacer section">
    <div :class="'upc_spacer_height_' + setting"></div>
  </div>
</template>
<script>
export default {
  name: 'spacer',
  props: {
    setting: {
      type: String,
      required: true
    }
  }
}
</script>
