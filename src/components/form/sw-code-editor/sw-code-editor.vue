<template>
  <div class="sw-code-editor">

    <div
      v-if="label.length"
      class="sw-code-editor__label"
    >{{ label }}
    </div>

    <!-- eslint-disable-next-line vuejs-accessibility/tabindex-no-positive -->
    <div
      :ref="`editor${editorId}`"
      class="sw-code-editor__editor"
      :content="value"
      tabindex="1"
    ></div>
<!--    <div-->
<!--      v-if="feature.isActive('FEATURE_NEXT_15172') && sanitizeInput"-->
<!--      class="sw-code-editor__sanitize-bar"-->
<!--    >-->
<!--      <div-->
<!--        v-if="contentWasSanitized"-->
<!--        class="sw-code-editor__sanitized-hint"-->
<!--        :class="{'sw-code-editor__sanitized-hint&#45;&#45;visible': contentWasSanitized}"-->
<!--      >-->
<!--        <sw-circle-icon-->
<!--          icon-name="default-badge-info"-->
<!--          :size="30"-->
<!--          variant="warning"-->
<!--        />-->
<!--        <p class="sw-code-editor__sanitize-text">-->
<!--          {{ $tc('global.sw-code-editor.sanitizedHint') }}-->
<!--        </p>-->
<!--      </div>-->
<!--      <div-->
<!--        class="sw-code-editor__sanitize-info"-->
<!--        :class="{'sw-code-editor__sanitize-info&#45;&#45;visible': !contentWasSanitized}"-->
<!--      >-->
<!--        <sw-circle-icon-->
<!--          icon-name="default-badge-info"-->
<!--          :size="30"-->
<!--          variant="info"-->
<!--        />-->
<!--        <p class="sw-code-editor__sanitize-text">-->
<!--          {{ $tc('global.sw-code-editor.sanitizeInfo') }}-->
<!--        </p>-->
<!--      </div>-->

<!--    </div>-->
  </div>
</template>

<script>
import Ace from 'ace-builds/src-noconflict/ace';
import { setCompleters, textCompleter } from 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-twig';
// import SwCircleIcon from '../../base/sw-circle-icon/sw-circle-icon.vue';
import { createId } from '../../../utils/uuid';

