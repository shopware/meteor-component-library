import SwSingleSelect from './sw-single-select.vue';

export default {
  title: 'Components/form/sw-single-select',
  component: SwSingleSelect,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSingleSelect },
  template: '<sw-single-select v-bind="$props"></sw-single-select>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Single select',
};
