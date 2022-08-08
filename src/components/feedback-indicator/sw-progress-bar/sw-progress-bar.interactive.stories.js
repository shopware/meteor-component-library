import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwProgressBar from './sw-progress-bar.vue';
import defaultProgressBarStory, { Default } from './sw-progress-bar.stories';

export default {
  ...defaultProgressBarStory,
  title: 'Interaction Tests/Feedback Indicator/sw-progress-bar',
  component: SwProgressBar,
};

export const TestValueProgressAt0 = Default.bind();
TestValueProgressAt0.storyName = 'Test value progress at 0';
TestValueProgressAt0.args = {
  ...Default.args,
  value: 0,
  maxValue: 100,
};
TestValueProgressAt0.play = async () => {
  const canvas = within(document.getElementById('root'));

  const progressBar = canvas.getByRole('progressbar');

  expect(progressBar).toBeDefined()
  expect(progressBar.ariaValueNow).toEqual("0")
  expect(progressBar.ariaValueMax).toEqual("100")
};

export const TestValueProgressAt33 = Default.bind();
TestValueProgressAt33.storyName = 'Test value progress at 33';
TestValueProgressAt33.args = {
  ...Default.args,
  value: 33,
  maxValue: 100
};
TestValueProgressAt33.play = async () => {
  const canvas = within(document.getElementById('root'));

  const progressBar = canvas.getByRole('progressbar');

  expect(progressBar).toBeDefined()
  expect(progressBar.ariaValueNow).toEqual("33")
  expect(progressBar.ariaValueMax).toEqual("100")
};

export const TestValueProgressAt70of350 = Default.bind();
TestValueProgressAt70of350.storyName = 'Test value progress at 70 of 350';
TestValueProgressAt70of350.args = {
  ...Default.args,
  value: 70,
  maxValue: 350
};
TestValueProgressAt70of350.play = async () => {
  const canvas = within(document.getElementById('root'));

  const progressBar = canvas.getByRole('progressbar');

  expect(progressBar).toBeDefined()
  expect(progressBar.ariaValueNow).toEqual("70")
  expect(progressBar.ariaValueMax).toEqual("350")
};

export const TestValueProgressAt100 = Default.bind();
TestValueProgressAt100.storyName = 'Test value progress at 100';
TestValueProgressAt100.args = {
  ...Default.args,
  value: 100,
  maxValue: 100
};
TestValueProgressAt100.play = async () => {
  const canvas = within(document.getElementById('root'));

  const progressBar = canvas.getByRole('progressbar');

  expect(progressBar).toBeDefined()
  expect(progressBar.ariaValueNow).toEqual("100")
  expect(progressBar.ariaValueMax).toEqual("100")
};

export const VisualTestError = Default.bind();
VisualTestError.storyName = 'Render error correctly';
VisualTestError.args = {
  ...Default.args,
  error: {
    code: 500,
    detail: 'Error while sending variants'
  }
};
VisualTestError.play = async () => {
  const canvas = within(document.getElementById('root'));

  const errorMessage = canvas.getByLabelText('Error message')

  expect(errorMessage).toBeDefined();
  expect(errorMessage.innerText).toContain('Error while sending variants')

  const progressBar = canvas.getByTestId('progress-bar-value');
  console.dir(progressBar)
  expect(window.getComputedStyle(progressBar).backgroundColor).toEqual('rgb(222, 41, 76)')
};

export const VisualTestLabel = Default.bind();
VisualTestLabel.storyName = 'Render label correctly';
VisualTestLabel.args = {
  ...Default.args,
  label: 'Another example'
};
VisualTestLabel.play = async () => {
  const canvas = within(document.getElementById('root'));

  const label = canvas.getByText('Another example')

  expect(label).toBeDefined();
};

export const VisualTestNoLabel = Default.bind();
VisualTestNoLabel.storyName = 'Render no label';
VisualTestNoLabel.args = {
  ...Default.args,
  label: null
};

export const VisualTestProgressLabelPercentage = Default.bind();
VisualTestProgressLabelPercentage.storyName = 'Render percentage progress label';
VisualTestProgressLabelPercentage.args = {
  ...Default.args,
};
VisualTestProgressLabelPercentage.play = async () => {
  const canvas = within(document.getElementById('root'));

  const label = canvas.getByText('33%')

  expect(label).toBeDefined();
};

export const VisualTestProgressLabelKilobyte = Default.bind();
VisualTestProgressLabelKilobyte.storyName = 'Render kilobyte progress label';
VisualTestProgressLabelKilobyte.args = {
  ...Default.args,
  progressLabelType: 'kb'
};
VisualTestProgressLabelKilobyte.play = async () => {
  const canvas = within(document.getElementById('root'));

  const label = canvas.getByText('121 kb / 356 kb')

  expect(label).toBeDefined();
};

export const VisualTestValueProgressAt10 = Default.bind();
VisualTestValueProgressAt10.storyName = 'Render the progressbar with 10%';
VisualTestValueProgressAt10.args = {
  ...Default.args,
  value: 10,
  maxValue: 100
};

export const VisualTestValueProgressAt50 = Default.bind();
VisualTestValueProgressAt50.storyName = 'Render the progressbar with 50%';
VisualTestValueProgressAt50.args = {
  ...Default.args,
  value: 50,
  maxValue: 100
};

export const VisualTestValueProgressAt100 = Default.bind();
VisualTestValueProgressAt100.storyName = 'Render the progressbar with 100%';
VisualTestValueProgressAt100.args = {
  ...Default.args,
  value: 100,
  maxValue: 100
};

export const VisualTestValueProgressAt100of400 = Default.bind();
VisualTestValueProgressAt100of400.storyName = 'Render the progressbar with 100 of 400 (25%)';
VisualTestValueProgressAt100of400.args = {
  ...Default.args,
  value: 100,
  maxValue: 400
};

export const VisualTestValueProgressAt400of400 = Default.bind();
VisualTestValueProgressAt400of400.storyName = 'Render the progressbar with 400 of 400 (100%)';
VisualTestValueProgressAt400of400.args = {
  ...Default.args,
  value: 400,
  maxValue: 400
};
