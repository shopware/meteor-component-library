<template>
  <div class="sw-popover">
    <div
      v-popover="popoverConfig"
      class="sw-popover__wrapper"
      :class="popoverClass"
      :style="componentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SwPopoverDirective from '../../../directives/popover.directive';

export default Vue.extend({
  name: 'SwPopover',

  directives: {
    popover: SwPopoverDirective,
  },

  props: {
    zIndex: {
      type: [Number, null] as PropType<number|null>,
      required: false,
      default: null,
    },
    resizeWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    popoverClass: {
      type: [String, Array, Object] as PropType<string|Array<unknown>|Record<string,unknown>>,
      required: false,
      default: '',
    },
  },

  computed: {
    componentStyle(): { 'z-Index': number|null } {
      return {
        'z-Index': this.zIndex,
      };
    },
    popoverConfig(): { active: boolean, resizeWidth: boolean } {
      return {
        active: true,
        resizeWidth: this.resizeWidth,
      };
    },
  },
});
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
