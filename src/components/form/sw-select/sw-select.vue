<template>
  <sw-select-base
    ref="selectBase"
    class="sw-select"
    :is-loading="isLoading"
    :label="label"
    v-bind="$attrs"
    :error="error"
    :disabled="disabled"
    :show-clearable-button="!hideClearableButton"
    :is-inherited="isInherited"
    :is-inheritance-field="isInheritanceField"
    :disable-inheritance-toggle="disableInheritanceToggle"
    @select-expanded="onSelectExpanded"
    @select-collapsed="onSelectCollapsed"
    @clear="onClearSelection"
    v-on="$listeners"
  >
    <template #sw-select-prefix>
      <slot name="prefix" />
    </template>

    <template #sw-select-selection="{ identification, size }">
      <sw-select-selection-list
        ref="selectionList"
        :multi-selection="enableMultiSelection"
        :selections="visibleValues"
        :invisible-count="invisibleValueCount"
        v-bind="{ size, valueProperty, labelProperty, placeholder, searchTerm, disabled }"
        @total-count-click="expandValueLimit"
        @item-remove="remove"
        @last-item-delete="removeLastItem"
        @search-term-change="onSearchTermChange"
      >
        <template #label-property="{ item, index, itemLabelProperty, itemValueProperty }">
          <slot
            name="selection-label-property"
            v-bind="{ item, index, itemLabelProperty, itemValueProperty}"
          >
            {{ getKey(item, labelProperty) }}
          </slot>
        </template>
      </sw-select-selection-list>
    </template>
    <template #results-list>
      <sw-select-result-list
        ref="swSelectResultList"
        :options="visibleResults"
        :is-loading="isLoading"
        :empty-message="$tc('global.sw-multi-select.messageNoResults', 0, { term: searchTerm })"
        :focus-el="$refs.selectionList.getFocusEl()"
        @paginate="$emit('paginate')"
        @item-select="addItem"
      >
        <template #before-item-list>
          <slot name="before-item-list" />
        </template>

        <template #result-item="{ item, index }">
          <slot
            name="result-item"
            v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, isSelected, addItem, getKey }"
          >
            <sw-select-result
              :selected="isSelected(item)"
              :class="'sw-select-option--' + item.value"
              :data-testid="'sw-select-option--' + item.value"
              v-bind="{ item, index }"
              @item-select="addItem"
            >
              <slot
                name="result-label-property"
                v-bind="{ item, index, labelProperty, valueProperty, searchTerm, getKey }"
              >
                <sw-highlight-text
                  v-if="highlightSearchTerm"
                  :text="getKey(item, labelProperty)"
                  :search-term="searchTerm"
                />
                <template v-else>
                  {{ getKey(item, labelProperty) }}
                </template>
              </slot>
            </sw-select-result>
          </slot>
        </template>

        <template #after-item-list>
          <slot name="after-item-list" />
        </template>
      </sw-select-result-list>
    </template>

    <template #sw-select-suffix>
      <slot name="suffix" />
    </template>

    <template #sw-select-hint>
      <slot name="hint" />
    </template>
  </sw-select-base>
</template>

<script>
import { debounce, get } from 'lodash-es';
import SwSelectBase from '../_internal/sw-select-base/sw-select-base.vue';
import SwSelectResultList from '../_internal/sw-select-base/_internal/sw-select-result-list.vue';
import SwSelectResult from '../_internal/sw-select-base/_internal/sw-select-result.vue';
import SwSelectSelectionList from '../_internal/sw-select-base/_internal/sw-select-selection-list.vue';
import SwHighlightText from '../../_internal/sw-highlight-text.vue';

