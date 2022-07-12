import SwSwitchField from './sw-switch-field.vue';
export default {
  title: 'Components/form/sw-switch-field',
  component: SwSwitchField,
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
  components: { SwSwitchField },
  template: '<sw-switch-field v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-switch-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-switch-field';
