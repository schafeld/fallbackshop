<template>
  <div class="profile parbase section">
    <fieldset
      class="fieldset wideform profilecontainer"
      data-sccompid="personal details"
      :class="{'': profileFormCheck}"
    >
      <div class="formrow">
        <div class="flex w-1of1 title">
          <label class="tick">
            <input
              v-validate="'required'"
              v-model="radioTitle"
              type="radio"
              name="title"
              value="Frau"
              :class="{'required title_Frau': true, 'error': errors.has('title')}"
              aria-required="true"
              tabindex="36"
              required
              :data-checked="this.$store.getters.title ==='Frau' ? 'checked' : false"
              @click="trackFormfield('title_frau')"
            >
            <span class="tick-label fresh">Frau</span>
          </label>
          <label class="tick">
            <input
              v-validate.immediate="'required'"
              v-model="radioTitle"
              type="radio"
              name="title"
              value="Herr"
              :class="{'required title_Herr': true, 'error': errors.has('title')}"
              aria-required="true"
              tabindex="37"
              :data-checked="this.$store.getters.title ==='Herr' ? 'checked' : false"
              @click="trackFormfield('title_herr')"
            >
            <span class="tick-label fresh">Herr</span>
          </label>
          <em
            v-show="errors.has('title')"
            id="title-error"
            class="error"
          >Bitte wählen Sie eine Anrede aus.</em>
        </div>
      </div>
      <div class="formrow">
        <div class="formrow-col w-1of1">
          <float-label>
            <input
              v-validate="{ required: true, min: 2, regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/ }"
              :class="{'input': true, 'required': true, 'error': errors.has('givenName'), 'valid':(profileGivenNameFlags.valid && profileGivenNameFlags.dirty) }"
              type="text"
              id="given-name"
              name="givenName"
              pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
              minlength="2"
              maxlength="32"
              aria-required="true"
              tabindex="38"
              v-model="formGivenName"
              placeholder="Vorname *"
              @click="trackFormfield('givenName')"
            >
          </float-label>
          <span v-show="errors.has('givenName')">Bitte Vornamen korrekt ausfüllen</span>
        </div>
      </div>

      <div class="formrow">
        <div class="formrow-col w-1of1">
          <float-label>
            <input
              v-validate="{ required: true, min: 2, regex: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/ }"
              :class="{'input': true, 'required': true, 'error': errors.has('familyName'), 'valid':(profileFamilyNameFlags.valid && profileFamilyNameFlags.dirty) }"
              type="text"
              id="family-name"
              name="familyName"
              pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
              minlength="2"
              maxlength="32"
              aria-required="true"
              tabindex="39"
              v-model="formFamilyName"
              placeholder="Nachname *"
              @click="trackFormfield('familyName')"
            >
          </float-label>
          <span v-show="errors.has('familyName')">Bitte Nachnamen korrekt ausfüllen</span>
        </div>
      </div>

      <div class="formrow">
        <div class="formrow-col w-1of1">
          <float-label label="Geburtsdatum *">
            <input
              type="text"
              v-validate="{ rules: { regex: /^\d\d\.\d\d\.\d\d\d\d$/} }"
              :class="{'input': true, 'required': true, 'error': errors.has('dateOfBirth') || !this.customerIsOfAge, 'valid':(profileDateOfBirthFlags.valid && profileDateOfBirthFlags.dirty) }"
              id="dateOfBirth"
              name="dateOfBirth"
              maxlength="10"
              pattern="^\d\d\.\d\d\.\d\d\d\d$"
              value
              aria-required="true"
              tabindex="40"
              v-model="formDateOfBirth"
              @click="trackFormfield('dateOfBirth')"
              placeholder="Geburtsdatum *"
            >
          </float-label>
          <span
            v-show="errors.has('dateOfBirth')"
          >Bitte Geburtsdatum korrigieren (Format TT.MM.JJJJ).</span>
          <span v-show="!this.customerIsOfLegalAge">Sie müssen mindestens 18 Jahre alt sein.</span>

          <span v-if="$data.DEBUG">
            Geburtsdatum: {{formDateOfBirth}}
            Alter: {{ customerAge }},
            volljährig: {{ customerIsOfAge }}
          </span>
        </div>
      </div>
      <span v-if="$data.DEBUG">Profile Form Check Parameter: {{profileFormCheck}}</span>
    </fieldset>
  </div>
</template>

