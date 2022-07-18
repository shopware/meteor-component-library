import SwSwitch from './sw-switch.vue';
export default {
  title: 'Components/form/sw-switch',
  component: SwSwitch,
  argTypes: {
    change: {
      action: 'change',
      table: {
        category: 'Events'
      }
    },
    'inheritance-restore': {
      action: 'inheritance-restore',
      table: {
        category: 'Events'
      }
    },
    'inheritanceRemove': {
      action: 'inheritance-remove',
      table: {
        category: 'Events'
      }
    },
    label: {
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Switchfield',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwSwitch },
  template: '<sw-switch v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-switch>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-switch';
