<template>
  <sw-base-field
    class="sw-field--email"
    v-bind="$attrs"
    :name="name"
    :has-focus="hasFocus"
    :copyable="copyable"
    :copyable-tooltip="copyableTooltip"
    :copyable-text="currentValue"
    :help-text="helpText"
    :size="size"
    :required="required"
    :disabled="disabled"
    :is-inherited="isInherited"
    :is-inheritance-field="isInheritanceField"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
    v-on="$listeners"
  >
    <template #label>
      {{ label }}
    </template>

    <template
      #field-prefix
    >
      <slot name="prefix" />
    </template>

    <template #element="{ identification, disabled }">
      <input
        :id="identification"
        ref="input"
        type="email"
        :name="identification"
        :disabled="disabled"
        :value="currentValue"
        :placeHolder="placeholder"
        @input="onInput"
        @change="onChange"
        @focus="setFocus"
        @blur="removeFocus"
        v-on="additionalListeners"
      >
    </template>

    <template
      #field-suffix
    >
      <slot name="suffix" />
    </template>

    <template #error>
      <sw-field-error
        v-if="computedError"
        :error="computedError"
      />
    </template>

    <template #field-hint>
      <slot name="hint" />
    </template>
  </sw-base-field>
</template>

<script>
import SwTextField from '../sw-text-field/sw-text-field.vue';
import SwBaseField from '../_internal/sw-base-field/sw-base-field.vue';

export default {
  name: 'SwEmailField',

  components: {
    'sw-base-field': SwBaseField,
  },

  extends: SwTextField,

  data() {
    return {
      hasFocus: false,
      validationError: null,
    };
  },

  computed: {
    computedError() {
      if (this.validationError) {
        return this.validationError;
      }

      return this.error;
    },
  },

  mounted() {
    if (!this.value) {
      return;
    }

    this.checkValidity();
  },

  methods: {
    setFocus() {
      this.hasFocus = true;
    },

    removeFocus() {
      this.hasFocus = false;

      this.checkValidity();
    },

    checkValidity() {
      if (this.$refs.input.checkValidity()) {
        this.validationError = null;

        return;
      }

      this.validationError = {
        detail: this.$refs.input.validationMessage,
      };
    }
  }
};
</script>
