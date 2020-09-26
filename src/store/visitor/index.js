// visitor
let basket = window.localStorage.getItem('cart')
let basketCount = window.localStorage.getItem('cartCount')
// TODO: Get rid of basketCount (there's only *one* basket, so at least change name)
// Information about the current customer/visitor, e.g. session info.
// Why we store the basket in localstorage
// Because the shop utilizes a subdomain scb.unitymedia.de to set a click cookie for custom sales IDs
// which again are necessary for proper sales traffic honary, we need to store the
// basket in the cache before having two redirects take place, which would cause the app to lose all information

const state = {
  info: {
    'version': '0.1.0',
    'date': '2019-09-19T12:00:00.000',
    'comment': 'Information about the current customer/visitor, e.g. session info. Might also be derived from sessionStorag/localStorage, or service worker cache.'
  },
  session: {
    'salesId': {
      // salesId.rfsRegionCode reflects customer.installationAddress.region, exceptions:
      // default,'NRW', and 'HESSEN' are '43904' while 'BW' is '63000'
      // Values must originally be null, see updateSalesId helper
      'click': null,
      'postView': null,
      'rfsRegionCode': null,
      'effective': null
    },
    'gdpr': {
      'accepted': false,
      'seen': false
    }
  },
  checkoutFormCheck: {
    'numberPortingCheck': true,
    'alternateBillCheck': true,
    'contactInfoFormCheck': false,
    'profileFormCheck': false,
    'paymentFormCheck': false
  },
  customer: {
    // define placeholder values in here
    'title': '',
    'givenName': '',
    'familyName': '',
    'dateOfBirth': '',
    'isOfLegalAge': false,
    'email': '',
    'phonePrefix': '',
    'phoneNumber': '',
    'dslSwitch': '',
    'wifiSpotConsent': 'true',
    'desiredActivationDate': 'false',
    'activationDate': null,
    'phoneBookEntry': '',
    'installationAddress': {
      'zip': '',
      'city': '',
      'street': '',
      'houseNumber': '',
      'buildingId': '',
      'region': 'NRW', // default for zanox affiliate tracking
      'rfsCheckResult': {
        'readyForService': false,
        'bcsInfo': 'Basic Cable Service information not available',
        'rfsInternetAvailability': false,
        'rfsGigabitAvailability': false
      }
    },
    'alternativeAddress': {
      'alternativeWanted': '',
      'title': '',
      'givenName': '',
      'familyName': '',
      'zip': '',
      'city': '',
      'street': '',
      'houseNumber': '',
      'extraInformation': ''
    },
    'deliveryAddress': {
      'alternativeWanted': '',
      'title': '',
      'givenName': '',
      'familyName': '',
      'zip': '',
      'city': '',
      'street': '',
      'houseNumber': ''
    },
    'telephonePorting': {
      'teleportWanted': '',
      'numberportingProvider': '',
      'portingPhonePrefix': '',
      'portingPhoneNumber': '',
      'portingZip': '',
      'portingCity': '',
      'portingStreet': '',
      'portingHouseNumber': '',
      'portingGivenName': '',
      'portingFamilyName': ''
    },
    'paymentDetails': {
      'ibanSelected': false,
      'ibanNumber': '',
      'accountNumber': '',
      'bankNumber': '',
      'alternateBillingAddress': {
        'alternateBillWanted': false,
        'fullName': '',
        'zip': '',
        'city': '',
        'street': '',
        'streetNumber': '',
        'country': 'Deutschland'
      }
    },
    'legalAgreements': {
      'termsandconditions': '',
      'creditworthiness': '',
      'permissionManagement': '',
      'emailchannel': '',
      'telephonechannel': '',
      'smschannel': '',
      'postchannel': ''
    },
    'itemizedBill': {
      'itemizedBillWanted': '',
      'billtype': '',
      'coUsersInformed': ''
    },
    'existingCustomer': false,
    'checkoutFormComplete': false,
    'detailledAnalytics': true,
    'cableMaxRFSAlternative': ''
  },
  basket: basket ? JSON.parse(basket) : [], // TODO: Use getters/setters instead?
  basketCount: basketCount ? parseInt(basketCount) : 0,
  uniqueOrderId: '',
  orderTracked: true // default true prevents directly loaded checkout_confirmation to track
}

