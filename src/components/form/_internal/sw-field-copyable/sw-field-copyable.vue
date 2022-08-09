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

  // @ts-expect-error - i18n is a plugin. Will be added to global variables in NEXT-22728
  i18n: {
    messages: {
      en: {
        'sw-field-copyable': {
          tooltip: {
            wasCopied: 'Copied to clipboard.',
            canCopy: 'Copy to clipboard.',
            notificationCopySuccessMessage: 'Text has been copied to clipboard.',
            notificationCopyFailureMessage: 'Text could not be copied to clipboard.',
            errorTitle: 'Error copying to clipboard',
          }
        }
      },
      de: {
        'sw-field-copyable': {
          tooltip: {
            wasCopied: 'In Zwischenablage kopiert.',
            canCopy: 'In Zwischenablage kopieren.',
            notificationCopySuccessMessage: 'Der Text wurde in die Zwischenablage kopiert.',
            notificationCopyFailureMessage: 'Der Text konnte nicht in die Zwischenablage kopiert werden.',
            errorTitle: 'Fehler beim kopieren in die Zwischenablage',
          }
        }
      }
    }
  },

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
        return this.$tc('sw-field-copyable.tooltip.wasCopied');
      }

      // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
      return this.$tc('sw-field-copyable.tooltip.canCopy');
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
          title: this.$tc('sw-field-copyable.errorTitle'),
          // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
          message: this.$tc('sw-field-copyable.notificationCopyFailureMessage'),
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
        message: this.$tc('sw-field-copyable.notificationCopySuccessMessage'),
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
