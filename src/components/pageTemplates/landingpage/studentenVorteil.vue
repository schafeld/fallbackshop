<template>
  <div class="studenten-aktion-page">
    <intro-stage />
    <module-wrapper :darkBg="false">
      <p
        class="h2a"
        style="text-align: center ; margin: auto; max-width: 760px;"
      >Highspeed-Internet mit bis zu 500 Mbit/s bestellen + Wunschgutschein von BestChoice sichern</p>
      <product-carousel />
    </module-wrapper>
    <module-wrapper :darkBg="false">
      <how-to-box />
    </module-wrapper>
    <module-wrapper :darkBg="false">
      <faq-box>
        <faq-entry question="Bei welchen Handelspartnern kann ich den Gutschein einlösen?">Du kannst deinen Gutschein bei über 200 Handelspartnern einlösen, z.B. bei Amazon, iTunes, Media Markt, Saturn, Douglas, Rossmann, Karstadt, Galeria Kaufhof, H&M, Tchibo, IKEA, Zalando u.v.m.</faq-entry>
        <faq-entry question="Kann ich als Azubi oder Student auch ein anderes Produkt bestellen?">Ja, du kannst grundsätzlich auch ein anderes Produkt bestellen. Allerdings erhältst du nur in Verbindung mit den o.g. Produkten einen Gutschein. Die Bestellung muss online über die Azubi- und Studentenaktionsseite erfolgen.</faq-entry>
        <faq-entry question="Kann ich die Azubi- und Studentenaktion mit anderen Prämienaktionen – beispielsweise Kunden werben Kunden – kombinieren?">Die Aktion ist nicht mit anderen Prämienaktionen kombinierbar.</faq-entry>
        <faq-entry question="Wann und wie erhalte ich meinen Gutschein?">Du erhältst den Gutschein ca. 4-6 Wochen nach Aktivierung deines Produktes an die von dir angegebene E-Mail-Adresse. Bitte stelle sicher, dass genügend Speicherplatz in deinem E-Mail-Postfach vorhanden ist.</faq-entry>
        <faq-entry question="Kann ich die Azubi- und Studentenaktion auch im Shop oder telefonisch in Anspruch nehmen?">Nein, die Azubi- und Studentenaktion gilt nur online auf unserer Azubi- und Studentenaktionsseite. Bei einer Bestellung im Shop oder bei einer telefonischen Bestellung erhältst du keinen Gutschein.</faq-entry>
        <faq-entry question="Ich habe meinen Gutschein nicht erhalten? Was muss ich jetzt tun?">In Einzelfällen kann die E-Mail mit dem Gutschein in deinem Spamfilter landen. Bitte prüfe zunächst deinen Spamordner. Außerdem ist es wichtig, dass dein Postfach genügend Speicherplatz hat, da sonst die E-Mail nicht ankommt. Im Falle des Nichterhalts kannst du dich gern an unseren Kundenservice wenden. Die Kontaktdaten findest du unter: www.unitymedia.de/kontakt</faq-entry>
        <faq-entry question="Ich habe den Gutschein erhalten. Was muss ich jetzt tun?">Deinen Gutschein kannst du auf www.einloesen.de/unitymedia. Dort kannst du deinen Gutscheincode eingeben und den Gutscheinwert in zahlreichen Online-Shops einlösen.</faq-entry>
      </faq-box>
    </module-wrapper>
  </div>
</template>
<script>
import introStage from '@/components/organisms/studentenVorteil/introStage.vue'
import howToBox from '@/components/organisms/studentenVorteil/howTo.vue'
import productCarousel from '@/components/organisms/studentenVorteil/productCarousel.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import faqBox from '@/components/organisms/faqBox.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'

export default {
  name: 'StudentenVorteil',
  components: {
    introStage,
    moduleWrapper,
    howToBox,
    faqBox,
    faqEntry,
    productCarousel
  }
}
</script>
