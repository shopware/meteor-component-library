import SwHighlightText from './sw-highlight-text.vue';

export default {
  title: 'Components/base/sw-highlight-text',
  component: SwHighlightText,
  args: {
    text: 'Lorem ipsum dolor sit amet',
  },
  argTypes: {
    searchTerm: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwHighlightText },
  template: '<sw-highlight-text v-bind="$props"></sw-highlight-text>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-highlight-text';
