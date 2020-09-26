<template>
  <div class="general-landingpage">
    <header-container/>
      <wechselvorteil-page/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import wechselvorteilPage from '@/components/pageTemplates/landingpage/wechselvorteilPage.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'landingPage',
  components: {
    headerContainer,
    footerContainer,
    wechselvorteilPage
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