<script>
import { mapFields } from 'vee-validate'
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'profileForm',
  data: () => ({
    customerAge: 0,
    customerIsOfAge: true,
    legalAge: 18
  }),
  methods: {
    trackFormfield,
    getAge (dateStringDE) {
      if (dateStringDE) {
        if (this.$data.DEBUG) {
          console.log('dateStringDE ' + dateStringDE)
        }

        // Split up German 'dd.mm.yyyy' date string.
        let parts = dateStringDE.match(/(\d+)/g)
        let dateDay = parts[0]
        let dateMonth = parts[1]
        let dateYear = parts[2]
        console.log('Date ' + dateDay + '. ' + dateMonth + '. ' + dateYear)

        // String numbers have no leading zeros, thus optional first digit for month and day.
        const regExDate = /^\d?\d\.\d?\d\.\d\d\d\d$/
        if (regExDate.test(dateStringDE)) {
          console.log('Valid date ')
          // only return age if input is complete and valid
          var today = new Date()
          // Index of month starts at 0.
          var birthDate = new Date(dateYear, dateMonth - 1, dateDay)
          var age = today.getFullYear() - birthDate.getFullYear()
          var m = today.getMonth() - birthDate.getMonth()
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
          }
          // eslint-disable-next-line
          return regExDate.test(dateStringDE)
            ? (this.customerAge = age)
            : false
        }
        console.log('Invalid date ')
        this.customerAge = 0
        return false
      }
    }
  },
  computed: {
    ...mapFields({
      profileTitleFlags: 'title',
      profileGivenNameFlags: 'givenName',
      profileFamilyNameFlags: 'familyName',
      profileDateOfBirthFlags: 'dateOfBirth'
    }),
    radioTitle: {
      get () {
        return this.$store.state.visitor.customer.title
      },
      set (value) {
        this.$store.commit('setTitle', value)
      }
    },
    formGivenName: {
      get () {
        return this.$store.state.visitor.customer.givenName
      },
      set (value) {
        this.$store.commit('setGivenName', value)
      }
    },
    formFamilyName: {
      get () {
        return this.$store.state.visitor.customer.familyName
      },
      set (value) {
        this.$store.commit('setFamilyName', value)
      }
    },
    formDateOfBirth: {
      get () {
        return this.$store.state.visitor.customer.dateOfBirth
      },
      set (value) {
        this.$store.commit('setDateOfBirth', value)

        this.customerIsOfAge =
          this.getAge(this.$store.state.visitor.customer.dateOfBirth) >=
          this.legalAge
        this.$store.commit('setIsOfLegalAge', this.customerIsOfAge)
      }
    },
    customerIsOfLegalAge: {
      get () {
        return this.$store.state.visitor.customer.isOfLegalAge
      },
      set (value) {
        this.$store.commit('setIsOfLegalAge', this.customerIsOfAge)
      }
    },
    profileFormCheck () {
      if (
        this.profileTitleFlags.valid &&
        this.profileGivenNameFlags.valid &&
        this.profileFamilyNameFlags.valid &&
        this.profileDateOfBirthFlags.valid &&
        this.customerIsOfLegalAge
      ) {
        this.$store.commit('setProfileFormCheck', true)
      } else {
        this.$store.commit('setProfileFormCheck', false)
      }
      return this.$store.getters.profileFormCheck
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
    padding-left: 15px;
  }
  .checkout .wideform .formrow > .label {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .checkout-box .box-body .tick {
    display: inline-block;
    padding-top: 15px;
  }
}
.checkout .tick-label {
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.42857;
}
.w-1of1 {
  width: 100%;
}
.tick {
  padding-top: 5px;
}
.tick-label {
  font-size: 13px;
  font-size: 1.3rem;
  line-height: 1.23077;
  display: block;
  margin: 0.2rem 1.5rem 0.6rem 2.2rem;
  color: #666;
  cursor: pointer;
  position: relative;
}
.tick ~ em.error {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  opacity: 1;
  position: static;
  background: #af0b37;
  color: #fff !important;
  border: none !important;
}
.error ~ .tick-label {
  color: #af0b37;
}
em.error {
  font-size: 12px;
  font-size: 1.2rem;
  line-height: 1.16667;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  max-width: 700px;
  bottom: 45px;
  right: 0;
  padding: 4px 8px;
  font-style: normal;
  background: #fff;
  border: 1px solid #666 !important;
  border-radius: 3px;
  color: #555 !important;
  transition: opacity 0.2s;
}
.tick > input[type="checkbox"]:checked,
.tick > input[type="checkbox"]:not(:checked),
.tick > input[type="radio"]:checked,
.tick > input[type="radio"]:not(:checked) {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 50%;
  left: 0;
  pointer-events: none;
  width: 1px;
}
.tick > input[type="checkbox"],
.tick > input[type="radio"] {
  float: left;
  margin: 6px -9px -6px 0;
}
/* Override border color if date format valid but age too young */
input#dateOfBirth[type="text"].valid.error {
  border-color: #af0b37;
}
@media screen and (max-width: 479px) {
  .fieldset {
    margin: 0;
  }
  .formrow {
    padding: 0 8px 0 16px;
  }
  .formrow-col {
    padding: 20px 0 0 0;
  }
  .tick-label {
    margin: 0.2rem 1.5rem 1rem 2.2rem;
    font-size: 1.8rem;
  }
  .tick > input[type="checkbox"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="checkbox"]:checked ~ .tick-label::before,
  .tick > input[type="radio"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="radio"]:checked ~ .tick-label::before {
    width: 24px;
    height: 24px;
    font-size: 1.6em;
  }
  .checkout input[type="radio"]:checked ~ .tick-label::after {
    width: 16px;
    height: 16px;
    background-color: #6fb621;
  }
  span.link {
    color: #666666;
  }
  span.tick-label {
    padding-left: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  input {
    font-size: 1.2em;
  }
  .select,
  option {
    font-size: 16px;
  }
  .vfl-has-label {
    width: 100%;
  }
}
</style>
