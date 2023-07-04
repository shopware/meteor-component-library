import SwSegmentedControlDefaultStory, { Default as Template } from './sw-segmented-control.stories';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { waitUntilRendered } from '../../../_internal/test-helper';

export default {
  ...SwSegmentedControlDefaultStory,
  title: 'Interaction Tests/Navigation/sw-segmented-control',
  component: SwSegmentedControlDefaultStory,
};

export const VisualTestRenderSegmentedControl = Template.bind({});
VisualTestRenderSegmentedControl.storyName = 'Render segmented controls';

export const VisualTestRenderSegmentedControlWithContext = Template.bind({});
VisualTestRenderSegmentedControlWithContext.args = {
  disableContext: false,
};
VisualTestRenderSegmentedControlWithContext.storyName = 'Render segmented controls with context';

export const VisualTestRenderSegmentedControlWithPopoverBase = Template.bind({});
VisualTestRenderSegmentedControlWithPopoverBase.storyName = 'Render segmented controls with popover base';
VisualTestRenderSegmentedControlWithPopoverBase.play = async () => {
  const canvas = within(document.getElementById('root'));

  const button = await canvas.getByText('Label F');

  await userEvent.click(button);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__content')[0]);

  const firstLevel = await popover.getByText('First level');
  expect(firstLevel).toBeInTheDocument();
};

export const VisualTestRenderSegmentedControlWithPopoverSecondLevel = Template.bind({});
VisualTestRenderSegmentedControlWithPopoverSecondLevel.storyName = 'Render segmented controls with popover second level';
VisualTestRenderSegmentedControlWithPopoverSecondLevel.play = async () => {
  const canvas = within(document.getElementById('root'));

  const button = await canvas.getByText('Label F');

  await userEvent.click(button);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__content')[0]);

  const goToSecondLevel = await popover.getByText('Go to second level');
  await userEvent.click(goToSecondLevel);

  const secondLevel = await popover.getByText('Second level');
  expect(secondLevel).toBeInTheDocument();

  const goToThirdLevel = await popover.getByText('Go to third level');
  expect(goToThirdLevel).toBeInTheDocument();
};