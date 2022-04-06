<template>
  <div class="sw-collapse">
    <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
    <div
      class="sw-collapse__header"
      @click="collapseItem"
    >
      <slot
        name="header"
        v-bind="{ expanded }"
      />
    </div>

    <div
      v-if="expanded"
      class="sw-collapse__content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwCollapse',

  props: {
    expandOnLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      expanded: this.expandOnLoading,
    };
  },

  methods: {
    collapseItem() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
