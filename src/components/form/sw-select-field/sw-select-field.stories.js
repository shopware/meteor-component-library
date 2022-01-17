import SwSelectField from './sw-select-field.vue';

export default {
  title: 'Components/form/sw-select-field',
  component: SwSelectField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSelectField },
  template: '<sw-select-field v-bind="$props"></sw-select-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Selectfield',
};
