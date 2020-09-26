// Routing setup and info for display and rendering into Tealium data layer.
// routes[n].meta.title is used for HTML tittle tag content.
// routes[n].meta.oTagData is route-specific data for Tealium data layer.
// TODO: Refactor tracking for checkout and common pages into one component or helper.

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CheckoutStep1 from './views/checkout_step1.vue'
import CheckoutStep2 from './views/checkout_step2.vue'
import CheckoutConfirmation from './views/checkout_confirmation.vue'
import ProductPageView from './views/productpageview.vue'
import ProductDetailPageView from './views/products/productDetailPage.vue'
import SimpleProductPage from './views/products/simpleProductPage.vue'
import ComparisonTable from './views/comparisontable.vue'
import Wechselvorteil from './views/landingPages/wechselvorteil.vue'
import KundenWerbenPraemien from './views/landingPages/kundenWerbenPraemien.vue'
import StudentenVorteil from './views/landingPages/studentenVorteil.vue'
import horizonTv from './views/landingPages/horizonTv.vue'
import hdOption from './views/landingPages/hdOption.vue'
import kabelanschluss from './views/landingPages/kabelanschluss.vue'
import komfortOption from './views/landingPages/komfortOption.vue'
import Error404 from './views/Error404.vue'
import AgbPage from './views/landingPages/agb.vue'
import impressumPage from './views/landingPages/impressum.vue'

import closeNavigationOverlay from '@/helper/closeNavigationOverlay'
import trackGenericPage from '@/helper/trackGenericPage'
import trackErrorPage from '@/helper/trackErrorPage'
import updateTealiumDataLayer from '@/helper/updateTealiumDataLayer'

// TODO: Find some less crazy way to make bulletpoint superscripts clickable.
import clickAndScrollTo from '@/components/widgets/kiss/helper/clickAndScrollTo'
window.globalClickAndScrollTo = clickAndScrollTo

// Enable code splitting in webpack (works locally but not from AEM/DAM)
// const CheckoutStep1 = () => import(/* webpackChunkName: 'checkout_step1' */ './views/checkout_step1.vue')
// const CheckoutStep2 = () => import(/* webpackChunkName: 'checkout_step2' */ './views/checkout_step2.vue')
// const CheckoutConfirmation = () => import(/* webpackChunkName: 'checkout_confirmation' */ './views/checkout_confirmation.vue')
// const Wechselvorteil = () => import(/* webpackChunkName: 'wechselvorteil' */ './views/landingPages/wechselvorteil.vue')
// const ProductDetailPageView = () => import(/* webpackChunkName: 'productDetailPage' */ './views/products/productDetailPage.vue')
// const ComparisonTable = () => import(/* webpackChunkName: 'comparisonTable' */ './views/comparisontable.vue')
// const KundenWerben = () => import(/* webpackChunkName: 'kundenWerben' */ './views/landingPages/kundenWerben.vue')
// const KundenWerbenPraemien = () => import(/* webpackChunkName: 'kundenWerbenPraemien' */ './views/landingPages/kundenWerbenPraemien.vue')
// const ProductPageView = () => import(/* webpackChunkName: 'productPageView' */ './views/productpageview.vue')
// const AgbPage = () => import('./views/landingPages/agb.vue')
// const impressumPage = () => import('./views/landingPages/impressum.vue')

Vue.use(Router)

