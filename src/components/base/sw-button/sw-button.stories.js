import SwButton from './sw-button.vue';

export default {
  title: 'Components/base/sw-button',
  component: SwButton,
  args: {
    disabled: false,
    variant: 'primary',
    size: 'small',
    square: false,
    block: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'ghost', 'danger', 'ghost-danger', 'contrast', 'context'],
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'large'],
    },
    link: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwButton },
  template: '<sw-button v-bind="$props">Button</sw-button>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-button';
