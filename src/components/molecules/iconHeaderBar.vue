<template>
  <div class="icon-headerbar js_headbar-wrapper icon-headerbar--visible">
    <div class="icon-headerbar__item icon-search js_trigger_search"></div>
    <div class="icon-headerbar__item">
      <div class="template_login_panel iparsys parsys">
        <div class="loginPanel parbase section">
          <div
            data-widget="PanelLoader"
            data-resourcepath="/_jcr_content/template_login_panel/loginPanel.login"
            data-resource-type="dcomm/unitymedia-de/components/includes/loginPanel"
            data-hidespinner="true"
          >
            <div class="dialog js_dialog dialog--login-widget" data-dialog="login-widget-dialog">
              <div class="dialog-box dialog-box--login-widget">
                <a class="btn close-btn close-btn--login-widget js_dialog-close" href="#"></a>
                <div
                  class="login-widget js_toggle js_login-panel"
                  data-toggle-disable="false"
                  data-widget="LoginPanel"
                >
                  <div class="customer-login-btn js_toggle-trigger js_login-panel-toggle-trigger"></div>
                  <div
                    class="login-widget__wrapper js_toggle-wrapper in-active js_login-panel-wrapper"
                    style="height: 0px;"
                  >
                    <div class="login-widget__content js_toggle-content">
                      <div
                        class="login-widget__section login-widget__section--gradient login-widget__section--dark-bg"
                      >
                        <ul class="login-widget__bulletlist">
                          <li
                            class="login-widget__bulletitem login-widget__bulletitem--check-list"
                          >Preise für Kunden</li>
                          <li
                            class="login-widget__bulletitem login-widget__bulletitem--check-list"
                          >Vetragsdetails</li>
                          <li
                            class="login-widget__bulletitem login-widget__bulletitem--check-list login-widget__bulletitem--last"
                          >Persönliche Angebote</li>
                        </ul>
                      </div>
                      <div class="im-login-form" data-widget="ReplaceRedirectUrl">
                        <div class="overlaylogin form">
                          <input
                            type="hidden"
                            name="regularAuthHandlerUrl"
                            value="/auth-handler/iam/authenticateuser/"
                          >
                          <form
                            id="template_login_panel_loginpanel_overlaylogin"
                            action="/auth-handler/iamlite/authenticateuser/"
                            method="POST"
                            autocomplete="on"
                            class="overlayloginform lgi-form lgi-oim-form"
                            novalidate="novalidate"
                          >
                            <input type="hidden" name="source" value="AEM" id="sourceparameter">
                            <input type="hidden" name="target" value="IAM">
                            <input type="hidden" name="URL" value="/" id="targetUrl">
                            <div class="topheader header title">
                              <div class="alignleft clearboth">
                                <h3 class="blue ph3 lgi-txtsd-default">Sign-In</h3>
                              </div>
                            </div>
                            <div class="upc_spacer_height_3">

                            </div>
                            <div class="hidden overlay-login-error 0x132120c8">
                              <div
                                class="lgi-oim-validation-error"
                              >Benutzername (Ihre E-Mail-Adresse) oder Passwort ist ungültig. Bitte versuchen Sie es noch einmal.</div>
                            </div>
                            <div class="hidden overlay-login-error E0003">
                              <div class="lgi-oim-validation-error">Ihr Konto wurde gesperrt.</div>
                            </div>
                            <div class="hidden overlay-login-error M0003">
                              <div
                                class="lgi-oim-validation-error"
                              >Sie müssen Ihren Benutzernamen bestätigen, bevor Sie diese Funktion nutzen können. Alternativ können Sie sich erneut registrieren, um ein Benutzerkonto einzurichten.</div>
                            </div>
                            <div class="hidden overlay-login-error 0x38cf0427">
                              <div
                                class="lgi-oim-validation-error"
                              >Sie haben keine Berechtigung auf diese Seite zuzugreifen.</div>
                            </div>
                            <div class="hidden overlay-login-error E0002">
                              <div
                                class="lgi-oim-validation-error"
                              >Sie haben den falschen Code eingegeben.</div>
                            </div>
                            <div class="hidden overlay-login-error E0008">
                              <div
                                class="lgi-oim-validation-error"
                              >Ihr Konto ist in den Prozess der sich im Aufbau</div>
                            </div>
                            <div class="hidden overlay-login-error E0009">
                              <div
                                class="lgi-oim-validation-error"
                              >Ihr Benutzerkonto ist vorübergehend gesperrt. Bitte bestätigen Sie die E-Mail, um Ihr Konto freizuschalten.</div>
                            </div>
                            <div class="hidden overlay-login-error login-failed">
                              <div
                                class="lgi-oim-validation-error"
                              >Aufgrund technischer Probleme ist ein Login zurzeit nicht möglich. Bitte versuchen Sie es später noch einmal.</div>
                            </div>
                            <div class="myupc-login-username">
                              <div class="forgotusername richtext"></div>
                              <div class="username text field">
                                <div class="lgi-form-field oim-form-field lgi-form-width-wide">
                                  <label
                                    for="template_login_panel_loginpanel_overlaylogin_username"
                                  >Benutzername *</label>
                                  <input
                                    type="text"
                                    name="userId"
                                    id="template_login_panel_loginpanel_overlaylogin_username"
                                    placeholder
                                    value
                                    autocomplete="on"
                                    maxlength="255"
                                    required="required"
                                    data-constraint
                                  >
                                  <span
                                    class="lgi-form-error-required"
                                  >Bitte geben Sie Ihren Benutzernamen ein</span>
                                </div>
                              </div>
                            </div>
                            <div class="myupc-login-password">
                              <div class="forgotpassword richtext"></div>
                              <div class="password text field">
                                <div class="oim-form-field lgi-form-field lgi-form-width-wide">
                                  <label
                                    for="template_login_panel_loginpanel_overlaylogin_password"
                                  >Passwort *</label>
                                  <input
                                    type="password"
                                    name="password"
                                    id="template_login_panel_loginpanel_overlaylogin_password"
                                    value
                                    autocomplete="on"
                                    maxlength="80"
                                    data-disallow-paste="false"
                                    required="required"
                                    data-constraint
                                    placeholder
                                  >
                                  <span
                                    class="lgi-form-error-required"
                                  >Bitte geben Sie ihr Passwort ein</span>
                                </div>
                              </div>
                            </div>
                            <div class="simplecaptcha hidden">
                              <div class="simplecaptcha simplecaptcha_authhandler text field">
                                <div class="lgi-form-field oim-form-field lgi-form-width-wide">
                                  <label for="captcha-input">Geben Sie das Wort aus dem Bild ein.</label>
                                  <span
                                    class="oim-info-icon template_login_panel_loginpanel_overlaylogin_simplecaptcha"
                                  >

                                  </span>
                                  <div
                                    class="oim-info-container"
                                    id="template_login_panel_loginpanel_overlaylogin_simplecaptcha-info"
                                    style="display: none;"
                                  >
                                    <p>
                                      <b>Was bedeutet der Code?</b>
                                      <br>Aus Sicherheitsgründen bitten wir Sie den Code einzugeben.
                                      <br>Wir wollen sicherstellen, dass eine Person die Eingabe vornimmt und keine Virus-Software.
                                      <br>
                                      <br>Sie können einen anderen Code anfordern.
                                      <br>Falls Ihnen das Wort unklar ist, können Sie die Sprachaufnahme anhören.
                                    </p>
                                  </div>
                                  <div>
                                    <div class="lgi-form-captcha-image">
                                      <img
                                        class="center"
                                        id="captcha"
                                        data-src="https://www.unitymedia.de/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.png"
                                        src="https://www.unitymedia.de/etc/design/lgi-pe-oim/media/transparent-pixel.png"
                                      >
                                    </div>
                                    <div class="lgi-form-captcha-buttons">
                                      <button
                                        type="button"
                                        class="upc_button7 lgi-form-captcha-refresh-image"
                                        data-url="/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.png"
                                        name="refreshImage"
                                      >
                                        <span>Neuer Code</span>
                                      </button>
                                      <button
                                        type="button"
                                        class="upc_button7 lgi-form-captcha-listen-audio"
                                        data-url="/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.wav"
                                        name="audioCaptcha"
                                      >
                                        <span>Anhören</span>
                                      </button>
                                    </div>
                                  </div>
                                  <div id="simplecaptchaform" class="lgi-form-field oim-form-field">
                                    <input
                                      id="captcha-input"
                                      class="lgi-form-captcha-input"
                                      type="text"
                                      required="required"
                                      autocomplete="off"
                                      name="captchaCode"
                                      value
                                    >
                                    <span
                                      class="lgi-form-error-required"
                                    >oim.form.captcha.requiredMessage</span>
                                    <span
                                      class="lgi-form-error-constraint constraint-0"
                                    >Sie haben einen ungültigen Code eingegeben.</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="keepsignin checkbox field">
                              <div
                                class="lgi-form-field oim-form-field lgi-is-select-radio radio-vt"
                              >
                                <ol class="lgi-form-checkbox">
                                  <li>
                                    <label
                                      for="template_login_panel_loginpanel_overlaylogin_keepsignin-1"
                                    >
                                      <span class="lgi-checkbox-imagePlaceholder"></span>
                                      <span class="lgi-checkbox-textPlaceholder">Angemeldet bleiben</span>
                                      <input
                                        type="checkbox"
                                        name="keepsignin"
                                        id="template_login_panel_loginpanel_overlaylogin_keepsignin-1"
                                        value="true"
                                      >
                                    </label>
                                  </li>
                                </ol>
                              </div>
                            </div>
                            <div class="button submitbutton">
                              <div class="textcenter">
                                <div class="floatleft">
                                  <button
                                    type="submit"
                                    class="upc_button6"
                                    onclick
                                    name="button"
                                    value
                                  >
                                    <span>Login</span>
                                  </button>
                                </div>
                              </div>
                              <div class="clear">&nbsp;</div>
                            </div>
                            <div class="indicator loadingindicator"></div>
                          </form>
                        </div>
                      </div>
                      <div class="login-widget__section login-widget__section--outside">
                        <hr class="login-widget__hr">
                        <a
                          class="login-widget__link login-widget__link--bottom"
                          href="https://www.unitymedia.de/benutzerkonto/registrieren/identifizierung/"
                        >Registrieren</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-dialog="login-dialog"
              class="login no-mediaqueries dialog js_dialog"
              data-widget="ReplaceRedirectUrl"
            >
              <div class="dialog-box im-login-form">
                <button class="btn close-btn js_dialog-close"></button>
                <h3 class="h3">Kunden-Login</h3>
                <div class="overlaylogin form">
                  <input
                    type="hidden"
                    name="regularAuthHandlerUrl"
                    value="/auth-handler/iam/authenticateuser/"
                  >
                  <form
                    id="template_login_panel_loginpanel_overlaylogin"
                    action="/auth-handler/iamlite/authenticateuser/"
                    method="POST"
                    autocomplete="on"
                    class="overlayloginform lgi-form lgi-oim-form"
                    novalidate="novalidate"
                  >
                    <input type="hidden" name="source" value="AEM" id="sourceparameter">
                    <input type="hidden" name="target" value="IAM">
                    <input type="hidden" name="URL" value="/" id="targetUrl">
                    <div class="topheader header title">
                      <div class="alignleft clearboth">
                        <h3 class="blue ph3 lgi-txtsd-default">Sign-In</h3>
                      </div>
                    </div>
                    <div class="upc_spacer_height_3">

                    </div>
                    <div class="hidden overlay-login-error 0x132120c8">
                      <div
                        class="lgi-oim-validation-error"
                      >Benutzername (Ihre E-Mail-Adresse) oder Passwort ist ungültig. Bitte versuchen Sie es noch einmal.</div>
                    </div>
                    <div class="hidden overlay-login-error E0003">
                      <div class="lgi-oim-validation-error">Ihr Konto wurde gesperrt.</div>
                    </div>
                    <div class="hidden overlay-login-error M0003">
                      <div
                        class="lgi-oim-validation-error"
                      >Sie müssen Ihren Benutzernamen bestätigen, bevor Sie diese Funktion nutzen können. Alternativ können Sie sich erneut registrieren, um ein Benutzerkonto einzurichten.</div>
                    </div>
                    <div class="hidden overlay-login-error 0x38cf0427">
                      <div
                        class="lgi-oim-validation-error"
                      >Sie haben keine Berechtigung auf diese Seite zuzugreifen.</div>
                    </div>
                    <div class="hidden overlay-login-error E0002">
                      <div class="lgi-oim-validation-error">Sie haben den falschen Code eingegeben.</div>
                    </div>
                    <div class="hidden overlay-login-error E0008">
                      <div
                        class="lgi-oim-validation-error"
                      >Ihr Konto ist in den Prozess der sich im Aufbau</div>
                    </div>
                    <div class="hidden overlay-login-error E0009">
                      <div
                        class="lgi-oim-validation-error"
                      >Ihr Benutzerkonto ist vorübergehend gesperrt. Bitte bestätigen Sie die E-Mail, um Ihr Konto freizuschalten.</div>
                    </div>
                    <div class="hidden overlay-login-error login-failed">
                      <div
                        class="lgi-oim-validation-error"
                      >Aufgrund technischer Probleme ist ein Login zurzeit nicht möglich. Bitte versuchen Sie es später noch einmal.</div>
                    </div>
                    <div class="myupc-login-username">
                      <div class="forgotusername richtext"></div>
                      <div class="username text field">
                        <div class="lgi-form-field oim-form-field lgi-form-width-wide">
                          <label
                            for="template_login_panel_loginpanel_overlaylogin_username"
                          >Benutzername *</label>
                          <input
                            type="text"
                            name="userId"
                            id="template_login_panel_loginpanel_overlaylogin_username"
                            placeholder
                            value
                            autocomplete="on"
                            maxlength="255"
                            required="required"
                            data-constraint
                          >
                          <span
                            class="lgi-form-error-required"
                          >Bitte geben Sie Ihren Benutzernamen ein</span>
                        </div>
                      </div>
                    </div>
                    <div class="myupc-login-password">
                      <div class="forgotpassword richtext"></div>
                      <div class="password text field">
                        <div class="oim-form-field lgi-form-field lgi-form-width-wide">
                          <label
                            for="template_login_panel_loginpanel_overlaylogin_password"
                          >Passwort *</label>
                          <input
                            type="password"
                            name="password"
                            id="template_login_panel_loginpanel_overlaylogin_password"
                            value
                            autocomplete="on"
                            maxlength="80"
                            data-disallow-paste="false"
                            required="required"
                            data-constraint
                            placeholder
                          >
                          <span class="lgi-form-error-required">Bitte geben Sie ihr Passwort ein</span>
                        </div>
                      </div>
                    </div>
                    <div class="simplecaptcha hidden">
                      <div class="simplecaptcha simplecaptcha_authhandler text field">
                        <div class="lgi-form-field oim-form-field lgi-form-width-wide">
                          <label for="captcha-input">Geben Sie das Wort aus dem Bild ein.</label>
                          <span
                            class="oim-info-icon template_login_panel_loginpanel_overlaylogin_simplecaptcha"
                          >

                          </span>
                          <div
                            class="oim-info-container"
                            id="template_login_panel_loginpanel_overlaylogin_simplecaptcha-info"
                            style="display: none;"
                          >
                            <p>
                              <b>Was bedeutet der Code?</b>
                              <br>Aus Sicherheitsgründen bitten wir Sie den Code einzugeben.
                              <br>Wir wollen sicherstellen, dass eine Person die Eingabe vornimmt und keine Virus-Software.
                              <br>
                              <br>Sie können einen anderen Code anfordern.
                              <br>Falls Ihnen das Wort unklar ist, können Sie die Sprachaufnahme anhören.
                            </p>
                          </div>
                          <div>
                            <div class="lgi-form-captcha-image">
                              <img
                                class="center"
                                id="captcha"
                                data-src="https://www.unitymedia.de/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.png"
                                src="https://www.unitymedia.de/etc/design/lgi-pe-oim/media/transparent-pixel.png"
                              >
                            </div>
                            <div class="lgi-form-captcha-buttons">
                              <button
                                type="button"
                                class="upc_button7 lgi-form-captcha-refresh-image"
                                data-url="/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.png"
                                name="refreshImage"
                              >
                                <span>Neuer Code</span>
                              </button>
                              <button
                                type="button"
                                class="upc_button7 lgi-form-captcha-listen-audio"
                                data-url="/content/dcomm-unitymedia-de/de/jcr:content/template_login_panel/loginPanel/overlaylogin/simplecaptcha.wav"
                                name="audioCaptcha"
                              >
                                <span>Anhören</span>
                              </button>
                            </div>
                          </div>
                          <div id="simplecaptchaform" class="lgi-form-field oim-form-field">
                            <input
                              id="captcha-input"
                              class="lgi-form-captcha-input"
                              type="text"
                              required="required"
                              autocomplete="off"
                              name="captchaCode"
                              value
                            >
                            <span class="lgi-form-error-required">oim.form.captcha.requiredMessage</span>
                            <span
                              class="lgi-form-error-constraint constraint-0"
                            >Sie haben einen ungültigen Code eingegeben.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="keepsignin checkbox field">
                      <div class="lgi-form-field oim-form-field lgi-is-select-radio radio-vt">
                        <ol class="lgi-form-checkbox">
                          <li>
                            <label for="template_login_panel_loginpanel_overlaylogin_keepsignin-1">
                              <span class="lgi-checkbox-imagePlaceholder"></span>
                              <span class="lgi-checkbox-textPlaceholder">Angemeldet bleiben</span>
                              <input
                                type="checkbox"
                                name="keepsignin"
                                id="template_login_panel_loginpanel_overlaylogin_keepsignin-1"
                                value="true"
                              >
                            </label>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div class="button submitbutton">
                      <div class="textcenter">
                        <div class="floatleft">
                          <button type="submit" class="upc_button6" onclick name="button" value>
                            <span>Login</span>
                          </button>
                        </div>
                      </div>
                      <div class="clear">&nbsp;</div>
                    </div>
                    <div class="indicator loadingindicator"></div>
                  </form>
                </div>
                <div class="login-widget__section login-widget__section--outside">
                  <hr class="login-widget__hr">
                  <a
                    class="login-widget__link login-widget__link--bottom"
                    href="https://www.unitymedia.de/benutzerkonto/registrieren/identifizierung/"
                  >Registrieren</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="iparys_inherited">
          <div class="template_login_panel iparsys parsys"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.login-widget {
  box-sizing: border-box;
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
  color: #002c77;
  text-align: left
}

