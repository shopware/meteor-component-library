<template>
  <div
    v-if="!!error"
    class="sw-field__error"
  >
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'SwFieldError',

  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },

  computed: {
    errorMessage() {
      if (!this.error) {
        return '';
      }

      const translationKey = `global.error-codes.${this.error.code}`;
      const translation = this.$tc(translationKey, 1, this.error.parameters || {});

      if (translation === translationKey) {
        return this.error.detail;
      }
      return translation;
    },
  },
};
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
