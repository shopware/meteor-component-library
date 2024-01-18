import{w as E,u as f}from"./index-912b65a3.js";import{e as R}from"./index-b9ac83fc.js";import w from"./sw-external-link.stories-f96f4664.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-651c6785.js";import"./sw-icon-682d28c1.js";import"./iframe-4e8d603d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={...w,title:"Interaction Tests/Form/sw-external-link"},e={name:"Render external link",args:{href:"https://developers.shopware.com/"}},n={name:"Render external link in small",args:{small:!0,href:"https://developers.shopware.com/"}},a={name:"Render disabled external link",args:{disabled:!0},play:({canvasElement:t})=>{const s=E(t).getByRole("link");R(getComputedStyle(s).pointerEvents).toEqual("none")}},r={name:"Render external link without href attribute",args:{href:null},play:async({canvasElement:t,args:l})=>{const s=E(t);await f.click(s.getByRole("link")),R(l.click).toHaveBeenCalled()}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Render external link',
  args: {
    href: 'https://developers.shopware.com/'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Render external link in small',
  args: {
    small: true,
    href: 'https://developers.shopware.com/'
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,k,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Render disabled external link',
  args: {
    disabled: true
  },
  play: ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    expect(getComputedStyle(link).pointerEvents).toEqual('none');
  }
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,v,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Render external link without href attribute',
  args: {
    href: null
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link'));
    expect(args.click).toHaveBeenCalled();
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const O=["VisualTestRenderExternalLink","VisualTestRenderExternalLinkSmall","VisualTestRenderExternalLinkDisabled","TestExternalLinkWithoutHref"];export{r as TestExternalLinkWithoutHref,e as VisualTestRenderExternalLink,a as VisualTestRenderExternalLinkDisabled,n as VisualTestRenderExternalLinkSmall,O as __namedExportsOrder,I as default};
