<template>
  <tr>
    <!-- This is the previously used leading title cell. TODO: Remove.
    <th v-if="header" :colspan="colspan">
      <span v-if="headerClass">
        <h4 class="h4">
          <span v-html="header"/>
        </h4>
      </span>
      <span v-else>
        <span v-html="header"/>
      </span>

      <img v-if="header == 'Wechselvorteil'" class="table-header-image" src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/cut_bbc_wechselvorteil_tabelle_tiny.png">

    </th>
    <td v-else/>
    <td />
    -->
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'tableRow',
  props: {
    header: {
      type: String,
      required: false
    },
    colspan: {
      type: Number,
      required: false
    },
    headerClass: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
  .table-header-image {
    width:90%;
    bottom:-3px;
    left: 0px;
    position: absolute;
  }
</style>
