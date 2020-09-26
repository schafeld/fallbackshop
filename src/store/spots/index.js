// productcatalog.js
// This data may in future version come from service, scaffolding, or service worker cache.{
const state = {
  info: {
    'version': '0.0.1',
    'date': '2018-12-21T13:53:00.000',
    'comment': 'Development version of advertising spots'
  },
  bspots: [
    {
      'type': '2play',
      'headline': 'INTERNET + TELEFON<br>HEISST BEI UNS 2play',
      'content': 'Jetzt 2play FLY 400</br>für nur <strong>19,99 €</strong> mtl.<st>{{UMEFN_234} <br/></st>',
      'cta': {
        linkTo: '/privatkunden/kombipakete/2play/2play-fly-400/',
        tifa: '266',
        label: 'Zum Top-Angebot',
        type: 'dcomm_button'
      },
      /* img: '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/july/fdami/visual_b-spot_2play_fly400_otc_0107_1999@1,5x1.png',  without OTC waiver */
      img: '//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/nov/visual_b-spot_2play_fly400_0411_1999@1,5x.png', /* ATAT-118, OTC waiver */
      background: 'linear-gradient(0deg, #0A3A94 0%, #0B90DF 50%, #33B8BA 100%);'
    },
    {
      'type': '3play',
      'headline': 'INTERNET + TELEFON + TV<br>HEISST BEI UNS 3play',
      'content': '3play FLY 400 für</br>nur <strong>24,99 €</strong> statt</br>29,99 € mtl. <sup><span style="z-index: 9999;"><st>{{UMEFN_220}</st></sup>',
      'cta': {
        linkTo: '/privatkunden/kombipakete/3play/3play-fly-400/',
        tifa: '332',
        label: 'Zum Top-Angebot',
        type: 'dcomm_button'
      },
      img: 'https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/july/fdami/visual_b-spot_3play_fly400_otc_0107_2499@1,5x.png',
      background: 'linear-gradient(0deg, #168FC6 0%, #4F55C4 50%, #A92055 100%);'
    },
    {
      'type': 'mgm',
      'headline': 'Guter Vorsatz: doppelte Prämie kassieren!',
      'content': 'Freunde werben und bis zum 02.02. die doppelte Prämie sichern ',
      'cta': {
        linkTo: '/privatkunden/angebote/aktionen/kunden-werben/praemien',
        tifa: '268',
        label: 'Jetzt empfehlen',
        type: 'dcomm_button'
      },
      img: '',
      background: 'url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb20/01/mgm/UM_Desktop_MGM_MIW_B-Spot_Visual_0601.png) no-repeat 100% 100%, linear-gradient(135deg, #050055 0%, #2696C3 50%, #B6E3F8 100%);'
    },
    {
      'type': 'b2b',
      'headline': 'Neue Angebote für Geschäftskunden',
      'content': '<strong>Nur noch bis 31.08.:</strong><br>Jetzt limitiertes Aktionsangebot für Geschäftskunden sichern!',
      'cta': {
        href: 'https://www.unitymediabusiness.de/home/selbstaendige/aktionen-angebote/office-internet-phone-300-light.html?CMP=b2c_unitymedia_internal_b2c-b-spot-desktop',
        tifa: '332',
        label: 'Mehr erfahren',
        type: 'dcomm_button'
      },
      img: '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/july/fdami/highspeed-working-soho-bspot-372x420-1.png',
      background: 'linear-gradient(0deg, #82368C 0%, #684CA8 50%, #2C4295 100%);'
    },
    {
      'type': 'catamaran',
      'headline': 'Unitymedia ist jetzt Teil von Vodafone',
      'content': 'Kombiniere Unitymedia-mit Vodafone-Produkten und spare',
      'cta': {
        href: '#/privatkunden/mobil/mobilfunk/reds',
        tifa: '359',
        label: 'Zeig mir die Angebote',
        type: 'dcomm_button'
      },
      img: '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/home/aspot/a-spot_um_desktop_vodafone.png)',
      background: 'url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/home/aspot/a-spot_um_desktop_vodafone.png) 55% bottom / auto 350px no-repeat, linear-gradient(45deg, #850002 10%, #EA0303 58%, #5A0000 100%);'
    }
  ],
  cspots: [
    {
      'type': 'installation',
      'headline': 'Schnell angeschlossen: <br>Einfache & unkomplizierte Installation',
      'cta': {
        linkTo: '/privatkunden/hilfe_service/hilfe_themen/installation/',
        tifa: '222',
        label: 'Mehr Details',
        type: 'hyperlink'
      },
      img: 'https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/home/ICN_01.png'
    },
    {
      'type': 'kundencenter',
      'headline': 'Online Kundencenter:<br>Ihre Produkte und Rechnungen verwalten',
      'legaltext': 'UMEFN_234',
      'cta': {
        linkTo: '/kundencenter',
        tifa: 'pre10',
        label: 'Jetzt einloggen',
        type: 'hyperlink'
      },
      img: 'https://www.unitymedia.de/content/dam/unitymedia-de/hilfe---service/image/ICO_Online-Kundencenter.png'
    },
    {
      'type': 'vorteile',
      'headline': 'Schneller als mit (V)DSL surfen:<br>Die Vorteile der Kabel-Technologie',
      'cta': {
        linkTo: '/privatkunden/beratung/persoenliche-beratung/kabel-vs-dsl/',
        tifa: 'pre11',
        label: 'Mehr Details',
        type: 'hyperlink'
      },
      img: 'https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/home/ICN_03.png'
    }
  ]
}
const getters = {
  getSingleBSpot (state) {
    return keyword =>
      state.bspots.filter(bspot => {
        return bspot.type === keyword
      })
  },
  getSingleCSpot (state) {
    return keyword =>
      state.cspots.filter(cspot => {
        return cspot.type === keyword
      })
  }
}

export default {
  state,
  getters
}
