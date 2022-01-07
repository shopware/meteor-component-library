<template>
  <a
    v-if="isNative"
    class="sw-tabs-item"
    :class="tabsItemClasses"
    v-bind="$attrs"
    @click="clickEvent"
  >
    <slot></slot>
  </a>

<!--  <router-link-->
<!--    v-else-->
<!--    ref="sw-tabs-item"-->
<!--    :class="tabsItemClasses"-->
<!--    v-bind="$attrs"-->
<!--    class="sw-tabs-item"-->
<!--    :to="route"-->
<!--    @click.native="clickEvent"-->
<!--  >-->
<!--    <slot></slot>-->
<!--    <sw-icon-->
<!--      v-if="hasError"-->
<!--      v-tooltip="{ message: $tc('global.sw-tabs-item.tooltipTabHasErrors') }"-->
<!--      class="sw-tabs-item__error-badge"-->
<!--      name="default-basic-shape-circle-filled"-->
<!--      size="8px"-->
<!--    />-->
<!--  </router-link>-->
</template>

<script>
import { isEmpty } from 'lodash-es';

export default {
  name: 'sw-tabs-item',

  inheritAttrs: false,

  props: {
    route: {
      type: [String, Object],
      required: false,
      default: '',
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    activeTab: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
    hasError: {
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
      isActive: false,
    };
  },

  computed: {
    isNative() {
      return isEmpty(this.route);
    },

    tabsItemClasses() {
      return {
        'sw-tabs-item--active': this.isActive,
        'sw-tabs-item--has-error': this.hasError,
        'sw-tabs-item--is-disabled': this.disabled,
      };
    },
  },

  watch: {
    $route() {
      this.checkIfRouteMatchesLink();
    },
  },

  mounted() {
    this.mountedComponent();
  },

  beforeUpdate() {
    this.beforeUpdateComponent();
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.$parent.$on('new-item-active', this.checkIfActive);
      if (this.active) {
        this.isActive = true;
      }
    },

    beforeUpdateComponent() {
      this.updateActiveState();
    },

    mountedComponent() {
      this.updateActiveState();
    },
    updateActiveState() {
      this.checkIfRouteMatchesLink();
      if (this.activeTab && this.activeTab === this.name) {
        this.isActive = true;
      }
    },

    clickEvent() {
      if (this.disabled) {
        return;
      }

      this.$parent.setActiveItem(this);
      this.$emit('click');
    },
    checkIfActive(item) {
      this.isActive = (item.$vnode === this.$vnode);
    },
    checkIfRouteMatchesLink() {
      this.$nextTick().then(() => {
        // todo: activate or change when routing works
        // /**
        //  * Prevent endless loop with checking if the route exists. Because a router-link with a
        //  * non existing route has always the class 'router-link-active'
        //  */
        // const resolvedRoute = this.$router.resolve(this.route);
        // const routeExists = resolvedRoute.resolved.matched.length > 0;
        // if (!routeExists) {
        //   return;
        // }

        // const routeIsActive = this.$el.classList.contains('router-link-active');
        // if (routeIsActive) {
        //   this.$parent.setActiveItem(this);
        // }
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-side-navigation-item-link-distance: 10px;

.sw-tabs-item {
  transition: 0.3s all ease-in-out;
  padding: $sw-side-navigation-item-link-distance ($sw-side-navigation-item-link-distance * 1.75);
  border-bottom: 2px solid $color-gray-300;
  text-decoration: none;
  white-space: nowrap;
  color: $color-darkgray-200;
  cursor: pointer;
  user-select: none;

  .sw-tabs-item__error-badge {
    position: relative;
    bottom: 0;
    right: -5px;
    color: $color-crimson-300;
    transform: translateY(-12%);
  }

  &.sw-tabs-item--active {
    color: $color-darkgray-800;

    .sw-tabs-item__error-badge {
      color: $color-crimson-400;
    }
  }

  &.sw-tabs-item--has-error {
    color: $color-crimson-300;

    &.sw-tabs-item--active {
      color: $color-crimson-500;
    }
  }

  &.sw-tabs-item--is-disabled {
    color: $color-gray-600;
    pointer-events: none;
  }

  &:disabled {
    color: $color-gray-600;
    cursor: not-allowed;
  }
}

.sw-tabs--vertical .sw-tabs-item {
  padding: $sw-side-navigation-item-link-distance;
  border-bottom: 0 solid $color-gray-300;
  border-left: 2px solid $color-gray-300;
}

.sw-tabs--vertical.sw-tabs--align-right .sw-tabs-item {
  border-left: 0;
  border-right: 2px solid $color-gray-300;
}
</style>
