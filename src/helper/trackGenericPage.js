// Track generic pages (e.g. product detail).
// Ticket: DA-3661, DA-3663
// Hint: This helper is currently only used for 'ordinary' pages, not for pages in checkout funnel.
// TODO: Use same tracking for all page views (probably in router)
// pageName string example for common/generic pages: 'privatkunden/internet/internet/internet-comfort-60/homepage'
// Hint: String format for pageName differs slightly in RFS check component e.g.
// See DA-3663 for details on parameters products and events (they should default to empty for non-product pages).

export default function (pageName, products = '', events = '') {
  // No leading slashes in pageName (DA-3661)!
  // Also remove trailing '/' so input URL hash may or may not end with slash.
  let formattedPageName = pageName.replace(/^\//, '').replace(/\/$/, '') + '/homepage'
  let skuList = '' // TODO: Reduce script complexity, skuList = skuListCompose(products)

  if (products !== '') {
    // Observe slight difference (number) in products string formatting and leading semicolon.
    // TODO: Use helper for this peculiar formatting (also used in addToBasketButton)
    if (products.length > 1) {
      // For several products: ';Internet_PREMIUM_120_1,;2P_JUMP_150_12M_1,;2P_FLY_400_12M_1,;3PLAY_FLY_400_1'
      for (let i = 0; i < products.length; i++) {
        skuList += ';'
        skuList += products[i]
        if (i < products.length - 1) {
          skuList += ','
        }
      }
    } else {
      // For one product: ';2PLAY_START_30_1;1'
      skuList = ';' + products[0] + ';1'
    }
  }
  if (window.DEBUG) {
    console.log('Generic page tracking details: ' + formattedPageName + ', products: ' + skuList + ', events: ' + events)
  }

  try {
    if (window.ANALYTICS_ALLOWED) {
      window.sncf.clearVars()
      window.sncf.products = skuList
      window.sncf.events = events
      window.sncf.prop69 = window.CONFIG_BBCT.shopId
      window.sncf.pageType = ''
      window.sncf.channel = ''
      window.sncf.pageName = formattedPageName
      window.sncf.t()
    }
  } catch (e) {
    console.warn('Tracking failed for page ' + pageName + '. Exception: ' + e)
  }
  return true
}
