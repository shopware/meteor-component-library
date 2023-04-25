import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import DefaultBannerStory, { Default as Template } from './sw-banner.stories'

export default {
  ...DefaultBannerStory,
  title: 'Interaction Tests/Feedback Indicator/sw-banner',
};

export const VisualTestBannerNeutral = Template.bind({});
VisualTestBannerNeutral.storyName = 'Banner neutral';
VisualTestBannerNeutral.args = {
  ...Template.args
};

export const VisualTestBannerInfo = Template.bind({});
VisualTestBannerInfo.storyName = 'Banner info';
VisualTestBannerInfo.args = {
  ...Template.args,
  variant: 'info'
};

export const VisualTestBannerAttention = Template.bind({});
VisualTestBannerAttention.storyName = 'Banner attention';
VisualTestBannerAttention.args = {
  ...Template.args,
  variant: 'attention'
};

export const VisualTestBannerCritical = Template.bind({});
VisualTestBannerCritical.storyName = 'Banner critical';
VisualTestBannerCritical.args = {
  ...Template.args,
  variant: 'critical'
};

export const VisualTestBannerPositive = Template.bind({});
VisualTestBannerPositive.storyName = 'Banner positive';
VisualTestBannerPositive.args = {
  ...Template.args,
  variant: 'positive'
};

export const VisualTestBannerInherited = Template.bind({});
VisualTestBannerInherited.storyName = 'Banner inherited';
VisualTestBannerInherited.args = {
  ...Template.args,
  variant: 'inherited'
};

export const VisualTestRenderWithoutIcon = Template.bind({});
VisualTestRenderWithoutIcon.storyName = 'Render banner without icon';
VisualTestRenderWithoutIcon.args = {
  ...Template.args,
  hideIcon: true,
};

export const VisualTestCloseBannerBox = Template.bind({});
VisualTestCloseBannerBox.storyName = 'Close the banner';
VisualTestCloseBannerBox.args = {
  ...Template.args,
  closable: true,
};
VisualTestCloseBannerBox.play = async ({ args }) => {
  const canvas = within(document.getElementById('root'));

  await expect(args.close).not.toHaveBeenCalled();

  await userEvent.click(canvas.getByRole('button'));

  await expect(args.close).toHaveBeenCalledWith(null);
};
