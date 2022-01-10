<template>
  <div class="sw-tree">
    <slot name="search">
      <div
        v-if="searchable"
        class="sw-tree__search"
      >
        <sw-text-field
          v-model="currentTreeSearch"
          name="treeSearch"
          :placeholder="$tc('sw-tree.general.placeholderSearch')"
          size="small"
          @input="searchItems"
        >
          <template #prefix>
            <sw-icon name="default-action-search" />
          </template>
        </sw-text-field>
      </div>
    </slot>

    <slot name="headline">
      <div
        v-if="checkedElementsCount > 0"
        class="sw-tree-actions__headline"
      >
        <span> {{ $tc(`${translationContext}.general.treeHeadSelected`, 0, { count: checkedElementsCount }) }}:</span>
        <sw-button
          class="sw-tree-actions__delete_categories"
          :disabled="!allowDeleteCategories"
          variant="danger"
          size="small"
          @click="onDeleteElements(null)"
        >
          {{ $tc('global.default.delete') }}
        </sw-button>
      </div>

      <div
        v-else
        class="sw-tree-actions__headline"
      >
        <span>{{ $tc(`${translationContext}.general.treeHeadline`) }}</span>
      </div>
    </slot>

    <div class="sw-tree__content">
      <div class="tree-items">

        <sw-tree-input-field
          v-if="hasNoItems && allowCreateCategories"
          :disabled="disableContextMenu"
          @new-item-create="onCreateNewItem"
        />
        <slot
          v-else
          name="items"
          :treeItems="treeItems"
          :draggedItem="draggedItem"
          :newElementId="newElementId"
          :checkItem="checkItem"
          :translationContext="translationContext"
          :onChangeRoute="onChangeRoute"
          :sortable="sortable"
          :disableContextMenu="disableContextMenu"
          :selectedItemsPathIds="selectedItemsPathIds"
          :checkedItemIds="checkedItemIds"
        >

          <sw-tree-item
            v-for="item in treeItems"
            :key="item.id"
            :item="item"
            :translation-context="translationContext"
            :dragged-item="draggedItem"
            :active-parent-ids="selectedItemsPathIds"
            :active-item-ids="checkedItemIds"
            @check-item="checkItem"
          />

        </slot>

        <sw-loader v-if="isLoading" />

      </div>
    </div>

    <sw-modal
      v-if="showDeleteModal"
      :title="$tc('global.default.warning')"
      variant="small"
      @modal-close="onCloseDeleteModal"
    >
      <div v-if="toDeleteItem">
        <p
          v-if="toDeleteItem.childCount > 0"
          class="sw_tree__confirm-delete-text"
        >
          {{ $tc(`${translationContext}.modal.textDeleteConfirm`, 0, { name: toDeleteItem.data.name || toDeleteItem.data.translated.name }) }}<br>
          <b>{{ $tc(`${translationContext}.modal.textDeleteChildrenConfirm`) }}</b>
        </p>
        <p
          v-else
          class="sw_tree__confirm-delete-text"
        >
          {{ $tc(`${translationContext}.modal.textDeleteConfirm`, 0, { name: toDeleteItem.data.name || toDeleteItem.data.translated.name }) }}
        </p>
      </div>
      <div v-else>
        <p
          v-if="checkedElementsChildCount > 0"
          class="sw_tree__confirm-delete-text"
        >
          {{ $tc(`${translationContext}.modal.textDeleteMultipleConfirm`, 0, { count: checkedElementsCount }) }}<br>
          <b>{{ $tc(`${translationContext}.modal.textDeleteChildrenConfirm`) }}</b>
        </p>
        <p
          v-else
          class="sw_tree__confirm-delete-text"
        >
          {{ $tc(`${translationContext}.modal.textDeleteMultipleConfirm`, 0, { count: checkedElementsCount }) }}
        </p>
      </div>

      <template slot="modal-footer">
        <sw-button
          size="small"
          @click="onCloseDeleteModal"
        >
          {{ $tc('global.default.cancel') }}
        </sw-button>

        <sw-button
          variant="danger"
          size="small"
          @click="onConfirmDelete()"
        >
          {{ $tc('global.default.delete') }}
        </sw-button>
      </template>
    </sw-modal>
  </div>
