import SwCheckbox from './sw-checkbox.vue';

export default {
  title: 'Components/form/sw-checkbox',
  component: SwCheckbox,
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
    label: 'Checkbox',
    disabled: false,
    bordered: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwCheckbox },
  template: '<sw-checkbox v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-checkbox>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-checkbox';
