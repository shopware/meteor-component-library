import SwSkeletonBar from './sw-skeleton-bar';

export default {
  title: 'Components/Feedback Indicator/sw-skeleton-bar',
  component: SwSkeletonBar
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSkeletonBar },
  template: `
    <div style="width: 500px; margin-top: 50px; margin-left: 50px;">
      <sw-skeleton-bar v-bind="$props"></sw-skeleton-bar>
    </div>
  `,
});

export const Default = Template.bind({});
Default.storyName = 'sw-skeleton-bar';