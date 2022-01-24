import SwExternalLink from './sw-external-link.vue';

export default {
  title: 'Components/utils/sw-external-link',
  component: SwExternalLink,
  args: {
    small: false,
    icon: 'small-arrow-small-external',
    rel: 'noopener',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwExternalLink },
  template: '<sw-external-link v-bind="$props">Click here</sw-external-link>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-external-link';
