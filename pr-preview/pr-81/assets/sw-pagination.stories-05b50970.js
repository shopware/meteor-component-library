import{S as p}from"./sw-pagination-376cb81a.js";import{a as m}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as g}from"./vue.esm-bundler-651c6785.js";import"./sw-segmented-control-36b9e991.js";import"./sw-checkbox-1faccc0d.js";import"./sw-icon-691f2755.js";import"./iframe-bb3143e1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-7c2aa675.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-c159ee06.js";import"./sw-popover-03351461.js";import"./sw-switch-28d0c57c.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-number-field-4ecd4cbc.js";import"./sw-text-field-b54e505c.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const s={title:"Components/Table and list/sw-pagination",component:p},q=s,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m("change-current-page")(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SwPagination
    },
    setup: () => {
      const page = ref(1);
      return {
        page,
        onChangeCurrentPage: ($event: number) => {
          action('change-current-page')($event);
          page.value = $event;
        },
        args
      };
    },
    template: \`<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />\`
  }),
  args: {
    totalItems: 100,
    limit: 25
  },
  name: 'sw-pagination'
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,q as default};
