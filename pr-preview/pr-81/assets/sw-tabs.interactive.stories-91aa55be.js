import{w as b,u as w}from"./index-68cdfbf5.js";import{e as h}from"./index-4b4e994a.js";import{w as a}from"./test-helper-7c3608e5.js";import Y from"./sw-tabs.stories-2a8e03f7.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-tabs-128851e2.js";import"./vue.esm-bundler-651c6785.js";import"./sw-context-menu-item-ca0204d7.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-popover-45ad3638.js";import"./sw-checkbox-b768a239.js";import"./sw-base-field-334003ba.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./sw-field-error-e21a36f0.js";import"./sw-switch-c4c81ac2.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-color-badge-009d7ca8.js";const e=[{label:"Item 1",name:"item1"},{label:"Item 2 very long",name:"item2"},{label:"Item 3",name:"item3"},{label:"Item 4 also very long",name:"item4"},{label:"Item 5",name:"item5"},{label:"Item 6",name:"item6"},{label:"Item 7",name:"item7"},{label:"Item 8 very long",name:"item8"},{label:"Item 9",name:"item9"},{label:"Item 10",name:"item10"},{label:"Item 11",name:"item11"},{label:"Item 12",name:"item12"},{label:"Item 13",name:"item13"},{label:"Item 14",name:"item14"},{label:"Item 15",name:"item15"},{label:"Item 16",name:"item16"},{label:"Item 17",name:"item17"}],Ee={...Y,title:"Interaction Tests/Navigation/sw-tabs"},n={name:"Render tabs",args:{small:!1,defaultItem:"item2",items:e.slice(0,2)}},s={name:"Render tabs vertical",args:{vertical:!0,small:!0,defaultItem:"item2",items:e.slice(0,2)}},r={name:"Render tabs in small",args:{small:!0,defaultItem:"item2",items:e.slice(0,2)}},m={name:"Render many tab items",args:{small:!0,defaultItem:"item2",items:e}},o={name:"Render tabs with error",args:{small:!0,defaultItem:"item5",items:[...e.slice(0,4),{label:"Item with error",name:"item5",hasError:!0}]}},i={name:"Render context tab with error",args:{small:!0,defaultItem:"itemWithError",items:[...e,{label:"Item with error",name:"itemWithError",hasError:!0}]}},l={name:"Render context tab with active item inside",args:{defaultItem:"item1",small:!0,items:[{label:"Context tab test",name:"contextTabTest"},...e.slice(0,10)]},play:async({canvasElement:p})=>{const g=b(p);await a(()=>document.body.textContent.includes("Context tab test")),await a(()=>document.querySelector(".sw-context-button__button"));const I=g.getByRole("button");await w.click(I);const t=b(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("tab"),v=t[t.length-1];await h(v).toHaveTextContent("Item 10"),await w.click(v),await a(()=>document.getElementsByClassName("sw-popover__content").length===0),h(document.getElementsByClassName("sw-popover__content").length).toEqual(0)}},c={name:"Render tabs with positive badge",args:{small:!0,defaultItem:"badgeItem",items:[...e.slice(0,4),{label:"Item with positive badge",name:"badgeItem",badge:"positive"},...e.slice(5)]}},d={name:"Render tabs with info badge",args:{small:!0,defaultItem:"badgeItem",items:[...e.slice(0,4),{label:"Item with info badge",name:"badgeItem",badge:"info"},...e.slice(5)]}},u={name:"Render tabs with badge in context menu",args:{small:!0,defaultItem:"item5",items:[{label:"Context tab test",name:"contextTabTest"},...e.slice(0,8),{label:"Item with critical badge",name:"badgeItem",badge:"critical"},...e.slice(9)]},play:async({canvasElement:p})=>{const g=b(p);await a(()=>document.body.textContent.includes("Context tab test")),await a(()=>document.querySelector("button"));const I=g.getByRole("button");await w.click(I);const t=b(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("tab");await h(t[t.length-9]).toHaveTextContent("Item with critical badge")}};var R,T,x;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Render tabs',
  args: {
    small: false,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,f,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Render tabs vertical',
  args: {
    vertical: true,
    small: true,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(E=(f=s.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var C,_,B;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Render tabs in small',
  args: {
    small: true,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(B=(_=r.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var V,W,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Render many tab items',
  args: {
    small: true,
    defaultItem: 'item2',
    items: tabItems
  }
}`,...(S=(W=m.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var N,k,q;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Render tabs with error',
  args: {
    small: true,
    defaultItem: 'item5',
    items: [...tabItems.slice(0, 4), {
      label: 'Item with error',
      name: 'item5',
      hasError: true
    }]
  }
}`,...(q=(k=o.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var A,U,H;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Render context tab with error',
  args: {
    small: true,
    defaultItem: 'itemWithError',
    items: [...tabItems, {
      label: 'Item with error',
      name: 'itemWithError',
      hasError: true
    }]
  }
}`,...(H=(U=i.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var M,F,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Render context tab with active item inside',
  args: {
    defaultItem: 'item1',
    small: true,
    items: [{
      label: 'Context tab test',
      name: 'contextTabTest'
    }, ...tabItems.slice(0, 10)]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered

    await waitUntilRendered(() => document.body.textContent.includes('Context tab test'));
    await waitUntilRendered(() => document.querySelector('.sw-context-button__button'));
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);
    const menuItem = popover.getAllByRole('tab');
    const lastItem = menuItem[menuItem.length - 1];
    await expect(lastItem).toHaveTextContent('Item 10');
    await userEvent.click(lastItem);
    await waitUntilRendered(() => document.getElementsByClassName('sw-popover__content').length === 0);
    expect(document.getElementsByClassName('sw-popover__content').length).toEqual(0);
  }
}`,...(L=(F=l.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var P,O,j;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Render tabs with positive badge',
  args: {
    small: true,
    defaultItem: 'badgeItem',
    items: [...tabItems.slice(0, 4), {
      label: 'Item with positive badge',
      name: 'badgeItem',
      badge: 'positive'
    }, ...tabItems.slice(5)]
  }
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var z,D,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render tabs with info badge',
  args: {
    small: true,
    defaultItem: 'badgeItem',
    items: [...tabItems.slice(0, 4), {
      label: 'Item with info badge',
      name: 'badgeItem',
      badge: 'info'
    }, ...tabItems.slice(5)]
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Render tabs with badge in context menu',
  args: {
    small: true,
    defaultItem: 'item5',
    items: [{
      label: 'Context tab test',
      name: 'contextTabTest'
    }, ...tabItems.slice(0, 8), {
      label: 'Item with critical badge',
      name: 'badgeItem',
      badge: 'critical'
    }, ...tabItems.slice(9)]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered

    await waitUntilRendered(() => document.body.textContent.includes('Context tab test'));
    await waitUntilRendered(() => document.querySelector('button'));
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);
    const menuItem = popover.getAllByRole('tab');
    await expect(menuItem[menuItem.length - 9]).toHaveTextContent('Item with critical badge');
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ce=["VisualTestRenderTabs","VisualTestRenderTabsVertical","VisualTestRenderTabsFullWidth","VisualTestRenderManyTabItems","VisualTestRenderTabsWithError","VisualTestRenderContextTabWithError","VisualTestRenderContextTabWithActiveItem","VisualTestRenderTabsWithPositiveBadge","VisualTestRenderTabsWithInfoBadge","VisualTestRenderTabsWithContextMenuBadge"];export{l as VisualTestRenderContextTabWithActiveItem,i as VisualTestRenderContextTabWithError,m as VisualTestRenderManyTabItems,n as VisualTestRenderTabs,r as VisualTestRenderTabsFullWidth,s as VisualTestRenderTabsVertical,u as VisualTestRenderTabsWithContextMenuBadge,o as VisualTestRenderTabsWithError,d as VisualTestRenderTabsWithInfoBadge,c as VisualTestRenderTabsWithPositiveBadge,Ce as __namedExportsOrder,Ee as default};
