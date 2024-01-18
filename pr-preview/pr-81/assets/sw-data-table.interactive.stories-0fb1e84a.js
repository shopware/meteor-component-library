import{m as Ge,S as je}from"./sw-data-table.stories-9eb60f0a.js";import{w as e}from"./test-helper-7c3608e5.js";import{w as l,u as s,a as Je,f as C}from"./index-912b65a3.js";import{e as o}from"./index-b9ac83fc.js";import"./vue.esm-bundler-651c6785.js";import"./sw-popover-deprecated-7463b147.js";import"./sw-base-field-b77ca833.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-682d28c1.js";import"./iframe-4e8d603d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";import"./sw-card-890a0246.js";import"./sw-context-menu-item-adf47649.js";import"./sw-popover-ab815a34.js";import"./sw-checkbox-50fb646d.js";import"./sw-field-error-eb878b94.js";import"./sw-switch-c5acce26.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-select-70103d95.js";import"./sw-color-badge-009d7ca8.js";import"./_MapCache-d7e1d62d.js";import"./isFunction-d9767ad3.js";import"./sw-pagination-9719cf89.js";import"./sw-segmented-control-53503bd6.js";import"./sw-number-field-f3728d54.js";import"./sw-text-field-00c756be.js";import"./sw-search-f8f8abe2.js";import"./sw-popover-item-result-f35b4763.js";import"./vue-i18n-9ce544f5.js";import"./sw-skeleton-bar-a92b3378.js";import"./sw-banner-447751dd.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";const Ht={...Ge,title:"Interaction Tests/Table and list/sw-data-table"},d={name:"Should render the Table"},u={name:"Should render the full Table",args:{layout:"full"}},m={name:"Should render the empty state",args:{dataSource:[]}},w={name:"Should render the Table with sticky header",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.body.textContent.includes("Gorgeous Wooden Ball")),await e(()=>document.body.textContent.includes("Available")),await document.querySelector(".sw-data-table").parentElement.__vue__.$nextTick();const t=document.querySelector(".sw-data-table__table-wrapper");t.scrollTop=t.scrollHeight,await o(a.getByText("Gorgeous Wooden Ball")).toBeInTheDocument()}},g={name:"Should render the Table without card header",args:{title:void 0,subtitle:void 0,disableSearch:!0},play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.body.textContent.includes("Awesome Concrete Chair")),await e(()=>document.body.textContent.includes("Available")),await document.querySelector(".sw-data-table").parentElement.__vue__.$nextTick(),await o(a.getAllByText("Awesome Concrete Chair")[0]).toBeInTheDocument()}},p={name:"Should render the Table with scroll shadows",args:{dataSource:[{id:"bbf41666-d40f-44d1-8d31-49daab4fdc87",active:!1,name:"Aa Render scroll shadows",manufacturer:{name:"Last manufacturer",translated:{name:"Last manufacturer"}},translated:{name:"Aa Render scroll shadows"},price:[{currencyId:'"b7d2554b0ce847cd82f3ac9bd1c0dfca"',gross:774261,net:609992,linked:!0}],stock:409278,available:202164},...je],columns:[...Ge.args.columns.map(n=>({...n,width:300}))]},play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.body.textContent.includes("Aa Render scroll shadows"));const r=document.querySelector(".sw-data-table__table-wrapper");r.scrollTop=r.scrollHeight/2-r.clientHeight/2,r.scrollLeft=r.scrollWidth/2-r.clientWidth/2,await document.querySelector(".sw-data-table").parentElement.__vue__.$nextTick(),await o(a.getByText("Aa Render scroll shadows")).toBeInTheDocument()}},h={name:"Emit reload event on clicking reload",args:{enableReload:!0},play:async({args:n,canvasElement:a})=>{const r=l(a);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const t=r.getByLabelText("reload-data");await s.click(t),await document.querySelector(".sw-data-table").parentElement.__vue__.$nextTick(),await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await o(n.reload).toHaveBeenCalled()}},b={name:"Open settings menu with correct popover items inside",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const r=a.getByLabelText("Toggle view settings");await s.click(r),await e(()=>document.querySelector(".sw-floating-ui__content"));const t=l(document.querySelector('.sw-floating-ui__content[data-show="true"]'));await o(t.getByText("Settings")).toBeInTheDocument(),await o(t.getByText("Columns")).toBeInTheDocument(),await e(()=>!document.querySelector('[class*="popoverTransition"]')),await o(t.getByText("Reset all changes")).toBeInTheDocument()}},y={name:"Open column settings menu",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]'));const r=a.getByRole("button",{name:"Toggle view settings"});await s.click(r),await e(()=>document.querySelector('.sw-floating-ui__content[data-show="true"]'));let t=l(document.querySelector('.sw-floating-ui__content[data-show="true"]'));await o(t.getByText("Settings")).toBeInTheDocument();const c=t.getByText("Columns");await s.click(c),t=l(document.querySelector('.sw-floating-ui__content[data-show="true"]')),await e(()=>document.querySelector(".sw-popover-item-result__group-label")),await o(t.getByText("Shown in table")).toBeInTheDocument(),await o(t.getByText("Hidden in table")).toBeInTheDocument(),await o(t.getAllByText("Columns")[0]).toBeInTheDocument(),await o(t.getByText("Hide all")).toBeInTheDocument(),await o(t.getByText("Show all")).toBeInTheDocument(),await o(t.getByText("Name")).toBeInTheDocument(),await o(t.getByText("Manufacturer")).toBeInTheDocument(),await o(t.getByText("Active")).toBeInTheDocument(),await o(t.getByText("Price")).toBeInTheDocument(),await o(t.getByText("Available")).toBeInTheDocument(),await o(t.getByText("Stock")).toBeInTheDocument()}},T={name:"Show the column drag bar on hover",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone")),await(await a.getByTestId("column-dragzone__manufacturer.name")).classList.add("simHover");const t=await a.getByTestId("column-dragzone-bar__manufacturer.name");await Je(async()=>{await o(getComputedStyle(t)).toHaveProperty("transform","matrix(1, 0, 0, 1, 0, 0)")})}},S={name:"Order the columns by drag and drop",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("column-dragzone__manufacturer.name"),t=await a.getByTestId("column-dropzone-after__price");C.mouseDown(r,{buttons:1}),await new Promise(i=>setTimeout(i,100)),C.mouseEnter(t,{}),C.mouseUp(t,{}),await document.querySelector(".sw-data-table").parentElement.__vue__.$nextTick()}},_={name:"Show the column settings on click",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("column-settings-trigger__name");await s.click(r),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=l(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await o(t.getByText("Name")).toBeInTheDocument(),await o(t.getByText("Sort ascending")).toBeInTheDocument(),await o(t.getByText("Sort descending")).toBeInTheDocument()}},v={name:"Show the column settings without sort on click",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("column-settings-trigger__active");await s.click(r),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=l(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await o(t.getByText("Active")).toBeInTheDocument()}},B={name:"Sort the data by clicking on the column settings",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("column-settings-trigger__name");await s.click(r),await e(()=>document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));const t=l(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));await o(t.getByText("Name")).toBeInTheDocument(),await o(t.getByText("Sort ascending")).toBeInTheDocument(),await o(t.getByText("Sort descending")).toBeInTheDocument();const c=await t.getByText("Sort descending");await s.click(c),await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0);const i=await a.getAllByText("Unbranded Steel Bike");await o(i.length).toBeGreaterThan(0)}},q={name:"Should render the Table with skeleton bars",args:{isLoading:!0},play:async()=>{await e(()=>document.querySelector(".sw-skeleton-bar"))}},x={name:"Render the add column indicator",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await s.hover(r),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"))}},f={name:"Render the add column indicator popover",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await s.hover(r),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"));const c=await l(document.querySelector('.sw-floating-ui__content[data-show="true"]')).getByTestId("add-column-indicator-icon__name");await s.click(c),await e(()=>document.querySelector(".sw-popover-item-result__option"))}},k={name:"Add new column with add column indicator popover",play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await e(()=>document.querySelector('.sw-button[aria-label="reload-data"]')),await e(()=>document.querySelector(".sw-data-table__table-head-dragzone"));const r=await a.getByTestId("sw-data-table__table-head-resizable-before__manufacturer.name");await s.hover(r),await e(()=>document.querySelector(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator"));let t=l(document.querySelector('.sw-floating-ui__content[data-show="true"]'));const c=await t.getByTestId("add-column-indicator-icon__name");await s.click(c),await e(()=>document.querySelector(".sw-popover-item-result__option")),t=l(document.querySelector(".sw-floating-ui__content.sw-popover"));const i=await t.getByText("Stock");await s.click(i);const Me=await a.getByTestId("column-settings-trigger__stock");await e(()=>document.querySelectorAll(".sw-floating-ui__content.sw-data-table__table-head-add-column-indicator").length===0),await o(Me).toBeInTheDocument()}},I={name:"Should render the Table without outlines",args:{showOutlines:!1},async play({canvasElement:n}){const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await o(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},R={name:"Should render the Table without stripes",args:{showStripes:!1},play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await o(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},D={name:"Should render the Table without stripes and outlines",args:{showOutlines:!1,showStripes:!1},play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await o(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}},A={name:"Should render the Table with row numbering",args:{enableRowNumbering:!0},play:async({canvasElement:n})=>{const a=l(n);await e(()=>document.querySelectorAll(".sw-skeleton-bar").length===0),await o(a.getByText("Awesome Concrete Chair")).toBeInTheDocument()}};var E,U,z;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Should render the Table'
}`,...(z=(U=d.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var V,H,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Should render the full Table',
  args: {
    layout: 'full'
  }
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var O,N,L;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Should render the empty state',
  args: {
    dataSource: []
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,$,F;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Should render the Table with sticky header',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent.includes('Gorgeous Wooden Ball'));
    await waitUntilRendered(() => document.body.textContent.includes('Available'));

    // wait until everything is correctly rendered
    const dataTable = document.querySelector('.sw-data-table');
    await dataTable.parentElement.__vue__.$nextTick();

    // scroll to bottom
    const swDataTable = document.querySelector('.sw-data-table__table-wrapper');
    swDataTable.scrollTop = swDataTable.scrollHeight;
    await expect(canvas.getByText('Gorgeous Wooden Ball')).toBeInTheDocument();
  }
}`,...(F=($=w.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,M,j;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Should render the Table without card header',
  args: {
    title: undefined,
    subtitle: undefined,
    disableSearch: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent.includes('Awesome Concrete Chair'));
    await waitUntilRendered(() => document.body.textContent.includes('Available'));

    // wait until everything is correctly rendered
    const dataTable = document.querySelector('.sw-data-table');
    await dataTable.parentElement.__vue__.$nextTick();
    await expect(canvas.getAllByText('Awesome Concrete Chair')[0]).toBeInTheDocument();
  }
}`,...(j=(M=g.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    columns: [...meta.args.columns.map(column => {
      return {
        ...column,
        width: 300
      };
    })]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await waitUntilRendered(() => document.body.textContent.includes('Aa Render scroll shadows'));

    // scroll to middle horizontally and vertically
    const swDataTable = document.querySelector('.sw-data-table__table-wrapper');
    swDataTable.scrollTop = swDataTable.scrollHeight / 2 - swDataTable.clientHeight / 2;
    swDataTable.scrollLeft = swDataTable.scrollWidth / 2 - swDataTable.clientWidth / 2;

    // wait until everything is correctly rendered
    const dataTable = document.querySelector('.sw-data-table');
    await dataTable.parentElement.__vue__.$nextTick();
    await expect(canvas.getByText('Aa Render scroll shadows')).toBeInTheDocument();
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
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

    // wait until everything is correctly rendered
    const dataTable = document.querySelector('.sw-data-table');
    await dataTable.parentElement.__vue__.$nextTick();
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    await expect(args.reload).toHaveBeenCalled();
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    const popover = within(document.querySelector('.sw-floating-ui__content[data-show="true"]'));
    await expect(popover.getByText('Settings')).toBeInTheDocument();
    await expect(popover.getByText('Columns')).toBeInTheDocument();
    await waitUntilRendered(() => !document.querySelector('[class*="popoverTransition"]'));
    await expect(popover.getByText('Reset all changes')).toBeInTheDocument();
  }
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,re;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    let popover = within(document.querySelector('.sw-floating-ui__content[data-show="true"]'));
    await expect(popover.getByText('Settings')).toBeInTheDocument();
    const columnSettingsPopoverItem = popover.getByText('Columns');
    await userEvent.click(columnSettingsPopoverItem);
    popover = within(document.querySelector('.sw-floating-ui__content[data-show="true"]'));
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
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,se,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,de,ue;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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

    // wait until everything is correctly rendered
    const dataTable = document.querySelector('.sw-data-table');
    await dataTable.parentElement.__vue__.$nextTick();
  }
}`,...(ue=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,we,ge;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
    const columnSettingsPopover = within(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    await expect(columnSettingsPopover.getByText('Name')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort ascending')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort descending')).toBeInTheDocument();
  }
}`,...(ge=(we=_.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var pe,he,be;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
    const columnSettingsPopover = within(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    await expect(columnSettingsPopover.getByText('Active')).toBeInTheDocument();
  }
}`,...(be=(he=v.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Te,Se;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    const columnSettingsPopover = within(document.querySelector('.sw-data-table__table-head-column-settings[data-show="true"]'));
    await expect(columnSettingsPopover.getByText('Name')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort ascending')).toBeInTheDocument();
    await expect(columnSettingsPopover.getByText('Sort descending')).toBeInTheDocument();
    const sortDescendingButton = await columnSettingsPopover.getByText('Sort descending');
    await userEvent.click(sortDescendingButton);
    await waitUntilRendered(() => document.querySelectorAll('.sw-skeleton-bar').length === 0);
    const rowContentName = await canvas.getAllByText('Unbranded Steel Bike');
    await expect(rowContentName.length).toBeGreaterThan(0);
  }
}`,...(Se=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var _e,ve,Be;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Should render the Table with skeleton bars',
  args: {
    isLoading: true
  },
  play: async () => {
    await waitUntilRendered(() => document.querySelector('.sw-skeleton-bar'));
  }
}`,...(Be=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var qe,xe,fe;x.parameters={...x.parameters,docs:{...(qe=x.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(fe=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ke,Ie,Re;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    let popover = within(document.querySelector('.sw-floating-ui__content[data-show="true"]'));
    const addColumnIndicatorIcon = await popover.getByTestId('add-column-indicator-icon__name');
    await userEvent.click(addColumnIndicatorIcon);
    await waitUntilRendered(() => document.querySelector('.sw-popover-item-result__option'));
  }
}`,...(Re=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var De,Ae,Ce;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
    let popover = within(document.querySelector('.sw-floating-ui__content[data-show="true"]'));
    const addColumnIndicatorIcon = await popover.getByTestId('add-column-indicator-icon__name');
    await userEvent.click(addColumnIndicatorIcon);
    await waitUntilRendered(() => document.querySelector('.sw-popover-item-result__option'));
    popover = within(document.querySelector('.sw-floating-ui__content.sw-popover'));
    const stockOption = await popover.getByText('Stock');
    await userEvent.click(stockOption);
    const columnSettingsTriggerStock = await canvas.getByTestId('column-settings-trigger__stock');
    await waitUntilRendered(() => document.querySelectorAll('.sw-floating-ui__content.sw-data-table__table-head-add-column-indicator').length === 0);
    await expect(columnSettingsTriggerStock).toBeInTheDocument();
  }
}`,...(Ce=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var Ee,Ue,ze;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ve,He,Pe;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Pe=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var Oe,Ne,Le;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Le=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};var We,$e,Fe;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Fe=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};const Pt=["VisualTestRenderTable","VisualTestRenderFullTable","VisualTestRenderEmptyState","VisualTestRenderTableStickyHeader","VisualTestRenderTableWithoutCardHeader","VisualTestRenderTableWithScrollShadows","VisualTestEmitReloadEventOnClickingReload","VisualTestOpenSettingsMenu","VisualTestOpenColumnSettingsMenu","VisualTestColumnDragBar","VisualTestColumnDragDropOrdering","VisualTestColumnSettingsPopover","VisualTestColumnSettingsPopoverWithoutSort","VisualTestDataSortingInColumnSettings","VisualTestRenderSkeleton","VisualTestAddColumnIndicator","VisualTestAddColumnIndicatorPopover","VisualTestAddNewColumn","VisualTestHideOutlines","VisualTestHideStripes","VisualTestBlankTable","VisualTestEnableRowNumbering"];export{x as VisualTestAddColumnIndicator,f as VisualTestAddColumnIndicatorPopover,k as VisualTestAddNewColumn,D as VisualTestBlankTable,T as VisualTestColumnDragBar,S as VisualTestColumnDragDropOrdering,_ as VisualTestColumnSettingsPopover,v as VisualTestColumnSettingsPopoverWithoutSort,B as VisualTestDataSortingInColumnSettings,h as VisualTestEmitReloadEventOnClickingReload,A as VisualTestEnableRowNumbering,I as VisualTestHideOutlines,R as VisualTestHideStripes,y as VisualTestOpenColumnSettingsMenu,b as VisualTestOpenSettingsMenu,m as VisualTestRenderEmptyState,u as VisualTestRenderFullTable,q as VisualTestRenderSkeleton,d as VisualTestRenderTable,w as VisualTestRenderTableStickyHeader,p as VisualTestRenderTableWithScrollShadows,g as VisualTestRenderTableWithoutCardHeader,Pt as __namedExportsOrder,Ht as default};
