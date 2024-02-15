import{w as P,u as F}from"./index-912b65a3.js";import{e as m}from"./index-b9ac83fc.js";import O from"./sw-banner.stories-ff225043.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./sw-banner-fc84f6fa.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-icon-b6e05e75.js";import"./iframe-932d59e4.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const ne={...O,title:"Interaction Tests/Feedback Indicator/sw-banner"},e={name:"Banner neutral"},a={name:"Banner info",args:{variant:"info"}},n={name:"Banner attention",args:{variant:"attention"}},r={name:"Banner critical",args:{variant:"critical"}},t={name:"Banner positive",args:{variant:"positive"}},s={name:"Banner inherited",args:{variant:"inherited"}},o={name:"Render banner without icon",args:{hideIcon:!0}},i={name:"Close the banner",args:{closable:!0},play:async({canvasElement:A,args:c})=>{const N=P(A);m(c.close).not.toHaveBeenCalled(),await F.click(N.getByRole("button")),m(c.close).toHaveBeenCalledWith(null)}};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Banner neutral'
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,B,v;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Banner info',
  args: {
    variant: 'info'
  }
}`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,h,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Banner attention',
  args: {
    variant: 'attention'
  }
}`,...(T=(h=n.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var V,b,f;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Banner critical',
  args: {
    variant: 'critical'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,I,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Banner positive',
  args: {
    variant: 'positive'
  }
}`,...(w=(I=t.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,x,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Banner inherited',
  args: {
    variant: 'inherited'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,E,H;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Render banner without icon',
  args: {
    hideIcon: true
  }
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var W,_,k;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Close the banner',
  args: {
    closable: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    expect(args.close).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button'));
    expect(args.close).toHaveBeenCalledWith(null);
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const re=["VisualTestBannerNeutral","VisualTestBannerInfo","VisualTestBannerAttention","VisualTestBannerCritical","VisualTestBannerPositive","VisualTestBannerInherited","VisualTestRenderWithoutIcon","VisualTestCloseBannerBox"];export{n as VisualTestBannerAttention,r as VisualTestBannerCritical,a as VisualTestBannerInfo,s as VisualTestBannerInherited,e as VisualTestBannerNeutral,t as VisualTestBannerPositive,i as VisualTestCloseBannerBox,o as VisualTestRenderWithoutIcon,re as __namedExportsOrder,ne as default};
