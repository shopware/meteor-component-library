# Technical concept for new grid

## General goal of this component:

The `sw-data-grid` is just a dumb component which does not contain any data logic. It just renders the UI based on
the given properties. All user interactions will just emit a corresponding event and the outside component need to
react to these events and also update the properties specific to the interaction.

The big benefit of this is that it supports every possible data source and logic because it just renders the view. This
allows the possibility to create intelligent components for data handling which are using this component just as the
view and everything else is handled inside the intelligent wrapper component.

## Component properties
The component properties contain everything to control the whole UI of the grid. The grid itself doesn't have any
internal data. It just renders the grid based of the properties.

```ts
interface DataGridProperties {
	// general
	dataSource: dataSource;
	columns: ColumnProperty;
	search?: boolean; // default "true"
	sort?: boolean; // default "true"
	filter?: FilterProperty; // default "undefined" because filter can only be rendered with definition
	isLoading?: boolean // default "false" - show loading skeleton of grid

	// actions
	// TODO: discuss this property names because behaviour happens via events
	hideEditAction?: boolean; // default "false"
	hideDeleteAction?: boolean; // default "false"
	hideDuplicateAction?: boolean; // default "true" because duplication can be more difficult
	hideReloadAction?: boolean; // default "true" because reload can be more difficult

	// for pagination
	currentPage: number;
	limit: number;
	total: number;
	steps?: Array<number>;

	// for filter
	filters: FilteProperty;
}
```

## Data structure of column definition:

The columns will be rendered based on a column definition. This is an array with configuration objects for each
column. With this approach we provide very opinionated options which makes the rendering process very stable. Also
it can be easily extended because it just expects a simple structure.

```ts
interface ColumnDefinition {
	label: string; // the label for the column
	property: string; // the value for each entry
	renderer: 'text'|'number'|'price'; // define how each column entry should be rendered
	position: number; // the initial position of the column. Should be defined in 100 steps
	sortable?: boolean; // enable or disable sortability for this column (default=true)
	width?/flex?: number; // define the width/flex value for this column (TODO: find out which works better)
	allowResize?: boolean; // you can disable the possibility for the user to resize this column
}

type ColumnProperty = ColumnDefinition[]
```

## Data structure of grid data source:

The data structure is just an array with objects inside. So almost every data structure can be represented in the grid. 
The developer can define the needed properties in the column definition. Only at least one unique property is needed for keying the loop to improve the Vue rendering process.

```ts
// Each data entry needs to have a unique ID otherwise Vue don't have any key value and this decreases the render performance massive.
interface dataSourceEntry {
	id: string; // TODO: check if this needs to be flexible
}

/**
 * The data source of the grid is just an Array with any data. This allows a very flexible way to use data.
 * Each column get's the property which is defined in the ColumnDefinition, e.g. `dataSource[column.property]`
 * */
type dataSource = Array<dataSourceEntry>
```

## Data structure of filter definition:

The filters are also based on a definition file to support many use cases. It just renders the needed filters and the
logic happens outside the component. All interactions and changes will also be emitted via events.

```ts
interface NumberRangeFilterDefinition {
	type: 'numberRange' /* number (from -> to )*/;
	property: string;
	position: number;
	currentFrom: number; // the active value from user input which gets emitted
	currentTo: number; // the active value from user input which gets emitted
	min?: number;
	max?: number;
}
interface SwitchFilterDefinition {
	type: 'switch';
	property: string;
	position: number;
	currentValue: boolean;
}
interface SelectionFilterDefinition {
	type: 'selection';
	property: string;
	position: number;
	currentSelections: Array<string>;
	availableSelections: Array<any>;
	selectionKey: string;
	selectionLabel: string;
}

type FilterDefinition = NumberRangeFilterDefinition|;
type FilteProperty = FilterDefinition[]
```

## Handling user inputs:

The main grid component is a dumb component without logic. So every user input just emits an event and the parent component is responsible for reacting to the inputs and updating the data. The grid don't directly react to user interactions directly.

Example:
- User: clicks on page 2 in the pagination
- Grid: throws an event like `page-change` with the new page
- Parent component: listen to this event 
- Parent component: loads the data and set `isLoading` to `true`
- Parent component: updates the property `currentPage` of the grid with `2`
- Grid: prop with `currentPage` was updated so that it switches to page 2
- Grid: prop with `isLoading` gets updated and renders now a skeleton
- Parent component: updates the data to represent the page 2
- Parent component: set `isLoading` to `false`
- Grid: prop with `isLoading` was updated
- Grid: `dataSource` with new entries was updated
- Grid: render new entries


## CSS implementation
### TODO
How column rendering works will be written down after testing flexbox against table.

CSS grid was already tested by Tobias and is not performant enough. Flexbox wasn't tested by Tobias in the past because critical things like `gap` were not available at this time.




