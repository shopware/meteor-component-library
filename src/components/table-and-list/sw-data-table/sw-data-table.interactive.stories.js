import defaultSwDataTableStory, { Default as Template } from './sw-data-table.stories';
import SwDataTableFixtures from './sw-data-table.fixtures.json';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  ...defaultSwDataTableStory,
  title: 'Interaction Tests/Table and list/sw-data-table',
};

export const VisualTestRenderTable = Template.bind();
VisualTestRenderTable.storyName = 'Should render the Table';

export const VisualTestRenderTableStickyHeader = Template.bind();
VisualTestRenderTableStickyHeader.storyName = 'Should render the Table with sticky header';
VisualTestRenderTableStickyHeader.args = {
  dataSource: [
    ...SwDataTableFixtures,
    {
      id: "bbf41666-d40f-44d1-8d31-49daab4fdc87",
      active: false,
      name: "Last product name",
      manufacturer: {
        name: "Last manufacturer",
        translated: {
          name: "Last manufacturer"
        }
      },
      translated: {
        name: "Last product name"
      },
      price: [
        {
          "currencyId": "\"b7d2554b0ce847cd82f3ac9bd1c0dfca\"",
          "gross": 774261,
          "net": 609992,
          "linked": true
        }
      ],
      stock: 409278,
      available: 202164
    }
  ]
};
VisualTestRenderTableStickyHeader.play = async () => {
  const canvas = within(document.getElementById('root'));

  // scroll to bottom
  const swDataTable = document.querySelector('.sw-data-table');
  swDataTable.scrollTop = swDataTable.scrollHeight;

  expect(canvas.getByText('Last product name')).toBeInTheDocument();
};