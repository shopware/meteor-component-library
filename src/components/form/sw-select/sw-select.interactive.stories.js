import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwSelect from './sw-select.vue';
import defaultStory, { Default as Template } from './sw-select.stories';

export default {
  ...defaultStory,
  title: 'Interaction Tests/Form/sw-select',
  component: SwSelect,
};

export const TestRemovalOfSelectionByList = Template.bind();
TestRemovalOfSelectionByList.storyName = 'Should remove selections through selection list';
TestRemovalOfSelectionByList.args = {
  value: ['a', 'b', 'd'],
  enableMultiSelection: true,
}
TestRemovalOfSelectionByList.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));

  const popover = within(document.querySelector('.sw-popover__wrapper'));
  await userEvent.click(popover.getByTestId('sw-select-option--a'));

  expect(args.change).toHaveBeenCalledWith(['b', 'd']);
};

export const TestRemoveSelectionByResultItem = Template.bind();
TestRemoveSelectionByResultItem.storyName = 'Should remove selection through result item';
TestRemoveSelectionByResultItem.args = {
  value: ['a', 'b', 'd'],
  enableMultiSelection: true,
}
TestRemoveSelectionByResultItem.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getAllByTestId('dismiss-label')[0]);

  expect(args.change).toHaveBeenCalledWith(['b', 'd']);
};

export const TestClearSelections = Template.bind();
TestClearSelections.storyName = 'Should clear selections';
TestClearSelections.args = {
  value: ['a', 'b', 'd'],
  enableMultiSelection: true,
}
TestClearSelections.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('select-clear-button'));

  expect(args.change).toHaveBeenCalledWith([]);
};

// Visual tests
export const VisualTestSingleSelection = Template.bind();
VisualTestSingleSelection.storyName = 'Should single select';
VisualTestSingleSelection.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));
  await userEvent.type(canvas.getByRole('textbox'), 'A');

  let popover = within(document.querySelector('.sw-popover__wrapper'));
  await userEvent.click(popover.getByTestId('sw-select-option--a'));

  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 1,
    value: 'a',
    label: 'Option A',
  });
  expect(args.change).toHaveBeenCalledWith('a')
  expect(canvas.getByRole('textbox').value).toBe('');

  await userEvent.type(canvas.getByRole('textbox'), 'F');
  popover = within(document.querySelector('.sw-popover__wrapper'));
  await userEvent.click(popover.getByTestId('sw-select-option--f'));

  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 6,
    value: 'f',
    label: 'Option F',
  });
  expect(args.change).toHaveBeenCalledWith('f')
  expect(canvas.getByRole('textbox').value).toBe('');
};

export const VisualTestMultiSelect = Template.bind();
VisualTestMultiSelect.storyName = 'Should multi select';
VisualTestMultiSelect.args = {
  enableMultiSelection: true,
};
VisualTestMultiSelect.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));
  // open selection
  await userEvent.click(canvas.getByRole('textbox'));

  let popover = within(document.querySelector('.sw-popover__wrapper'));
  await userEvent.click(popover.getByTestId('sw-select-option--a'));
  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 1,
    value: 'a',
    label: 'Option A',
  });
  expect(args.change).toHaveBeenCalledWith(['a']);

  await userEvent.click(popover.getByTestId('sw-select-option--b'));
  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 2,
    value: 'b',
    label: 'Option B',
  });
  expect(args.change).toHaveBeenCalledWith(['a', 'b']);

  await userEvent.click(popover.getByTestId('sw-select-option--c'));
  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 3,
    value: 'c',
    label: 'Option C',
  });
  expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c']);

  await userEvent.click(popover.getByTestId('sw-select-option--e'));
  expect(args.itemAdd).toHaveBeenCalledWith({
    id: 5,
    value: 'e',
    label: 'Option E',
  });
  expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c', 'e']);

  await userEvent.click(canvas.getByText('hidden'));
  expect(canvas.getByRole('textbox').value).toBe('');
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
  value: ['a', 'b', 'd'],
  enableMultiSelection: true,
}
VisualTestDisabled.play = async () => {
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));

  const popover = document.querySelector('.sw-popover__wrapper');
  expect(popover).toBe(null);
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

export const VisualTestHighlightSearchTerm = Template.bind();
VisualTestHighlightSearchTerm.storyName = 'Should highlight search term';
VisualTestHighlightSearchTerm.play = async () => {
  const canvas = within(document.getElementById('root'));
  await userEvent.type(canvas.getByRole('textbox'), 'A');

  let popover = within(document.querySelector('.sw-popover__wrapper'));
  expect(popover.getByText('Option A')).toBeDefined();
};

export const VisualTestInherited = Template.bind();
VisualTestInherited.storyName = 'Should trigger inheritance-remove event';
VisualTestInherited.args = {
  label: 'Inherited',
  isInheritanceField: true,
  isInherited: true,
};
VisualTestInherited.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));

  await expect(args.inheritanceRemove).toHaveBeenCalledWith();
};
