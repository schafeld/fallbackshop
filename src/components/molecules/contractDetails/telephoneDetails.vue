<template>
  <tbody>
    <th colspan="2">
      <div class="ume-relative section">
        <div class="ume-compact grid ">
          <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
            <p class="h3">Telefon</p>
          </div>
        </div>
      </div>
    </th>
    <tr>
      <td style="width: 25%;">
        Telefon-Flatrate
          <br>

      </td>
      <td style="width: 75%;">
        Unbegrenzt ins dt. Festnetz telefonieren.
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Anzahl der Leitungen
      </td>
      <td style="width: 75%;">
        1
      </td>
    </tr>
    <tr>
      <td>
        Mehrere Leitungen und Rufnummern
      </td>
      <td
        style="width: 75%;"
      >Möglich bei Buchung der Telefon Komfort Option (4,99 € mtl., zzgl. einmaliger Aktivierung 29,99 €).</td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Rufnummernmitnahme
      </td>
      <td style="width: 75%;">
        Kostenlos möglich für eine und mehrere Nummern.
          <button-element
            href="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/pdf/Portierungsanleitung.pdf"
            type="hyperlink-inverted"
            label="Anleitung und Formular (PDF)"
            target="_blank"
          />

      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Gespräche ins dt. Mobilfunknetz
      </td>
      <td style="width: 75%;">
        <div
          class="product-layer"
        >19,9 Cent/Min. Vergünstigung möglich bei Buchung der SPAR Mobil Option.</div>
      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Gespräche ins Ausland
      </td>
      <td style="width: 75%;">
        Ab 4,9 Cent/Min. Flatrates für Europa und ferneres Ausland möglich.
          <button-element
            href="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/pdf/preisliste-telefon.pdf"
            type="hyperlink-inverted"
            label="Preisliste Telefonie (PDF)"
            target="_blank"
          />

      </td>
    </tr>
    <tr>
      <td style="width: 25%;">
        Anschluss weiterer Geräte (z. B. Fax)
      </td>
      <td
        style="width: 75%;"
      >Möglich bei Buchung der Telefon Komfort Option (4,99 € mtl., zzgl. einmaliger Aktivierung 29,99 €).</td>
    </tr>
  </tbody>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'telephoneDetails',
  components: {
    buttonElement
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
