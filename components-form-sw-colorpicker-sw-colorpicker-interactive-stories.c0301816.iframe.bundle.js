(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[46572],{"./src/components/form/sw-colorpicker/sw-colorpicker.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VisualTestChangeColorpickerColor:function(){return VisualTestChangeColorpickerColor},VisualTestChangeColorpickerLabel:function(){return VisualTestChangeColorpickerLabel},VisualTestChangeColorpickerOutputHex:function(){return VisualTestChangeColorpickerOutputHex},VisualTestChangeColorpickerOutputHexAlpha:function(){return VisualTestChangeColorpickerOutputHexAlpha},VisualTestChangeColorpickerOutputHsl:function(){return VisualTestChangeColorpickerOutputHsl},VisualTestChangeColorpickerOutputHslAlpha:function(){return VisualTestChangeColorpickerOutputHslAlpha},VisualTestChangeColorpickerOutputRgb:function(){return VisualTestChangeColorpickerOutputRgb},VisualTestChangeColorpickerOutputRgbAlpha:function(){return VisualTestChangeColorpickerOutputRgbAlpha},VisualTestColorpickerClearValue:function(){return VisualTestColorpickerClearValue},VisualTestColorpickerDisabled:function(){return VisualTestColorpickerDisabled},VisualTestColorpickerDisabledColorLabels:function(){return VisualTestColorpickerDisabledColorLabels},VisualTestColorpickerReadonly:function(){return VisualTestColorpickerReadonly},VisualTestColorpickerWithHelpText:function(){return VisualTestColorpickerWithHelpText},VisualTestColorpickerWithoutAlpha:function(){return VisualTestColorpickerWithoutAlpha},VisualTestOpenColorpicker:function(){return VisualTestOpenColorpicker},VisualTestRenderColorpicker:function(){return VisualTestRenderColorpicker},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_sw_colorpicker_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/form/sw-colorpicker/sw-colorpicker.stories.js");__webpack_exports__.default={..._sw_colorpicker_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Form/sw-colorpicker"};const VisualTestRenderColorpicker={name:"Render colorpicker"},VisualTestOpenColorpicker={name:"Open colorpicker",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:canvasElement})=>{const pickerToggle=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),colorRange=popover.getByLabelText("colorpicker-color-range"),alphaRange=popover.getByLabelText("colorpicker-alpha-range"),hexInput=popover.getByLabelText("hex-value"),redInput=popover.getByLabelText("red-value"),greenInput=popover.getByLabelText("green-value"),blueInput=popover.getByLabelText("blue-value"),alphaInput=popover.getByLabelText("alpha-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorRange).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorRange.value).toEqual("109"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaRange).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaRange.value).toEqual("0.81"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#48e425cf"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(redInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(redInput.value).toEqual("72"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(greenInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(greenInput.value).toEqual("228"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(blueInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(blueInput.value).toEqual("37"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaInput.value).toEqual("81")}},VisualTestChangeColorpickerColor={name:"Change colorpicker color",args:{value:"rgba(72, 228, 37, 0.81)"},play:async({canvasElement:canvasElement})=>{const pickerToggle=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),colorRange=popover.getByLabelText("colorpicker-color-range"),alphaRange=popover.getByLabelText("colorpicker-alpha-range"),hexInput=popover.getByLabelText("hex-value"),redInput=popover.getByLabelText("red-value"),greenInput=popover.getByLabelText("green-value"),blueInput=popover.getByLabelText("blue-value"),alphaInput=popover.getByLabelText("alpha-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorRange).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorRange.value).toEqual("109"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaRange).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaRange.value).toEqual("0.81"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#48e425cf"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(redInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(redInput.value).toEqual("72"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(greenInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(greenInput.value).toEqual("228"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(blueInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(blueInput.value).toEqual("37"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaInput.value).toEqual("81"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.BX.input(colorRange,{target:{value:300}}),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.BX.input(alphaRange,{target:{value:1}}),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorRange.value).toEqual("300"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaRange.value).toEqual("1"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.clear(redInput),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(redInput,"240"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.clear(greenInput),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(greenInput,"60"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.clear(blueInput),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(blueInput,"150"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(redInput.value).toEqual("240"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(greenInput.value).toEqual("60"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(blueInput.value).toEqual("150"),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#f03c96")}},VisualTestChangeColorpickerLabel={name:"Change colorpicker label",args:{label:"Another label"}},VisualTestChangeColorpickerOutputHex={name:"Change colorpicker output to HEX",args:{label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff5");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("#0fcff5")}},VisualTestChangeColorpickerOutputHsl={name:"Change colorpicker output to HSL",args:{label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff5");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("hsl(190, 92%, 51%)")}},VisualTestChangeColorpickerOutputRgb={name:"Change colorpicker output to RGB",args:{label:"Should output RGB",colorOutput:"rgb"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff5");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("rgb(15, 207, 245)")}},VisualTestChangeColorpickerOutputHexAlpha={name:"Change colorpicker output to HEX alpha",args:{value:"#0fcff582",label:"Should output HEX",colorOutput:"hex"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff582");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("#0fcff582")}},VisualTestChangeColorpickerOutputHslAlpha={name:"Change colorpicker output to HSL alpha",args:{value:"#0fcff582",label:"Should output HSL",colorOutput:"hsl"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff582");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("hsla(190, 92%, 51%, 0.51)")}},VisualTestChangeColorpickerOutputRgbAlpha={name:"Change colorpicker output to RGB alpha",args:{label:"Should output RGB",value:"#0fcff582",colorOutput:"rgb"},play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),pickerToggle=canvas.getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const hexInput=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]).getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff582");const colorValue=canvas.getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("rgba(15, 207, 245, 0.51)")}},VisualTestColorpickerWithoutAlpha={name:"Render colorpicker without alpha",args:{label:"Should render without alpha value",alpha:!1},play:async({canvasElement:canvasElement})=>{const pickerToggle=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),hexInput=popover.getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff5");const alphaInput=popover.queryByLabelText("alpha-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaInput).toEqual(null)}},VisualTestColorpickerDisabled={name:"Render disabled colorpicker",args:{label:"Should render disabled colorpicker",disabled:!0},play:async({canvasElement:canvasElement})=>{const pickerToggle=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(document.getElementsByClassName("sw-popover-deprecated__wrapper").length).toEqual(0)}},VisualTestColorpickerClearValue={name:"Clear colorpicker value",args:{label:"Should clear colorpicker value"},play:async({canvasElement:canvasElement})=>{const colorValue=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-color-value");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.clear(colorValue),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue.value).toEqual("")}},VisualTestColorpickerReadonly={name:"Render readonly colorpicker",args:{label:"Should render readonly colorpicker",readonly:!0},play:async({canvasElement:canvasElement})=>{const colorValue=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-color-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(colorValue).toHaveAttribute("readonly"),await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(colorValue)}},VisualTestColorpickerDisabledColorLabels={name:"Render colorpicker without color labels",args:{label:"Should render colorpicker without color labels",colorLabels:!1},play:async({canvasElement:canvasElement})=>{const pickerToggle=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByLabelText("colorpicker-toggle");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(pickerToggle);const popover=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover-deprecated__wrapper")[0]),hexInput=popover.getByLabelText("hex-value");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput).toBeDefined(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexInput.value).toEqual("#0fcff5");const hexLabel=popover.queryByText("HEX"),rLabel=popover.queryByText("R"),gLabel=popover.queryByText("G"),bLabel=popover.queryByText("B"),alphaLabel=popover.queryByText("Alpha");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(hexLabel).toEqual(null),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(rLabel).toEqual(null),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(gLabel).toEqual(null),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(bLabel).toEqual(null),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(alphaLabel).toEqual(null)}},VisualTestColorpickerWithHelpText={name:"Render colorpicker with help text",args:{helpText:"Text for helping you"},play:async({canvasElement:canvasElement})=>{const tooltip=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByRole("tooltip");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.hover(tooltip),await new Promise(((resolve,reject)=>{const waitUntilElementLoad=(retryTime=0)=>{retryTime>100&&reject(),document.querySelector('[aria-label="currently-opened-tooltip"]')?resolve():window.setTimeout((()=>waitUntilElementLoad(retryTime+1)),25)};waitUntilElementLoad()}));const openedTooltip=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.querySelector('[aria-label="currently-opened-tooltip"]').parentElement).getByLabelText("currently-opened-tooltip");(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(openedTooltip).not.toEqual(null),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(openedTooltip.innerText).toEqual("Text for helping you")}};VisualTestRenderColorpicker.parameters={...VisualTestRenderColorpicker.parameters,docs:{...VisualTestRenderColorpicker.parameters?.docs,source:{originalSource:"{\n  name: 'Render colorpicker'\n}",...VisualTestRenderColorpicker.parameters?.docs?.source}}},VisualTestOpenColorpicker.parameters={...VisualTestOpenColorpicker.parameters,docs:{...VisualTestOpenColorpicker.parameters?.docs,source:{originalSource:"{\n  name: 'Open colorpicker',\n  args: {\n    value: 'rgba(72, 228, 37, 0.81)'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // todo: figure out what element this is\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const colorRange = popover.getByLabelText('colorpicker-color-range');\n    const alphaRange = popover.getByLabelText('colorpicker-alpha-range');\n    const hexInput = popover.getByLabelText('hex-value');\n    const redInput = popover.getByLabelText('red-value');\n    const greenInput = popover.getByLabelText('green-value');\n    const blueInput = popover.getByLabelText('blue-value');\n    const alphaInput = popover.getByLabelText('alpha-value');\n    expect(colorRange).toBeDefined();\n    expect(colorRange.value).toEqual('109');\n    expect(alphaRange).toBeDefined();\n    expect(alphaRange.value).toEqual('0.81');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#48e425cf');\n    expect(redInput).toBeDefined();\n    expect(redInput.value).toEqual('72');\n    expect(greenInput).toBeDefined();\n    expect(greenInput.value).toEqual('228');\n    expect(blueInput).toBeDefined();\n    expect(blueInput.value).toEqual('37');\n    expect(alphaInput).toBeDefined();\n    expect(alphaInput.value).toEqual('81');\n  }\n}",...VisualTestOpenColorpicker.parameters?.docs?.source}}},VisualTestChangeColorpickerColor.parameters={...VisualTestChangeColorpickerColor.parameters,docs:{...VisualTestChangeColorpickerColor.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker color',\n  args: {\n    value: 'rgba(72, 228, 37, 0.81)'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const colorRange = popover.getByLabelText('colorpicker-color-range');\n    const alphaRange = popover.getByLabelText('colorpicker-alpha-range');\n    const hexInput = popover.getByLabelText('hex-value');\n    const redInput = popover.getByLabelText('red-value');\n    const greenInput = popover.getByLabelText('green-value');\n    const blueInput = popover.getByLabelText('blue-value');\n    const alphaInput = popover.getByLabelText('alpha-value');\n    expect(colorRange).toBeDefined();\n    expect(colorRange.value).toEqual('109');\n    expect(alphaRange).toBeDefined();\n    expect(alphaRange.value).toEqual('0.81');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#48e425cf');\n    expect(redInput).toBeDefined();\n    expect(redInput.value).toEqual('72');\n    expect(greenInput).toBeDefined();\n    expect(greenInput.value).toEqual('228');\n    expect(blueInput).toBeDefined();\n    expect(blueInput.value).toEqual('37');\n    expect(alphaInput).toBeDefined();\n    expect(alphaInput.value).toEqual('81');\n\n    // Change colors\n    fireEvent.input(colorRange, {\n      target: {\n        value: 300\n      }\n    });\n    fireEvent.input(alphaRange, {\n      target: {\n        value: 1\n      }\n    });\n    expect(colorRange.value).toEqual('300');\n    expect(alphaRange.value).toEqual('1');\n    await userEvent.clear(redInput);\n    await userEvent.type(redInput, '240');\n    await userEvent.clear(greenInput);\n    await userEvent.type(greenInput, '60');\n    await userEvent.clear(blueInput);\n    await userEvent.type(blueInput, '150');\n    expect(redInput.value).toEqual('240');\n    expect(greenInput.value).toEqual('60');\n    expect(blueInput.value).toEqual('150');\n    expect(hexInput.value).toEqual('#f03c96');\n  }\n}",...VisualTestChangeColorpickerColor.parameters?.docs?.source}}},VisualTestChangeColorpickerLabel.parameters={...VisualTestChangeColorpickerLabel.parameters,docs:{...VisualTestChangeColorpickerLabel.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker label',\n  args: {\n    label: 'Another label'\n  }\n}",...VisualTestChangeColorpickerLabel.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputHex.parameters={...VisualTestChangeColorpickerOutputHex.parameters,docs:{...VisualTestChangeColorpickerOutputHex.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to HEX',\n  args: {\n    label: 'Should output HEX',\n    colorOutput: 'hex'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff5');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('#0fcff5');\n  }\n}",...VisualTestChangeColorpickerOutputHex.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputHsl.parameters={...VisualTestChangeColorpickerOutputHsl.parameters,docs:{...VisualTestChangeColorpickerOutputHsl.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to HSL',\n  args: {\n    label: 'Should output HSL',\n    colorOutput: 'hsl'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff5');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('hsl(190, 92%, 51%)');\n  }\n}",...VisualTestChangeColorpickerOutputHsl.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputRgb.parameters={...VisualTestChangeColorpickerOutputRgb.parameters,docs:{...VisualTestChangeColorpickerOutputRgb.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to RGB',\n  args: {\n    label: 'Should output RGB',\n    colorOutput: 'rgb'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff5');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('rgb(15, 207, 245)');\n  }\n}",...VisualTestChangeColorpickerOutputRgb.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputHexAlpha.parameters={...VisualTestChangeColorpickerOutputHexAlpha.parameters,docs:{...VisualTestChangeColorpickerOutputHexAlpha.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to HEX alpha',\n  args: {\n    value: '#0fcff582',\n    label: 'Should output HEX',\n    colorOutput: 'hex'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff582');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('#0fcff582');\n  }\n}",...VisualTestChangeColorpickerOutputHexAlpha.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputHslAlpha.parameters={...VisualTestChangeColorpickerOutputHslAlpha.parameters,docs:{...VisualTestChangeColorpickerOutputHslAlpha.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to HSL alpha',\n  args: {\n    value: '#0fcff582',\n    label: 'Should output HSL',\n    colorOutput: 'hsl'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff582');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('hsla(190, 92%, 51%, 0.51)');\n  }\n}",...VisualTestChangeColorpickerOutputHslAlpha.parameters?.docs?.source}}},VisualTestChangeColorpickerOutputRgbAlpha.parameters={...VisualTestChangeColorpickerOutputRgbAlpha.parameters,docs:{...VisualTestChangeColorpickerOutputRgbAlpha.parameters?.docs,source:{originalSource:"{\n  name: 'Change colorpicker output to RGB alpha',\n  args: {\n    label: 'Should output RGB',\n    value: '#0fcff582',\n    colorOutput: 'rgb'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff582');\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toBeDefined();\n    expect(colorValue.value).toEqual('rgba(15, 207, 245, 0.51)');\n  }\n}",...VisualTestChangeColorpickerOutputRgbAlpha.parameters?.docs?.source}}},VisualTestColorpickerWithoutAlpha.parameters={...VisualTestColorpickerWithoutAlpha.parameters,docs:{...VisualTestColorpickerWithoutAlpha.parameters?.docs,source:{originalSource:"{\n  name: 'Render colorpicker without alpha',\n  args: {\n    label: 'Should render without alpha value',\n    alpha: false\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff5');\n    const alphaInput = popover.queryByLabelText('alpha-value');\n    expect(alphaInput).toEqual(null);\n  }\n}",...VisualTestColorpickerWithoutAlpha.parameters?.docs?.source}}},VisualTestColorpickerDisabled.parameters={...VisualTestColorpickerDisabled.parameters,docs:{...VisualTestColorpickerDisabled.parameters?.docs,source:{originalSource:"{\n  name: 'Render disabled colorpicker',\n  args: {\n    label: 'Should render disabled colorpicker',\n    disabled: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Expect no popover\n    expect(document.getElementsByClassName('sw-popover-deprecated__wrapper').length).toEqual(0);\n  }\n}",...VisualTestColorpickerDisabled.parameters?.docs?.source}}},VisualTestColorpickerClearValue.parameters={...VisualTestColorpickerClearValue.parameters,docs:{...VisualTestColorpickerClearValue.parameters?.docs,source:{originalSource:"{\n  name: 'Clear colorpicker value',\n  args: {\n    label: 'Should clear colorpicker value'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    await userEvent.clear(colorValue);\n    expect(colorValue.value).toEqual('');\n  }\n}",...VisualTestColorpickerClearValue.parameters?.docs?.source}}},VisualTestColorpickerReadonly.parameters={...VisualTestColorpickerReadonly.parameters,docs:{...VisualTestColorpickerReadonly.parameters?.docs,source:{originalSource:"{\n  name: 'Render readonly colorpicker',\n  args: {\n    label: 'Should render readonly colorpicker',\n    readonly: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const colorValue = canvas.getByLabelText('colorpicker-color-value');\n    expect(colorValue).toHaveAttribute('readonly');\n    await userEvent.click(colorValue);\n  }\n}",...VisualTestColorpickerReadonly.parameters?.docs?.source}}},VisualTestColorpickerDisabledColorLabels.parameters={...VisualTestColorpickerDisabledColorLabels.parameters,docs:{...VisualTestColorpickerDisabledColorLabels.parameters?.docs,source:{originalSource:"{\n  name: 'Render colorpicker without color labels',\n  args: {\n    label: 'Should render colorpicker without color labels',\n    colorLabels: false\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const pickerToggle = canvas.getByLabelText('colorpicker-toggle');\n    await userEvent.click(pickerToggle);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover-deprecated__wrapper')[0]);\n    const hexInput = popover.getByLabelText('hex-value');\n    expect(hexInput).toBeDefined();\n    expect(hexInput.value).toEqual('#0fcff5');\n    const hexLabel = popover.queryByText('HEX');\n    const rLabel = popover.queryByText('R');\n    const gLabel = popover.queryByText('G');\n    const bLabel = popover.queryByText('B');\n    const alphaLabel = popover.queryByText('Alpha');\n    expect(hexLabel).toEqual(null);\n    expect(rLabel).toEqual(null);\n    expect(gLabel).toEqual(null);\n    expect(bLabel).toEqual(null);\n    expect(alphaLabel).toEqual(null);\n  }\n}",...VisualTestColorpickerDisabledColorLabels.parameters?.docs?.source}}},VisualTestColorpickerWithHelpText.parameters={...VisualTestColorpickerWithHelpText.parameters,docs:{...VisualTestColorpickerWithHelpText.parameters?.docs,source:{originalSource:"{\n  name: 'Render colorpicker with help text',\n  args: {\n    helpText: 'Text for helping you'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const tooltip = canvas.getByRole('tooltip');\n    await userEvent.hover(tooltip);\n\n    // wait until tooltip gets rendered\n    await (() => {\n      return new Promise((resolve, reject) => {\n        const waitUntilElementLoad = (retryTime = 0) => {\n          // do not wait longer than 2.5 seconds\n          if (retryTime > 100) {\n            reject();\n          }\n\n          // check for tooltip\n          const result = document.querySelector('[aria-label=\"currently-opened-tooltip\"]');\n\n          // retry selection when not found otherwise resolve it\n          if (!result) {\n            window.setTimeout(() => waitUntilElementLoad(retryTime + 1), 25);\n          } else {\n            resolve();\n          }\n        };\n        waitUntilElementLoad();\n      });\n    })();\n    const tooltipElement = within(document.querySelector('[aria-label=\"currently-opened-tooltip\"]').parentElement);\n    const openedTooltip = tooltipElement.getByLabelText('currently-opened-tooltip');\n    expect(openedTooltip).not.toEqual(null);\n    expect(openedTooltip.innerText).toEqual('Text for helping you');\n  }\n}",...VisualTestColorpickerWithHelpText.parameters?.docs?.source}}};const __namedExportsOrder=["VisualTestRenderColorpicker","VisualTestOpenColorpicker","VisualTestChangeColorpickerColor","VisualTestChangeColorpickerLabel","VisualTestChangeColorpickerOutputHex","VisualTestChangeColorpickerOutputHsl","VisualTestChangeColorpickerOutputRgb","VisualTestChangeColorpickerOutputHexAlpha","VisualTestChangeColorpickerOutputHslAlpha","VisualTestChangeColorpickerOutputRgbAlpha","VisualTestColorpickerWithoutAlpha","VisualTestColorpickerDisabled","VisualTestColorpickerClearValue","VisualTestColorpickerReadonly","VisualTestColorpickerDisabledColorLabels","VisualTestColorpickerWithHelpText"]},"?4f7e":function(){}}]);