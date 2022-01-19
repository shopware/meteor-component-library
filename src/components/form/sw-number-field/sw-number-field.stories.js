import SwNumberField from './sw-number-field.vue';

export default {
  title: 'Components/form/sw-number-field',
  component: SwNumberField,
  args: {
    label: 'Numberfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwNumberField },
  template: '<sw-number-field v-bind="$props"></sw-number-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-number-field';
