<template>
  <div class="logo">
    <div class="template_header_logo iparsys parsys">
      <router-link data-featuredlink="Header Navigation: Logo" to="/" @click.native='closeNavigationOverlay'>
        <img
          src="//www.unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/vodafone/iconset/vf_logo.svg"
        >
      </router-link>
      <div class="section">
        <div class="new"></div>
      </div>
      <div class="iparys_inherited">
        <div class="template_header_logo iparsys parsys"></div>
      </div>
    </div>
  </div>
</template>
<style>
@media screen and (max-width: 600px){
  .logo-bar{
    margin: 0px;
  }
  div.logo-bar div.container {
    margin-bottom: 0px;
    min-height: 30px;
  }
}
</style>
