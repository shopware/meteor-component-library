<template>
  <p class="sw-data-table-number-renderer">
    {{ renderString }}
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import type { ColumnDefinition } from '../sw-data-table.vue';
import { get } from 'lodash-es';

export default defineComponent({
  name: 'SwDataTableNumberRenderer',

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

  setup(props) {
    const renderString = computed(() => {
      return String(Number(get(props.data, props.columnDefinition.property)));
    })

    return {
      renderString
    }
  },
});
</script>

<style scoped>
.sw-data-table-number-renderer {
  text-align: right;
}
</style>