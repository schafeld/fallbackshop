<template>
  <div class="general-landingpage">
    <header-container/>
    <kunden-werben-praemien-page/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import kundenWerbenPraemienPage from '@/components/pageTemplates/landingpage/kundenWerbenPraemien.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'landingPage',
  components: {
    headerContainer,
    footerContainer,
    kundenWerbenPraemienPage
  },
  methods: {
    updateTealiumDataLayerFromComponent
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
  }
}
</script>
