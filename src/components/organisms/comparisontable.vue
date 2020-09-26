<template>
  <module-wrapper :background="setObject.gradient" :darkBg="false">
    <div class="ume-compact grid">
      <div class="grid-col w-1of1">
        <div class="gridcol parsys">
          <comparison-page-header :set="set"/>
          <spacer setting="5" v-if="setObject.title==='onePlay'"/>
          <spacer setting="5" v-if="setObject.title==='onePlay'"/>
        </div>
      </div>
    </div>
    <comparison-table-section :set="set"/>
    <div class="spacer section">
      <div class="upc_spacer_height_5"></div>
    </div>
  </module-wrapper>
</template>
<script>
import spacer from '@/components/atoms/spacer.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import comparisonPageHeader from '@/components/molecules/comparisonPageHeader.vue'
import comparisonTableSection from '@/components/molecules/comparisonTableSection.vue'

export default {
  components: {
    comparisonPageHeader,
    comparisonTableSection,
    spacer,
    moduleWrapper
  },
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
.section-content {
  background-position: left center, left;
  background-size: 50%, 100%;
  background-repeat: no-repeat;
  padding-top: 0;
}
</style>
