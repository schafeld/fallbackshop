// Helper function for updating the Tealium data layer (oTagData)
// from route meta information (see router.js).
// TODO: Remove this helper if Tealium herlper in route.js is enough and working.
export default function (routeMetaInfo, documentTitle, toRoute) {
  /*
  const dataLayerOTag = window.oTagData
  const dataLayerUTag = window.utag.data

  try {
    dataLayerOTag.sStatus = routeMetaInfo.sStatus
    dataLayerOTag.sPageType = routeMetaInfo.sPageType
    dataLayerOTag.oSpecific.PageName = documentTitle

    dataLayerUTag['dom.hash'] = toRoute.path// location.hash

    dataLayerUTag['B2C_PageType'] = routeMetaInfo.sPageType
    dataLayerUTag['TagSpecific.URL'] = document.location.origin + '/#' + toRoute.path

  } catch (e) {
    console.log('Tealium data layer update (from route meta info) failed. ' + e)
  }
  */
  return true
}
