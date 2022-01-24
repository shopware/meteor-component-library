import SwPagination from './sw-pagination.vue';

export default {
  title: 'Components/utils/sw-pagination',
  component: SwPagination,
  args: {
    total: 500,
    limit: 25,
    page: 1,
    totalVisible: 7,
    steps: [25, 50, 75, 100],
    autoHide: true,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwPagination },
  template: '<sw-pagination v-bind="$props"></sw-pagination>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-pagination';
