<template>
  <module-wrapper :dark-bg="false" background="#ffffff">
    <faq-box>
      <faq-entry
        question="Wie funktioniert eure Videothek?"
        answer=" In unserer Videothek kannst du Filme und Sendungen abrufen, wann immer Du willst. Wähle aus einer Vielzahl aktueller Hollywood-Blockbuster, einer spannenden Auswahl weiterer Filme sowie Serien und Dokumentationen. Einfach über das Menü Deiner Horizon Box auf die Videothek zugreifen, Titel einmal leihen und bis zu 48 Stunden ansehen. Die Abrechnung erfolgt automatisch über Deine Rechnung. Du zahlst kein Abo, sondern nur das, was Du siehst."
      />
      <faq-entry
        question="Kann ich das laufende Fernsehprogramm pausieren und spulen?"
        answer=" Wenn Du die Chipstüte in der Küche vergessen hast, kannst Du mit dem Horizon HD Recorder das laufende Programm anhalten. Drück einfach die Taste Play-/Pause auf der Horizon-Fernbedienung. Du hast vergessen, die Sendung anzuhalten? Der Horizon HD Recorder nimmt jede Sendung, die Du anschaust, automatisch auf. Mithilfe der Rückspultasten kannst Du eine Sendung zurückspulen. Szene überspringen? Wenn Du eine Sendung zeitversetzt abspielen, kannst Du diese vorspulen. Durch mehrmaliges Drücken der Vorspultasten wird die Spul-Geschwindigkeit schrittweise erhöht. Das funktioniert auch mit der Rückspultaste. Hinweis: Einige Sender lassen aus lizenzrechtlichen Gründen das Vorspulen und / oder Vorspringen nicht zu."
      />
      <faq-entry
        question="Kann ich eine Liste meiner Lieblingssender anlegen?"
        answer="Ja, mit Hilfe einer Favoritenliste siehst Du nur noch Deine personalisierte Senderliste. "
      />
      <faq-entry
        question="Kann ich Sendungen mit meinem Horizon HD Recorder aufnehmen?"
        answer=" Ja, Du kannst mit dem Horizon HD Recorder bis zu 4 Sendungen gleichzeitig aufnehmen. Entweder nimmst Du eine laufende Sendung oder eine zukünftige Sendung auf.<br><strong>Unser Tipp:</strong> Mit Horizon Go Free kannst Du Aufnahmen auch von unterwegs programmieren. "
      />
      <faq-entry
        question="Was ist Horizon Go Free oder Horizon Go?"
        answer="Horizon Go ist unser Internet Streaming Angebot. Mit der Horizon Go App (für iOS, Android und Windows 10) und der Horizon Go Website (für alle gängigen Browser) streamst Du online Dein TV-Programme und rufst Filme, Serien aus Deinen gebuchten Paketen und Shows aus den TV-Archiven ab. Horizon Go bietet 2 Produktvarianten:<br>
                <br>
                <strong>Horizon Go Free ist Bestandteil von Horizon TV</strong> und bietet online TV zuhause auf dem Tablet, Smartphone, Laptop oder auch Übertragung auf einen Fernseher (ohne Kabelverbindung) möglich durch Chromecast oder Airplay Unterstützung. Mit Funktionen wie Live-TV- und TV-Archiv-Streaming (nur unserem WLAN Netz), und auch von unterwegs TV-Programm, Aufnahmefunktion für Horizon HD Recorder zuhause.<br>
                <strong>Horizon Go als Zubuchoption</strong> für 4,99€ monatlich bietet Dir zusätzlich ca. 80% der Live-TV Inhalte* sowie alle TV-Archiv Inhalte auch unterwegs (andere Internetanbieter oder Mobilfunknetz). Ab dem 1. April auch in allen Mitgliedstaaten der EU.<br>
                <br>
                Du kannst Horizon Go Free und Horizon Go über die Horizon Go App auf dem Tablet oder Smartphone oder auf dem Laptop über www.horizon.tv nutzen.<br>
                <br>
                * Einige Sender wie z.B. die Sender der RTL Gruppe oder Pro7Sat1 HD Sender sind auch mit der Zubuchoption in Fremdnetzten nicht verfügbar.<br>
                <br>
                <strong>Wichtig:</strong><br>
                Bitte denke daran, dass TV- und Videothek-Funktionen von Horizon Go nur für unsere Kunden zur Verfügung stehen, die über einen Kabelanschluss verfügen. Für Horizon Go Free ist eine Verbindung mit unserem WLAN Netz notwendig. "
      />
      <faq-entry
        question="Was sind Apps für den Horizon HD Recorder?"
        answer="Die Apps auf dem Horizon HD Recorder bieten Dir die Möglichkeit speziell ans TV angepasste Inhalte für Spaß, Information und Unterhaltung zu nutzen. Greife über Deinen Horizon HD Recorder kostenfrei auf beliebte Apps wie Netflix, Deezer, Baeble Music, wetter.com und Fussball Navigator zu und erlebe so App-Entertainment auf Deinem Fernseher."
      />
      <faq-entry
        question="Was sind TV-Mediatheken?"
        answer="Bereits gelaufene Programme von RTL, VOX, ProSieben, SAT.1 und Co. stehen Dir in den TV-Mediatheken zum Später-Schauen kostenfrei zur Verfügung."
      />
      <faq-entry
        question="Wie viele Sendungen kann ich gleichzeitig aufnehmen?"
        answer="Du kannst bis zu 4 Sendungen gleichzeitig aufnehmen. Wird die Anzahl gleichzeitig möglicher Aufnahmen überschritten, blendet Dein Horizon HD Recorder einen Hinweis ein."
      />
    </faq-box>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
import faqEntry from '@/components/molecules/faqEntry.vue'
import faqBox from '@/components/organisms/faqBox.vue'
export default {
  components: {
    moduleWrapper,
    faqEntry,
    faqBox
  }
}
</script>
