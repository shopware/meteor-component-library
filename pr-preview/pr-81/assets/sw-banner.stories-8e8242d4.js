import{f as s,a as m}from"./index-9accb58d.js";import{S as r}from"./sw-banner-063e44e2.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./vue.esm-bundler-4ed8bc95.js";import"./sw-icon-93038abe.js";import"./iframe-64471a89.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const i={title:"Components/Feedback Indicator/sw-banner",component:r,args:{title:"This is a banner",default:"I am in the default slot of the banner",variant:"neutral",close:s(m("close"))},render:o=>({components:{SwBanner:r},setup(){return{args:o}},template:`
      <sw-banner
        v-bind="args"
        @close="args.close"
      >
        <div v-html="args.default"></div>
      </sw-banner>`})},v=i,e={name:"sw-banner"};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'sw-banner'
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const S=["DefaultStory"];export{e as DefaultStory,S as __namedExportsOrder,v as default};
