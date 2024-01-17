import{d as u,e as t,o as f,n as c,k as a,q as h,s as n,w as m,g as p,t as b,p as k}from"./vue.esm-bundler-b74e4d3a.js";import{S as y}from"./sw-icon-3b1d1ea3.js";import{S as w,a as x}from"./sw-base-field-bf6bb47a.js";import{S as q}from"./sw-field-error-73799238.js";import{c as v}from"./tooltip.directive-5026512a.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const s=u({name:"SwCheckbox",components:{"sw-icon":y,"sw-base-field":w,"sw-field-error":q},mixins:[x],props:{label:{type:String,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},checked:{type:Boolean,required:!1,default:void 0},partial:{type:Boolean,required:!1,default:!1},inheritedValue:{type:Boolean,required:!1,default:null},error:{type:Object,required:!1,default:null},bordered:{type:Boolean,required:!1,default:!1},helpText:{type:String,required:!1,default:null},required:{type:Boolean,required:!1,default:!1}},data(){return{currentValue:this.checked,id:v()}},computed:{swCheckboxFieldClasses(){return{"has--error":!!this.hasError,"is--disabled":this.disabled,"is--inherited":!!this.isInherited,"is--bordered":this.bordered,"is--partly-checked":this.isPartlyChecked}},identification(){return`sw-field--${this.id}`},hasError(){return this.error&&this.error.code!==0},inputState(){return this.isInherited?this.inheritedValue:this.currentValue||!1},isInheritanceField(){return this.$attrs.isInheritanceField?!0:this.inheritedValue!==null},isInherited(){return this.$attrs.isInherited?!0:this.isInheritanceField&&this.currentValue===null},isDisabled(){return this.disabled||this.isInherited},isPartlyChecked(){return this.partial&&!this.inputState},iconName(){return this.isPartlyChecked?"regular-minus-xxs":"regular-checkmark-xxs"}},watch:{checked:{handler(){this.currentValue=this.checked},immediate:!0}},methods:{onChange(e){this.$emit("change",e.target.checked)}}});const V={class:"sw-field--checkbox__container"},g={class:"sw-field--checkbox__content"},C={class:"sw-field__checkbox"},S=["id","name","checked","disabled",".indeterminate"],I={class:"sw-field__checkbox-state"};function F(e,i,B,$,D,N){const l=t("sw-icon"),o=t("sw-base-field"),d=t("sw-field-error");return f(),c("div",V,[a("div",{class:k(["sw-field--checkbox",e.swCheckboxFieldClasses])},[a("div",g,[a("div",C,[a("input",{id:e.identification,type:"checkbox",name:e.identification,checked:e.inputState,disabled:e.isDisabled,".indeterminate":e.partial,onChange:i[0]||(i[0]=h((...r)=>e.onChange&&e.onChange(...r),["stop"]))},null,40,S),a("div",I,[n(l,{name:e.iconName,size:"16"},null,8,["name"])])]),n(o,{disabled:e.isDisabled,"is-inheritance-field":e.isInheritanceField,"is-inherited":e.isInherited,name:e.identification,"has-focus":!1,"help-text":e.helpText,required:e.required,onInheritanceRestore:i[1]||(i[1]=r=>e.$emit("inheritance-restore",r)),onInheritanceRemove:i[2]||(i[2]=r=>e.$emit("inheritance-remove",r))},{label:m(()=>[p(b(e.label),1)]),_:1},8,["disabled","is-inheritance-field","is-inherited","name","help-text","required"])])],2),n(d,{error:e.error},null,8,["error"])])}const R=_(s,[["render",F]]);s.__docgenInfo={exportName:"default",displayName:"SwCheckbox",description:"",tags:{},props:[{name:"mapInheritance",mixin:{name:"form-field.mixin",path:"../../../mixins/form-field.mixin.ts"},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",mixin:{name:"form-field.mixin",path:"../../../mixins/form-field.mixin.ts"},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",description:"A label for the checkbox.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"disabled",description:"Toggles the disabled state of the checkbox.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"checked",description:"Determines the checked state of the checkbox.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"partial",description:"Determines if the field is partially checked.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"inheritedValue",description:"Inherited value from another SalesChannel.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"error",description:"Error object for this field.",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bordered",description:"Determines if the field is surrounded by a border.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"helpText",description:"Help text with additional information for the field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"required",description:"Marks the field as required with an asterix.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-checkbox/sw-checkbox.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/mixins/form-field.mixin.ts"]};export{R as S};
