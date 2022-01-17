import SwButtonProcess from './sw-button-process.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/base/sw-button-process',
  component: SwButtonProcess,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwButtonProcess },
  template: '<sw-button-process v-bind="$props"> {{ defaultSlot }} </sw-button-process>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  defaultSlot: 'ButtonProcess',
  processSuccess: false,
};
