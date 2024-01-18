import{d as w,e as u,f,w as l,q as a,o as m,g as v,t as V,j as o,k as p,v as h,s as c,l as q}from"./vue.esm-bundler-651c6785.js";import{S as C}from"./sw-text-field-ae27f83e.js";import{S as N}from"./sw-icon-9e700c16.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const b=w({name:"SwNumberField",components:{"sw-icon":N},extends:C,props:{numberType:{type:String,required:!1,default:"float",validator(e){return["float","int"].includes(e)}},step:{type:Number,required:!1,default:null},min:{type:Number,required:!1,default:null},max:{type:Number,required:!1,default:null},value:{type:Number,required:!1,default:null},digits:{type:Number,required:!1,default:2,validator(e){const t=e===Math.floor(e);return t||console.warn("sw-number-field","Provided prop digits must be of type integer"),t}},fillDigits:{type:Boolean,required:!1,default:!1},allowEmpty:{type:Boolean,required:!1,default:!1}},data(){return{upControlClasses:null,downControlClasses:null,upHandler:null,downHandler:null}},computed:{realStep(){return this.step===null?this.numberType==="int"?1:.01:this.numberType==="int"?Math.round(this.step):this.step},realMinimum(){return this.min===null?null:this.numberType==="int"?Math.ceil(this.min):this.min},realMaximum(){return this.max===null?null:this.numberType==="int"?Math.floor(this.max):this.max},stringRepresentation(){return this.currentValue===null?"":this.fillDigits&&this.numberType!=="int"?this.currentValue.toFixed(this.digits):this.currentValue.toString()},controlClasses(){return{disabled:this.disabled,error:!!this.error}}},watch:{value:{handler(){if(this.value===null||this.value===void 0){this.currentValue=null;return}this.computeValue(this.value.toString())},immediate:!0}},methods:{onChange(e){this.computeValue(e.target.value),this.$emit("change",this.currentValue)},onInput(e){let t=Number.parseFloat(e.target.value);Number.isNaN(t)||(this.max&&t>this.max&&(t=this.max),this.min&&t<this.min&&(t=this.min),this.$emit("input-change",t))},increaseNumberByStep(){this.disabled||(this.upControlClasses={"sw-icon--toggled":!0},this.upHandler&&window.clearTimeout(this.upHandler),this.upHandler=window.setTimeout(()=>{this.upControlClasses={}},100),this.computeValue((this.currentValue+this.realStep).toString()),this.$emit("change",this.currentValue))},decreaseNumberByStep(){this.disabled||(this.downControlClasses={"sw-icon--toggled":!0},this.downHandler&&window.clearTimeout(this.downHandler),this.downHandler=window.setTimeout(()=>{this.downControlClasses={}},100),this.computeValue((this.currentValue-this.realStep).toString()),this.$emit("change",this.currentValue))},computeValue(e){const t=this.getNumberFromString(e);this.currentValue=this.parseValue(t)},parseValue(e){return e===null||Number.isNaN(e)||!Number.isFinite(e)?this.allowEmpty?null:this.parseValue(0):this.checkForInteger(this.checkBoundaries(e))},checkBoundaries(e){return this.realMaximum!==null&&e>this.realMaximum&&(e=this.realMaximum),this.realMinimum!==null&&e<this.realMinimum&&(e=this.realMinimum),e},getNumberFromString(e){let t=e.split("e").shift();if(t=t.replace(/,/g,".").split("."),t.length===1)return parseFloat(t[0]);if(this.numberType==="int")return parseInt(t.join(""),10);const s=t[t.length-1].length,r=parseFloat(t.join(".")).toFixed(s);return s>this.digits?Math.round(r*10**this.digits)/10**this.digits:Number(r)},checkForInteger(e){if(this.numberType!=="int")return e;const t=Math.floor(e);return t!==e&&this.$nextTick(()=>{this.$forceUpdate()}),t}}});const T=["id","name","disabled","value","placeholder"];function F(e,t,s,r,I,B){const d=u("sw-icon"),g=u("sw-field-error"),y=u("sw-base-field");return m(),f(y,{class:a(["sw-number-field",e.$attrs.class]),disabled:e.disabled,required:e.required,"is-inherited":e.isInherited,"is-inheritance-field":e.isInheritanceField,"disable-inheritance-toggle":e.disableInheritanceToggle,copyable:e.copyable,"copyable-tooltip":e.copyableTooltip,"copyable-text":e.stringRepresentation,"has-focus":e.hasFocus,"help-text":e.helpText,name:e.name,size:e.size,onInheritanceRestore:t[6]||(t[6]=n=>e.$emit("inheritance-restore",n)),onInheritanceRemove:t[7]||(t[7]=n=>e.$emit("inheritance-remove",n))},{label:l(()=>[v(V(e.label),1)]),"field-prefix":l(()=>[o(e.$slots,"prefix")]),element:l(({identification:n})=>[p("input",{id:e.createInputId(n),type:"text",name:n,disabled:e.disabled,value:e.stringRepresentation,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...i)=>e.onInput&&e.onInput(...i)),onKeydown:[t[1]||(t[1]=h((...i)=>e.increaseNumberByStep&&e.increaseNumberByStep(...i),["up"])),t[2]||(t[2]=h((...i)=>e.decreaseNumberByStep&&e.decreaseNumberByStep(...i),["down"]))],onChange:t[3]||(t[3]=(...i)=>e.onChange&&e.onChange(...i)),onFocus:t[4]||(t[4]=(...i)=>e.setFocusClass&&e.setFocusClass(...i)),onBlur:t[5]||(t[5]=(...i)=>e.removeFocusClass&&e.removeFocusClass(...i))},null,40,T),p("div",{class:a(["sw-field--controls",e.controlClasses])},[c(d,{class:a(e.upControlClasses),name:"regular-chevron-up-s","data-testid":"sw-number-field-increase-button",onClick:e.increaseNumberByStep},null,8,["class","onClick"]),c(d,{class:a(e.downControlClasses),name:"regular-chevron-down-s","data-testid":"sw-number-field-decrease-button",onClick:e.decreaseNumberByStep},null,8,["class","onClick"])],2)]),"field-suffix":l(()=>[o(e.$slots,"suffix")]),error:l(()=>[e.error?(m(),f(g,{key:0,error:e.error},null,8,["error"])):q("",!0)]),"field-hint":l(()=>[o(e.$slots,"hint")]),_:3},8,["class","disabled","required","is-inherited","is-inheritance-field","disable-inheritance-toggle","copyable","copyable-tooltip","copyable-text","has-focus","help-text","name","size"])}const z=S(b,[["render",F]]);b.__docgenInfo={displayName:"SwNumberField",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The value of the field.",type:{name:"number|null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"idSuffix",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"name",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"numberType",description:"Defines if the number should be a floating point number or integer.",values:["float","int"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'float'"}},{name:"step",description:"Defines the amount of which the number is increased or decreased per step.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"min",description:"Defines the minimum value of the number.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"max",description:"Defines the maximum value of the number.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"digits",description:"Defines how many digits should be displayed after the decimal point.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"fillDigits",description:"Defines if digits should be filled with zeros if the value is smaller than the minimum value.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"allowEmpty",description:"Defines if the field can be empty.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}},{name:"input-change",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-number-field/sw-number-field.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]};export{z as S};
