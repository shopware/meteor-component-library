<template>
  <div class="sw-card-view">
    <div class="sw-card-view__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sw-card-view',
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-card-view {
  position: absolute;
  width: 100%;
  height: 100%;

  &.has--sidebar {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    justify-content: end;
    overflow: hidden;

    .sw-card-view__content {
      height: initial;
    }
  }

  .sw-card-view__content {
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    @media screen and (max-width: 1360px) {
      padding: 15px;

      .sw-tabs--small {
        max-width: 770px;
      }

      .sw-card {
        max-width: 770px;
      }

      .sw-card--large {
        max-width: 100%;
      }
    }
  }
}
</style>
