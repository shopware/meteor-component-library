import SwPasswordField from './sw-password-field.vue';

export default {
  title: 'Components/form/sw-password-field',
  component: SwPasswordField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwPasswordField },
  template: '<sw-password-field v-bind="$props"></sw-password-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Passwordfield',
};
