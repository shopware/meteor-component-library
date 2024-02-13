import{d as _,x as w,y as a,e as c,p as f,k as v,t as l,s as i,w as o,o as h}from"./vue.esm-bundler-f31f98e0.js";import{S as P}from"./sw-segmented-control-c1599c1b.js";import{S as y}from"./sw-icon-c6ca0f62.js";import{S as I}from"./sw-number-field-cfbb64a9.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const p=_({components:{"sw-segmented-control":P,"sw-icon":y,"sw-number-field":I},props:{currentPage:{type:Number,required:!0},limit:{type:Number,required:!0},totalItems:{type:Number,required:!0}},i18n:{messages:{en:{"sw-pagination":{of:"of"}},de:{"sw-pagination":{of:"von"}}}},emits:["change-current-page"],setup(e,{emit:n}){w(()=>e.limit,()=>{n("change-current-page",1)});const g=a(()=>(e.currentPage-1)*e.limit+1),d=a(()=>{const s=e.limit*e.currentPage;return s>e.totalItems?e.totalItems:s}),r=a(()=>Math.ceil(e.totalItems/e.limit)),u=a(()=>e.currentPage>1),t=a(()=>e.currentPage<r.value),m=a(()=>[{id:"pagination-first",onClick:()=>n("change-current-page",1),disabled:!u.value,minSquare:!0},{id:"pagination-previous",onClick:()=>n("change-current-page",e.currentPage-1),disabled:!u.value,minSquare:!0},{id:"pagination-current",disabled:r.value<=1,minSquare:!0},{id:"pagination-next",onClick:()=>n("change-current-page",e.currentPage+1),disabled:!t.value,minSquare:!0},{id:"pagination-last",onClick:()=>n("change-current-page",r.value),disabled:!t.value,minSquare:!0}]);return{firstVisibleItemNumber:g,lastVisibleItemNumber:d,totalPages:r,segmentedControlActions:m}}});const N={class:"sw-pagination"},x={class:"sw-pagination__info-text"};function q(e,n,g,d,r,u){const t=c("sw-icon"),m=c("sw-number-field"),s=c("sw-segmented-control");return h(),f("div",N,[v("span",x,l(e.firstVisibleItemNumber)+"-"+l(e.lastVisibleItemNumber)+" "+l(e.$t("sw-pagination.of"))+" "+l(e.totalItems),1),i(s,{"disable-context":"",actions:e.segmentedControlActions},{"label__pagination-first":o(()=>[i(t,{name:"solid-double-chevron-left-xxs"})]),"label__pagination-previous":o(()=>[i(t,{name:"solid-chevron-left-xs"})]),"label__pagination-current":o(()=>[i(m,{class:"sw-pagination__current-input",value:e.currentPage,min:1,max:e.totalPages,"number-type":"int",onChange:n[0]||(n[0]=b=>e.$emit("change-current-page",b))},null,8,["value","max"])]),"label__pagination-next":o(()=>[i(t,{name:"solid-chevron-right-xs"})]),"label__pagination-last":o(()=>[i(t,{name:"solid-double-chevron-right-xxs"})]),_:1},8,["actions"])])}const A=S(p,[["render",q]]);p.__docgenInfo={exportName:"default",displayName:"sw-pagination",description:"",tags:{},props:[{name:"currentPage",type:{name:"number"},required:!0},{name:"limit",type:{name:"number"},required:!0},{name:"totalItems",type:{name:"number"},required:!0}],events:[{name:"change-current-page"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/table-and-list/sw-pagination/sw-pagination.vue"]};export{A as S};