import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwEmailField from './sw-email-field.vue';
import defaultEmailFieldStory, { Default as Template } from './sw-email-field.stories';

export default {
  ...defaultEmailFieldStory,
  title: 'Interaction Tests/Form/sw-email-field',
  component: SwEmailField,
};

export const TestInputValue = Template.bind();
TestInputValue.storyName = 'Should keep input value';
TestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'admin@shopware.com');
  await userEvent.click(canvas.getByText('hidden'));

  expect(canvas.getByRole('textbox').value).toBe('admin@shopware.com');
  // Input to be called once for each letter
  expect(args.input).toHaveBeenCalledTimes(18);
  expect(args.change).toHaveBeenCalledWith('admin@shopware.com');
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

export const VisualTestValidationError = Template.bind();
VisualTestValidationError.storyName = 'Should validate email';
VisualTestValidationError.args = {
  value: 'admin@',
};
VisualTestValidationError.play = async () => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByText("Please enter a part following '@'. 'admin@' is incomplete.")).toBeDefined();
};
