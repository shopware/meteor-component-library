import{w as c,u as r}from"./index-68cdfbf5.js";import{e as n}from"./index-4b4e994a.js";import{w as K}from"./test-helper-7c3608e5.js";import M from"./sw-checkbox.stories-876d7d9b.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-checkbox-b29de8d5.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-d9725469.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./sw-field-error-642d3568.js";const me={...M,title:"Interaction Tests/Form/sw-checkbox"},s={name:"Should display label",args:{label:"label"},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByText(e.label)).toBeDefined()}},o={name:"Should be checkable",args:{label:"Checked"},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},l={name:"Should be uncheckable",args:{label:"Unchecked",checked:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!1),n(e.change).toHaveBeenCalledWith(!1)}},i={name:"Should not change value when disabled",args:{label:"Disabled",disabled:!0,checked:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);n(a.getByRole("checkbox").checked).toBe(!0),await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).not.toHaveBeenCalled()}},d={name:"Should be bordered",args:{label:"Bordered",bordered:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByRole("checkbox")),n(a.getByRole("checkbox").checked).toBe(!0),n(e.change).toHaveBeenCalledWith(!0)}},h={name:"Should trigger inheritance-remove event",args:{label:"Inherited",inheritedValue:!1,isInherited:!0},play:async({canvasElement:t,args:e})=>{const a=c(t);await r.click(a.getByTestId("sw-inheritance-switch-icon")),await K(()=>document.querySelector(".sw-tooltip")),await n(e.inheritanceRemove).toHaveBeenCalledWith(void 0)}},p={name:"Error should be displayed",args:{label:"Error label",error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByText(e.error.detail)).toBeDefined()}},u={name:"Bordered error should be displayed",args:{label:"Bordered error label",bordered:!0,checked:!0,error:{detail:"Error message"}},play:({canvasElement:t,args:e})=>{const a=c(t);n(a.getByRole("checkbox").checked).toBe(!0),n(a.getByText(e.error.detail)).toBeDefined()}},m={name:"Help text should be displayed",args:{label:"Help text label",helpText:"Help text message"},play:async({canvasElement:t})=>{const e=c(t);n(e.getByRole("checkbox").checked).toBe(!1),n(e.getByTestId("sw-help-text__icon")).toBeDefined(),await r.click(e.getByTestId("sw-help-text__icon")),await K(()=>document.querySelector(".sw-tooltip"))}},g={name:"Partial checked should be displayed",args:{label:"Partial checked label",partial:!0,checked:!1},play:async({canvasElement:t})=>{const e=c(t);await n(e.getByRole("checkbox").indeterminate).toBe(!0),await n(e.getByRole("checkbox").checked).toBe(!1),await n(e.getByTestId("sw-icon__regular-minus-xxs")).toBeDefined()}};var b,y,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Should display label',
  args: {
    label: 'label'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.label)).toBeDefined();
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,k,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('checkbox').checked).toBe(true);
    expect(args.change).toHaveBeenCalledWith(true);
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,E,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('checkbox').checked).toBe(false);
    expect(args.change).toHaveBeenCalledWith(false);
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var R,f,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('checkbox').checked).toBe(true);
    await userEvent.click(canvas.getByRole('checkbox'));
    expect(canvas.getByRole('checkbox').checked).toBe(true);
    expect(args.change).not.toHaveBeenCalled();
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var V,H,C;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('checkbox').checked).toBe(true);
    expect(args.change).toHaveBeenCalledWith(true);
  }
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var _,I,D;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var W,U,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(U=p.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var q,L,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    expect(canvas.getByRole('checkbox').checked).toBe(true);
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var O,j,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Help text should be displayed',
  args: {
    label: 'Help text label',
    helpText: 'Help text message'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('checkbox').checked).toBe(false);
    expect(canvas.getByTestId('sw-help-text__icon')).toBeDefined();
    await userEvent.click(canvas.getByTestId('sw-help-text__icon'));
    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));
  }
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,G,J;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole('checkbox').indeterminate).toBe(true);
    await expect(canvas.getByRole('checkbox').checked).toBe(false);
    await expect(canvas.getByTestId('sw-icon__regular-minus-xxs')).toBeDefined();
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ge=["TestLabel","VisualTestCheckable","VisualTestUncheckable","VisualTestDisabled","VisualTestBordered","VisualTestInherited","VisualTestError","VisualTestBorderedError","VisualTestHelpText","VisualTestPartialChecked"];export{s as TestLabel,d as VisualTestBordered,u as VisualTestBorderedError,o as VisualTestCheckable,i as VisualTestDisabled,p as VisualTestError,m as VisualTestHelpText,h as VisualTestInherited,g as VisualTestPartialChecked,l as VisualTestUncheckable,ge as __namedExportsOrder,me as default};
