<template>
  <div class="body discovery-body">
    <div class="par parsys">
      <a-spot waitTimer="15" />
      <div class="ume-relative section">
        <div
          class="ume-section light-bg comp-prefix-415bee36-5005-4b56-8bc9-a65bd647fe91/par/modul_wrapper_2"
          data-title
          data-anchor
        >
          <div
            class="section-content"
            style="background: #000000;filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#ffffff, endColorstr=#ffffff);background: #ffffff;background-position: 0% 0%;background-size: auto;background-repeat: no-repeat; padding-top: 0;"
          >
            <div class="container">
              <div class="section-body at-element-marker">
                <div class="modulContent parsys">
                  <div class="ume-relative section">
                    <b-spot
                      :boxSet="[
                    '2play',
                    'mgm',
                    'catamaran'
                    ]"
                    />
                  </div>
                  <ov-c-spot/>
                  <div class="ume-relative section">
                    <c-spot
                      :boxSet="[
                    'installation',
                    'kundencenter',
                    'vorteile'
                    ]"
                    />
                  </div>
              <spacer setting="5"/>
                  <seo-content :darkBg="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aSpot from '@/components/organisms/aSpotContainer.vue'
import bSpot from '@/components/organisms/bSpotContainer.vue'
import cSpot from '@/components/organisms/cSpotContainer.vue'
import ovCSpot from '@/components/molecules/ovCSpot.vue'
import spacer from '@/components/atoms/spacer.vue'
import seoContent from '@/components/organisms/seoContent.vue'

export default {
  components: {
    spacer,
    seoContent,
    aSpot,
    bSpot,
    cSpot,
    ovCSpot
  }
}
</script>
<style scoped>
.responsive-twister {
  display: block;
  z-index: 1;
  position: relative;
}
@media screen and (max-width: 979px) {
  .responsive-twister {
    display: none;
  }
}
</style>
