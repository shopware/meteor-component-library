<template>
  <sw-contextual-field-deprecated
    class="sw-field--password"
    v-bind="$attrs"
    :name="formFieldName"
    @inheritance-restore="$emit('inheritance-restore', $event)"
    @inheritance-remove="$emit('inheritance-remove', $event)"
  >
    <template #sw-field-input="{ identification, disabled, size, setFocusClass, removeFocusClass }">
      <div class="sw-field--password__container">
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          :id="identification"
          :type="showPassword ? 'text' : 'password'"
          :name="identification"
          :placeholder="passwordPlaceholder"
          :disabled="disabled"
          :value="currentValue"
          :autocomplete="autocomplete"
          @input="onInput"
          @change="onChange"
          @focus="setFocusClass"
          @blur="removeFocusClass"
          v-on="additionalListeners"
        >
        <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
        <span
          v-if="passwordToggleAble"
          :title="showPassword ? $tc('global.sw-field.titleHidePassword') : $tc('global.sw-field.titleShowPassword')"
          class="sw-field__toggle-password-visibility"
          @click="onTogglePasswordVisibility(disabled)"
        >
          <sw-icon
            v-if="showPassword"
            name="default-eye-crossed"
            small
          />

          <sw-icon
            v-else
            name="default-eye-open"
            small
          />
        </span>
      </div>
    </template>

    <template
      v-if="copyable"
      #sw-contextual-field-suffix="{ identification }"
    >
      <sw-field-copyable
        v-if="copyable"
        :display-name="identification"
        :copyable-text="currentValue"
        :tooltip="copyableTooltip"
      />
    </template>

    <template #label>
      <slot name="label" />
    </template>
  </sw-contextual-field-deprecated>
</template>
<script>
import SwContextualFieldDeprecated from '../_internal/sw-contextual-field-deprecated/sw-contextual-field-deprecated.vue';
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwFieldCopyable from '../_internal/sw-field-copyable/sw-field-copyable.vue';
import SwTextField from '../sw-text-field/sw-text-field.vue';

export default {
  name: 'SwPasswordField',

  components: {
    'sw-contextual-field-deprecated': SwContextualFieldDeprecated,
    'sw-icon': SwIcon,
    'sw-field-copyable': SwFieldCopyable,
  },

  extends: SwTextField,

  props: {
    passwordToggleAble: {
      type: Boolean,
      required: false,
      default: true,
    },

    placeholderIsPassword: {
      type: Boolean,
      required: false,
      default: false,
    },

    autocomplete: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      showPassword: false,
    };
  },

  computed: {
    typeFieldClass() {
      return this.passwordToggleAble ? 'sw-field--password' : 'sw-field--password sw-field--password--untoggable';
    },

    passwordPlaceholder() {
      return this.showPassword
      || !this.placeholderIsPassword
        ? this.placeholder
        : '*'.repeat(this.placeholder.length ? this.placeholder.length : 6);
    },
  },

  methods: {
    onTogglePasswordVisibility(disabled) {
      if (disabled) {
        return;
      }

      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style lang="scss">
.sw-field.sw-field--password {
  .sw-field--password__container {
    position: relative;
    width: 100%;
  }

  .sw-field__toggle-password-visibility {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translate(0, -50%);
  }

  input {
    padding-right: 40px;
  }

  &.sw-field--password.sw-field--password--untoggable .sw-field__input {
    input {
      padding-right: 16px;
    }
  }
}
</style>
