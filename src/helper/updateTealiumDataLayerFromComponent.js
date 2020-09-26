// Helper function for updating the Tealium data layer (oTagData)
// from component scope (that = component's this)
// TODO: Remove this helper if Tealium herlper in route.js is enough and working.
export default function (that) {
  /*
  const dataLayerOTag = window.oTagData
  const dataLayerUTag = window.utag.data

  try {
    // adding data to oTagData (Tealium data layer 1/2)
    dataLayerOTag.oOrder.sSalesId = that.$store.getters.salesIdEffective
    dataLayerOTag.oOrder.sRegion = that.$store.getters.rfsRegion
    dataLayerOTag.oOrder.sOnlineOrderNumber = that.$store.getters.uniqueOrderId // This is NOT the Dcomm/DWH order id.

    dataLayerOTag.oOrder.nOrderTotalPrice = that.$store.getters.priceTotalFloat
    dataLayerOTag.oOrder.nOrderOneTimePrice = that.$store.OneTimeChargesTotalFloat

    dataLayerOTag.oOrder.sOrderIdentifier = that.$store.getters.basketSncfProductsList
    // sLeadProduct relies on the main product always being the first SKU in the list, if more than one items in basket.
    dataLayerOTag.oOrder.sLeadProduct = that.$store.getters.basketSkuList.split(',')[0]

    dataLayerOTag.oOrder.sAdditionalProducts = that.$store.getters.basketSkuList // basketSncfProductsList

    dataLayerOTag.oVisitor.sUsec = Date.now() // taken from /dcomm-unitymedia-de/angular/src/app/service/tealium.service.ts

    dataLayerOTag.oSpecific.sAffiliateProductsString = that.$store.getters.basketSkuListPipe
    dataLayerOTag.oSpecific.sAffiliateProductsStringComma = that.$store.getters.basketSkuList

    dataLayerOTag.oSpecific.sTotalSumInCents = that.$store.getters.priceTotalFloat * 100

    dataLayerOTag.oSpecific.sProductList = that.$store.getters.basketProductsList
    // that.$store.getters.tealiumProductList + ';' + that.$store.getters.priceTotalFloat + ';'

    // adding data to utag.data (Tealium data layer 2/2)
    dataLayerUTag['js_page.oTagData.oOrder.sLeadProduct'] = that.$store.getters.basketSkuList
    dataLayerUTag['js_page.oTagData.oOrder.sOrderIdentifier'] = that.$store.getters.basketSkuList // sOrderIdentifier is a SKU in Dcomm
    dataLayerUTag['js_page.oTagData.oOrder.sSalesId'] = that.$store.getters.salesIdEffective

    dataLayerUTag['js_page.oTagData.oOrder.sAdditionalProducts'] = that.$store.getters.basketSkuList // sAdditionalProducts and sLeadProduct are identical in Dcomm
    dataLayerUTag['js_page.oTagData.oOrder.nOrderTotalPrice'] = that.$store.getters.priceTotalFloat
    dataLayerUTag['js_page.oTagData.oOrder.sRegion'] = that.$store.getters.rfsRegion
    dataLayerUTag['js_page.oTagData.oOrder.sOnlineOrderNumber'] = that.$store.getters.uniqueOrderId
    dataLayerUTag['js_page.oTagData.timestamp'] = Date.now()
    dataLayerUTag['js_page.oTagData.oOrder.sProductList'] = that.$store.getters.tealiumProductList + ';' + that.$store.getters.priceTotalFloat + ';'

    dataLayerUTag['TagSpecific.SalesID'] = that.$store.getters.salesIdEffective

    // This is emulating Dcomm Tealium logic :(
    let salesIdEffective = that.$store.getters.salesIdEffective
    // dataLayerUTag['SalesID_OMD_BingAds'] = salesIdEffective
    // dataLayerUTag['SalesID_OMD_DBM_Brand'] = that.$store.getters.salesIdEffective
    // dataLayerUTag['SalesID_OMD_Google_ads'] = that.$store.getters.salesIdEffective
    // dataLayerUTag['SalesID_OMD_SEA'] = that.$store.getters.salesIdEffective

    if (window.lookup_tealium.omd_bing_ads.indexOf(salesIdEffective) > -1) {
      dataLayerUTag['SalesID_OMD_BingAds'] = salesIdEffective
    }
    if (window.lookup_tealium.omd_dbm_brands.indexOf(salesIdEffective) > -1) {
      dataLayerUTag['SalesID_OMD_DBM_Brand'] = salesIdEffective
    }
    if (window.lookup_tealium.omd_google_ads.indexOf(salesIdEffective) > -1) {
      dataLayerUTag['SalesID_OMD_Google_ads'] = salesIdEffective
    }
    if (window.lookup_tealium.omd_sea.indexOf(salesIdEffective) > -1) {
      dataLayerUTag['SalesID_OMD_SEA'] = salesIdEffective
    }
    if (that.$store.getters.basketSkuList.indexOf('3PLAY') > -1) {
      // console.log('sCaratAegisCategory: 3PLAY: Breitband,TV')
      dataLayerUTag['js_page.oTagData.oSpecific.sCaratAegisCategory'] = 'Breitband,TV'
    } else {
      // console.log('sCaratAegisCategory: 2PLAY or other: Breitband')
      dataLayerUTag['js_page.oTagData.oSpecific.sCaratAegisCategory'] = 'Breitband'
    }
  } catch (e) {
    console.log('Tealium data layer update (from component scope) failed. ' + e)
  }
  // if (that.$data.DEBUG) {
  console.log('Tealium data layer updated (from component scope). Route path: ' + that.$route.path + ', route name: ' + that.$route.name + ', SalesID: ' + that.$store.getters.salesIdEffective + ', RFS region: ' + that.$store.getters.rfsRegion + ', basket SKU list: ' + that.$store.getters.basketSkuList)
  // }
  */
  return true
}
