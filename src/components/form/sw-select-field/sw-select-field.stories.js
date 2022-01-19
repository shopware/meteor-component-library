import SwSelectField from './sw-select-field.vue';

export default {
  title: 'Components/form/sw-select-field',
  component: SwSelectField,
  args: {
    label: 'Selectfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSelectField },
  template: '<sw-select-field v-bind="$props"></sw-select-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-select-field';
