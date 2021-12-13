<template>
  <div
    class="sw-page"
    :class="pageClasses"
  >
    <div
      v-if="showHeadArea"
      class="sw-page__head-area"
      :style="headerStyles"
    >
      <template v-if="showSmartBar">
        <div
          v-if="showSmartBar && showSearchBar"
          class="sw-page__smart-bar-divider"
        ></div>

        <div class="sw-page__back-btn-container">
          <slot name="smart-bar-back">
<!--            <router-link-->
<!--              v-if="parentRoute"-->
<!--              class="smart-bar__back-btn"-->
<!--              :to="{ name: parentRoute }"-->
<!--              :style="{ 'color': pageColor }"-->
<!--            >-->
<!--              <sw-icon-->
<!--                name="default-arrow-head-left"-->
<!--                small-->
<!--              />-->
<!--              <sw-icon-->
<!--                v-if="module && module.icon"-->
<!--                :name="module.icon"-->
<!--                small-->
<!--              />-->
<!--            </router-link>-->
          </slot>
        </div>

        <div class="smart-bar__content">
          <div class="smart-bar__header">
            <slot name="smart-bar-header">
              <h2 v-if="module && module.title">
                {{ module.title }}
              </h2>
            </slot>
          </div>

          <div class="smart-bar__language-switch">
            <slot name="language-switch"></slot>
          </div>

          <div class="smart-bar__actions">
            <slot name="smart-bar-actions"></slot>
          </div>
        </div>
      </template>
    </div>

    <div
      ref="swPageContent"
      class="sw-page__content"
      :class="pageContentClasses"
    >
      <div
        v-if="hasSideContentSlot"
        class="sw-page__side-content"
      >
        <div class="sw-page__side-content-inner">
          <slot name="side-content"></slot>
        </div>
      </div>
      <div class="sw-page__main-content">
        <div
          class="sw-page__main-content-inner"
          v-on="additionalEventListeners"
        >
          <slot name="content"></slot>
        </div>
      </div>

      <div
        v-if="hasSidebarSlot"
        class="sw-page__sidebar"
      >
        <slot name="sidebar"></slot>
      </div>
    </div>

  </div>
</template>

<script>
import { getScrollbarWidth } from '../../../utils/dom';

export default {
  name: 'sw-page',

  props: {
    showSmartBar: {
      type: Boolean,
      default: true,
    },
    showSearchBar: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      module: null,
      parentRoute: null,
      sidebarOffset: 0,
      scrollbarOffset: 0,
      hasFullWidthHeader: false,
      languageId: '',
    };
  },

  computed: {
    pageColor() {
      return (this.module !== null) ? this.module.color : '#d8dde6';
    },

    hasSideContentSlot() {
      return !!this.$slots['side-content'];
    },

    hasSidebarSlot() {
      return !!this.$slots.sidebar;
    },

    showHeadArea() {
      return this.showSearchBar || this.showSmartBar;
    },

    pageClasses() {
      return {
        'has--head-area': this.showHeadArea,
      };
    },

    pageContainerClasses() {
      return {
        'has--smart-bar': this.showSmartBar,
      };
    },

    pageContentClasses() {
      return {
        'has--smart-bar': !!this.showSmartBar,
        'has--side-content': !!this.hasSideContentSlot,
        'has--side-bar ': !!this.hasSidebarSlot && !this.hasSideContentSlot,
      };
    },

    pageOffset() {
      if (this.hasFullWidthHeader) {
        return 0;
      }
      return `${this.sidebarOffset + this.scrollbarOffset}px`;
    },

    headerStyles() {
      return {
        'border-bottom-color': this.pageColor,
        'padding-right': this.pageOffset,
      };
    },

    topBarActionStyles() {
      return {
        'margin-right': `-${this.pageOffset}`,
      };
    },

    additionalEventListeners() {
      return this.$listeners;
    },
  },

  created() {
    this.createdComponent();
  },

  mounted() {
    this.mountedComponent();
  },

  updated() {
    this.updatedComponent();
  },

  beforeDestroy() {
    // Shopware.State.dispatch('error/resetApiErrors');
    this.beforeDestroyComponent();
  },

  methods: {
    createdComponent() {
      this.$on('mount', this.setSidebarOffset);
      this.$on('destroy', this.removeSidebarOffset);
      window.addEventListener('resize', this.readScreenWidth);
    },

    mountedComponent() {
      this.initPage();
      this.readScreenWidth();
      this.setScrollbarOffset();
    },

    updatedComponent() {
      this.setScrollbarOffset();
    },

    beforeDestroyComponent() {
      window.removeEventListener('resize', this.readScreenWidth);
    },

    readScreenWidth() {
      this.hasFullWidthHeader = document.body.clientWidth <= 500;
    },

    setSidebarOffset(sidebarWidth) {
      this.sidebarOffset = sidebarWidth;
    },

    removeSidebarOffset() {
      this.sidebarOffset = 0;
    },

    setScrollbarOffset() {
      let contentEl = document.querySelector('.sw-card-view__content');

      if (!contentEl) {
        contentEl = document.querySelector('.sw-page__main-content-inner');
      }

      if (contentEl !== null) {
        this.scrollbarOffset = getScrollbarWidth(contentEl);
      }
    },

    initPage() {
      // if (this.$route.meta.$module) {
      //   this.module = this.$route.meta.$module;
      // }
      //
      // if (this.$route.meta.parentPath) {
      //   this.parentRoute = this.$route.meta.parentPath;
      // }
    },
  },
};

