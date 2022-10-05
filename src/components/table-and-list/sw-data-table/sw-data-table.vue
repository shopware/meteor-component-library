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
        <table>
          <thead>
            <tr>
              <th
                v-for="column in sortedColumns"
                :key="column.property"
                :style="renderColumnHeaderStyle(column)"
              >
                <span>{{ column.label }}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="data in dataSource"
              :key="data.id"
            >
              <td
                v-for="column in sortedColumns"
                :key="column.property"
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
        <!-- TODO: this content will be filled later -->
      </div>

      <div class="sw-data-table__footer-right">
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
import { defineComponent, computed, PropType, ref } from 'vue';
import SwCard from '../../layout/sw-card/sw-card.vue';
import SwButton from '../../form/sw-button/sw-button.vue';
import SwIcon from '../../icons-media/sw-icon/sw-icon.vue';

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

type DataSourcePropType = Array<{
  id: string;
  [key: string]: unknown;
}>

type ColumnProperty = ColumnDefinition[];

export default defineComponent({
    components: {
      'sw-card': SwCard,
      'sw-button': SwButton,
      'sw-icon': SwIcon,
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
        }
    },
    emits: ['reload'],
    setup(props, { emit }) {
        const sortedColumns = computed(() => {
            return props.columns.slice().sort((a, b) => a.position - b.position);
        });
       
        const renderColumnDefaultStyle = (column: ColumnDefinition) => {
            const defaultColumnWidth = "auto";
            const minimumColumnWidth = "100px";
            const width = typeof column.width === "number" ? `${column.width}px` : defaultColumnWidth;
            const minWidth = typeof column.width === "number" ? `${column.width}px` : minimumColumnWidth;
            const maxWidth = (() => {
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

        /**
         * Add scroll possibilities to tableWrapper
         */
        const tableWrapper = ref();
        useScrollPossibilitiesClasses(tableWrapper);

        return {
            sortedColumns,
            renderColumnDataCellStyle,
            renderColumnHeaderStyle,
            tableWrapper,
            emitReload
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

$font-size-xxs: 12px;
$font-size-xs: 14px;
$font-size-s: 16px;
$font-size-m: 18px;
$font-size-l: 20px;
$font-size-xl: 24px;
$font-size-3xl: 28px;

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

  /**
  * Footer styling
  */
  &__footer-right {
    margin-left: auto;

    .sw-button #meteor-icon-kit__solid-undo-s {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
