<template>
  <div class="content">
    <div class="image">
      <div class="image-container">
      </div>
    </div>
    <div class="text">
      <div class="text-container">
        <spacer setting="5" />
        <spacer setting="5" />
        <div class="boxed dark-bg">
          <p><span class="h2a">Bestell online und sicher<br> Dir Dein Startguthaben</span></p>
          <p class="body-style">Wir schenken Dir bei Online-Bestellung bis zu<br> <span style="font-size: 36px; font-family: VodafoneBd; line-height: 47px;"> 170 € <sup>
                <span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                    <strong>Rechtliche Hinweise</strong><br>
                    Bei Online-Bestellung dieses Produktes erhältst Du als Neukunde, in dessen Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von uns vorhanden war, das angegebene Startguthaben, welches mit monatlichen wiederkehrenden Rechnungsbeträgen des promotionierten Produktes bei uns (nicht aber bei etwaigen Drittanbietern) ab dem 1. Vertragsmonat verrechnet wird. Die Verrechnung erfolgt automatisch, bis das Guthaben vollständig aufgebraucht ist. Das Guthaben kann nicht ausgezahlt werden und verfällt, wenn der Vertrag, für den das Guthaben abgeschlossen wurde, beendet wurde.
                  </span></span></sup></span><br> </p>
        </div>
        <div class="boxed">
          <button-element
            label="Online-Vorteile sichern"
            tifa="TIFA-382"
            type="dcomm_button"
            linkTo="/privatkunden/kombipakete/2play/"
            :inverted="this.$data.window.width > 880"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'
import spacer from '@/components/atoms/spacer.vue'
export default {
  name: 'online-advantage-aspot',
  components: {
    buttonElement,
    spacer
  }
}
</script>

<style scoped>
.image {
  background-image: url(//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/visual_online-vorteil@2x.png),
    linear-gradient(45deg, #850002 10%, #ea0303 58%, #5a0000 100%);
  background-repeat: no-repeat;
  background-position: calc(50% + 250px), center;
}
.image-container img {
  height: initial !important;
}
img {
  align-self: center;
}

@media screen and (max-width: 879px) {
  .image {
    background-size: auto 100%, auto 100%;
    background-position: center;
  }
  .dark-bg {
    color: #333333;
  }
}
</style>
