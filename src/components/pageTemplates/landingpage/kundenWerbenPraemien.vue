<template>
  <div class="body">
    <div class="par parsys">
      <div class="product parbase section">
        <div class="intro-section light-bg header-only" data-title="Kunden werben" data-sku="dummy">
          <div class="section-content" style>
            <div class="section-header intro-section-header js_sticky">
              <div class="intro-section-header__backdrop">
                <h1 class="h1">Prämienübersicht</h1>
                <div class="horizontal_nav horizontalNav parbase"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <module-wrapper :darkBg="false">
        <spacer setting="5"/>
        <div class="richtext section">
          <div class style="word-wrap:break-word;">
            <div style="padding-left: 10%; padding-right: 10%;">
              <p class="h2">Weiterempfehlen &amp; Prämie kassieren!</p>
              <p>
                Wählen Sie ein Produkt aus der Liste aus, empfehlen Sie es weiter – fertig. Folgt Ihr Freund Ihrer Empfehlung, indem er auf den in Ihrer Empfehlungsmail enthaltenen Link klickt und direkt danach bestellt, so erhalten Sie die entsprechende Prämie nach erfolgreicher Aktivierung des Anschlusses. Sofern Sie mehr als eine erfolgreiche Empfehlung innerhalb von 6 Monaten aussprechen, so erhöht sich ihre Prämie je nach empfohlenem Produkt auf bis zu 180 €
                <a href="https://www.unitymedia.de/privatkunden/angebote/aktionen/kunden-werben/teilnahmebedingungen/">  (siehe Teilnahmebedingungen)</a>.
              </p>
            </div>
          </div>
        </div>
        <spacer setting="5"/>
        <mgm-table-of-content/>
      </module-wrapper>
    </div>
  </div>
</template>
<script>
import mgmTableOfContent from '@/components/organisms/mgm/mgmTableOfContent.vue'
import spacer from '@/components/atoms/spacer.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'

export default {
  name: 'kundenWerbenPraemien',
  components: {
    mgmTableOfContent,
    spacer,
    moduleWrapper
  }
}
</script>
