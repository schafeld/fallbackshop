<template>
  <tbody>
    <tr>
      <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Hardware: Vodafone Station</p>
          </div>
        </div>
      </div>
    </th>
    </tr>
    <tr>
      <td style="width: 25%;">
        <img
          src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vodafone/hardware/DEV_Vodafone_WLAN-Kabelrouter_RouterIncl.png"
          class="center"
          width="220px"
        >
      </td>
      <td style="width: 75%;">
        <ul class="check-list">
          <li>Highspeed-Kabelrouter für Internet und Telefonie. Kostenfrei während der Vertragslaufzeit.</li>
          <li>Highspeed-Dual WLAN: AC (bis 1.300 Mbit/s) und N (bis 450 Mbits/s)</li>
          <li>Intelligente vollautomatische Frequenzkanalerkennung</li>
          <li>Einfache Selbstinstallation oder Installation durch Techniker. <a
              data-action="Hyperlink"
              data-upc-tooltip-type="none"
              href="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vodafone/hardware/Installationsanleitung_ARRIS INL81.pdf"
            >Hinweise zur Installation (PDF)</a></li>
          <li>Unterstützt Basis-Komfortoptionen (z. B. Anklopfen, Dreier-Konferenz, Übermittlung oder Unterdrückung der eigenen Rufnummer)</li>
          <li>Anschluss zweier analoger Endgeräte möglich</li>
        </ul>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    headerless: {
      type: String,
      required: false
    }
  }
}
</script>
<style scoped>
tr td:nth-child(1) {
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: VodafoneBd, Arial, sans-serif;
}
</style>
