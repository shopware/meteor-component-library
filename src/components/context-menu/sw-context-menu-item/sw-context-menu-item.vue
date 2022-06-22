<template>
  <div
    class="sw-context-menu-item"
    role="menuitem"
    :class="contextMenuItemStyles"
    v-on="contextListeners"
  >
    <slot name="icon">
      <sw-icon
        v-if="icon"
        :name="icon"
        small
      />
    </slot>

    <span
      class="sw-context-menu-item__text"
      :class="{ 'is--disabled': disabled }"
    >
      <slot />
    </span>
  </div>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';

export default {
  name: 'SwContextMenuItem',

  components: {
    'sw-icon': SwIcon,
  },

  props: {
    icon: {
      type: String,
      required: false,
      default: null,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    routerLink: {
      type: Object,
      required: false,
      default: null,
    },

    target: {
      type: String,
      required: false,
      default: null,
    },

    variant: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['success', 'danger', 'warning', 'headline'].includes(value);
      },
    },
  },

  computed: {
    contextMenuItemStyles() {
      return {
        [`sw-context-menu-item--${this.variant}`]: this.variant,
        'is--disabled': this.disabled && this.variant !== 'headline',
        'sw-context-menu-item--icon': this.icon,
      };
    },

    contextListeners() {
      return (this.disabled || this.variant === 'headline') ? {} : this.$listeners;
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

$sw-context-menu-color-background-hover: lighten($color-shopware-brand-500, 40%);
$sw-context-menu-color-text:             $color-darkgray-200;
$sw-context-menu-color-active:           $color-shopware-brand-500;
$sw-context-menu-color-danger:           $color-crimson-500;
$sw-context-menu-color-success:          $color-emerald-500;
$sw-context-menu-color-warning:          $color-pumpkin-spice-500;

.sw-context-menu-item {
  display: block;
  position: relative;
  border-radius: $border-radius-default;
  margin: 0;
  line-height: 18px;
  padding: 4px 14px;
  text-decoration: none;
  color: $sw-context-menu-color-text;
  outline: none;
  cursor: pointer;

  &.sw-context-menu-item--icon {
    display: grid;
    grid-template-columns: 16px auto;
    align-items: center;
    justify-items: stretch;
    justify-content: stretch;
    grid-gap: 12px;
  }

  &:hover {
    background: $sw-context-menu-color-background-hover;
    color: $sw-context-menu-color-active;

    .sw-icon {
      color: $sw-context-menu-color-active;
    }
  }

  &.sw-context-menu-item--danger {
    color: $sw-context-menu-color-danger;

    .sw-icon {
      color: $sw-context-menu-color-danger;
    }

    &:hover {
      background: lighten($sw-context-menu-color-danger, 42%);

      &.is--disabled {
        color: $sw-context-menu-color-danger;
      }
    }
  }

  &.sw-context-menu-item--success {
    color: $sw-context-menu-color-success;

    .sw-icon {
      color: $sw-context-menu-color-success;
    }

    &:hover {
      background: lighten($sw-context-menu-color-success, 42%);

      &.is--disabled {
        color: $sw-context-menu-color-success;
      }
    }
  }

  &.sw-context-menu-item--warning {
    color: $sw-context-menu-color-warning;

    .sw-icon {
      color: $sw-context-menu-color-warning;
    }

    &:hover {
      background: lighten($sw-context-menu-color-warning, 25%);

      &.is--disabled {
        color: $sw-context-menu-color-warning;
      }
    }
  }

  &.sw-context-menu-item--headline {
    text-align: center;
    cursor: default;

    &:hover {
      color: $sw-context-menu-color-text;
      background: 0 none;
    }
  }

  &.is--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    user-select: none;

    &:hover {
      color: $sw-context-menu-color-text;
      background: 0 none;
    }

    .sw-icon {
      color: $sw-context-menu-color-text;
    }
  }

  & > .sw-icon {
    color: $sw-context-menu-color-text;
  }
}
</style>
