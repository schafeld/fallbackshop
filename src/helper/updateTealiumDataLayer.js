// Helper function for updating the Tealium data layer (oTagData)
// from route meta information (see router.js).
import store from '@/store'
export default function (routeMetaInfo, documentTitle, toRoute) {
  let oTagData = window.oTagData

  oTagData = window.oTagData || {}

  // This block is superseded by Tealium injection script in HTML code.
  oTagData.sTealiumAccount = 'lgi'
  oTagData.sTealiumProfile = 'de-unitymedia-main'
  oTagData.sTealiumProdBaseURL = '//tags.tiqcdn.com/utag/'
  oTagData.sTealiumEnvironment = 'prod' // prod, qa, dev

  oTagData.aProducts = []
  oTagData.aProducts[0] = {}
  oTagData.aProducts[0].sProductCategory = ''
  // Commented values like '${...}' are references to Dcomm's tealium.jsp
  oTagData.oOrder = {}
  oTagData.oOrder.sStatus = routeMetaInfo.sStatus // '${sStatus}';
  oTagData.oOrder.sPageType = routeMetaInfo.sPageType // '${tealiumScope}';

  oTagData.oOrder.sRegion = store.getters.rfsRegion // '<%=request.getSession().getAttribute("region")%>';
  oTagData.oOrder.sOnlineOrderNumber = store.getters.uniqueOrderId // ume.tealium.getOrderId(${cartOrPurchaseDetails});

  oTagData.oOrder.sPendingOrderNumber = ''
  oTagData.oOrder.sWorkOrderNumber = ''
  oTagData.oOrder.sOrderIdentifier = store.getters.basketSncfProductsList // ume.tealium.getMainProduct('', ${cartOrPurchaseDetails});
  oTagData.oOrder.sLeadProduct = store.getters.basketSkuList.split(',')[0] // ume.tealium.getMainProduct('${ not empty mainProductValue ? mainProductValue.sku : ''}', ${cartOrPurchaseDetails});
  oTagData.oOrder.sAdditionalProducts = store.getters.basketSkuList // ume.tealium.getCSString(${cartOrPurchaseDetails});
  oTagData.oOrder.sSalesId = store.getters.salesIdEffective // ume.helper.getSalesId();
  oTagData.oOrder.nOrderTotalPrice = store.getters.priceTotalFloat // ume.tealium.getOrderTotalRates(${cartOrPurchaseDetails});
  oTagData.oOrder.nOrderOneTimePrice = store.OneTimeChargesTotalFloat // ume.tealium.getOrderTotalOTC(${cartOrPurchaseDetails});

  oTagData.oVisitor = {}
  oTagData.oVisitor.sCustomerStatus = store.OneTimeChargesTotalFloat // '${sCustomerStatus}';
  // oTagData.oVisitor.sCustomerId = '${sCustomerId}'; Hint for future use, currently there is no Customer Id in the Fallback Shop.
  oTagData.oVisitor.sUsec = (new Date()).getTime()
  // oTagData.oVisitor.sCustomerLoggedIn = '${sCustomerLoggedIn}'; // Hint for future use, currently there is no Login/ are no existing customers in the Fallback Shop.

  oTagData.oSpecific = {}
  oTagData.oSpecific.sB2CorB2BOrder = 'B2C' // ${sB2CorB2BOrder}'; // there can be no B2B in Fallback Shop

  if (store.getters.basketSkuList.indexOf('3PLAY') > -1) {
    // console.log('sCaratAegisCategory: 3PLAY: Breitband,TV')
    oTagData.oSpecific.sCaratAegisCategory = 'Breitband,TV'
  } else {
    // console.log('sCaratAegisCategory: 2PLAY or other: Breitband')
    oTagData.oSpecific.sCaratAegisCategory = 'Breitband'
  }
  // oTagData.oSpecific.sCaratAegisCategory = ume.tealium.getCaratAegisCategory(${cartOrPurchaseDetails});

  oTagData.oSpecific.sPlanNetHistogram = '1|0|0|0' // Fallback Shop has only broadband, right? // {broadband: 0, business: 0, dtv: 0, mobile: 0}
  // oTagData.oSpecific.sPlanNetHistogram = ume.tealium.getPlanNetHistogram(${cartOrPurchaseDetails});

  oTagData.oSpecific.sAffiliateProductsString = store.getters.basketSkuListPipe // ume.tealium.getPSString(${cartOrPurchaseDetails});
  oTagData.oSpecific.sAffiliateProductsStringComma = store.getters.basketSkuList // ume.tealium.getCSString(${cartOrPurchaseDetails});
  oTagData.oSpecific.sTotalSumInCents = store.getters.priceTotalFloat * 100 // ume.tealium.getOrderTotalRatesInCents(${cartOrPurchaseDetails});
  oTagData.oSpecific.sProductList = store.getters.basketProductsList // ume.tealium.getTealiumProductList(${cartOrPurchaseDetails});
  oTagData.oSpecific.PageName = documentTitle // '${fn:replace(pageTitle, "'", "\\'")}';
  oTagData.oSpecific.PageType = routeMetaInfo.sPageType // /^400$|^403$|^404$|^500$/.test(document.title) ? 'errorPage' : '';

  console.log('%cTealium data layer update from router (updateTealiumDataLayer) sOrderIdentifier: ' + oTagData.oOrder.sOrderIdentifier, 'color:green')

  // Is this return useful?
  return true
}
