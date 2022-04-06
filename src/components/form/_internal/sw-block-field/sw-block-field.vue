<template>
  <sw-base-field
    class="sw-block-field"
    :class="swBlockFieldClasses"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #sw-field-input="{ identification, error, disabled }">
      <div class="sw-block-field__block">
        <slot
          name="sw-field-input"
          v-bind="{ identification, error, disabled, size, setFocusClass, removeFocusClass }"
        />
      </div>
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <template #label>
      <slot name="label" />
    </template>
  </sw-base-field>
</template>

<script>
import SwBaseField from '../sw-base-field/sw-base-field.vue';

export default {
  name: 'SwBlockField',

  components: {
    'sw-base-field': SwBaseField,
  },

  inheritAttrs: false,

  props: {
    size: {
      type: String,
      required: false,
      default: 'default',
      validValues: ['small', 'medium', 'default'],
      validator(val) {
        return ['small', 'medium', 'default'].includes(val);
      },
    },
  },

  data() {
    return {
      hasFocus: false,
    };
  },

  computed: {
    swBlockSize() {
      return `sw-field--${this.size}`;
    },

    swBlockFieldClasses() {
      return [
        {
          'has--focus': this.hasFocus,
        },
        this.swBlockSize,
      ];
    },
  },

  methods: {
    setFocusClass() {
      this.hasFocus = true;
    },

    removeFocusClass() {
      this.hasFocus = false;
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

$sw-field-transition: border-color 0.3s ease-out, background 0.3s ease;

.sw-block-field {
  .sw-block-field__block {
    border: 1px solid $color-gray-300;
    border-radius: $border-radius-default;
    overflow: hidden;
  }

  .sw-field--select__options .sw-icon {
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    display: block;
    width: 100%;
    min-width: 0;
    padding: 12px 16px;
    border: none;
    background: $color-white;
    font-size: $font-size-small;
    font-family: $font-family-default;
    line-height: 22px;
    transition: $sw-field-transition;
    color: $color-darkgray-200;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:invalid,
    &:-moz-submit-invalid,
    &:-moz-ui-invalid {
      box-shadow: none;
    }

    &:disabled {
      background: $color-gray-100;
      border-color: $color-gray-300;
      cursor: default !important;
    }

    &::placeholder {
      color: lighten($color-darkgray-200, 25%);
    }
  }

  &.has--focus {
    .sw-block-field__block {
      border-color: $color-shopware-brand-500;
      box-shadow: 0 0 4px lighten($color-shopware-brand-500, 30%);
    }
  }

  &.has--error {
    .sw-block-field__block {
      border-color: $color-crimson-500;
    }
  }

  &.has--error.has--focus {
    .sw-block-field__block {
      box-shadow: 0 0 4px lighten($color-crimson-500, 30%);
    }
  }

  &.sw-field--small {
    margin-bottom: 0;

    input,
    textarea,
    select {
      padding: 4px 16px;
    }
  }

  &.sw-field--medium {
    margin-bottom: 6px;

    input,
    textarea,
    select {
      padding: 8px 16px;
    }
  }
}
</style>
