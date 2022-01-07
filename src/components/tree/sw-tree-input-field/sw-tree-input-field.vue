<template>
  <div
    class="sw-tree-item sw-tree-input-field is--no-children"
    :class="classes"
  >

    <div class="sw-tree-item__element">

      <div class="sw-tree-item__icon">
        <sw-icon
          v-if="!disabled"
          name="small-default-circle-small"
          size="18"
        />
      </div>

      <div class="sw-tree-item__content">
        <slot name="content">
          <sw-confirm-field
            :value="currentValue"
            :disabled="disabled"
            :placeholder="$tc('sw-tree.general.buttonCreate')"
            @input="createNewItem"
          />
        </slot>
        <span
          v-if="disabled"
          class="sw-tree-input-field__language-warning"
        >
                {{ $tc('sw-tree.general.actions.actionsDisabledInLanguage') }}.
            </span>
      </div>
    </div>
  </div>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwConfirmField from '../../form/_internal/sw-confirm-field/sw-confirm-field.vue';

export default {
  name: 'sw-tree-input-field',

  components: {
    'sw-icon': SwIcon,
    'sw-confirm-field': SwConfirmField,
  },

  props: {
    // FIXME: add default value
    // eslint-disable-next-line vue/require-default-prop
    currentValue: {
      type: String,
      required: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        'is--disabled': this.disabled,
      };
    },
  },

  methods: {
    createNewItem(itemName) {
      this.$emit('new-item-create', itemName);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-tree-item-color-border: $color-gray-300;
$sw-tree-item-color-background: $color-gray-50;
$sw-tree-item-color-text: $color-darkgray-200;

.sw-tree-input-field {
  .sw-tree-item__element {
    grid-template-columns: 20px auto;
    padding: 0 35px 0 73px;
  }

  &.is--disabled {
    .sw-tree-item__element {
      height: auto;
      align-content: start;

      &:hover {
        background: 0 none;

        .sw-tree-item__icon,
        .sw-tree-item__content {
          color: $sw-tree-item-color-text;
        }
      }
    }

    .sw-confirm-field {
      margin-bottom: 10px;
    }

    .sw-tree-input-field__language-warning {
      white-space: normal;
    }
  }
}
</style>
