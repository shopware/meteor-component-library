import SwEmailField from './sw-email-field.vue';

export default {
  title: 'Components/form/sw-email-field',
  component: SwEmailField,
  args: {
    label: 'Emailfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwEmailField },
  template: '<sw-email-field v-bind="$props"></sw-email-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-email-field';
