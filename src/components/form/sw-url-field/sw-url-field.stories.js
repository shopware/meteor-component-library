import SwUrlField from './sw-url-field.vue';
import baseFieldArgTypes from '../_internal/sw-base-field/arg-types';

export default {
  title: 'Components/form/sw-url-field',
  component: SwUrlField,
  args: {
    label: 'Url field',
    size: 'default'
  },
  argTypes: {
    ...baseFieldArgTypes
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SwUrlField },
  template: `<div>
      <sw-url-field
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
      </sw-url-field>

      <h4 style="display: none;">hidden</h4>
    </div>`,
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
Default.storyName = 'sw-url-field';
