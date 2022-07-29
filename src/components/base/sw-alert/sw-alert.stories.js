import SwAlert from './sw-alert.vue';

export default {
  title: 'Components/base/sw-alert',
  component: SwAlert,
  args: {
    title: 'This is a alert box',
    default: 'I am in the default slot of the alert box',
    variant: 'info',
    appearance: 'default'
  },
  argTypes: {
    close: {
      action: 'close',
      table: {
        category: 'Events'
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwAlert },
  template: `
    <sw-alert
      v-bind="$props"
      @close="close"
    >
      <div v-html="$props.default"></div>
    </sw-alert>`,
});

export const Default = Template.bind({});
Default.storyName = 'sw-alert';
