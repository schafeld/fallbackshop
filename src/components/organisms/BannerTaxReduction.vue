<template>
    <div class="vof_banner banner-tax-reduction">
      <div class="vof_container">
        <div class="vof_txt">
          <div class="vof_txt_main">Die dargestellten Preise enthalten noch die
            Mehrwertsteuer von 19%. Die gesenkte MwSt. findest Du auf Deiner
            Rechnung. <br />Du verpasst nichts.

            <sup>
                <span class="tooltip js_tooltip right-tooltip bottom-tooltip">
                    <span class="tooltip-icon icon-info"></span>
                    <span class="tooltip-layer">
                        <div class="vof_tt_title">
                            Gesenkte MwSt.? Geben wir weiter!
                        </div>
                        <div class="vof_tt_subtitle">
                            Die dargestellten Preise enthalten noch die MwSt. von 19%. Vom
                            01.07. bis 31.12.2020 findest Du auf Deiner Rechnung eine
                            entsprechende Senkung der MwSt. auf 16% für Leistungen, die
                            der regulären MwSt. unterliegen. Gilt für alle
                            Telekommunikationstarife mit Mindestlaufzeit und
                            Mietentgelte für Geräte.
                        </div>
                    </span>
                </span>
            </sup>

          </div>
        </div>
            <a class="vof_btn" href="https://www.unitymedia.de/privatkunden/hilfe_service/mwst/"
                data-teaser-tracking-id="umo_web:mergerbanner" target="_blank">
                Mehr Infos
            </a>
      </div>
    </div>
</template>

<style>
.vof_banner {
    width: 100%;
    background: #007C92;
    text-align: center;
    padding: 18px 150px 20px;
    box-sizing: border-box;
    font-family: Vodafone Rg,Helvetica;
}
.vof_container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.vof_txt {
    text-align: left;
    margin-right: 150px;
    color: #fff;
}
.vof_txt_main {
    font-size: 18px;
    line-height: 22px;
}
.vof_container .icon-info {
    color: #fff;
}
.vof_tt_title {
    font-weight: bold;
    margin-bottom: 5px;
    margin-right: 25px;
}
.vof_btn {
    -webkit-tap-highlight-color: transparent;
    color: #333333 !important;
    font-weight: bold;
    text-decoration: none !important;
    font-size: 16px;
    padding: 12px 20px;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
}
.vof_banner  sup {
    top: 0px;
}
</style>
