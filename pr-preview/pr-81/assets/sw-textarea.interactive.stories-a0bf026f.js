import{w as r,u as d}from"./index-68cdfbf5.js";import{e as n}from"./index-4b4e994a.js";import k from"./sw-textarea.stories-f26902b6.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-field-error-73799238.js";const U={...k,title:"Interaction Tests/Form/sw-textarea"},s={name:"Should keep input value",play:async({canvasElement:a,args:e})=>{const t=r(a);await d.type(t.getByRole("textbox"),"Shopware"),await d.click(t.getByText("hidden")),n(t.getByRole("textbox").value).toBe("Shopware"),n(e.change).toHaveBeenCalledWith("Shopware")}},o={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:a,args:e})=>{const t=r(a);n(t.getByText(e.hint)).toBeDefined()}},l={name:"Should display label",args:{label:"label"},play:({canvasElement:a,args:e})=>{const t=r(a);n(t.getByText(e.label)).toBeDefined()}},c={name:"Should disable",args:{disabled:!0,value:"Shopware"},play:async({canvasElement:a})=>{const e=r(a);await d.type(e.getByRole("textbox"),"1337"),n(e.getByRole("textbox").value).toBe("Shopware")}},i={name:"Should display placeholder",args:{placeholder:"Placeholder"},play:({canvasElement:a,args:e})=>{const t=r(a);n(t.getByPlaceholderText(e.placeholder)).toBeDefined()}},p={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:a,args:e})=>{const t=r(a);n(t.getByText(e.error.detail)).toBeDefined()}};var m,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,B,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(B=l.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var S,b,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var E,f,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,V,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};const X=["TestInputValue","VisualTestHint","TestLabel","VisualTestDisabled","TestPlaceholder","VisualTestError"];export{s as TestInputValue,l as TestLabel,i as TestPlaceholder,c as VisualTestDisabled,p as VisualTestError,o as VisualTestHint,X as __namedExportsOrder,U as default};
