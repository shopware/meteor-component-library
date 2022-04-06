<template>
  <div class="sw-select-result-list">
    <sw-popover
      class="sw-select-result-list-popover"
      :popover-class="popoverClass"
      :z-index="1100"
      :resize-width="popoverResizeWidth"
    >
      <div
        ref="popoverContent"
        class="sw-select-result-list__content"
        :class="{ 'sw-select-result-list__content_empty': isLoading && (!options || options.length <= 0) }"
        @scroll="onScroll"
      >
        <slot name="before-item-list" />

        <ul class="sw-select-result-list__item-list">
          <template v-for="(item, index) in options">
            <slot
              name="result-item"
              v-bind="{ item, index }"
            />
          </template>
        </ul>

        <slot name="after-item-list" />

        <div
          v-if="!isLoading && options && options.length < 1"
          class="sw-select-result-list__empty"
        >
          <sw-icon
            name="default-action-search"
            size="20px"
          />
          {{ emptyMessageText }}
        </div>
      </div>
    </sw-popover>
  </div>
</template>

<script>
import SwPopover from '../../../utils/sw-popover/sw-popover.vue';
import SwIcon from '../../../base/sw-icon/sw-icon.vue';

export default {
  name: 'SwSelectResultList',

  components: {
    'sw-popover': SwPopover,
    'sw-icon': SwIcon,
  },

  provide() {
    return {
      setActiveItemIndex: this.setActiveItemIndex,
    };
  },

  props: {
    options: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },

    emptyMessage: {
      type: String,
      required: false,
      default: null,
    },

    focusEl: {
      type: [HTMLDocument, HTMLElement],
      required: false,
      default() { return document; },
    },

    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },

    popoverClasses: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },

    popoverResizeWidth: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      activeItemIndex: 0,
    };
  },

  computed: {
    emptyMessageText() {
      return this.emptyMessage || this.$tc('global.sw-select-result-list.messageNoResults');
    },

    popoverClass() {
      return [...this.popoverClasses, 'sw-select-result-list-popover-wrapper'];
    },
  },

  created() {
    this.createdComponent();
  },

  mounted() {
    this.mountedComponent();
  },

  beforeDestroy() {
    this.beforeDestroyedComponent();
  },

  methods: {
    createdComponent() {
      this.addEventListeners();
    },

    mountedComponent() {
      // Set first item active
      this.emitActiveItemIndex();
    },

    beforeDestroyedComponent() {
      this.removeEventListeners();
    },

    setActiveItemIndex(index) {
      this.activeItemIndex = index;
      this.emitActiveItemIndex();
    },

    addEventListeners() {
      this.focusEl.addEventListener('keydown', this.navigate);
      document.addEventListener('click', this.checkOutsideClick);
    },

    removeEventListeners() {
      this.focusEl.removeEventListener('keydown', this.navigate);
      document.removeEventListener('click', this.checkOutsideClick);
    },

    emitActiveItemIndex() {
      this.$emit('active-item-change', this.activeItemIndex);
    },

    /**
     *
     * @param event {Event}
     */
    checkOutsideClick(event) {
      event.stopPropagation();

      const popoverContentClicked = this.$refs.popoverContent.contains(event.target);
      const componentClicked = this.$el.contains(event.target);
      const parentClicked = this.$parent.$el.contains(event.target);

      if (popoverContentClicked || componentClicked || parentClicked) {
        return;
      }

      this.$emit('outside-click');
    },

    navigate({ key }) {
      key = key.toUpperCase();
      if (key === 'ARROWDOWN') {
        this.navigateNext();
        return;
      }

      if (key === 'ARROWUP') {
        this.navigatePrevious();
        return;
      }

      if (key === 'ENTER') {
        this.emitClicked();
      }
    },

    navigateNext() {
      if (this.activeItemIndex >= this.options.length - 1) {
        this.$emit('paginate');
        return;
      }

      this.activeItemIndex += 1;

      this.emitActiveItemIndex();
      this.updateScrollPosition();
    },

    navigatePrevious() {
      if (this.activeItemIndex > 0) {
        this.activeItemIndex -= 1;
      }

      this.emitActiveItemIndex();
      this.updateScrollPosition();
    },

    updateScrollPosition() {
      // wait until the new active item is rendered and has the active class
      this.$nextTick(() => {
        const resultContainer = document.querySelector('.sw-select-result-list__content');
        const activeItem = resultContainer.querySelector('.is--active');
        const itemHeight = activeItem.offsetHeight;
        const activeItemPosition = activeItem.offsetTop;
        const actualScrollTop = resultContainer.scrollTop;

        if (activeItemPosition === 0) {
          return;
        }

        // Check if we need to scroll down
        if (resultContainer.offsetHeight + actualScrollTop < activeItemPosition + itemHeight) {
          resultContainer.scrollTop += itemHeight;
        }

        // Check if we need to scroll up
        if (actualScrollTop !== 0 && activeItemPosition - actualScrollTop - itemHeight <= 0) {
          resultContainer.scrollTop -= itemHeight;
        }
      });
    },

    emitClicked() {
      // This emit is subscribed in the sw-result component. They can for example be disabled and need
      // choose on their own if they are selected
      this.$emit('item-select-by-keyboard', this.activeItemIndex);
    },

    onScroll(event) {
      if (this.getBottomDistance(event.target) !== 0) {
        return;
      }

      this.$emit('paginate');
    },

    getBottomDistance(element) {
      return element.scrollHeight - element.clientHeight - element.scrollTop;
    },
  },
};
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

$sw-select-result-list-transition: all ease-in-out 0.2s;

.sw-select-result-list,
.sw-select-result-list-popover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.sw-select-result-list-popover .sw-popover__wrapper {
  width: 100%;
}

.sw-select-result-list__content {
  width: 100%;
  max-height: 250px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid $color-gray-100;
  box-shadow: 0 3px 6px 0 $color-gray-300;
  background-color: $color-white;
  font-size: $font-size-small;
  font-family: $font-family-default;
  padding: 8px;
  border-radius: 4px;

  .sw-select-result-list__item-list {
    list-style: none;
  }

  .sw-select-result-list__empty {
    padding: 10px 16px;
  }
}

.sw-select-result-list__content_empty {
  opacity: 0;
  min-height: 293px;
  height: 293px;
}

.sw-popover__wrapper.--placement-bottom-outside.sw-select-result-list-popover-wrapper {
  transform: translate(0, calc(-100% - 48px));
}
</style>
