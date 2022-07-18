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
VisualTestGhostVariant.storyName = 'Render primary ghost variant';
VisualTestGhostVariant.args = {
  ...Default.args,
  default: 'Primary ghost button',
  variant: 'primary',
  ghost: true,
};

export const VisualTestSecondaryVariant = Default.bind();
VisualTestSecondaryVariant.storyName = 'Render secondary variant';
VisualTestSecondaryVariant.args = {
  ...Default.args,
  default: 'Secondary button',
  variant: 'secondary',
};

export const VisualTestSecondaryGhostVariant = Default.bind();
VisualTestSecondaryGhostVariant.storyName = 'Render secondary ghost variant';
VisualTestSecondaryGhostVariant.args = {
  ...Default.args,
  default: 'Secondary ghost button',
  variant: 'secondary',
  ghost: true,
};

export const VisualTestCriticalVariant = Default.bind();
VisualTestCriticalVariant.storyName = 'Render the critical variant';
VisualTestCriticalVariant.args = {
  ...Default.args,
  default: 'Critical button',
  variant: 'critical'
};

export const VisualTestCriticalGhostVariant = Default.bind();
VisualTestCriticalGhostVariant.storyName = 'Render the critical ghost variant';
VisualTestCriticalGhostVariant.args = {
  ...Default.args,
  default: 'Critical button',
  variant: 'critical',
  ghost: true,
};

export const VisualTestActionVariant = Default.bind();
VisualTestActionVariant.storyName = 'Render the action variant';
VisualTestActionVariant.args = {
  ...Default.args,
  default: 'Action button',
  variant: 'action'
};

export const VisualTestSmallSize = Default.bind();
VisualTestSmallSize.storyName = 'Render the small size';
VisualTestSmallSize.args = {
  ...Default.args,
  default: 'Small button',
  size: 'small'
};

export const VisualTestDefaultSize = Default.bind();
VisualTestDefaultSize.storyName = 'Render the default size';
VisualTestDefaultSize.args = {
  ...Default.args,
  default: 'Default button',
  size: 'default'
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
