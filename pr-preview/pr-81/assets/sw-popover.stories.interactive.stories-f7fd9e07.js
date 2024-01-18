import{w as l}from"./test-helper-7c3608e5.js";import{w as t,u as c}from"./index-912b65a3.js";import{e as m}from"./index-b9ac83fc.js";import R from"./sw-popover.stories-985ba82b.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-popover-ab815a34.js";import"./vue.esm-bundler-651c6785.js";import"./sw-checkbox-50fb646d.js";import"./sw-icon-682d28c1.js";import"./iframe-4e8d603d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-b77ca833.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./sw-field-error-eb878b94.js";import"./sw-switch-c5acce26.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-popover-item-result-f35b4763.js";import"./sw-search-f8f8abe2.js";import"./isFunction-d9767ad3.js";import"./_baseGetTag-22b9c805.js";const ee={...R,title:"Interaction Tests/Overlay/sw-popover"},r={name:"Should render only the popover trigger"},a={name:"Should render the popover",play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Toggle popover"));const i=o.getByText("Toggle popover");await c.click(i);const n=t(document.querySelector(".sw-floating-ui__content"));m(n.getByText("Popover example")).toBeInTheDocument()}},p={name:"Should render the popover with child view",play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Toggle popover"));const i=o.getByText("Toggle popover");await c.click(i);const n=t(document.querySelector(".sw-floating-ui__content"));m(n.getByText("Popover example")).toBeInTheDocument();const _=n.getByText("Columns");await c.click(_)}},s={name:"Should render the popover with disabled float and without trigger",args:{disableFloat:!0},play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Popover example")),m(o.getByText("Popover example")).toBeInTheDocument()}};var d,u,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Should render only the popover trigger'
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,T,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Should render the popover',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent.includes('Toggle popover'));
    const popoverToggle = canvas.getByText('Toggle popover');
    await userEvent.click(popoverToggle);
    const popover = within(document.querySelector('.sw-floating-ui__content'));
    expect(popover.getByText('Popover example')).toBeInTheDocument();
  }
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var w,y,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Should render the popover with child view',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent.includes('Toggle popover'));
    const popoverToggle = canvas.getByText('Toggle popover');
    await userEvent.click(popoverToggle);
    const popover = within(document.querySelector('.sw-floating-ui__content'));
    expect(popover.getByText('Popover example')).toBeInTheDocument();
    const columnsItem = popover.getByText('Columns');
    await userEvent.click(columnsItem);
  }
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,S,P;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Should render the popover with disabled float and without trigger',
  args: {
    disableFloat: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent.includes('Popover example'));
    expect(canvas.getByText('Popover example')).toBeInTheDocument();
  }
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const oe=["VisualTestRenderPopoverTrigger","VisualTestRenderPopover","VisualTestRenderChildView","VisualTestRenderWithoutFloat"];export{p as VisualTestRenderChildView,a as VisualTestRenderPopover,r as VisualTestRenderPopoverTrigger,s as VisualTestRenderWithoutFloat,oe as __namedExportsOrder,ee as default};
