<template>
  <sw-select-base
    ref="selectBase"
    class="sw-single-select"
    :is-loading="isLoading"
    v-bind="$attrs"
    @clear="clearSelection"
    @select-expanded="onSelectExpanded"
    @select-collapsed="onSelectCollapsed"
    v-on="$listeners"
  >
    <template #sw-select-selection="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">
      <div class="sw-single-select__selection">
        <div
          v-if="!isExpanded"
          class="sw-single-select__selection-text"
          :class="selectionTextClasses"
        >
          <template v-if="singleSelection">
            <slot
              name="selection-label-property"
              v-bind="{ item: singleSelection, labelProperty, valueProperty, searchTerm, getKey }"
            >
              {{ getKey(singleSelection, labelProperty) }}
            </slot>
          </template>
          <template v-else>
            {{ placeholder }}
          </template>
        </div>
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          ref="swSelectInput"
          v-model="searchTerm"
          class="sw-single-select__selection-input"
          :class="inputClasses"
          type="text"
          :placeholder="placeholder"
          @input="onInputSearchTerm"
        >
      </div>
    </template>

    <template #results-list>
      <sw-select-result-list
        ref="resultsList"
        :popover-classes="popoverClasses"
        :options="visibleResults"
        :is-loading="isLoading"
        :empty-message="$tc('global.sw-single-select.messageNoResults', 0, { term: searchTerm })"
        :focus-el="$refs.swSelectInput"
        @paginate="$emit('paginate')"
        @item-select="setValue"
      >
        <template #before-item-list>
          <slot name="before-item-list"></slot>
        </template>

        <template #result-item="{ item, index }">
          <slot
            name="result-item"
            v-bind="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"
          >
            <li
              is="sw-select-result"
              :disabled="item.disabled"
              :class="'sw-select-option--' + item.value"
              :selected="isSelected(item)"
              v-bind="{ item, index }"
              @item-select="setValue"
            >
              <slot
                name="result-label-property"
                v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, getKey }"
              >
                <sw-highlight-text
                  v-if="highlightSearchTerm && !isSelected(item)"
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
import SwHighlightText from '../../base/sw-highlight-text/sw-highlight-text.vue';

export default {
  name: 'sw-single-select',

  components: {
    'sw-select-base': SwSelectBase,
    'sw-select-result-list': SwSelectResultList,
    'sw-highlight-text': SwHighlightText,
  },

  // inject: ['feature'],

  mixins: [
    // Mixin.getByName('remove-api-error'),
  ],

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    options: {
      required: true,
      type: Array,
    },
    // FIXME: add property type
    // eslint-disable-next-line vue/require-prop-types
    value: {
      required: true,
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
    placeholder: {
      type: String,
      required: false,
      default: '',
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

    popoverClasses: {
      type: Array,
      required: false,
      default() {
        return [];
      },
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

    disableSearchFunction: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      searchTerm: '',
      isExpanded: false,
      results: this.options,
      // used to track if an item was selected before closing the result list
      itemRecentlySelected: false,
    };
  },

  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('change', newValue);
      },
    },

    inputClasses() {
      return {
        'is--expanded': this.isExpanded,
      };
    },

    selectionTextClasses() {
      return {
        'is--placeholder': !this.singleSelection,
      };
    },

    singleSelection: {
      get() {
        return this.options.find((option) => this.getKey(option, this.valueProperty) === this.currentValue);
      },
      set(newValue) {
        this.currentValue = this.getKey(newValue, this.valueProperty);
      },
    },

    /**
     * @returns {Array}
     */
    visibleResults() {
      // if (this.feature.isActive('FEATURE_NEXT_7530')) {
      //   return this.results.filter((result) => !result.hidden);
      // }

      return this.results;
    },
  },

  methods: {
    // todo: remove mock
    $tc(path) {
      return path;
    },
    isSelected(item) {
      return this.getKey(item, this.valueProperty) === this.value;
    },

    onSelectExpanded() {
      this.isExpanded = true;
      // Always start with a fresh list when opening the result list
      this.results = this.options;

      // Get the search text of the selected item as prefilled value
      this.searchTerm = this.tryGetSearchText(this.singleSelection);

      this.$nextTick(() => {
        this.resetActiveItem();
        this.$refs.swSelectInput.select();
        this.$refs.swSelectInput.focus();
      });
    },

    tryGetSearchText(option) {
      return this.getKey(option, this.labelProperty, '');
    },

    onSelectCollapsed() {
      // Empty the selection if the search term is empty
      if (this.searchTerm === '' && !this.itemRecentlySelected) {
        this.$emit('before-selection-clear', this.singleSelection, this.value);
        this.currentValue = null;
      }

      this.$refs.swSelectInput.blur();
      this.searchTerm = '';
      this.itemRecentlySelected = false;
      this.isExpanded = false;
    },

    closeResultList() {
      this.$refs.selectBase.collapse();
    },

    setValue(item) {
      this.itemRecentlySelected = true;
      this.singleSelection = item;
      this.closeResultList();
    },

    resetActiveItem(pos = 0) {
      // Return if the result list is closed before the search request returns
      if (!this.$refs.resultsList) {
        return;
      }
      // If an item is selected the second entry is the first search result
      if (this.singleSelection) {
        pos = 1;
      }
      this.$refs.resultsList.setActiveItemIndex(pos);
    },

    onInputSearchTerm() {
      this.debouncedSearch();
    },

    debouncedSearch: debounce(function updateSearchTerm() {
      this.search();
    }, 100),

    search() {
      this.$emit('search', this.searchTerm);

      if (this.disableSearchFunction) {
        return;
      }

      this.results = this.searchFunction(
        {
          options: this.options,
          labelProperty: this.labelProperty,
          valueProperty: this.valueProperty,
          searchTerm: this.searchTerm,
        },
      );

      this.$nextTick(() => {
        this.resetActiveItem();
      });
    },

    getKey(object, keyPath, defaultValue) {
      return get(object, keyPath, defaultValue);
    },

    clearSelection() {
      this.setValue(null);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-single-select {
  .sw-single-select__selection-input {
    padding: 12px 0;
    width: 0;
    display: inline-block;

    &.is--expanded {
      width: 100%;
      display: block;
      padding: 12px 8px;
    }
  }

  .sw-single-select__selection-text {
    display: inline-block;
    padding-left: 8px;

    &.is--placeholder {
      color: lighten($color-darkgray-200, 25%);
    }
  }

  &.sw-field--medium {
    .sw-select__selection {
      padding: 0 6px 0;
    }

    .sw-single-select__selection-input {
      padding: 8px 8px;
    }
  }

  &.sw-field--small {
    .sw-select__selection {
      padding: 0 6px 0;
    }

    .sw-single-select__selection-input {
      padding: 4px 8px;
    }
  }
}
</style>
