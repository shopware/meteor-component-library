<template>
  <sw-popover
    class="sw-data-table-settings"
    :title="$t('sw-data-table-settings.title')"
    :child-views="tableSettingsChildViews"
  >
    <template #trigger="{ toggleFloatingUi }">
      <sw-button
        variant="secondary"
        square
        aria-label="Toggle table settings"
        @click="toggleFloatingUi"
      >
        <sw-icon name="solid-cog-s" />
      </sw-button>
    </template>

    <template #popover-items__base="{ changeView }">
      <sw-popover-item 
        :label="$t('sw-data-table-settings.columnOrder.title')"
        border-bottom
        show-options
        :on-label-click="() => changeView('columnOrder')"
        :options-count="columns.length"
        @click-options="() => changeView('columnOrder')"
      />

      <!-- 
        More popover items will be added in the future. 
        Some examples can be found in the sw-popover story.
      -->

      <sw-popover-item
        type="critical"
        :label="$t('sw-data-table-settings.resetAllChanges')"
        icon="solid-undo"
        :on-label-click="resetAllChanges"
      />
    </template>

    <template #popover-items__columnOrder>
      <sw-popover-item-result
        :groups="columnGroups"
        :options="columnOrderOptions"
        draggable
        hide-search
        hidable
        @change-visibility="onColumnChangeVisibility"
        @click-group-action="onColumnClickGroupAction"
        @change-order="onColumnChangeOrder"
      />
    </template>
  </sw-popover>
</template>

<script lang="ts">
import { getCurrentInstance, defineComponent, computed, PropType } from "vue";
import SwButton from "../../../../form/sw-button/sw-button.vue";
import SwIcon from "../../../../icons-media/sw-icon/sw-icon.vue";
import SwPopover from '../../../../overlay/sw-popover/sw-popover.vue';
import SwPopoverItem from '../../../../overlay/sw-popover-item/sw-popover-item.vue';
import SwPopoverItemResult from '../../../../overlay/sw-popover-item-result/sw-popover-item-result.vue';
import type { ColumnDefinition } from '../../sw-data-table.vue';
import type { Option as ItemResultOption } from '../../../../overlay/sw-popover-item-result/sw-popover-item-result.vue';

export default defineComponent({
  name: 'SwDataTableSettings',
  components: {
    "sw-button": SwButton,
    "sw-icon": SwIcon,
    'sw-popover': SwPopover,
    'sw-popover-item': SwPopoverItem,
    'sw-popover-item-result': SwPopoverItemResult,
  },
  props: {
    columns: {
      type: Array as PropType<ColumnDefinition[]>,
      required: true,
    },
  },
  emits: ['reset-all-changes', 'change-column-order', 'change-column-visibility'],
  i18n: {
    messages: {
      en: {
        "sw-data-table-settings": {
          title: "Settings",
          resetAllChanges: "Reset all changes",
          columnOrder: {
            title: 'Columns',
            columnGroups: {
              labelShown: 'Shown in table',
              actionLabelShown: 'Hide all',
              labelHidden: 'Hidden in table',
              actionLabelHidden: 'Show all',
            }
          }
        },
      },
      de: {
        "sw-data-table-settings": {
          title: "Einstellungen",
          resetAllChanges: "Alle Änderungen zurücksetzen",
        },
      },
    },
  },
  setup(props, { emit }) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    const $t = getCurrentInstance()?.proxy.$t.bind(getCurrentInstance()?.proxy)!;

    /***
     * Table settings
     */
    const tableSettingsChildViews = computed(() => {
      return [
        {
          name: 'columnOrder',
          title: $t('sw-data-table-settings.columnOrder.title'),
        },
      ]
    });

    /**
    * Column order view 
    */
    const columnGroups = computed(() => {
      return [
        {
          id: 'visible',
          label: $t('sw-data-table-settings.columnOrder.columnGroups.labelShown') as string,
          actionLabel: $t('sw-data-table-settings.columnOrder.columnGroups.actionLabelShown') as string,
        },
        {
          id: 'hidden',
          label: $t('sw-data-table-settings.columnOrder.columnGroups.labelHidden') as string,
          actionLabel: $t('sw-data-table-settings.columnOrder.columnGroups.actionLabelHidden') as string,
        }
      ]
    })

    const columnOrderOptions = computed<ItemResultOption[]>(() => {
      return props.columns.map((column) => {
        return {
          id: column.property,
          label: column.label,
          parentGroup: (column.visible ?? true) ? 'visible' : 'hidden',
          position: column.position,
          isVisible: column.visible ?? true,
        }
      });
    })

    const onColumnChangeVisibility = (columnProperty: string, visibility: boolean) => {
      emit('change-column-visibility', columnProperty, visibility);
    }

    const onColumnClickGroupAction = (groupId: string) => {
      props.columns.forEach((column) => {
        onColumnChangeVisibility(column.property, groupId === 'visible' ? false : true);
      })
    }

    const onColumnChangeOrder = ({ itemId, dropZone, dropId }: {
      itemId?: string,
      dropZone: 'before' | 'after',
      dropId?: string,
    }) => {
      const targetColumn = props.columns.find((column) => column.property === dropId);

      if (!itemId) {
        return;
      }

      onColumnChangeVisibility(itemId, (targetColumn?.visible ?? true));
      emit('change-column-order', { itemId, dropZone, dropId });
    };

    /**
    * Base view
    */

    const resetAllChanges = () => {
      emit('reset-all-changes')
    }

    return {
      tableSettingsChildViews,
      resetAllChanges,
      columnGroups,
      columnOrderOptions,
      onColumnChangeVisibility,
      onColumnClickGroupAction,
      onColumnChangeOrder
    };
  },
});
</script>

<style lang="scss">
@import "../../../../assets/scss/variables.scss";

.sw-data-table-settings {

}
</style>
