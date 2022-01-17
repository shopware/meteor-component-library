import SwChart from './sw-chart.vue';

export default {
  title: 'Components/base/sw-chart',
  component: SwChart,
  args: {
    type: 'line',
    sort: true,
    height: 400,
    options: {
      title: {
        text: 'Number of orders',
      },
      xaxis: {
        type: 'datetime',
        min: 1559260800000,
        max: 1559952000000,
      },
      yaxis: {
        min: 0,
        tickAmount: 3,
        labels: {
          formatter: (value) => parseInt(value, 10),
        },
      },
    },
    series: [
      {
        name: 'Saleschannel A',
        data: [
          { x: 1559426400000, y: 7 },
          { x: 1559512800000, y: 6 },
          { x: 1559772000000, y: 9 },
          { x: 1559599200000, y: 0 },
          { x: 1559685600000, y: 2 },
        ],
      },
      {
        name: 'Saleschannel B',
        data: [
          { x: 1559426400000, y: 4 },
          { x: 1559512800000, y: 2 },
          { x: 1559599200000, y: 3 },
          { x: 1559685600000, y: 0 },
          { x: 1559772000000, y: 1 },
        ],
      },
    ],
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'line',
          'area',
          'bar',
          'radar',
          'histogram',
          'pie',
          'donut',
          'scatter',
          'bubble',
          'heatmap',
        ],
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    fillEmptyValues: {
      control: {
        type: 'select',
        options: ['day', 'hour', 'minute'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwChart },
  template: '<sw-chart v-bind="$props"></sw-chart>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-chart';
