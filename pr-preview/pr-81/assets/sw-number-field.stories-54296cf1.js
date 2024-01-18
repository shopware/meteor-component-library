import{S as i}from"./sw-number-field-eba4e14a.js";import{b as m}from"./arg-types-d031e4ef.js";import"./vue.esm-bundler-651c6785.js";import"./sw-text-field-7e394dbc.js";import"./sw-base-field-20bd014f.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-2e639069.js";import"./iframe-5655d990.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-a370f7db.js";const y={title:"Components/Form/sw-number-field",component:i,render:e=>({template:`
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const R=["DefaultStory"];export{r as DefaultStory,R as __namedExportsOrder,y as default};
