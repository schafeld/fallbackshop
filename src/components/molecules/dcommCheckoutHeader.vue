<template>
  <div class="header checkout-header">
    <div class="logo">
      <router-link
        data-featuredlink="Header Navigation: Logo"
        to="/"
      >
        <img src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vodafone/iconset/vf_logo.svg">
      </router-link>
      <div
        v-if="checkoutStep === 1"
        class="progressBar checkoutProgress parbase"
      >
        <ul class="progress-nav">
          <li class="progress-step2 is-active">
            <span>Persönliche Daten und Zahlungsdaten</span>
          </li>
          <li class="progress-step3">
            <span>Bestellübersicht</span>
          </li>
        </ul>
      </div>
      <div
        v-if="checkoutStep === 2"
        class="progressBar checkoutProgress parbase"
      >
        <ul class="progress-nav">
          <li class="progress-step2">
            <router-link to="/privatkunden/checkout_step1">Persönliche Daten und Zahlungsdaten</router-link>
          </li>
          <li class="progress-step3 is-active">
            <span>Bestellübersicht</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dcommCheckoutHeader',
  props: {
    checkoutStep: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
/* Mobile Config */
.mobile-config-visual img {
  max-width: 55%;
}
.header.checkout-header {
  padding: 0 50px;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  flex-basis: 100%;
  padding: 30px 0 25px 100px;
  align-items: center;
}

.logo-bar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
}

@media screen and (max-width: 979px) {
  .logo-bar .el-container {
    margin-right: 60px;
  }
}

@media screen and (max-width: 600px) {
  .logo-bar .el-container {
    display: block;
    width: 100%;
    margin-right: 0;
    text-align: center;
  }
}

.logo-bar > .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 105px;
  flex-basis: 100%;
}

@media screen and (max-width: 600px) {
  .logo-bar > .container {
    flex-direction: column;
    margin-bottom: 20px;
  }
}

.logo-bar .logo {
  width: 165px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 819px) {
  .logo-bar .logo {
    margin: 10px 15px 10px 0;
  }
}

.b2b-template .logo-bar .logo {
  width: 180px;
  height: 72px;
}

.logo-bar .logo a,
.logo-bar .logo img {
  display: block;
}

.logo-bar.logo-bar-landing {
  pointer-events: none;
}

.logo-bar--checkout {
  padding: 30px 0 25px;
}

@media screen and (max-width: 479px) {
  .logo-bar--checkout .logo {
    width: auto;
  }
}

.discovery-header .logo-bar .container > .parsys {
  display: inline-block;
  width: 100%;
}

.progressBar.checkoutProgress.parbase {
  height: auto;
}
.progress-nav {
  font-size: 0;
  line-height: 0;
  word-spacing: -0.31em;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
  margin-top: 5px;
}

@media screen and (max-width: 979px) {
  .progress-nav {
    margin-top: 10px;
  }
}

.progress-nav li {
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.42857;
  word-spacing: 0;
  position: relative;
  display: inline-block;
  padding-left: 15px;
  color: #333;
  background: #ccc;
}

.progress-nav li:before,
.progress-nav li:after {
  position: absolute;
  display: block;
  content: "";
  left: -4px;
  top: 50%;
  margin-top: -22px;
  border: 22px solid transparent;
  border-left-color: #ccc;
}

.progress-nav li:before {
  left: 0;
  border-left-color: #ccc;
}

.progress-nav li:first-child {
  padding-left: 0;
}

.progress-nav li:first-child:before,
.progress-nav li:first-child:after {
  content: none;
}

.progress-nav li.is-active {
  background: #666;
  color: #fff;
}

.progress-nav li > a {
  color: inherit;
  text-decoration: inherit;
}

.progress-nav li > a,
.progress-nav li > span {
  display: block;
  padding: 7px 20px;
}

.progress-nav li > a:before,
.progress-nav li > span:before {
  font-size: 1.2em;
}

@media screen and (max-width: 979px) {
  .progress-nav li > a,
  .progress-nav li > span {
    padding: 5px 15px;
  }
}

@media screen and (max-width: 819px) {
  .progress-nav li > a,
  .progress-nav li > span {
    font-size: 0;
  }

  .progress-nav li > a:before,
  .progress-nav li > span:before {
    font-size: 20px;
    font-size: 2rem;
    line-height: 1.2;
  }
}

@media screen and (max-width: 819px) {
  .progress-nav li:not(:last-child) > a,
  .progress-nav li:not(:last-child) > span {
    padding-right: 0;
  }
}

.progress-nav .progress-step1 > a:before,
.progress-nav .progress-step1 > span:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: left;
  vertical-align: -20%;
}

.progress-nav .progress-step2 > a:before,
.progress-nav .progress-step2 > span:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: left;
  vertical-align: -20%;
}

.progress-nav .progress-step3 > a:before,
.progress-nav .progress-step3 > span:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 1.5em;
  text-align: left;
  vertical-align: -20%;
}

.progress-nav .progress-step4 > a:before,
.progress-nav .progress-step4 > span:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "4";
  display: inline-block;
  width: 1.5em;
  text-align: left;
  vertical-align: -20%;
}
@media screen and (max-width: 819px) {
  .header.checkout-header {
    width: calc(100% - 4em);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 0;
  }
  .progress-nav {
    display: flex;
    margin-top: 0px;
  }
  .progressBar.checkoutProgress.parbase {
    width: 120px;
    height: auto;
  }
  .checkout .container {
    padding: 0 0px;
  }
  .logo {
    margin: 0 5px 0 0;
    padding: 0 0 0 30px;
  }
  .logo img {
    width: 155px;
    height: auto;
  }
  .logo-bar > .container {
    display: flex;
    justify-content: column;
    flex-wrap: nowrap;
  }

  .logo img {
    max-width: 50px;
  }
}

@media screen and (max-width: 335px) {
  .logo {
    flex-direction: column;
    max-width: 335px;
  }
}

@media screen and (max-width: 614px) {
  .logo {
    padding: 0 0 0 10px;
  }
}
@media screen and (max-width: 479px) {
  .logo {
    padding: 0;
  }
}
</style>
