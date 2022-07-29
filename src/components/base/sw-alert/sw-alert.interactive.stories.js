import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import DefaultAlertStory, { Default as Template } from './sw-alert.stories'

export default {
  ...DefaultAlertStory,
  title: 'Interaction Tests/base/sw-alert',
};

export const VisualTestAlertInfo = Template.bind({});
VisualTestAlertInfo.storyName = 'Alert info';
VisualTestAlertInfo.args = {
  ...Template.args,
  variant: 'info'
};

export const VisualTestAlertWarning = Template.bind({});
VisualTestAlertWarning.storyName = 'Alert warning';
VisualTestAlertWarning.args = {
  ...Template.args,
  variant: 'warning'
};

export const VisualTestAlertError = Template.bind({});
VisualTestAlertError.storyName = 'Alert error';
VisualTestAlertError.args = {
  ...Template.args,
  variant: 'error'
};

export const VisualTestAlertSuccess = Template.bind({});
VisualTestAlertSuccess.storyName = 'Alert success';
VisualTestAlertSuccess.args = {
  ...Template.args,
  variant: 'success'
};

export const VisualTestAlertInfoNotification = Template.bind({});
VisualTestAlertInfoNotification.storyName = 'Alert info notification';
VisualTestAlertInfoNotification.args = {
  ...Template.args,
  variant: 'info',
  appearance: 'notification'
};

export const VisualTestAlertWarningNotification = Template.bind({});
VisualTestAlertWarningNotification.storyName = 'Alert warning notification';
VisualTestAlertWarningNotification.args = {
  ...Template.args,
  variant: 'warning',
  appearance: 'notification'
};

export const VisualTestAlertErrorNotification = Template.bind({});
VisualTestAlertErrorNotification.storyName = 'Alert error notification';
VisualTestAlertErrorNotification.args = {
  ...Template.args,
  variant: 'error',
  appearance: 'notification'
};

export const VisualTestAlertSuccessNotification = Template.bind({});
VisualTestAlertSuccessNotification.storyName = 'Alert success notification';
VisualTestAlertSuccessNotification.args = {
  ...Template.args,
  variant: 'success',
  appearance: 'notification'
};

export const VisualTestAlertInfoSystem = Template.bind({});
VisualTestAlertInfoSystem.storyName = 'Alert info system';
VisualTestAlertInfoSystem.args = {
  ...Template.args,
  variant: 'info',
  appearance: 'system'
};

export const VisualTestAlertWarningSystem = Template.bind({});
VisualTestAlertWarningSystem.storyName = 'Alert warning system';
VisualTestAlertWarningSystem.args = {
  ...Template.args,
  variant: 'warning',
  appearance: 'system'
};

export const VisualTestAlertErrorSystem = Template.bind({});
VisualTestAlertErrorSystem.storyName = 'Alert error system';
VisualTestAlertErrorSystem.args = {
  ...Template.args,
  variant: 'error',
  appearance: 'system'
};

export const VisualTestAlertSuccessSystem = Template.bind({});
VisualTestAlertSuccessSystem.storyName = 'Alert success system';
VisualTestAlertSuccessSystem.args = {
  ...Template.args,
  variant: 'success',
  appearance: 'system'
};

export const VisualTestRenderWithoutIcon = Template.bind({});
VisualTestRenderWithoutIcon.storyName = 'Render alert without icon';
VisualTestRenderWithoutIcon.args = {
  ...Template.args,
  hideIcon: true,
};

export const CloseAlertBox = Template.bind({});
CloseAlertBox.storyName = 'Close the alert box';
CloseAlertBox.args = {
  ...Template.args,
  closable: true,
};
CloseAlertBox.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(args.close).not.toHaveBeenCalled();

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.close).toHaveBeenCalled();
};