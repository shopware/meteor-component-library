import SwColorpicker from './sw-colorpicker.vue';

export default {
  title: 'Components/Form/sw-colorpicker',
  component: SwColorpicker,
  args: {
    label: 'Colorpicker example',
    value: '#0fcff5',
    colorOutput: 'auto',
    disabled: false,
    readonly: false,
    alpha: true,
    colorLabels: true,
    zIndex: null,
    helpText: '',
    required: false,
    isInherited: false,
    isInheritanceField: false,
    disableInheritanceToggle: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwColorpicker },
  template: '<sw-colorpicker v-bind="$props"></sw-colorpicker>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-colorpicker';
