import { within, userEvent, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwColorpicker from './sw-colorpicker.vue';
import defaultColorpickerStory, { Default } from './sw-colorpicker.stories';

export default {
  ...defaultColorpickerStory,
  title: 'Interaction Tests/Form/sw-colorpicker',
  component: SwColorpicker,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwColorpicker },
  template: '<sw-colorpicker v-bind="$props"></sw-colorpicker>',
});

export const VisualTestRenderColorpicker = Template.bind({});
VisualTestRenderColorpicker.storyName = 'Render colorpicker';
VisualTestRenderColorpicker.args = {
  ...Default.args,
};

export const VisualTestOpenColorpicker = Template.bind({});
VisualTestOpenColorpicker.storyName = 'Open colorpicker';
VisualTestOpenColorpicker.args = {
  ...Default.args,
  value: 'rgba(72, 228, 37, 0.81)'
};
VisualTestOpenColorpicker.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const colorRange = await popover.getByLabelText('colorpicker-color-range');
  const alphaRange = await popover.getByLabelText('colorpicker-alpha-range');
  const hexInput = await popover.getByLabelText('hex-value');
  const redInput = await popover.getByLabelText('red-value');
  const greenInput = await popover.getByLabelText('green-value');
  const blueInput = await popover.getByLabelText('blue-value');
  const alphaInput = await popover.getByLabelText('alpha-value');

  expect(colorRange).toBeDefined();
  expect(colorRange.value).toEqual('109');
  expect(alphaRange).toBeDefined();
  expect(alphaRange.value).toEqual('0.81');

  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#48e425cf');
  expect(redInput).toBeDefined();
  expect(redInput.value).toEqual('72');
  expect(greenInput).toBeDefined();
  expect(greenInput.value).toEqual('228');
  expect(blueInput).toBeDefined();
  expect(blueInput.value).toEqual('37');
  expect(alphaInput).toBeDefined();
  expect(alphaInput.value).toEqual('81');
};

export const VisualTestChangeColorpickerColor = Template.bind({});
VisualTestChangeColorpickerColor.storyName = 'Change colorpicker color';
VisualTestChangeColorpickerColor.args = {
  ...Default.args,
  value: 'rgba(72, 228, 37, 0.81)'
};
VisualTestChangeColorpickerColor.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const colorRange = await popover.getByLabelText('colorpicker-color-range');
  const alphaRange = await popover.getByLabelText('colorpicker-alpha-range');
  const hexInput = await popover.getByLabelText('hex-value');
  const redInput = await popover.getByLabelText('red-value');
  const greenInput = await popover.getByLabelText('green-value');
  const blueInput = await popover.getByLabelText('blue-value');
  const alphaInput = await popover.getByLabelText('alpha-value');

  expect(colorRange).toBeDefined();
  expect(colorRange.value).toEqual('109');
  expect(alphaRange).toBeDefined();
  expect(alphaRange.value).toEqual('0.81');

  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#48e425cf');
  expect(redInput).toBeDefined();
  expect(redInput.value).toEqual('72');
  expect(greenInput).toBeDefined();
  expect(greenInput.value).toEqual('228');
  expect(blueInput).toBeDefined();
  expect(blueInput.value).toEqual('37');
  expect(alphaInput).toBeDefined();
  expect(alphaInput.value).toEqual('81');

  // Change colors
  await fireEvent.input(colorRange, { target: { value: 300 } })
  await fireEvent.input(alphaRange, { target: { value: 1 } })

  expect(colorRange.value).toEqual('300');
  expect(alphaRange.value).toEqual('1');

  await userEvent.clear(redInput);
  await userEvent.type(redInput, '240');

  await userEvent.clear(greenInput);
  await userEvent.type(greenInput, '60');

  await userEvent.clear(blueInput);
  await userEvent.type(blueInput, '150');

  expect(redInput.value).toEqual('240');
  expect(greenInput.value).toEqual('60');
  expect(blueInput.value).toEqual('150');

  expect(hexInput.value).toEqual('#f03c96');
};

