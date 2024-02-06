(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[41705],{"./src/components/form/sw-select/sw-select.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestClearSelections:function(){return TestClearSelections},TestRemovalOfSelectionByList:function(){return TestRemovalOfSelectionByList},TestRemoveSelectionByResultItem:function(){return TestRemoveSelectionByResultItem},VisualTestDisabled:function(){return VisualTestDisabled},VisualTestEnsureSingleSelectionWithoutLoadMore:function(){return VisualTestEnsureSingleSelectionWithoutLoadMore},VisualTestError:function(){return VisualTestError},VisualTestHighlightSearchTerm:function(){return VisualTestHighlightSearchTerm},VisualTestHint:function(){return VisualTestHint},VisualTestInherited:function(){return VisualTestInherited},VisualTestMultiSelect:function(){return VisualTestMultiSelect},VisualTestPrefix:function(){return VisualTestPrefix},VisualTestSingleSelection:function(){return VisualTestSingleSelection},VisualTestSuffix:function(){return VisualTestSuffix},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/_internal/test-helper.js"),_sw_select_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/sw-select/sw-select.stories.js");__webpack_exports__.default={..._sw_select_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Form/sw-select"};const TestRemovalOfSelectionByList={name:"Should remove selections through selection list",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("textbox"));const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper"));await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--a")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["b","d"])}},TestRemoveSelectionByResultItem={name:"Should remove selection through result item",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getAllByTestId("dismiss-label")[0]),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["b","d"])}},TestClearSelections={name:"Should clear selections",args:{value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByTestId("select-clear-button")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith([])}},VisualTestSingleSelection={name:"Should single select",play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"A");let popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper"));await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--a")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith("a"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe(""),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"F"),popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper")),await(0,_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__.e)((()=>popover.getByTestId("sw-select-option--f"))),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--f")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:6,value:"f",label:"Option F"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith("f"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe(""),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"FF"),popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper")),await(0,_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__.e)((()=>popover.getByTestId("sw-select-option--ff"))),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--ff")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:7,value:"ff",label:"Option FF"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith("ff"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe("")}},VisualTestMultiSelect={name:"Should multi select",args:{enableMultiSelection:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("textbox"));const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper"));await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--a")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:1,value:"a",label:"Option A"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["a"]),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--b")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:2,value:"b",label:"Option B"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["a","b"]),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--c")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:3,value:"c",label:"Option C"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["a","b","c"]),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--e")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:5,value:"e",label:"Option E"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith(["a","b","c","e"]),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByText("hidden")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe("")}},VisualTestPrefix={name:"Should display prefix",args:{prefix:"prefix"},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.prefix)).toBeDefined()}},VisualTestSuffix={name:"Should display suffix",args:{suffix:"suffix"},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.suffix)).toBeDefined()}},VisualTestHint={name:"Should display hint",args:{hint:"hint"},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.hint)).toBeDefined()}},VisualTestDisabled={name:"Should disable",args:{disabled:!0,value:["a","b","d"],enableMultiSelection:!0},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByRole("textbox"));const popover=document.querySelector(".sw-popover-deprecated__wrapper");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(popover).toBe(null)}},VisualTestError={name:"Should display error",args:{error:{code:500,detail:"Error while saving!"}},play:({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByText(args.error.detail)).toBeDefined()}},VisualTestHighlightSearchTerm={name:"Should highlight search term",args:{enableMultiSelection:!0},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"A"),await(0,_internal_test_helper__WEBPACK_IMPORTED_MODULE_3__.e)((()=>1===document.getElementsByClassName("sw-select-result").length));const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper"));(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(popover.getByText(((content,element)=>{const hasText=element=>"Option A"===element.textContent,elementHasText=hasText(element),childrenDontHaveText=Array.from(element?.children||[]).every((child=>!hasText(child)));return elementHasText&&childrenDontHaveText}))).toBeDefined()}},VisualTestInherited={name:"Should trigger inheritance-remove event",args:{label:"Inherited",isInheritanceField:!0,isInherited:!0},play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(canvas.getByTestId("sw-inheritance-switch-icon")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.inheritanceRemove).toHaveBeenCalledWith()}},VisualTestEnsureSingleSelectionWithoutLoadMore={name:"Should not show load more",play:async({canvasElement:canvasElement,args:args})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement);await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(canvas.getByRole("textbox"),"Option long text");const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector(".sw-popover-deprecated__wrapper"));await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(popover.getByTestId("sw-select-option--Longer value text")),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.itemAdd).toHaveBeenCalledWith({id:8,label:"Option long text",value:"Longer value text"}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(args.change).toHaveBeenCalledWith("Longer value text"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.getByRole("textbox").value).toBe(""),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(canvas.queryByText("+12")).toBeNull()}};TestRemovalOfSelectionByList.parameters={...TestRemovalOfSelectionByList.parameters,docs:{...TestRemovalOfSelectionByList.parameters?.docs,source:{originalSource:"{\n  name: 'Should remove selections through selection list',\n  args: {\n    value: ['a', 'b', 'd'],\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('textbox'));\n    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await userEvent.click(popover.getByTestId('sw-select-option--a'));\n    expect(args.change).toHaveBeenCalledWith(['b', 'd']);\n  }\n}",...TestRemovalOfSelectionByList.parameters?.docs?.source}}},TestRemoveSelectionByResultItem.parameters={...TestRemoveSelectionByResultItem.parameters,docs:{...TestRemoveSelectionByResultItem.parameters?.docs,source:{originalSource:"{\n  name: 'Should remove selection through result item',\n  args: {\n    value: ['a', 'b', 'd'],\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getAllByTestId('dismiss-label')[0]);\n    expect(args.change).toHaveBeenCalledWith(['b', 'd']);\n  }\n}",...TestRemoveSelectionByResultItem.parameters?.docs?.source}}},TestClearSelections.parameters={...TestClearSelections.parameters,docs:{...TestClearSelections.parameters?.docs,source:{originalSource:"{\n  name: 'Should clear selections',\n  args: {\n    value: ['a', 'b', 'd'],\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByTestId('select-clear-button'));\n    expect(args.change).toHaveBeenCalledWith([]);\n  }\n}",...TestClearSelections.parameters?.docs?.source}}},VisualTestSingleSelection.parameters={...VisualTestSingleSelection.parameters,docs:{...VisualTestSingleSelection.parameters?.docs,source:{originalSource:"{\n  name: 'Should single select',\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.type(canvas.getByRole('textbox'), 'A');\n    let popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await userEvent.click(popover.getByTestId('sw-select-option--a'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 1,\n      value: 'a',\n      label: 'Option A'\n    });\n    expect(args.change).toHaveBeenCalledWith('a');\n    expect(canvas.getByRole('textbox').value).toBe('');\n    await userEvent.type(canvas.getByRole('textbox'), 'F');\n    popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await waitUntilRendered(() => popover.getByTestId('sw-select-option--f'));\n    await userEvent.click(popover.getByTestId('sw-select-option--f'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 6,\n      value: 'f',\n      label: 'Option F'\n    });\n    expect(args.change).toHaveBeenCalledWith('f');\n    expect(canvas.getByRole('textbox').value).toBe('');\n\n    // Only 'FF' is selected\n    await userEvent.type(canvas.getByRole('textbox'), 'FF');\n    popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await waitUntilRendered(() => popover.getByTestId('sw-select-option--ff'));\n    await userEvent.click(popover.getByTestId('sw-select-option--ff'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 7,\n      value: 'ff',\n      label: 'Option FF'\n    });\n    expect(args.change).toHaveBeenCalledWith('ff');\n    expect(canvas.getByRole('textbox').value).toBe('');\n  }\n}",...VisualTestSingleSelection.parameters?.docs?.source}}},VisualTestMultiSelect.parameters={...VisualTestMultiSelect.parameters,docs:{...VisualTestMultiSelect.parameters?.docs,source:{originalSource:"{\n  name: 'Should multi select',\n  args: {\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    // open selection\n    await userEvent.click(canvas.getByRole('textbox'));\n    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await userEvent.click(popover.getByTestId('sw-select-option--a'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 1,\n      value: 'a',\n      label: 'Option A'\n    });\n    expect(args.change).toHaveBeenCalledWith(['a']);\n    await userEvent.click(popover.getByTestId('sw-select-option--b'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 2,\n      value: 'b',\n      label: 'Option B'\n    });\n    expect(args.change).toHaveBeenCalledWith(['a', 'b']);\n    await userEvent.click(popover.getByTestId('sw-select-option--c'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 3,\n      value: 'c',\n      label: 'Option C'\n    });\n    expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c']);\n    await userEvent.click(popover.getByTestId('sw-select-option--e'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 5,\n      value: 'e',\n      label: 'Option E'\n    });\n    expect(args.change).toHaveBeenCalledWith(['a', 'b', 'c', 'e']);\n    await userEvent.click(canvas.getByText('hidden'));\n    expect(canvas.getByRole('textbox').value).toBe('');\n  }\n}",...VisualTestMultiSelect.parameters?.docs?.source}}},VisualTestPrefix.parameters={...VisualTestPrefix.parameters,docs:{...VisualTestPrefix.parameters?.docs,source:{originalSource:"{\n  name: 'Should display prefix',\n  args: {\n    prefix: 'prefix'\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.prefix)).toBeDefined();\n  }\n}",...VisualTestPrefix.parameters?.docs?.source}}},VisualTestSuffix.parameters={...VisualTestSuffix.parameters,docs:{...VisualTestSuffix.parameters?.docs,source:{originalSource:"{\n  name: 'Should display suffix',\n  args: {\n    suffix: 'suffix'\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.suffix)).toBeDefined();\n  }\n}",...VisualTestSuffix.parameters?.docs?.source}}},VisualTestHint.parameters={...VisualTestHint.parameters,docs:{...VisualTestHint.parameters?.docs,source:{originalSource:"{\n  name: 'Should display hint',\n  args: {\n    hint: 'hint'\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.hint)).toBeDefined();\n  }\n}",...VisualTestHint.parameters?.docs?.source}}},VisualTestDisabled.parameters={...VisualTestDisabled.parameters,docs:{...VisualTestDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Should disable',\n  args: {\n    disabled: true,\n    value: ['a', 'b', 'd'],\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByRole('textbox'));\n    const popover = document.querySelector('.sw-popover-deprecated__wrapper');\n    expect(popover).toBe(null);\n  }\n}",...VisualTestDisabled.parameters?.docs?.source}}},VisualTestError.parameters={...VisualTestError.parameters,docs:{...VisualTestError.parameters?.docs,source:{originalSource:"{\n  name: 'Should display error',\n  args: {\n    error: {\n      code: 500,\n      detail: \"Error while saving!\"\n    }\n  },\n  play: ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(args.error.detail)).toBeDefined();\n  }\n}",...VisualTestError.parameters?.docs?.source}}},VisualTestHighlightSearchTerm.parameters={...VisualTestHighlightSearchTerm.parameters,docs:{...VisualTestHighlightSearchTerm.parameters?.docs,source:{originalSource:"{\n  name: 'Should highlight search term',\n  args: {\n    enableMultiSelection: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.type(canvas.getByRole('textbox'), 'A');\n\n    // wait until only one result is rendered\n    await waitUntilRendered(() => document.getElementsByClassName('sw-select-result').length === 1);\n    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    // Option A is separated in different elements. This methods get the combined instance.\n    expect(popover.getByText((content, element) => {\n      const hasText = element => element.textContent === 'Option A';\n      const elementHasText = hasText(element);\n      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));\n      return elementHasText && childrenDontHaveText;\n    })).toBeDefined();\n  }\n}",...VisualTestHighlightSearchTerm.parameters?.docs?.source}}},VisualTestInherited.parameters={...VisualTestInherited.parameters,docs:{...VisualTestInherited.parameters?.docs,source:{originalSource:"{\n  name: 'Should trigger inheritance-remove event',\n  args: {\n    label: 'Inherited',\n    isInheritanceField: true,\n    isInherited: true\n  },\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.click(canvas.getByTestId('sw-inheritance-switch-icon'));\n    expect(args.inheritanceRemove).toHaveBeenCalledWith();\n  }\n}",...VisualTestInherited.parameters?.docs?.source}}},VisualTestEnsureSingleSelectionWithoutLoadMore.parameters={...VisualTestEnsureSingleSelectionWithoutLoadMore.parameters,docs:{...VisualTestEnsureSingleSelectionWithoutLoadMore.parameters?.docs,source:{originalSource:"{\n  name: 'Should not show load more',\n  play: async ({\n    canvasElement,\n    args\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.type(canvas.getByRole('textbox'), 'Option long text');\n    const popover = within(document.querySelector('.sw-popover-deprecated__wrapper'));\n    await userEvent.click(popover.getByTestId('sw-select-option--Longer value text'));\n    expect(args.itemAdd).toHaveBeenCalledWith({\n      id: 8,\n      label: 'Option long text',\n      value: 'Longer value text'\n    });\n    expect(args.change).toHaveBeenCalledWith('Longer value text');\n    expect(canvas.getByRole('textbox').value).toBe('');\n    expect(canvas.queryByText('+12')).toBeNull();\n  }\n}",...VisualTestEnsureSingleSelectionWithoutLoadMore.parameters?.docs?.source}}};const __namedExportsOrder=["TestRemovalOfSelectionByList","TestRemoveSelectionByResultItem","TestClearSelections","VisualTestSingleSelection","VisualTestMultiSelect","VisualTestPrefix","VisualTestSuffix","VisualTestHint","VisualTestDisabled","VisualTestError","VisualTestHighlightSearchTerm","VisualTestInherited","VisualTestEnsureSingleSelectionWithoutLoadMore"]},"./src/_internal/test-helper.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function waitUntilRendered(check){return new Promise(((resolve,reject)=>{const waitUntilElementLoad=(retryTime=0)=>{if(retryTime>100)return void reject(new Error(`"waitUntilRendered": condition ${check.toString().replace(/(\r\n|\n|\r)/gm,"")} not met after 2.5 seconds`));check()?resolve():window.setTimeout((()=>waitUntilElementLoad(retryTime+1)),25)};waitUntilElementLoad()}))}__webpack_require__.d(__webpack_exports__,{e:function(){return waitUntilRendered}})},"?4f7e":function(){}}]);