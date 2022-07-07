import SwCheckboxField from './sw-checkbox-field.vue';

export default {
  title: 'Components/form/sw-checkbox-field',
  component: SwCheckboxField,
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
  components: { SwCheckboxField },
  template: '<sw-checkbox-field v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-checkbox-field>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-checkbox-field';
