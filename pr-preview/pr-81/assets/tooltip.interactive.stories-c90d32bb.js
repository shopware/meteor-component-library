import B from"./tooltip.stories-25b68fc8.js";import{w as n,u as g}from"./index-912b65a3.js";import{e as y}from"./index-b9ac83fc.js";import{w as r}from"./test-helper-7c3608e5.js";import"./sw-icon-9e700c16.js";import"./iframe-1c9f7e38.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-651c6785.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./tooltip.directive-5026512a.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";const k={...B,title:"Interaction Tests/Directives/Tooltip"},e={name:"Render icon"},t={name:"Render tooltip",args:{message:"This is the help text"},play:async({canvasElement:s})=>{const i=await n(s).getByTestId("sw-icon__regular-question-circle");await g.hover(i),await r(()=>document.querySelector(".sw-tooltip"));const a=n(document.getElementsByClassName("sw-tooltip")[0]).getByText("This is the help text");y(a).toBeDefined()}},o={name:"Render tooltip in wide",args:{message:"This is the help text",width:300},play:async({canvasElement:s})=>{const i=n(s).getByTestId("sw-icon__regular-question-circle");await g.hover(i),await r(()=>document.querySelector(".sw-tooltip")),await r(()=>document.querySelector(".sw-tooltip"));const a=n(document.getElementsByClassName("sw-tooltip")[0]).getByText("This is the help text");y(a).toBeDefined()}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Render icon'
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Render tooltip',
  args: {
    message: 'This is the help text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.getByTestId('sw-icon__regular-question-circle');
    await userEvent.hover(icon);

    // wait until tooltip is loaded
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    const tooltip = within(document.getElementsByClassName('sw-tooltip')[0]);
    const helpText = tooltip.getByText('This is the help text');
    expect(helpText).toBeDefined();
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var w,h,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Render tooltip in wide',
  args: {
    message: 'This is the help text',
    width: 300
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByTestId('sw-icon__regular-question-circle');
    await userEvent.hover(icon);

    // wait until tooltip is loaded
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    const tooltip = within(document.getElementsByClassName('sw-tooltip')[0]);
    const helpText = tooltip.getByText('This is the help text');
    expect(helpText).toBeDefined();
  }
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const z=["VisualTestRenderIcon","VisualTestRenderTooltip","VisualTestRenderTooltipInWide"];export{e as VisualTestRenderIcon,t as VisualTestRenderTooltip,o as VisualTestRenderTooltipInWide,z as __namedExportsOrder,k as default};
