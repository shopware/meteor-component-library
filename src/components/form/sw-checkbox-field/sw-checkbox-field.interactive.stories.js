import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwCheckboxField from './sw-checkbox-field.vue';
import defaultTextFieldStory, { Default as Template } from './sw-checkbox-field.stories';

export default {
  ...defaultTextFieldStory,
  title: 'Interaction Tests/form/sw-checkbox-field',
  component: SwCheckboxField,
};

export const TestLabel = Template.bind();
TestLabel.storyName = 'Should display label';
TestLabel.args = {
  label: 'label',
};
TestLabel.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.label)).toBeDefined();
};

export const VisualTestCheckable = Template.bind();
VisualTestCheckable.storyName = 'Should be checkable';
VisualTestCheckable.args = {
  label: 'Checked',
};
VisualTestCheckable.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('checkbox'));

  expect(canvas.getByRole('checkbox').checked).toBe(true);
  await expect(args.change).toHaveBeenCalledWith(true);
};

export const VisualTestUncheckable = Template.bind();
VisualTestUncheckable.storyName = 'Should be uncheckable';
VisualTestUncheckable.args = {
  label: 'Unchecked',
  checked: true,
};
VisualTestUncheckable.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('checkbox'));

  expect(canvas.getByRole('checkbox').checked).toBe(false);
  await expect(args.change).toHaveBeenCalledWith(false);
};

export const VisualTestDisabled = Template.bind();
VisualTestDisabled.storyName = 'Should not change value when disabled';
VisualTestDisabled.args = {
  label: 'Disabled',
  disabled: true,
  checked: true,
};
VisualTestDisabled.play = async () => {
  const canvas = within(document.getElementById('root'));

  expect(canvas.getByRole('checkbox').checked).toBe(true);

  await userEvent.click(canvas.getByRole('checkbox'));

  expect(canvas.getByRole('checkbox').checked).toBe(true);
};

export const VisualTestBordered = Template.bind();
VisualTestBordered.storyName = 'Should be bordered';
VisualTestBordered.args = {
  label: 'Bordered',
  bordered: true,
};
VisualTestBordered.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('checkbox'));

  expect(canvas.getByRole('checkbox').checked).toBe(true);
  await expect(args.change).toHaveBeenCalledWith(true);
};

export const VisualTestInherited = Template.bind();
VisualTestInherited.storyName = 'Should trigger inheritance-remove event';
VisualTestInherited.args = {
  label: 'Inherited',
  inheritedValue: false,
};
VisualTestInherited.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));

  await expect(args.inheritanceRemove).toHaveBeenCalledWith(undefined);
};

export const VisualTestError = Template.bind();
VisualTestError.storyName = 'Error should be displayed';
VisualTestError.args = {
  label: 'Error label',
  error: {
    detail: 'Error message',
  },
};
VisualTestError.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.error.detail)).toBeDefined();
};

export const VisualTestBorderedError = Template.bind();
VisualTestBorderedError.storyName = 'Bordered error should be displayed';
VisualTestBorderedError.args = {
  label: 'Bordered error label',
  bordered: true,
  checked: true,
  error: {
    detail: 'Error message',
  },
};
VisualTestBorderedError.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByRole('checkbox').checked).toBe(true);
  await expect(canvas.getByText(args.error.detail)).toBeDefined();
};

export const VisualTestHelpText = Template.bind();
VisualTestHelpText.storyName = 'Help text should be displayed';
VisualTestHelpText.args = {
  label: 'Help text label',
  helpText: 'Help text message',
};
VisualTestHelpText.play = async () => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByRole('checkbox').checked).toBe(false);
  await expect(canvas.getByTestId('sw-help-text__icon')).toBeDefined();

  await userEvent.click(canvas.getByTestId('sw-help-text__icon'));
};

export const VisualTestPartialChecked = Template.bind();
VisualTestPartialChecked.storyName = 'Partial checked should be displayed';
VisualTestPartialChecked.args = {
  label: 'Partial checked label',
  partial: true,
  checked: true,
};
VisualTestPartialChecked.play = async () => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByRole('checkbox').checked).toBe(true);
};
