<template>
  <!-- Begin Product Detail Page, element: Hero -->
  <div
    class="component-fbx-productintro-fbx ume-section dark-bg comp-prefix-d445167d-0346-44f4-9229-5c6e7175c08f/par/modul_wrapper"
    data-title=""
    data-anchor=""
  >
    <div
      class="section-content"
      style="background: #ff0000;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ff0000, endColorstr=#990000);background: linear-gradient(135deg, #ff0000, #990000);background-position: 0% 0%;background-size: 100%;background-repeat: no-repeat; "
    >

      <!-- Begin subnavigation tabs and animated headline. -->
      <!-- TODO: Move into component -->
      <div
        class="section-header intro-section-header cablemax"
        :class="{'is-sticky':$data.window.scrollY > 170}"
      >
        <div class="intro-section-header__backdrop">
          <h1
            class="h1"
            v-html="productObject.title"
          ></h1>
          <div
            class="horizontal_nav horizontalNav parbase"
            v-if="productObject.set === 'onePlay' || productObject.set === 'twoPlay' || productObject.set === 'threePlay'"
          >
            <div
              class="page-nav js_hornav"
              v-if="$data.window.width > 479"
            >
              <ul>
                <li>
                  <router-link
                    :to="productObject.url"
                    class="icon"
                    :class="{'is-active':mainPage}"
                  >Im Überblick</router-link>
                </li>
                <li>
                  <router-link
                    :to="productObject.url + '/details/'"
                    class="icon icon-details"
                    :class="{'is-active':detailPage}"
                  >Details</router-link>
                </li>
              </ul>
              <router-link
                :to="productObject.familyUrl"
                class="inline-nav-btn"
              >{{productObject.family==="2play"?'Internet and Phone':'Internet, Phone and Tv'}} Pakete vergleichen</router-link>
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
      <!-- End subnavigation tabs and animated headline. -->

      <div class="container">
        <div class="section-header ">
        </div>
        <div class="section-body">
          <div class="modulContent parsys">
            <div class="richtext section">
              <div
                id="par_modul_wrapper_modulcontent_richtext_710620646"
                class=""
                style="word-wrap:break-word;"
              >
                <div class="dark-bg">
                  <p
                    class="h2"
                    style="text-align: center;"
                  >Jetzt mit 170 € Startguthaben</p>
                </div>
              </div>
            </div>
            <div class="product-image-section">
              <img
                  v-if="Array.isArray(productObject.promotionImg)"
                  :src="promoImage"
                  :alt="productObject.title"
                  style="width: 100%"
                >
                <!--
              <tooltip
                class="image-tooltip"
                v-if="this.$data.RFSFALLBACK"
                content="Abhängig von Deinem Wohnort ist eine Geschwindigkeit von 1000 Mbit/s nicht immer möglich . In diesem Fall kannst Du mit Red Internet and Phone 500 Cable die schnellstmögliche Alternative erhalten Du surfst dann mit bis zu 500 Mbit/s im Download und 25 Mbit/s im Upload."
              />
              -->
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_4">
                <!---->
              </div>
            </div>
            <div class="richtext section">
              <div
                id="par_modul_wrapper_modulcontent_richtext"
                class=""
                style="word-wrap:break-word;"
              >
                <p
                  class="h5a"
                  style="text-align: center; font-size: 18px;"
                >Surf jetzt so schnell, wie es mit uns bei Dir
                  zuhause möglich ist.<br> Als bestehender Kunde zum gleichen Preis wie Neukunden. Dauerhaft günstig für
                  nur</p>
              </div>
            </div>
            <div
              class="flex small-center"
              style="padding-top: 20px"
            >
              <!-- TODO: Make button and asterisk white, instead of red. -->
              <addToBasketButton
                :skus="orderArray"
                renderStyle="price-above"
                :whiteBtn="true"
                class="flex center"
                :overlay="$data.RFSFALLBACK"
                v-on:openOverlay="showDialog()"
                :legaltext="productObject.legaltext"
              />
            </div>
            <div class="ume-relative section">
              <div class="ume-compact grid ">
                <div class="grid-col w-1of1 align-center">
                  <div class="gridcol parsys">
                    <div class="spacer section">
                      <div class="upc_spacer_height_2">
                        <!---->
                      </div>
                    </div>
                    <div class="login-button section">
                      <div
                        data-widget="CustomerShow"
                        data-show-for-customer="false"
                        class="login-btn-wrapper login-btn--dark"
                      >
                        <a
                          href="https://www.unitymedia.de/benutzerkonto/login/zugangsdaten/"
                          class="login-btn login-link js_scroll_top"
                        >Kunden-Login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cablemax-alternative-dialog
      :isVisible="visibleDialog"
      v-on:closeDialog="closeDialog()"
      :skus="skus"
    />
  </div>
  <!-- End Product Detail Page, element: Hero -->
