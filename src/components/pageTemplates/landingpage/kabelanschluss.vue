<template>
  <div class="kabelanschluss-landing-page">
    <sales-module />
    <module-wrapper
      :dark-bg="false"
      background="#ffffff"
    >
      <faq-box>
        <faq-entry question="Wo finde ich eine Übersicht über meine Sender im Kabelanschluss?">
          <p>Unter <a
              data-action="Hyperlink"
              href="https://www.unitymedia.de/privatkunden/hilfe_service/hilfe_themen/programmuebersicht/"
            >https://www.unitymedia.de/privatkunden/hilfe_service/hilfe_themen/programmuebersicht/</a> findet man eine Übersicht über alle Sender im Kabelanschluss bzw. in den jeweiligen TV-Paketen.</p>
        </faq-entry>
        <faq-entry question="Wo finde ich Informationen über neue Sender und der Durchführung von Senderdurchläufen?">
          <p>Informationen zu neuen Sendern und der Durchführung von Sendersuchläufen findest Du <a
              data-action="Hyperlink"
              href="/content/dcomm-unitymedia-de/de/privatkunden/hilfe_service/hilfe_themen/changeday.html"
            >hier</a>.</p>
        </faq-entry>
        <faq-entry question="Benötige ich eine TV-Hardware von euch zum Empfang von meinem Kabelanschluss-Sendern?">
          <p>Falls Du ein TV-Gerät mit integriertem Kabel-Tuner (DVB-C) oder einen DVC-C Receiver aus dem freien Handel nutzt, dann benötigst Du keine separate Hardware von uns. Eine Übersicht unserer TV-Hardware findest Du <a
              data-action="Hyperlink"
              href="/content/dcomm-unitymedia-de/de/privatkunden/tv/tv-anschluss/hardware/tschuess-analog-hallo-digital.html"
            >hier</a>.</p>
        </faq-entry>
        <faq-entry question="Unitymedia ist jetzt Vodafone">
          <p>Unitymedia und Vodafone sind jetzt eins! So finden Kunden bei uns eine noch größere Vielfalt an Angeboten. Feier mit uns den Zusammenschluss und profitiere von attraktiven Sonderkonditionen. Wir bieten Dir das Beste aus den Produkten von Unitymedia und Vodafone: zum Beispiel eine Vielzahl an <a
              data-action="Hyperlink"
              href="https://zuhauseplus.vodafone.de/internet-telefon/kabel/"
            >Kabel-Produkten</a> außerhalb von NRW, Hessen und BW.</p>
        </faq-entry>
      </faq-box>
    </module-wrapper>
  </div>
</template>
<script>
import salesModule from '@/components/organisms/kabelanschluss/salesModule.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'
import faqBox from '@/components/organisms/faqBox.vue'

export default {
  components: {
    salesModule,
    faqEntry,
    faqBox,
    moduleWrapper
  }
}
</script>