</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-page-smart-bar-border-color: $color-gray-300;
$sw-page-separator-color: $color-gray-300;
$sw-page-divider-background-color: $color-gray-300;
$sw-page-smart-bar-background-color: $color-white;
$sw-page-smart-bar-headline-color: $color-darkgray-200;
$sw-page-side-content-default-width: 440px;
$sw-page-smart-bar-headline-font-size: 18px;
$sw-page-smart-bar-headline-font-weight: 600;

.sw-page {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;

  &.has--head-area {
    grid-template-rows: auto 1fr;
  }

  .sw-page__head-area {
    position: relative;
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: [head-start back-btn-start] 1fr [back-btn-end header-content-start] minmax(0, 800px) [header-content-end] 1fr [smart-bar-end];
    align-items: center;
    background: $sw-page-smart-bar-background-color;
    border-bottom: 2px solid $sw-page-smart-bar-border-color;
  }

  .sw-page__search-bar {
    grid-row: 1;
    grid-column: header-content-start / header-content-end;
    z-index: 800;

    @media screen and (max-width: 500px) {
      grid-column: head-start / smart-bar-end;
    }
  }

  .sw-page__top-bar-actions {
    grid-row: 1;
    grid-column: header-content-end / smart-bar-end;
    padding-right: 32px;
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
  }

  .sw-page__smart-bar-divider {
    position: absolute;
    top: 80px;
    width: 100%;
    height: 1px;
    background-color: $sw-page-divider-background-color;
  }

  .sw-page__back-btn-container {
    grid-column: back-btn-start / back-btn-end;
    grid-row: 2;
  }

  .smart-bar__back-btn {
    width: 54px;
    height: 24px;
    line-height: 24px;
    display: grid;
    grid-template-columns: 30px 24px;
    align-items: center;
    margin-left: 20px;

    .sw-icon.icons--small-arrow-large-left {
      line-height: 24px;
      margin: auto;
    }
  }

  .smart-bar__content {
    min-height: 70px;
    max-width: 800px;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: header-content-start / header-content-end;
    grid-row: 2;

    @media screen and (max-width: 1360px) {
      padding: 15px;
    }
  }

  .smart-bar__header {
    flex: 1;
    min-width: 0;
  }

  .smart-bar__header h2 {
    color: $sw-page-smart-bar-headline-color;
    font-size: $sw-page-smart-bar-headline-font-size;
    font-weight: $sw-page-smart-bar-headline-font-weight;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;

    .sw-icon {
      position: relative;
      top: -2px;
    }
  }

  .smart-bar__actions {
    display: flex;
    flex-direction: row;
    text-align: right;
    white-space: nowrap;

    .sw-button,
    .sw-button-group,
    .sw-tooltip--wrapper {
      margin-left: 8px;

      &:first-child {
        margin-left: 0;
      }
    }

    .sw-context-button__menu-position {
      margin-right: 0;
    }
  }

  .sw-page__smart-bar-amount {
    font-weight: normal;
  }

  .sw-page__content {
    position: relative;
    height: 100%;

    &.has--side-content {
      display: grid;
      grid-template-columns: $sw-page-side-content-default-width 1fr auto;
    }

    &.has--side-bar {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    .content__wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  .sw-page__main-content,
  .sw-page__side-content {
    position: relative;
    height: 100%;
  }

  .sw-page__main-content-inner,
  .sw-page__side-content-inner {
    position: absolute;
    overflow: auto;
    height: 100%;
    width: 100%;
  }

  .sw-page__side-content {
    border-right: 1px solid $sw-page-separator-color;
  }
}
</style>
