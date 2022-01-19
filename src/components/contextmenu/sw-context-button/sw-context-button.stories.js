import SwContextButton from './sw-context-button.vue';

export default {
  title: 'Components/contextmenu/sw-context-button',
  component: SwContextButton,
  args: {
    showMenuOnStartup: false,
    menuWidth: 220,
    menuHorizontalAlign: 'right',
    menuVerticalAlign: 'bottom',
    icon: 'small-more',
    disabled: false,
    autoClose: true,
    autoCloseOutsideClick: false,
    zIndeX: 9000,
  },
  argTypes: {
    menuHorizontalAlign: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    menuVerticalAlign: {
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
    },
    additionalContextMenuClasses: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwContextButton },
  template: '<sw-context-button v-bind="$props">Lorem ipsum dolor sit amet</sw-context-button>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-context-button';
