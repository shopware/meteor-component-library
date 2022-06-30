<template>
  <component
    :is="iconName"
    class="sw-icon"
    :class="classes"
    :style="styles"
    :aria-hidden="decorative"
    v-on="$listeners"
  />
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
      ];
    },

    styles() {
      return {
        color: this.color,
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
@import "node_modules/@shopware-ag/meteor-icon-kit/icons/meteor-icon-kit.scss";

.sw-icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 0;

  > svg {
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  &.sw-icon--fill > svg {
    fill: currentColor;

    path,
    use {
      fill: currentColor;
    }
  }
}
</style>
