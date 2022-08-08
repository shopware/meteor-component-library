import SwLoader from './sw-loader.vue';

import defaultLoaderStory, { Default } from './sw-loader.stories';

export default {
  ...defaultLoaderStory,
  title: 'Interaction Tests/Feedback Indicator/sw-loader',
  component: SwLoader,
};

export const VisualTestLoaderAt50 = Default.bind();
VisualTestLoaderAt50.storyName = 'Render loader with 50px';
VisualTestLoaderAt50.args = {
  ...Default.args,
  size: '50px'
};

export const VisualTestLoaderAt90 = Default.bind();
VisualTestLoaderAt90.storyName = 'Render loader with 90px';
VisualTestLoaderAt90.args = {
  ...Default.args,
  size: '90px'
};

export const VisualTestLoaderAt7 = Default.bind();
VisualTestLoaderAt7.storyName = 'Render loader with 7px';
VisualTestLoaderAt7.args = {
  ...Default.args,
  size: '7px'
};
