import{w as l,u as K}from"./index-912b65a3.js";import{e as p}from"./index-b9ac83fc.js";import{MinimalStory as g,ExtendedStory as e}from"./sw-card.stories-ab4b9faa.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-card-10b877f1.js";import"./vue.esm-bundler-651c6785.js";import"./sw-context-menu-item-d1d966cc.js";import"./sw-icon-6b99fd11.js";import"./iframe-e89b9ed4.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-popover-f571a6df.js";import"./sw-checkbox-1ab7dea0.js";import"./sw-base-field-92d7614b.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-d121f603.js";import"./sw-switch-b63415e5.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-tabs-97e8bc65.js";import"./sw-color-badge-009d7ca8.js";import"./_MapCache-73175cc1.js";import"./isFunction-97e00978.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";const Ae={title:"Interaction Tests/Layout/sw-card"},t={...g,name:"Render a minimal card",args:{...g.args}},a={...e,name:"Render a extended card",args:{...e.args}},n={...e,name:"Render a extended card without toolbar",args:{...e.args,toolbar:null}},r={...e,name:"Render a extended card with hero",args:{...e.args,hero:!0}},o={...e,name:"Render a extended card without headerRight",args:{...e.args,headerRight:null}},s={...e,name:"Render a extended card without Tabs",args:{...e.args,tabs:null}},d={...e,name:"Render a extended card without Avatar",args:{...e.args,avatar:null}},i={...e,name:"Render a extended card without Footer",args:{...e.args,footer:null}},m={...e,name:"Render a extended card without Context Actions",args:{...e.args,"context-actions":null}},c={...e,name:"Render a extended card with opened Context Actions",args:{...e.args},play:async({canvasElement:G})=>{const J=l(G).getByLabelText("Context menu");await K.click(J);const u=l(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("menuitem");await p(u[0]).toHaveTextContent("Menu Item A"),await p(u[1]).toHaveTextContent("Menu Item B"),await p(u[2]).toHaveTextContent("Menu Item C")}};var x,h,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...MinimalStory,
  name: 'Render a minimal card',
  args: {
    ...MinimalStory.args
  }
}`,...(E=(h=t.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var T,y,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card',
  args: {
    ...ExtendedStory.args
  }
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,v,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without toolbar',
  args: {
    ...ExtendedStory.args,
    toolbar: null
  }
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var C,P,V;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card with hero',
  args: {
    ...ExtendedStory.args,
    hero: true
  }
}`,...(V=(P=r.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var b,A,W;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without headerRight',
  args: {
    ...ExtendedStory.args,
    headerRight: null
  }
}`,...(W=(A=o.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var I,M,H;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Tabs',
  args: {
    ...ExtendedStory.args,
    tabs: null
  }
}`,...(H=(M=s.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var B,_,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Avatar',
  args: {
    ...ExtendedStory.args,
    avatar: null
  }
}`,...(f=(_=d.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var L,F,k;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Footer',
  args: {
    ...ExtendedStory.args,
    footer: null
  }
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var O,N,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Context Actions',
  args: {
    ...ExtendedStory.args,
    'context-actions': null
  }
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,z,D;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card with opened Context Actions',
  args: {
    ...ExtendedStory.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByLabelText('Context menu');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within((document.getElementsByClassName('sw-popover__content')[0] as HTMLElement));
    const menuItem = popover.getAllByRole('menuitem');
    await expect(menuItem[0]).toHaveTextContent('Menu Item A');
    await expect(menuItem[1]).toHaveTextContent('Menu Item B');
    await expect(menuItem[2]).toHaveTextContent('Menu Item C');
  }
}`,...(D=(z=c.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const We=["VisualTestMinimalPage","VisualTestExtendedPage","VisualTestExtendedPageWithoutToolbar","VisualTestExtendedPageWithHero","VisualTestExtendedPageWithoutHeaderRight","VisualTestExtendedPageWithoutTabs","VisualTestExtendedPageWithoutAvatar","VisualTestExtendedPageWithoutFooter","VisualTestExtendedPageWithoutContextActions","VisualTestExtendedPageWithOpenedContextActions"];export{a as VisualTestExtendedPage,r as VisualTestExtendedPageWithHero,c as VisualTestExtendedPageWithOpenedContextActions,d as VisualTestExtendedPageWithoutAvatar,m as VisualTestExtendedPageWithoutContextActions,i as VisualTestExtendedPageWithoutFooter,o as VisualTestExtendedPageWithoutHeaderRight,s as VisualTestExtendedPageWithoutTabs,n as VisualTestExtendedPageWithoutToolbar,t as VisualTestMinimalPage,We as __namedExportsOrder,Ae as default};
