<template>
  <module-wrapper :darkBg="false">
    <div class="spacer section">
      <div class="upc_spacer_height_5">
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_5">
      </div>
    </div>
    <div class="richtext section">
      <div
        id="par_modul_wrapper_877770774_modulcontent_richtext_1"
        class=""
        style="word-wrap:break-word;"
      >
        <p
          class="h2"
          style="text-align: center;"
        >Unsere beste&nbsp;TV-Hardware: der Horizon HD Recorder<br> </p>
      </div>
    </div>
    <div class="richtext section">

      <div
        id="par_modul_wrapper_877770774_modulcontent_richtext_0"
        class=""
        style="word-wrap:break-word;"
      >
        <p
          class="body-large"
          style="text-align: center;"
        >Mit Aufnahmefunktion, EPG und Zugang zu Apps, Videothek sowie TV-Mediatheken<br> </p>
      </div>
    </div>
    <div class="image section">
      <div style="text-align: center;">
        <div class="">
          <img
            src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Kombipakete/3play/DEV_Horizon_HD_Recorder_Front_Features_Incl@2x.png"
            class="center "
            alt="Horizon HD Recorder"
            id="par_modul_wrapper_877770774_modulcontent_image_2134809630"
            width="435"
            height="179"
          >
        </div>
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  name: 'horizonHDRecorderBox',
  components: {
    moduleWrapper
  },
  props: {
    gradient: {
      type: String,
      required: true
    }
  }
}
</script>
