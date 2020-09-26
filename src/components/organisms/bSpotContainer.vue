<template>
  <div class="ume-compact grid">
    <div :class="'grid-col w-1of3 w-1of1-sm w-1of3-md'">
      <div class="gridcol parsys">
        <spacer setting="4" />
        <first-bspot></first-bspot>
        <spacer setting="2" />
      </div>
    </div>
    <div :class="'grid-col w-1of3 w-1of1-sm w-1of3-md'">
      <div class="gridcol parsys">
        <spacer setting="4" />
        <second-bspot></second-bspot>
        <spacer setting="2" />
      </div>
    </div>
    <div :class="'grid-col w-1of3 w-1of1-sm w-1of3-md'">
      <div class="gridcol parsys">
        <spacer setting="4" />
        <third-bspot></third-bspot>
        <spacer setting="2" />
      </div>
    </div>
  </div>
</template>
<script>
import spacer from '@/components/atoms/spacer.vue'
import firstBspot from '@/components/molecules/rebranding-bspots/firstBspot.vue'
import secondBspot from '@/components/molecules/rebranding-bspots/secondBspot.vue'
import thirdBspot from '@/components/molecules/rebranding-bspots/thirdBspot.vue'

export default {
  name: 'bspot-Container',
  components: {
    spacer,
    firstBspot,
    secondBspot,
    thirdBspot
  },
  props: {
    boxSet: {
      type: Array,
      required: true
    }
  },
  computed: {
    boxSetObject () {
      let tempArray = []
      if (this.boxSet) {
        for (let index = 0; index < this.boxSet.length; index++) {
          tempArray[index] = this.$store.getters.getSingleBSpot(this.boxSet[index])[0]
        }
      }
      if (!tempArray) {
        tempArray = ''
      }
      return tempArray
    }
  }
}
</script>
<style>
.bspot {
  margin: 0 0 20px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 310px;
  background-repeat: no-repeat, no-repeat;
  background-position: bottom center, center;
  background-size: auto 240px, auto;
}
.bspot .cta {
  align-self: center;
}
.bspot .headline {
  font-family: "VodafoneLt";
}
.bspot .subline {
  font-family: "VodafoneRg";
}
.bspot.dark-bg .headline,
.bspot.dark-bg .subline {
  color: #ffffff;
}
.bspot.light-bg .headline,
.bspot.light-bg .subline {
  color: #333333;
}
.bspot.first-box {
  /* TODO update background image */
  background-image: url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/B-Spot_InternetPhone_BubbleundStation2x.png),
    linear-gradient(225deg, #ff0000 0%, #e60000 50.76%, #820000 100%);
background-size: auto 260px , auto;
  background-position: 100% 85%;
}
.bspot.second-box {
  /* TODO update background image */
  background-image: url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/B-Spot_IntPhoneTV_Bubble+Recorder_2x.png),
    linear-gradient(225deg, #ff0000 0%, #e60000 50.76%, #820000 100%);
background-size: 300px auto, auto;
background-position: 50% 70%;
}
.bspot.third-box {
  background-image: url(//www.unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/B-Spot_MGM_180€_2x.png),
    linear-gradient(225deg, #ff0000 0%, #e60000 50.76%, #820000 100%);
background-size: 180px auto, auto;
background-position: bottom right;
}
</style>
