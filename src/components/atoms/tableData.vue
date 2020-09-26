<template>
  <td class="align-center"
    :class="optionalCssClasses"
    :colspan="colspan">
    <div style="word-wrap:break-word;">
      <slot/>
    </div>
  </td>
</template>

<script>
export default {
  name: 'tableData',
  props: {
    colspan: {
      type: Number,
      required: false
    },
    optionalCssClasses: {
      type: String,
      required: false
    }
  }
}
</script>
