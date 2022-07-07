<template>
  <span
    v-tooltip="{
      message: text,
      width: width,
      position: tooltipPosition,
      showDelay: showDelay,
      hideDelay: hideDelay
    }"
    class="sw-help-text"
    role="tooltip"
    aria-label="help-text"
  >
    <sw-icon
      data-testid="sw-help-text__icon"
      name="solid-question-circle-s"
    />
    <span class="sw-help-text__tooltip-text">{{ text }}</span>
  </span>
</template>

<script>
import SwIcon from '../sw-icon/sw-icon.vue';
import SwTooltipDirective from '../../../directives/tooltip.directive';

export default {
  name: 'SwHelpText',

  components: {
    'sw-icon': SwIcon,
  },

  directives: {
    tooltip: SwTooltipDirective,
  },

  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    width: {
      type: Number,
      required: false,
      default: 200,
    },
    tooltipPosition: {
      type: String,
      required: false,
      default: 'top',
      validValues: ['top', 'bottom', 'left', 'right'],
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value);
      },
    },
    showDelay: {
      type: Number,
      required: false,
      default: 100,
    },
    hideDelay: {
      type: Number,
      required: false,
      default: 100,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-help-text {
  color: $color-shopware-brand-500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  &__tooltip-text {
    display: none;
  }
}
</style>
