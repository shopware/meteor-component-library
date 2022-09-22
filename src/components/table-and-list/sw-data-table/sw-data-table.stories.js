import SwDataTable from './sw-data-table.vue';
import SwDataTableFixtures from './sw-data-table.fixtures.json';

export default {
  title: 'Components/Table and list/sw-data-table',
  component: SwDataTable,
  argTypes: {},
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
    ]
  }
};

const Template = (args, { argTypes }) => ({
  components: { SwDataTable },
  props: Object.keys(argTypes),
  template: `
  <div style="max-width: 1000px; max-height: 500px; height: 500px; margin: 0 auto;">
    <sw-data-table  v-bind="$props">{{ $props.default}}</sw-data-table>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-data-table';