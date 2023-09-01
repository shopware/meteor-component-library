import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import SwCard from './sw-card.vue';
import defaultCardStory, { Minimal, Extended } from './sw-card.stories';

export default {
  ...defaultCardStory,
  title: 'Interaction Tests/Layout/sw-card',
  component: SwCard,
};

export const VisualTestMinimalPage = Minimal.bind();
VisualTestMinimalPage.storyName = 'Render a minimal card';
VisualTestMinimalPage.args = { ...Minimal.args };

export const VisualTestExtendedPage = Extended.bind();
VisualTestExtendedPage.storyName = 'Render a extended card';
VisualTestExtendedPage.args = { ...Extended.args };

export const VisualTestExtendedPageWithoutToolbar = Extended.bind();
VisualTestExtendedPageWithoutToolbar.storyName = 'Render a extended card without toolbar';
VisualTestExtendedPageWithoutToolbar.args = {
  ...Extended.args,
  toolbar: null
};

export const VisualTestExtendedPageWithHero = Extended.bind();
VisualTestExtendedPageWithHero.storyName = 'Render a extended card with hero';
VisualTestExtendedPageWithHero.args = {
  ...Extended.args,
  hero: true
};

export const VisualTestExtendedPageWithoutHeaderRight = Extended.bind();
VisualTestExtendedPageWithoutHeaderRight.storyName = 'Render a extended card without headerRight';
VisualTestExtendedPageWithoutHeaderRight.args = {
  ...Extended.args,
  headerRight: null
};

export const VisualTestExtendedPageWithoutTabs = Extended.bind();
VisualTestExtendedPageWithoutTabs.storyName = 'Render a extended card without Tabs';
VisualTestExtendedPageWithoutTabs.args = {
  ...Extended.args,
  tabs: null
};

export const VisualTestExtendedPageWithoutAvatar = Extended.bind();
VisualTestExtendedPageWithoutAvatar.storyName = 'Render a extended card without Avatar';
VisualTestExtendedPageWithoutAvatar.args = {
  ...Extended.args,
  avatar: null
};

export const VisualTestExtendedPageWithoutFooter = Extended.bind();
VisualTestExtendedPageWithoutFooter.storyName = 'Render a extended card without Footer';
VisualTestExtendedPageWithoutFooter.args = {
  ...Extended.args,
  footer: null
};

export const VisualTestExtendedPageWithoutContextActions = Extended.bind();
VisualTestExtendedPageWithoutContextActions.storyName = 'Render a extended card without Context Actions';
VisualTestExtendedPageWithoutContextActions.args = {
  ...Extended.args,
  contextActions: null
};

export const VisualTestExtendedPageWithOpenedContextActions = Extended.bind();
VisualTestExtendedPageWithOpenedContextActions.storyName = 'Render a extended card with opened Context Actions';
VisualTestExtendedPageWithOpenedContextActions.args = {
  ...Extended.args,
};
VisualTestExtendedPageWithOpenedContextActions.play = async () => {
  const canvas = within(document.getElementById('root'));

  const button = await canvas.getByLabelText('Context menu');

  await userEvent.click(button);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__content')[0]);

  const menuItem = await popover.getAllByRole('menuitem');

  await expect(menuItem[0]).toHaveTextContent('Menu Item A');
  await expect(menuItem[1]).toHaveTextContent('Menu Item B');
  await expect(menuItem[2]).toHaveTextContent('Menu Item C');
};
