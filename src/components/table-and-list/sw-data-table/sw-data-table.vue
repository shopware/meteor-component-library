<template>
  <!-- Height needs to be set inline because the card has an sw-ignore-class component as a wrapper -->
  <sw-card
    class="sw-data-table"
    style="height: 100%"
    :title="title"
    :subtitle="subtitle"
  >
    <template #toolbar>
      <p>TODO: add toolbar content</p>
    </template>

    <template #default>
      <div
        ref="tableWrapper"
        class="sw-data-table__table-wrapper"
      >
        <table ref="dataTable">
          <thead>
            <tr>
              <th
                v-for="column in sortedColumns"
                :key="column.property"
                :ref="(el) => {if (el) { columnHeaderRefs[column.property] = el }}"
                :data-header-column-property="column.property"
                :style="renderColumnHeaderStyle(column)"
              >
                <span>{{ column.label }}</span>

                <div
                  v-if="column.allowResize !== false"
                  class="sw-data-table__table-head-resizable"
                  @mousedown="() => startColumnResizing(column)"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, rowIndex) in dataSource"
              :key="data.id"
            >
              <td
                v-for="(column) in sortedColumns"
                :key="column.property + JSON.stringify(columnChanges[column.property])"
                :ref="(el) => {setColumnDataCellRefs({el, column, index: rowIndex })}"
                :data-cell-column-property="column.property"
                :style="renderColumnDataCellStyle(column)"
              >
                <div
                  v-if="column.property === 'manufacturer.name'"
                  style="
                    width: 10px;
                    height: 10px;
                    background-color: gray;
                  "
                />

                <!-- TODO: use renderer -->
                {{ data[column.property] }}
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
          {{ $t('sw-data-table.itemsPerPage') }}
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
import useScrollPossibilitiesClasses from './composables/useScrollPossibilitiesClasses';
import { defineComponent, computed, onBeforeUpdate, PropType, ref, set } from 'vue';
import SwCard from '../../layout/sw-card/sw-card.vue';
import SwButton from '../../form/sw-button/sw-button.vue';
import SwSelect from '../../form/sw-select/sw-select.vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';
import SwPagination from '../sw-pagination/sw-pagination.vue';

interface ColumnDefinition {
	label: string; // the label for the column
	property: string; // the value for each entry
	renderer: 'text'|'number'|'price'|'checkmark'; // define how each column entry should be rendered
	position: number; // the initial position of the column. Should be defined in 100 steps
	sortable?: boolean; // enable or disable sortability for this column (default=true)
	width?: number; // define the width value for this column
	allowResize?: boolean; // you can disable the possibility for the user to resize this column
  cellWrap?: 'nowrap'|'normal'
}

interface ColumnChanges {
  property: ColumnDefinition['property']
  position: ColumnDefinition['position']
  width: ColumnDefinition['width']
}

type DataSourcePropType = Array<{
  id: string;
  [key: string]: unknown;
}>

type ColumnProperty = ColumnDefinition[];

