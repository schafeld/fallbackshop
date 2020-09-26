<template>
    <div class="modal__vodafone">
        <div class="h4">
        An dieser Adresse ist noch kein Produkt von Unitymedia verfügbar.
        </div>

        <div class="modal__banner">
            <img class="big-banner-img" src="https://www.unitymedia.de/etc/designs/dcomm/unitymedia-de/media/banner/banner_vodafone.png" alt="banner_vodafone">
            <img class="small-banner-img" src="https://www.unitymedia.de/etc/designs/dcomm/unitymedia-de/media/banner/banner_vodafone_small.png" alt="banner_vodafone">
            <div class="modal__banner-header">
                Unitymedia ist jetzt Teil von Vodafone
                <div class="modal__banner-sub-header">
                    Deshalb können wir Ihnen an Ihrer Adresse Internet &amp; TV von Vodafone anbieten.
                </div>
            </div>
        </div>
        <div class="modal__redirect modal__redirect-with-image">
        <div class="vodafone-map">
            <img class="modal__image modal__image--packshot" src="https://www.unitymedia.de/etc/designs/dcomm/unitymedia-de/media/banner/karte.png" alt="karte">
            <div>
                <span class="cart_legend cart_legend--dark">
                    Kabel von Unitymedia,<br>
                    DSL und LTE von Vodafone
                </span>
                <span class="cart_legend">
                    Kabel, DSL und LTE von Vodafone
                </span>
            </div>
        </div>
        <div class="vodafone-button large-screen">
            <a href="https://zuhauseplus.vodafone.de/verfuegbarkeitspruefung?c_id=umo_direct:rfs&j_id=ConConPer723F&uc=UM_OFS" class="btn js_vodafone-link">Zu Vodafone</a>
        </div>
    </div>
        <div class="vodafone-button small-screen">
            <a href="https://zuhauseplus.vodafone.de/verfuegbarkeitspruefung?c_id=umo_direct:rfs&j_id=ConConPer723F&uc=UM_OFS" class="btn js_vodafone-link">Zu Vodafone</a>
        </div>
    </div>
</template>

<style>
/* styles are copied from Dcomm RFS modal */
.modal__vodafone .modal__banner {
    position: relative;
    text-align: left;
    font-family: VodafoneRg;
    font-weight: bold;
}
.modal__vodafone .modal__banner .big-banner-img {
    min-height: 145px;
}
.modal__vodafone .modal__banner img {
    max-width: 100%;
    height: auto;
}
.modal__vodafone .modal__banner .modal__banner-header {
    position: absolute;
    top: 12px;
    left: 12px;
    color: #fff;
    font-size: 30px;
    line-height: 35px;
}
.modal__vodafone .modal__banner .modal__banner-sub-header {
    font-size: 24px;
    line-height: 28px;
    max-width: 80%;
    margin-top: 6px;
}
.modal__vodafone .modal__banner .small-banner-img {
    display: none;
}

.modal__vodafone .modal__redirect-with-image {
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.modal__vodafone .modal__redirect-with-image {
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.modal__vodafone .modal__redirect {
    margin-top: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.modal__vodafone .vodafone-map {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
}
/* .dialog .modal__image--packshot {
    margin: 0;
    max-width: 100px;
} */
img.modal__image.modal__image--packshot {
    max-width: 100px;
}
.modal__vodafone .vodafone-map div {
    margin-bottom: auto;
    margin-top: auto;
    margin-left: 25px;
}
.modal__vodafone .cart_legend {
    text-align: left;
    color: #333;
    font-size: 14px;
    line-height: 16px;
    position: relative;
    display: block;
    padding-left: 30px;
    margin-bottom: 15px;
}
.modal__vodafone .cart_legend--dark:before {
    background-color: #820000;
}
.modal__vodafone .cart_legend:before {
    position: absolute;
    content: "";
    width: 20.19px;
    height: 13.6px;
    top: 1px;
    left: 0;
    background-color: #bd0000;
}

.modal__vodafone .modal__redirect-with-image .btn, .modal__vodafone .modal__redirect-with-image .recall-dialog a, .recall-dialog .modal__vodafone .modal__redirect-with-image a {
    margin-bottom: 0;
    margin-top: auto;
    text-align: center;
}
.modal__vodafone .modal__redirect .btn, .modal__vodafone .modal__redirect .recall-dialog a, .recall-dialog .modal__vodafone .modal__redirect a {
    cursor: pointer;
    margin-bottom: auto;
    margin-top: auto;
    width: 136px;
    font-family: Helvetica Neue,HelveticaNeue,Arial,Helvetica,sans-serif;
}
.modal__vodafone .modal__redirect a {
    display: table;
}
.vodafone-button.small-screen {
    display: none;
}

a.btn.js_vodafone-link {
    color: var(--color-vodafone-white);
}

@media only screen and (max-width: 479px) {
    /* TODO: Refactor responsive layout so one button suffices. */
    .vodafone-button.large-screen {
        display: none;
    }
    .vodafone-button.small-screen {
        display: block;
        text-align: center;
        margin: 20px 0 -20px;
    }
    .modal__vodafone .modal__banner .big-banner-img {
        display: none;
    }
    .modal__vodafone .modal__banner .small-banner-img {
        display: block;
    }
    .modal__vodafone {
        max-width: 290px;
    }
    .modal__vodafone .modal__banner .modal__banner-header {
        font-size: 22px;
        line-height: 24px;
    }
    .modal__vodafone .modal__banner .modal__banner-sub-header {
        font-size: 16px;
        line-height: 18px;
    }
}
</style>
