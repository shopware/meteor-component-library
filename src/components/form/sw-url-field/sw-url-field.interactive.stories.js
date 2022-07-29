import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwUrlField from './sw-url-field.vue';
import defaultUrlFieldStory, { Default as Template } from './sw-url-field.stories';

export default {
  ...defaultUrlFieldStory,
  title: 'Interaction Tests/form/sw-url-field',
  component: SwUrlField,
};

export const Default = Template.bind({});
Default.storyName = 'sw-url-field';

export const VisualTestInputValue = Template.bind();
VisualTestInputValue.storyName = 'Should keep input value';
VisualTestInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.click(canvas.getByRole('textbox'));
  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com');
  await userEvent.click(canvas.getByText('hidden'));

  expect(canvas.getByRole('textbox').value).toBe('shopware.com');
  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
};

export const VisualTestHttpSwitch = Template.bind();
VisualTestHttpSwitch.storyName = 'Should change the ssl switch to http';
VisualTestHttpSwitch.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com');

  expect(canvas.getByText('https://').innerText).toContain('https://')

  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');

  await userEvent.click(canvas.getByRole('button'));
  
  expect(canvas.getByText('http://').innerText).toContain('http://')
  await userEvent.click(canvas.getByText('hidden'));

  expect(args.input).toHaveBeenLastCalledWith('http://shopware.com');
  expect(canvas.getByRole('textbox').value).toBe('shopware.com');
};

export const TestNotOmitUrlHash = Template.bind();
TestNotOmitUrlHash.storyName = 'Should not omit the url hash';
TestNotOmitUrlHash.args = {
  ...Template.args,
  omitUrlHash: false,
};
TestNotOmitUrlHash.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/#content');

  await userEvent.click(canvas.getByText('hidden'));

  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com/#content');
  expect(canvas.getByRole('textbox').value).toBe('shopware.com/#content');
};

export const TestOmitUrlHash = Template.bind();
TestOmitUrlHash.storyName = 'Should omit the url hash';
TestOmitUrlHash.args = {
  ...Template.args,
  omitUrlHash: true,
};
TestOmitUrlHash.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/#content');

  await userEvent.click(canvas.getByText('hidden'));

  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
  expect(canvas.getByRole('textbox').value).toBe('shopware.com');
};

export const TestNotOmitUrlSearch = Template.bind();
TestNotOmitUrlSearch.storyName = 'Should not omit the url search';
TestNotOmitUrlSearch.args = {
  ...Template.args,
  omitUrlSearch: false,
};
TestNotOmitUrlSearch.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/?someValue=5');

  await userEvent.click(canvas.getByText('hidden'));

  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com/?someValue=5');
  expect(canvas.getByRole('textbox').value).toBe('shopware.com/?someValue=5');
};

export const TestOmitUrlSearch = Template.bind();
TestOmitUrlSearch.storyName = 'Should omit the url search';
TestOmitUrlSearch.args = {
  ...Template.args,
  omitUrlSearch: true,
};
TestOmitUrlSearch.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/?someValue=5');

  await userEvent.click(canvas.getByText('hidden'));

  expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
  expect(canvas.getByRole('textbox').value).toBe('shopware.com');
};