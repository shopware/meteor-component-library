<template>
  <div class="sw-skeleton-bar">
    <div class="sw-skeleton-bar__shimmer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SwSkeletonBar",
});
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-skeleton-bar-color: $color-gray-100;
$sw-skeleton-bar-height: 32px;
$sw-skeleton-shimmer-dark: $color-gray-200;
$sw-skeleton-shimmer-light: $color-gray-100;

.sw-skeleton-bar {
  height: $sw-skeleton-bar-height;
  width: 100%;
  background-color: $sw-skeleton-bar-color;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &__shimmer {
    height: 100%;
    background-image: linear-gradient(
      89.17deg,
      $sw-skeleton-shimmer-light 0.8%,
      $sw-skeleton-shimmer-dark 50.09%,
      $sw-skeleton-shimmer-light 96.31%
    );
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    animation: barShimmer 1800ms infinite;
    animation-timing-function: linear;
    transform: translate(-100%);

    @keyframes barShimmer {
      to {
        transform: translate(120%);
      }
    }
  }
}
</style>
