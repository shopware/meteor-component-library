import type { StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import SwBanner from './sw-banner.vue';
import type { SlottedMeta } from '@/_internal/story-helper';

const meta: SlottedMeta<typeof SwBanner, 'default'> = {
  title: 'Components/Feedback Indicator/sw-banner',
  component: SwBanner,
  args: {
    title: 'This is a banner',
    default: 'I am in the default slot of the banner',
    variant: 'neutral',
  },
  render: (args) => ({
    components: { SwBanner },
    setup() {
      return {
        args,
        onClose: action('close'),
      }
    },
    template: `
      <sw-banner
        v-bind="args"
        @close="onClose"
      >
        <div v-html="args.default"></div>
      </sw-banner>`,
  }),
}

export default meta;
type Story = StoryObj<typeof SwBanner>;

export const DefaultStory: Story = {
  name: 'sw-banner',
};