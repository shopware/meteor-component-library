import SwProgressBar from './sw-progress-bar.vue';

export default {
  title: 'Components/Feedback Indicator/sw-progress-bar',
  component: SwProgressBar,
  args: {
    value: 121,
    maxValue: 356,
    label: 'Example progress bar',
    error: null,
    progressLabelType: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwProgressBar },
  template: '<sw-progress-bar v-bind="$props"></sw-progress-bar>',
});

export const Default = Template.bind({});
Default.storyName = 'Minimal';

export const Extended = Template.bind({});
Extended.storyName = 'Extended';
Extended.args = {
  ...Default.args,
  value: 277,
  error: {
    code: 500,
    detail: 'Error while loading'
  },
  progressLabelType: 'kb'
}
