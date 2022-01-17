import SwAvatar from './sw-avatar.vue';

export default {
  title: 'Components/base/sw-avatar',
  component: SwAvatar,
  args: {
    firstName: 'John',
    lastName: 'Doe',
    variant: 'circle',
    placeholder: false,
  },
  argTypes: {
    color: {
      control: 'color',
    },
    imageUrl: {
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Size of the avatar in px. Use like in css for example: "48px".',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'boolean',
      },
    },
    sourceContext: {
      control: {
        type: 'array',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwAvatar },
  template: '<sw-avatar v-bind="$props"></sw-avatar>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-avatar';
