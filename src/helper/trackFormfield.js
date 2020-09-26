// Helper function for tracking form elements in checkout pages 1 and 2 which are spread across several components.
// Ticket: DA-3600
export default function (formfieldName) {
  if (this.$data.DEBUG) {
    console.log('formfieldName: ' + formfieldName)
  }

  if (this.$store.getters.detailledAnalytics === false) {
    if (this.$data.DEBUG) {
      console.log('No detailled tracking sample, i.e. no click tracking')
    }
    return false
  }

  try {
    if (window.ANALYTICS_ALLOWED) {
      window.sncf.linkTrackVars = 'eVar96,events'
      window.sncf.linkTrackEvents = 'event152'
      window.sncf.eVar96 = window.sncf.privacyFilter('Fallback-Checkout:' + formfieldName, 'page')
      window.sncf.events = 'event152'
      window.sncf.tl(true, 'o', 'Form Field Tracking')
      window.sncf.linkTrackVars = 'None'
      window.sncf.linkTrackEvents = 'None'
    }
  } catch (e) {
    console.warn('Tracking failed for form element/s. ' + e)
  }
  if (this.$data.DEBUG) {
    console.log('Tracking, form field entered: ' + formfieldName)
  }

  return true
}
