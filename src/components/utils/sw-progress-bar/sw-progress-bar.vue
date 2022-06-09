<template>
  <div class="sw-progress-bar">
    <div class="sw-progress-bar__total">
      <div
        class="sw-progress-bar__value"
        :style="{ width: styleWidth }"
        :class="progressClasses"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwProgressBar',

  props: {
    value: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 100,
      required: false,
    },
  },

  computed: {
    styleWidth() {
      let percentage = this.value / this.maxValue * 100;
      if (percentage > 100) {
        percentage = 100;
      }

      if (percentage < 0) {
        percentage = 0;
      }

      return `${percentage}%`;
    },

    progressClasses() {
      return {
        'sw-progress-bar__value--no-transition': this.value < 1 || this.value >= this.maxValue,
      };
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";
@import "../../assets/scss/variables.scss";

$sw-progress-bar-value-color:       $color-shopware-brand-500;
$sw-progress-bar-background-color:  lighten($color-darkgray-200, 40%);
$sw-progress-bar-height:            8px;

.sw-progress-bar {
  width: 100%;
  height: $sw-progress-bar-height;

  .sw-progress-bar__total {
    width: 100%;
    height: 100%;
    background-color: $sw-progress-bar-background-color;
    border-radius: math.div($sw-progress-bar-height, 2);
  }

  .sw-progress-bar__value {
    transition: 1s width linear;
    height: 100%;
    background-color: $sw-progress-bar-value-color;
    border-radius: math.div($sw-progress-bar-height, 2);
  }

  .sw-progress-bar__value--no-transition {
    transition: 0s width linear;
  }
}
</style>
