import SwTextField from './sw-text-field.vue';

export default {
  title: 'Components/form/sw-text-field',
  component: SwTextField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTextField },
  template: '<sw-text-field v-bind="$props"></sw-text-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Textfield',
};
