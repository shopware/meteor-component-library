import{w as R,u as i}from"./index-912b65a3.js";import{j as B,e as o}from"./index-b9ac83fc.js";import V from"./sw-search.stories-dedd1b56.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-search-3f6bb03a.js";import"./sw-base-field-11681dcc.js";import"./vue.esm-bundler-f31f98e0.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c5d78c31.js";import"./iframe-51513bc2.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";const U={...V,title:"Interaction Tests/Navigation/sw-search"},e={name:"Should keep input value",args:{change:B.fn()},play:async({args:T,canvasElement:y})=>{const n=R(y);await i.type(n.getByRole("textbox"),"Shopware"),await i.click(n.getByText("hidden")),await o(n.getByRole("textbox").value).toBe("Shopware"),await o(T.change).toHaveBeenCalledWith("Shopware")}},a={name:"Render the default sized search",args:{size:"default"}},s={name:"Render the small sized search",args:{size:"small"}},t={name:"Render the default sized search disabled",args:{size:"default",disabled:!0}},r={name:"Render the small sized search disabled",args:{size:"small",disabled:!0}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Should keep input value',
  args: {
    change: jest.fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    // we can't use canvasElement because it is not available anymore
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'Shopware');
    await userEvent.click(canvas.getByText('hidden'));
    await expect((canvas.getByRole('textbox') as HTMLInputElement).value).toBe('Shopware');
    await expect(args.change).toHaveBeenCalledWith('Shopware');
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Render the default sized search',
  args: {
    size: 'default'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Render the small sized search',
  args: {
    size: 'small'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var z,v,w;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Render the default sized search disabled',
  args: {
    size: 'default',
    disabled: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,f,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Render the small sized search disabled',
  args: {
    size: 'small',
    disabled: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const X=["TestInputValue","VisualTestDefaultSize","VisualTestSmallSize","VisualTestDefaultSizeDisabled","VisualTestSmallSizeDisabled"];export{e as TestInputValue,a as VisualTestDefaultSize,t as VisualTestDefaultSizeDisabled,s as VisualTestSmallSize,r as VisualTestSmallSizeDisabled,X as __namedExportsOrder,U as default};
