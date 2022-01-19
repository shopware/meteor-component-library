import SwContextMenuDivider from './sw-context-menu-divider.vue';

export default {
  title: 'Components/context-menu/sw-context-menu-divider',
  component: SwContextMenuDivider,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwContextMenuDivider },
  template: '<sw-context-menu-divider v-bind="$props"></sw-context-menu-divider>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-context-menu-divider';
