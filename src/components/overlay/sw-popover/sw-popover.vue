<template>
  <component
    :is="mainComponentTag"
    :is-opened="isOpened"
    class="sw-popover"
    :class="componentClasses"
    @close="closeFloatingUi"
  >
    <template
      #trigger
    >
      <slot
        name="trigger"
        :is-opened="isOpened"
        :toggle-floating-ui="toggleFloatingUi"
      />
    </template>

    <div
      ref="SwPopover"
      class="sw-popover__content"
    >
      <div class="sw-popover__header">
        <sw-button
          v-if="currentView.name !== 'base'"
          class="sw-popover__back-button"
          variant="secondary"
          @click="goViewBack"
        >
          <sw-icon name="solid-long-arrow-left" />
        </sw-button>

        <h3>{{ currentView.title }}</h3>

        <div
          v-if="currentView.name !== 'base'"
          class="sw-popover__header-placeholder-right"
        />
      </div>

      <div
        class="sw-popover__items"
      >
        <transition
          :name="viewTransition"
        >
          <div :key="currentView.name">
            <slot
              :name="'popover-items__' + currentView.name"
              :change-view="changeView"
              :toggle-floating-ui="toggleFloatingUi"
            />
          </div>
        </transition>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';
import SwCheckbox from '../../form/sw-checkbox/sw-checkbox.vue';
import SwSwitch from '../../form/sw-switch/sw-switch.vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';
import SwPopoverItem from '../sw-popover-item/sw-popover-item.vue';
import SwButton from '../../form/sw-button/sw-button.vue';
import SwSmoothReflow from '../../_internal/sw-smooth-reflow.vue';
import SwFloatingUi from '../../_internal/sw-floating-ui/sw-floating-ui.vue';

interface View {
  name: string;
  title: string;
  childViews?: View[];
}

export default defineComponent({
  components: {
    'sw-checkbox': SwCheckbox,
    'sw-switch': SwSwitch,
    'sw-icon': SwIcon,
    'sw-popover-item': SwPopoverItem,
    'sw-button': SwButton,
    'sw-smooth-reflow': SwSmoothReflow,
    'sw-floating-ui': SwFloatingUi,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    childViews: {
      type: Array as PropType<View[]>,
      required: false,
      default: () => [],
    },
    disableFloat: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: [],
  setup(props) {
    const SwPopover = ref<HTMLElement|null>(null);
    const activeView = ref('base');
    const viewTransition = ref<'slideIn'|'slideOut'>('slideIn');
    const isOpened = ref(false);

    const mainComponentTag = computed(() => {
      return props.disableFloat ? 'div' : 'sw-floating-ui';
    });

    const goViewBack = () => {
      viewTransition.value = 'slideOut';

      const previousView = allViews.value.find((view) => view.childViews && view.childViews.some(v => v.name === activeView.value));

      if (previousView) {
        activeView.value = previousView.name;
      } else {
        activeView.value = 'base';
      }

      if (SwPopover.value) {
        SwPopover.value.scrollTop = 0;
      }
    };

    const changeView = (view: string) => {
      viewTransition.value = 'slideIn';
      activeView.value = view;

      if (SwPopover.value) {
        SwPopover.value.scrollTop = 0;
      }
    };

    const getAllViews = (views?: View[]): View[] => {
      if (!views) {
        return [];
      }
      
      return views.reduce<View[]>((acc, view) => {
        return [...acc, view, ...getAllViews(view.childViews)];
      }, []);
    };

    const allViews = computed<View[]>(() => {
      return [
        {
          name: 'base',
          title: props.title,
        },
        ...getAllViews(props.childViews),
      ];
    });

    const currentView = computed<View>(() => {
      const currentView = allViews.value.find((view) => {
        return view.name === activeView.value;
      });

      if (currentView) {
        return {
          ...currentView,
          title: currentView.title ?? props.title,
        };
      }

      return { name: 'base', title: props.title };
    });

    const closeFloatingUi = () => {
      isOpened.value = false;
    };

    const toggleFloatingUi = () => {
      isOpened.value = !isOpened.value;
    };

    const componentClasses = computed(() => {
      return {
        'is--float': !props.disableFloat,
      };
    });

    return {
      goViewBack,
      currentView,
      activeView,
      changeView,
      allViews,
      viewTransition,
      SwPopover,
      closeFloatingUi,
      toggleFloatingUi,
      isOpened,
      mainComponentTag,
      componentClasses
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
@import "../../assets/scss/mixins.scss";
import { default } from '../../../../.yalc/@shopware-ag/meteor-component-library/src/components/form/sw-datepicker/sw-datepicker.vue';

/**
* Use inter-font instead of normal font for popover. Also add the new variables to this file.
*/
$font-family-default: "Inter", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-variables: "Inter var", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-default-feature-settings: "ss01" on, "ss02" on, "case" on, "cpsp" on, "zero" on,
  "cv09" on, "cv07" on, "cv06" on, "cv10" on, "cv11" on;

$font-weight-medium: 500;

$line-height-auto: auto;
$line-height-xs: 18px;
$line-height-sm: 20px;
$line-height-md: 24px;
$line-height-lg: 28px;

$color-card-headline: #1c1c1c;

$scrollShadowSize: 16px;
$scrollShadowColor: rgba(120, 120, 120, 0.2);

.sw-popover {

  &.is--float {
    .sw-popover__content {
      max-height: max(50vh, 250px);
    }
  }

  .sw-popover__content {
    padding: 16px;
    padding-bottom: 4px;
    background-color: $color-white;
    min-width: 220px;
    max-width: 340px;
    max-width: 440px;
    overflow: auto;
    border-radius: $border-radius-default;
    @include drop-shadow-default;
    overflow-x: hidden;
    scroll-behavior: smooth;
  
    // add new Inter font to popover
    * {
      font-family: $font-family-default;
    }
  
    @supports (font-variation-settings: normal) {
      * {
        font-family: $font-family-variables;
        font-feature-settings: $font-family-default-feature-settings;
      }
    }
  
    .sw-popover__header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
      gap: 16px;
  
      h3 {
        margin-right: auto;
        font-size: $font-size-s;
        font-weight: $font-weight-semi-bold;
        line-height: $line-height-md;
        color: $color-darkgray-600;
        margin-bottom: 0;
      }
    }
  
    &__header-placeholder-right {
      width: 44px;
    }
  
    .sw-popover__back-button {
      margin-right: auto;
      padding-top: 12px;
      padding-bottom: 12px;
      background-color: $color-white;
  
      .sw-icon {
        color: $color-darkgray-800;
  
        svg {
          width: 12px !important;
          height: 8px !important;
        }
      }
    }
  }

  &__items {
    position: relative;
  }

  &__items:has(div.slideIn-leave-active) {
    overflow: hidden !important;
  }

  .slideIn-leave-active,
  .slideOut-leave-active {
    transition: all .125s ease;
  }
  .slideIn-enter-active,
  .slideOut-enter-active {
    transition: all .25s ease;
  }

  .slideIn-leave-active,
  .slideOut-leave-active {
    position: absolute;
  }

  .slideIn-leave-to {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }
  .slideIn-enter {
    transform: translate3d(100%, 0, 0);
  }

  .slideOut-leave-to {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
  .slideOut-enter {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
