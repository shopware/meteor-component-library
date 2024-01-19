import{S as o}from"./sw-search-6a54a2d1.js";import{a as n}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as l}from"./vue.esm-bundler-5f175c2f.js";import"./sw-base-field-fe4faed4.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-48f9aa70.js";import"./iframe-0b40ffd8.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const p={title:"Components/Navigation/sw-search",component:o,args:{value:"",size:"default",placeholder:"",disabled:!1},render:r=>({components:{SwSearch:o},data(){return{currentValue:this.value}},watch:{value:{handler(e){this.currentValue!==e&&(this.currentValue=e)},immediate:!0}},methods:{},template:`
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
  `,setup:()=>{const e=l();function m(t){n("change")(t),console.log({args:r}),r.change&&r.change(t),e.value=t}function u(t){n("input")(t),e.value=t}return{args:r,inputHandler:u,changeHandler:m,currentValue:e}}})},_=p,a={name:"sw-search"};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'sw-search'
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,_ as default};
