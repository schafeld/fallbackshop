<template>
  <div class="a-spot">
    <div
      class="content"
      v-if="this.PROMOTION.otc && this.PROMOTION.dov"
    >
      <single-a-spot
        :spotNumber="0"
        :displaySlide="activeSetter[0]"
      >
        <rb-online-vorteil />
      </single-a-spot>
      <single-a-spot
        :spotNumber="1"
        :displaySlide="activeSetter[1]"
      >
        <rb-otc></rb-otc>
      </single-a-spot>
      <single-a-spot
        :spotNumber="2"
        :displaySlide="activeSetter[2]"
      >
        <rb-wechselvorteil></rb-wechselvorteil>
      </single-a-spot>
      <single-a-spot
        :spotNumber="3"
        :displaySlide="activeSetter[3]"
      >
        <rb-besit />
      </single-a-spot>
      <single-a-spot
        :spotNumber="4"
        :displaySlide="activeSetter[4]"
      >
        <rb-gigacube />
      </single-a-spot>
      <single-a-spot
        :spotNumber="5"
        :displaySlide="activeSetter[5]"
      >
        <rb-gigakombi />
      </single-a-spot>
      <single-a-spot
        :spotNumber="6"
        :displaySlide="activeSetter[6]"
      >
        <rb-business />
      </single-a-spot>
      <div class="upc-aspot-nav">
        <ul class="flex row center">
          <li
            v-for="index in slideNumber"
            :key="index-1"
            :data-index="'loggedOut-'+index-1"
            class="aspot-dot light-indicator"
            :class="{'is-active':activeSetter[index-1]}"
            @click="setClickedActive(index-1)"
          ></li>
        </ul>
      </div>
    </div>
    <div
      class="content"
      v-else-if="this.PROMOTION.otc && !this.PROMOTION.dov"
    >
      <single-a-spot
        :spotNumber="0"
        :displaySlide="activeSetter[0]"
      >
        <rb-besit />
      </single-a-spot>
      <single-a-spot
        :spotNumber="1"
        :displaySlide="activeSetter[1]"
      >
        <rb-otc />
      </single-a-spot>
      <single-a-spot
        :spotNumber="2"
        :displaySlide="activeSetter[2]"
      >
        <rb-wechselvorteil />
      </single-a-spot>
      <single-a-spot
        :spotNumber="3"
        :displaySlide="activeSetter[3]"
      >
        <rb-online-vorteil />
      </single-a-spot>
      <single-a-spot
        :spotNumber="4"
        :displaySlide="activeSetter[4]"
      >
        <rb-gigacube />
      </single-a-spot>
      <single-a-spot
        :spotNumber="5"
        :displaySlide="activeSetter[4]"
      >
        <rb-gigakombi />
      </single-a-spot>
      <single-a-spot
        :spotNumber="6"
        :displaySlide="activeSetter[5]"
      >
        <rb-business />
      </single-a-spot>
      <div class="upc-aspot-nav">
        <ul class="flex row center">
          <li
            v-for="index in slideNumber"
            :key="index-1"
            :data-index="'loggedOut-'+index-1"
            class="aspot-dot light-indicator"
            :class="{'is-active':activeSetter[index-1]}"
            @click="setClickedActive(index-1)"
          ></li>
        </ul>
      </div>
    </div>
    <div
      class="content"
      v-else
    >
      <single-a-spot
        :spotNumber="0"
        :displaySlide="activeSetter[0]"
      >
        <rb-besit />
      </single-a-spot>
      <single-a-spot
        :spotNumber="1"
        :displaySlide="activeSetter[1]"
      >
        <rb-wechselvorteil />
      </single-a-spot>
      <single-a-spot
        :spotNumber="2"
        :displaySlide="activeSetter[2]"
      >
        <rb-online-vorteil />
      </single-a-spot>
      <single-a-spot
        :spotNumber="3"
        :displaySlide="activeSetter[3]"
      >
        <rb-gigacube />
      </single-a-spot>
      <single-a-spot
        :spotNumber="4"
        :displaySlide="activeSetter[4]"
      >
        <rb-gigakombi />
      </single-a-spot>
      <single-a-spot
        :spotNumber="5"
        :displaySlide="activeSetter[5]"
      >
        <rb-business />
      </single-a-spot>
      <div class="upc-aspot-nav">
        <ul class="flex row center">
          <li
            v-for="index in slideNumber"
            :key="index-1"
            :data-index="'loggedOut-'+index-1"
            class="aspot-dot light-indicator"
            :class="{'is-active':activeSetter[index-1]}"
            @click="setClickedActive(index-1)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import singleASpot from '@/components/molecules/aspot.vue'
import rbBesit from '@/components/molecules/responsive-aspots/rbBesit.vue'
import rbBusiness from '@/components/molecules/responsive-aspots/rbBusiness.vue'
import rbGigakombi from '@/components/molecules/responsive-aspots/rbGigakombi.vue'
import rbGigacube from '@/components/molecules/responsive-aspots/rbGigacube.vue'
import rbOnlineVorteil from '@/components/molecules/responsive-aspots/rbOnlineVorteil.vue'
import rbOtc from '@/components/molecules/responsive-aspots/rbOtc.vue'
import rbWechselvorteil from '@/components/molecules/responsive-aspots/rbWechselvorteil.vue'

