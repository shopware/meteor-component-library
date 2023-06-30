<template>
  <!-- Height needs to be set inline because the card has an sw-ignore-class component as a wrapper -->
  <sw-card
    class="sw-data-table"
    :class="swDataTableClasses"
    style="height: 100%"
    :title="title"
    :subtitle="subtitle"
  >
    <template #toolbar>
      <sw-search
        v-if="!disableSearch"
        size="small"
        :value="searchValue"
        @change="emitSearchValueChange"
      />
    </template>

    <template #default>
      <div
        ref="tableWrapper"
        class="sw-data-table__table-wrapper"
      >
        <table ref="dataTable">
          <thead>
            <tr>
              <template v-for="column in sortedColumns">
                <th
                  v-if="isColumnVisible(column)"
                  :key="column.property"
                  :ref="(el) => {
                    if (el) {
                      columnHeaderRefs[column.property] = el;
                    }
                  }"
                  v-draggable="{ ...dragConfig, data: column }"
                  class="sw-data-table__table-wrapper-table-head"
                  :data-header-column-property="column.property"
                  :style="renderColumnHeaderStyle(column)"
                  :data-testid="'column-table-head__' + column.property"
                >
                  <div
                    class="sw-data-table__table-head-dragzone"
                    :data-testid="'column-dragzone__' + column.property"
                  >
                    <div
                      class="sw-data-table__table-head-dragzone-bar"
                      :data-testid="'column-dragzone-bar__' + column.property"
                    >
                      <div
                        class="sw-data-table__table-head-dragzone-indicator"
                      >
                        <sw-icon name="regular-grip-horizontal-s" />
                      </div>
                    </div>
                  </div>

                  <div class="sw-data-table__table-head-inner-wrapper">
                    <span>{{ column.label }}</span>

                    <div
                      v-if="sortBy === column.property"
                      class="sw-data-table__table-head-sorting-icons"
                    >
                      <sw-icon
                        :name="sortDirection === 'ASC' ? 'solid-long-arrow-up' : 'solid-long-arrow-down'"
                        class="sw-data-table__table-head-sort"
                      />
                    </div>
                  </div>

                  <div
                    v-droppable="{ ...dropConfig, data: { ...column, dropZone: 'before' } }"
                    class="sw-data-table__table-head-dropzone-before"
                    :data-testid="'column-dropzone-before__' + column.property"
                  />
                  <div
                    v-droppable="{ ...dropConfig, data: { ...column, dropZone: 'after' } }"
                    class="sw-data-table__table-head-dropzone-after"
                    :data-testid="'column-dropzone-after__' + column.property"
                  />

                  <sw-popover
                    :title="column.label"
                    class="sw-data-table__table-head-column-settings"
                  >
                    <template #trigger="{ toggleFloatingUi }">
                      <div
                        class="sw-data-table__table-head-column-settings-trigger"
                        :data-testid="'column-settings-trigger__' + column.property"
                        @click="toggleFloatingUi"
                      >
                        <!-- DIV Placeholder for clicking to open the column settings popover -->
                      </div>
                    </template>

                    <template #popover-items__base="{ toggleFloatingUi }">
                      <sw-popover-item
                        v-if="column.sortable"
                        :label="$t('sw-data-table.columnSettings.sortAscending')"
                        icon="regular-long-arrow-up"
                        contextual-detail="A -> Z"
                        :on-label-click="() => onColumnSettingsSortChange(column.property, 'ASC', toggleFloatingUi)"
                      />
                      <sw-popover-item
                        v-if="column.sortable"
                        :label="$t('sw-data-table.columnSettings.sortDescending')"
                        icon="regular-long-arrow-down"
                        contextual-detail="Z -> A"
                        :on-label-click="() => onColumnSettingsSortChange(column.property, 'DESC', toggleFloatingUi)"
                      />
                    </template>
                  </sw-popover>

                  <div
                    v-if="column.allowResize !== false"
                    class="sw-data-table__table-head-resizable"
                    @mousedown.prevent.stop="() => startColumnResizing(column)"
                  />
                </th>
              </template>

              <th
                class="sw-data-table__table-settings-button"
              >
                <sw-data-table-settings
                  :columns="sortedColumns"
                  @reset-all-changes="resetAllChanges"
                  @change-column-order="({ itemId, dropId, dropZone }) => changeColumnPosition(itemId, dropId, dropZone)"
                  @change-column-visibility="(columnProperty, visibility) => changeColumnVisibility(columnProperty, visibility)"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, rowIndex) in dataSource"
              :key="data.id"
            >
              <template v-for="column in sortedColumns">
                <td
                  v-if="isColumnVisible(column)"
                  :key="column.property + JSON.stringify(columnChanges[column.property])"
                  :ref="
                    (el) => {
                      setColumnDataCellRefs({ el, column, index: rowIndex });
                    }
                  "
                  :data-cell-column-property="column.property"
                  :style="renderColumnDataCellStyle(column)"
                >
                  <template v-if="isLoading">
                    <sw-skeleton-bar />
                  </template>

                  <template v-else>
                    <!-- Here we add the different renderer -->

                    <!-- TODO: add all renderer -->
                    <sw-data-table-number-renderer
                      v-if="column.renderer === 'number'"
                      :data="data"
                      :column-definition="column"
                      @click="$emit('open-details', data)"
                    />

                    <sw-data-table-text-renderer
                      v-else-if="column.renderer === 'text'"
                      :data="data"
                      :column-definition="column"
                      @click="$emit('open-details', data)"
                    />

                    <sw-data-table-badge-renderer
                      v-else-if="column.renderer === 'badge'"
                      :data="data"
                      :column-definition="column"
                      @click="$emit('open-details', data)"
                    />

                    <sw-data-table-price-renderer
                      v-else-if="column.renderer === 'price'"
                      :data="data"
                      :column-definition="column"
                      @click="$emit('open-details', data)"
                    />
                  </template>
                </td>
              </template>

              <td class="sw-data-table__table-context-button">
                <sw-context-button>
                  <!-- TODO: add translation -->
                  <!-- TODO: add conditions -->
                  <sw-context-menu-item label="Edit" />

                  <sw-context-menu-item
                    disabled
                    label="Disabled"
                  />

                  <sw-context-menu-item
                    type="active"
                    label="Active"
                  />

                  <sw-context-menu-item
                    type="critical"
                    label="Delete"
                  />
                </sw-context-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sw-data-table__scroll-shadow sw-data-table__scroll-shadow-top" />
      <div class="sw-data-table__scroll-shadow sw-data-table__scroll-shadow-right" />
      <div class="sw-data-table__scroll-shadow sw-data-table__scroll-shadow-bottom" />
      <div class="sw-data-table__scroll-shadow sw-data-table__scroll-shadow-left" />
    </template>

    <template #footer>
      <div class="sw-data-table__footer-left">
        <sw-select
          small
          hide-clearable-button
          :options="paginationOptionsConverted"
          :value="paginationLimit"
          @change="emitPaginationLimitChange"
        />
        <span class="sw-data-table__pagination-info-text">
          {{ $t("sw-data-table.itemsPerPage") }}
        </span>
      </div>

      <div class="sw-data-table__footer-right">
        <sw-pagination
          :limit="paginationLimit"
          :current-page="currentPage"
          :total-items="paginationTotalItems"
          @change-current-page="emitPaginationCurrentPageChange"
        />

        <sw-button
          v-if="enableReload"
          square
          aria-label="reload-data"
          @click="emitReload"
        >
          <sw-icon name="solid-undo-s" />
        </sw-button>
      </div>
    </template>
  </sw-card>
