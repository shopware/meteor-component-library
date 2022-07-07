<template>
  <div
    class="sw-field--checkbox"
    :class="swCheckboxFieldClasses"
  >
    <div class="sw-field--checkbox__content">
      <div class="sw-field__checkbox">
        <input
          :id="identification"
          type="checkbox"
          :name="identification"
          :checked="inputState"
          :disabled="isDisabled"
          @change="onChange"
        >
        <div class="sw-field__checkbox-state">
          <sw-icon
            v-if="!partial"
            name="regular-checkmark-xxs"
            size="16"
          />

          <sw-icon
            v-else
            name="solid-minus-xxs"
            size="16"
          />
        </div>
      </div>

      <sw-base-field
        :disabled="isDisabled"
        :is-inheritance-field="isInheritanceField"
        :is-inherited="isInherited"
        :name="identification"
        :has-focus="false"
        :help-text="helpText"
        :required="required"
        @inheritance-restore="$emit('inheritance-restore', $event)"
        @inheritance-remove="$emit('inheritance-remove', $event)"
      >
        <template #label>
          {{ label }}
        </template>
      </sw-base-field>
    </div>

    <sw-field-error :error="error" />
  </div>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwBaseField from '../_internal/sw-base-field/sw-base-field.vue';
import SwFieldError from '../_internal/sw-field-error/sw-field-error.vue';
import SwFormFieldMixin from '../../../mixins/form-field.mixin';
import { createId } from '../../../utils/uuid';

export default {
  name: 'SwCheckboxField',

  components: {
    'sw-icon': SwIcon,
    'sw-base-field': SwBaseField,
    'sw-field-error': SwFieldError,
  },

  mixins: [
    SwFormFieldMixin,
  ],

  inheritAttrs: false,

  props: {
    /**
     * A label for the checkbox.
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * Toggles the disabled state of the checkbox.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Determines the checked state of the checkbox.
     */
    checked: {
      type: Boolean,
      required: false,
      default: null,
    },

    /**
     * Determines if the field is partially checked.
     */
    partial: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Inherited value from another SalesChannel.
     */
    inheritedValue: {
      type: Boolean,
      required: false,
      default: null,
    },

    /**
     * Error object for this field.
     */
    error: {
      type: Object,
      required: false,
      default: null,
    },

    /**
     * Determines if the field is surrounded by a border.
     */
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Help text with additional information for the field.
     */
    helpText: {
      type: String,
      required: false,
      default: null,
    },

    /**
     * Marks the field as required with an asterix.
     */
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.checked,
      id: createId(),
    };
  },

  computed: {
    swCheckboxFieldClasses() {
      return {
        'has--error': this.hasError,
        'is--disabled': this.disabled,
        'is--inherited': this.isInherited,
        'is--bordered': this.bordered,
      };
    },

    identification() {
      return `sw-field--${this.id}`;
    },

    hasError() {
      return this.error && this.error.code !== 0;
    },

    inputState() {
      if (this.isInherited) {
        return this.inheritedValue;
      }

      return this.currentValue || false;
    },

    isInheritanceField() {
      if (this.$attrs.isInheritanceField) {
        return true;
      }
      return this.inheritedValue !== null;
    },

    isInherited() {
      if (this.$attrs.isInherited) {
        return true;
      }
      return this.isInheritanceField && this.currentValue === null;
    },

    isDisabled() {
      return this.disabled || this.isInherited;
    },
  },

  watch: {
    checked() { this.currentValue = this.checked; },
  },

  methods: {
    onChange(changeEvent) {
      this.$emit('change', changeEvent.target.checked);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-field-color-text: $color-darkgray-200;
$sw-field-color-focus: $color-shopware-brand-500;
$sw-field-color-background: $color-white;
$sw-field-color-border: $color-gray-300;
$sw-field-color-error: $color-crimson-500;
$sw-field-color-inherited: $color-module-purple-900;

.sw-field--checkbox {
  margin-bottom: 22px;

  .sw-inheritance-switch {
    &.sw-field__inheritance-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .sw-field--checkbox__content {
    display: grid;
    grid-template-columns: 16px 1fr;
    align-items: center;
  }

  .sw-field {
    margin-bottom: 0;

    .sw-block-field__block {
      border: none;
    }
  }

  .sw-field--default {
    display: flex;
  }

  .sw-field__label {
    margin-bottom: 0;
    margin-left: 4px;
  }

  .sw-field__checkbox {
    width: 16px;
    height: 16px;
    position: relative;

    input[type="checkbox"] {
      opacity: 0;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0 none;
      background: none;
      -webkit-appearance: none;
      cursor: pointer;
      z-index: 2;

      &:disabled {
        cursor: not-allowed;
      }

      &:disabled ~ .sw-field__checkbox-state {
        background: $color-gray-100;
        border-color: $color-gray-300;
        color: lighten($sw-field-color-text, 40%);
      }

      &:checked ~ .sw-field__checkbox-state {
        background: $sw-field-color-focus;
        border-color: $sw-field-color-focus;

        .sw-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      &:checked:disabled ~ .sw-field__checkbox-state {
        background: $color-gray-100;
        border-color: $color-gray-300;
        color: lighten($sw-field-color-text, 40%);

        .sw-icon {
          color: lighten($sw-field-color-text, 40%);
        }
      }
    }

    .sw-field__checkbox-state {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      text-align: center;
      background: $sw-field-color-background;
      color: $sw-field-color-text;
      border: 1px solid $sw-field-color-border;
      border-radius: 4px;

      .sw-icon {
        display: none;
        position: absolute;
        top: -1px;
        left: -1px;
        color: $sw-field-color-background;
      }
    }
  }

  &.has--error {
    .sw-field__checkbox-state {
      border: 1px solid $sw-field-color-error;
    }

    input[type="checkbox"] {
      &:disabled ~ .sw-field__checkbox-state {
        border: 1px solid $sw-field-color-error, 5%;
      }

      &:checked ~ .sw-field__checkbox-state {
        border: 1px solid $sw-field-color-error;
        background-color: $sw-field-color-error;
      }

      &:checked:disabled ~ .sw-field__checkbox-state {
        border: 1px solid $sw-field-color-error;
      }
    }
  }

  &.is--inherited {
    input[type="checkbox"] {
      &:checked ~ .sw-field__checkbox-state {
        border-color: $sw-field-color-border;
        background: $sw-field-color-border;
      }
    }
  }

  &.is--bordered {
    border-radius: 4px;
    border: 1px solid $color-gray-300;
    padding: 16px;

    &.has--error {
      border-color: $sw-field-color-error;
    }
  }
}
</style>
