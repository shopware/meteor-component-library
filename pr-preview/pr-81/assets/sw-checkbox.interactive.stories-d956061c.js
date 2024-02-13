import{w as c,u as r}from"./index-912b65a3.js";import{e as n}from"./index-b9ac83fc.js";import{w as K}from"./test-helper-7c3608e5.js";import N from"./sw-checkbox.stories-cbbe0c18.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./sw-checkbox-f322df60.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-icon-bee95678.js";import"./iframe-2d80cf9a.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-27067bb6.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-753a5956.js";const Be={...N,title:"Interaction Tests/Form/sw-checkbox"},o={name:"Should display label",args:{label:"label"},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByText(e.label)).toBeDefined()}},l={name:"Should be checkable",args:{label:"Checked"},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},i={name:"Should be uncheckable",args:{label:"Unchecked",checked:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!1),n(e.change).toHaveBeenCalledWith(!1)}},d={name:"Should not change value when disabled",args:{label:"Disabled",disabled:!0,checked:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);n(a.getByRole("checkbox").checked).toBe(!0),await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).not.toHaveBeenCalled()}},p={name:"Should be bordered",args:{label:"Bordered",bordered:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},h={name:"Should trigger inheritance-remove event",args:{label:"Inherited",inheritedValue:!1,isInherited:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByTestId("sw-inheritance-switch-icon")),await K(()=>document.querySelector(".sw-tooltip")),await n(e.inheritanceRemove).toHaveBeenCalledWith(void 0)}},m={name:"Error should be displayed",args:{label:"Error label",error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{var s;const a=c(t);n(a.getByText((s=e.error)==null?void 0:s.detail)).toBeDefined()}},u={name:"Bordered error should be displayed",args:{label:"Bordered error label",bordered:!0,checked:!0,error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{var s;const a=c(t);n(a.getByRole("checkbox").checked).toBe(!0),n(a.getByText((s=e.error)==null?void 0:s.detail)).toBeDefined()}},g={name:"Help text should be displayed",args:{label:"Help text label",helpText:"Help text message"},play:async({canvasElement:t})=>{const e=c(t);n(e.getByRole("checkbox").checked).toBe(!1),n(e.getByTestId("sw-help-text__icon")).toBeDefined(),await r.click(e.getByTestId("sw-help-text__icon")),await K(()=>document.querySelector(".sw-tooltip"))}},b={name:"Partial checked should be displayed",args:{label:"Partial checked label",partial:!0,checked:!1},play:async({canvasElement:t})=>{const e=c(t);await n(e.getByRole("checkbox").indeterminate).toBe(!0),await n(e.getByRole("checkbox").checked).toBe(!1),await n(e.getByTestId("sw-icon__regular-minus-xxs")).toBeDefined()}};var y,B,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Should display label',
  args: {
    label: 'label'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.label!)).toBeDefined();
  }
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var k,x,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(x=l.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var E,T,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var f,H,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Should not change value when disabled',
  args: {
    label: 'Disabled',
    disabled: true,
    checked: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
    expect(args.change).not.toHaveBeenCalled();
  }
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var I,V,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var _,D,L;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Should trigger inheritance-remove event',
  args: {
    label: 'Inherited',
    inheritedValue: false,
    isInherited: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
    await expect(args.inheritanceRemove).toHaveBeenCalledWith(undefined);
  }
}`,...(L=(D=h.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,W,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    expect(canvas.getByText(args.error?.detail)).toBeDefined();
  }
}`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var P,q,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    expect(canvas.getByText(args.error?.detail)).toBeDefined();
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,j,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
  }
}`,...(z=(j=g.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,G,J;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Partial checked should be displayed',
  args: {
    label: 'Partial checked label',
    partial: true,
    checked: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect((canvas.getByRole('checkbox') as HTMLInputElement).indeterminate).toBe(true);
    await expect((canvas.getByRole('checkbox') as HTMLInputElement).checked).toBe(false);
    await expect(canvas.getByTestId('sw-icon__regular-minus-xxs')).toBeDefined();
  }
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ve=["TestLabel","VisualTestCheckable","VisualTestUncheckable","VisualTestDisabled","VisualTestBordered","VisualTestInherited","VisualTestError","VisualTestBorderedError","VisualTestHelpText","VisualTestPartialChecked"];export{o as TestLabel,p as VisualTestBordered,u as VisualTestBorderedError,l as VisualTestCheckable,d as VisualTestDisabled,m as VisualTestError,g as VisualTestHelpText,h as VisualTestInherited,b as VisualTestPartialChecked,i as VisualTestUncheckable,ve as __namedExportsOrder,Be as default};
