<template>
  <vodafone-station v-if="JSON.stringify(hardware)===JSON.stringify(['Vodafone-Station'])" />
  <vodafone-and-horizon-box v-else-if="JSON.stringify(hardware)===JSON.stringify(['Vodafone-Station','Horizon-Recorder'])" />
  <connect-box v-else-if="JSON.stringify(hardware)===JSON.stringify(['Connect-Box'])" />
</template>

<script>
import vodafoneStation from '@/components/molecules/contractDetails/hardware/vodafoneStation.vue'
import vodafoneAndHorizonBox from '@/components/molecules/contractDetails/hardware/vodafoneAndHorizonBox.vue'
import connectBox from '@/components/molecules/contractDetails/hardware/connectBox.vue'
export default {
  components: {
    vodafoneStation,
    vodafoneAndHorizonBox,
    connectBox
  },
  props: {
    hardware: {
      type: Array,
      required: false
    }
  }
}
</script>
