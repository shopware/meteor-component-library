import{S as f}from"./sw-base-field-b1a18dda.js";import{S as m}from"./sw-icon-c6ca0f62.js";import{d as h,b as u,x as v,e as i,o as g,f as w,w as b,s as C,k as y}from"./vue.esm-bundler-f31f98e0.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const d=h({components:{"sw-base-field":f,"sw-icon":m},props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"default",validator:e=>["small","default"].includes(e)},disabled:{type:Boolean,required:!1,default:!1}},i18n:{messages:{en:{"sw-search":{searchPlaceholder:"Search"}},de:{"sw-search":{searchPlaceholder:"Suchen"}}}},emits:["change","input"],setup(e,{emit:s}){const l=u(!1),o=u(e.value);return v(()=>e.value,a=>{o.value=a}),{hasFocus:l,setFocusClass:()=>{l.value=!0},removeFocusClass:()=>{l.value=!1},onChange:a=>{s("change",a.target.value||"")},onInput:a=>{s("input",a.target.value)},currentValue:o}}});const F=["id","name","disabled","value","placeholder"];function q(e,s,l,o,c,p){const r=i("sw-icon"),t=i("sw-base-field");return g(),w(t,{class:"sw-search",disabled:e.disabled,"has-focus":e.hasFocus,size:e.size},{element:b(({identification:a})=>[C(r,{name:"regular-search-s"}),y("input",{id:a,class:"sw-search__text-input",type:"text",name:a,disabled:e.disabled,value:e.currentValue,placeholder:e.$t(e.placeholder)?e.$t(e.placeholder).toString():e.$t("sw-search.searchPlaceholder").toString(),onInput:s[0]||(s[0]=(...n)=>e.onInput&&e.onInput(...n)),onChange:s[1]||(s[1]=(...n)=>e.onChange&&e.onChange(...n)),onFocus:s[2]||(s[2]=(...n)=>e.setFocusClass&&e.setFocusClass(...n)),onBlur:s[3]||(s[3]=(...n)=>e.removeFocusClass&&e.removeFocusClass(...n))},null,40,F)]),_:1},8,["disabled","has-focus","size"])}const B=S(d,[["render",q]]);d.__docgenInfo={exportName:"default",displayName:"sw-search",description:"",tags:{},props:[{name:"value",description:"The value of the search field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",description:"The size of the search field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"change"},{name:"input"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-search/sw-search.vue"]};export{B as S};