<template>
  <div
    v-tooltip="ratingTooltip"
    class="sw-rating-stars"
    :style="dynamicWidthStyle"
  >

    <div class="sw-rating-stars__placeholder">
      <sw-icon
        v-for="currentStar in maxStars"
        :key="`placeholder${currentStar}`"
        class="sw-rating-stars__star star-empty"
        name="default-review-star-full"
        :size="iconSize.toString()"
      />
    </div>

    <div class="sw-rating-stars__value">
      <sw-icon
        v-for="currentStar in Math.floor(cappedValue)"
        :key="`full${currentStar}`"
        class="sw-rating-stars__star star-full"
        name="default-review-star-full"
        :size="iconSize.toString()"
      />

      <sw-icon
        v-if="(cappedValue % 1) > 0"
        class="sw-rating-stars__star star-partial"
        :style="partialStarCutStyle"
        name="default-review-star-full"
        :size="iconSize.toString()"
      />
    </div>
  </div>
</template>

<script>
import SwIcon from '../sw-icon/sw-icon.vue';
import SwTooltipDirective from '../../../directives/tooltip.directive';

export default {
  name: 'sw-rating-stars',

  components: {
    'sw-icon': SwIcon,
  },

  directives: {
    tooltip: SwTooltipDirective,
  },

  props: {
    value: {
      type: Number,
      required: true,
    },

    maxStars: {
      type: Number,
      required: false,
      default: 5,
    },

    iconSize: {
      type: Number,
      required: false,
      default: 16,
    },

    displayFractions: {
      type: Number,
      required: false,
      default: 4,
      validator(value) {
        return value > 0 && value <= 100;
      },
    },
  },

  computed: {
    ratingTooltip() {
      return {
        message: this.$tc('sw-rating-stars.ratingTooltipText', 0, {
          actual: this.cappedValue,
          max: this.maxStars,
        }),
      };
    },

    cappedValue() {
      return Math.min(this.value, this.maxStars);
    },

    partialStarCutStyle() {
      const negatedPartialValue = 1 - (this.value % 1);
      const percentage = Math.round(negatedPartialValue * this.displayFractions) * 100 / this.displayFractions;

      // Adjusting styles to make the changes more visible
      let stylePercentage = percentage;
      if (percentage >= 25 && percentage < 50) {
        stylePercentage += 10;
      } else if (percentage <= 75 && percentage > 50) {
        stylePercentage -= 10;
      }

      return `clip-path: inset(0 ${stylePercentage}% 0 0)`;
    },

    dynamicWidthStyle() {
      return `width: ${this.maxStars * this.iconSize + this.maxStars - 1}px;`;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-rating-stars {
  position: relative;
  height: 22px;
  margin: 2px;

  &__star {
    margin-right: 1px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__value {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0;

    .icon--default-review-star-full {
      color: $color-module-yellow-700;
    }
  }

  &__placeholder {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0;

    .icon--default-review-star-full {
      color: $color-gray-300;
    }
  }
}
</style>
