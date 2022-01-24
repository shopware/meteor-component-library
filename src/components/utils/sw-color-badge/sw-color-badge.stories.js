import SwColorBadge from './sw-color-badge.vue';

export default {
  title: 'Components/utils/sw-color-badge',
  component: SwColorBadge,
  args: {
    variant: 'default',
    color: 'red',
    rounded: false,
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwColorBadge },
  template: '<sw-color-badge v-bind="$props"></sw-color-badge>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-color-badge';
