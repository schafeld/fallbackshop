<template>
  <div class="flexible_box parbase section">
    <div class="flexible-box flexible-box--light-bg">
      <div class="flexible-box__body">
        <div class="flexibleBoxContent parsys">
          <div class="ume-relative section">
            <div class="ume-compact grid middle-grid">
              <div class="grid-col w-2of3 w-1of1-sm w-2of3-md">
                <div class="gridcol parsys">
                  <p class="h2">Sie haben noch keine KOMFORT-Option?</p>
                  <p
                    class="h5"
                  >Holen Sie sich jetzt mit der FRITZ!Box 6591 Cable mehr Komfort und Flexibilität beim Telefonieren, Surfen und Vernetzen Ihrer Geräte zum Smart Home - schnelles Internet inklusive.</p>
                  <spacer setting="3" />
                  <div class="ume-relative section">
                    <div class="ume-compact grid middle-grid">
                      <div class="grid-col w-1of3 w-1of1-sm w-1of3-md">
                        <button-element
                          type="dcomm_button"
                          label="Mehr erfahren"
                          linkTo="/privatkunden/telefon/festnetz-optionen/komfort-option/"
                          target="_top"
                        />
                      </div>
                    </div>
                  </div>
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
import buttonElement from '@/components/atoms/buttonElement.vue'
import spacer from '@/components/atoms/spacer.vue'
export default {
  components: {
    buttonElement,
    spacer
  }
}
</script>
<style scoped>
.flexible-box {
  box-shadow: 0 0 0 !important;
}
.flexible-box {
  max-width: auto;
  background: rgba(0, 44, 119, 0.2);
  background-repeat: no-repeat;
}
</style>
