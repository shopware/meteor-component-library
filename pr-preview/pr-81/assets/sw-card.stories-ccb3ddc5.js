import{S as F}from"./sw-card-64119f7c.js";import{S as xe}from"./sw-button-8c07115b.js";import{a as _e}from"./sw-context-menu-item-ca0204d7.js";import{S as Ie}from"./sw-tabs-128851e2.js";import{g as T,e as Je,i as L,L as N,a as x,M as Qe,t as h}from"./_MapCache-a2adaacd.js";import{r as g,b as _,f as et,S as Z}from"./_baseGetTag-22b9c805.js";import{i as $}from"./isObjectLike-e68f0fe0.js";import{i as tt}from"./isFunction-22da0083.js";import{i as B}from"./sw-base-field-334003ba.js";import{d as rt,e as at,o as C,p as O,j as nt,t as it,l as J,s as ot,q as st,u as lt}from"./vue.esm-bundler-651c6785.js";import{_ as ut}from"./_plugin-vue_export-helper-c27b6911.js";import"./sw-loader-606e11d6.js";import"./sw-icon-623060c0.js";import"./iframe-196c5f1d.js";import"../sb-preview/runtime.js";import"./sw-popover-45ad3638.js";import"./sw-checkbox-b768a239.js";import"./sw-field-error-e21a36f0.js";import"./tooltip.directive-5026512a.js";import"./sw-switch-c4c81ac2.js";import"./_commonjsHelpers-de833af9.js";import"./sw-color-badge-009d7ca8.js";import"./index-76fb7be0.js";var ct=T(g,"WeakMap");const M=ct;var Q=Object.create,mt=function(){function e(){}return function(t){if(!B(t))return{};if(Q)return Q(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const pt=mt;function dt(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var ft=function(){try{var e=T(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ee=ft;function gt(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var bt=9007199254740991,vt=/^(?:0|[1-9]\d*)$/;function ht(e,t){var r=typeof e;return t=t??bt,!!t&&(r=="number"||r!="symbol"&&vt.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e,t,r){t=="__proto__"&&ee?ee(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var yt=Object.prototype,wt=yt.hasOwnProperty;function Oe(e,t,r){var a=e[t];(!(wt.call(e,t)&&Je(a,r))||r===void 0&&!(t in e))&&Ce(e,t,r)}function I(e,t,r,a){var l=!r;r||(r={});for(var s=-1,n=t.length;++s<n;){var u=t[s],c=a?a(r[u],e[u],u,r,e):void 0;c===void 0&&(c=e[u]),l?Ce(r,u,c):Oe(r,u,c)}return r}var Tt=9007199254740991;function qe(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tt}function Me(e){return e!=null&&qe(e.length)&&!tt(e)}var $t=Object.prototype;function U(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||$t;return e===r}function At(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var St="[object Arguments]";function te(e){return $(e)&&_(e)==St}var Ee=Object.prototype,jt=Ee.hasOwnProperty,xt=Ee.propertyIsEnumerable,_t=te(function(){return arguments}())?te:function(e){return $(e)&&jt.call(e,"callee")&&!xt.call(e,"callee")};const It=_t;function Ct(){return!1}var Pe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,re=Pe&&typeof module=="object"&&module&&!module.nodeType&&module,Ot=re&&re.exports===Pe,ae=Ot?g.Buffer:void 0,qt=ae?ae.isBuffer:void 0,Mt=qt||Ct;const ze=Mt;var Et="[object Arguments]",Pt="[object Array]",zt="[object Boolean]",Ft="[object Date]",Lt="[object Error]",Nt="[object Function]",Bt="[object Map]",Ut="[object Number]",Dt="[object Object]",Rt="[object RegExp]",Vt="[object Set]",Gt="[object String]",Kt="[object WeakMap]",Ht="[object ArrayBuffer]",Wt="[object DataView]",Yt="[object Float32Array]",kt="[object Float64Array]",Xt="[object Int8Array]",Zt="[object Int16Array]",Jt="[object Int32Array]",Qt="[object Uint8Array]",er="[object Uint8ClampedArray]",tr="[object Uint16Array]",rr="[object Uint32Array]",o={};o[Yt]=o[kt]=o[Xt]=o[Zt]=o[Jt]=o[Qt]=o[er]=o[tr]=o[rr]=!0;o[Et]=o[Pt]=o[Ht]=o[zt]=o[Wt]=o[Ft]=o[Lt]=o[Nt]=o[Bt]=o[Ut]=o[Dt]=o[Rt]=o[Vt]=o[Gt]=o[Kt]=!1;function ar(e){return $(e)&&qe(e.length)&&!!o[_(e)]}function D(e){return function(t){return e(t)}}var Fe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=Fe&&typeof module=="object"&&module&&!module.nodeType&&module,nr=w&&w.exports===Fe,q=nr&&et.process,ir=function(){try{var e=w&&w.require&&w.require("util").types;return e||q&&q.binding&&q.binding("util")}catch{}}();const v=ir;var ne=v&&v.isTypedArray,or=ne?D(ne):ar;const sr=or;var lr=Object.prototype,ur=lr.hasOwnProperty;function Le(e,t){var r=L(e),a=!r&&It(e),l=!r&&!a&&ze(e),s=!r&&!a&&!l&&sr(e),n=r||a||l||s,u=n?At(e.length,String):[],c=u.length;for(var m in e)(t||ur.call(e,m))&&!(n&&(m=="length"||l&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||ht(m,c)))&&u.push(m);return u}function Ne(e,t){return function(r){return e(t(r))}}var cr=Ne(Object.keys,Object);const mr=cr;var pr=Object.prototype,dr=pr.hasOwnProperty;function fr(e){if(!U(e))return mr(e);var t=[];for(var r in Object(e))dr.call(e,r)&&r!="constructor"&&t.push(r);return t}function R(e){return Me(e)?Le(e):fr(e)}function gr(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var br=Object.prototype,vr=br.hasOwnProperty;function hr(e){if(!B(e))return gr(e);var t=U(e),r=[];for(var a in e)a=="constructor"&&(t||!vr.call(e,a))||r.push(a);return r}function V(e){return Me(e)?Le(e,!0):hr(e)}function Be(e,t){for(var r=-1,a=t.length,l=e.length;++r<a;)e[l+r]=t[r];return e}var yr=Ne(Object.getPrototypeOf,Object);const Ue=yr;function wr(){this.__data__=new N,this.size=0}function Tr(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function $r(e){return this.__data__.get(e)}function Ar(e){return this.__data__.has(e)}var Sr=200;function jr(e,t){var r=this.__data__;if(r instanceof N){var a=r.__data__;if(!x||a.length<Sr-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Qe(a)}return r.set(e,t),this.size=r.size,this}function y(e){var t=this.__data__=new N(e);this.size=t.size}y.prototype.clear=wr;y.prototype.delete=Tr;y.prototype.get=$r;y.prototype.has=Ar;y.prototype.set=jr;function xr(e,t){return e&&I(t,R(t),e)}function _r(e,t){return e&&I(t,V(t),e)}var De=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=De&&typeof module=="object"&&module&&!module.nodeType&&module,Ir=ie&&ie.exports===De,oe=Ir?g.Buffer:void 0,se=oe?oe.allocUnsafe:void 0;function Cr(e,t){if(t)return e.slice();var r=e.length,a=se?se(r):new e.constructor(r);return e.copy(a),a}function Or(e,t){for(var r=-1,a=e==null?0:e.length,l=0,s=[];++r<a;){var n=e[r];t(n,r,e)&&(s[l++]=n)}return s}function Re(){return[]}var qr=Object.prototype,Mr=qr.propertyIsEnumerable,le=Object.getOwnPropertySymbols,Er=le?function(e){return e==null?[]:(e=Object(e),Or(le(e),function(t){return Mr.call(e,t)}))}:Re;const G=Er;function Pr(e,t){return I(e,G(e),t)}var zr=Object.getOwnPropertySymbols,Fr=zr?function(e){for(var t=[];e;)Be(t,G(e)),e=Ue(e);return t}:Re;const Ve=Fr;function Lr(e,t){return I(e,Ve(e),t)}function Ge(e,t,r){var a=t(e);return L(e)?a:Be(a,r(e))}function Nr(e){return Ge(e,R,G)}function Br(e){return Ge(e,V,Ve)}var Ur=T(g,"DataView");const E=Ur;var Dr=T(g,"Promise");const P=Dr;var Rr=T(g,"Set");const z=Rr;var ue="[object Map]",Vr="[object Object]",ce="[object Promise]",me="[object Set]",pe="[object WeakMap]",de="[object DataView]",Gr=h(E),Kr=h(x),Hr=h(P),Wr=h(z),Yr=h(M),f=_;(E&&f(new E(new ArrayBuffer(1)))!=de||x&&f(new x)!=ue||P&&f(P.resolve())!=ce||z&&f(new z)!=me||M&&f(new M)!=pe)&&(f=function(e){var t=_(e),r=t==Vr?e.constructor:void 0,a=r?h(r):"";if(a)switch(a){case Gr:return de;case Kr:return ue;case Hr:return ce;case Wr:return me;case Yr:return pe}return t});const K=f;var kr=Object.prototype,Xr=kr.hasOwnProperty;function Zr(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Xr.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Jr=g.Uint8Array;const fe=Jr;function H(e){var t=new e.constructor(e.byteLength);return new fe(t).set(new fe(e)),t}function Qr(e,t){var r=t?H(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var ea=/\w*$/;function ta(e){var t=new e.constructor(e.source,ea.exec(e));return t.lastIndex=e.lastIndex,t}var ge=Z?Z.prototype:void 0,be=ge?ge.valueOf:void 0;function ra(e){return be?Object(be.call(e)):{}}function aa(e,t){var r=t?H(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var na="[object Boolean]",ia="[object Date]",oa="[object Map]",sa="[object Number]",la="[object RegExp]",ua="[object Set]",ca="[object String]",ma="[object Symbol]",pa="[object ArrayBuffer]",da="[object DataView]",fa="[object Float32Array]",ga="[object Float64Array]",ba="[object Int8Array]",va="[object Int16Array]",ha="[object Int32Array]",ya="[object Uint8Array]",wa="[object Uint8ClampedArray]",Ta="[object Uint16Array]",$a="[object Uint32Array]";function Aa(e,t,r){var a=e.constructor;switch(t){case pa:return H(e);case na:case ia:return new a(+e);case da:return Qr(e,r);case fa:case ga:case ba:case va:case ha:case ya:case wa:case Ta:case $a:return aa(e,r);case oa:return new a;case sa:case ca:return new a(e);case la:return ta(e);case ua:return new a;case ma:return ra(e)}}function Sa(e){return typeof e.constructor=="function"&&!U(e)?pt(Ue(e)):{}}var ja="[object Map]";function xa(e){return $(e)&&K(e)==ja}var ve=v&&v.isMap,_a=ve?D(ve):xa;const Ia=_a;var Ca="[object Set]";function Oa(e){return $(e)&&K(e)==Ca}var he=v&&v.isSet,qa=he?D(he):Oa;const Ma=qa;var Ea=1,Pa=2,za=4,Ke="[object Arguments]",Fa="[object Array]",La="[object Boolean]",Na="[object Date]",Ba="[object Error]",He="[object Function]",Ua="[object GeneratorFunction]",Da="[object Map]",Ra="[object Number]",We="[object Object]",Va="[object RegExp]",Ga="[object Set]",Ka="[object String]",Ha="[object Symbol]",Wa="[object WeakMap]",Ya="[object ArrayBuffer]",ka="[object DataView]",Xa="[object Float32Array]",Za="[object Float64Array]",Ja="[object Int8Array]",Qa="[object Int16Array]",en="[object Int32Array]",tn="[object Uint8Array]",rn="[object Uint8ClampedArray]",an="[object Uint16Array]",nn="[object Uint32Array]",i={};i[Ke]=i[Fa]=i[Ya]=i[ka]=i[La]=i[Na]=i[Xa]=i[Za]=i[Ja]=i[Qa]=i[en]=i[Da]=i[Ra]=i[We]=i[Va]=i[Ga]=i[Ka]=i[Ha]=i[tn]=i[rn]=i[an]=i[nn]=!0;i[Ba]=i[He]=i[Wa]=!1;function j(e,t,r,a,l,s){var n,u=t&Ea,c=t&Pa,m=t&za;if(r&&(n=l?r(e,a,l,s):r(e)),n!==void 0)return n;if(!B(e))return e;var W=L(e);if(W){if(n=Zr(e),!u)return dt(e,n)}else{var b=K(e),Y=b==He||b==Ua;if(ze(e))return Cr(e,u);if(b==We||b==Ke||Y&&!l){if(n=c||Y?{}:Sa(e),!u)return c?Lr(e,_r(n,e)):Pr(e,xr(n,e))}else{if(!i[b])return l?e:{};n=Aa(e,b,u)}}s||(s=new y);var k=s.get(e);if(k)return k;s.set(e,n),Ma(e)?e.forEach(function(p){n.add(j(p,t,r,p,e,s))}):Ia(e)&&e.forEach(function(p,d){n.set(d,j(p,t,r,d,e,s))});var Ze=m?c?Br:Nr:c?V:R,X=W?void 0:Ze(e);return gt(X||e,function(p,d){X&&(d=p,p=e[d]),Oe(n,d,j(p,t,r,d,e,s))}),n}var on=1,sn=4;function ln(e){return j(e,on|sn)}const ye=["#FFD700","#FFC700","#F88962","#F56C46","#FF85C2","#FF68AC","#6AD6F0","#4DC6E9","#A092F0","#8475E9","#57D9A3","#3CCA88"],Ye=rt({name:"SwAvatar",props:{color:{type:String,required:!1,default:""},size:{type:String,required:!1,default:null},firstName:{type:String,required:!1,default:""},lastName:{type:String,required:!1,default:""},imageUrl:{type:String,required:!1,default:null},placeholder:{type:Boolean,required:!1,default:!1},sourceContext:{type:Object,required:!1,default:null},variant:{type:String,required:!1,default:"circle",validator:e=>["circle","square"].includes(e)}},data(){return{fontSize:16,lineHeight:16}},computed:{avatarSize(){return{width:this.size,height:this.size}},avatarInitials(){const e=this.firstName?this.firstName[0]:"",t=this.lastName?this.lastName[0]:"";return e+t},avatarInitialsSize(){return{"font-size":`${this.fontSize}px`,"line-height":`${this.lineHeight}px`}},avatarImage(){var a,l;if(this.imageUrl)return{"background-image":`url('${this.imageUrl}')`};if(!((l=(a=this.sourceContext)==null?void 0:a.avatarMedia)!=null&&l.url))return{};const e=ln(this.sourceContext.avatarMedia),t=e.thumbnails.sort((s,n)=>s.width-n.width)[0];return{"background-image":`url('${t?t.url:e.url}')`}},avatarColor(){if(this.color.length)return{"background-color":this.color};const e=this.firstName?this.firstName.length:0,t=this.lastName?this.lastName.length:0,r=e+t;return{"background-color":ye[r%ye.length]}},hasAvatarImage(){return!!this.avatarImage&&!!this.avatarImage["background-image"]},showPlaceholder(){return this.placeholder&&!this.hasAvatarImage},showInitials(){return!this.placeholder&&!this.hasAvatarImage}},watch:{size(){this.$nextTick(()=>{this.generateAvatarInitialsSize()})}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.generateAvatarInitialsSize()},generateAvatarInitialsSize(){if(!this.$refs.swAvatar)return;const e=this.$refs.swAvatar.offsetHeight;this.fontSize=Math.round(e*.4),this.lineHeight=Math.round(e*.98)}}});const un={key:0,class:"sw-avatar__initials"},cn={key:1};function mn(e,t,r,a,l,s){const n=at("sw-icon");return C(),O("span",{ref:"swAvatar",class:st(["sw-avatar","sw-avatar__"+e.variant]),style:lt([e.avatarImage,e.avatarColor,e.avatarSize,e.avatarInitialsSize]),role:"img"},[nt(e.$slots,"default",{},()=>[e.showInitials?(C(),O("span",un,it(e.avatarInitials),1)):J("",!0),e.showPlaceholder?(C(),O("span",cn,[ot(n,{name:"default-avatar-single"})])):J("",!0)])],6)}const ke=ut(Ye,[["render",mn]]);Ye.__docgenInfo={displayName:"SwAvatar",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"firstName",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"lastName",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"imageUrl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"sourceContext",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'circle'"},values:["circle","square"]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/icons-media/sw-avatar/sw-avatar.vue"]};const Xe={title:"Components/Layout/sw-card",component:F,argTypes:{title:{control:{type:"text"},table:{category:"props"}},subtitle:{control:{type:"text"},table:{category:"props"}},"context-actions":{control:{type:null}},grid:{control:{type:null}},tabs:{control:{type:null}},avatar:{control:{type:null}},"before-card":{control:{type:null}},"after-card":{control:{type:null}}}},A={name:"Minimal",render:(e,{argTypes:t})=>({components:{SwCard:F,SwContextMenuItem:_e,SwTabs:Ie,SwAvatar:ke,SwButton:xe},props:Object.keys(t),template:`
    <sw-card v-bind="$props">
      <template slot="default">
        <div v-html="$props.default"></div>
      </template>
    </sw-card>`}),args:{default:`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    `,title:"Title",subtitle:"Subtitle",toolbar:null,footer:null,headerRight:null,hero:!1,isLoading:!1,large:!1,avatar:null},...Xe},S={name:"Extended",render:(e,{argTypes:t})=>({components:{SwCard:F,SwContextMenuItem:_e,SwTabs:Ie,SwAvatar:ke,SwButton:xe},props:Object.keys(t),template:`
    <sw-card v-bind="$props">
      <template slot="default">
        <h4>
          Active Tab: {{ activeTab }}
        </h4>

        <div v-html="$props.default"></div>
      </template>

      <div slot="toolbar" v-if="$props.toolbar">
      <sw-button variant="primary">Primary button</sw-button>
      <sw-button variant="secondary">Secondary button</sw-button>
    </div>

      <sw-tabs v-if="$props.tabs"
              slot="tabs"
              :default-item="activeTab"
              @new-item-active="setContent"
              :items="[
                  { label: 'Tab A', name: 'tabA' },
                  { label: 'Tab B', name: 'tabB' },
                  { label: 'Tab C', name: 'tabC' },
              ]"
      ></sw-tabs>
      <div slot="footer" v-html="$props.footer"></div>
      <div v-if="$props.avatar" slot="avatar">
        <sw-avatar firstName="Max" lastName="Mustermann" variant="square" />
      </div>
      <div slot="headerRight" v-html="$props.headerRight"></div>
      <div v-if="$props.contextActions" slot="context-actions">
        <sw-context-menu-item label="Menu Item A"></sw-context-menu-item>
        <sw-context-menu-item label="Menu Item B"></sw-context-menu-item>
        <sw-context-menu-item label="Menu Item C"></sw-context-menu-item>
      </div>
    </sw-card>`,data(){return{activeTab:"tabA"}},methods:{setContent(r){this.activeTab=r.name}}}),args:{default:`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    `,toolbar:"<p>Toolbar</p>",footer:"<p><strong>Footer</strong></p>",title:"Title",subtitle:"Subtitle",headerRight:"Header right",hero:!1,isLoading:!1,large:!1,avatar:"AVTR",tabs:!0,contextActions:!0},...Xe};var we,Te,$e;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Minimal',
  render: (args, {
    argTypes
  }) => ({
    components: {
      SwCard,
      SwContextMenuItem,
      SwTabs,
      SwAvatar,
      SwButton
    },
    props: Object.keys(argTypes),
    template: \`
    <sw-card v-bind="$props">
      <template slot="default">
        <div v-html="$props.default"></div>
      </template>
    </sw-card>\`
  }),
  args: {
    default: \`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    \`,
    title: 'Title',
    subtitle: 'Subtitle',
    toolbar: null,
    footer: null,
    headerRight: null,
    hero: false,
    isLoading: false,
    large: false,
    avatar: null
  },
  ...meta
}`,...($e=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ae,Se,je;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Extended',
  render: (args, {
    argTypes
  }) => ({
    components: {
      SwCard,
      SwContextMenuItem,
      SwTabs,
      SwAvatar,
      SwButton
    },
    props: Object.keys(argTypes),
    template: \`
    <sw-card v-bind="$props">
      <template slot="default">
        <h4>
          Active Tab: {{ activeTab }}
        </h4>

        <div v-html="$props.default"></div>
      </template>

      <div slot="toolbar" v-if="$props.toolbar">
      <sw-button variant="primary">Primary button</sw-button>
      <sw-button variant="secondary">Secondary button</sw-button>
    </div>

      <sw-tabs v-if="$props.tabs"
              slot="tabs"
              :default-item="activeTab"
              @new-item-active="setContent"
              :items="[
                  { label: 'Tab A', name: 'tabA' },
                  { label: 'Tab B', name: 'tabB' },
                  { label: 'Tab C', name: 'tabC' },
              ]"
      ></sw-tabs>
      <div slot="footer" v-html="$props.footer"></div>
      <div v-if="$props.avatar" slot="avatar">
        <sw-avatar firstName="Max" lastName="Mustermann" variant="square" />
      </div>
      <div slot="headerRight" v-html="$props.headerRight"></div>
      <div v-if="$props.contextActions" slot="context-actions">
        <sw-context-menu-item label="Menu Item A"></sw-context-menu-item>
        <sw-context-menu-item label="Menu Item B"></sw-context-menu-item>
        <sw-context-menu-item label="Menu Item C"></sw-context-menu-item>
      </div>
    </sw-card>\`,
    data() {
      return {
        activeTab: 'tabA'
      };
    },
    methods: {
      setContent(item) {
        this.activeTab = item.name;
      }
    }
  }),
  args: {
    default: \`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    \`,
    toolbar: \`<p>Toolbar</p>\`,
    footer: '<p><strong>Footer</strong></p>',
    title: 'Title',
    subtitle: 'Subtitle',
    headerRight: 'Header right',
    hero: false,
    isLoading: false,
    large: false,
    avatar: 'AVTR',
    tabs: true,
    contextActions: true
  },
  ...meta
}`,...(je=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const zn=["MinimalStory","ExtendedStory"];export{S as ExtendedStory,A as MinimalStory,zn as __namedExportsOrder,Xe as default};