.login-widget__header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  cursor: pointer;
  margin: 5px 10px;
  margin: .5rem 1rem
}

@media screen and (max-width:819px) {
  .login-widget .login-widget__header--flex {
    display: -ms-flexbox;
    display: flex
  }
}

.login-widget__content {
  background: #fff;
  border: 1px solid #dadbe0;
  border-radius: 5px;
  padding-top: 10px;
  border-top-right-radius: 0
}

.login-widget__headline {
  vertical-align: inherit;
  margin: 0
}

.login-widget__headline:after {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: right;
  vertical-align: -12%
}

@media screen and (max-width:979px) {
  .login-widget__headline {
    font-size: 18px;
    font-size: 1.8rem
  }
}

.login-widget__icon {
  font-size: 20px;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: normal;
  vertical-align: inherit
}

.login-widget__icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1em;
  text-align: left;
  vertical-align: -12%
}

.login-widget .error-msg {
  -webkit-font-smoothing: subpixel-antialiased
}

.login-widget__wrapper {
  font-weight: bold;
  position: absolute;
  width: 206px;
  z-index: 3;
  right: -1px;
  transition: min-height .4s, height .4s linear;
  overflow: hidden;
  height: 0;
  margin-top: -1px
}

@media screen and (min-width:480px) and (max-width:979px) {
  .login-widget__wrapper {
    width: 170px
  }
}

