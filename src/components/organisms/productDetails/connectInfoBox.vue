<template>
  <module-wrapper background="linear-gradient(90deg, #fafafa, #fafafa)" :darkBg="false">
    <div class="section-header">
      <h2 class="h2">Unsere beste WLAN-Hardware: die Connect Box</h2>
    </div>
    <div class="section-body">
      <div class="modulContent parsys">
        <div class="ume-relative section">
          <div class="ume-compact grid middle-grid">
            <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md">
              <div class="gridcol parsys">
                <div class="richtext section">
                  <div class style="word-wrap:break-word;">
                    <ul class="check-list">
                      <li>Highspeed-Kabelrouter für Internet und Telefonie</li>
                      <li>Highspeed-Verbindung auch über WLAN</li>
                      <li>Gute Reichweite und Stabilität</li>
                      <li>
                        Intelligente vollautomatische Frequenzerkennung
                        <span
                          class="tooltip js_tooltip"
                        >
                          <span class="tooltip-icon icon-info"></span>
                          <span
                            class="tooltip-layer"
                          >Mit der Connect Box surfen Sie störungsfrei. Sie erkennt automatisch den besten WLAN-Frequenzkanal in Ihrer Umgebung</span>
                        </span>
                      </li>
                      <li>In drei Minuten angeschlossen</li>
                      <li>Modernes Design, unauffällige LEDs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-col w-1of2 w-1of1-sm center-column-sm w-1of1-md center-column-md">
              <div class="gridcol_0 parsys">
                <div class="image section">
                  <div style="text-align: center;">
                    <img
                      src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/tv/connect-box-l-500x480-1.png"
                      class="center"
                      alt
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  components: {
    moduleWrapper
  }
}
</script>

<style scoped>
.section-content {
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0e9a98, endColorstr=#08346c);
  background-position: right;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
