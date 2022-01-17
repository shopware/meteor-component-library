import SwButton from './sw-button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/base/sw-button',
  component: SwButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'ghost', 'danger', 'ghost-danger', 'contrast', 'context'],
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwButton },
  template: '<sw-button v-bind="$props"> {{ defaultSlot }} </sw-button>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  defaultSlot: 'Button',
  variant: 'primary',
  size: 'small',
};
