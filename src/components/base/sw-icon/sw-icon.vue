<template>
  <!-- TODO: this needs to be a real icon -->
  <span>⚙️</span>
  <!-- <component
    :is="iconName"
    class="sw-icon"
    :class="classes"
    :style="styles"
    :aria-hidden="decorative"
    v-on="$listeners"
  /> -->
</template>

<script>

export default {
  name: 'SwIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: null,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    multicolor: {
      type: Boolean,
      required: false,
      default: false,
    },
    decorative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    iconName() {
      return `icons-${this.name}`;
    },

    classes() {
      return [
        `icon--${this.name}`,
        this.multicolor ? 'sw-icon--multicolor' : 'sw-icon--fill',
        {
          'sw-icon--small': this.small,
          'sw-icon--large': this.large,
        },
      ];
    },

    styles() {
      let { size } = this;

      if (!Number.isNaN(parseFloat(size)) && !Number.isNaN(size - 0)) {
        size = `${size}px`;
      }

      return {
        color: this.color,
        width: size,
        height: size,
      };
    },
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      if (this.color && this.multicolor) {
        // TODO: Import warn
        // eslint-disable-next-line no-undef
        warn(
          this.$options.name,
          `The color of "${this.name}" cannot be adjusted because it is a multicolor icon.`,
        );
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
@import "../../assets/scss/mixins.scss";

.sw-icon {
  @include size(24px);

  display: inline-block;
  vertical-align: middle;
  line-height: 0;

  > svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  &.sw-icon--fill > svg {
    fill: currentColor;

    path,
    use {
      fill: currentColor;
    }
  }

  &.sw-icon--small {
    @include size(16px);
  }

  &.sw-icon--large {
    @include size(32px);
  }
}
</style>
