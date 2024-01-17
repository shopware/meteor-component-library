import{S as t}from"./sw-number-field-f0f57c90.js";import{b as s}from"./arg-types-d031e4ef.js";import"./vue.esm-bundler-b74e4d3a.js";import"./sw-text-field-aae73c5f.js";import"./sw-base-field-bf6bb47a.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-3b1d1ea3.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-73799238.js";const o={title:"Components/Form/sw-number-field",component:t,render:a=>({template:`
      <div>
        <sw-number-field
          v-bind="args"
          v-model="currentValue"
          @change="change"
          @input="input"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper">
          <template
            v-if="$props.prefix"
            #prefix>
            {{ $props.prefix }}
          </template>
          <template
            v-if="$props.suffix"
            #suffix>
            {{ $props.suffix }}
          </template>
          <template
            v-if="$props.hint"
            #hint>
            {{ $props.hint }}
          </template>
        </sw-number-field>
        <h4 style="display: none;">hidden</h4>
      </div>`,components:{SwNumberField:t},data(){return{currentValue:""}},watch:{value(e){this.currentValue!==e&&(this.currentValue=e)}},created(){this.currentValue=this.value},methods:{inheritanceRemoveWrapper(e){this.inheritanceRemove(...e),this.isInherited=!1},inheritanceRestoreWrapper(e){this.inheritanceRestore(...e),this.isInherited=!0}},setup:()=>({args:a})}),args:{label:"Numberfield",step:1,numberType:"int"},argTypes:{...s}},$=o,r={name:"sw-number-field"};var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'sw-number-field'
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const R=["DefaultStory"];export{r as DefaultStory,R as __namedExportsOrder,$ as default};
