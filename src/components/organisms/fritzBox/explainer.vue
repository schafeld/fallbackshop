<template>
  <module-wrapper
    background="linear-gradient(180deg, #0092D8, #005A9E);"
    :darkBg="true"
    :noMargin="false"
  >
    <div class="ume-relative section">
      <div class="ume-compact grid middle-grid">
        <div class="grid-col w-1of2 w-1of1-sm w-1of2-md">
          <div class="gridcol parsys">
            <div class="image section">
              <div style="text-align: center;">
                <img
                  src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/Bestandskunden/img-wlan-mesh-8.png"
                  class="center"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid-col w-1of2 w-1of1-sm w-1of2-md">
          <div class="gridcol_0 parsys">
            <div class="richtext section">
              <div style="word-wrap:break-word;">
                <p class="h2">
                  Was bedeutet WLAN Mesh?
                  <br />
                </p>
                <p
                  class="h4"
                >Mit WLAN Mesh können Sie Ihre FRITZ!Box und WLAN Erweiterungen wie z.B: Powerline 1260E WLAN Set und WLAN Repeater 1750E einfach zu einem Netzwerk verbinden. Durch die Kombination erhalten Sie eine optimierte WLAN Leistung.</p>
                <p
                  class="h4"
                >Dadurch surfen Sie überall Zuhause mit Höchstgeschwindigkeit und genießen Ihre multimediainhalte: HD-Fernsehen, Musik, Videos und Fotos lassen sich flexibel abrufen und abspielen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <komfort-teaser />
    <faq-box>
      <faq-entry question="Was ist der Unterschied zwischen einem Repeater und Powerline?">
        <p>Die Powerline-Technik nutz vorhandene Stromleitungen, um zwischen den beiden Powerline-Adaptern des FRITZ!Powerline 1260E WLAN Sets eine Netzwerkverbindung aufzubauen. Dazu wird ein Powerline Adapter in eine Steckdose bei der FRITZ!Box gesteckt per Netzwerkkabel mit dieser verbunden. Der zweite Powerline Adapter mit integriertem WLAN wird dort in eine Steckdose gesteckt, wo Sie das zusätzliche WLAN Signal benötigen.</p>
        <p>Auf diese Weise können größere Distanzen oder auch Etagen überbrückt werden, um WLAN auch in bisher unerreichbaren Ecken der Wohnung oder des Hauses verfügbar zu machen. Die erreichbare Geschwindigkeit hängt dabei von der Länge und Beschaffenheit der Stromleitungen sowie Störsignalen anderer elektrischer Geräte ab.</p>
        <p>Der WLAN-Repeater hingegen wird mit dem WLAN-Funknetz der FRITZ!Box verbunden und stellt dann selber ein weiteres WLAN-Funknetz zur Verfügung, über das WLAN-Geräte auf Ihr Heimnetz zugreifen können. Das Signal des bestehenden Funknetzes wird vom WLAN-Repeater somit nicht verstärkt, sondern wiederholt (engl. "repeated").</p>
        <p>Da der WLAN-Repeater mit dem Funknetz des WLAN-Routers verbunden ist, wird er an einer Stelle positioniert, an der er das WLAN-Signal des Routers in guter Qualität empfangen kann. Repeater eignen sich daher insbesondere, wenn geringere Abstände überbrückt werden sollen.</p>
        <p>Hinweis: bei Repeatern spricht man häufig davon, dass die Bandbreite halbiert wird. Dies liegt daran, dass diese Repeater nur über eine einzelne Sende- und Empfangseinheit verfügen und das Senden und Empfangen von Daten nur nacheinander erfolgen kann. Da der FRITZ!Repeater 1750E zwei Sende- und Empfangseinheiten besitz und das Crossband Repeating unterstützt, trifft diese Aussage nicht zu.</p>
      </faq-entry>
      <faq-entry
        question="Kann ich mehrere WLAN-Repeater einsetzen?"
      >Ja, mehrere WLAN-Repeater sind möglich. Entweder werden diese direkt mit der FRITZ!Box verbunden, um die Reichweite in verschiedene Richtungen zu erhöhen oder sie werden miteinander verbunden (WLAN-Reihenschaltung), um die Reichweite in eine bestimmte Richtung zu erhöhen.</faq-entry>
      <faq-entry
        question="Kann ich FRITZ!Repeater und FRITZ!Powerline kombinieren?"
      >Ja, Sie können das WLAN individuell mit beiden Zubehörgeräten erweitern und sie mit der intelligenten WLAN Mesh Technologie von AVM zu einem großen Heimnetz zusammenschließen</faq-entry>
      <faq-entry question="An welcher Stelle positioniere ich einen WLAN-Repeater?">
        <p>Wenn der WLAN-Repeater über WLAN mit dem WLAN-Router verbunden ist, muss er sich innerhalb der Reichweite des WLAN-Funknetzes befinden, damit sich die beiden Funknetze überlappen. Da der WLAN-Repeater mit dem Funknetz des WLAN-Routers verbunden ist, wird er an einer Stelle positioniert, an der er das WLAN-Signal des Routers in guter Qualität empfangen kann.</p>
        <p>Optimal ist eine Stelle, an der sich zwischen ihm, dem WLAN-Router und anderen WLAN-Geräten möglichst wenige Hindernisse befinden. Besonders metallische oder wasserhaltige Objekte, wie z.B. Heizungskörper, ein Kühlschrank oder auch Zimmerpflanzen, reduzieren die Qualität des WLAN-Signals deutlich. Ein WLAN-Repeater sollte zudem entfernt zu anderen Funksendern, wie z.B. einer Mikrowelle, einem Babyfon, Funklautsprechern oder Bluetooth-Geräten positioniert werden.</p>
        <p>Im Betrieb als WLAN-Brücke lässt sich die Qualität der WLAN-Verbindung zwischen FRITZ!WLAN Repeater und FRITZ!Box an den Signalstärke-LEDs des Repeaters ablesen. Positionieren Sie den Repeater an einem Ort, an dem mindestens drei der fünf LEDs leuchten.</p>
        <p>Hinweis: Sie können mit FRITZ!App WLAN ganz einfach den optimalen Ort für FRITZ!Repeater ermitteln.</p>
      </faq-entry>
      <faq-entry
        question="Was sind die technischen Voraussetzungen und Grenzen zur Verwendung von Powerline?"
      >
        <p>Powerline funktioniert in der Regel im gesamten Stromnetz eines Hauses / einer Wohnung, egal ob Alt- oder Neubau. Dabei muss es sich um ein zusammenhängendes Leitungsnetz handeln, zudem ist zu beachten, dass Leitungslängen von 300 Metern nicht überschritten werden können. Je länger die Leitungswege sind, desto geringer wird die erreichbare Bandbreite.</p>
        <p>Unterschiedliche Phasen sind kein Hinderungsgrund Powerline zu verwenden. Sicherungskasten, FI-Schalter oder Stromzähler stellen zwar eine große Dämpfung für das Signal dar, blockieren es jedoch nicht in jedem Fall.</p>
        <p>Die Verbindung zwischen den FRITZ!Powerline-Adaptern wird mit einem individuellen Kennwort (AES-128-Bit) verschlüsselt und ist damit vor dem Zugriff durch Unbefugte geschützt.</p>
      </faq-entry>
      <faq-entry question="Was ist WLAN Mesh?">
        <p>
          <strong>Die zentralen Vorteile von WLAN Mesh sind:</strong>
        </p>
        <p>
          <strong>Einfache Einrichtung per Tastendruck</strong>
          <br />Die Einbindung eines neuen FRITZ!-Produktes ins Mesh ist kinderleicht: Einfach jeweils an der FRITZ!Box (Mesh Master) und dem neuen FRITZ!-Produkt die Connect- bzw. WPS-Taste drücken - fertig!
        </p>
        <p>
          <strong>Automatischer Abgleich aller WLAN-Einstellungen</strong>
          <br />Die FRITZ!Box überträgt ihre WLAN-Einstellungen (z.B. Zugangsdaten, Gastzugang, Zeitschaltung) auf die anderen FRITZ!-Produkte im Heimnetz. So müssen Sie an Ihren Smartphones, Tablets und Notebooks nur eine einzige WLAN-Verbindung einrichten, um über jedes FRITZ!-Produkt Zugriff auf das Heimnetz und den Internetzugang Ihrer FRITZ!Box zu erhalten.
        </p>
        <p>
          <strong>Zentrale Übersicht</strong>
          <br />Die Mesh-Übersicht Ihrer FRITZ!Box informiert Sie jederzeit, welche Geräte im Heim- und Gastnetz gerade aktiv sind, wie diese miteinander verbunden sind und welche Übertragungsgeschwindigkeiten über die einzelnen Verbindungen zur Verfügung stehen. Und sollte für ein FRITZ!-Produkt ein Update bereitstehen, können Sie dieses direkt über die Mesh-Übersicht per Mausklick installieren.
        </p>
      </faq-entry>
      <faq-entry question="Wo finde ich Tipps zur Optimierung des WLANs?">
        Auf
        <button-element
          type="hyperlink-inverted"
          href="https://www.unitymedia.de/privatkunden/hilfe_service/hilfe_themen/wlan/"
          label="dieser Seite"
        />sind zahlreiche Tipps und Tricks zum Thema WLAN zu finden.
      </faq-entry>
    </faq-box>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
import komfortTeaser from '@/components/organisms/wifiExtender/komfortTeaser.vue'
import faqBox from '@/components/organisms/faqBox.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'

export default {
  name: 'connectBooster',
  components: {
    moduleWrapper,
    buttonElement,
    komfortTeaser,
    faqBox,
    faqEntry
  }
}
</script>
