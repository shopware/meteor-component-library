<template>
  <div
    class="sw-inheritance-switch"
    :class="{
        'sw-inheritance-switch--disabled': disabled,
        'sw-inheritance-switch--is-inherited': isInherited,
        'sw-inheritance-switch--is-not-inherited': !isInherited,
    }"
  >
    <sw-icon
      v-if="isInherited"
      key="inherit-icon"
      v-tooltip="{ message: $tc('global.sw-field.tooltipRemoveInheritance'), disabled: disabled }"
      :multicolor="true"
      :name="disabled ? 'custom-inherited-disabled' : 'custom-inherited'"
      size="16"
      @click="onClickRemoveInheritance"
    />
    <sw-icon
      v-else
      key="uninherit-icon"
      v-tooltip="{ message: $tc('global.sw-field.tooltipRestoreInheritance'), disabled: disabled }"
      :class="unInheritClasses"
      :multicolor="true"
      name="custom-uninherited"
      size="16"
      @click="onClickRestoreInheritance"
    />
  </div>
</template>

<script>
import SwIcon from '../sw-icon/sw-icon.vue';

export default {
  name: 'sw-inheritance-switch',

  components: {
    'sw-icon': SwIcon,
  },

  props: {
    isInherited: {
      type: Boolean,
      required: true,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    unInheritClasses() {
      return { 'is--clickable': !this.disabled };
    },
  },

  methods: {
    onClickRestoreInheritance() {
      if (this.disabled) {
        return;
      }
      this.$emit('inheritance-restore');
    },

    onClickRemoveInheritance() {
      if (this.disabled) {
        return;
      }
      this.$emit('inheritance-remove');
    },
  },
};
</script>

<style lang="scss">
.sw-inheritance-switch {
  cursor: pointer;
  margin-top: -1px;

  &.sw-inheritance-switch--disabled {
    cursor: default;
  }
}
</style>
