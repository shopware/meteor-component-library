import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import defaultSearchStory, { Default } from './sw-search.stories';

export default {
  ...defaultSearchStory,
  title: 'Interaction Tests/Navigation/sw-search',
};

export const TestInputValue = Default.bind();
TestInputValue.storyName = 'Should keep input value';
TestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
  await userEvent.click(canvas.getByText('hidden'));

  expect(canvas.getByRole('textbox').value).toBe('Shopware');
  await expect(args.change).toHaveBeenCalledWith('Shopware');
};

export const VisualTestDefaultSize = Default.bind();
VisualTestDefaultSize.storyName = 'Render the default sized search';
VisualTestDefaultSize.args = {
  ...Default.args,
  size: 'default'
};

export const VisualTestSmallSize = Default.bind();
VisualTestSmallSize.storyName = 'Render the small sized search';
VisualTestSmallSize.args = {
  ...Default.args,
  size: 'small'
};

export const VisualTestDefaultSizeDisabled = Default.bind();
VisualTestDefaultSizeDisabled.storyName = 'Render the default sized search disabled';
VisualTestDefaultSizeDisabled.args = {
  ...Default.args,
  size: 'default',
  disabled: true
};

export const VisualTestSmallSizeDisabled = Default.bind();
VisualTestSmallSizeDisabled.storyName = 'Render the small sized search disabled';
VisualTestSmallSizeDisabled.args = {
  ...Default.args,
  size: 'small',
  disabled: true
};