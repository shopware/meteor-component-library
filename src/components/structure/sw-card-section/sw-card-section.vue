<template>
  <div
    class="sw-card-section"
    :class="cardSectionClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SwCardSection',

  props: {
    divider: {
      type: String,
      required: false,
      default: '',
      validValues: ['top', 'right', 'bottom', 'left'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['top', 'right', 'bottom', 'left'].includes(value);
      },
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
    slim: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    cardSectionClasses() {
      return {
        [`sw-card-section--divider-${this.divider}`]: this.divider,
        'sw-card-section--secondary': this.secondary,
        'sw-card-section--slim': this.slim,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-card-section {
  padding: 30px;

  &.sw-card-section--divider-top {
    border-top: 1px solid $color-gray-300;
  }

  &.sw-card-section--divider-right {
    border-right: 1px solid $color-gray-300;
  }

  &.sw-card-section--divider-bottom {
    border-bottom: 1px solid $color-gray-300;
  }

  &.sw-card-section--divider-left {
    border-left: 1px solid $color-gray-300;
  }

  &.sw-card-section--secondary {
    background-color: $color-gray-100;
  }

  &.sw-card-section--slim {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
