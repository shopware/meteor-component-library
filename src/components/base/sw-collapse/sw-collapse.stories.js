import SwCollapse from './sw-collapse.vue';

export default {
  title: 'Components/base/sw-collapse',
  component: SwCollapse,
  args: {
    expandOnLoading: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCollapse },
  template: '<sw-collapse v-bind="$props"><div slot="header">Header slot</div><div slot="content">Content slot</div></sw-collapse>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-collapse';
