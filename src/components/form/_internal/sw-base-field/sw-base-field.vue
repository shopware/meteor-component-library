<template>
  <div
    class="sw-field"
    :class="swFieldClasses"
  >
    <div
      v-if="hasLabel"
      class="sw-field__label"
    >
      <sw-inheritance-switch
        v-if="isInheritanceField"
        :disabled="disableInheritanceToggle"
        class="sw-field__inheritance-icon"
        :is-inherited="isInherited"
        v-on="$listeners"
      />

      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label
        v-if="showLabel"
        :for="identification"
        :class="swFieldLabelClasses"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </label>

      <sw-help-text
        v-if="helpText"
        class="sw-field__help-text"
        :text="helpText"
      />
    </div>
    <slot
      name="sw-field-input"
      v-bind="{identification, error, disabled}"
    ></slot>

    <sw-field-error :error="error" />

    <div
      v-if="$slots.hint"
      class="sw-field__hint"
    >
      <slot name="hint"></slot>
    </div>
  </div>
</template>

<script>
import SwInheritanceSwitch from '../sw-inheritance-switch/sw-inheritance-switch.vue';
import SwHelpText from '../../../base/sw-help-text/sw-help-text.vue';
import SwFieldError from '../sw-field-error/sw-field-error.vue';
import { createId } from '../../../../utils/uuid';

export default {
  name: 'sw-base-field',

  inheritAttrs: false,

  components: {
    'sw-inheritance-switch': SwInheritanceSwitch,
    'sw-help-text': SwHelpText,
    'sw-field-error': SwFieldError,
  },

  props: {
    name: {
      type: String,
      required: false,
      default: null,
    },

    label: {
      type: String,
      required: false,
      default: null,
    },

    helpText: {
      type: String,
      required: false,
      default: null,
    },

    isInvalid: {
      type: Boolean,
      required: false,
      default: false,
    },

    error: {
      type: [Object],
      required: false,
      default() {
        return null;
      },
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    required: {
      type: Boolean,
      required: false,
      default: false,
    },

    isInherited: {
      type: Boolean,
      required: false,
      default: false,
    },

    isInheritanceField: {
      type: Boolean,
      required: false,
      default: false,
    },

    disableInheritanceToggle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      id: createId(),
    };
  },

  computed: {
    identification() {
      if (this.name) {
        return this.name;
      }

      return `sw-field--${this.id}`;
    },

    hasLabel() {
      return !!this.helpText || this.isInheritanceField || this.showLabel;
    },

    hasError() {
      return this.isInvalid || !!this.error;
    },

    swFieldClasses() {
      return {
        'has--error': this.hasError,
        'is--disabled': this.disabled,
        'is--inherited': this.isInherited,
      };
    },

    swFieldLabelClasses() {
      return {
        'is--required': this.required,
      };
    },

    showLabel() {
      return !!this.label || !!this.$slots.label || !!this.$scopedSlots?.label?.();
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

.sw-field {
  width: 100%;
  margin-bottom: 32px;

  .sw-field__label {
    display: flex;
    line-height: 16px;
    font-size: 14px;
    margin-bottom: 8px;
    color: $color-darkgray-200;

    label {
      flex-grow: 1;
    }
  }

  .sw-field__label .is--required::after {
    content: "*";
    color: $color-shopware-brand-500;
  }

  .sw-field__inheritance-icon {
    margin-right: 8px;
  }

  .sw-field__button-restore {
    color: $color-darkgray-200;
    padding: 0 8px;
    border: none;
    background: none;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  .sw-field__help-text {
    align-self: center;
  }

  &.is--inherited {
    .sw-field__label {
      color: $color-module-purple-900;
    }
  }

  &.has--error {
    margin-bottom: 12px;
  }

  &__hint {
    margin-top: 4px;
    font-size: $font-size-extra-small;
    color: $color-gray-500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