export default defineComponent({
    components: {
      'sw-card': SwCard,
      'sw-button': SwButton,
      'sw-select': SwSelect,
      'sw-icon': SwIcon,
      'sw-pagination': SwPagination,
    },
    props: {
        dataSource: {
            type: Array as PropType<DataSourcePropType>,
            required: true,
        },
        columns: {
            type: Array as PropType<ColumnProperty>,
            required: true,
            validator: (columnsValue: Record<string, unknown>[]) => {
                /**
                 * This validator checks if every colum entry is matching the definition.
                 */
                const validValues = columnsValue.map(value => {
                    const hasLabel = typeof value.label === "string" && value.label;
                    const hasProperty = typeof value.property === "string" && value.property;
                    const hasRenderer = typeof value.renderer === "string" && [
                        "text",
                        "number",
                        "price",
                        "checkmark",
                    ].includes(value.renderer);
                    const hasPosition = typeof value.position === "number";
                    const isInvalid = !hasLabel || !hasProperty || !hasRenderer || !hasPosition;
                    return isInvalid ? false : true;
                });
                return validValues.every(value => value);
            }
        },
        columnChanges: {
            type: Object as PropType<Record<string, ColumnChanges>>,
            required: false,
            default: () => ({}),
        },
        title: {
            type: String,
            required: false,
            default: '',
        },
        subtitle: {
            type: String,
            required: false,
            default: '',
        },
        enableReload: {
          type: Boolean,
          required: false,
          default: false,
        },
        currentPage: {
          type: Number,
          required: true,
        },
        paginationLimit: {
          type: Number,
          required: true
        },
        paginationTotalItems: {
          type: Number,
          required: true
        },
        paginationOptions: {
          type: Array as PropType<Array<number>>,
          required: false,
          default: () => [5,10,25,50]
        }
    },
    emits: ['reload', 'pagination-limit-change', 'pagination-current-page-change'],
    i18n: {
      messages: {
        en: {
          'sw-data-table': {
            itemsPerPage: 'Items per page'
          }
        },
        de: {
          'sw-data-table': {
            itemsPerPage: 'Einträge pro Seite'
          }
        }
      }
    },
    setup(props, { emit }) {
        const sortedColumns = computed(() => {
            return props.columns.slice().sort((a, b) => a.position - b.position);
        });

        /***
         * Handle column resizing
         */

        // save all column and table refs
        const dataTable = ref<HTMLElement|null>(null);
        const columnHeaderRefs = ref<Record<string, HTMLElement>>({});
        const columnDataCellRefs = ref<Record<string, Array<HTMLElement>>>({});
        const setColumnDataCellRefs = ({el, column, index}: { el?: HTMLElement, column: ColumnDefinition, index: number}) => {
          if (el) {
            if (!Array.isArray(columnDataCellRefs.value[column.property])) {
              columnDataCellRefs.value[column.property] = []
            }

            columnDataCellRefs.value[column.property][index] = el;
          }
        }

        // reset all column refs before each update
        onBeforeUpdate(() => {
          columnHeaderRefs.value = {};
          columnDataCellRefs.value = {};
        })

        /***
         * This method will be executed when the user press the mouse down on the hidden resize bar of the column
         */
        const startColumnResizing = (column: ColumnDefinition) => {
          makeAllColumnsFixedWidth();

          // get the refs for the column header and all column data cells
          const currentColumnHeaderCell = columnHeaderRefs.value[column.property];
          const currentColumnDataCells = columnDataCellRefs.value[column.property];

          // stop resizing when resizing for the column is not allowed
          if (!currentColumnHeaderCell || (typeof column.allowResize === 'boolean' && !column.allowResize)) {
            return;
          }

          // save the iniital position and width of the column header for later use
          const columnHeaderBoundingClientRect = currentColumnHeaderCell.getBoundingClientRect();
          const startColumnHeaderWidth = columnHeaderBoundingClientRect.width;

          // remove transition on table
          if (dataTable.value) {
            dataTable.value.classList.add('--no-transition');
          }

          // set cursor globally to resize
          document.body.style.cursor = 'col-resize';

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
              dataTable.value.style.paddingRight = paddingRight > 0 ? `${paddingRight}px` : '';
            }
          };

          // this method will be executed when the user stops pressing the mouse
          const mouseUpHandler = () => {
            // reset global cursor
            document.body.style.cursor = '';

            if (!props.columnChanges[column.property]) {
              set(props.columnChanges, column.property, {});
            }

            // save new width to columnChanges to make changes permanent
            set(props.columnChanges, column.property, {
              ...props.columnChanges[column.property],
              width: parseInt(currentColumnHeaderCell.style.width, 10),
            });

            // reset additional paddingRight after finished the resizing
            if (dataTable.value) {
              dataTable.value.classList.remove('--no-transition');
              dataTable.value.style.removeProperty('padding-right');
            }

            // Remove all handlers
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
          }

          // Watcher for mouse position to calculate width of the column
          window.addEventListener('mousemove', mouseMoveHandler)
          window.addEventListener('mouseup', mouseUpHandler)
        }

        const makeAllColumnsFixedWidth = () => {
          const currentWidths: Record<string, number> = {};

          Object.entries(columnHeaderRefs.value).forEach(([columnProperty, columnHeaderElement]) => {
            const currentColumnDefinition = props.columns.find(column => column.property === columnProperty);

            // skip the columns which shouldn't be resized and have fixed with
            if (
              currentColumnDefinition &&
              currentColumnDefinition.allowResize === false &&
              typeof currentColumnDefinition.width === 'number'
            ) {
              return;
            }

            // save the current width
            const columnHeaderBoundingClientRect = columnHeaderElement.getBoundingClientRect();
            currentWidths[columnProperty] = columnHeaderBoundingClientRect.width;

            // set the current width
            setColumnHeaderWidthInline(columnHeaderElement, currentWidths[columnProperty]);
          })

          Object.entries(columnDataCellRefs.value).forEach(([columnProperty, columnDataCells]) => {
            if (currentWidths[columnProperty]) {
              setColumnDataCellsWidthInline(columnDataCells, currentWidths[columnProperty]);
            }
          })
        }

        const setColumnHeaderWidthInline = (columnHeader: HTMLElement, width: number) => {
          columnHeader.style.width = `${width}px`;
          columnHeader.style.minWidth = `${width}px`;
        }

        const setColumnDataCellsWidthInline = (columnDataCells: Array<HTMLElement>, width: number) => {
          columnDataCells.forEach(columnDataCell => {
            columnDataCell.style.width = `${width}px`;
            columnDataCell.style.minWidth = `${width}px`;
            columnDataCell.style.maxWidth = `${width}px`;
          })
        }
       
        const renderColumnDefaultStyle = (column: ColumnDefinition) => {
            const customColumnWidth = props.columnChanges[column.property] && props.columnChanges[column.property].width;
            const defaultColumnWidth = "auto";
            const minimumColumnWidth = "100px";

            // TODO: make this easier to read
            let width: string;
            if (customColumnWidth && column.allowResize !== false) {
              width = `${customColumnWidth}px`;
            } else {
              width = typeof column.width === "number" ? `${column.width}px` : defaultColumnWidth
            }

            // TODO: make this easier to read
            let minWidth: string;
            if (customColumnWidth && column.allowResize !== false) {
              minWidth = `${customColumnWidth}px`;
            } else {
              minWidth = typeof column.width === "number" ? `${column.width}px` : minimumColumnWidth
            }

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
                "width": width,
                "min-width": minWidth,
                "max-width": maxWidth,
                "white-space": whiteSpace,
            };
        };

        const renderColumnHeaderStyle = (column: ColumnDefinition) => {
            return {
                ...renderColumnDefaultStyle(column),
                "max-width": "fit-content"
            };
        };

        const renderColumnDataCellStyle = (column: ColumnDefinition) => {
            return {
                ...renderColumnDefaultStyle(column),
            };
        };

        const emitReload = () => emit('reload');

        /***
         * Add scroll possibilities to tableWrapper
         */
        const tableWrapper = ref();
        useScrollPossibilitiesClasses(tableWrapper);

        /***
         * Pagination
         */
        const emitPaginationLimitChange = (limitValue: number) => {
          emit('pagination-limit-change', limitValue)
        }

        const emitPaginationCurrentPageChange = (currentPage: number) => {
          emit('pagination-current-page-change', currentPage)
        }

        const paginationOptionsConverted = computed(() => {
          return props.paginationOptions.map((paginationNumber) => ({
            id: paginationNumber,
            label: paginationNumber.toString(),
            value: paginationNumber
          }))
        })

        return {
            sortedColumns,
            renderColumnDataCellStyle,
            renderColumnHeaderStyle,
            tableWrapper,
            emitReload,
            emitPaginationLimitChange,
            emitPaginationCurrentPageChange,
            paginationOptionsConverted,
            startColumnResizing,
            columnHeaderRefs,
            columnDataCellRefs,
            setColumnDataCellRefs,
            dataTable
        };
    }
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

