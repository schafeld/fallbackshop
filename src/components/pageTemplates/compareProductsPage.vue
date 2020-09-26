<template>
  <div class="body">
    <div class="par parsys">
      <comparison-table
        :set="set"
      />
      <wechsel-vorteil
        v-if="set === 'twoPlay' || set === 'threePlay'"
      />
      <online-vorteil-modul
        :onlineVorteil="maxPromoValueForProductFamily"
        v-if="set !== 'twoPlay'"
      />
      <online-vorteil-modul
        :onlineVorteil="maxPromoValueForProductFamily"
        v-else
      />
    </div>
  </div>
</template>
<script>
import comparisonTable from '@/components/organisms/comparisontable.vue'
import onlineVorteilModul from '@/components/organisms/onlineVorteilModul.vue'
import wechselVorteil from '@/components/organisms/wechselvorteil.vue'

export default {
  name: 'comparisonTableBody',
  components: {
    comparisonTable,
    wechselVorteil,
    onlineVorteilModul
  },
  computed: {
    maxPromoValueForProductFamily () {
      return this.$store.getters.getSetinfoBySettitle(this.set).maxPromoValue
    }
  },
  props: {
    set: {
      type: String,
      required: true
    }
  }
}
</script>
