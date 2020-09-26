// Helper function to close the overlay with the main navigation
export default function () {
  try {
    // Close desktop navigation overlay
    const umeOverlay = document.querySelector('.ume-overlay')
    umeOverlay.classList.remove('is-visible')
    // Set navigation background layer height to zero,
    // otherwise short views can have trailing whitespace from longer previous view.
    umeOverlay.style.height = '0px'

    const mainNavContent = document.querySelector('.main-nav .nav-content')
    mainNavContent.style.display = 'none'

    const mainNavClose = document.querySelector('div.nav-btn.nav-close')
    mainNavClose.style.display = 'none'

    // remove main menu selected item underline
    document.querySelector('li[data-featuredlink].is-visible').classList.remove('is-visible')
  } catch (err) {
    // No open desktop navigation overlay found
  }

  try {
    // Close mobile navigation overlay
    const mobileNavLayer = document.querySelector('div.mobile-nav__layer.js_mobile-nav-layer')
    mobileNavLayer.classList.remove('is-visible')
  } catch (err) {
    // No open mobile navigation overlay found
  }
}