export const VisualTestChangeColorpickerLabel = Template.bind({});
VisualTestChangeColorpickerLabel.storyName = 'Change colorpicker label';
VisualTestChangeColorpickerLabel.args = {
  ...Default.args,
  label: 'Another label'
};

export const VisualTestChangeColorpickerOutputHex = Template.bind({});
VisualTestChangeColorpickerOutputHex.storyName = 'Change colorpicker output to HEX';
VisualTestChangeColorpickerOutputHex.args = {
  ...Default.args,
  label: 'Should output HEX',
  colorOutput: 'hex'
};
VisualTestChangeColorpickerOutputHex.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff5');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('#0fcff5');
};

export const VisualTestChangeColorpickerOutputHsl = Template.bind({});
VisualTestChangeColorpickerOutputHsl.storyName = 'Change colorpicker output to HSL';
VisualTestChangeColorpickerOutputHsl.args = {
  ...Default.args,
  label: 'Should output HSL',
  colorOutput: 'hsl'
};
VisualTestChangeColorpickerOutputHsl.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff5');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('hsl(190, 92%, 51%)');
};

export const VisualTestChangeColorpickerOutputRgb = Template.bind({});
VisualTestChangeColorpickerOutputRgb.storyName = 'Change colorpicker output to RGB';
VisualTestChangeColorpickerOutputRgb.args = {
  ...Default.args,
  label: 'Should output RGB',
  colorOutput: 'rgb'
};
VisualTestChangeColorpickerOutputRgb.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff5');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('rgb(15, 207, 245)');
};

export const VisualTestChangeColorpickerOutputHexAlpha = Template.bind({});
VisualTestChangeColorpickerOutputHexAlpha.storyName = 'Change colorpicker output to HEX alpha';
VisualTestChangeColorpickerOutputHexAlpha.args = {
  ...Default.args,
  label: 'Should output HEX',
  value: '#0fcff582',
  colorOutput: 'hex'
};
VisualTestChangeColorpickerOutputHexAlpha.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff582');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('#0fcff582');
};

export const VisualTestChangeColorpickerOutputHslAlpha = Template.bind({});
VisualTestChangeColorpickerOutputHslAlpha.storyName = 'Change colorpicker output to HSL alpha';
VisualTestChangeColorpickerOutputHslAlpha.args = {
  ...Default.args,
  label: 'Should output HSL',
  value: '#0fcff582',
  colorOutput: 'hsl'
};
VisualTestChangeColorpickerOutputHslAlpha.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff582');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('hsla(190, 92%, 51%, 0.51)');
};

export const VisualTestChangeColorpickerOutputRgbAlpha = Template.bind({});
VisualTestChangeColorpickerOutputRgbAlpha.storyName = 'Change colorpicker output to RGB alpha';
VisualTestChangeColorpickerOutputRgbAlpha.args = {
  ...Default.args,
  label: 'Should output RGB',
  value: '#0fcff582',
  colorOutput: 'rgb'
};
VisualTestChangeColorpickerOutputRgbAlpha.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff582');

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  expect(colorValue).toBeDefined();
  expect(colorValue.value).toEqual('rgba(15, 207, 245, 0.51)');
};

export const VisualTestColorpickerWithoutAlpha = Template.bind({});
VisualTestColorpickerWithoutAlpha.storyName = 'Render colorpicker without alpha';
VisualTestColorpickerWithoutAlpha.args = {
  ...Default.args,
  label: 'Should render without alpha value',
  alpha: false,
};
VisualTestColorpickerWithoutAlpha.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff5');

  const alphaInput = await popover.queryByLabelText('alpha-value');
  expect(alphaInput).toEqual(null);
};

