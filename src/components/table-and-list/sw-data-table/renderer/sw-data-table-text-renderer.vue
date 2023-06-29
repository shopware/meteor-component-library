<template>
  <a
    v-if="columnDefinition.clickable"
    class="sw-data-table-text-renderer"
    href="#"
    @click.prevent="$emit('click', data)"
  >
    {{ renderString }}
  </a>

  <p
    v-else
    class="sw-data-table-text-renderer"
  >
    {{ renderString }}
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import type { ColumnDefinition } from '../sw-data-table.vue';
import { get } from 'lodash-es';

export default defineComponent({
  name: 'SwDataTableTextRenderer',

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
      return get(props.data, props.columnDefinition.property);
    })

    return {
      renderString
    }
  },
});
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

a.sw-data-table-text-renderer {
  font-weight: $font-weight-medium;
  text-decoration: none;
  color: $color-darkgray-600;

  &:hover {
    text-decoration: underline;
  }
}

</style>
```