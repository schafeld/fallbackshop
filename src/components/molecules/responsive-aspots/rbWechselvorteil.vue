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
            <div
              id="par_aspot_aspot2_content_flexible_grid_gridcol_richtext"
              class=""
              style="word-wrap:break-word;"
            >
              <div class="dark-bg">
                <p class="h2a">Wechseln statt warten</p>
                <p class="body-style">Wechsel schon heute zu uns und nutz unsere<br> Produkte trotz laufendem DSL-Vertrag sofort. <sup>
                    <span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                        <strong>Rechtliche Hinweise</strong><br>
                        Kunden, die von einem anderen Anbieter zu uns wechseln, wird die monatliche Grundgebühr für Red Internet &amp; Phone Cable (nicht jedoch für Horizon TV und den dafür etwaig erforderlichen Kabelanschluss) bis zum Ende der Laufzeit des bisherigen Vertrages über den Festnetz-Telefonanschluss (Nachweis erforderlich), max. insgesamt 12 Monate erlassen.
                      </span></span></sup></p>
              </div>
            </div>
          </div>
          <spacer setting="4" />
          <spacer setting="4" />
        </div>
        <div class="boxed">
          <button-element
            label="Mehr erfahren"
            tifa="TIFA-381"
            type="dcomm_button"
            linkTo="/privatkunden/angebote/aktionen-und-kampagnen/wechseln/"
            :inverted="this.$data.window.width > 880"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spacer from '@/components/atoms/spacer.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'wechsel-vorteil-aspot',
  components: {
    spacer,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  background-image: url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/a-spot_desktop_wechselvorteil_april-2020.png),
    linear-gradient(45deg, #850002 10%, #ea0303 58%, #5a0000 100%) !important;
  background-position: calc(50% + 300px) calc(100% + 7px), center;
  background-size: auto 100%, auto;
  background-repeat: no-repeat;
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
