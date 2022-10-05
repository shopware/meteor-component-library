<template>
  <div>
    <sw-segmented-control />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, ref } from 'vue';
import SwSegmentedControl from '../../navigation/sw-segmented-control/sw-segmented-control.vue'

export default defineComponent({
  components: {
    'sw-segmented-control': SwSegmentedControl
  },
  props: {},
  emits: [],
  setup(props, { emit }) {
      return {};
  }
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.sw-pagination {

}
</style>
