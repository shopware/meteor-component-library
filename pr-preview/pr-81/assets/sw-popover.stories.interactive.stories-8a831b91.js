import{w as l}from"./test-helper-7c3608e5.js";import{w as t,u as c}from"./index-68cdfbf5.js";import{e as m}from"./index-4b4e994a.js";import R from"./sw-popover.stories-98c21d84.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-popover-bb2835bb.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-checkbox-b29de8d5.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-d9725469.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./sw-field-error-642d3568.js";import"./sw-switch-8ba22487.js";import"./sw-button-f164c644.js";import"./sw-loader-2faceb27.js";import"./sw-popover-item-result-7a399a75.js";import"./sw-search-8d8b3efb.js";import"./isFunction-9829dcb9.js";import"./_baseGetTag-22b9c805.js";const ee={...R,title:"Interaction Tests/Overlay/sw-popover"},r={name:"Should render only the popover trigger"},a={name:"Should render the popover",play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Toggle popover"));const i=o.getByText("Toggle popover");await c.click(i);const n=t(document.querySelector(".sw-floating-ui__content"));m(n.getByText("Popover example")).toBeInTheDocument()}},p={name:"Should render the popover with child view",play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Toggle popover"));const i=o.getByText("Toggle popover");await c.click(i);const n=t(document.querySelector(".sw-floating-ui__content"));m(n.getByText("Popover example")).toBeInTheDocument();const _=n.getByText("Columns");await c.click(_)}},s={name:"Should render the popover with disabled float and without trigger",args:{disableFloat:!0},play:async({canvasElement:e})=>{const o=t(e);await l(()=>document.body.textContent.includes("Popover example")),m(o.getByText("Popover example")).toBeInTheDocument()}};var d,u,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
