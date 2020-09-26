<template>
  <div class="flex wrap space-between option-box">
    <div>
      <span class="headline">{{optionObject.headline}}</span>
      <tooltip v-if="optionObject.subline">
        <p v-if="optionObject.img">
          <img :src="optionObject.img" />
        </p>
        <p v-if="calculatedSubline">{{calculatedSubline}}</p>
        <p v-else>{{optionObject.subline}}</p>
      </tooltip>
    </div>
    <div class="flex space-between price">
      <span class="price">
        {{String(optionObject.monthly_price).replace('.',',')}} €
        <sup>
          <umefn :id="optionObject.legaltext" />
        </sup>
      </span>
      <div class="flexible-box__checkbox">
        <label
          class="tick check-tick"
          :data-sku="optionObject.sku"
        >
          <input
            type="checkbox"
            :name="'option' + optionObject.sku"
            :value="optionObject.sku"
            tabindex="3"
            @click="$emit('click'), checkmark = !checkmark"
            :class="{'js_additionalProduct':true, checkmark}"
          >
          <span class="tick-label">&nbsp;</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import tooltip from '@/components/atoms/tooltip.vue'
export default {
  name: 'productOption',
  data: () => ({
    checkmark: false
  }),
  watch: {
    $route (to, from) {
      // Remove optional product checkmark when navigating to other product page.
      // For corresponding items in array see productintro.vue
      this.checkmark = false
    }
  },
  components: {
    tooltip
  },
  props: {
    optionObject: {
      type: Object,
      required: true
    },
    addtionalValue: {
      type: Number,
      required: false
    }
  },
  computed: {
    calculatedEffect () {
      let tempEffect
      if (this.optionObject.effect === 'double') {
        tempEffect = this.addtionalValue * 2
      }
      return tempEffect
    },
    calculatedSubline () {
      let tempSubline
      if (this.optionObject.subline) {
        if (this.optionObject.subline.search('{{VALUE}}') !== -1) {
          tempSubline = this.optionObject.subline.replace(
            '{{VALUE}}',
            this.calculatedEffect
          )
        } else {
          tempSubline = null
        }
      }
      return tempSubline
    }
  }
}
</script>

<style scoped>
.option-box {
  background: #333333;
  color: #ffffff;
}
input[type="checkbox"].checkmark ~ .tick-label:before {
  content: "";
}
input[type="checkbox"] ~ .tick-label:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
}

.option-box {
  margin: 0 0 5px 0;
  padding: 15px;
}
.option-box .headline {
  font-size: 2.4rem;
  line-height: 1.08333;
  font-family: VodafoneRg, Arial, Helvetica, sans-serif;
}
.option-box .price {
  color: #ffffff;
  font-size: 2rem;
  line-height: 2.4rem;
}
.flex.price {
  max-width: 160px;
  width: 100%;
}
@media screen and (max-width: 479px) {
  .flexible-box {
    padding: 5px 10px;
  }
  .flexible-box__headline {
    margin-bottom: 0px;
  }
}
</style>
