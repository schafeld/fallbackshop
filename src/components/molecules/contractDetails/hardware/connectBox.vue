<template>
  <tbody>
    <tr v-if="!headless">
      <th colspan="2">
        <p>
          <img
            src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/icons_um/ICO_tabelle_hardware.png"
          >Hardware: Connect Box
        </p>
      </th>
    </tr>
    <tr>
      <td style="width: 25%;">
        <img
          src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/bb-januar-2019/july/fdami/DEV_ConnectBox_Tests_Included_Orange.png"
          class="center"
        >
      </td>
      <td style="width: 75%;">
        <ul class="check-list">
          <li>Highspeed-Kabelrouter für Internet und Telefonie. Kostenfrei während der Vertragslaufzeit.</li>
          <li>Highspeed-Dual WLAN: AC (bis 1.300 Mbit/s) und N (bis 450 Mbits/s)</li>
          <li>Intelligente vollautomatische Frequenzkanalerkennung
            <tooltip
              content="Mit der Connect Box surfen Sie störungsfrei. Sie erkennt automatisch den besten WLAN-Frequenzkanal in Ihrer Umgebung"
            />
          </li>
          <li>Einfache Selbstinstallation oder Installation durch Techniker.
            <button-element
              type="hyperlink-inverted"
              label="Hinweise zur Installation (PDF)"
              target="_blank"
              href="https://www.unitymedia.de/content/dam/unitymedia-de/assets-de/pdf/Connect-Box-Installationsanleitung.pdf"
            />
          </li>
          <li>Unterstützt Basis-Komfortoptionen (z. B. Anklopfen, Dreier-Konferenz, Übermittlung oder Unterdrückung der eigenen Rufnummer)</li>
          <li>Anschluss zweier analoger Endgeräte möglich</li>
        </ul>
      </td>
    </tr>
  </tbody>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'

export default {
  components: {
    tooltip,
    buttonElement
  },
  props: {
    headless: {
      type: String,
      required: false
    }
  }
}
</script>
