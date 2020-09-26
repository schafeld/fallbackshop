<template>
  <div class="ume-relative section">
    <div class="mobile-stage" :style="'background: ' + background" v-if="mobileStage"/>
    <div class="ume-section" :class="{'dark-bg':darkBg, 'light-bg':!darkBg}">
      <div
        class="section-content"
        :class="{'no-margin':noMargin}"
        :style="'background-image: ' + background + '; background-position: ' + backgroundPosition + '; background-repeat: ' +  backgroundRepeat + '; background-size:' + backgroundSize"
      >
        <div class="container">
          <div class="section-body">
            <div class="modulContent parsys">
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'moduleWrapper',
  props: {
    background: {
      type: String,
      required: false
    },
    darkBg: {
      type: Boolean,
      required: false
    },
    noMargin: {
      type: Boolean,
      required: false
    },
    backgroundPosition: {
      type: String,
      required: false
    },
    backgroundRepeat: {
      type: String,
      required: false
    },
    backgroundSize: {
      type: String,
      required: false
    },
    mobileStage: {
      type: Boolean,
      required: false
    }
  }
}
</script>
<style scoped>
.ume-relative {
  display: block;
  position: relative;
}
.ume-section {
  background-size: 100%;
  background-size: cover;
  position: relative;
  display: block;
}
.ume-section {
  border-bottom: solid 2px white;
}
.container {
  margin: 0 auto;
  padding: 0px;
  max-width: 1400px;
}
.dark-bg,
.light-bg .dark-bg {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #fff;
}
.section-content {
  background: #fafafa;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#fafafa, endColorstr=#fafafa);
  padding-top: 10rem;
  padding-bottom: 10rem;
  padding-left: 10rem;
  padding-right: 10rem;
}

.section-content.no-margin {
  padding-top: 1px;
  padding-bottom: 1px;
}

@media screen and (max-width: 979px) {
  .section-content {
    background-size: cover;
    min-height: 20rem;
    background: #ffffff;
    background-image: none;
    background-size: auto;
    box-sizing: border-box;
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media screen and (max-width: 479px) {
  .section-content {
    background-size: cover;
    min-height: 20rem;
    background: #ffffff;
    background-image: none;
    background-size: auto;
    box-sizing: border-box;
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .section-content.no-margin {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 0rem;
    padding-right: 0rem;
  }
  .mobile-stage {
    min-height: 20rem;
  }
  .container {
    padding: 0;
  }
}
</style>
