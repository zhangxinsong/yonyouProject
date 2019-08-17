/*! build:ucf hash:71750d44a5257e89ea60, chunkhash:654c4c6a9d4e94ce91b1, name:mirror-demo/index, filebase:index.js, query:, file:mirror-demo/index.js */!function(t){function e(e){for(var r,c,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)c=u[l],o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);for(p&&p(e);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={3:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=i;a.push([2067,0]),n()}({0:function(t,e){t.exports=React},1:function(t,e){t.exports=PropTypes},1947:function(t,e,n){},1948:function(t,e,n){},1949:function(t,e,n){},1950:function(t,e,n){},2067:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),u=n(10),i=n.n(u),s=n(11),p=n.n(s),l=n(12),f=n.n(l),m=n(13),d=n.n(m),h=n(14),v=n.n(h),y=n(3),b=(n(1947),function(t){function e(t){var n;return i()(this,e),(n=f()(this,d()(e).call(this,t))).increment=function(){var t={count:n.props.count+1};a.actions.home.updateState(t)},n.decrement=function(){var t={count:n.props.count-1};a.actions.home.updateState(t)},n.incrementAsync=function(){var t={count:n.props.count+1};a.actions.home.incrementAsync(t)},n.goToContact=function(){a.actions.routing.push({pathname:"/contact",search:"?a=".concat(1,"&b=").concat(2)})},n}return v()(e,t),p()(e,[{key:"render",value:function(){var t=this.props.count;return o.a.createElement("div",{className:"app-wrap"},o.a.createElement("h1",null,t),o.a.createElement(y.ButtonGroup,{style:{margin:10}},o.a.createElement(y.Button,{shape:"border",onClick:this.increment},"+"),o.a.createElement(y.Button,{shape:"border",onClick:this.decrement},"-"),o.a.createElement(y.Button,{shape:"border",onClick:this.incrementAsync},"+ async")),o.a.createElement("p",{onClick:this.goToContact},"跳转至 Contact 页面"))}}]),e}(r.Component));b.displayName="IndexView";var x=b,E=n(6),g=n.n(E),w=n(16),S=n.n(w),T=n(27),O=n.n(T),j=n(59),k=n.n(j),C={GET_LIST:"".concat("/iuap-pap-demo-be","/sales/list")},_=function(t){return k()(C.GET_LIST,{method:"get",params:t})},P=(n(1),{name:"home",initialState:{count:0},reducers:{updateState:function(t,e){return O()({},t,e)}},effects:{loadData:function(){var t=S()(g.a.mark(function t(e,n){var r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),incrementAsync:function(){var t=S()(g.a.mark(function t(e,n){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,setTimeout(function(){a.actions.home.updateState(e)},1e3);case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}});c.a.model(P);var M=Object(a.connect)(function(t){return t.home})(x),R=(n(1948),function(t){function e(){return i()(this,e),f()(this,d()(e).apply(this,arguments))}return v()(e,t),p()(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"contact-wrap"},"Hello,World Contact")}}]),e}(r.Component)),B={GET_LIST:"".concat("/iuap-pap-demo-be","/sales/list")},G=function(t){return k()(B.GET_LIST,{method:"get",params:t})},I={name:"contact",initialState:{count:0},reducers:{updateState:function(t,e){return O()({},t,e)}},effects:{loadData:function(){var t=S()(g.a.mark(function t(e,n){var r;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}};c.a.model(I);var A=Object(a.connect)(function(t){return t.contact})(R);n(1949),n(1950);c.a.defaults({historyMode:"hash"}),Object(a.render)(o.a.createElement(a.Router,null,o.a.createElement(function(){return o.a.createElement("div",{className:"route-content"},o.a.createElement(a.Route,{exact:!0,path:"/",component:M}),o.a.createElement(a.Route,{exact:!0,path:"/home",component:M}),o.a.createElement(a.Route,{exact:!0,path:"/contact",component:A}))},null)),document.querySelector("#app"))},3:function(t,e){t.exports=TinperBee},7:function(t,e){t.exports=ReactDOM}});