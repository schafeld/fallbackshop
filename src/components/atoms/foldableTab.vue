<template>
  <div class="tab">
    <div
      class="tab-button"
      :style="{background: background}"
      @click="extendTab()"
      :class="{extended}"
    >
      <div class="headline">{{headline}}</div>
      <div class="opener" v-show="!extended && this.$data.window.width < 819">
        <span>zum Bearbeiten anzeigen</span>
      </div>
    </div>
    <div class="tab-content" v-show="extended">
      <slot/>
    </div>
    <div
      class="closer"
      v-show="extended && this.$data.window.width < 819"
      @click="extendTab()"
    >
      <span>Details ausblenden</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: false
    },
    headline: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      extended: true
    }
  },
  methods: {
    extendTab () {
      if (this.$data.window.width < 819) {
        this.extended = !this.extended
      }
    }
  }
}
</script>
<style>
.tab-button,
.closer {
  background: radial-gradient(circle, #333333 0%, #333333 100%);
  color: #ffffff;
}
.tab-button div {
  padding: 10px 14px 5px 14px;
}
.tab-button .headline {
  padding-bottom: 10px;
}
.tab-content {
  background: #ffffff;
  border-radius: 0 0 4px 4px;
  padding: 25px 30px 20px;
}
.headline {
  font-family: VodafoneRg;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
}
@media screen and (max-width: 819px) {
  .tab-content {
    padding: 14px 10px 20px 10px;
  }
  .opener::after,
  .closer::after {
    font-family: ume-icons;
    content: "";
    font-size: 1.4em;
    line-height: 1em;
    font-weight: bold;
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    transform: rotateX(0);
    transition: all 0.3s linear;
  }
  .closer::after {
    transform: rotateX(180deg);
    content: "";
  }
  .opener,
  .closer {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 10px 13px 6px 13px;
    font-size: 16px;
    line-height: 24px;
  }
  .opener {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
