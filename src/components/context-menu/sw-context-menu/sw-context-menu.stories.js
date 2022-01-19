import SwContextMenu from './sw-context-menu.vue';

export default {
  title: 'Components/context-menu/sw-context-menu',
  component: SwContextMenu,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwContextMenu },
  template: '<sw-context-menu v-bind="$props">Lorem ipsum dolor sit amet</sw-context-menu>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-context-menu';
