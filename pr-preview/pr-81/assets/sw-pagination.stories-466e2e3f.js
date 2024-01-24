import{S as p}from"./sw-pagination-969b04a9.js";import{f as m,a as s}from"./index-9accb58d.js";import{b as g}from"./vue.esm-bundler-651c6785.js";import"./sw-segmented-control-3ef577a2.js";import"./sw-checkbox-e3f61f5e.js";import"./sw-icon-33834bfc.js";import"./iframe-bb853712.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-5b35d1fc.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-1cd838fb.js";import"./sw-popover-e191252f.js";import"./sw-switch-1a591c3a.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-number-field-abe37b19.js";import"./sw-text-field-214531c0.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const c={title:"Components/Table and list/sw-pagination",component:p},z=c,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m(s("change-current-page"))(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SwPagination
    },
    setup: () => {
      const page = ref(1);
      return {
        page,
        onChangeCurrentPage: ($event: number) => {
          fn(action('change-current-page'))($event);
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,z as default};
