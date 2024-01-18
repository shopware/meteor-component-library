import{S as l}from"./sw-segmented-control-3d97e06b.js";import{S as r}from"./sw-popover-e725f062.js";import"./sw-checkbox-a4574701.js";import"./vue.esm-bundler-651c6785.js";import"./sw-icon-9e700c16.js";import"./iframe-1c9f7e38.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-70842e68.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-a8bd753a.js";import"./sw-switch-ff78698d.js";import"./sw-button-8c07115b.js";import"./sw-loader-606e11d6.js";const s={title:"Components/Navigation/sw-segmented-control",component:l,render:t=>({components:{SwSegmentedControl:l,SwPopoverItem:r},template:`
      <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">
        <sw-segmented-control
            v-bind="args"
        >
          {{ $props.default }}

          <template #labelF--popover-items__base="{ toggleFloatingUi, changeView }">
            <sw-popover-item
                label="Go to second level"
                :on-label-click="() => changeView('secondLevel')"
            />
          </template>

          <template #labelF--popover-items__secondLevel="{ toggleFloatingUi, changeView }">
            <sw-popover-item
                label="Go to third level"
                :on-label-click="() => changeView('thirdLevel')"
            />
          </template>

          <template #labelF--popover-items__thirdLevel="{ toggleFloatingUi, changeView }">
            <sw-popover-item
                label="Go back to first level"
                :on-label-click="() => changeView('base')"
            />
          </template>
        </sw-segmented-control>
      </div>`,setup:()=>({args:t})}),argTypes:{},args:{disableContext:!0,actions:[{id:"lableStart",label:"X products selected",onClick:({checkboxValue:t})=>console.log("Checked Label E",t),isPressed:!0,hasCheckbox:!0},"divider",{id:"labelA",label:"Label A",onClick:()=>alert("Label A"),iconName:"regular-tag",disabled:!0},"divider",{id:"labelB",label:"Label B",onClick:()=>alert("Label B"),isPressed:!0},{id:"labelC",label:"Label C",onClick:()=>alert("Label C"),isPressed:!1,isCritical:!0},{id:"labelD",label:"Label D",onClick:()=>alert("Label D"),isPressed:!0,isCritical:!0},{id:"labelF",label:"Label F",iconName:"regular-calendar",options:!0,popover:{title:"First level",childViews:[{name:"secondLevel",title:"Second level",childViews:[{name:"thirdLevel",title:"Third level"}]}]}}]}},F=s,e={name:"sw-segmented-control"};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'sw-segmented-control'
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const f=["DefaultStory"];export{e as DefaultStory,f as __namedExportsOrder,F as default};
