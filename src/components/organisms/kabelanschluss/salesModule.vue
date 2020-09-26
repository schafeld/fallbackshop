<template>
  <module-wrapper
    :dark-bg="true"
    background="url('//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/TV/kabelanschluss-mann-fernbedienung-815x568-1@2x.png'), linear-gradient(45deg, #A50501, #E80000);"
    backgroundRepeat="no-repeat"
    backgroundPosition="right bottom"
    backgroundSize="50%, auto"
  >
  <p class="h1" style="color: #ffffff">Kabelanschluss</p>
    <div class="grid middle-grid column-grid-md">
      <div class="grid-col w-1of2 center-column-md">
        <div class="introparleft parsys">
          <div class="richtext section">
            <div class="dark-bg">
              <p class="h2">Die Basis für Deine TV- und Radio-Welt</p>
            </div>
          </div>
        </div>
        <ul class="check-list ">
          <li>Zahlreiche HD-Sender und SD-Sender inklusive<span class="tooltip js_tooltip bottom-tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Darunter viele öffentlich-rechtliche HD-Sender sowie eine Auswahl privater HD-Sender</span></span></li>
          <li>Umfassendes Angebot an Radiosendern in digitaler Qualität</li>
          <li>Stabiles Bild bei bei jedem Wetter durch innovative <a
              style="color: rgb(255,255,255);"
              href="https://www.unitymedia.de/privatkunden/beratung/persoenliche-beratung/kabel-vs-dsl"
            >Coax-Glasfaser-Technologie</a></li>

          <li>24 h technische Unterstützung</li>
        </ul>
      </div>
      <div class="grid-col w-1of2 center-column-md align-center"/>
    </div>
    <add-to-basket-button :skus="['DIGI_Kabelanschluss_1']" renderStyle="price-above"/>
  </module-wrapper>
</template>

<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
export default {
  components: {
    moduleWrapper,
    addToBasketButton
  }
}
</script>

<style>
</style>
