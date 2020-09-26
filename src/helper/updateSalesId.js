// Helper function to calculate the effective salesId to be assigned to an order.
// Either derived from (1) click cookie, or from (2) post_view cookie, or from (3) region of installation adress (rfs check), in that order.
// Default sales id is '43904', same as for region 'NRW' and 'HESSEN'.
export default function (region = 'NRW') {
  // const salesIdNRW = '43904'
  // const salesIdHESSEN = '43904'
  const salesIdBW = '63000'
  const salesIdDefault = '43904'
  const salesIdClick = this.$store.getters.salesIdClick
  const salesIdPostView = this.$store.getters.salesIdPostView

  if (salesIdClick) {
    return salesIdClick
  }
  if (salesIdPostView) {
    return salesIdPostView
  }

  switch (region) {
    case 'BW':
      return salesIdBW
    case 'NRW':
    case 'HESSEN':
    default:
      return salesIdDefault
  }
}
