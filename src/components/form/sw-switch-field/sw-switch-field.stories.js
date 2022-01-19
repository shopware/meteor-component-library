import SwSwitchField from './sw-switch-field.vue';

export default {
  title: 'Components/form/sw-switch-field',
  component: SwSwitchField,
  args: {
    label: 'Switchfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSwitchField },
  template: '<sw-switch-field v-bind="$props"></sw-switch-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-switch-field';
