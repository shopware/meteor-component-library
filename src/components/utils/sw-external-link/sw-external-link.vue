<template>
  <a
    v-if="$attrs.hasOwnProperty('href')"
    v-bind="$attrs"
    target="_blank"
    :rel="rel"
    class="sw-external-link"
    :class="classes"
  >
    <slot />
    <sw-icon
      class="sw-external-link__icon"
      :size="iconSize"
      :name="icon"
    />
  </a>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <span
    v-else
    class="sw-external-link"
    :class="classes"
    @click="onClick"
  >
    <slot />
    <sw-icon
      class="sw-external-link__icon"
      :size="iconSize"
      :name="icon"
    />
  </span>
</template>

<script>
import SwIcon from '../../base/sw-icon/sw-icon.vue';

export default {
  name: 'SwExternalLink',

  components: {
    'sw-icon': SwIcon,
  },

  inheritAttrs: false,

  props: {
    small: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      type: String,
      required: false,
      default: 'small-arrow-small-external',
    },

    rel: {
      type: String,
      required: false,
      default: 'noopener',
    },
  },

  computed: {
    classes() {
      return {
        'sw-external-link--small': this.small,
      };
    },

    iconSize() {
      if (this.small) {
        return '8px';
      }

      return '10px';
    },
  },

  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-external-link {
  color: $color-shopware-brand-500;
  font-size: $font-size-small;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: $color-shopware-brand-600;
  }

  &__icon {
    margin-left: 4px;
  }

  &--small {
    font-size: $font-size-extra-small;

    .sw-external-link__icon {
      margin-left: 2px;
    }
  }
}
</style>
