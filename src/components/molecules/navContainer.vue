<template>
  <div class="container nav-container">
    <ul class="nav-list js_main-nav-list" @click="activateLayer()">
      <li v-for="(item, index) in navigationObject" :key="index" :class="item.navigationElement.class" :data-featuredLink="'Header Navigation:'+ item.navigationElement.title" @click="setNodeActive(item.navigationElement.class, index)">{{item.navigationElement.title}}</li>
    </ul>
    <!-- small line underneath the active menu point, how to position this is TODO:
    <div class="nav-indicator js_main-nav-indicator is-smooth" style="left: 360.5px; width: 71px;"></div>
    -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentlyActive: ''
    }
  },
  methods: {
    activateLayer () {
      const umeOverlay = document.querySelector('.ume-overlay')
      umeOverlay.classList.add('is-visible')
      // Set navigation background layer height to full page height
      umeOverlay.style.height = document.body.scrollHeight + 'px'

      const mainNavContent = document.querySelector('.main-nav .nav-content')
      mainNavContent.style.display = 'block'

      const mainNavClose = document.querySelector('div.nav-btn.nav-close')
      mainNavClose.style.display = 'block'
    },
    setNodeActive (className, classIndex) {
      if (this.currentlyActive) {
        document.querySelector('li.' + this.currentlyActive).classList.remove('is-visible')
      }
      this.currentlyActive = className
      document.querySelector('li.' + className).classList.add('is-visible')

      let leftValue = classIndex * -100
      document.querySelector('.main-nav .nav-content').style.left = leftValue + '%'
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

<style>
  li[data-featuredlink].is-visible {
    border-bottom: 5px solid #e60000;
  }
</style>
