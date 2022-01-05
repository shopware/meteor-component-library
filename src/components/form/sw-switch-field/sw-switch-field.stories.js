import SwSwitchField from './sw-switch-field.vue';

export default {
  title: 'Shopware/form/sw-switch-field',
  component: SwSwitchField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSwitchField },
  template: '<sw-switch-field v-bind="$props"></sw-switch-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Switchfield',
};
