import SwCircleIcon from './sw-circle-icon.vue';

export default {
  title: 'Components/base/sw-circle-icon',
  component: SwCircleIcon,
  args: {
    size: 50,
    iconName: '',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'danger', 'success', 'warning', 'neutral', 'primary'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCircleIcon },
  template: '<sw-circle-icon v-bind="$props"></sw-circle-icon>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-circle-icon';
