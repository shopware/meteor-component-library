import SwDatepicker from './sw-datepicker.vue';

export default {
  title: 'Components/form/sw-datepicker',
  component: SwDatepicker,
  args: {
    label: 'Datepicker',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwDatepicker },
  template: '<sw-datepicker v-bind="$props"></sw-datepicker>',
});

export const Default = Template.bind({});
Default.storyName = 'sw-datepicker';
