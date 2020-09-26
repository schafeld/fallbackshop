<template>
  <div class="product parbase section">
    <div
      class="ume-section intro-section"
      :class="{'header-only': renderMode === 'header-only'}"
      :data-title="product.title"
      :data-sku="skus"
    >
      <div
        class="section-content"
        style="background: linear-gradient(90deg, #ffffff, #ffffff)"
      >
        <div
          class="section-header intro-section-header"
          :class="{'is-sticky':$data.window.scrollY > 170}"
        >
          <div class="intro-section-header__backdrop">
            <h1
              class="h1"
              v-html="product.title"
            ></h1>

            <div
              class="horizontal_nav horizontalNav parbase"
              v-if="product.set === 'onePlay' || product.set === 'twoPlay' || product.set === 'threePlay'"
            >
              <div
                class="page-nav js_hornav"
                v-if="$data.window.width > 479"
              >
                <ul>
                  <li>
                    <router-link
                      :to="product.url"
                      class="icon"
                      :class="{'is-active':mainPage}"
                    >Im Überblick</router-link>
                  </li>
                  <li>
                    <router-link
                      :to="product.url + '/details/'"
                      class="icon icon-details"
                      :class="{'is-active':detailPage}"
                    >Details</router-link>
                  </li>
                </ul>
                <router-link
                  :to="product.familyUrl"
                  class="inline-nav-btn"
                >{{product.family==="2play"?'Internet and Phone':'Internet, Phone and Tv'}} Pakete vergleichen</router-link>
              </div>
              <div
                class="page-nav js_hornav"
                v-else-if="$data.window.width <= 479"
              >
                <ul>
                  <li v-if="nextSmallerProduct">
                    <router-link :to="nextSmallerProduct.url">zu {{nextSmallerProduct.title}}</router-link>
                  </li>
                  <li v-if="nextBiggerProduct">
                    <router-link :to="nextBiggerProduct.url">zu {{nextBiggerProduct.title}}</router-link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div
          v-if="!renderMode && renderMode !== 'header-only'"
          class="container section-body"
        >

          <!-- Subline is not supposed to become sticky with main headline. -->
          <h3
            class="h3 sub-headline"
            v-if="product.subtitle"
            v-html="product.subtitle"
          ></h3>

          <div v-if="$data.window.width < 479">
            <div style="margin-bottom: 180px" />
          </div>
          <div v-else-if="$data.window.width < 979">
            <div style="margin-bottom: 100px" />
          </div>
          <div class="grid middle-grid column-grid-md">
            <div
              class="grid-col w-1of2 center-column-md"
              v-if="!Array.isArray(product.promotionImg)"
            >
              <div
                class="introparleft parsys"
                v-html="product.bulletIntroText"
              ></div>
              <ul class="check-list">
                <li
                  v-for="(bulletpoint, index) in product.bullets"
                  :key="index"
                  v-html="$options.filters.legalTextReplacer($options.filters.toolTipReplacer(bulletpoint))"
                ></li>
              </ul>
            </div>
            <div class="grid-col w-1of1 center-column-md align-center">
              <div class="introparright parsys"></div>
              <div class="image-wrapper">
                <img
                  v-if="Array.isArray(product.promotionImg)"
                  :src="promoImage"
                  :alt="product.title"
                  style="height: auto; max-width:70%;"
                  data-widget="CustomerImage"
                  data-max-width="60%"
                >
                <img
                  v-else-if="product.promotionImg"
                  :src="product.promotionImg"
                  :alt="product.title"
                  style="height: auto; max-width:70%;"
                  data-widget="CustomerImage"
                  data-max-width="60%"
                >
                <img
                  v-else-if="product.img"
                  :src="product.img"
                  :alt="product.title"
                  style="height: auto; max-width:70%;"
                >
              </div>
            </div>
          </div>
          <div class="grid column-grid-md center-column-md">
            <div
              class="grid-col w-1of4 center-column-md"
            ></div>
            <div class="grid-col w-1of2 center-column-md">
              <div>
                <div
                  v-if="optionsObject.length > 0"
                  class="flexOptions"
                >
                  <p
                    v-if="optionsObject"
                    class="h4"
                  >beliebte Optionen</p>
                  <span
                    v-for="(option, index) in optionsObject"
                    :key="index"
                  >
                    <product-option
                      :optionObject="option"
                      :addtionalValue="product.upload"
                      v-on:click="toggleOrder(option.skus[0])"
                    />
                  </span>
                </div>
                <spacer setting="3" />
                <div
                  class="flex small-center"
                  style="padding-top: 20px"
                >
                  <addToBasketButton
                    :skus="orderSet"
                    renderStyle="price-above"
                    class="flex center"
                    :legaltext="product.legaltext"
                  />
                </div>
                <div
                  style="overflow-wrap: break-word; text-align: center;padding-top: 20px"
                  v-if="$data.window.width < 479"
                >
                  <div class="dcomm_button section">
                    <div>
                      <a
                        target="_top"
                        class="btn toHotline"
                        style="padding: 1rem 1rem 1rem 6rem; font-size: 20px; width: 90%; background: #881e8a; background-image: url(https://www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/BBCT/mobile-journey/co_telefon_white.svg); background-repeat: no-repeat; background-position-x: 15px; background-position-y: 50%;"
                        href="tel:08008800731"
                      >
                        <span>Jetzt kostenlos anrufen</span>
                      </a>
                      <p style="text-align: center;">
                        Die Servicezeiten sind:
                        <br>Mo-Fr 08.00-22.00 Uhr und Sa 08.00-20.00 Uhr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import spacer from '@/components/atoms/spacer.vue'
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
import productOption from '@/components/molecules/productOption.vue'

