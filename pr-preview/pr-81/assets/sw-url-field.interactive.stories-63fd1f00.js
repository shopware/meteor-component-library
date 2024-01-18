import{w as s,u as a}from"./index-68cdfbf5.js";import{e as t}from"./index-4b4e994a.js";import O from"./sw-url-field.stories-312bc86c.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-651c6785.js";import"./sw-text-field-ce0f91f2.js";import"./sw-base-field-334003ba.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./sw-field-error-e21a36f0.js";import"./arg-types-d031e4ef.js";const te={...O,title:"Interaction Tests/Form/sw-url-field"},c={name:"sw-url-field"},r={name:"Should keep input value",play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com"),await a.click(e.getByText("hidden")),await a.click(e.getByText("hidden")),t(e.getByRole("textbox").value).toBe("shopware.com"),t(n.input).toHaveBeenLastCalledWith("https://shopware.com")}},i={name:"Should change the ssl switch to http",play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com"),await a.click(e.getByText("hidden")),t(e.getByText("https://").innerText).toContain("https://"),t(n.input).toHaveBeenLastCalledWith("https://shopware.com"),await a.click(e.getByRole("button")),t(e.getByText("http://").innerText).toContain("http://"),await a.click(e.getByText("hidden")),t(n.input).toHaveBeenLastCalledWith("http://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}},l={name:"Should not omit the url hash",args:{omitUrlHash:!1},play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com/#content"),await a.click(e.getByText("hidden")),t(n.input).toHaveBeenLastCalledWith("https://shopware.com/#content"),t(e.getByRole("textbox").value).toBe("shopware.com/#content")}},p={name:"Should omit the url hash",args:{omitUrlHash:!0},play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com/#content"),await a.click(e.getByText("hidden")),t(n.input).toHaveBeenLastCalledWith("https://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}},h={name:"Should not omit the url search",args:{omitUrlSearch:!1},play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com/?someValue=5"),await a.click(e.getByText("hidden")),t(n.input).toHaveBeenLastCalledWith("https://shopware.com/?someValue=5"),t(e.getByRole("textbox").value).toBe("shopware.com/?someValue=5")}},m={name:"Should omit the url search",args:{omitUrlSearch:!0},play:async({canvasElement:o,args:n})=>{const e=s(o);await a.type(e.getByRole("textbox"),"shopware.com/?someValue=5"),await a.click(e.getByText("hidden")),t(n.input).toHaveBeenLastCalledWith("https://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}};var u,v,x;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'sw-url-field'
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var d,w,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com');
    await userEvent.click(canvas.getByText('hidden'));
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByRole('textbox').value).toBe('shopware.com');
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,B,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Should change the ssl switch to http',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com');
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByText('https://').innerText).toContain('https://');
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
    await userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByText('http://').innerText).toContain('http://');
    await userEvent.click(canvas.getByText('hidden'));
    expect(args.input).toHaveBeenLastCalledWith('http://shopware.com');
    expect(canvas.getByRole('textbox').value).toBe('shopware.com');
  }
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,S,b;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Should not omit the url hash',
  args: {
    omitUrlHash: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/#content');
    await userEvent.click(canvas.getByText('hidden'));
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com/#content');
    expect(canvas.getByRole('textbox').value).toBe('shopware.com/#content');
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var R,H,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Should omit the url hash',
  args: {
    omitUrlHash: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/#content');
    await userEvent.click(canvas.getByText('hidden'));
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
    expect(canvas.getByRole('textbox').value).toBe('shopware.com');
  }
}`,...(k=(H=p.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var C,U,L;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Should not omit the url search',
  args: {
    omitUrlSearch: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/?someValue=5');
    await userEvent.click(canvas.getByText('hidden'));
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com/?someValue=5');
    expect(canvas.getByRole('textbox').value).toBe('shopware.com/?someValue=5');
  }
}`,...(L=(U=h.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var V,W,f;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Should omit the url search',
  args: {
    omitUrlSearch: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'shopware.com/?someValue=5');
    await userEvent.click(canvas.getByText('hidden'));
    expect(args.input).toHaveBeenLastCalledWith('https://shopware.com');
    expect(canvas.getByRole('textbox').value).toBe('shopware.com');
  }
}`,...(f=(W=m.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};const ae=["Default","VisualTestInputValue","VisualTestHttpSwitch","TestNotOmitUrlHash","TestOmitUrlHash","TestNotOmitUrlSearch","TestOmitUrlSearch"];export{c as Default,l as TestNotOmitUrlHash,h as TestNotOmitUrlSearch,p as TestOmitUrlHash,m as TestOmitUrlSearch,i as VisualTestHttpSwitch,r as VisualTestInputValue,ae as __namedExportsOrder,te as default};