</template>

<script>
import SwTextField from '../../form/sw-text-field/sw-text-field.vue';
import SwIcon from '../../base/sw-icon/sw-icon.vue';
import SwButton from '../../base/sw-button/sw-button.vue';
import SwLoader from '../../utils/sw-loader/sw-loader.vue';
import SwTreeItem from '../sw-tree-item/sw-tree-item.vue';
import SwTreeInputField from '../sw-tree-input-field/sw-tree-input-field.vue';
import SwModal from '../../base/sw-modal/sw-modal.vue';

export default {
  name: 'sw-tree',

  components: {
    'sw-tree-item': SwTreeItem,
    'sw-tree-input-field': SwTreeInputField,
    'sw-text-field': SwTextField,
    'sw-icon': SwIcon,
    'sw-button': SwButton,
    'sw-loader': SwLoader,
    'sw-modal': SwModal,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },

    rootParentId: {
      type: String,
      required: false,
      default: null,
    },

    parentProperty: {
      type: String,
      required: false,
      default: 'parentId',
    },

    afterIdProperty: {
      type: String,
      required: false,
      default: 'afterId',
    },

    childCountProperty: {
      type: String,
      required: false,
      default: 'childCount',
    },

    searchable: {
      type: Boolean,
      required: false,
      default: true,
    },

    activeTreeItemId: {
      type: String,
      required: false,
      default: '',
    },

    routeParamsActiveElementId: {
      type: String,
      required: false,
      default() {
        return 'id';
      },
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

    bindItemsToFolder: {
      type: Boolean,
      default: false,
    },

    sortable: {
      type: Boolean,
      default: true,
    },

    checkItemsInitial: {
      type: Boolean,
      default: false,
    },

    allowDeleteCategories: {
      type: Boolean,
      default: true,
      required: false,
    },

    allowCreateCategories: {
      type: Boolean,
      default: true,
      required: false,
    },
  },

  data() {
    return {
      treeItems: [],
      draggedItem: null,
      currentTreeSearch: null,
      isLoading: false,
      newElementId: null,
      contextItem: null,
      currentEditMode: null,
      addElementPosition: null,
      // eslint-disable-next-line vue/no-reserved-keys
      _eventFromEdit: null,
      createdItem: null,
      checkedElements: {},
      checkedElementsCount: 0,
      showDeleteModal: false,
      toDeleteItem: null,
      checkedElementsChildCount: 0,
    };
  },

  computed: {
    activeElementId() {
      return this.$route.params[this.routeParamsActiveElementId] || null;
    },

    isSortable() {
      if (this.currentTreeSearch !== null) {
        return false;
      }

      return this.sortable;
    },

    isSearched() {
      return this.currentTreeSearch !== null && this.currentTreeSearch.length > 0;
    },

    hasActionSlot() {
      return this.$slots && this.$slots.actions;
    },

    hasNoItems() {
      if (this.items.length === 1 && this.items[0] && this.items[0].isDeleted) {
        return true;
      }
      return this.items.length < 1;
    },

    selectedItemsPathIds() {
      return Object.keys(this.checkedElements).reduce((acc, itemId) => {
        const item = this.findById(itemId);

        // get each parent id
        const pathIds = item?.data?.path?.split('|').filter((pathId) => pathId.length > 0) ?? '';

        // add parent id to accumulator
        return [...acc, ...pathIds];
      }, []);
    },

    checkedItemIds() {
      return Object.keys(this.checkedElements);
    },
  },

  watch: {
    items: {
      immediate: true,
      handler() {
        this.treeItems = this.getTreeItems(this.isSearched ? null : this.rootParentId);
        this._eventFromEdit = null;
      },
    },

    activeTreeItemId(val) {
      if (val && this.activeElementId) {
        this.openTreeById();
      }
    },
  },

  created() {
    this.createdComponent();
  },

  destroyed() {
    this.$emit('checked-elements-count', 0);
  },

  methods: {
    createdComponent() {
      if (this.activeTreeItemId && this.activeElementId) {
        this.openTreeById();
      }
      this.$emit('checked-elements-count', this.checkedElementsCount);
    },

    getItems(parentId = this.rootParentId, searchTerm = null) {
      this.$emit('get-tree-items', parentId, searchTerm);
    },

    searchItems: debounce(function debouncedTreeSearch() {
      this.$emit('search-tree-items', this.currentTreeSearch);
    }, 600),

    getTreeItems(parentId) {
      const treeItems = [];
      this.items.forEach((item) => {
        if (item.isDeleted) {
          return;
        }

        if (parentId === null && typeof this.items.find((i) => i.id === item.parentId) !== 'undefined') {
          return;
        }

        if (parentId !== null && item[this.parentProperty] !== parentId) {
          return;
        }

        const hasChildCountProperty = item.hasOwnProperty(this.childCountProperty);
        const childCount = hasChildCountProperty ? item[this.childCountProperty] : 0;

        const alreadyLoadedTreeItem = this.findById(item.id);

        treeItems.push({
          data: item,
          id: item.id,
          schema: item.schema,
          parentId,
          childCount,
          children: this.getTreeItems(item.id),
          initialOpened: false,
          active: false,
          activeElementId: this.routeParamsActiveElementId,
          checked: alreadyLoadedTreeItem?.checked ?? !!this.checkItemsInitial,
          disabled: item.disabled,
          disabledToolTipText: item.disabledToolTipText,
          [this.afterIdProperty]: item[this.afterIdProperty],
        });
      });
      return sort.afterSort(treeItems, this.afterIdProperty);
    },

    updateSorting(items) {
      let lastId = null;

      items.forEach((item) => {
        item.data[this.afterIdProperty] = lastId;
        lastId = item.id;
      });

      return items;
    },

    startDrag(draggedComponent) {
      draggedComponent.opened = false;
      this.draggedItem = draggedComponent.item;
      this.$emit('drag-start');
    },

    endDrag() {
      if (!this.droppedItem) {
        this.draggedItem = null;
        return;
      }

      const oldParentId = this.draggedItem.data.parentId;
      const newParentId = this.droppedItem.data.parentId;

      // item moved into other tree, update count
      if (oldParentId !== newParentId) {
        if (oldParentId !== null) {
          const draggedParent = this.findById(oldParentId);
          if (draggedParent) {
            draggedParent.childCount -= 1;
            draggedParent.data.childCount -= 1;
          }
        }

        if (newParentId !== null) {
          const droppedParent = this.findById(newParentId);
          droppedParent.childCount += 1;
          droppedParent.data.childCount += 1;
        }

        this.draggedItem.data.parentId = this.droppedItem.data.parentId;
      }

      const tree = this.findTreeByParentId(this.draggedItem.parentId);
      this.updateSorting(tree);

      if (this.draggedItem.parentId !== this.droppedItem.parentId) {
        const dropTree = this.findTreeByParentId(this.droppedItem.parentId);
        this.updateSorting(dropTree);
      }

      // bundle drag event data for consumer
      const eventData = {
        draggedItem: this.draggedItem,
        droppedItem: this.droppedItem,
        oldParentId,
        newParentId,
      };

      // reset event items
      this.draggedItem = null;
      this.droppedItem = null;

      this.$emit('drag-end', eventData);
    },

    moveDrag(draggedComponent, droppedComponent) {
      if (!draggedComponent || !droppedComponent) {
        return;
      }

      if (draggedComponent.id === droppedComponent.id) {
        return;
      }

      const sourceTree = this.findTreeByParentId(draggedComponent.parentId);
      const targetTree = this.findTreeByParentId(droppedComponent.parentId);

      const dragItemIdx = sourceTree.findIndex((i) => i.id === draggedComponent.id);
      const dropItemIdx = targetTree.findIndex((i) => i.id === droppedComponent.id);

      if (dragItemIdx < 0 || dropItemIdx < 0) {
        return;
      }

      droppedComponent = targetTree[dropItemIdx];

      if (!this.bindItemsToFolder && draggedComponent.parentId !== droppedComponent.parentId) {
        sourceTree.splice(dragItemIdx, 1);
        targetTree.splice(dropItemIdx, 1, draggedComponent);
        targetTree.splice(dropItemIdx + 1, 0, droppedComponent);
        draggedComponent.parentId = droppedComponent.parentId;
      } else if (draggedComponent.parentId === droppedComponent.parentId) {
        targetTree.splice(dropItemIdx, 1, draggedComponent);
        sourceTree.splice(dragItemIdx, 1, droppedComponent);
      }

      this.droppedItem = droppedComponent;
    },

    openTreeById(id = this.activeElementId) {
      const item = this.findById(id);

      if (item === null) {
        return;
      }

      if (this.activeElementId === item.id) {
        item.active = true;
      } else {
        item.initialOpened = true;
      }
      const activeElementParentId = item.parentId;

      if (item.parentId !== null) {
        this.openTreeById(activeElementParentId);
      }
    },

    findTreeByParentId(parentId) {
      const queue = [{ id: null, children: this.treeItems }];

      while (queue.length > 0) {
        const next = queue.shift();

        if (next.id === parentId) {
          return next.children;
        }

        if (next.children.length) {
          queue.push(...next.children);
        }
      }

      return null;
    },

    findById(id) {
      const queue = [{ id: null, children: this.treeItems }];

      while (queue.length > 0) {
        const next = queue.shift();

        if (next.id === id) {
          return next;
        }

        if (next.children.length) {
          queue.push(...next.children);
        }
      }

      return null;
    },

    onCreateNewItem(name) {
      if (!name.length || name.length <= 0) {
        return;
      }

      const newElem = this.$parent.createNewElement(null, null, name);

      this.saveItems();

      const item = this.getNewTreeItem(newElem);

      this.addElement(item, 'after');
    },

    addSubElement(contextItem) {
      if (!contextItem || !contextItem.data || !contextItem.data.id) {
        return;
      }

      if (this.contextItem === null) {
        this.contextItem = contextItem;
      }
      this.currentEditMode = this.addSubElement;

      this.$parent.getChildrenFromParent(contextItem.id).then(() => {
        const parentElement = contextItem;
        const newElem = this.$parent.createNewElement(contextItem, contextItem.id);
        const newTreeItem = this.getNewTreeItem(newElem);

        parentElement.data.childCount += 1;
        this.newElementId = newElem.id;
        this.createdItem = newTreeItem;
      });
    },

    duplicateElement(contextItem) {
      this.$parent.duplicateElement(contextItem);
    },

    addElement(contextItem, pos) {
      const newElem = this.$parent.createNewElement(contextItem);

      const newTreeItem = this.getNewTreeItem(newElem);

      if (this.contextItem === null) {
        this.contextItem = contextItem;
      }
      if (this.addElementPosition === null) {
        this.addElementPosition = pos;
      }

      if (!contextItem.hasOwnProperty('parentId')) {
        contextItem.parentId = null;
      }

      this.currentEditMode = this.addElement;

      const targetTree = this.findTreeByParentId(contextItem.parentId);

      const newItemIdx = this.treeItems.findIndex((i) => i.id === newTreeItem.id);
      const contextItemIdx = targetTree.findIndex((i) => i.id === contextItem.id);

      if (pos === 'before') {
        targetTree.splice(contextItemIdx, 1, newTreeItem, contextItem);
      } else {
        this.contextItem = newTreeItem;
        targetTree.splice(contextItemIdx, 1, contextItem, newTreeItem);
      }

      this.treeItems.splice(newItemIdx, 1);
      this.updateSorting(targetTree);
      this.newElementId = newElem.id;
      this.createdItem = newTreeItem;
    },

    getNewTreeItem(elem) {
      const hasChildCountProperty = elem.hasOwnProperty(this.childCountProperty);
      const childCount = hasChildCountProperty ? elem[this.childCountProperty] : 0;

      const hasParentProperty = elem.hasOwnProperty('parentId');
      const parentId = hasParentProperty ? elem.parentId : null;

      return {
        data: elem,
        id: elem.id,
        parentId,
        childCount,
        children: 0,
        initialOpened: false,
        active: false,
      };
    },

    deleteElement(item) {
      const targetTree = this.findTreeByParentId(item.parentId);
      const deletedItemIdx = targetTree.findIndex((i) => i.id === item.id);
      if (item.children.length > 0) {
        item.children.forEach((child) => {
          child.data.isDeleted = true;
        });
      }
      targetTree.splice(deletedItemIdx, 1);
      this.updateSorting(targetTree);
      this.$emit('delete-element', item);
      this.saveItems();
    },

    abortCreateElement(item) {
      if (this._eventFromEdit) {
        this._eventFromEdit = null;
        return;
      }

      if (this.currentEditMode !== null) {
        this.deleteElement(item);

        const parent = this.findById(item.parentId);
        if (parent.id === item.parentId && parent.data) {
          parent.data.childCount -= 1;
        }
      }

      this.contextItem = null;
      this.newElementId = null;
      this.currentEditMode = null;
      this.addElementPosition = null;
      this.$emit('editing-end', { parentId: item.parentId });
    },

    onFinishNameingElement(draft, event) {
      if (this.createdItem) {
        this.createdItem.data.save().then(() => {
          this.createdItem = null;
          this.saveItems();
          if (this.currentEditMode !== null && this.contextItem) {
            this.currentEditMode(this.contextItem, this.addElementPosition);
          }
        });
      }
      this._eventFromEdit = event;
      this.newElementId = null;
    },

    deleteSelectedElements() {
      if (this.checkedElements.length <= 0) {
        return;
      }

      if (typeof this.$listeners['batch-delete'] === 'function') {
        this.$emit('batch-delete', this.checkedElements);
      } else {
        Object.values(this.checkedElements).forEach((itemId) => {
          const item = this.findById(itemId);
          if (item) {
            this.deleteElement(item);
          }
        });
      }

      this.checkedElements = {};
      this.checkedElementsCount = 0;
      this.checkedElementsChildCount = 0;
      this.$emit('checked-elements-count', this.checkedElementsCount);
    },

    checkItem(item) {
      if (item.checked) {
        if (item.childCount > 0) {
          this.checkedElementsChildCount += 1;
        }
        this.$set(this.checkedElements, item.id, item.id);
        this.checkedElementsCount += 1;
      } else {
        if (item.childCount > 0) {
          this.checkedElementsChildCount -= 1;
        }
        this.$delete(this.checkedElements, item.id);
        this.checkedElementsCount -= 1;
      }

      this.$emit('checked-elements-count', this.checkedElementsCount);
    },

    saveItems() {
      this.$emit('save-tree-items');
    },

    onDeleteElements(item) {
      this.toDeleteItem = item;
      this.showDeleteModal = true;
    },

    onCloseDeleteModal() {
      this.showDeleteModal = false;
      this.toDeleteItem = null;
    },

    onConfirmDelete() {
      if (this.toDeleteItem) {
        this.deleteElement(this.toDeleteItem);
      } else {
        this.deleteSelectedElements();
      }
      this.showDeleteModal = false;
      this.toDeleteItem = null;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

.sw-tree {
  height: 100%;
  width: 100%;
  position: relative;
  border: 1px solid #dcdde2;

  .sw-tree__search {
    padding: 10px 20px;
    border-bottom: 1px solid #dcdde2;
  }

  .sw-tree-actions__headline {
    display: grid;
    color: $color-darkgray-200;
    font-size: 18px;
    padding: 21px 40px;
    grid-template-columns: 1fr auto;
    align-items: center;
    line-height: 32px;
    border-bottom: 1px solid $color-gray-300;

    .sw-tree__batch-delete {
      color: $color-crimson-500;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .sw-tree__content {
    min-height: 400px;
    max-height: 600px;
    position: relative;
    overflow: auto;
    width: 100%;
    padding: 0;

    .tree-items {
      padding: 16px 16px 0 16px;
      min-width: 100%;
    }

    .sw-tree-item {
      min-width: 100%;
    }

    .sw-tree-item__children {
      border-left: none !important;

      &::before {
        content: '';
        background: $color-gray-300;
        position: absolute;
        left: 16px;
        height: 100%;
        width: 1px;
      }
    }

    .sw-tree-item__element {
      padding: 0;
      width: 100%;
    }

    .sw-tree-item__content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 8px;
      max-width: 340px;
    }
  }
}
</style>
