// Helper function to return information (e.g. salesId) as Json from named cookies.
export default function (cookieName) {
  const name = cookieName + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')

  if (this.$data.DEBUG) {
    console.log('Helper for cookie ' + cookieName + ' triggered')
  }

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      const resultJson = JSON.parse(c.substring(name.length, c.length))
      if (this.$data.DEBUG) {
        console.log('Cookie Json result: ' + JSON.stringify(resultJson))
      }
      return resultJson
    }
  }
  return {}
}
