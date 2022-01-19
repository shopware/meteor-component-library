import SwTabs from './sw-tabs.vue';
import SwTabsItem from '../sw-tabs-item/sw-tabs-item.vue';

export default {
  title: 'Components/base/sw-tabs',
  component: SwTabs,
  subcomponents: { 'sw-tabs-item': SwTabsItem },
  args: {
    isVertical: false,
    small: true,
    alignRight: false,
  },
  argTypes: {
    defaultItem: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTabs, SwTabsItem },
  template: '<sw-tabs v-bind="$props"><sw-tabs-item :active="true">Item 1</sw-tabs-item><sw-tabs-item>Item 2</sw-tabs-item></sw-tabs>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-tabs';
