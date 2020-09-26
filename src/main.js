import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Axios from 'axios'
import Umefn from './components/atoms/umefn.vue'
import VeeValidate from 'vee-validate'
import closeNavigationOverlay from '@/helper/closeNavigationOverlay'
import VueFloatLabel from 'vue-float-label'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.component('umefn', Umefn)
Vue.use(VeeValidate)
Vue.use(VueFloatLabel)

Vue.mixin({
  data () {
    return {
      DEBUG: false,
      MOCKDATA: false,
      DEVROUTE: false,
      RFSFALLBACK: false,
      PROMOTION: {
        dov: false,
        otc: false,
        mgm: false,
        sdp: false,
        miw: true,
        tpp: true
      },
      AVAILABILITY: [],
      window: {
        width: 0,
        height: 0,
        scrollY: 0
      }
    }
  },
  methods: {
    closeNavigationOverlay,
    closeDialog () {
      closeNavigationOverlay()
      this.$emit('dialogClosed')
    },
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    handleScroll () {
      this.window.scrollY = window.scrollY
    },
    scrollTo (refName) {
      var element = document.getElementById(refName)
      var toTop = element.offsetTop
      window.scrollTo(0, toTop)
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
    this.DEBUG = window.FBXDEBUG
    this.MOCKDATA = window.FBXMOCK
    this.DEVROUTE = window.FBXDEV
    this.RFSFALLBACK = window.STATICRFS
    if (window.FBXPROMO.dov) {
      this.PROMOTION.dov = window.FBXPROMO.dov
    }
    if (window.FBXPROMO.otc) {
      this.PROMOTION.otc = window.FBXPROMO.otc
    }
    if (window.FBXPROMO.mgm) {
      this.PROMOTION.mgm = window.FBXPROMO.mgm
    }
    if (window.FBXPROMO.wvt) {
      this.PROMOTION.wvt = window.FBXPROMO.wvt
    } else { this.PROMOTION.wvt = true }
    if (window.FBXPROMO.olv) {
      this.PROMOTION.olv = window.FBXPROMO.olv
    } else { this.PROMOTION.olv = true }
    if (window.FBXPROMO.sdv) {
      this.PROMOTION.sdv = window.FBXPROMO.sdv
    } else { this.PROMOTION.sdv = true }
    if (window.FBXPROMO.sdp) {
      this.PROMOTION.sdp = window.FBXPROMO.sdp
    }
    if (window.AVAILABILITY) {
      this.AVAILABILITY = window.AVAILABILITY
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
})

// TODO: replace with proper component if possible? currently each {{}} needs to be set as v-html if tooltip should be expected
Vue.filter('toolTipReplacer', function (value) {
  if (!value) return ''
  value = value.toString()
  value = value.replace(
    '<tt>',
    '<span class="tooltip js_tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">'
  )
  value = value.replace(
    '</tt>',
    '</span></span>'
  )
  return value
})

Vue.filter('legalTextReplacer', function (value) {
  if (!value) {
    return ''
  } else if (value.search('{{UMEFN') !== -1) {
    value = value.toString()
    let helperBefore = value.substring(0, value.indexOf('{'))
    let helperAfter = value.substring(value.indexOf('}') + 1, value.length)
    let helperValue = value.substring(value.indexOf('{') + 2, value.indexOf('}'))
    let helperLegal = store.getters.getLegalText(helperValue)[0]
    if (!helperLegal) {
      helperLegal = helperValue + ' not found.'
    }
    return helperBefore + '<span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer"><span><strong>Rechtliche Hinweise</strong><br>' + helperLegal.content + '</span></span></span>' + helperAfter
  } else return value
})
// common filter to replace skus with title names
Vue.filter('skuToLabel', function (value) {
  let tempValue = ''
  if (!value) return ''
  else {
    tempValue = store.getters.getProductBySku(value)
    if (tempValue) {
      value = tempValue.title
    } else {
      value = ''
    }
  }
  return value
})

new Vue({
  router,
  store,
  Axios,
  Umefn,
  render: h => h(App)
}).$mount('#app')
