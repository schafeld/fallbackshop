/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'
import buttonElement from '../src/components/atoms/buttonElement.vue'
import buttonLogin from '../src/components/atoms/buttonLogin.vue'
import moduleWrapper from '../src/components/atoms/moduleWrapper.vue'
import logo from '../src/components/atoms/logo.vue'
import dialogBox from '../src/components/atoms/dialogBox.vue'
import twister from '../src/components/atoms/twister.vue'

storiesOf('buttonElement', module)
  .add('Button', () => ({
    components: { buttonElement },
    template: '<button-element type="button_element" label="Bestellen"/>'
  }))
  .add('Button (busy)', () => ({
    components: { buttonElement },
    // TODO: Fix prop type checking in button component (see console!)
    // [Vue warn]: Invalid prop: type check failed for prop "spinner". Expected Boolean, got String with value "true".
    template: `<button-element type="button_element" spinner=${true} label="Bestellung abgeschickt... "/>`
  }))
  .add('Form Submit', () => ({
    components: { buttonElement },
    template: '<button-element type="form_submit_button" label="Bestellen"/>'
  }))
  .add('Direct Link', () => ({
    components: { buttonElement },
    template: '<button-element type="direct-link" href="/" label="Bestellen"/>'
  }))
  .add('Dcom Button', () => ({
    components: { buttonElement },
    template: '<button-element type="dcomm_button" href="/" label="Bestellen"/>'
  }))
  .add('Hyperlink', () => ({
    components: { buttonElement },
    template: '<button-element type="hyperlink" href="/" label="Bestellen"/>'
  }))
  .add('Hyperlink Inverted', () => ({
    components: { buttonElement },
    template: '<button-element type="hyperlink-inverted" href="/" label="Bestellen"/>'
  }))

storiesOf('Headline', module)
  .add('h1 Headline', () => ({
    template: '<h1 class="h1">Lorem Ipsum Solum</h1>'
  }))
  .add('h2 Headline', () => ({
    template: '<h1 class="h2">Lorem Ipsum Solum</h1>'
  }))
  .add('h3 Headline', () => ({
    template: '<h1 class="h3">Lorem Ipsum Solum</h1>'
  }))
  .add('h4 Headline', () => ({
    template: '<h1 class="h4">Lorem Ipsum Solum</h1>'
  }))
  .add('h5 Headline', () => ({
    template: '<h1 class="h5">Lorem Ipsum Solum</h1>'
  }))

storiesOf('Gradient', module)
  .add('Gradient 1', () => ({
    template: '<div class="gradient-1-bg" style="height:250px"/>'
  }))
  .add('Gradient 2', () => ({
    template: '<div class="gradient-2-bg" style="height:250px"/>'
  }))
  .add('Gradient 3', () => ({
    template: '<div class="gradient-3-bg" style="height:250px"/>'
  }))
  .add('Gradient 4', () => ({
    template: '<div class="gradient-4-bg" style="height:250px"/>'
  }))
  .add('Gradient 5', () => ({
    template: '<div class="gradient-5-bg" style="height:250px"/>'
  }))
  .add('Gradient 6', () => ({
    template: '<div class="gradient-6-bg" style="height:250px"/>'
  }))
  .add('Gradient 7', () => ({
    template: '<div class="gradient-7-bg" style="height:250px"/>'
  }))
  .add('Gradient 8', () => ({
    template: '<div class="gradient-8 -bg" style="height:250px"/>'
  }))

storiesOf('buttonLogin', module)
  .add('button Login', () => ({
    components: { buttonLogin },
    template: '<button-login wrapperClasses="login-btn-wrapper login-btn--comparison" trackingString_prop75="privatkunden/fallback_kombipakete_vergleichen: Login-Knopf" trackingString_tl="Fallback Vergleichstabelle: Login-Knopf" />'
  }))

storiesOf('dialogBox', module)
  .add('Standard Dialog', () => ({
    components: { dialogBox },
    template: '<dialog-box :visibleCheck="true"><p class="h2">Example Text with example lines of words</p></dialog-box>'
  }))

storiesOf('Logo', module)
  .add('Firmenlogo', () => ({
    components: { logo },
    template: '<logo/>'
  }))

storiesOf('Module Wrapper', module)
  .add('Standard Module without gradient', () => ({
    components: { moduleWrapper },
    template: '<module-wrapper headline="Lorem Ispum" :darkBg="true"><p class="h2">Lorem Ipsum Example</p></module-wrapper>'
  }))
  .add('Standard Module with gradient', () => ({
    components: { moduleWrapper },
    template: '<module-wrapper headline="Lorem Ispum" background="linear-gradient(225deg, #0e9a98, #08346c)" :darkBg="true"><p class="h2">Lorem Ipsum Example</p></module-wrapper>'
  }))

storiesOf('Twister', module)
  .add('Standard Twister', () => ({
    components: { twister },
    template: '<twister twisterUrl="/content/dam/dcomm-unitymedia-de/Privatkunden/twister/5/Colour-Twister-01_normal.svg" top="140"/>'
  }))

/* eslint-enable react/react-in-jsx-scope */
