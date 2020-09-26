<template>
  <div class="phonedirectoryentry section">
    <div>
      <div class="formrow" data-sccompid="phone directory entry">
        <div class="formrow-col w-1of1">
          <label class="tick">
            <input
              type="checkbox"
              name="phoneBookEntry"
              id="phoneBookEntry"
              value="true"
              tabindex="58"
              v-model="telephoneBookEntryWanted"
              @click="trackFormfield('phoneBookEntry')"
            >
            <span class="tick-label">
              <span class="link">Telefonbucheintrag</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'telefoneBookEntry',
  methods: {
    trackFormfield
  },
  computed: {
    telephoneBookEntryWanted: {
      get () {
        return this.$store.state.visitor.customer.phoneBookEntry
      },
      set (value) {
        this.$store.commit('setTelephoneBookEntry', value)
      }
    }
  }
}
</script>
<style scoped>
.formrow {
  margin-top: 10px;
  padding-left: 15px;
}
.formrow-col {
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 479px) {
  .phonedirectoryentry {
    padding-bottom: 30px;
  }
  p, .formrow {
    margin: 0 0 5px 0;
    font-size: 1.2em;
  }
  .formrow,
  .formrow-col {
    margin: 0 0 0 2px;
    padding: 0;
  }
  .tick {
    padding-top: 10px;
  }
  .tick-label {
    margin: .2rem 1.5rem 1rem 2.2rem;
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
    background-color: #6FB621;
  }
  span.link {
    color: #666666;
    font-weight: 300;
  }
  span.tick-label {
    padding-left: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  input {
    font-size: 1.2em;
  }
  .select, option {
    font-size: 16px;
  }
  .vfl-has-label {
    width: 100%;
  }
}
</style>
