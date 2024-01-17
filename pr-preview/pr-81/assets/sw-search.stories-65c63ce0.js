import{S as a}from"./sw-search-de7aaac1.js";import"./sw-base-field-bf6bb47a.js";import"./vue.esm-bundler-b74e4d3a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const i={title:"Components/Navigation/sw-search",component:a,argTypes:{size:{control:{type:"select",options:["default","small"]}},change:{action:"change",table:{category:"Events"}},input:{action:"input",table:{category:"Events"}}},args:{value:"",size:"default",placeholder:"",disabled:!1},render:o=>({components:{SwSearch:a},data(){return{currentValue:this.value}},watch:{value:{handler(e){this.currentValue!==e&&(this.currentValue=e)},immediate:!0}},methods:{changeHandler(e){this.change(e),this.currentValue=e},inputHandler(e){this.input(e),this.currentValue=e}},template:`
  <div>
    <sw-search
      v-bind="args"
      :value="currentValue"
      @change="changeHandler"
      @input="inputHandler"
    >
      {{ $props.default }}
    </sw-search>

    <!-- Element is used for storybook being able to lose focus of search component  -->
    <h4 style="display: none;">hidden</h4>
  </div>
  `,setup:()=>({args:o})})},v=i,t={name:"sw-search"};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'sw-search'
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,v as default};
