import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { waitUntilRendered } from '../../../_internal/test-helper'
import SwIconDefaultStory, { Default as Template } from './sw-icon.stories';

export default {
  ...SwIconDefaultStory,
  title: 'Interaction Tests/Icons & Media/sw-icon',
}

export const VisualTestRenderIcon = Template.bind({});
VisualTestRenderIcon.storyName = 'Render icon';
VisualTestRenderIcon.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));

  expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
}

export const VisualTestRenderCalendarIcon = Template.bind({});
VisualTestRenderCalendarIcon.storyName = 'Render calendar icon';
VisualTestRenderCalendarIcon.args = {
  ...Template.args,
  name: 'regular-calendar',
};
VisualTestRenderCalendarIcon.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-calendar'));

  expect(canvas.findByTestId('sw-icon__regular-calendar')).toBeDefined();
}

export const VisualTestRenderIconInYellow = Template.bind({});
VisualTestRenderIconInYellow.storyName = 'Render icon in yellow';
VisualTestRenderIconInYellow.args = {
  ...Template.args,
  color: 'yellow',
};
VisualTestRenderIconInYellow.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));

  expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
  expect((await canvas.findByTestId('sw-icon__regular-products')).style.color).toBe('yellow');
}

export const VisualTestRenderIconInHidden = Template.bind({});
VisualTestRenderIconInHidden.storyName = 'Render icon in hidden';
VisualTestRenderIconInHidden.args = {
  ...Template.args,
  decorative: true
};
VisualTestRenderIconInHidden.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));

  expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
  expect((await canvas.findByTestId('sw-icon__regular-products')).ariaHidden).toBe('true');
}
