import SwUrlField from './sw-url-field.vue';

export default {
  title: 'Shopware/form/sw-url-field',
  component: SwUrlField,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwUrlField },
  template: '<sw-url-field v-bind="$props"></sw-url-field>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Url field',
};
