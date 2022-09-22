<template>
  <div class="sw-data-table">
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
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

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
          const hasLabel = typeof value.label === 'string' && value.label;
          const hasProperty = typeof value.property === 'string' && value.property;
          const hasRenderer = typeof value.renderer === 'string' && [
            'text',
            'number',
            'price',
            'checkmark',
          ].includes(value.renderer);
          const hasPosition = typeof value.position === 'number';

          const isInvalid = !hasLabel || !hasProperty || !hasRenderer || !hasPosition;
          return isInvalid ? false : true;
        });

        return validValues.every(value => value);
      }
    }
  },
  setup(props) {
    const sortedColumns = computed(() => {
      return props.columns.slice().sort((a, b) => a.position - b.position);
    });

    const renderColumnDefaultStyle = (column: ColumnDefinition) => {
      const defaultColumnWidth = 'auto';
      const minimumColumnWidth = '100px';

      const width = typeof column.width === 'number' ? `${column.width}px` : defaultColumnWidth;
      const minWidth = typeof column.width === 'number' ? `${column.width}px` : minimumColumnWidth;

      const maxWidth = (() => {
        if (column.cellWrap === 'normal') {
          return 'auto';
        }

        if (typeof column.width === 'number') {
          return `${column.width}px`;
        }

        // The maxWidth fallback is the minimum width. In table this behaves differently so it can be larger than the minWidth
        return minimumColumnWidth;
      })();

      const whiteSpace = typeof column.cellWrap === 'string' ? column.cellWrap : 'nowrap';

      return {
        'width': width,
        'min-width': minWidth,
        'max-width': maxWidth,
        'white-space': whiteSpace,
      }
    }

    const renderColumnHeaderStyle = (column: ColumnDefinition) => {
      return {
        ...renderColumnDefaultStyle(column),
        'max-width': 'fit-content'
      }
    }

    const renderColumnDataCellStyle = (column: ColumnDefinition) => {
      return {
        ...renderColumnDefaultStyle(column),
      }
    }

    return {
      sortedColumns,
      renderColumnDataCellStyle,
      renderColumnHeaderStyle
    }
  }
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.sw-data-table {
  width: 100%;
  height: 100%;
  overflow: auto;
  border: 0.5px solid $color-gray-200;

  // normalize the table styles across browsers
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: $font-size-small;
  }

  th, td {
    padding: 0.25rem;
    text-align: left;
    border: 1px solid #ccc;
  }

  // custom table styling
  table {
    border-collapse: separate;
    border-spacing: 0;
    table-layout: auto;
  }

  td, th {
    padding: 20px 16px 16px 16px;
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
    background-color: $color-gray-50;
    font-weight: $font-weight-semi-bold;
    color: $color-darkgray-100;
    min-width: 50px;
    // header is sticky so it needs to have the full border
    border-bottom-width: 1px;
    position: sticky;
    top: 0;
    text-transform: uppercase;
  }

  tr {
    background-color: $color-white;
  }
}
</style>
