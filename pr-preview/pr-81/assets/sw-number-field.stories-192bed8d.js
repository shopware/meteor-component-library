import{S as i}from"./sw-number-field-fa93cdc0.js";import{b as o}from"./arg-types-a7a95a2c.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-text-field-8b69188c.js";import"./sw-base-field-adb45841.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-96b204b4.js";import"./iframe-e9565955.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-660be3d3.js";const y={title:"Components/Form/sw-number-field",component:i,render:e=>({template:`
      <div>
        <sw-number-field
          v-bind="args"
          v-model="currentValue"
          @change="args.change"
          @update:modelValue="args.updateModelValue"
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
      </div>`,components:{SwNumberField:i},data(){return{currentValue:""}},watch:{"args.modelValue"(t){this.currentValue!==t&&(this.currentValue=t)}},created(){this.currentValue=e.modelValue},methods:{inheritanceRemoveWrapper(){e.inheritanceRemove(),e.isInherited=!1},inheritanceRestoreWrapper(){e.inheritanceRestore(),e.isInherited=!0}},setup:()=>({args:e})}),args:{label:"Numberfield",step:1,numberType:"int"},argTypes:{...o}},r={name:"sw-number-field"};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'sw-number-field'
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const R=["DefaultStory"];export{r as DefaultStory,R as __namedExportsOrder,y as default};
