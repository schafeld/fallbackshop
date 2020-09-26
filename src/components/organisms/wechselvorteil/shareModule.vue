<template>
  <module-wrapper :background="'linear-gradient(90deg, #592552 0%, #592552 100%)'" :darkBg="true">
    <div class="richtext section">
      <div
        id="par_modul_wrapper_1397813013_modulcontent_richtext"
        class=""
        style="word-wrap:break-word;"
      >
        <p
          style="text-align: center;"
          class="h2a"
        >Überzeugt?</p>
        <p
          class="body-large"
          style="text-align: center;"
        >Erzähl Deinen Freunden von unserer Wechselprämie.</p>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_3">
        <!---->
      </div>
    </div>
    <div class="html section">
      <div class="share-buttons-wechslervorteil">
        <div
          class="social-icon-button"
          onclick="sncf.linkTrackVars='prop75,prop33';
 sncf.prop75='CRO Wechsel LP - Sharing Facebook';
 sncf.prop33=sncf.eVar3;
 sncf.tl(true,'o','CRO Wechsel LP');
 sncf.linkTrackVars='None';"
        >
          <a
            style="display: flex;
justify-content: center;
flex-direction: column;"
            href="//www.facebook.com/share.php?u=https://www.unitymedia.de/privatkunden/angebote/aktionen-und-kampagnen/wechseln-statt-warten"
            title="Share on Facebook"
            target="_blank"
          >
            <img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/Aktionen/WDG/social-icons-white-fb.png"
              alt="Facebook"
            ><br>
            <span style="text-decoration:underline;text-align: center;">Facebook</span>
          </a>
        </div>
        <div
          class="social-icon-button"
          onclick="sncf.linkTrackVars='prop75,prop33';
 sncf.prop75='CRO Wechsel LP - Sharing Twitter';
 sncf.prop33=sncf.eVar3;
 sncf.tl(true,'o','CRO Wechsel LP');
 sncf.linkTrackVars='None';"
        ><a
            style="display: flex;
justify-content: center;
flex-direction: column;"
            href="https://twitter.com/intent/tweet?text=Wechseln%20statt%20warten!%20Super%20Wechselangebot%20f%C3%BCr%20DSL-Kunden.%20Mehr%20unter:%20unitymedia.de/wechseln-statt-warten&amp;source=webclient"
          ><img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/global/icons_um/ICO_twitter.png"
              alt="Twitter"
            ><br>
            <span style="text-decoration:underline;text-align: center;">Twitter</span></a>
        </div>
        <div
          class="social-icon-button"
          onclick="sncf.linkTrackVars='prop75,prop33';
 sncf.prop75='CRO Wechsel LP - Sharing Mail';
 sncf.prop33=sncf.eVar3;
 sncf.tl(true,'o','CRO Wechsel LP');
 sncf.linkTrackVars='None';"
        ><a
            href="mailto:?subject=Wechseln statt warten!&amp;body=Super Wechselangebot an DSL-Kunden. Hier informieren: unitymedia.de/wechseln-statt-warten"
            target="_blank"
            style="display: flex;
justify-content: center;
flex-direction: column;"
          ><img
              src="//unitymedia.de/content/dam/dcomm-unitymedia-de/Privatkunden/Aktionen/Solingen/icn_share_mail_white.png"
              alt="Mail"
            ><br><span style="text-decoration:underline;text-align: center;">Mail</span></a>
        </div>
      </div>
    </div>
    <div class="spacer section">
      <div class="upc_spacer_height_4">
        <!---->
      </div>
    </div>
  </module-wrapper>
</template>
<script>
import moduleWrapper from '@/components/atoms/moduleWrapper.vue'
export default {
  components: {
    moduleWrapper
  }
}
</script>
<style>
.share-buttons-wechslervorteil {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  max-width: 860px;
  margin: 0 auto;
}

.share-buttons-wechslervorteil .social-icon-button img {
  width: 48px;
  height: 48px;
}
</style>
