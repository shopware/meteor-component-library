import SwCodeEditor from './sw-code-editor.vue';

export default {
  title: 'Components/form/sw-code-editor',
  component: SwCodeEditor,
  args: {
    value: '$foo = "bar";',
    label: 'Code editor',
    softWraps: true,
    setFocus: false,
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCodeEditor },
  template: '<sw-code-editor v-bind="$props"></sw-code-editor>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-code-editor';
