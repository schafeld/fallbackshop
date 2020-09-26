<template>
  <div class="grid-col w-2of3 w-1of1-sm">
    <div class="box checkout-box checkout-step-revieworder">
      <div class="box-body">
        <div class="rightContent parsys">
          <div class="headlineMain section">
            <h2 class="step-headline">4. Bestellübersicht</h2>
          </div>
          <checkout-basket-extended/>
          <div class="formBonus section">
            <fieldset class="fieldset">
              <div class="box-bonus js_voucher" data-sccompid="voucher input">
                <div class="js_voucher-error errorbar small w-1of1"></div>
                <input
                  disabled
                  type="text"
                  id="coupon_code"
                  name="coupon_code"
                  placeholder="Gutschein-Code"
                >
                <button
                  disabled
                  class="js_voucher-submit btn small-btn tertiary-btn"
                  style="background:grey"
                >Einlösen</button>
              </div>
            </fieldset>
          </div>
          <send-order-form/>
        </div>
      </div>
    </div>
    <checkout-footnotes/>
  </div>
</template>
<script>
import checkoutBasketExtended from '@/components/molecules/checkout/checkoutBasketExtended.vue'
import checkoutFootnotes from '@/components/atoms/checkoutFootnotes.vue'
import sendOrderForm from '@/components/organisms/sendOrderForm.vue'

export default {
  name: 'checkoutStep2Form',
  data () {
    return {
      permissionMgmt: false,
      creditworthiness: false,
      creditcheckconsent: false,
      termsandconditionscheck: false
    }
  },
  components: {
    checkoutBasketExtended,
    checkoutFootnotes,
    sendOrderForm
  },
  created () {
    window.addEventListener('beforeunload', this.handler)
  },
  methods: {
    handler: function handler (event) {
      if (this.$data.DEBUG) {
        console.log('Sad to see you leaving...')
      }
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 479px)
{
.fieldset {
    margin: 0;
  }
  .rowform {
    padding: 0 8px 0 16px;
  }
  .rowform-col {
    padding: 20px 8px 0 0;
  }
  .tick-label {
    margin: .2rem 1.5rem 1rem 2.2rem;
  }
  .tick > input[type="checkbox"]:not(:checked) ~ .tick-label::before,
  .tick > input[type="checkbox"]:checked ~ .tick-label::before {
    width: 24px;
    height: 24px;
    font-size: 1.6em;
  }
  span.link {
    color: #666666;
  }
  span.tick-label {
    padding-left: 15px;
    font-size: 16px;
    line-height: 24px;
  }
  input#zip {
    font-size: 1.3em;
  }
  select#city,
  select#street,
  select#streetno {
    font-size: 1.2em;
  }
  }
</style>
