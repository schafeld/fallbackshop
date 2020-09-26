// promotions
// This data may in future version come from service, scaffolding, or service worker cache.
const state = {
  info: {
    'version': '1.0.0',
    'date': '2020-19-19T10:49:00.000',
    'comment': 'Development version of new product catalog (promotions for broadband orders)'
  },
  promotions: [
    {
      title: 'Wechselvorteil',
      boxHeadline: '<b>Wechselvorteil </b>',
      promoCode: 'wechselvorteil',
      content: 'bis zu 12 Monate 0 € mtl.',
      skus: [['2P_RIP_50_1'], ['2P_RIP_100_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1'], ['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_100_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      valueForAll: undefined,
      values: undefined,
      legaltext: 'UMEFN_236',
      landingPage: '/privatkunden/angebote/aktionen-und-kampagnen/wechseln/'
    },
    {
      title: 'Aktivierung',
      boxHeadline: '<b>Keine Aktivierungsgebühr</b>',
      tagline: 'Keine Extrakosten: Sparen Sie jetzt die Akivierungsgebühren von 69,99 €',
      promoCode: 'otc-befreiung',
      content: '0 € statt 69,99 €',
      skus: [['2P_RIP_50_1'], ['2P_RIP_100_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1'], ['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_100_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      valueForAll: 0,
      values: undefined,
      valueToChange: 'upfront_price',
      legaltext: 'UMEFN_215'
    }, {
      title: 'Studenten-Vorteil',
      boxHeadline: '<strong>Studentenaktion:</strong>',
      promoCode: 'student-advantage',
      content: '<strong>{{VALUE}} €</strong> BestChoice-Gutschein ',
      skus: [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1']],
      valueForAll: undefined,
      values: [50, 100, 100, 100],
      landingPage: '#/privatkunden/angebote/aktionen-und-kampagnen/studenten-und-azubi-tarife/'
    }, {
      title: 'Studenten-Vorteil',
      boxHeadline: '<strong>Studentenaktion:</strong>',
      promoCode: 'bonus-student-advantage',
      content: '<strong>{{VALUE}} €</strong> BestChoice-Gutschein ',
      skus: [['2P_RIP_500_1']],
      valueForAll: undefined,
      values: [150],
      landingPage: '#/privatkunden/angebote/aktionen-und-kampagnen/studenten-und-azubi-tarife/'
    }, {
      title: 'Online-Vorteil',
      boxHeadline: '<b>Online-Vorteil</b>',
      promoCode: 'online-advantage',
      legaltext: 'UMEFN_235',
      content: 'Jetzt {{VALUE}} € sparen ',
      skus: [['2P_RIP_50_1'], ['2P_RIP_100_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1'], ['2P_RIP_1000_500_1'], ['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_100_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_500_1', 'HRZ_TV_0420_1']],
      valueForAll: undefined,
      values: [30, 120, 170, 170, 170, 170, 30, 120, 170, 170, 170, 170]
    }, {
      title: 'Online-Vorteil',
      boxHeadline: '<b>Doppelter Online-Vorteil</b>',
      promoCode: 'double-online-advantage',
      legaltext: 'UMEFN_235',
      content: 'Jetzt {{VALUE}} € sparen ',
      skus: [['2P_RIP_50_1'], ['2P_RIP_100_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1'], ['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_100_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      valueForAll: undefined,
      values: [30, 120, 170, 170, 170, 30, 120, 170, 170, 170]
    }, {
      title: 'Mehr Internet Wochen',
      tagline: 'Freu dich auf mehr Internet',
      promoCode: 'fdami',
      skus: [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1'], ['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      values: undefined,
      valueForAll: undefined,
      legaltext: 'UMEFN_234'
    }, {
      title: 'Freu Dich auf mehr Entertainment',
      tagline: 'Freu Dich auf mehr Entertainment',
      promoCode: 'threeplayPromo',
      skus: [['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      values: undefined,
      valueForAll: undefined,
      legaltext: 'UMEFN_220'
    }, {
      title: 'Freu Dich auf mehr Entertainment',
      tagline: 'Freu Dich auf mehr Entertainment - Aktion verlängert bis 30.04.2020',
      promoCode: 'broadbandPromotion',
      skus: ['HRZ_TV_0420_1'],
      values: undefined,
      valueForAll: undefined,
      legaltext: 'UMEFN_220'
    }, {
      title: 'Doppelte Prämie',
      promoCode: 'mgm-bonus',
      skus: ['2P_RIP_500_1'],
      values: [150],
      valueForAll: undefined,
      legaltext: undefined
    }
  ],
  mgmValueSet: [
    {
      skus: ['2P_RIP_1000_1'],
      mgmSku: '2P_RIP_1000',
      mgmValue: [
        '180'
      ]
    },
    {
      skus: ['2P_RIP_500_1'],
      mgmSku: '2P_RIP_500',
      mgmValue: [
        '150'
      ]
    },
    {
      skus: ['2P_RIP_250_1'],
      mgmSku: '2P_RIP_250',
      mgmValue: [
        '125'
      ]
    },
    {
      skus: ['2P_RIP_100_1'],
      mgmSku: '2P_RIP_100_1',
      mgmValue: [
        '90'
      ]
    },
    {
      skus: ['2P_RIP_50_1'],
      mgmSku: '2P_RIP_50',
      mgmValue: [
        '75'
      ]
    },
    {
      skus: ['2P_RIP_1000_1', 'HRZ_TV_0420_1'],
      mgmSku: '2P_RIP_1000_HZN',
      mgmValue: [
        '180'
      ]
    },
    {
      skus: ['2P_RIP_500_1', 'HRZ_TV_0420_1'],
      mgmSku: '2P_RIP_500_HZN',
      mgmValue: [
        '150'
      ]
    },
    {
      skus: ['2P_RIP_250_1', 'HRZ_TV_0420_1'],
      mgmSku: '2P_RIP_250_HZN',
      mgmValue: [
        '125'
      ]
    },
    {
      skus: ['2P_RIP_100_1', 'HRZ_TV_0420_1'],
      mgmSku: '2P_RIP_100_HZN',
      mgmValue: [
        '90'
      ]
    },
    {
      skus: ['2P_RIP_50_1', 'HRZ_TV_0420_1'],
      mgmSku: '2P_RIP_50_HZN',
      mgmValue: [
        '75'
      ]
    },
    {
      skus: 'ALLSTARS1',
      mgmSku: 'TV_Allstars',
      mgmValue: [
        '30',
        '40',
        '50'
      ]
    }
  ]
}
const getters = {
  getMgmValueBySku: (state) => (payload) => {
    return state.mgmValueSet.find(mgmObject => JSON.stringify(mgmObject.skus) === JSON.stringify(payload))
  },
  getMgmValueSetByMgmsku: (state) => (payload) => {
    return state.mgmValueSet.find(mgmObject => mgmObject.mgmSku === payload)
  },
  getPromotionByPromocode: state => payload => {
    let helperObejct = state.promotions.find(promotion => {
      return promotion.promoCode === payload
    })
    if (!helperObejct) { console.log('promotion ' + payload + ' not found ') }
    return helperObejct
  },
  getSkusFromPromotion: (state, getters) => payload => {
    let skus = getters.getPromotionByPromocode(payload)
    if (!skus) {
      console.log('No skus found')
    }
    return skus.skus
  },
  getValuesFromPromotion: (state, getters) => payload => {
    let values = getters.getPromotionByPromocode(payload)
    if (!values) {
      console.log('No Values found')
    }
    return values.values
  },
  getValueForAllFromPromotion: (state, getters) => payload => {
    let valueForAll = getters.getPromotionByPromocode(payload)
    if (!valueForAll) {
      console.log('No valueForAll found')
    }
    return valueForAll.valueForAll
  }
}
const mutations = {
  updateMgmValueByPromotion (state, payload) {
    let skuIndex = 0
    payload.skus.forEach(sku => {
      state.mgmValueSet.find(mgm => {
        if (mgm.sku === sku) {
          mgm.promotion = true
          mgm.bonus = payload.promoValue[skuIndex]
        }
      })
    })
    skuIndex++
  }
}

export default {
  state,
  getters,
  mutations
}
