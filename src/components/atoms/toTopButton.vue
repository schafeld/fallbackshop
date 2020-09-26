<template>
  <div class="totop totopbutton">
    <div class="js_to-top-btn-wrapper">
      <div class="container to-top-btn" :class="{'to-top-btn--sticky':$data.window.scrollY > 170}" data-widget="ToTopButton">
        <a class="to-top-btn-anchor" @click="scrollTo('app')">
          <span class="to-top-btn-icon icon-arrow-up"></span>
          <span class="to-top-btn-text">Nach oben</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'toTopButton'
}
</script>
<style scoped>
.container.to-top-btn {
  position: relative;
  bottom: 20px;
}
.container.to-top-btn.to-top-btn--sticky {
  position: fixed;
  right: 20px;
  left: 0;
  bottom: 20px;
}
.container {
  margin: 0 auto;
  padding: 0 86px;
  max-width: 1400px;
}
.to-top-btn-anchor {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #dadbe0;
  z-index: 10;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
}
html a,
html .link,
.light-bg a,
.light-bg .link,
.dark-bg .light-bg a,
.dark-bg .light-bg .link {
  text-decoration: none;
  color: #40920f;
}
a {
  text-decoration: none;
}
.to-top-btn-icon {
  font-size: 50px;
  line-height: 1;
}
.icon-arrow-up::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
  width: auto;
  text-align: center;
  vertical-align: -12%;
}
.icon-arrow-up::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: ume-icons;
  content: "";
  display: inline-block;
}
.to-top-btn-text {
  margin-top: -13px;
  font-size: 12px;
}
</style>
