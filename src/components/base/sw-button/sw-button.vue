<template>
<!--  <router-link-->
<!--    v-if="routerLink"-->
<!--    :to="routerLink"-->
<!--    class="sw-button"-->
<!--    :event="!disabled ? 'click' : ''"-->
<!--    :class="buttonClasses"-->
<!--    v-bind="$attrs"-->
<!--  >-->
<!--    <span class="sw-button__content">-->
<!--        <slot></slot>-->
<!--    </span>-->
<!--  </router-link>-->

  <a
    v-if="link"
    :href="!disabled ? link : ''"
    target="_blank"
    rel="noopener"
    class="sw-button"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <span class="sw-button__content">
        <slot></slot>
    </span>
  </a>

  <button
    v-else
    class="sw-button"
    :class="buttonClasses"
    :disabled="disabled || isLoading"
    v-bind="$attrs"
    v-on="disabled ? null : $listeners"
  >
    <sw-icon
      v-if="isLoading"
      name="default-web-loading-circle"
      class="sw-button__loader"
      size="20px"
    />
    <span
      class="sw-button__content"
      :class="contentVisibilityClass"
    >
        <slot></slot>
    </span>
  </button>

</template>

<script>
import swIcon from '../sw-icon/sw-icon.vue';

export default {
  name: 'sw-button',

  components: {
    'sw-icon': swIcon,
  },

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    variant: {
      type: String,
      required: false,
      default: '',
      validValues: ['primary', 'ghost', 'danger', 'ghost-danger', 'contrast', 'context'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['primary', 'ghost', 'danger', 'ghost-danger', 'contrast', 'context'].includes(value);
      },
    },
    size: {
      type: String,
      required: false,
      default: '',
      validValues: ['x-small', 'small', 'large'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['x-small', 'small', 'large'].includes(value);
      },
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    // FIXME: add required flag
    // eslint-disable-next-line vue/require-default-prop
    // routerLink: {
    //   type: Object,
    //   required: false,
    // },
    link: {
      type: String,
      required: false,
      default: null,
    },
    isLoading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  computed: {
    buttonClasses() {
      return {
        [`sw-button--${this.variant}`]: this.variant,
        [`sw-button--${this.size}`]: this.size,
        'sw-button--block': this.block,
        'sw-button--disabled': this.disabled,
        'sw-button--square': this.square,
      };
    },

    contentVisibilityClass() {
      return {
        'is--hidden': this.isLoading,
      };
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

$sw-button-transition: all 0.15s ease-out;

.sw-button {
  border: 1px solid $color-gray-400;
  background: $color-gray-50;
  color: $color-darkgray-200;
  transition: $sw-button-transition;
  display: inline-block;
  border-radius: $border-radius-default;
  padding: 2px 24px;
  font-size: 14px;
  line-height: 34px;
  outline: none;
  font-weight: 600;
  font-family: $font-family-default;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  margin: 0;
  position: relative;

  .sw-button__content {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 0 8px;
  }

  .sw-button__content.is--hidden {
    visibility: hidden;
  }

  &:hover:not(.sw-button--disabled),
  &:hover:not([disabled]) {
     background: $color-gray-100;
   }

  &:active:not(.sw-button--disabled) {
     background: $color-gray-200;
     border-color: $color-gray-400;
   }

  &:disabled,
  &.sw-button--disabled {
     color: $color-gray-500;
     border-color: $color-gray-200;
     cursor: not-allowed;

  .sw-icon {
    color: $color-gray-400;
  }
  }

  .sw-icon {
    color: $color-gray-800;
  }

  &.sw-button--primary {
     background: $color-shopware-brand-500;
     color: $color-white;
     line-height: 36px;
     border: 0 none;

  .sw-icon {
    color: $color-white;
  }

  &.sw-button--x-small {
     line-height: 20px;
   }

  &.sw-button--small {
     line-height: 28px;
   }

  &.sw-button--large {
     line-height: 44px;
   }

  &:hover {
     background: $color-shopware-brand-700;
   }

  &:active {
     background: $color-shopware-brand-800;
   }

  &:disabled,
  &.sw-button--disabled {
     background: $color-shopware-brand-200;
   }

  &.sw-button--square .sw-icon {
     color: $color-white;
   }
  }

  &.sw-button--contrast {
     background: $color-module-yellow-500;
     color: $color-darkgray-200;
     line-height: 36px;
     border: 0 none;

  .sw-icon {
    color: $color-darkgray-200;
  }

  &.sw-button--x-small {
     line-height: 20px;
   }

  &.sw-button--small {
     line-height: 28px;
   }

  &.sw-button--large {
     line-height: 44px;
   }

  &:hover {
     background: $color-module-yellow-700;
   }

  &:active {
     background: $color-module-yellow-800;
   }

  &:disabled,
  &.sw-button--disabled {
     background: $color-module-yellow-200;
     color: $color-gray-800;

  .sw-icon {
    color: $color-gray-400;
  }
  }
  }

  &.sw-button--danger {
     background: $color-crimson-500;
     color: $color-white;
     line-height: 36px;
     border: 0 none;

  .sw-icon {
    color: $color-white;
  }

  &.sw-button--x-small {
     line-height: 20px;
   }

  &.sw-button--small {
     line-height: 28px;
   }

  &.sw-button--large {
     line-height: 44px;
   }

  &:hover {
     background: $color-crimson-700;
   }

  &:active {
     background: $color-crimson-800;
   }

  &:disabled,
  &.sw-button--disabled {
     background: $color-crimson-200;

  .sw-icon {
    color: $color-white;
  }
  }
  }

  &.sw-button--ghost {
     background-color: transparent;
     border-color: $color-shopware-brand-500;
     color: $color-shopware-brand-500;

  .sw-icon {
    color: $color-shopware-brand-500;
  }

  &:hover {
     background-color: $color-shopware-brand-50;
   }

  &:active {
     background-color: $color-shopware-brand-100;
   }

  &:disabled,
  &.sw-button--disabled {
     background-color: transparent;
     border-color: $color-shopware-brand-200;
     color: $color-shopware-brand-200;

  .sw-icon {
    color: $color-shopware-brand-200;
  }
  }
  }

  &.sw-button--ghost-danger {
     background: transparent;
     border-color: $color-crimson-500;
     color: $color-crimson-500;

  &:hover {
     background: $color-crimson-50;
   }

  &:active {
     background: $color-crimson-100;
   }
  }

  &.sw-button--context {
     border: none;
     background-color: transparent;
     color: $color-darkgray-800;

  .sw-icon {
    color: $color-darkgray-800;
  }

  &:hover {
     background-color: $color-gray-100;
   }
  }

  &.sw-button--block {
     display: block;
     width: 100%;
   }

  &.sw-button--x-small {
     padding-left: 10px;
     padding-right: 10px;
     font-size: 12px;
     line-height: 18px;

  &.sw-button--square {
     width: 24px;
   }
  }

  &.sw-button--small {
     padding-left: 15px;
     padding-right: 15px;
     font-size: 12px;
     line-height: 26px;

  &.sw-button--square {
     width: 32px;
   }
  }

  &.sw-button--large {
     padding-left: 28px;
     padding-right: 28px;
     line-height: 42px;
     font-size: 15px;

  &.sw-button--square {
     width: 48px;
   }
  }

  &.sw-button--square {
     width: 40px;
     padding-left: 0;
     padding-right: 0;
     text-align: center;

  .sw-button__content {
    display: inline;
  }
  }

  .sw-button__loader {
    position: absolute;
    left: 50%;
    top: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}

</style>
