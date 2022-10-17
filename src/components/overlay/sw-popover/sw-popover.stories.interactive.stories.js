import defaultSwPopoverStory, { Default as Template } from './sw-popover.stories';
import { waitUntilRendered } from '../../../_internal/test-helper'
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  ...defaultSwPopoverStory,
  title: 'Interaction Tests/Overlay/sw-popover',
};

export const VisualTestRenderPopoverTrigger = Template.bind();
VisualTestRenderPopoverTrigger.storyName = 'Should render only the popover trigger';

export const VisualTestRenderPopover = Template.bind();
VisualTestRenderPopover.storyName = 'Should render the popover';
VisualTestRenderPopover.play = async () => {
  const canvas = within(document.getElementById('root'));

  await waitUntilRendered(() => document.body.textContent.includes('Toggle popover'));

  const popoverToggle = canvas.getByText('Toggle popover');
  await userEvent.click(popoverToggle);

  const popover = within(document.querySelector('.sw-floating-ui__content'));
  expect(popover.getByText('Popover example')).toBeInTheDocument();
}

export const VisualTestRenderChildView = Template.bind();
VisualTestRenderChildView.storyName = 'Should render the popover with child view';
VisualTestRenderChildView.play = async () => {
  const canvas = within(document.getElementById('root'));

  await waitUntilRendered(() => document.body.textContent.includes('Toggle popover'));

  const popoverToggle = canvas.getByText('Toggle popover');
  await userEvent.click(popoverToggle);

  const popover = within(document.querySelector('.sw-floating-ui__content'));
  expect(popover.getByText('Popover example')).toBeInTheDocument();

  const columnsItem = popover.getByText('Columns');

  await userEvent.click(columnsItem);
}

export const VisualTestRenderWithoutFloat = Template.bind();
VisualTestRenderWithoutFloat.storyName = 'Should render the popover with disabled float and without trigger';
VisualTestRenderWithoutFloat.args = {
  ...Template.args,
  disableFloat: true,
};
VisualTestRenderWithoutFloat.play = async () => {
  const canvas = within(document.getElementById('root'));

  await waitUntilRendered(() => document.body.textContent.includes('Popover example'));

  expect(canvas.getByText('Popover example')).toBeInTheDocument();
}