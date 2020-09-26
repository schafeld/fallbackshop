<template>
  <div class="content">
    <div class="image">
      <div class="image-container">
      </div>
    </div>
    <div class="text">
      <div class="text-container">
        <div class="boxed">
          <spacer setting="5" />
          <spacer setting="5" />
          <div class="dark-bg">
            <p class="h2a">Hol Dir jetzt den GigaCube Plug &amp; Play</p>
            <p class="body-style">Nutze Highspeed-Internet über unser 4G/LTE
              Mobilfunknetz. Einfach einstecken und lossurfen.</p>
            <p class="body-style">ab <span style="font-size: 36.0px;font-family: VodafoneBd;line-height: 47.0px;">34,99
                €</span> <sup style="top: -15.0px;">
                <span class="tooltip js_tooltip">
                  <span class="btn asterisk-orb tooltip-icon"></span>
                  <span class="tooltip-layer">Für den <strong>Tarif GigaCube (125
                      GB)</strong> gilt: Du zahlst einmal 49,99 € für die
                    Bereitstellung. Für den Tarif GigaCube zahlst Du 34,99 €
                    Basispreis pro Monat mit Basic-Router oder 44,99 € mit
                    vergünstigtem 5G-Premium-Router. Der Basic-Router kostet
                    einmalig 1 €. Der 5G-Premium-Router kostet einmalig 129,90
                    €.<br> <br> <strong>Für alle GigaCube-Tarife
                      gilt:</strong> Auf Deiner 1. und auf Deiner letzten Rechnung
                    berechnen wir Dir den Basispreis für den 1. und den letzten
                    Vertragsmonat anteilig: je nach dem, wann genau Dein Vertrag
                    anfängt und endet und wie Dein Rechnungszeitraum ist. Du
                    kannst den Tarif nur in Deutschland nutzen. Du kannst damit
                    nicht telefonieren, keine SMS und keine MMS verschicken. Die
                    Anwendung ist auf eine stationäre Nutzung an einem festen
                    Standort oder an wechselnden festen Standorten beschränkt. Als
                    fester Standort gelten nur Standorte, an denen die Anwendung
                    jeweils für einen Zeitraum von wenigstens 12 Stunden erfolgt.
                    Eine mobile Nutzung ist ausgeschlossen. Andere Sonderdienste
                    rechnen wir nach der entsprechenden Preisliste ab. Du darfst
                    den Tarif nicht kommerzialisieren, z. B. weiterverkaufen oder
                    gewerbsmäßig anbieten. Eventuelle Rabatte ziehen wir ab.
                    Kunden im Rahmenvertrag sind ausgeschlossen. Je nach
                    Bestellvorgang können Versandkosten entstehen. Wir behalten
                    uns vor, dass Videos auf SD-Qualität, also 480p, beschränkt
                    sind, sofern dies rechtskonform (insbesondere in Einklang mit
                    Verordnung (EU) 2015/2120) unter Berücksichtigung der
                    Verwaltungspraxis und der Rechtsprechung erfolgt. Für Deinen
                    Vertrag gilt: Mindestlaufzeit 24 Monate, Kündigungsfrist 3
                    Monate. Falls Du nicht rechtzeitig kündigst, verlängert er
                    sich automatisch um je ein Jahr. Das erste Mal kündigen kannst
                    Du zum Ende der Mindestlaufzeit, dann jeweils zum Ende des
                    weiteren Vertragsjahres. Für das GigaCube-Gerät gilt: Du
                    brauchst einen Stromanschluss, um es zu nutzen.<br> <br>
                    <strong>Alle Preise inkl. MwSt.</strong> Dies ist ein
                    Angebot der Vodafone GmbH, Ferdinand-Braun-Platz 1, 40549
                    Düsseldorf.</span></span></sup> pro Monat</p>
          </div>
          <spacer setting="5" />
          <spacer setting="5" />
        </div>
        <div class="boxed">
          <button-element
            label="Mehr erfahren"
            tifa="TIFA-399"
            type="dcomm_button"
            href="https://zuhauseplus.vodafone.de/gigacube/?b_id=2175&c_id=umo_web:aspot_gigacube&j_id=ConConPer723F&UC=GEN"
            :inverted="this.$data.window.width > 880"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spacer from '@/components/atoms/spacer.vue'
import buttonElement from '@/components/atoms/buttonElement.vue'
export default {
  name: 'online-advantage-aspot',
  components: {
    spacer,
    buttonElement
  }
}
</script>

<style scoped>
.image {
  background-image: url(//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/gigacube-aspot-desktop-246x378-3@2x.png),
    linear-gradient(45deg, #850002 10%, #ea0303 58%, #5a0000 100%);
  background-repeat: no-repeat;
  background-size: 250px auto, auto;
  background-position: calc(50% + 250px), center;
}
.image-container img {
  height: initial !important;
}
img {
  align-self: center;
}

@media screen and (max-width: 879px) {
  .image {
    background-size: auto 100%, auto 100%;
    background-position: center;
  }
  .dark-bg {
    color: #333333;
  }
}
</style>
