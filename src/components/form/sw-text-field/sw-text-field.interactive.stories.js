import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwTextField from './sw-text-field.vue';
import defaultTextFieldStory, { Default as Template } from './sw-text-field.stories';

export default {
  ...defaultTextFieldStory,
  title: 'Interaction Tests/form/sw-text-field',
  component: SwTextField,
};

export const TestInputValue = Template.bind();
TestInputValue.storyName = 'Should keep input value';
TestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
  await userEvent.click(canvas.getByText('hidden'));

  expect(canvas.getByRole('textbox').value).toBe('Shopware');
  await expect(args.change).toHaveBeenCalledWith('Shopware');
};

export const VisualTestPrefix = Template.bind();
VisualTestPrefix.storyName = 'Should display prefix';
VisualTestPrefix.args = {
  prefix: 'prefix',
};
VisualTestPrefix.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.prefix)).toBeDefined();
};

export const VisualTestSuffix = Template.bind();
VisualTestSuffix.storyName = 'Should display suffix';
VisualTestSuffix.args = {
  suffix: 'suffix',
};
VisualTestSuffix.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.suffix)).toBeDefined();
};

export const VisualTestHint = Template.bind();
VisualTestHint.storyName = 'Should display hint';
VisualTestHint.args = {
  hint: 'hint',
};
VisualTestHint.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.hint)).toBeDefined();
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

export const VisualTestDisabled = Template.bind();
VisualTestDisabled.storyName = 'Should disable';
VisualTestDisabled.args = {
  disabled: true,
  value: 'Shopware'
}
VisualTestDisabled.play = async () => {
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), '1337');

  expect(canvas.getByRole('textbox').value).toBe('Shopware')
};

export const TestPlaceholder = Template.bind();
TestPlaceholder.storyName = 'Should display placeholder';
TestPlaceholder.args = {
  placeholder: 'Placeholder',
};
TestPlaceholder.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByPlaceholderText(args.placeholder)).toBeDefined();
};

export const VisualTestError = Template.bind();
VisualTestError.storyName = 'Should display error';
VisualTestError.args = {
  error: {code: 500, detail: "Error while saving!"},
};
VisualTestError.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText(args.error.detail)).toBeDefined();
};

export const TestCopyable = Template.bind();
TestCopyable.storyName = 'Should be able to copy';
TestCopyable.args = {
  copyable: true,
};
TestCopyable.play = async () => {
  // TODO: Currently it is not possible to test Clipboard copying
  //  @see https://github.com/microsoft/playwright/issues/8114
};
