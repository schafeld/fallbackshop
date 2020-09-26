<template>
  <div id="telljaWidgetDiv" style="z-index: 10000; top: 0px; left: 0px;" v-show="dialogShow">
    <div
      id="tellja-lightbox-id"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; display: block; z-index: 10000; font-family: Arial; -webkit-animation-duration: 1s; -webkit-animation-name: fade; -webkit-animation-iteration-count: 1; -webkit-animation-direction: normal;"
    >
      <div style="width: 540px; height: 460px; margin: auto auto; display: table;">
        <div
          style="width: 100%; height: auto; display: table-cell; vertical-align: middle; border-spacing: 0px;"
        >
          <div id="outsideHeaderDiv">
            <button
              class="btn close-btn js_dialog-close" @click="$emit('closeDialog')">
            </button>
          </div>
          <div id="iframeWrapperDiv">
            <iframe
              style="width: 100%; height: 715px; border: 0px; margin: 0px; display: block;"
              id="telljaIFrame_1565693801389_862552751"
              :src="mgmUrl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    mgmUrl: {
      type: String,
      required: true
    },
    dialogShow: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
#outsideHeaderDiv {
  min-height: 50px;
  text-align: right;
}
#outsideHeaderDiv button {
  margin-top: 10px;
}
#telljaWidgetDiv {
  background-color: white;
}
#closeButton {
  color: white;
  float: right;
  cursor: pointer;
  margin-top: 10px;
}
#iframeWrapperDiv {
  background-color: white;
  overflow: hidden;
  width: 650px;
  height: 720px;
  display: block;
}
</style>
