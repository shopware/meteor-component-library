import{w as t,u as v}from"./index-912b65a3.js";import{e as n}from"./index-b9ac83fc.js";import A from"./sw-password-field.stories-63014f4d.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-icon-c5d78c31.js";import"./iframe-51513bc2.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-text-field-53fd480f.js";import"./sw-base-field-11681dcc.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-b96db198.js";import"./arg-types-a7a95a2c.js";const ue={...A,title:"Interaction Tests/Form/sw-password-field"},r="S3cr3tfor3$t",o={name:"Should keep input value",play:async({canvasElement:s,args:e})=>{const a=t(s);await v.type(a.getByLabelText(e.label),r),await v.click(a.getByText("hidden")),n(a.getByLabelText(e.label).value).toBe(r),n(e.change).toHaveBeenCalledWith(r)}},l={name:"Should display label",args:{label:"label"},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByText(e.label)).toBeDefined()}},c={name:"Should display placeholder",args:{placeholder:"Placeholder"},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByPlaceholderText(e.placeholder)).toBeDefined()}},i={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByText(e.prefix)).toBeDefined()}},p={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByText(e.suffix)).toBeDefined()}},d={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByText(e.hint)).toBeDefined()}},m={name:"Should disable",args:{disabled:!0,modelValue:r},play:async({canvasElement:s,args:e})=>{const a=t(s);await v.type(a.getByLabelText(e.label),"1337"),n(a.getByLabelText(e.label).value).toBe(r)}},u={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:s,args:e})=>{const a=t(s);n(a.getByText(e.error.detail)).toBeDefined()}},g={name:"Should show password",args:{modelValue:r},play:async({canvasElement:s})=>{const e=t(s);await v.click(e.getByTestId("sw-password-field-show-button"))}};var y,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(args.label!), password);
    await userEvent.click(canvas.getByText('hidden'));
    expect((canvas.getByLabelText(args.label!) as HTMLInputElement).value).toBe(password);
    expect(args.change).toHaveBeenCalledWith(password);
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,w,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,b,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Should display placeholder',
  args: {
    placeholder: 'Placeholder'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText(args.placeholder!)).toBeDefined();
  }
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,V,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Should display prefix',
  args: {
    prefix: 'prefix'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.prefix)).toBeDefined();
  }
}`,...(D=(V=i.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var L,P,I;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Should display suffix',
  args: {
    suffix: 'suffix'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.suffix)).toBeDefined();
  }
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var k,H,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Should display hint',
  args: {
    hint: 'hint'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.hint)).toBeDefined();
  }
}`,...(_=(H=d.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var C,F,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    modelValue: password
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(args.label!), '1337');
    expect((canvas.getByLabelText(args.label!) as HTMLInputElement).value).toBe(password);
  }
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,O,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Should display error',
  args: {
    error: {
      code: 500,
      detail: 'Error while saving!'
    }
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(args.error.detail)).toBeDefined();
  }
}`,...($=(O=u.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var j,q,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Should show password',
  args: {
    modelValue: password
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-password-field-show-button'));
  }
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ge=["TestInputValue","TestLabel","TestPlaceholder","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestShowPassword"];export{o as TestInputValue,l as TestLabel,c as TestPlaceholder,m as VisualTestDisabled,u as VisualTestError,d as VisualTestHint,i as VisualTestPrefix,g as VisualTestShowPassword,p as VisualTestSuffix,ge as __namedExportsOrder,ue as default};
