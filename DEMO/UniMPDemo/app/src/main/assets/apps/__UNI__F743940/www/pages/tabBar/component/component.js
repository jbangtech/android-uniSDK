!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=339)}({0:function(e,t,n){"use strict";function i(e,t,n,i,o,r,a,s,u,l){var p,c="function"==typeof e?e.options:e;if(u){c.components||(c.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(c.components,d)&&(c.components[d]=u[d])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(c.mixins||(c.mixins=[])).push(l)),t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=p):o&&(p=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),p)if(c.functional){c._injectStyles=p;var g=c.render;c.render=function(e,t){return p.call(t),g(e,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,p):[p]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},1:function(e,t){e.exports={"@VERSION":2}},103:function(e,t,n){"use strict";var i=n(104),o=n.n(i);t.default=o.a},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,weex.requireModule("dom").addRule("fontFace",{fontFamily:"uniicons",src:"url('/static/uni.ttf')"});var i={props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data:function(){return{list:[{id:"view",name:"\u89c6\u56fe\u5bb9\u5668",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"\u57fa\u7840\u5185\u5bb9",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"\u8868\u5355\u7ec4\u4ef6",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"\u5bfc\u822a",open:!1,pages:["navigator"]},{id:"media",name:"\u5a92\u4f53\u7ec4\u4ef6",open:!1,pages:["image","video"]},{id:"map",name:"\u5730\u56fe",open:!1,pages:["map"]},{id:"canvas",name:"\u753b\u5e03",open:!1,pages:["canvas"]},{id:"web-view",name:"\u7f51\u9875",open:!1,pages:[{name:"\u7f51\u7edc\u7f51\u9875",url:"/pages/component/web-view/web-view"},{name:"\u672c\u5730\u7f51\u9875",url:"/pages/component/web-view-local/web-view-local"}]},{id:"ad",url:"ad",name:"AD\u7ec4\u4ef6",open:!1}]}},onShareAppMessage:function(){return{title:"\u6b22\u8fce\u4f53\u9a8cuni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(e){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(e,t){if(this.list[e].pages)for(var n=0;n<this.list.length;++n)this.list[n].open=e===n&&!this.list[n].open;else this.goDetailPage("",this.list[e].url)},goDetailPage:function(e,t){if("string"==typeof t){var n="/pages/component/"+t+"/"+t;this.hasLeftWin?uni.reLaunch({url:n}):uni.navigateTo({url:n})}else this.hasLeftWin?uni.reLaunch({url:t.url}):uni.navigateTo({url:t.url})}}};t.default=i},105:function(e,t){e.exports={".uni-icon":{"":{fontFamily:["uniicons",0,0,1],fontWeight:["normal",0,0,1]}},".uni-container":{"":{paddingTop:["15",0,0,2],paddingRight:["15",0,0,2],paddingBottom:["15",0,0,2],paddingLeft:["15",0,0,2],backgroundColor:["#f8f8f8",0,0,2]}},".uni-header-logo":{"":{paddingTop:["15",0,0,3],paddingRight:["15",0,0,3],paddingBottom:["15",0,0,3],paddingLeft:["15",0,0,3],flexDirection:["column",0,0,3],justifyContent:["center",0,0,3],alignItems:["center",0,0,3],marginTop:["10rpx",0,0,3]}},".uni-header-image":{"":{width:["80",0,0,4],height:["80",0,0,4]}},".uni-hello-text":{"":{marginBottom:["20",0,0,5]}},".hello-text":{"":{color:["#7A7E83",0,0,6],fontSize:["14",0,0,6],lineHeight:["20",0,0,6]}},".hello-link":{"":{color:["#7A7E83",0,0,7],fontSize:["14",0,0,7],lineHeight:["20",0,0,7]}},".uni-panel":{"":{marginBottom:["12",0,0,8]}},".uni-panel-h":{"":{backgroundColor:["#ffffff",0,0,9],flexDirection:["row",1,0,9],alignItems:["center",1,0,9],paddingTop:["12",0,0,9],paddingRight:["12",0,0,9],paddingBottom:["12",0,0,9],paddingLeft:["12",0,0,9]}},".uni-panel-h-on":{"":{backgroundColor:["#f0f0f0",0,0,11]}},".uni-panel-text":{"":{flex:[1,0,0,12],color:["#000000",0,0,12],fontSize:["14",0,0,12],fontWeight:["normal",0,0,12]}},".uni-panel-icon":{"":{marginLeft:["15",0,0,13],color:["#999999",0,0,13],fontSize:["14",0,0,13],fontWeight:["normal",0,0,13],transform:["rotate(0deg)",0,0,13],transitionDuration:[0,0,0,13],transitionProperty:["transform",0,0,13]}},".uni-panel-icon-on":{"":{transform:["rotate(180deg)",0,0,14]}},".uni-navigate-item":{"":{flexDirection:["row",0,0,15],alignItems:["center",0,0,15],backgroundColor:["#FFFFFF",0,0,15],borderTopStyle:["solid",0,0,15],borderTopColor:["#f0f0f0",0,0,15],borderTopWidth:["1",0,0,15],paddingTop:["12",0,0,15],paddingRight:["12",0,0,15],paddingBottom:["12",0,0,15],paddingLeft:["12",0,0,15],"backgroundColor:active":["#f8f8f8",0,0,16]}},".uni-navigate-text":{"":{flex:[1,0,0,17],color:["#000000",0,0,17],fontSize:["14",0,0,17],fontWeight:["normal",0,0,17]}},".uni-navigate-icon":{"":{marginLeft:["15",0,0,18],color:["#999999",0,0,18],fontSize:["14",0,0,18],fontWeight:["normal",0,0,18]}},"@VERSION":2}},2:function(e,t,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},23:function(e,t,n){"use strict";n.r(t);var i=n(24),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},232:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uLink:n(41).default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["uni-container"]},[e.hasLeftWin?e._e():n("view",{staticClass:["uni-header-logo"]},[n("u-image",{staticClass:["uni-header-image"],attrs:{src:"/static/componentIndex.png"}})],1),e.hasLeftWin?e._e():n("view",{staticClass:["uni-hello-text"]},[n("u-text",{staticClass:["hello-text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("uni-app\u5185\u7f6e\u7ec4\u4ef6\uff0c\u5c55\u793a\u6837\u5f0f\u4ec5\u4f9b\u53c2\u8003\uff0c\u6587\u6863\u8be6\u89c1\uff1a")]),n("u-link",{staticClass:["hello-link"],attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),e._l(e.list,(function(t,i){return n("view",{key:t.id,staticClass:["uni-panel"]},[n("view",{staticClass:["uni-panel-h"],class:t.open?"uni-panel-h-on":"",on:{click:function(n){e.triggerCollapse(i,t.id)}}},[n("u-text",{staticClass:["uni-panel-text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.name))]),n("u-text",{staticClass:["uni-panel-icon","uni-icon"],class:t.open?"uni-panel-icon-on":"",appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.pages?"\ue581":"\ue470"))])]),t.open?n("view",{staticClass:["uni-panel-c"]},e._l(t.pages,(function(i,o){return n("view",{key:o,staticClass:["uni-navigate-item"],class:{"left-win-active":e.leftWinActive===(i.url?i.url.split("/")[3]:i)&&e.hasLeftWin},on:{click:function(n){e.goDetailPage(t.id,i)}}},[n("u-text",{staticClass:["uni-navigate-text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(i.name?i.name:i))]),n("u-text",{staticClass:["uni-navigate-icon","uni-icon"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\ue470")])])})),0):e._e()])}))],2)])},r=[]},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL:function(){plus.runtime.openURL(this.href)}}};t.default=i},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement;return(this._self._c||e)("u-text",{staticStyle:{textDecoration:"underline"},appendAsTree:!0,attrs:{href:this.href,inWhiteList:this.inWhiteList,append:"tree"},on:{click:this.openURL}},[this._v(this._s(this.text))])},o=[]},289:function(e,t,n){"use strict";n.r(t);var i=n(105),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},3:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t.default=o.a},339:function(e,t,n){"use strict";n.r(t);n(2);var i=n(53);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),i.default.mpType="page",i.default.route="pages/tabBar/component/component",i.default.el="#root",new Vue(i.default)},41:function(e,t,n){"use strict";n.r(t);var i=n(25),o=n(23);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);var a=n(0);var s=Object(a.a)(o.default,i.b,i.c,!1,null,null,"3347677b",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(s),t.default=s.exports},53:function(e,t,n){"use strict";var i=n(232),o=n(103),r=n(0);var a=Object(r.a)(o.default,i.b,i.c,!1,null,null,"0956de91",!1,i.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(289).default,this.options.style):Object.assign(this.options.style,n(289).default)}).call(a),t.default=a.exports}});