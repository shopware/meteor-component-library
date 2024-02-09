import{S as n}from"./sw-search-eff405a8.js";import{f as o,a as s}from"./index-9accb58d.js";import{b as p}from"./vue.esm-bundler-651c6785.js";import"./sw-base-field-3527efaa.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-7f422dba.js";import"./iframe-c3b543ef.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const d={title:"Components/Navigation/sw-search",component:n,args:{value:"",size:"default",placeholder:"",disabled:!1},render:r=>({components:{SwSearch:n},data(){return{currentValue:this.value}},watch:{value:{handler(e){this.currentValue!==e&&(this.currentValue=e)},immediate:!0}},methods:{},template:`
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
  `,setup:()=>{const e=p();function u(t){o(s("change"))(t),console.log({args:r}),r.change&&r.change(t),e.value=t}function l(t){o(s("input"))(t),e.value=t}return{args:r,inputHandler:l,changeHandler:u,currentValue:e}}})},k=d,a={name:"sw-search"};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'sw-search'
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,k as default};
