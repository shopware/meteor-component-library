import SwIcon from './sw-icon.vue';

export default {
  title: 'Components/base/sw-icon',
  component: SwIcon,
  args: {
    name: 'default-building-shop',
    color: '#3498db',
    small: false,
    large: false,
    multicolor: false,
    decorative: false,
  },
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwIcon },
  template: '<sw-icon v-bind="$props"></sw-icon>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-icon';
