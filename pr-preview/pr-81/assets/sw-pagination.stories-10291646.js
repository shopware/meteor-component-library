import{S as p}from"./sw-pagination-ab823e9f.js";import{a as m}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as g}from"./vue.esm-bundler-5f175c2f.js";import"./sw-segmented-control-00b9d677.js";import"./sw-checkbox-c344f025.js";import"./sw-icon-1a41a17b.js";import"./iframe-a6fbbc4f.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-4be5bd2a.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-714d56db.js";import"./sw-popover-0c55eadf.js";import"./sw-switch-f5059097.js";import"./sw-button-f85b968e.js";import"./sw-loader-93b4a816.js";import"./sw-number-field-e02a6285.js";import"./sw-text-field-b401286f.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const s={title:"Components/Table and list/sw-pagination",component:p},q=s,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m("change-current-page")(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
