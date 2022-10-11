import SwSegmentedControlDefaultStory, { Default as Template } from './sw-segmented-control.stories';

export default {
  ...SwSegmentedControlDefaultStory,
  title: 'Interaction Tests/Navigation/sw-segmented-control',
  component: SwSegmentedControlDefaultStory,
};

export const VisualTestRenderSegmentedControl = Template.bind({});
VisualTestRenderSegmentedControl.storyName = 'Render segmented controls';