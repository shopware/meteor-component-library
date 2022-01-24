import SwLoader from './sw-loader.vue';

export default {
  title: 'Components/utils/sw-loader',
  component: SwLoader,
  args: {
    size: '50px',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwLoader },
  template: '<sw-loader v-bind="$props"></sw-loader>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-loader';
