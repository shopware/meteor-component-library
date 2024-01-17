import{S as p}from"./sw-pagination-98c890b1.js";import{a as m}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as g}from"./vue.esm-bundler-b74e4d3a.js";import"./sw-segmented-control-24d50416.js";import"./sw-checkbox-b29de8d5.js";import"./sw-icon-08a29eac.js";import"./iframe-312174d1.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-d9725469.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-642d3568.js";import"./sw-popover-bb2835bb.js";import"./sw-switch-8ba22487.js";import"./sw-button-f164c644.js";import"./sw-loader-2faceb27.js";import"./sw-number-field-c2e2f4d0.js";import"./sw-text-field-1eed067d.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const s={title:"Components/Table and list/sw-pagination",component:p},k=s,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m("change-current-page")(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
