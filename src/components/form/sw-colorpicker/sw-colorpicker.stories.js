import SwColorpicker from './sw-colorpicker.vue';

export default {
  title: 'Components/form/sw-colorpicker',
  component: SwColorpicker,
  args: {
    label: 'Colorpicker',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwColorpicker },
  template: '<sw-colorpicker v-bind="$props"></sw-colorpicker>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-colorpicker';