export default {
  name: 'aspotContainer',
  components: {
    singleASpot,
    rbBesit,
    rbBusiness,
    rbGigakombi,
    rbGigacube,
    rbOnlineVorteil,
    rbOtc,
    rbWechselvorteil
  },
  data () {
    return {
      activeSetter: []
    }
  },
  props: {
    waitTimer: {
      type: String,
      required: true
    }
  },
  methods: {
    swapSlides () {
      if (this.activeSetter.length > 0) {
        let index = this.activeSetter.indexOf(true)
        if (index < this.slideNumber - 1) {
          this.activeSetter.splice(index, 1, false)
          this.activeSetter.splice(index + 1, 1, true)
        } else {
          this.activeSetter.splice(index, 1, false)
          this.activeSetter.splice(0, 1, true)
        }
      }
    },
    setClickedActive (event) {
      if (this.activeSetter.length > 0) {
        let index = this.activeSetter.indexOf(true)
        this.activeSetter.splice(index, 1, false)
        this.activeSetter.splice(event, 1, true)
      }
    }
  },
  mounted () {
    for (let index = 0; index < this.slideNumber; index++) {
      this.activeSetter.push(false)
    }
    this.activeSetter.splice(0, 1, true)
    setInterval(() => {
      this.swapSlides()
    }, parseInt(this.waitTimer) * 1000)
  },
  computed: {
    slideNumber () {
      return this.$data.PROMOTION.otc ? 7 : 6
    }
  }
}
</script>

<style>
.a-spot {
  position: relative;
  max-height: 530px;
  display: block;
}
.a-spot .content {
  width: 100%;
  margin: 0 auto;
  display: block;
}
.a-spot .text {
  position: absolute;
  top: 0px;
  left: 0px;
  /* z-index: 2; Please avoid z-indexes! */
  width: 100%;
}
.a-spot .text .text-container {
  max-width: 980px;
  margin: 0 auto;
}
.a-spot .image {
  position: relative;
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.a-spot .image .image-container {
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 100%;
  align-self: flex-end;
}
.a-spot .image {
  /* z-index: 1; Test ALL asterisk infolayers if you need this! */
  width: 100%;
  bottom: 0px;
}
.a-spot .text .h1,
.a-spot .text .h2,
.a-spot .text .h3,
.a-spot .text .h4,
.a-spot .text .li {
  color: #ffffff;
  font-weight: 900;
}
.a-spot .text .h2 {
  line-height: 40px;
  text-transform: uppercase;
  max-width: 560px;
}

.a-spot .text .h4 {
  line-height: 25px;
}
.a-spot .button-element {
  position: relative;
  z-index: 3;
  padding-bottom: 10px;
}
.upc-aspot-nav {
  bottom: -10px;
}
.upc-aspot-nav .indicator {
  margin-bottom: 0px;
}
@media screen and (max-width: 879px) {
  .a-spot {
    max-height: 980px;
  }
  .a-spot .image {
    height: 180px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .a-spot .image img {
    position: relative;
    left: 0%;
    height: fit-content;
    max-height: 180px;
    width: auto;
    max-width: 340px;
    align-self: center;
  }
  .a-spot .content .text {
    background: #ffffff;
  }
  .a-spot .content .text ul {
    width: 100%;
  }
  .a-spot .content .text p,
  .a-spot .content .text li,
  .a-spot .content .text div {
    margin: 0 auto;
  }
  .a-spot .text {
    position: relative;
    width: 100%;
  }
  .a-spot .text .text-container {
    align-self: center;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 300px;
  }
  .a-spot .button-element {
    bottom: 40px;
  }
  .a-spot .text .h1,
  .a-spot .text .h2,
  .a-spot .text .h3,
  .a-spot .text .h4,
  .a-spot .text .li {
    color: rgb(0, 44, 119);
    margin: 0;
    text-align: center;
  }
  .a-spot .text .h1 {
    font-size: 4.8rem;
  }
  .a-spot .text .h2 {
    font-size: 2.4rem;
    line-height: 26px;
    max-width: initial;
  }
  .a-spot .text .h3 {
    font-size: 2.2rem;
  }
  .a-spot .text .h4 {
    font-size: 1.8rem;
  }
  .a-spot .button-element {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .a-spot .spacer {
    display: none;
  }
}

.aspot-dot {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  margin: 15px 6px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  cursor: pointer;
}
.aspot-dot.light-indicator {
  background-color: #fff;
  border: 2px solid #fff;
}
.aspot-dot.light-indicator.is-active {
  background-color: #333333;
}

@media screen and (max-width: 879px) {
  .aspot-dot.light-indicator {
    box-shadow: 0px 0px 1px black;
  }
}
</style>
