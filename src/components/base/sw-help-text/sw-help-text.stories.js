import SwHelpText from './sw-help-text.vue';

export default {
  title: 'Components/base/sw-help-text',
  component: SwHelpText,
  args: {
    text: 'Help text',
    width: 200,
    showDelay: 100,
    hideDelay: 100,
  },
  argTypes: {
    tooltipPosition: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwHelpText },
  template: '<sw-help-text v-bind="$props"></sw-help-text>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-help-text';
