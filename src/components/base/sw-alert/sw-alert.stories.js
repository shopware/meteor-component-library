import SwAlert from './sw-alert.vue';

export default {
  title: 'Components/base/sw-alert',
  component: SwAlert,
  args: {
    variant: 'info',
    appearance: 'default',
    title: 'Alert',
    closable: false,
    showIcon: true,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
    appearance: {
      control: 'select',
      options: ['default', 'notification', 'system'],
    },
    notificationIndex: {
      control: 'text',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwAlert },
  template: '<sw-alert v-bind="$props"></sw-alert>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-alert';
