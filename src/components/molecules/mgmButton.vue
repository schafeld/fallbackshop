<template>
  <div
    class="mgm-button"
    v-if="this.$data.window.width > 879"
  >
    <button-element
      type="button_element"
      label="Jetzt empfehlen"
      v-on:buttonClicked="toggleMgmDialog()"
    />
    <mgm-dialog
      :mgmUrl="mgmDesktopUrl"
      :dialogShow="mgmToggle"
      v-on:closeDialog="toggleMgmDialog()"
    />
  </div>

  <div
    class="mgm-button"
    v-else
  >
    <button-element
      type="dcomm_button"
      :href="mgmMobileUrl"
      target="_blank"
      label="Jetzt empfehlen"
    />
  </div>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'
import mgmDialog from '@/components/molecules/mgmDialog.vue'

export default {
  components: {
    buttonElement,
    mgmDialog
  },
  props: {
    mgmSku: {
      type: String,
      required: true
    },
    mediacode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mgmToggle: false
    }
  },
  methods: {
    toggleMgmDialog () {
      if (this.$data.DEBUG) {
        console.log('toggle dialog')
      }
      if (!this.mgmToggle) {
        const umeOverlay = document.querySelector('.ume-overlay')
        umeOverlay.classList.add('is-visible')
        // Set navigation background layer height to full page height
        umeOverlay.style.height = document.body.scrollHeight + 'px'
      } else {
        this.closeNavigationOverlay()
      }
      this.mgmToggle = !this.mgmToggle
      return this.mgmToggle
    }
  },
  computed: {
    mgmDesktopUrl () {
      return 'https://t.tellja.de/widget/button/P' + this.telljaHash + '?center=true&skin=41&t_mc=' + this.mediacode + '&mobile=false&standalone=true&t_art_number=' + this.mgmSku
    },
    mgmMobileUrl () {
      return 'https://t.tellja.de/widget/getwidget?lOut=43&adv=SFFZaA&rdmnm=1593162648582_2031392435&mobile=true&pcd=' + this.telljaHash + '&t_mc=' + this.mediacode + '&t_mc=mob&skin=41&demomode=false&layoutName=default&locale=de&tmz=1593162648582&wRef=null&wBtn=tellja_default_button&t_art_number=' + this.mgmSku
    },
    mobile () {
      return this.$data.window.width <= 819
    },
    telljaHash () {
      let tempString = ''
      switch (this.mgmSku) {
        case '2P_RIP_1000':
          tempString = 'baQOLA'
          break
        case '2P_RIP_500':
          tempString = 'wvo5Hg'
          break
        case '2P_RIP_250':
          tempString = 'vM9V-A'
          break
        case '2P_RIP_100_1w': // TODO: Outdated SKU? Delete?
          tempString = 'AftYKA'
          break
        case '2P_RIP_100_1':
          tempString = 'AftYKA'
          break
        case '2P_RIP_50':
          tempString = 'Vyhw3w'
          break
        case '2P_RIP_1000_HZN':
          tempString = '5dh_Hg'
          break
        case '2P_RIP_500_HZN':
          tempString = 'CS_9ew'
          break
        case '2P_RIP_250_HZN':
          tempString = 'V1L_1w'
          break
        case '2P_RIP_100_HZN':
          tempString = 'R6Ig8Q'
          break
        case '2P_RIP_50_HZN':
          tempString = 'izYVRw'
          break
        case 'TV_Allstars':
          tempString = 'EtuLLQ'
          break
        case 'PayALB':
          tempString = 'UGKhWw'
          break
        case 'PayARAB':
          tempString = '2cupZA'
          break
        case 'PayBOSN':
          tempString = 'x2qzNw'
          break
        case 'PayFRA':
          tempString = 'idhosg'
          break
        case 'PayGRIE':
          tempString = 'mfp6vg'
          break
        case 'PayITAL':
          tempString = 'DEoCIg'
          break
        case 'PayJAPAN':
          tempString = 'oYZXFw'
          break
        case 'PayKROA':
          tempString = 'qZ1dKQ'
          break
        case 'PayPOL':
          tempString = 'qZ1dKQ'
          break
        case 'PayRUSS':
          tempString = 'tlWVVg'
          break
        case 'PaySERB':
          tempString = 'Pmy8Nw'
          break
        case 'PaySPA':
          tempString = 'ChsuvQ'
          break
        case 'PayTURKBAS':
          tempString = 'l3tZuw'
          break
      }
      return tempString
    }
  }
}
</script>
