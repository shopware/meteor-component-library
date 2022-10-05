import SwSegmentedControl from './sw-segmented-control.vue';

export default {
  title: 'Components/Navigation/sw-segmented-control',
  component: SwSegmentedControl,
  argTypes: {},
  args: {}
};

const Template = (args, { argTypes }) => ({
  components: { SwSegmentedControl },
  props: Object.keys(argTypes),
  template: `
  <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">
    <sw-segmented-control
      v-bind="$props"
    >
      {{ $props.default}}
    </sw-segmented-control>
  </div>
  `,
});

export const Default = Template.bind();
Default.storyName = 'sw-segmented-control';