export default {
  name: 'sw-code-editor',

  inject: [
    // 'feature',
    // 'userInputSanitizeService',
  ],

  // components: {
  //   'sw-circle-icon': SwCircleIcon,
  // },

  props: {
    value: {
      type: String,
      required: false,
      default: '',
    },

    label: {
      type: String,
      required: false,
      default: '',
    },

    completerFunction: {
      type: Function,
      required: false,
      default: null,
    },

    editorConfig: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },

    completionMode: {
      type: String,
      required: false,
      default: 'text',
      validValues: ['entity', 'text'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['entity', 'text'].includes(value);
      },
    },

    mode: {
      type: String,
      required: false,
      default: 'twig',
      validValues: ['twig', 'text'],
      validator(value) {
        if (!value.length) {
          return true;
        }
        return ['twig', 'text'].includes(value);
      },
    },

    softWraps: {
      type: Boolean,
      required: false,
      default: true,
    },

    // set focus to the component when initially mounted
    setFocus: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    sanitizeInput: {
      type: Boolean,
      required: false,
      default: false,
    },

    sanitizeFieldName: {
      type: String,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      editor: {},
      editorId: createId(),
      contentWasSanitized: false,
    };
  },

  computed: {
    aceConfig() {
      return {
        ...{
          mode: `ace/mode/${this.mode}`,
          showPrintMargin: false,
          wrap: this.softWraps,
          readOnly: this.disabled,
        },
        ...this.editorConfig,
      };
    },
  },

  watch: {
    value(value) {
      if (value !== null && value !== this.editor.getValue()) {
        this.editor.setValue(value, 1);
      }
    },

    softWraps() {
      this.editor.session.setOption('wrap', this.softWraps);
    },
  },

  mounted() {
    this.mountedComponent();
  },

  destroyed() {
    this.destroyedComponent();
  },

  methods: {
    mountedComponent() {
      this.editor = Ace.edit(this.$refs['editor'.concat(this.editorId)], this.aceConfig);

      this.defineAutocompletion(this.completerFunction);

      this.editor.setValue(this.value || '', 1);
      this.editor.on('input', this.onInput);
      this.editor.on('blur', this.onBlur);

      if (this.setFocus) {
        this.editor.focus();
      }
    },

    destroyedComponent() {
      delete this.editor;
    },

    onInput() {
      const value = this.editor.getValue();

      if (this.value !== value) {
        this.$emit('input', value);
      }
    },

    async onBlur() {
      const value = await this.sanitizeEditorInput(this.editor.getValue());

      this.$emit('blur', value);
    },

    async sanitizeEditorInput(value) {
      if (
        this.feature.isActive('FEATURE_NEXT_15172')
        && this.sanitizeInput
      ) {
        this.contentWasSanitized = false;

        if (this.value !== value) {
          try {
            const sanitizedValue = await this.userInputSanitizeService.sanitizeInput({
              html: value,
              field: this.sanitizeFieldName,
            });

            this.contentWasSanitized = sanitizedValue?.preview !== value;

            if (this.contentWasSanitized) {
              this.editor.setValue(sanitizedValue?.preview ?? value, 1);
              return this.editor.getValue();
            }
          } catch (ignore) { /* api endpoint did not work, keep user entry */ }
        }
      }
      return value;
    },

    defineAutocompletion(completerFunction) {
      /**
       * Sets a completer function. If completitionMode is set to "entity"
       * Autocomplete can handle [x] and . otherwise it uses the default
       * RegEx from ACE.
       * The ExecCommands sets a hook to the "insertstring" command to
       * prevent the autocompletion-popup to hide after a .
       */
      setCompleters([]);
      if (completerFunction) {
        const textCompleterClonedPlain = JSON.parse(JSON.stringify(textCompleter));
        const textCompleterCloned = JSON.parse(JSON.stringify(textCompleter));

        if (this.completionMode === 'entity') {
          textCompleterCloned.identifierRegexps = [/[\[\]\.a-zA-Z_0-9\$\-\u00A2-\uFFFF]/];

          textCompleterCloned.getCompletions = function getComps(editor, session, pos, prefix, callback) {
            this.identifierRegexps = [/[\[\][a-zA-Z_0-9\$\-\u00A2-\uFFFF]/];
            callback(null, completerFunction(prefix));
            this.identifierRegexps = [/[\[\]\.a-zA-Z_0-9\$\-\u00A2-\uFFFF]/];
          };

          textCompleterCloned.completerFunction = completerFunction;
          this.editor.completers = [textCompleterCloned];

          const startCallback = (function startCall(e) {
            if (e.command.name === 'insertstring') {
              if (e.args !== '\n' && e.args !== ' ') {
                e.editor.execCommand('startAutocomplete', null);
              }
            }
          });

          this.editor.commands.on('afterExec', startCallback);
        } else {
          textCompleterClonedPlain.identifierRegexps = null;
          textCompleterClonedPlain.getCompletions = function getComps(editor, session, pos, prefix, callback) {
            callback(null, completerFunction(prefix));
          };

          textCompleterClonedPlain.completerFunction = completerFunction;
          this.editor.completers = [textCompleterClonedPlain];
        }
      } else {
        this.editor.completers = [];
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-text-editor-color-border: $color-gray-300;
$sw-text-editor-color-label: $color-darkgray-200;

.sw-code-editor {
  margin-bottom: 22px;

  .sw-code-editor__label {
    display: block;
    line-height: 16px;
    font-size: 14px;
    margin-bottom: 8px;
    color: $sw-text-editor-color-label;
    font-weight: normal;
    user-select: none;
  }

  .sw-code-editor__editor {
    border: 1px solid $sw-text-editor-color-border;
    height: 260px;
  }

  &__sanitize-bar {
    position: relative;
    width: 100%;
    overflow: visible;
  }

  &__sanitize-info,
  &__sanitized-hint {
    display: flex;
    font-size: calc(14 / 16 * 1rem);
    padding: calc(4 / 16 * 1rem) 0;
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: opacity 0.16s ease;

    &--visible {
      opacity: 1;
    }
  }

  &__sanitize-text {
    margin-top: calc(6 / 16 * 1rem);
  }
}
</style>
