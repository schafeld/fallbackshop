<template>
  <div class="dialog js_dialog" :class="{'is-visible': visibleCheck}">
    <div class="dialog-box">
      <button class="btn close-btn js_dialog-close" @click="closeDialog()"></button>
      <div class="box-body">
        <div class="dialog_content_html">
          <div class="content parsys">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visibleCheck: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
.dialog {
  font-size: 0;
  line-height: 0;
  word-spacing: -0.31em;
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  color: #666;
  opacity: 0;
  transform: scale(0.9);
  -ms-transform: scale(1);
  display: none;
  z-index: 210;
}

.dialog.is-visible {
  display: block;
  overflow: auto;
  overflow-y: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  animation: dialog 0.2s forwards;
}
</style>
