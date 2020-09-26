<template>
  <div class="checkout js_chat-checkout">
    <div class="body">
      <div class="container">
        <input type="hidden" name="action" value="ORDER_SUBMIT">
        <left-box/>
        <right-box/>
        <footer-box/>
      </div>
    </div>
  </div>
</template>
<script>
import leftBox from '@/components/checkout_step2/leftBox.vue'
import rightBox from '@/components/checkout_step2/rightBox.vue'
import footerBox from '@/components/checkout_step2/footerBox.vue'

export default {
  components: {
    leftBox,
    rightBox,
    footerBox
  }
}
</script>