.login-widget__wrapper.is-active {
  overflow: visible;
  transition: none
}

.login-widget__wrapper.in-active {
  display: none
}

.login-widget__bulletlist {
  padding: 0
}

.login-widget__bulletitem {
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.42857;
  padding: 0 0 0 20px;
  padding: 0 0 0 2rem;
  margin-bottom: 4px;
  margin-bottom: .4rem
}

@media screen and (max-width:979px) {
  .login-widget__bulletitem {
    margin-bottom: 2px;
    margin-bottom: .2rem
  }
}

.login-widget__bulletitem--last {
  margin-bottom: 0
}

.login-widget__bulletitem--check-list {
  position: relative
}

.login-widget__bulletitem--check-list:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: left;
  vertical-align: -12%
}

.login-widget__bulletitem--check-list::before {
  position: absolute;
  left: 0
}

.login-widget__section {
  margin: 0 10px 10px;
  margin: 0 1rem 1rem
}

@media screen and (max-width:979px) {
  .login-widget__section {
    margin: 0 10px;
    margin: 0 1rem
  }
}

.login-widget__section--regular {
  font-family: Helvetica Neue, HelveticaNeue, Arial, Helvetica, sans-serif;
  font-weight: normal
}

.login-widget__section--outside {
  margin: 0 0 10px;
  margin: 0 0 1rem
}

