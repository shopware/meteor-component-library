<template>
  <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
  <sw-icon
    v-tooltip="{
      message: tooltipText,
      width: 220,
      position: 'top',
      showDelay: 300,
      hideDelay: 0
    }"
    class="sw-field-copyable"
    name="regular-products-s"
    @click="copyToClipboard"
    @mouseleave="resetTooltipText"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import SwIcon from '../../../icons-media/sw-icon/sw-icon.vue';
import SwTooltipDirective from '../../../../directives/tooltip.directive';
import SwNotificationMixin from '../../../../mixins/notification.mixin';
import { copyToClipboard as copyToClipboardUtil } from '../../../../utils/dom';

export default Vue.extend({
  name: 'SwFieldCopyable',

  directives: {
    tooltip: SwTooltipDirective,
  },

  components: {
    'sw-icon': SwIcon,
  },

  mixins: [
    SwNotificationMixin,
  ],

  props: {
    copyableText: {
      type: String,
      required: false,
      default: null,
    },

    tooltip: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      wasCopied: false,
    };
  },

  computed: {
    tooltipText(): string {
      if (this.wasCopied) {
        // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
        return this.$tc('global.sw-field-copyable.tooltip.wasCopied');
      }

      // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
      return this.$tc('global.sw-field-copyable.tooltip.canCopy');
    },
  },

  methods: {
    copyToClipboard() {
      if (!this.copyableText) {
        return;
      }

      try {
        copyToClipboardUtil(this.copyableText);
        if (this.tooltip) {
          this.tooltipSuccess();
        } else {
          this.notificationSuccess();
        }
      } catch (err) {
        // @ts-expect-error - method is defined in mixin
        this.createNotificationError({
          // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
          title: this.$tc('global.default.error'),
          // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
          message: this.$tc('global.sw-field.notification.notificationCopyFailureMessage'),
        });
      }
    },

    tooltipSuccess() {
      this.wasCopied = true;
    },

    notificationSuccess() {
      // @ts-expect-error - method is defined in mixin
      this.createNotificationInfo({
        // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
        message: this.$tc('global.sw-field.notification.notificationCopySuccessMessage'),
      });
    },

    resetTooltipText() {
      this.wasCopied = false;
    },
  },
});
</script>

<style lang="scss">
.sw-field-copyable {
  &.sw-icon {
    cursor: pointer;
  }
}
</style>
