<template>
  <div class="sw-loader">
    <div
      class="sw-loader__container"
      :style="loaderSize"
    >
      <svg
        class="sw-loader__element"
        :width="size"
        :height="size"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="sw-loader__path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sw-loader',

  props: {
    size: {
      type: String,
      required: false,
      default: '50px',
    },
  },

  computed: {
    loaderSize() {
      return {
        width: this.size,
        height: this.size,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-loader-color-overlay: rgba(255, 255, 255, 0.8);
$sw-loader-element-color: $color-shopware-brand-500;
$sw-loader-rotate-duration: 1.4s;
$sw-loader-colors-duration: 5.6s;
$sw-loader-z-index: $z-index-loader;

.sw-loader {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: $sw-loader-z-index;
  background: $sw-loader-color-overlay;

  .sw-loader__container {
    display: grid;
    grid-auto-columns: auto;
    align-items: center;
    justify-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sw-loader__element {
    animation: sw-loader-rotator $sw-loader-rotate-duration linear infinite;
  }

  .sw-loader__path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
      sw-loader-dash $sw-loader-rotate-duration ease-in-out infinite,
      sw-loader-colors $sw-loader-colors-duration ease-in-out infinite;
  }

  @keyframes sw-loader-colors {
    0% {
      stroke: $sw-loader-element-color;
    }

    25% {
      stroke: lighten($sw-loader-element-color, 25%);
    }

    50% {
      stroke: saturate($sw-loader-element-color, 50%);
    }

    75% {
      stroke: lighten($sw-loader-element-color, 25%);
    }

    100% {
      stroke: $sw-loader-element-color;
    }
  }

  @keyframes sw-loader-dash {
    0% {
      stroke-dashoffset: 187;
    }

    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }

  @keyframes sw-loader-rotator {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(270deg);
    }
  }
}
</style>
