import SwDataGrid from './sw-data-grid.vue';
import SwDataGridFixtures from './sw-data-grid.fixtures.json';

export default {
  title: 'Components/Grid and list/sw-data-grid',
  component: SwDataGrid,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  components: { SwDataGrid },
  props: Object.keys(argTypes),
  template: `
  <div style="max-width: 1000px; max-height: 500px; height: 500px; margin: 0 auto;">
    <sw-data-grid  v-bind="$props">{{ $props.default}}</sw-data-grid>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-data-grid';
Default.args = {
  dataSource: SwDataGridFixtures,
  columns: [
    {
      label: 'Name',
      property: 'name',
      renderer: 'text',
      position: 0,
      width: 200
    },
    {
      label: 'Manufacturer',
      property: 'manufacturer.name',
      renderer: 'text',
      position: 100,
      // width: 200
    },
    {
      label: 'Active',
      property: 'active',
      renderer: 'checkmark',
      position: 200,
      width: 100
    },
    {
      label: 'Price',
      property: 'price',
      renderer: 'price',
      position: 300,
      // width: 200
    },
    {
      label: 'Stock',
      property: 'stock',
      renderer: 'number',
      position: 400,
      width: 100
    },
    {
      label: 'Available',
      property: 'available',
      renderer: 'number',
      position: 500,
      width: 100
    },
  ]
}