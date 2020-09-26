<template>
  <tr>
    <th
      class="expand-table-btn js_comparison-table-trigger"
      :colspan="length" v-on:click="$emit('exntendedDetails')"
    >Ausführliche Tabelle anzeigen</th>
  </tr>
</template>
<script>
export default {
  name: 'extendedDetails',
  props: {
    length: {
      type: Number,
      required: true
    }
  }
}
</script>
