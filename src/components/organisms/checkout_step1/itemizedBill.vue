<template>
  <div class="itemizedbill section">
    <div>
      <div class="formrow" data-sccompid="itemized bill">
        <div class="formrow-col w-1of1 js_toggle">
          <label class="tick js_toggle-trigger">
            <input
              v-model="checkedItemizedBill"
              class="product-option"
              name="itemizedBill"
              id="billItemized"
              type="checkbox"
              value="true"
              tabindex="54"
              @click="trackFormfield('itemizedBill')"
            >
            <span class="tick-label">
              <span class="link">Einzelverbindungsnachweis</span>
            </span>
          </label>
          <!--  toggle-wrapper  style="height: 0px;" -->
          <div class="js_toggle-wrapper" v-if="checkedItemizedBill">
            <div class="toggle-content js_toggle-content">
              <fieldset class="fieldset wideform">
                <p>Auf dem Einzelverbindungsnachweis sollen die Rufnummern der Verbindungen, für die ich entgeltpflichtig bin,</p>
                <div class="">
                  <div class="formrow-col w-1of1">
                    <label class="tick is-active">
                      <input
                        class="product-option required"
                        name="billtype_itemized"
                        type="radio"
                        value="ITEMIZED_BILL_FULL"
                        aria-required="true"
                        :disabled="!checkedItemizedBill"
                        tabindex="55"
                        v-model="billtypeItemized"
                        @click="trackFormfield('billtype_itemized_full')"
                      >
                      <span class="tick-label">vollständig</span>
                    </label>
                    <label class="tick is-active">
                      <input
                        class="product-option required"
                        name="billtype_itemized"
                        type="radio"
                        value="ITEMIZED_BILL_SHORT"
                        aria-required="true"
                        :disabled="!checkedItemizedBill"
                        tabindex="56"
                        v-model="billtypeItemized"
                        @click="trackFormfield('billtype_itemized_short')"
                      >
                      <span class="tick-label">um die letzten drei Ziffern gekürzt</span>
                    </label>
                  </div>
                </div>
                <p>wiedergegeben werden.</p>
                <div class="">
                  <div class="formrow-col w-1of1">
                    <label class="tick">
                      <input
                        class="product-option required"
                        id="EVNNOTICE_checkbox"
                        name="EVNNOTICE_checkbox"
                        type="checkbox"
                        value="EVNNOTICE"
                        aria-required="true"
                        :disabled="!checkedItemizedBill"
                        tabindex="57"
                        v-model="evinnnoticeCheckbox"
                        @click="trackFormfield('EVNNOTICE_checkbox')"
                      >
                      <span
                        class="tick-label"
                      >Ich habe alle derzeitigen Mitbenutzer des Anschlusses informiert und werde künftige Mitbenutzer unverzüglich informieren, dass ich einen Einzelverbindungsnachweis erhalte.</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackFormfield from '@/helper/trackFormfield'

export default {
  name: 'itemizedBilld',
  methods: {
    trackFormfield
  },
  computed: {
    checkedItemizedBill: {
      get () {
        return this.$store.state.visitor.customer.itemizedBill
          .itemizedBillWanted
      },
      set (value) {
        this.$store.commit('setItemizedBill', value)
      }
    },
    evinnnoticeCheckbox: {
      get () {
        return this.$store.state.visitor.customer.itemizedBill.coUsersInformed
      },
      set (value) {
        this.$store.commit('setEvinnnotice', value)
      }
    },
    billtypeItemized: {
      get () {
        return this.$store.state.visitor.customer.itemizedBill.billtype
      },
      set (value) {
        this.$store.commit('setBilltypeItemized', value)
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
  padding-left: 0px;
}
.fieldset {
    margin-bottom: 0;
  }
@media screen and (max-width: 479px) {
  .itemizedbill.section {
    margin: 1em 0;
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
    padding-top: 0;
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
