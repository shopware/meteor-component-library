import SwSkeletonBar from './sw-skeleton-bar';

import defaultSkeletonBarStory, { Default } from './sw-skeleton-bar.stories';

export default {
  ...defaultSkeletonBarStory,
  title: 'Interaction Tests/Feedback Indicator/sw-skeleton-bar',
  component: SwSkeletonBar,
};

export const VisualTestSkeletonBar = Default.bind();
VisualTestSkeletonBar.storyName = 'Render the skeleton bar';
VisualTestSkeletonBar.args = {
  ...Default.args,
};