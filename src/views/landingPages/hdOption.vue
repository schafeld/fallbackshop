<template>
  <div class="general-landingpage">
    <header-container/>
    <hd-option/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import hdOption from '@/components/pageTemplates/landingpage/hdOption.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'mfddLandingPage',
  components: {
    headerContainer,
    footerContainer,
    hdOption
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
