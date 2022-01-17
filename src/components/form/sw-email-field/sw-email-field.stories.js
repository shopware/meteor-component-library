import SwEmailField from './sw-email-field.vue';

export default {
  title: 'Components/form/sw-email-field',
  component: SwEmailField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwEmailField },
  template: '<sw-email-field v-bind="$props"></sw-email-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Emailfield',
};
