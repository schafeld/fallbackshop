<template>
  <div class="hd-option-landing-page">
    <sales-module />
    <product-carousel />
    <module-wrapper
      :dark-bg="false"
      background="#ffffff"
    >
      <faq-box>
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
import salesModule from '@/components/organisms/hdOption/salesModule.vue'
import productCarousel from '@/components/organisms/hdOption/productCarousel.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'
import faqBox from '@/components/organisms/faqBox.vue'

export default {
  components: {
    salesModule,
    productCarousel,
    faqBox,
    faqEntry,
    moduleWrapper
  }
}
</script>
