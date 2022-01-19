import SwBooleanRadioGroup from './sw-boolean-radio-group.vue';

export default {
  title: 'Components/form/sw-boolean-radio-group',
  component: SwBooleanRadioGroup,
  args: {
    value: true,
    labelOptionTrue: 'Yes',
    labelOptionFalse: 'No',
    bordered: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwBooleanRadioGroup },
  template: '<sw-boolean-radio-group v-bind="$props"></sw-boolean-radio-group>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-boolean-radio-group';
