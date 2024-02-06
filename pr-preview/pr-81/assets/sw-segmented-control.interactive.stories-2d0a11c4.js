import{w as a,u as l}from"./index-912b65a3.js";import{e as m}from"./index-b9ac83fc.js";import R from"./sw-segmented-control.stories-887b4c7f.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-segmented-control-3ef577a2.js";import"./sw-checkbox-e3f61f5e.js";import"./vue.esm-bundler-651c6785.js";import"./sw-icon-33834bfc.js";import"./iframe-bb853712.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-5b35d1fc.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-1cd838fb.js";import"./sw-popover-e191252f.js";import"./sw-switch-1a591c3a.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";const $={...R,title:"Interaction Tests/Navigation/sw-segmented-control"},o={name:"Render segmented controls"},n={name:"Render segmented controls with context",args:{disableContext:!1}},r={name:"Render segmented controls with popover base",play:async({canvasElement:c})=>{const i=await a(c).getByText("Label F");await l.click(i);const e=document.getElementsByClassName("sw-popover__content")[0];if(!e)throw new Error("Popover content not found");const p=await a(e).getByText("First level");await m(p).toBeInTheDocument()}},s={name:"Render segmented controls with popover second level",play:async({canvasElement:c})=>{const i=await a(c).getByText("Label F");await l.click(i);const e=document.getElementsByClassName("sw-popover__content")[0];if(!e)throw new Error("Popover content not found");const t=a(e),p=await t.getByText("Go to second level");await l.click(p);const E=await t.getByText("Second level");await m(E).toBeInTheDocument();const f=await t.getByText("Go to third level");await m(f).toBeInTheDocument()}};var d,v,w;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Render segmented controls'
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var g,u,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Render segmented controls with context',
  args: {
    disableContext: false
  }
}`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var h,C,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Render segmented controls with popover base',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Label F');
    await userEvent.click(button);
    const popoverContent = document.getElementsByClassName('sw-popover__content')[0];
    if (!popoverContent) {
      throw new Error('Popover content not found');
    }

    // Look inside the popover
    const popover = within((popoverContent as HTMLElement));
    const firstLevel = await popover.getByText('First level');
    await expect(firstLevel).toBeInTheDocument();
  }
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,B,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Render segmented controls with popover second level',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Label F');
    await userEvent.click(button);
    const popoverContent = document.getElementsByClassName('sw-popover__content')[0];
    if (!popoverContent) {
      throw new Error('Popover content not found');
    }

    // Look inside the popover
    const popover = within((popoverContent as HTMLElement));
    const goToSecondLevel = await popover.getByText('Go to second level');
    await userEvent.click(goToSecondLevel);
    const secondLevel = await popover.getByText('Second level');
    await expect(secondLevel).toBeInTheDocument();
    const goToThirdLevel = await popover.getByText('Go to third level');
    await expect(goToThirdLevel).toBeInTheDocument();
  }
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ee=["VisualTestRenderSegmentedControl","VisualTestRenderSegmentedControlWithContext","VisualTestRenderSegmentedControlWithPopoverBase","VisualTestRenderSegmentedControlWithPopoverSecondLevel"];export{o as VisualTestRenderSegmentedControl,n as VisualTestRenderSegmentedControlWithContext,r as VisualTestRenderSegmentedControlWithPopoverBase,s as VisualTestRenderSegmentedControlWithPopoverSecondLevel,ee as __namedExportsOrder,$ as default};