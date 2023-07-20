(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[11274],{"./src/components/form/sw-number-field/sw-number-field.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return sw_number_field_stories},defaultStory:function(){return defaultStory}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_text_field=__webpack_require__("./src/components/form/sw-text-field/sw-text-field.vue"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_number_field_sw_number_fieldvue_type_script_lang_ts_=vue_esm.ZP.extend({name:"SwNumberField",components:{"sw-icon":sw_icon.Z},extends:sw_text_field.Z,inheritAttrs:!1,props:{numberType:{type:String,required:!1,default:"float",validator(value){return["float","int"].includes(value)}},step:{type:Number,required:!1,default:null},min:{type:Number,required:!1,default:null},max:{type:Number,required:!1,default:null},value:{type:Number,required:!1,default:null},digits:{type:Number,required:!1,default:2,validator(value){const isInt=value===Math.floor(value);return isInt||console.warn("sw-number-field","Provided prop digits must be of type integer"),isInt}},fillDigits:{type:Boolean,required:!1,default:!1},allowEmpty:{type:Boolean,required:!1,default:!1}},data(){return{upControlClasses:null,downControlClasses:null,upHandler:null,downHandler:null}},computed:{realStep(){return null===this.step?"int"===this.numberType?1:.01:"int"===this.numberType?Math.round(this.step):this.step},realMinimum(){return null===this.min?null:"int"===this.numberType?Math.ceil(this.min):this.min},realMaximum(){return null===this.max?null:"int"===this.numberType?Math.floor(this.max):this.max},stringRepresentation(){return null===this.currentValue?"":this.fillDigits&&"int"!==this.numberType?this.currentValue.toFixed(this.digits):this.currentValue.toString()},controlClasses(){return{disabled:this.disabled,error:!!this.error}}},watch:{value:{handler(){null!==this.value&&void 0!==this.value?this.computeValue(this.value.toString()):this.currentValue=null},immediate:!0}},methods:{onChange(event){this.computeValue(event.target.value),this.$emit("change",this.currentValue)},onInput(event){let val=Number.parseFloat(event.target.value);Number.isNaN(val)||(this.max&&val>this.max&&(val=this.max),this.min&&val<this.min&&(val=this.min),this.$emit("input-change",val))},increaseNumberByStep(){this.disabled||(this.upControlClasses={"sw-icon--toggled":!0},this.upHandler&&window.clearTimeout(this.upHandler),this.upHandler=window.setTimeout((()=>{this.upControlClasses={}}),100),this.computeValue((this.currentValue+this.realStep).toString()),this.$emit("change",this.currentValue))},decreaseNumberByStep(){this.disabled||(this.downControlClasses={"sw-icon--toggled":!0},this.downHandler&&window.clearTimeout(this.downHandler),this.downHandler=window.setTimeout((()=>{this.downControlClasses={}}),100),this.computeValue((this.currentValue-this.realStep).toString()),this.$emit("change",this.currentValue))},computeValue(stringRepresentation){const value=this.getNumberFromString(stringRepresentation);this.currentValue=this.parseValue(value)},parseValue(value){return null===value||Number.isNaN(value)||!Number.isFinite(value)?this.allowEmpty?null:this.parseValue(0):this.checkForInteger(this.checkBoundaries(value))},checkBoundaries(value){return null!==this.realMaximum&&value>this.realMaximum&&(value=this.realMaximum),null!==this.realMinimum&&value<this.realMinimum&&(value=this.realMinimum),value},getNumberFromString(value){let splits=value.split("e").shift();if(splits=splits.replace(/,/g,".").split("."),1===splits.length)return parseFloat(splits[0]);if("int"===this.numberType)return parseInt(splits.join(""),10);const decimals=splits[splits.length-1].length,float=parseFloat(splits.join(".")).toFixed(decimals);return decimals>this.digits?Math.round(float*Math.pow(10,this.digits))/Math.pow(10,this.digits):Number(float)},checkForInteger(value){if("int"!==this.numberType)return value;const floor=Math.floor(value);return floor!==value&&this.$nextTick((()=>{this.$forceUpdate()})),floor}}}),component=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_number_field_sw_number_fieldvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{attrs:{disabled:_vm.disabled,required:_vm.required,"is-inherited":_vm.isInherited,"is-inheritance-field":_vm.isInheritanceField,"disable-inheritance-toggle":_vm.disableInheritanceToggle,copyable:_vm.copyable,"copyable-tooltip":_vm.copyableTooltip,"copyable-text":_vm.stringRepresentation,"has-focus":_vm.hasFocus,"help-text":_vm.helpText,name:_vm.name,size:_vm.size},on:{"inheritance-restore":function($event){return _vm.$emit("inheritance-restore",$event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]},proxy:!0},{key:"field-prefix",fn:function(){return[_vm._t("prefix")]},proxy:!0},{key:"element",fn:function({identification:identification}){return[_c("input",_vm._g({attrs:{id:_vm.createInputId(identification),type:"text",name:identification,disabled:_vm.disabled,placeholder:_vm.placeholder},domProps:{value:_vm.stringRepresentation},on:{input:_vm.onInput,keydown:[function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])?null:_vm.increaseNumberByStep.apply(null,arguments)},function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])?null:_vm.decreaseNumberByStep.apply(null,arguments)}],change:_vm.onChange,focus:_vm.setFocusClass,blur:_vm.removeFocusClass}},_vm.additionalListeners)),_vm._v(" "),_c("div",{staticClass:"sw-field--controls",class:_vm.controlClasses},[_c("sw-icon",{class:_vm.upControlClasses,attrs:{name:"regular-chevron-up-s","data-testid":"sw-number-field-increase-button"},on:{click:_vm.increaseNumberByStep}}),_vm._v(" "),_c("sw-icon",{class:_vm.downControlClasses,attrs:{name:"regular-chevron-down-s","data-testid":"sw-number-field-decrease-button"},on:{click:_vm.decreaseNumberByStep}})],1)]}},{key:"field-suffix",fn:function(){return[_vm._t("suffix")]},proxy:!0},{key:"error",fn:function(){return[_vm.error?_c("sw-field-error",{attrs:{error:_vm.error}}):_vm._e()]},proxy:!0},{key:"field-hint",fn:function(){return[_vm._t("hint")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;var sw_number_field=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwNumberField",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The value of the field.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"numberType",description:"Defines if the number should be a floating point number or integer.",values:["float","int"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'float'"}},{name:"step",description:"Defines the amount of which the number is increased or decreased per step.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"min",description:"Defines the minimum value of the number.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"max",description:"Defines the maximum value of the number.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"digits",description:"Defines how many digits should be displayed after the decimal point.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"fillDigits",description:"Defines if digits should be filled with zeros if the value is smaller than the minimum value.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"allowEmpty",description:"Defines if the field can be empty.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}},{name:"input-change",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-number-field/sw-number-field.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]};var arg_types=__webpack_require__("./src/components/form/_internal/sw-base-field/arg-types.js");const meta={title:"Components/Form/sw-number-field",component:sw_number_field,render:(args,{argTypes:argTypes})=>({template:'\n      <div>\n        <sw-number-field\n          v-bind="$props"\n          v-model="currentValue"\n          @change="change"\n          @input="input"\n          @inheritance-restore="inheritanceRestoreWrapper"\n          @inheritance-remove="inheritanceRemoveWrapper">\n          <template\n            v-if="$props.prefix"\n            #prefix>\n            {{ $props.prefix }}\n          </template>\n          <template\n            v-if="$props.suffix"\n            #suffix>\n            {{ $props.suffix }}\n          </template>\n          <template\n            v-if="$props.hint"\n            #hint>\n            {{ $props.hint }}\n          </template>\n        </sw-number-field>\n        <h4 style="display: none;">hidden</h4>\n      </div>',props:Object.keys(argTypes),components:{SwNumberField:sw_number_field},data(){return{currentValue:""}},watch:{value(v){this.currentValue!==v&&(this.currentValue=v)}},created(){this.currentValue=this.value},methods:{inheritanceRemoveWrapper(){this.inheritanceRemove(...arguments),this.isInherited=!1},inheritanceRestoreWrapper(){this.inheritanceRestore(...arguments),this.isInherited=!0}}}),args:{label:"Numberfield",step:1,numberType:"int"},argTypes:{...arg_types.Z}};var sw_number_field_stories=meta;const defaultStory={name:"sw-number-field"};defaultStory.parameters={...defaultStory.parameters,docs:{...defaultStory.parameters?.docs,source:{originalSource:"{\n  name: 'sw-number-field'\n}",...defaultStory.parameters?.docs?.source}}};const __namedExportsOrder=["defaultStory"]},"./src/components/form/_internal/sw-base-field/arg-types.js":function(__unused_webpack_module,__webpack_exports__){"use strict";__webpack_exports__.Z={change:{action:"change",table:{category:"Events"}},input:{action:"input",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},inheritanceRestore:{action:"inheritance-restore",table:{category:"Events"}},label:{control:{type:"text"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}},hint:{control:{type:"text"}}}},"./node_modules/core-js/internals/a-possible-prototype.js":function(module,__unused_webpack_exports,__webpack_require__){var isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),$String=String,$TypeError=TypeError;module.exports=function(argument){if("object"==typeof argument||isCallable(argument))return argument;throw $TypeError("Can't set "+$String(argument)+" as a prototype")}},"./node_modules/core-js/internals/array-buffer-basic-detection.js":function(module){module.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},"./node_modules/core-js/internals/array-buffer-view-core.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";var NAME,Constructor,Prototype,NATIVE_ARRAY_BUFFER=__webpack_require__("./node_modules/core-js/internals/array-buffer-basic-detection.js"),DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),classof=__webpack_require__("./node_modules/core-js/internals/classof.js"),tryToString=__webpack_require__("./node_modules/core-js/internals/try-to-string.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),defineBuiltInAccessor=__webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js"),isPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js"),getPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js"),setPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-set-prototype-of.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),uid=__webpack_require__("./node_modules/core-js/internals/uid.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,Int8Array=global.Int8Array,Int8ArrayPrototype=Int8Array&&Int8Array.prototype,Uint8ClampedArray=global.Uint8ClampedArray,Uint8ClampedArrayPrototype=Uint8ClampedArray&&Uint8ClampedArray.prototype,TypedArray=Int8Array&&getPrototypeOf(Int8Array),TypedArrayPrototype=Int8ArrayPrototype&&getPrototypeOf(Int8ArrayPrototype),ObjectPrototype=Object.prototype,TypeError=global.TypeError,TO_STRING_TAG=wellKnownSymbol("toStringTag"),TYPED_ARRAY_TAG=uid("TYPED_ARRAY_TAG"),NATIVE_ARRAY_BUFFER_VIEWS=NATIVE_ARRAY_BUFFER&&!!setPrototypeOf&&"Opera"!==classof(global.opera),TYPED_ARRAY_TAG_REQUIRED=!1,TypedArrayConstructorsList={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},BigIntArrayConstructorsList={BigInt64Array:8,BigUint64Array:8},getTypedArrayConstructor=function(it){var proto=getPrototypeOf(it);if(isObject(proto)){var state=getInternalState(proto);return state&&hasOwn(state,"TypedArrayConstructor")?state.TypedArrayConstructor:getTypedArrayConstructor(proto)}},isTypedArray=function(it){if(!isObject(it))return!1;var klass=classof(it);return hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass)};for(NAME in TypedArrayConstructorsList)(Prototype=(Constructor=global[NAME])&&Constructor.prototype)?enforceInternalState(Prototype).TypedArrayConstructor=Constructor:NATIVE_ARRAY_BUFFER_VIEWS=!1;for(NAME in BigIntArrayConstructorsList)(Prototype=(Constructor=global[NAME])&&Constructor.prototype)&&(enforceInternalState(Prototype).TypedArrayConstructor=Constructor);if((!NATIVE_ARRAY_BUFFER_VIEWS||!isCallable(TypedArray)||TypedArray===Function.prototype)&&(TypedArray=function TypedArray(){throw TypeError("Incorrect invocation")},NATIVE_ARRAY_BUFFER_VIEWS))for(NAME in TypedArrayConstructorsList)global[NAME]&&setPrototypeOf(global[NAME],TypedArray);if((!NATIVE_ARRAY_BUFFER_VIEWS||!TypedArrayPrototype||TypedArrayPrototype===ObjectPrototype)&&(TypedArrayPrototype=TypedArray.prototype,NATIVE_ARRAY_BUFFER_VIEWS))for(NAME in TypedArrayConstructorsList)global[NAME]&&setPrototypeOf(global[NAME].prototype,TypedArrayPrototype);if(NATIVE_ARRAY_BUFFER_VIEWS&&getPrototypeOf(Uint8ClampedArrayPrototype)!==TypedArrayPrototype&&setPrototypeOf(Uint8ClampedArrayPrototype,TypedArrayPrototype),DESCRIPTORS&&!hasOwn(TypedArrayPrototype,TO_STRING_TAG))for(NAME in TYPED_ARRAY_TAG_REQUIRED=!0,defineBuiltInAccessor(TypedArrayPrototype,TO_STRING_TAG,{configurable:!0,get:function(){return isObject(this)?this[TYPED_ARRAY_TAG]:void 0}}),TypedArrayConstructorsList)global[NAME]&&createNonEnumerableProperty(global[NAME],TYPED_ARRAY_TAG,NAME);module.exports={NATIVE_ARRAY_BUFFER_VIEWS:NATIVE_ARRAY_BUFFER_VIEWS,TYPED_ARRAY_TAG:TYPED_ARRAY_TAG_REQUIRED&&TYPED_ARRAY_TAG,aTypedArray:function(it){if(isTypedArray(it))return it;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(C){if(isCallable(C)&&(!setPrototypeOf||isPrototypeOf(TypedArray,C)))return C;throw TypeError(tryToString(C)+" is not a typed array constructor")},exportTypedArrayMethod:function(KEY,property,forced,options){if(DESCRIPTORS){if(forced)for(var ARRAY in TypedArrayConstructorsList){var TypedArrayConstructor=global[ARRAY];if(TypedArrayConstructor&&hasOwn(TypedArrayConstructor.prototype,KEY))try{delete TypedArrayConstructor.prototype[KEY]}catch(error){try{TypedArrayConstructor.prototype[KEY]=property}catch(error2){}}}TypedArrayPrototype[KEY]&&!forced||defineBuiltIn(TypedArrayPrototype,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&Int8ArrayPrototype[KEY]||property,options)}},exportTypedArrayStaticMethod:function(KEY,property,forced){var ARRAY,TypedArrayConstructor;if(DESCRIPTORS){if(setPrototypeOf){if(forced)for(ARRAY in TypedArrayConstructorsList)if((TypedArrayConstructor=global[ARRAY])&&hasOwn(TypedArrayConstructor,KEY))try{delete TypedArrayConstructor[KEY]}catch(error){}if(TypedArray[KEY]&&!forced)return;try{return defineBuiltIn(TypedArray,KEY,forced?property:NATIVE_ARRAY_BUFFER_VIEWS&&TypedArray[KEY]||property)}catch(error){}}for(ARRAY in TypedArrayConstructorsList)!(TypedArrayConstructor=global[ARRAY])||TypedArrayConstructor[KEY]&&!forced||defineBuiltIn(TypedArrayConstructor,KEY,property)}},getTypedArrayConstructor:getTypedArrayConstructor,isView:function isView(it){if(!isObject(it))return!1;var klass=classof(it);return"DataView"===klass||hasOwn(TypedArrayConstructorsList,klass)||hasOwn(BigIntArrayConstructorsList,klass)},isTypedArray:isTypedArray,TypedArray:TypedArray,TypedArrayPrototype:TypedArrayPrototype}},"./node_modules/core-js/internals/array-from-constructor-and-list.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");module.exports=function(Constructor,list){for(var index=0,length=lengthOfArrayLike(list),result=new Constructor(length);length>index;)result[index]=list[index++];return result}},"./node_modules/core-js/internals/array-to-reversed.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js");module.exports=function(O,C){for(var len=lengthOfArrayLike(O),A=new C(len),k=0;k<len;k++)A[k]=O[len-k-1];return A}},"./node_modules/core-js/internals/array-with.js":function(module,__unused_webpack_exports,__webpack_require__){var lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),$RangeError=RangeError;module.exports=function(O,C,index,value){var len=lengthOfArrayLike(O),relativeIndex=toIntegerOrInfinity(index),actualIndex=relativeIndex<0?len+relativeIndex:relativeIndex;if(actualIndex>=len||actualIndex<0)throw $RangeError("Incorrect index");for(var A=new C(len),k=0;k<len;k++)A[k]=k===actualIndex?value:O[k];return A}},"./node_modules/core-js/internals/classof.js":function(module,__unused_webpack_exports,__webpack_require__){var TO_STRING_TAG_SUPPORT=__webpack_require__("./node_modules/core-js/internals/to-string-tag-support.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),classofRaw=__webpack_require__("./node_modules/core-js/internals/classof-raw.js"),TO_STRING_TAG=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),$Object=Object,CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}());module.exports=TO_STRING_TAG_SUPPORT?classofRaw:function(it){var O,tag,result;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(tag=function(it,key){try{return it[key]}catch(error){}}(O=$Object(it),TO_STRING_TAG))?tag:CORRECT_ARGUMENTS?classofRaw(O):"Object"==(result=classofRaw(O))&&isCallable(O.callee)?"Arguments":result}},"./node_modules/core-js/internals/correct-prototype-getter.js":function(module,__unused_webpack_exports,__webpack_require__){var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=!fails((function(){function F(){}return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype}))},"./node_modules/core-js/internals/define-built-in-accessor.js":function(module,__unused_webpack_exports,__webpack_require__){var makeBuiltIn=__webpack_require__("./node_modules/core-js/internals/make-built-in.js"),defineProperty=__webpack_require__("./node_modules/core-js/internals/object-define-property.js");module.exports=function(target,name,descriptor){return descriptor.get&&makeBuiltIn(descriptor.get,name,{getter:!0}),descriptor.set&&makeBuiltIn(descriptor.set,name,{setter:!0}),defineProperty.f(target,name,descriptor)}},"./node_modules/core-js/internals/function-uncurry-this-accessor.js":function(module,__unused_webpack_exports,__webpack_require__){var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js");module.exports=function(object,key,method){try{return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object,key)[method]))}catch(error){}}},"./node_modules/core-js/internals/is-big-int-array.js":function(module,__unused_webpack_exports,__webpack_require__){var classof=__webpack_require__("./node_modules/core-js/internals/classof.js");module.exports=function(it){var klass=classof(it);return"BigInt64Array"==klass||"BigUint64Array"==klass}},"./node_modules/core-js/internals/object-get-prototype-of.js":function(module,__unused_webpack_exports,__webpack_require__){var hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),sharedKey=__webpack_require__("./node_modules/core-js/internals/shared-key.js"),CORRECT_PROTOTYPE_GETTER=__webpack_require__("./node_modules/core-js/internals/correct-prototype-getter.js"),IE_PROTO=sharedKey("IE_PROTO"),$Object=Object,ObjectPrototype=$Object.prototype;module.exports=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(O){var object=toObject(O);if(hasOwn(object,IE_PROTO))return object[IE_PROTO];var constructor=object.constructor;return isCallable(constructor)&&object instanceof constructor?constructor.prototype:object instanceof $Object?ObjectPrototype:null}},"./node_modules/core-js/internals/object-set-prototype-of.js":function(module,__unused_webpack_exports,__webpack_require__){var uncurryThisAccessor=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this-accessor.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),aPossiblePrototype=__webpack_require__("./node_modules/core-js/internals/a-possible-prototype.js");module.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var setter,CORRECT_SETTER=!1,test={};try{(setter=uncurryThisAccessor(Object.prototype,"__proto__","set"))(test,[]),CORRECT_SETTER=test instanceof Array}catch(error){}return function setPrototypeOf(O,proto){return anObject(O),aPossiblePrototype(proto),CORRECT_SETTER?setter(O,proto):O.__proto__=proto,O}}():void 0)},"./node_modules/core-js/internals/to-big-int.js":function(module,__unused_webpack_exports,__webpack_require__){var toPrimitive=__webpack_require__("./node_modules/core-js/internals/to-primitive.js"),$TypeError=TypeError;module.exports=function(argument){var prim=toPrimitive(argument,"number");if("number"==typeof prim)throw $TypeError("Can't convert number to bigint");return BigInt(prim)}},"./node_modules/core-js/internals/to-string-tag-support.js":function(module,__unused_webpack_exports,__webpack_require__){var test={};test[__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag")]="z",module.exports="[object z]"===String(test)},"./node_modules/core-js/modules/es.typed-array.to-reversed.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var arrayToReversed=__webpack_require__("./node_modules/core-js/internals/array-to-reversed.js"),ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor;exportTypedArrayMethod("toReversed",(function toReversed(){return arrayToReversed(aTypedArray(this),getTypedArrayConstructor(this))}))},"./node_modules/core-js/modules/es.typed-array.to-sorted.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),arrayFromConstructorAndList=__webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,sort=uncurryThis(ArrayBufferViewCore.TypedArrayPrototype.sort);exportTypedArrayMethod("toSorted",(function toSorted(compareFn){void 0!==compareFn&&aCallable(compareFn);var O=aTypedArray(this),A=arrayFromConstructorAndList(getTypedArrayConstructor(O),O);return sort(A,compareFn)}))},"./node_modules/core-js/modules/es.typed-array.with.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){"use strict";var arrayWith=__webpack_require__("./node_modules/core-js/internals/array-with.js"),ArrayBufferViewCore=__webpack_require__("./node_modules/core-js/internals/array-buffer-view-core.js"),isBigIntArray=__webpack_require__("./node_modules/core-js/internals/is-big-int-array.js"),toIntegerOrInfinity=__webpack_require__("./node_modules/core-js/internals/to-integer-or-infinity.js"),toBigInt=__webpack_require__("./node_modules/core-js/internals/to-big-int.js"),aTypedArray=ArrayBufferViewCore.aTypedArray,getTypedArrayConstructor=ArrayBufferViewCore.getTypedArrayConstructor,exportTypedArrayMethod=ArrayBufferViewCore.exportTypedArrayMethod,PROPER_ORDER=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(error){return 8===error}}();exportTypedArrayMethod("with",{with:function(index,value){var O=aTypedArray(this),relativeIndex=toIntegerOrInfinity(index),actualValue=isBigIntArray(O)?toBigInt(value):+value;return arrayWith(O,getTypedArrayConstructor(O),relativeIndex,actualValue)}}.with,!PROPER_ORDER)},"./src/components/form/_internal/sw-field-error/sw-field-error.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_field_error}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_field_error_sw_field_errorvue_type_script_lang_ts_=vue_esm.ZP.extend({name:"SwFieldError",i18n:{messages:{en:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Missing permissions",FRAMEWORK__DELETE_RESTRICTED:"Deletion failed",INVALID_MEDIA_URL:"Please enter a valid URL to upload a file.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"You must choose a type for this rule.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"The type can not be assigned while category is an entry point.",SHOPWARE_INVALID_IP:"Please enter a valid IP address.",INVALID_URL:"Please enter a valid url.",INVALID_MAIL:"Please enter a valid email address.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Too many requests. Please wait {seconds} seconds before trying again.",DUPLICATED_URL:"This URL is already in use. Please choose another URL.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"This field must not be empty."}},de:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Fehlende Berechtigungen",FRAMEWORK__DELETE_RESTRICTED:"Löschen fehlgeschlagen",INVALID_MEDIA_URL:"Bitte gib eine gültige URL ein, um eine Datei hochzuladen.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"Du musst einen Typ für diese Regel auswählen.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"Dieser Typ kann nicht gewählt werden, während die Kategorie als Einstiegspunkt festgelegt ist.",SHOPWARE_INVALID_IP:"Bitte gib eine gültige IP-Adresse ein.",INVALID_URL:"Bitte gib eine gültige URL ein.",INVALID_MAIL:"Bitte gib eine gültige E-Mail-Adresse ein.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",DUPLICATED_URL:"Diese URL wird bereits genutzt. Bitte wähle eine andere Domain.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"Dieses Feld darf nicht leer sein"}}}},components:{"sw-icon":sw_icon.Z},props:{error:{type:Object,required:!1,default:null}},computed:{errorMessage(){if(!this.error)return"";const translationKey=`sw-field-error.${this.error.code}`,translation=this.$tc(translationKey,1,this.error.parameters||{});return translation===translationKey?this.error.detail:translation}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_field_error_sw_field_errorvue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return this.error?_c("div",{staticClass:"sw-field__error",attrs:{"aria-label":"Error message"}},[_c("sw-icon",{attrs:{name:"solid-exclamation-circle"}}),this._v("\n  "+this._s(this.errorMessage)+"\n")],1):this._e()}),[],!1,null,null,null).exports;var sw_field_error=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwFieldError",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/_internal/sw-field-error/sw-field-error.vue"]}},"./src/components/form/sw-text-field/sw-text-field.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return sw_text_field}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_field_error=__webpack_require__("./src/components/form/_internal/sw-field-error/sw-field-error.vue"),sw_text_field_sw_text_fieldvue_type_script_lang_ts_=vue_esm.ZP.extend({name:"SwTextField",components:{"sw-field-error":sw_field_error.Z,"sw-base-field":sw_base_field.Z},inheritAttrs:!1,props:{value:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},label:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},size:{type:String,required:!1,default:"default",validator(value){return["small","default"].includes(value)}},copyable:{type:Boolean,required:!1,default:!1},copyableTooltip:{type:Boolean,required:!1,default:!1},error:{type:Object,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},isInherited:{type:Boolean,required:!1,default:!1},isInheritanceField:{type:Boolean,required:!1,default:!1},disableInheritanceToggle:{type:Boolean,required:!1,default:!1},idSuffix:{type:String,required:!1,default:""},name:{type:String,required:!1,default:null}},data(){return{currentValue:this.value,hasFocus:!1}},computed:{additionalListeners(){const additionalListeners=Object.assign({},this.$listeners);return delete additionalListeners.input,delete additionalListeners.change,additionalListeners},hasError(){return!this.isValid||!!this.error}},watch:{value(value){this.currentValue=value}},methods:{onChange(event){this.$emit("change",event.target.value||"")},onInput(event){this.$emit("input",event.target.value)},restoreInheritance(){this.$emit("input",null)},createInputId(identification){return!this.idSuffix||this.idSuffix.length<=0?identification:`${identification}-${this.idSuffix}`},setFocusClass(){this.hasFocus=!0},removeFocusClass(){this.hasFocus=!1}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").Z)(sw_text_field_sw_text_fieldvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{attrs:{disabled:_vm.disabled,required:_vm.required,"is-inherited":_vm.isInherited,"is-inheritance-field":_vm.isInheritanceField,"disable-inheritance-toggle":_vm.disableInheritanceToggle,copyable:_vm.copyable,"copyable-tooltip":_vm.copyableTooltip,"copyable-text":_vm.currentValue,"has-focus":_vm.hasFocus,"help-text":_vm.helpText,name:_vm.name,size:_vm.size},on:{"inheritance-restore":function($event){return _vm.$emit("inheritance-restore",$event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n    "+_vm._s(_vm.label)+"\n  ")]},proxy:!0},{key:"field-prefix",fn:function(){return[_vm._t("prefix")]},proxy:!0},{key:"element",fn:function({identification:identification}){return[_c("input",_vm._g({attrs:{id:_vm.createInputId(identification),type:"text",name:identification,disabled:_vm.disabled,placeholder:_vm.placeholder},domProps:{value:_vm.currentValue},on:{input:_vm.onInput,change:_vm.onChange,focus:_vm.setFocusClass,blur:_vm.removeFocusClass}},_vm.additionalListeners))]}},{key:"field-suffix",fn:function(){return[_vm._t("suffix")]},proxy:!0},{key:"error",fn:function(){return[_vm.error?_c("sw-field-error",{attrs:{error:_vm.error}}):_vm._e()]},proxy:!0},{key:"field-hint",fn:function(){return[_vm._t("hint")]},proxy:!0}],null,!0)})}),[],!1,null,null,null).exports;var sw_text_field=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwTextField",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The value of the text field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"placeholder",description:"A placeholder text being displayed if no value is set.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"label",description:"A label for your text field. Usually used to guide the user what value this field controls.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"A text that helps the user to understand what this field does.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"size",description:"The size of the text field.",tags:{},values:["small","default"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'default'"}},{name:"copyable",description:"Toggles the copy function of the text field.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"copyableTooltip",description:"If set to true the tooltip will change on successful copy.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while saving"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"disabled",description:"Determines if the field is disabled.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",description:"Determines if the field is required.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInherited",description:"Toggles the inheritance visualization.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"isInheritanceField",description:"Determines if the field is inheritable.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableInheritanceToggle",description:"Determines the active state of the inheritance toggle.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-restore"},{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"input",type:{names:["undefined"]}}],slots:[{name:"prefix"},{name:"suffix"},{name:"hint"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-text-field/sw-text-field.vue"]}}}]);