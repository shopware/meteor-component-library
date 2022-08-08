import SwNumberField from './sw-number-field.vue';
import baseFieldArgTypes from '../_internal/sw-base-field/arg-types';

export default {
  title: 'Components/Form/sw-number-field',
  component: SwNumberField,
  args: {
    label: 'Numberfield',
    step: 1,
    numberType: 'int',
  },
  argTypes: {
    ...baseFieldArgTypes,
  }
};

const Template = (args, { argTypes }) => ({
  template: `
    <div>
      <sw-number-field
        v-bind="$props"
        v-model="currentValue"
        @change="change"
        @input="input"
        @inheritance-restore="inheritanceRestoreWrapper"
        @inheritance-remove="inheritanceRemoveWrapper">
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
      </sw-number-field>
      <h4 style="display: none;">hidden</h4>
    </div>`,
  props: Object.keys(argTypes),
  components: { SwNumberField },
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
Default.storyName = 'sw-number-field';
