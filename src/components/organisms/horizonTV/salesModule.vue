<template>
  <module-wrapper :dark-bg="true" background="url('//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/TV/horizon-tv-frau-fernbedienung-815x558-1@2x.png'), linear-gradient(45deg, #A50501, #E80000);" backgroundRepeat="no-repeat" backgroundPosition="right bottom" backgroundSize="50%, auto">
    <div class="grid middle-grid column-grid-md">
      <div class="grid-col w-1of2 center-column-md">
        <div class="introparleft parsys">
          <div class="richtext section">
            <div class="dark-bg">
              <p class="h2">Der optimale Einstieg in Deine Entertainmentwelt</p>
            </div>
          </div>
        </div>
        <ul class="check-list ">
          <li>Live-TV und zeitversetztes Fernsehen mit dem Horizon HD-Recorder</li>
          <li>Entertainment-Allrounder für Aufnahmen, Apps, TV-Mediatheken uvm.</li>
          <li>Viele private Sender in HD genießen<span class="tooltip js_tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer"><a
                  style="color: green;"
                  data-action="Hyperlink"
                  href="/privatkunden/tv/tv-anschluss/hd-option/"
                >HD-Option</a> bereits in Horizon TV enthalten</span></span></li>
          <li>Zu Hause mobil fernsehen auf Tablet, Smartphone oder TV mit Horizon Go
            Free<span class="tooltip js_tooltip"><span class="tooltip-icon icon-info"></span><span class="tooltip-layer">Internet-Anschluss notwendig</span></span></li>
        </ul>
        <div class="intropar parsys">
        </div>
      </div>
      <div class="grid-col w-1of2 center-column-md align-right">
        <div class="introparright parsys">
        </div>
        <div class="image-wrapper">
        </div>
      </div>
    </div>
    <div class="grid column-grid-md center-column-md">
      <div class="grid-col w-1of1 center-column-md left-child">
        <add-to-basket-button renderStyle="price-above" sku="SA-HRZ_TV_0420_1"></add-to-basket-button>
      </div>
    </div>
    <div class="grid column-grid-md center-column-md">
      <div class="grid-col w-1of1 center-column-md">
        <div class="bottom parsys">
          <div class="spacer section">
            <div class="upc_spacer_height_2">
              <!---->
            </div>
          </div>
          <div class="richtext section">
            <div
              id="par_product_bottom_richtext"
              class=""
              style="word-wrap:break-word;"
            >
              <p>Angezeigter Preis gilt bei vorhandenem Kabelanschluss,<br> Anpassung erfolgt ggf. im Bestellprozess</p>
            </div>
          </div>
          <div class="richtext section">
            <div
              id="par_product_bottom_richtext_1287674588"
              class=""
              style="word-wrap:break-word;"
            >
              <p>Du bist bereits unser Kunde? Dann logge Dich ein:</p>
            </div>
          </div>
          <div class="login-button section">
            <div
              data-widget="CustomerShow"
              data-show-for-customer="false"
              class="login-btn-wrapper login-btn--dark"
            >
              <button
                type="button"
                onclick=""
                class="login-btn login-link js_scroll_top color-neutral-white"
              >Kunden-Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
