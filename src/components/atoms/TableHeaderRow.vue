<template>
  <tr class="table-header-row">
      <td :colspan="length">
          <span :class="headerClass">{{header}}</span>
      </td>
  </tr>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: false
    },
    headerClass: {
      type: String,
      required: false
    },
    length: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
    .table-header-row {
        text-align: center;
    }
</style>
