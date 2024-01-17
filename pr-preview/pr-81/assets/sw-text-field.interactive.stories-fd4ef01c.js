import{w as s,u as r}from"./index-68cdfbf5.js";import{e as t}from"./index-4b4e994a.js";import M from"./sw-text-field.stories-0c96db12.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-text-field-aae73c5f.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-field-error-73799238.js";import"./arg-types-d031e4ef.js";const ue={...M,title:"Interaction Tests/Form/sw-text-field"},o={name:"Should keep input value",play:async({canvasElement:n,args:a})=>{const e=s(n);await r.type(e.getByRole("textbox"),"Shopware"),await r.click(e.getByText("hidden")),t(e.getByRole("textbox").value).toBe("Shopware"),t(a.change).toHaveBeenCalledWith("Shopware")}},c={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.prefix)).toBeDefined()}},i={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.suffix)).toBeDefined()}},l={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.hint)).toBeDefined()}},p={name:"Should display label",args:{label:"label"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.label)).toBeDefined()}},d={name:"Should disable",args:{disabled:!0,value:"Shopware"},play:async({canvasElement:n})=>{const a=s(n);await r.type(a.getByRole("textbox"),"1337"),t(a.getByRole("textbox").value).toBe("Shopware")}},m={name:"Should display placeholder",args:{placeholder:"Placeholder"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByPlaceholderText(a.placeholder)).toBeDefined()}},u={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.error.detail)).toBeDefined()}},h={name:"Should be able to copy",args:{copyable:!0},play:async()=>{}},g={name:"Should remove and restore inheritance",args:{isInheritanceField:!0,isInherited:!1},play:async({canvasElement:n,args:a})=>{const e=s(n);await r.click(e.getByTestId("sw-icon__regular-lock-open-s")),t(a.inheritanceRestore).toBeCalled(),t(e.getByTestId("sw-inheritance-switch-icon")).toBeDefined(),await r.click(e.getByTestId("sw-inheritance-switch-icon")),t(a.inheritanceRemove).toBeCalled(),t(e.getByTestId("sw-icon__regular-lock-open-s")).toBeDefined()}};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByRole('textbox').value).toBe('Shopware');
    expect(args.change).toHaveBeenCalledWith('Shopware');
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,f,w;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var T,S,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var E,D,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,k,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var _,C,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var F,H,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var L,W,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,z,A;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Should be able to copy',
  args: {
    copyable: true
  },
  play: async () => {
    // TODO: Currently it is not possible to test Clipboard copying
    //  @see https://github.com/microsoft/playwright/issues/8114
  }
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Should remove and restore inheritance',
  args: {
    isInheritanceField: true,
    isInherited: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId('sw-icon__regular-lock-open-s'));
    expect(args.inheritanceRestore).toBeCalled();
    expect(canvas.getByTestId('sw-inheritance-switch-icon')).toBeDefined();
    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));
    expect(args.inheritanceRemove).toBeCalled();
    expect(canvas.getByTestId('sw-icon__regular-lock-open-s')).toBeDefined();
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const he=["TestInputValue","VisualTestPrefix","VisualTestSuffix","VisualTestHint","TestLabel","VisualTestDisabled","TestPlaceholder","VisualTestError","TestCopyable","VisualTestInheritance"];export{h as TestCopyable,o as TestInputValue,p as TestLabel,m as TestPlaceholder,d as VisualTestDisabled,u as VisualTestError,l as VisualTestHint,g as VisualTestInheritance,c as VisualTestPrefix,i as VisualTestSuffix,he as __namedExportsOrder,ue as default};
