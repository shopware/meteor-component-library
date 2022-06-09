import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwButton from './sw-button.vue';
import defaultButtonStory, { Default } from './sw-button.stories';

export default {
  ...defaultButtonStory,
  title: 'Interaction Tests/base/sw-button',
  component: SwButton,
};

export const TestDefaultSlot = Default.bind();
TestDefaultSlot.storyName = 'Change the default slot';
TestDefaultSlot.args = { ...Default.args, default: 'The new button text' };
TestDefaultSlot.play = async () => {
  const canvas = within(document.getElementById('root'));

  const button = await canvas.getByRole('button');

  await expect(button).toHaveTextContent('The new button text');
};

export const VisualTestPrimaryVariant = Default.bind();
VisualTestPrimaryVariant.storyName = 'Render the primary variant';
VisualTestPrimaryVariant.args = {
  ...Default.args,
  default: 'Primary button',
  variant: 'primary'
};

export const VisualTestGhostVariant = Default.bind();
VisualTestGhostVariant.storyName = 'Render the ghost variant';
VisualTestGhostVariant.args = {
  ...Default.args,
  default: 'Ghost button',
  variant: 'ghost'
};

export const VisualTestDangerVariant = Default.bind();
VisualTestDangerVariant.storyName = 'Render the danger variant';
VisualTestDangerVariant.args = {
  ...Default.args,
  default: 'Danger button',
  variant: 'danger'
};

export const VisualTestGhostDangerVariant = Default.bind();
VisualTestGhostDangerVariant.storyName = 'Render the ghost danger variant';
VisualTestGhostDangerVariant.args = {
  ...Default.args,
  default: 'Ghost danger button',
  variant: 'ghost-danger'
};

export const VisualTestContrastVariant = Default.bind();
VisualTestContrastVariant.storyName = 'Render the contrast variant';
VisualTestContrastVariant.args = {
  ...Default.args,
  default: 'Contrast button',
  variant: 'contrast'
};

export const VisualTestContextVariant = Default.bind();
VisualTestContextVariant.storyName = 'Render the context variant';
VisualTestContextVariant.args = {
  ...Default.args,
  default: 'Context button',
  variant: 'context'
};

export const VisualTestXSmallSize = Default.bind();
VisualTestXSmallSize.storyName = 'Render the x-small size';
VisualTestXSmallSize.args = {
  ...Default.args,
  default: 'X-Small button',
  size: 'x-small'
};

export const VisualTestSmallSize = Default.bind();
VisualTestSmallSize.storyName = 'Render the small size';
VisualTestSmallSize.args = {
  ...Default.args,
  default: 'Small button',
  size: 'small'
};

export const VisualTestLargeSize = Default.bind();
VisualTestLargeSize.storyName = 'Render the large size';
VisualTestLargeSize.args = {
  ...Default.args,
  default: 'Large button',
  size: 'large'
};

export const TestButtonClick = Default.bind();
TestButtonClick.storyName = 'Click the button';
TestButtonClick.args = { ...Default.args, default: 'Test button' };
TestButtonClick.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.click).toHaveBeenCalled();
};

export const TestDisabledButtonClick = Default.bind();
TestDisabledButtonClick.storyName = 'Unable to click on disabled button';
TestDisabledButtonClick.args = {
  ...Default.args,
  default: 'Disabled test button',
  disabled: true
};
TestDisabledButtonClick.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.click).not.toHaveBeenCalled();
};

export const VisualTestDisabledButton = Default.bind();
VisualTestDisabledButton.storyName = 'Render the disabled button';
VisualTestDisabledButton.args = {
  ...Default.args,
  default: 'Disabled button',
  disabled: true,
};

export const VisualTestSquareButton = Default.bind();
VisualTestSquareButton.storyName = 'Render the square button';
VisualTestSquareButton.args = {
  ...Default.args,
  default: 'X',
  square: true,
};

export const VisualTestBlockButton = Default.bind();
VisualTestBlockButton.storyName = 'Render the block button';
VisualTestBlockButton.args = {
  ...Default.args,
  default: 'This should go to full width',
  block: true,
};

export const VisualTestIsLoading = Default.bind();
VisualTestIsLoading.storyName = 'Render the isLoading state';
VisualTestIsLoading.args = {
  ...Default.args,
  default: 'Is loading',
  isLoading: true,
};

export const IsLoadingButton = Default.bind();
IsLoadingButton.storyName = 'Unable to click on isLoading button';
IsLoadingButton.args = {
  ...Default.args,
  default: 'Is loading',
  isLoading: true,
};
IsLoadingButton.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.click).not.toHaveBeenCalled();
};

export const LinkButton = Default.bind();
LinkButton.storyName = 'Redirect to the link';
LinkButton.args = {
  ...Default.args,
  default: 'Go to Shopware',
  link: 'https://www.shopware.com',
};
LinkButton.play = async () => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('button'));

  // TODO: check redirects is currently not supported
};