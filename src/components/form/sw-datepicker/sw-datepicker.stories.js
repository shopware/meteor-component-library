import SwDatepicker from './sw-datepicker.vue';

export default {
  title: 'Components/Form/sw-datepicker',
  component: SwDatepicker,
  args: {
    label: 'Datepicker',
  },
  argTypes: {
    input: {
      action: 'input',
      table: {
        category: 'Events'
      }
    },
  },
};

const Template = (args, { argTypes }) => ({
  template: '<sw-datepicker v-bind="$props" v-model="currentValue" @input="input"></sw-datepicker>',
  props: Object.keys(argTypes),
  components: { SwDatepicker },
  data() {
    return { currentValue: '' }
  },
  watch: {
    value(v) {
      this.currentValue = v;
    }
  },
  created() {
    this.currentValue = this.value;
  },
});

export const Default = Template.bind({});
Default.storyName = 'sw-datepicker';
