"use strict";(self.webpackChunk_shopware_ag_meteor_component_library=self.webpackChunk_shopware_ag_meteor_component_library||[]).push([[86116,7388],{"./src/components/feedback-indicator/sw-progress-bar/sw-progress-bar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Extended:function(){return Extended},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return sw_progress_bar_stories}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_base_field=__webpack_require__("./src/components/form/_internal/sw-base-field/sw-base-field.vue"),sw_field_error=__webpack_require__("./src/components/form/_internal/sw-field-error/sw-field-error.vue"),sw_progress_bar_sw_progress_barvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwProgressBar",components:{"sw-base-field":sw_base_field.c,"sw-field-error":sw_field_error.c},props:{value:{type:Number,default:0},maxValue:{type:Number,default:100,required:!1},label:{type:String,required:!1,default:null},progressLabelType:{type:String,required:!1,default:"percent"},error:{type:Object,required:!1,default:null}},computed:{progressLabel(){return this.progressLabelType&&"percent"!==this.progressLabelType?`${this.value} ${this.progressLabelType} / ${this.maxValue} ${this.progressLabelType}`:this.styleWidth},styleWidth(){let percentage=parseInt(this.value/this.maxValue*100);return percentage>100&&(percentage=100),percentage<0&&(percentage=0),`${percentage}%`},progressClasses(){return{"sw-progress-bar__value--no-transition":this.value<1||this.value>=this.maxValue,"sw-progress-bar__value--has-error":!!this.error}}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_progress_bar_sw_progress_barvue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("sw-base-field",{staticClass:"sw-progress-bar",attrs:{role:"progressbar","aria-valuenow":_vm.value,"aria-valuemax":_vm.maxValue,"aria-label":"Current progress","has-focus":!1},scopedSlots:_vm._u([{key:"label",fn:function(){return[_vm._v("\n    "+_vm._s(_vm.label)+"\n\n    "),_c("span",{staticClass:"sw-progress-bar__progress-label"},[_vm._v("\n      "+_vm._s(_vm.progressLabel)+"\n    ")])]},proxy:!0},{key:"element",fn:function(){return[_c("div",{staticClass:"sw-progress-bar__total"},[_c("div",{staticClass:"sw-progress-bar__value",class:_vm.progressClasses,style:{width:_vm.styleWidth},attrs:{"data-testid":"progress-bar-value"}})])]},proxy:!0},{key:"error",fn:function(){return[_vm.error?_c("sw-field-error",{attrs:{error:_vm.error}}):_vm._e()]},proxy:!0}])})}),[],!1,null,null,null).exports;var sw_progress_bar=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwProgressBar",exportName:"default",description:"",tags:{},props:[{name:"value",description:"The current value which is used for showing the current progress.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxValue",description:"The max value sets the value where the progress will be finished.",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"100"}},{name:"label",description:"A label for the progress bar. Usually used to guide the user what value kind of activity is currently running.",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"progressLabelType",description:'Change how the progress label looks like. Examples are "kb", "mb", "items" or more. For percentage just use "percentage"',tags:{example:[{description:'"kb"',title:"example"}]},type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'percent'"}},{name:"error",description:"An error in your business logic related to this field.",tags:{example:[{description:'{"code": 500, "detail": "Error while loading"}',title:"example"}]},type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/feedback-indicator/sw-progress-bar/sw-progress-bar.vue"]};var sw_progress_bar_stories={title:"Components/Feedback Indicator/sw-progress-bar",component:sw_progress_bar,render:(args,{argTypes:argTypes})=>({props:Object.keys(argTypes),components:{SwProgressBar:sw_progress_bar},template:'<sw-progress-bar v-bind="$props"></sw-progress-bar>'}),args:{value:121,maxValue:356,label:"Example progress bar",error:null,progressLabelType:""}};const Default={name:"Minimal"},Extended={name:"Extended",args:{value:277,error:{code:500,detail:"Error while loading"},progressLabelType:"kb"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Minimal'\n}",...Default.parameters?.docs?.source}}},Extended.parameters={...Extended.parameters,docs:{...Extended.parameters?.docs,source:{originalSource:"{\n  name: 'Extended',\n  args: {\n    value: 277,\n    error: {\n      code: 500,\n      detail: 'Error while loading'\n    },\n    progressLabelType: 'kb'\n  }\n}",...Extended.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Extended"]},"./src/components/form/_internal/sw-field-error/sw-field-error.vue":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return sw_field_error}});var vue_esm=__webpack_require__("./node_modules/vue/dist/vue.esm.js"),sw_icon=__webpack_require__("./src/components/icons-media/sw-icon/sw-icon.vue"),sw_field_error_sw_field_errorvue_type_script_lang_ts=vue_esm.cp.extend({name:"SwFieldError",i18n:{messages:{en:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Missing permissions",FRAMEWORK__DELETE_RESTRICTED:"Deletion failed",INVALID_MEDIA_URL:"Please enter a valid URL to upload a file.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"You must choose a type for this rule.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"The type can not be assigned while category is an entry point.",SHOPWARE_INVALID_IP:"Please enter a valid IP address.",INVALID_URL:"Please enter a valid url.",INVALID_MAIL:"Please enter a valid email address.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Too many requests. Please wait {seconds} seconds before trying again.",DUPLICATED_URL:"This URL is already in use. Please choose another URL.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"This field must not be empty."}},de:{"sw-field-error":{FRAMEWORK__MISSING_PRIVILEGE_ERROR:"Fehlende Berechtigungen",FRAMEWORK__DELETE_RESTRICTED:"Löschen fehlgeschlagen",INVALID_MEDIA_URL:"Bitte gib eine gültige URL ein, um eine Datei hochzuladen.",CONTENT__MISSING_RULE_TYPE_EXCEPTION:"Du musst einen Typ für diese Regel auswählen.",CONTENT__INVALID_CATEGORY_TYPE_AS_ENTRY_POINT:"Dieser Typ kann nicht gewählt werden, während die Kategorie als Einstiegspunkt festgelegt ist.",SHOPWARE_INVALID_IP:"Bitte gib eine gültige IP-Adresse ein.",INVALID_URL:"Bitte gib eine gültige URL ein.",INVALID_MAIL:"Bitte gib eine gültige E-Mail-Adresse ein.",FRAMEWORK__RATE_LIMIT_EXCEEDED:"Zu viele Anfragen. Bitte warten Sie {seconds} Sekunden, bevor Sie es erneut versuchen.",DUPLICATED_URL:"Diese URL wird bereits genutzt. Bitte wähle eine andere Domain.","c1051bb4-d103-4f74-8988-acbcafc7fdc3":"Dieses Feld darf nicht leer sein"}}}},components:{"sw-icon":sw_icon.c},props:{error:{type:Object,required:!1,default:null}},computed:{errorMessage(){if(!this.error)return"";const translationKey=`sw-field-error.${this.error.code}`,translation=this.$tc(translationKey,1,this.error.parameters||{});return translation===translationKey?this.error.detail:translation}}});const __vuedocgen_export_0=(0,__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js").c)(sw_field_error_sw_field_errorvue_type_script_lang_ts,(function render(){var _c=this._self._c;this._self._setupProxy;return this.error?_c("div",{staticClass:"sw-field__error",attrs:{"aria-label":"Error message"}},[_c("sw-icon",{attrs:{name:"solid-exclamation-circle"}}),this._v("\n  "+this._s(this.errorMessage)+"\n")],1):this._e()}),[],!1,null,null,null).exports;var sw_field_error=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SwFieldError",exportName:"default",description:"",tags:{},props:[{name:"error",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/form/_internal/sw-field-error/sw-field-error.vue"]}}}]);