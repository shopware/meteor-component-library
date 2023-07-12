<template>
  <div
    class="sw-popover-item"
    :class="componentClasses"
  >
    <div class="sw-popover-item__top-row">
      <sw-checkbox
        v-if="showCheckbox"
        class="sw-popover-item__checkbox"
        :checked="checkboxChecked"
        :partial="checkboxPartial"
        @change="emitChangeCheckbox"
      />

      <slot name="extension-logo" />

      <sw-icon
        v-if="icon"
        class="sw-popover-item__icon"
        :class="iconClasses"
        :tabindex="onLabelClickTabIndex"
        :name="icon"
        @click.prevent="handleLableClick"
        @keyup.enter="handleLableClick"
      />

      <div
        class="sw-popover-item__label"
        :class="labelClasses"
        :tabindex="onLabelClickTabIndex"
        :role="role"
        @click="handleLableClick"
        @keyup.enter="handleLableClick"
      >
        {{ label }}
        
        <div
          v-if="metaCopy"
          class="sw-popover-item__meta-copy"
        >
          {{ metaCopy }}
        </div>
      </div>

      <div class="sw-popover-item__align-right">
        <div
          v-if="contextualDetail"
          class="sw-popover-item__contextual-detail"
        >
          {{ contextualDetail }}
        </div>
  
        <div
          v-if="shortcut"
          class="sw-popover-item__shortcut"
        >
          {{ shortcut }}
        </div>
  
        <sw-switch
          v-if="showSwitch"
          :checked="switchValue"
          class="sw-popover-item__switch"
          @change="emitChangeSwitch"
        />
  
        <template v-if="showVisibility">
          <sw-icon
            class="sw-popover-item__visibility"
            :name="visible ? 'solid-eye' : 'solid-eye-slash'"
            @click="() => emitVisibilityChange(!visible)"
          />
        </template>

        <div
          v-if="typeof optionsCount === 'number'"
          class="sw-popover-item__options-count"
        >
          {{ optionsCount }}
        </div>
  
        <sw-icon
          v-if="showOptions"
          class="sw-popover-item__options"
          name="solid-chevron-right-s"
          @click="emitClickOptions"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { defineComponent, computed } from "vue";
import SwCheckbox from '../../form/sw-checkbox/sw-checkbox.vue';
import SwSwitch from '../../form/sw-switch/sw-switch.vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';

