<template>
  <div class="sw-segmented-control">
    <button class="sw-segmented-control__action">
      Label A
    </button>
    <button class="sw-segmented-control__action sw-segmented-control__action--visited">
      Label B
    </button>

    <button class="sw-segmented-control__action sw-segmented-control__action--active">
      Label B
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';

export default defineComponent({
    props: {},
    emits: [],
    setup(props, { emit }) {
        return {};
    }
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.sw-segmented-control {
  display: flex;
  gap: 2px;
  border: 1px solid $color-gray-500;
  border-radius: $border-radius-default;
  padding: 2px;

  &__action {
    cursor: pointer;
    border: none;
    border-radius: $border-radius-default;
    padding: 6px 12px;
    background-color: transparent;
    font-family: inherit;
    font-size: $font-size-extra-small;
    font-weight: $font-weight-semi-bold;
    color: $color-darkgray-900;
    transition: 0.15s all ease;

    &:hover {
      color: $color-darkgray-900;
      background-color: $color-gray-100;
    }

    &--visited {
      color: $color-white;
      background-color: $color-shopware-brand-500;
    }

    &--active {
      background-color: $color-gray-200;
    }
  }
}
</style>
