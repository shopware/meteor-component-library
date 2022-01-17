import SwHelpText from './sw-help-text.vue';

export default {
  title: 'Components/base/sw-help-text',
  component: SwHelpText,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwHelpText },
  template: '<sw-help-text v-bind="$props"></sw-help-text>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
