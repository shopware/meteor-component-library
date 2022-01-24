<template>
  <div
    class="sw-price-field"
    :class="{
        'sw-price-field--label': label,
        'sw-price-field--compact': compact,
        'sw-price-field--disabled': isDisabled
    }"
  >

    <div class="price-field-grid">

      {# TODO: check selectors #}
      <sw-field
        v-model="priceForCurrency.gross"
        type="number"
        class="sw-price-field__gross"
        :allow-empty="allowEmpty"
        :placeholder="$tc('sw-product.priceForm.placeholderPriceGross')"
        :label="labelGross"
        :help-text="grossHelpText"
        :validation="validation"
        :size="compact ? 'small' : 'default'"
        :min="0"
        :digits="20"
        :error="grossError"
        :disabled="isDisabled"
        :name="grossFieldName"
        v-bind="$attrs"
        @change="onPriceGrossChange"
        @keyup="keymonitor"
      >
        <template
          v-if="!disableSuffix"
          #suffix
        >
          {{ currency.symbol }}
        </template>
      </sw-field>

      <button
        class="sw-price-field__lock"
        :class="{
                'is--locked': priceForCurrency.linked,
                'is--disabled': isDisabled
            }"
        @click="onLockSwitch"
      >
        <sw-icon
          v-if="priceForCurrency.linked"
          key="price-field-locked-indicator"
          name="default-lock-closed"
          size="16"
        />
        <sw-icon
          v-else
          key="price-field-locked-indicator"
          name="default-lock-open"
          size="16"
        />
      </button>

      {# TODO: check selectors #}
      <sw-field
        v-model="priceForCurrency.net"
        type="number"
        class="sw-price-field__net"
        :allow-empty="allowEmpty"
        :placeholder="$tc('sw-product.priceForm.placeholderPriceNet')"
        :label="labelNet"
        :help-text="netHelpText"
        :validation="validation"
        :size="compact ? 'small' : 'default'"
        :min="0"
        :digits="20"
        :error="netError"
        :disabled="isInherited || disabled"
        :name="netFieldName"
        v-bind="$attrs"
        @change="onPriceNetChange"
        @keyup="keymonitor"
      >
        <template
          v-if="!disableSuffix"
          #suffix
        >
          {{ currency.symbol }}
        </template>
      </sw-field>
    </div>

    <sw-container
      v-if="allowModal"
      justify="end"
      class="sw-price-form__links"
    >
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <a
        class="sw-card__quick-link"
        @click.prevent="showModal = true"
      >
        {{ $tc('sw-product.detailBase.linkMaintainCurrencyPrices') }}
        <sw-icon
          name="default-arrow-simple-right"
          small
        />
      </a>
    </sw-container>

    <sw-maintain-currencies-modal
      v-if="showModal"
      :prices="price"
      :default-price="priceForCurrency"
      :tax-rate="taxRate"
      :disabled="false"
      :hide-list-prices="hideListPrices"
      @modal-close="onCloseModal"
    />
  </div>
</template>

<script>
export default {
  name: 'sw-price-field',

  inheritAttrs: false,

  model: {
    prop: 'price',
    event: 'priceChange',
  },

  props: {
    price: {
      type: Array,
      required: true,
    },

    allowModal: {
      type: Boolean,
      default: false,
    },

    defaultPrice: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },

    hideListPrices: {
      type: Boolean,
      default: false,
    },

    taxRate: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },

    currency: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },

    // FIXME: add property type
    // eslint-disable-next-line vue/require-prop-types
    validation: {
      required: false,
      default: null,
    },

    // FIXME: add property type
    // eslint-disable-next-line vue/require-prop-types
    label: {
      required: false,
      default: true,
    },

    // FIXME: add property type
    // eslint-disable-next-line vue/require-prop-types
    compact: {
      required: false,
      default: false,
    },

    error: {
      type: Object,
      required: false,
      default: null,
    },

    // FIXME: add property type
    // eslint-disable-next-line vue/require-prop-types
    disabled: {
      required: false,
      default: false,
    },

    disableSuffix: {
      type: Boolean,
      required: false,
      default: false,
    },

    grossLabel: {
      type: String,
      required: false,
      default: null,
    },

    netLabel: {
      type: String,
      required: false,
      default: null,
    },

    name: {
      type: String,
      required: false,
      default: null,
    },

    allowEmpty: {
      type: Boolean,
      required: false,
      default: false,
    },

    inherited: {
      type: Boolean,
      required: false,
      default: undefined,
    },

    grossHelpText: {
      type: String,
      required: false,
      default: null,
    },

    netHelpText: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      showModal: false,
    };
  },

  computed: {
    calculatePriceApiService() {
      // todo: replace service
      return Application.getContainer('factory').apiService.getByName('calculate-price');
    },

    priceForCurrency: {
      get() {
        const priceForCurrency = Object.values(this.price).find((price) => {
          return price.currencyId === this.currency?.id;
        });

        // check if price exists
        if (priceForCurrency) {
          return priceForCurrency;
        }

        // Calculate values if inherited
        if (this.isInherited) {
          return {
            currencyId: this.currency.id,
            gross: this.defaultPrice.gross ? this.convertPrice(this.defaultPrice.gross) : null,
            linked: this.defaultPrice.linked,
            net: this.defaultPrice.net ? this.convertPrice(this.defaultPrice.net) : null,
          };
        }

        return {
          currencyId: this.currency.id,
          gross: null,
          linked: this.defaultPrice.linked,
          net: null,
        };
      },
      set(newValue) {
        this.priceForCurrency.gross = newValue.gross;
        this.priceForCurrency.linked = newValue.linked;
        this.priceForCurrency.net = newValue.net;
      },
    },

    isInherited() {
      if (this.inherited !== undefined) {
        return this.inherited;
      }

      const priceForCurrency = Object.values(this.price).find((price) => {
        return price.currencyId === this.currency.id;
      });

      return !priceForCurrency;
    },

    isDisabled() {
      return this.isInherited || this.disabled;
    },

    labelGross() {
      const label = this.grossLabel ? this.grossLabel : this.$tc('global.sw-price-field.labelPriceGross');
      return this.label ? label : '';
    },

    labelNet() {
      const label = this.netLabel ? this.netLabel : this.$tc('global.sw-price-field.labelPriceNet');
      return this.label ? label : '';
    },

    grossError() {
      return this.error ? this.error.gross : null;
    },

    netError() {
      return this.error ? this.error.net : null;
    },

    grossFieldName() {
      return this.name ? `${this.name}-gross` : 'sw-price-field-gross';
    },

    netFieldName() {
      return this.name ? `${this.name}-net` : 'sw-price-field-net';
    },
  },

  watch: {
    'priceForCurrency.linked': function priceLinkedWatcher(value) {
      if (value === true && this.priceForCurrency.gross !== null) {
        this.convertGrossToNet(this.priceForCurrency.gross);
      }
    },

    'taxRate.id': function taxRateWatcher() {
      if (this.priceForCurrency.linked === true && this.priceForCurrency.gross !== null) {
        this.convertGrossToNet(this.priceForCurrency.gross);
      }
    },
  },

  methods: {
    onLockSwitch() {
      if (this.isDisabled) {
        return;
      }
      this.priceForCurrency.linked = !this.priceForCurrency.linked;
      this.$emit('price-lock-change', this.priceForCurrency.linked);
      this.$emit('change', this.priceForCurrency);
    },

    onPriceGrossChange(value) {
      if (this.priceForCurrency.linked) {
        this.$emit('price-calculate', true);
        this.$emit('price-gross-change', value);
        this.$emit('change', this.priceForCurrency);

        this.convertGrossToNet(value);
      }
    },

    onPriceNetChange(value) {
      if (this.priceForCurrency.linked) {
        this.$emit('price-calculate', true);
        this.$emit('price-net-change', value);
        this.$emit('change', this.priceForCurrency);

        this.convertNetToGross(value);
      }
    },

    convertNetToGross(value) {
      if (Number.isNaN(value)) {
        this.priceForCurrency.gross = this.allowEmpty ? null : 0;
        return false;
      }

      if (!value) {
        this.priceForCurrency.gross = 0;
        return false;
      }
      this.$emit('price-calculate', true);

      this.requestTaxValue(value, 'net').then((res) => {
        const newValue = this.priceForCurrency.net + res;
        this.priceForCurrency.gross = parseFloat(newValue.toPrecision(14));
      });
      return true;
    },

    convertGrossToNet(value) {
      if (Number.isNaN(value)) {
        this.priceForCurrency.net = this.allowEmpty ? null : 0;
        this.$emit('calculating', false);
        return false;
      }

      if (!value) {
        this.priceForCurrency.net = 0;
        this.$emit('calculating', false);
        return false;
      }
      this.$emit('price-calculate', true);

      this.requestTaxValue(value, 'gross').then((res) => {
        const newValue = this.priceForCurrency.gross - res;
        this.priceForCurrency.net = parseFloat(newValue.toPrecision(14));
      });
      return true;
    },

    requestTaxValue(value, outputType) {
      this.$emit('price-calculate', true);
      return new Promise((resolve) => {
        if (
          !value ||
          typeof value !== 'number' ||
          !this.priceForCurrency[outputType] ||
          !outputType
        ) {
          return null;
        }

        if (!this.taxRate.id) {
          resolve(0);
          this.$emit('price-calculate', false);
          return true;
        }

        this.calculatePriceApiService.calculatePrice({
          taxId: this.taxRate.id,
          currencyId: this.currency.id,
          price: this.priceForCurrency[outputType],
          output: outputType,
        }).then(({ data }) => {
          let tax = 0;

          data.calculatedTaxes.forEach((item) => {
            tax += item.tax;
          });

          resolve(tax);
          this.$emit('price-calculate', false);
        });
        return true;
      });
    },

    convertPrice(value) {
      return value * this.currency.factor;
    },

    keymonitor(event) {
      if (event.key === ',') {
        const value = event.target.value;
        event.target.value = value.replace(/,/, '.');
      }
    },

    onCloseModal() {
      this.showModal = false;
    },
  },

};
</script>

<style lang="scss">
@import "../../assets/scss/variables";

$sw-price-field-lock-color-default: $color-darkgray-200;
$sw-price-field-lock-color-locked: $color-shopware-brand-500;
$sw-price-field-suffix-font-size: 20px;
$sw-price-field-suffix-font-weight: 400;

.sw-price-field {
  .price-field-grid {
    display: grid;
    grid-template-columns: 1fr 30px 1fr;
  }

  .sw-price-field__lock {
    height: 45px;
    background: none;
    border: none;
    color: $sw-price-field-lock-color-default;
    outline: none;
    cursor: pointer;

    &.is--locked {
      color: $sw-price-field-lock-color-locked;
    }

    &.is--disabled {
      color: $color-gray-700;
      cursor: default;
    }
  }

  .sw-field {
    .sw-field__addition {
      font-weight: $sw-price-field-suffix-font-weight;
      font-size: $sw-price-field-suffix-font-size;
    }
  }

  &.sw-price-field--label .sw-price-field__lock {
    margin-top: 24px;
  }

  &.sw-price-field--compact .sw-price-field__lock {
    height: 32px;
  }

  &.sw-price-field--disabled {
    pointer-events: none;
  }

  .sw-price-form__links {
    grid-area: center;
  }
}
</style>
