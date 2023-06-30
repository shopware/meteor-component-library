<template>
  <sw-color-badge
    class="sw-data-table-badge-renderer"
    :class="componentClasses"
    has-text
    :variant="badgeProps.variant"
    @click="onClick"
  >
    {{ badgeProps.label }}
  </sw-color-badge>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import type { ColumnDefinition } from '../sw-data-table.vue';
import SwColorBadge from '../../../feedback-indicator/sw-color-badge/sw-color-badge.vue';

export default defineComponent({
  name: 'SwDataTablBadgeRenderer',

  components: {
    'sw-color-badge': SwColorBadge,
  },

  props: {
    columnDefinition: {
      type: Object as PropType<ColumnDefinition>,
      required: true,
    },

    data: {
      type: undefined as unknown as PropType<unknown>,
      required: true,
    },
  },

  setup(props, { emit }) {
    const badgeProps = computed(() => {
      if (props.columnDefinition?.renderer !== 'badge') {
        return {
          label: 'Renderer is not badge',
          variant: 'critical'
        };
      }

      if (!props.columnDefinition?.rendererOptions?.renderItemBadge) {
        return {
          label: '"renderItemBadge" method is not defined',
          variant: 'critical'
        };
      }

      const result = props.columnDefinition.rendererOptions.renderItemBadge(
        props.data,
        props.columnDefinition
      )

      return result;
    })

    const componentClasses = computed(() => {
      return {
        'is--clickable': props.columnDefinition?.clickable
      }
    })

    // TODO: check if clickable should be allowed on a badge renderer
    function onClick() {
      if (props.columnDefinition?.clickable) {
        emit('click', props.data);
      }
    }

    return {
      badgeProps,
      componentClasses,
      onClick
    }
  },
});
</script>

<style scoped>
.sw-data-table-badge-renderer {
  &.is--clickable {
    cursor: pointer;
  }
}
</style>