<template>
  <sw-select-base
    class="sw-multi-select"
    :is-loading="isLoading"
    v-bind="$attrs"
    @select-expanded="onSelectExpanded"
    @select-collapsed="onSelectCollapsed"
    v-on="$listeners"
  >
    <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }">
      <sw-select-selection-list
        ref="selectionList"
        :selections="visibleValues"
        :invisible-count="invisibleValueCount"
        v-bind="{ size, valueProperty, labelProperty, placeholder, searchTerm, disabled }"
        @total-count-click="expandValueLimit"
        @item-remove="remove"
        @last-item-delete="removeLastItem"
        @search-term-change="onSearchTermChange"
      >
        <template #label-property="{ item, index, labelProperty, valueProperty }">
          <slot
            name="selection-label-property"
            v-bind="{ item, index, labelProperty, valueProperty}"
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
          <slot name="before-item-list"></slot>
        </template>
        <template #result-item="{ item, index }">
          <slot
            name="result-item"
            v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, isSelected, addItem, getKey }"
          >
            <li
              is="sw-select-result"
              :selected="isSelected(item)"
              :class="'sw-select-option--' + item.value"
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
              </li>
          </slot>
        </template>

        <template #after-item-list>
          <slot name="after-item-list"></slot>
        </template>
        </sw-select-result-list>
      </template>

    <template #label>
      <slot name="label"></slot>
    </template>
  </sw-select-base>
</template>

<script>
import { debounce, get } from 'lodash-es';
import SwSelectBase from '../_internal/sw-select-base/sw-select-base.vue';
import SwSelectResultList from '../_internal/sw-select-result-list/sw-select-result-list.vue';
import SwSelectSelectionList from '../_internal/sw-select-selection-list/sw-select-selection-list.vue';
import SwHighlightText from '../../base/sw-highlight-text/sw-highlight-text.vue';

export default {
  name: 'sw-multi-select',

  inheritAttrs: false,

  components: {
    'sw-select-base': SwSelectBase,
    'sw-select-result-list': SwSelectResultList,
    'sw-select-selection-list': SwSelectSelectionList,
    'sw-highlight-text': SwHighlightText,
  },

  // mixins: [
  //   Mixin.getByName('remove-api-error'),
  // ],

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      required: true,
      validator(value) {
        return Array.isArray(value) || value === null || value === undefined;
      },
    },
    labelProperty: {
      type: String,
      required: false,
      default: 'label',
    },
    valueProperty: {
      type: String,
      required: false,
      default: 'value',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    valueLimit: {
      type: Number,
      required: false,
      default: 5,
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    highlightSearchTerm: {
      type: Boolean,
      required: false,
      default: true,
    },
    // Used to implement a custom search function.
    // Parameters passed: { options, labelProperty, valueProperty, searchTerm }
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

  methods: {
    isSelected(item) {
      return this.currentValue.includes(this.getKey(item, this.valueProperty));
    },

    addItem(item) {
      const identifier = this.getKey(item, this.valueProperty);

      if (this.isSelected(item)) {
        this.remove(item);
        return;
      }

      this.$emit('item-add', item);

      this.currentValue = [...this.currentValue, identifier];

      this.$refs.selectionList.focus();
      this.$refs.selectionList.select();
    },

    remove(item) {
      this.$emit('item-remove', item);

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
  },
};
</script>

<style lang="scss"></style>
