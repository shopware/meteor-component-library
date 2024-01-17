import{d as _,e as l,o as a,f as m,w as f,k as v,p as d,u as R,n as o,F as u,z as p,g as b,l as h,v as w,t as I}from"./vue.esm-bundler-b74e4d3a.js";import{S as W,a as V}from"./sw-context-menu-item-cd75a102.js";import{S as D}from"./sw-color-badge-03d44177.js";import{S as L}from"./sw-icon-3b1d1ea3.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";function g(e){const t=window.getComputedStyle(e),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return Math.ceil(e.offsetWidth+i)}const $=_({name:"PriorityPlusMenu",props:{list:{type:Array,required:!0,default(){return[]}},offsetFactor:{type:Number,default:2}},data(){return{accumItemWidths:[]}},computed:{mainItems(){return this.list.filter(e=>!e.hidden)},moreItems(){return this.list.filter(e=>e.hidden)},hasHiddenItems(){return!!this.moreItems.length}},beforeCreate(){this.$options.propsData&&this.$options.propsData.list.forEach(e=>{this.$set(e,"hidden",!1)})},async mounted(){await this.$nextTick(),this.storeItemWidths(),this.handleResize(),window.addEventListener("resize",this.handleResize)},beforeUpdate(){this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{storeItemWidths(){let e=0;const t=Array.prototype.slice.call(this.$el.children||[]);this.list.forEach((i,r)=>{this.$set(i,"width",g(t[r])),e+=i.width,this.$set(this.accumItemWidths,r,e)})},getContainerWidth(){let e=0;if(this.hasHiddenItems){const t=Array.prototype.slice.call(this.$el.children||[]),i=t[t.length-1];t&&i&&(e=g(i)*this.offsetFactor)}return this.$el.offsetWidth-e},getLastVisibleItemIndex(){let e=0;const t=this.getContainerWidth();for(;e<this.accumItemWidths.length;){if(this.accumItemWidths[e]>t){e--;break}e++}return e},async handleResize(){await this.$nextTick();const e=this.getLastVisibleItemIndex();this.list.forEach((t,i)=>{const r=i>e;this.$set(t,"hidden",r)})}},render(){return this.$slots.default({mainItems:this.mainItems,moreItems:this.moreItems})}});$.__docgenInfo={displayName:"PriorityPlusMenu",exportName:"default",description:"",tags:{},props:[{name:"list",type:{name:"ItemBase[]"},required:!0,defaultValue:{func:!0,value:"function() { return [] }"}},{name:"offsetFactor",type:{name:"number"},defaultValue:{func:!1,value:"2.0"}}],slots:[{name:"default",bindings:[]}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/_internal/sw-priority-plus-navigation.vue"]};const C=_({name:"SwTabs",components:{"sw-context-button":W,"sw-context-menu-item":V,"priority-plus":$,"sw-color-badge":D,"sw-icon":L},props:{items:{type:Array,required:!0},vertical:{type:Boolean,required:!1,default:!1},small:{type:Boolean,required:!1,default:!1},defaultItem:{type:String,required:!1,default:""}},data(){return{refreshKey:!0,activeItemName:"",showMoreItems:!1}},computed:{tabClasses(){return this.refreshKey,{"sw-tabs--vertical":this.vertical,"sw-tabs--small":this.small}},activeDomItem(){this.refreshKey;const e=this.activeItemName;return(this.$refs.items?this.$refs.items:[]).find(r=>r.getAttribute("data-item-name")===e)},sliderPosition(){var e,t,i,r;return this.refreshKey,!this.activeDomItem&&!this.activeItem?0:(e=this.activeItem)!=null&&e.hidden&&this.$refs["more-items-button"]?(t=this.$refs["more-items-button"].$el)==null?void 0:t.offsetLeft:this.vertical?(i=this.activeDomItem)==null?void 0:i.offsetTop:(r=this.activeDomItem)==null?void 0:r.offsetLeft},sliderLength(){var e,t,i,r;return this.refreshKey,!this.activeDomItem&&!this.activeItem?0:(e=this.activeItem)!=null&&e.hidden&&this.$refs["more-items-button"]?(t=this.$refs["more-items-button"].$el)==null?void 0:t.offsetWidth:this.vertical?(i=this.activeDomItem)==null?void 0:i.offsetHeight:(r=this.activeDomItem)==null?void 0:r.offsetWidth},activeItem(){return this.refreshKey,this.items.find(e=>e.name===this.activeItemName)},sliderClasses(){var e;return this.refreshKey,{"sw-tabs--slider__has-error":((e=this.activeItem)==null?void 0:e.hasError)??!1}},sliderStyle(){return this.refreshKey,this.vertical?`
            transform: translate(0, ${this.sliderPosition}px) rotate(90deg);
            width: ${this.sliderLength}px;
        `:`
          transform: translate(${this.sliderPosition}px, 0) rotate(0deg);
          width: ${this.sliderLength}px;
      `}},watch:{items:"handleResize",vertical:"handleResize",small:"handleResize"},mounted(){this.setActiveItem(this.defaultItem),this.$device.onResize({listener(){this.handleResize()},component:this,scope:this})},beforeUnmount(){this.$device.removeResizeListener(this)},methods:{handleClick(e){this.setActiveItem(e),this.$emit("new-item-active",e);const t=this.items.find(i=>i.name===e);t!=null&&t.onClick&&t.onClick(e)},getItemClasses(e){return{"sw-tabs--item__has-error":e.hasError,"sw-tabs--item__is-active":e.name===this.activeItemName}},getContextMenuItemVariant(e){return e.hasError?"critical":e.name===this.activeItemName?"active":e.badge==="critical"?"critical":"default"},setActiveItem(e){this.activeItemName=`${e}`,this.refreshKey=!this.refreshKey},handleResize(){this.$refs.priorityPlus&&(this.refreshKey=!this.refreshKey,this.$refs.priorityPlus.handleResize().then(()=>{this.refreshKey=!this.refreshKey}))},toggleMoreTabItems(){this.showMoreItems=!this.showMoreItems}}});const M={role:"tablist"},q=["data-item-name","aria-selected","onClick","onKeyup"],P=["data-item-name","onClick"];function T(e,t,i,r,B,F){const k=l("sw-icon"),K=l("sw-color-badge"),z=l("sw-context-menu-item"),S=l("sw-context-button"),x=l("priority-plus");return a(),m(x,{ref:"priorityPlus",class:d(["sw-tabs",e.tabClasses]),list:e.items},{default:f(({mainItems:y,moreItems:c})=>[v("ul",M,[v("span",{class:d(["sw-tabs--slider",e.sliderClasses]),style:R(e.sliderStyle)},null,6),e.vertical?h("",!0):(a(),o(u,{key:0},[(a(!0),o(u,null,p(y,s=>(a(),o("li",{key:s.name,ref_for:!0,ref:"items",class:d(["sw-tabs--item",e.getItemClasses(s)]),"data-item-name":s.name,role:"tab","aria-selected":s.name===e.activeItemName,tabindex:0,onClick:n=>e.handleClick(s.name),onKeyup:w(n=>e.handleClick(s.name),["enter"])},[b(I(s.label)+" ",1),s.hasError?(a(),m(k,{key:0,class:"sw-tabs--error-badge",name:"solid-exclamation-circle"})):h("",!0),s.badge?(a(),m(K,{key:1,variant:s.badge,rounded:""},null,8,["variant"])):h("",!0)],42,q))),128)),c.length?(a(),m(S,{key:0,ref:"more-items-button","has-error":c.some(s=>s.hasError)},{"button-text":f(()=>[b(" More ")]),default:f(({toggleFloatingUi:s})=>[(a(!0),o(u,null,p(c,n=>(a(),m(z,{key:n.name,type:e.getContextMenuItemVariant(n),role:"tab","aria-selected":n.name===e.activeItemName,label:n.label,onClick:N=>{e.handleClick(n.name),s()},onKeyup:w(N=>e.handleClick(n.name),["enter"])},null,8,["type","aria-selected","label","onClick","onKeyup"]))),128))]),_:2},1032,["has-error"])):h("",!0)],64)),e.vertical?(a(!0),o(u,{key:1},p([...y,...c],s=>(a(),o("li",{key:s.name,ref_for:!0,ref:"items",class:d(["sw-tabs--item",e.getItemClasses(s)]),"data-item-name":s.name,onClick:n=>e.handleClick(s.name)},I(s.label),11,P))),128)):h("",!0)])]),_:1},8,["class","list"])}const J=E(C,[["render",T]]);C.__docgenInfo={displayName:"SwTabs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"TabItem[]"},required:!0},{name:"vertical",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"small",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"defaultItem",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}}],events:[{name:"new-item-active",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-tabs/sw-tabs.vue"]};export{J as S};
