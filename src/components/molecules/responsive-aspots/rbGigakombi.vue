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
              id="par_aspot_aspot4_content_richtext"
              class=""
              style="word-wrap:break-word;"
            >
              <div class="dark-bg">
                <p class="h2a">Spar mit der GigaKombi doppelt</p>
              </div>
            </div>
          </div>
          <div class="spacer section">
            <div class="upc_spacer_height_2">
              <!---->
            </div>
          </div>
          <div class="ume-relative section">
            <div class="ume-compact grid ">
              <div class="grid-col w-1of4 hide-on-mobile">
                <div class="gridcol parsys">
                  <div class="richtext section">
                    <div
                      id="par_aspot_aspot4_content_flexible_grid_gridcol_richtext"
                      class=""
                      style="word-wrap:break-word;"
                    >
                      <p><img src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/GK_line_mobile_internet_phone_white_RGB.svg"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="grid-col"
                :class="{'w-3of4':this.$data.window.width > 880, 'w-1of1':this.$data.window.width < 879}"
              >
                <div class="gridcol_0 parsys">
                  <div class="richtext section">
                    <div
                      id="par_aspot_aspot4_content_flexible_grid_gridcol_0_richtext"
                      class=""
                      style="word-wrap:break-word;"
                    >
                      <div class="dark-bg">
                        <p class="body-style">Kombiniere Mobilfunk mit Internet und<br> Festnetz. Deine Vorteile: Dauerhaft 10 €<br> Rabatt und 5 GB extra.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <spacer setting="4" />
        </div>
        <div class="boxed">
          <button-element
            label="Jetzt Angebot sichern"
            tifa="TIFA-380"
            type="dcomm_button"
            href="/privatkunden/mobil/mobilfunk/gigakombi/"
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
  name: 'gigakombi-aspot',
  components: {
    spacer,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  background-image: url(//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/a-spot_um_desktop_vodafone2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
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
  .grid-col.w-1of4.hide-on-mobile {
    display: none;
  }
  .grid-col {
    padding: 0px;
  }
}
</style>
