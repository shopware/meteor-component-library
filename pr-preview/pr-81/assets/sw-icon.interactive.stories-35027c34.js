import{w as c}from"./index-68cdfbf5.js";import{e as a}from"./index-4b4e994a.js";import{w as i}from"./test-helper-7c3608e5.js";import v from"./sw-icon.stories-b17fb2fd.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-b74e4d3a.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={...v,title:"Interaction Tests/Icons & Media/sw-icon"},t={name:"Render icon",play:async({canvasElement:n})=>{const e=c(n);await i(()=>document.getElementById("meteor-icon-kit__regular-products")),a(e.findByTestId("sw-icon__regular-products")).toBeDefined()}},r={name:"Render calendar icon",args:{name:"regular-calendar"},play:async({canvasElement:n})=>{const e=c(n);await i(()=>document.getElementById("meteor-icon-kit__regular-calendar")),a(e.findByTestId("sw-icon__regular-calendar")).toBeDefined()}},o={name:"Render icon in yellow",args:{color:"yellow"},play:async({canvasElement:n})=>{const e=c(n);await i(()=>document.getElementById("meteor-icon-kit__regular-products")),a(e.findByTestId("sw-icon__regular-products")).toBeDefined(),a((await e.findByTestId("sw-icon__regular-products")).style.color).toBe("yellow")}},s={name:"Render icon in hidden",args:{decorative:!0},play:async({canvasElement:n})=>{const e=c(n);await i(()=>document.getElementById("meteor-icon-kit__regular-products")),a(e.findByTestId("sw-icon__regular-products")).toBeDefined(),a((await e.findByTestId("sw-icon__regular-products")).ariaHidden).toBe("true")}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Render icon',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered
    await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));
    expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Render calendar icon',
  args: {
    name: 'regular-calendar'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered
    await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-calendar'));
    expect(canvas.findByTestId('sw-icon__regular-calendar')).toBeDefined();
  }
}`,...(w=(p=r.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var g,y,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Render icon in yellow',
  args: {
    color: 'yellow'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered
    await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));
    expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
    expect((await canvas.findByTestId('sw-icon__regular-products')).style.color).toBe('yellow');
  }
}`,...(_=(y=o.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var I,B,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Render icon in hidden',
  args: {
    decorative: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // wait until tab bar is loaded and context button gets rendered
    await waitUntilRendered(() => document.getElementById('meteor-icon-kit__regular-products'));
    expect(canvas.findByTestId('sw-icon__regular-products')).toBeDefined();
    expect((await canvas.findByTestId('sw-icon__regular-products')).ariaHidden).toBe('true');
  }
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};const j=["VisualTestRenderIcon","VisualTestRenderCalendarIcon","VisualTestRenderIconInYellow","VisualTestRenderIconInHidden"];export{r as VisualTestRenderCalendarIcon,t as VisualTestRenderIcon,s as VisualTestRenderIconInHidden,o as VisualTestRenderIconInYellow,j as __namedExportsOrder,O as default};
