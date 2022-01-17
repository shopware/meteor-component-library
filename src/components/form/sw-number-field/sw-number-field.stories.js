import SwNumberField from './sw-number-field.vue';

export default {
  title: 'Components/form/sw-number-field',
  component: SwNumberField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwNumberField },
  template: '<sw-number-field v-bind="$props"></sw-number-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Numberfield',
};
