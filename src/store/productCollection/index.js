// productcatalog.js
// This data may in future version come from service, scaffolding, or service worker cache.
const state = {
  info: {
    'version': '0.0.2',
    'date': '2019-03-21T07:20:12.000',
    'comment': 'New product catalog (broadband products for new customers)'
  },
  productSets: [
    {
      'title': 'twoPlay',
      'headline': 'Red Internet & Phone Pakete vergleichen',
      'subline': 'Internet + Telefon',
      'mfdd': 'true',
      'skus': [['2P_RIP_50_1'], ['2P_RIP_100_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_1000_1']],
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'internet': 'true',
      'telephone': 'true',
      'maxPromoValue': 170
    },
    {
      'title': 'threePlay',
      'headline': 'Red Internet & Phone Cable + Horizon TV Pakete vergleichen',
      'subline': 'Internet + Telefon + TV',
      'mfdd': 'true',
      'skus': [['2P_RIP_50_1', 'HRZ_TV_0420_1'], ['2P_RIP_100_1', 'HRZ_TV_0420_1'], ['2P_RIP_250_1', 'HRZ_TV_0420_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1'], ['2P_RIP_1000_1', 'HRZ_TV_0420_1']],
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'internet': 'true',
      'telephone': 'true',
      'tv': 'true',
      'maxPromoValue': 170
    },
    {
      'title': 'topseller',
      'headline': 'Unsere Topseller',
      'subline': '',
      'mfdd': 'true',
      'skus': [['2P_RIP_50_1'], ['2P_RIP_250_1'], ['2P_RIP_500_1'], ['2P_RIP_500_1', 'HRZ_TV_0420_1']],
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'internet': 'true',
      'telephone': 'true',
      'tv': 'true',
      'maxPromoValue': 170
    }
  ],
  products: [
    {
      'set': 'twoPlay',
      'family': '2play',
      'topseller': true,
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 50 Cable',
      'skus': ['2P_RIP_50_1'],
      'shortSku': '2p50',
      'mgmSku': '2P_RIP_50',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 25,
      'productrateplans': 29.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 50,
      'upload': 5,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-slow-hi.svg',
      'onlinePromotion': '30 € Rechnungsgutschrift',
      'onlinePromotionValue': 30,
      'legaltext': 'UMEFN_226',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_50_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_50_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_50_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-50',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-50-Cable-U.pdf',
      'bullets': [
        'Internet Flatrate mit bis zu 50 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [
        {
          'sku': 'Telefon_Komfort_1'
        }
      ],
      hardware: ['Connect-Box'],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'twoPlay',
      'family': '2play',
      'topseller': true,
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 100 Cable',
      'skus': ['2P_RIP_100_1'],
      'shortSku': '2p10',
      'mgmSku': '2P_RIP_100_1',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 7,
      'productrateplans': 34.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 100,
      'upload': 10,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-slow-hi.svg',
      'onlinePromotion': '120 € Rechnungsgutschrift',
      'onlinePromotionValue': 120,
      'legaltext': 'UMEFN_239',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_100_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_100_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_100_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-100',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-100-Cable-U.pdf',
      'bullets': [
        'Internet Flatrate mit bis zu 100 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [
        {
          'sku': 'Telefon_Komfort_1'
        }
      ],
      hardware: ['Vodafone-Station'],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'twoPlay',
      'topseller': true,
      'family': '2play',
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 250 Cable',
      'skus': ['2P_RIP_250_1'],
      'shortSku': '2p250',
      'mgmSku': '2P_RIP_250',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 7,
      'productrateplans': 39.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 250,
      'upload': 25,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/ICO_internetspeed_06_038-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_227',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_250_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_250_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_250_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-250',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-250-Cable-U.pdf',
      'bullets': [
        'Internet Flatrate mit bis zu 250 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [{
        'sku': 'Power_Upload_1'
      },
      {
        'sku': 'Telefon_Komfort_1'
      }
      ],
      hardware: ['Vodafone-Station'],
      gigakombiAvailable: true,
      available: true
    }, {
      'set': 'twoPlay',
      'topseller': true,
      'family': '2play',
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 500 Cable',
      'skus': ['2P_RIP_500_1'],
      'shortSku': '2p500',
      'mgmSku': '2P_RIP_500',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 7,
      'productrateplans': 44.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 500,
      'upload': 25,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-med-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_228',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_500_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_500_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/n/red_internet_phone_500_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-500',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-500-Cable-U.pdf',
      'bullets': [
        'Internet Flatrate mit bis zu 500 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [{
        'sku': 'Power_Upload_1'
      },
      {
        'sku': 'Telefon_Komfort_1'
      }
      ],
      hardware: ['Vodafone-Station'],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'twoPlay',
      'family': '2play',
      'gigabit': true,
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 1000 Cable',
      'skus': ['2P_RIP_1000_1'],
      'mgmSku': '2P_RIP_1000',
      'shortSku': '2p1000',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 7,
      'productrateplans': 49.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 1000,
      'upload': 50,
      'deliveryfee': 0,
      'speedometerURL': '//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_229',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_desktop@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_tablet@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_mobile@2x.png'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-1000',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf',
      'bullets': [
        'Gigabit Internet-Flatrate <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeuten Gigabit und Mbit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit, Gigabit) pro Sekunde angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland 8 Megabit/s im Download) „schafft“ also genau 1 Megabyte pro Sekunde. Gigabit steht für 1000 Megabit/s. Die Gigabit Speed Internetverbindung von Unitymedia lädt bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Bis zu 1000 Mbit/s Download und 50 Mbit/s Upload',
        'Highspeed WLAN-Kabelrouter inklusive',
        'Telefon-Flatrate ins dt. Festnetz'
      ],
      'promoCodes': [],
      'options': [],
      hardware: ['Vodafone-Station'],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'twoPlay',
      'family': '2play',
      'familyUrl': '/privatkunden/kombipakete/2play',
      'title': 'Red Internet & Phone 1000/500 Cable',
      'skus': ['2P_RIP_1000_500_1'],
      'shortSku': '2p1000500',
      'mgmSku': '2P_RIP_1000',
      'upfront_price': 69.99,
      'monthly_price': 19.99,
      'monthOfPriceChange': 7,
      'productrateplans': 49.99,
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 1000,
      'upload': 50,
      'deliveryfee': 0,
      'speedometerURL': '//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_229',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_desktop@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_tablet@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/red_internet_phone_1000_visual_mobile@2x.png'
      ],
      'url': '/privatkunden/kombipakete/2play/internet-phone-1000',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf',
      'bullets': [
        'Gigabit Internet-Flatrate <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeuten Gigabit und Mbit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit, Gigabit) pro Sekunde angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland 8 Megabit/s im Download) „schafft“ also genau 1 Megabyte pro Sekunde. Gigabit steht für 1000 Megabit/s. Die Gigabit Speed Internetverbindung von Unitymedia lädt bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Bis zu 1000 Mbit/s Download und 50 Mbit/s Upload oder 500 Mbit/s Download und 25 Mbit/s upload',
        'Highspeed WLAN-Kabelrouter inklusive',
        'Telefon-Flatrate ins dt. Festnetz'
      ],
      'promoCodes': [],
      'options': [],
      hardware: ['Vodafone-Station'],
      gigakombiAvailable: true,
      available: true
    },
    /* virtual 3play bundles */
    {
      'set': 'threePlay',
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'title': 'Red Internet & Phone 50 Cable + Horizon TV',
      'skus': ['2P_RIP_50_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p50',
      'mgmSku': '2P_RIP_50_HZN',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [13, 25],
      'productrateplans': [29.98, 39.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 50,
      'upload': 5,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-slow-hi.svg',
      'onlinePromotion': '30 € Rechnungsgutschrift',
      'onlinePromotionValue': 30,
      'legaltext': 'UMEFN_230',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_50_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_50_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_50_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-50',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-50-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Internet Flatrate mit bis zu 50 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [
        {
          'sku': 'Telefon_Komfort_1'
        }
      ],
      hardware: [
        'Connect-Box',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'threePlay',
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'title': 'Red Internet & Phone 100 Cable + Horizon TV',
      'skus': ['2P_RIP_100_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p100',
      'mgmSku': '2P_RIP_100_HZN',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [7, 13],
      'productrateplans': [34.98, 44.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 100,
      'upload': 10,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-slow-hi.svg',
      'onlinePromotion': '120 € Rechnungsgutschrift',
      'onlinePromotionValue': 120,
      'legaltext': 'UMEFN_241',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_tv_100_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_tv_100_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/RIP100/red_internet_phone_tv_100_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-100',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-100-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Internet Flatrate mit bis zu 100 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [
        {
          'sku': 'Telefon_Komfort_1'
        }
      ],
      hardware: [
        'Vodafone-Station',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'threePlay',
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'title': 'Red Internet & Phone 250 Cable + Horizon TV',
      'skus': ['2P_RIP_250_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p250',
      'mgmSku': '2P_RIP_250_HZN',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [7, 13],
      'productrateplans': [44.98, 49.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 250,
      'upload': 25,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/HIFI-Icons/ICO_internetspeed_06_038-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_231',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_250_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_250_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_250_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-250',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-250-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Internet Flatrate mit bis zu 250 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [{
        'sku': 'Power_Upload_1'
      },
      {
        'sku': 'Telefon_Komfort_1'
      }
      ],
      hardware: [
        'Vodafone-Station',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    }, {
      'set': 'threePlay',
      'topseller': true,
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'title': 'Red Internet & Phone 500 Cable + Horizon TV',
      'skus': ['2P_RIP_500_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p500',
      'mgmSku': '2P_RIP_500_HZN',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [7, 13],
      'productrateplans': [49.98, 54.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 500,
      'upload': 25,
      'deliveryfee': 0,
      'speedometerURL': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-med-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_232',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_500_visual_desktop@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_500_visual_tablet@2x.jpg',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_500_visual_mobile@2x.jpg'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-500',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-500-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Internet Flatrate mit bis zu 500 Mbit/s <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeutet MBit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Telefon-Flatrate ins dt. Festnetz',
        'Highspeed WLAN-Kabelrouter ',
        'WifiSpot - Dein kostenloses WLAN für unterwegs'
      ],
      'promoCodes': [],
      'options': [{
        'sku': 'Power_Upload_1'
      },
      {
        'sku': 'Telefon_Komfort_1'
      }
      ],
      hardware: [
        'Vodafone-Station',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'threePlay',
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'gigabit': true,
      'title': 'Red Internet & Phone 1000 Cable + Horizon TV',
      'skus': ['2P_RIP_1000_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p1000',
      'mgmSku': '2P_RIP_1000_HZN',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [7, 13],
      'productrateplans': [54.98, 59.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 1000,
      'upload': 50,
      'deliveryfee': 0,
      'speedometerURL': '//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_233',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_desktop@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_tablet@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_mobile@2x.png'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-1000',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Gigabit Internet-Flatrate <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeuten Gigabit und Mbit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit, Gigabit) pro Sekunde angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland 8 Megabit/s im Download) „schafft“ also genau 1 Megabyte pro Sekunde. Gigabit steht für 1000 Megabit/s. Die Gigabit Speed Internetverbindung von Unitymedia lädt bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Bis zu 1000 Mbit/s Download und 50 Mbit/s Upload',
        'Highspeed WLAN-Kabelrouter inklusive',
        'Telefon-Flatrate ins dt. Festnetz'
      ],
      'promoCodes': [],
      'options': [],
      hardware: [
        'Vodafone-Station',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'threePlay',
      'family': '3play',
      'familyUrl': '/privatkunden/kombipakete/3play',
      'title': 'Red Internet & Phone 1000/500 Cable + Horizon TV',
      'skus': ['2P_RIP_1000_500_1', 'HRZ_TV_0420_1'],
      'shortSku': '3p1000',
      'upfront_price': 69.99,
      'monthly_price': 24.98,
      'monthOfPriceChange': [7, 13],
      'productrateplans': [54.98, 59.98],
      'contract_duration': 24,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'download': 1000,
      'upload': 50,
      'deliveryfee': 0,
      'speedometerURL': '//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/icons/speed-hi.svg',
      'onlinePromotion': '170 € Rechnungsgutschrift',
      'onlinePromotionValue': 170,
      'legaltext': 'UMEFN_233',
      'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_product_intro_2play_otc_xl.png',
      'promotionImg': [
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_desktop@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_tablet@2x.png',
        '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/red_internet_phone_tv_1000_visual_mobile@2x.png'
      ],
      'url': '/privatkunden/kombipakete/3play/internet-phone-tv-1000',
      'pib': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/global/pdf/pib/PIB_Red-Internet-&-Phone-1000-Cable-U.pdf',
      'bullets': [
        'Große Programmvielfalt in HD und SD',
        'Zeitunabhängiges Fernsehen dank Horizon HD Recorder',
        'Gigabit Internet-Flatrate <sup><span class="tooltip js_tooltip left-tooltip bottom-tooltip><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><strong>Was bedeuten Gigabit und Mbit/s?</strong><br></br>Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit, Gigabit) pro Sekunde angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland 8 Megabit/s im Download) „schafft“ also genau 1 Megabyte pro Sekunde. Gigabit steht für 1000 Megabit/s. Die Gigabit Speed Internetverbindung von Unitymedia lädt bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s).</span></span></sup>',
        'Bis zu 1000 Mbit/s Download und 50 Mbit/s Upload oder bis zu 500 Mbit/s Download und 25 Mbit/s Upload',
        'Highspeed WLAN-Kabelrouter inklusive',
        'Telefon-Flatrate ins dt. Festnetz'
      ],
      'promoCodes': [],
      'options': [],
      hardware: [
        'Vodafone-Station',
        'Horizon-Recorder'
      ],
      gigakombiAvailable: true,
      available: true
    },
    {
      'set': 'tv',
      'title': 'Horizon TV',
      'subtitle': 'Der optimale Einstieg in Ihre Entertainmentwelt',
      'family': 'tv',
      'skus': ['HRZ_TV_0420_1'],
      'shortSku': 'HTV',
      'upfront_price': 0,
      'monthly_price': 4.99,
      'monthOfPriceChange': 13,
      'productrateplans': 9.99,
      'contract_duration': 24,
      'onlinePromotion': false,
      'legaltext': 'UMEFN_099',
      'deliveryfee': 0,
      'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
      'bullets': [
        'Live-TV und zeitversetztes Fernsehen mit dem Horizon HD-Recorder',
        'Entertainment-Allrounder für Aufnahmen, Apps, TV-Mediatheken uvm.',
        'Viele private Sender in HD genießen <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><a style="color: green;" data-action="Hyperlink" href="#/privatkunden/tv/tv-anschluss/hd-option/">HD-Option</a> bereits in Horizon TV enthalten</span></span>',
        'Zu Hause mobil fernsehen auf Tablet, Smartphone oder TV mit Horizon Go Free <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Unitymedia Internet-Anschluss notwendig</span></span>'
      ],
      hardware: [
        'Horizon-Recorder'
      ],
      available: true,
      promoCode: [
        'broadbandPromotion'
      ]
    },

    {
      'set': 'tv',
      'title': 'Horizon TV',
      'subtitle': 'Der optimale Einstieg in Ihre Entertainmentwelt',
      'family': 'tv',
      'skus': ['SA-HRZ_TV_0420_1'],
      'shortSku': 'HTV',
      'upfront_price': 39.99,
      'monthly_price': 9.99,
      'monthOfPriceChange': 13,
      'productrateplans': 14.99,
      'contract_duration': 24,
      'onlinePromotion': false,
      'legaltext': 'UMEFN_099',
      'deliveryfee': 9.99,
      'gradient': 'linear-gradient(45deg, #A50501, #E80000)',
      'bullets': [
        'Live-TV und zeitversetztes Fernsehen mit dem Horizon HD-Recorder',
        'Entertainment-Allrounder für Aufnahmen, Apps, TV-Mediatheken uvm.',
        'Viele private Sender in HD genießen <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><a style="color: green;" data-action="Hyperlink" href="#/privatkunden/tv/tv-anschluss/hd-option/">HD-Option</a> bereits in Horizon TV enthalten</span></span>',
        'Zu Hause mobil fernsehen auf Tablet, Smartphone oder TV mit Horizon Go Free <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Unitymedia Internet-Anschluss notwendig</span></span>'
      ],
      hardware: [
        'Horizon-Recorder'
      ],
      available: true,
      promoCode: [
        'broadbandPromotion'
      ]
    },
    {
      'set': 'tv',
      'title': 'HD-Option',
      'subtitle': 'Der optimale Einstieg in Ihre Entertainmentwelt',
      'family': 'tv',
      'skus': ['HD-Option_1'],
      'shortSku': 'HDO',
      'upfront_price': 0,
      'monthly_price': 4.99,
      'contract_duration': 12,
      'legaltext': 'UMEFN_011',
      'deliveryfee': 0,
      'gradient': 'linear-gradient(45deg, #A50501, #E80000)',
      'bullets': [
        'Beliebteste private Sender superscharf in HD genießen <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Öffentlich-rechtliche Sender sind als unverschlüsselte HD-Sender bereits im Kabelanschluss enthalten.</span></span>',
        'Brillante Farben und 5-mal höhere Auflösung im Vergleich zur SD-Bildqualität'
      ],
      hardware: [],
      available: true,
      promoCode: []
    },
    {
      'set': 'tv',
      'title': 'Kabelanschluss',
      'family': 'tv',
      'skus': ['DIGI_Kabelanschluss_1'],
      'shortSku': 'DKA',
      'upfront_price': 39.99,
      'monthly_price': 20.99,
      'contract_duration': 12,
      'legaltext': 'UMEFN_009',
      'deliveryfee': 0,
      'gradient': 'linear-gradient(45deg, #A50501, #E80000)',
      'bullets': [
        'Zahlreiche HD-Sender und SD-Sender inklusive <span class="tooltip js_tooltip left-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Darunter viele öffentlich-rechtliche HD-Sender sowie eine Auswahl privater HD-Sender</span></span>',
        'Umfassendes Angebot an Radiosendern in digitaler Qualität',
        'Stabiles Bild bei bei jedem Wetter durch innovative <a style="color: rgb(255,255,255);" href="https://www.unitymedia.de/privatkunden/beratung/persoenliche-beratung/kabel-vs-dsl">Coax-Glasfaser-Technologie</a>',
        '24 h technische Unterstützung'
      ],
      hardware: [],
      available: true,
      promoCode: []
    }
  ],
  options: [{
    'title': 'Power Upload',
    'skus': ['Power_Upload_1'],
    'shortSku': 'PUP',
    'family': 'Internet',
    'monthly_price': 2.99,
    'legaltext': 'UMEFN_206',
    'headline': 'Power Upload',
    'subline': 'Verdoppeln Sie Ihre Upload-Geschwindigkeit auf {{VALUE}} Mbit/s!',
    'effect': 'double',
    'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
    'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Internet/visual-computer-desk-8.png',
    'bullets': [
      'Verkürzt die Ladezeiten bei Upload von großen Dateimengen',
      'Ideal beim Upload von Fotos oder Videos',
      'Kombinierbar mit allen unseren Breitband Tarifen',
      'Keine Aktivierungsgebühr, sofort nutzbar'
    ],
    available: true
  },
  {
    'title': 'Komfort Option',
    'subtitle': 'Mit FRITZ!Box 6591 Cable – dem WLAN-Router für höchsten Komfort.',
    'skus': ['Telefon_Komfort_1'],
    'shortSku': 'TKO',
    'family': 'Telefon',
    'upfront_price': 29.99,
    'monthly_price': 4.99,
    'img': '//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Internet/FB-6591-cable-large.png',
    'gradient': 'linear-gradient(90deg, #fafafa, #fafafa)',
    'legaltext': 'UMEFN_065',
    'headline': 'FRITZ!Box 6591 Cable',
    'subline': 'Neueste WLAN-Technologie, bis zu 6 Rufnummern und höchster Komfort',
    'bullets': [
      'Schnelles kabelloses Internet',
      'Gleichzeitig telefonieren in bester Tonqualität',
      'Auf Musik, Bilder, Filme im gesamten Heimnetz zugreifen',
      'Drucker oder Festplatte ins Heimnetz einbinden',
      'Integrierte Smart Home Zentrale'
    ],
    'childSkus': [
      'Telefon_Line4_1',
      'Telefon_Line5_1',
      'Telefon_Line6_1'
    ],
    available: true
  }
  ]
}
const getters = {
  getProduct: (state) => (payload) => {
    let tempProduct = {}
    if (Array.isArray(payload)) {
      tempProduct = state.products.find(product => JSON.stringify(product.skus) === JSON.stringify(payload))
    } else {
      tempProduct = state.products.find(product => product.skus[0] === payload)
    }
    if (tempProduct === undefined) {
      if (Array.isArray(payload)) {
        tempProduct = state.options.find(option => JSON.stringify(option.skus) === JSON.stringify(payload))
      } else {
        tempProduct = state.options.find(option => option.skus[0] === payload)
      }
    }
    return tempProduct
  },
  getProductBySku: (state) => (payload) => {
    return state.products.find(product => JSON.stringify(product.skus) === JSON.stringify(payload))
  },
  getOptionBySku: (state) => (payload) => {
    return state.options.find(option => option.sku === payload)
  },
  getProductsBySet: (state) => (payload) => {
    return state.products.find(product => product.set === payload)
  },
  getSetinfoBySettitle: (state) => (payload) => {
    return state.productSets.find(sets => sets.title === payload)
  },
  getTopsellers: (state) => (payload) => {
    return state.products.filter(product => product.topseller === true)
  },
  getAvailability: (state, getters) => (payload) => {
    let helperProduct = getters.getProduct(payload)
    if (helperProduct) {
      return helperProduct.available
    } else return false
  }
}

const mutations = {
  addPromoCode (state, payload) {
    // add a promocode from payload.promoCode to the skus in products provided by payload.skus
    payload.skus.forEach(sku => {
      state.products.find(product => {
        if (JSON.stringify(product.skus) === JSON.stringify(sku)) {
          product.promoCodes.push({ 'promoCode': payload.promoCode, 'promoValue': payload.promoValue })
        }
      })
    })
  },
  addPromoValue (state, payload) {
    // add a promovalue from payload.promoCode to the skus in products provided by payload.skus
    payload.skus.forEach(sku => {
      state.products.find(product => {
        if (JSON.stringify(product.skus) === JSON.stringify(sku)) {
          product.promoCodes.push({ 'promoCode': payload.promoCode, 'promoValue': payload.promoValue })
        }
      })
    })
  },
  addPromotion (state, payload) {
    // add a promotion to promocodes and optionally change a base value according to the new promotional value
    let skuIndex = 0
    payload.skus.forEach(sku => {
      state.products.find(product => {
        if (JSON.stringify(product.skus) === JSON.stringify(sku)) {
          // up until here we just found the product we want to manipulate
          // now we have to implement how to modify the promotions based on complexity from complex to simple
          if (payload.promoCode && payload.valueToChange) {
            // step 1, most complex: add promocode with no promovalue but an overwrite of an existing value
            if (payload.valueForAll) {
              // if there is a value for all, use this one to overwrite the valueToChange in a product
              product[payload.valueToChange] = payload.valueForAll
            } else if (payload.promoValue[skuIndex]) {
              // if there is no value for all, but a single value at the index of the same index as the current sku, update it
              product[payload.valueToChange] = payload.promoValue[skuIndex]
            }
          }
          if (payload.promoCode && payload.promoValue) {
            // step 2, less complex: add a promocode with a promovalue
            product.promoCodes.push({ promoCode: payload.promoCode, promoValue: payload.promoValue[skuIndex] })
          } else if (payload.promoCode && payload.valueForAll) {
            // step 2, less complex: add a promocode with a promovalue
            product.promoCodes.push({ promoCode: payload.promoCode, promoValue: payload.valueForAll })
          } else if (payload.promoCode) {
            // step 3, least complex: add a promocode with no promovalue
            product.promoCodes.push({ promoCode: payload.promoCode })
          }
          return true
        }
      })
      skuIndex++
    })
  },
  replacePromotion (state, payload) {
    // add a promotion to promocodes and optionally change a base value according to the new promotional value
    payload.skus.forEach(sku => {
      state.products.find(product => {
        if (JSON.stringify(product.skus) === JSON.stringify(sku)) {
          let replacerObject = product.promoCodes.find(promos => promos.promoCode === payload.oldPromoCode)
          product.promoCodes.splice(product.promoCodes.indexOf(replacerObject), 1)
          return true
        }
      })
    })

    if (payload.valueToChange && payload.valueForAll) {
      if (payload.valueForAll) {
        this.commit('addPromotion', { skus: payload.skus, valueForAll: payload.valueForAll, promoCode: payload.newPromoCode, valueToChange: payload.valueToChange })
      } else if (payload.promoValue) {
        this.commit('addPromotion', { skus: payload.skus, promoValue: payload.promoValue, promoCode: payload.newPromoCode, valueToChange: payload.valueToChange })
      }
    } else if (payload.valueToChange && !payload.valueForAll) {
      if (payload.valueForAll) {
        this.commit('addPromotion', { skus: payload.skus, valueForAll: payload.valueForAll, promoCode: payload.newPromoCode, valueToChange: payload.valueToChange })
      } else if (payload.promoValue) {
        this.commit('addPromotion', { skus: payload.skus, promoValue: payload.promoValue, promoCode: payload.newPromoCode, valueToChange: payload.valueToChange })
      }
    } else if (!payload.valueToChange && payload.valueForAll) {
      if (payload.valueForAll) {
        this.commit('addPromotion', { skus: payload.skus, valueForAll: payload.valueForAll, promoCode: payload.newPromoCode })
      } else if (payload.promoValue) {
        this.commit('addPromotion', { skus: payload.skus, promoValue: payload.promoValue, promoCode: payload.newPromoCode })
      } else {
        this.commit('addPromotion', { skus: payload.skus, promoCode: payload.newPromoCode })
      }
    } else if (payload.promoValue) {
      this.commit('addPromotion', { skus: payload.skus, promoValue: payload.promoValue, promoCode: payload.newPromoCode })
    } else {
      this.commit('addPromotion', { skus: payload.skus, promoCode: payload.newPromoCode })
    }
  },
  setProductAvailability (state, payload) {
    let helperProduct = this.getters.getProduct(payload.sku)
    if (state.products.indexOf(helperProduct) > -1) {
      state.products[state.products.indexOf(helperProduct)].available = payload.available
      return true
    } else if (state.options.indexOf(helperProduct) > -1) {
      state.options[state.options.indexOf(helperProduct)].available = payload.available
      return true
    } else return false
  },
  replaceSkuInSets (state, payload) {
    state.productSets.forEach(set => {
      let helperString = JSON.stringify(set.skus)
      let helperIndex = helperString.search(payload[0])
      if (helperIndex > -1) {
        let json = helperString.substr(0, helperIndex) + payload[1] + helperString.substr(helperIndex + payload[0].length)
        set.skus = JSON.parse(json)
      }
    })
  }
}

export default {
  state,
  getters,
  mutations
}
