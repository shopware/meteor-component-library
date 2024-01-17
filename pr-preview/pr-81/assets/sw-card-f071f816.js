import{o as t,n as r,j as s,d as $,e as d,f as h,w as u,k as a,l as o,s as v,p as y,t as f}from"./vue.esm-bundler-b74e4d3a.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import{S as C}from"./sw-context-menu-item-cd75a102.js";import{S}from"./sw-loader-2faceb27.js";const m={};function k(e,c){return t(),r("div",null,[s(e.$slots,"default")])}const q=p(m,[["render",k]]);m.__docgenInfo={displayName:"sw-ignore-class",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/_internal/sw-ignore-class.vue"]};const _=$({components:{"sw-ignore-class":q,"sw-context-button":C,"sw-loader":S},props:{title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},hero:{type:Boolean,required:!1,default:!1},isLoading:{type:Boolean,required:!1,default:!1},large:{type:Boolean,required:!1,default:!1}},computed:{showHeader(){return!!this.title||!!this.$slots.title||!!this.$slots.title||!!this.subtitle||!!this.$slots.subtitle||!!this.$slots.subtitle||!!this.$slots.avatar||!!this.$slots.avatar},hasAvatar(){return!!this.$slots.avatar||!!this.$slots.avatar}},methods:{cardClasses(){var l;const e={"sw-card--tabs":!!this.$slots.tabs||!!this.$slots.tabs,"sw-card--grid":!!this.$slots.grid||!!this.$slots.grid,"sw-card--hero":!!this.hero,"sw-card--large":this.large,"has--header":!!this.showHeader,"has--title":!!this.title||!!this.$slots.title||!!this.$slots.title,"has--subtitle":!!this.subtitle||!!this.$slots.subtitle||!!this.$slots.subtitle,"has--toolbar":!!this.$slots.toolbar||!!this.$slots.toolbar,"has--footer":!!this.$slots.footer||!!this.$slots.footer};return this.$refs.swIgnoreClass?((((l=this.$refs.swIgnoreClass.$el)==null?void 0:l._prevClass)??"").split(" ").forEach(i=>{e[i]=!0}),this.$nextTick(()=>{var i,n;(n=(i=this.$refs.swIgnoreClass)==null?void 0:i.$el)!=null&&n.className&&(this.$refs.swIgnoreClass.$el.className="")}),e):(this.$nextTick(()=>{this.$forceUpdate()}),e)}}});const B={key:0,class:"sw-card__header"},I={key:0,class:"sw-card__avatar"},N={class:"sw-card__titles"},T={key:0,class:"sw-card__title"},V={key:0,class:"sw-card__subtitle"},A={class:"sw-card__titles-right-slot"},L={key:1,class:"sw-card__context-menu"},R={class:"sw-card__tabs"},H={class:"sw-card__toolbar"},z={class:"sw-card__content"},E={class:"sw-card__footer"};function F(e,c,l,i,n,j){const w=d("sw-context-button"),g=d("sw-loader"),b=d("sw-ignore-class");return t(),h(b,{ref:"swIgnoreClass"},{default:u(()=>[s(e.$slots,"before-card"),a("div",{class:y(["sw-card",e.cardClasses()])},[e.showHeader?(t(),r("div",B,[e.hasAvatar?(t(),r("div",I,[s(e.$slots,"avatar")])):o("",!0),a("div",N,[s(e.$slots,"title",{},()=>[e.title?(t(),r("div",T,f(e.title),1)):o("",!0)]),s(e.$slots,"subtitle",{},()=>[e.subtitle?(t(),r("div",V,f(e.subtitle),1)):o("",!0)])]),a("div",A,[s(e.$slots,"headerRight")]),e.$slots["context-actions"]||e.$slots["context-actions"]?(t(),r("div",L,[v(w,null,{default:u(()=>[s(e.$slots,"context-actions")]),_:3})])):o("",!0)])):o("",!0),a("div",R,[s(e.$slots,"tabs")]),a("div",H,[s(e.$slots,"toolbar")]),a("div",z,[s(e.$slots,"default"),s(e.$slots,"grid",{title:e.title}),e.isLoading?(t(),h(g,{key:0})):o("",!0)]),a("div",E,[s(e.$slots,"footer")])],2),s(e.$slots,"after-card")]),_:3},512)}const K=p(_,[["render",F]]);_.__docgenInfo={exportName:"default",displayName:"sw-card",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"hero",description:"Renders the card as a hero card without styling",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isLoading",description:"Show a loading spinner overlay over the whole card.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"large",description:"Render the card in a large size",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],slots:[{name:"before-card",description:"This slot is @private and should not be used"},{name:"avatar",description:"Slot for an avatar or logo"},{name:"title",description:"Alternative slot to the title property"},{name:"subtitle",description:"Alternative slot to the subtitle property"},{name:"headerRight",description:"Slot for adding additional things on the right side of the card header"},{name:"context-actions",description:"Slot for adding sw-context-menu-item components for rendering a context menu"},{name:"tabs",description:"Slot for adding a tab bar. The content need to be changed manually and you can't use the content slot of the tab bar"},{name:"toolbar",description:"Slot for adding toolbar functionality like search-bar, buttons, etc."},{name:"default",description:"The default slot which renders the card content"},{name:"grid",scoped:!0,description:"The grid slot which allows rendering of a data grid",bindings:[{name:"title",title:"binding"}]},{name:"footer",description:"The footer slot which allows rendering addintional things after the content"},{name:"after-card",description:"This slot is @private and should not be used"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/layout/sw-card/sw-card.vue"]};export{K as S};
