import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwPasswordField from './sw-password-field';
import defaultStory, { Default as Template } from './sw-password-field.stories';

export default {
  ...defaultStory,
  title: 'Interaction Tests/Form/sw-password-field',
  component: SwPasswordField,
};

const password = 'S3cr3tfor3$t';

export const TestInputValue = Template.bind();
TestInputValue.storyName = 'Should keep input value';
TestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByLabelText(args.label), password);
  await userEvent.click(canvas.getByText('hidden'));

  expect(canvas.getByLabelText(args.label).value).toBe(password);

  expect(args.change).toHaveBeenCalledWith(password);
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

export const TestPlaceholder = Template.bind();
TestPlaceholder.storyName = 'Should display placeholder';
TestPlaceholder.args = {
  placeholder: 'Placeholder',
};
TestPlaceholder.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(canvas.getByPlaceholderText(args.placeholder)).toBeDefined();
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

export const VisualTestDisabled = Template.bind();
VisualTestDisabled.storyName = 'Should disable';
VisualTestDisabled.args = {
  disabled: true,
  value: password
}
VisualTestDisabled.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByLabelText(args.label), '1337');

  expect(canvas.getByLabelText(args.label).value).toBe(password)
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

export const VisualTestShowPassword = Template.bind();
VisualTestShowPassword.storyName = 'Should show password';
VisualTestShowPassword.args = {
  value: password
};
VisualTestShowPassword.play = async () => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-password-field-show-button'));
};
