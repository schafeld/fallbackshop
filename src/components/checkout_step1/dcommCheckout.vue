<template>
  <!-- Checkout page 1, customer address and order details entry. -->
  <div class="body">
    <div class="container">
    <form @submit.prevent="validateForm">
      <div class="grid-col w-2of3 w-1of1-sm">
        <checkout-basket/>
        <left-box-form/>
      </div>
      <div class="grid-col w-1of3 w-1of1-sm">
        <right-box-form/>
      </div>
      <footer-box-form/>
    </form>
  </div>
  </div>
</template>

<script>
/* TODO: Use better names than leftbox/rightbox. */
import checkoutBasket from '@/components/molecules/checkout/checkoutBasket.vue'
import leftBoxForm from '@/components/checkout_step1/form/leftbox.vue'
import rightBoxForm from '@/components/checkout_step1/form/rightbox.vue'
import footerBoxForm from '@/components/checkout_step1/form/footerbox.vue'

export default {
  components: {
    checkoutBasket,
    leftBoxForm,
    rightBoxForm,
    footerBoxForm
  }
}
</script>

<style scoped>
.body {
  max-width: 1800px;
  margin: 0 auto;
}
@media screen and (max-width: 479px) {
  .grid-col {
    padding-right: 10px;
  }
}
</style>
