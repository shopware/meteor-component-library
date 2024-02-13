import{S as p}from"./sw-pagination-894b39da.js";import{f as m,a as s}from"./index-9accb58d.js";import{b as g}from"./vue.esm-bundler-f31f98e0.js";import"./sw-segmented-control-706f9d23.js";import"./sw-checkbox-3b3e79b2.js";import"./sw-icon-2d123164.js";import"./iframe-e96dc8d7.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-b4db0daf.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-d1b36176.js";import"./sw-popover-6e97b05f.js";import"./sw-switch-28b0eb29.js";import"./sw-button-963df9ec.js";import"./sw-loader-e16771a0.js";import"./sw-number-field-f723da5d.js";import"./sw-text-field-fee61a03.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const c={title:"Components/Table and list/sw-pagination",component:p},z=c,n={render:i=>({components:{SwPagination:p},setup:()=>{const t=g(1);return{page:t,onChangeCurrentPage:e=>{m(s("change-current-page"))(e),t.value=e},args:i}},template:'<sw-pagination v-bind="args" :current-page="page" @change-current-page="onChangeCurrentPage" />'}),args:{totalItems:100,limit:25},name:"sw-pagination"};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
