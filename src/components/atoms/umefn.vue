<template>
  <span class="umefn-button">
    <span
      class="btn asterisk-orb tooltip-icon"
      @click="toggleShow()"
    ></span>
    <overlay
      :show="show"
      v-on:closeOverlay="toggleShow()"
    >
      <span class="body-style">
        <strong>Rechtliche Hinweise</strong>
        <br>
        {{umefnObject.content}}
      </span>
      <span v-if="additionalText.length > 0">
        <span
          v-for="(additional, index) in additionalText"
          :key="index"
          class="body-style"
        >
          <strong>Rechtliche Hinweise</strong>
          <br>
          {{additional}}
        </span>
        <br>
      </span>
    </overlay>
  </span>
</template>

<script>
// TODO: Refactor umefn.vue and tooltip.vue into 1 tooltip component.
import overlay from '@/components/atoms/overlay.vue'
export default {
  name: 'UMEFN',
  props: {
    id: {
      type: String,
      required: true
    },
    additional: {
      type: Array,
      requried: false
    },
    order: {
      type: String,
      required: false,
      default: 'not-specified'
    },
    tooltipWrapperCss: {
      type: String,
      required: false,
      default: ''
    }
  },
  components: {
    overlay
  },
  computed: {
    umefnObject () {
      if (this.id) {
        let tempText = this.$store.getters.getLegalText(this.id)[0]
        if (tempText) {
          return tempText
        } else {
          if (this.$data.DEBUG) {
            console.log('unable to find ' + this.id + ' from database')
          }
          return { content: this.id }
        }
      } else {
        if (this.$data.DEBUG) {
          console.log('no legaltext given to display')
        }
        return ''
      }
    },
    additionalText () {
      let tempArray = []
      if (this.additional) {
        this.additional.forEach(singleAdditional => {
          let helperText = ''
          helperText += this.$store.getters.getLegalText(singleAdditional)[0]
            .content
          if (helperText) {
            tempArray.push(helperText)
          } else {
            tempArray.push('')
            if (this.$data.DEBUG) {
              console.log(
                'unable to find ' + singleAdditional + ' from database'
              )
            }
          }
        })
      } else {
        if (this.$data.DEBUG) {
          console.log('no legaltext given to display')
        }
      }
      return tempArray
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.asterisk-orb {
  height: 15px;
  width: 15px;
  padding: 0;
  margin: 0;
  text-align: center;
  vertical-align: middle;
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 22px;
  box-shadow: none;
}
.dark-bg .asterisk-orb {
    background-color: #fff;
    color: #e60000;
}
.tooltip-icon {
  position: relative;
  background: #e60000;
  color: #ffffff;
}

/* TODO: Refactor color names (white, green) into semantic names (light, dark). */
.dark-asterisk .tooltip-icon,
.green-asterisk .tooltip-icon {
  background: #e60000;
  color: #ffffff;
}
.dark-asterisk .asterisk-orb:after,
.green-asterisk .asterisk-orb:after {
  color: white;
}

.light-asterisk .tooltip-icon,
.white-asterisk .tooltip-icon {
  color: var(--color-vodafone-red);
  background: #ffffff;
}
.light-asterisk .asterisk-orb:after .white-asterisk .asterisk-orb:after {
  color: #333333;
}

/* Hotfix for SmallPromoBoxes on product detail pages. Same effect as .tooltip.left-tooltip */
/* TODO: Use a better (truly full-responsive) tooltip in next project iteration. */
@media screen and (min-width: 320px) and (max-width: 979px) {
  .tooltip-number-1 .tooltip-layer {
    left: auto;
    right: -11px;
  }
  .tooltip-number-1 .tooltip-layer::before,
  .tooltip-number-1 .tooltip-layer::after {
    left: auto;
    right: 10px;
  }
}
@media screen and (min-width: 570px) and (max-width: 979px) {
  .tooltip-number-2 .tooltip-layer {
    left: auto;
    right: -11px;
  }
  .tooltip-number-2 .tooltip-layer::before,
  .tooltip-number-2 .tooltip-layer::after {
    left: auto;
    right: 10px;
  }
}
@media screen and (max-width: 479px) {
  .tooltip-number-2 .tooltip-layer {
    left: auto;
    right: -11px;
  }
  .tooltip-number-2 .tooltip-layer::before,
  .tooltip-number-2 .tooltip-layer::after {
    left: auto;
    right: 10px;
  }
}
</style>
