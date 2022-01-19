import SwSingleSelect from './sw-single-select.vue';

export default {
  title: 'Components/form/sw-single-select',
  component: SwSingleSelect,
  args: {
    label: 'Single select',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSingleSelect },
  template: '<sw-single-select v-bind="$props"></sw-single-select>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-single-select';
