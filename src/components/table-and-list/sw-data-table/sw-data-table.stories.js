import SwDataTable from './sw-data-table.vue';
import SwDataTableFixtures from './sw-data-table.fixtures.json';

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
        renderer: 'checkmark',
        position: 200,
        width: 120,
        allowResize: false
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
      },
      {
        label: 'Available',
        property: 'available',
        renderer: 'number',
        position: 500,
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
    }
  },
  computed: {
    dataSourceValue() {
      return this.dataSource.slice(
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
    searchValue: {
      handler(v) {
        if (this.searchValueValue === v) {
          return;
        }

        this.searchValueValue = v;
      },
      immediate: true
    }
  },
  methods: {
    paginationLimitChangeHandler(event) {
      this.paginationLimitChange(event)
      this.paginationLimitValue = event;
    },
    paginationCurrentPageChangeHandler(event) {
      this.paginationCurrentPageChange(event)
      this.currentPageValue = event;
    },
    searchValueChangeHandler(event) {
      this.searchValueChange(event)
      this.searchValueValue = event;
    }
  },
  template: `
  <div style="max-width: 1000px; max-height: 650px; height: 650px; margin: 0 auto;">
    <sw-data-table
      v-bind="$props"
      :dataSource="dataSourceValue"
      :paginationTotalItems="paginationTotalItemsValue"
      @reload="reload"
      :paginationLimit="paginationLimitValue"
      @pagination-limit-change="paginationLimitChangeHandler"
      :currentPage="currentPageValue"
      @pagination-current-page-change="paginationCurrentPageChangeHandler"
      :searchValue="searchValueValue"
      @search-value-change="searchValueChangeHandler"
    >
      {{ $props.default}}
    </sw-data-table>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-data-table';