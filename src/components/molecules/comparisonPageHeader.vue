<template>
  <div
    v-if="setObject.headline"
    class="comparison-page-header"
  >
    <div class="headline parbase section">
      <h1>{{setObject.headline}}</h1>
      <h2>{{setObject.subline}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comparisonPageHeader',
  props: {
    set: {
      type: String,
      required: true
    }
  },
  computed: {
    setObject () {
      return this.$store.getters.getSetinfoBySettitle(this.set)
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    text-align: center;
  }
  h1 {
    font-size: 4.8rem;
    line-height: 5.4rem;
    font-family: VodafoneRg,Arial,sans-serif;
    color: var(--color-vodafone-red);
  }
  h2 {
    font-size: 3rem;
    line-height: 3.4rem;
    font-family: VodafoneLt,Arial,sans-serif;
    color: var(--color-vodafone-dark-grey);
  }
</style>
