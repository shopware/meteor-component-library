import{a as s}from"./chunk-WFFRPTHA-a68c42c5.js";import{S as r}from"./sw-banner-e7408b83.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./vue.esm-bundler-651c6785.js";import"./sw-icon-691f2755.js";import"./iframe-bb3143e1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={title:"Components/Feedback Indicator/sw-banner",component:r,args:{title:"This is a banner",default:"I am in the default slot of the banner",variant:"neutral",close:s("close")},render:o=>({components:{SwBanner:r},setup(){return{args:o}},template:`
      <sw-banner
        v-bind="args"
        @close="args.close"
      >
        <div v-html="args.default"></div>
      </sw-banner>`})},g=m,e={name:"sw-banner"};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'sw-banner'
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const v=["DefaultStory"];export{e as DefaultStory,v as __namedExportsOrder,g as default};
