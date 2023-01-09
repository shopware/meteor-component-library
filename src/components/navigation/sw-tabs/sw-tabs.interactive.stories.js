import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { waitUntilRendered } from '../../../_internal/test-helper'
import SwTabs from './sw-tabs.vue';
import defaultTabsStory, { Default } from './sw-tabs.stories';

const tabItems = [
  {
    label: 'Item 1',
    name: 'item1'
  },
  {
    label: 'Item 2 very long',
    name: 'item2'
  },
  {
    label: 'Item 3',
    name: 'item3'
  },
  {
    label: 'Item 4 also very long',
    name: 'item4'
  },
  {
    label: 'Item 5',
    name: 'item5'
  },
  {
    label: 'Item 6',
    name: 'item6'
  },
  {
    label: 'Item 7',
    name: 'item7'
  },
  {
    label: 'Item 8 very long',
    name: 'item8'
  },
  {
    label: 'Item 9',
    name: 'item9'
  },
  {
    label: 'Item 10',
    name: 'item10'
  },
  {
    label: 'Item 11',
    name: 'item11'
  },
  {
    label: 'Item 12',
    name: 'item12'
  },
  {
    label: 'Item 13',
    name: 'item13'
  },
  {
    label: 'Item 14',
    name: 'item14'
  },
  {
    label: 'Item 15',
    name: 'item15'
  },
  {
    label: 'Item 16',
    name: 'item16'
  },
  {
    label: 'Item 17',
    name: 'item17'
  },
]

export default {
  ...defaultTabsStory,
  title: 'Interaction Tests/Navigation/sw-tabs',
  component: SwTabs,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwTabs },
  template: `
  <sw-tabs v-bind="$props"></sw-tabs>`
});

export const VisualTestRenderTabs = Template.bind({});
VisualTestRenderTabs.storyName = 'Render tabs';
VisualTestRenderTabs.args = {
  ...Default.args,
  small: false,
  defaultItem: 'item2',
  items: tabItems.slice(0,2)
};

export const VisualTestRenderTabsVertical = Template.bind({});
VisualTestRenderTabsVertical.storyName = 'Render tabs vertical';
VisualTestRenderTabsVertical.args = {
  ...Default.args,
  vertical: true,
  defaultItem: 'item2',
  items: tabItems.slice(0,2)
};

export const VisualTestRenderTabsFullWidth = Template.bind({});
VisualTestRenderTabsFullWidth.storyName = 'Render tabs in small';
VisualTestRenderTabsFullWidth.args = {
  ...Default.args,
  small: true,
  defaultItem: 'item2',
  items: tabItems.slice(0,2)
};

export const VisualTestRenderManyTabItems = Template.bind({});
VisualTestRenderManyTabItems.storyName = 'Render many tab items';
VisualTestRenderManyTabItems.args = {
  ...Default.args,
  small: true,
  defaultItem: 'item2',
  items: tabItems
};

export const VisualTestRenderTabsWithError = Template.bind({});
VisualTestRenderTabsWithError.storyName = 'Render tabs with error';
VisualTestRenderTabsWithError.args = {
  ...Default.args,
  small: true,
  defaultItem: 'item5',
  items: [
    ...tabItems.slice(0,4),
    {
      label: 'Item with error',
      name: 'item5',
      hasError: true,
    }
  ]
};

export const VisualTestRenderContextTabWithError = Template.bind({});
VisualTestRenderContextTabWithError.storyName = 'Render context tab with error';
VisualTestRenderContextTabWithError.args = {
  ...Default.args,
  defaultItem: 'itemWithError',
  small: true,
  items: [
    ...tabItems,
    {
      label: 'Item with error',
      name: 'itemWithError',
      hasError: true,
    }
  ]
};

export const VisualTestRenderContextTabWithActiveItem = Template.bind({});
VisualTestRenderContextTabWithActiveItem.storyName = 'Render context tab with active item inside';
VisualTestRenderContextTabWithActiveItem.args = {
  ...Default.args,
  defaultItem: 'item1',
  small: true,
  items: [
    {
      label: 'Context tab test',
      name: 'contextTabTest',
    },
    ...tabItems.slice(0, 10)
  ]
};
VisualTestRenderContextTabWithActiveItem.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.body.textContent.includes('Context tab test'));
  await waitUntilRendered(() => document.querySelector('.sw-context-button__button'));

  const button = await canvas.getByRole('button');

  await userEvent.click(button);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const menuItem = await popover.getAllByRole('tab');

  await expect(menuItem[4]).toHaveTextContent('Item 9');

  await userEvent.click(menuItem[4]);

  expect(document.getElementsByClassName('sw-popover__wrapper').length).toEqual(0);
};

export const VisualTestRenderTabsWithPositiveBadge = Template.bind({});
VisualTestRenderTabsWithPositiveBadge.storyName = 'Render tabs with positive badge';
VisualTestRenderTabsWithPositiveBadge.args = {
  ...Default.args,
  small: true,
  defaultItem: 'badgeItem',
  items: [
    ...tabItems.slice(0,4),
    {
      label: 'Item with positive badge',
      name: 'badgeItem',
      badge: 'positive'
    },
    ...tabItems.slice(5),
  ]
};

export const VisualTestRenderTabsWithInfoBadge = Template.bind({});
VisualTestRenderTabsWithInfoBadge.storyName = 'Render tabs with info badge';
VisualTestRenderTabsWithInfoBadge.args = {
  ...Default.args,
  small: true,
  defaultItem: 'badgeItem',
  items: [
    ...tabItems.slice(0,4),
    {
      label: 'Item with info badge',
      name: 'badgeItem',
      badge: 'info'
    },
    ...tabItems.slice(5),
  ]
};

export const VisualTestRenderTabsWithContextMenuBadge = Template.bind({});
VisualTestRenderTabsWithContextMenuBadge.storyName = 'Render tabs with badge in context menu';
VisualTestRenderTabsWithContextMenuBadge.args = {
  ...Default.args,
  small: true,
  defaultItem: 'item5',
  items: [
    {
      label: 'Context tab test',
      name: 'contextTabTest',
    },
    ...tabItems.slice(0,8),
    {
      label: 'Item with critical badge',
      name: 'badgeItem',
      badge: 'critical'
    },
    ...tabItems.slice(9),
  ]
};
VisualTestRenderTabsWithContextMenuBadge.play = async () => {
  const canvas = within(document.getElementById('root'));

  // wait until tab bar is loaded and context button gets rendered
  await waitUntilRendered(() => document.body.textContent.includes('Context tab test'));
  await waitUntilRendered(() => document.querySelector('button'));

  const button = await canvas.getByRole('button');

  await userEvent.click(button);

  // Look inside the popover
  const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);

  const menuItem = await popover.getAllByRole('tab');

  await expect(menuItem[4]).toHaveTextContent('Item with critical badge');
};
