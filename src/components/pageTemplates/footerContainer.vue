<template>
  <div class="discovery-footer light-bg">
    <div class="ume-relative section">
      <div
        class="ume-section dark-bg comp-prefix-0e0c8b0c-f69d-4f16-8259-57b506d33264/sharedDialogs/modul_wrapper"
        data-title=""
        data-anchor=""
      >
        <div
          class="section-content"
          style="background: #333333;background-repeat: no-repeat; padding-top: 0; padding-bottom: 0; "
        >
          <div class="container">
            <div class="section-header hidden">
            </div>
            <div class="section-body">
              <div class="modulContent parsys">
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
                <div class="ume-relative section">
                  <div class="ume-compact grid ">
                    <div class="grid-col no-border w-1of4 w-1of1-sm w-1of1-md ">
                      <div class="gridcol parsys">
                        <div class="html section">
                        </div>
                      </div>
                    </div>
                    <div class="grid-col no-border w-1of4 w-1of2-sm w-1of2-md ">
                      <div class="gridcol_0 parsys">
                        <div class="html section">
                          <a
                            target="_blank"
                            href="https://www.vodafone.de/unternehmen/auszeichnungen.html"
                          ><img
                              class="center quality-icon"
                              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/umde-cb-sieger-2020.jpg"
                            ></a>
                        </div>
                      </div>
                    </div>
                    <div class="grid-col no-border w-1of4 w-1of2-sm w-1of2-md ">
                      <div class="gridcol_1 parsys">
                        <div class="html section">
                          <a
                            href="https://www.vodafone.de/unternehmen/auszeichnungen.html"
                            target="_blank"
                          >
                            <img
                              class="center quality-icon"
                              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/umde-connect-sieger-2020.jpg"
                            ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="spacer section">
                  <div class="upc_spacer_height_4">
                    <!---->
                  </div>
                </div>
                <div class="html section">
                  <!-- custom code FR 23-01-2020 -->
                  <ul class="mod-glnav-footer list-social">
                    <li>
                      <a href="https://www.vodafone.de/featured/">
                        <span class="icon icon-social-vf"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/vodafone">
                        <span class="icon icon-social-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/user/vodafonedeutschland">
                        <span class="icon icon-social-youtube"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/vodafone_de">
                        <span class="icon icon-social-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/vodafoneDE">
                        <span class="icon icon-social-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/vodafone_de/">
                        <span class="icon icon-social-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://forum.vodafone.de/">
                        <span class="icon icon-social-forum"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="spacer section">
              <div class="upc_spacer_height_2">
                <!---->
              </div>
            </div>
            <block-links></block-links>
            <row-links></row-links>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blockLinks from '@/components/molecules/footer/blockLinks.vue'
import rowLinks from '@/components/molecules/footer/rowLinks.vue'
export default {
  components: {
    blockLinks,
    rowLinks
  }
}
</script>

