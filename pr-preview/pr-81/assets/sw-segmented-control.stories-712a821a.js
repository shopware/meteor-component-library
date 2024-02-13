import{S as l}from"./sw-segmented-control-c1599c1b.js";import{S as r}from"./sw-popover-4459090d.js";import"./sw-checkbox-69387772.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-icon-c6ca0f62.js";import"./iframe-ee8c1246.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-b1a18dda.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-4949c39a.js";import"./sw-switch-6c08b43c.js";import"./sw-button-963df9ec.js";import"./sw-loader-e16771a0.js";const s={title:"Components/Navigation/sw-segmented-control",component:l,render:t=>({components:{SwSegmentedControl:l,SwPopoverItem:r},template:`
      <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">
        <sw-segmented-control
            v-bind="args"
        >
          {{ args.default }}

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
      </div>`,setup:()=>({args:t})}),args:{disableContext:!0,actions:[{id:"labelStart",label:"X products selected",onClick:({checkboxValue:t})=>console.log("Checked Label E",t),isPressed:!0,hasCheckbox:!0},"divider",{id:"labelA",label:"Label A",onClick:()=>alert("Label A"),iconName:"regular-tag",disabled:!0},"divider",{id:"labelB",label:"Label B",onClick:()=>alert("Label B"),isPressed:!0},{id:"labelC",label:"Label C",onClick:()=>alert("Label C"),isPressed:!1,isCritical:!0},{id:"labelD",label:"Label D",onClick:()=>alert("Label D"),isPressed:!0,isCritical:!0},{id:"labelF",label:"Label F",iconName:"regular-calendar",options:!0,popover:{title:"First level",childViews:[{name:"secondLevel",title:"Second level",childViews:[{name:"thirdLevel",title:"Third level"}]}]}}]}},f=s,e={name:"sw-segmented-control"};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'sw-segmented-control'
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const V=["DefaultStory"];export{e as DefaultStory,V as __namedExportsOrder,f as default};
