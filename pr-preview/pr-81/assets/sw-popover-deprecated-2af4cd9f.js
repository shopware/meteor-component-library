import{d as h,M as S,p as d,B as w,q as _,u as y,j as E,o as u}from"./vue.esm-bundler-f31f98e0.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const l=new Map,a={top:"--placement-top-outside",right:"--placement-right-outside",bottom:"--placement-bottom-outside",left:"--placement-left-outside"},z={active:!1,targetSelector:"",resizeWidth:!1,style:{}},$=["width","position","top","left","right","bottom"];function C(e,o){var p;const t=((p=o.$parent)==null?void 0:p.$el).getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,r={topSpace:t.top,rightSpace:s-t.right,bottomSpace:i-t.bottom,leftSpace:t.left};e.classList.remove(...Object.values(a));const c=[r.bottomSpace<r.topSpace?a.bottom:a.top,r.rightSpace>r.leftSpace?a.left:a.right];e.classList.add(...c)}function f(e,o,n){const t=o||e,i=t.getBoundingClientRect();let s=t,r={top:0,left:0};n.targetSelector&&n.targetSelector.length>0&&(s=t.closest(n.targetSelector),r=s.getBoundingClientRect()),Object.entries(n.style).forEach(([c,p])=>{$.includes(c)||(e.style[c]=p)}),e.style.position="absolute",e.style.top=`${i.top-r.top+t.clientHeight}px`,e.style.left=`${i.left-r.left}px`}function W(){window.addEventListener("scroll",g,!0)}function m(){window.removeEventListener("scroll",g,!0)}function g(){if(l.size<=0){m();return}l.forEach(e=>{f(e.el,e.ref,e.config)})}function B(e,o,n){const t=o==null?void 0:o._uid;t&&(l.size<=0&&W(),l.set(t,{el:e,ref:o.$el,config:n}))}function P(e){e&&(l.delete(e),l.size<=0&&m())}const q={mounted(e,o){var i,s;if(!o.value)return!1;const n={...z,...o.value};if(!n.active)return!1;let t=document.body;n.targetSelector&&n.targetSelector.length>0&&(t=e.closest(n.targetSelector)),t.appendChild(e),f(e,(i=o.instance)==null?void 0:i.$el,n),n.resizeWidth&&(e.style.width=`${(s=o.instance)==null?void 0:s.$el.clientWidth}px`),C(e,o.instance),B(e,o.instance,n)},unmounted(e,o,n){var t;e.parentNode&&e.parentNode.removeChild(e),P((t=n.context)==null?void 0:t._uid)}},v=h({name:"SwPopover",directives:{popover:q},props:{zIndex:{type:[Number,null],required:!1,default:null},resizeWidth:{type:Boolean,required:!1,default:!1},popoverClass:{type:[String,Array,Object],required:!1,default:""}},computed:{componentStyle(){return{"z-Index":this.zIndex}},popoverConfig(){return{active:!0,resizeWidth:this.resizeWidth}}}});const V={class:"sw-popover-deprecated"};function k(e,o,n,t,i,s){const r=S("popover");return u(),d("div",V,[w((u(),d("div",{class:_(["sw-popover-deprecated__wrapper",e.popoverClass]),style:y(e.componentStyle)},[E(e.$slots,"default")],6)),[[r,e.popoverConfig]])])}const I=b(v,[["render",k]]);v.__docgenInfo={displayName:"SwPopover",description:"",tags:{deprecated:[{description:"- Use `sw-floating-ui` instead",title:"deprecated"}]},exportName:"default",props:[{name:"zIndex",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"resizeWidth",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"popoverClass",type:{name:"string | unknown[] | Record<string, unknown>"},required:!1,defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/_internal/sw-popover-deprecated/sw-popover-deprecated.vue"]};export{I as S};