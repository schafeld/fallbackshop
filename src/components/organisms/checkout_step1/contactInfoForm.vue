<template>
  <div class="contactinfo parbase section">
    <fieldset
      data-sccompid="email and phone"
      class="fieldset wideform profilecontainer"
      :class="{'':contactInfoFormCheck}"
    >
      <div class="formrow">
        <div class="formrow-col w-1of1">
          <float-label>
            <input
              v-validate="{'required':true, min: 6, max: 60, 'email': true }"
              data-vv-as="email"
              :class="{'input': true, 'required': true, 'error': errors.has('email'), 'valid':(formEmailFlag.valid && formEmailFlag.dirty) }"
              type="email"
              id="email"
              name="email"
              minlength="6"
              maxlength="60"
              aria-required="true"
              tabindex="41"
              v-model="formEmail"
              placeholder="E-Mail Adresse *"
              @click="trackFormfield('email')"
            >
          </float-label>
          <span v-show="errors.has('email')">Bitte E-Mail korrigieren</span>
        </div>
      </div>
      <div class="formrow">
        <div
          class="formrow-col"
          :class="{'w-1of4':this.$data.window.width > 479, 'w-1of3':this.$data.window.width < 479}"
        >
          <float-label>
            <input
              v-validate="{ 'required': true, regex: /^[0][0-9]{2,}$/}"
              :class="{'input': true, 'required': true, 'error': errors.has('phone'), 'valid':(formPhonePrefixFlag.valid && formPhonePrefixFlag.dirty) }"
              type="tel"
              id="prefix"
              name="phone"
              pattern="^[0][0-9]+"
              minlength="3"
              maxlength="5"
              aria-required="true"
              tabindex="42"
              v-model="formPhonePrefix"
              placeholder="Vorwahl *"
              @click="trackFormfield('phone')"
            >
          </float-label>
          <span v-show="errors.has('phone')">Bitte Vorwahl korrigieren</span>
        </div>
        <div
          class="formrow-col"
          :class="{'w-3of4':this.$data.window.width > 479, 'w-2of3':this.$data.window.width < 479}"
        >
          <float-label>
            <input
              v-validate="{'required': true, regex: /^[0-9]{3,}$/}"
              :class="{'input': true, 'required': true, 'error': errors.has('phonenumber'), 'valid':(formPhoneNumberFlag.valid && formPhoneNumberFlag.dirty) }"
              type="tel"
              name="phonenumber"
              id="phonenumber"
              class="tel"
              pattern="[0-9]+"
              maxlength="10"
              aria-required="true"
              tabindex="43"
              v-model="formPhoneNumber"
              placeholder="Rufnummer *"
              @click="trackFormfield('phonenumber')"
            >
          </float-label>
          <span v-show="errors.has('phonenumber')">Bitte Telefonnummer korrigieren</span>
        </div>
      </div>
      <span v-if="$data.DEBUG">Contact Information Form Check Parameter: {{contactInfoFormCheck}}</span>
    </fieldset>
  </div>
</template>

<script>
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'contactInfoForm',
  methods: {
    trackFormfield
  },
  computed: {
    ...mapFields({
      formEmailFlag: 'email',
      formPhonePrefixFlag: 'phone',
      formPhoneNumberFlag: 'phonenumber'
    }),
    formEmail: {
      get () {
        return this.$store.state.visitor.customer.email
      },
      set (value) {
        this.$store.commit('setEmail', value)
      }
    },
    formPhonePrefix: {
      get () {
        return this.$store.state.visitor.customer.phonePrefix
      },
      set (value) {
        this.$store.commit('setPhonePrefix', value)
      }
    },
    formPhoneNumber: {
      get () {
        return this.$store.state.visitor.customer.phoneNumber
      },
      set (value) {
        this.$store.commit('setPhoneNumber', value)
      }
    },
    contactInfoFormCheck () {
      if (
        this.formEmailFlag.valid &&
        this.formPhonePrefixFlag.valid &&
        this.formPhoneNumberFlag.valid
      ) {
        this.$store.commit('setContactInfoFormCheck', true)
      } else {
        this.$store.commit('setContactInfoFormCheck', false)
      }
      return this.$store.state.visitor.checkoutFormCheck.contactInfoFormCheck
    }
  }
}
</script>
<style scoped>
.formrow {
  padding-bottom: 0px;
  padding-left: 15px;
}
.formrow-col {
  margin: 0;
  padding-left: 0;
  padding-right: 15px;
}
.fieldset {
  margin-bottom: 0px;
}
input, select {
  margin-top: 10px;
}
@media screen and (max-width: 879px) {
  .formrow {
    padding-top: 10px;
  }
  .checkout .wideform .formrow > .label {
    display: none;
  }
}
@media screen and (max-width: 479px) {
  .formrow {
    padding: 0 0 0 16px;
  }
  .formrow-col {
    padding: 20px 8px 0 0;
  }
  .formrow-col.title {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  input[type="radio"] ~ .tick-label::before,
  .checkout input[type="radio"]:checked ~ .tick-label::after {
    top: 5px;
  }
  .checkout .tick-label {
    font-size: 1.8rem;
    line-height: 24px;
    font-weight: normal;
  }
  input#email,
  input#prefix,
  input#phonenumber {
    font-size: 16px;
    line-height: 24px;
  }
  .fieldset {
    margin-bottom: 0;
  }
}
</style>
