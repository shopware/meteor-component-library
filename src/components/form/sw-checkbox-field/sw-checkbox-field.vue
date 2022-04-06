<template>
  <div
    class="sw-field--checkbox"
    :class="swCheckboxFieldClasses"
  >
    <div class="sw-field--checkbox__content">
      <div class="sw-field__checkbox">
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          :id="identification"
          type="checkbox"
          :name="identification"
          :checked="inputState"
          :disabled="disabled"
          @change="onChange"
        >
        <div class="sw-field__checkbox-state">
          <sw-icon
            name="small-default-checkmark-line-small"
            size="16"
          />
        </div>
      </div>

      <sw-base-field
        v-bind="$attrs"
        :disabled="disabled"
        :is-inheritance-field="isInheritanceField"
        :is-inherited="isInherited"
        :name="identification"
        @inheritance-restore="$emit('inheritance-restore', $event)"
        @inheritance-remove="$emit('inheritance-remove', $event)"
      >
        <template #label>
          <slot name="label" />
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
    // Mixin.getByName('remove-api-error'),
  ],
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    value: {
      type: Boolean,
      required: false,
      default: null,
    },

    inheritedValue: {
      type: Boolean,
      required: false,
      default: null,
    },

    ghostValue: {
      type: Boolean,
      required: false,
      default: null,
    },

    error: {
      type: Object,
      required: false,
      default: null,
    },

    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.value,
      id: createId(),
    };
  },

  computed: {
    swCheckboxFieldClasses() {
      return {
        'has--error': this.hasError,
        'is--disabled': this.disabled,
        'is--inherited': this.isInherited,
        'sw-field__checkbox--ghost': this.ghostValue,
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
  },

  watch: {
    value() { this.currentValue = this.value; },
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

  .sw-field--checkbox__content {
    display: grid;
    grid-template-columns: 16px 1fr;
    align-items: center;
  }

  .sw-field {
    margin-bottom: 0;
  }

  .sw-field__label {
    margin-bottom: 0;
    margin-left: 10px;
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
          display: inline-block;
        }
      }

      &:checked:disabled ~ .sw-field__checkbox-state {
        background: $color-gray-100;
        border-color: $color-gray-300;
        color: lighten($sw-field-color-text, 40%);

        .sw-icon {
          display: inline-block;
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
  }
}

.sw-field--checkbox.sw-field__checkbox--ghost {
  .sw-field__checkbox input[type="checkbox"]:not(:checked) ~ .sw-field__checkbox-state {
    background-color: transparent;
    border: 1px solid $color-shopware-brand-500;

    .sw-icon {
      display: inline-block;
      color: $color-shopware-brand-500;
    }
  }

  &.is--disabled {
    .sw-field__checkbox input[type="checkbox"]:not(:checked) ~ .sw-field__checkbox-state {
      border: 1px solid $color-gray-300;

      .sw-icon {
        color: $color-gray-300;
      }
    }
  }
}
</style>