export const VisualTestColorpickerDisabled = Template.bind({});
VisualTestColorpickerDisabled.storyName = 'Render disabled colorpicker';
VisualTestColorpickerDisabled.args = {
  ...Default.args,
  label: 'Should render disabled colorpicker',
  disabled: true,
};
VisualTestColorpickerDisabled.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Expect no popover
  expect(document.getElementsByClassName('sw-popover__wrapper').length).toEqual(0);
};

export const VisualTestColorpickerClearValue = Template.bind({});
VisualTestColorpickerClearValue.storyName = 'Clear colorpicker value';
VisualTestColorpickerClearValue.args = {
  ...Default.args,
  label: 'Should clear colorpicker value',
};
VisualTestColorpickerClearValue.play = async () => {
  const canvas = within(document.getElementById('root'));

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  await userEvent.clear(colorValue)

  expect(colorValue.value).toEqual('');
};

export const VisualTestColorpickerReadonly = Template.bind({});
VisualTestColorpickerReadonly.storyName = 'Render readonly colorpicker';
VisualTestColorpickerReadonly.args = {
  ...Default.args,
  label: 'Should render readonly colorpicker',
  readonly: true,
};
VisualTestColorpickerReadonly.play = async () => {
  const canvas = within(document.getElementById('root'));

  const colorValue = await canvas.getByLabelText('colorpicker-color-value');
  await userEvent.clear(colorValue)

  expect(colorValue.value).toEqual('#0fcff5');
};

export const VisualTestColorpickerDisabledColorLabels = Template.bind({});
VisualTestColorpickerDisabledColorLabels.storyName = 'Render colorpicker without color labels';
VisualTestColorpickerDisabledColorLabels.args = {
  ...Default.args,
  label: 'Should render colorpicker without color labels',
  colorLabels: false,
};
VisualTestColorpickerDisabledColorLabels.play = async () => {
  const canvas = within(document.getElementById('root'));

  const pickerToggle = await canvas.getByLabelText('colorpicker-toggle');

  await userEvent.click(pickerToggle);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const hexInput = await popover.getByLabelText('hex-value');
  expect(hexInput).toBeDefined();
  expect(hexInput.value).toEqual('#0fcff5');

  const hexLabel = await popover.queryByText('HEX');
  const rLabel = await popover.queryByText('R');
  const gLabel = await popover.queryByText('G');
  const bLabel = await popover.queryByText('B');
  const alphaLabel = await popover.queryByText('Alpha');


  expect(hexLabel).toEqual(null);
  expect(rLabel).toEqual(null);
  expect(gLabel).toEqual(null);
  expect(bLabel).toEqual(null);
  expect(alphaLabel).toEqual(null);
};

export const VisualTestColorpickerWithHelpText = Template.bind({});
VisualTestColorpickerWithHelpText.storyName = 'Render colorpicker with help text';
VisualTestColorpickerWithHelpText.args = {
  ...Default.args,
  helpText: 'Text for helping you',
};
VisualTestColorpickerWithHelpText.play = async () => {
  const canvas = within(document.getElementById('root'));

  const tooltip = await canvas.getByRole('tooltip');

  await userEvent.hover(tooltip);

  // wait until tooltip gets rendered
  await (() => {
    return new Promise((resolve, reject) => {
      const waitUntilElementLoad = (retryTime = 0) => {
        // do not wait longer than 2.5 seconds
        if (retryTime > 100) {
          reject();
        }

        // check for tooltip
        const result = document.querySelector('[aria-label="currently-opened-tooltip"]');

        // retry selection when not found otherwise resolve it
        if (!result) {
          window.setTimeout(() => waitUntilElementLoad(retryTime + 1), 25)
        } else {
          resolve();
        }
      }

      waitUntilElementLoad();
    })
  })()

  const tooltipElement = within(document.querySelector('[aria-label="currently-opened-tooltip"]').parentElement);

  const openedTooltip = await tooltipElement.getByLabelText('currently-opened-tooltip');

  expect(openedTooltip).not.toEqual(null);
  expect(openedTooltip.innerText).toEqual('Text for helping you');
};
