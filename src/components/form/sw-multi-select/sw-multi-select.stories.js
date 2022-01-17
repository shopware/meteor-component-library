import SwMultiSelect from './sw-multi-select.vue';

export default {
  title: 'Components/form/sw-multi-select',
  component: SwMultiSelect,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwMultiSelect },
  template: '<sw-multi-select v-bind="$props"></sw-multi-select>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Multi select',
};
