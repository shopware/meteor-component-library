<template>
  <sw-label
    class="sw-circle-icon"
    :style="backgroundStyles"
    :variant="variant"
    appearance="circle"
    :dismissable="false"
  >
    <sw-icon
      :name="iconName"
      :size="iconSize"
    />
  </sw-label>
</template>

<script>
import SwLabel from '../sw-label/sw-label.vue';
import SwIcon from '../sw-icon/sw-icon.vue';

export default {
  name: 'SwCircleIcon',

  components: {
    'sw-label': SwLabel,
    'sw-icon': SwIcon,
  },

  props: {
    size: {
      type: Number,
      required: false,
      default: 50,
      validator(value) {
        return value > 0;
      },
    },

    iconName: {
      type: String,
      required: true,
    },

    variant: {
      type: String,
      required: false,
      default: '',
      validValues: ['info', 'danger', 'success', 'warning', 'neutral', 'primary'],
    },
  },

  computed: {
    iconSize() {
      return `${this.size / 2}px`;
    },

    backgroundStyles() {
      const sizeInPx = `${this.size}px`;

      return {
        width: sizeInPx,
        height: sizeInPx,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables";

.sw-circle-icon {
  &.sw-label.sw-label--appearance-circle {
    display: grid;
    align-items: center;
    justify-content: center;
    width: unset;
    height: unset;
  }
}
</style>
