import{f,a as m}from"./index-9accb58d.js";import{d as T,e as n,f as o,w as t,o as l,g as I,t as S,j as d,k as c,n as h,p as C,l as w}from"./vue.esm-bundler-651c6785.js";import{S as F}from"./sw-icon-33834bfc.js";import{S as k}from"./sw-text-field-214531c0.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{b as A}from"./arg-types-d031e4ef.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./iframe-bb853712.js";import"../sb-preview/runtime.js";import"./sw-base-field-5b35d1fc.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-1cd838fb.js";const V=T({name:"SwPasswordField",i18n:{messages:{en:{"sw-password-field":{titleHidePassword:"Hide password",titleShowPassword:"Show password"}},de:{"sw-password-field":{titleHidePassword:"Passwort verbergen",titleShowPassword:"Passwort anzeigen"}}}},components:{"sw-icon":F},extends:k,props:{passwordToggleAble:{type:Boolean,required:!1,default:!0},placeholderIsPassword:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1,default:null}},data(){return{showPassword:!1}},computed:{typeFieldClass(){return this.passwordToggleAble?"sw-field--password":"sw-field--password sw-field--password--untoggable"},passwordPlaceholder(){return this.showPassword||!this.placeholderIsPassword?this.placeholder:"*".repeat(this.placeholder.length?this.placeholder.length:6)}},methods:{onTogglePasswordVisibility(e){e||(this.showPassword=!this.showPassword)}}});const R={class:"sw-field--password__container"},z=["id","type","name","placeholder","disabled","value","autocomplete"],B=["title","onClick"];function D(e,s,N,H,W,E){const u=n("sw-icon"),P=n("sw-field-error"),q=n("sw-base-field");return l(),o(q,{class:"sw-field--password",disabled:e.disabled,required:e.required,"is-inherited":e.isInherited,"is-inheritance-field":e.isInheritanceField,"disable-inheritance-toggle":e.disableInheritanceToggle,copyable:e.copyable,"copyable-tooltip":e.copyableTooltip,"copyable-text":e.currentValue,"has-focus":e.hasFocus,"help-text":e.helpText,name:e.name,size:e.size,onInheritanceRestore:s[4]||(s[4]=r=>e.$emit("inheritance-restore",r)),onInheritanceRemove:s[5]||(s[5]=r=>e.$emit("inheritance-remove",r))},{label:t(()=>[I(S(e.label),1)]),"field-prefix":t(()=>[d(e.$slots,"prefix")]),element:t(({identification:r,disabled:p})=>[c("div",R,[c("input",{id:r,type:e.showPassword?"text":"password",name:r,placeholder:e.passwordPlaceholder,disabled:p,value:e.currentValue,autocomplete:e.autocomplete,onInput:s[0]||(s[0]=h((...a)=>e.onInput&&e.onInput(...a),["stop"])),onChange:s[1]||(s[1]=h((...a)=>e.onChange&&e.onChange(...a),["stop"])),onFocus:s[2]||(s[2]=(...a)=>e.setFocusClass&&e.setFocusClass(...a)),onBlur:s[3]||(s[3]=(...a)=>e.removeFocusClass&&e.removeFocusClass(...a))},null,40,z),e.passwordToggleAble?(l(),C("span",{key:0,title:e.showPassword?e.$tc("sw-password-field.titleHidePassword"):e.$tc("sw-password-field.titleShowPassword"),class:"sw-field__toggle-password-visibility",onClick:a=>e.onTogglePasswordVisibility(p)},[e.showPassword?(l(),o(u,{key:0,name:"regular-eye-slash",small:""})):(l(),o(u,{key:1,"data-testid":"sw-password-field-show-button",name:"regular-eye",small:""}))],8,B)):w("",!0)])]),"field-suffix":t(()=>[d(e.$slots,"suffix")]),error:t(()=>[e.error?(l(),o(P,{key:0,error:e.error},null,8,["error"])):w("",!0)]),"field-hint":t(()=>[d(e.$slots,"hint")]),_:3},8,["disabled","required","is-inherited","is-inheritance-field","disable-inheritance-toggle","copyable","copyable-tooltip","copyable-text","has-focus","help-text","name","size"])}const g=$(V,[["render",D]]);V.__docgenInfo={displayName:"SwPasswordField",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The value of the text field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"idSuffix",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"name",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"passwordToggleAble",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"placeholderIsPassword",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autocomplete",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-password-field/sw-password-field.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]};const ae={title:"Components/Form/sw-password-field",component:g,render:e=>({template:`
      <div>
        <sw-password-field
          v-bind="args"
          :value="currentValue"
          @change="onChange"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper"
        >
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
        </sw-password-field>
        <h4 style="display: none;">hidden</h4>
      </div>`,components:{SwPasswordField:g},data(){return{currentValue:""}},watch:{"args.value"(s){console.log("args.value watch",s),this.currentValue!==s&&(this.currentValue=s)}},created(){this.currentValue=e.value},methods:{onChange(s){e.change(s),this.currentValue=s},inheritanceRemoveWrapper(s){this.inheritanceRemove(...s),e.isInherited=!1},inheritanceRestoreWrapper(s){this.inheritanceRestore(...s),e.isInherited=!0}},setup:()=>({args:e})}),args:{label:"Passwordfield",change:f(m("change")),input:f(m("input"))},argTypes:{...A}},i={name:"sw-password-field"};var y,b,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'sw-password-field'
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const re=["DefaultStory"];export{i as DefaultStory,re as __namedExportsOrder,ae as default};