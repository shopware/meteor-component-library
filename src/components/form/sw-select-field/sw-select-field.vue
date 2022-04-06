<template>
  <sw-block-field
    class="sw-field--select"
    :class="swFieldSelectClasses"
    v-bind="$attrs"
    :name="formFieldName"
  >
    <template #sw-field-input="{ identification, helpText, error, disabled, size, setFocusClass, removeFocusClass }">
      <select
        :id="identification"
        :name="identification"
        :class="{ 'is--placeholder': currentValue === null }"
        :disabled="disabled"
        :value="currentValue"
        @change="onChange"
        @focus="setFocusClass"
        @blur="removeFocusClass"
      >
        <option
          v-if="placeholder"
          class="sw-field--select__placeholder-option"
          :value="null"
        >
          {{ placeholder }}
        </option>

        <slot>
          <template v-if="options && options.length">
            <option
              v-for="option in options"
              :key="option.id"
              :value="option.id"
              :disabled="disabled || option.disabled"
            >
              {{ getOptionName(option.name) }}
            </option>
          </template>
        </slot>
      </select>

      <sw-loader
        v-if="!$slots.default && !hasOptions"
        class="sw-field--select__loader"
        size="20px"
      />

      <div class="sw-field--select__options">
        <sw-icon
          name="small-arrow-medium-down"
          small
          decorative
        />
      </div>
    </template>
  </sw-block-field>
</template>

<script>
import SwBlockField from '../_internal/sw-block-field/sw-block-field.vue';
import SwLoader from '../../utils/sw-loader/sw-loader.vue';
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwFormFieldMixin from '../../../mixins/form-field.mixin';

export default {
  name: 'SwSelectField',

  components: {
    'sw-block-field': SwBlockField,
    'sw-loader': SwLoader,
    'sw-icon': SwIcon,
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

    options: {
      type: Array,
      required: false,
      default: null,
    },

    aside: {
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
    locale() {
      return this.$root.$i18n.locale;
    },

    fallbackLocale() {
      return this.$root.$i18n.fallbackLocale;
    },

    swFieldSelectClasses() {
      return {
        'sw-field--select-aside': this.aside && this.$attrs.label,
      };
    },

    hasOptions() {
      return this.options && this.options.length;
    },
  },

  watch: {
    value() { this.currentValue = this.value; },
  },

  methods: {
    getOptionName(name) {
      if (name) {
        if (name[this.locale]) {
          return name[this.locale];
        }

        if (name[this.fallbackLocale]) {
          return name[this.fallbackLocale];
        }

        return name;
      }

      return '';
    },

    onChange(event) {
      this.currentValue = event.target.value;
      if (event.target.value === '') {
        this.currentValue = null;
      }

      this.$emit('change', this.currentValue);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables";

$sw-select-field-color-text: $color-darkgray-200;
$sw-select-field-color-text-disabled: $color-gray-300;
$sw-select-field-color-focus: $color-shopware-brand-500;
$sw-select-field-border-radius: $border-radius-default;
$sw-select-field-color-background: $color-white;
$sw-select-field-color-border: $color-gray-300;
$sw-select-field-color-error: $color-crimson-500;

.sw-field.sw-field--select {
  .sw-block-field__block {
    width: 100%;
    position: relative;

    .sw-field--select__options {
      display: block;
      position: absolute;
      top: calc(50% - 10px);
      right: 12px;
      text-align: center;
      color: $sw-select-field-color-text;
      pointer-events: none;
    }
  }

  &.sw-field--select-aside {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 8px;
    align-items: center;

    .sw-field__label {
      text-align: right;
      margin-bottom: 0;
    }
  }

  .sw-field--select__placeholder-option {
    color: lighten($sw-select-field-color-text, 25);
  }

  select {
    padding-right: 30px;

    option {
      color: $sw-select-field-color-text;
      background-color: $sw-select-field-color-background;
    }

    option:disabled {
      color: $sw-select-field-color-text-disabled;
    }

    &.is--placeholder {
      color: lighten($sw-select-field-color-text, 25%);
    }
  }

  .sw-field--select__load-placeholder {
    height: 45px;
    border-radius: $sw-select-field-border-radius;
    border: 1px solid $sw-select-field-color-border;
    background: $sw-select-field-color-background;
    appearance: none;
    user-select: none;
    position: relative;
  }

  .sw-field--select__loader {
    background: none;
  }
}
</style>
