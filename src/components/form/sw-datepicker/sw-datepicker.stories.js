import SwDatepicker from './sw-datepicker.vue';

export default {
  title: 'Shopware/form/sw-datepicker',
  component: SwDatepicker,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwDatepicker },
  template: '<sw-datepicker v-bind="$props"></sw-datepicker>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  label: 'Datepicker',
};
