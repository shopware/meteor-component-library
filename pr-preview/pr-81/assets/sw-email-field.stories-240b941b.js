import{f as V,a as b}from"./index-9accb58d.js";import{d as w,e as s,f as o,w as r,m as q,o as u,g as F,t as E,j as n,k as I,n as d,l as T}from"./vue.esm-bundler-f31f98e0.js";import{S as $}from"./sw-text-field-7f6a69d3.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{b as k}from"./arg-types-a7a95a2c.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./sw-base-field-a1266e44.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c55f7719.js";import"./iframe-d923d319.js";import"../sb-preview/runtime.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-de94aec2.js";const h=w({name:"SwEmailField",extends:$,data(){return{hasFocus:!1,validationError:null}},computed:{computedError(){return this.validationError?this.validationError:this.error}},mounted(){this.modelValue&&this.checkValidity()},methods:{setFocus(){this.hasFocus=!0},removeFocus(){this.hasFocus=!1,this.checkValidity()},checkValidity(){if(this.$refs.input.checkValidity()){this.validationError=null;return}this.validationError={detail:this.$refs.input.validationMessage}}}}),C=["id","name","disabled","value","placeHolder"];function x(e,a,R,D,M,z){const y=s("sw-field-error"),g=s("sw-base-field");return u(),o(g,q({class:"sw-field--email"},e.$attrs,{name:e.name,"has-focus":e.hasFocus,copyable:e.copyable,"copyable-tooltip":e.copyableTooltip,"copyable-text":e.currentValue,"help-text":e.helpText,size:e.size,required:e.required,disabled:e.disabled,"is-inherited":e.isInherited,"is-inheritance-field":e.isInheritanceField,onInheritanceRestore:a[4]||(a[4]=i=>e.$emit("inheritance-restore",i)),onInheritanceRemove:a[5]||(a[5]=i=>e.$emit("inheritance-remove",i))}),{label:r(()=>[F(E(e.label),1)]),"field-prefix":r(()=>[n(e.$slots,"prefix")]),element:r(({identification:i,disabled:v})=>[I("input",{id:i,ref:"input",type:"email",name:i,disabled:v,value:e.currentValue,placeHolder:e.placeholder,onInput:a[0]||(a[0]=d((...t)=>e.onInput&&e.onInput(...t),["stop"])),onChange:a[1]||(a[1]=d((...t)=>e.onChange&&e.onChange(...t),["stop"])),onFocus:a[2]||(a[2]=(...t)=>e.setFocus&&e.setFocus(...t)),onBlur:a[3]||(a[3]=(...t)=>e.removeFocus&&e.removeFocus(...t))},null,40,C)]),"field-suffix":r(()=>[n(e.$slots,"suffix")]),error:r(()=>[e.computedError?(u(),o(y,{key:0,error:e.computedError},null,8,["error"])):T("",!0)]),"field-hint":r(()=>[n(e.$slots,"hint")]),_:3},16,["name","has-focus","copyable","copyable-tooltip","copyable-text","help-text","size","required","disabled","is-inherited","is-inheritance-field"])}const f=S(h,[["render",x]]);h.__docgenInfo={displayName:"SwEmailField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"The value of the text field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"idSuffix",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"name",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-email-field/sw-email-field.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]};const Z={title:"Components/Form/sw-email-field",component:f,render:e=>({template:`
    <div>
      <sw-email-field
          v-bind="args"
          :modelValue="currentValue"
          @update:modelValue="onUpdateModelValue"
          @change="onChange"
          @inheritance-remove="inheritanceRemoveWrapper"
          @inheritance-restore="inheritanceRestoreWrapper">
        <template
            v-if="args.prefix"
            #prefix>
          {{args.prefix}}
        </template>
  
        <template
            v-if="args.suffix"
            #suffix>
          {{args.suffix}}
        </template>
  
        <template
            v-if="args.hint"
            #hint>
          {{args.hint}}
        </template>
      </sw-email-field>
      
      <!-- Helper element to loose focus -->
      <h4 style="display: none;">hidden</h4>
    </div>`,components:{SwEmailField:f},data(){return{currentValue:e.modelValue}},watch:{"args.modelValue"(a){this.currentValue!==a&&(this.currentValue=a)}},created(){this.currentValue=e.modelValue},methods:{onUpdateModelValue(a){this.currentValue=a,e.updateModelValue(a)},onChange(a){this.currentValue=a,e.change(a)},inheritanceRemoveWrapper(a){this.inheritanceRemove(...a),this.isInherited=!1},inheritanceRestoreWrapper(a){this.inheritanceRestore(...a),this.isInherited=!0}},setup:()=>({args:e})}),argTypes:{...k},args:{label:"Emailfield",updateModelValue:V(b("updateModelValue"))}},l={name:"sw-email-field"};var m,p,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "sw-email-field"
}`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const _=["DefaultStory"];export{l as DefaultStory,_ as __namedExportsOrder,Z as default};