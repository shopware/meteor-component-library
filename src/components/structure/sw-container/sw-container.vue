<template>
  <div
    class="sw-container"
    :style="currentCssGrid"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SwContainer',

  props: {
    columns: {
      type: String,
      default: '',
      required: false,
    },
    rows: {
      type: String,
      default: '',
      required: false,
    },
    gap: {
      type: String,
      default: '',
      required: false,
    },
    justify: {
      type: String,
      required: false,
      default: 'stretch',
      validValues: ['start', 'end', 'center', 'stretch', 'left', 'right'],
      validator(value) {
        return ['start', 'end', 'center', 'stretch', 'left', 'right'].includes(value);
      },
    },
    align: {
      type: String,
      required: false,
      default: 'stretch',
      validValues: ['start', 'end', 'center', 'stretch'],
      validator(value) {
        return ['start', 'end', 'center', 'stretch'].includes(value);
      },
    },
    breakpoints: {
      type: Object,
      default() {
        return {};
      },
      required: false,
    },
  },

  data() {
    return {
      currentCssGrid: this.buildCssGrid(),
    };
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.registerResizeListener();
    },

    registerResizeListener() {
      this.$device.onResize({
        listener() {
          this.updateCssGrid();
        },
        component: this,
      });
    },

    updateCssGrid() {
      this.currentCssGrid = this.buildCssGrid();
    },

    buildCssGrid() {
      let cssGrid = this.buildCssGridProps();

      if (Object.keys(this.breakpoints).length === 0) {
        return cssGrid;
      }

      Object.keys(this.breakpoints).find((breakpoint) => {
        const currentBreakpointWidth = Number.parseInt(breakpoint, 10);
        const currentBreakpoint = this.breakpoints[breakpoint];

        if (Number.isNaN(currentBreakpointWidth)) {
          console.warn(
            this.$options.name,
            `Unable to register breakpoint "${breakpoint}".
                        The breakpoint key has to be a number equal to your desired pixel value.`,
            currentBreakpoint,
          );
        }

        if (currentBreakpointWidth > this.$device.getViewportWidth()) {
          cssGrid = this.buildCssGridProps(currentBreakpoint);
          return cssGrid;
        }
        return null;
      });

      return cssGrid;
    },

    cssGridDefaults() {
      return {
        columns: this.columns,
        rows: this.rows,
        gap: this.gap,
        justify: this.justify,
        align: this.align,
      };
    },

    buildCssGridProps(currentBreakpoint = {}) {
      const grid = Object.assign(this.cssGridDefaults(), currentBreakpoint);

      return {
        'grid-template-columns': grid.columns,
        'grid-template-rows': grid.rows,
        'grid-gap': grid.gap,
        'justify-items': grid.justify,
        'align-items': grid.align,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-container {
  display: grid;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }

  h4,
  h5,
  h6 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: $color-darkgray-200;
  }
}
</style>
