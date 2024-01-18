import{S as a}from"./sw-select-70103d95.js";import"./vue.esm-bundler-651c6785.js";import"./sw-base-field-b77ca833.js";import"./tooltip.directive-5026512a.js";import"./sw-icon-682d28c1.js";import"./iframe-4e8d603d.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-loader-606e11d6.js";import"./sw-field-error-eb878b94.js";import"./sw-popover-deprecated-7463b147.js";import"./_baseGetTag-22b9c805.js";import"./isObjectLike-e68f0fe0.js";import"./sw-color-badge-009d7ca8.js";import"./sw-button-8c07115b.js";import"./_MapCache-d7e1d62d.js";import"./isFunction-d9767ad3.js";const s={title:"Components/Form/sw-select",component:a,render:o=>({template:`
      <div>
        <sw-select
          v-bind="args"
          v-model="currentValue"
          :label="label"
          @change="change"
          @item-add="itemAdd"
          @item-remove="itemRemove"
          @paginate="paginate"
          @display-values-expand="displayValuesExpand"
          @search-term-change="searchTermChange"
          @inheritance-restore="inheritanceRestoreWrapper"
          @inheritance-remove="inheritanceRemoveWrapper"
        >
          <template
              v-if="$props.prefix"
            #prefix
          >
            {{ prefix }}
          </template>
          <template
              v-if="$props.suffix"
              #suffix
          >
            {{ suffix }}
          </template>
          <template
              v-if="$props.hint"
              #hint
          >
            {{ hint }}
          </template>
          <template
              v-if="$props.beforeItemList"
              #before-item-list
          >
            {{ $props.beforeItemList }}
          </template>
          <template
              v-if="$props.selectionLabelProperty"
              #selection-label-property
          >
            {{ $props.selectionLabelProperty }}
          </template>
          <template
              v-if="$props.resultItem"
              #result-item
          >
            {{ $props.resultItem }}
          </template>
          <template
              v-if="$props.resultLabelProperty"
              #result-label-property
          >
            {{ $props.resultLabelProperty }}
          </template>
          <template
              v-if="$props.afterItemList"
              #after-item-list
          >
            {{ $props.afterItemList }}
          </template>
        </sw-select>
        <h4 style="display: none;">hidden</h4>
      </div>
    `,components:{SwSelect:a},data(){return{currentValue:[]}},watch:{value(e){this.currentValue!==e&&(this.currentValue=e)}},created(){this.currentValue=this.value},methods:{inheritanceRemoveWrapper(e){this.inheritanceRemove(...e),this.isInherited=!1},inheritanceRestoreWrapper(e){this.inheritanceRestore(...e),this.isInherited=!0}},setup:()=>({args:o})}),args:{label:"Select",value:"b",options:[{id:1,label:"Option A",value:"a"},{id:2,label:"Option B",value:"b"},{id:3,label:"Option C",value:"c"},{id:4,label:"Option D",value:"d"},{id:5,label:"Option E",value:"e"},{id:6,label:"Option F",value:"f"},{id:7,label:"Option FF",value:"ff"},{id:8,label:"Option long text",value:"Longer value text"}]},argTypes:{change:{action:"change",table:{category:"Events"}},itemAdd:{action:"item-add",table:{category:"Events"}},itemRemove:{action:"item-remove",table:{category:"Events"}},searchTermChange:{action:"search-term-change",table:{category:"Events"}},paginate:{action:"paginate",table:{category:"Events"}},displayValuesExpand:{action:"display-values-expand",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},inheritanceRestore:{action:"inheritance-restore",table:{category:"Events"}},prefix:{control:{type:"text"},table:{category:"Slots"}},suffix:{control:{type:"text"},table:{category:"Slots"}},hint:{control:{type:"text"},table:{category:"Slots"}},beforeItemList:{control:{type:"text"},table:{category:"Slots"}},selectionLabelProperty:{control:{type:"text"},table:{category:"Slots"}},resultItem:{control:{type:"text"},table:{category:"Slots"}},resultLabelProperty:{control:{type:"text"},table:{category:"Slots"}},afterItemList:{control:{type:"text"},table:{category:"Slots"}},"after-item-list":{table:{disable:!0}},"before-item-list":{table:{disable:!0}},"selection-label-property":{table:{disable:!0}},"result-item":{table:{disable:!0}},"result-label-property":{table:{disable:!0}},"item-add":{table:{disable:!0}},"item-remove":{table:{disable:!0}},"search-term-change":{table:{disable:!0}},"inheritance-remove":{table:{disable:!0}},"inheritance-restore":{table:{disable:!0}},"display-values-expand":{table:{disable:!0}},"v-model":{table:{disable:!0}}}},O=s,t={name:"sw-select"};var r,l,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'sw-select'
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["DefaultStory"];export{t as DefaultStory,w as __namedExportsOrder,O as default};
