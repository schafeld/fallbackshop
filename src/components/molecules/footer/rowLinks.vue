<template>
  <div class="meta-bar flex row space-between">
    <div v-for="(links, index) in linkSet" :key="index" class="flex" :class="{'column':windowWidth < 879, 'row':windowWidth > 879}">
      <div v-for="(link, index) in links.links" :key="index">
        <a
          data-upc-tooltip-type="none"
          data-action="Hyperlink"
          :href="link.url"
          :data-featuredlink="'Footer Navigation: ' + link.label"
        >{{link.label}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      linkSet: [
        {
          links: [
            { label: 'Impressum', url: '#/privatkunden/impressum/' },
            { label: 'AGB & Preise', url: '#/privatkunden/agb/' },
            { label: 'Datenschutz', url: '//www.unitymedia.de/privatkunden/datenschutz/' },
            {
              label: 'Produktinformationsblätter',
              url: '//www.unitymedia.de/privatkunden/hilfe_service/wissenswertes/pib/'
            }
          ]
        },
        {
          links: [
            { label: 'Shopsuche', url: '//www.unitymedia.de/privatkunden/storefinder/' },
            { label: 'Sitemap', url: '//www.unitymedia.de/privatkunden/sitemap/' },
            { label: 'Kontakt', url: '//www.unitymedia.de/privatkunden/kontakt/' }
          ]
        }
      ]
    }
  },
  computed: {
    windowWidth () {
      return this.$data.window.width
    }
  }
}
</script>
<style scoped>
.discovery-footer a {
  font-size: 1.3rem;
  line-height: 1.23077;
  color: #262626;
  padding: 0 10px;
}
.ume-section a:any-link:not(.btn) {
  text-decoration: none;
}
.meta-bar.flex {
  border-top: solid 1px white;
  margin-top: 20px;
  padding-top: 10px;
}
</style>
