<template>
  <li class="js_toggle">
    <div class="faq-question js_toggle-trigger" @click="toggleOpen()">{{question}}</div>
    <div
      class="toggle-wrapper js_toggle-wrapper"
      :class="{'is-active':open}"
    >
      <div class="faq-answer js_toggle-content">
        <div style="word-wrap:break-word;">
          <p v-if="answer" v-html="answer"></p>
          <p v-else>
            <slot/>
          </p>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'singleFAQEntry',
  data () {
    return {
      open: false
    }
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: false
    }
  },
  methods: {
    toggleOpen () {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
div.toggle-wrapper.js_toggle-wrapper.is-active {
  height: auto;
}
div.toggle-wrapper.js_toggle-wrapper {
  height: 0px;
}

@media screen and (max-width: 479px) {
  .faq-list .faq-question,
  .faq-list .faq-answer {
    font-size: 1.9rem;
  }
  .faq-list .faq-answer {
    margin: none;
  }
}
</style>
