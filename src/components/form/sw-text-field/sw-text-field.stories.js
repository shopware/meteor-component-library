import SwTextField from './sw-text-field.vue';

export default {
  title: 'Components/form/sw-text-field',
  component: SwTextField,
  args: {
    label: 'Textfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTextField },
  template: '<sw-text-field v-bind="$props"></sw-text-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-text-field';
