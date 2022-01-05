<template>
  <div class="sw-popover">
    <div
      v-popover="popoverConfig"
      class="sw-popover__wrapper"
      :class="popoverClass"
      :style="componentStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SwPopoverDirective from '../../../directives/popover.directive';

export default {
  name: 'sw-popover',

  directives: {
    popover: SwPopoverDirective,
  },

  props: {
    zIndex: {
      type: [Number, null],
      required: false,
      default: null,
    },
    resizeWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    popoverClass: {
      type: [String, Array, Object],
      required: false,
      default: '',
    },
  },

  computed: {
    componentStyle() {
      return {
        'z-Index': this.zIndex,
      };
    },
    popoverConfig() {
      const popoverConfigBase = this.popoverConfigExtension || {};

      return {
        ...popoverConfigBase,
        active: true,
        resizeWidth: this.resizeWidth,
      };
    },
  },
};
</script>

<style lang="scss">
.sw-popover {
  .sw-popover__wrapper {
    position: inherit;
  }
}

.sw-popover__wrapper {
  &.--placement-bottom-outside {
    transform: translate(0, calc(-100% - 57px));
  }
}
</style>
