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
    name="small-copy"
    @click="copyToClipboard"
    @mouseleave="resetTooltipText"
  />
</template>

<script>
import SwIcon from '../../../base/sw-icon/sw-icon.vue';
import SwTooltipDirective from '../../../../directives/tooltip.directive';
import SwNotificationMixin from '../../../../mixins/notification.mixin';
import { copyToClipboard as copyToClipboardUtil } from '../../../../utils/dom';

export default {
  name: 'sw-field-copyable',

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
    tooltipText() {
      if (this.wasCopied) {
        return this.$tc('global.sw-field-copyable.tooltip.wasCopied');
      }

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
        this.createNotificationError({
          title: this.$tc('global.default.error'),
          message: this.$tc('global.sw-field.notification.notificationCopyFailureMessage'),
        });
      }
    },

    tooltipSuccess() {
      this.wasCopied = true;
    },

    notificationSuccess() {
      this.createNotificationInfo({
        message: this.$tc('global.sw-field.notification.notificationCopySuccessMessage'),
      });
    },

    resetTooltipText() {
      this.wasCopied = false;
    },
  },
};
</script>

<style lang="scss">
.sw-field-copyable {
  &.sw-icon {
    cursor: pointer;
  }
}
</style>