.login-widget__section--gradient {
  background: #ee6227;
  background: #ee6227;
  background: linear-gradient(90deg, #fb7822, #e14b2b);
  border-radius: 2px;
  padding: 10px;
  padding: 1rem;
  margin: 0 10px 10px;
  margin: 0 1rem 1rem
}

@media screen and (max-width:979px) {
  .login-widget__section--gradient {
    padding: 5px 10px;
    padding: .5rem 1rem
  }
}

.login-widget__section--dark-bg {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #fff
}

.login-widget__section--flex {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

@media screen and (max-width:979px) {
  .login-widget__section--flex {
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    -ms-flex-align: start;
    align-items: flex-start
  }
}

.login-widget__input-text {
  color: #262626;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px
}

.login-widget__input-text--no-bottom-gap {
  margin-bottom: 0
}

@media screen and (max-width:979px) {
  .login-widget__input-text--no-bottom-gap {
    margin-bottom: 10px
  }
}

.login-widget__hr {
  border: 0;
  border-top: 1px solid #dadbe0;
  margin: 20px 0 10px;
  margin: 2rem 0 1rem
}

.login-widget__button {
  padding: 10px 15px;
  padding: 1rem 1.5rem;
  margin: 0 0 15px;
  width: 100%
}

.login-widget__button.ume-spinner:after {
  margin: -10px -44px -10px 24px
}

@media screen and (min-width:480px) and (max-width:979px) {
  .login-widget__button.ume-spinner:after {
    margin: -10px -33px -10px 13px
  }
}

@media screen and (max-width:979px) {
  .login-widget__button {
    margin-bottom: 10px;
    margin-bottom: 1rem
  }
}

.login-widget__link {
  display: inline-block;
  text-align: left
}

.login-widget__link:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1em;
  text-align: left;
  vertical-align: -12%
}

.login-widget__link--bottom {
  margin-left: 10px;
  margin-left: 1rem
}

.login-widget .is-active .login-widget__headline:after {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: right;
  vertical-align: -12%
}

.login-widget .is-active>.login-box-icon:after,
.login-widget .is-active .login-box-title.login-box-icon:after,
.login-widget .is-active .login-header-headline:after {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: right;
  vertical-align: -12%
}

.dialog--login-widget {
  position: static;
  opacity: 1;
  display: block;
  overflow: visible;
  line-height: 1;
  z-index: 3;
  transform: none;
  word-spacing: inherit;
  background: transparent
}

.dialog .dialog-box--login-widget {
  padding: 0;
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  box-shadow: none;
  border-radius: 5px;
  background: transparent
}

.dialog .close-btn--login-widget {
  display: none
}

.dialog .im-login-form {
  margin: 20px 10px;
  margin: 2rem 1rem
}

@media screen and (max-width:979px) {
  .dialog .im-login-form {
    font-size: 13px;
    font-size: 1.3rem;
    line-height: 1.23077
  }
}

@media screen and (max-width:479px) {
  .dialog .im-login-form {
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.42857
  }
}

.dialog .im-login-form .title,
.dialog .im-login-form .upc_spacer_height_3 {
  display: none
}

.dialog .im-login-form p {
  margin: 0
}

.dialog .im-login-form .overlay-login-error {
  color: #af0b37;
  margin-bottom: 10px;
  margin-bottom: 1rem;
  border: 1px solid #af0b37;
  border-radius: 3px;
  padding: 5px
}

.dialog .im-login-form .lgi-form-error-required {
  color: #af0b37
}

.dialog .im-login-form .lgi-form-error-required input {
  border: 1px solid #af0b37
}

.dialog .im-login-form .lgi-form-error-constraint {
  color: #af0b37
}

.dialog .im-login-form .myupc-login-username {
  position: relative;
  margin-bottom: 25px
}

.dialog .im-login-form .myupc-login-username a:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1em;
  text-align: left;
  vertical-align: -12%
}

