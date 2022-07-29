import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwDatepicker from './sw-datepicker.vue';
import defaultDatepickerStory, { Default as Template } from './sw-datepicker.stories';

export default {
  ...defaultDatepickerStory,
  title: 'Interaction Tests/form/sw-datepicker',
  component: SwDatepicker,
};

export const VisualTestDatepickerShouldOpen = Template.bind();
VisualTestDatepickerShouldOpen.storyName = 'Should open datepicker';
VisualTestDatepickerShouldOpen.args = {
  ...Template.args,
  value: new Date (Date.UTC(2012, 1, 21)).toISOString(),
}
VisualTestDatepickerShouldOpen.play = async () => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  // Open datepicker
  await userEvent.click(canvas.getByRole('textbox'));

  const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

  // Expect input event is triggered
  await expect(calendar).toBeDefined();
};

export const VisualTestDateInputValue = Template.bind();
VisualTestDateInputValue.storyName = 'Should input date value';
VisualTestDateInputValue.args = {
  label: 'Date value',
  dateType: 'date',
};
VisualTestDateInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));
  const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

  // Open datepicker
  await userEvent.click(canvas.getByRole('textbox'));

  // Click the 24th of month XYZ
  await userEvent.click(calendar.getByText('24'));

  // Click label to close datepicker
  await userEvent.click(canvas.getByText(args.label));

  // Expect input value to be the 24th of month XYZ
  expect(canvas.getByRole('textbox').value).toMatch(/\d{4}-\d{2}-24/);

  // Expect input event is triggered
  await expect(args.input).toHaveBeenCalled();
};

export const VisualTestTimeInputValue = Template.bind();
VisualTestTimeInputValue.storyName = 'Should input time value';
VisualTestTimeInputValue.args = {
  label: 'Time value',
  dateType: 'time',
  config: {
    'time_24hr': true,
  }
};
VisualTestTimeInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));
  const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

  // Open datepicker
  await userEvent.click(canvas.getByRole('textbox'));

  // Enter 22 as hour
  await userEvent.clear(calendar.getByLabelText('Hour'));
  await userEvent.type(calendar.getByLabelText('Hour'), '22');

  // Enter 22 as minute
  await userEvent.clear(calendar.getByLabelText('Minute'));
  await userEvent.type(calendar.getByLabelText('Minute'), '22');

  // Click label to close datepicker
  await userEvent.click(canvas.getByText(args.label));

  // Expect input value to be the 24th of month XYZ
  expect(canvas.getByRole('textbox').value).toBe('22:22');
};

export const VisualTestDateTimeInputValue = Template.bind();
VisualTestDateTimeInputValue.storyName = 'Should input datetime value';
VisualTestDateTimeInputValue.args = {
  label: 'Time value',
  dateType: 'datetime',
  config: {
    'time_24hr': true,
  }
};
VisualTestDateTimeInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));
  const calendar = within(document.getElementsByClassName('flatpickr-calendar')[0]);

  // Open datepicker
  await userEvent.click(canvas.getByRole('textbox'));

  // Click the 24th of month XYZ
  await userEvent.click(calendar.getByText('24'));

  // Enter 22 as hour
  await userEvent.clear(calendar.getByLabelText('Hour'));
  await userEvent.type(calendar.getByLabelText('Hour'), '22');

  // Enter 22 as minute
  await userEvent.clear(calendar.getByLabelText('Minute'));
  await userEvent.type(calendar.getByLabelText('Minute'), '22');

  // Click label to close datepicker
  await userEvent.click(canvas.getByText(args.label));

  // Expect input value to be the 24th of month XYZ 22:22 (time)
  expect(canvas.getByRole('textbox').value).toMatch(/\d{4}-\d{2}-24 22:22/);
};

export const TestClearInputValue = Template.bind();
TestClearInputValue.storyName = 'Should clear input value';
TestClearInputValue.args = {
  label: 'Datepicker',
  value: new Date (Date.UTC(2012, 1, 21)).toISOString(),
};
TestClearInputValue.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  // The 21st of February 2012 is correct because the Date constructor takes the month as 0-based
  expect(canvas.getByRole('textbox').value).toBe('2012-02-21');

  await userEvent.click(canvas.getByTestId('sw-datepicker-clear-button'));

  // We need to loose focus
  await userEvent.click(canvas.getByText(args.label));

  expect(canvas.getByRole('textbox').value).toBe('');
};

export const TestDisabledDoesNotOpenFlatpickr = Template.bind();
TestDisabledDoesNotOpenFlatpickr.storyName = 'Should not open flatpickr when disabled';
TestDisabledDoesNotOpenFlatpickr.args = {
  label: 'Disabled',
  disabled: true,
};
TestDisabledDoesNotOpenFlatpickr.play = async () => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  // Try to open datepicker
  await userEvent.click(canvas.getByRole('textbox'));

  expect(canvas.getByRole('textbox').disabled).toBe(true);
};
