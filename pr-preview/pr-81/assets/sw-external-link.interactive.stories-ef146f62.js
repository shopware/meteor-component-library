import{w as E,u as f}from"./index-912b65a3.js";import{e as R}from"./index-b9ac83fc.js";import w from"./sw-external-link.stories-5656b8b7.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./vue.esm-bundler-4ed8bc95.js";import"./sw-icon-93038abe.js";import"./iframe-64471a89.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={...w,title:"Interaction Tests/Form/sw-external-link"},e={name:"Render external link",args:{href:"https://developers.shopware.com/"}},n={name:"Render external link in small",args:{small:!0,href:"https://developers.shopware.com/"}},r={name:"Render disabled external link",args:{disabled:!0},play:({canvasElement:t})=>{const s=E(t).getByRole("link");R(getComputedStyle(s).pointerEvents).toEqual("none")}},a={name:"Render external link without href attribute",args:{href:void 0},play:async({canvasElement:t,args:o})=>{const s=E(t);await f.click(s.getByRole("link")),R(o.click).toHaveBeenCalled()}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,k,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var v,x,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Render external link without href attribute',
  args: {
    href: undefined
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link'));
    expect(args.click).toHaveBeenCalled();
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const z=["VisualTestRenderExternalLink","VisualTestRenderExternalLinkSmall","VisualTestRenderExternalLinkDisabled","TestExternalLinkWithoutHref"];export{a as TestExternalLinkWithoutHref,e as VisualTestRenderExternalLink,r as VisualTestRenderExternalLinkDisabled,n as VisualTestRenderExternalLinkSmall,z as __namedExportsOrder,j as default};
