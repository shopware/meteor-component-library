<template>
  <sw-popover
    class="sw-context-button"
    :title="title"
    :child-views="childViews"
  >
    <template #trigger="{ toggleFloatingUi }">
      <slot name="button">
        <button
          role="button"
          aria-haspopup="menu"
          class="sw-context-button__button"
          @click="toggleFloatingUi"
          @keyup.enter="toggleFloatingUi"
        >
          <sw-icon
            :name="icon"
            small
            decorative
          />

          <slot name="button-text" />
        </button>
      </slot>
    </template>

    <template #popover-items__base="{ toggleFloatingUi, changeView }">
      <slot
        name="default"
        :change-view="changeView"
        :toggle-floating-ui="toggleFloatingUi"
      />
    </template>
  </sw-popover>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';
import SwPopover, { View } from '../../overlay/sw-popover/sw-popover.vue';
import SwPopoverItem from '../../overlay/sw-popover-item/sw-popover-item.vue'

export default Vue.extend({
  name: 'SwContextButtonVue',

  components: {
    'sw-icon': SwIcon,
    'sw-popover': SwPopover,
    'sw-popover-item': SwPopoverItem,
  },

  props: {
    icon: {
      type: String,
      required: false,
      default: 'solid-ellipsis-h-s',
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    hasError: {
      type: Boolean,
      required: false,
      default: false,
    },

    autoClose: {
      type: Boolean,
      required: false,
      default: true,
    },

    title: {
      type: String,
      required: false,
      default: '',
    },

    childViews: {
      type: Array as PropType<View[]>,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {};
  },

  computed: {
    contextClass(): {
      'is--disabled': boolean;
      'has--error': boolean;
    } {
      return {
        'is--disabled': this.disabled,
        'has--error': this.hasError,
      };
    },

    contextMenuClass(): {
      'is--left-align': boolean;
      'is--top-align': boolean;
      [key: string]: boolean;
    } {
      return {
        'is--left-align': this.menuHorizontalAlign === 'left',
        'is--top-align': this.menuVerticalAlign === 'top',
        ...this.additionalContextMenuClasses,
      };
    },
  },

  methods: {},
});
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

$sw-context-button-color-text:    $color-darkgray-200;
$sw-context-button-border-radius: $border-radius-default;
$sw-context-button-color-border:  $color-gray-300;
$sw-context-button-color-disabled:  $color-gray-100;

.sw-context-button {
  &.is--disabled {
    .sw-context-button__button {
      color: lighten($sw-context-button-color-text, 20%);
      cursor: initial;

      &:hover {
        border: none;
      }
    }
  }

  &.is--disabled.is--open {
    .sw-context-button__button {
      border: none;
    }
  }

  &.is--open .sw-context-button__button {
    border-color: $sw-context-button-color-border;
  }

  .sw-context-button__button {
    position: relative;
    color: $sw-context-button-color-text;
    background: 0 none;
    border: 1px solid transparent;
    border-radius: $sw-context-button-border-radius;
    cursor: pointer;
    height: 24px;
    line-height: 20px;
    padding: 0 8px;
    outline: none;
    font-family: $font-family-default;

    &:hover {
      border-color: $sw-context-button-color-border;
    }
  }

  &.has--error {
    .sw-context-button__button {
      .sw-icon {
        color: $sw-context-button-color-text;
      }

      color: $color-crimson-300;
    }
  }
}
</style>
