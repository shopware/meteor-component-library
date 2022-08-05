<template>
  <div
    class="sw-confirm-field"
    :class="confirmFieldClasses"
  >
    <sw-text-field
      v-model="draft"
      v-bind="$attrs"
      :required="required"
      :disabled="disabled"
      validation="required"
      @focus="onStartEditing"
      @blur="onBlurField"
      @keyup.enter="onSubmitFromKey"
      @keyup.esc="onCancelFromKey"
    />

    <span
      v-show="isEditing"
      class="sw-confirm-field__button-list"
    >
      {% block sw_confirm_field_cancel_button %}
      <sw-button
        :disabled="disabled"
        class="sw-confirm-field__button sw-confirm-field__button--cancel"
        square
        size="x-small"
        tabindex="-1"
        @click="onCancelSubmit"
      >

        {% block sw_field_inline_cancel_submit_button_icon %}
        <sw-icon
          small
          name="regular-times-s"
        />
        {% endblock %}
      </sw-button>
      {% endblock %}

      {% block sw_confirm_field_confirm_button %}
      <sw-button
        class="sw-confirm-field__button sw-confirm-field__button--submit"
        :disabled="preventEmptySubmit && !draft || disabled"
        square
        size="x-small"
        variant="primary"
        tabindex="-1"
        @click="onSubmitValue"
      >

        {% block sw_field_inline_submit_button_icon %}
        <sw-icon
          small
          name="regular-checkmark-xxs"
        />
        {% endblock %}
      </sw-button>
      {% endblock %}
    </span>
  </div>
</template>

<script>
import SwTextField from '../../sw-text-field/sw-text-field.vue';

export default {
  name: 'SwConfirmField',

  components: {
    'sw-text-field': SwTextField,
  },

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },

    compact: {
      type: Boolean,
      required: false,
      default: false,
    },

    preventEmptySubmit: {
      type: Boolean,
      required: false,
      default: false,
    },

    required: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isEditing: false,
      draft: this.value,
      event: null,
    };
  },

  computed: {
    confirmFieldClasses() {
      return {
        'sw-confirm-field--compact': this.compact,
        'sw-confirm-field--editing': this.isEditing,
      };
    },
  },

  watch: {
    value() {
      this.draft = this.value;
    },
  },

  methods: {
    removeActionButtons() {
      this.isEditing = false;
    },

    onStartEditing() {
      this.isEditing = true;
    },

    onBlurField({ relatedTarget }) {
      if (!!relatedTarget && relatedTarget.classList.contains('sw-confirm-field__button')) {
        return;
      }
      this.$emit('blur');
      this.cancelSubmit();
    },

    cancelSubmit() {
      this.removeActionButtons();
      this.draft = this.value;
    },

    onCancelFromKey({ target }) {
      this.cancelSubmit();
      target.blur();
    },

    onCancelSubmit() {
      this.$emit('submit-cancel');
      this.cancelSubmit();
      this.isEditing = false;
    },

    submitValue() {
      if (this.draft !== this.value) {
        this.$emit('input', this.draft, this.event);
      }
    },

    onSubmitFromKey({ target }) {
      this.event = 'key';
      this.submitValue();
      target.blur();
      this.isEditing = false;
    },

    onSubmitValue() {
      this.event = 'click';
      this.submitValue();
      this.isEditing = false;
    },
  },
};
</script>

<style lang="scss">
.sw-confirm-field {
  position: relative;

  .sw-field input {
    padding: 8px 16px;
  }

  .sw-confirm-field__button-list {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(0, -50%);
  }

  &.sw-confirm-field--compact {
    .sw-field {
      margin-bottom: 0;
    }

    .sw-field input {
      padding: 2px 16px;
    }

    .sw-confirm-field__button-list {
      right: 4px;
    }
  }

  &.sw-confirm-field--editing {
    .sw-field input {
      padding-right: 64px;
    }
  }
}
</style>
