import SwColorpicker from './sw-colorpicker.vue';

export default {
  title: 'Components/form/sw-colorpicker',
  component: SwColorpicker,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwColorpicker },
  template: '<sw-colorpicker v-bind="$props"></sw-colorpicker>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Colorpicker',
};
