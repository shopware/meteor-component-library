import SwCheckboxField from './sw-checkbox-field.vue';

export default {
  title: 'Components/form/sw-checkbox-field',
  component: SwCheckboxField,
  args: {
    label: 'Checkbox',
    disabled: false,
    bordered: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCheckboxField },
  template: '<sw-checkbox-field v-bind="$props"></sw-checkbox-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-checkbox-field';
