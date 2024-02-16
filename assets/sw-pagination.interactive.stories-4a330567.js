import{e as n}from"./index-b9ac83fc.js";import{S as f}from"./sw-pagination-8ba2174c.js";import x,{Default as o}from"./sw-pagination.stories-8391d1d6.js";import{g as T}from"./_commonjsHelpers-de833af9.js";import"./_baseIsEqual-75626070.js";import"./index-da07a199.js";import"./uniq-6b1dda04.js";import"./index-d38bc732.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-segmented-control-1e258fcd.js";import"./sw-checkbox-873bc1ce.js";import"./sw-icon-c55f7719.js";import"./iframe-d923d319.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-a1266e44.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./isObject-32699ff3.js";import"./sw-field-error-de94aec2.js";import"./sw-popover-04f1e5e7.js";import"./sw-switch-56a466ff.js";import"./sw-button-eda03130.js";import"./sw-loader-479eb282.js";import"./sw-number-field-4d5c8fdc.js";import"./sw-text-field-7f6a69d3.js";import"./index-9accb58d.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";var y=typeof setImmediate=="function"?setImmediate:setTimeout;function _(){return new Promise(function(e){y(e)})}var w=_;const P=T(w),X={...x,title:"Interaction Tests/Table and list/sw-pagination",component:f},r={render:o.render,name:"Render with one page",args:{...o.args,limit:100},play:async()=>{const e=document.querySelector(".sw-pagination__info-text");n(e).not.toBeNull(),n(e.innerText).toEqual("1-100 of 100")}},a={render:o.render,name:"Render with 100 page",args:{...o.args,limit:1},play:async()=>{const e=document.querySelector(".sw-pagination__info-text");n(e).not.toBeNull(),n(e.innerText).toEqual("1-1 of 100")}},t={render:o.render,name:"Test page change"};t.args=o.args,t.play=async()=>{document.querySelector(".sw-segmented-control__action-id-pagination-next").click(),await P();const e=document.querySelector(".sw-pagination__info-text");n(e).not.toBeNull(),n(e.innerText).toEqual("26-50 of 100")};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Default.render,
  name: "Render with one page",
  args: {
    ...Default.args,
    limit: 100
  },
  play: async () => {
    const infoText = document.querySelector(".sw-pagination__info-text");
    expect(infoText).not.toBeNull();
    expect(infoText.innerText).toEqual("1-100 of 100");
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Default.render,
  name: "Render with 100 page",
  args: {
    ...Default.args,
    limit: 1
  },
  play: async () => {
    const infoText = document.querySelector(".sw-pagination__info-text");
    expect(infoText).not.toBeNull();
    expect(infoText.innerText).toEqual("1-1 of 100");
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Default.render,
  name: "Test page change"
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const Y=["TestOnePage","TestManyPages","TestPageChange"];export{a as TestManyPages,r as TestOnePage,t as TestPageChange,Y as __namedExportsOrder,X as default};
