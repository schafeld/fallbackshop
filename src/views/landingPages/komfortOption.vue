<template>
  <div class="general-landingpage">
    <header-container/>
    <komfort-option/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import komfortOption from '@/components/pageTemplates/landingpage/komfortOption.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'mfddLandingPage',
  components: {
    headerContainer,
    footerContainer,
    komfortOption
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
