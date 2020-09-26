<template>
  <div class="body">
    <div class="par parsys">
      <hero-spot />
      <how-to-wechselvorteil />
      <share-module />
      <ihr-vorteil />
      <!--
        currently not in use, please don't delete it in case we need a new version of it later
        <gigakombi-module/>
        -->
    </div>
  </div>
</template>
<script>
import heroSpot from '@/components/organisms/wechselvorteil/heroSpot.vue'
import howToWechselvorteil from '@/components/organisms/wechselvorteil/howToWechselvorteil.vue'
import ihrVorteil from '@/components/organisms/wechselvorteil/ihrVorteil.vue'
import shareModule from '@/components/organisms/wechselvorteil/shareModule.vue'
// import gigakombiModule from '@/components/organisms/gigakombiModule.vue'

export default {
  name: 'productDetailPage',
  components: {
    heroSpot,
    howToWechselvorteil,
    ihrVorteil,
    shareModule
    // gigakombiModule
  }
}
</script>

<style>
</style>
