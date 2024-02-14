import{w as p,u as h}from"./index-912b65a3.js";import{e as v}from"./index-b9ac83fc.js";import{w as n}from"./test-helper-7c3608e5.js";import Z from"./sw-tabs.stories-13f2589a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-tabs-8675dca6.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-context-menu-item-5bfc86b4.js";import"./sw-icon-3442fb13.js";import"./iframe-6e8e1237.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-popover-44e4e128.js";import"./sw-checkbox-e9362fdf.js";import"./sw-base-field-17e94f53.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-02c612d5.js";import"./sw-switch-9efa0c1d.js";import"./sw-button-963df9ec.js";import"./sw-loader-e16771a0.js";import"./sw-color-badge-f11cf031.js";const e=[{label:"Item 1",name:"item1"},{label:"Item 2 very long",name:"item2"},{label:"Item 3",name:"item3"},{label:"Item 4 also very long",name:"item4"},{label:"Item 5",name:"item5"},{label:"Item 6",name:"item6"},{label:"Item 7",name:"item7"},{label:"Item 8 very long",name:"item8"},{label:"Item 9",name:"item9"},{label:"Item 10",name:"item10"},{label:"Item 11",name:"item11"},{label:"Item 12",name:"item12"},{label:"Item 13",name:"item13"},{label:"Item 14",name:"item14"},{label:"Item 15",name:"item15"},{label:"Item 16",name:"item16"},{label:"Item 17",name:"item17"}],_e={...Z,title:"Interaction Tests/Navigation/sw-tabs"},s={name:"Render tabs",args:{small:!1,defaultItem:"item2",items:e.slice(0,2)}},r={name:"Render tabs vertical",args:{vertical:!0,small:!0,defaultItem:"item2",items:e.slice(0,2)}},m={name:"Render tabs in small",args:{small:!0,defaultItem:"item2",items:e.slice(0,2)}},o={name:"Render many tab items",args:{small:!0,defaultItem:"item2",items:e}},i={name:"Render tabs with error",args:{small:!0,defaultItem:"item5",items:[...e.slice(0,4),{label:"Item with error",name:"item5",hasError:!0}]}},l={name:"Render context tab with error",args:{small:!0,defaultItem:"itemWithError",items:[...e,{label:"Item with error",name:"itemWithError",hasError:!0}]}},c={name:"Render context tab with active item inside",args:{defaultItem:"item1",small:!0,items:[{label:"Context tab test",name:"contextTabTest"},...e.slice(0,10)]},play:async({canvasElement:g})=>{const I=p(g);await n(()=>{var T;return(T=document.body.textContent)==null?void 0:T.includes("Context tab test")}),await n(()=>document.querySelector(".sw-context-button__button"));const w=I.getByRole("button");await h.click(w);const t=p(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("tab"),a=t[t.length-1];await v(a).toHaveTextContent("Item 10"),await h.click(a),await n(()=>document.getElementsByClassName("sw-popover__content").length===0),v(document.getElementsByClassName("sw-popover__content").length).toEqual(0)}},d={name:"Render tabs with positive badge",args:{small:!0,defaultItem:"badgeItem",items:[...e.slice(0,3),{label:"Item with positive badge",name:"badgeItem",badge:"positive"},...e.slice(5)]}},u={name:"Render tabs with info badge",args:{small:!0,defaultItem:"badgeItem",items:[...e.slice(0,3),{label:"Item with info badge",name:"badgeItem",badge:"info"},...e.slice(5)]}},b={name:"Render tabs with badge in context menu",args:{small:!0,defaultItem:"item5",items:[{label:"Context tab test",name:"contextTabTest"},...e.slice(0,8),{label:"Item with critical badge",name:"badgeItem",badge:"critical"},...e.slice(9)]},play:async({canvasElement:g})=>{const I=p(g);await n(()=>{var a;return(a=document.body.textContent)==null?void 0:a.includes("Context tab test")}),await n(()=>document.querySelector("button"));const w=I.getByRole("button");await h.click(w);const t=p(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("tab");await v(t[t.length-9]).toHaveTextContent("Item with critical badge")}};var R,x,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Render tabs',
  args: {
    small: false,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,E,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Render tabs vertical',
  args: {
    vertical: true,
    small: true,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(C=(E=r.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var _,B,V;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Render tabs in small',
  args: {
    small: true,
    defaultItem: 'item2',
    items: tabItems.slice(0, 2)
  }
}`,...(V=(B=m.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var W,S,N;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Render many tab items',
  args: {
    small: true,
    defaultItem: 'item2',
    items: tabItems
  }
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var k,q,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,M,U;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(M=l.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var L,F,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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

    await waitUntilRendered(() => document.body.textContent?.includes('Context tab test'));
    await waitUntilRendered(() => document.querySelector('.sw-context-button__button'));
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover__content')[0] as HTMLElement));
    const menuItem = popover.getAllByRole('tab');
    const lastItem = menuItem[menuItem.length - 1];
    await expect(lastItem).toHaveTextContent('Item 10');
    await userEvent.click(lastItem);
    await waitUntilRendered(() => document.getElementsByClassName('sw-popover__content').length === 0);
    expect(document.getElementsByClassName('sw-popover__content').length).toEqual(0);
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var O,j,z;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Render tabs with positive badge',
  args: {
    small: true,
    defaultItem: 'badgeItem',
    items: [...tabItems.slice(0, 3), {
      label: 'Item with positive badge',
      name: 'badgeItem',
      badge: 'positive'
    }, ...tabItems.slice(5)]
  }
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var D,G,J;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Render tabs with info badge',
  args: {
    small: true,
    defaultItem: 'badgeItem',
    items: [...tabItems.slice(0, 3), {
      label: 'Item with info badge',
      name: 'badgeItem',
      badge: 'info'
    }, ...tabItems.slice(5)]
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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

    await waitUntilRendered(() => document.body.textContent?.includes('Context tab test'));
    await waitUntilRendered(() => document.querySelector('button'));
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover__content')[0] as HTMLElement));
    const menuItem = popover.getAllByRole('tab');
    await expect(menuItem[menuItem.length - 9]).toHaveTextContent('Item with critical badge');
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Be=["VisualTestRenderTabs","VisualTestRenderTabsVertical","VisualTestRenderTabsFullWidth","VisualTestRenderManyTabItems","VisualTestRenderTabsWithError","VisualTestRenderContextTabWithError","VisualTestRenderContextTabWithActiveItem","VisualTestRenderTabsWithPositiveBadge","VisualTestRenderTabsWithInfoBadge","VisualTestRenderTabsWithContextMenuBadge"];export{c as VisualTestRenderContextTabWithActiveItem,l as VisualTestRenderContextTabWithError,o as VisualTestRenderManyTabItems,s as VisualTestRenderTabs,m as VisualTestRenderTabsFullWidth,r as VisualTestRenderTabsVertical,b as VisualTestRenderTabsWithContextMenuBadge,i as VisualTestRenderTabsWithError,u as VisualTestRenderTabsWithInfoBadge,d as VisualTestRenderTabsWithPositiveBadge,Be as __namedExportsOrder,_e as default};
