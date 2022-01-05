import SwTextareaField from './sw-textarea-field.vue';

export default {
  title: 'Shopware/form/sw-textarea-field',
  component: SwTextareaField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTextareaField },
  template: '<sw-textarea-field v-bind="$props"></sw-textarea-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Textareafield',
};
