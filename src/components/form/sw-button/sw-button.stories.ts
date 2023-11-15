import type { StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import SwButton from './sw-button.vue';
import type { SlottedMeta } from '@/_internal/story-helper';

const meta: SlottedMeta<typeof SwButton, 'default'> = {
  title: 'Components/Form/sw-button',
  component: SwButton,
  render: (args) => ({
    components: { SwButton },
    setup() {
      return {
        args,
        onClick: action('click'),
      }
    },
    template: `<sw-button @click="onClick" v-bind="args">{{ args.default}}</sw-button>`,
  }),
  args: {
    default: 'Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
    square: false,
    block: false,
    isLoading: false,
    ghost: false,
    link: undefined,
  }
};

export default meta;
type Story = StoryObj<typeof SwButton>;

export const DefaultStory: Story = {
  name: 'sw-button',
};
