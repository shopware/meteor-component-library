import SwEmailField from './sw-email-field.vue';

export default {
  title: 'Components/form/sw-email-field',
  component: SwEmailField,
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
    inheritanceRemove: {
      action: 'inheritance-remove',
      table: {
        category: 'Events'
      }
    },
    inheritanceRestore: {
      action: 'inheritance-restore',
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
    label: 'Emailfield',
  },
};

const Template = (args, { argTypes }) => ({
  template: `
    <div>
      <sw-email-field
          v-bind="$props"
          v-model="currentValue"
          @input="input"
          @change="change"
          @inheritance-remove="inheritanceRemoveWrapper"
          @inheritance-restore="inheritanceRestoreWrapper">
        <template
            v-if="$props.prefix"
            #prefix>
          {{prefix}}
        </template>
  
        <template
            v-if="$props.suffix"
            #suffix>
          {{suffix}}
        </template>
  
        <template
            v-if="$props.hint"
            #hint>
          {{hint}}
        </template>
      </sw-email-field>
      
      <!-- Helper element to loose focus -->
      <h4 style="display: none;">hidden</h4>
    </div>`,
  props: Object.keys(argTypes),
  components: { SwEmailField },
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
Default.storyName = 'sw-email-field';
