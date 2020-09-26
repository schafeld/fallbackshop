const state = {
  info: {
    'version': '0.0.1',
    'date': '2018-12-17T07:20:12.000',
    'comment': 'Development version of new product catalog (broadband products for new customers)'
  },
  navigation: [{
    'navigationElement': {
      'title': 'Aktuelles',
      'class': 'aktuelles',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': 'Für Interessenten',
          'childGroups': [
            {
              'title': 'Zu Unitymedia wechseln und sparen',
              'link': '#/privatkunden/angebote/aktionen-und-kampagnen/wechseln/'
            },
            {
              'title': 'Topseller – mit Online-Vorteil',
              'link': '#/privatkunden/angebote/aktionen-und-kampagnen/top-seller/'
            },
            {
              'title': 'Azubi- und Studentenaktion',
              'link': '#/privatkunden/angebote/aktionen-und-kampagnen/studenten-und-azubi-tarife/'
            },
            {
              'title': 'Installationsservice',
              'link': '/privatkunden/angebote/aktionen-und-kampagnen/installationsservice/'
            }
          ]
        }
      },
      {
        'childElement': {
          'title': 'Für unsere Kunden',
          'childGroups': [{
            'link': '/privatkunden/angebote/aktionen/kundencenter/',
            'title': 'Kundencenter'
          },
          {
            'link': '/privatkunden/angebote/aktionen/kunden-werben/praemien',
            'title': 'Kunden werben – PRÄMIE kassieren!'
          }
          ]
        }
      }
      ]
    }
  },
  {
    'navigationElement': {
      'title': 'Internet-Pakete',
      'class': 'kombipakete',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': 'Red Internet and Phone',
          'link': '#/privatkunden/kombipakete/2play/',
          'linkTitle': 'Internet and Phone Pakete vergleichen',
          'childGroups': [{
            'link': '#/privatkunden/kombipakete/2play/internet-phone-50/',
            'title': 'Vodafone Red Internet and Phone 50'
          },
          {
            'link': '#/privatkunden/kombipakete/2play/internet-phone-100/',
            'title': 'Vodafone Red Internet and Phone 100'
          },
          {
            'link': '#/privatkunden/kombipakete/2play/internet-phone-250/',
            'title': 'Vodafone Red Internet and Phone 250'
          },
          {
            'link': '#/privatkunden/kombipakete/2play/internet-phone-500/',
            'title': 'Vodafone Red Internet and Phone 500'
          },
          {
            'link': '#/privatkunden/kombipakete/2play/internet-phone-1000/',
            'title': 'Vodafone Red Internet and Phone 1000'
          }
          ]
        }
      },
      {
        'childElement': {
          'title': 'Red Internet, Phone and TV',
          'link': '#/privatkunden/kombipakete/3play/',
          'linkTitle': 'Internet, Phone and TV Pakete vergleichen',
          'childGroups': [{
            'link': '#/privatkunden/kombipakete/3play/internet-phone-tv-50/',
            'title': 'VodafoneRed Internet & Phone 50 Cable + Horizon TV'
          },
          {
            'link': '#/privatkunden/kombipakete/3play/internet-phone-tv-100/',
            'title': 'VodafoneRed Internet & Phone 100 Cable + Horizon TV'
          },
          {
            'link': '#/privatkunden/kombipakete/3play/internet-phone-tv-250/',
            'title': 'VodafoneRed Internet & Phone 250 Cable + Horizon TV'
          },
          {
            'link': '#/privatkunden/kombipakete/3play/internet-phone-tv-500/',
            'title': 'VodafoneRed Internet & Phone 500 Cable + Horizon TV'
          },
          {
            'link': '#/privatkunden/kombipakete/3play/internet-phone-tv-1000/',
            'title': 'Vodafone Red Internet & Phone 1000 Cable + Horizon TV'
          }
          ]
        }

      },
      {
        'childElement': {
          'title': 'Internet-Pakete',
          'link': '#/privatkunden/internet/internet/',
          'linkTitle': 'Internet-Pakete vergleichen',
          'childGroups': [
            /* {
              'link': '#/privatkunden/telefon/festnetz-optionen/komfort-option/',
              'title': 'Telefon KOMFORT-Option '
            }, */
            {
              'link': '#/privatkunden/internet/internet-optionen/power-upload/',
              'title': 'Power Upload'
            },
            {
              'link': '#/privatkunden/tv/tv-anschluss/horizon-tv/',
              'title': 'Horizon TV'
            }
          ]
        }
      }
      ]
    }
  },
  {
    'navigationElement': {
      'title': 'TV',
      'class': 'tv',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': '',
          'link': '',
          'linkTitle': 'Horizon TV',
          'childGroups': [{
            'link': '#/privatkunden/tv/tv-anschluss/horizon-tv/',
            'title': 'Horizon TV'
          }
          ]
        }
      }
      ]
    }
  },
  {
    'navigationElement': {
      'title': 'Mobilfunk',
      'class': 'mobilfunk',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': 'GigaKombi Unitymedia Mobilfunk-Tarife mit Highspeed 4G|LTE Max (bis zu 500 Mbit/s)',
          'link': '#/privatkunden/mobil/mobilfunk/redxs',
          'linkTitle': 'Mobilfunk-Tarife vergleichen',
          'childGroups': [{
            'link': '#/privatkunden/mobil/mobilfunk/redxs',
            'title': 'Vodafone Red XS ( 9GB )'
          },
          {
            'link': '#/privatkunden/mobil/mobilfunk/reds',
            'title': 'Vodafone Red S ( 15GB )'
          },
          {
            'link': '#/privatkunden/mobil/mobilfunk/redm',
            'title': 'Vodafone Red M ( 25GB )'
          }
          ]
        }
      }
      ]
    }
  },
  {
    'navigationElement': {
      'title': 'Hilfe & Service',
      'class': 'hilfeundservice',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': 'Technische Hilfe-Themen',
          'link': '/privatkunden/hilfe_service/hilfe_themen/',
          'linkTitle': 'Alle Hilfe-Themen',
          'childGroups': [{
            'link': '/privatkunden/hilfe_service/hilfe_themen/stoerungs-und-wartungsarbeiten/',
            'title': 'Schnelle Hilfe bei Störungen'
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/installation/',
            'title': 'Installation Ihrer Geräte '
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/wifispot-nutzen/',
            'title': 'WifiSpot einrichten '
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/anleitungen/',
            'title': 'Anleitungen'
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/aktivierung/',
            'title': 'SIM- und SmartCard-Aktivierung'
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/programmuebersicht/',
            'title': 'Programmübersicht'
          },
          {
            'link': '/privatkunden/hilfe_service/hilfe_themen/wlan/',
            'title': 'WLAN optimal nutzen'
          }
          ]
        }
      },
      {
        'childElement': {
          'title': 'Informationen zum Vertrag',
          'childGroups': [{
            'link': '/privatkunden/hilfe_service/wissenswertes/formularcenter/',
            'title': 'Formularcenter'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/Rufnummer_mitnehmen/',
            'title': 'Rufnummernmitnahme'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/Rechnung/',
            'title': 'Ihre Rechnung schnell erklärt'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/umzug-formular/',
            'title': 'Umzug'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/vertragsuebernahme/',
            'title': 'Vertragsübernahme'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/kuendigung/',
            'title': 'Infos zur Kündigung'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/retoure/',
            'title': 'Rücksendung'
          },
          {
            'link': '/privatkunden/hilfe_service/wissenswertes/Unitymedia_Community/',
            'title': 'Unitymedia Community'
          }
          ]
        }
      }
      ]
    }
  },
  {
    'navigationElement': {
      'title': 'Netzanschluss',
      'class': 'netzanschluss',
      'gradient': 'linear-gradient(135deg, #fafafa, #fafafa)',
      'childGroups': [{
        'childElement': {
          'title': 'Aktuelle Projekte & Verfügbarkeit',
          'childGroups': [{
            'link': '/privatkunden/netzanschluss/netzanschluss/ausbaugebiete/',
            'title': 'Übersicht Ausbaugebiete'
          },
          {
            'link': '/privatkunden/netzanschluss/netzanschluss/verfuegbarkeit-pruefen/',
            'title': 'Verfügbarkeit prüfen'
          },
          {
            'link': '/privatkunden/netzanschluss/netzanschluss/hausanschluss/',
            'title': 'Hausanschluss'
          },
          {
            'link': '/privatkunden/netzanschluss/netzanschluss/speedtest/',
            'title': 'Speedtest'
          }
          ]
        }
      },
      {
        'childElement': {
          'title': 'Wohnungswirtschaft, Bauträger & Kommunen',
          'childGroups': [{
            'link': '/privatkunden/netzanschluss/wohnungswirtschaft/wohnungswirtschaft/',
            'title': 'Wohnungswirtschaft'
          },
          {
            'link': '/privatkunden/netzanschluss/wohnungswirtschaft/bautraeger/',
            'title': 'Bauträger'
          },
          {
            'link': '/privatkunden/netzanschluss/wohnungswirtschaft/kommunen/',
            'title': 'Kommunen'
          },
          {
            'link': '/privatkunden/netzanschluss/wohnungswirtschaft/planauskunft/',
            'title': 'Planauskunft'
          }
          ]
        }
      }
      ]
    }
  }
  ]
}

const getters =
{
  getNavigation: state => state.navigation
}
export default {
  state,
  getters
}
