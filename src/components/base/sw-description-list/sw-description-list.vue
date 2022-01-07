<template>
  <dl
    class="sw-description-list"
    :style="descriptionListStyles"
  >
    <slot></slot>
  </dl>
</template>

<script>
export default {
  name: 'sw-description-list',

  props: {
    grid: {
      type: String,
      required: false,
      default: '1fr',
    },
  },

  computed: {
    descriptionListStyles() {
      return {
        'grid-template-columns': this.grid,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-description-list {
  line-height: 20px;
  font-size: 14px;
  display: grid;
  place-content: start;

  dt,
  dd {
    padding: 15px;
    border-bottom: 1px solid $color-gray-300;

    &:last-of-type {
      border-bottom-color: transparent;
    }
  }

  dt {
    font-weight: 600;
    color: $color-darkgray-200;
  }
}
</style>
