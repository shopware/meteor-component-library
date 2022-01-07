import SwTabs from './sw-tabs.vue';
import SwTabsItem from '../sw-tabs-item/sw-tabs-item.vue';

export default {
  title: 'Shopware/base/sw-tabs',
  component: SwTabs,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTabs, SwTabsItem },
  template: '<sw-tabs v-bind="$props"><sw-tabs-item></sw-tabs-item></sw-tabs>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
