import{S as i}from"./sw-number-field-cfbb64a9.js";import{b as m}from"./arg-types-d031e4ef.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-text-field-b918b602.js";import"./sw-base-field-b1a18dda.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c6ca0f62.js";import"./iframe-ee8c1246.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-4949c39a.js";const R={title:"Components/Form/sw-number-field",component:i,render:e=>({template:`
      <div>
        <sw-number-field
          v-bind="args"
          v-model="currentValue"
          @change="args.change"
          @input="args.input"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper">
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
        </sw-number-field>
        <h4 style="display: none;">hidden</h4>
      </div>`,components:{SwNumberField:i},data(){return{currentValue:""}},watch:{"args.value"(t){this.currentValue!==t&&(this.currentValue=t)}},created(){this.currentValue=e.value},methods:{inheritanceRemoveWrapper(){e.inheritanceRemove(),e.isInherited=!1},inheritanceRestoreWrapper(){e.inheritanceRestore(),e.isInherited=!0}},setup:()=>({args:e})}),args:{label:"Numberfield",step:1,numberType:"int"},argTypes:{...m}},r={name:"sw-number-field"};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'sw-number-field'
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const S=["DefaultStory"];export{r as DefaultStory,S as __namedExportsOrder,R as default};