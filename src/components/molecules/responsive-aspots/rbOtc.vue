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
              <p class="h2a">Nur bis 30.04.: 0 € Aktivierungsgebühr</p>
              <p class="body-style">
                <span style="line-height: 38.0px;">Sicher Dir jetzt Dein Red Internet and Phone-Paket und spar</span>
                <br> <span style="font-size: 36.0px;font-family: VodafoneBd;">69,99 € <sup>
                    <span class="tooltip js_tooltip bottom-tooltip">
                      <span class="btn asterisk-orb tooltip-icon"></span>
                      <span class="tooltip-layer">Nur noch bis zum 30.04.2020
                        entfällt die einmalige Aktivierungsgebühr in Höhe von 69,99
                        €
                        Aktivierungsgebühr</span></span></sup></span>Aktivierungsgebühr</p>
            </div>
          </div>
          <spacer setting="3" />
          <spacer setting="3" />
        </div>
        <div class="boxed">
          <button-element
            label="Zeig mir die Angebote"
            tifa="TIFA-383"
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
import spacer from '@/components/atoms/spacer.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'otc-aspot',
  components: {
    spacer,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  background-image: url(//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/UMDE_desktop_otc_promotion.png),
    linear-gradient(45deg, #850002 10%, #ea0303 58%, #5a0000 100%);
  background-repeat: no-repeat;
  background-position: calc(50% + 300px) bottom, center;
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
