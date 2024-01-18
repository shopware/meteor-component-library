import{S as p}from"./sw-pagination-eb2a623a.js";import{a as m}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as g}from"./vue.esm-bundler-651c6785.js";import"./sw-segmented-control-ee37dd6e.js";import"./sw-checkbox-39cb202e.js";import"./sw-icon-2e639069.js";import"./iframe-5655d990.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-20bd014f.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-a370f7db.js";import"./sw-popover-e436a5c5.js";import"./sw-switch-98de9707.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";import"./sw-number-field-eba4e14a.js";import"./sw-text-field-7e394dbc.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const s={title:"Components/Table and list/sw-pagination",component:p},k=s,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m("change-current-page")(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,k as default};
