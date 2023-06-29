import SwDataTable from './sw-data-table.vue';
import SwDataTableFixtures from './sw-data-table.fixtures.json';
import { get } from 'lodash-es';

export default {
  title: 'Components/Table and list/sw-data-table',
  component: SwDataTable,
  argTypes: {
    // events
    reload: {
      action: 'reload',
      table: {
        category: 'Events'
      }
    },
    'pagination-limit-change': {
      table: {
        disable: true,
      }
    },
    paginationLimitChange: {
      action: 'pagination-limit-change',
      table: {
        category: 'Events'
      }
    },
    'pagination-current-page-change': {
      table: {
        disable: true,
      }
    },
    paginationCurrentPageChange: {
      action: 'pagination-current-page-change',
      table: {
        category: 'Events'
      }
    },
    'search-value-change': {
      table: {
        disable: true,
      }
    },
    searchValueChange: {
      action: 'search-value-change',
      table: {
        category: 'Events'
      }
    }
  },
  args: {
    dataSource: SwDataTableFixtures,
    columns: [
      {
        label: 'Name',
        property: 'name',
        renderer: 'text',
        position: 0,
        cellWrap: 'normal',
        sortable: true,
        clickable: true,
      },
      {
        label: 'Manufacturer',
        property: 'manufacturer.name',
        renderer: 'text',
        position: 100,
        cellWrap: 'normal',
      },
      {
        label: 'Active',
        property: 'active',
        renderer: 'badge',
        cellWrap: 'normal',
        position: 200,
        rendererOptions: {
          renderItemBadge: (data, columnDefinition) => {
            const value = get(data, columnDefinition.property);

            return value ? {
              variant: 'positive',
              label: 'Active',
            } : {
              variant: 'critical',
              label: 'Inactive',
            };
          }
        },
      },
      {
        label: 'Price',
        property: 'price',
        renderer: 'price',
        position: 300,
        cellWrap: 'nowrap',
        width: 150
      },
      {
        label: 'Stock',
        property: 'stock',
        renderer: 'number',
        position: 400,
        visible: false,
        sortable: true,
      },
      {
        label: 'Available',
        property: 'available',
        renderer: 'number',
        position: 500,
        sortable: true,
      },
    ],
    title: 'Data table',
    subtitle: 'Meta information is helpful for giving the user quick insides',
    enableReload: true,
    currentPage: 1,
    paginationLimit: 25,
    paginationOptions: [5,10,25,50,250,5000],
    searchValue: '',
    disableSearch: false,
    sortBy: 'name',
    sortDirection: 'ASC',
    isLoading: false,
    layout: 'default',
  }
};

const Template = (args, { argTypes }) => ({
  components: { SwDataTable },
  props: Object.keys(argTypes),
  data() {
    return {
      paginationLimitValue: 0,
      currentPageValue: 0,
      searchValueValue: '',
      sortByValue: '',
      sortDirectionValue: '',
      isLoadingValue: true,
    }
  },
  computed: {
    dataSourceValue() {
      /**
       * Mock server data handling
       */
      return this.dataSource.sort((aData, bData) => {
        const a = aData[this.sortByValue];
        const b = bData[this.sortByValue];
        let result = 0;

        if (a < b) {
          result = -1;
        } else if (a > b) {
          result = 1;
        }

        if (this.sortDirectionValue === 'DESC') {
          result *= -1;
        }

        return result;
      }).slice(
        (this.currentPageValue - 1) * this.paginationLimitValue,
        (this.currentPageValue) * this.paginationLimitValue
      );
    },
    paginationTotalItemsValue() {
      return this.dataSource.length;
    }
  },
  watch: {
    paginationLimit: {
      handler(v) {
        if (this.paginationLimitValue === v) {
          return;
        }
  
        this.paginationLimitValue = v;
      },
      immediate: true
    },
    currentPage: {
      handler(v) {
        if (this.currentPageValue === v) {
          return;
        }

        this.currentPageValue = v;
      },
      immediate: true
    },
    sortBy: {
      handler(v) {
        if (this.sortByValue === v) {
          return;
        }

        this.sortByValue = v;
      },
      immediate: true
    },
    sortDirection: {
      handler(v) {
        if (this.sortDirectionValue === v) {
          return;
        }

        this.sortDirectionValue = v;
      },
      immediate: true
    },
    searchValue: {
      handler(v) {
        if (this.searchValueValue === v) {
          return;
        }

        this.searchValueValue = v;
      },
      immediate: true
    },
    isLoading: {
      handler(v) {
        if (this.isLoadingValue === v) {
          return;
        }

        this.isLoadingValue = v;
      },
      immediate: false
    },
  },
  created() {
    if (!this.isLoading) {
      this.simulateLoading();
    }
  },
  methods: {
    simulateLoading() {
      // random loading time between 300 and 600ms
      const loadingTime = Math.floor(Math.random() * 300) + 300;
      this.isLoadingValue = true;

      window.setTimeout(() => {
        this.isLoadingValue = false;
      }, loadingTime);
    },
    paginationLimitChangeHandler(event) {
      this.paginationLimitChange(event)
      this.paginationLimitValue = event;

      this.simulateLoading();
    },
    paginationCurrentPageChangeHandler(event) {
      this.paginationCurrentPageChange(event)
      this.currentPageValue = event;

      this.simulateLoading();
    },
    searchValueChangeHandler(event) {
      this.searchValueChange(event)
      this.searchValueValue = event;

      this.simulateLoading();
    },
    sortChangeValueHandler(property, direction) {
      this.sortByValue = property;
      this.sortDirectionValue = direction;

      this.simulateLoading();
    },

    reloadHandler(event) {
      this.reload(event);

      this.simulateLoading();
    }
  },
  template: `
  <div
    style="
      margin: 0 auto;
      height: 100vh;
      width: 100vw;
      margin: -1rem;
      padding: 1rem;
      overflow: auto;
    "
  >
    <sw-data-table
      v-bind="$props"
      :dataSource="dataSourceValue"
      :paginationTotalItems="paginationTotalItemsValue"
      @reload="reloadHandler"
      :paginationLimit="paginationLimitValue"
      @pagination-limit-change="paginationLimitChangeHandler"
      :currentPage="currentPageValue"
      @pagination-current-page-change="paginationCurrentPageChangeHandler"
      :searchValue="searchValueValue"
      @search-value-change="searchValueChangeHandler"
      :sortBy="sortByValue"
      :sortDirection="sortDirectionValue"
      @sort-change="sortChangeValueHandler"
      :isLoading="isLoadingValue"
    >
      {{ $props.default}}
    </sw-data-table>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'Default';

export const Full = Template.bind();
Full.storyName = 'Full';
Full.args = {
  ...Default.args,
  layout: 'full'
};