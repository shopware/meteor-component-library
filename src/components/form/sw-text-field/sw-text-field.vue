<template>
  <sw-contextual-field
    class="sw-field--text"
    v-bind="$attrs"
    :name="formFieldName"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
    v-on="$listeners"
  >
    <template
      v-if="hasPrefix"
      #sw-contextual-field-prefix="{ disabled, identification }"
    >
      <slot
        name="prefix"
        v-bind="{ disabled, identification }"
      ></slot>
    </template>

    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass, hasSuffix, hasPrefix }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        v-bind="$attrs"
        :id="createInputId(identification)"
        type="text"
        :name="identification"
        :disabled="disabled"
        :value="currentValue"
        :placeholder="placeholder"
        @input="onInput"
        @change="onChange"
        @focus="setFocusClass"
        @blur="removeFocusClass"
        v-on="additionalListeners"
      >
    </template>

    <template
      v-if="copyable || hasSuffix"
      #sw-contextual-field-suffix="{ disabled, identification }"
    >
      <slot
        name="suffix"
        v-bind="{ identification }"
      ></slot>
      <sw-field-copyable
        v-if="copyable"
        :display-name="identification"
        :copyable-text="currentValue"
        :tooltip="copyableTooltip"
      />
    </template>

    <template #label>
      <slot name="label"></slot>
    </template>
  </sw-contextual-field>
</template>

<script>
import SwContextualField from '../_internal/sw-contextual-field/sw-contextual-field.vue';
import SwFieldCopyable from '../_internal/sw-field-copyable/sw-field-copyable.vue';
import SwFormFieldMixin from '../../../mixins/form-field.mixin';
import SwValidationMixin from '../../../mixins/validation.mixin';

export default {
  name: 'sw-text-field',
  inheritAttrs: false,

  components: {
    'sw-contextual-field': SwContextualField,
    'sw-field-copyable': SwFieldCopyable,
  },

  mixins: [
    SwFormFieldMixin,
    SwValidationMixin,
    // Mixin.getByName('remove-api-error'),
  ],

  props: {
    // FIXME: add type and default value to property
    // eslint-disable-next-line vue/require-prop-types, vue/require-default-prop
    value: {
      required: false,
    },

    placeholder: {
      type: String,
      required: false,
      default: '',
    },

    copyable: {
      type: Boolean,
      required: false,
      default: false,
    },

    copyableTooltip: {
      type: Boolean,
      required: false,
      default: false,
    },

    idSuffix: {
      type: String,
      required: false,
      default() {
        return '';
      },
    },
  },

  data() {
    return {
      currentValue: this.value,
    };
  },

  computed: {
    hasPrefix() {
      return this.$scopedSlots.hasOwnProperty('prefix');
    },

    hasSuffix() {
      return this.$scopedSlots.hasOwnProperty('suffix');
    },

    additionalListeners() {
      const additionalListeners = { ...this.$listeners };

      delete additionalListeners.input;
      delete additionalListeners.change;

      return additionalListeners;
    },
  },

  watch: {
    value(value) {
      this.currentValue = value;
    },
  },

  methods: {
    onChange(event) {
      this.$emit('change', event.target.value || '');
    },

    onInput(event) {
      this.$emit('input', event.target.value);
    },

    restoreInheritance() {
      this.$emit('input', null);
    },

    createInputId(identification) {
      if (!this.idSuffix || this.idSuffix.length <= 0) {
        return identification;
      }

      return `${identification}-${this.idSuffix}`;
    },
  },
};
</script>
