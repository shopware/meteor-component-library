"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[29862],{"./src/components/layout/sw-card/sw-card.interactive.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VisualTestExtendedPage:function(){return VisualTestExtendedPage},VisualTestExtendedPageWithHero:function(){return VisualTestExtendedPageWithHero},VisualTestExtendedPageWithOpenedContextActions:function(){return VisualTestExtendedPageWithOpenedContextActions},VisualTestExtendedPageWithoutAvatar:function(){return VisualTestExtendedPageWithoutAvatar},VisualTestExtendedPageWithoutContextActions:function(){return VisualTestExtendedPageWithoutContextActions},VisualTestExtendedPageWithoutFooter:function(){return VisualTestExtendedPageWithoutFooter},VisualTestExtendedPageWithoutHeaderRight:function(){return VisualTestExtendedPageWithoutHeaderRight},VisualTestExtendedPageWithoutTabs:function(){return VisualTestExtendedPageWithoutTabs},VisualTestExtendedPageWithoutToolbar:function(){return VisualTestExtendedPageWithoutToolbar},VisualTestMinimalPage:function(){return VisualTestMinimalPage},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),_sw_card_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/layout/sw-card/sw-card.stories.js");__webpack_exports__.default={..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.default,title:"Interaction Tests/Layout/sw-card"};const VisualTestMinimalPage={name:"Render a minimal card",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.minimalStory.args},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.minimalStory},VisualTestExtendedPage={name:"Render a extended card",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutToolbar={name:"Render a extended card without toolbar",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,toolbar:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithHero={name:"Render a extended card with hero",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,hero:!0},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutHeaderRight={name:"Render a extended card without headerRight",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,headerRight:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutTabs={name:"Render a extended card without Tabs",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,tabs:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutAvatar={name:"Render a extended card without Avatar",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,avatar:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutFooter={name:"Render a extended card without Footer",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,footer:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithoutContextActions={name:"Render a extended card without Context Actions",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args,contextActions:null},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory},VisualTestExtendedPageWithOpenedContextActions={name:"Render a extended card with opened Context Actions",args:{..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory.args},..._sw_card_stories__WEBPACK_IMPORTED_MODULE_2__.extendedStory,play:async({canvasElement:canvasElement})=>{const button=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement).getByRole("button");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.click(button);const menuItem=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(document.getElementsByClassName("sw-popover__wrapper")[0]).getAllByRole("menuitem");await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(menuItem[0]).toHaveTextContent("Menu Item A"),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(menuItem[1]).toHaveTextContent("Menu Item B"),await(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_1__.l)(menuItem[2]).toHaveTextContent("Menu Item C")}};VisualTestMinimalPage.parameters={...VisualTestMinimalPage.parameters,docs:{...VisualTestMinimalPage.parameters?.docs,source:{originalSource:"{\n  name: 'Render a minimal card',\n  args: {\n    ...minimalStory.args\n  },\n  ...minimalStory\n}",...VisualTestMinimalPage.parameters?.docs?.source}}},VisualTestExtendedPage.parameters={...VisualTestExtendedPage.parameters,docs:{...VisualTestExtendedPage.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card',\n  args: {\n    ...extendedStory.args\n  },\n  ...extendedStory\n}",...VisualTestExtendedPage.parameters?.docs?.source}}},VisualTestExtendedPageWithoutToolbar.parameters={...VisualTestExtendedPageWithoutToolbar.parameters,docs:{...VisualTestExtendedPageWithoutToolbar.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without toolbar',\n  args: {\n    ...extendedStory.args,\n    toolbar: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutToolbar.parameters?.docs?.source}}},VisualTestExtendedPageWithHero.parameters={...VisualTestExtendedPageWithHero.parameters,docs:{...VisualTestExtendedPageWithHero.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card with hero',\n  args: {\n    ...extendedStory.args,\n    hero: true\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithHero.parameters?.docs?.source}}},VisualTestExtendedPageWithoutHeaderRight.parameters={...VisualTestExtendedPageWithoutHeaderRight.parameters,docs:{...VisualTestExtendedPageWithoutHeaderRight.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without headerRight',\n  args: {\n    ...extendedStory.args,\n    headerRight: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutHeaderRight.parameters?.docs?.source}}},VisualTestExtendedPageWithoutTabs.parameters={...VisualTestExtendedPageWithoutTabs.parameters,docs:{...VisualTestExtendedPageWithoutTabs.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without Tabs',\n  args: {\n    ...extendedStory.args,\n    tabs: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutTabs.parameters?.docs?.source}}},VisualTestExtendedPageWithoutAvatar.parameters={...VisualTestExtendedPageWithoutAvatar.parameters,docs:{...VisualTestExtendedPageWithoutAvatar.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without Avatar',\n  args: {\n    ...extendedStory.args,\n    avatar: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutAvatar.parameters?.docs?.source}}},VisualTestExtendedPageWithoutFooter.parameters={...VisualTestExtendedPageWithoutFooter.parameters,docs:{...VisualTestExtendedPageWithoutFooter.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without Footer',\n  args: {\n    ...extendedStory.args,\n    footer: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutFooter.parameters?.docs?.source}}},VisualTestExtendedPageWithoutContextActions.parameters={...VisualTestExtendedPageWithoutContextActions.parameters,docs:{...VisualTestExtendedPageWithoutContextActions.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card without Context Actions',\n  args: {\n    ...extendedStory.args,\n    contextActions: null\n  },\n  ...extendedStory\n}",...VisualTestExtendedPageWithoutContextActions.parameters?.docs?.source}}},VisualTestExtendedPageWithOpenedContextActions.parameters={...VisualTestExtendedPageWithOpenedContextActions.parameters,docs:{...VisualTestExtendedPageWithOpenedContextActions.parameters?.docs,source:{originalSource:"{\n  name: 'Render a extended card with opened Context Actions',\n  args: {\n    ...extendedStory.args\n  },\n  ...extendedStory,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button');\n    await userEvent.click(button);\n\n    // Look inside the popover\n    const popover = within(document.getElementsByClassName('sw-popover__wrapper')[0]);\n    const menuItem = popover.getAllByRole('menuitem');\n    await expect(menuItem[0]).toHaveTextContent('Menu Item A');\n    await expect(menuItem[1]).toHaveTextContent('Menu Item B');\n    await expect(menuItem[2]).toHaveTextContent('Menu Item C');\n  }\n}",...VisualTestExtendedPageWithOpenedContextActions.parameters?.docs?.source}}};const __namedExportsOrder=["VisualTestMinimalPage","VisualTestExtendedPage","VisualTestExtendedPageWithoutToolbar","VisualTestExtendedPageWithHero","VisualTestExtendedPageWithoutHeaderRight","VisualTestExtendedPageWithoutTabs","VisualTestExtendedPageWithoutAvatar","VisualTestExtendedPageWithoutFooter","VisualTestExtendedPageWithoutContextActions","VisualTestExtendedPageWithOpenedContextActions"]}}]);