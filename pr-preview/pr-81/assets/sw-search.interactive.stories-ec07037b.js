import{w as R,u as i}from"./index-68cdfbf5.js";import{e as o}from"./index-4b4e994a.js";import B from"./sw-search.stories-818d0de5.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-search-df59bc1c.js";import"./sw-base-field-334003ba.js";import"./vue.esm-bundler-651c6785.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";const L={...B,title:"Interaction Tests/Navigation/sw-search"},e={name:"Should keep input value",play:async({args:y,canvasElement:T})=>{const n=R(T);await i.type(n.getByRole("textbox"),"Shopware"),await i.click(n.getByText("hidden")),o(n.getByRole("textbox").value).toBe("Shopware"),await o(y.change).toHaveBeenCalledWith("Shopware")}},a={name:"Render the default sized search",args:{size:"default"}},s={name:"Render the small sized search",args:{size:"small"}},t={name:"Render the default sized search disabled",args:{size:"default",disabled:!0}},r={name:"Render the small sized search disabled",args:{size:"small",disabled:!0}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Should keep input value',
  play: async ({
    args,
    canvasElement
  }) => {
    // we can't use canvasElement because it is not available anymore
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
    await userEvent.click(canvas.getByText('hidden'));
    expect(canvas.getByRole('textbox').value).toBe('Shopware');
    await expect(args.change).toHaveBeenCalledWith('Shopware');
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Render the default sized search',
  args: {
    size: 'default'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,S,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Render the small sized search',
  args: {
    size: 'small'
  }
}`,...(g=(S=s.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var z,v,b;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render the default sized search disabled',
  args: {
    size: 'default',
    disabled: true
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,f,x;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Render the small sized search disabled',
  args: {
    size: 'small',
    disabled: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const M=["TestInputValue","VisualTestDefaultSize","VisualTestSmallSize","VisualTestDefaultSizeDisabled","VisualTestSmallSizeDisabled"];export{e as TestInputValue,a as VisualTestDefaultSize,t as VisualTestDefaultSizeDisabled,s as VisualTestSmallSize,r as VisualTestSmallSizeDisabled,M as __namedExportsOrder,L as default};
