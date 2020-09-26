<template>
  <div class="footernotes">
    <ol class="footnotes">
      <li v-for="(legaltext, index) in legalTextArray" :key="index">
        <sup>{{index + 1}}</sup>
        <strong>Rechtliche Hinweise</strong>
        <br>{{legaltext.content}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'checkoutFootnotes',
  computed: {
    basket () {
      // TODO: use getter
      return this.$store.state.visitor.basket
    },
    legalTextArray () {
      let helperArray = []
      if (this.basket) {
        this.basket.forEach(product => {
          helperArray.push(this.$store.getters.getLegalText(product.legaltext)[0])
        })
      }
      return helperArray
    }
  }
}
</script>
