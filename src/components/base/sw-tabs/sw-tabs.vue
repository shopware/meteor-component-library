<template>
  <div
    class="sw-tabs"
    :class="tabClasses"
  >
    <div
      ref="swTabContent"
      class="sw-tabs__content"
      :style="tabContentStyle"
    >
      <slot :active="active" />
      <span
        class="sw-tabs__slider"
        :class="sliderClasses"
        :style="sliderStyle"
      />
    </div>

    <button
      v-if="isScrollable"
      class="sw-tabs__arrow sw-tabs__arrow--left"
      :class="arrowClassesLeft"
      @click="scrollTo('left')"
    >
      <sw-icon
        name="small-arrow-medium-left"
        small
      />
    </button>

    <button
      v-if="isScrollable"
      class="sw-tabs__arrow sw-tabs__arrow--right"
      :class="arrowClassesRight"
      @click="scrollTo('right')"
    >
      <sw-icon
        name="small-arrow-medium-right"
        small
      />
    </button>

    <div class="sw-tabs__custom-content">
      <slot
        name="content"
        :active="active"
      />
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash-es';
import { getScrollbarHeight } from '../../../utils/dom';
import SwIcon from '../sw-icon/sw-icon.vue';

export default {
  name: 'SwTabs',

  components: {
    'sw-icon': SwIcon,
  },

  props: {
    isVertical: {
      type: Boolean,
      required: false,
      default: false,
    },

    small: {
      type: Boolean,
      required: false,
      default: true,
    },

    alignRight: {
      type: Boolean,
      required: false,
      default: false,
    },

    defaultItem: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      active: this.defaultItem || '',
      isScrollable: false,
      activeItem: null,
      scrollLeftPossible: false,
      scrollRightPossible: true,
      firstScroll: false,
      scrollbarOffset: '',
    };
  },

  computed: {
    tabClasses() {
      return {
        'sw-tabs--vertical': this.isVertical,
        'sw-tabs--small': this.small,
        'sw-tabs--scrollable': this.isScrollable,
        'sw-tabs--align-right': this.alignRight,
        'sw-tabs--scrollbar-active': this.scrollbarOffset > 0,
      };
    },

    arrowClassesLeft() {
      return {
        'sw-tabs__arrow--disabled': !this.scrollLeftPossible,
      };
    },

    arrowClassesRight() {
      return {
        'sw-tabs__arrow--disabled': !this.scrollRightPossible,
      };
    },

    sliderLength() {
      if (this.$children[this.activeItem]) {
        const activeChildren = this.$children[this.activeItem];
        return this.isVertical ? activeChildren.$el.offsetHeight : activeChildren.$el.offsetWidth;
      }
      return 0;
    },

    activeTabHasErrors() {
      return this.$children[this.activeItem] && this.$children[this.activeItem].hasError;
    },

    sliderClasses() {
      return { 'has--error': this.activeTabHasErrors };
    },

    sliderMovement() {
      if (this.$children[this.activeItem]) {
        const activeChildren = this.$children[this.activeItem];
        return this.isVertical ? activeChildren.$el.offsetTop : activeChildren.$el.offsetLeft;
      }
      return 0;
    },

    sliderStyle() {
      if (this.isVertical) {
        return `
                    transform: translate(0, ${this.sliderMovement}px) rotate(${this.alignRight ? '-90deg' : '90deg'});
                    width: ${this.sliderLength}px;
                `;
      }

      return `
                transform: translate(${this.sliderMovement}px, 0) rotate(0deg);
                width: ${this.sliderLength}px;
                bottom: ${this.scrollbarOffset}px;
            `;
    },

    tabContentStyle() {
      return {
        'padding-bottom': `${this.scrollbarOffset}px`,
      };
    },
  },

  watch: {
    $route() {
      this.updateActiveItem();
    },

    activeTabHasErrors() {
      this.recalculateSlider();
    },
  },

  created() {
    this.createdComponent();
  },

  mounted() {
    this.mountedComponent();
  },

  methods: {
    mountedComponent() {
      const tabContent = this.$refs.swTabContent;

      tabContent.addEventListener('scroll', throttle(() => {
        const rightEnd = tabContent.scrollWidth - tabContent.offsetWidth;
        const leftDistance = tabContent.scrollLeft;

        this.scrollRightPossible = !(rightEnd - leftDistance < 5);
        this.scrollLeftPossible = !(leftDistance < 5);
      }, 100));

      this.checkIfNeedScroll();
      this.addScrollbarOffset();

      this.$device.onResize({
        listener() {
          this.checkIfNeedScroll();
          this.addScrollbarOffset();
        },
        component: this,
      });
      this.recalculateSlider();
    },

    recalculateSlider() {
      window.setTimeout(() => {
        const { activeItem } = this;
        this.activeItem = null;
        this.activeItem = activeItem;
      }, 0);
    },

    createdComponent() {
      this.updateActiveItem();
    },

    updateActiveItem() {
      this.$nextTick().then(() => {
        const firstActiveTabItem = this.$children.find((child) => child.$el.nodeType === 1 && child.$el.classList.contains('sw-tabs-item--active'));

        if (!firstActiveTabItem) {
          return;
        }

        this.activeItem = this.$children.indexOf(firstActiveTabItem);
        if (!this.firstScroll) {
          this.scrollToItem(firstActiveTabItem);
        }
        this.firstScroll = true;
      });
    },

    scrollTo(direction) {
      if (!['left', 'right'].includes(direction)) {
        return;
      }

      const tabContent = this.$refs.swTabContent;
      const tabContentWidth = tabContent.offsetWidth;

      if (direction === 'right') {
        tabContent.scrollLeft += (tabContentWidth / 2);
        return;
      }
      tabContent.scrollLeft += -(tabContentWidth / 2);
    },

    checkIfNeedScroll() {
      const tabContent = this.$refs.swTabContent;
      this.isScrollable = tabContent.scrollWidth !== tabContent.offsetWidth;
    },

    setActiveItem(item) {
      this.$emit('new-item-active', item);
      this.active = item.name;
      this.updateActiveItem();
    },

    scrollToItem(item) {
      const tabContent = this.$refs.swTabContent;
      const tabContentWidth = tabContent.offsetWidth;
      const itemOffset = item.$el.offsetLeft;
      const itemWidth = item.$el.clientWidth;

      if ((tabContentWidth / 2) < itemOffset) {
        const scrollWidth = itemOffset - (tabContentWidth / 2) + (itemWidth / 2);
        tabContent.scrollLeft = scrollWidth;
      }
    },

    addScrollbarOffset() {
      this.scrollbarOffset = getScrollbarHeight(this.$refs.swTabContent);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-tabs {
  position: relative;

  .sw-tabs__content {
    position: relative;
    display: flex;
    overflow: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: $color-gray-300;
      pointer-events: none;
    }

    .sw-tooltip--wrapper {
      display: flex;
    }
  }

  .sw-tabs__slider {
    transform-origin: top left;
    transition: 0.2s all ease-in-out;
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: $color-shopware-brand-500;

    &.has--error {
      background-color: $color-crimson-500;
    }
  }

  .sw-tabs__arrow {
    transition: 0.3s all ease-in-out;
    position: absolute;
    left: 0;
    top: 21px;
    transform: translate(0, -50%);
    border: none;
    background-color: transparent;

    &.sw-tabs__arrow--right {
      left: auto;
      right: 0;
    }

    &.sw-tabs__arrow--disabled {
      cursor: default !important;
      opacity: 0.25;
    }

    .sw-icon {
      transition: 0.3s all ease;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      outline: none;
      cursor: pointer;

      .sw-icon {
        color: $color-shopware-brand-500;
      }
    }
  }

  .sw-tabs__custom-content {
    padding: 20px 0;
  }

  &.sw-tabs--vertical {
    .sw-tabs__content {
      flex-direction: column;

      .sw-tabs__slider {
        bottom: auto;
        top: 0;
        left: 2px;
      }

      &::before {
        display: none;
      }
    }

    &.sw-tabs--align-right {
      .sw-tabs__content {
        .sw-tabs-item { /* stylelint-disable-line */
          text-align: right;
        }

        .sw-tabs__slider { /* stylelint-disable-line */
          transform-origin: bottom right;
          left: auto;
          right: 0;
          top: -2px;
        }
      }
    }
  }

  &.sw-tabs--small {
    max-width: 800px;
    margin: 0 auto 15px auto;
  }

  &.sw-tabs--scrollable {
    padding: 0 20px;
  }

  &.sw-tabs--scrollbar-active {
    .sw-tabs__content {
      &::before {
        display: none;
      }
    }
  }
}
</style>