export default {
  components: {
    addToBasketButton,
    productOption,
    spacer
  },
  data () {
    return {
      orderArray: []
    }
  },
  props: {
    skus: {
      type: Array,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    mainPage: {
      type: String,
      required: false
    },
    detailPage: {
      type: String,
      required: false
    },
    addPage: {
      type: String,
      required: false
    },
    renderMode: {
      type: String,
      required: false
    }
  },
  computed: {
    optionsObject () {
      let helperArray = []
      if (this.product.options) {
        let tempOptions = this.product.options
        for (let index = 0; index < tempOptions.length; index++) {
          let tempOption = this.$store.getters.getProduct(tempOptions[index].sku)
          if (this.$store.getters.getAvailability(tempOptions[index].sku)) {
            helperArray.push(tempOption)
          }
        }
      }
      return helperArray
    },
    setObjectSkus () {
      let helperArray = []
      helperArray = this.$store.getters.getSetinfoBySettitle(
        this.product.set
      ).skus
      return helperArray
    },
    nextSmallerProduct () {
      let helperProduct
      let helperSku = ''
      let helperNumber = -1
      for (let index = 0; index < this.setObjectSkus.length; index++) {
        if (!JSON.stringify(this.setObjectSkus[index]).localeCompare(JSON.stringify(this.skus))) {
          helperNumber = index
        }
      }
      if (helperNumber === -1) {
        if (this.$data.DEBUG) {
          console.log('This Sku is not part of a productSet')
        }
      } else if (helperNumber > -1 && helperNumber < 1) {
        // DO Nothing as there is no next smaller Product
      } else if (helperNumber > 0) {
        helperSku = this.setObjectSkus[helperNumber - 1]
        helperProduct = this.$store.getters.getProduct(helperSku)
      }
      return helperProduct
    },
    nextBiggerProduct () {
      let helperString = ''
      let helperNumber = -1
      for (let index = 0; index < this.setObjectSkus.length; index++) {
        if (!JSON.stringify(this.setObjectSkus[index]).localeCompare(JSON.stringify(this.skus))) {
          helperNumber = index
        }
      }
      if (helperNumber === -1) {
        if (this.$data.DEBUG) {
          console.log('This Sku is not part of a productSet')
        }
      } else if (helperNumber > -1) {
        if (this.setObjectSkus[helperNumber + 1]) {
          helperString = this.setObjectSkus[helperNumber + 1]
        }
      }
      return this.$store.getters.getProduct(helperString)
    },
    promoImage () {
      let helperString = ''
      if (Array.isArray(this.product.promotionImg)) {
        if (this.$data.window.width < 479) {
          helperString = this.product.promotionImg[2]
        } else if (this.$data.window.width < 979) {
          helperString = this.product.promotionImg[1]
        } else helperString = this.product.promotionImg[0]
      }
      return helperString
    },
    orderSet () {
      return this.orderArray
    }
  },
  methods: {
    toggleOrder (orderSku) {
      if (this.orderArray.indexOf(orderSku) === -1) {
        this.orderArray.push(orderSku)
      } else if (this.orderArray.indexOf(orderSku) > -1) {
        let index = this.orderArray.indexOf(orderSku)
        if (index > -1) {
          this.orderArray.splice(index, 1)
        }
      }
    }
  },
  created () {
    this.orderArray = this.skus
  },
  watch: {
    $route (to, from) {
      // Remove optional products/ addons from basket when navigating to other product page.
      // For corresponding checkmark see productOption.vue.
      this.orderArray = this.skus
    }
  }
}
</script>
