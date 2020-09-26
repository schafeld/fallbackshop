<template>
  <div class="tabs parbase section">
    <div class="tabs js_tabs">
      <ul class="tabs__list js_tabs-tabs">
        <li
          v-for="(mgmSet, index) in mgmValueSet"
          :key="index"
          class="tabs__item js_tabs-list-item"
          :class="{'tabs__item--is-active':isActive[index]}"
          @click="toggleActiveState(index)"
        >
          <span class="tabs__text" data-tabs-text="Kombipakete">{{mgmSet.mgmSet.title}}</span>
        </li>
      </ul>
      <span v-for="(mgmSet, index) in mgmValueSet" :key="index">
        <mgm-table-entry :dataValue="mgmSet.mgmSet" v-if="isActive[index]"/>
      </span>
    </div>
  </div>
</template>

<script>
import mgmTableEntry from '@/components/molecules/mgmTableEntry.vue'
export default {
  name: 'mgmTableOfContent',
  components: {
    mgmTableEntry
  },
  data () {
    return {
      isActive: [],
      mgmValueSet: [
        // Definition of MGM products to be displayed and their order.
        // Values are defined in promotions store.
        {
          mgmSet: {
            title: 'Internet-Pakete',
            mgmSkus: [
              '2P_RIP_1000',
              '2P_RIP_500',
              '2P_RIP_250',
              '2P_RIP_100_1',
              '2P_RIP_50'
            ]
          }
        },
        {
          mgmSet: {
            title: 'Kombi-Pakete',
            mgmSkus: [
              '2P_RIP_1000_HZN',
              '2P_RIP_500_HZN',
              '2P_RIP_250_HZN',
              '2P_RIP_100_HZN',
              '2P_RIP_50_HZN'
            ]
          }
        }
      ]
    }
  },
  mounted () {
    if (this.mgmValueSet.length > 0) {
      var index = 0
      this.mgmValueSet.forEach(mgmSet => {
        if (index === 0) {
          this.isActive.push(true)
        } else {
          this.isActive.push(false)
        }
        index++
      })
    }
  },
  methods: {
    toggleActiveState (indexValue) {
      if (this.isActive.length > 0) {
        let indexOfActive = this.isActive.indexOf(true)
        if (indexOfActive !== indexValue) {
          this.isActive.splice(indexOfActive, 1, false)
          this.isActive.splice(indexValue, 1, true)
        }
      }
    }
  }
}
</script>
