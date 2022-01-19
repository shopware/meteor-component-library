import SwModal from './sw-modal.vue';

export default {
  title: 'Components/base/sw-modal',
  component: SwModal,
  args: {
    title: 'Modal window',
    size: '',
    variant: 'default',
    isLoading: false,
    selector: 'body',
    showHeader: true,
    closable: true,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'small', 'large', 'full'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwModal },
  template: '<sw-modal v-bind="$props"></sw-modal>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-modal';
