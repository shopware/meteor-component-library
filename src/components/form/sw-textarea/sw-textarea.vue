<template>
  <sw-base-field
    class="sw-field--textarea"
    v-bind="$attrs"
    :name="formFieldName"
    :has-focus="hasFocus"
    :required="required"
    :disabled="disabled"
    :help-text="helpText"
    :is-inheritance-field="isInheritanceField"
    :is-inherited="isInherited"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
  >
    <template #label>
      {{ label }}
    </template>

    <!-- eslint-disable-next-line vue/no-template-shadow,vue/no-unused-vars -->
    <template #element="{identification, helpText, error, disabled }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <textarea
        :id="identification"
        :name="identification"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="inputState"
        @change="onChange"
        @input="onInput"
        @focus="setFocus"
        @blur="removeFocus"
        @keydown="onKeyDown"
      />
    </template>

    <template #error>
      <sw-field-error
        v-if="error"
        :error="error"
      />
    </template>

    <template #field-hint>
      <slot name="hint" />

      <span
        v-if="!!limit"
        class="sw-field--textarea__limit"
      >
        {{ currentValue?.length || 0 }} / {{ limit }}
      </span>
    </template>
  </sw-base-field>
</template>

<script lang="ts">
import Vue from 'vue';
import SwFormFieldMixin from '../../../mixins/form-field.mixin';
import SwBaseField from '../_internal/sw-base-field/sw-base-field.vue';
import SwFieldError from "../_internal/sw-field-error/sw-field-error.vue";

export default Vue.extend({
  name: 'SwTextarea',

  components: {
    'sw-base-field': SwBaseField,
    'sw-field-error': SwFieldError,
  },

  mixins: [
    SwFormFieldMixin,
  ],

  inheritAttrs: false,

  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },

    /**
     * Inherited value from another SalesChannel.
     */
    inheritedValue: {
      type: String,
      required: false,
      default: null,
    },

    label: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      required: false,
      default: null,
    },

    helpText: {
      type: String,
      required: false,
      default: null,
    },

    required: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    error: {
      type: Object,
      required: false,
      default: null,
    },

    limit: {
      type: Number,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      currentValue: this.value,
      hasFocus: false,
    };
  },

  computed: {
    inputState(): boolean {
      if (this.isInherited) {
        // @ts-expect-error - exists on mixin
        return this.inheritedValue;
      }

      // @ts-expect-error - exists on mixin
      return this.currentValue || '';
    },

    isInheritanceField(): boolean {
      if (this.$attrs.isInheritanceField) {
        return true;
      }
      return this.inheritedValue !== null;
    },

    isInherited(): boolean {
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
    onInput(event: Event) {
      const shouldLimit = !!this.limit;
      const { value } = event.target as HTMLInputElement;

      const emittedValue = shouldLimit ? value.slice(0, this.limit) : value;

      this.$emit('input', emittedValue);
    },

    onChange(event: Event) {
      // @ts-expect-error - target is defined
      this.$emit('change', event.target.value);
    },

    onKeyDown(event: Event) {
      const shouldLimit = !!this.limit;
      if (!shouldLimit) {
        return;
      }

      const exceededLimit = this.currentValue.length >= this.limit;
      // @ts-expect-error - key is defined
      const pressedBackspace = event.key === 'Backspace';

      if (exceededLimit && !pressedBackspace) {
        // stopping the event from bubbling up will stop the user
        // from exceeding the maximum amount of characters
        event.preventDefault();
      }
    },

    setFocus() {
      this.hasFocus = true;
    },

    removeFocus() {
      this.hasFocus = false;
    },
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-field--textarea {
  textarea {
    line-height: 22px;
    min-height: 125px;
    max-height: 300px;
    resize: vertical;
  }

  &.has--error {
    textarea {
      background: $color-crimson-50;
    }
  }

  &__limit {
    margin-left: auto;
  }
}
</style>
