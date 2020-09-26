// Track error pages (currently only 404).
// Ticket: DA-3661
// pageName string example for error pages: '<404>https://www.unitymedia.de/online-shop#/page/not/found'

export default function (errorCode) {
  const currentUrl = window.location.href
  // console.log('Error ' + errorCode + ' detected for page ' + currentUrl)

  try {
    if (window.ANALYTICS_ALLOWED) {
      window.sncf.clearVars()
      window.sncf.prop69 = window.CONFIG_BBCT.shopId
      window.sncf.pageType = 'errorPage'
      window.sncf.channel = 'Error'
      window.sncf.pageName = '<' + errorCode + '>' + currentUrl
      window.sncf.prop23 = window.sncf.prop24 = window.sncf.hier1 = window.sncf.hier2 = window.sncf.channel
      window.sncf.t()
    }
  } catch (e) {
    console.warn('Tracking error ' + errorCode + ' for page ' + currentUrl + 'failed. Exception: ' + e)
  }
  return true
}
