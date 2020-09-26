<template>
  <div class="general-landingpage">
    <header-container/>
    <kabelanschluss/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import kabelanschluss from '@/components/pageTemplates/landingpage/kabelanschluss.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'mfddLandingPage',
  components: {
    headerContainer,
    footerContainer,
    kabelanschluss
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
