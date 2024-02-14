import{w as c,u as r}from"./index-912b65a3.js";import{e as n}from"./index-b9ac83fc.js";import{w as z}from"./test-helper-7c3608e5.js";import A from"./sw-switch.stories-479dd2bd.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-switch-43d3851e.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-adb45841.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-96b204b4.js";import"./iframe-e9565955.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-660be3d3.js";const pe={...A,title:"Interaction Tests/Form/sw-switch"},s={name:"Label should function",args:{label:"label",checked:!1},play:async({canvasElement:t,args:e})=>{const a=c(t);n(a.getByText(e.label)).toBeDefined(),await r.click(a.getByText(e.label)),n(a.getByRole("checkbox").checked).toBe(!0)}},o={name:"Should be checkable",args:{label:"Checked"},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},l={name:"Should be uncheckable",args:{label:"Unchecked",checked:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!1),n(e.change).toHaveBeenCalledWith(!1)}},i={name:"Should not change value when disabled",args:{label:"Disabled",disabled:!0,checked:!0},play:async({canvasElement:t})=>{const e=c(t);n(e.getByRole("checkbox").checked).toBe(!0),await r.click(e.getByRole("checkbox")),n(e.getByRole("checkbox").checked).toBe(!0)}},d={name:"Should be bordered",args:{label:"Bordered",bordered:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},p={name:"Should trigger inheritance-remove event",args:{label:"Inherited",inheritedValue:!1},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByTestId("sw-inheritance-switch-icon")),await z(()=>document.querySelector(".sw-tooltip")),n(e.inheritanceRemove).toHaveBeenCalledWith(void 0)}},h={name:"Error should be displayed",args:{label:"Error label",error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByText(e.error.detail)).toBeDefined()}},u={name:"Bordered error should be displayed",args:{label:"Bordered error label",bordered:!0,checked:!0,error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByRole("checkbox").checked).toBe(!0),n(a.getByText(e.error.detail)).toBeDefined()}},m={name:"Help text should be displayed",args:{label:"Help text label",helpText:"Help text message"},play:async({canvasElement:t})=>{const e=c(t);n(e.getByRole("checkbox").checked).toBe(!1),n(e.getByTestId("sw-help-text__icon")).toBeDefined(),await r.click(e.getByTestId("sw-help-text__icon")),await z(()=>document.querySelector(".sw-tooltip")),n(document.querySelector(".sw-tooltip")).toBeDefined()}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Label should function',
  args: {
    label: 'label',
    checked: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.label)).toBeDefined();
    await userEvent.click(canvas.getByText(args.label));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,v,k;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Should be checkable',
  args: {
    label: 'Checked'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    expect(args.change).toHaveBeenCalledWith(true);
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var x,w,E;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Should be uncheckable',
  args: {
    label: 'Unchecked',
    checked: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
    expect(args.change).toHaveBeenCalledWith(false);
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,R,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Should not change value when disabled',
  args: {
    label: 'Disabled',
    disabled: true,
    checked: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  }
}`,...(f=(R=i.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var S,H,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Should be bordered',
  args: {
    label: 'Bordered',
    bordered: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    expect(args.change).toHaveBeenCalledWith(true);
  }
}`,...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var V,D,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Should trigger inheritance-remove event',
  args: {
    label: 'Inherited',
    inheritedValue: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    expect(args.inheritanceRemove).toHaveBeenCalledWith(undefined);
  }
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var L,_,M;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Error should be displayed',
  args: {
    label: 'Error label',
    error: {
      detail: 'Error message'
    }
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...(M=(_=h.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var W,U,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Bordered error should be displayed',
  args: {
    label: 'Bordered error label',
    bordered: true,
    checked: true,
    error: {
      detail: 'Error message'
    }
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,O,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Help text should be displayed',
  args: {
    label: 'Help text label',
    helpText: 'Help text message'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
    expect(canvas.getByTestId('sw-help-text__icon')).toBeDefined();
    await userEvent.click(canvas.getByTestId('sw-help-text__icon'));
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    expect(document.querySelector('.sw-tooltip')).toBeDefined();
  }
}`,...(j=(O=m.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const he=["TestLabel","VisualTestCheckable","VisualTestUncheckable","VisualTestDisabled","VisualTestBordered","VisualTestInherited","VisualTestError","VisualTestBorderedError","VisualTestHelpText"];export{s as TestLabel,d as VisualTestBordered,u as VisualTestBorderedError,o as VisualTestCheckable,i as VisualTestDisabled,h as VisualTestError,m as VisualTestHelpText,p as VisualTestInherited,l as VisualTestUncheckable,he as __namedExportsOrder,pe as default};
