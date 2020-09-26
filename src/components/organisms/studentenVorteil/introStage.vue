<template>
  <module-wrapper :darkBg="false" background="url('//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Aktuelles/studenten/studenten_merged.png'), linear-gradient(180deg, #FFFFFF, #FFFFFF);" backgroundRepeat="no-repeat" backgroundPosition="center bottom">
    <spacer setting="4"/>
    <div class="richtext section">
      <div style="word-wrap:break-word;">
        <p
          class="h1"
          style="margin: 0 auto; text-align: center; color: #ee0000;"
        >Internet-Tarife für Studenten und Azubis</p>
      </div>
    </div>
    <spacer setting="1"/>
    <div class="richtext section">
      <div style="word-wrap:break-word;">
        <p class="h2" style="text-align: center; font-family: VodafoneLt;">
          Bestell Highspeed-Internet mit bis zu 500 Mbit/s<br> und sicher Dir einen Wunschgutschein von BestChoice
        </p>
      </div>
    </div>
    <div class="wechselvorteil"></div>
  </module-wrapper>
</template>

<script>
import spacer from '@/components/atoms/spacer.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  components: {
    spacer,
    moduleWrapper
  }
}
</script>

<style>
.wechselvorteil {
  padding-bottom: 500px;
}

@media screen and (max-width: 1359px) {
  .section-content.wechselvorteilBg {
    background-size: auto !important;
  }
}

@media screen and (max-width: 919px) {
  .section-content.wechselvorteilBg {
    background-size: 100% auto !important;
  }

  .wechselvorteil {
    padding-bottom: 60vw;
  }
}
</style>
