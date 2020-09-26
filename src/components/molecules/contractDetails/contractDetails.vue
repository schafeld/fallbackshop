<template>
  <tbody>
    <tr v-if="!headerless">
      <th colspan="2">
        <div class="ume-relative section">
          <div class="ume-compact grid ">
            <div class="grid-col w-1of1 w-1of1-sm w-1of1-md align-center">
              <p class="h3">Vertragsdetails {{product.title}}<br> </p>
            </div>
          </div>
        </div>
      </th>
    </tr>
    <tr v-if="$data.window.width > 479">
      <td style="width: 25%;">Mindestvertragslaufzeit</td>
      <td style="width: 75%;">{{product.contract_duration}} Monate</td>
    </tr>
    <tr v-if="$data.window.width < 479">
      <td style="width: 100%;">
        <span class="headline4">Mindestvertragslaufzeit</span>
        <br>
        {{product.contract_duration}} Monate
      </td>
    </tr>
    <tr v-if="$data.window.width > 479">
      <td style="width: 25%;">Kündigungsfrist</td>
      <td style="width: 75%;">3 Monate</td>
    </tr>
    <tr v-if="$data.window.width < 479">
      <td style="width: 100%%;">
        <span class="headline4">Kündigungsfrist</span>
        <br>3 Monate
      </td>
    </tr>

    <!-- TODO: Refactor so only one text for large and small screens needed. Use CSS for responsiveness. -->
    <tr v-if="$data.window.width > 479">
      <td style="width: 25%;">Vertragsvoraussetzungen</td>
      <td style="width: 75%;">
        <span v-if="product.set === 'threePlay'">Kabelanschluss von Unitymedia (20,99 € mtl. im Einzelnutzervertrag oder oft bereits in den Mietnebenkosten enthalten. Zzgl. einmaliger Aktivierung 39,99 € und Lieferpauschale 9,99 €).</span>
        <span v-if="product.sku === 'Hardware_DSO-Box_1'">
          Kabelanschluss von Unitymedia <sup>
            <span class="tooltip js_tooltip bottom-tooltip left-tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                <strong>Rechtliche Hinweise</strong><br>
                Voraussetzung ist ein Kabelanschluss von Unitymedia (20,99 € mtl. im Einzelnutzervertrag oder oft bereits in den Mietnebenkosten enthalten). zzgl. einmaliger Aktivierung&nbsp;29,99 € und einmaliger Lieferpauschale 9,99 €. Mindestvertragslaufzeit 12 Monate. Online-Rechnung inklusive.
              </span></span></sup>
        </span>
        <span v-else>Kein Kabelanschlussvertrag notwendig, es muss lediglich ein Kabelanschluss an Ihrem Wohnort verfügbar sein.</span>
      </td>
    </tr>
    <tr v-if="$data.window.width < 479">
      <td style="width: 100%;">
        <span class="headline4">Vertragsvoraussetzungen</span>
        <br>
        <span v-if="product.set === 'threePlay'">Kabelanschluss von Unitymedia (20,99 € mtl. im Einzelnutzervertrag oder oft bereits in den Mietnebenkosten enthalten. Zzgl. einmaliger Aktivierung 39,99 € und Lieferpauschale 9,99 €).</span>
        <span v-if="product.sku === 'Hardware_DSO-Box_1'">
          Kabelanschluss von Unitymedia <sup>
            <span class="tooltip js_tooltip bottom-tooltip left-tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                <strong>Rechtliche Hinweise</strong><br>
                Voraussetzung ist ein Kabelanschluss von Unitymedia (20,99 € mtl. im Einzelnutzervertrag oder oft bereits in den Mietnebenkosten enthalten). zzgl. einmaliger Aktivierung&nbsp;29,99 € und einmaliger Lieferpauschale 9,99 €. Mindestvertragslaufzeit 12 Monate. Online-Rechnung inklusive.
              </span></span></sup>
        </span>
        <span v-else>Kein Kabelanschlussvertrag notwendig, es muss lediglich ein Kabelanschluss an Ihrem Wohnort verfügbar sein.</span>
      </td>
    </tr>

    <tr v-if="product.pib && $data.window.width > 479">
      <td style="width: 25%;">Produktinformationsblatt</td>
      <td style="width: 75%;">
        <a :href="product.pib" target="_blank">
          {{product.title}} (PDF)
        </a>
      </td>
    </tr>
    <tr v-if="product.pib && $data.window.width < 479">
      <td style="width: 100%;">
        <span class="headline4">Produktinformationsblatt</span>
        <br>
        <button-element
          :href="product.pib"
          :label="product.title + ' (PDF)'"
          type="hyperlink-inverted"
        />
      </td>
    </tr>
    <tr v-if="product.upfront_price && $data.window.width > 479">
      <td style="width: 25%;">Einmalige Kosten</td>
      <td style="width: 75%;">
        <span>Einmalige Aktivierung {{String(product.upfront_price).replace('.',',')}} € und Lieferpauschale {{String(product.deliveryfee).replace('.',',')}} €</span>
      </td>
    </tr>
    <tr v-if="product.upfront_price && $data.window.width < 479">
      <td style="width: 100%;">
        <span class="headline4">Einmalige Kosten</span>
        <br>
        <span>Einmalige Aktivierung {{String(product.upfront_price).replace('.',',')}} € und Lieferpauschale 9,99 €</span>
      </td>
    </tr>
    <tr v-if="$data.window.width > 479 && product.sku !== 'Hardware_DSO-Box_1'">
      <td style="width: 25%;">Rechnungsart</td>
      <td style="width: 75%;">Online-Rechnung</td>
    </tr>
    <tr v-if="$data.window.width < 479 && product.sku !== 'Hardware_DSO-Box_1'">
      <td style="width: 100%;">
        <span class="headline4">Rechnungsart</span>
        <br>Online-Rechnung
      </td>
    </tr>
  </tbody>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'contractDetails',
  components: {
    buttonElement
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    headerless: {
      type: Boolean,
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
@media screen and (max-width: 479px) {
  td,
  p {
    font-size: 1.9rem;
    font-weight: 400;
  }
  th p {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .headline4 {
    font-size: 2.1rem;
    font-weight: 800;
  }
}
</style>
