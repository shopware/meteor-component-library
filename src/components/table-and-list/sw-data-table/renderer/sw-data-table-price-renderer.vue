<template>
  <a
    v-if="columnDefinition.clickable"
    class="sw-data-table-price-renderer"
    href="#"
    @click.prevent="$emit('click', data)"
  >
    {{ renderString }}
  </a>

  <p
    v-else
    class="sw-data-table-price-renderer"
  >
    {{ renderString }}
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import type { ColumnDefinition } from '../sw-data-table.vue';
import { get } from 'lodash-es';
import { currency } from '../../../../utils/format';

export default defineComponent({
  name: 'SwDataTablePriceRenderer',

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
      if (props.columnDefinition.renderer !== 'price') {
        return 'Wrong renderer for price renderer';
      }

      const currencyId = props.columnDefinition?.rendererOptions?.currencyId;

      if (!currencyId) {
        return 'No currency id found';
      }

      const prices = get(props.data, props.columnDefinition.property);

      if (!prices) {
        return 'No prices found';
      }

      const price = prices.find((price: any) => price.currencyId === currencyId);

      if (!price) {
        return 'No price found';
      }

      const currencyISOCode = props.columnDefinition?.rendererOptions?.currencyISOCode;

      if (!currencyISOCode) {
        return 'No iso code found';
      }

      const currencySource = props.columnDefinition?.rendererOptions?.source;

      if (!currencySource) {
        return 'No source (gross/net) found';
      }

      return currency(price[currencySource], currencyISOCode);
    })

    return {
      renderString
    }
  },
});
</script>

<style scoped>
.sw-data-table-price-renderer {
  text-align: right;
}
</style>