const getters = {
  profileFormCheck (state) {
    return state.checkoutFormCheck.profileFormCheck
  },
  paymentFormCheck (state) {
    return state.checkoutFormCheck.paymentFormCheck
  },
  givenName (state) {
    return state.customer.givenName
  },
  familyName (state) {
    return state.customer.familyName
  },
  dateOfBirth (state) {
    return state.customer.dateOfBirth
  },
  isOfLegalAge (state) {
    return state.customer.isOfLegalAge
  },
  email (state) {
    return state.customer.email
  },
  title (state) {
    return state.customer.title
  },
  phonePrefix (state) {
    return state.customer.phonePrefix
  },
  phoneNumber (state) {
    return state.customer.phoneNumber
  },
  dslSwitch (state) {
    return state.customer.dslSwitch
  },
  desiredActivationDate (state) {
    return state.customer.desiredActivationDate
  },
  activationDate (state) {
    return state.customer.activationDate
  },
  // getters RFS check
  rfsZip (state) {
    return state.customer.installationAddress.zip
  },
  rfsCity (state) {
    return state.customer.installationAddress.city
  },
  rfsStreet (state) {
    return state.customer.installationAddress.street
  },
  rfsHouseNumber (state) {
    return state.customer.installationAddress.houseNumber
  },
  rfsRegion (state) {
    return state.customer.installationAddress.region
  },
  rfsBuildingId (state) {
    return state.customer.installationAddress.buildingId
  },
  rfsInternetAvailability (state) {
    return state.customer.installationAddress.rfsCheckResult.rfsInternetAvailability
  },
  rfsGigabitAvailability (state) {
    return state.customer.installationAddress.rfsCheckResult.rfsGigabitAvailability
  },
  readyForService (state) {
    return state.customer.installationAddress.rfsCheckResult.readyForService
  },

  // numberporting, teleport
  teleport (state) {
    return state.customer.telephonePorting.teleportWanted
  },
  itemizedBill (state) {
    return state.customer.itemizedBill.itemizedBillWanted
  },
  existingCustomer (state) {
    return state.customer.existingCustomer
  },
  alternateBillName (state) {
    return state.customer.paymentDetails.alternateBillingAddress.fullName
  },
  alternateBillWanted (state) {
    return state.customer.paymentDetails.alternateBillingAddress.alternateBillWanted
  },
  ibanSelected (state) {
    return state.customer.paymentDetails.ibanSelected
  },
  ibanNumber (state) {
    return state.customer.paymentDetails.ibanNumber
  },
  bankNumber (state) {
    return state.customer.paymentDetails.bankNumber
  },
  accountNumber (state) {
    return state.customer.paymentDetails.accountNumber
  },
  checkoutFormComplete (state) {
    return state.customer.checkoutFormComplete
  },
  // get session variables
  salesIdClick (state) {
    return state.session.salesId.click
  },
  salesIdPostView (state) {
    return state.session.salesId.postView
  },
  salesIdRfsRegion (state) { // unused
    return state.session.salesId.rfsRegionCode
  },
  salesIdEffective (state) {
    return state.session.salesId.effective
  },
  customerData (state) {
    return state.customer
  },
  checkoutCompleted (state) {
    return state.checkoutFormCheck
  },
  priceTotalFloat (state) {
    let itemCount = state.basket.length
    let basketTotalSum = 0
    for (let i = 0; i < itemCount; i++) {
      if (state.basket[i].monthly_price) {
        basketTotalSum += state.basket[i].monthly_price * 100
      }
    }
    return basketTotalSum / 100
  },
  OneTimeChargesTotalFloat (state) {
    let itemCount = state.basket.length
    let basketOTCSum = 0
    for (let i = 0; i < itemCount; i++) {
      if (state.basket[i].upfront_price) {
        basketOTCSum += state.basket[i].upfront_price * 100
      }
    }
    return basketOTCSum / 100
  },
  onlineAdvantageValue (state) {
    let onlineAdvantage
    if (state.basket[0].onlinePromotionValue) {
      onlineAdvantage = state.basket[0].onlinePromotionValue
    }
    return onlineAdvantage
  },
  tealiumProductList (state) {
    // pattern: "sProductList": "2Play;2play%20JUMP%20150;1;19.99;"
    let sProductList = ''
    if (typeof state.basket !== 'undefined' && state.basket.length > 0) {
      sProductList = state.basket[0].family
      sProductList += ';' + encodeURI(state.basket[0].title)
      sProductList += ';' + state.basket.length
      // price is appended in updateTealiumDataLayerFromComponent helper
    }
    return sProductList
  },
  basketSkuList (state) {
    // Comma-separated list of SKUs in basket, e.g. for tracking
    let itemCount = state.basket.length
    let basketSkuList = ''
    for (let i = 0; i < itemCount; i++) {
      // TODO: Make separator sign (',') configurable? Or would that rather be a filter?
      if (i !== 0) { basketSkuList += ',' }
      basketSkuList += state.basket[i].skus[0]
    }
    return basketSkuList
  },
  basketSkuListPipe (state) {
    // Comma-separated list of SKUs in basket, e.g. for tracking
    let itemCount = state.basket.length
    let basketSkuList = ''
    for (let i = 0; i < itemCount; i++) {
      // TODO: Make separator sign (',') configurable? Or would that rather be a filter?
      if (i !== 0) { basketSkuList += '|' }
      basketSkuList += state.basket[i].skus[0]
    }
    return basketSkuList
  },
  basketSncfProductsList (state) {
    // Format details see DA-3599, examples
    // ";Hemd,;Hose"
    // ";Hemd;1;24.99,;Hose;1;59,;Ferrari;1;100000.42"
    let basketSncfProductsList = ''
    let itemCount = state.basket.length
    for (let i = 0; i < itemCount; i++) {
      // TODO: Make separator sign (',') configurable? Or would that rather be a filter?
      basketSncfProductsList += ';' // sncf peculiarity, first entry for each item is always empy
      basketSncfProductsList += state.basket[i].skus[0]
      basketSncfProductsList += ';' + '1' // product amount is always one
      if (state.basket[i].monthly_price) {
        basketSncfProductsList += ';' + state.basket[i].monthly_price
      } else {
        basketSncfProductsList += ';' + '0,00'.replace(/\s/g, '').replace(',', '.')
      }
      if (i < itemCount - 1) {
        basketSncfProductsList += ','
      }
    }
    return basketSncfProductsList
  },
  basketProductsList (state) {
    // Format example
    // oTagData.oSpecific.sProductList
    // "3Play;3play%20FLY%20400;1;24.99;,Internet;Power%20Upload;1;2.99;"
    let basketProductsList = ''
    let itemCount = state.basket.length
    for (let i = 0; i < itemCount; i++) {
      basketProductsList += state.basket[i].family
      basketProductsList += ';'
      basketProductsList += state.basket[i].skus[0]
      basketProductsList += ';' + '1' // product amount is always one
      if (state.basket[i].monthly_price) {
        basketProductsList += ';' + state.basket[i].monthly_price
      } else {
        basketProductsList += ';' + ('0,00').replace(/\s/g, '').replace(',', '.')
      }
      basketProductsList += ';'
      if (i < itemCount - 1) {
        basketProductsList += ',' // Leading comma separates products.
      }
    }
    return basketProductsList
  },
  uniqueOrderId (state) {
    return state.uniqueOrderId
  },
  getOrderTracked (state) {
    return state.orderTracked
  },
  detailledAnalytics (state) {
    return state.customer.detailledAnalytics
  },
  getBasket (state) {
    return state.basket
  },
  getShortSkuCollection (state) {
    // get a string of short-skus with index for the order summary email
    let helperString = ''
    for (let index = 0; index < state.basket.length; index++) {
      helperString += (index + 1) + '-'
      if (state.basket[index].shortSku) {
        helperString += state.basket[index].shortSku
      } else if (state.basket[index].skus[0]) {
        helperString += state.basket[index].skus[0]
      } else {
        helperString += '-unknown;'
      }
      if (index < state.basket.length - 1) {
        helperString += ','
      }
    }
    return helperString
  },
  getCableMaxAlternativeProcess (state) {
    return state.customer.cableMaxRFSAlternative
  }
}

