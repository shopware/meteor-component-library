import SwTextareaField from './sw-textarea-field.vue';

export default {
  title: 'Components/form/sw-textarea-field',
  component: SwTextareaField,
  args: {
    label: 'Textareafield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTextareaField },
  template: '<sw-textarea-field v-bind="$props"></sw-textarea-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-textarea-field';
