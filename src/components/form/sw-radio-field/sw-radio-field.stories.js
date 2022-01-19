import SwRadioField from './sw-radio-field.vue';

export default {
  title: 'Components/form/sw-radio-field',
  component: SwRadioField,
  args: {
    label: 'Radiofield',
    options: [
      { value: 'value1', name: 'Label #1' },
      { value: 'value2', name: 'Label #2' },
      { value: 'value3', name: 'Label #3' },
      { value: 'value4', name: 'Label #4' },
      { value: 'value5', name: 'Label #5' },
    ],
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwRadioField },
  template: '<sw-radio-field v-bind="$props"></sw-radio-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-radio-field';
