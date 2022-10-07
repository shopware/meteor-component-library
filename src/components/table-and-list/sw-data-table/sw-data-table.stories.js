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
        width: 200,
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
    paginationOptions: [5,10,25,50,250,5000]
  }
};

const Template = (args, { argTypes }) => ({
  components: { SwDataTable },
  props: Object.keys(argTypes),
  data() {
    return {
      paginationLimitValue: 0,
      currentPageValue: 0,
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
    }
  },
  template: `
  <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">
    <sw-data-table
      v-bind="$props"
      @reload="reload"
      :paginationLimit="paginationLimitValue"
      @pagination-limit-change="paginationLimitChangeHandler"
      :currentPage="currentPageValue"
      @pagination-current-page-change="paginationCurrentPageChangeHandler"
      :paginationTotalItems="90"
    >
      {{ $props.default}}
    </sw-data-table>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-data-table';