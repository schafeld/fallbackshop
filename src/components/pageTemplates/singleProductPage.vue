<template>
  <div class="body">
    <div class="par parsys">
      <!-- TODO: Make product intro configurable through store product parameter? -->
      <product-intro
        :skus="skus"
        :gradient="productObject.gradient"
        mainPage="true"
        :product="productObject"
        v-if='!productObject.gigabit'
      />
      <product-intro-vodafone
        :skus="skus"
        mainPage="true"
        :product="productObject"
        v-if='productObject.gigabit'
      />
      <!-- TODO: Configure/fix promoCodes for CableMax. -->
      <vorteils-kommunikation-box-vodafone
        :bundleType="productObject.set"
        :gradient="productObject.gradient"
        :promotions="productObject.promoCodes"
      />
      <productPartials
        :title="productObject.title"
        :partials="{internet: productBundle.internet, telephone: productBundle.telephone, tv: productBundle.tv}"
        :gigabit="productObject.skus[0] === '2P_RIP_1000_1'? true : false"
      />

      <!-- TODO: Add module advertising CableMax + TV ("Kombinier Vodafone CableMax 1000 mit TV oder Mobilfunk") -->
      <banner-giga-kombi />

      <wifi-router v-if="productObject.hardware[0] === 'Vodafone-Station'"/>
      <connect-info-box v-if="productObject.hardware[0] === 'Connect-Box'"/>

      <horizon-hd-recorder-info-box
        v-if="productBundle.tv"
        :gradient="productObject.gradient"
      />

      <gigabit-speed v-if="productObject.skus[0] === '2P_RIP_1000_1'" />

      <online-vorteil-modul :onlineVorteil="productObject.onlinePromotionValue" v-if="productObject.onlinePromotionValue"/>

      <!-- TODO: Style component. -->
      <contract-details
        :product="productObject"
        :gradient="productObject.gradient"
        includeProductElements="limited"
        :background="productObject.gradient"
      />

      <!-- TODO: Style component. -->
      <wifispot-info-box :gradient="productObject.gradient" />

      <module-wrapper
        :background="productObject.gradient"
        :darkBg="true"
      >
        <faq-box
          :gradient="productObject.gradient"
          v-if="productObject.skus[0] !== '2P_RIP_1000_1'"
        >
          <faq-entry
            question="Was bedeutet Mbit/s?"
            answer="Datenübertragungsgeschwindigkeiten werden üblicherweise in Bit (Kilobit, Megabit) angegeben, auf Datenträgern gespeicherte Daten hingegen in Byte (Kilobyte, Megabyte). Dabei ist ein Byte in etwa das Achtfache eines Bits. Eine typische Internetverbindung (derzeit in Deutschland ~20 Megabit/s im Download) „schafft“ also genau 2,5 Megabyte pro Sekunde. Highspeed-Internetverbindungen von Unitymedia laden bis zu 125 Megabyte pro Sekunde (bei 1000 Mbit/s)."
          />
          <faq-entry
            question="Was ist das Besondere an der neuen Vodafone Station?"
            answer="Die Vodafone Station ist ein WLAN-Kabelrouter, der sowohl technisch als auch optisch die neuesten Qualitätsstandards erfüllt. Die Vodafone Station ist schnell und einfach zu installieren. Einmal angeschlossen, müssen Sie nichts weiter tun. Der Router verfügt über eine vollautomatische Frequenzerkennung und scannt Ihre Umgebung nach der optimalen Funkfrequenz, um störende Einflüsse anderer Wlan-Access Points zu minimieren. Zudem unterstützt die Vodafone Station den aktuellen WLAN AC-Standard und bietet die Möglichkeit der parallelen Nutzung zweier Frequenzbänder (2,4 GHz und 5 GHz). Dies sorgt für sehr gute Bandbreite und Stabilität.<br><br>
                    In der Praxis können Sie so Übertragungsgeschwindigkeiten von bis zu 400 Mbit/s erreichen. Bitte haben Sie Verständnis dafür, dass wir Ihnen die maximale Geschwindigkeit des WLANs nicht garantieren können, da diese sehr von den jeweiligen Begebenheiten des Gebäudes abhängen."
          />
          <faq-entry
            question="In meinem Haus verbinden sich immer mehrere und immer mehr Geräte mit dem WLAN. Welche Auswirkungen hat das?"
            answer="Je mehr Geräte sich mit dem WLAN verbinden, desto größer ist der Datenaustausch und umso wichtiger ist eine hohe Bandbreite. Häufig werden im Hintergrund automatische Updates geladen, die der Nutzer gar nicht bemerkt. Bei einer geringen Bandbreite kommt es dann z.B. zu langen Seitenladezeiten oder zu Abbrüchen beim Videostreaming. Die Qualität des WLAN und die Bandbreite sind deshalb entscheidend für eine gute und vor allem stabile Internetverbindung und ein ungestörtes Surfvergnügen. Unitymedia liefert mit allen Produkten Geräte, die die maximalen Bandbreiten auch beim WLAN unterstützen."
          />
          <faq-entry
            question="Kann ich wirklich unbegrenzt surfen, oder gibt es eine Höchstgrenze für den Datenabruf?"
            answer="Wir garantieren einen faktisch unbegrenzten und ungedrosselten Datenaustausch mit unseren Servern. Dies gilt bis zu dem Punkt, an dem eine offensichtlich gewerbliche und/oder illegale Nutzung stattfindet, etwa bei ununterbrochenen Down- und Uploads über einen längeren Zeitraum."
          />
          <faq-entry
            question="Upload-Geschwindigkeiten sind meist viel geringer als Download-Geschwindigkeiten. Ist der Upload-Speed nicht so wichtig?"
            answer="Im Normalfall werden ca. 8 mal mehr Daten empfangen als versendet, sodass die Download-Geschwindigkeit für das Nutzungserlebnis die entscheidende Größe ist. Eine hohe Upload-Bandbreite lohnt sich aber für solche Nutzer, die regelmäßig große Datenmengen über das Internet versenden (z. B. Upload von Bildern oder Multimedia in die Cloud, Bespielen eines Firmenlaufwerks über VPN, Versand großer E-Mail Anhänge etc.)."
          />
          <faq-entry
            question="Unitymedia ist ja ein Kabelanbieter. Benötige ich einen Kabelanschluss, um ein Vodafone Red Internet and Phone-Produkt von Unitymedia zu nutzen?"
            answer="Anders als bei Fernsehprodukten benötigen Sie für die Nutzung von Internet und Festnetztelefonie keinen Kabelanschlussvertrag (d. h., es entstehen keine monatlichen Zusatzkosten durch Bereitstellung des Anschlusses), es muss lediglich ein Kabelanschluss an Ihrem Wohnort verfügbar sein. Zum Verfügbarkeitscheck gelangen Sie
                                <a
                                  href='/privatkunden/beratung/unser-kunde-werden/verfuegbarkeit-pruefen/'
                                  data-upc-tooltip-type='none'
                                  data-action='Hyperlink'
                                >hier</a>."
          />
          <faq-entry
            question="Bekomme ich Hilfe bei der Installation?"
            answer="Ja! Sofern Sie einen Neuanschluss beauftragen oder Ihre Anschlussdosen erneuert werden müssen, wird die Installation von einem Service-Techniker durchgeführt werden. Darüber werden Sie automatisch benachrichtigt, unmittelbar nach Ihrer Bestellung. Sollten in Ihrem Haus die nötigen Anschlüsse schon verlegt sein, können Sie Ihre Hardware ganz einfach selbst installieren."
          />
          <faq-entry
            question="Warum werden Internetgeschwindigkeiten in „bis zu“ angegeben?"
            answer="Down- und Upload-Geschwindigkeiten variieren immer zumindest geringfügig, sodass nur die Beschreibung „bis zu“ rechtlich zulässig ist. Allerdings kann bei Verwendung von Koaxialkabeln (Kabelnetz) die Leistungsgüte besser garantiert werden als bei der Verwendung von Telefonkabeln (DSL-Netz), da Koaxialkabel mehrfach umschirmt sind, und die Leitung somit viel weniger störanfällig ist. Auch die Entfernung der Endkunden vom Verteilerkasten (dem sogenannten Hub) vermindert im Kabelnetz die Bandbreiten nur geringfügig."
          />
        </faq-box>
        <faq-box
          :gradient="productObject.gradient"
          v-else
        >
          <faq-entry
            question="Seit wann ist die Gigabit Geschwindigkeit bei Unitymedia verfügbar?"
            answer="Zum 07. Mai 2018 hat Unitymedia eine Geschwindigkeit von bis zu 1.000 Mbit/s eingeführt: Bochum startete als erste deutsche Stadt ins Gigabit-Zeitalter. Für den Tempozuwachs hat Unitymedia sein glasfaserbasiertes Kabelnetz in Bochum mit gigabitfähigen Netzelementen ausgestattet – und damit als erster Kabelnetzbetreiber Deutschlands den neuen Übertragungsstandard DOCSIS 3.1 für die Kunden aktiviert."
          />
          <faq-entry
            question="Wie entwickelt sich die Verfügbarkeit von Gigabit-Geschwindigkeiten?"
            answer="Die neue Gigabit Speed-Bandbreite ist noch nicht flächendeckend verfügbar. Nach Bochum wird nun Frankfurt Gigabit City. Ab dem 31.10.2018 haben 380.000 Frankfurter Haushalte – das sind rund 90 Prozent aller Frankfurter Haushalte – Zugang zu Gigabit-Geschwindigkeiten. Im Dezember werden Köln und Düsseldorf ins Gigabit-Zeitalter starten."
          />
          <faq-entry
            question="Wo kann die Verfügbarkeit geprüft werden?"
            answer="Interessenten können die Verfügbarkeit selbst auf der Unitymedia Webseite unter https://www.unitymedia.de/gigabit prüfen. Zudem kann die Verfügbarkeit in den Unitymedia Stores, im Fachhandel und über die Unitymedia Hotline geprüft werden."
          />
          <faq-entry
            question="Wohin können sich Interessenten wenden?"
            answer="Interessenten, denen die bis zu 1.000 Mbit/s noch nicht zur Verfügung stehen, können sich online unter www.unitymedia.de/gigabit vorregistrieren. Wir informieren diese, sobald Gigabit-Geschwindigkeit an der angegebenen Adresse verfügbar ist."
          />
          <faq-entry
            question="Welche Voraussetzungen müssen Endgeräte erfüllen, um die neue Geschwindigkeit optimal nutzen zu können?"
            answer="PCs und Laptops müssen über einen modernen Gigabit Ethernet Port verfügen, der Bandbreiten bis zu 1.000 Mbit/s unterstützt. Fast Ethernet Ports unterstützen lediglich Geschwindigkeiten von bis zu 100 Mbit/s. Empfehlenswert ist ein Computer mit leistungsstarker Hardware und einem aktuellen (64Bit) Betriebssystem. Der verwendete Prozessor sollte über mindestens 2 Kerne mit einer Taktrate größer 2.8 GHz sowie schnellen Arbeitsspeicher mit mehr als 4 GB verfügen. Um die neue Speed-Klasse mit dem Smartphone oder Tablet optimal nutzen zu können, wird ein Gerät benötigt, das den WLAN AC Standard, idealerweise mit einer 4x4 MIMO Antenne, unterstützt."
          />
          <faq-entry
            question="Welches Modem unterstützt die neue Speed-Klasse?"
            answer="Für Internet-Geschwindigkeit von bis zu 1.000 Mbit/s ist ein passendes Hochleistungsmodem erforderlich, das den Standard DOCSIS 3.1 unterstützt. Wir bieten unseren Kunden im Rahmen unseres Gigabit-Produkts gratis die FRITZ!Box 6591 Cable an."
          />
        </faq-box>
      </module-wrapper>

      <!-- TODO: Style component. -->
      <div>
        <mgm-box
          :product="productObject"
          gradient="linear-gradient(90deg, #ffffff, #ffffff)"
        />
      </div>
      <section-promo-dsl-switch
        v-if="productObject.promoCodes.findIndex(i => i.promoCode === 'wechselvorteil') > -1"
        :family="productObject.family"
      />
      <static-dialog-container />
    </div>
  </div>
