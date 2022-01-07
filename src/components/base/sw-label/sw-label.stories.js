import SwLabel from './sw-label.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Shopware/base/sw-label',
  component: SwLabel,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwLabel },
  template: '<sw-label v-bind="$props"></sw-label>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  variant: 'warning',
  appearance: 'pill',
};
