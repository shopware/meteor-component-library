import SwBanner from './sw-banner.vue';

export default {
  title: 'Components/Feedback Indicator/sw-banner',
  component: SwBanner,
  args: {
    title: 'This is a banner',
    default: 'I am in the default slot of the banner',
    variant: 'neutral',
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
  components: { SwBanner },
  template: `
    <sw-banner
      v-bind="$props"
      @close="close"
    >
      <div v-html="$props.default"></div>
    </sw-banner>`,
});

export const Default = Template.bind({});
Default.storyName = 'sw-banner';
