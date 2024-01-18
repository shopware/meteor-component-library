import{S as n}from"./sw-search-62f67638.js";import{a as o}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as l}from"./vue.esm-bundler-651c6785.js";import"./sw-base-field-70842e68.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-9e700c16.js";import"./iframe-1c9f7e38.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const p={title:"Components/Navigation/sw-search",component:n,args:{value:"",size:"default",placeholder:"",disabled:!1},render:r=>({components:{SwSearch:n},data(){return{currentValue:this.value}},watch:{value:{handler(e){this.currentValue!==e&&(this.currentValue=e)},immediate:!0}},methods:{},template:`
  <div>
    <sw-search
      v-bind="args"
      :value="currentValue"
      @change="changeHandler"
      @input="inputHandler"
    >
      {{ args.default }}
    </sw-search>

    <!-- Element is used for storybook being able to lose focus of search component  -->
    <h4 style="display: none;">hidden</h4>
  </div>
  `,setup:()=>{const e=l();function m(t){o("change")(t),console.log({args:r}),r.change&&r.change(t),e.value=t}function u(t){o("input")(t),e.value=t}return{args:r,inputHandler:u,changeHandler:m,currentValue:e}}})},E=p,a={name:"sw-search"};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'sw-search'
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,E as default};
