import SwPasswordField from './sw-password-field.vue';

export default {
  title: 'Components/form/sw-password-field',
  component: SwPasswordField,
  args: {
    label: 'Passwordfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwPasswordField },
  template: '<sw-password-field v-bind="$props"></sw-password-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-password-field';
