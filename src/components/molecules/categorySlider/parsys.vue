<template>
  <div
    class="category-container js_category-container"
    :class="{'category-container--selected':selected}"
    data-widget="CategorySlider"
    :data-category-label="label"
  >
    <div
      class="category-previous js_category-previous"
      style="color: rgb(119, 119, 119); display: block;"
      v-if="possibleLeft"
      @click="moveParsys(-1)"
    />
    <div
      class="category-next js_category-next"
      style="color: rgb(119, 119, 119); display: block;"
      v-if="possibleRight"
      @click="moveParsys(1)"
    />
    <div
      class="category-slider js_category-slider"
      style="overflow: hidden"
    >
      <div
        class="category_cat parsys"
        :class="{possibleLeft, possibleRight}"
        :style="'transform: translate3d(' + translation + '%, 0px, 0px);'"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      translation: '0',
      possibleRight: true,
      possibleLeft: false,
      overflow: true
    }
  },
  methods: {
    moveParsys (direction) {
      this.overflow = false
      if (direction > 0) {
        /* move right */
        this.translation = -100
        this.possibleRight = false
        this.possibleLeft = true
      } else if (direction < 0) {
        /* move left */
        this.translation = 0
        this.possibleRight = true
        this.possibleLeft = false
      }
      this.overflow = true
    }
  }
}
</script>
