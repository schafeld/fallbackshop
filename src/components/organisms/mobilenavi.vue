<template>
  <div class="mobile-nav js_mobile-nav">
    <button class="mobile-nav__open js_mobile-nav-open" @click="toggleMobileNavi()"></button>
    <div class="mobile-nav__layer js_mobile-nav-layer">
      <div class="mobile-nav__head">
        <router-link to="/">
          <div class="ume-logo"></div>
        </router-link>
        <button class="mobile-nav__close js_mobile-nav-close" @click="closeNavigationOverlay()"></button>
      </div>

      <div class="mobile-nav__content">
        <ul class="mobile-nav__list js_mobile-nav-list">
          <li v-for="(item, index) in navigationObject" :key="index" @click="showChild(index)">
            <div class="mobile-nav__title js_mobile-nav-trigger">{{item.navigationElement.title}}</div>
            <div class="mobile-nav__wrapper">
              <div class="mobile-nav__con js_mobile-nav-container">
                <ul :class="'mobile-nav__cat gradient-'+(index+1)+'-bg' + ' js_mobile-nav-content'">
                  <li v-for="(navigroup, index2) in item.navigationElement.childGroups" :key="index2">
                    <div class="mobile-nav__sub">{{navigroup.childElement.title}}</div>
                    <ul>
                      <li v-for="(link, index3) in navigroup.childElement.childGroups" :key="index3">
                        <a :href="link.link">{{link.title}}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="template_metanavigation iparsys parsys">
          <div class="metanavigation section">
            <div class="js_mn-meta-nav mn-meta-nav mn-meta-nav--vertical">
              <ul class="mn-meta-nav-list mn-meta-nav-list--vertical">
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Horizon Go"
                    href="https://www.horizon.tv/de_de.html"
                    target="_self"
                  >Horizon Go</a>
                </li>
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Unitymedia Mail"
                    href="https://webmail.unity-mail.de/appsuite/signin"
                    target="_self"
                  >Unitymedia Mail</a>
                </li>
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Kundencenter"
                    href="https://www.unitymedia.de/kundencenter/"
                    target="_self"
                  >Kundencenter</a>
                </li>
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Privatkunden"
                    href="https://www.unitymedia.de/privatkunden/"
                    target="_self"
                  >Privatkunden</a>
                </li>
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Geschäftskunden"
                    href="https://www.vodafone.de/business/unitymedia.html"
                    target="_self"
                  >Geschäftskunden</a>
                </li>
                <li class="mn-meta-nav-list__item mn-meta-nav-list__item--both">
                  <a
                    data-featuredlink="Header Navigation: Über Vodafone"
                    href="https://www.unitymedia.de/unternehmen/"
                    target="_self"
                  >Über Vodafone</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCurrentlyActive: ''
    }
  },
  methods: {
    toggleMobileNavi () {
      const mobileNavLayer = document.querySelector('div.mobile-nav__layer.js_mobile-nav-layer')
      if (mobileNavLayer.classList.contains('is-visible')) {
        mobileNavLayer.classList.remove('is-visible')
      } else {
        mobileNavLayer.classList.add('is-visible')
      }
    },
    showChild (indexOfChild) {
      const mobileNavChildIndexed = document.querySelectorAll('div.mobile-nav__con.js_mobile-nav-container')[indexOfChild]

      if (this.isCurrentlyActive === indexOfChild) {
        // logged and clicked li are the same, closing menu only
        mobileNavChildIndexed.style.maxHeight = '0px'

        // resetting logged to ""
        this.isCurrentlyActive = ''
      } else if ((this.isCurrentlyActive || this.isCurrentlyActive === 0) && this.isCurrentlyActive !== indexOfChild) {
        // logged an open menue entry at this.isCurrentlyActive
        document.querySelectorAll('div.mobile-nav__con.js_mobile-nav-container')[this.isCurrentlyActive].style.maxHeight = '0px'

        mobileNavChildIndexed.style.maxHeight = '1096px'

        this.isCurrentlyActive = indexOfChild
      } else {
        // no logged menue, just open menue at index at clicked
        mobileNavChildIndexed.style.maxHeight = '1096px'

        this.isCurrentlyActive = indexOfChild
      }
    }
  },
  props: {
    navigationObject: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.gradient-1-bg {
    background: #fafafa !important;
    background: linear-gradient(-45deg,#fafafa,#fafafa) !important;
}
.gradient-2-bg {
    background: #fafafa !important;
    background: linear-gradient(45deg,#fafafa,#fafafa) !important;
}
.gradient-3-bg {
    background: #fafafa !important;
    background: linear-gradient(45deg,#fafafa,#fafafa) !important;
}
.gradient-4-bg {
    background: #fafafa !important;
    background: linear-gradient(45deg,#fafafa,#fafafa) !important;
}
.gradient-5-bg {
    background: #fafafa !important;
    background: linear-gradient(135deg,#fafafa,#fafafa) !important;
}
.gradient-6-bg {
    background: #fafafa !important;
    background: linear-gradient(45deg,#fafafa,#fafafa) !important;
}
.gradient-7-bg {
    background: #fafafa !important;
    background: linear-gradient(45deg,#fafafa,#fafafa) !important;
}
</style>
