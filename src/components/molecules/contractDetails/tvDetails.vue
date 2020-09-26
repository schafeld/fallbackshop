<template>
  <tbody v-if="tvSet">
    <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Digitale Sender und HD-Option</p>
          </div>
        </div>
      </div>
    </th>
    <tr>
      <td style="width: 25%;">TV-Sender in HD</td>
      <td style="width: 75%;">52 Sender in High Definition
        <div class="dcomm_button section">
          <div class="btnalign">
            <!-- TODO: Implement overlay for TV stations
            <button
              type="button"
              class="btn-inherit js_dialog-open"
            >Senderliste zeigen</button>
            -->
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">TV-Sender in SD</td>
      <td style="width: 75%;">122 Sender in Standard Definition
        <div class="dcomm_button section">
          <div class="btnalign">
            <!-- TODO: Implement overlay for TV stations
            <button
              type="button"
              class="btn-inherit js_dialog-open"
              data-dialog
            >Senderliste zeigen</button>
            -->
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">Digitale Radiosender
        <tooltip content="Mit Ihrem digitalen Empfangsgerät (z. B. HD-Receiver, Horizon HD-Recorder) hören Sie Radio in ausgezeichneter Klang-Qualität, ganz ohne Rauschen und Knarzen." />
      </td>
      <td style="width: 75%;">
        <span style="padding-right: 15px;">89 in NRW und Hessen</span>
        <div class="dcomm_button section">
          <div class="btnalign">
            <!-- TODO: Implement overlay for radio stations
            <button
              type="button"
              class="btn-inherit js_dialog-open"
              data-dialog="UME_DIGI_FREE_RADIOSENDER_TOTAL"
            >Senderliste zeigen</button>
            -->
          </div>
        </div>
        <spacer setting="1" />
        <span style="padding-right: 15px;">116 in Baden-Württemberg</span>
        <div class="dcomm_button section">
          <div class="btnalign">
            <!-- TODO: Implement overlay for radio stations
            <button
              type="button"
              class="btn-inherit js_dialog-open"
              data-dialog="UME_DIGI_FREE_RADIOSENDER_TOTAL"
            >Senderliste zeigen</button>
            -->
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">HD-Option</td>
      <td style="width: 75%;">In Horizon TV bereits enthalten. Sie sehen alle in HD verfügbaren Sender Ihrer Programmauswahl in HD (außer Sky, hierzu Buchung von Sky Premium HD nötig).</td>
    </tr>
    <tr>
      <th colspan="2">
        <img src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/icons_um/ICO_tabelle_fernsehen.png">Premium TV
      </th>
    </tr>
    <tr>
      <td style="width: 25%;">Digital TV INTERNATIONAL</td>
      <td style="width: 75%;">Ab 2,99 € mtl. in diversen Paketen verfügbar.</td>
    </tr>
    <tr>
      <td style="width: 25%;">Sky</td>
      <td style="width: 75%;">Ab 17,99 € mtl. zum Vorteilspreis buchbar. Inklusive sky go.</td>
    </tr>
    <tr>
      <td style="width: 25%;">Horizon Go
        <tooltip setting="Schauen Sie TV auf Ihrem Laptop, Smartphone oder Tablet. Mit Horizon Go haben Sie Zugriff auf Ihr komplettes Unitymedia TV-Programm. Jederzeit. Von überall." />
      </td>
      <td style="width: 75%;">Möglich bei Buchung der Option (4,99 € mtl).</td>
    </tr>
    <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Videotheken, Stingray Music und mehr</p>
          </div>
        </div>
      </div>
    </th>
    <tr>
      <td style="width: 25%;">
        Unitymedia Videothek
        <span class="tooltip js_tooltip">
          <span class="tooltip-icon icon-info"></span>
          <span class="tooltip-layer">Filme und Serien ohne Werbeunterbrechung, komplette Serien-Staffeln vor Free-TV-Ausstrahlung, packende Filme – viele in HD-Qualität und Originalfassung. Ständig verbessertes Angebot, jederzeit, von überall aus erreichbar, und so viel Sie wollen.</span>
        </span>
      </td>
      <td style="width: 75%;">
        In Horizon TV bereits enthalten.
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">TV-Archiv</td>
      <td style="width: 75%;">Bestandteil der Unitymedia Videothek. Bietet Zugang zu verpassten Sendungen ausgewählter Sender ohne zusätzliche Kosten.</td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Stingray music
        <span class="tooltip js_tooltip">
          <span class="tooltip-icon icon-info"></span>
          <span class="tooltip-layer">Mehr als 9 digitale Audiokanäle auf Ihrem Fernseher – von Jazz bis Hip Hop, Klassik, Reggae u. v. m. – ohne Werbe- und Moderationsunterbrechungen</span>
        </span>
      </td>
      <td style="width: 75%;">Kostenlos enthalten bei Bestellung der TV Pakete SERIES &amp; MOVIES, DOCU, SPORTS, KIDS, ALLSTARS oder INTERNATIONAL.</td>
    </tr>
    <tr>
      <td style="width: 25%;">Erotik-Paket</td>
      <td style="width: 75%;">
        19,99 € mtl.
      </td>
    </tr>
  </tbody>
</template>

<script>
import tooltip from '@/components/atoms/tooltip.vue'
import spacer from '@/components/atoms/spacer.vue'
export default {
  name: 'tvDetails',
  components: {
    tooltip,
    spacer
  },
  props: {
    tvSet: {
      type: Boolean,
      required: true
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