</template>

<script lang="ts">
import useScrollPossibilitiesClasses from "./composables/useScrollPossibilitiesClasses";
import { defineComponent, computed, onBeforeUpdate, PropType, ref, set } from "vue";
import SwCard from "../../layout/sw-card/sw-card.vue";
import SwButton from "../../form/sw-button/sw-button.vue";
import SwSelect from "../../form/sw-select/sw-select.vue";
import SwIcon from "../../icons-media/sw-icon/sw-icon.vue";
import SwPagination from "../sw-pagination/sw-pagination.vue";
import SwSearch from '../../navigation/sw-search/sw-search.vue';
import SwContextButton from '../../context-menu/sw-context-button/sw-context-button.vue';
import SwContextMenu from '../../context-menu/sw-context-menu-item/sw-context-menu-item.vue';
import SwDataTableSettings from './sub-components/sw-data-table-settings/sw-data-table-settings.vue';
import SwPopover from '../../overlay/sw-popover/sw-popover.vue';
import SwPopoverItem from '../../overlay/sw-popover-item/sw-popover-item.vue';
import SwSkeletonBar from '../../feedback-indicator/sw-skeleton-bar/sw-skeleton-bar.vue';
import { draggable, DropConfig, DragConfig, droppable } from '../../../directives/dragdrop.directive';
import SwDataTableTextRenderer from './renderer/sw-data-table-text-renderer.vue';
import SwDataTableNumberRenderer from './renderer/sw-data-table-number-renderer.vue';
import SwDataTableBadgeRenderer from './renderer/sw-data-table-badge-renderer.vue';
import SwDataTablePriceRenderer from './renderer/sw-data-table-price-renderer.vue';
import type { SwColorBadgeVariant } from '../../feedback-indicator/sw-color-badge/sw-color-badge.vue';

export interface BaseColumnDefinition {
  label: string; // the label for the column
  property: string; // the value for each entry
  // renderer: "text" | "number" | 'badge' | "price"; // define how each column entry should be rendered
  // renderOptions: unknown; // define options for the renderer
  position: number; // the initial position of the column. Should be defined in 100 steps
  sortable?: boolean; // enable or disable sortability for this column (default=true)
  width?: number; // define the width value for this column
  allowResize?: boolean; // you can disable the possibility for the user to resize this column
  cellWrap?: "nowrap" | "normal";
  visible?: boolean; // you can hide a column by default
  clickable?: boolean; // you can enable the possibility to click on a column for opening details
}

