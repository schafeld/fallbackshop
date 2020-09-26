<template>
  <div class="category_slider section">
    <div data-widget="Category">
      <ul class="category-titles">
        <li
          v-for="(category, index) in internalCategories"
          :key="index"
          class="category-title js_category-title"
          :class="{'category-title--selected':category.selected}"
          style="color:#333333;opacity:1;"
          @click="setCategory(index)"
        >{{category.title}}</li>
      </ul>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      internalCategories: []
    }
  },
  mounted () {
    /* set up internal categories as object instead of array for easier state management */
    this.initCategories()
  },
  methods: {
    setCategory (index) {
      let oldIndex = this.internalCategories.indexOf(this.internalCategories.find(category => category.selected === true))
      if (oldIndex > -1) {
        this.internalCategories[oldIndex].selected = false
        this.internalCategories[index].selected = true
      } else {
        this.internalCategories[index].selected = true
      }
      this.$emit('setCategory', index)
    },
    initCategories () {
      /* take array of categories and convert it into an object for internal use */
      for (let index = 0; index < this.categories.length; index++) {
        if (index === 0) {
          this.internalCategories.push(
            { 'title': this.categories[index], selected: true }
          )
        } else {
          this.internalCategories.push(
            { 'title': this.categories[index], selected: false }
          )
        }
      }
    }
  }
}
</script>
