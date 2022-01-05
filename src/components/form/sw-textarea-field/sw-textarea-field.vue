<template>
  <sw-block-field
    class="sw-field--textarea"
    v-bind="$attrs"
    :name="formFieldName"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
  >
    <template #sw-field-input="{identification, helpText, error, disabled, setFocusClass, removeFocusClass }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <textarea
        :id="identification"
        :name="identification"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="currentValue"
        @change="onChange"
        @input="onInput"
        @focus="setFocusClass"
        @blur="removeFocusClass"
      ></textarea>
    </template>
  </sw-block-field>
</template>

<script>
import SwBlockField from '../_internal/sw-block-field/sw-block-field.vue';
import SwFormFieldMixin from '../../../mixins/form-field.mixin';

export default {
  name: 'sw-textarea-field',

  components: {
    'sw-block-field': SwBlockField,
  },

  inheritAttrs: false,

  mixins: [
    SwFormFieldMixin,
    // Mixin.getByName('remove-api-error'),
  ],

  props: {
    value: {
      type: String,
      required: false,
      default: null,
    },

    placeholder: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      currentValue: this.value || '',
    };
  },

  watch: {
    value() { this.currentValue = this.value; },
  },

  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },

    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-field.sw-block-field.sw-field--textarea {
  textarea {
    line-height: 22px;
    min-height: 125px;
    max-height: 300px;
    resize: vertical;
  }
}
</style>
