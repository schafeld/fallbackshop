<template>
  <div class="content">
    <div class="image">
      <div class="image-container">
      </div>
    </div>
    <div class="text">
      <div class="text-container">
        <div class="boxed">
          <spacer setting="5" />
          <spacer setting="5" />
          <div class="richtext section">
            <div class="dark-bg">
              <p
                class="h2a"
                style="font-family: VodafoneBd;font-size: 20.0px;"
              >#WeKeepYouGoing</p>
              <p class="h2a">Gutes Internet<br>
                war noch nie so<br>
                wichtig wie jetzt</p>
              <p class="body-style">Surf mit bis zu 1000 Mbit/s<br>
                in unserem Gigabit-Netz <span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">Ausgehend von den maximalen Download-Geschwindigkeiten von 1000 Mbit/s bei Kabel und 250 Mbit/s bei DSL. Maximale Upload-Geschwindigkeiten bei DSL weichen nach oben ab</span></span></p>
              <p class="body-style"><strong>Nur </strong><span
                  class="h2a"
                  style="font-family: VodafoneBd;"
                >19,99 € <sup><umefn id="UMEFN_229"></umefn></sup></span><strong>pro Monat.</strong><br>
                Ab dem 7. Monat nur 49,99 € pro Monat</p>
            </div>
          </div>

          <spacer setting="1" />
        </div>
        <div class="boxed">
          <button-element
            label="Zeig mir das Angebot"
            tifa="TIFA-379"
            type="dcomm_button"
            linkTo="/privatkunden/kombipakete/2play/internet-phone-1000/"
            :inverted="this.$data.window.width > 880"
          />
          <spacer setting="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spacer from '@/components/atoms/spacer.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'besit-aspot',
  components: {
    spacer,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  /* TODO replace A-Spot image with new version */
  background: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/2play/a-spot_desktop_wekeepyougoing_xl_visual.jpg),
    linear-gradient(270deg, #c2d4cc 49%, #241a0a 50%);
  background-repeat: no-repeat !important;
  background-position: calc(50% + 250px), center;
}
.image-container img {
  height: initial;
}
.richtext.section {
  width: 50%;
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
  .richtext.section {
    width: 100%;
  }
}
</style>
