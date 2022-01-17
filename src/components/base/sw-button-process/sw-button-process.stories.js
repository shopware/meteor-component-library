import SwButtonProcess from './sw-button-process.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/base/sw-button-process',
  component: SwButtonProcess,
  args: {
    processSuccess: false,
    animationTimeout: 1250,
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwButtonProcess },
  template: '<sw-button-process v-bind="$props">Button process</sw-button-process>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.storyName = 'sw-button-process';
