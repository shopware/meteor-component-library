<template>
  <sw-block-field
    class="sw-contextual-field"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">

      <div
        v-if="hasPrefix"
        class="sw-field__addition is--prefix"
      >
        <slot
          name="sw-contextual-field-prefix"
          v-bind="{ disabled, identification }"
        ></slot>
      </div>

      <slot
        name="sw-field-input"
        v-bind="{ identification, error, disabled, size, setFocusClass, removeFocusClass, hasSuffix, hasPrefix }"
      ></slot>

      <div
        v-if="hasSuffix"
        class="sw-field__addition"
      >
        <slot
          name="sw-contextual-field-suffix"
          v-bind="{ disabled, identification }"
        ></slot>
      </div>
    </template>

    <template #hint>
      <slot name="hint"></slot>
    </template>

    <template #label>
      <slot name="label"></slot>
    </template>

  </sw-block-field>
</template>

<script>
import SwBlockField from '../sw-block-field/sw-block-field.vue';

export default {
  name: 'sw-contextual-field',

  inheritAttrs: false,

  components: {
    'sw-block-field': SwBlockField,
  },

  computed: {
    hasPrefix() {
      return this.$scopedSlots.hasOwnProperty('sw-contextual-field-prefix')
        && this.$scopedSlots['sw-contextual-field-prefix']({}) !== undefined;
    },

    hasSuffix() {
      return this.$scopedSlots.hasOwnProperty('sw-contextual-field-suffix')
        && this.$scopedSlots['sw-contextual-field-suffix']({}) !== undefined;
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

$sw-field-transition: border-color 0.3s ease-out;

.sw-contextual-field {
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px $color-white inset;
  }

  .sw-block-field__block {
    display: flex;
  }

  .sw-field__addition {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    background: $color-gray-50;
    border-left: 1px solid $color-gray-300;
    border-right: none;
    line-height: 22px;
    padding: 12px 15px;
    font-size: $font-size-small;
    color: $color-darkgray-200;
    transition: $sw-field-transition;

    .sw-icon {
      width: 16px;
      height: 16px;
    }

    &.is--prefix {
      border-right: 1px solid $color-gray-300;
      border-left: none;
    }
  }

  &.is--disabled {
    .sw-field__addition {
      background: $color-gray-100;
    }
  }

  &.sw-field--small {
    .sw-field__addition {
      padding: 4px 16px;
    }
  }

  &.sw-field--medium {
    .sw-field__addition {
      padding: 8px 16px;
    }
  }
}
</style>
