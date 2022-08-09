import SwTooltipDefaultStory, { Default as Template } from './tooltip.stories';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { waitUntilRendered } from '../_internal/test-helper'

export default {
  ...SwTooltipDefaultStory,
  title: 'Interaction Tests/Directives/Tooltip',
}

export const VisualTestRenderIcon = Template.bind({});
VisualTestRenderIcon.storyName = 'Render icon';

export const VisualTestRenderTooltip = Template.bind({});
VisualTestRenderTooltip.storyName = 'Render tooltip';
VisualTestRenderTooltip.args = {
  message: 'This is the help text',
};
VisualTestRenderTooltip.play = async () => {
  const canvas = within(document.getElementById('root'));

  const icon = await canvas.getByTestId('sw-icon__regular-question-circle');

  await userEvent.hover(icon)

  // wait until tooltip is loaded
  await waitUntilRendered(() => document.querySelector('.sw-tooltip'));

  const tooltip = within(document.getElementsByClassName('sw-tooltip')[0]);
  const helpText = await tooltip.getByText('This is the help text');

  expect(helpText).toBeDefined();
};

export const VisualTestRenderTooltipInWide = Template.bind({});
VisualTestRenderTooltipInWide.storyName = 'Render tooltip in wide';
VisualTestRenderTooltipInWide.args = {
  message: 'This is the help text',
  width: 300
};
VisualTestRenderTooltipInWide.play = async () => {
  const canvas = within(document.getElementById('root'));

  const icon = await canvas.getByTestId('sw-icon__regular-question-circle');

  await userEvent.hover(icon)

  // wait until tooltip is loaded
  await waitUntilRendered(() => document.querySelector('.sw-tooltip'));

  const tooltip = within(document.getElementsByClassName('sw-tooltip')[0]);
  const helpText = await tooltip.getByText('This is the help text');

  expect(helpText).toBeDefined();
};