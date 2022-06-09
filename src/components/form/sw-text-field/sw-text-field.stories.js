import SwTextField from './sw-text-field.vue';

export default {
  title: 'Components/form/sw-text-field',
  component: SwTextField,
  argTypes: {
    change: {
      action: 'change',
      table: {
        category: 'Events'
      }
    },
    input: {
      action: 'input',
      table: {
        category: 'Events'
      }
    },
    label: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    hint: {
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Textfield label',
  },
};

// Vue component to render the sw-text-field
const Template = (args, { argTypes }) => ({
  components: { SwTextField },
  // argTypes contains all props of text field
  props: Object.keys(argTypes),
  data() {
    return { currentValue: '' }
  },
  watch: {
    value(v) {
      if (this.currentValue === v) {
        return;
      }

      this.currentValue = v;
    }
  },
  template: '<div><sw-text-field v-bind="$props" v-model="currentValue" @change="change"><template #prefix>{{ $props.prefix }}</template><template #suffix>{{ $props.suffix }}</template><template #hint>{{ $props.hint }}</template></sw-text-field><h4 style="display: none;">hidden</h4></div>',
  created() {
    this.currentValue = this.value;
  }
});

export const Default = Template.bind({});
Default.storyName = 'sw-text-field';
