import SwButtonGroup from './sw-button-group.vue';
import SwButton from '../sw-button/sw-button.vue';

export default {
  title: 'Components/base/sw-button-group',
  component: SwButtonGroup,
  args: {
    block: false,
    splitButton: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwButtonGroup, SwButton },
  template: '<sw-button-group v-bind="$props"><sw-button variant="danger">Button 1</sw-button><sw-button>Button 2</sw-button><sw-button>Button 3</sw-button></sw-button-group>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-button-group';
