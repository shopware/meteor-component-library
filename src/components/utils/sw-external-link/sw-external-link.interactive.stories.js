import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import DefaultExternalLinkStory, { Default as Template } from './sw-external-link.stories';

export default {
  ...DefaultExternalLinkStory,
  title: 'Interaction tests/utils/sw-external-link',
};

export const VisualTestRenderExternalLink = Template.bind({});
VisualTestRenderExternalLink.storyName = 'Render external link';
VisualTestRenderExternalLink.args = {
  ...Template.args,
  href: 'https://developers.shopware.com/'
}

export const VisualTestRenderExternalLinkSmall = Template.bind({});
VisualTestRenderExternalLinkSmall.storyName = 'Render external link in small';
VisualTestRenderExternalLinkSmall.args = {
  ...Template.args,
  small: true,
  href: 'https://developers.shopware.com/'
}

export const VisualTestRenderExternalLinkDisabled = Template.bind({});
VisualTestRenderExternalLinkDisabled.storyName = 'Render disabled external link';
VisualTestRenderExternalLinkDisabled.args = {
  ...Template.args,
  disabled: true,
}
VisualTestRenderExternalLinkDisabled.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  expect(args.click).not.toHaveBeenCalled();
  const link = canvas.getByRole('link');

  expect(getComputedStyle(link).pointerEvents).toEqual('none');
};

export const TestExternalLinkWithoutHref = Template.bind({});
TestExternalLinkWithoutHref.storyName = 'Render external link without href attribute';
TestExternalLinkWithoutHref.args = {
  ...Template.args,
  href: null
}
TestExternalLinkWithoutHref.play = async ({ args }) => {
  // we can't use canvasElement because it is not available anymore
  const canvas = within(document.getElementById('root'));

  expect(args.click).not.toHaveBeenCalled();
  await userEvent.click(canvas.getByRole('link'));
  expect(args.click).toHaveBeenCalled();
};