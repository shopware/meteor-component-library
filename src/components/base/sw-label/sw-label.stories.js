import SwLabel from './sw-label.vue';

export default {
  title: 'Components/base/sw-label',
  component: SwLabel,
  args: {
    size: 'default',
    appearance: 'default',
    ghost: false,
    caps: false,
    dismissable: true,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'danger', 'success', 'warning', 'neutral', 'primary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'default'],
      },
    },
    appearance: {
      control: {
        type: 'select',
        options: ['default', 'pill', 'circle', 'badged'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwLabel },
  template: '<sw-label v-bind="$props"></sw-label>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-label';
Default.args = {
  variant: 'warning',
  appearance: 'pill',
};
