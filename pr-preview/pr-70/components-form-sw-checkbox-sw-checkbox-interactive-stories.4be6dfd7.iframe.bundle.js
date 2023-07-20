"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[45929],{"./src/components/form/sw-checkbox/sw-checkbox.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestLabel:function(){return TestLabel},VisualTestBordered:function(){return VisualTestBordered},VisualTestBorderedError:function(){return VisualTestBorderedError},VisualTestCheckable:function(){return VisualTestCheckable},VisualTestDisabled:function(){return VisualTestDisabled},VisualTestError:function(){return VisualTestError},VisualTestHelpText:function(){return VisualTestHelpText},VisualTestInherited:function(){return VisualTestInherited},VisualTestPartialChecked:function(){return VisualTestPartialChecked},VisualTestUncheckable:function(){return VisualTestUncheckable},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/_internal/test-helper.js"),_sw_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/sw-checkbox/sw-checkbox.stories.js");__webpack_exports__.default={..._sw_checkbox_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Form/sw-checkbox"};const TestLabel={name:"Should display label",args:{label:"label"},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.label)).toBeDefined()}},VisualTestCheckable={name:"Should be checkable",args:{label:"Checked"},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("checkbox")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(!0)}},VisualTestUncheckable={name:"Should be uncheckable",args:{label:"Unchecked",checked:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("checkbox")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!1),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(!1)}},VisualTestDisabled={name:"Should not change value when disabled",args:{label:"Disabled",disabled:!0,checked:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("checkbox")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).not.toHaveBeenCalled()}},VisualTestBordered={name:"Should be bordered",args:{label:"Bordered",bordered:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("checkbox")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(!0)}},VisualTestInherited={name:"Should trigger inheritance-remove event",args:{label:"Inherited",inheritedValue:!1},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByTestId("sw-inheritance-switch-icon")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.inheritanceRemove).toHaveBeenCalledWith(void 0)}},VisualTestError={name:"Error should be displayed",args:{label:"Error label",error:{detail:"Error message"}},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.error.detail)).toBeDefined()}},VisualTestBorderedError={name:"Bordered error should be displayed",args:{label:"Bordered error label",bordered:!0,checked:!0,error:{detail:"Error message"}},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.error.detail)).toBeDefined()}},VisualTestHelpText={name:"Help text should be displayed",args:{label:"Help text label",helpText:"Help text message"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!1),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByTestId("sw-help-text__icon")).toBeDefined(),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByTestId("sw-help-text__icon")),await(0,_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__.e)((()=>document.querySelector(".sw-tooltip")))}},VisualTestPartialChecked={name:"Partial checked should be displayed",args:{label:"Partial checked label",partial:!0,checked:!0},play:({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("checkbox").checked).toBe(!0)}};TestLabel.parameters={...TestLabel.parameters,docs:{...TestLabel.parameters?.docs,source:{originalSource:"{\n  name: 'Should display label',\n  args: {\n    label: 'label'\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.label)).toBeDefined();\n  }\n}",...TestLabel.parameters?.docs?.source}}},VisualTestCheckable.parameters={...VisualTestCheckable.parameters,docs:{...VisualTestCheckable.parameters?.docs,source:{originalSource:"{\n  name: 'Should be checkable',\n  args: {\n    label: 'Checked'\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('checkbox'));\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n    expect(args.change).toHaveBeenCalledWith(true);\n  }\n}",...VisualTestCheckable.parameters?.docs?.source}}},VisualTestUncheckable.parameters={...VisualTestUncheckable.parameters,docs:{...VisualTestUncheckable.parameters?.docs,source:{originalSource:"{\n  name: 'Should be uncheckable',\n  args: {\n    label: 'Unchecked',\n    checked: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('checkbox'));\n    expect(canvas.getByRole('checkbox').checked).toBe(false);\n    expect(args.change).toHaveBeenCalledWith(false);\n  }\n}",...VisualTestUncheckable.parameters?.docs?.source}}},VisualTestDisabled.parameters={...VisualTestDisabled.parameters,docs:{...VisualTestDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Should not change value when disabled',\n  args: {\n    label: 'Disabled',\n    disabled: true,\n    checked: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n    await userEvent.click(canvas.getByRole('checkbox'));\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n    expect(args.change).not.toHaveBeenCalled();\n  }\n}",...VisualTestDisabled.parameters?.docs?.source}}},VisualTestBordered.parameters={...VisualTestBordered.parameters,docs:{...VisualTestBordered.parameters?.docs,source:{originalSource:"{\n  name: 'Should be bordered',\n  args: {\n    label: 'Bordered',\n    bordered: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('checkbox'));\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n    expect(args.change).toHaveBeenCalledWith(true);\n  }\n}",...VisualTestBordered.parameters?.docs?.source}}},VisualTestInherited.parameters={...VisualTestInherited.parameters,docs:{...VisualTestInherited.parameters?.docs,source:{originalSource:"{\n  name: 'Should trigger inheritance-remove event',\n  args: {\n    label: 'Inherited',\n    inheritedValue: false\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));\n    expect(args.inheritanceRemove).toHaveBeenCalledWith(undefined);\n  }\n}",...VisualTestInherited.parameters?.docs?.source}}},VisualTestError.parameters={...VisualTestError.parameters,docs:{...VisualTestError.parameters?.docs,source:{originalSource:"{\n  name: 'Error should be displayed',\n  args: {\n    label: 'Error label',\n    error: {\n      detail: 'Error message'\n    }\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.error.detail)).toBeDefined();\n  }\n}",...VisualTestError.parameters?.docs?.source}}},VisualTestBorderedError.parameters={...VisualTestBorderedError.parameters,docs:{...VisualTestBorderedError.parameters?.docs,source:{originalSource:"{\n  name: 'Bordered error should be displayed',\n  args: {\n    label: 'Bordered error label',\n    bordered: true,\n    checked: true,\n    error: {\n      detail: 'Error message'\n    }\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n    expect(canvas.getByText(args.error.detail)).toBeDefined();\n  }\n}",...VisualTestBorderedError.parameters?.docs?.source}}},VisualTestHelpText.parameters={...VisualTestHelpText.parameters,docs:{...VisualTestHelpText.parameters?.docs,source:{originalSource:"{\n  name: 'Help text should be displayed',\n  args: {\n    label: 'Help text label',\n    helpText: 'Help text message'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByRole('checkbox').checked).toBe(false);\n    expect(canvas.getByTestId('sw-help-text__icon')).toBeDefined();\n    await userEvent.click(canvas.getByTestId('sw-help-text__icon'));\n    await waitUntilRendered(() => document.querySelector('.sw-tooltip'));\n  }\n}",...VisualTestHelpText.parameters?.docs?.source}}},VisualTestPartialChecked.parameters={...VisualTestPartialChecked.parameters,docs:{...VisualTestPartialChecked.parameters?.docs,source:{originalSource:"{\n  name: 'Partial checked should be displayed',\n  args: {\n    label: 'Partial checked label',\n    partial: true,\n    checked: true\n  },\n  play: ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByRole('checkbox').checked).toBe(true);\n  }\n}",...VisualTestPartialChecked.parameters?.docs?.source}}};const __namedExportsOrder=["TestLabel","VisualTestCheckable","VisualTestUncheckable","VisualTestDisabled","VisualTestBordered","VisualTestInherited","VisualTestError","VisualTestBorderedError","VisualTestHelpText","VisualTestPartialChecked"]},"./src/_internal/test-helper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function waitUntilRendered(check){return new Promise(((resolve,reject)=>{const waitUntilElementLoad=(retryTime=0)=>{retryTime>100&&reject();check()?resolve():window.setTimeout((()=>waitUntilElementLoad(retryTime+1)),25)};waitUntilElementLoad()}))}__webpack_require__.d(__webpack_exports__,{e:function(){return waitUntilRendered}})}}]);