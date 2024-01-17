import{S as r}from"./sw-text-field-1eed067d.js";import{b as o}from"./arg-types-d031e4ef.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-base-field-d9725469.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-642d3568.js";const p={title:"Components/Form/sw-text-field",component:r,render:n=>({template:`
    <div>
      <sw-text-field
        v-bind="args"
        v-model="currentValue"
        @inheritance-restore="inheritanceRestoreWrapper"
        @inheritance-remove="inheritanceRemoveWrapper"
        @change="change">
          <template
            v-if="args.prefix"
            #prefix>
            {{ args.prefix }}
          </template>
          <template
            v-if="args.suffix"
            #suffix>
            {{ args.suffix }}
          </template>
          <template
            v-if="args.hint"
            #hint>
            {{ args.hint }}
          </template>
      </sw-text-field>
      <h4 style="display: none;">hidden</h4>
    </div>`,components:{SwTextField:r},data(){return{currentValue:""}},watch:{value(e){this.currentValue!==e&&(this.currentValue=e)}},created(){this.currentValue=this.value},methods:{inheritanceRemoveWrapper(e){this.inheritanceRemove(...e),this.isInherited=!1},inheritanceRestoreWrapper(e){this.inheritanceRestore(...e),this.isInherited=!0}},setup:()=>({args:n})}),argTypes:{...o},args:{label:"Textfield label"}},R=p,t={name:"sw-text-field"};var i,a,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "sw-text-field"
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["DefaultStory"];export{t as DefaultStory,b as __namedExportsOrder,R as default};
