<template>
  <sw-radio-field
    class="sw-boolean-radio-group"
    v-bind="$attrs"
    :options="options"
    v-model="castedValue"
    :bordered="bordered">
  </sw-radio-field>
</template>

<script>
import SwRadioField from '../sw-radio-field/sw-radio-field.vue';

export default {
  name: 'sw-boolean-radio-group',

  components: {
    'sw-radio-field': SwRadioField,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: Boolean,
      required: false,
      default: true,
    },

    labelOptionTrue: {
      type: String,
      required: true,
    },

    labelOptionFalse: {
      type: String,
      required: true,
    },

    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    options() {
      return [
        { value: 'true', name: this.labelOptionTrue },
        { value: 'false', name: this.labelOptionFalse },
      ];
    },

    castedValue: {
      get() {
        return this.value ? this.value.toString() : 'false';
      },

      set(val) {
        this.$emit('change', val === 'true');
      },
    },
  },
};
</script>

<style lang="scss">
.sw-boolean-radio-group {
  .sw-field__radio-group {
    display: flex;
    line-height: 1.1;
  }

  .sw-field__radio-option.group-bordered {
    padding: 3px 5px;
    margin: 0;

    label {
      margin-left: 5px;
    }
  }
}
</style>