const router = new Router({
  // base: __dirname, // and set publicPath: '/' in Webpack maybe for using Webpack chunks on server? https://stackoverflow.com/questions/44074086/vue-router-failed-to-resolve-async-component-after-reloading-page
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      // trackGenericPage(to.path) // root is tracked in view component
      next()
    },
    meta: {
      title: 'Internet, Telefon, TV und Mobilfunk | Unitymedia & Vodafone',
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    }
  },
  {
    path: '/privatkunden/angebote/aktionen-und-kampagnen/top-seller',
    name: 'topseller',
    component: ComparisonTable,
    beforeEnter: (to, from, next) => {
      // TODO: Refactor this 'tracking fix',
      // (ComparisonTable redirects mobile users instantly to detail page so there is no page view to be tracked)
      if (window.innerWidth > 479) {
        trackGenericPage(to.path, to.meta.skuList, 'event92')
      }
      next()
    },
    meta: {
      title: 'Topseller: Angebote und aktuelle Aktionen  | Unitymedia & Vodafone',
      skuList: [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1']],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      'set': 'topseller'
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/',
    name: 'red-internet-phone-comparison-table',
    component: ComparisonTable,
    beforeEnter: (to, from, next) => {
      if (window.innerWidth > 479) {
        trackGenericPage(to.path, to.meta.skuList, 'event92')
      }
      next()
    },
    meta: {
      title: 'Red Internet and Phone: Internet und Telefon in einem Paket',
      skuList: [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1']],
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      'set': 'twoPlay'
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-50/',
    name: 'red-internet-phone-50-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Günstiges Internet & Telefon Paket: Vodafone Red Internet and Phone 50',
      skuList: ['2P_RIP_50_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_50_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-50/details',
    name: 'red-internet-phone-50-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet and Phone 50 - Vodafone',
      skuList: ['2P_RIP_50_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_50_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-100/',
    name: 'red-internet-phone-100-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internet and Phone 100 Cable',
      skuList: ['2P_RIP_100_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_100_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-100/details',
    name: 'red-internet-phone-100-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet and Phone 100 - Vodafone',
      skuList: ['2P_RIP_100_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_100_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-250/',
    name: 'red-internet-phone-250-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internet and Phone 250 Cable',
      skuList: ['2P_RIP_250_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_250_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-250/details',
    name: 'red-internet-phone-250-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet and Phone 250 - Vodafone',
      skuList: ['2P_RIP_250_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_250_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-500/',
    name: 'red-internet-phone-500-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internet and Phone 500',
      skuList: ['2P_RIP_500_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_500_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-500/details',
    name: 'red-internet-phone-500-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet and Phone 500 - Vodafone',
      skuList: ['2P_RIP_500_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_500_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-1000/',
    name: 'red-internet-phone-1000-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internet & Phone Cable 1000',
      skuList: ['2P_RIP_1000_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_1000_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/2play/internet-phone-1000/details',
    name: 'red-internet-phone-1000-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet and Phone 1000 - Vodafone',
      skuList: ['2P_RIP_1000_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_1000_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/',
    name: 'red-internet-phone-tv-comparison-table',
    component: ComparisonTable,
    beforeEnter: (to, from, next) => {
      if (window.innerWidth > 479) {
        trackGenericPage(to.path, to.meta.skuList, 'event92')
      }
      next()
    },
    meta: {
      title: 'Vodafone Red Internt, Phone and TV',
      skuList: [['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      'set': 'threePlay'
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-50/',
    name: 'red-internet-phone-tv-50-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internt, Phone and TV 50',
      skuList: ['2P_RIP_50_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_50_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-50/details',
    name: 'red-internet-phone-tv-50-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet, Phone and TV 50 - Vodafone',
      skuList: ['2P_RIP_50_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_50_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-100/',
    name: 'red-internet-phone-tv-100-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internt, Phone and TV 100',
      skuList: ['2P_RIP_100_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_100_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-100/details',
    name: 'red-internet-phone-tv-100-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet, Phone and TV 100 - Vodafone',
      skuList: ['2P_RIP_100_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_100_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-250/',
    name: 'red-internet-phone-tv-250-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internt, Phone and TV 250',
      skuList: ['2P_RIP_250_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_250_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-250/details',
    name: 'red-internet-phone-tv-250-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet, Phone and TV 250 - Vodafone',
      skuList: ['2P_RIP_250_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_250_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-500/',
    name: 'red-internet-phone-tv-500-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone Red Internt, Phone and TV 500',
      skuList: ['2P_RIP_500_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_500_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-500/details',
    name: 'red-internet-phone-tv-500-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet, Phone and TV 500 - Vodafone',
      skulist: ['2P_RIP_500_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_500_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-1000/',
    name: 'red-internet-phone-tv-1000-horizon-tv-productpage',
    component: ProductPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vodafone CableMax 1000 + Horizon TV',
      skulist: ['2P_RIP_1000_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'product detail'
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_1000_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/kombipakete/3play/internet-phone-tv-1000/details',
    name: 'red-internet-phone-tv-1000-product-detail-page',
    component: ProductDetailPageView,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Vertrags-Details - Red Internet, Phone and TV 1000 - Vodafone',
      skulist: ['2P_RIP_1000_1', 'HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['2P_RIP_1000_1', 'HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/angebote/aktionen-und-kampagnen/top-seller/',
    name: 'topseller-table',
    component: ComparisonTable,
    beforeEnter: (to, from, next) => {
      if (window.innerWidth > 479) {
        trackGenericPage(to.path, to.meta.skuList, 'event92')
      }
      next()
    },
    meta: {
      title: 'Unsere Topseller: Angebote und aktuelle Aktionen',
      skuList: [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1']],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      'set': 'topseller'
    }
  },
  {
    path: '/privatkunden/tv/tv-anschluss/horizon-tv',
    name: 'horizon-tv',
    component: horizonTv,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Horizon TV | Unitymedia & Vodafone',
      skuList: ['HRZ_TV_0420_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['HRZ_TV_0420_1']
    }
  },
  {
    path: '/privatkunden/tv/tv-anschluss/hd-option',
    name: 'hd-option',
    component: hdOption,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'HD-Option',
      skuList: ['HD-Option_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['HD-Option_1']
    }
  },
  {
    path: '/privatkunden/tv/tv-anschluss/kabelanschluss',
    name: 'Kabelanschluss',
    component: kabelanschluss,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Kabelanschluss',
      skuList: ['DIGI_Kabelanschluss_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['DIGI_Kabelanschluss_1']
    }
  },
  {
    path: '/privatkunden/internet/internet-optionen/power-upload/',
    name: 'power-upload',
    component: SimpleProductPage,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Power Upload',
      skuList: ['Power_Upload_1'],
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      skus: ['Power_Upload_1']
    }
  },
  {
    path: '/privatkunden/internet/internet-optionen/komfort-option/',
    name: 'telefon-komfort-productpage',
    component: komfortOption,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path, to.meta.skuList, 'prodView')
      next()
    },
    meta: {
      title: 'Telefon Komfort-Option',
      skuList: ['Telefon_Komfort_1'],
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      skus: ['Telefon_Komfort_1']
    }
  },
  {
    path: '/privatkunden/angebote/aktionen-und-kampagnen/studenten-und-azubi-tarife/',
    name: 'landing-page-studentenvorteil',
    component: StudentenVorteil,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path)
      next()
    },
    meta: {
      title: 'Internet-Tarife speziell für Studenten & Azubis',
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    }
  },
  {
    path: '/privatkunden/angebote/aktionen-und-kampagnen/wechseln/',
    name: 'landing-page-wechselvorteil',
    component: Wechselvorteil,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path)
      next()
    },
    meta: {
      title: 'Wechselvorteil – Jetzt wechseln und profitieren',
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      'title': 'Wechselvorteil'
    }
  },
  {
    path: '/privatkunden/angebote/aktionen/kunden-werben/praemien/',
    name: 'landing-page-kunden-werben-praemien',
    component: KundenWerbenPraemien,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path)
      next()
    },
    meta: {
      title: 'Unitymedia weiterempfehlen und Prämie sichern!',
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    },
    props: {
      default: true,
      'title': 'Prämienübersicht'
    }
  },
  {
    path: '/privatkunden/agb',
    name: 'landing-page-agb',
    component: AgbPage,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path)
      next()
    },
    meta: {
      title: 'Allgemeine Geschäftsbedingungen von Unitymedia',
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      'title': 'Allgemeine Geschäftsbedingungen'
    }
  },
  {
    path: '/privatkunden/impressum',
    name: 'landing-page-impressum',
    component: impressumPage,
    beforeEnter: (to, from, next) => {
      trackGenericPage(to.path)
      next()
    },
    meta: {
      title: 'Das Impressum des Internetauftritts von Unitymedia',
      oTagData: {
        sStatus: '',
        sPageType: 'discovery'
      }
    },
    props: {
      default: true,
      'title': 'Impressum'
    }
  },
  {
    path: '/privatkunden/checkout_step1',
    name: 'checkout_step1',
    component: CheckoutStep1,
    meta: {
      title: 'Persönliche Daten',
      oTagData: {
        sStatus: 'checkout',
        sPageType: 'checkout_1'
      }
    }
  },
  {
    path: '/privatkunden/checkout_step2',
    name: 'checkout_step2',
    component: CheckoutStep2,
    meta: {
      title: 'Bestellübersicht',
      oTagData: {
        sStatus: 'checkout',
        sPageType: 'checkout_2'
      }
    }
  },
  {
    path: '/privatkunden/checkout_confirmation',
    name: 'checkout_confirmation',
    component: CheckoutConfirmation,
    meta: {
      title: 'Bestellbestätigung',
      oTagData: {
        sStatus: 'purchase',
        sPageType: 'checkout_confirmation'
      }
    }
  },
  {
    path: '*',
    name: 'error404',
    component: Error404,
    beforeEnter: (to, from, next) => {
      trackErrorPage('404')
      next()
    },
    meta: {
      title: '404 – Seite nicht gefunden',
      oTagData: {
        sStatus: '',
        sPageType: ''
      }
    }
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    // Simulate relative page anchor '#download2Go'. Hashtags would require routing with history mode.
    if (to.path === '/privatkunden/tv/tv-anschluss/horizon-go/Download2Go') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: '#downloadToGo' })
        }, 500)
      })
    }
  }
})
router.beforeEach((to, from, next) => {
  // Set page/view title, which is also used in Tealium data layer.
  document.title = to.meta.title === undefined ? 'Internet, Telefon und Kabelfernsehen von Unitymedia' : to.meta.title
  // updateTealiumDataLayerFromRoute(to.meta.oTagData, to.meta.title, to)

  // window.scroll is standard in router, TODO: Update to router standard
  if (!to.meta.no_scroll_to_top) {
    // Default is scrolling to top of view after navigation,
    // however this behavior isn't desired on Catamaran/Kiss widget view.
    window.scroll(0, 0)
  }

  if (window.FBXDEBUG) {
    console.log(router)
  }
  // Close any (mobile, desktop) main navigation overlay before any route change
  closeNavigationOverlay()
  next()
})

router.afterEach((to, from) => {
  if (window.FBXDEBUG) {
    console.log('Navigated to route.path: ' + to.path)
  }

  if (!window.TEALIUM_DISABLED) {
    updateTealiumDataLayer(to.meta.oTagData, to.meta.title, to)

    if (window.utag) {
      window.utag.loader.PINIT()
      window.utag.view(window.utag.data)
    } else {
      // TODO: Implement counter to restrict number of intervals
      let tealiumInterval = setInterval(function () {
        if (window.utag) {
          clearInterval(tealiumInterval)
          window.utag.view(window.utag.data)
        }
      }, 500)
    }
  }
})

export default router
