<template>
  <sw-button
    class="sw-button-process"
    v-bind="$attrs"
    v-on="$listeners"
  >

    <sw-icon
      v-if="processSuccess"
      class="sw-button-process__status-indicator"
      name="small-default-checkmark-line-medium"
    />
    <span
      class="sw-button-process__content"
      :class="contentVisibilityClass"
    >
        <slot></slot>
    </span>
  </sw-button>
</template>

<script>
import swButton from '../sw-button/sw-button.vue';
import swIcon from '../sw-icon/sw-icon.vue';

export default {
  name: 'sw-button-process',

  components: {
    'sw-button': swButton,
    'sw-icon': swIcon,
  },

  inheritAttrs: false,

  model: {
    prop: 'processSuccess',
    event: 'process-finish',
  },

  props: {
    processSuccess: {
      type: Boolean,
      required: true,
    },

    animationTimeout: {
      type: Number,
      required: false,
      default: 1250,
    },
  },

  computed: {
    contentVisibilityClass() {
      return {
        'is--hidden': this.processSuccess,
      };
    },
  },

  watch: {
    processSuccess(value) {
      if (!value) {
        return;
      }

      setTimeout(() => {
        this.$emit('process-finish', false);
      }, this.animationTimeout);
    },
  },
};
</script>

<style lang="scss">
.sw-button-process {
  .sw-button-process__status-indicator {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .sw-button-process__content.is--hidden {
    visibility: hidden;
  }
}
</style>
