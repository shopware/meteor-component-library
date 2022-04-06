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
  >
    <sw-icon name="small-questionmark" />
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
  width: 16px;
  height: 16px;
  background-color: $color-shopware-brand-500;
  color: $color-white;
  border-radius: 50%;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  .sw-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
