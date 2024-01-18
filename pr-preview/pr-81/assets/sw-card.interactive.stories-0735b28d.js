import{w as l,u as K}from"./index-68cdfbf5.js";import{e as p}from"./index-4b4e994a.js";import{MinimalStory as g,ExtendedStory as e}from"./sw-card.stories-ccb3ddc5.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-card-64119f7c.js";import"./vue.esm-bundler-651c6785.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-context-menu-item-ca0204d7.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./sw-popover-45ad3638.js";import"./sw-checkbox-b768a239.js";import"./sw-base-field-334003ba.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./sw-field-error-e21a36f0.js";import"./sw-switch-c4c81ac2.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-tabs-128851e2.js";import"./sw-color-badge-009d7ca8.js";import"./_MapCache-a2adaacd.js";import"./isFunction-22da0083.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";const Ae={title:"Interaction Tests/Layout/sw-card"},t={...g,name:"Render a minimal card",args:{...g.args}},a={...e,name:"Render a extended card",args:{...e.args}},n={...e,name:"Render a extended card without toolbar",args:{...e.args,toolbar:null}},r={...e,name:"Render a extended card with hero",args:{...e.args,hero:!0}},o={...e,name:"Render a extended card without headerRight",args:{...e.args,headerRight:null}},s={...e,name:"Render a extended card without Tabs",args:{...e.args,tabs:null}},d={...e,name:"Render a extended card without Avatar",args:{...e.args,avatar:null}},i={...e,name:"Render a extended card without Footer",args:{...e.args,footer:null}},c={...e,name:"Render a extended card without Context Actions",args:{...e.args,contextActions:null}},m={...e,name:"Render a extended card with opened Context Actions",args:{...e.args},play:async({canvasElement:G})=>{const J=l(G).getByLabelText("Context menu");await K.click(J);const u=l(document.getElementsByClassName("sw-popover__content")[0]).getAllByRole("menuitem");await p(u[0]).toHaveTextContent("Menu Item A"),await p(u[1]).toHaveTextContent("Menu Item B"),await p(u[2]).toHaveTextContent("Menu Item C")}};var x,h,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(P=r.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var A,b,W;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without headerRight',
  args: {
    ...ExtendedStory.args,
    headerRight: null
  }
}`,...(W=(b=o.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var I,M,H;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(_=d.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var F,L,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Footer',
  args: {
    ...ExtendedStory.args,
    footer: null
  }
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var O,N,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...ExtendedStory,
  name: 'Render a extended card without Context Actions',
  args: {
    ...ExtendedStory.args,
    contextActions: null
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,z,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);
    const menuItem = popover.getAllByRole('menuitem');
    await expect(menuItem[0]).toHaveTextContent('Menu Item A');
    await expect(menuItem[1]).toHaveTextContent('Menu Item B');
    await expect(menuItem[2]).toHaveTextContent('Menu Item C');
  }
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const be=["VisualTestMinimalPage","VisualTestExtendedPage","VisualTestExtendedPageWithoutToolbar","VisualTestExtendedPageWithHero","VisualTestExtendedPageWithoutHeaderRight","VisualTestExtendedPageWithoutTabs","VisualTestExtendedPageWithoutAvatar","VisualTestExtendedPageWithoutFooter","VisualTestExtendedPageWithoutContextActions","VisualTestExtendedPageWithOpenedContextActions"];export{a as VisualTestExtendedPage,r as VisualTestExtendedPageWithHero,m as VisualTestExtendedPageWithOpenedContextActions,d as VisualTestExtendedPageWithoutAvatar,c as VisualTestExtendedPageWithoutContextActions,i as VisualTestExtendedPageWithoutFooter,o as VisualTestExtendedPageWithoutHeaderRight,s as VisualTestExtendedPageWithoutTabs,n as VisualTestExtendedPageWithoutToolbar,t as VisualTestMinimalPage,be as __namedExportsOrder,Ae as default};
