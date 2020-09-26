<template>
  <div class="static-dialog section light-bg">
    <div
      class="dialog js_dialog"
      :class="{'is-visible':visibleDialog}"
    >
      <div class="dialog-box">
        <button
          class="btn close-btn js_dialog-close"
          @click="closeDialog"
        ></button>
        <div class="box-body">
          <div class="dialog_content_html">
            <div class="content parsys">
              <p class="h2a">Noch kein Gigabit an Ihrer Adresse</p>
              <p class="body-style" >
                An der von Ihnen eingegeben Adresse können wir heute leider noch keine 1000 MBit/s Download anbieten. Sie können jedoch zu einem etwas niedrigeren Preis 500 MBit/s bekommen. Sobald Gigabit bei Ihnen verfügbar ist, können Sie problemlos auf das schnellere Paket wechseln.
              </p>
              <div class="flex row space-between">
                <button-element
                  label="zur Red Internet and Phone 500 Cable Produktseite"
                  type="dcomm_button"
                  :linkTo="productLink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonElement from '@/components/atoms/buttonElement.vue'

export default {
  components: {
    buttonElement
  },
  data () {
    return {
      visibleDialog: true
    }
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    productLink: {
      type: String,
      required: true
    }
  },
  methods: {
    // showDialog () {
    //   this.visibleDialog = true
    // },
    closeDialog () {
      this.visibleDialog = false
    }
  }
}
</script>
