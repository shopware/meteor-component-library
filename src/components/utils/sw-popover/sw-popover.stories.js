import SwPopover from './sw-popover.vue';

export default {
  title: 'Components/utils/sw-popover',
  component: SwPopover,
  args: {
    resizeWidth: false,
  },
  argTypes: {
    zIndex: {
      control: {
        type: 'number',
      },
    },
    popoverClass: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwPopover },
  template: '<sw-popover v-bind="$props"></sw-popover>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-popover';
