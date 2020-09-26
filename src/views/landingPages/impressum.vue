<template>
  <div class="general-landingpage">
    <header-container/>
      <impressum-page/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import impressumPage from '@/components/pageTemplates/landingpage/impressum.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'landingPage',
  components: {
    headerContainer,
    footerContainer,
    impressumPage
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