</template>
<script>
import productIntro from '@/components/organisms/productintro.vue'
import ProductIntroVodafone from '@/components/organisms/ProductIntroVodafone.vue'
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import contractDetails from '@/components/organisms/contractDetails.vue'
import horizonHdRecorderInfoBox from '@/components/organisms/horizonHDRecorderInfoBox.vue'
import wifispotInfoBox from '@/components/organisms/wifispotInfoBox.vue'
import faqBox from '@/components/organisms/faqBox.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'
import mgmBox from '@/components/organisms/mgmBox.vue'
import staticDialogContainer from '@/components/organisms/staticDialogContainer.vue'
import vorteilsKommunikationBoxVodafone from '@/components/organisms/VorteilsKommunikationBoxVodafone.vue'
import bannerGigaKombi from '@/components/organisms/BannerGigaKombi.vue'
import sectionPromoDslSwitch from '@/components/organisms/SectionPromoDslSwitch.vue'
import onlineVorteilModul from '@/components/organisms/onlineVorteilModul.vue'
import gigabitSpeed from '@/components/organisms/productDetails/gigabitSpeed.vue'
import productPartials from '@/components/organisms/productDetails/productPartials.vue'
import wifiRouter from '@/components/organisms/productDetails/wifiRouter.vue'
import connectInfoBox from '@/components/organisms/productDetails/connectInfoBox.vue'

export default {
  components: {
    productIntro,
    ProductIntroVodafone,
    moduleWrapper,
    contractDetails,
    horizonHdRecorderInfoBox,
    wifispotInfoBox,
    faqBox,
    faqEntry,
    mgmBox,
    staticDialogContainer,
    vorteilsKommunikationBoxVodafone,
    bannerGigaKombi,
    sectionPromoDslSwitch,
    onlineVorteilModul,
    wifiRouter,
    gigabitSpeed,
    productPartials,
    connectInfoBox
  },
  props: {
    skus: {
      type: Array,
      required: true
    }
  },
  computed: {
    productObject () {
      return this.$store.getters.getProduct(this.skus)
    },
    productBundle () {
      let tempProduct = this.$store.getters.getSetinfoBySettitle(this.productObject.set)
      if (tempProduct) {
        return tempProduct
      } else {
        console.log('unable to find bundleInfo based on SKU: ' + this.skus)
        return {}
      }
    }
  }
}
</script>

<style>
/* Style "Wechselererinnerung" dialog, but not basket overlay! */
.discovery-body .dialog-box {
  background-color: #eff2fb;
}
</style>
