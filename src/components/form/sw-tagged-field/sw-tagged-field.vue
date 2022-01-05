<template>
  <sw-block-field
    class="sw-tagged-field"
    :class="taggedFieldClasses"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">
      {% block sw_tagged_field_inner %}
      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <ul
        class="sw-tagged-field__tag-list"
        @click="setFocus(true)"
      >
        <li
          v-for="(tag, index) in value"
          :key="`sw-tagged-field-value--${index}`"
        >
          <sw-label
            :dismissable="!disabled"
            :size="size"
            @selected="setFocus(true)"
            @dismiss="dismissTag(index)"
          >
            {{ tag }}
          </sw-label>
        </li>
        {% block sw_tagged_field_item_input %}
        <li class="sw-tagged-field__input-list-entry">
          {% block sw_tagged_field_input %}
          <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
          <input
            ref="taggedFieldInput"
            v-model="newTagName"
            type="text"
            class="sw-tagged-field__input"
            :class="taggedFieldInputClasses"
            :disabled="disabled"
            :placeholder="placeholder"
            @focus="setFocus(true)"
            @blur="setFocus(false)"
            @keydown="performAddTag"
            @keydown.delete="dismissLastTag"
          >
          {% endblock %}
        </li>
        {% endblock %}
      </ul>
      {% endblock %}
    </template>
  </sw-block-field>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.sw-tagged-field {
  .sw-tagged-field__tag-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 8px 8px 0;
  }

  .sw-tagged-field__input-list-entry {
    flex: auto;
  }

  .sw-tagged-field__input {
    padding: 4px 8px 12px;
  }

  .sw-label {
    margin: 0 8px 8px 0;
  }

  &.sw-field--medium {
    .sw-tagged-field__tag-list {
      padding-top: 4px;
    }

    .sw-label {
      margin: 4px 6px 0 0;
    }

    .sw-tagged-field__input {
      padding: 4px 8px 8px;
    }
  }

  &.sw-field--small {
    .sw-tagged-field__tag-list {
      padding-top: 4px;
    }

    .sw-label {
      margin: 2px 8px 4px;
    }

    .sw-tagged-field__input {
      padding: 2px 16px 4px 8px;
    }
  }

  .sw-tagged-field__input--full-width {
    width: 100%;
  }

  .sw-tagged-field__input.sw-tagged-field__input--hidden {
    width: 0;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
