<template>
  <tr>
    <th
      :class="{'mainheadline':isMain, 'subheadline':!isMain}"
      :colspan="colspan"
    >
      <slot />
    </th>
  </tr>
</template>

<script>
export default {
  name: 'tableHeader',
  props: {
    colspan: {
      type: Number,
      required: false
    },
    amount: {
      type: Number,
      required: false
    },
    isMain: {
      type: Boolean,
      required: false
    }
  }
}
</script>
