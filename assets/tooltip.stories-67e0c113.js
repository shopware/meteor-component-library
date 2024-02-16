import{S as t}from"./sw-icon-c55f7719.js";import{T as i}from"./tooltip.directive-6ca7427e.js";import{d as l}from"./vue.esm-bundler-f31f98e0.js";import"./iframe-d923d319.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";const n={title:"Directives/Tooltip",component:t,render:s=>l({components:{SwIcon:t},directives:{tooltip:i},template:`<div>
      <sw-icon
        name="regular-question-circle"
          v-tooltip="{
          ...args
        }">
      </sw-icon>
    </div>`,setup:()=>({args:s})}),args:{message:"Help text",width:200,showDelay:100,hideDelay:100,disabled:!1,appearance:"dark",showOnDisabledElements:!1},argTypes:{appearance:{control:{type:"radio",options:["dark","light"]}},name:{table:{disable:!0}},color:{table:{disable:!0}},decorative:{table:{disable:!0}}}},b=n,e={name:"Tooltip"};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Tooltip"
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,b as default};