.dialog .im-login-form .myupc-login-username .forgotusername {
  position: absolute;
  bottom: -17px;
  right: 0
}

.dialog .im-login-form .myupc-login-password {
  position: relative;
  margin-bottom: 30px
}

.dialog .im-login-form .myupc-login-password a:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1em;
  text-align: left;
  vertical-align: -12%
}

.dialog .im-login-form .myupc-login-password .forgotpassword {
  position: absolute;
  bottom: -17px;
  right: 0
}

.dialog .im-login-form .simplecaptcha .lgi-form-captcha-image {
  border-bottom: 1px solid #666
}

.dialog .im-login-form .simplecaptcha .lgi-form-captcha-buttons {
  color: #40920f;
  margin: 10px 0 5px;
  margin: 1rem 0 .5rem
}

.dialog .im-login-form .simplecaptcha button {
  padding: 5px 0 0;
  padding: .5rem 0 0;
  text-align: left;
  display: block
}

.dialog .im-login-form .simplecaptcha button:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1em;
  text-align: left;
  vertical-align: -12%
}

.dialog .im-login-form .simplecaptcha button:hover {
  text-decoration: underline
}

.dialog .im-login-form .simplecaptcha #simplecaptchaform {
  margin: 5px 0 10px;
  margin: .5rem 0 1rem
}

