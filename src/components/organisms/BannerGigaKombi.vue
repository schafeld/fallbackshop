<template>
    <div class="component-fbx-banner-giga-kombi reference parbase section">
        <div class="cq-dd-paragraph">
            <div class="html_1165425839 html">
            <div class="gigakombi-module">
                <div class="container">
                <div class="red-box flipped"></div>
                <div class="red-box rectangle"></div>
                <div class="flex-box dark-bg">
                    <div class="icon-placement">
                    <img
                        src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/GK_line_mobile_internet_phone_white_RGB.svg">
                    </div>
                    <div class="text-placement">
                    <a href="/privatkunden/mobil/mobilfunk/gigakombi/" target="_top" id="par_dcomm_button">
                        <span class="h2">Sicher Dir Deine GigaKombi-Vorteile</span>
                        <span class="body-style">
                        Kombinier Internet und Festnetz mit Mobilfunk.<br>Als
                        Dankeschön bekommst Du dauerhaft 10 € Rabatt und<br>5 GB
                        extra Datenvolumen pro Monat.
                        </span>
                    </a>
                    <div class="cta">
                        <div class="dcomm_button section">
                        <div class="btnalign btnalign--left">
                            <a href="/privatkunden/mobil/mobilfunk/gigakombi/" target="_top" id="par_dcomm_button" class="btn
            btn--white" data-teaser-tracking-id="TIFA-376">
                            <span>Jetzt Angebot sichern</span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>.gigakombi-module {
  background-image: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/a-spot_um_desktop_vodafone2.png);
  background-repeat: no-repeat;
  background-size: auto 340px;
  background-position: calc(50% - 400px) center;
  overflow: hidden;
}

.gigakombi-module,
.gigakombi-module .red-box-rectangle,
.gigakombi-module .container {
  min-height: 340px;
}

.gigakombi-module .container {
  position: relative;
}

.gigakombi-module .flex-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  z-index: 1;
}

.gigakombi-module .red-box {
  background: #BD0000;
  position: absolute;
  z-index: 0;
}

.gigakombi-module .red-box.flipped {
  transform: rotate(25deg);
  top: 0px;
  left: calc(50% - 290px);
  width: 1500px;
  height: 1500px;
}

.gigakombi-module .red-box.red-box.rectangle {
  left: 50%;
  width: 50vw;
  min-height: 340px;
  height: 100%;
}

.gigakombi-module .icon-placement {
  width: 50%;
}

.gigakombi-module .icon-placement img {
  width: 268px;
  padding-top: 100px;
}

.gigakombi-module .text-placement {
  width: 50%;
  padding-top: 100px;
}

.gigakombi-module .text-placement a,
.gigakombi-module .text-placement a:hover,
.gigakombi-module .text-placement a:active,
.gigakombi-module .text-placement a:visited {
  text-decoration: none;
  color: #ffffff;
}

.gigakombi-module .text-placement .cta {
  padding-top: 20px;
}

.gigakombi-module .text-placement .cta a,
.gigakombi-module .text-placement .cta a:visited,
.gigakombi-module .text-placement .cta a:active,
.gigakombi-module .text-placement .cta a:hover {
  color: #333333;
}

.gigakombi-module .text-placement .h2 {
  font-size: 36px;
  line-height: 40px;
}

.gigakombi-module .text-placement .body-style {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 20px;
  width: 100%;
  display: block;
}

@media screen and (max-width: 819px) {
  .gigakombi-module .red-box.red-box.rectangle {
    left: 0%;
    bottom: 0;
    width: 100vw;
    min-height: 200px;
    height: 50%;
  }

  .gigakombi-module {
    background-position: calc(50% + 30px) top, center;
    min-height: 240px;
    background-size: auto 150px, auto;
    background-image: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/a-spot_um_desktop_vodafone2.png), linear-gradient(#BD0000, #BD0000);
  }

  .gigakombi-module .icon-placement {
    width: 100%;
    min-height: 120px;
  }

  .gigakombi-module .icon-placement img {
    padding-top: 40px;
    left: calc(50% - 150px);
    position: relative;
    width: initial;
  }

  .gigakombi-module .text-placement {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .gigakombi-module .flex-box {
    flex-direction: column;
  }

  .gigakombi-module .red-box {
    display: none;
  }

  .gigakombi-module .text-placement .body-style {
    width: 100%;
  }
}
</style>
