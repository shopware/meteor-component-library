<template>
  <div
    v-if="!!error"
    class="sw-field__error"
    aria-label="Error message"
  >
    {{ errorMessage }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SwFieldError',

  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },

  computed: {
    errorMessage(): string {
      if (!this.error) {
        return '';
      }

      const translationKey = `global.error-codes.${this.error.code}`;
      // @ts-expect-error - $tc is defined in plugin. Will be added to global variables in NEXT-22728
      const translation = this.$tc(translationKey, 1, this.error.parameters || {});

      if (translation === translationKey) {
        return this.error.detail;
      }
      return translation;
    },
  },
});
</script>

<style lang="scss">
@import "../../../assets/scss/variables.scss";

.sw-field__error {
  margin-top: 4px;
  font-size: $font-size-extra-small;
  line-height: 1.25;
  color: $color-crimson-500;
}
</style>
