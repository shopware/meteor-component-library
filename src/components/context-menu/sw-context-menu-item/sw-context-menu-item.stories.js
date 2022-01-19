import SwContextMenuItem from './sw-context-menu-item.vue';

export default {
  title: 'Components/context-menu/sw-context-menu-item',
  component: SwContextMenuItem,
  args: {
    disabled: false,
  },
  argTypes: {
    icon: {
      control: {
        type: 'text',
      },
    },
    routerLink: {
      control: {
        type: 'array',
      },
    },
    target: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['success', 'danger', 'warning', 'headline'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwContextMenuItem },
  template: '<sw-context-menu-item v-bind="$props">Lorem ipsum dolor sit amet</sw-context-menu-item>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-context-menu-item';
