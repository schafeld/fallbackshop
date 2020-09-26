<template>
  <div class="gridcol_0 parsys">
    <div class="image section">
      <div style="text-align: center;">
        <img
          :src="image"
          class="center"
          alt

          style="width: 200px"
        >
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_2">

      </div>
    </div>
    <div class="headline parbase section">
      <h4 class="h4" style="text-align: center;" v-html="headline">
      </h4>
    </div>
    <div class="richtext section">
      <div

        class
        style="word-wrap:break-word; text-align: left"
      >
        <ul class="check-list">
          <li style="font-size: 19px; color: #002c77;" v-for="(bullet, index) in bullets" :key="index">
            <span v-html="bullet"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_2">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    bullets: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.gridcol_0.parsys{
    max-width: 320px;
    margin: 0 auto;
}
</style>
