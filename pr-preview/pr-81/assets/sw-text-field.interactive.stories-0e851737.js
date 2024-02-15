import{w as s,u as r}from"./index-912b65a3.js";import{e as t}from"./index-b9ac83fc.js";import X from"./sw-text-field.stories-9bf7b8e3.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-text-field-d29e65ae.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-72c6dd12.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-b6e05e75.js";import"./iframe-932d59e4.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-60f78eb7.js";import"./arg-types-a7a95a2c.js";const xe={...X,title:"Interaction Tests/Form/sw-text-field"},o={name:"Should keep input value",play:async({canvasElement:n,args:a})=>{const e=s(n);await r.type(e.getByRole("textbox"),"Shopware"),await r.click(e.getByText("hidden")),t(e.getByRole("textbox").value).toBe("Shopware"),t(a.change).toHaveBeenCalledWith("Shopware")}},i={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.prefix)).toBeDefined()}},c={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.suffix)).toBeDefined()}},l={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.hint)).toBeDefined()}},p={name:"Should display label",args:{label:"label"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.label)).toBeDefined()}},d={name:"Should disable",args:{disabled:!0,modelValue:"Shopware"},play:async({canvasElement:n})=>{const a=s(n);await r.type(a.getByRole("textbox"),"1337"),t(a.getByRole("textbox").value).toBe("Shopware")}},m={name:"Should display placeholder",args:{placeholder:"Placeholder"},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByPlaceholderText(a.placeholder)).toBeDefined()}},u={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:n,args:a})=>{const e=s(n);t(e.getByText(a.error.detail)).toBeDefined()}},h={name:"Should be able to copy",args:{copyable:!0},play:async()=>{}},g={name:"Should remove and restore inheritance",args:{isInheritanceField:!0,isInherited:!1},play:async({canvasElement:n,args:a})=>{const e=s(n);await r.click(e.getByTestId("sw-icon__regular-lock-open-s")),t(a.inheritanceRestore).toBeCalled(),t(e.getByTestId("sw-inheritance-switch-icon")).toBeDefined(),await r.click(e.getByTestId("sw-inheritance-switch-icon")),t(a.inheritanceRemove).toBeCalled(),t(e.getByTestId("sw-icon__regular-lock-open-s")).toBeDefined()}},y={name:"Should show inheritance",args:{isInheritanceField:!0,isInherited:!0}};var v,x,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
    await userEvent.click(canvas.getByText('hidden'));
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('Shopware');
    expect(args.change).toHaveBeenCalledWith('Shopware');
  }
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var f,w,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,b,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(b=c.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var I,D,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var k,R,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var C,P,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should disable',
  args: {
    disabled: true,
    modelValue: 'Shopware'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), '1337');
    expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('Shopware');
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var H,L,O;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var A,M,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(M=u.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var j,q,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Should be able to copy',
  args: {
    copyable: true
  },
  play: async () => {
    // TODO: Currently it is not possible to test Clipboard copying
    //  @see https://github.com/microsoft/playwright/issues/8114
  }
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Should show inheritance',
  args: {
    isInheritanceField: true,
    isInherited: true
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Be=["TestInputValue","VisualTestPrefix","VisualTestSuffix","VisualTestHint","TestLabel","VisualTestDisabled","TestPlaceholder","VisualTestError","TestCopyable","VisualTestInheritance","VisualTestInheritanceActive"];export{h as TestCopyable,o as TestInputValue,p as TestLabel,m as TestPlaceholder,d as VisualTestDisabled,u as VisualTestError,l as VisualTestHint,g as VisualTestInheritance,y as VisualTestInheritanceActive,i as VisualTestPrefix,c as VisualTestSuffix,Be as __namedExportsOrder,xe as default};
