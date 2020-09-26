<template>
  <tbody>
    <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Internet</p>
          </div>
        </div>
      </div>
    </th>
    <tr>
      <td style="width: 25%;">
        Internet-Flatrate
      </td>
      <td style="width: 75%;">
        Echte Flatrate, keine Drosselung.
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Unitymedia-WifiSpot
      </td>
      <td style="width: 75%;">
        Kostenloses WLAN für unterwegs
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Download-Geschwindigkeit
      </td>
      <td style="width: 75%;">

          Bis zu {{product.download}} Mbit/s
          <tooltip
            content="<strong>Warum „bis zu“?</strong><br>Selbst wenn mit unserer Technologie (COAX-Glasfaser) eine bessere Leistungsgüte garantiert werden kann als z. B. bei DSL, variieren Geschwindigkeiten zumindest geringfügig, sodass nur die Beschreibung „bis zu“ rechtlich zulässig ist."
          />

      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Upload-Geschwindigkeit
      </td>
      <td style="width: 75%;">

          Bis zu {{product.upload}} Mbit/s
          <span v-if="hasPowerUpload">
            (mit dem Power Upload
            bis zu {{product.upload * 2}} Mbit/s)
            <span
              class="tooltip js_tooltip"
            >
              <span class="tooltip-icon icon-info"></span>
              <span
                class="tooltip-layer"
              >Mit dem Power Upload können Sie Ihre Upload-Geschwindigkeit verdoppeln.</span>
            </span>
          </span>

      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Verbindungstechnologie
      </td>
      <td style="width: 75%;">
        COAX-Glasfaser
          <tooltip
            content="Während alle Anbieter bis zum Verteilerkasten (dem sogenannten “Hub“) Glasfaser-Kabel verwenden, unterscheiden sich die Kabel der Anbieter auf dem Weg vom Hub bis zum Kunden. DSL-Anbieter verwenden auf dieser Strecke Telefonkabel, Kabelanbieter verwenden Koaxialkabel."
          />

      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Sicherheitspaket
          <tooltip
            content="<strong>Sicherheitspaket</strong><br>Wirksamer Schutz vor Gefahren aus dem Internet mit preisgekrönter Software."
          />

      </td>
      <td
        style="width: 75%;"
      >Möglich bei Buchung der Option (Kostenlos in den ersten 3 Monaten, danach 3,99 € mtl.).</td>
    </tr>
  </tbody>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
export default {
  name: 'internetDetails',
  components: {
    tooltip
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasPowerUpload () {
      var tempBoolean = false
      if (this.product.options) {
        this.product.options.forEach(element => {
          if (element.sku === 'Power_Upload_1') {
            tempBoolean = true
          }
        })
      }
      return tempBoolean
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
