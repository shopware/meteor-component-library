<template>
  <sw-contextual-field
    class="sw-field--url"
    v-bind="$attrs"
    :error="combinedError"
    :name="formFieldName"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
  >
    <template #sw-contextual-field-prefix="{ disabled }">
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <span
        class="sw-field__url-input__prefix"
        :class="prefixClass"
        @click="changeMode(disabled)"
      >
        <sw-icon
          v-if="sslActive"
          name="default-lock-closed"
          :small="true"
        />
        <sw-icon
          v-else
          name="default-lock-open"
          :small="true"
        />
        {{ urlPrefix }}
      </span>
    </template>

    <!-- eslint-disable-next-line vue/no-unused-vars, vue/no-template-shadow -->
    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <input
        :id="identification"
        type="url"
        class="sw-url-input-field__input"
        :name="identification"
        :value="currentValue|unicodeUri"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="onInput"
        @focus="setFocusClass"
        @blur="onBlur($event); removeFocusClass();"
      >
    </template>

    <template
      v-if="copyable"
      #sw-contextual-field-suffix="{ identification }"
    >
      <sw-field-copyable
        v-if="copyable"
        :display-name="identification"
        :copyable-text="currentValue"
        :tooltip="copyableTooltip"
      />
    </template>

    <template #label>
      <slot name="label" />
    </template>
  </sw-contextual-field>
</template>

<script>
import { debounce } from 'lodash-es';
import SwTextField from '../sw-text-field/sw-text-field.vue';
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import UnicodeUriFilter from '../../../filters/unicode-uri.filter';

const URL_REGEX = {
  PROTOCOL: /([a-zA-Z0-9]+:\/\/)+/,
  PROTOCOL_HTTP: /^https?:\/\//,
  SSL: /^\s*https:\/\//,
  TRAILING_SLASH: /\/+$/,
};

export default {
  name: 'SwUrlField',

  components: {
    'sw-icon': SwIcon,
  },

  filters: {
    unicodeUri: UnicodeUriFilter,
  },

  extends: SwTextField,

  inheritAttrs: false,

  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
    omitUrlHash: {
      type: Boolean,
      default: false,
    },
    omitUrlSearch: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      sslActive: true,
      currentValue: this.value || '',
      errorUrl: null,
      currentDebounce: null,
    };
  },

  computed: {
    prefixClass() {
      if (this.sslActive) {
        return 'is--ssl';
      }

      return '';
    },

    urlPrefix() {
      if (this.sslActive) {
        return 'https://';
      }

      return 'http://';
    },

    url() {
      const trimmedValue = this.currentValue.trim();
      if (trimmedValue === '') {
        return '';
      }

      return `${this.urlPrefix}${trimmedValue}`;
    },

    combinedError() {
      return this.errorUrl || this.error;
    },
  },

  watch: {
    value() {
      this.checkInput(this.value || '');
    },
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.checkInput(this.currentValue);
    },

    onBlur(event) {
      this.checkInput(event.target.value);
    },

    /**
     * @deprecated tag:v6.5.0 - Use onBlur() instead
     */
    onInput(event) {
      /**
       * @deprecated tag:v6.5.0 - Use "input" event instead
       */
      this.$emit('beforeDebounce', this.url);
      this.onDebounceInput(event);
    },

    /**
     * @deprecated tag:v6.5.0 - Use checkInput() instead
     */
    onDebounceInput: debounce(function debouncedHandleInput(event) {
      this.handleInput(event);
    }, 2000),

    /**
     * @deprecated tag:v6.5.0 - Use checkInput() instead
     */
    handleInput() {

    },

    checkInput(inputValue) {
      this.errorUrl = null;

      if (!inputValue.length) {
        this.handleEmptyUrl();

        return;
      }

      if (inputValue.match(URL_REGEX.PROTOCOL_HTTP)) {
        this.sslActive = this.getSSLMode(inputValue);
      }

      const validated = this.validateCurrentValue(inputValue);

      if (!validated) {
        this.setInvalidUrlError();
      } else {
        this.currentValue = validated;

        this.$emit('input', this.url);
      }
    },

    handleEmptyUrl() {
      this.currentValue = '';

      this.$emit('input', '');
    },

    validateCurrentValue(value) {
      const url = this.getURLInstance(value);

      // If the input is invalid, no URL can be constructed
      if (!url) {
        return null;
      }

      if (this.omitUrlSearch) {
        url.search = '';
      }

      if (this.omitUrlHash) {
        url.hash = '';
      }

      // when a hash or search query is provided we want to allow trailing slash, eg a vue route `admin#/`
      const removeTrailingSlash = url.hash === '' && url.search === '' ? URL_REGEX.TRAILING_SLASH : '';

      // build URL via native URL.toString() function instead by hand @see NEXT-15747
      return url
        .toString()
        .replace(URL_REGEX.PROTOCOL, '')
        .replace(removeTrailingSlash, '')
        .replace(url.host, this.$options.filters.unicodeUri(url.host));
    },

    changeMode(disabled) {
      if (disabled) {
        return;
      }

      this.sslActive = !this.sslActive;
      this.$emit('input', this.url);
    },

    getURLInstance(value) {
      try {
        const url = value.match(URL_REGEX.PROTOCOL) ? value : `${this.urlPrefix}${value}`;

        return new URL(url);
      } catch {
        this.setInvalidUrlError();

        return null;
      }
    },

    getSSLMode(value) {
      return !!value.match(URL_REGEX.SSL);
    },

    setInvalidUrlError() {
      // this.errorUrl = new ShopwareError({
      //   code: 'INVALID_URL',
      // });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables";

$sw-field-color-secure: $color-emerald-500;

.sw-field {
  &__url-input__prefix {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    margin: -12px -15px;
    padding: 12px 15px;

    &.is--ssl {
      color: $sw-field-color-secure;
    }

    .sw-icon {
      margin-right: 4px;
    }
  }
}
</style>
