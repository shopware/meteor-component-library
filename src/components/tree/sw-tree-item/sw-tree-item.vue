<template>
  <div
    class="sw-tree-item"
    :class="styling"
  >

    <div
      v-droppable="{ dragGroup: 'sw-tree-item', data: item }"
      v-draggable="dragConf"
      class="sw-tree-item__element"
    >

      <div
        v-if="item.childCount <= 0"
        class="sw-tree-item__leaf"
      ></div>

      <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
      <div
        v-else
        class="sw-tree-item__toggle"
        @click="openTreeItem(); getTreeItemChildren(item)"
      >

        <sw-loader
          v-if="isLoading"
          size="14"
        />

        <sw-icon
          v-else
          :name="opened ? 'small-arrow-small-down' : 'small-arrow-small-right'"
          size="18"
        />
      </div>

      <div class="sw-tree-item__selection">
        <sw-checkbox-field
          v-if="displayCheckbox"
          :disabled="currentEditElement === item.data.id"
          :ghost-value="checkedGhost"
          :value="checked"
          @change="toggleItemCheck($event, item)"
        />
      </div>

      <slot name="grip">
        <div
          v-if="item.childCount > 0"
          class="sw-tree-item__icon"
        >
          <sw-icon
            v-if="opened"
            name="multicolor-folder-tree-open"
            multicolor
            small
          />
          <sw-icon
            v-else
            name="multicolor-folder-tree"
            multicolor
            small
          />
        </div>
        <div
          v-else
          class="sw-tree-item__icon"
        >
          <sw-icon
            name="small-default-circle-small"
            size="18"
          />
        </div>
      </slot>

      <div
        ref="item"
        v-tooltip="{
                message: item.disabledToolTipText,
                disabled: !item.disabledToolTipText,
            }"
        class="sw-tree-item__content"
      >
        <slot
          name="content"
          v-bind="{ item, openTreeItem, getName }"
        >

          <template v-if="currentEditElement === item.data.id">
            <sw-confirm-field
              v-model="item.data.name"
              class="sw-tree-detail__edit-tree-item"
              :prevent-empty-submit="true"
              :placeholder="$tc(`${translationContext}.general.buttonCreate`)"
              @input="onFinishNameingElement"
              @blur="onCancelSubmit(item)"
              @submit-cancel="onBlurTreeItemInput(item)"
            />
          </template>

          <template v-else>
            <a
              v-if="onChangeRoute"
              class="tree-link"
              :href="showItemUrl(item)"
              @click.prevent="onChangeRoute(item)"
            >
              <span class="sw-tree-item__label">{{ getName(item) }}</span>
            </a>
            <span
              v-else
              class="sw-tree-item__label"
            >{{ getName(item) }}</span>
          </template>
        </slot>
      </div>

      <div class="sw-tree-item__actions">

        <sw-icon
          v-if="shouldShowActiveState"
          size="6"
          :color="getActiveIconColor(item)"
          name="default-basic-shape-circle-filled"
        />

        <slot
          name="actions"
          :item="item"
          :openTreeItem="openTreeItem"
          :addElement="addElement"
          :addSubElement="addSubElement"
          :onDuplicate="onDuplicate"
          :onChangeRoute="onChangeRoute"
          :deleteElement="deleteElement"
          :toolTip="toolTip"
          :isDisabled="isDisabled"
        >
          <sw-context-button
            v-tooltip="toolTip"
            class="sw-tree-item__context_button"
            :disabled="isDisabled"
          >

            <sw-context-menu-item
              v-if="allowCreateWithoutPosition"
              class="sw-tree-item__without-position-action"
              @click="addElement(item)"
            >
              {{ $tc(`${translationContext}.general.actions.withoutPosition`) }}
            </sw-context-menu-item>

            <sw-context-menu-item
              v-if="!allowCreateWithoutPosition"
              :disabled="!allowNewCategories"
              class="sw-tree-item__before-action"
              @click="addElement(item, 'before')"
            >
              {{ $tc(`${translationContext}.general.actions.createBefore`) }}
            </sw-context-menu-item>

            <sw-context-menu-item
              v-if="!allowCreateWithoutPosition"
              :disabled="!allowNewCategories"
              class="sw-tree-item__after-action"
              @click="addElement(item, 'after')"
            >
              {{ $tc(`${translationContext}.general.actions.createAfter`) }}
            </sw-context-menu-item>

            <sw-context-menu-item
              v-if="!allowCreateWithoutPosition"
              :disabled="!allowNewCategories"
              class="sw-tree-item__sub-action"
              @click="addSubElement(item); openTreeItem(true)"
            >
              {{ $tc(`${translationContext}.general.actions.createSub`) }}
            </sw-context-menu-item>

            <sw-context-menu-item
              v-if="allowDuplicate"
              class="sw-context-menu__duplicate-action"
              @click="onDuplicate(item)"
            >
              {{ $tc(`global.default.duplicate`) }}
            </sw-context-menu-item>

            <div class="sw-context-menu__group">

              <sw-context-menu-item @click="onChangeRoute(item)">
                {{ $tc('global.default.edit') }}
              </sw-context-menu-item>

              <sw-context-menu-item
                class="sw-context-menu__group-button-delete"
                :disabled="!allowDeleteCategories"
                variant="danger"
                @click="deleteElement(item)"
              >
                {{ $tc('global.default.delete') }}
              </sw-context-menu-item>
            </div>
          </sw-context-button>
        </slot>
      </div>
    </div>

    {# ToDO: Repeat statt duplicated Content #}
    <transition name="fade">
      <div
        v-if="isOpened && item.children.length > 0"
        class="sw-tree-item__children"
      >
        <sw-tree-item
          v-for="child in item.children"
          :key="child.id"
          :item="child"
          :dragged-item="draggedItem"
          :parent-scope="parentScope"
          :new-element-id="newElementId"
          :translation-context="translationContext"
          :on-change-route="onChangeRoute"
          :active-parent-ids="activeParentIds"
          :active-item-ids="activeItemIds"
          :mark-inactive="markInactive"
          :sortable="sortable"
          :should-focus="shouldFocus"
          :active-focus-id="activeFocusId"
          :display-checkbox="displayCheckbox"
          :disable-context-menu="disableContextMenu"
          :get-is-highlighted="getIsHighlighted"
          @check-item="emitCheckedItem"
        >

          <template #content="{ item, openTreeItem, getName: innerGetName }">

            <sw-vnode-renderer
              v-if="$scopedSlots.content"
              :node="$scopedSlots.content({ item, openTreeItem, getName })"
            />

            <template v-else>

              <template v-if="currentEditElement === item.data.id">
                <sw-confirm-field
                  v-model="item.data.name"
                  class="sw-tree-detail__edit-tree-item"
                  :prevent-empty-submit="true"
                  :placeholder="$tc(`${translationContext}.general.buttonCreate`)"
                  @input="onFinishNameingElement"
                  @blur="onBlurTreeItemInput(item)"
                  @submit-cancel="onCancelSubmit(item)"
                />
              </template>

              <template v-else>
                <a
                  v-if="onChangeRoute"
                  class="tree-link"
                  :href="showItemUrl(item)"
                  @click.prevent="onChangeRoute(item)"
                >
                  <span class="sw-tree-item__label">{{ getName(item) }}</span>
                </a>
                <span
                  v-else
                  class="sw-tree-item__label"
                >{{ getName(item) }}</span>
              </template>
            </template>
          </template>

          <template #actions="{ item, openTreeItem }">

            <sw-vnode-renderer
              v-if="$scopedSlots.actions"
              :node="$scopedSlots.actions({ item, openTreeItem })"
            />
            <div
              v-else
              class="sw-tree-item__actions"
            >

              <sw-icon
                v-if="shouldShowActiveState"
                size="6"
                :color="getActiveIconColor(item)"
                name="default-basic-shape-circle-filled"
              />

              <slot
                name="actions"
                :item="item"
                :openTreeItem="openTreeItem"
                :addElement="addElement"
                :addSubElement="addSubElement"
                :onDuplicate="onDuplicate"
                :onChangeRoute="onChangeRoute"
                :deleteElement="deleteElement"
                :toolTip="toolTip"
                :isDisabled="isDisabled"
              >
                <sw-context-button
                  v-tooltip="toolTip"
                  :disabled="isDisabled"
                >

                  <sw-context-menu-item
                    v-if="allowCreateWithoutPosition"
                    class="sw-tree-item__without-position-action"
                    @click="addElement(item)"
                  >
                    {{ $tc(`${translationContext}.general.actions.withoutPosition`) }}
                  </sw-context-menu-item>

                  <sw-context-menu-item
                    v-if="!allowCreateWithoutPosition"
                    :disabled="!allowNewCategories"
                    class="sw-tree-item__before-action"
                    @click="addElement(item, 'before')"
                  >
                    {{ $tc(`${translationContext}.general.actions.createBefore`) }}
                  </sw-context-menu-item>

                  <sw-context-menu-item
                    v-if="!allowCreateWithoutPosition"
                    :disabled="!allowNewCategories"
                    class="sw-tree-item__after-action"
                    @click="addElement(item, 'after')"
                  >
                    {{ $tc(`${translationContext}.general.actions.createAfter`) }}
                  </sw-context-menu-item>

                  <sw-context-menu-item
                    v-if="!allowCreateWithoutPosition"
                    :disabled="!allowNewCategories"
                    class="sw-tree-item__sub-action"
                    @click="addSubElement(item); openTreeItem(true)"
                  >
                    {{ $tc(`${translationContext}.general.actions.createSub`) }}
                  </sw-context-menu-item>

                  <sw-context-menu-item
                    v-if="allowDuplicate"
                    class="sw-context-menu__duplicate-action"
                    @click="onDuplicate(item)"
                  >
                    {{ $tc(`global.default.duplicate`) }}
                  </sw-context-menu-item>

                  <div class="sw-context-menu__group">

                    <sw-context-menu-item @click="onChangeRoute(item)">
                      {{ $tc('global.default.edit') }}
                    </sw-context-menu-item>

                    <sw-context-menu-item
                      class="sw-context-menu__group-button-delete"
                      :disabled="!allowDeleteCategories"
                      variant="danger"
                      @click="deleteElement(item)"
                    >
                      {{ $tc('global.default.delete') }}
                    </sw-context-menu-item>
                  </div>
                </sw-context-button>
              </slot>
            </div>
          </template>
        </sw-tree-item>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'sw-tree-item',

  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },

    draggedItem: {
      type: Object,
      required: false,
      default: null,
    },

    newElementId: {
      type: String,
      required: false,
      default: null,
    },

    translationContext: {
      type: String,
      default: 'sw-tree',
    },

    onChangeRoute: {
      type: Function,
      default: null,
    },

    disableContextMenu: {
      type: Boolean,
      default: false,
    },

    contextMenuTooltipText: {
      type: String,
      required: false,
      default: null,
    },

    activeParentIds: {
      type: Array,
      required: false,
      default: null,
    },

    activeItemIds: {
      type: Array,
      required: false,
      default: null,
    },

    sortable: {
      type: Boolean,
      required: false,
      default: true,
    },

    markInactive: {
      type: Boolean,
      required: false,
      default: false,
    },

    shouldFocus: {
      type: Boolean,
      required: false,
      default: false,
    },

    shouldShowActiveState: {
      type: Boolean,
      required: false,
      default: false,
    },

    activeFocusId: {
      type: String,
      required: false,
      default: '',
    },

    displayCheckbox: {
      type: Boolean,
      required: false,
      default: true,
    },

    allowNewCategories: {
      type: Boolean,
      required: false,
      default: true,
    },

    allowDeleteCategories: {
      type: Boolean,
      required: false,
      default: true,
    },

    allowCreateWithoutPosition: {
      type: Boolean,
      default: false,
      required: false,
    },

    allowDuplicate: {
      type: Boolean,
      required: false,
      default: false,
    },

    getItemUrl: {
      type: Function,
      required: false,
      default: null,
    },

    getIsHighlighted: {
      type: Function,
      required: false,
      default: () => {
        return false;
      },
    },
  },

  data() {
    return {
      opened: this.item.initialOpened,
      active: this.item.active,
      selected: false,
      isLeaf: false,
      isLoading: false,
      dragEl: null,
      dragStartX: 0,
      dragStartY: 0,
      mouseStartX: 0,
      mouseStartY: 0,
      rootParent: null,
      checkedGhost: false,
      currentEditElement: null,
    };
  },

  computed: {
    checked: {
      get() {
        return this.item.checked;
      },
      set(isChecked) {
        this.item.checked = isChecked;
      },
    },

    activeElementId() {
      return this.$route.params[this.item.activeElementId] || null;
    },

    isOpened() {
      if (this.item.initialOpened) {
        this.openTreeItem(true);
        this.getTreeItemChildren(this.item);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.item.initialOpened = false;
      }
      return this.opened;
    },

    isDragging() {
      if (this.draggedItem === null) {
        return false;
      }
      return this.draggedItem.data.id === this.item.data.id;
    },

    styling() {
      return {
        'is--dragging': this.isDragging,
        'is--active': this.active,
        'is--opened': this.isOpened,
        'is--no-children': this.item.childCount <= 0,
        'is--marked-inactive': this.markInactive && !this.item.data.active,
        'is--focus': this.shouldFocus && this.activeFocusId === this.item.id,
        'is--no-checkbox': !this.displayCheckbox,
        'is--highlighted': this.isHighlighted,
        'is--disabled': this.item.disabled,
      };
    },

    dragConf() {
      return {
        delay: 300,
        validDragCls: null,
        dragGroup: 'sw-tree-item',
        data: this.item,
        onDragStart: this.dragStart,
        onDragEnter: this.onMouseEnter,
        onDrop: this.dragEnd,
        preventEvent: true,
        disabled: !this.sortable,
      };
    },

    parentScope() {
      let parentNode = this.$parent;

      // eslint-disable-next-line
      while (parentNode.$options._componentTag !== 'sw-tree') {
        if (parentNode.$parent) {
          parentNode = parentNode.$parent;
        }

        break;
      }

      return parentNode;
    },

    toolTip() {
      if (this.contextMenuTooltipText !== null) {
        return {
          showDelay: 300,
          message: this.contextMenuTooltipText,
          disabled: !this.disableContextMenu,
        };
      }

      return {
        showDelay: 300,
        message: this.$tc(`${this.translationContext}.general.actions.actionsDisabledInLanguage`),
        disabled: !this.disableContextMenu,
      };
    },

    isDisabled() {
      return this.currentEditElement !== null || this.disableContextMenu;
    },

    isHighlighted() {
      return this.getIsHighlighted(this.item);
    },
  },

  watch: {
    activeElementId(newId) {
      this.active = newId === this.item.id;
    },

    newElementId(newId) {
      this.currentEditElement = newId;
    },

    activeParentIds: {
      handler() {
        if (this.activeParentIds) {
          this.checkedGhost = this.activeParentIds.indexOf(this.item.id) >= 0;
        }
      },
      immediate: true,
    },

    activeItemIds: {
      handler() {
        if (this.activeItemIds) {
          this.checked = this.activeItemIds.indexOf(this.item.id) >= 0;
        }
      },
      immediate: true,
    },
  },

  updated() {
    this.updatedComponent();
  },

  mounted() {
    this.mountedComponent();
  },

  methods: {
    updatedComponent() {
      if (this.item.children.length > 0) {
        this.isLoading = false;
      }
    },

    mountedComponent() {
      if (this.item.active) {
        if (this.$el.querySelector('.sw-tree-item.is--active input')) {
          this.$el.querySelector('.sw-tree-item.is--active input').focus();
        }
      }
      if (this.newElementId) {
        this.currentEditElement = this.newElementId;
        this.editElementName();
      }
    },

    openTreeItem(open = !this.opened) {
      if (this.isDragging) {
        return;
      }
      this.opened = open;
    },

    getTreeItemChildren(treeItem) {
      if (this.isDragging || this.isLoading) {
        return;
      }

      if (treeItem.children.length <= 0) {
        this.isLoading = true;

        this.getItems(treeItem.data.id, treeItem.data.schema);
      }
    },

    getItems(args, schema) {
      return this.$parent.getItems(args, schema);
    },

    dragStart(config, element, dragElement) {
      if (this.isDragging || this.isLoading) {
        return;
      }

      this.dragEl = dragElement;
      this.$parent.startDrag(this);
    },

    dragEnd() {
      this.$parent.endDrag();
    },

    onMouseEnter(dragData, dropData) {
      if (!dropData) {
        return;
      }

      this.$parent.moveDrag(dragData, dropData);
    },

    // Bubbles this method to the root tree from any item depth
    startDrag(draggedComponent) {
      return this.$parent.startDrag(draggedComponent);
    },

    // Bubbles this method to the root tree from any item depth
    endDrag() {
      this.$parent.endDrag();
    },

    // Bubbles this method to the root tree from any item depth
    moveDrag(draggedComponent, droppedComponent) {
      return this.$parent.moveDrag(draggedComponent, droppedComponent);
    },

    // Bubbles this method to the root tree from any item depth
    emitCheckedItem(item) {
      this.$emit('check-item', item);
    },

    // Checks the item
    toggleItemCheck(event, item) {
      if (this.checkedGhost && !item.checked) {
        this.checked = true;
        this.item.checked = true;
      } else {
        this.checked = event;
        this.item.checked = event;
      }

      this.$emit('check-item', item);
    },

    addSubElement(item) {
      this.parentScope.addSubElement(item);
    },

    addElement(item, pos) {
      this.parentScope.addElement(item, pos);
    },

    duplicateElement(contextItem) {
      this.parentScope.duplicateElement(contextItem);
    },

    onDuplicate(item) {
      this.duplicateElement(item);
      this.openTreeItem(true);
    },

    editElementName() {
      this.$nextTick(() => {
        const elementNameField = this.$el.querySelector('.sw-tree-detail__edit-tree-item input');
        if (elementNameField) {
          elementNameField.focus();
        }
      });
    },

    onFinishNameingElement(draft, event) {
      this.parentScope.onFinishNameingElement(draft, event);
    },

    onBlurTreeItemInput(item) {
      this.abortCreateElement(item);
    },

    onCancelSubmit(item) {
      this.abortCreateElement(item);
    },

    abortCreateElement(item) {
      this.parentScope.abortCreateElement(item);
    },

    deleteElement(item) {
      this.parentScope.onDeleteElements(item);
    },

    getName(item) {
      if (item.data.translated) {
        return item.data.name || item.data.translated.name;
      }

      return item.data.name;
    },

    getActiveIconColor(item) {
      if (item.data?.active) {
        return item.data.active === true ? '#37d046' : '#d1d9e0';
      }

      return '#d1d9e0';
    },

    showItemUrl(item) {
      if (this.getItemUrl) {
        return this.getItemUrl(item);
      }

      return false;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

$sw-tree-item-color-border: $color-gray-300;
$sw-tree-item-color-background: $color-gray-50;
$sw-tree-item-color-text: $color-darkgray-200;

.sw-tree-item {
  &.is--dragging {
    user-select: none;
    pointer-events: none;

    .sw-tree-item__element {
      background: transparent;
      border: 1px dashed $sw-tree-item-color-border;

      .sw-tree-item__leaf,
      .sw-tree-item__toggle,
      .sw-tree-item__icon,
      .sw-tree-item__content,
      .sw-tree-item__actions,
      .sw-tree-item__child-count,
      .sw-tree-item__selection {
        display: none;
      }
    }

    .sw-tree-item__children {
      .sw-tree-item__element {
        border-bottom: 1px dashed $sw-tree-item-color-border;
        border-left: 1px dashed $sw-tree-item-color-border;
        border-top: 0 none;

        &::before {
          display: none;
        }
      }
    }
  }

  &.is--drag-element {
    user-select: none;
    pointer-events: none;
    background: $color-white;
    box-shadow: 0 0 5px 1px $color-shopware-brand-500;

    .sw-tree-item__child-count {
      background: $color-shopware-brand-500;
      color: $color-white;
    }

    .sw-tree-item__actions {
      display: none;
    }

    .sw-tree-item__children {
      display: none;
    }
  }

  &.is--sortable {
    .sw-tree-item__grip,
    .sw-tree-item__content {
      cursor: move;
      user-select: none;
    }
  }

  &.is--no-checkbox {
    .sw-tree-item__element {
      grid-template-columns: 30px 0 20px auto 50px;
    }
  }

  .sw-tree-item__element {
    height: 42px;
    display: grid;
    grid-template-columns: 30px 24px 20px auto 50px;
    grid-column-gap: 2px;
    align-items: center;
    align-content: center;
    padding: 0;
    font-size: 14px;
    color: $sw-tree-item-color-text;
    border-radius: $border-radius-default;

    &:hover {
      background: $sw-tree-item-color-background;

      .sw-tree-item__icon,
      .sw-tree-item__content {
        color: $color-shopware-brand-500;
      }
    }
  }

  &.is--active {
    > .sw-tree-item__element {
      background: $sw-tree-item-color-background;

      .sw-tree-item__icon,
      .sw-tree-item__content {
        color: $color-shopware-brand-500;
      }
    }
  }

  &.is--marked-inactive {
    .sw-tree-item__label {
      color: lighten($color-darkgray-200, 30);
    }
  }

  &.is--focus {
    > .sw-tree-item__element {
      background-color: lighten($color-shopware-brand-500, 40);
    }
  }

  &.is--highlighted > .sw-tree-item__element {
    .sw-tree-item__label {
      background-color: $color-gray-100;
      padding: 1px 3px;
      border-radius: $border-radius-default;
    }
  }

  &.is--disabled {
    & > .sw-tree-item__element {
      &:hover {
        cursor: not-allowed;
      }

      .sw-tree-item__label {
        color: $color-gray-500;
      }

      .sw-tree-item__icon {
        color: $color-gray-500;
      }
    }
  }

  .sw-tree-item__toggle {
    width: 15px;
    height: 24px;
    line-height: 20px;
    text-align: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    justify-self: center;

    .sw-loader {
      background: none;
    }
  }

  .sw-tree-item__icon {
    width: 45px;
    height: 22px;
  }

  .sw-tree-item__content {
    .sw-field {
      width: auto;
      margin-bottom: 0;
    }
  }

  .sw-tree-item__actions {
    text-align: right;
    margin-left: 4px;

    .sw-context-button__button {
      padding: 0 6px;

      .sw-icon {
        width: 18px;
        height: 18px;
      }
    }

    .sw-button {
      width: 100%;
      height: 26px;
      padding: 2px 8px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  .sw-tree-item__children {
    position: relative;
    padding-left: 32px;

    .sw-tree-item {
      &.is--no-children > .sw-tree-item__element {
        &::before {
          width: 35px;
        }
      }

      &.is--dragging > .sw-tree-item__element {
        &::before {
          display: none;
        }
      }

      .sw-tree-item__children {
        border-left: 1px solid $color-gray-300;
      }
    }
  }
}

.sw-tree-item__element {
  height: 42px;
  display: grid;
  color: $sw-tree-item-color-text;
  grid-template-columns: 30px 24px 20px auto 50px;
  grid-column-gap: 2px;
  align-items: center;
  align-content: center;
  padding: 0;
  font-size: 14px;

  &:hover {
    background: $sw-tree-item-color-background;

    .sw-tree-item__icon,
    .sw-tree-item__content {
      color: $color-shopware-brand-500;
    }
  }

  .sw-tree-item__content {
    .tree-link {
      overflow: hidden;
      text-overflow: ellipsis;
      color: inherit;
      text-decoration: inherit;
      padding: 12px 0;
      display: block;
    }
  }

  &.is--drag-element {
    user-select: none;
    pointer-events: none;
    background: $color-white;
    box-shadow: 0 0 5px 1px $color-shopware-brand-500;

    .sw-tree-item__child-count {
      background: $color-shopware-brand-500;
      color: $color-white;
    }

    .sw-tree-item__actions {
      display: none;
    }

    .sw-tree-item__children {
      display: none;
    }
  }

  &.is--sortable {
    .sw-tree-item__grip,
    .sw-tree-item__content {
      cursor: move;
      user-select: none;
    }
  }

  .sw-tree-item__child-count {
    width: 20px;
    height: 20px;
    padding: 2px 6px;
    margin-left: 10px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    border-radius: $border-radius-default;
    background: $color-gray-100;
    color: $color-darkgray-200;
  }

  .sw-field--checkbox {
    margin-bottom: 0;
  }
}
</style>
