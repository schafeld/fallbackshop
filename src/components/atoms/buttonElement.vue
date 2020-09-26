<template>
  <span class="button-element">
    <span v-if="type==='order_submit_button'">
      <div class="submitButton section">
        <div class="buttons" data-sccompid="order submit button">
          <span
            class="btn full-btn"
            :class="{'inactive':inactive, 'ume-spinner': spinner}"
            @click="checkIfSend"
            :disabled="inactive"
          >{{label}}</span>
        </div>
      </div>
    </span>
    <span v-if="type==='form_submit_button'">
      <div class="submitButton section">
        <div class="buttons" data-sccompid="order submit button">
          <span
            class="btn js_submitPersonalDetails full-btn js_next"
            :class="{'inactive':inactive, 'ume-spinner': spinner}"
            id="personaldet"
            @click="checkIfSend"
            :disabled="inactive"
          >{{label}}</span>
        </div>
      </div>
    </span>
    <span v-if="type === 'direct-link'">
      <a @click="$emit('buttonClicked')">
        <span v-html="label"/>
      </a>
    </span>
    <span v-if="type === 'button_element'">
      <a
        :class="{'btn--white':inverted,'tertiary-btn':transparent, 'ume-spinner': spinner}"
        class="btn"
        tabindex="4"
        @click="$emit('buttonClicked')"
      >
        <span v-html="label"/>
      </a>
    </span>
    <span v-if="linkTo">
      <span v-if="type === 'dcomm_button'">
        <div class="dcomm_button section" style>
          <div class="btnalign">
            <router-link
              :to="linkTo"
              :target="target"
              :class="{'btn--white':inverted,'tertiary-btn':transparent, 'ume-spinner': spinner}"
              class="btn"
              :data-teaser-tracking-id="'TIFA-' + tifa"
            >
              <span v-html="label"/>
            </router-link>
          </div>
        </div>
      </span>
      <span v-if="type === 'hyperlink'">
        <router-link
          data-action="Hyperlink"
          data-upc-tooltip-type="none"
          :target="target"
          :to="linkTo"
          :data-teaser-tracking-id="'TIFA-' + tifa"
          class="plain-link"
        >{{label}}</router-link>
      </span>
      <span v-if="type === 'hyperlink-inverted'">
        <router-link
          data-action="Hyperlink"
          data-upc-tooltip-type="none"
          :target="target"
          :to="linkTo"
          :data-teaser-tracking-id="'TIFA-' + tifa"

          class="plain-link-inverted"
        >
          <span v-html="label"/>
        </router-link>
      </span>
    </span>
    <span v-if="href">
      <span v-if="type === 'dcomm_button'">
        <div class="dcomm_button section" style>
          <div class="btnalign">
            <a
              :href="href"
              :target="target"
              :class="{'btn--white':inverted,'tertiary-btn':transparent, 'ume-spinner': spinner}"
              class="btn"
              :data-teaser-tracking-id="'TIFA-' + tifa"
            >
              <span v-html="label"/>
            </a>
          </div>
        </div>
      </span>
      <span v-if="type === 'hyperlink'">
        <a
          data-action="Hyperlink"
          data-upc-tooltip-type="none"
          :target="target"
          :href="href"
          :data-teaser-tracking-id="'TIFA-' + tifa"
        >
          <span v-html="label"/>
        </a>
      </span>
      <span v-if="type === 'hyperlink-inverted'">
        <a
          data-action="Hyperlink"
          data-upc-tooltip-type="none"
          :target="target"
          :href="href"
          :data-teaser-tracking-id="'TIFA-' + tifa"
        >
          <span v-html="label"/>
        </a>
      </span>
    </span>
  </span>
</template>
<script>
export default {
  name: 'clickButton',
  props: {
    label: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      required: false
    },
    transparent: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    tifa: {
      type: String,
      required: false
    },
    linkTo: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false
    },
    target: {
      type: String,
      required: false
    },
    inactive: {
      type: Boolean,
      required: false
    },
    spinner: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    checkIfSend () {
      if (!this.inactive) {
        this.$emit('buttonClicked')
      }
    }
  }
}
</script>
<style scoped>
.btn {
  background-color: var(--color-vodafone-red);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
  padding: 12px 20px;
  color: var(--color-vodafone-white);
  font-family: VodafoneRg;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
}
.btn:hover {
  background-color: var(--color-digital-maroon);
}
.btn:active {
  background-color: var(--color-digital-dark-red);
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}

.btn.grey-btn {
  background-color: var(--color-vodafone-dark-grey);
}
.btn.grey-btn:hover {
  background-color: var(--color-vodafone-black);
}
.btn.grey-btn:active {
  background-color: var(--color-vodafone-grey);
}

.btn.white-btn {
  color: var(--color-vodafone-grey);
  background-color: var(--color-vodafone-white);
}
.btn.white-btn:hover {
  background-color: var(--color-vodafone-aluminium);
}
.btn.white-btn:active {
  background-color: var(--color-vodafone-light-grey);
}

.light-bg .btn.outline-btn,
.btn.outline-btn {
  border: 1px solid var(--color-vodafone-dark-grey);
  background: rgba(0, 0, 0, 0);
  color: var(--color-vodafone-dark-grey);
}
.light-bg .btn.outline-btn:active,
.light-bg .btn.outline-btn:hover,
.btn.outline-btn:active,
.btn.outline-btn:hover {
  color: var(--color-vodafone-grey);
  border: 1px solid var(--color-vodafone-platinum);
  box-shadow: none;
}
.dark-bg .btn.outline-btn {
  border: 1px solid var(--color-vodafone-white);
  background: rgba(0, 0, 0, 0);
  color: var(--color-vodafone-white);
}
.dark-bg .btn.outline-btn:active,
.dark-bg .btn.outline-btn:hover,
.btn.outline-btn:active,
.btn.outline-btn:hover {
  color: var(--color-vodafone-grey);
  border: 1px solid var(--color-vodafone-platinum);
  box-shadow: none;
}

.grey-btn.disabled,
.grey-btn.disabled:active,
.grey-btn.disabled:hover,
.red-btn.disabled,
.red-btn.disabled:active,
.red-btn.disabled:hover,
.white-btn.disabled,
.white-btn.disabled:active,
.white-btn.disabled:hover
 {
  background-color: #CCCCCC;
  color: #999999;
  box-shadow: none;
}
.ume-section a:link:not(.btn).plain-link {
  color:var(--color-vodafone-dark-grey);
}
</style>
