import SwProgressBar from './sw-progress-bar.vue';

export default {
  title: 'Components/utils/sw-progress-bar',
  component: SwProgressBar,
  args: {
    value: 10,
    maxValue: 100,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwProgressBar },
  template: '<sw-progress-bar v-bind="$props"></sw-progress-bar>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-progress-bar';
