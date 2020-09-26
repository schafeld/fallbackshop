<template>
  <div
    class="basket"
    :class="{'body':this.$data.window.width > 479}"
  >
    <div :class="{'container':this.$data.window.width > 819}">
      <div :class="{'personalform personalformsubmission':this.$data.window.width > 479}">
        <div class="checkout-basket dark-bg">
          <span
            class="h3"
            style="padding: 10px 0 0 20px; margin: 0;"
            v-if="this.$data.window.width > 819"
          >Ihre Bestellung</span>
          <div
            class="intro flex row"
            :class="{'flex-start': this.$data.window.width > 619}"
          >
            <ul
              class="check-list plus-list"
              style="padding-top: 5px;"
            >
              <div class="title">
                {{basketArray[0].title}}
                <tooltip
                  v-if=" basketArray[0].bullets"
                  :content="getChecklist(basketArray[0].bullets)"
                />
              </div>
              <li
                v-for="(bulletpoint, index) in basketArray[0].bullets"
                :key="index"
              >
                <span v-html="$options.filters.legalTextReplacer($options.filters.toolTipReplacer(bulletpoint))" />
              </li>
            </ul>
            <ul class="check-list plus-list">
              <li
                v-for="(product, index) in basketArray.slice(1)"
                :key="index"
              >
                <div class="title">
                  {{product.title}}
                  <tooltip
                    v-if=" product.bullets"
                    :content="getChecklist(product.bullets)"
                  />
                </div>
                <div class="price">{{String(product.monthly_price).replace('.',',')}} € mtl.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tooltip from '@/components/atoms/tooltip.vue'
export default {
  data () {
    return {
      isExtended: true
    }
  },
  components: {
    tooltip
  },
  methods: {
    getChecklist (helperArray) {
      let helperString = ''
      helperString += '<ul class="check-list">'
      helperArray.forEach(bullet => {
        helperString += '<li>' + bullet + '</li>'
      })
      helperString += '</ul>'
      return helperString
    },
    basketValueEuros (price) {
      // return all characters before the decimal dot
      let helperString = price
      if (price.indexOf(',') > 0) {
        helperString = price.substring(0, price.indexOf(','))
      } else if (price.indexOf('.') > 0) {
        helperString = price.substring(0, price.indexOf('.'))
      }
      return helperString
    },
    basketValueCents (price) {
      // return only the last characters of the total price after the decimal dot
      let helperString = price
      if (price.indexOf(',') > 0) {
        helperString = price.substring(price.indexOf(',') + 1, price.length)
      } else if (price.indexOf('.') > 0) {
        helperString = price.substring(price.indexOf('.') + 1, price.length)
      }
      return helperString
    }
  },
  computed: {
    basketArray () {
      // TODO: Use getters/setters instead!
      return this.$store.state.visitor.basket
    },
    basketValue () {
      // request stored value for later calculations in extended view
      return this.$store.getters.priceTotalFloat
    }
  }
}
</script>
<style scoped>
.checkout-basket {
  border-radius: 4px;
  background: #820000;
  margin-bottom: 20px;
}
@media screen and (max-width: 619px) {
  .checkout-basket .intro,
  .checkout-basket .options,
  .checkout-basket .check-list {
    padding: 5px 10px;
  }
}
.checkout-basket .intro {
  padding: 18px 13px 6px 13px;
}
.checkout-basket .extended {
  background: rgba(255, 255, 255, 0.3);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  color: #ffffff;
  padding: 10px 13px 6px 13px;
  margin-top: 10px;
}
.extended-tagline {
  font-size: 16px;
  line-height: 24px;
}
.extended-tagline::after {
  font-family: ume-icons;
  content: "";
  font-size: 2.4rem;
  line-height: 1em;
  font-weight: bold;
  position: absolute;
  right: 20px;
  margin-top: 3px;
  transform: translateY(-50%);
  transform: rotateX(0);
  transition: all 0.3s linear;
}
.extended-tagline.isExtended::after {
  transform: rotateX(180deg);
  content: "";
}
.stage-details {
  padding-top: 2px;
}
.price-tag,
.options {
  font-family: VodafoneRg;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}
.price-tag.bullet {
  font-family: Helvetica;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
}
.check-list {
  padding-bottom: 10px;
  margin: 0;
  list-style: none;
}
.check-list li,
.options .plus-list .price {
  font-family: Helvetica;
  font-weight: 400;
}
.check-list li::before {
  font-size: 1.4em;
  color: #ffffff;
  position: absolute;
  font-family: ume-icons;
  content: "";
  top: -2px;
}
.check-list.plus-list .title {
  font-family: VodafoneRg;
  padding-bottom: 10px;
}
.check-list.plus-list li::before {
  font-family: VodafoneRg;
  content: "+";
  left: 3px;
  top: 0px;
}
.price-tag {
  font-weight: bold;
}
.price-tag.title {
  font-size: 18px;
  line-height: 22px;
  padding-bottom: 5px;
}
.price-tag.euro {
  font-size: 48px;
  letter-spacing: 0.5px;
  line-height: 54px;
  padding-right: 5px;
}
.price-tag.cent,
.price-tag.tagline {
  font-size: 18px;
  line-height: 24px;
}
.price-tag.sub-tagline {
  font-size: 12px;
  line-height: 18px;
}
.price-tag.cent {
  padding-top: 0px;
  margin-top: -3px;
}
.price-tag.tagline {
  padding-left: 0px;
  margin-top: 3px;
}
.extended-tagline::after {
  font-size: 1.2em;
  right: 20px;
}
.check-list li {
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 6px;
  padding-left: 20px;
}
.check-list.plus-list .title {
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
}
.check-list.plus-list .price {
  font-size: 12px;
  line-height: 18px;
}
</style>