</template>

<script>
import addToBasketButton from '@/components/molecules/addToBasketButton.vue'
// import tooltip from '@/components/atoms/tooltip.vue'
import cablemaxAlternativeDialog from '@/components/molecules/cablemaxAlternativeDialog.vue'
import closeNavigationOverlay from '@/helper/closeNavigationOverlay'

export default {
  components: {
    addToBasketButton,
    // tooltip,
    cablemaxAlternativeDialog
  },
  data () {
    return {
      orderArray: [],
      visibleDialog: false
    }
  },
  props: {
    skus: {
      type: Array,
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
    productObject () {
      let tempProduct = {}
      tempProduct = this.$store.getters.getProduct(this.skus)
      if (!tempProduct) {
        tempProduct = {}
        console.log('unable to find product based on SKU: ' + this.skus)
      }
      if (this.$data.DEBUG) {
        console.log(tempProduct)
      }
      return tempProduct
    },
    optionsObject () {
      let helperArray = []
      if (this.productObject.options) {
        let tempOptions = this.productObject.options
        for (let index = 0; index < tempOptions.length; index++) {
          let tempOption = this.$store.getters.getProduct(tempOptions[index].sku)
          if (this.$store.getters.getAvailability(tempOptions[index].sku)) {
            helperArray.push(tempOption)
          }
        }
      }
      if (!helperArray || !this.productObject.options) {
        helperArray = null
      }
      return helperArray
    },
    setObjectSkus () {
      let helperArray = []
      helperArray = this.$store.getters.getSetinfoBySettitle(
        this.productObject.set
      ).skus
      return helperArray
    },
    nextSmallerProduct () {
      let helperProduct = {}
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
      } else if (helperNumber > -1 && helperNumber < this.setObjectSkus.length) {
        helperSku = this.setObjectSkus[helperNumber + 1]
        helperProduct = this.$store.getters.getProduct(helperSku)
      }
      return helperProduct
    },
    promoImage () {
      let helperString = ''
      if (Array.isArray(this.productObject.promotionImg)) {
        if (this.$data.window.width < 479) {
          helperString = this.productObject.promotionImg[2]
        } else if (this.$data.window.width < 979) {
          helperString = this.productObject.promotionImg[1]
        } else helperString = this.productObject.promotionImg[0]
      }
      return helperString
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
    },
    showDialog () {
      this.visibleDialog = true
    },
    closeDialog () {
      this.visibleDialog = false
      closeNavigationOverlay()
    }
  },
  created () {
    /*
    if (this.$data.RFSFALLBACK) {
      if (this.skus[0] === '2P_RIP_1000_1') {
        this.skus.splice(0, 1, '2P_RIP_1000_500_1')
      }
    }
    */
    this.skus.forEach(sku => {
      this.orderArray.push(sku)
    })
  },
  watch: {
    $route (to, from) {
      // Remove optional products/ addons from basket when navigating to other product page.
      // For corresponding checkmark see productOption.vue.
      this.orderArray = []
      this.skus.forEach(sku => {
        this.orderArray.push(sku)
      })
    }
  }
}
</script>

 <style>
.flexible-box {
  box-shadow: none;
}
.section-content {
  background: #0e9a98;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0e9a98, endColorstr=#08346c);
  background-position: 0% 0%;
  background-size: auto;
  background-repeat: no-repeat;
}
.section-content .section-body {
  /* margin-top: -100px; */
}

.flexOptions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
}

.small-promo-box-container {
  float: left;
}
.intro-section .section-content {
  padding-top: 20rem;
}

.intro-section-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 10px;
  padding-top: 1rem;
  padding-bottom: 25px;
  padding-bottom: 2.5rem;
  z-index: 1;
}