.dialog .im-login-form .keepsignin {
  position: relative
}

.dialog .im-login-form .keepsignin .lgi-checkbox-imagePlaceholder {
  box-sizing: border-box;
  display: inline-block;
  width: 17px;
  height: 17px;
  width: 1.7rem;
  height: 1.7rem;
  margin: 0;
  border: 1px solid #666;
  background: #fff;
  color: #803689;
  font-size: 15px;
  font-size: 1.5rem;
  line-height: 0;
  text-align: center;
  border-radius: 3px;
  vertical-align: middle
}

.dialog .im-login-form .keepsignin .lgi-checkbox-imagePlaceholder.lgi-form-checked::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  position: absolute;
  top: 8px;
  left: 2px
}

.dialog .im-login-form .keepsignin .lgi-checkbox-textPlaceholder {
  margin-left: 5px;
  vertical-align: middle;
  display: inline-block
}

.dialog .im-login-form .keepsignin input[type=checkbox] {
  display: none
}

.dialog .im-login-form input[type=text],
.dialog .im-login-form input[type=password] {
  width: calc(100% - 2.2rem);
  margin: 2px 0
}

.dialog .im-login-form .button button {
  background: #4a981b;
  background: #4a981b;
  background: linear-gradient(to bottom, #539d27, #40920f);
  display: inline-block;
  box-sizing: border-box;
  margin: 1rem 0 0;
  padding: 1rem;
  outline: 0;
  border: 0 solid #40920f;
  border-radius: 999px;
  cursor: pointer;
  width: 100%;
  text-align: center
}

.dialog .im-login-form .button button,
.dialog .im-login-form .button button:hover,
.dialog .im-login-form .button button:focus {
  color: #fff;
  text-decoration: none
}

.dialog .im-login-form .button button:hover,
.dialog .im-login-form .button button:focus {
  background: #539d27;
  background: #539d27;
  background: linear-gradient(to bottom, #66a83f, #40920f)
}

.dialog .im-login-form .button button:active {
  background: #3d8b0f;
  background: #3d8b0f;
  background: linear-gradient(to bottom, #3a830e, #40920f)
}

.dialog .im-login-form .clear {
  display: none
}

.dialog .im-login-form .indicator {
  display: none
}

@media screen and (max-width:479px) {
  #loginForm .w-1of2 {
    width: 100%
  }

  #loginForm .passwordreset {
    margin-top: 8px
  }
}
</style>
