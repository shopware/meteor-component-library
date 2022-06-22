<template>
  <div
    ref="swContextButton"
    class="sw-context-button"
    :class="contextClass"
    @click="onClickButton"
  >
    <slot name="button">
      <button
        role="button"
        aria-haspopup="menu"
        class="sw-context-button__button"
        :class="contextButtonClass"
      >
        <sw-icon
          :name="icon"
          small
          decorative
        />
      </button>
    </slot>

    <sw-popover
      v-if="showMenu"
      class="sw-context-button__menu-position"
      popover-class="sw-context-button__menu-popover"
      :z-index="zIndex"
    >
      <sw-context-menu
        ref="swContextMenu"
        :class="contextMenuClass"
        :style="menuStyles"
      >
        <slot />
      </sw-context-menu>
    </sw-popover>
  </div>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwPopover from '../../utils/sw-popover/sw-popover.vue';
import SwContextMenu from '../sw-context-menu/sw-context-menu.vue';

export default {
  name: 'SwContextButtonVue',

  components: {
    'sw-icon': SwIcon,
    'sw-popover': SwPopover,
    'sw-context-menu': SwContextMenu,
  },

  // inject: ['feature'],

  props: {
    showMenuOnStartup: {
      type: Boolean,
      required: false,
      default: false,
    },

    menuWidth: {
      type: Number,
      required: false,
      default: 220,
    },

    menuHorizontalAlign: {
      type: String,
      required: false,
      default: 'right',
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['right', 'left'].includes(value);
      },
    },

    menuVerticalAlign: {
      type: String,
      required: false,
      default: 'bottom',
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['bottom', 'top'].includes(value);
      },
    },

    icon: {
      type: String,
      required: false,
      default: 'solid-ellipsis-h',
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    autoClose: {
      type: Boolean,
      required: false,
      default: true,
    },

    autoCloseOutsideClick: {
      type: Boolean,
      required: false,
      default: false,
    },

    additionalContextMenuClasses: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },

    zIndex: {
      type: Number,
      required: false,
      default: 9000,
    },
  },

  data() {
    return {
      showMenu: this.showMenuOnStartup,
    };
  },

  computed: {
    menuStyles() {
      return {
        width: `${this.menuWidth}px`,
      };
    },

    contextClass() {
      return {
        'is--disabled': this.disabled,
        'is--active': this.showMenu,
      };
    },

    contextButtonClass() {
      return {
        'is--active': this.showMenu,
      };
    },

    contextMenuClass() {
      return {
        'is--left-align': this.menuHorizontalAlign === 'left',
        'is--top-align': this.menuVerticalAlign === 'top',
        ...this.additionalContextMenuClasses,
      };
    },
  },

  methods: {
    onClickButton() {
      if (this.disabled) {
        return;
      }

      if (this.showMenu) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },

    openMenu() {
      this.showMenu = true;
      document.addEventListener('click', this.handleClickEvent);
    },

    handleClickEvent(event) {
      // when target is disabled dont close the context menu item
      const isTargetDisabled = event && event.target.classList.contains('is--disabled');
      if (isTargetDisabled) {
        return false;
      }

      // close menu when no context button exists (when component gets destroyed)
      const contextButton = this.$refs.swContextButton;
      if (!contextButton) {
        return this.closeMenu();
      }

      // check if the user clicked inside the context menu
      const clickedInside = contextButton ? contextButton.contains(event.target) : false;
      if (this.autoCloseOutsideClick && this.showMenu && !clickedInside) {
        const contextMenu = this.$refs.swContextMenu.$el;
        const clickedOutside = contextMenu?.contains(event.target) ?? false;

        if (!event?.target || !clickedOutside) {
          return this.closeMenu();
        }
      }

      // only close the menu on inside clicks if autoclose is active
      const shouldCloseOnInsideClick = (this.autoClose && !clickedInside);

      // close menu when there is no native event (when vue event is triggered) or user clicked outside
      if ((!event || !event.target) || shouldCloseOnInsideClick) {
        return this.closeMenu();
      }

      return false;
    },

    closeMenu() {
      this.showMenu = false;
      document.removeEventListener('click', this.handleClickEvent);
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

$sw-context-button-color-text:    $color-darkgray-200;
$sw-context-button-border-radius: $border-radius-default;
$sw-context-button-color-border:  $color-gray-300;
$sw-context-button-color-disabled:  $color-gray-100;

.sw-context-button {
  display: inline-block;
  position: relative;
  color: $sw-context-button-color-text;

  &.is--disabled {
    .sw-context-button__button {
      color: lighten($sw-context-button-color-text, 20%);
      cursor: initial;

      &:hover,
      &.is--active {
        border: none;
      }
    }
  }

  .sw-context-button__button {
    color: $sw-context-button-color-text;
    background: 0 none;
    border: 1px solid transparent;
    border-radius: $sw-context-button-border-radius;
    cursor: pointer;
    height: 24px;
    line-height: 20px;
    padding: 0 8px;
    outline: none;

    &:hover,
    &.is--active {
      border-color: $sw-context-button-color-border;
    }
  }

  &__menu-position {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-35px, 10px);
  }
}

.sw-popover__wrapper.sw-context-button__menu-popover {
  &.--placement-bottom-outside {
    .sw-context-menu {
      transform: translate(0, 13px);
    }

    .sw-context-menu .sw-context-menu__content::before {
      top: auto;
      bottom: -5px;
      transform: rotate(225deg);
    }
  }

  &.--placement-right-outside {
    .sw-context-menu {
      transform: translate(calc(-100% + 66px), 0);

      .sw-context-menu__content::before {
        left: unset;
        right: 28px;
      }
    }
  }

  &.--placement-right-outside.--placement-bottom-outside {
    .sw-context-menu {
      transform: translate(calc(-100% + 66px), 13px);
    }
  }
}
</style>