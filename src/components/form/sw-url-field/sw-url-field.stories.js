import SwUrlField from './sw-url-field.vue';

export default {
  title: 'Components/form/sw-url-field',
  component: SwUrlField,
  args: {
    label: 'Url field',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwUrlField },
  template: '<sw-url-field v-bind="$props"></sw-url-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-url-field';
