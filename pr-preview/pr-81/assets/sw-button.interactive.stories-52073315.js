import{w as n,u as R}from"./index-68cdfbf5.js";import{e as k}from"./index-4b4e994a.js";import za from"./sw-button.stories-7101d52b.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./chunk-WFFRPTHA-a68c42c5.js";import"./preview-errors-dde4324f.js";import"./sw-button-f164c644.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-loader-2faceb27.js";import"./_plugin-vue_export-helper-c27b6911.js";const ja={...za,title:"Interaction Tests/Form/sw-button"},r={name:"Change the default slot",args:{default:"The new button text"},play:async({canvasElement:a})=>{const t=n(a).getByRole("button");await k(t).toHaveTextContent("The new button text")}},s={name:"Render the primary variant",args:{default:"Primary button",variant:"primary"}},o={name:"Render primary ghost variant",args:{default:"Primary ghost button",variant:"primary",ghost:!0}},i={name:"Render secondary variant",args:{default:"Secondary button",variant:"secondary"}},c={name:"Render secondary ghost variant",args:{default:"Secondary ghost button",variant:"secondary",ghost:!0}},l={name:"Render the critical variant",args:{default:"Critical button",variant:"critical"}},u={name:"Render the critical ghost variant",args:{default:"Critical ghost button",variant:"critical",ghost:!0}},d={name:"Render the action variant",args:{default:"Action button",variant:"action"}},m={name:"Render the small size",args:{default:"Small button",size:"small"}},p={name:"Render the default size",args:{default:"Default button",size:"default"}},g={name:"Render the large size",args:{default:"Large button",size:"large"}},b={name:"Click the button",args:{default:"Test button"},play:async({canvasElement:a,args:e})=>{const t=n(a);await R.click(t.getByRole("button")),k(e.click).toHaveBeenCalled()}},h={name:"Unable to click on disabled button",args:{default:"Disabled test button",disabled:!0},play:async({canvasElement:a,args:e})=>{const t=n(a);await R.click(t.getByRole("button")),k(e.click).not.toHaveBeenCalled()}},v={name:"Render the disabled button",args:{default:"Disabled button",disabled:!0}},y={name:"Render the square button",args:{default:"X",square:!0}},f={name:"Render the block button",args:{default:"This should go to full width",block:!0}},T={name:"Render the isLoading state",args:{default:"Is loading",isLoading:!0}},S={name:"Unable to click on isLoading button",args:{default:"Is loading",isLoading:!0},play:async({canvasElement:a,args:e})=>{const t=n(a);await R.click(t.getByRole("button")),k(e.click).not.toHaveBeenCalled()}},V={name:"Redirect to the link",args:{default:"Go to Shopware",link:"https://www.shopware.com"},play:async({canvasElement:a})=>{const e=n(a);await R.click(e.getByRole("button"))}};var w,B,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Change the default slot',
  args: {
    default: 'The new button text'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveTextContent('The new button text');
  }
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var z,L,E;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render the primary variant',
  args: {
    default: 'Primary button',
    variant: 'primary'
  }
}`,...(E=(L=s.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var D,x,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Render primary ghost variant',
  args: {
    default: 'Primary ghost button',
    variant: 'primary',
    ghost: true
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var G,H,q;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Render secondary variant',
  args: {
    default: 'Secondary button',
    variant: 'secondary'
  }
}`,...(q=(H=i.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var P,A,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Render secondary ghost variant',
  args: {
    default: 'Secondary ghost button',
    variant: 'secondary',
    ghost: true
  }
}`,...(U=(A=c.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var _,O,X;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Render the critical variant',
  args: {
    default: 'Critical button',
    variant: 'critical'
  }
}`,...(X=(O=l.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var F,j,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Render the critical ghost variant',
  args: {
    default: 'Critical ghost button',
    variant: 'critical',
    ghost: true
  }
}`,...(J=(j=u.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,M,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Render the action variant',
  args: {
    default: 'Action button',
    variant: 'action'
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Q,W,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Render the small size',
  args: {
    default: 'Small button',
    size: 'small'
  }
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,aa;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Render the default size',
  args: {
    default: 'Default button',
    size: 'default'
  }
}`,...(aa=($=p.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,ta,na;g.parameters={...g.parameters,docs:{...(ea=g.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Render the large size',
  args: {
    default: 'Large button',
    size: 'large'
  }
}`,...(na=(ta=g.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var ra,sa,oa;b.parameters={...b.parameters,docs:{...(ra=b.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Click the button',
  args: {
    default: 'Test button'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    expect(args.click).toHaveBeenCalled();
  }
}`,...(oa=(sa=b.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,ca,la;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  name: 'Unable to click on disabled button',
  args: {
    default: 'Disabled test button',
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    expect(args.click).not.toHaveBeenCalled();
  }
}`,...(la=(ca=h.parameters)==null?void 0:ca.docs)==null?void 0:la.source}}};var ua,da,ma;v.parameters={...v.parameters,docs:{...(ua=v.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  name: 'Render the disabled button',
  args: {
    default: 'Disabled button',
    disabled: true
  }
}`,...(ma=(da=v.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var pa,ga,ba;y.parameters={...y.parameters,docs:{...(pa=y.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  name: 'Render the square button',
  args: {
    default: 'X',
    square: true
  }
}`,...(ba=(ga=y.parameters)==null?void 0:ga.docs)==null?void 0:ba.source}}};var ha,va,ya;f.parameters={...f.parameters,docs:{...(ha=f.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: 'Render the block button',
  args: {
    default: 'This should go to full width',
    block: true
  }
}`,...(ya=(va=f.parameters)==null?void 0:va.docs)==null?void 0:ya.source}}};var fa,Ta,Sa;T.parameters={...T.parameters,docs:{...(fa=T.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: 'Render the isLoading state',
  args: {
    default: 'Is loading',
    isLoading: true
  }
}`,...(Sa=(Ta=T.parameters)==null?void 0:Ta.docs)==null?void 0:Sa.source}}};var Va,Ra,ka;S.parameters={...S.parameters,docs:{...(Va=S.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  name: 'Unable to click on isLoading button',
  args: {
    default: 'Is loading',
    isLoading: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    expect(args.click).not.toHaveBeenCalled();
  }
}`,...(ka=(Ra=S.parameters)==null?void 0:Ra.docs)==null?void 0:ka.source}}};var wa,Ba,Ca;V.parameters={...V.parameters,docs:{...(wa=V.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'Redirect to the link',
  args: {
    default: 'Go to Shopware',
    link: 'https://www.shopware.com'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));

    // TODO: check redirects is currently not supported
  }
}`,...(Ca=(Ba=V.parameters)==null?void 0:Ba.docs)==null?void 0:Ca.source}}};const Ja=["TestDefaultSlot","VisualTestPrimaryVariant","VisualTestGhostVariant","VisualTestSecondaryVariant","VisualTestSecondaryGhostVariant","VisualTestCriticalVariant","VisualTestCriticalGhostVariant","VisualTestActionVariant","VisualTestSmallSize","VisualTestDefaultSize","VisualTestLargeSize","TestButtonClick","TestDisabledButtonClick","VisualTestDisabledButton","VisualTestSquareButton","VisualTestBlockButton","VisualTestIsLoading","IsLoadingButton","LinkButton"];export{S as IsLoadingButton,V as LinkButton,b as TestButtonClick,r as TestDefaultSlot,h as TestDisabledButtonClick,d as VisualTestActionVariant,f as VisualTestBlockButton,u as VisualTestCriticalGhostVariant,l as VisualTestCriticalVariant,p as VisualTestDefaultSize,v as VisualTestDisabledButton,o as VisualTestGhostVariant,T as VisualTestIsLoading,g as VisualTestLargeSize,s as VisualTestPrimaryVariant,c as VisualTestSecondaryGhostVariant,i as VisualTestSecondaryVariant,m as VisualTestSmallSize,y as VisualTestSquareButton,Ja as __namedExportsOrder,ja as default};
