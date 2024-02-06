(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[56144,82988],{"./src/components/navigation/sw-segmented-control/sw-segmented-control.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VisualTestRenderSegmentedControl:function(){return VisualTestRenderSegmentedControl},VisualTestRenderSegmentedControlWithContext:function(){return VisualTestRenderSegmentedControlWithContext},VisualTestRenderSegmentedControlWithPopoverBase:function(){return VisualTestRenderSegmentedControlWithPopoverBase},VisualTestRenderSegmentedControlWithPopoverSecondLevel:function(){return VisualTestRenderSegmentedControlWithPopoverSecondLevel},__namedExportsOrder:function(){return __namedExportsOrder}});var _sw_segmented_control_stories__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/navigation/sw-segmented-control/sw-segmented-control.stories.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js");__webpack_exports__.default={..._sw_segmented_control_stories__WEBPACK_IMPORTED_MODULE_0__.default,title:"Interaction Tests/Navigation/sw-segmented-control"};const VisualTestRenderSegmentedControl={name:"Render segmented controls"},VisualTestRenderSegmentedControlWithContext={name:"Render segmented controls with context",args:{disableContext:!1}},VisualTestRenderSegmentedControlWithPopoverBase={name:"Render segmented controls with popover base",play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.Cu)(canvasElement),button=await canvas.getByText("Label F");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.gr.click(button);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.Cu)(document.getElementsByClassName("sw-popover__content")[0]),firstLevel=await popover.getByText("First level");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_2__.c)(firstLevel).toBeInTheDocument()}},VisualTestRenderSegmentedControlWithPopoverSecondLevel={name:"Render segmented controls with popover second level",play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.Cu)(canvasElement),button=await canvas.getByText("Label F");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.gr.click(button);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.Cu)(document.getElementsByClassName("sw-popover__content")[0]),goToSecondLevel=await popover.getByText("Go to second level");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_1__.gr.click(goToSecondLevel);const secondLevel=await popover.getByText("Second level");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_2__.c)(secondLevel).toBeInTheDocument();const goToThirdLevel=await popover.getByText("Go to third level");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_2__.c)(goToThirdLevel).toBeInTheDocument()}};VisualTestRenderSegmentedControl.parameters={...VisualTestRenderSegmentedControl.parameters,docs:{...VisualTestRenderSegmentedControl.parameters?.docs,source:{originalSource:"{\n  name: 'Render segmented controls'\n}",...VisualTestRenderSegmentedControl.parameters?.docs?.source}}},VisualTestRenderSegmentedControlWithContext.parameters={...VisualTestRenderSegmentedControlWithContext.parameters,docs:{...VisualTestRenderSegmentedControlWithContext.parameters?.docs,source:{originalSource:"{\n  name: 'Render segmented controls with context',\n  args: {\n    disableContext: false\n  }\n}",...VisualTestRenderSegmentedControlWithContext.parameters?.docs?.source}}},VisualTestRenderSegmentedControlWithPopoverBase.parameters={...VisualTestRenderSegmentedControlWithPopoverBase.parameters,docs:{...VisualTestRenderSegmentedControlWithPopoverBase.parameters?.docs,source:{originalSource:"{\n  name: 'Render segmented controls with popover base',\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = await canvas.getByText('Label F');\n    await userEvent.click(button);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);\n    const firstLevel = await popover.getByText('First level');\n    expect(firstLevel).toBeInTheDocument();\n  }\n}",...VisualTestRenderSegmentedControlWithPopoverBase.parameters?.docs?.source}}},VisualTestRenderSegmentedControlWithPopoverSecondLevel.parameters={...VisualTestRenderSegmentedControlWithPopoverSecondLevel.parameters,docs:{...VisualTestRenderSegmentedControlWithPopoverSecondLevel.parameters?.docs,source:{originalSource:"{\n  name: 'Render segmented controls with popover second level',\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = await canvas.getByText('Label F');\n    await userEvent.click(button);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover__content')[0]);\n    const goToSecondLevel = await popover.getByText('Go to second level');\n    await userEvent.click(goToSecondLevel);\n    const secondLevel = await popover.getByText('Second level');\n    expect(secondLevel).toBeInTheDocument();\n    const goToThirdLevel = await popover.getByText('Go to third level');\n    expect(goToThirdLevel).toBeInTheDocument();\n  }\n}",...VisualTestRenderSegmentedControlWithPopoverSecondLevel.parameters?.docs?.source}}};const __namedExportsOrder=["VisualTestRenderSegmentedControl","VisualTestRenderSegmentedControlWithContext","VisualTestRenderSegmentedControlWithPopoverBase","VisualTestRenderSegmentedControlWithPopoverSecondLevel"]},"./src/components/navigation/sw-segmented-control/sw-segmented-control.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},defaultStory:function(){return defaultStory}});var _sw_segmented_control_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/navigation/sw-segmented-control/sw-segmented-control.vue"),_overlay_sw_popover_item_sw_popover_item_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/overlay/sw-popover-item/sw-popover-item.vue");const meta={title:"Components/Navigation/sw-segmented-control",component:_sw_segmented_control_vue__WEBPACK_IMPORTED_MODULE_0__.c,render:(args,{argTypes:argTypes})=>({components:{SwSegmentedControl:_sw_segmented_control_vue__WEBPACK_IMPORTED_MODULE_0__.c,SwPopoverItem:_overlay_sw_popover_item_sw_popover_item_vue__WEBPACK_IMPORTED_MODULE_1__.c},props:Object.keys(argTypes),template:'\n      <div style="max-width: 1000px; max-height: 400px; height: 500px; margin: 0 auto;">\n        <sw-segmented-control\n            v-bind="$props"\n        >\n          {{ $props.default }}\n\n          <template #labelF--popover-items__base="{ toggleFloatingUi, changeView }">\n            <sw-popover-item\n                label="Go to second level"\n                :on-label-click="() => changeView(\'secondLevel\')"\n            />\n          </template>\n\n          <template #labelF--popover-items__secondLevel="{ toggleFloatingUi, changeView }">\n            <sw-popover-item\n                label="Go to third level"\n                :on-label-click="() => changeView(\'thirdLevel\')"\n            />\n          </template>\n\n          <template #labelF--popover-items__thirdLevel="{ toggleFloatingUi, changeView }">\n            <sw-popover-item\n                label="Go back to first level"\n                :on-label-click="() => changeView(\'base\')"\n            />\n          </template>\n        </sw-segmented-control>\n      </div>'}),argTypes:{},args:{disableContext:!0,actions:[{id:"lableStart",label:"X products selected",onClick:({checkboxValue:checkboxValue})=>console.log("Checked Label E",checkboxValue),isPressed:!0,hasCheckbox:!0},"divider",{id:"labelA",label:"Label A",onClick:()=>alert("Label A"),iconName:"regular-tag",disabled:!0},"divider",{id:"labelB",label:"Label B",onClick:()=>alert("Label B"),isPressed:!0},{id:"labelC",label:"Label C",onClick:()=>alert("Label C"),isPressed:!1,isCritical:!0},{id:"labelD",label:"Label D",onClick:()=>alert("Label D"),isPressed:!0,isCritical:!0},{id:"labelF",label:"Label F",iconName:"regular-calendar",options:!0,popover:{title:"First level",childViews:[{name:"secondLevel",title:"Second level",childViews:[{name:"thirdLevel",title:"Third level"}]}]}}]}};__webpack_exports__.default=meta;const defaultStory={name:"sw-segmented-control"};defaultStory.parameters={...defaultStory.parameters,docs:{...defaultStory.parameters?.docs,source:{originalSource:"{\n  name: 'sw-segmented-control'\n}",...defaultStory.parameters?.docs?.source}}};const __namedExportsOrder=["defaultStory"]},"./node_modules/@storybook/instrumenter/dist sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/navigation/sw-segmented-control/sw-segmented-control.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return sw_segmented_control}});var sw_checkbox=__webpack_require__("./src/components/form/sw-checkbox/sw-checkbox.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_popover=__webpack_require__("./src/components/overlay/sw-popover/sw-popover.vue"),vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_segmented_control_sw_segmented_controlvue_type_script_lang_ts=(0,vue_esm._M)({components:{"sw-checkbox":sw_checkbox.c,"sw-icon":sw_icon.c,"sw-popover":sw_popover.c},props:{actions:{type:Array,required:!0},disableContext:{type:Boolean,required:!1,default:!1}},emits:[],setup(props){const segmentedControlClasses=(0,vue_esm.S6)((()=>({"sw-segmented-control--disabled-context":props.disableContext}))),flatChildViews=childViews=>childViews?childViews.reduce(((acc,childView)=>childView.childViews?[...acc,childView,...flatChildViews(childView.childViews)]:[...acc,childView]),[]):[];return{getActionClass:action=>{const classes=[`sw-segmented-control__action-id-${action.id}`];return action.isPressed&&!action.hasCheckbox&&classes.push("sw-segmented-control__action--pressed"),action.isCritical&&classes.push("sw-segmented-control__action--critical"),action.disabled&&classes.push("sw-segmented-control__action--disabled"),action.minSquare&&classes.push("sw-segmented-control__action--min-square"),classes},handleClick:(action,toggleFloatingUi)=>{action.disabled||action.hasCheckbox||(action.popover&&toggleFloatingUi(),action.onClick&&action.onClick({}))},handleCheckboxChange:(action,checkboxValue)=>{action.disabled||action.onClick&&action.onClick({checkboxValue:checkboxValue})},segmentedControlClasses:segmentedControlClasses,flatChildViews:flatChildViews}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_segmented_control_sw_segmented_controlvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-segmented-control",class:_vm.segmentedControlClasses},[_vm._l(_vm.actions,(function(action,index){return["string"!=typeof action||_vm.disableContext?_vm._e():_c("div",{key:index,staticClass:"sw-segmented-control__divider"}),_vm._v(" "),"string"!=typeof action?_c("sw-popover",{key:action.id,attrs:{"child-views":action.popover&&action.popover.childViews,title:action.popover&&action.popover.title},scopedSlots:_vm._u([{key:"trigger",fn:function({toggleFloatingUi:toggleFloatingUi}){return[_c("button",{staticClass:"sw-segmented-control__action",class:_vm.getActionClass(action),attrs:{"aria-pressed":action.isPressed},on:{click:()=>_vm.handleClick(action,toggleFloatingUi)}},[action.iconName?_c("sw-icon",{staticClass:"sw-segmented-control__action-icon",attrs:{name:action.iconName}}):_vm._e(),_vm._v(" "),action.hasCheckbox?[_c("sw-checkbox",{attrs:{checked:action.checked,label:action.label},on:{change:event=>_vm.handleCheckboxChange(action,event)}})]:[_vm._t("label__"+action.id),_vm._v("\n\n            "+_vm._s(action.label)+"\n          ")],_vm._v(" "),action.options?_c("sw-icon",{staticClass:"sw-segmented-control__action-options-icon",attrs:{name:"regular-chevron-down-xs"}}):_vm._e(),_vm._v(" "),_vm._t("options__"+action.id)],2)]}},{key:"popover-items__base",fn:function({toggleFloatingUi:toggleFloatingUi,changeView:changeView}){return[_vm._t(action.id+"--popover-items__base",null,{toggleFloatingUi:toggleFloatingUi,changeView:changeView})]}},_vm._l(_vm.flatChildViews(action.popover&&action.popover.childViews),(function(childView){return{key:`popover-items__${childView.name}`,fn:function({toggleFloatingUi:toggleFloatingUi,changeView:changeView}){return[_vm._t(action.id+"--popover-items__"+childView.name,null,{toggleFloatingUi:toggleFloatingUi,changeView:changeView})]}}}))],null,!0)}):_vm._e()]}))],2)}),[],!1,null,null,null).exports;var sw_segmented_control=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sw-segmented-control",description:"",tags:{},props:[{name:"actions",type:{name:"SegmentedControlActionsProp"},required:!0},{name:"disableContext",description:"Activate to hide the padding around the controls.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],slots:[{name:"'label__' + action.id",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"'options__' + action.id",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"action.id + '--popover-items__base'",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"toggle-floating-ui",title:"binding"},{name:"change-view",title:"binding"}]},{name:"action.id + '--popover-items__' + childView.name",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"toggle-floating-ui",title:"binding"},{name:"change-view",title:"binding"}]}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-segmented-control/sw-segmented-control.vue"]}},"?4f7e":function(){}}]);