import{d as u,e as k,o as r,n as s,j as o,s as t,m as w,p as h}from"./vue.esm-bundler-b74e4d3a.js";import{S as b}from"./sw-icon-3b1d1ea3.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import"./iframe-511ec090.js";import"../sb-preview/runtime.js";const f=u({name:"SwExternalLink",components:{"sw-icon":b},inheritAttrs:!1,props:{small:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},rel:{type:String,required:!1,default:"noopener",validator(e){return["nofollow","noopener","noreferrer","opener"].includes(e)}},href:{type:String,required:!1,default:void 0}},computed:{classes(){return{"sw-external-link--small":this.small,"sw-external-link--disabled":this.disabled}},icon(){return"regular-external-link-s"}},methods:{onClick(e){this.disabled||this.$emit("click",e)}}});const g=["href","rel","aria-disabled"],_=["aria-disabled"];function v(e,a,S,C,$,q){const l=k("sw-icon");return e.href?(r(),s("a",w({key:0,href:e.href},e.$attrs,{target:"_blank",rel:e.rel,"aria-disabled":e.disabled,class:["sw-external-link",e.classes]}),[o(e.$slots,"default"),t(l,{class:"sw-external-link__icon",name:e.icon},null,8,["name"])],16,g)):(r(),s("span",{key:1,class:h(["sw-external-link",e.classes]),role:"link","aria-disabled":e.disabled,onClick:a[0]||(a[0]=(...p)=>e.onClick&&e.onClick(...p))},[o(e.$slots,"default"),t(l,{class:"sw-external-link__icon",name:e.icon},null,8,["name"])],10,_))}const i=y(f,[["render",v]]);f.__docgenInfo={displayName:"SwExternalLink",exportName:"default",description:"",tags:{},props:[{name:"small",description:"Render the external link in small font size",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Make the link unclickable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rel",description:'Change the "rel" attribute of <a> elements',type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'noopener'"},values:["nofollow","noopener","noreferrer","opener"]},{name:"href",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-external-link/sw-external-link.vue"]};const x={title:"Components/Form/sw-external-link",component:i,render:e=>({components:{SwExternalLink:i},template:`
      <sw-external-link 
        v-bind="args"
        @click="click"
      >
        Click here
      </sw-external-link>`,setup:()=>({args:e})}),args:{small:!1,rel:"noopener",href:"https://www.shopware.com",disabled:!1},argTypes:{click:{action:"click",table:{category:"Events"}}}},z=x,n={name:"sw-external-link"};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'sw-external-link'
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["DefaultStory"];export{n as DefaultStory,D as __namedExportsOrder,z as default};
