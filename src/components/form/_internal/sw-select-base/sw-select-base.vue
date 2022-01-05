<template>
  <sw-block-field
    class="sw-select"
    :class="swFieldClasses"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="$listeners"
  >
    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">
      <div
        ref="selectWrapper"
        class="sw-select__selection"
        tabindex="0"
        @click="expand"
        @focus="expand"
        @keydown.tab="collapse"
        @keydown.esc="collapse"
      >
        <slot
          name="sw-select-selection"
          v-bind="{ identification, error, disabled, size, expand, collapse }"
        ></slot>
        <div class="sw-select__selection-indicators">
          <sw-loader
            v-if="isLoading"
            class="sw-select__select-indicator"
            size="16px"
          />

          <button
            v-if="!disabled && showClearableButton"
            class="sw-select__select-indicator-hitbox"
            data-clearable-button
            @click.prevent.stop="emitClear"
            @keydown.tab.stop="focusParentSelect"
          >
            <sw-icon
              class="sw-select__select-indicator sw-select__select-indicator-clear"
              name="small-default-x-line-medium"
              small
            />
          </button>

          <sw-icon
            class="sw-select__select-indicator"
            name="small-arrow-medium-down"
            small
          />
        </div>
      </div>

      <template v-if="expanded">
        <transition name="sw-select-result-list-fade-down">
          <slot
            name="results-list"
            v-bind="{ collapse }"
          ></slot>
        </transition>
      </template>
    </template>

    <template #label>
      <slot name="label"></slot>
    </template>
  </sw-block-field>
</template>

<script>
import SwBlockField from '../sw-block-field/sw-block-field.vue';
import SwIcon from '../../../base/sw-icon/sw-icon.vue';
import SwLoader from '../../../utils/sw-loader/sw-loader.vue';

export default {
  name: 'sw-select-base',

  components: {
    'sw-block-field': SwBlockField,
    'sw-icon': SwIcon,
    'sw-loader': SwLoader,
  },

  inheritAttrs: false,

  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    showClearableButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      expanded: false,
    };
  },

  computed: {
    swFieldClasses() {
      return { 'has--focus': this.expanded };
    },
  },

  methods: {
    toggleExpand() {
      if (!this.expanded) {
        this.expand();
      } else {
        this.collapse();
      }
    },

    expand() {
      if (this.expanded) {
        return;
      }

      if (this.disabled) {
        return;
      }

      this.expanded = true;
      document.addEventListener('click', this.listenToClickOutside);
      this.$emit('select-expanded');
    },

    collapse(event) {
      document.removeEventListener('click', this.listenToClickOutside);
      this.expanded = false;

      // do not let clearable button trigger change event
      if (event?.target?.dataset.clearableButton === undefined) {
        this.$emit('select-collapsed');
      }

      // @see NEXT-16079 allow back tab-ing through form via SHIFT+TAB
      if (event && event?.shiftKey) {
        event.preventDefault();
        this.focusPreviousFormElement();
      }
    },

    focusPreviousFormElement() {
      const focusableSelector = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
      const myFocusable = this.$el.querySelector(focusableSelector);
      const keyboardFocusable = [
        ...document.querySelectorAll(focusableSelector),
      ].filter((el) => !el.hasAttribute('disabled') && el.dataset.clearableButton === undefined);

      keyboardFocusable.forEach((element, index) => {
        if (index > 0 && element === myFocusable) {
          const kbFocusable = keyboardFocusable[index - 1];
          kbFocusable.click();
          kbFocusable.focus();
        }
      });
    },

    listenToClickOutside(event) {
      let { path } = event;
      if (typeof path === 'undefined') {
        path = this.computePath(event);
      }

      if (!path.find((element) => element === this.$el)) {
        this.collapse();
      }
    },

    computePath(event) {
      const path = [];
      let { target } = event;

      while (target) {
        path.push(target);
        target = target.parentElement;
      }

      return path;
    },

    emitClear() {
      this.$emit('clear');
    },

    focusParentSelect(event) {
      if (event && event?.shiftKey) {
        this.$refs.selectWrapper.click();
        event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

$sw-select-focus-transition: all ease-in-out 0.2s;

.sw-select {
  position: relative;

  .sw-block-field__block {
    transition: $sw-select-focus-transition;
    background-color: $color-white;
    position: relative;
    overflow: visible;
  }

  .sw-select__selection {
    position: relative;
    padding: 0 8px;
    border: none;
    font-size: $font-size-small;
    font-family: $font-family-default;
    line-height: 22px;
    color: $color-darkgray-200;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .sw-select__selection-indicators {
    position: absolute;
    display: flex;
    gap: 8px;
    top: 50%;
    right: 16px;
    transform: translate(0, -50%);
    z-index: 1;
  }

  .sw-select__selection-indicators .sw-loader {
    position: static;
    width: 16px;
    height: 16px;
    margin: 0;

    .sw-loader__container {
      transform: none;
      left: 0;
      top: 0;
    }
  }

  .sw-select__select-indicator-hitbox {
    background-color: transparent;
    border: 0 solid transparent;
    color: $color-darkgray-200;
    padding: 0 4px;
    cursor: pointer;

    .sw-select__select-indicator {
      display: block;
    }

    &:focus {
      .sw-select__select-indicator-clear {
        opacity: 1;
        pointer-events: all;
        cursor: pointer;
      }
    }
  }

  .sw-select__select-indicator {
    flex-shrink: 0;
    cursor: pointer;
  }

  .sw-select__select-indicator-clear {
    transition: 0.1s opacity ease;
    opacity: 0;
    pointer-events: none;
  }

  &:hover .sw-select__select-indicator-clear,
  &.has--focus .sw-select__select-indicator-clear {
    opacity: 1;
    pointer-events: all;
    cursor: pointer;
  }

  &.sw-field--medium .sw-select__selection {
    padding: 4px 6px 0;
  }

  &.sw-field--small .sw-select__selection {
    padding: 4px 6px 0;
  }

  &.is--disabled {
    .sw-block-field__block {
      background-color: $color-gray-100;
    }

    .sw-label {
      background-color: $color-gray-100;
    }

    input {
      background-color: $color-gray-100;
    }
  }
}

// Vue.js transitions
.sw-select-result-list-fade-down-enter-active,
.sw-select-result-list-fade-down-leave-active {
  transition: $sw-select-focus-transition;
  transform: translateY(0);
}

.sw-select-result-list-fade-down-enter,
.sw-select-result-list-fade-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
