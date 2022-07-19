import SwButton from './sw-button.vue';

export default {
  title: 'Components/base/sw-button',
  component: SwButton,
  argTypes: {
    click: {
      action: 'click',
      table: {
        category: 'Events'
      }
    },
    default: {
      control: { type: 'text' },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SwButton },
  props: Object.keys(argTypes),
  template: `<sw-button @click="click" v-bind="$props">{{ $props.default}}</sw-button>`,
});

export const Default = Template.bind();
Default.args = {
  default: 'Button',
  variant: 'primary',
  size: 'small',
  disabled: false,
  square: false,
  block: false,
  isLoading: false,
};
Default.storyName = 'sw-button';
