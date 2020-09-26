<template>
  <div class="general-landingpage">
    <header-container/>
    <horizon-tv/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import horizonTv from '@/components/pageTemplates/landingpage/horizonTv.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'mfddLandingPage',
  components: {
    headerContainer,
    footerContainer,
    horizonTv
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
