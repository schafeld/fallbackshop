<template>
  <div :class="wrapperClasses">
     <!-- href="/benutzerkonto/login/zugangsdaten/" -->
    <a
      type="button"
      class="js_logindialog"
      @click="clickHandler"
      v-if="urlButton === true"
    >Sind sie schon Kunde bei uns? &gt; Kunden-Login</a>
    <a
      type="button"
      class="btn small-btn fbx-btn login-btn js_logindialog"
      @click="clickHandler"
      v-else
    >Kunden-Login</a>
    <div :class="iconClassesRendered" v-if="!urlButton"/>
  </div>
</template>

<script>
/* Hiding login button for logged-in existing customers exists in checkout_step1/form/leftbox.vue, see isExistingCustomer() */
export default {
  props: {
    wrapperClasses: {
      type: String,
      required: true
    },
    iconClasses: {
      type: String,
      required: false
    },
    trackingString_prop75: {
      type: String,
      required: true
    },
    trackingString_tl: {
      type: String,
      required: true
    },
    urlButton: {
      type: Boolean,
      required: false
    }
  },
  data: function () {
    return {
      iconClassesRendered: this.iconClasses + ' login-btn-icon'
    }
  },
  methods: {
    clickHandler () {
      this.trackLoginButton()
      this.navigateAway()
    },
    trackLoginButton () {
      // SiteCatalyst tracking login button, DA-3603
      try {
        if (window.ANALYTICS_ALLOWED) {
          window.sncf.linkTrackVars = 'prop75'
          window.sncf.linkTrackEvents = 'None'
          window.sncf.prop75 = this.trackingString_prop75 // 'privatkunden/fallback_checkout_step1: Login-Knopf'
          window.sncf.tl(true, 'o', this.trackingString_tl, null, 'navigate') // 'Fallback Checkout: Login-Knopf'
          window.sncf.linkTrackVars = 'None'
          console.log('Tracking login button, prop75: ' + window.sncf.prop75 + ', tl: ' + this.trackingString_tl)
        }
        return false
      } catch (e) {
        console.warn('Tracking failed for login button. ' + e)
      }
    },
    navigateAway () {
      window.location.assign('/benutzerkonto/login/zugangsdaten/')
    }
  }
}
</script>

<style scoped>
/* TODO: Refactor buttonLogi.vue (and buttonElement.vue?), make less complex, lose the '.fbx-btn' */
/* Note that Dcomm login button has become smaller and lost the icon. */
/* wrapper is outside this component, so do not scope this css. */
.fbx-btn.login-btn-wrapper {
  display: inline-block;
  position: relative;
  margin-bottom: 20px
}

.fbx-btn.login-btn {
  position: relative;
  z-index: 1;
  margin: 0;
  display: inline-block;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  background: transparent;
  white-space: nowrap
}

.fbx-btn.login-btn:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: auto;
  text-align: left;
  vertical-align: -12%
}

.fbx-btn.login-btn:hover,
.fbx-btn.login-btn:focus {
  background: inherit
}

.fbx-btn.login-btn-icon {
  color: #fff;
  height: 100%;
  width: 36px;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #fff;
  background: #e14b2b;
  font-size: 2rem;
  padding-top: 1px
}

.fbx-btn.login-btn-icon:after {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: 100%;
  text-align: center;
  vertical-align: sub
}

.fbx-btn.login-btn-icon--white {
  background: #fff;
  color: #262626
}
/* The trailing key icon isn't there anymore in Dcomm
.login-btn-icon:after {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ume-icons;
    content: "";
    display: inline-block;
    width: 100%;
    text-align: center;
    vertical-align: sub;
}
*/
a.btn.small-btn.fbx-btn.login-btn {
    margin-left: -7px;
    font-size: 11px;
    padding-left: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
}
.login-btn-wrapper.login-btn--comparison {
    margin: 0px;
}

@media screen and (max-width:979px) {
  .fbx-btn.login-btn {
    padding-left: 5px;
    padding-right: 40px
  }
  .fbx-btn.login-btn-icon {
    padding-top: 3px;
    width: 34px
  }
}
</style>
