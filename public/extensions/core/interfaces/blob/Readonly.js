var __DirectusExtension__=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=84)}({0:function(e,t,n){"use strict";function r(e,t,n,r,o,i,u,l){var s=typeof(e=e||{}).default;"object"!==s&&"function"!==s||(e=e.default);var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),u?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var f=c.render;c.render=function(e,t){return a.call(t),f(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,a):[a]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},1:function(e,t){e.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null}}}},84:function(e,t,n){"use strict";n.r(t);var r=n(1),o={mixins:[n.n(r).a]},i=n(0),u=Object(i.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("i",{staticClass:"material-icons"},[this._v("insert_drive_file")])},[],!1,null,null,null);t.default=u.exports}});