export default defineComponent({
  name: 'SwPopoverItem',
  components: {
    'sw-checkbox': SwCheckbox,
    'sw-switch': SwSwitch,
    'sw-icon': SwIcon,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'default'|'critical'|'active'>,
      required: false,
      default: 'default',
      // TODO: missing "active" type needed for tabs
      validator: (value: string) => {
        return [
          'default',
          'critical',
          'active',
        ].includes(value);
      },
    },
    showCheckbox: {
      type: Boolean,
      required: false,
      default: false,
    },
    checkboxChecked: {
      type: Boolean,
      required: false,
      default: false,
    },
    checkboxPartial: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    onLabelClick: {
      type: Function as PropType<(() => void)|undefined>,
      required: false,
      default: undefined,
    },
    metaCopy: {
      type: String,
      required: false,
      default: '',
    },
    contextualDetail: {
      type: String,
      required: false,
      default: '',
    },
    shortcut: {
      type: String,
      required: false,
      default: '',
    },
    showSwitch: {
      type: Boolean,
      required: false,
      default: false,
    },
    switchValue: {
      type: Boolean,
      required: false,
      default: false,
    },
    showVisibility: {
      type: Boolean,
      required: false,
      default: false,
    },
    visible: {
      type: Boolean,
      required: false,
      default: false,
    },
    // TODO: implement styling for disabled
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    showOptions: {
      type: Boolean,
      required: false,
      default: false,
    },
    optionsCount: {
      type: Number,
      required: false,
      default: undefined,
    },
    borderTop: {
      type: Boolean,
      required: false,
      default: false
    },
    borderBottom: {
      type: Boolean,
      required: false,
      default: false
    },
    role: {
      type: String,
      required: false,
      default: 'menuitem',
    }
  },
  emits: ['change-checkbox', 'change-switch', 'change-visibility', 'click-options'],
  setup(props, { emit }) {
    const emitChangeCheckbox = (changeValue: boolean) => {
      emit('change-checkbox', changeValue);
    };

    const emitChangeSwitch = (changeValue: boolean) => {
      emit('change-switch', changeValue);
    };

    const emitVisibilityChange = (changeValue: boolean) => {
      emit('change-visibility', changeValue);
    };

    const emitClickOptions = () => {
      emit('click-options');
    };

    const componentClasses = computed(() => {
      return {
        'sw-popover-item--default': props.type === 'default',
        'sw-popover-item--critical': props.type === 'critical',
        'sw-popover-item--disabled': props.disabled,
        'sw-popover-item--border-top': props.borderTop,
        'sw-popover-item--border-bottom': props.borderBottom,
      };
    });

    const labelClasses = computed(() => {
      return {
        'sw-popover-item__label--clickable': !!props.onLabelClick && !props.disabled,
      };
    });

    const onLabelClickTabIndex = computed(() => {
      return props.onLabelClick ? 0 : -1;
    });

    const handleLableClick = () => {
      if (props.onLabelClick) {
        props.onLabelClick();
      }
    };

    const iconClasses = computed(() => {
      return {
        'sw-popover-item__icon--clickable': !!props.onLabelClick,
      };
    });
    
    return {
      emitChangeCheckbox,
      emitChangeSwitch,
      emitVisibilityChange,
      emitClickOptions,
      componentClasses,
      labelClasses,
      onLabelClickTabIndex,
      handleLableClick,
      iconClasses
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
@import "../../assets/scss/mixins.scss";

/**
* Use inter-font instead of normal font for popover. Also add the new variables to this file.
*/
$font-family-default: "Inter", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-variables: "Inter var", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-default-feature-settings: "ss01" on, "ss02" on, "case" on, "cpsp" on, "zero" on,
  "cv09" on, "cv07" on, "cv06" on, "cv10" on, "cv11" on;

$font-weight-medium: 500;

$line-height-auto: auto;
$line-height-xs: 18px;
$line-height-sm: 20px;
$line-height-md: 24px;
$line-height-lg: 28px;

$color-custom-dark: #0F172A;
$color-custom-grey: #64748B;
$color-custom-lightgrey: #CBD5E1;
$color-custom-border: #E5E7EB;

$scrollShadowSize: 16px;
$scrollShadowColor: rgba(120, 120, 120, 0.2);

.sw-popover-item {
  display: flex;
  flex-direction: column;
  color: $color-custom-dark;
  padding: 8px 0;

  // add new Inter font to popover item
  * {
    font-family: $font-family-default;
  }

  @supports (font-variation-settings: normal) {
    * {
      font-family: $font-family-variables;
      font-feature-settings: $font-family-default-feature-settings;
    }
  }

  &--critical {
    color: $color-crimson-500;
  }

  &--disabled {
    color: $color-custom-lightgrey;

    &:hover {
      text-decoration: none;
      cursor: default;
    }
  }

  &--border-top {
    border-top: 1px solid $color-custom-border;
    margin-top: -1px;
  }

  &--border-bottom {
    border-bottom: 1px solid $color-custom-border;
    margin-bottom: -1px;
  }

  &__top-row {
    display: flex;
    gap: 8px;
  }

  &__align-right {
    display: flex;
    gap: 8px;
    margin-left: auto;
  }

  &__checkbox {
    margin-top: 4px;

    .sw-field--checkbox {
      margin: 0;
    }
  }

  &__icon {
    margin-top: 4px;
    padding: 1px;

    &--clickable {
      cursor: pointer;
    }

    svg {
      width: 14px !important;
      height: 14px !important;
    }
  }

  &__label,
  &__contextual-detail,
  &__shortcut {
    font-size: $font-size-xs;
    line-height: $line-height-md;
    font-weight: $font-weight-medium;

    &--clickable {
      cursor: pointer;
    }
  }

  &__label {
    &--clickable {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__contextual-detail,
  &__shortcut {
    color: $color-custom-lightgrey;
    white-space: nowrap;
  }

  &__switch {
    margin-top: 4px;

    .sw-field--switch {
      margin: 0;

      .sw-field--switch__input {
        height: 16px;
        padding: 0;
      }

      .sw-field__label {
        display: none;
      }
    }
  }

  &__visibility {
    svg {
      width: 12px !important;
      height: 8px !important;
    }

    #meteor-icon-kit__solid-eye-slash {
      width: 14px !important;
      height: 10px !important;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
    }
  }

  &__options-count {
    margin-right: 8px;
    font-size: $font-size-xs;
    line-height: $line-height-md;
    font-weight: $font-weight-medium;
  }

  &__options {
    svg {
      width: 5px !important;
      height: 8px !important;
    }
  }

  &__visibility,
  &__options {
    cursor: pointer;
    padding-top: 4px;
    margin-top: 4px;
  }

  &__meta-copy {
    color: $color-custom-grey;
    font-size: $font-size-xxs;
    line-height: $line-height-xs;
    font-weight: $font-weight-medium;
  }
}
</style>