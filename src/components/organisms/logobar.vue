<template>
  <div class="logo-bar">
    <div class="container">
      <logo/>
      <sector-switch/>
      <prominent-numbers/>
      <div
        class="animation-wrapper"
        data-widget="Search"
        data-suggest-url="https://suche.unitymedia.de/site2/suggest"
        data-search-url="https://www.unitymedia.de/privatkunden/suchergebnisseite/"
      >
        <!--<icon-header-bar/>-->
        <search-bar/>
      </div>
    </div>
  </div>
</template>
<script>
import searchBar from '@/components/molecules/searchbar.vue'
import logo from '@/components/atoms/logo.vue'
import sectorSwitch from '@/components/molecules/sectorSwitch.vue'
import prominentNumbers from '@/components/molecules/prominentNumbers.vue'
// import iconHeaderbar from '@/components/logoBar/iconHeaderBar.vue'

export default {
  components: {
    searchBar,
    sectorSwitch,
    prominentNumbers,
    // iconHeaderbar,
    logo
  }
}
</script>
