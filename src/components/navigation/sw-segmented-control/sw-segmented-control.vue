<template>
  <div
    class="sw-segmented-control"
    :class="segmentedControlClasses"
  >
    <template
      v-for="(action, index) in actions"
    >
      <div
        v-if="typeof action === 'string' && !disableContext"
        :key="index"
        class="sw-segmented-control__divider"
      />

      <button
        v-if="typeof action !== 'string'"
        :key="action.id"
        class="sw-segmented-control__action"
        :class="getActionClass(action)"
        :aria-pressed="action.isPressed"
        @click="() => handleClick(action)"
      >
        <sw-icon
          v-if="action.iconName"
          :name="action.iconName"
          class="sw-segmented-control__action-icon"
        />

        <template v-if="action.hasCheckbox">
          <sw-checkbox
            :checked="action.checked"
            :label="action.label"
            @change="(event) => handleCheckboxChange(action, event)"
          />
        </template>

        <template v-else>
          <slot :name="'label__' + action.id" />

          {{ action.label }}
        </template>

        <sw-icon
          v-if="action.options"
          class="sw-segmented-control__action-options-icon"
          name="regular-chevron-down-xs"
        />

        <slot :name="'options__' + action.id" />
      </button>
    </template>
  </div>
</template>

<script lang="ts">
import SwCheckbox from '../../form/sw-checkbox/sw-checkbox.vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';
import { defineComponent, computed, PropType } from 'vue';

interface Action {
  id: string,
  label?: string,
  onClick?: ({ checkboxValue }: {checkboxValue?: boolean}) => void,
  isPressed?: boolean;
  isCritical?: boolean,
  hasCheckbox?: boolean,
  checked?: boolean,
  iconName?: string,
  options?: boolean,
  disabled?: boolean,
}

export type ActionsProp = Array<Action | 'divider'>

export default defineComponent({
  components: {
    'sw-checkbox': SwCheckbox,
    'sw-icon': SwIcon,
  },
  props: {
    actions: {
      type: Array as PropType<ActionsProp>,
      required: true
    },
    disableContext: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: [],
  setup(props) {
    const getActionClass = (action: Action) => {
      const classes = [
        `sw-segmented-control__action-id-${action.id}`
      ];

      if (action.isPressed && !action.hasCheckbox) {
        classes.push('sw-segmented-control__action--pressed');
      }

      if (action.isCritical) {
        classes.push('sw-segmented-control__action--critical');
      }

      if (action.disabled) {
        classes.push('sw-segmented-control__action--disabled');
      }

      return classes;
    }

    const handleClick = (action: Action) => {
      if (action.disabled) {
        return;
      }

      if (action.hasCheckbox) {
        return;
      }

      if (action.onClick) {
        void action.onClick({});
      }
    }

    const handleCheckboxChange = (action: Action, checkboxValue: boolean) => {
      if (action.disabled) {
        return;
      }

      if (action.onClick) {
        action.onClick({ checkboxValue });
      }
    }

    const segmentedControlClasses = computed((): Record<string, boolean> => {
      return {
        'sw-segmented-control--disabled-context': props.disableContext
      }
    })

    return {
      getActionClass,
      handleClick,
      handleCheckboxChange,
      segmentedControlClasses
    };
  }
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/mixins.scss';

.sw-segmented-control {
  display: flex;
  gap: 2px;
  width: max-content;
  background-color: $color-white;
  border: 1px solid $color-gray-500;
  border-radius: $border-radius-default;
  padding: 2px;

  &__action {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    cursor: pointer;
    border: none;
    border-radius: $border-radius-default;
    padding: 6px 12px;
    background-color: $color-white;
    font-family: inherit;
    font-size: $font-size-extra-small;
    font-weight: $font-weight-semi-bold;
    color: $color-darkgray-900;
    transition: 0.15s all ease;

    @include focus-style();

    .sw-field--checkbox {
      margin-bottom: 0;
    }

    &-icon {
      &.sw-icon {
        width: 12px;
        height: 12px;
      }
  
      &.sw-icon > svg {
        width: 100% !important;
        height: 100% !important;
      }
    }

    &-options-icon.sw-icon {
      margin-top: 1px;
      width: 8px;
      height: 5px;
    }

    .sw-field__checkbox #meteor-icon-kit__regular-checkmark-xxs {
      width: 8px !important;
      height: 6px !important;
    }

    &:hover {
      color: $color-darkgray-900;
      background-color: $color-gray-100;
    }

    &:active {
      background-color: $color-gray-200;
    }

    &--pressed:not(&--critical) {
      color: $color-white;
      background-color: $color-shopware-brand-500;

      &:hover {
        color: $color-white;
        background-color: $color-shopware-brand-700;
      }

      &:active {
        background-color: $color-shopware-brand-900;
      }
    }

    &--critical.sw-segmented-control__action--pressed {
      color: $color-white;
      background-color: $color-crimson-500;

      &:hover {
        color: $color-white;
        background-color: $color-crimson-600;
      }

      &:active {
        color: $color-white;
        background-color: $color-crimson-900;
      }
    }

    &--critical {
      background-color: $color-white;
      color: $color-crimson-500;

      &:hover {
        color: $color-crimson-500;
        background-color: $color-crimson-50;
      }

      &:active {
        color: $color-crimson-500;
        background-color: $color-crimson-100;
      }
    }

    &--disabled {
      color: $color-gray-400;
      cursor: default;
      pointer-events: none;
    }
  }

  &__divider {
    background-color: $color-gray-500;
    width: 1px;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  &--disabled-context {
    padding: 0px;
    gap: 0;

    .sw-segmented-control__action {
      border-radius: 0;
      border-right: 1px solid $color-gray-500;

      &:first-child {
        border-top-left-radius: $border-radius-default - 1;
        border-bottom-left-radius: $border-radius-default - 1;
        border-left: none;
      }

      &:last-child {
        border-top-right-radius: $border-radius-default - 1;
        border-bottom-right-radius: $border-radius-default - 1;
        border-right: none;
      }
    }
  }

  .sw-field__label, .sw-field__label label {
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  .sw-field--checkbox__container .sw-field__label {
    margin-left: 8px;
  }
}
</style>
