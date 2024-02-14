import{S as o}from"./sw-search-c719ac31.js";import{f as n,a as s}from"./index-9accb58d.js";import{b as d}from"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-adb45841.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-96b204b4.js";import"./iframe-e9565955.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const p={title:"Components/Navigation/sw-search",component:o,args:{modelValue:"",size:"default",placeholder:"",disabled:!1},render:t=>({components:{SwSearch:o},data(){return{currentValue:this.value}},watch:{value:{handler(e){this.currentValue!==e&&(this.currentValue=e)},immediate:!0}},methods:{},template:`
  <div>
    <sw-search
      v-bind="args"
      :modelValue="currentValue"
      @change="changeHandler"
      @update:modelValue="onModelValueHandler"
    >
      {{ args.default }}
    </sw-search>

    <!-- Element is used for storybook being able to lose focus of search component  -->
    <h4 style="display: none;">hidden</h4>
  </div>
  `,setup:()=>{const e=d();function m(a){n(s("change"))(a),t.change&&t.change(a),e.value=a}function u(a){n(s("updateModelValue"))(a),e.value=a}return{args:t,onModelValueHandler:u,changeHandler:m,currentValue:e}}})},_=p,r={name:"sw-search"};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'sw-search'
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,_ as default};
