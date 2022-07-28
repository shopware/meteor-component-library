import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwNumberField from './sw-number-field.vue';
import defaultNumberFieldStory, { Default as Template } from './sw-number-field.stories';

export default {
  ...defaultNumberFieldStory,
  title: 'Interaction Tests/form/sw-number-field',
  component: SwNumberField,
};

export const TestInputValue = Template.bind();
TestInputValue.storyName = 'Should keep input value';
TestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.type(canvas.getByRole('textbox'), '42');
  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('42');
  expect(args.change).toHaveBeenCalledWith(42);
};

export const TestIncreaseByKeyStroke = Template.bind();
TestIncreaseByKeyStroke.storyName = 'Should increase value by key stroke';
TestIncreaseByKeyStroke.args = {
  value: 10,
};
TestIncreaseByKeyStroke.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('11');
  expect(args.change).toHaveBeenCalledWith(11);
};

export const TestIncreaseByControl = Template.bind();
TestIncreaseByControl.storyName = 'Should increase value by control';
TestIncreaseByControl.args = {
  value: 10,
};
TestIncreaseByControl.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('11');
  expect(args.change).toHaveBeenCalledWith(11);
};

export const TestDecreaseByKeyStroke = Template.bind();
TestDecreaseByKeyStroke.storyName = 'Should decrease value by key stroke';
TestDecreaseByKeyStroke.args = {
  value: 10,
};
TestDecreaseByKeyStroke.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.type(canvas.getByRole('textbox'), '{arrowdown}');

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('9');
  expect(args.change).toHaveBeenCalledWith(9);
};

export const TestDecreaseByControl = Template.bind();
TestDecreaseByControl.storyName = 'Should decrease value by control';
TestDecreaseByControl.args = {
  value: 10,
};
TestDecreaseByControl.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-number-field-decrease-button'));

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('9');
  expect(args.change).toHaveBeenCalledWith(9);
};

export const TestStepIncrease = Template.bind();
TestStepIncrease.storyName = 'Should increase float step';
TestStepIncrease.args = {
  value: 10,
  step: 0.7,
  numberType: 'float',
  fillDigits: true,
};
TestStepIncrease.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
  await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('11.40');
  expect(args.change).toHaveBeenCalledWith(11.4);
};

export const TestDecreaseConsidersMin = Template.bind();
TestDecreaseConsidersMin.storyName = 'Should not decrease below min';
TestDecreaseConsidersMin.args = {
  value: 11,
  min: 10,
};
TestDecreaseConsidersMin.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-number-field-decrease-button'));
  await userEvent.type(canvas.getByRole('textbox'), '{arrowdown}');

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('10');
  expect(args.change).toHaveBeenCalledWith(10);
};

export const TestIncreaseConsiderMax = Template.bind();
TestIncreaseConsiderMax.storyName = 'Should not increase above max';
TestIncreaseConsiderMax.args = {
  value: 9,
  max: 10,
};
TestIncreaseConsiderMax.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-number-field-increase-button'));
  await userEvent.type(canvas.getByRole('textbox'), '{arrowup}');

  await userEvent.click(canvas.getByText('hidden'));

  // Notice that the value is of type string and the value of the event is of type number
  expect(canvas.getByRole('textbox').value).toBe('10');
  expect(args.change).toHaveBeenCalledWith(10);
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
  value: 44,
}
VisualTestDisabled.play = async () => {
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), '1337');

  expect(canvas.getByRole('textbox').value).toBe('44')
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
