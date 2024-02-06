"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[54537],{"./src/directives/dragdrop.directive.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return draggable},W:function(){return droppable}});var lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isFunction.js"),lodash_es_isObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/isObject.js");let currentDrag=null,currentDrop=null,dragElement=null,dragMouseOffsetX=0,dragMouseOffsetY=0,delayTimeout=null;const dropZones=[],defaultDragConfig={delay:100,dragGroup:1,draggableCls:"is--draggable",draggingStateCls:"is--dragging",dragElementCls:"is--drag-element",validDragCls:"is--valid-drag",invalidDragCls:"is--invalid-drag",preventEvent:!0,validateDrop:null,validateDrag:null,validateDragStart:null,onDragStart:null,onDragEnter:null,onDragLeave:null,onDrop:null,data:null,disabled:!1},defaultDropConfig={dragGroup:1,droppableCls:"is--droppable",validDropCls:"is--valid-drop",invalidDropCls:"is--invalid-drop",validateDrop:null,onDrop:null,data:null};function onDrag(el,dragConfig,event){return!(event instanceof MouseEvent&&1!==event.buttons)&&(dragConfig.preventEvent&&(event.preventDefault(),event.stopPropagation()),null===dragConfig.delay||dragConfig.delay<=0?startDrag(el,dragConfig,event):delayTimeout=window.setTimeout(startDrag.bind({},el,dragConfig,event),dragConfig.delay),document.addEventListener("mouseup",stopDrag),document.addEventListener("touchend",stopDrag),!0)}function startDrag(el,dragConfig,event){if(null!==dragConfig.validateDragStart&&!dragConfig.validateDragStart(dragConfig.data,el,event))return;if(delayTimeout=null,null!==currentDrag)return;currentDrag={el:el,dragConfig:dragConfig};const elBoundingBox=el.getBoundingClientRect(),pageX=event instanceof MouseEvent&&event.pageX||event instanceof TouchEvent&&event.touches[0].pageX,pageY=event instanceof MouseEvent&&event.pageY||event instanceof TouchEvent&&event.touches[0].pageY;dragMouseOffsetX=pageX-elBoundingBox.left,dragMouseOffsetY=pageY-elBoundingBox.top,dragElement=el.cloneNode(!0),dragElement.classList.add(dragConfig.dragElementCls),dragElement.style.width=`${elBoundingBox.width}px`,dragElement.style.translate=`${pageX-dragMouseOffsetX}px ${pageY-dragMouseOffsetY}px`,dragElement.style.left="0",dragElement.style.top="0",document.body.appendChild(dragElement),el.classList.add(dragConfig.draggingStateCls),(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.onDragStart)&&currentDrag.dragConfig.onDragStart(currentDrag.dragConfig,el,dragElement),document.addEventListener("mousemove",moveDrag),document.addEventListener("touchmove",moveDrag)}let rotationTimeout=0;function moveDrag(event){if(null===currentDrag)return void stopDrag();const pageX=event instanceof MouseEvent&&event.pageX||event instanceof TouchEvent&&event.touches[0].pageX,pageY=event instanceof MouseEvent&&event.pageY||event instanceof TouchEvent&&event.touches[0].pageY;if(dragElement){const oldX=Number(dragElement.dataset.translateX),newX=pageX-dragMouseOffsetX,newY=pageY-dragMouseOffsetY;dragElement.style.rotate=function calculateRotation(oldX,newX){if(oldX&&Math.abs(newX-oldX)>2)return(newX-oldX>0?5:-5)+"deg";return""}(oldX,newX),clearTimeout(rotationTimeout),rotationTimeout=window.setTimeout((()=>{dragElement&&(dragElement.style.rotate="0deg")}),100),dragElement.style.translate=`${newX}px ${newY}px`,dragElement.dataset.translateX=newX.toString()}"touchmove"===event.type&&dropZones.forEach((zone=>{!function isEventOverElement(event,el){const pageX=event instanceof MouseEvent&&event.pageX||event instanceof TouchEvent&&event.touches[0].pageX,pageY=event instanceof MouseEvent&&event.pageY||event instanceof TouchEvent&&event.touches[0].pageY,box=el.getBoundingClientRect();return pageX>=box.x&&pageX<=box.x+box.width&&pageY>=box.y&&pageY<=box.y+box.height}(event,zone.el)?null!==currentDrop&&zone.el===currentDrop.el&&leaveDropZone(zone.el,zone.dropConfig):null!==currentDrop&&zone.el===currentDrop.el||enterDropZone(zone.el,zone.dropConfig)}))}function stopDrag(){var _a;if(null!==delayTimeout)return window.clearTimeout(delayTimeout),void(delayTimeout=null);const validDrag=function validateDrag(){let valid=!0,customDragValidation=!0;null===currentDrag&&(valid=!1);null!==currentDrag&&(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.validateDrag)&&(customDragValidation=currentDrag.dragConfig.validateDrag(currentDrag.dragConfig.data,null==currentDrop?void 0:currentDrop.dropConfig.data));return valid&&customDragValidation}(),validDrop=validateDrop();validDrag&&currentDrag&&(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.onDrop)&&currentDrag.dragConfig.onDrop(currentDrag.dragConfig.data,validDrop?null===(_a=null==currentDrop?void 0:currentDrop.dropConfig)||void 0===_a?void 0:_a.data:null),validDrop&&currentDrop&&(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrop.dropConfig.onDrop)&&currentDrop.dropConfig.onDrop(null==currentDrag?void 0:currentDrag.dragConfig.data,currentDrop.dropConfig.data),document.removeEventListener("mousemove",moveDrag),document.removeEventListener("touchmove",moveDrag),document.removeEventListener("mouseup",stopDrag),document.removeEventListener("touchend",stopDrag),null!==dragElement&&(dragElement.remove(),dragElement=null),null!==currentDrag&&(currentDrag.el.classList.remove(currentDrag.dragConfig.draggingStateCls),currentDrag.el.classList.remove(currentDrag.dragConfig.validDragCls),currentDrag.el.classList.remove(currentDrag.dragConfig.invalidDragCls),currentDrag=null),null!==currentDrop&&(currentDrop.el.classList.remove(currentDrop.dropConfig.validDropCls),currentDrop.el.classList.remove(currentDrop.dropConfig.invalidDropCls),currentDrop=null),dragMouseOffsetX=0,dragMouseOffsetY=0}function enterDropZone(el,dropConfig){if(null===currentDrag)return;currentDrop={el:el,dropConfig:dropConfig};const valid=validateDrop();valid?(el.classList.add(dropConfig.validDropCls),el.classList.remove(dropConfig.invalidDropCls),dragElement&&(dragElement.classList.add(currentDrag.dragConfig.validDragCls),dragElement.classList.remove(currentDrag.dragConfig.invalidDragCls))):(el.classList.add(dropConfig.invalidDropCls),el.classList.remove(dropConfig.validDropCls),dragElement&&(dragElement.classList.add(currentDrag.dragConfig.invalidDragCls),dragElement.classList.remove(currentDrag.dragConfig.validDragCls))),(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.onDragEnter)&&currentDrag.dragConfig.onDragEnter(currentDrag.dragConfig.data,currentDrop.dropConfig.data,valid)}function leaveDropZone(el,dropConfig){null!==currentDrag&&null!==currentDrop&&((0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.onDragLeave)&&currentDrag.dragConfig.onDragLeave(currentDrag.dragConfig.data,currentDrop.dropConfig.data),el.classList.remove(dropConfig.validDropCls),el.classList.remove(dropConfig.invalidDropCls),dragElement&&(dragElement.classList.remove(currentDrag.dragConfig.validDragCls),dragElement.classList.remove(currentDrag.dragConfig.invalidDragCls)),currentDrop=null)}function validateDrop(){let valid=!0,customDragValidation=!0,customDropValidation=!0;return null!==currentDrag&&null!==currentDrop&&currentDrop.dropConfig.dragGroup===currentDrag.dragConfig.dragGroup||(valid=!1),null!==currentDrag&&(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrag.dragConfig.validateDrop)&&(customDragValidation=currentDrag.dragConfig.validateDrop(currentDrag.dragConfig.data,null==currentDrop?void 0:currentDrop.dropConfig.data)),null!==currentDrop&&(0,lodash_es_isFunction__WEBPACK_IMPORTED_MODULE_0__.Z)(currentDrop.dropConfig.validateDrop)&&(customDropValidation=currentDrop.dropConfig.validateDrop(null==currentDrag?void 0:currentDrag.dragConfig.data,currentDrop.dropConfig.data)),valid&&customDragValidation&&customDropValidation}function mergeConfigs(defaultConfig,binding){const mergedConfig=Object.assign({},defaultConfig);return(0,lodash_es_isObject__WEBPACK_IMPORTED_MODULE_1__.Z)(binding.value)?Object.assign(mergedConfig,binding.value):Object.assign(mergedConfig,{data:binding.value}),mergedConfig}const draggable={inserted(el,binding){const dragConfig=mergeConfigs(defaultDragConfig,binding);el.dragConfig=dragConfig,el.boundDragListener=onDrag.bind(this,el,el.dragConfig),dragConfig.disabled||(el.classList.add(dragConfig.draggableCls),el.addEventListener("mousedown",el.boundDragListener),el.addEventListener("touchstart",el.boundDragListener))},update(el,binding){const dragConfig=mergeConfigs(defaultDragConfig,binding);el.dragConfig&&el.dragConfig.disabled!==dragConfig.disabled&&(dragConfig.disabled?(el.classList.remove(el.dragConfig.draggableCls),el.boundDragListener&&(el.removeEventListener("mousedown",el.boundDragListener),el.removeEventListener("touchstart",el.boundDragListener))):(el.classList.remove(el.dragConfig.draggableCls),el.classList.add(dragConfig.draggableCls),el.boundDragListener&&(el.addEventListener("mousedown",el.boundDragListener),el.addEventListener("touchstart",el.boundDragListener)))),Object.assign(el.dragConfig,dragConfig)},unbind(el,binding){const dragConfig=mergeConfigs(defaultDragConfig,binding);el.classList.remove(dragConfig.draggableCls),el.boundDragListener&&(el.removeEventListener("mousedown",el.boundDragListener),el.removeEventListener("touchstart",el.boundDragListener))}},droppable={inserted(el,binding){const dropConfig=mergeConfigs(defaultDropConfig,binding);dropZones.push({el:el,dropConfig:dropConfig}),el.classList.add(dropConfig.droppableCls),el.addEventListener("mouseenter",enterDropZone.bind(this,el,dropConfig)),el.addEventListener("mouseleave",leaveDropZone.bind(this,el,dropConfig))},unbind(el,binding){const dropConfig=mergeConfigs(defaultDropConfig,binding);dropZones.splice(dropZones.findIndex((zone=>zone.el===el)),1),el.classList.remove(dropConfig.droppableCls),el.removeEventListener("mouseenter",enterDropZone.bind(this,el,dropConfig)),el.removeEventListener("mouseleave",leaveDropZone.bind(this,el,dropConfig))},update:(el,binding)=>{const dropZone=dropZones.find((zone=>zone.el===el));(0,lodash_es_isObject__WEBPACK_IMPORTED_MODULE_1__.Z)(binding.value)?Object.assign(null==dropZone?void 0:dropZone.dropConfig,binding.value):Object.assign(null==dropZone?void 0:dropZone.dropConfig,{data:binding.value})}}},"./src/components/navigation/sw-search/sw-search.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_search}});var sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_search_sw_searchvue_type_script_lang_ts_=(0,vue_esm.aZ)({components:{"sw-base-field":sw_base_field.Z,"sw-icon":sw_icon.Z},props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"default",validator:value=>["small","default"].includes(value)},disabled:{type:Boolean,required:!1,default:!1}},i18n:{messages:{en:{"sw-search":{searchPlaceholder:"Search"}},de:{"sw-search":{searchPlaceholder:"Suchen"}}}},emits:["change","input"],setup(props,{emit:emit}){const hasFocus=(0,vue_esm.iH)(!1),currentValue=(0,vue_esm.iH)(props.value);(0,vue_esm.YP)((()=>props.value),(value=>{currentValue.value=value}));return{hasFocus:hasFocus,setFocusClass:()=>{hasFocus.value=!0},removeFocusClass:()=>{hasFocus.value=!1},onChange:event=>{emit("change",event.target.value||"")},onInput:event=>{emit("input",event.target.value)},currentValue:currentValue}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_search_sw_searchvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{staticClass:"sw-search",attrs:{disabled:_vm.disabled,"has-focus":_vm.hasFocus,size:_vm.size},scopedSlots:_vm._u([{key:"element",fn:function({identification:identification}){return[_c("sw-icon",{attrs:{name:"regular-search-s"}}),_vm._v(" "),_c("input",{staticClass:"sw-search__text-input",attrs:{id:identification,type:"text",name:identification,disabled:_vm.disabled,placeholder:_vm.$t(_vm.placeholder)?_vm.$t(_vm.placeholder).toString():_vm.$t("sw-search.searchPlaceholder").toString()},domProps:{value:_vm.currentValue},on:{input:_vm.onInput,change:_vm.onChange,focus:_vm.setFocusClass,blur:_vm.removeFocusClass}})]}}])})}),[],!1,null,null,null).exports;var sw_search=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"sw-search",description:"",tags:{},props:[{name:"value",description:"The value of the search field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",description:"The size of the search field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"change"},{name:"input"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/navigation/sw-search/sw-search.vue"]}},"./src/components/overlay/sw-popover-item-result/sw-popover-item-result.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_popover_item_result}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_search=__webpack_require__("./src/components/navigation/sw-search/sw-search.vue"),sw_popover_item=__webpack_require__("./src/components/overlay/sw-popover-item/sw-popover-item.vue"),sw_smooth_reflow=__webpack_require__("./src/components/_internal/sw-smooth-reflow.vue"),dragdrop_directive=__webpack_require__("./src/directives/dragdrop.directive.ts"),sw_popover_item_result_sw_popover_item_resultvue_type_script_lang_ts_=(0,vue_esm.aZ)({name:"SwPopoverItemResult",directives:{draggable:dragdrop_directive.E,droppable:dragdrop_directive.W},components:{"sw-search":sw_search.Z,"sw-popover-item":sw_popover_item.Z,"sw-smooth-reflow":sw_smooth_reflow.Z},props:{options:{type:Array,required:!0},groups:{type:Array,required:!1,default:()=>[]},hideSearch:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},selectable:{type:Boolean,default:!1},hidable:{type:Boolean,default:!1}},emits:["change-checkbox","change-visibility","click-group-action","click-option","change-order","search"],setup(props,{emit:emit}){const dragConfig={disabled:!props.draggable,delay:200,onDragStart:()=>{document.body.classList.add("is-popover-item-result-dragging")},onDrop:(dragConfigData,dropConfigData)=>{document.body.classList.remove("is-popover-item-result-dragging"),emit("change-order",{itemId:null==dragConfigData?void 0:dragConfigData.id,dropZone:null==dropConfigData?void 0:dropConfigData.dropZone,dropId:null==dropConfigData?void 0:dropConfigData.id})}},isOptionDraggable=option=>props.draggable&&option.isSortable;return{getOptionsForGroup:groupId=>props.options.filter((option=>option.parentGroup===groupId)),getDragConfigForOption:option=>Object.assign(Object.assign({},dragConfig),{disabled:!isOptionDraggable(option)}),isOptionDraggable:isOptionDraggable,getIconForOption:option=>isOptionDraggable(option)?"solid-grip-vertical-s":props.draggable?"solid-thumbtack":void 0,dropConfig:{},dragConfig:dragConfig}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_popover_item_result_sw_popover_item_resultvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-popover-item-result"},[_vm.hideSearch?_vm._e():_c("sw-search",{attrs:{size:"small"},on:{input:function($event){return _vm.$emit("search",$event)}}}),_vm._v(" "),_vm._l([void 0,..._vm.groups],(function(group){return[_c("transition",{key:"transition-group-"+(group&&group.id),attrs:{name:"option-fade"}},[group&&_vm.getOptionsForGroup(group.id).length>0?_c("div",{key:group.id,staticClass:"sw-popover-item-result__group-header",attrs:{"aria-label":group.label}},[_c("span",{staticClass:"sw-popover-item-result__group-label"},[_vm._v(_vm._s(group.label))]),_vm._v(" "),group.actionLabel?_c("button",{staticClass:"sw-popover-item-result__group-action",on:{click:()=>_vm.$emit("click-group-action",group.id)}},[_vm._v("\n          "+_vm._s(group.actionLabel)+"\n        ")]):_vm._e()]):_vm._e()]),_vm._v(" "),_c("sw-smooth-reflow",{key:"smooth-reflow-"+(group&&group.id)},[_c("transition-group",{attrs:{name:"option-item",tag:"div"}},_vm._l(_vm.getOptionsForGroup(group&&group.id),(function(option){return _c("div",{key:option.id,staticClass:"sw-popover-item-result__option",attrs:{"aria-label":(group&&group.label?group.label:"No group")+": "+option.label}},[_vm.isOptionDraggable(option)?_c("div",{directives:[{name:"droppable",rawName:"v-droppable",value:{..._vm.dropConfig,data:{...option,dropZone:"before"}},expression:"{ ...dropConfig, data: { ...option, dropZone: 'before' } }"}],staticClass:"sw-popover-item-result__option_drop_before"}):_vm._e(),_vm._v(" "),_c("sw-popover-item",{directives:[{name:"draggable",rawName:"v-draggable",value:{..._vm.getDragConfigForOption(option),data:option},expression:"{ ...getDragConfigForOption(option), data: option }"}],staticClass:"sw-popover-item-result__option_item",attrs:{"is-option-item":_vm.isOptionDraggable(option),label:option.label,"show-checkbox":_vm.selectable,"checkbox-checked":option.isSelected,"contextual-detail":option.contextualDetail,"meta-copy":option.metaCopy,"show-visibility":_vm.hidable&&option.isHidable,visible:option.isVisible,icon:_vm.getIconForOption(option),"on-label-click":option.isClickable?()=>_vm.$emit("click-option",option.id):void 0,disabled:option.disabled},on:{"change-checkbox":function($event){return _vm.$emit("change-checkbox",option.id,$event)},"change-visibility":function($event){return _vm.$emit("change-visibility",option.id,$event)}}}),_vm._v(" "),_vm.isOptionDraggable(option)?_c("div",{directives:[{name:"droppable",rawName:"v-droppable",value:{..._vm.dropConfig,data:{...option,dropZone:"after"}},expression:"{ ...dropConfig, data: { ...option, dropZone: 'after' } }"}],staticClass:"sw-popover-item-result__option_drop_after"}):_vm._e()],1)})),0)],1)]}))],2)}),[],!1,null,null,null).exports;var sw_popover_item_result=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwPopoverItemResult",exportName:"default",description:"",tags:{},props:[{name:"options",type:{name:"Option[]"},required:!0},{name:"groups",type:{name:"Group[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"hideSearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"draggable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hidable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"search"},{name:"click-group-action"},{name:"change-checkbox"},{name:"change-visibility"},{name:"click-option"},{name:"change-order"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/overlay/sw-popover-item-result/sw-popover-item-result.vue"]}}}]);