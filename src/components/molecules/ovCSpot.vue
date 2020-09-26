<template>
  <div class="three-module-wide">
    <div class="banner-3cols-wrapper">
      <div class="banner-3cols">
        <div class="flex">
          <div
            style="font-weight: 900;"
            class="content text h4 dark-bg"
          >
            <span style="h2a">Bestell online und sicher Dir Dein Startguthaben!</span><br><span class="body-style">Wir schenken Dir bei Online-Bestellung bis zu 170 € <sup>
                <span class="tooltip js_tooltip"><span class="btn asterisk-orb tooltip-icon"></span><span class="tooltip-layer">
                    <strong>Rechtliche Hinweise</strong><br>
                    Bei Online-Bestellung dieses Produktes erhältst Du als Neukunde, in dessen Haushalt in den letzten 3 Monaten weder ein Internet- noch ein Telefonanschluss von uns vorhanden war, das angegebene Startguthaben, welches mit monatlichen wiederkehrenden Rechnungsbeträgen des promotionierten Produktes bei uns (nicht aber bei etwaigen Drittanbietern) ab dem 1. Vertragsmonat verrechnet wird. Die Verrechnung erfolgt automatisch, bis das Guthaben vollständig aufgebraucht ist. Das Guthaben kann nicht ausgezahlt werden und verfällt, wenn der Vertrag, für den das Guthaben abgeschlossen wurde, beendet wurde.
                  </span></span></sup></span>
          </div>
          <div class="cta"><router-link
              to="/privatkunden/kombipakete/2play/"
              class="btn btn--white"
              data-crosssell-action="learnMore"
              data-teaser-tracking-id="TIFA-404"
            >Startguthaben sichern</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cspot {
  margin: 0 0 20px;
  padding: 25px 20px 30px 20px;
  border: 1px solid #cccccc;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 190px;
  background-color: #ffffff;
}
.cspot .cta,
.cspot .copy {
  color: #333333;
  font-family: "VodafoneRg";
  text-align: center;
  line-height: 22px;
}
.cspot .copy {
  font-size: 16px;
}
.cspot .cta {
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
}
@media screen and (max-width: 979px) {
  .grid-col .parsys {
    width: 100%;
  }
}

.banner-3cols {
  padding: 10px 0;
  margin-top: 0em;
  min-height: 80px;
  background: #1d9a97;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/VF_Desktop_C-Spot_Online_Vorteil_Visual@2x-v2.png),
    linear-gradient(225deg, #820000 0%, #e60000 50%, #ff0000 100%);
  background-size: 200px, 100%;
  background-position: 50px 0px, left bottom;
  background-repeat: no-repeat, no-repeat;
  margin-bottom: 40px;
}

div.banner-3cols div.flex {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 15px 0 0 170px;
}

div.banner-3cols div.flex div {
  margin: auto 0;
}

div.banner-3cols div.flex div a {
  margin: 0;
}

.banner-3cols .content {
  display: inline-block;
}

.banner-3cols .content p {
  color: white;
}

.banner-3cols .content p.h3 {
  font-size: 30px;
  line-height: 34px;
}

@media screen and (max-width: 1279px) {
  .banner-3cols {
    padding-top: 0;
    margin-top: 0;
    background-position: 10px 100%, left top;
  }

  div.price-flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-3cols .content {
    width: 45%;
  }

  span.h2.price {
    font-size: 50px;
    margin: 0 0 0 10px;
    line-height: 80px;
    position: relative;
    top: -7px;
  }
}

@media screen and (max-width: 819px) {
  /* In small screen layout the visual is on the right, side by side with cta. */
  .banner-3cols {
    background-position: 100% 0%, left bottom;
    padding: 0.5rem 0 0 1.5rem;
    background-size: auto 100%;
  }

  .banner-3cols .content {
    display: block;
    width: 100%;
  }

  div.banner-3cols div.flex {
    display: block;
    justify-content: space-evenly;
    align-items: baseline;
    padding: 5px;
  }

  div.price-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span.price.h2,
  span.price.h4 {
    top: 0px;
    position: auto;
    padding: 0px;
    margin: 0px;
  }
}
</style>
