<template>
  <sw-contextual-field
    class="sw-field--number"
    v-bind="$attrs"
    :name="formFieldName"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
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

    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        :id="identification"
        :name="identification"
        type="text"
        :value="stringRepresentation"
        :placeholder="placeholder"
        :disabled="disabled"
        autocomplete="off"
        @input="onInput"
        @keydown.up="increaseNumberByStep"
        @keydown.down="decreaseNumberByStep"
        @change="onChange"
        @focus="setFocusClass"
        @blur="removeFocusClass"
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
        :copyable-text="stringRepresentation"
        :tooltip="copyableTooltip"
      />
    </template>

    <template #label>
      <slot name="label"></slot>
    </template>
  </sw-contextual-field>
</template>

<script>
import SwTextField from '../sw-text-field/sw-text-field.vue';
import SwContextualField from '../_internal/sw-contextual-field/sw-contextual-field.vue';
import SwFieldCopyable from '../_internal/sw-field-copyable/sw-field-copyable.vue';

export default {
  name: 'sw-number-field',
  inheritAttrs: false,

  extends: SwTextField,

  components: {
    'sw-contextual-field': SwContextualField,
    'sw-field-copyable': SwFieldCopyable,
  },

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    numberType: {
      type: String,
      required: false,
      default: 'float',
      validValues: ['float', 'int'],
      validator(value) {
        return ['float', 'int'].includes(value);
      },
    },

    step: {
      type: Number,
      required: false,
      default: null,
    },

    min: {
      type: Number,
      required: false,
      default: null,
    },

    max: {
      type: Number,
      required: false,
      default: null,
    },

    value: {
      type: Number,
      required: false,
      default: null,
    },

    digits: {
      type: Number,
      required: false,
      default: 2,
      validator(value) {
        const isInt = value === Math.floor(value);
        if (!isInt) {
          console.warn('sw-number-field', 'Provided prop digits must be of type integer');
        }
        return isInt;
      },
    },

    fillDigits: {
      type: Boolean,
      required: false,
      default: false,
    },

    allowEmpty: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.value,
    };
  },

  computed: {
    realStep() {
      if (this.step === null) {
        return this.numberType === 'int' ? 1 : 0.01;
      }

      return (this.numberType === 'int') ? Math.round(this.step) : this.step;
    },

    realMinimum() {
      if (this.min === null) {
        return null;
      }
      return (this.numberType === 'int') ? Math.ceil(this.min) : this.min;
    },

    realMaximum() {
      if (this.max === null) {
        return null;
      }

      return (this.numberType === 'int') ? Math.floor(this.max) : this.max;
    },

    stringRepresentation() {
      if (this.currentValue === null) {
        return '';
      }

      return this.fillDigits && this.numberType !== 'int'
        ? this.currentValue.toFixed(this.digits)
        : this.currentValue.toString();
    },
  },

  watch: {
    value: {
      handler() {
        if (this.value === null || this.value === undefined) {
          this.currentValue = null;
          return;
        }

        this.computeValue(this.value.toString());
      },
      immediate: true,
    },
  },

  methods: {
    onChange(event) {
      this.computeValue(event.target.value);
      this.$emit('change', this.currentValue);
    },

    onInput(event) {
      let val = Number.parseFloat(event.target.value);

      if (val !== Number.NaN) {
        if (this.max && val > this.max) {
          val = this.max;
        }
        if (this.min && val < this.min) {
          val = this.min;
        }

        this.$emit('input-change', val);
      }
    },

    increaseNumberByStep() {
      this.computeValue((this.currentValue + this.realStep).toString());
      this.$emit('change', this.currentValue);
    },

    decreaseNumberByStep() {
      this.computeValue((this.currentValue - this.realStep).toString());
      this.$emit('change', this.currentValue);
    },

    computeValue(stringRepresentation) {
      const value = this.getNumberFromString(stringRepresentation);
      this.currentValue = this.parseValue(value);
    },

    parseValue(value) {
      if (value === null || Number.isNaN(value) || !Number.isFinite(value)) {
        if (this.allowEmpty) {
          return null;
        }

        return this.parseValue(0);
      }

      return this.checkForInteger(this.checkBoundaries(value));
    },

    checkBoundaries(value) {
      if (this.realMaximum !== null && value > this.realMaximum) {
        value = this.realMaximum;
      }

      if (this.realMinimum !== null && value < this.realMinimum) {
        value = this.realMinimum;
      }

      return value;
    },

    getNumberFromString(value) {
      let splits = value.split('e').shift();
      splits = splits.replace(/,/g, '.').split('.');

      if (splits.length === 1) {
        return parseFloat(splits[0]);
      }

      if (this.numberType === 'int') {
        return parseInt(splits.join(''), 10);
      }
      const decimals = splits[splits.length - 1].length;
      const float = parseFloat(splits.join('.')).toFixed(decimals);
      return decimals > this.digits
        ? Math.round(float * (10 ** this.digits)) / (10 ** this.digits)
        : Number(float);
    },

    checkForInteger(value) {
      if (this.numberType !== 'int') {
        return value;
      }

      const floor = Math.floor(value);
      if (floor !== value) {
        this.$nextTick(() => {
          this.$forceUpdate();
        });
      }
      return floor;
    },

    // @deprecated tag:v6.5.0 - Will be removed
    applyDigits(decimals) {
      if (decimals.length <= this.digits) {
        return {
          decimals,
          transfer: 0,
        };
      }

      let asString = decimals.substr(0, this.digits + 1);
      let asNumber = parseFloat(asString);
      asNumber = Math.round(asNumber / 10);
      asString = asNumber.toString();

      if (asString.length > this.digits) {
        return {
          decimals: asString.substr(1, asString.length),
          transfer: 1,
        };
      }

      asString = '0'.repeat(this.digits - asString.length) + asString;
      return {
        decimals: asString,
        transfer: 0,
      };
    },
  },
};
</script>

<style lang="scss">
.sw-field.sw-field--number {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
