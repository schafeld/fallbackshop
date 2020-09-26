<template>
  <div class="speed visualization">
    <div class="spacer section">
      <div class="upc_spacer_height_4">

      </div>
    </div>
    <div class="richtext section">
      <div >
        <p class="h3" style="text-align: center;">So schnell könnte auch Ihr Upload sein!</p>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_1">

      </div>
    </div>
    <div class="richtext section">
      <div >
        <p class="h4" style="text-align: center;">
          Red Internet and Phone 500 Cable inklusive Power Upload bei
          <strong>50MB</strong> Dateiupload
        </p>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_1">

      </div>
    </div>
    <div class="html section">
      <div class="speed-animation">
        <div class="speed-bar firstbar highlighted">
          <div class="bar-left">
            <span class="speed-tag">
              <span class="speed">50</span>
              <span class="mbits">Mbit/s</span>
            </span>
          </div>
          <div class="bar-container">
            <div class="bar"></div>
          </div>
          <div class="bar-right">
            <span class="download-time">0:20</span>
          </div>
        </div>
        <div class="speed-bar secondbar">
          <div class="bar-left">
            <span class="speed-tag">
              <span class="speed">25</span>
              <span class="mbits">Mbit/s</span>
            </span>
          </div>
          <div class="bar-container">
            <div class="bar"></div>
          </div>
          <div class="bar-right">
            <span class="download-time">0:40</span>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_1">

      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_5">

      </div>
    </div>
  </div>
</template>
<style scoped>

 .speed-bar {
 display: flex;
 width: 100%;
 justify-content: space-between;
 height: 100px;
 padding-top: 9px;
 padding-bottom: 49px;
 }
 .bar-left {
 display: flex;
 width: 120px;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 font-family: VodafoneRg,Arial,sans-serif;
 }
 .bar-right {
 display: flex;
 width: 120px;
 flex-direction: row;
 justify-content: left;
 padding-left: 20px;
 align-items: center;
 font-family: VodafoneRg,Arial,sans-serif;
 }
 .bar-container {
 flex-grow: 1;
 display: flex;
 align-items: center;
 position: relative;
 padding: 0 10px 0 30px;
 }
 .bar:after {
 content: "";
 display: block;
 width: 100%;
 height: 4px;
 z-index: 10;
 border-radius: 2px;
 background: rgba(255,255,255,0.4);
 z-index: 1;
 }
 .bar:before {
 animation-timing-function: linear;
 content: "";
 width: 100%;
 position: absolute;
 height: 100%;
 right: 100%;
 z-index: 2;
 background: #666666;
 }
 .firstbar .bar:before {
 animation: firstbaranimation 165s infinite;
 animation-timing-function: linear;
 }
 .secondbar .bar:before {
 animation: secondbaranimation 165s infinite;
 animation-timing-function: linear;
 }
 .thirdbar .bar:before {
 animation: thirdbaranimation 165s infinite;
 animation-timing-function: linear;
 }
 .fourthbar .bar:before {
 animation: fourthbaranimation 165s infinite;
 animation-timing-function: linear;
 }
 @keyframes firstbaranimation {
 0% {right: 100%;}
 12% {right: 0%;}
 98% {right: 0%;}
 }
 @keyframes secondbaranimation {
 0% {right: 100%;}
 24% {right: 0%;}
 98% {right: 0%;}
 }
 .highlighted .bar:before {
 background: #007C92;
 }
 .bar {
 height: 7px;
 display: flex;
 width: 100%;
 align-items: center;
 position: relative;
 overflow: hidden;
 }
 .speed-tag {
 display: flex;
 border-radius: 50%;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 width: 90px;
 height: 90px;
 border: solid 2.25px #666666;
 color: #666666;
 line-height: 10pt;
 font-family: VodafoneRg,Arial,sans-serif;
 }
 .highlighted .speed-tag {
 border: none;
 background-image: url('//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/Internet/circle-40.svg');
 width: 120px;
 height: 120px;
 background-size: cover;
 line-height: 18pt;
 }
 .speed-tag .speed {
 text-align: center;
 display: block;
 width: 100%;
 font-size: 32px;
 padding-top: 8px;
 line-height: 18pt;
 }
 .highlighted .speed-tag .speed{
 font-size: 36px;
 line-height: 18pt;
 }
 .speed-tag .mbits {
 text-align: center;
 display: block;
 width: 100%;
 line-height: 18pt;
 }
 .download-time {
 color: #666666;
 font-size: 24px;
 }
 .highlighted .download-time {
 background: #666666;
 color:transparent;
 -webkit-background-clip: text;
 background-clip: text;
 font-size: 24px;
 font-family: VodafoneRg,Arial,sans-serif;
 }
 .download-time:after{
 content: " min";
 }
 /** IE11 hotfixes **/
 _:-ms-fullscreen, :root .highlighted .download-time {
 background: none;
 color: #333333;
 }
 _:-ms-fullscreen, :root .highlighted .bar:before {
 background: #333333;
 }
 _:-ms-fullscreen, :root .highlighted .speed-tag {
 border: none;
 background-image: none;
 width: 100px;
 height: 100px;
 background-size: cover;
 line-height: 18pt;
 }

</style>
