<template>
  <div class="overlay-system">
    <div
      class="overlay__backdrop fade"
      :class="{'in':show}"
    ></div>
    <div
      class="overlay fade"
      :class="{'in':show}"
    >
      <div class="overlay__container">
        <div class="overlay__close"> <button
            type="button"
            class="button button--light button--circle button--float button--medium spacing-none"
            @click="$emit('closeOverlay')"
          >
            <i class="icon icon--close-dark button__icon--icon-only" />
          </button>
        </div>
        <div class="overlay__content light-bg">
          <div>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
/** style taken from Vodafone.de **/
/* general overlay */
.fade.in {
  opacity: 1;
  display: block;
}
.overlay {
  display: none;
  z-index: 1001;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}
.overlay-system {
  z-index: 10;
  position: fixed;
}
.fade {
  opacity: 0;
  transition: opacity 0.5s;
}

/* overlay container */
@media screen and (min-width: 1024px) {
  .fade.in .overlay__container {
    transform: translateX(-50%) translateY(-50%);
  }
  .fade .overlay__container {
    transform: translateX(-50%) translateY(-25%);
  }
  .overlay__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 375px;
    height: auto;
    margin-top: 50px;
  }
}
.overlay__container {
  position: relative;
  background-color: #fff;
  overflow: hidden;
  z-index: 3;
  height: 100%;
  transition: transform 0.5s ease-out;
  width: calc(100vw - 2%);
  margin: 0 auto 0 12px;
}

/* close button */
.button--circle,
.button--circle.button--float::after,
.button--circle.button--float::before {
  border-radius: 50%;
}
.button--float::after,
.button--float::before {
  content: "";
  position: absolute;
  z-index: -1;
  display: block;
}
.button--float::before {
  background-color: #fff;
  opacity: 0.6;
  top: -16px;
  right: -16px;
  bottom: -16px;
  left: -16px;
}

.overlay__close {
  position: absolute;
  top: 16px;
  right: 32px;
}
.button--circle.button--medium {
  width: 40px;
}
.spacing-none {
  margin-bottom: 0 !important;
}
.button--float {
  position: relative;
  z-index: 1;
}
.button--circle,
.button--circle.button--float::after,
.button--circle.button--float::before {
  border-radius: 50%;
}
.button--light,
.button--light.button--float::after,
.button--light:visited,
.button--light:visited.button--float::after {
  color: #333;
}
.button--light {
  background-color: #fff;
}
.button--medium {
  height: 40px;
}
.button,
.button:visited {
  color: #fff;
}
.button {
  border: 0;
  background: transparent;
  font-size: 1.143rem;
  padding: 8px 16px;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: 0 1px 3px rgba(51, 51, 51, 0.6);
  font-weight: 700;
  overflow: visible;
}
.button--circle .button__icon--icon-only {
  margin-left: -8px;
}
.icon {
  background-image: none;
}
.button .icon::before {
  width: 24px;
  height: 24px;
  background-size: 24px;
}
.icon--close-dark::before {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%20%20%20%20%20width%3D%22100px%22%20height%3D%22100px%22%20viewBox%3D%220%200%20100%20100%22%20style%3D%22enable-background%3Anew%200%200%20100%20100%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cg%20id%3D%22i-xxsml.i-xsml.i-sml.i-mdm.i-lrg%22%3E%0A%3Ctitle%3Eclose%3C%2Ftitle%3E%0A%20%20%20%20%3Cpath%20d%3D%22M85.417%2C87.5c-0.533%2C0-1.067-0.203-1.473-0.61L50%2C52.946L16.057%2C86.89c-0.814%2C0.814-2.133%2C0.814-2.946%2C0%0A%09c-0.814-0.813-0.814-2.133%2C0-2.946L47.054%2C50L13.11%2C16.057c-0.814-0.814-0.814-2.133%2C0-2.946c0.814-0.813%2C2.133-0.813%2C2.946%2C0%0A%09L50%2C47.054L83.944%2C13.11c0.813-0.813%2C2.133-0.813%2C2.946%2C0c0.814%2C0.814%2C0.814%2C2.133%2C0%2C2.946L52.946%2C50L86.89%2C83.944%0A%09c0.814%2C0.813%2C0.814%2C2.133%2C0%2C2.946C86.483%2C87.297%2C85.95%2C87.5%2C85.417%2C87.5z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E");
}
.icon::before {
  content: "";
  display: inline-block;
  background-repeat: no-repeat;
}

.button--circle,
.button--circle.button--float::after,
.button--circle.button--float::before {
  border-radius: 50%;
}
.button--light.button--float::after {
  background-color: #fff;
}
.button--light,
.button--light.button--float::after,
.button--light:visited,
.button--light:visited.button--float::after {
  color: #333;
}
.button--float::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px rgba(51, 51, 51, 0.6);
}
.button--float::after,
.button--float::before {
  content: "";
  position: absolute;
  z-index: -1;
  display: block;
}

/* overlay content */
.overlay__content {
  height: auto;
  min-height: 104px;
  max-height: 80vh;
}
.overlay__content {
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
}
.overlay__content {
  margin: 0;
  padding: 72px 24px 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  overflow-y: auto;
  overscroll-behavior: contain;
}

/* overlay div container */
.overlay__content > :last-child {
  margin-bottom: 0;
}

/* dark overlay background */
.overlay__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: "";
  background-color: #333;
  display: none;
}

.overlay__backdrop.fade.in {
  opacity: 0.6;
  display: show;
}
</style>
