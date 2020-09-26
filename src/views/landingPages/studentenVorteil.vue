<template>
  <div class="general-landingpage">
    <header-container/>
    <studenten-vorteil/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import studentenVorteil from '@/components/pageTemplates/landingpage/studentenVorteil.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'mfddLandingPage',
  components: {
    headerContainer,
    footerContainer,
    studentenVorteil
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
