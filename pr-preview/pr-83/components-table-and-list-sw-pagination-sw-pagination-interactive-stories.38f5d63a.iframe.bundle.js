(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[56245],{"./src/components/table-and-list/sw-pagination/sw-pagination.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestManyPages:function(){return TestManyPages},TestOnePage:function(){return TestOnePage},TestPageChange:function(){return TestPageChange},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_jest__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_sw_pagination_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/table-and-list/sw-pagination/sw-pagination.vue"),_sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/table-and-list/sw-pagination/sw-pagination.stories.js"),flush_promises__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/flush-promises/index.js"),flush_promises__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(flush_promises__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default={..._sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Table and list/sw-pagination",component:_sw_pagination_vue__WEBPACK_IMPORTED_MODULE_1__.Z};const TestOnePage=_sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.bind();TestOnePage.storyName="Render with one page",TestOnePage.args={..._sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args,limit:100},TestOnePage.play=async()=>{const infoText=document.querySelector(".sw-pagination__info-text");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText).not.toBeNull(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText.innerText).toEqual("1-100 of 100")};const TestManyPages=_sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.bind();TestManyPages.storyName="Render with 100 page",TestManyPages.args={..._sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args,limit:1},TestManyPages.play=async()=>{const infoText=document.querySelector(".sw-pagination__info-text");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText).not.toBeNull(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText.innerText).toEqual("1-1 of 100")};const TestPageChange=_sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.bind();TestPageChange.storyName="Test page change",TestPageChange.args=_sw_pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args,TestPageChange.play=async()=>{document.querySelector(".sw-segmented-control__action-id-pagination-next").click(),await flush_promises__WEBPACK_IMPORTED_MODULE_3___default()();const infoText=document.querySelector(".sw-pagination__info-text");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText).not.toBeNull(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_0__.l)(infoText.innerText).toEqual("26-50 of 100")};const __namedExportsOrder=["TestOnePage","TestManyPages","TestPageChange"]},"./src/components/table-and-list/sw-pagination/sw-pagination.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _sw_pagination_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/table-and-list/sw-pagination/sw-pagination.vue");__webpack_exports__.default={title:"Components/Table and list/sw-pagination",component:_sw_pagination_vue__WEBPACK_IMPORTED_MODULE_0__.Z,argTypes:{"change-current-page":{action:"change-current-page",table:{category:"Events"}}}};const Default=((args,{argTypes:argTypes})=>({components:{SwPagination:_sw_pagination_vue__WEBPACK_IMPORTED_MODULE_0__.Z},props:Object.keys(argTypes),template:'<sw-pagination v-bind="$props" :current-page="page" @change-current-page="page = $event" />',data(){return{page:1}}})).bind();Default.args={totalItems:100,limit:25},Default.storyName="sw-pagination",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args, {\n  argTypes\n}) => ({\n  components: {\n    SwPagination\n  },\n  props: Object.keys(argTypes),\n  template: `<sw-pagination v-bind="$props" :current-page="page" @change-current-page="page = $event" />`,\n  data() {\n    return {\n      page: 1\n    };\n  }\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/flush-promises/index.js":function(module){var scheduler="function"==typeof setImmediate?setImmediate:setTimeout;module.exports=function flushPromises(){return new Promise((function(resolve){scheduler(resolve)}))}},"./src/components/navigation/sw-segmented-control/sw-segmented-control.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_segmented_control}});var sw_checkbox=__webpack_require__("./src/components/form/sw-checkbox/sw-checkbox.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_popover=__webpack_require__("./src/components/overlay/sw-popover/sw-popover.vue"),vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_segmented_control_sw_segmented_controlvue_type_script_lang_ts_=(0,vue_esm.aZ)({components:{"sw-checkbox":sw_checkbox.Z,"sw-icon":sw_icon.Z,"sw-popover":sw_popover.Z},props:{actions:{type:Array,required:!0},disableContext:{type:Boolean,required:!1,default:!1}},emits:[],setup(props){const segmentedControlClasses=(0,vue_esm.Fl)((()=>({"sw-segmented-control--disabled-context":props.disableContext}))),flatChildViews=childViews=>childViews?childViews.reduce(((acc,childView)=>childView.childViews?[...acc,childView,...flatChildViews(childView.childViews)]:[...acc,childView]),[]):[];return{getActionClass:action=>{const classes=[`sw-segmented-control__action-id-${action.id}`];return action.isPressed&&!action.hasCheckbox&&classes.push("sw-segmented-control__action--pressed"),action.isCritical&&classes.push("sw-segmented-control__action--critical"),action.disabled&&classes.push("sw-segmented-control__action--disabled"),action.minSquare&&classes.push("sw-segmented-control__action--min-square"),classes},handleClick:(action,toggleFloatingUi)=>{action.disabled||action.hasCheckbox||(action.popover&&toggleFloatingUi(),action.onClick&&action.onClick({}))},handleCheckboxChange:(action,checkboxValue)=>{action.disabled||action.onClick&&action.onClick({checkboxValue:checkboxValue})},segmentedControlClasses:segmentedControlClasses,flatChildViews:flatChildViews}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_segmented_control_sw_segmented_controlvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-segmented-control",class:_vm.segmentedControlClasses},[_vm._l(_vm.actions,(function(action,index){return["string"!=typeof action||_vm.disableContext?_vm._e():_c("div",{key:index,staticClass:"sw-segmented-control__divider"}),_vm._v(" "),"string"!=typeof action?_c("sw-popover",{key:action.id,attrs:{"child-views":action.popover&&action.popover.childViews,title:action.popover&&action.popover.title},scopedSlots:_vm._u([{key:"trigger",fn:function({toggleFloatingUi:toggleFloatingUi}){return[_c("button",{staticClass:"sw-segmented-control__action",class:_vm.getActionClass(action),attrs:{"aria-pressed":action.isPressed},on:{click:()=>_vm.handleClick(action,toggleFloatingUi)}},[action.iconName?_c("sw-icon",{staticClass:"sw-segmented-control__action-icon",attrs:{name:action.iconName}}):_vm._e(),_vm._v(" "),action.hasCheckbox?[_c("sw-checkbox",{attrs:{checked:action.checked,label:action.label},on:{change:event=>_vm.handleCheckboxChange(action,event)}})]:[_vm._t("label__"+action.id),_vm._v("\n\n            "+_vm._s(action.label)+"\n          ")],_vm._v(" "),action.options?_c("sw-icon",{staticClass:"sw-segmented-control__action-options-icon",attrs:{name:"regular-chevron-down-xs"}}):_vm._e(),_vm._v(" "),_vm._t("options__"+action.id)],2)]}},{key:"popover-items__base",fn:function({toggleFloatingUi:toggleFloatingUi,changeView:changeView}){return[_vm._t(action.id+"--popover-items__base",null,{toggleFloatingUi:toggleFloatingUi,changeView:changeView})]}},_vm._l(_vm.flatChildViews(action.popover&&action.popover.childViews),(function(childView){return{key:`popover-items__${childView.name}`,fn:function({toggleFloatingUi:toggleFloatingUi,changeView:changeView}){return[_vm._t(action.id+"--popover-items__"+childView.name,null,{toggleFloatingUi:toggleFloatingUi,changeView:changeView})]}}}))],null,!0)}):_vm._e()]}))],2)}),[],!1,null,null,null).exports;var sw_segmented_control=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sw-segmented-control",description:"",tags:{},props:[{name:"actions",type:{name:"SegmentedControlActionsProp"},required:!0},{name:"disableContext",description:"Activate to hide the padding around the controls.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],slots:[{name:"'label__' + action.id",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"'options__' + action.id",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"action.id + '--popover-items__base'",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"toggle-floating-ui",title:"binding"},{name:"change-view",title:"binding"}]},{name:"action.id + '--popover-items__' + childView.name",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"toggle-floating-ui",title:"binding"},{name:"change-view",title:"binding"}]}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-segmented-control/sw-segmented-control.vue"]}},"./src/components/table-and-list/sw-pagination/sw-pagination.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_pagination}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_segmented_control=__webpack_require__("./src/components/navigation/sw-segmented-control/sw-segmented-control.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_number_field=__webpack_require__("./src/components/form/sw-number-field/sw-number-field.vue"),sw_pagination_sw_paginationvue_type_script_lang_ts_=(0,vue_esm.aZ)({components:{"sw-segmented-control":sw_segmented_control.Z,"sw-icon":sw_icon.Z,"sw-number-field":sw_number_field.Z},props:{currentPage:{type:Number,required:!0},limit:{type:Number,required:!0},totalItems:{type:Number,required:!0}},i18n:{messages:{en:{"sw-pagination":{of:"of"}},de:{"sw-pagination":{of:"von"}}}},emits:["change-current-page"],setup(props,{emit:emit}){(0,vue_esm.YP)((()=>props.limit),(()=>{emit("change-current-page",1)}));const firstVisibleItemNumber=(0,vue_esm.Fl)((()=>(props.currentPage-1)*props.limit+1)),lastVisibleItemNumber=(0,vue_esm.Fl)((()=>{const lastItemNumberWithLimitOnly=props.limit*props.currentPage;return lastItemNumberWithLimitOnly>props.totalItems?props.totalItems:lastItemNumberWithLimitOnly})),totalPages=(0,vue_esm.Fl)((()=>Math.ceil(props.totalItems/props.limit))),previousPageIsPossible=(0,vue_esm.Fl)((()=>props.currentPage>1)),nextPageIsPossible=(0,vue_esm.Fl)((()=>props.currentPage<totalPages.value)),segmentedControlActions=(0,vue_esm.Fl)((()=>[{id:"pagination-first",onClick:()=>emit("change-current-page",1),disabled:!previousPageIsPossible.value,minSquare:!0},{id:"pagination-previous",onClick:()=>emit("change-current-page",props.currentPage-1),disabled:!previousPageIsPossible.value,minSquare:!0},{id:"pagination-current",disabled:totalPages.value<=1,minSquare:!0},{id:"pagination-next",onClick:()=>emit("change-current-page",props.currentPage+1),disabled:!nextPageIsPossible.value,minSquare:!0},{id:"pagination-last",onClick:()=>emit("change-current-page",totalPages.value),disabled:!nextPageIsPossible.value,minSquare:!0}]));return{firstVisibleItemNumber:firstVisibleItemNumber,lastVisibleItemNumber:lastVisibleItemNumber,totalPages:totalPages,segmentedControlActions:segmentedControlActions}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_pagination_sw_paginationvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-pagination"},[_c("span",{staticClass:"sw-pagination__info-text"},[_vm._v("\n    "+_vm._s(_vm.firstVisibleItemNumber)+"-"+_vm._s(_vm.lastVisibleItemNumber)+" "+_vm._s(_vm.$t("sw-pagination.of"))+" "+_vm._s(_vm.totalItems)+"\n  ")]),_vm._v(" "),_c("sw-segmented-control",{attrs:{"disable-context":"",actions:_vm.segmentedControlActions}},[_c("sw-icon",{attrs:{slot:"label__pagination-first",name:"solid-double-chevron-left-xxs"},slot:"label__pagination-first"}),_vm._v(" "),_c("sw-icon",{attrs:{slot:"label__pagination-previous",name:"solid-chevron-left-xs"},slot:"label__pagination-previous"}),_vm._v(" "),_c("sw-number-field",{staticClass:"sw-pagination__current-input",attrs:{slot:"label__pagination-current",value:_vm.currentPage,min:1,max:_vm.totalPages,"number-type":"int"},on:{change:event=>_vm.$emit("change-current-page",event)},slot:"label__pagination-current"}),_vm._v(" "),_c("sw-icon",{attrs:{slot:"label__pagination-next",name:"solid-chevron-right-xs"},slot:"label__pagination-next"}),_vm._v(" "),_c("sw-icon",{attrs:{slot:"label__pagination-last",name:"solid-double-chevron-right-xxs"},slot:"label__pagination-last"})],1)],1)}),[],!1,null,null,null).exports;var sw_pagination=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sw-pagination",description:"",tags:{},props:[{name:"currentPage",type:{name:"number"},required:!0},{name:"limit",type:{name:"number"},required:!0},{name:"totalItems",type:{name:"number"},required:!0}],events:[{name:"change-current-page"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/table-and-list/sw-pagination/sw-pagination.vue"]}},"?4f7e":function(){}}]);