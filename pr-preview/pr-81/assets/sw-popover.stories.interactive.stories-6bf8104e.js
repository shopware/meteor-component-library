import{w as m}from"./test-helper-7c3608e5.js";import{w as n,u as l}from"./index-912b65a3.js";import{e as d}from"./index-b9ac83fc.js";import R from"./sw-popover.stories-5a34a91f.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-popover-04f1e5e7.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-checkbox-873bc1ce.js";import"./sw-icon-c55f7719.js";import"./iframe-d923d319.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-a1266e44.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-de94aec2.js";import"./sw-switch-56a466ff.js";import"./sw-button-eda03130.js";import"./sw-loader-479eb282.js";import"./sw-popover-item-result-1cf37579.js";import"./sw-search-a1143659.js";import"./isFunction-97e00978.js";import"./_baseGetTag-22b9c805.js";const te={...R,title:"Interaction Tests/Overlay/sw-popover"},p={name:"Should render only the popover trigger"},s={name:"Should render the popover",play:async({canvasElement:o})=>{const t=n(o);await m(()=>{var a;return(a=document.body.textContent)==null?void 0:a.includes("Toggle popover")});const e=t.getByText("Toggle popover");await l.click(e);const r=n(document.querySelector(".sw-floating-ui__content"));d(r.getByText("Popover example")).toBeInTheDocument()}},i={name:"Should render the popover with child view",play:async({canvasElement:o})=>{const t=n(o);await m(()=>{var u;return(u=document.body.textContent)==null?void 0:u.includes("Toggle popover")});const e=t.getByText("Toggle popover");await l.click(e);const r=n(document.querySelector(".sw-floating-ui__content"));d(r.getByText("Popover example")).toBeInTheDocument();const a=r.getByText("Columns");await l.click(a)}},c={name:"Should render the popover with disabled float and without trigger",args:{disableFloat:!0},play:async({canvasElement:o})=>{const t=n(o);await m(()=>{var e;return(e=document.body.textContent)==null?void 0:e.includes("Popover example")}),d(t.getByText("Popover example")).toBeInTheDocument()}};var v,g,T;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Should render only the popover trigger"
}`,...(T=(g=p.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,w,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Should render the popover",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent?.includes("Toggle popover"));
    const popoverToggle = canvas.getByText("Toggle popover");
    await userEvent.click(popoverToggle);
    const popover = within((document.querySelector(".sw-floating-ui__content") as HTMLElement));
    expect(popover.getByText("Popover example")).toBeInTheDocument();
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,B,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Should render the popover with child view",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent?.includes("Toggle popover"));
    const popoverToggle = canvas.getByText("Toggle popover");
    await userEvent.click(popoverToggle);
    const popover = within((document.querySelector(".sw-floating-ui__content") as HTMLElement));
    expect(popover.getByText("Popover example")).toBeInTheDocument();
    const columnsItem = popover.getByText("Columns");
    await userEvent.click(columnsItem);
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var E,P,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Should render the popover with disabled float and without trigger",
  args: {
    disableFloat: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitUntilRendered(() => document.body.textContent?.includes("Popover example"));
    expect(canvas.getByText("Popover example")).toBeInTheDocument();
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ne=["VisualTestRenderPopoverTrigger","VisualTestRenderPopover","VisualTestRenderChildView","VisualTestRenderWithoutFloat"];export{i as VisualTestRenderChildView,s as VisualTestRenderPopover,p as VisualTestRenderPopoverTrigger,c as VisualTestRenderWithoutFloat,ne as __namedExportsOrder,te as default};