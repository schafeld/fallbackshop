<template>
  <div class="template_metanavigation iparsys parsys">
    <div class="metanavigation section">
      <div class="js_mn-meta-nav mn-meta-nav mn-meta-nav--horizontal mn-meta-nav--loggedOut">
        <div class="mn-container">
          <ul class="mn-meta-nav-list mn-meta-nav-list--horizontal">
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <router-link
                data-featuredlink="Header Navigation: Privatkunden"
                to="/"
                target="_self"
              >Privatkunden</router-link>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-dropdown mn-meta-nav-list__item--both">
              <span>Geschäftskunden</span>
              <ul>
                <li>
                  <a
                    data-featuredlink="Header Navigation: Businesskunden"
                    href="/business/"
                  >Businesskunden</a>
                </li>
                <li>
                  <a
                    data-featuredlink="Header Navigation: Wohnungswirtschaft"
                    href="/wohnungswirtschaft/"
                  >Wohnungswirtschaft</a>
                </li>
              </ul>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Über Unitymedia"
                href="https://www5.unitymedia.de/unternehmen/"
                target="_self"
              >Über Unitymedia</a>
            </li>
          </ul>
          <ul class="mn-meta-nav-list mn-meta-nav-list--horizontal">
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Horizon Go"
                href="https://www.horizon.tv/de_de/"
                target="_self"
              >Horizon Go</a>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Entertainment"
                href="https://entertainment.unitymedia.de"
                target="_self"
              >Entertainment</a>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Unitymedia Mail"
                href="https://webmail.unity-mail.de/appsuite/signin"
                target="_self"
              >Unitymedia Mail</a>
            </li>
          </ul>
          <ul class="mn-meta-nav-list mn-meta-nav-list--horizontal">
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Hilfe &amp; Service"
                href="/privatkunden/hilfe_service/hilfe_themen/"
                target="_self"
              >Hilfe &amp; Service</a>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
              <a
                data-featuredlink="Header Navigation: Kundencenter"
                href="/kundencenter/"
                target="_self"
              >Kundencenter</a>
            </li>
            <li
              class="mn-meta-nav-list__item mn-meta-nav-dropdown mn-meta-nav-list__item--loggedIn"
            >
              <span class="js_mn-customerName"></span>
              <ul>
                <li>
                  <a
                    data-featuredlink="Header Navigation: Mein Profil"
                    href="/kundencenter/profil/profilupdaten/"
                  >Mein Profil</a>
                </li>
                <li>
                  <a
                    data-featuredlink="Header Navigation: Konto verwalten"
                    href="/kundencenter/profil/kontenverwalten/"
                  >Konto verwalten</a>
                </li>
              </ul>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--loggedIn">
              <a
                data-featuredlink="Header Navigation: Abmelden"
                href="/pkmsLogout/?toUrl=/hilfe_service/kundencenter-logout/"
                target="_self"
              >Abmelden</a>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--loggedOut">
              <a
                data-featuredlink="Header Navigation: Anmelden"
                href="/benutzerkonto/login/zugangsdaten/"
                target="_self"
              >Anmelden</a>
            </li>
            <li class="mn-meta-nav-list__item mn-meta-nav-list__item--loggedOut">
              <a
                data-featuredlink="Header Navigation: Registrieren"
                href="/benutzerkonto/registrieren/identifizierung/"
                target="_self"
              >Registrieren</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="webmail section">
      <div id="mn-webmail-dialog" class="mn-overlay">
        <div class="mn-overlay__content">
          <a
            class="mn-overlay__close-btn mn-icon-circle-close"
            data-webmail-toggle="#mn-webmail-dialog"
            href="#"
          ></a>
          <div class="mn-overlay__body">
            <form id="mn-webmail-form" action="#" name="mn-webmail-form" method="get">
              <h3 class="mn-overlay__headline">Ihr Webmail-Konto</h3>
              <p class="mn-overlay__intro">Bitte wählen Sie Ihre Webmail-Adresse aus.</p>
              <div class="mn-formrow">
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="unitymedia">
                    unitybox.de
                  </label>
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="kabelbw">
                    kabelbw.de
                  </label>
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="iesynet">
                    iesy.net
                  </label>
                </div>
              </div>
              <div class="mn-formrow">
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="ish">
                    ish.de
                  </label>
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="highspeed3">
                    highspeed3.de
                  </label>
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="iesytv">
                    iesy.tv
                  </label>
                </div>
              </div>
              <div class="mn-formrow">
                <div class="mn-formrow-col mn-w-1of3">
                  <label class="mn-label">
                    <input type="radio" name="webmailAccount" value="kabelbw">
                    unity-mail.de
                  </label>
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <!-- unused slot -->
                </div>
                <div class="mn-formrow-col mn-w-1of3">
                  <!-- unused slot -->
                </div>
              </div>
              <div class="mn-formrow">
                <div class="mn-formrow-col">
                  <label class="mn-label">
                    <input type="checkbox" name="rememberAccount" value="true">
                    Auswahl merken
                  </label>
                </div>
              </div>
              <div class="mn-right">
                <button type="submit" class="mn-btn">Weiter zu Webmail</button>
              </div>
              <div class="mn-image">
                <a
                  href="https://www.unitymedia.de/privatkunden/angebote/aktionen/unitymedia-mail/"
                  target="_blank"
                >
                  <img
                    src="https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/Teaser/webmail_layer_teaser.jpg"
                  >
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="new"></div>
    </div>
    <div class="iparys_inherited">
      <div class="template_metanavigation iparsys parsys"></div>
    </div>
  </div>
</template>