export interface BadgeColumnDefinition extends BaseColumnDefinition {
  renderer: "badge";
  rendererOptions: {
    renderItemBadge(data: unknown, columnDefinition: BadgeColumnDefinition): {
      label: string;
      variant: SwColorBadgeVariant;
    };
  };
}
export interface TextColumnDefinition extends BaseColumnDefinition {
  renderer: "text";
}
export interface NumberColumnDefinition extends BaseColumnDefinition {
  renderer: "number";
}
export interface PriceColumnDefinition extends BaseColumnDefinition {
  renderer: "price";
  rendererOptions: {
    currencyId: string;
    currencyISOCode: string;
    source: 'gross' | 'net';
  };
}

export type ColumnDefinition = BadgeColumnDefinition |
                               TextColumnDefinition |
                               NumberColumnDefinition |
                               PriceColumnDefinition;

export interface ColumnChanges {
  property?: ColumnDefinition["property"];
  position?: ColumnDefinition["position"];
  width?: ColumnDefinition["width"];
  visible?: ColumnDefinition["visible"];
}

type DataSourcePropType = Array<{
  id: string;
  [key: string]: unknown;
}>;

type ColumnProperty = ColumnDefinition[];

export default defineComponent({
  directives: {
    draggable: draggable,
    droppable: droppable,
  },
  components: {
    "sw-card": SwCard,
    "sw-button": SwButton,
    "sw-select": SwSelect,
    "sw-icon": SwIcon,
    "sw-pagination": SwPagination,
    "sw-search": SwSearch,
    'sw-context-button': SwContextButton,
    'sw-data-table-settings': SwDataTableSettings,
    'sw-popover': SwPopover,
    'sw-popover-item': SwPopoverItem,
    'sw-skeleton-bar': SwSkeletonBar,
    'sw-context-menu-item': SwContextMenu,
    'sw-data-table-text-renderer': SwDataTableTextRenderer,
    'sw-data-table-number-renderer': SwDataTableNumberRenderer,
    'sw-data-table-badge-renderer': SwDataTableBadgeRenderer,
    'sw-data-table-price-renderer': SwDataTablePriceRenderer,
  },
  props: {
    /**
     * The data source which contains the data for the current
     * state of the table.
     */
    dataSource: {
      type: Array as PropType<DataSourcePropType>,
      required: true,
    },
    /**
     * The defintions for the columns which should be displayed in the table.
     */
    columns: {
      type: Array as PropType<ColumnProperty>,
      required: true,
      validator: (columnsValue: Record<string, unknown>[]) => {
        /**
         * This validator checks if every colum entry is matching the definition.
         */
        const validValues = columnsValue.map((value) => {
          const hasLabel = typeof value.label === "string" && value.label;
          const hasProperty = typeof value.property === "string" && value.property;
          const hasRenderer =
            typeof value.renderer === "string" &&
            ["text", "number", "price", "badge"].includes(value.renderer);
          const hasPosition = typeof value.position === "number";
          const isInvalid = !hasLabel || !hasProperty || !hasRenderer || !hasPosition;
          return isInvalid ? false : true;
        });
        return validValues.every((value) => value);
      },
    },
    /**
     * Optional property. When you want to override the current column
     * information with the given changes, you can pass them here.
     * The changes will be applied to the current column information.
     * This is useful for saving and loading the current column configuration
     * when the user customizes the table.
     */
    columnChanges: {
      type: Object as PropType<Record<string, ColumnChanges>>,
      required: false,
      default: () => ({}),
    },
    /**
     * Define the title of the table.
     */
    title: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * Define the subtitle of the table.
     */
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    /**
     * The layout of the data table.
     * @values default, full
     */
    layout: {
      type: String as PropType<"default" | "full">,
      required: false,
      default: "default",
    },
    /**
     * Activate the reload button at the top right corner of the table.
     */
    enableReload: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Define the current page of the table.
     */
    currentPage: {
      type: Number,
      required: true,
    },
    /**
     * Define the limit of items per page.
     */
    paginationLimit: {
      type: Number,
      required: true,
    },
    /**
     * Define the total amount of items.
     */
    paginationTotalItems: {
      type: Number,
      required: true,
    },
    /**
     * Define the available pagination limits.
     */
    paginationOptions: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: () => [5, 10, 25, 50],
    },
    /**
     * Define the current sort by property.
     */
    sortBy: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Define the current sort direction.
     */
    sortDirection: {
      type: String as PropType<'ASC' | 'DESC'>,
      required: false,
      default: 'ASC',
    },
    /**
     * If active then the search input will be disabled.
     */
    disableSearch: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Define the current search value.
     */
    searchValue: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * If active then the table will be in loading state.
     */
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits: [
    "reload",
    "pagination-limit-change",
    "pagination-current-page-change",
    'search-value-change',
    'sort-change',
    // TODO: implement event with payload (id + column property)
    'open-details',
  ],
  i18n: {
    messages: {
      en: {
        "sw-data-table": {
          itemsPerPage: "Items per page",
          columnSettings: {
            sortAscending: "Sort ascending",
            sortDescending: "Sort descending",
          }
        },
      },
      de: {
        "sw-data-table": {
          itemsPerPage: "Einträge pro Seite",
          columnSettings: {
            sortAscending: "Aufsteigend sortieren",
            sortDescending: "Absteigend sortieren",
          }
        },
      },
    },
  },
  setup(props, { emit }) {
    const sortedColumns = computed(() => {
      return columnsWithChanges.value.slice().sort((a, b) => a.position - b.position);
    });

    /***
    * Colum changes helper
    */
    const resetAllChanges = () => {
      Object.keys(props.columnChanges).forEach((key) => {
        set(props.columnChanges, key, {});
      });
    };

    const addToColumnChanges = (columnProperty: string, columnChanges: ColumnChanges) => {
      if (!props.columnChanges[columnProperty]) {
          set(props.columnChanges, columnProperty, {});
        }

        // save new width to columnChanges to make changes permanent
        set(props.columnChanges, columnProperty, {
          ...props.columnChanges[columnProperty],
          ...columnChanges,
        });
    }

    const columnsWithChanges = computed(() => {
      return props.columns.map((column) => {
        const columnChanges = props.columnChanges[column.property];
        if (!columnChanges) {
          return column;
        }

        return {
          ...column,
          ...columnChanges,
        };
      });
    });

    /***
     * Handle column resizing
     */

    // save all column and table refs
    const dataTable = ref<HTMLElement | null>(null);
    const columnHeaderRefs = ref<Record<string, HTMLElement>>({});
    const columnDataCellRefs = ref<Record<string, Array<HTMLElement>>>({});
    const setColumnDataCellRefs = ({
      el,
      column,
      index,
    }: {
      el?: HTMLElement;
      column: ColumnDefinition;
      index: number;
    }) => {
      if (el) {
        if (!Array.isArray(columnDataCellRefs.value[column.property])) {
          columnDataCellRefs.value[column.property] = [];
        }

        columnDataCellRefs.value[column.property][index] = el;
      }
    };

    // reset all column refs before each update
    onBeforeUpdate(() => {
      columnHeaderRefs.value = {};
      columnDataCellRefs.value = {};
    });

    /***
     * This method will be executed when the user press the mouse down on the hidden resize bar of the column
     */
    const startColumnResizing = (column: ColumnDefinition) => {
      makeAllColumnsFixedWidth();

      // get the refs for the column header and all column data cells
      const currentColumnHeaderCell = columnHeaderRefs.value[column.property];
      const currentColumnDataCells = columnDataCellRefs.value[column.property];

      // stop resizing when resizing for the column is not allowed
      if (
        !currentColumnHeaderCell ||
        (typeof column.allowResize === "boolean" && !column.allowResize)
      ) {
        return;
      }

      // save the iniital position and width of the column header for later use
      const columnHeaderBoundingClientRect = currentColumnHeaderCell.getBoundingClientRect();
      const startColumnHeaderWidth = columnHeaderBoundingClientRect.width;

      // remove transition on table
      if (dataTable.value) {
        dataTable.value.classList.add("--no-transition");
        dataTable.value.classList.add("--resizing");
      }

      // set cursor globally to resize
      document.body.style.cursor = "col-resize";

      // this method gets executed when the mouse will be moved
      const mouseMoveHandler = (e: MouseEvent) => {
        // disable selection, etc. with mouse while dragging
        e.stopPropagation();
        e.preventDefault();

        // calculate the new width based on mouse position and position of the table header
        const newWidth = Math.ceil(e.pageX - columnHeaderBoundingClientRect.left);

        // set width for column header and column cells
        setColumnHeaderWidthInline(currentColumnHeaderCell, newWidth);
        setColumnDataCellsWidthInline(currentColumnDataCells, newWidth);

        // add additional padding to right so that the horizontal width don't change by reducing column size
        if (dataTable.value) {
          const paddingRight = startColumnHeaderWidth - newWidth;
          dataTable.value.style.paddingRight = paddingRight > 0 ? `${paddingRight}px` : "";
        }
      };

      // this method will be executed when the user stops pressing the mouse
      const mouseUpHandler = () => {
        // reset global cursor
        document.body.style.cursor = "";

        addToColumnChanges(column.property, {
          width: parseInt(currentColumnHeaderCell.style.width, 10),
        });

        // reset additional paddingRight after finished the resizing
        if (dataTable.value) {
          dataTable.value.classList.remove("--no-transition");
          dataTable.value.classList.remove("--resizing");
          dataTable.value.style.removeProperty("padding-right");
        }

        // Remove all handlers
        window.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("mouseup", mouseUpHandler);
      };

      // Watcher for mouse position to calculate width of the column
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener("mouseup", mouseUpHandler);
    };

    const makeAllColumnsFixedWidth = () => {
      const currentWidths: Record<string, number> = {};

      Object.entries(columnHeaderRefs.value).forEach(([columnProperty, columnHeaderElement]) => {
        const currentColumnDefinition = props.columns.find(
          (column) => column.property === columnProperty
        );

        // skip the columns which shouldn't be resized and have fixed with
        if (
          currentColumnDefinition &&
          currentColumnDefinition.allowResize === false &&
          typeof currentColumnDefinition.width === "number"
        ) {
          return;
        }

        // save the current width
        const columnHeaderBoundingClientRect = columnHeaderElement.getBoundingClientRect();
        currentWidths[columnProperty] = columnHeaderBoundingClientRect.width;

        // set the current width
        setColumnHeaderWidthInline(columnHeaderElement, currentWidths[columnProperty]);
      });

      Object.entries(columnDataCellRefs.value).forEach(([columnProperty, columnDataCells]) => {
        if (currentWidths[columnProperty]) {
          setColumnDataCellsWidthInline(columnDataCells, currentWidths[columnProperty]);
        }
      });
    };

    const setColumnHeaderWidthInline = (columnHeader: HTMLElement, width: number) => {
      columnHeader.style.width = `${width}px`;
      columnHeader.style.minWidth = `${width}px`;
    };

    const setColumnDataCellsWidthInline = (columnDataCells: Array<HTMLElement>, width: number) => {
      columnDataCells.forEach((columnDataCell) => {
        columnDataCell.style.width = `${width}px`;
        columnDataCell.style.minWidth = `${width}px`;
        columnDataCell.style.maxWidth = `${width}px`;
      });
    };

    const renderColumnDefaultStyle = (column: ColumnDefinition) => {
      const customColumnWidth =
        props.columnChanges[column.property] && props.columnChanges[column.property].width;
      const defaultColumnWidth = "auto";
      const minimumColumnWidth = "100px";

      const width = (() => {
        if (customColumnWidth && column.allowResize !== false) {
          return `${customColumnWidth}px`;
        }

        return typeof column.width === "number" ? `${column.width}px` : defaultColumnWidth;
      })();

      const minWidth = (() => {
        if (customColumnWidth && column.allowResize !== false) {
          return `${customColumnWidth}px`;
        }

        return typeof column.width === "number" ? `${column.width}px` : minimumColumnWidth;
      })();

      const maxWidth = (() => {
        if (customColumnWidth && column.allowResize !== false) {
          return `${customColumnWidth}px`;
        }

        if (column.cellWrap === "normal") {
          return "auto";
        }

        if (typeof column.width === "number") {
          return `${column.width}px`;
        }
        // The maxWidth fallback is the minimum width. In table this behaves differently so it can be larger than the minWidth
        return minimumColumnWidth;
      })();
      const whiteSpace = typeof column.cellWrap === "string" ? column.cellWrap : "nowrap";

      return {
        width: width,
        "min-width": minWidth,
        "max-width": maxWidth,
        "white-space": whiteSpace,
      };
    };

    const renderColumnHeaderStyle = (column: ColumnDefinition) => {
      return {
        ...renderColumnDefaultStyle(column),
        "max-width": "fit-content",
      };
    };

    const renderColumnDataCellStyle = (column: ColumnDefinition) => {
      return {
        ...renderColumnDefaultStyle(column),
      };
    };

    const isColumnVisible = (column: ColumnDefinition) => {
      return column.visible ?? true;
    }

    /***
     * Pagination
     */
    const emitReload = () => emit("reload");

    const emitPaginationLimitChange = (limitValue: number) => {
      emit("pagination-limit-change", limitValue);
    };

    const emitPaginationCurrentPageChange = (currentPage: number) => {
      emit("pagination-current-page-change", currentPage);
    };

    /***
     * Search
     */
    const emitSearchValueChange = (searchValue: string) => {
      emit('search-value-change', searchValue);
    };

    const paginationOptionsConverted = computed(() => {
      return props.paginationOptions.map((paginationNumber) => ({
        id: paginationNumber,
        label: paginationNumber.toString(),
        value: paginationNumber,
      }));
    });

    /***
     * Column Reordering
    */
    const changeColumnPosition = (columnId: string, targetColumnId: string, insertPosition: 'before'|'after' = 'before') => {
      const column = columnsWithChanges.value.find((column) => column.property === columnId);
      const targetColumn = columnsWithChanges.value.find((column) => column.property === targetColumnId);

      if (!column || !targetColumn) {
        return;
      }

      [...columnsWithChanges.value].sort((columnA, columnB) => {
        return columnA.position - columnB.position;
      }).sort((columnA, columnB) => {
        // The logic for inserting the column before or after the target column
        if (columnB.property === column.property) {
          if (insertPosition === 'after') {
            return columnA.position <= targetColumn.position ? -1 : 1;
          } else {
            return columnA.position < targetColumn.position ? -1 : 1;
          }
        }

        if (columnA.property === column.property) {
          if (insertPosition === 'after') {
            return columnB.position > targetColumn.position ? -1 : 1;
          } else {
            return columnB.position >= targetColumn.position ? -1 : 1;
          }
        }

        return 0;
      }).forEach((column, index) => {
        addToColumnChanges(column.property, { position: index * 100 });
      });
    };

    const DRAG_GROUP_COLUMN = 'drag-group-column';

    const dragConfig: Partial<DragConfig<ColumnDefinition & {dropZone?: 'before'|'after'}>> = {
      dragGroup: DRAG_GROUP_COLUMN,
      preventEvent: false,
      validateDragStart: (dragConfigData, el, event) => {
        const allDragZones = document.querySelectorAll('.sw-data-table__table-head-dragzone');
        // @ts-expect-error - TS doesn't know that target is a valid element
        const isChild = [...allDragZones].some((dragZone) => dragZone.contains(event.target));

        return isChild;
      },
      onDragStart: () => {
        // add drag information to the table
        if (dataTable.value) {
          dataTable.value.classList.add("is--dragging-inside");
        }

        // set cursor globally to grabbing
        document.body.style.cursor = "grabbing";
      },
      onDrop: (dragConfigData, dropConfigData) => {
        // remove drag information to the table
        if (dataTable.value) {
          dataTable.value.classList.remove("is--dragging-inside");
        }

        // reset global cursor
        document.body.style.cursor = "";

        if (dragConfigData && dropConfigData) {
          changeColumnPosition(dragConfigData.property, dropConfigData.property, dropConfigData.dropZone);
        }
      }
    }

    const dropConfig: Partial<DropConfig & {dropZone?: 'before'|'after'}> = {
      dragGroup: DRAG_GROUP_COLUMN,
    }

    const changeColumnVisibility = (columnProperty: string, visibility: boolean) => {
      const column = columnsWithChanges.value.find((column) => column.property === columnProperty);

      if (!column) {
        return;
      }

      addToColumnChanges(columnProperty, {
        visible: visibility
      });
    }

    /**
     * Methods for sorting and filtering the data
     */
    const emitSortChange = (property: string, direction: 'ASC'|'DESC') => {
      emit('sort-change', property, direction);
    }

    const onColumnSettingsSortChange = (property: string, direction: 'ASC'|'DESC', chainMethod?: () => void) => {
      emitSortChange(property, direction);

      if (chainMethod) {
        chainMethod();
      }
    }

    /***
     * Add scroll possibilities to tableWrapper
     */
    const tableWrapper = ref();
    useScrollPossibilitiesClasses(tableWrapper);

    /**
     * General classes for whole data table
     */
    const swDataTableClasses = computed(() => {
      return {
        'sw-data-table__layout-default': props.layout === 'default',
        'sw-data-table__layout-full': props.layout === 'full',
      };
    });

    return {
      sortedColumns,
      renderColumnDataCellStyle,
      renderColumnHeaderStyle,
      tableWrapper,
      emitReload,
      emitPaginationLimitChange,
      emitPaginationCurrentPageChange,
      emitSearchValueChange,
      paginationOptionsConverted,
      startColumnResizing,
      columnHeaderRefs,
      columnDataCellRefs,
      setColumnDataCellRefs,
      dataTable,
      dragConfig,
      dropConfig,
      resetAllChanges,
      changeColumnPosition,
      isColumnVisible,
      changeColumnVisibility,
      emitSortChange,
      onColumnSettingsSortChange,
      swDataTableClasses
    };
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";

/**
* Use inter-font instead of normal font for data-table. Also add the new variables to this file.
*/
$font-family-default: "Inter", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-variables: "Inter var", -apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI",
  Roboto, "Helvetica Neue", sans-serif;
$font-family-default-feature-settings: "ss01" on, "ss02" on, "case" on, "cpsp" on, "zero" on,
  "cv09" on, "cv07" on, "cv06" on, "cv10" on, "cv11" on;

$font-weight-medium: 500;

$line-height-auto: auto;
$line-height-xs: 18px;
$line-height-sm: 20px;
$line-height-md: 24px;
$line-height-lg: 28px;

$color-card-headline: #1c1c1c;

$scrollShadowSize: 16px;
$scrollShadowColor: rgba(120, 120, 120, 0.2);
$tableHeaderSize: 51px;
$scrollShadowHeight: calc(100% - $tableHeaderSize - var(--scrollbar-height));

.sw-data-table {
  display: flex;
  flex-direction: column;
  height: 100%;

  &.sw-data-table__layout-default {
    height: 650px;
  }

  &.sw-data-table__layout-full {
    height: 100%;
    width: 100%;
    max-width: none;
  }

  // normalize the table styles across browsers
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /**
  * Adjust card styling so that it looks good with Inter font and the grid
  */
  .sw-card__title {
    color: $color-card-headline;
    font-size: $font-size-s;
    line-height: $line-height-md;
    font-weight: $font-weight-medium;
  }

  .sw-card__subtitle {
    font-size: $font-size-xxs;
    line-height: $line-height-sm;
    font-weight: $font-weight-regular;
  }

  .sw-card__content {
    height: auto;
    padding: 0;
    overflow: hidden;
  }

  // add new Inter font to data table
  * {
    font-family: $font-family-default;
  }

  @supports (font-variation-settings: normal) {
    * {
      font-family: $font-family-variables;
      font-feature-settings: $font-family-default-feature-settings;
    }
  }

  // adjust font styling
  font-size: $font-size-xs;
  font-weight: $font-weight-regular;
  color: $color-darkgray-300;
  line-height: $line-height-sm;

  .sw-data-table__table-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  // add scroll shadows
  --scrollbar-height: 0px;
  --scrollbar-width: 0px;

  .sw-data-table__scroll-shadow {
    pointer-events: none;
    position: absolute;
    opacity: 0;
    transition: 0.1s ease opacity;
  }

  .sw-data-table__scroll-shadow-top {
    background: linear-gradient($scrollShadowColor, transparent);
    top: $tableHeaderSize; // more pixel because of the table header
    width: calc(100% - var(--scrollbar-width));
    height: $scrollShadowSize;
  }

  .sw-data-table__scroll-shadow-right {
    background: linear-gradient(-90deg, $scrollShadowColor, transparent);
    top: $tableHeaderSize;
    right: var(--scrollbar-width);
    height: $scrollShadowHeight;
    width: $scrollShadowSize;
  }

  .sw-data-table__scroll-shadow-bottom {
    background: linear-gradient(0deg, $scrollShadowColor, transparent);
    bottom: var(--scrollbar-height);
    width: calc(100% - var(--scrollbar-width));
    height: $scrollShadowSize;
  }

  .sw-data-table__scroll-shadow-left {
    background: linear-gradient(90deg, $scrollShadowColor, transparent);
    top: $tableHeaderSize;
    left: 0;
    height: $scrollShadowHeight;
    width: $scrollShadowSize;
  }

  .sw-data-table__table-wrapper[data-scroll-top] ~ .sw-data-table__scroll-shadow-top {
    opacity: 1;
  }
  .sw-data-table__table-wrapper[data-scroll-right] ~ .sw-data-table__scroll-shadow-right {
    opacity: 1;
  }
  .sw-data-table__table-wrapper[data-scroll-bottom] ~ .sw-data-table__scroll-shadow-bottom {
    opacity: 1;
  }
  .sw-data-table__table-wrapper[data-scroll-left] ~ .sw-data-table__scroll-shadow-left {
    opacity: 1;
  }

  // custom table styling
  th,
  td {
    padding: 0.25rem;
    text-align: left;
    border: 1px solid #ccc;
  }

  table {
    margin: -0.5px;
    width: calc(100% + 0.5px);
    border-collapse: separate;
    border-spacing: 0;
    table-layout: auto;
    transition: 0.3s all ease;
  }

  table.--no-transition {
    transition: none;
  }

  td,
  th {
    padding: 18px 16px 14px 16px;
    // border needs to be half the size because they are getting combined with other cells
    border: 0.5px solid $color-gray-200;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  tr:nth-child(even) {
    background-color: $color-gray-50;
  }

  // remove duplicated border from header
  tr:first-child td {
    border-top-color: transparent;
  }

  thead th {
    font-weight: $font-weight-medium;
    line-height: $line-height-xs;
    background-color: $color-gray-50;
    color: #6b7280; // TODO: this needs to be a variable in the future
    min-width: 50px;
    // header is sticky so it needs to have the full border
    border-bottom-width: 1px;
    border-top: 0;
    position: sticky;
    top: -0.5px;
    text-transform: uppercase;
    cursor: default;
    z-index: 1;
  }

  // custom skeleton styling
  tbody td .sw-skeleton-bar {
    height: 24px;
  }

  // override default cursor when user is resizing the columns
  table.--resizing thead th {
    cursor: col-resize;
  }

  tr {
    background-color: $color-white;
  }

  .sw-data-table__table-head-inner-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /***
  * Resizable
  */
  &__table-head-resizable {
    z-index: 1;
    cursor: col-resize;
    height: 100%;
    width: 3px;
    position: absolute;
    top: 0;
    right: 0;
  }

  /**
  * Column ordering
  */
  div[class^="sw-data-table__table-head-dropzone-"] {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    opacity: 0;
    transition: 0.3s all ease;

    &.is--valid-drop {
      opacity: 1;
    }
  }

  $dropzone-highlight-width: 8px;
  $dropzone-highlight-negative-width: -8px;

  .sw-data-table__table-head-dropzone-before {
    left: 0;
    box-shadow: inset $dropzone-highlight-width 0px $dropzone-highlight-width $dropzone-highlight-negative-width $color-shopware-brand-900;    
  }
  .sw-data-table__table-head-dropzone-after {
    right: 0;
    box-shadow: inset $dropzone-highlight-negative-width 0px $dropzone-highlight-width $dropzone-highlight-negative-width $color-shopware-brand-900;
  }

  /**
  * Column Settings
  */
  .sw-data-table__table-head-column-settings {
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: calc(100% - 16px);

    .sw-floating-ui__trigger,
    .sw-data-table__table-head-column-settings-trigger {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  table.is--dragging-inside {
    .sw-data-table__table-head-column-settings {
      display: none;
      pointer-events: none;
    }
  }

  /**
  * Sorting in columns
  */
  .sw-data-table__table-head-sorting-icons {
    display: flex;
    flex-direction: column;

    .sw-data-table__table-head-sort {
      transition: 0.3s color ease;
      color: $color-gray-800;

      #meteor-icon-kit__solid-long-arrow-up,
      #meteor-icon-kit__solid-long-arrow-down {
        height: 12px;
      }
    }
  }

  /**
  * Table Settings
  */
  $settingsColumnWidth: 65px;

  .sw-data-table__table-settings-button {
    padding: 0;
    text-align: center;
    vertical-align: middle;
    width: $settingsColumnWidth;

    #meteor-icon-kit__solid-cog-s {
      color: $color-gray-800;
      width: 10px;
      height: 10px;
    }
  }

  .sw-data-table__table-context-button {
    text-align: center;
  }

  /**
  * Footer styling
  */
  &__footer-left {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .sw-field__label {
      display: none;
    }

    .sw-select {
      margin-bottom: 0;
    }
  }

  &__footer-right {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 16px;
    margin-left: auto;

    .sw-button[aria-label="reload-data"] {
      height: 34px;
      width: 34px;
      background-color: $color-white;

      &:hover {
        background-color: $color-gray-100;
      }
    }

    .sw-button #meteor-icon-kit__solid-undo-s {
      width: 12px;
      height: 12px;
    }
  }

  &__pagination-info-text {
    color: $color-gray-800;
    white-space: nowrap;
    font-size: $font-size-xxs;
    margin-left: 12px;
  }
}

/**
* Drag & Drop styling
*/
.sw-data-table__table-wrapper-table-head.is--drag-element {
  max-width: none !important;
  box-shadow: 0px 0px 4px 0px $scrollShadowColor;
  opacity: 0.8;

  // set the normal table header cell styling
  font-family: $font-family-default;
  @supports (font-variation-settings: normal) {
    font-family: $font-family-variables;
    font-feature-settings: $font-family-default-feature-settings;
  }
  text-align: left;
  font-size: $font-size-xs;
  padding: 18px 16px 14px 16px;
  border: 1px solid $color-shopware-brand-900;
  border-radius: $border-radius-default $border-radius-default 0 0;
  border-top: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  font-weight: $font-weight-medium;
  line-height: $line-height-xs;
  background-color: $color-shopware-brand-50;
  color: #6b7280; // TODO: this needs to be a variable in the future
  min-width: 50px;
  text-transform: uppercase;

  transition: 0.3s rotate ease-in-out;
}

thead th.is--dragging {
  cursor: grabbing;
}

.sw-data-table__table-head-dragzone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  z-index: 1;
  cursor: grab;

  .sw-data-table__table-head-dragzone-bar {
    pointer-events: none;
    transform: scale(1, 0);
  }

  /* simHover (simulate hover) is needed for interaction testing
  /* because the testing library has no support for css hover
  */ 
  &.simHover .sw-data-table__table-head-dragzone-bar,
  &:hover .sw-data-table__table-head-dragzone-bar {
    transform: scale(1, 1);
  }
}

.sw-data-table__table-wrapper-table-head.is--drag-element {
  .sw-data-table__table-head-dragzone-bar {
    transform: scale(1, 1);
  }

  .sw-data-table__table-head-column-settings {
    display: none;
    pointer-events: none;
  }
}

table.is--dragging-inside {
  -webkit-user-select: none; /* Safari */
  user-select: none;

  .sw-data-table__table-head-dragzone {
    display: none;
  }
}

.sw-data-table__table-head-dragzone-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: $color-shopware-brand-900;
  border-radius: $border-radius-default $border-radius-default 0 0;
  transition: transform 0.2s ease;
  transform-origin: top center;
}

.sw-data-table__table-head-dragzone-indicator {
  position: absolute;
  width: 28px;
  height: 16px;
  left: calc(50% - 14px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-shopware-brand-900;
  border-radius: 0 0 $border-radius-default $border-radius-default;

  #meteor-icon-kit__regular-grip-horizontal-s {
    color: $color-white;
    width: 9px;
  }
}
</style>