.intro-section-header__backdrop {
  transition: all 0.4s;
  background: transparent;
  display: inline-block;
  margin: -10px 10px 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.intro-section-header.is-sticky {
  position: fixed;
  z-index: 2;
}

.intro-section-header.is-sticky .intro-section-header__backdrop {
  background-image: linear-gradient(white, rgba(255, 255, 255, 0.6));
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  animation: backdropColor 0.4s;
}

.intro-section-header.is-sticky .h1,
.intro-section-header.is-sticky .h2 {
  font-size: 32px;
  font-size: 3.2rem;
  line-height: 1.125;
  margin: -5px 0 5px;
  text-shadow: none;
  font-weight: bold;
  color: #333333;
  animation: headlineColor 0.4s 0.4s;
}

.is-sticky .page-nav ul {
  box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.25);
}

.is-sticky .page-nav ul + a.inline-nav-btn {
  box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.25);
  border-left: 1px solid #b9c1ce;
  border-right: 1px solid #b9c1ce;
}
.page-nav ul + a.inline-nav-btn {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  margin-left: 10px;
}
.page-nav a.inline-nav-btn {
  display: inline-block;
  background: #fff;
  color: #333333;
  border-radius: 4px;
  padding: 10px 20px;
}
.sub-headline {
  text-align: center;
}
@media screen and (min-width: 981px) {
  .sub-headline {
    margin-top: -100px;
  }
}
@media screen and (max-width: 980px) {
  .intro-section .section-content {
    padding-top: 10rem;
  }
  .section-content .section-body {
    /* margin-top: 0; */
  }
  ul.check-list li {
    font-weight: bold;
    font-size: 2.4rem;
  }
  .upc_spacer_height_1,
  .upc_spacer_height_2,
  .upc_spacer_height_3 {
    height: 5px;
  }
  .upc_spacer_height_4 {
    height: 10px;
  }
  .upc_spacer_height_5 {
    height: 20px;
  }
  .short-plain-list {
    margin: 0 auto;
  }
}
@media screen and (max-width: 680px) {
  .flexOptions {
    flex-direction: column;
  }
  .section-content .section-body {
    /* margin-top: -50px; */
  }
}
@media screen and (max-width: 479px) {
  .intro-section .section-content {
    padding-top: 3rem;
  }

  .small-promo-box-container {
    float: initial;
  }
  .upc_spacer_height_1,
  .upc_spacer_height_2,
  .upc_spacer_height_3 {
    height: 5px;
  }
  .upc_spacer_height_4 {
    height: 10px;
  }
  .upc_spacer_height_5 {
    height: 20px;
  }
  .small-center {
    justify-content: center;
  }
}

/* Dcomm post-rebranding/Besit imported CSS */
/* responsive intro wrapper by NR */
.image1,
.image2,
.image3 {
  width: 100%;
}

.image1 {
  display: block;
}

.image2 {
  display: none;
}

.image3 {
  display: none;
}

@media only screen and (max-width: 840px) {
  .image1 {
    display: none;
  }

  .image2 {
    display: block;
  }
}
@media only screen and (max-width: 480px) {
  .image2 {
    display: none;
  }

  .image3 {
    display: block;
  }
}

/* headline color fix + link color fix by NR */
.intro-section-header.cablemax .h1 {
  color: #ffffff;
}
.intro-section-header.is-sticky.cablemax .h1 {
  color: #333333;
}

.login-link {
  color: #fffefe;
}

.product-image-section {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.product-image-section .image-tooltip {
  position: absolute;
  left: 215px;
  top: 81.5%;
}
@media only screen and (max-width: 1570px) {
  .product-image-section .image-tooltip {
    position: absolute;
    left: 13.5vw;
    top: 81%;
  }
}
@media only screen and (max-width: 979px) {
  .product-image-section .image-tooltip {
    position: absolute;
    left: 15vw;
    top: 80%;
  }
}
@media only screen and (max-width: 840px) {
  .product-image-section .image-tooltip {
    position: absolute;
    left: 33vw;
    top: 28%;
  }
}
@media only screen and (max-width: 480px) {
  .product-image-section .image-tooltip {
    position: absolute;
    left: 67vw;
    top: 13.5%;
  }
}
</style>
