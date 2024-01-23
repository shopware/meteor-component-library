import{a as n,S as h,b}from"./sw-popover-fd8d5d09.js";import{S as d}from"./sw-popover-item-result-86ba8206.js";import{S as w}from"./sw-button-8c07115b.js";import{d as g}from"./vue.esm-bundler-651c6785.js";import"./sw-checkbox-50570736.js";import"./sw-icon-2d70ae29.js";import"./iframe-571af467.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sw-base-field-dcc4b307.js";import"./tooltip.directive-5026512a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-field-error-b7a9057b.js";import"./sw-switch-73dea669.js";import"./sw-search-7a6619a0.js";import"./isFunction-97e00978.js";import"./_baseGetTag-22b9c805.js";import"./sw-loader-606e11d6.js";const U={title:"Components/Overlay/sw-popover",component:n,argTypes:{"go-back":{action:"go-back",table:{disable:!0}},goBack:{action:"go-back",table:{category:"Events"}},"click-options":{table:{disable:!0}},clickOptions:{action:"click-options",table:{category:"Events"}}},args:{title:"Popover example",disableFloat:!1,childViews:[{name:"columnOrder",title:"Columns"},{name:"complex",title:"Complex example",childViews:[{name:"simple",childViews:[{name:"child_of_simple"}]}]}]},render:u=>g({components:{SwPopover:n,SwPopoverItem:h,SwPopoverItemResult:d,SwFloatingUi:b,SwButton:w},data(){return{itemVisible:!0,itemSwitchValue:!1,columnGroups:[{id:"visible",label:"Shown in table",actionLabel:"Hide all"},{id:"hidden",label:"Hidden in table",actionLabel:"Show all"}],columnOrderOptions:[{id:"name",label:"Name",position:0,isVisible:!0,parentGroup:"visible",isSortable:!1,isHidable:!1},{id:"manufacturer",label:"Manufacturer",position:1,isVisible:!0,parentGroup:"visible",isSortable:!0,isHidable:!0},{id:"active",label:"Active",position:2,isVisible:!0,parentGroup:"visible",isSortable:!0,isHidable:!0},{id:"price",label:"Price",position:3,isVisible:!0,parentGroup:"visible",isSortable:!0,isHidable:!0},{id:"stock",label:"Stock",position:4,isVisible:!1,parentGroup:"hidden",isSortable:!0,isHidable:!0},{id:"available",label:"Available",position:5,isVisible:!1,parentGroup:"hidden",isSortable:!0,isHidable:!0}],numberedColumn:!1,showStripes:!1,showOutlines:!1,frameOutlines:!1,openContentInPeekMode:!1}},watch:{},computed:{console(){return console}},methods:{onColumnChangeVisibility(o){const e=this.columnOrderOptions.find(r=>r.id===o);e&&(e.isVisible=!e.isVisible,e.parentGroup=e.isVisible?"visible":"hidden")},onColumnClickGroupAction(o){this.columnOrderOptions.forEach(e=>{o==="visible"&&(e.isVisible=!1,e.parentGroup="hidden"),o==="hidden"&&(e.isVisible=!0,e.parentGroup="visible")})},onColumnChangeOrder({itemId:o,dropZone:e,dropId:r}){const a=this.columnOrderOptions.find(i=>i.id===o),t=this.columnOrderOptions.find(i=>i.id===r);a&&t&&(a.parentGroup=t.parentGroup,a.isVisible=t.isVisible,this.columnOrderOptions=[...this.columnOrderOptions].sort((i,s)=>i.position-s.position).sort((i,s)=>s.id===o?e==="after"?i.position<=t.position?-1:1:i.position<t.position?-1:1:i.id===o?e==="after"?s.position>t.position?-1:1:s.position>=t.position?-1:1:0).map((i,s)=>({...i,position:s*100})))}},template:`
      <div style="max-width: 1000px; max-height: 350px; height: 350px; margin: 0 auto;">
        <sw-popover v-bind="args">
          <template #trigger="{ toggleFloatingUi }">
            <sw-button @click.stop="toggleFloatingUi">Toggle popover</sw-button>
          </template>

          {{ $props.default}}

          <template #popover-items__base="{ changeView }">
            <sw-popover-item
                label="Columns"
                showOptions
                :onLabelClick="() => changeView('columnOrder')"
                @click-options="() => changeView('columnOrder')"
                :optionsCount="5"
            />

            <sw-popover-item
                label="Numbered column"
                icon="solid-hashtag"
                showSwitch
                border-top
                :switchValue="numberedColumn"
                @change-switch="(switchValue) => numberedColumn = switchValue"
            />

            <sw-popover-item
                label="Show stripes"
                icon="solid-bars"
                showSwitch
                :switchValue="showStripes"
                @change-switch="(switchValue) => showStripes = switchValue"
            />

            <sw-popover-item
                label="Show outlines"
                icon="solid-grip-lines"
                showSwitch
                :switchValue="showOutlines"
                @change-switch="(switchValue) => showOutlines = switchValue"
            />

            <sw-popover-item
                label="Frame outlines"
                icon="solid-highlight"
                showSwitch
                metaCopy="Highlight column outlines on mouse hover."
                border-bottom
                :switchValue="frameOutlines"
                @change-switch="(switchValue) => frameOutlines = switchValue"
            />

            <sw-popover-item
                label="Open content in peek mode"
                icon="solid-sidebar-overlay"
                showSwitch
                metaCopy="Open content on the side. Keeps the view behind interactive."
                border-bottom
                :switchValue="openContentInPeekMode"
                @change-switch="(switchValue) => openContentInPeekMode = switchValue"
            />

            <sw-popover-item
                label="Complex popover items"
                border-bottom
                showOptions
                @click-options="() => changeView('complex')"
            />

            <sw-popover-item
                type="critical"
                label="Reset all changes"
                icon="solid-undo"
                :onLabelClick="() => console.log('Clicked on reset all changes')"
            />

          </template>

          <template #popover-items__complex="{ changeView }">
            <sw-popover-item
                label="Item with all features enabled and a long label"
                showCheckbox
                icon="solid-sidebar-overlay"
                metaCopy="Features over features"
                contextualDetail="Z->A"
                shortcut="Ctrl + O"
                showVisibility
                :visible="itemVisible"
                @change-visibility="(visibility) => itemVisible = visibility"
                showSwitch
                :switchValue="itemSwitchValue"
                @change-switch="(switchValue) => itemSwitchValue = switchValue"
                showOptions
                @click-options="() => changeView('simple')"
                :optionsCount="17"
            />
          </template>

          <template #popover-items__simple>
            <sw-popover-item
                label="A simple item"
                icon="solid-sidebar-overlay"
            />
          </template>

          <template #popover-items__columnOrder>
            <sw-popover-item-result
                :groups="columnGroups"
                :options="columnOrderOptions"
                draggable
                hidable
                @change-visibility="onColumnChangeVisibility"
                @click-group-action="onColumnClickGroupAction"
                @change-order="onColumnChangeOrder"
            />
          </template>
        </sw-popover>
      </div>
    `,setup:()=>({args:u})})},l={name:"sw-popover"};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'sw-popover'
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["DefaultStory"];export{l as DefaultStory,N as __namedExportsOrder,U as default};
