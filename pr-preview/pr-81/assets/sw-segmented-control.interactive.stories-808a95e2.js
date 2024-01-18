import b from"./sw-segmented-control.stories-be1107fe.js";import{w as a,u as l}from"./index-912b65a3.js";import{e as m}from"./index-b9ac83fc.js";import"./sw-segmented-control-ee37dd6e.js";import"./sw-checkbox-39cb202e.js";import"./vue.esm-bundler-651c6785.js";import"./sw-icon-2e639069.js";import"./iframe-5655d990.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-20bd014f.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-a370f7db.js";import"./sw-popover-e436a5c5.js";import"./sw-switch-98de9707.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";const Y={...b,title:"Interaction Tests/Navigation/sw-segmented-control"},t={name:"Render segmented controls"},o={name:"Render segmented controls with context",args:{disableContext:!1}},n={name:"Render segmented controls with popover base",play:async({canvasElement:r})=>{const c=await a(r).getByText("Label F");await l.click(c);const i=await a(document.getElementsByClassName("sw-popover__content")[0]).getByText("First level");await m(i).toBeInTheDocument()}},s={name:"Render segmented controls with popover second level",play:async({canvasElement:r})=>{const c=await a(r).getByText("Label F");await l.click(c);const e=a(document.getElementsByClassName("sw-popover__content")[0]),i=await e.getByText("Go to second level");await l.click(i);const C=await e.getByText("Second level");await m(C).toBeInTheDocument();const R=await e.getByText("Go to third level");await m(R).toBeInTheDocument()}};var p,d,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Render segmented controls'
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,u,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Render segmented controls with context',
  args: {
    disableContext: false
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var T,h,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Render segmented controls with popover base',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Label F');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);
    const firstLevel = await popover.getByText('First level');
    await expect(firstLevel).toBeInTheDocument();
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,B,L;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Render segmented controls with popover second level',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Label F');
    await userEvent.click(button);

    // Look inside the popover
    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);
    const goToSecondLevel = await popover.getByText('Go to second level');
    await userEvent.click(goToSecondLevel);
    const secondLevel = await popover.getByText('Second level');
    await expect(secondLevel).toBeInTheDocument();
    const goToThirdLevel = await popover.getByText('Go to third level');
    await expect(goToThirdLevel).toBeInTheDocument();
  }
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const Z=["VisualTestRenderSegmentedControl","VisualTestRenderSegmentedControlWithContext","VisualTestRenderSegmentedControlWithPopoverBase","VisualTestRenderSegmentedControlWithPopoverSecondLevel"];export{t as VisualTestRenderSegmentedControl,o as VisualTestRenderSegmentedControlWithContext,n as VisualTestRenderSegmentedControlWithPopoverBase,s as VisualTestRenderSegmentedControlWithPopoverSecondLevel,Z as __namedExportsOrder,Y as default};
