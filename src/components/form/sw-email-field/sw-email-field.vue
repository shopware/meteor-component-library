<template>
  <sw-contextual-field
    class="sw-field--email"
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
        v-bind="{disabled, identification}"
      />
    </template>

    <!-- eslint-disable-next-line vue/no-unused-vars -->
    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass, hasSuffix, hasPrefix }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        :id="identification"
        type="email"
        :name="identification"
        :disabled="disabled"
        :value="currentValue"
        :placeHolder="placeholder"
        @input="onInput"
        @change="onChange"
        @focus="setFocusClass"
        @blur="removeFocusClass"
        v-on="additionalListeners"
      >
    </template>

    <template
      v-if="copyable || hasSuffix"
      #sw-contextual-field-suffix="{disabled, identification}"
    >
      <slot
        name="suffix"
        v-bind="{ identification }"
      />
      <sw-field-copyable
        v-if="copyable"
        :display-name="identification"
        :copyable-text="currentValue"
        :tooltip="copyableTooltip"
      />
    </template>
  </sw-contextual-field>
</template>

<script>
import SwTextField from '../sw-text-field/sw-text-field.vue';
// import SwContextualField from '../_internal/sw-contextual-field/sw-contextual-field.vue';

export default {
  name: 'SwEmailField',

  extends: SwTextField,

  // components: {
  //   'sw-contextual-field': SwContextualField,
  // },
};
</script>