<style scoped>
.discovery-footer .grid-col.no-border {
  border: none;
}
.ume-section a:any-link:not(.btn) {
  text-decoration: none;
}
img.quality-icon {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  max-height: 250px;
  width: auto;
}
img.quality-icon:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}
@media screen and (max-width: 979px) {
  img.quality-icon {
    max-width: 180px;
    padding-left: 15vw;
  }
}
@media screen and (max-width: 479px) {
  img.quality-icon {
    max-width: 100px;
  }
}
ul.mod-glnav-footer.list-social {
  position: relative;
  padding: 35px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
ul.mod-glnav-footer.list-social li {
  position: relative;
  margin: 5px;
}
ul.mod-glnav-footer.list-social,
ul.mod-glnav-footer.list-social a,
ul.mod-glnav-footer.list-social a:visited {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
ul.mod-glnav-footer.list-social li .icon {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  background-image: url(//unitymedia.de/content/dam/dcomm-unitymedia-de/vodafone/Privatkunden/home/vdf-icons.svg);
  background-size: 150px 1230px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-vf {
  background-position: -114px -78px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-linkedin {
  background-position: -114px -294px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-youtube {
  background-position: -114px -150px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-twitter {
  background-position: -114px -222px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-facebook {
  background-position: -114px -114px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-instagram {
  background-position: -114px -402px;
}
ul.mod-glnav-footer.list-social li .icon.icon-social-forum {
  background-position: -114px -366px;
}

.nav-box .box-header,
.nav-box .box-header a {
  color: #333333;
  font-family: "VodafoneRg";
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: none;
}
.nav-box .box-footer {
  background: rgba(0, 0, 0, 0.1);
}
.box.nav-box li a,
.nav-box .box-footer a,
.nav-box .box-link > span,
.nav-box .box-links li > span,
.nav-box .box-link::before,
.nav-box .box-links li::before {
  color: #333333;
}
.box--b-spot .box-footer {
  padding: 0;
  margin: 0 auto;
  padding-bottom: 20px;
}

.upc_columns_fatfooter_200_210_210_210-c0,
.upc_columns_fatfooter_200_210_210_210-c1,
.upc_columns_fatfooter_200_210_210_210-c2 {
  background: none;
}
.upc_columns_fatfooter_200_210_210_210 {
  margin-bottom: 0;
}
.umeMain .icon.socialFooter,
.umeMain .icon.awardFooter {
  display: inline-block;
  background: url("//www.unitymedia.de/content/dam/unitymedia-de/assets/images/icons/footerSprite_aktuell.png");
  width: 90px;
  height: 21px;
}
.umeMain .icon.socialFooter.blogger {
  background-position: -92px -2px;
}
.umeMain .icon.socialFooter.blogger:hover {
  background-position: -1px -2px;
}
.umeMain .icon.socialFooter.facebook {
  background-position: -92px -24px;
}
.umeMain .icon.socialFooter.facebook:hover {
  background-position: -1px -24px;
}
.umeMain .icon.socialFooter.instagram {
  background-position: -92px -46px;
}
.umeMain .icon.socialFooter.instagram:hover {
  background-position: -1px -46px;
}
.umeMain .icon.socialFooter.twitter {
  background-position: -92px -68px;
}
.umeMain .icon.socialFooter.twitter:hover {
  background-position: -1px -68px;
}
.umeMain .icon.socialFooter.community {
  background-position: -92px -112px;
}
.umeMain .icon.socialFooter.community:hover {
  background-position: -1px -112px;
}
.umeMain .icon.socialFooter.youtube {
  background-position: -92px -90px;
}
.umeMain .icon.socialFooter.youtube:hover {
  background-position: -1px -90px;
}
.umeMain .icon.awardFooter.tuevUme {
  background-position: -183px -69px;
  width: 131px;
  height: 66px;
}
.umeMain .icon.awardFooter.tuevKbw {
  background-position: -183px -137px;
  width: 131px;
  height: 66px;
}
.umeMain .icon.awardFooter.connectUme {
  background-position: -273px -2px;
  width: 89px;
  height: 66px;
}
.umeMain .icon.awardFooter.connectKbw {
  background-position: -183px -2px;
  width: 89px;
  height: 66px;
}
.umeMain .tcSocialFooter {
  width: 206px;
}
.umeMain .tcSocialFooter a {
  float: left;
  cursor: pointer;
  margin: 0 10px 10px 0;
  height: 21px;
}
.umeMain .tcSocialFooter a.twitter {
  position: relative;
  font-size: 12px;
  color: #666666;
}
.umeMain .tcSocialFooter a.twitter i {
  margin-right: 10px;
}
.umeMain .tcSocialFooter a.twitter span {
  position: absolute;
  top: 1px;
}
.umeMain .tcSocialFooter a.twitter:hover i.icon {
  background-position: -1px -68px !important;
}
.umeMain .tcAwardFooter {
  margin-bottom: 20px;
  border-top: 1px solid #c2c3ca;
  padding: 20px 0 0 10px;
}
.umeMain .tcAwardFooter h4 {
  font-size: 20px;
  margin: 0 0 25px 0;
  color: #666666;
  font-family: "speak_heavy", Arial;
}
.umeMain .tcAwardFooter .ume {
  width: 260px;
  float: left;
}
.umeMain .tcAwardFooter .kbw {
  margin-left: 260px;
}
.umeMain .tcAwardFooter p {
  color: #666666;
  font-size: 12px;
  line-height: 16px;
}
.umeMain .tcAwardFooter .icon {
  margin-right: 20px;
}
</style>
