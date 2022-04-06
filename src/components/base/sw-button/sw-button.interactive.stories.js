import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwButton from './sw-button.vue';

export default {
  title: 'Interaction Tests/base/sw-button',
  component: SwButton,
  args: {
    default: 'Button example',
  },
  argTypes: {
    click: {
      action: 'click',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SwButton },
  props: Object.keys(argTypes),
  template: `<sw-button @click="click" v-bind="$props">{{ $props.default}}</sw-button>`,
});

export const TestButtonClick = Template.bind();
TestButtonClick.storyName = 'Should click the button';
TestButtonClick.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.click).toHaveBeenCalled();
};

export const TestDefaultSlot = Template.bind();
TestDefaultSlot.storyName = 'Should allow to change the text by using the slot';
TestDefaultSlot.args = {
  default: 'The new button text',
};
TestDefaultSlot.play = async () => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  const button = await canvas.getByRole('button');
  await expect(button).toHaveTextContent('The new button text');
};
