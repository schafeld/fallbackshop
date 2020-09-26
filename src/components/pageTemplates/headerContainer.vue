<template>
  <div class="header discovery-header js_header">
    <meta-navigation @click="closeNavigationOverlay()"/>
    <logo-bar @click="closeNavigationOverlay()"/>
    <service-menu @click="closeNavigationOverlay()"/>
    <main-menu v-on:closeLayer="closeNavigationOverlay()" v-bind:navigationObject="navigation"/>
    <mobile-navi v-bind:navigationObject="navigation"/>
  </div>
</template>
<script>
import metaNavigation from '@/components/organisms/metanavigation.vue'
import serviceMenu from '@/components/organisms/servicemenu.vue'
import mainMenu from '@/components/organisms/mainmenu.vue'
import logoBar from '@/components/organisms/logobar.vue'
import mobileNavi from '@/components/organisms/mobilenavi.vue'

export default {
  name: 'header-container',
  components: {
    metaNavigation,
    serviceMenu,
    mobileNavi,
    mainMenu,
    logoBar
  },
  props: {
    msg: String
  },
  computed: {
    navigation () {
      return this.$store.getters.getNavigation
    }
  }
}
</script>

<style>
/* Mobile Config */
.mobile-config-visual img {
  max-width: 55%;
}
/* A-Spot Neukunden slides colors/gradients */
#lgi-aspot-wdg,
#lgi-aspot-loggedOut-wdg,
#lgi-aspot-loggedIn-wdg {
  background: linear-gradient(90deg, #169c48, #26689d) !important;
}
#lgi-aspot-tabletpromo,
#lgi-aspot-loggedOut-tabletpromo,
#lgi-aspot-loggedIn-tabletpromo {
  background-image: linear-gradient(
    -135deg,
    #093774 0%,
    #1a5f96 16%,
    #599595 47%,
    #489518 77%,
    #2f6502 100%
  ) !important;
}
#lgi-aspot-wechselvorteil,
#lgi-aspot-loggedOut-wechselvorteil,
#lgi-aspot-loggedIn-wechselvorteil {
  background-image: linear-gradient(
    -237deg,
    #e19831 0%,
    #e8bc2d 64%,
    #bf4105 100%
  ) !important;
}
#lgi-aspot-deal,
#lgi-aspot-loggedOut-deal,
#lgi-aspot-loggedIn-deal {
  background-image: linear-gradient(
    135deg,
    #093774 0%,
    #1a5f96 16%,
    #599595 47%,
    #489518 77%,
    #2f6502 100%
  ) !important;
}
#lgi-aspot-wechsler,
#lgi-aspot-loggedOut-wechsler,
#lgi-aspot-loggedIn-wechsler {
  background-color: #414587 !important;
}
#lgi-aspot-flow,
#lgi-aspot-loggedOut-flow,
#lgi-aspot-loggedIn-flow {
  background-image: linear-gradient(
    -225deg,
    #00679a 0%,
    #009c64 100%
  ) !important;
}
/* Targeted Home */
#lgi-aspot-3play,
#lgi-aspot-loggedOut-3play,
#lgi-aspot-loggedIn-3play {
  background-image: linear-gradient(
    45deg,
    #302f92 0%,
    #ca54a9 54%,
    #737ff9 100%
  ) !important;
}
#lgi-aspot-kundencenter,
#lgi-aspot-loggedOut-kundencenter,
#lgi-aspot-loggedIn-kundencenter {
  background-color: #16b5e9 !important;
}
#lgi-aspot-community,
#lgi-aspot-loggedOut-community,
#lgi-aspot-loggedIn-community {
  background-color: #fff !important;
}
/* B-Spot Teaser Home */
@media screen and (max-width: 1279px) {
  .br-teaser-home .w-1of2 {
    width: 100%;
  }
  .br-teaser-home .h4 br,
  .br-teaser-home .p br {
    display: none;
  }
  .br-teaser-home img {
    position: static !important;
    margin: 20px auto 0 !important;
  }
}
@media screen and (max-width: 979px) {
  .br-teaser-home .w-1of2 {
    width: 50%;
  }
  .br-teaser-home .h4 br,
  .br-teaser-home .p br {
    display: block;
  }
  .br-teaser-home img {
    position: absolute !important;
    margin: 0 0 20px !important;
  }
}
/* C-Spot Home */
@media screen and (max-width: 819px) {
  .w-1of1-sm .sf-white-content-box-home {
    width: calc(100vw - 40px);
    margin-bottom: 10px;
  }
}

</style>
