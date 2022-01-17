import SwCheckboxField from './sw-checkbox-field.vue';

export default {
  title: 'Components/form/sw-checkbox-field',
  component: SwCheckboxField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCheckboxField },
  template: '<sw-checkbox-field v-bind="$props"></sw-checkbox-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Checkbox',
};
