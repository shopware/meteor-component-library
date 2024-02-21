import{d as u,e as d,o as n,p as a,j as i,f,l as r,k as l,t as m,q as o,n as p,s as b}from"./vue.esm-bundler-f31f98e0.js";import{S as h}from"./sw-icon-c55f7719.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const c=u({name:"SwBanner",components:{"sw-icon":h},props:{variant:{type:String,required:!1,default:"neutral",validator(e){return["neutral","info","attention","critical","positive","inherited"].includes(e)}},title:{type:String,required:!1,default:""},hideIcon:{type:Boolean,required:!1,default:!1},closable:{type:Boolean,required:!1,default:!1},bannerIndex:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null}},computed:{bannerIcon(){return this.icon?this.icon:{neutral:"regular-info-circle",info:"regular-info-circle",attention:"regular-exclamation-triangle",critical:"regular-exclamation-circle",positive:"regular-check-circle",inherited:"regular-link"}[this.variant]||"regular-info-circle"},bannerClasses(){return[`sw-banner--${this.variant}`,{"sw-banner--icon":!this.hideIcon,"sw-banner--no-icon":this.hideIcon,"sw-banner--closable":this.closable}]},bannerBodyClasses(){return{"sw-banner__body--icon":!this.hideIcon,"sw-banner__body--closable":this.closable}}}});const v={key:0,class:"sw-banner__title"},y={class:"sw-banner__message"};function w(e,t,_,I,S,q){const s=d("sw-icon");return n(),a("div",{class:o(["sw-banner",e.bannerClasses]),role:"banner"},[i(e.$slots,"customIcon",{},()=>[e.hideIcon?r("",!0):(n(),f(s,{key:0,class:"sw-banner__icon",name:e.bannerIcon,decorative:""},null,8,["name"]))]),l("div",{class:o(["sw-banner__body",e.bannerBodyClasses])},[e.title?(n(),a("div",v,m(e.title),1)):r("",!0),l("div",y,[i(e.$slots,"default")])],2),e.closable?(n(),a("button",{key:0,class:"sw-banner__close","aria-label":"Schließen",title:"Schließen",onClick:t[0]||(t[0]=p(B=>e.$emit("close",e.bannerIndex),["prevent"]))},[b(s,{name:"regular-times-s"})])):r("",!0)],2)}const $=g(c,[["render",w]]);c.__docgenInfo={displayName:"SwBanner",exportName:"default",description:"",tags:{},props:[{name:"variant",description:"Change the variant of the banner",tags:{},values:["neutral","info","attention","critical","positive","inherited"],type:{name:"BannerType"},required:!1,defaultValue:{func:!1,value:'"neutral"'}},{name:"title",description:"The general title of the banner",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"hideIcon",description:"Hide the icon if needed",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"closable",description:"If set to true then you can close the banner directly",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"bannerIndex",description:`This index will get emitted when a user closes the banner.
It is needed for removing the correct banner`,type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",description:"Change the default icon for the banner",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"close"}],slots:[{name:"customIcon"},{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/feedback-indicator/sw-banner/sw-banner.vue"]};export{$ as S};
