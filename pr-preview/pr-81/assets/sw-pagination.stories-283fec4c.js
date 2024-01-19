import{S as p}from"./sw-pagination-75946c7a.js";import{a as m}from"./chunk-WFFRPTHA-a68c42c5.js";import{b as g}from"./vue.esm-bundler-5f175c2f.js";import"./sw-segmented-control-af8d214d.js";import"./sw-checkbox-104ce3e8.js";import"./sw-icon-48f9aa70.js";import"./iframe-0b40ffd8.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-fe4faed4.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-9c061992.js";import"./sw-popover-fcdb73b6.js";import"./sw-switch-11f44558.js";import"./sw-button-f85b968e.js";import"./sw-loader-93b4a816.js";import"./sw-number-field-9358ca15.js";import"./sw-text-field-20c87e51.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const s={title:"Components/Table and list/sw-pagination",component:p},q=s,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m("change-current-page")(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
