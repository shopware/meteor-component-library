import SwTextField from './sw-text-field.vue';
import baseFieldArgTypes from '../_internal/sw-base-field/arg-types';

export default {
  title: 'Components/Form/sw-text-field',
  component: SwTextField,
  argTypes: {
    ...baseFieldArgTypes
  },
  args: {
    label: 'Textfield label',
  },
};

// Vue component to render the sw-text-field
const Template = (args, { argTypes }) => ({
  template: `
    <div>
      <sw-text-field
        v-bind="$props"
        v-model="currentValue"
        @inheritance-restore="inheritanceRestoreWrapper"
        @inheritance-remove="inheritanceRemoveWrapper"
        @change="change">
          <template
            v-if="$props.prefix"
            #prefix>
            {{ $props.prefix }}
          </template>
          <template
            v-if="$props.suffix"
            #suffix>
            {{ $props.suffix }}
          </template>
          <template
            v-if="$props.hint"
            #hint>
            {{ $props.hint }}
          </template>
      </sw-text-field>
      <h4 style="display: none;">hidden</h4>
    </div>`,
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
  created() {
    this.currentValue = this.value;
  },
  methods: {
    inheritanceRemoveWrapper() {
      this.inheritanceRemove(...arguments);
      this.isInherited = false;
    },

    inheritanceRestoreWrapper() {
      this.inheritanceRestore(...arguments);
      this.isInherited = true;
    }
  }
});

export const Default = Template.bind({});
Default.storyName = 'sw-text-field';
