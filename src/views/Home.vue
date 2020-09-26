<template>
  <div class="home">
    <header-container/>
    <content-container/>
    <footer-container/>
    </div>
</template>

<script>
import headerContainer from '@/components/pageTemplates/headerContainer.vue'
// To enable code splitting in webpack by using import in function comment this import out and use arrow function below
import footerContainer from '@/components/pageTemplates/footerContainer.vue'
import contentContainer from '@/components/pageTemplates/homePage.vue'
import updateTealiumDataLayerFromComponent from '@/helper/updateTealiumDataLayerFromComponent'

export default {
  name: 'home',
  components: {
    headerContainer,
    // footerContainer: () => import('@/components/pageTemplates/footerContainer.vue'),
    footerContainer,
    contentContainer
  },
  methods: {
    updateTealiumDataLayerFromComponent,
    trackPage () {
      // SiteCatalyst tracking, DA-3661
      if (window.DEBUG === true) {
        console.log('Track home from component...')
      }
      try {
        if (window.ANALYTICS_ALLOWED) {
          window.sncf.clearVars()
          window.sncf.prop69 = window.CONFIG_BBCT.shopId
          window.sncf.pageName = 'homepage'
          window.sncf.t()
        }
      } catch (e) {
        console.warn('Tracking failed for homepage. ' + e)
      }
    }
  },
  mounted: function () {
    updateTealiumDataLayerFromComponent(this)
    this.trackPage()
  }
}
</script>
