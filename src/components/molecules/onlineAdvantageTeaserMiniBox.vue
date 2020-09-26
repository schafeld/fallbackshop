<template>
  <div
    class="online-discount vodafone-style"
    :class="{'promotion': promotion}"
  >
    <div class="price">{{promoValue}} €</div>
    <div class="text">{{promotion? 'Doppelte ' : 'Online-'}}Rechnungsgutschrift
      <sup>
        <umefn
          id="UMEFN_235"
          tooltipWrapperCss="left-tooltip"
        />
      </sup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'online-advantage-mini-box',
  props: {
    promoValue: {
      type: Number,
      required: true
    },
    promotion: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style>
.comparison-table table .online-discount {
  /* background: linear-gradient(
    0,
    rgba(255, 255, 255, 0.25) 0,
    rgba(255, 255, 255, 0.12) 100%
  ); */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px -13px;
}
.comparison-table table .online-discount.vodafone-style {
    background: #007C92;
    color: #ffffff;
}
.comparison-table table .online-discount .price {
  font-size: 20px;
  font-size: 2rem;
  line-height: 1.2;
  padding-top: 5px;
}
.comparison-table table .online-discount .text {
  font-size: 13px;
  font-size: 1.3rem;
  padding: 5px 0px;
  line-height: 1.23077;
}
</style>
