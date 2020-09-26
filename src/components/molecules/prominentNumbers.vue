<template>
  <div class="prominent_numbers_pageHeader">
    <div class="prominentNumbers" v-if="$route.fullPath.substring(0,30) !== '/privatkunden/mobil/mobilfunk/'">
      <div
        class="prominent_numbers_container"
        data-widget="ProminentNumbers"
        data-default-number="0221 466 190 99"
        data-show-number="true"
      >
        <div class="prominent_numbers_box js_prominent_numbers_box" style="display: block;">
          <div class="prominent_numbers_headline">Bestell Hotline</div>
          <span class="prominent-number prominent_numbers_main js_prominent-number">
            <span v-if="$route.name === 'home'">0221 466 190 99</span>
            <span v-else>0221 466 190 82</span>
          </span>
          <span class="tooltip js_tooltip">
            <span class="btn asterisk-orb tooltip-icon"></span>
            <span class="tooltip-layer">
              <p>Mo bis Fr 8 – 22 Uhr, Sa 8 – 20 Uhr
                <br>Nicht an Sonn- und Feiertagen
              </p>
            </span>
          </span>
        </div>
        <div class="prominent_numbers_box_edit_hint js_prominent_numbers_box_edit_hint"></div>
      </div>
    </div>
  </div>
</template>
