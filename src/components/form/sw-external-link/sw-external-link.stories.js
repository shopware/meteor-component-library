import SwExternalLink from './sw-external-link.vue';

export default {
  title: 'Components/Form/sw-external-link',
  component: SwExternalLink,
  argTypes: {
    click: {
      action: 'click',
      table: {
        category: 'Events'
      }
    },
  },
  args: {
    small: false,
    rel: 'noopener',
    href: 'https://www.shopware.com',
    disabled: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwExternalLink },
  template: `
    <sw-external-link 
      v-bind="$props"
      @click="click"
    >
      Click here
    </sw-external-link>`,
});

export const Default = Template.bind({});
Default.storyName = 'sw-external-link';
