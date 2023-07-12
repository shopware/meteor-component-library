(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[31027],{"./src/components/form/sw-textarea/sw-textarea.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestInputValue:function(){return TestInputValue},TestLabel:function(){return TestLabel},TestPlaceholder:function(){return TestPlaceholder},VisualTestDisabled:function(){return VisualTestDisabled},VisualTestError:function(){return VisualTestError},VisualTestHint:function(){return VisualTestHint},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_sw_textarea_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/sw-textarea/sw-textarea.vue"),_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/form/sw-textarea/sw-textarea.stories.js");__webpack_exports__.default={..._sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.default,title:"Interaction Tests/Form/sw-textarea",component:_sw_textarea_vue__WEBPACK_IMPORTED_MODULE_2__.Z};const TestInputValue=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();TestInputValue.storyName="Should keep input value",TestInputValue.play=async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"Shopware"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByText("hidden")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe("Shopware"),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith("Shopware")};const VisualTestHint=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();VisualTestHint.storyName="Should display hint",VisualTestHint.args={hint:"hint"},VisualTestHint.play=async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.hint)).toBeDefined()};const TestLabel=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();TestLabel.storyName="Should display label",TestLabel.args={label:"label"},TestLabel.play=async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.label)).toBeDefined()};const VisualTestDisabled=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();VisualTestDisabled.storyName="Should disable",VisualTestDisabled.args={disabled:!0,value:"Shopware"},VisualTestDisabled.play=async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"1337"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe("Shopware")};const TestPlaceholder=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();TestPlaceholder.storyName="Should display placeholder",TestPlaceholder.args={placeholder:"Placeholder"},TestPlaceholder.play=async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByPlaceholderText(args.placeholder)).toBeDefined()};const VisualTestError=_sw_textarea_stories__WEBPACK_IMPORTED_MODULE_3__.Default.bind();VisualTestError.storyName="Should display error",VisualTestError.args={error:{code:500,detail:"Error while saving!"}},VisualTestError.play=async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.error.detail)).toBeDefined()};const __namedExportsOrder=["TestInputValue","VisualTestHint","TestLabel","VisualTestDisabled","TestPlaceholder","VisualTestError"]},"?4f7e":function(){}}]);