/**
* Use inter-font instead of normal font for data-table. Also add the new variables to this file.
*/
$font-family-default: 'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
$font-family-variables: 'Inter var', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
$font-family-default-feature-settings: 'ss01' on, 'ss02' on, 'case' on, 'cpsp' on, 'zero' on, 'cv09' on, 'cv07' on, 'cv06' on, 'cv10' on, 'cv11' on;

$font-weight-medium: 500;

$line-height-auto: auto;
$line-height-xs: 18px;
$line-height-sm: 20px;
$line-height-md: 24px;
$line-height-lg: 28px;

$color-card-headline: #1C1C1C;

.sw-data-table {
  display: flex;
  flex-direction: column;
  height: 100%;

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

  .sw-card__header {
    border-bottom-width: 0;
  }

  .sw-card__content {
    height: 100%;
    padding: 0;
  }

  // add new Inter font to data table
  *  {
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
  $scrollShadowSize: 16px;
  $scrollShadowColor: rgba(120,120,120,0.2);
  $tableHeaderSize: 51px;
  $scrollShadowHeight: calc(100% - $tableHeaderSize - var(--scrollbar-height));

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
  th, td {
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

  td, th {
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
    color: #6B7280; // TODO: this needs to be a variable in the future
    min-width: 50px;
    // header is sticky so it needs to have the full border
    border-bottom-width: 1px;
    border-top: 0;
    position: sticky;
    top: 0;
    text-transform: uppercase;
  }

  tr {
    background-color: $color-white;
  }

  /***
  * Resizable
  */
  &__table-head-resizable {
    cursor: col-resize;
    height: 100%;
    width: 3px;
    position: absolute;
    top: 0;
    right: 0;
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
</style>
