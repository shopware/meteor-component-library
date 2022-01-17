import SwInheritanceSwitch from './sw-inheritance-switch.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/base/sw-inheritance-switch',
  component: SwInheritanceSwitch,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwInheritanceSwitch },
  template: '<sw-inheritance-switch v-bind="$props"></sw-inheritance-switch>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  isInherited: true,
};
