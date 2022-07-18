import SwTextarea from './sw-textarea.vue';

export default {
  title: 'Components/form/sw-textarea',
  component: SwTextarea,
  args: {
    label: 'Textareafield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTextarea },
  template: '<sw-textarea v-bind="$props"></sw-textarea>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-textarea';
