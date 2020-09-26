<template>
  <div class="komfort-option-landing-page">
    <sales-module />
    <sales-extended-module />
    <features-module />
    <faq-module />
  </div>
</template>
<script>
import faqModule from '@/components/organisms/komfortOption/faqModule.vue'
import featuresModule from '@/components/organisms/komfortOption/featuresModule.vue'
import salesModule from '@/components/organisms/komfortOption/salesModule.vue'
import salesExtendedModule from '@/components/organisms/komfortOption/salesExtendedModule.vue'
export default {
  components: {
    faqModule,
    featuresModule,
    salesModule,
    salesExtendedModule
  }
}
</script>
