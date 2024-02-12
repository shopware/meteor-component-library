import{m as Je,S as Qe}from"./sw-data-table.stories-420f7a7a.js";import{w as e}from"./test-helper-7c3608e5.js";import{w as s,u as l,a as Xe,f as C}from"./index-912b65a3.js";import{e as r}from"./index-b9ac83fc.js";import"./vue.esm-bundler-4ed8bc95.js";import"./debounce-6f06ec9c.js";import"./isObject-32699ff3.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";import"./sw-card-4c9178e2.js";import"./sw-context-menu-item-d088e281.js";import"./sw-icon-0ed83457.js";import"./iframe-1d646de1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-popover-2ca29517.js";import"./sw-checkbox-517c56a1.js";import"./sw-base-field-5cc5ebbc.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-276aac2a.js";import"./sw-switch-50fcff93.js";import"./sw-button-9d0f69e7.js";import"./sw-loader-648b66d9.js";import"./sw-select-ae72d11a.js";import"./sw-popover-deprecated-28ac4fbc.js";import"./sw-color-badge-ba091646.js";import"./_MapCache-73175cc1.js";import"./isFunction-97e00978.js";import"./sw-pagination-48e11047.js";import"./sw-segmented-control-88b7bcd9.js";import"./sw-number-field-14e4f94e.js";import"./sw-text-field-a49eacbf.js";import"./sw-search-2e87cb30.js";import"./sw-popover-item-result-0375e043.js";import"./vue-i18n-3852fc8f.js";import"./sw-skeleton-bar-ac342ac4.js";import"./sw-banner-89a6165a.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";const Mt={...Je,title:"Interaction Tests/Table and list/sw-data-table"},i={name:"Should render the Table"},d={name:"Should render the full Table",args:{layout:"full"},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelector(".sw-data-table__table-wrapper")),await r(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},u={name:"Should render the empty state",args:{dataSource:[]},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelector(".sw-empty-state")),await r(a.getByText("Add your first item")).toBeInTheDocument()}},m={name:"Should render the Table with sticky header",play:async({canvasElement:n})=>{const a=s(n);await e(()=>{var t;return(t=document.body.textContent)==null?void 0:t.includes("Gorgeous Wooden Ball")}),await e(()=>{var t;return(t=document.body.textContent)==null?void 0:t.includes("Available")}),await new Promise(t=>setTimeout(t,1e3));const o=document.querySelector(".sw-data-table__table-wrapper");if(!o)throw new Error("swDataTable not found");o.scrollTop=o.scrollHeight,await r(a.getByText("Gorgeous Wooden Ball")).toBeInTheDocument()}},w={name:"Should render the Table without card header",args:{title:void 0,subtitle:void 0,disableSearch:!0,_remove_primary_toolbar_button_:!0},play:async({canvasElement:n})=>{const a=s(n);await e(()=>{var o;return(o=document.body.textContent)==null?void 0:o.includes("Awesome Concrete Chair")}),await e(()=>{var o;return(o=document.body.textContent)==null?void 0:o.includes("Available")}),await new Promise(o=>setTimeout(o,1e3)),await r(a.getAllByText("Awesome Concrete Chair")[0]).toBeInTheDocument()}};var E,U;const g={name:"Should render the Table with scroll shadows",args:{dataSource:[{id:"bbf41666-d40f-44d1-8d31-49daab4fdc87",active:!1,name:"Aa Render scroll shadows",manufacturer:{name:"Last manufacturer",translated:{name:"Last manufacturer"}},translated:{name:"Aa Render scroll shadows"},price:[{currencyId:'"b7d2554b0ce847cd82f3ac9bd1c0dfca"',gross:774261,net:609992,linked:!0}],stock:409278,available:202164},...Qe],columns:[...((U=(E=Je.args)==null?void 0:E.columns)==null?void 0:U.map(n=>({...n,width:300})))??[]]},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>{var t;return(t=document.body.textContent)==null?void 0:t.includes("Aa Render scroll shadows")});const o=document.querySelector(".sw-data-table__table-wrapper");if(!o)throw new Error("swDataTable not found");o.scrollTop=o.scrollHeight/2-o.clientHeight/2,o.scrollLeft=o.scrollWidth/2-o.clientWidth/2,await new Promise(t=>setTimeout(t,1e3)),await r(a.getByText("Aa Render scroll shadows")).toBeInTheDocument()}},p={name:"Emit reload event on clicking reload",args:{enableReload:!0},play:async({args:n,canvasElement:a})=>{const o=s(a);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const t=o.getByLabelText("reload-data");await l.click(t),await new Promise(c=>setTimeout(c,1e3)),await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await r(n.reload).toHaveBeenCalled()}},h={name:"Open settings menu with correct popover items inside",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const o=a.getByLabelText("Toggle view settings");await l.click(o),await e(()=>document.querySelector(".sw-floating-ui__content"));const t=s(document.querySelector('.sw-floating-ui__content[data-show="true"]'));await r(t.getByText("Settings")).toBeInTheDocument(),await r(t.getByText("Columns")).toBeInTheDocument(),await e(()=>!document.querySelector('[class*="popoverTransition"]')),await r(t.getByText("Reset all changes")).toBeInTheDocument()}},y={name:"Open column settings menu",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const o=a.getByRole("button",{name:"Toggle view settings"});await l.click(o),await e(()=>document.querySelector('.sw-floating-ui__content[data-show="true"]'));let t=s(document.querySelector('.sw-floating-ui__content[data-show="true"]'));await r(t.getByText("Settings")).toBeInTheDocument();const c=t.getByText("Columns");await l.click(c),t=s(document.querySelector('.sw-floating-ui__content[data-show="true"]')),await e(()=>document.querySelector(".sw-popover-item-result__group-label")),await r(t.getByText("Shown in table")).toBeInTheDocument(),await r(t.getByText("Hidden in table")).toBeInTheDocument(),await r(t.getAllByText("Columns")[0]).toBeInTheDocument(),await r(t.getByText("Hide all")).toBeInTheDocument(),await r(t.getByText("Show all")).toBeInTheDocument(),await r(t.getByText("Name")).toBeInTheDocument(),await r(t.getByText("Manufacturer")).toBeInTheDocument(),await r(t.getByText("Active")).toBeInTheDocument(),await r(t.getByText("Price")).toBeInTheDocument(),await r(t.getByText("Available")).toBeInTheDocument(),await r(t.getByText("Stock")).toBeInTheDocument()}},b={name:"Show the column drag bar on hover",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone")),await(await a.getByTestId("column-dragzone__manufacturer.name")).classList.add("simHover");const t=await a.getByTestId("column-dragzone-bar__manufacturer.name");await Xe(async()=>{await r(getComputedStyle(t)).toHaveProperty("transform","matrix(1, 0, 0, 1, 0, 0)")})}},T={name:"Order the columns by drag and drop",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("column-dragzone__manufacturer.name"),t=await a.getByTestId("column-dropzone-after__price");C.mouseDown(o,{buttons:1}),await new Promise(c=>setTimeout(c,100)),C.mouseEnter(t,{}),C.mouseUp(t,{}),await new Promise(c=>setTimeout(c,1e3))}},S={name:"Show the column settings on click",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("column-settings-trigger__name");await l.click(o),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=s(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await r(t.getByText("Name")).toBeInTheDocument(),await r(t.getByText("Sort ascending")).toBeInTheDocument(),await r(t.getByText("Sort descending")).toBeInTheDocument()}},v={name:"Show the column settings without sort on click",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("column-settings-trigger__active");await l.click(o),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=s(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await r(t.getByText("Active")).toBeInTheDocument()}},_={name:"Sort the data by clicking on the column settings",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("column-settings-trigger__name");await l.click(o),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=s(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await r(t.getByText("Name")).toBeInTheDocument(),await r(t.getByText("Sort ascending")).toBeInTheDocument(),await r(t.getByText("Sort descending")).toBeInTheDocument();const c=await t.getByText("Sort descending");await l.click(c),await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0);const A=await a.getAllByText("Unbranded Steel Bike");await r(A.length).toBeGreaterThan(0)}},B={name:"Should render the Table with skeleton bars",args:{isLoading:!0},play:async()=>{await e(()=>document.querySelector(".sw-skeleton-bar"))}},f={name:"Render the add column indicator",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await l.hover(o),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"))}},q={name:"Render the add column indicator popover",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await l.hover(o),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"));const c=await s(document.querySelector('.sw-floating-ui__content[data-show="true"]')).getByTestId("add-column-indicator-icon__name");await l.click(c),await e(()=>document.querySelector(".sw-popover-item-result__option"))}},x={name:"Add new column with add column indicator popover",play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const o=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await l.hover(o),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"));let t=s(document.querySelector('.sw-floating-ui__content[data-show="true"]'));const c=await t.getByTestId("add-column-indicator-icon__name");await l.click(c),await e(()=>document.querySelector(".sw-popover-item-result__option")),t=s(document.querySelector(".sw-floating-ui__content.sw-popover"));const A=await t.getByText("Stock");await l.click(A);const Ke=await a.getByTestId("column-settings-trigger__stock");await e(()=>document.querySelectorAll(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator").length===0),await r(Ke).toBeInTheDocument()}},I={name:"Should render the Table without outlines",args:{showOutlines:!1},async play({canvasElement:n}){const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await r(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},D={name:"Should render the Table without stripes",args:{showStripes:!1},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await r(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},R={name:"Should render the Table without stripes and outlines",args:{showOutlines:!1,showStripes:!1},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await r(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},k={name:"Should render the Table with row numbering",args:{enableRowNumbering:!0},play:async({canvasElement:n})=>{const a=s(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await r(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}};var z,V,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Should render the Table'
}`,...(H=(V=i.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var P,O,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Should render the full Table',
  args: {
    layout: 'full'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => {
      return document.querySelector('.sw-data-table__table-wrapper');
    });
    await expect(canvas.getByText('Awesome Concrete Chair')).toBeInTheDocument();
  }
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var M,N,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Should render the empty state',
  args: {
    dataSource: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => {
      return document.querySelector('.sw-empty-state');
    });
    await expect(canvas.getByText('Add your first item')).toBeInTheDocument();
  }
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var F,G,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Should render the Table with sticky header',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent?.includes('Gorgeous Wooden Ball'));
    await waitUntilRendered(() => document.body.textContent?.includes('Available'));

    // wait 1 second so that everything is correctly rendered
    await new Promise(resolve => setTimeout(resolve, 1000));

    // scroll to bottom
    const swDataTable = document.querySelector('.sw-data-table__table-wrapper');
    if (!swDataTable) {
      throw new Error('swDataTable not found');
    }
    swDataTable.scrollTop = swDataTable.scrollHeight;
    await expect(canvas.getByText('Gorgeous Wooden Ball')).toBeInTheDocument();
  }
}`,...(j=(G=m.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Should render the Table without card header',
  args: {
    title: undefined,
    subtitle: undefined,
    disableSearch: true,
    _remove_primary_toolbar_button_: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent?.includes('Awesome Concrete Chair'));
    await waitUntilRendered(() => document.body.textContent?.includes('Available'));

    // wait 1 second so that everything is correctly rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(canvas.getAllByText('Awesome Concrete Chair')[0]).toBeInTheDocument();
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Should render the Table with scroll shadows',
  args: {
    dataSource: [{
      id: 'bbf41666-d40f-44d1-8d31-49daab4fdc87',
      active: false,
      name: 'Aa Render scroll shadows',
      manufacturer: {
        name: 'Last manufacturer',
        translated: {
          name: 'Last manufacturer'
        }
      },
      translated: {
        name: 'Aa Render scroll shadows'
      },
      price: [{
        currencyId: '"b7d2554b0ce847cd82f3ac9bd1c0dfca"',
        gross: 774261,
        net: 609992,
        linked: true
      }],
      stock: 409278,
      available: 202164
    }, ...SwDataTableFixtures],
    columns: [...(meta.args?.columns?.map(column => {
      return {
        ...column,
        width: 300
      };
    }) ?? [])]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.body.textContent?.includes('Aa Render scroll shadows'));

    // scroll to middle horizontally and vertically
    const swDataTable = document.querySelector('.sw-data-table__table-wrapper');
    if (!swDataTable) {
      throw new Error('swDataTable not found');
    }
    swDataTable.scrollTop = swDataTable.scrollHeight / 2 - swDataTable.clientHeight / 2;
    swDataTable.scrollLeft = swDataTable.scrollWidth / 2 - swDataTable.clientWidth / 2;

    // wait 1 second so that everything is correctly rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    await expect(canvas.getByText('Aa Render scroll shadows')).toBeInTheDocument();
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Emit reload event on clicking reload',
  args: {
    enableReload: true
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    const reloadButton = canvas.getByLabelText('reload-data');
    await userEvent.click(reloadButton);

    // wait 1 second so that everything is correctly rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(args.reload).toHaveBeenCalled();
  }
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Open settings menu with correct popover items inside',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    const toggleTableSettingsButton = canvas.getByLabelText('Toggle view settings');
    await userEvent.click(toggleTableSettingsButton);
    await waitUntilRendered(() => document.querySelector('.sw-floating-ui__content'));
    const popover = within((document.querySelector('.sw-floating-ui__content[data-show="true"]') as HTMLElement));
    await expect(popover.getByText('Settings')).toBeInTheDocument();
    await expect(popover.getByText('Columns')).toBeInTheDocument();
    await waitUntilRendered(() => !document.querySelector('[class*="popoverTransition"]'));
    await expect(popover.getByText('Reset all changes')).toBeInTheDocument();
  }
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,le;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Open column settings menu',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    const toggleTableSettingsButton = canvas.getByRole('button', {
      name: 'Toggle view settings'
    });
    await userEvent.click(toggleTableSettingsButton);
    await waitUntilRendered(() => document.querySelector('.sw-floating-ui__content[data-show="true"]'));
    let popover = within((document.querySelector('.sw-floating-ui__content[data-show="true"]') as HTMLElement));
    await expect(popover.getByText('Settings')).toBeInTheDocument();
    const columnSettingsPopoverItem = popover.getByText('Columns');
    await userEvent.click(columnSettingsPopoverItem);
    popover = within((document.querySelector('.sw-floating-ui__content[data-show="true"]') as HTMLElement));
    await waitUntilRendered(() => document.querySelector('.sw-popover-item-result__group-label'));

    // check if correct items are visible
    await expect(popover.getByText('Shown in table')).toBeInTheDocument();
    await expect(popover.getByText('Hidden in table')).toBeInTheDocument();
    await expect(popover.getAllByText('Columns')[0]).toBeInTheDocument();
    await expect(popover.getByText('Hide all')).toBeInTheDocument();
    await expect(popover.getByText('Show all')).toBeInTheDocument();
    await expect(popover.getByText('Name')).toBeInTheDocument();
    await expect(popover.getByText('Manufacturer')).toBeInTheDocument();
    await expect(popover.getByText('Active')).toBeInTheDocument();
    await expect(popover.getByText('Price')).toBeInTheDocument();
    await expect(popover.getByText('Available')).toBeInTheDocument();
    await expect(popover.getByText('Stock')).toBeInTheDocument();
  }
}`,...(le=(se=y.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ie,de;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Show the column drag bar on hover',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const manufacturerColumnDragBar = await canvas.getByTestId('column-dragzone__manufacturer.name');
    // simulate hover because real css hover is not possible in interaction tests
    await manufacturerColumnDragBar.classList.add('simHover');
    const manufacturerDragzoneBar = await canvas.getByTestId('column-dragzone-bar__manufacturer.name');
    // check if scale was set back to 1:1
    await waitFor(async () => {
      await expect(getComputedStyle(manufacturerDragzoneBar)).toHaveProperty('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });
  }
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,me,we;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Order the columns by drag and drop',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const manufacturerColumnDragzone = await canvas.getByTestId('column-dragzone__manufacturer.name');
    const priceColumnDropzoneAfter = await canvas.getByTestId('column-dropzone-after__price');

    // drag the "manufacturer" column right to the "price" column
    fireEvent.mouseDown(manufacturerColumnDragzone, {
      buttons: 1
    });

    // wait 100ms to simulate a real drag
    await new Promise(resolve => setTimeout(resolve, 100));

    // enter the right dropzone
    fireEvent.mouseEnter(priceColumnDropzoneAfter, {});
    // and drop the column
    fireEvent.mouseUp(priceColumnDropzoneAfter, {});

    // wait 1 second so that everything is correctly rendered
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}`,...(we=(me=T.parameters)==null?void 0:me.docs)==null?void 0:we.source}}};var ge,pe,he;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Show the column settings on click',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const nameColumnSettingsTrigger = await canvas.getByTestId('column-settings-trigger__name');
    await userEvent.click(nameColumnSettingsTrigger);
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    const columnSettingsPopover = within((document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]') as HTMLElement));
    await expect(columnSettingsPopover.getByText('Name')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort ascending')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort descending')).toBeInTheDocument();
  }
}`,...(he=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ye,be,Te;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Show the column settings without sort on click',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const activeColumnSettingsTrigger = await canvas.getByTestId('column-settings-trigger__active');
    await userEvent.click(activeColumnSettingsTrigger);
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    const columnSettingsPopover = within((document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]') as HTMLElement));
    await expect(columnSettingsPopover.getByText('Active')).toBeInTheDocument();
  }
}`,...(Te=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Se,ve,_e;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Sort the data by clicking on the column settings',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const nameColumnSettingsTrigger = await canvas.getByTestId('column-settings-trigger__name');
    await userEvent.click(nameColumnSettingsTrigger);
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    const columnSettingsPopover = within((document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]') as HTMLElement));
    await expect(columnSettingsPopover.getByText('Name')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort ascending')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort descending')).toBeInTheDocument();
    const sortDescendingButton = await columnSettingsPopover.getByText('Sort descending');
    await userEvent.click(sortDescendingButton);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    const rowContentName = await canvas.getAllByText('Unbranded Steel Bike');
    await expect(rowContentName.length).toBeGreaterThan(0);
  }
}`,...(_e=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:_e.source}}};var Be,fe,qe;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Should render the Table with skeleton bars',
  args: {
    isLoading: true
  },
  play: async () => {
    await waitUntilRendered(() => document.querySelector('.sw-skeleton-bar'));
  }
}`,...(qe=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:qe.source}}};var xe,Ie,De;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Render the add column indicator',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const tableHeadResizableAfter = await canvas.getByTestId('sw-data-table__table-head-resizable-before__manufacturer.name');
    await userEvent.hover(tableHeadResizableAfter);
    await waitUntilRendered(() => document.querySelector('.sw-floating-ui__content.sw-data-table__table-head-add-column-indicator'));
  }
}`,...(De=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Re,ke,Ae;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Render the add column indicator popover',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const tableHeadResizableAfter = await canvas.getByTestId('sw-data-table__table-head-resizable-before__manufacturer.name');
    await userEvent.hover(tableHeadResizableAfter);
    await waitUntilRendered(() => document.querySelector('.sw-floating-ui__content.sw-data-table__table-head-add-column-indicator'));
    const popover = within((document.querySelector('.sw-floating-ui__content[data-show="true"]') as HTMLElement));
    const addColumnIndicatorIcon = await popover.getByTestId('add-column-indicator-icon__name');
    await userEvent.click(addColumnIndicatorIcon);
    await waitUntilRendered(() => document.querySelector('.sw-popover-item-result__option'));
  }
}`,...(Ae=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Ce,Ee,Ue;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Add new column with add column indicator popover',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.querySelector('.sw-button[aria-label="reload-data"]'));
    await waitUntilRendered(() => document.querySelector('.sw-data-table__table-head-dragzone'));
    const tableHeadResizableAfter = await canvas.getByTestId('sw-data-table__table-head-resizable-before__manufacturer.name');
    await userEvent.hover(tableHeadResizableAfter);
    await waitUntilRendered(() => document.querySelector('.sw-floating-ui__content.sw-data-table__table-head-add-column-indicator'));
    let popover = within((document.querySelector('.sw-floating-ui__content[data-show="true"]') as HTMLElement));
    const addColumnIndicatorIcon = await popover.getByTestId('add-column-indicator-icon__name');
    await userEvent.click(addColumnIndicatorIcon);
    await waitUntilRendered(() => document.querySelector('.sw-popover-item-result__option'));
    popover = within((document.querySelector('.sw-floating-ui__content.sw-popover') as HTMLElement));
    const stockOption = await popover.getByText('Stock');
    await userEvent.click(stockOption);
    const columnSettingsTriggerStock = await canvas.getByTestId('column-settings-trigger__stock');
    await waitUntilRendered(() => document.querySelectorAll('.sw-floating-ui__content.sw-data-table__table-head-add-column-indicator').length === 0);
    await expect(columnSettingsTriggerStock).toBeInTheDocument();
  }
}`,...(Ue=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:Ue.source}}};var ze,Ve,He;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Should render the Table without outlines',
  args: {
    showOutlines: false
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(canvas.getByText('Awesome Concrete Chair')).toBeInTheDocument();
  }
}`,...(He=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Pe,Oe,Le;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Should render the Table without stripes',
  args: {
    showStripes: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(canvas.getByText('Awesome Concrete Chair')).toBeInTheDocument();
  }
}`,...(Le=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var Me,Ne,We;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Should render the Table without stripes and outlines',
  args: {
    showOutlines: false,
    showStripes: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(canvas.getByText('Awesome Concrete Chair')).toBeInTheDocument();
  }
}`,...(We=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Fe,Ge,je;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Should render the Table with row numbering',
  args: {
    enableRowNumbering: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(canvas.getByText('Awesome Concrete Chair')).toBeInTheDocument();
  }
}`,...(je=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:je.source}}};const Nt=["VisualTestRenderTable","VisualTestRenderFullTable","VisualTestRenderEmptyState","VisualTestRenderTableStickyHeader","VisualTestRenderTableWithoutCardHeader","VisualTestRenderTableWithScrollShadows","VisualTestEmitReloadEventOnClickingReload","VisualTestOpenSettingsMenu","VisualTestOpenColumnSettingsMenu","VisualTestColumnDragBar","VisualTestColumnDragDropOrdering","VisualTestColumnSettingsPopover","VisualTestColumnSettingsPopoverWithoutSort","VisualTestDataSortingInColumnSettings","VisualTestRenderSkeleton","VisualTestAddColumnIndicator","VisualTestAddColumnIndicatorPopover","VisualTestAddNewColumn","VisualTestHideOutlines","VisualTestHideStripes","VisualTestBlankTable","VisualTestEnableRowNumbering"];export{f as VisualTestAddColumnIndicator,q as VisualTestAddColumnIndicatorPopover,x as VisualTestAddNewColumn,R as VisualTestBlankTable,b as VisualTestColumnDragBar,T as VisualTestColumnDragDropOrdering,S as VisualTestColumnSettingsPopover,v as VisualTestColumnSettingsPopoverWithoutSort,_ as VisualTestDataSortingInColumnSettings,p as VisualTestEmitReloadEventOnClickingReload,k as VisualTestEnableRowNumbering,I as VisualTestHideOutlines,D as VisualTestHideStripes,y as VisualTestOpenColumnSettingsMenu,h as VisualTestOpenSettingsMenu,u as VisualTestRenderEmptyState,d as VisualTestRenderFullTable,B as VisualTestRenderSkeleton,i as VisualTestRenderTable,m as VisualTestRenderTableStickyHeader,g as VisualTestRenderTableWithScrollShadows,w as VisualTestRenderTableWithoutCardHeader,Nt as __namedExportsOrder,Mt as default};