const mutations = {
  addToBasket (state, item) {
    state.basket.push(item)
    state.basketCount++
    this.commit('saveBasket')
  },
  removeFromBasket (state, item) {
    let index = state.basket.indexOf(item)

    if (index > -1) {
      let product = state.basket[index]
      state.basketCount -= product.quantity

      state.basket.splice(index, 1)
    }
    this.commit('saveBasket')
  },
  emptyBasket (state) {
    state.basket.splice(0, state.basket.length)
    state.basketCount = 0
    localStorage.clear() // Necessary to *really* clear basket. Refactor basket altogether?
  },
  saveBasket (state) {
    window.localStorage.setItem('cart', JSON.stringify(state.basket))
    window.localStorage.setItem(' basketCount', state.basketCount)
  },
  setTitle (state, payload) {
    state.customer.title = payload
  },
  setGivenName (state, payload) {
    state.customer.givenName = payload
  },
  setFamilyName (state, payload) {
    state.customer.familyName = payload
  },
  setDateOfBirth (state, payload) {
    state.customer.dateOfBirth = payload
  },
  setIsOfLegalAge (state, payload) {
    state.customer.isOfLegalAge = payload
  },
  setEmail (state, payload) {
    state.customer.email = payload
  },
  setPhonePrefix (state, payload) {
    state.customer.phonePrefix = payload
  },
  setPhoneNumber (state, payload) {
    state.customer.phoneNumber = payload
  },
  setDslSwitch (state, payload) {
    state.customer.dslSwitch = payload
  },
  // RFS check (installation address)
  setRfsZip (state, payload) {
    state.customer.installationAddress.zip = payload
  },
  setRfsCity (state, payload) {
    state.customer.installationAddress.city = payload
  },
  setRfsStreet (state, payload) {
    state.customer.installationAddress.street = payload
  },
  setRfsHouseNumber (state, payload) {
    state.customer.installationAddress.houseNumber = payload
  },
  setRfsRegion (state, payload) {
    state.customer.installationAddress.region = payload
  },
  setRfsBuildingId (state, payload) {
    state.customer.installationAddress.buildingId = payload
  },
  setRfsInternetAvailability (state, payload) {
    state.customer.installationAddress.rfsCheckResult.rfsInternetAvailability = payload
  },
  setRfsGigabitAvailability (state, payload) {
    state.customer.installationAddress.rfsCheckResult.rfsGigabitAvailability = payload
  },
  setReadyForService (state, payload) {
    state.customer.installationAddress.rfsCheckResult.readyForService = payload
  },

  // numberporting, teleport
  setTeleport (state, payload) {
    if (!payload) {
      state.customer.telephonePorting = {
        'teleportWanted': '',
        'numberportingProvider': '',
        'portingPhonePrefix': '',
        'portingPhoneNumber': '',
        'portingZip': '',
        'portingCity': '',
        'portingStreet': '',
        'portingHouseNumber': '',
        'portingGivenName': '',
        'portingFamilyName': ''
      }
    } else state.customer.telephonePorting.teleportWanted = true
  },
  setNumberportingProvider (state, payload) {
    state.customer.telephonePorting.numberportingProvider = payload
  },
  setPortingPhonePrefix (state, payload) {
    state.customer.telephonePorting.portingPhonePrefix = payload
  },
  setPortingPhoneNumber (state, payload) {
    state.customer.telephonePorting.portingPhoneNumber = payload
  },
  setPortingZip (state, payload) {
    state.customer.telephonePorting.portingZip = payload
  },
  setPortingCity (state, payload) {
    state.customer.telephonePorting.portingCity = payload
  },
  setPortingStreet (state, payload) {
    state.customer.telephonePorting.portingStreet = payload
  },
  setPortingHouseNumber (state, payload) {
    state.customer.telephonePorting.portingHouseNumber = payload
  },
  setPortingGivenName (state, payload) {
    state.customer.telephonePorting.portingGivenName = payload
  },
  setPortingFamilyName (state, payload) {
    state.customer.telephonePorting.portingFamilyName = payload
  },

  setItemizedBill (state, payload) {
    state.customer.itemizedBill.itemizedBillWanted = payload
  },
  setIban (state, payload) {
    state.customer.paymentDetails.ibanSelected = payload
    if (payload) {
      state.customer.paymentDetails.accountNumber = ''
      state.customer.paymentDetails.bankNumber = ''
    } else if (!payload) {
      state.customer.paymentDetails.ibanNumber = ''
    }
  },
  setDifferentPayer (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.alternateBillWanted = payload
    if (!payload) {
      state.customer.paymentDetails.alternateBillingAddress.fullName = ''
    }
  },
  setDifferentPayerName (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.fullName = payload
  },
  setIbanNumber (state, payload) {
    state.customer.paymentDetails.ibanNumber = payload
  },
  setAccountNumber (state, payload) {
    state.customer.paymentDetails.accountNumber = payload
  },
  setBankNumber (state, payload) {
    state.customer.paymentDetails.bankNumber = payload
  },
  setPaymentPostalCode (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.zip = payload
  },
  setPaymentStreet (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.street = payload
  },
  setPaymentStreetNumber (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.streetNumber = payload
  },
  setPaymentCity (state, payload) {
    state.customer.paymentDetails.alternateBillingAddress.city = payload
  },
  setCheckoutState (state, payload) {
    state.customer.checkoutFormComplete = payload
  },
  setTermsAndConditions (state, payload) {
    state.customer.legalAgreements.termsandconditions = payload
  },
  setCreditWorthiness (state, payload) {
    state.customer.legalAgreements.creditworthiness = payload
  },
  setPermissionManagement (state, payload) {
    state.customer.legalAgreements.permissionManagement = payload
  },
  setEmailChannel (state, payload) {
    state.customer.legalAgreements.emailchannel = payload
  },
  setTelephoneChannel (state, payload) {
    state.customer.legalAgreements.telephonechannel = payload
  },
  setSMSChannel (state, payload) {
    state.customer.legalAgreements.smschannel = payload
  },
  setPostChannel (state, payload) {
    state.customer.legalAgreements.postchannel = payload
  },
  setAlternateBillWanted (state, payload) {
    if (!payload) {
      state.customer.alternativeAddress = {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': '',
        'extraInformation': ''
      }
    } else state.customer.alternativeAddress.alternativeWanted = true
  },
  setAlternateBillTitle (state, payload) {
    state.customer.alternativeAddress.title = payload
  },
  setAlternateBillGivenName (state, payload) {
    state.customer.alternativeAddress.givenName = payload
  },
  setAlternateBillFamilyName (state, payload) {
    state.customer.alternativeAddress.familyName = payload
  },
  setAlternateBillZip (state, payload) {
    state.customer.alternativeAddress.zip = payload
  },
  setAlternateBillCity (state, payload) {
    state.customer.alternativeAddress.city = payload
  },
  setAlternateBillStreet (state, payload) {
    state.customer.alternativeAddress.street = payload
  },
  setAlternateBillHouseNumber (state, payload) {
    state.customer.alternativeAddress.houseNumber = payload
  },
  setAlternateBillExtraInformation (state, payload) {
    state.customer.alternativeAddress.extraInformation = payload
  },
  setAlternateDeliveryWanted (state, payload) {
    if (!payload) {
      state.customer.deliveryAddress = {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': ''
      }
    } else state.customer.deliveryAddress.alternativeWanted = true
  },
  setAlternateDeliveryTitle (state, payload) {
    state.customer.deliveryAddress.title = payload
  },
  setAlternateDeliveryGivenName (state, payload) {
    state.customer.deliveryAddress.givenName = payload
  },
  setAlternateDeliveryFamilyName (state, payload) {
    state.customer.deliveryAddress.familyName = payload
  },
  setAlternateDeliveryZip (state, payload) {
    state.customer.deliveryAddress.zip = payload
  },
  setAlternateDeliveryCity (state, payload) {
    state.customer.deliveryAddress.city = payload
  },
  setAlternateDeliveryStreet (state, payload) {
    state.customer.deliveryAddress.street = payload
  },
  setAlternateDeliveryHouseNumber (state, payload) {
    state.customer.deliveryAddress.houseNumber = payload
  },
  setWifispot (state, payload) {
    state.customer.wifiSpotConsent = payload
  },
  setDesiredActivationDate (state, payload) {
    state.customer.desiredActivationDate = payload
  },
  setActivationDate (state, payload) {
    state.customer.activationDate = payload
  },
  setEvinnnotice (state, payload) {
    state.customer.itemizedBill.coUsersInformed = payload
  },
  setBilltypeItemized (state, payload) {
    state.customer.itemizedBill.billtype = payload
  },
  setTelephoneBookEntry (state, payload) {
    state.customer.phoneBookEntry = payload
  },
  setNumberPortingCheck (state, payload) {
    state.checkoutFormCheck.numberPortingCheck = payload
  },
  setAlternateBillCheck (state, payload) {
    state.checkoutFormCheck.alternateDeliveryCheck = payload
  },
  setAlternateDeliveryCheck (state, payload) {
    state.checkoutFormCheck.alternateDeliveryCheck = payload
  },
  setContactInfoFormCheck (state, payload) {
    state.checkoutFormCheck.contactInfoFormCheck = payload
  },
  setProfileFormCheck (state, payload) {
    state.checkoutFormCheck.profileFormCheck = payload
  },
  setPaymentFormCheck (state, payload) {
    state.checkoutFormCheck.paymentFormCheck = payload
  },
  // set session variables
  setSalesIdClick (state, payload) {
    state.session.salesId.click = payload
  },
  setSalesIdPostView (state, payload) {
    state.session.salesId.postView = payload
  },
  setSalesIdRfsRegionCode (state, payload) { // unused
    state.session.salesId.rfsRegionCode = payload
  },
  setSalesIdEffective (state, payload) {
    state.session.salesId.effective = payload
  },
  emptyPaymentData (state) {
    state.customer.paymentDetails = {
      'ibanSelected': false,
      'ibanNumber': '',
      'accountNumber': '',
      'bankNumber': '',
      'alternateBillingAddress': {
        'alternateBillWanted': false,
        'fullName': '',
        'zip': '',
        'city': '',
        'street': '',
        'streetNumber': '',
        'country': 'Deutschland'
      }
    }
  },
  emptyCustomerData (state) {
    state.customer = {
      // define placeholder values in here
      'title': '',
      'givenName': '',
      'familyName': '',
      'dateOfBirth': '',
      'isOfLegalAge': false,
      'email': '',
      'phonePrefix': '',
      'phoneNumber': '',
      'dslSwitch': '',
      'wifiSpotConsent': 'true',
      'desiredActivationDate': 'false',
      'activationDate': null,
      'phoneBookEntry': '',
      'installationAddress': {
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': '',
        'buildingId': false,
        'region': false,
        'rfsCheckResult': {
          'readyForService': false,
          'bcsInfo': 'Basic Cable Service information not available',
          'rfsInternetAvailability': false,
          'rfsGigabitAvailability': false
        }
      },
      'alternativeAddress': {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': '',
        'extraInformation': ''
      },
      'deliveryAddress': {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': ''
      },
      'telephonePorting': {
        'teleportWanted': '',
        'numberportingProvider': '',
        'portingPhonePrefix': '',
        'portingPhoneNumber': '',
        'portingZip': '',
        'portingCity': '',
        'portingStreet': '',
        'portingHouseNumber': '',
        'portingGivenName': '',
        'portingFamilyName': ''
      },
      'paymentDetails': {
        'ibanSelected': false,
        'ibanNumber': '',
        'accountNumber': '',
        'bankNumber': '',
        'alternateBillingAddress': {
          'alternateBillWanted': false,
          'fullName': '',
          'zip': '',
          'city': '',
          'street': '',
          'streetNumber': '',
          'country': 'Deutschland'
        }
      },
      'legalAgreements': {
        'termsandconditions': '',
        'creditworthiness': '',
        'permissionManagement': '',
        'emailchannel': '',
        'telephonechannel': '',
        'smschannel': '',
        'postchannel': ''
      },
      'itemizedBill': {
        'itemizedBillWanted': '',
        'billtype': '',
        'coUsersInformed': ''
      },
      'existingCustomer': false,
      'checkoutFormComplete': false
    }
  },
  setMockData (state) {
    state.customer = {
      // define placeholder values in here
      'title': 'Herr',
      'givenName': 'FOD - Service Testbestellung',
      'familyName': 'DEVELOPERTEST', // numbers in name are not valid
      'dateOfBirth': '01.01.1970',
      'isOfLegalAge': true,
      'email': 'florian.reich@unitymedia.de',
      'phonePrefix': '0221',
      'phoneNumber': '84621000',
      'dslSwitch': 'true',
      'wifiSpotConsent': 'true',
      'setActivationDate': false,
      'activationDate': null,
      'phoneBookEntry': '',
      'installationAddress': {
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': '',
        'buildingId': false,
        'region': false,
        'rfsCheckResult': {
          'readyForService': false,
          'bcsInfo': 'Basic Cable Service information not available',
          'rfsInternetAvailability': false,
          'rfsGigabitAvailability': false
        }
      },
      'alternativeAddress': {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': '',
        'extraInformation': ''
      },
      'deliveryAddress': {
        'alternativeWanted': '',
        'title': '',
        'givenName': '',
        'familyName': '',
        'zip': '',
        'city': '',
        'street': '',
        'houseNumber': ''
      },
      'telephonePorting': {
        'teleportWanted': '',
        'numberportingProvider': '',
        'portingPhonePrefix': '',
        'portingPhoneNumber': '',
        'portingZip': '',
        'portingCity': '',
        'portingStreet': '',
        'portingHouseNumber': '',
        'portingGivenName': '',
        'portingFamilyName': ''
      },
      'paymentDetails': {
        'ibanSelected': true,
        'ibanNumber': 'DE15700500000013020836',
        'accountNumber': '',
        'bankNumber': '',
        'alternateBillingAddress': {
          'alternateBillWanted': false,
          'fullName': '',
          'zip': '',
          'city': '',
          'street': '',
          'streetNumber': '',
          'country': 'Deutschland'
        }
      },
      'legalAgreements': {
        'termsandconditions': 'true',
        'creditworthiness': 'true',
        'permissionManagement': '',
        'emailchannel': '',
        'telephonechannel': '',
        'smschannel': '',
        'postchannel': ''
      },
      'itemizedBill': {
        'itemizedBillWanted': '',
        'billtype': '',
        'coUsersInformed': ''
      },
      'existingCustomer': false,
      'checkoutFormComplete': true
    }
  },
  setDetailledAnalytics (state, payload) {
    state.customer.detailledAnalytics = payload
  },
  setUniqueOrderId (state, payload) {
    state.uniqueOrderId = payload
  },
  setOrderTracked (state, payload) {
    state.orderTracked = payload
  },
  setCableMaxAlternativeProcess (state, payload) {
    state.customer.cableMaxRFSAlternative = payload
  }
}

export default {
  state,
  getters,
  mutations
}
