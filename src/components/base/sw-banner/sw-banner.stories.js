import SwBanner from './sw-banner.vue';

export default {
  title: 'Components/base/sw-banner',
  component: SwBanner,
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
  components: { SwBanner },
  template: '<sw-banner v-bind="$props"></sw-banner>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-banner';