export default {
  name: 'SwSelect',

  components: {
    'sw-select-base': SwSelectBase,
    'sw-select-result-list': SwSelectResultList,
    'sw-select-selection-list': SwSelectSelectionList,
    'sw-highlight-text': SwHighlightText,
    'sw-select-result': SwSelectResult,
  },

  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    /**
     * An array of objects with the labelProperty and valueProperty.
     *
     * @example [{label: 'Option A', value: 'a'}, {label: 'Option B', value: 'b'}]
     */
    options: {
      type: Array,
      required: true,
    },

    /**
     * Toggles if either one or more items can be selected.
     */
    enableMultiSelection: {
      type: Boolean,
      default: false,
    },

    /**
     * Dependent on multiSelection, either a single value or an array of values.
     */
    value: {
      type: [String, Number, Boolean, Array, null, undefined],
      required: false,
      default: null,
    },

    /**
     * The object key of the label property.
     */
    labelProperty: {
      type: String,
      required: false,
      default: 'label',
    },

    /**
     * The object key to use for the value.
     */
    valueProperty: {
      type: String,
      required: false,
      default: 'value',
    },

    /**
     * The number of items that are expanded by default.
     */
    valueLimit: {
      type: Number,
      required: false,
      default: 5,
    },

    /**
     * The label for the select field itself.
     */
    label: {
      type: String,
      required: true,
    },

    /**
     * The placeholder for the select field.
     */
    placeholder: {
      type: String,
      required: false,
      default: '',
    },

    /**
     * Toggles the loading state of the select field.
     */
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Disables or enables the select field.
     */
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Toggles a button to clear all selections.
     */
    hideClearableButton: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Determines to highlight the searched term or not.
     */
    highlightSearchTerm: {
      type: Boolean,
      required: false,
      default: true,
    },

    /**
     * Used to implement a custom search function.
     * Parameters passed: { options, labelProperty, valueProperty, searchTerm }
     */
    searchFunction: {
      type: Function,
      required: false,
      default({ options, labelProperty, searchTerm }) {
        return options.filter((option) => {
          const label = this.getKey(option, labelProperty);
          if (!label) {
            return false;
          }
          return label.toLowerCase().includes(searchTerm.toLowerCase());
        });
      },
    },

    /**
     * An error in your business logic related to this field.
     *
     * For example: {"code": 500, "detail": "Error while saving"}
     */
    error: {
      type: Object,
      required: false,
      default: null,
    },

    /**
     * Toggles the inheritance visualization.
     */
    isInherited: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Determines if the field is inheritable.
     */
    isInheritanceField: {
      type: Boolean,
      required: false,
      default: false,
    },

    /**
     * Determines the active state of the inheritance toggle.
     */
    disableInheritanceToggle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      searchTerm: '',
      limit: this.valueLimit,
    };
  },

  computed: {
    visibleValues() {
      if (!this.currentValue || this.currentValue.length <= 0) {
        return [];
      }

      return this.options.filter((item) => this.currentValue.includes(this.getKey(item, this.valueProperty))).slice(0, this.limit);
    },

    totalValuesCount() {
      if (this.currentValue.length) {
        return this.currentValue.length;
      }

      return 0;
    },

    invisibleValueCount() {
      if (!this.currentValue) {
        return 0;
      }

      return Math.max(0, this.totalValuesCount - this.limit);
    },

    currentValue: {
      get() {
        if (!this.value) {
          return [];
        }

        return this.value;
      },
      set(newValue) {
        this.$emit('change', newValue);
      },
    },

    visibleResults() {
      if (this.searchTerm) {
        return this.searchFunction(
          {
            options: this.options,
            labelProperty: this.labelProperty,
            valueProperty: this.valueProperty,
            searchTerm: this.searchTerm,
          },
        );
      }

      return this.options;
    },
  },

  watch: {
    valueLimit(value) {
      this.limit = value;
    },
  },

  methods: {
    isSelected(item) {
      return this.currentValue.includes(this.getKey(item, this.valueProperty));
    },

    addItem(item) {
      const identifier = this.getKey(item, this.valueProperty);

      if (this.isSelected(item) && this.enableMultiSelection) {
        this.remove(item);
        return;
      }

      this.$emit('item-add', item);

      if (this.enableMultiSelection) {
        this.currentValue = [...this.currentValue, identifier];
      }else if (this.currentValue !== identifier) {
        this.currentValue = identifier;
        this.$refs.selectBase.collapse();
        this.$refs.selectionList.blur();
      }

      this.$refs.selectionList.focus();
      this.$refs.selectionList.select();
    },

    remove(item) {
      this.$emit('item-remove', item);

      if(!Array.isArray(this.currentValue)) {
        this.currentValue = null;

        return;
      }

      this.currentValue = this.currentValue.filter((value) => value !== this.getKey(item, this.valueProperty));
    },

    removeLastItem() {
      if (!this.visibleValues.length) {
        return;
      }

      if (this.invisibleValueCount > 0) {
        this.expandValueLimit();
        return;
      }

      const lastSelection = this.visibleValues[this.visibleValues.length - 1];
      this.remove(lastSelection);
    },

    expandValueLimit() {
      this.$emit('display-values-expand');

      this.limit += this.limit;
    },

    onSearchTermChange: debounce(function updateSearchTerm(term) {
      this.searchTerm = term;
      this.$emit('search-term-change', this.searchTerm);
      this.resetActiveItem();
    }, 100),

    resetActiveItem() {
      if (!this.$refs.swSelectResultList) {
        return;
      }

      this.$refs.swSelectResultList.setActiveItemIndex(0);
    },

    onSelectExpanded() {
      this.$refs.selectionList.focus();
    },

    onSelectCollapsed() {
      this.searchTerm = '';
      this.$refs.selectionList.blur();
    },

    getKey(object, keyPath, defaultValue) {
      return get(object, keyPath, defaultValue);
    },

    onClearSelection() {
      this.currentValue = [];
    },
  },
};
</script>
