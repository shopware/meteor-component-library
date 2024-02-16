import{d as _,j as q,e as m,f as h,w as p,o as n,k as v,q as c,u as N,p as l,F as f,z as y,v as I,g as w,t as g,l as d}from"./vue.esm-bundler-f31f98e0.js";import{S as T,a as L}from"./sw-context-menu-item-b75560ec.js";import{S as M}from"./sw-color-badge-2d7740b4.js";import{S as P}from"./sw-icon-c55f7719.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";function $(e){if(!e)return 0;const t=window.getComputedStyle(e),s=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return Math.ceil(e.offsetWidth+s)}const C=_({name:"PriorityPlusMenu",props:{list:{type:Array,required:!0,default(){return[]}},offsetFactor:{type:Number,default:1.5},identifier:{type:String,required:!1,default:"name"}},data(){return{accumItemWidths:[],hiddenItemIdentifiers:[]}},computed:{mainItems(){return this.list.filter(e=>!this.hiddenItemIdentifiers.includes(e.name))},moreItems(){return this.list.filter(e=>this.hiddenItemIdentifiers.includes(e.name))},hasHiddenItems(){return!!this.moreItems.length},visibleElements(){const e={};return this.list.forEach(t=>{if(this.hiddenItemIdentifiers.includes(t[this.identifier]))return;const s=this.$el.parentElement.querySelector(`[data-priority-plus="${t[this.identifier]}"]`);s&&(e[t[this.identifier]]=s)}),e},lastVisibleElement(){const e=Object.keys(this.visibleElements),t=e[e.length-1];return this.visibleElements[t]}},async mounted(){await this.$nextTick(),this.storeItemWidths(),this.handleResize(),this.handleResize(),window.addEventListener("resize",this.handleResize)},watch:{list:{handler(){this.handleResize()},deep:!0}},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{storeItemWidths(){let e=0;this.list.forEach((t,s)=>{e+=$(this.visibleElements[t[this.identifier]]),this.accumItemWidths[s]=e})},getContainerWidth(){var t,s;let e=0;if(this.hasHiddenItems){const r=Object.values(this.visibleElements)[0];e=$(r)*this.offsetFactor}return((s=(t=this.$el)==null?void 0:t.nextSibling)==null?void 0:s.offsetWidth)-e},getLastVisibleItemIndex(){let e=0;const t=this.getContainerWidth();for(;e<this.accumItemWidths.length;){if(this.accumItemWidths[e]>t){e--;break}e++}return e},async handleResize(){await this.$nextTick();const e=this.getLastVisibleItemIndex();this.hiddenItemIdentifiers=[],this.list.forEach((t,s)=>{if(!(s>e)){this.hiddenItemIdentifiers=this.hiddenItemIdentifiers.filter(o=>o!==t.name);return}this.hiddenItemIdentifiers.push(t.name)})}}});function D(e,t,s,r,o,S){return q(e.$slots,"default",{mainItems:e.mainItems,moreItems:e.moreItems})}const F=k(C,[["render",D]]);C.__docgenInfo={displayName:"PriorityPlusMenu",description:`A flexible priority plus navigation component.
For reference see: https://css-tricks.com/the-priority-navigation-pattern/`,tags:{examples:[{title:"example",content:`<sw-priority-plus-navigation
 :list="[
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]"
  identifier="name"
  #default="{ mainItems, moreItems }"
>
  <template v-for="item in mainItems">
     <a
       :href="item.url"
       :data-priority-plus="item.name"
     >
       {{ item.name }}
     </a>
  </template>

  <sw-context-button
    v-if="moreItems.length"
    ref="more-items-button"
    :has-error="moreItems.some(i => i.hasError)"
  >
    <template #button-text>More</template>

    <sw-context-menu-item
     v-for="item in moreItems"
    >
    </sw-context-menu-item>
  </sw-context-button>
</sw-priority-plus-navigation>`}]},exportName:"default",props:[{name:"list",description:"The list of navigation items to display.",type:{name:"ItemBase[]"},required:!0,defaultValue:{func:!0,value:`function() {
  return [];
}`}},{name:"offsetFactor",description:"The offset factor is used to multiply the width of the last visible item for the more button offset.",type:{name:"number"},defaultValue:{func:!1,value:"1.5"}},{name:"identifier",description:"The property used to identify the items in the list.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"name"'}}],slots:[{name:"default",scoped:!0,bindings:[{name:"mainItems",title:"binding"},{name:"moreItems",title:"binding"}]}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/_internal/sw-priority-plus-navigation.vue"]};const x=_({name:"SwTabs",components:{"sw-context-button":T,"sw-context-menu-item":L,"priority-plus":F,"sw-color-badge":M,"sw-icon":P},props:{items:{type:Array,required:!0},vertical:{type:Boolean,required:!1,default:!1},small:{type:Boolean,required:!1,default:!1},defaultItem:{type:String,required:!1,default:""}},data(){return{refreshKey:!0,activeItemName:"",showMoreItems:!1}},computed:{tabClasses(){return this.refreshKey,{"sw-tabs--vertical":this.vertical,"sw-tabs--small":this.small}},activeDomItem(){this.refreshKey;const e=this.activeItemName;return(this.$refs.items?this.$refs.items:[]).find(r=>r.getAttribute("data-item-name")===e)},sliderPosition(){var e,t,s;return this.refreshKey,this.activeItem?!this.activeDomItem&&this.$refs["more-items-button"]?(e=this.$refs["more-items-button"].$el)==null?void 0:e.offsetLeft:this.vertical?(t=this.activeDomItem)==null?void 0:t.offsetTop:(s=this.activeDomItem)==null?void 0:s.offsetLeft:0},sliderLength(){var e,t,s,r,o;return this.refreshKey,this.activeItem?!this.activeDomItem&&this.$refs["more-items-button"]?(e=this.$refs["more-items-button"].$el)==null?void 0:e.offsetWidth:(t=this.activeItem)!=null&&t.hidden&&this.$refs["more-items-button"]?(s=this.$refs["more-items-button"].$el)==null?void 0:s.offsetWidth:this.vertical?(r=this.activeDomItem)==null?void 0:r.offsetHeight:(o=this.activeDomItem)==null?void 0:o.offsetWidth:0},activeItem(){return this.refreshKey,this.items.find(e=>e.name===this.activeItemName)},sliderClasses(){var e;return this.refreshKey,{"sw-tabs--slider__has-error":((e=this.activeItem)==null?void 0:e.hasError)??!1}},sliderStyle(){return this.refreshKey,this.vertical?`
            transform: translate(0, ${this.sliderPosition}px) rotate(90deg);
            width: ${this.sliderLength}px;
        `:`
          transform: translate(${this.sliderPosition}px, 0) rotate(0deg);
          width: ${this.sliderLength}px;
      `}},watch:{items:"handleResize",vertical:"handleResize",small:"handleResize"},mounted(){this.setActiveItem(this.defaultItem),this.$nextTick(()=>{this.handleResize()}),this.$device.onResize({listener(){this.handleResize()},component:this,scope:this})},beforeUnmount(){this.$device.removeResizeListener(this)},methods:{handleClick(e){this.setActiveItem(e),this.$emit("new-item-active",e);const t=this.items.find(s=>s.name===e);t!=null&&t.onClick&&t.onClick(e)},getItemClasses(e){return{"sw-tabs--item__has-error":e.hasError,"sw-tabs--item__is-active":e.name===this.activeItemName}},getContextMenuItemVariant(e){return e.hasError?"critical":e.name===this.activeItemName?"active":e.badge==="critical"?"critical":"default"},setActiveItem(e){this.activeItemName=`${e}`,this.refreshKey=!this.refreshKey},handleResize(){this.$refs.priorityPlus&&(this.refreshKey=!this.refreshKey,this.$refs.priorityPlus.handleResize().then(()=>{this.refreshKey=!this.refreshKey}))},toggleMoreTabItems(){this.showMoreItems=!this.showMoreItems}}});const B=["data-priority-plus","data-item-name","aria-selected","onClick","onKeyup"],A=["data-item-name","onClick"];function H(e,t,s,r,o,S){const z=m("sw-icon"),E=m("sw-color-badge"),K=m("sw-context-menu-item"),R=m("sw-context-button"),V=m("priority-plus");return n(),h(V,{ref:"priorityPlus",list:e.items},{default:p(({mainItems:b,moreItems:u})=>[v("ul",{class:c(["sw-tabs",e.tabClasses]),role:"tablist"},[v("span",{class:c(["sw-tabs--slider",e.sliderClasses]),style:N(e.sliderStyle)},null,6),e.vertical?d("",!0):(n(),l(f,{key:0},[(n(!0),l(f,null,y(b,i=>(n(),l("li",{key:i.name,"data-priority-plus":i.name,ref_for:!0,ref:"items",class:c(["sw-tabs--item",e.getItemClasses(i)]),"data-item-name":i.name,role:"tab","aria-selected":i.name===e.activeItemName,tabindex:0,onClick:a=>e.handleClick(i.name),onKeyup:I(a=>e.handleClick(i.name),["enter"])},[w(g(i.label)+" ",1),i.hasError?(n(),h(z,{key:0,class:"sw-tabs--error-badge",name:"solid-exclamation-circle"})):d("",!0),i.badge?(n(),h(E,{key:1,variant:i.badge,rounded:""},null,8,["variant"])):d("",!0)],42,B))),128)),u.length?(n(),h(R,{key:0,ref:"more-items-button","has-error":u.some(i=>i.hasError)},{"button-text":p(()=>[w(" More ")]),default:p(({toggleFloatingUi:i})=>[(n(!0),l(f,null,y(u,a=>(n(),h(K,{key:a.name,type:e.getContextMenuItemVariant(a),role:"tab","aria-selected":a.name===e.activeItemName,label:a.label,onClick:W=>{e.handleClick(a.name),i()},onKeyup:I(W=>e.handleClick(a.name),["enter"])},null,8,["type","aria-selected","label","onClick","onKeyup"]))),128))]),_:2},1032,["has-error"])):d("",!0)],64)),e.vertical?(n(!0),l(f,{key:1},y([...b,...u],i=>(n(),l("li",{key:i.name,ref_for:!0,ref:"items",class:c(["sw-tabs--item",e.getItemClasses(i)]),"data-item-name":i.name,onClick:a=>e.handleClick(i.name)},g(i.label),11,A))),128)):d("",!0)],2)]),_:1},8,["list"])}const Q=k(x,[["render",H]]);x.__docgenInfo={displayName:"SwTabs",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"TabItem[]"},required:!0},{name:"vertical",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"small",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"defaultItem",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"new-item-active",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-tabs/sw-tabs.vue"]};export{Q as S};