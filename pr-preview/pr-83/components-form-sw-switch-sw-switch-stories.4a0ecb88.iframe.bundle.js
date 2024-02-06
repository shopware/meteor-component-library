"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[93920,7388],{"./src/components/form/sw-switch/sw-switch.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},defaultStory:function(){return defaultStory}});var _sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/form/sw-switch/sw-switch.vue");const meta={title:"Components/Form/sw-switch",component:_sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__.c,render:(args,{argTypes:argTypes})=>({props:Object.keys(argTypes),components:{SwSwitch:_sw_switch_vue__WEBPACK_IMPORTED_MODULE_0__.c},template:'<sw-switch v-bind="$props" @change="change" @inheritance-remove="inheritanceRemove"></sw-switch>'}),argTypes:{change:{action:"change",table:{category:"Events"}},"inheritance-restore":{action:"inheritance-restore",table:{category:"Events"}},inheritanceRemove:{action:"inheritance-remove",table:{category:"Events"}},label:{control:{type:"text"}}},args:{label:"Switchfield"}};__webpack_exports__.default=meta;const defaultStory={name:"sw-switch"};defaultStory.parameters={...defaultStory.parameters,docs:{...defaultStory.parameters?.docs,source:{originalSource:"{\n  name: 'sw-switch'\n}",...defaultStory.parameters?.docs?.source}}};const __namedExportsOrder=["defaultStory"]},"./src/components/form/_internal/sw-field-error/sw-field-error.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return sw_field_error}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_field_error_sw_field_errorvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwFieldError",i18n:{messages:{en:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Missing permissions",FRAMEWORK__DELETE_RESTRICTED:"Deletion failed",INVALID_MEDIA_URL:"Please enter a valid URL to upload a file.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"You must choose a type for this rule.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"The type can not be assigned while category is an entry point.",SHOPWARE_INVALID_IP:"Please enter a valid IP address.",INVALID_URL:"Please enter a valid url.",INVALID_MAIL:"Please enter a valid email address.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Too many requests. Please wait {seconds} seconds before trying again.",DUPLICATED_URL:"This URL is already in use. Please choose another URL.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"This field must not be empty."}},de:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Fehlende Berechtigungen",FRAMEWORK__DELETE_RESTRICTED:"Löschen fehlgeschlagen",INVALID_MEDIA_URL:"Bitte gib eine gültige URL ein, um eine Datei hochzuladen.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"Du musst einen Typ für diese Regel auswählen.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"Dieser Typ kann nicht gewählt werden, während die Kategorie als Einstiegspunkt festgelegt ist.",SHOPWARE_INVALID_IP:"Bitte gib eine gültige IP-Adresse ein.",INVALID_URL:"Bitte gib eine gültige URL ein.",INVALID_MAIL:"Bitte gib eine gültige E-Mail-Adresse ein.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",DUPLICATED_URL:"Diese URL wird bereits genutzt. Bitte wähle eine andere Domain.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"Dieses Feld darf nicht leer sein"}}}},components:{"sw-icon":sw_icon.c},props:{error:{type:Object,required:!1,default:null}},computed:{errorMessage(){if(!this.error)return"";const translationKey=`sw-field-error.${this.error.code}`,translation=this.$tc(translationKey,1,this.error.parameters||{});return translation===translationKey?this.error.detail:translation}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_field_error_sw_field_errorvue_type_script_lang_ts,(function render(){var _c=this._self._c;this._self._setupProxy;return this.error?_c("div",{staticClass:"sw-field__error",attrs:{"aria-label":"Error message"}},[_c("sw-icon",{attrs:{name:"solid-exclamation-circle"}}),this._v("\n  "+this._s(this.errorMessage)+"\n")],1):this._e()}),[],!1,null,null,null).exports;var sw_field_error=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwFieldError",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/_internal/sw-field-error/sw-field-error.vue"]}},"./src/components/form/sw-switch/sw-switch.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return sw_switch}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_field_error=__webpack_require__("./src/components/form/_internal/sw-field-error/sw-field-error.vue"),form_field_mixin=__webpack_require__("./src/mixins/form-field.mixin.js"),uuid=__webpack_require__("./src/utils/uuid.js"),sw_switch_sw_switchvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwSwitch",components:{"sw-base-field":sw_base_field.c,"sw-field-error":sw_field_error.c},mixins:[form_field_mixin.c],inheritAttrs:!1,props:{label:{type:String,required:!1,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},checked:{type:Boolean,required:!1,default:null},bordered:{type:Boolean,required:!1,default:!1},inheritedValue:{type:Boolean,required:!1,default:null},helpText:{type:String,required:!1,default:null},error:{type:Object,required:!1,default:null},removeTopMargin:{type:Boolean,required:!1,default:!1}},data(){return{currentValue:this.checked,id:(0,uuid.W)()}},computed:{identification(){return`sw-field--${this.id}`},inputState(){return this.isInherited?this.inheritedValue:this.currentValue||!1},isInheritanceField(){return!!this.$attrs.isInheritanceField||null!==this.inheritedValue},isInherited(){return!!this.$attrs.isInherited||this.isInheritanceField&&null===this.currentValue},hasError(){return this.error&&0!==this.error.code},swSwitchFieldClasses(){return[Object.assign({"has--error":this.hasError,"sw-field--switch-bordered":this.bordered,"sw-field--switch-no-margin-top":this.removeTopMargin,"sw-field--switch-no-margin-bottom":this.hasError},this.swCheckboxFieldClasses)]},errorClasses(){return[{"sw-field__error--move-up":!this.bordered}]},isDisabled(){return this.disabled||this.isInherited}},watch:{checked(){this.currentValue=this.checked}},methods:{onChange(changeEvent){this.$emit("change",changeEvent.target.checked)},onInheritanceRestore(event){this.$emit("inheritance-restore",event)}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_switch_sw_switchvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"sw-field--switch__container"},[_c("div",{staticClass:"sw-field--switch",class:_vm.swSwitchFieldClasses},[_c("div",{staticClass:"sw-field--switch__content"},[_c("div",{staticClass:"sw-field--switch__input"},[_c("input",{attrs:{id:_vm.identification,type:"checkbox",name:_vm.formFieldName||_vm.identification,disabled:_vm.isDisabled},domProps:{checked:_vm.inputState},on:{change:_vm.onChange}}),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c("sw-base-field",_vm._b({attrs:{disabled:_vm.disabled,required:_vm.required,name:_vm.identification,"has-focus":!1,"help-text":_vm.helpText,"is-inheritance-field":_vm.isInheritanceField,"is-inherited":_vm.isInherited},on:{"inheritance-restore":function($event){return _vm.onInheritanceRestore($event)},"inheritance-remove":function($event){return _vm.$emit("inheritance-remove",$event)}},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n          "+_vm._s(_vm.label)+"\n        ")]},proxy:!0}])},"sw-base-field",_vm.$attrs,!1))],1)]),_vm._v(" "),_c("sw-field-error",{class:_vm.errorClasses,attrs:{error:_vm.error}})],1)}),[function(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"sw-field__switch-state"},[_c("div",{staticClass:"sw-field__switch-state-knob"})])}],!1,null,null,null).exports;var sw_switch=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SwSwitch",description:"",tags:{},props:[{name:"mapInheritance",mixin:{name:"form-field.mixin",path:"../../../mixins/form-field.mixin.js"},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"checked",description:"Determines the checked state of the checkbox.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bordered",description:"Determines if the field is surrounded by a border.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"inheritedValue",description:"Inherited value from another SalesChannel.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"helpText",description:"Help text with additional information for the field.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"error",description:"Error object for this field.",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"removeTopMargin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"inheritance-remove"},{name:"change",type:{names:["undefined"]}},{name:"inheritance-restore",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/sw-switch/sw-switch.vue","/home/runner/work/meteor-component-library/meteor-component-library/src/mixins/form-field.mixin.js"]}}}]);