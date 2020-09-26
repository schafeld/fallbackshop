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
              id="par_aspot_aspot5_content_flexible_grid_gridcol_richtext"
              class=""
              style="word-wrap:break-word;"
            >
              <div>
                <p class="h2a">Gutes Internet war<br>
                  noch nie so wichtig</p>
                <p class="body-style">Wechseln Sie jetzt in unser Gigabit-Netz und<br>
                  surfen bis zu 4 x schneller als mit DSL.<tooltip content="Ausgehend von den maximalen Download-Geschwindigkeiten von bis zu 1000 Mbit/s bei Kabel und 250 Mbit/s bei DSL."></tooltip><br>
                </p>

              </div>
            </div>
          </div>
          <spacer setting="3" />
          <spacer setting="4" />
        </div>
        <div class="boxed">
          <button-element
            label="Zu Vodafone Business"
            tifa="TIFA-394"
            type="dcomm_button"
            href="https://zuhauseplus.vodafone.de/business/businesscable"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spacer from '@/components/atoms/spacer.vue'
import tooltip from '@/components/atoms/tooltip.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'business-aspot',
  components: {
    spacer,
    tooltip,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  background-image: url("https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/kampagne-mai-soho-aspot-3140x530-1.png"),
    linear-gradient(90deg, #fafafa 0%, #fafafa 100%);
  background-repeat: no-repeat;
  background-position: calc(50%);
}
.image-container img {
  height: initial;
}
img {
  align-self: center;
}

@media screen and (max-width: 879px) {
  .image {
    background-size: auto 100%, auto;
  }
  .dark-bg {
    color: #333333;
  }
}
</style>
