<template>
  <div class="horizon-tv-landing-page">
    <sales-module />
    <features-module />
    <details-module />
    <faq-module />
  </div>
</template>
<script>
import detailsModule from '@/components/organisms/horizonTV/detailsModule.vue'
import faqModule from '@/components/organisms/horizonTV/faqModule.vue'
import featuresModule from '@/components/organisms/horizonTV/featuresModule.vue'
import salesModule from '@/components/organisms/horizonTV/salesModule.vue'
export default {
  components: {
    detailsModule,
    faqModule,
    featuresModule,
    salesModule
  }
}
</script>
