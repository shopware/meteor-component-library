<template>
  <div
    v-if="shouldBeVisible"
    class="sw-pagination"
  >
    <button
      :disabled="currentPage === 1"
      class="sw-pagination__page-button sw-pagination__page-button-prev"
      @click="prevPage"
    >
      <sw-icon
        name="small-arrow-medium-left"
        small
      />
    </button>

    <ul class="sw-pagination__list">
      <li
        v-for="(pageNum, index) in displayedPages"
        :key="index"
        class="sw-pagination__list-item"
      >
        <button
          v-if="typeof(pageNum) === 'number'"
          class="sw-pagination__list-button"
          :class="{ 'is-active': currentPage === pageNum }"
          @click="changePageByPageNumber(pageNum)"
        >
          {{ pageNum }}
        </button>

        <span
          v-else
          class="sw-pagination__list-separator"
        >
          {{ pageNum }}
        </span>
      </li>
    </ul>

    <button
      :disabled="currentPage === maxPage"
      class="sw-pagination__page-button sw-pagination__page-button-next"
      @click="nextPage"
    >
      <sw-icon
        name="small-arrow-medium-right"
        small
      />
    </button>

    <div
      v-if="steps.length > 1"
      class="sw-pagination__per-page"
    >
      <sw-select
        size="small"
        name="perPage"
        :label="$tc('global.sw-pagination.labelItemsPerPage')"
        :value="String(perPage)"
        aside
        @change="onPageSizeChange"
      >
        <option
          v-for="step in possibleSteps"
          :key="step"
          :value="step"
        >
          {{ step }}
        </option>
      </sw-select>
    </div>
  </div>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwSelect from '../../form/sw-select/sw-select.vue';

export default {
  name: 'SwPagination',

  components: {
    'sw-icon': SwIcon,
    'sw-select': SwSelect,
  },

  props: {
    total: {
      type: Number,
      required: true,
    },

    limit: {
      type: Number,
      required: true,
    },

    page: {
      type: Number,
      required: true,
    },

    totalVisible: {
      type: Number,
      required: false,
      default: 7,
    },

    steps: {
      type: Array,
      required: false,
      default() {
        return [10, 25, 50, 75, 100];
      },
    },

    autoHide: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      currentPage: this.page,
      perPage: this.limit,
    };
  },

  computed: {
    maxPage() {
      return Math.ceil(this.total / this.perPage);
    },

    displayedPages() {
      const maxLength = this.totalVisible;
      const { currentPage } = this;

      if (this.maxPage <= maxLength) {
        return this.range(1, this.maxPage);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = (this.maxPage - left) + 1 + even;

      if (currentPage === left) {
        return [
          ...this.range(1, left + 1),
          '...',
          ...this.range((this.maxPage - left) + 1 + even, this.maxPage),
        ];
      }

      if (currentPage === right) {
        return [
          ...this.range(1, left),
          '...',
          ...this.range((this.maxPage - left) + even, this.maxPage),
        ];
      }

      if (currentPage > left && currentPage < right) {
        const start = (currentPage - left) + 2;
        const end = (currentPage + left) - 2 - even;

        return [1, '...', ...this.range(start, end), '...', this.maxPage];
      }

      return [
        ...this.range(1, left),
        '...',
        ...this.range((this.maxPage - left) + 1 + even, this.maxPage),
      ];
    },

    shouldBeVisible() {
      if (!this.autoHide) {
        return true;
      }

      return this.total > Math.min(...this.steps);
    },

    possibleSteps() {
      const { total } = this;
      const stepsSorted = [...this.steps].sort((a, b) => a - b);

      let lastStep;
      const possibleSteps = stepsSorted.filter((x) => {
        if (lastStep > total) return false;
        lastStep = x;
        return true;
      });

      return possibleSteps;
    },
  },

  watch: {
    page() {
      this.currentPage = this.page;
    },

    maxPage() {
      if (this.maxPage === 0) {
        this.currentPage = 1;
        return;
      }

      if (this.currentPage > this.maxPage) {
        this.changePageByPageNumber(this.maxPage);
      }
    },
  },

  methods: {
    range(from, to) {
      const range = [];

      from = from > 0 ? from : 1;

      for (let i = from; i <= to; i += 1) {
        range.push(i);
      }
      return range;
    },

    pageChange() {
      this.$emit('page-change', {
        page: this.currentPage,
        limit: this.perPage,
      });
    },

    onPageSizeChange(perPage) {
      this.perPage = Number(perPage);
      this.firstPage();
    },

    firstPage() {
      this.currentPage = 1;
      this.pageChange();
    },

    prevPage() {
      this.currentPage -= 1;
      this.pageChange();
    },

    nextPage() {
      this.currentPage += 1;
      this.pageChange();
    },

    lastPage() {
      this.currentPage = this.maxPage;
      this.pageChange();
    },

    changePageByPageNumber(pageNum) {
      this.currentPage = pageNum;
      this.pageChange();
    },

    refresh() {
      this.pageChange();
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-pagination-color-background: $color-white;
$sw-pagination-controls-color-border: $color-gray-300;
$sw-pagination-controls-color-hover: $color-shopware-brand-500;
$sw-pagination-controls-color-text: $color-darkgray-200;
$sw-pagination-border-radius: $border-radius-default;

.sw-pagination {
  min-height: 64px;
  padding: 15px 20px;
  background: $sw-pagination-color-background;
  text-align: center;
  color: $sw-pagination-controls-color-text;
  position: relative;
  border-top: 1px solid $sw-pagination-controls-color-border;

  .sw-pagination__list {
    display: inline-block;
  }

  .sw-pagination__list-item {
    display: inline-block;
    list-style: none;
    margin: 0;
  }

  .sw-pagination__list-button,
  .sw-pagination__page-button,
  .sw-pagination__list-separator {
    padding: 8px 12px;
    border: 0 none;
    color: $sw-pagination-controls-color-text;
    background: none;
    cursor: pointer;
    outline: none;

    &:hover {
      color: $sw-pagination-controls-color-hover;
    }
  }

  .sw-pagination__page-button[disabled="disabled"] {
    cursor: default;

    &:hover {
      color: $sw-pagination-controls-color-text;
    }
  }

  .sw-pagination__list-separator {
    cursor: default;

    &:hover {
      color: $sw-pagination-controls-color-text;
    }
  }

  .sw-pagination__list-button {
    border-radius: 3px;

    &.is-active {
      background: $sw-pagination-controls-color-hover;
      color: #fff;
    }
  }

  .sw-pagination__per-page {
    display: inline-block;
    font-size: 14px;
    line-height: 16px;
    position: absolute;
    right: 0;
    margin: 0 20px;

    @media screen and (max-width: 900px) {
      display: none;
    }

    .sw-field.sw-field--select {
      grid-template-columns: 120px auto;
    }
  }
}
</style>
