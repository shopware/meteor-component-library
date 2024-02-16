import{S as F}from"./sw-card-5bbbf16f.js";import{S as je}from"./sw-button-963df9ec.js";import{a as _e}from"./sw-context-menu-item-d1e5aabe.js";import{S as Ie}from"./sw-tabs-6197f136.js";import{g as T,e as Qe,i as L,L as N,a as j,M as ke,t as h}from"./_MapCache-73175cc1.js";import{r as g,b as _,f as et,S as J}from"./_baseGetTag-22b9c805.js";import{i as $}from"./isObjectLike-e68f0fe0.js";import{i as tt}from"./isFunction-97e00978.js";import{i as B}from"./isObject-32699ff3.js";import{d as at,e as rt,o as C,p as q,j as nt,t as it,l as Q,s as ot,q as st,u as lt}from"./vue.esm-bundler-f31f98e0.js";import{_ as ut}from"./_plugin-vue_export-helper-c27b6911.js";import"./sw-loader-e16771a0.js";import"./sw-icon-c5d78c31.js";import"./iframe-51513bc2.js";import"../sb-preview/runtime.js";import"./sw-popover-397a37c7.js";import"./sw-checkbox-696bfcad.js";import"./sw-base-field-11681dcc.js";import"./tooltip.directive-6ca7427e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sw-field-error-b96db198.js";import"./sw-switch-bd0c6422.js";import"./sw-color-badge-f11cf031.js";var ct=T(g,"WeakMap");const M=ct;var k=Object.create,mt=function(){function e(){}return function(t){if(!B(t))return{};if(k)return k(t);e.prototype=t;var a=new e;return e.prototype=void 0,a}}();const ft=mt;function dt(e,t){var a=-1,r=e.length;for(t||(t=Array(r));++a<r;)t[a]=e[a];return t}var pt=function(){try{var e=T(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ee=pt;function gt(e,t){for(var a=-1,r=e==null?0:e.length;++a<r&&t(e[a],a,e)!==!1;);return e}var bt=9007199254740991,vt=/^(?:0|[1-9]\d*)$/;function ht(e,t){var a=typeof e;return t=t??bt,!!t&&(a=="number"||a!="symbol"&&vt.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e,t,a){t=="__proto__"&&ee?ee(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}var yt=Object.prototype,wt=yt.hasOwnProperty;function qe(e,t,a){var r=e[t];(!(wt.call(e,t)&&Qe(r,a))||a===void 0&&!(t in e))&&Ce(e,t,a)}function I(e,t,a,r){var l=!a;a||(a={});for(var s=-1,n=t.length;++s<n;){var u=t[s],c=r?r(a[u],e[u],u,a,e):void 0;c===void 0&&(c=e[u]),l?Ce(a,u,c):qe(a,u,c)}return a}var Tt=9007199254740991;function Oe(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tt}function Me(e){return e!=null&&Oe(e.length)&&!tt(e)}var $t=Object.prototype;function U(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||$t;return e===a}function At(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}var St="[object Arguments]";function te(e){return $(e)&&_(e)==St}var Ee=Object.prototype,xt=Ee.hasOwnProperty,jt=Ee.propertyIsEnumerable,_t=te(function(){return arguments}())?te:function(e){return $(e)&&xt.call(e,"callee")&&!jt.call(e,"callee")};const It=_t;function Ct(){return!1}var Pe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ae=Pe&&typeof module=="object"&&module&&!module.nodeType&&module,qt=ae&&ae.exports===Pe,re=qt?g.Buffer:void 0,Ot=re?re.isBuffer:void 0,Mt=Ot||Ct;const ze=Mt;var Et="[object Arguments]",Pt="[object Array]",zt="[object Boolean]",Ft="[object Date]",Lt="[object Error]",Nt="[object Function]",Bt="[object Map]",Ut="[object Number]",Dt="[object Object]",Rt="[object RegExp]",Vt="[object Set]",Gt="[object String]",Kt="[object WeakMap]",Ht="[object ArrayBuffer]",Wt="[object DataView]",Yt="[object Float32Array]",Xt="[object Float64Array]",Zt="[object Int8Array]",Jt="[object Int16Array]",Qt="[object Int32Array]",kt="[object Uint8Array]",ea="[object Uint8ClampedArray]",ta="[object Uint16Array]",aa="[object Uint32Array]",o={};o[Yt]=o[Xt]=o[Zt]=o[Jt]=o[Qt]=o[kt]=o[ea]=o[ta]=o[aa]=!0;o[Et]=o[Pt]=o[Ht]=o[zt]=o[Wt]=o[Ft]=o[Lt]=o[Nt]=o[Bt]=o[Ut]=o[Dt]=o[Rt]=o[Vt]=o[Gt]=o[Kt]=!1;function ra(e){return $(e)&&Oe(e.length)&&!!o[_(e)]}function D(e){return function(t){return e(t)}}var Fe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,w=Fe&&typeof module=="object"&&module&&!module.nodeType&&module,na=w&&w.exports===Fe,O=na&&et.process,ia=function(){try{var e=w&&w.require&&w.require("util").types;return e||O&&O.binding&&O.binding("util")}catch{}}();const v=ia;var ne=v&&v.isTypedArray,oa=ne?D(ne):ra;const sa=oa;var la=Object.prototype,ua=la.hasOwnProperty;function Le(e,t){var a=L(e),r=!a&&It(e),l=!a&&!r&&ze(e),s=!a&&!r&&!l&&sa(e),n=a||r||l||s,u=n?At(e.length,String):[],c=u.length;for(var m in e)(t||ua.call(e,m))&&!(n&&(m=="length"||l&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||ht(m,c)))&&u.push(m);return u}function Ne(e,t){return function(a){return e(t(a))}}var ca=Ne(Object.keys,Object);const ma=ca;var fa=Object.prototype,da=fa.hasOwnProperty;function pa(e){if(!U(e))return ma(e);var t=[];for(var a in Object(e))da.call(e,a)&&a!="constructor"&&t.push(a);return t}function R(e){return Me(e)?Le(e):pa(e)}function ga(e){var t=[];if(e!=null)for(var a in Object(e))t.push(a);return t}var ba=Object.prototype,va=ba.hasOwnProperty;function ha(e){if(!B(e))return ga(e);var t=U(e),a=[];for(var r in e)r=="constructor"&&(t||!va.call(e,r))||a.push(r);return a}function V(e){return Me(e)?Le(e,!0):ha(e)}function Be(e,t){for(var a=-1,r=t.length,l=e.length;++a<r;)e[l+a]=t[a];return e}var ya=Ne(Object.getPrototypeOf,Object);const Ue=ya;function wa(){this.__data__=new N,this.size=0}function Ta(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function $a(e){return this.__data__.get(e)}function Aa(e){return this.__data__.has(e)}var Sa=200;function xa(e,t){var a=this.__data__;if(a instanceof N){var r=a.__data__;if(!j||r.length<Sa-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new ke(r)}return a.set(e,t),this.size=a.size,this}function y(e){var t=this.__data__=new N(e);this.size=t.size}y.prototype.clear=wa;y.prototype.delete=Ta;y.prototype.get=$a;y.prototype.has=Aa;y.prototype.set=xa;function ja(e,t){return e&&I(t,R(t),e)}function _a(e,t){return e&&I(t,V(t),e)}var De=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=De&&typeof module=="object"&&module&&!module.nodeType&&module,Ia=ie&&ie.exports===De,oe=Ia?g.Buffer:void 0,se=oe?oe.allocUnsafe:void 0;function Ca(e,t){if(t)return e.slice();var a=e.length,r=se?se(a):new e.constructor(a);return e.copy(r),r}function qa(e,t){for(var a=-1,r=e==null?0:e.length,l=0,s=[];++a<r;){var n=e[a];t(n,a,e)&&(s[l++]=n)}return s}function Re(){return[]}var Oa=Object.prototype,Ma=Oa.propertyIsEnumerable,le=Object.getOwnPropertySymbols,Ea=le?function(e){return e==null?[]:(e=Object(e),qa(le(e),function(t){return Ma.call(e,t)}))}:Re;const G=Ea;function Pa(e,t){return I(e,G(e),t)}var za=Object.getOwnPropertySymbols,Fa=za?function(e){for(var t=[];e;)Be(t,G(e)),e=Ue(e);return t}:Re;const Ve=Fa;function La(e,t){return I(e,Ve(e),t)}function Ge(e,t,a){var r=t(e);return L(e)?r:Be(r,a(e))}function Na(e){return Ge(e,R,G)}function Ba(e){return Ge(e,V,Ve)}var Ua=T(g,"DataView");const E=Ua;var Da=T(g,"Promise");const P=Da;var Ra=T(g,"Set");const z=Ra;var ue="[object Map]",Va="[object Object]",ce="[object Promise]",me="[object Set]",fe="[object WeakMap]",de="[object DataView]",Ga=h(E),Ka=h(j),Ha=h(P),Wa=h(z),Ya=h(M),p=_;(E&&p(new E(new ArrayBuffer(1)))!=de||j&&p(new j)!=ue||P&&p(P.resolve())!=ce||z&&p(new z)!=me||M&&p(new M)!=fe)&&(p=function(e){var t=_(e),a=t==Va?e.constructor:void 0,r=a?h(a):"";if(r)switch(r){case Ga:return de;case Ka:return ue;case Ha:return ce;case Wa:return me;case Ya:return fe}return t});const K=p;var Xa=Object.prototype,Za=Xa.hasOwnProperty;function Ja(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&Za.call(e,"index")&&(a.index=e.index,a.input=e.input),a}var Qa=g.Uint8Array;const pe=Qa;function H(e){var t=new e.constructor(e.byteLength);return new pe(t).set(new pe(e)),t}function ka(e,t){var a=t?H(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}var er=/\w*$/;function tr(e){var t=new e.constructor(e.source,er.exec(e));return t.lastIndex=e.lastIndex,t}var ge=J?J.prototype:void 0,be=ge?ge.valueOf:void 0;function ar(e){return be?Object(be.call(e)):{}}function rr(e,t){var a=t?H(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}var nr="[object Boolean]",ir="[object Date]",or="[object Map]",sr="[object Number]",lr="[object RegExp]",ur="[object Set]",cr="[object String]",mr="[object Symbol]",fr="[object ArrayBuffer]",dr="[object DataView]",pr="[object Float32Array]",gr="[object Float64Array]",br="[object Int8Array]",vr="[object Int16Array]",hr="[object Int32Array]",yr="[object Uint8Array]",wr="[object Uint8ClampedArray]",Tr="[object Uint16Array]",$r="[object Uint32Array]";function Ar(e,t,a){var r=e.constructor;switch(t){case fr:return H(e);case nr:case ir:return new r(+e);case dr:return ka(e,a);case pr:case gr:case br:case vr:case hr:case yr:case wr:case Tr:case $r:return rr(e,a);case or:return new r;case sr:case cr:return new r(e);case lr:return tr(e);case ur:return new r;case mr:return ar(e)}}function Sr(e){return typeof e.constructor=="function"&&!U(e)?ft(Ue(e)):{}}var xr="[object Map]";function jr(e){return $(e)&&K(e)==xr}var ve=v&&v.isMap,_r=ve?D(ve):jr;const Ir=_r;var Cr="[object Set]";function qr(e){return $(e)&&K(e)==Cr}var he=v&&v.isSet,Or=he?D(he):qr;const Mr=Or;var Er=1,Pr=2,zr=4,Ke="[object Arguments]",Fr="[object Array]",Lr="[object Boolean]",Nr="[object Date]",Br="[object Error]",He="[object Function]",Ur="[object GeneratorFunction]",Dr="[object Map]",Rr="[object Number]",We="[object Object]",Vr="[object RegExp]",Gr="[object Set]",Kr="[object String]",Hr="[object Symbol]",Wr="[object WeakMap]",Yr="[object ArrayBuffer]",Xr="[object DataView]",Zr="[object Float32Array]",Jr="[object Float64Array]",Qr="[object Int8Array]",kr="[object Int16Array]",en="[object Int32Array]",tn="[object Uint8Array]",an="[object Uint8ClampedArray]",rn="[object Uint16Array]",nn="[object Uint32Array]",i={};i[Ke]=i[Fr]=i[Yr]=i[Xr]=i[Lr]=i[Nr]=i[Zr]=i[Jr]=i[Qr]=i[kr]=i[en]=i[Dr]=i[Rr]=i[We]=i[Vr]=i[Gr]=i[Kr]=i[Hr]=i[tn]=i[an]=i[rn]=i[nn]=!0;i[Br]=i[He]=i[Wr]=!1;function x(e,t,a,r,l,s){var n,u=t&Er,c=t&Pr,m=t&zr;if(a&&(n=l?a(e,r,l,s):a(e)),n!==void 0)return n;if(!B(e))return e;var W=L(e);if(W){if(n=Ja(e),!u)return dt(e,n)}else{var b=K(e),Y=b==He||b==Ur;if(ze(e))return Ca(e,u);if(b==We||b==Ke||Y&&!l){if(n=c||Y?{}:Sr(e),!u)return c?La(e,_a(n,e)):Pa(e,ja(n,e))}else{if(!i[b])return l?e:{};n=Ar(e,b,u)}}s||(s=new y);var X=s.get(e);if(X)return X;s.set(e,n),Mr(e)?e.forEach(function(f){n.add(x(f,t,a,f,e,s))}):Ir(e)&&e.forEach(function(f,d){n.set(d,x(f,t,a,d,e,s))});var Je=m?c?Ba:Na:c?V:R,Z=W?void 0:Je(e);return gt(Z||e,function(f,d){Z&&(d=f,f=e[d]),qe(n,d,x(f,t,a,d,e,s))}),n}var on=1,sn=4;function ln(e){return x(e,on|sn)}const ye=["#FFD700","#FFC700","#F88962","#F56C46","#FF85C2","#FF68AC","#6AD6F0","#4DC6E9","#A092F0","#8475E9","#57D9A3","#3CCA88"],Ye=at({name:"SwAvatar",props:{color:{type:String,required:!1,default:""},size:{type:String,required:!1,default:null},firstName:{type:String,required:!1,default:""},lastName:{type:String,required:!1,default:""},imageUrl:{type:String,required:!1,default:null},placeholder:{type:Boolean,required:!1,default:!1},sourceContext:{type:Object,required:!1,default:null},variant:{type:String,required:!1,default:"circle",validator:e=>["circle","square"].includes(e)}},data(){return{fontSize:16,lineHeight:16}},computed:{avatarSize(){return{width:this.size,height:this.size}},avatarInitials(){const e=this.firstName?this.firstName[0]:"",t=this.lastName?this.lastName[0]:"";return e+t},avatarInitialsSize(){return{"font-size":`${this.fontSize}px`,"line-height":`${this.lineHeight}px`}},avatarImage(){var r,l;if(this.imageUrl)return{"background-image":`url('${this.imageUrl}')`};if(!((l=(r=this.sourceContext)==null?void 0:r.avatarMedia)!=null&&l.url))return{};const e=ln(this.sourceContext.avatarMedia),t=e.thumbnails.sort((s,n)=>s.width-n.width)[0];return{"background-image":`url('${t?t.url:e.url}')`}},avatarColor(){if(this.color.length)return{"background-color":this.color};const e=this.firstName?this.firstName.length:0,t=this.lastName?this.lastName.length:0,a=e+t;return{"background-color":ye[a%ye.length]}},hasAvatarImage(){return!!this.avatarImage&&!!this.avatarImage["background-image"]},showPlaceholder(){return this.placeholder&&!this.hasAvatarImage},showInitials(){return!this.placeholder&&!this.hasAvatarImage}},watch:{size(){this.$nextTick(()=>{this.generateAvatarInitialsSize()})}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.generateAvatarInitialsSize()},generateAvatarInitialsSize(){if(!this.$refs.swAvatar)return;const e=this.$refs.swAvatar.offsetHeight;this.fontSize=Math.round(e*.4),this.lineHeight=Math.round(e*.98)}}});const un={key:0,class:"sw-avatar__initials"},cn={key:1};function mn(e,t,a,r,l,s){const n=rt("sw-icon");return C(),q("span",{ref:"swAvatar",class:st(["sw-avatar","sw-avatar__"+e.variant]),style:lt([e.avatarImage,e.avatarColor,e.avatarSize,e.avatarInitialsSize]),role:"img"},[nt(e.$slots,"default",{},()=>[e.showInitials?(C(),q("span",un,it(e.avatarInitials),1)):Q("",!0),e.showPlaceholder?(C(),q("span",cn,[ot(n,{name:"default-avatar-single"})])):Q("",!0)])],6)}const Xe=ut(Ye,[["render",mn]]);Ye.__docgenInfo={displayName:"SwAvatar",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"firstName",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"lastName",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"''"}},{name:"imageUrl",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"placeholder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"sourceContext",type:{name:"object"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'circle'"},values:["circle","square"]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/meteor-component-library/meteor-component-library/src/components/icons-media/sw-avatar/sw-avatar.vue"]};const Ze={title:"Components/Layout/sw-card",component:F,argTypes:{title:{control:{type:"text"},table:{category:"props"}},subtitle:{control:{type:"text"},table:{category:"props"}},"context-actions":{control:{type:null}},grid:{control:{type:null}},tabs:{control:{type:null}},avatar:{control:{type:null}},"before-card":{control:{type:null}},"after-card":{control:{type:null}}}},A={name:"Minimal",render:e=>({components:{SwCard:F,SwContextMenuItem:_e,SwTabs:Ie,SwAvatar:Xe,SwButton:je},setup(){return{args:e}},template:`
    <sw-card v-bind="args">
      <div v-html="args.default"></div>
    </sw-card>`}),args:{default:`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    `,title:"Title",subtitle:"Subtitle",toolbar:null,footer:null,headerRight:null,hero:!1,isLoading:!1,large:!1,avatar:null},...Ze},S={name:"Extended",render:e=>({components:{SwCard:F,SwContextMenuItem:_e,SwTabs:Ie,SwAvatar:Xe,SwButton:je},setup(){return{args:e}},template:`
    <sw-card v-bind="args">
        <h4>
          Active Tab: {{ activeTab }}
        </h4>

        <div v-html="args.default"></div>

        <template #toolbar>
          <template v-if="args.toolbar">
            <sw-button variant="primary">Primary button</sw-button>
            <sw-button variant="secondary">Secondary button</sw-button>
          </template>
        </template>

        <template #tabs>
          <sw-tabs
          v-if="args.tabs"
          :default-item="activeTab"
          @new-item-active="setContent"
          :items="tabItems"
          ></sw-tabs>
        </template>

        <template #footer>
          <div v-if="args.footer" v-html="args.footer"></div>
        </template>

        <template #avatar>
          <sw-avatar v-if="args.avatar" firstName="Max" lastName="Mustermann" variant="square" />
        </template>

        <template #headerRight>
          <div v-if="args.headerRight" v-html="args.headerRight"></div>
        </template>

        <template #context-actions>
          <template v-if="args['context-actions']">
            <sw-context-menu-item label="Menu Item A"></sw-context-menu-item>
            <sw-context-menu-item label="Menu Item B"></sw-context-menu-item>
            <sw-context-menu-item label="Menu Item C"></sw-context-menu-item>
          </template>
        </template>
    </sw-card>`,data(){return{activeTab:"tabA",tabItems:[{label:"Tab A",name:"tabA"},{label:"Tab B",name:"tabB"},{label:"Tab C",name:"tabC"}]}},methods:{setContent(t){this.activeTab=t}}}),args:{default:`
    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
    <br>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
    <br>
    `,toolbar:"<p>Toolbar</p>",footer:"<p><strong>Footer</strong></p>",title:"Title",subtitle:"Subtitle",headerRight:"Header right",hero:!1,isLoading:!1,large:!1,avatar:"AVTR",tabs:!0,"context-actions":!0},...Ze};var we,Te,$e;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Minimal',
  render: args => ({
    components: {
      SwCard,
      SwContextMenuItem,
      SwTabs,
      SwAvatar,
      SwButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <sw-card v-bind="args">
      <div v-html="args.default"></div>
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
}`,...($e=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ae,Se,xe;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Extended',
  render: args => ({
    components: {
      SwCard,
      SwContextMenuItem,
      SwTabs,
      SwAvatar,
      SwButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <sw-card v-bind="args">
        <h4>
          Active Tab: {{ activeTab }}
        </h4>

        <div v-html="args.default"></div>

        <template #toolbar>
          <template v-if="args.toolbar">
            <sw-button variant="primary">Primary button</sw-button>
            <sw-button variant="secondary">Secondary button</sw-button>
          </template>
        </template>

        <template #tabs>
          <sw-tabs
          v-if="args.tabs"
          :default-item="activeTab"
          @new-item-active="setContent"
          :items="tabItems"
          ></sw-tabs>
        </template>

        <template #footer>
          <div v-if="args.footer" v-html="args.footer"></div>
        </template>

        <template #avatar>
          <sw-avatar v-if="args.avatar" firstName="Max" lastName="Mustermann" variant="square" />
        </template>

        <template #headerRight>
          <div v-if="args.headerRight" v-html="args.headerRight"></div>
        </template>

        <template #context-actions>
          <template v-if="args['context-actions']">
            <sw-context-menu-item label="Menu Item A"></sw-context-menu-item>
            <sw-context-menu-item label="Menu Item B"></sw-context-menu-item>
            <sw-context-menu-item label="Menu Item C"></sw-context-menu-item>
          </template>
        </template>
    </sw-card>\`,
    data() {
      return {
        activeTab: 'tabA',
        tabItems: [{
          label: 'Tab A',
          name: 'tabA'
        }, {
          label: 'Tab B',
          name: 'tabB'
        }, {
          label: 'Tab C',
          name: 'tabC'
        }]
      };
    },
    methods: {
      setContent(name: string) {
        this.activeTab = name;
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
    'context-actions': true
  },
  ...meta
}`,...(xe=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};const Fn=["MinimalStory","ExtendedStory"];export{S as ExtendedStory,A as MinimalStory,Fn as __namedExportsOrder,Ze as default};
