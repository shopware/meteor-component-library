import{w as s,u as a}from"./index-912b65a3.js";import{e as t}from"./index-b9ac83fc.js";import f from"./sw-url-field.stories-e4200942.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-text-field-7f6a69d3.js";import"./sw-base-field-a1266e44.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c55f7719.js";import"./iframe-d923d319.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-de94aec2.js";import"./arg-types-a7a95a2c.js";const ae={...f,title:"Interaction Tests/Form/sw-url-field"},c={name:"sw-url-field"},r={name:"Should keep input value",play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com"),await a.click(e.getByText("hidden")),await a.click(e.getByText("hidden")),t(e.getByRole("textbox").value).toBe("shopware.com"),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com")}},l={name:"Should change the ssl switch to http",play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com"),await a.click(e.getByText("hidden")),t(e.getByText("https://").innerText).toContain("https://"),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com"),await a.click(e.getByRole("button")),t(e.getByText("http://").innerText).toContain("http://"),await a.click(e.getByText("hidden")),t(o.updateModelValue).toHaveBeenLastCalledWith("http://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}},p={name:"Should not omit the url hash",args:{omitUrlHash:!1},play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com/#content"),await a.click(e.getByText("hidden")),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com/#content"),t(e.getByRole("textbox").value).toBe("shopware.com/#content")}},i={name:"Should omit the url hash",args:{omitUrlHash:!0},play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com/#content"),await a.click(e.getByText("hidden")),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}},m={name:"Should not omit the url search",args:{omitUrlSearch:!1},play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com/?someValue=5"),await a.click(e.getByText("hidden")),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com/?someValue=5"),t(e.getByRole("textbox").value).toBe("shopware.com/?someValue=5")}},h={name:"Should omit the url search",args:{omitUrlSearch:!0},play:async({canvasElement:n,args:o})=>{const e=s(n);await a.type(e.getByRole("textbox"),"shopware.com/?someValue=5"),await a.click(e.getByText("hidden")),t(o.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com"),t(e.getByRole("textbox").value).toBe("shopware.com")}};var u,d,v;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "sw-url-field"
}`,...(v=(d=c.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Should keep input value",
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com");
    await userEvent.click(canvas.getByText("hidden"));
    await userEvent.click(canvas.getByText("hidden"));
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com");
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com");
  }
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,B,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Should change the ssl switch to http",
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com");
    await userEvent.click(canvas.getByText("hidden"));
    expect(canvas.getByText("https://").innerText).toContain("https://");
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com");
    await userEvent.click(canvas.getByRole("button"));
    expect(canvas.getByText("http://").innerText).toContain("http://");
    await userEvent.click(canvas.getByText("hidden"));
    expect(args.updateModelValue).toHaveBeenLastCalledWith("http://shopware.com");
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com");
  }
}`,...(T=(B=l.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var E,H,S;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Should not omit the url hash",
  args: {
    omitUrlHash: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com/#content");
    await userEvent.click(canvas.getByText("hidden"));
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com/#content");
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com/#content");
  }
}`,...(S=(H=p.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var V,b,R;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Should omit the url hash",
  args: {
    omitUrlHash: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com/#content");
    await userEvent.click(canvas.getByText("hidden"));
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com");
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com");
  }
}`,...(R=(b=i.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var k,L,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Should not omit the url search",
  args: {
    omitUrlSearch: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com/?someValue=5");
    await userEvent.click(canvas.getByText("hidden"));
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com/?someValue=5");
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com/?someValue=5");
  }
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var C,U,W;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Should omit the url search",
  args: {
    omitUrlSearch: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "shopware.com/?someValue=5");
    await userEvent.click(canvas.getByText("hidden"));
    expect(args.updateModelValue).toHaveBeenLastCalledWith("https://shopware.com");
    expect((canvas.getByRole("textbox") as HTMLInputElement).value).toBe("shopware.com");
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const oe=["Default","VisualTestInputValue","VisualTestHttpSwitch","TestNotOmitUrlHash","TestOmitUrlHash","TestNotOmitUrlSearch","TestOmitUrlSearch"];export{c as Default,p as TestNotOmitUrlHash,m as TestNotOmitUrlSearch,i as TestOmitUrlHash,h as TestOmitUrlSearch,l as VisualTestHttpSwitch,r as VisualTestInputValue,oe as __namedExportsOrder,ae as default};
