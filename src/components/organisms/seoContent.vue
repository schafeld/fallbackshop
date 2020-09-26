<template>
  <div class="richtext section">
    <div

      :class="hasClass"
      style="word-wrap:break-word;"
    >
      <div>
        <h1>
          <strong>Internet, Telefon und Digital-TV von Unitymedia</strong>
        </h1>
        <p>Unitymedia ist mit 7,2 Millionen Kunden einer der führenden Kabelfernsehen-, Telefon- und Internetanbieter in Nordrhein-Westfalen, Hessen und Baden-Württemberg. Als regionaler Anbieter sind wir nah an unseren Kunden und können schnell und flexibel auf deren Wünsche reagieren.</p>
        <p>
          <strong>Internet:</strong>&nbsp;Surfen Sie mit Highspeed-Geschwindigkeiten von bis zu 1.000 Mbit/s und erleben Sie einfach mehr Internet für Ihr Zuhause. Wählen Sie jetzt Ihr Internet-Kombipaket aus unseren
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/angebote/aktionen-und-kampagnen/top-seller/"
            target="_top"
          >Topsellern!</a>
        </p>
        <p>
          <strong>TV:</strong>&nbsp;Sorgen Sie mit
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/tv/tv-anschluss/horizon-tv/"
          >Digitalem Kabelfernsehen</a> in brillanter HD-Qualität und einer riesigen Programmauswahl für beste Unterhaltung. Sehen Sie sich jetzt unsere Angebote rund um den TV-Anschluss an!
        </p>
        <p>
          <strong>Telefon:</strong>&nbsp;Telefonieren Sie mit Ihrem
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/telefon/festnetz/telefon-flat/"
          >Festnetz-Telefon für Zuhause</a> unbegrenzt in Deutschland, Europa oder in die ganze Welt. Informieren Sie sich jetzt über unser großes Angebot kostengünstiger
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/telefon/festnetz/telefon-flat/optionen/"
          >Telefon-Flats</a>!
        </p>
        <p>Holen Sie sich mit unseren zuverlässigen
          <a
            data-action="Hyperlink"
            href="https://www.unitymediabusiness.de/home/selbstaendige.html"
          >Telekommunikationslösungen für Selbstständige und Freiberufler</a> Zugang zu Highspeed-Internet, Telefonanschlüssen und Business Mobilfunk Tarifen. Wir sind einer der führenden
          <a
            data-action="Hyperlink"
            href="https://unternehmen.unitymediabusiness.de/"
          >Internet- und Telefonanbieter für Großunternehmen</a> und versorgen Geschäftskunden mit bedarfsgerechten Kommunikationslösungen. Je nach Größe Ihres Unternehmens und Ihren Anforderungen an die Telekommunikation können Sie bei uns zwischen verschiedenen Business Angeboten wählen.
        </p>
        <h2>
          <strong>Schnelles Internet für Städte und ländliche Gebiete</strong>
        </h2>
        <p>Unitymedia investiert in die Zukunft: Als einer der führenden Internetanbieter bringen wir mit unserer
          <a
            data-action="Hyperlink"
            href="https://www.unitymediabusiness.de/home/infos-news/technologie/coax-glasfaser.html"
          >COAX-Glasfaser-Kabeltechnologie</a> Highspeed-Internet in die Stadt und aufs Land. Surfen Sie superschnell mit bis zu 1000 Mbit/s. Dank des hohen Glasfaseranteils unserer Kabel sind heute bereits technische Bandbreiten von bis zu 5 Gbit/s möglich. Die kontinuierliche Netzmodernisierung reicht bis in ländliche Gegenden, sodass fast alle Haushalte in Nordrhein-Westfalen, Hessen und Baden-Württemberg mit
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/kombipakete/2play/"
          >Highspeed-Internet für Zuhause</a> versorgt werden können.
        </p>
        <h2>
          <strong>Internet, Telefon und Digital-TV aus einer Hand</strong>
        </h2>
        <p>Immer mehr Kunden entscheiden sich für ein Kombipaket aus Internet, Festnetz-Telefon und TV. Dank des superschnellen Kabelnetzes von Unitymedia können Sie HD-Fernsehen, Internet und Telefon auch ohne Probleme gleichzeitig nutzen. Wählen Sie hier das passende
          <a
            data-action="Hyperlink"
            href="https://www.unitymedia.de/privatkunden/kombipakete/3play/"
          >Red Internet, Phone and TV Wunschpaket</a> aus.
        </p>
      </div>
    </div><br>
  </div>
</template>
<script>
export default {
  name: 'seocontainer',
  props: {
    darkBg: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    hasClass () {
      if (this.darkBg) {
        return 'dark-bg'
      } else {
        return ''
      }
    }
  }
}
</script>
