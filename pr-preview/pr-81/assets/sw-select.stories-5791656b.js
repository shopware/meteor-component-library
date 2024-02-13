import{S as r}from"./sw-select-63650600.js";import"./vue.esm-bundler-f31f98e0.js";import"./sw-base-field-b1a18dda.js";import"./tooltip.directive-6ca7427e.js";import"./sw-icon-c6ca0f62.js";import"./iframe-ee8c1246.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./isObject-32699ff3.js";import"./sw-loader-e16771a0.js";import"./sw-field-error-4949c39a.js";import"./sw-popover-deprecated-671376bc.js";import"./sw-color-badge-f11cf031.js";import"./sw-button-963df9ec.js";import"./_MapCache-73175cc1.js";import"./isFunction-97e00978.js";import"./_baseGetTag-22b9c805.js";import"./debounce-6f06ec9c.js";import"./isObjectLike-e68f0fe0.js";const w={title:"Components/Form/sw-select",component:r,render:e=>({template:`
      <div>
        <sw-select
          v-bind="args"
          :value="currentValue"
          :label="args.label"
          @change="onChange"
          @item-add="args.itemAdd"
          @item-remove="args.itemRemove"
          @paginate="args.paginate"
          @display-values-expand="args.displayValuesExpand"
          @search-term-change="args.searchTermChange"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper"
        >
          <template
              v-if="args.prefix"
            #prefix
          >
            {{ args.prefix }}
          </template>
          <template
              v-if="args.suffix"
              #suffix
          >
            {{ args.suffix }}
          </template>
          <template
              v-if="args.hint"
              #hint
          >
            {{ args.hint }}
          </template>
          <template
              v-if="args.beforeItemList"
              #before-item-list
          >
            {{ args.beforeItemList }}
          </template>
          <template
              v-if="args.selectionLabelProperty"
              #selection-label-property
          >
            {{ args.selectionLabelProperty }}
          </template>
          <template
              v-if="args.resultItem"
              #result-item
          >
            {{ args.resultItem }}
          </template>
          <template
              v-if="args.resultLabelProperty"
              #result-label-property
          >
            {{ args.resultLabelProperty }}
          </template>
          <template
              v-if="args.afterItemList"
              #after-item-list
          >
            {{ args.afterItemList }}
          </template>
        </sw-select>
        <h4 style="display: none;">hidden</h4>
      </div>
    `,components:{SwSelect:r},data(){return{currentValue:[]}},watch:{"args.value"(t){this.currentValue!==t&&(this.currentValue=t)}},created(){this.currentValue=e.value},methods:{onChange(t){e.change(t),this.currentValue=t},inheritanceRemoveWrapper(){e.inheritanceRemove(),e.isInherited=!1},inheritanceRestoreWrapper(){e.inheritanceRestore(),e.isInherited=!0}},setup:()=>({args:e})}),args:{label:"Select",value:"b",options:[{id:1,label:"Option A",value:"a"},{id:2,label:"Option B",value:"b"},{id:3,label:"Option C",value:"c"},{id:4,label:"Option D",value:"d"},{id:5,label:"Option E",value:"e"},{id:6,label:"Option F",value:"f"},{id:7,label:"Option FF",value:"ff"},{id:8,label:"Option long text",value:"Longer value text"}]},argTypes:{change:{action:"change",table:{category:"Events"}},itemAdd:{action:"item-add",table:{category:"Events"}},itemRemove:{action:"item-remove",table:{category:"Events"}},searchTermChange:{action:"search-term-change",table:{category:"Events"}},paginate:{action:"paginate",table:{category:"Events"}},displayValuesExpand:{action:"display-values-expand",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},inheritanceRestore:{action:"inheritance-restore",table:{category:"Events"}},prefix:{control:{type:"text"},table:{category:"Slots"}},suffix:{control:{type:"text"},table:{category:"Slots"}},hint:{control:{type:"text"},table:{category:"Slots"}},beforeItemList:{control:{type:"text"},table:{category:"Slots"}},selectionLabelProperty:{control:{type:"text"},table:{category:"Slots"}},resultItem:{control:{type:"text"},table:{category:"Slots"}},resultLabelProperty:{control:{type:"text"},table:{category:"Slots"}},afterItemList:{control:{type:"text"},table:{category:"Slots"}},"after-item-list":{table:{disable:!0}},"before-item-list":{table:{disable:!0}},"selection-label-property":{table:{disable:!0}},"result-item":{table:{disable:!0}},"result-label-property":{table:{disable:!0}},"item-add":{table:{disable:!0}},"item-remove":{table:{disable:!0}},"search-term-change":{table:{disable:!0}},"inheritance-remove":{table:{disable:!0}},"inheritance-restore":{table:{disable:!0}},"display-values-expand":{table:{disable:!0}},"v-model":{table:{disable:!0}}}},a={name:"sw-select"};var l,i,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'sw-select'
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const C=["DefaultStory"];export{a as DefaultStory,C as __namedExportsOrder,w as default};