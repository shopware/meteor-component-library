<template>
  <transition
    name="sw-modal-fade"
    appear
  >
    <div
      class="sw-modal"
      :class="modalClasses"
      @mousedown="closeModalOnClickOutside"
      @keyup.esc="closeModalOnEscapeKey"
    >
      <div
        ref="dialog"
        class="sw-modal__dialog"
        :class="identifierClass"
        :style="{ maxWidth: size }"
        role="dialog"
        aria-labelledby="modalTitleEl"
        tabindex="-1"
      >
        <header
          v-if="showHeader"
          class="sw-modal__header"
        >
          <slot name="modal-header">
            <h4
              id="modalTitleEl"
              class="sw-modal__title"
            >
              {{ title }}
            </h4>

            <button
              v-if="closable"
              class="sw-modal__close"
              :title="$tc('global.sw-modal.labelClose')"
              :aria-label="$tc('global.sw-modal.labelClose')"
              @click.prevent="closeModal"
            >
              <sw-icon
                name="small-default-x-line-medium"
                small
              />
            </button>
          </slot>
        </header>

        <div class="sw-modal__body">
          <slot name="modal-loader">
            <sw-loader v-if="isLoading" />
          </slot>
          <slot />
        </div>

        <footer
          v-if="hasFooterSlot"
          class="sw-modal__footer"
        >
          <slot name="modal-footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { createId } from '../../../utils/uuid';
import SwIcon from '../sw-icon/sw-icon.vue';
import SwLoader from '../../utils/sw-loader/sw-loader.vue';

export default {
  name: 'SwModal',

  components: {
    'sw-icon': SwIcon,
    'sw-loader': SwLoader,
  },

  inheritAttrs: false,

  // todo: implement alternative (if required)
  // inject: ['shortcutService'],

  props: {
    title: {
      type: String,
      default: '',
    },

    size: {
      type: String,
      default: '',
    },

    variant: {
      type: String,
      required: false,
      default: 'default',
      validValues: ['default', 'small', 'large', 'full'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['default', 'small', 'large', 'full'].includes(value);
      },
    },

    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },

    selector: {
      type: String,
      required: false,
      default: 'body',
    },

    showHeader: {
      type: Boolean,
      required: false,
      default: true,
    },

    closable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      id: createId(),
    };
  },

  computed: {
    modalClasses() {
      return {
        [`sw-modal--${this.variant}`]: (this.variant && !this.size),
      };
    },

    identifierClass() {
      return `sw-modal--${this.id}`;
    },

    hasFooterSlot() {
      return !!this.$slots['modal-footer'];
    },
  },

  created() {
    this.createdComponent();
  },

  mounted() {
    this.mountedComponent();
  },

  beforeDestroy() {
    this.beforeDestroyComponent();
  },

  destroyed() {
    this.destroyedComponent();
  },

  methods: {
    createdComponent() {
      // this.shortcutService.stopEventListener();
    },

    mountedComponent() {
      const targetEl = document.querySelector(this.selector);
      targetEl.appendChild(this.$el);

      this.setFocusToModal();
    },

    beforeDestroyComponent() {
      if (this.$parent?.$el !== this.$el) {
        // move DOM element back to vDOM parent so that Vue can remove the DOM entry on changes
        this.$parent.$el.appendChild(this.$el);
      }
    },

    destroyedComponent() {
      // this.shortcutService.startEventListener();
    },

    setFocusToModal() {
      this.$el.querySelector('.sw-modal__dialog').focus();
    },

    closeModalOnClickOutside(domEvent) {
      if (!this.$refs.dialog || !this.$refs.dialog.contains(domEvent.target)) {
        this.closeModal();
      }
    },

    closeModal() {
      this.$emit('modal-close');
    },

    closeModalOnEscapeKey(event) {
      if (!event.target.classList.contains('sw-modal__dialog') || event.target !== document.activeElement) {
        return;
      }

      if (event.key === 'Escape' || event.keyCode === 27) {
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss">
@use "sass:math";
@import "../../assets/scss/variables.scss";

$sw-modal-color-backdrop: rgba(0, 0, 0, 0.4);
$sw-modal-gap: 64px;
$sw-modal-loader-z-index: $z-index-modal + 1;
$sw-modal-title-font-size: 18px;
$sw-modal-transition-duration: 0.4s;
$sw-modal-transition-timing-function: cubic-bezier(0.68, -0.55, 0.26, 1.55);

.sw-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: $sw-modal-color-backdrop;
  z-index: $z-index-modal;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 math.div($sw-modal-gap, 2);

  .sw-modal__dialog {
    background-color: $color-white;
    border-radius: $border-radius-default;
    color: $color-darkgray-200;
    max-height: calc(100vh - #{$sw-modal-gap});
    min-height: 200px;
    width: 100%;
    outline: none;
    display: flex;
    flex-direction: column;
  }

  &.sw-modal--default .sw-modal__dialog {
    max-width: 700px;
  }

  &.sw-modal--large .sw-modal__dialog {
    max-width: 900px;
  }

  &.sw-modal--small .sw-modal__dialog {
    max-width: 500px;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
    overflow-y: hidden;

    .sw-modal__dialog {
      border-radius: 0;
      display: grid;
      height: 100%;
      width: 100%;
      max-height: 100%;
      grid-template-rows: auto 1fr auto;
    }

    .sw-modal__body {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }

  &.sw-modal--full {
    .sw-modal__dialog {
      max-width: 100%;
      margin: 20px;
      height: calc(100vh - #{$sw-modal-gap});
    }
  }

  .sw-modal__header {
    border-bottom: 1px solid $color-gray-300;
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 16px 0 32px;
    height: 64px;
  }

  .sw-modal__title {
    margin: 0;
    font-weight: normal;
    font-size: $sw-modal-title-font-size;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .sw-modal__close {
    background: 0 none;
    color: $color-darkgray-100;
    cursor: pointer;
    outline: none;
    flex-shrink: 0;
    border: 0 none;
    border-radius: 50%;
    margin-left: auto;
    height: 40px;
    width: 40px;

    &:hover {
      color: $color-darkgray-200;
    }

    &:focus {
      background-color: $color-gray-200;
      color: $color-darkgray-200;
    }
  }

  .sw-modal__body {
    overflow-y: auto;
    padding: 20px 30px;
    position: relative;
    word-break: break-word;
    flex-grow: 1;

    .sw-data-grid .sw-data-grid__bulk {
      padding-left: 126px;
      padding-top: 22px;
    }
  }

  .sw-modal__footer {
    border-radius: 0 0 $border-radius-default $border-radius-default;
    background-color: $color-gray-100;
    display: grid;
    grid-auto-columns: min-content;
    grid-auto-flow: column;
    grid-column-gap: 8px;
    justify-content: end;
    align-items: center;
    flex-shrink: 0;
    height: 72px;
    padding: 0 32px;
  }

  .sw-loader {
    z-index: $sw-modal-loader-z-index;
  }
}

// Vue.js Transitions
.sw-modal-fade-enter-active,
.sw-modal-fade-leave-active {
  transition: opacity $sw-modal-transition-duration $sw-modal-transition-timing-function;

  .sw-modal__dialog {
    transition: transform $sw-modal-transition-duration $sw-modal-transition-timing-function;
    transform: scale(1);
  }
}

// Vue.js Transitions
.sw-modal-fade-enter,
.sw-modal-fade-leave-to {
  opacity: 0;

  .sw-modal__dialog {
    transform: scale(0.8);
  }
}
</style>
