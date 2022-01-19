import SwMultiSelect from './sw-multi-select.vue';

export default {
  title: 'Components/form/sw-multi-select',
  component: SwMultiSelect,
  args: {
    label: 'Multi select',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwMultiSelect },
  template: '<sw-multi-select v-bind="$props"></sw-multi-select>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-multi-select';
