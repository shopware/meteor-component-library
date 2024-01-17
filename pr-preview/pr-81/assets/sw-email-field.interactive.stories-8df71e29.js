import{w as s,u as g}from"./index-68cdfbf5.js";import{e as t}from"./index-4b4e994a.js";import z from"./sw-email-field.stories-7dcbdbda.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-text-field-aae73c5f.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-field-error-73799238.js";import"./arg-types-d031e4ef.js";const pe={...z,title:"Interaction Tests/Form/sw-email-field"},r={name:"Should keep input value",play:async({canvasElement:a,args:e})=>{const n=s(a),v="admin@shopware.com";await g.type(n.getByRole("textbox"),v),await g.click(n.getByText("hidden")),t(n.getByRole("textbox").value).toBe(v),t(e.input).toHaveBeenCalledTimes(18),t(e.change).toHaveBeenCalledWith(v)}},o={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByText(e.prefix)).toBeDefined()}},l={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByText(e.suffix)).toBeDefined()}},i={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByText(e.hint)).toBeDefined()}},c={name:"Should display label",args:{label:"label"},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByText(e.label)).toBeDefined()}},p={name:"Should disable",args:{disabled:!0,value:"Shopware"},play:async({canvasElement:a})=>{const e=s(a);await g.type(e.getByRole("textbox"),"1337"),t(e.getByRole("textbox").value).toBe("Shopware")}},d={name:"Should display placeholder",args:{placeholder:"Placeholder"},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByPlaceholderText(e.placeholder)).toBeDefined()}},m={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:a,args:e})=>{const n=s(a);t(n.getByText(e.error.detail)).toBeDefined()}},u={name:"Should validate email",args:{value:"admin@"},play:({canvasElement:a})=>{const e=s(a);t(e.getByText("Please enter a part following '@'. 'admin@' is incomplete.")).toBeDefined()}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const TEST_EMAIL = 'admin@shopware.com';
    await userEvent.type(canvas.getByRole('textbox'), TEST_EMAIL);
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByRole('textbox').value).toBe(TEST_EMAIL);

    // Input to be called once for each letter

    expect(args.input).toHaveBeenCalledTimes(18);
    expect(args.change).toHaveBeenCalledWith(TEST_EMAIL);
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,T,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,S,w;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var b,D,V;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var P,I,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var R,L,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    value: 'Shopware'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), '1337');
    expect(canvas.getByRole('textbox').value).toBe('Shopware');
  }
}`,...(H=(L=p.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,M,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Should display placeholder',
  args: {
    placeholder: 'Placeholder'
  },
  play: ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByPlaceholderText(args.placeholder)).toBeDefined();
  }
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var C,F,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var O,j,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Should validate email',
  args: {
    value: 'admin@'
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Please enter a part following '@'. 'admin@' is incomplete.")).toBeDefined();
  }
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const de=["TestInputValue","VisualTestPrefix","VisualTestSuffix","VisualTestHint","TestLabel","VisualTestDisabled","TestPlaceholder","VisualTestError","VisualTestValidationError"];export{r as TestInputValue,c as TestLabel,d as TestPlaceholder,p as VisualTestDisabled,m as VisualTestError,i as VisualTestHint,o as VisualTestPrefix,l as VisualTestSuffix,u as VisualTestValidationError,de as __namedExportsOrder,pe as default};
