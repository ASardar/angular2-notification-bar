!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(i,a){for(var u,c,s=0,l=[];s<i.length;s++)c=i[s],o[c]&&l.push.apply(l,o[c]),o[c]=0;for(u in a)e[u]=a[u];for(n&&n(i,a);l.length;)l.shift().call(null,t);if(a[0])return r[0]=0,t(0)};var r={},o={1:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+".bundle.js",r.appendChild(i)}},t.m=e,t.c=r,t.p="/angular2-notification-bar/example/dist/",t(0)}({0:function(e,t,n){"use strict";n(34),n(35)},34:function(e,t){(function(e){var t;!function(t){"use strict";function n(e,t,n,r){if(T(r)){if(T(n)){if(!E(e))throw new TypeError;if(!D(t))throw new TypeError;return p(e,t)}if(!E(e))throw new TypeError;if(!O(t))throw new TypeError;return n=j(n),d(e,t,n)}if(!E(e))throw new TypeError;if(!O(t))throw new TypeError;if(T(n))throw new TypeError;if(!O(r))throw new TypeError;return n=j(n),h(e,t,n,r)}function r(e,t){function n(n,r){if(T(r)){if(!D(n))throw new TypeError;_(e,t,n,void 0)}else{if(!O(n))throw new TypeError;r=j(r),_(e,t,n,r)}}return n}function o(e,t,n,r){if(!O(n))throw new TypeError;return T(r)||(r=j(r)),_(e,t,n,r)}function i(e,t,n){if(!O(t))throw new TypeError;return T(n)||(n=j(n)),v(e,t,n)}function a(e,t,n){if(!O(t))throw new TypeError;return T(n)||(n=j(n)),g(e,t,n)}function u(e,t,n){if(!O(t))throw new TypeError;return T(n)||(n=j(n)),k(e,t,n)}function c(e,t,n){if(!O(t))throw new TypeError;return T(n)||(n=j(n)),w(e,t,n)}function s(e,t){if(!O(e))throw new TypeError;return T(t)||(t=j(t)),m(e,t)}function l(e,t){if(!O(e))throw new TypeError;return T(t)||(t=j(t)),b(e,t)}function f(e,t,n){if(!O(t))throw new TypeError;T(n)||(n=j(n));var r=y(t,n,!1);if(T(r))return!1;if(!r["delete"](e))return!1;if(r.size>0)return!0;var o=U.get(t);return o["delete"](n),o.size>0||(U["delete"](t),!0)}function p(e,t){for(var n=e.length-1;n>=0;--n){var r=e[n],o=r(t);if(!T(o)){if(!D(o))throw new TypeError;t=o}}return t}function h(e,t,n,r){for(var o=e.length-1;o>=0;--o){var i=e[o],a=i(t,n,r);if(!T(a)){if(!O(a))throw new TypeError;r=a}}return r}function d(e,t,n){for(var r=e.length-1;r>=0;--r){var o=e[r];o(t,n)}}function y(e,t,n){var r=U.get(e);if(!r){if(!n)return;r=new X,U.set(e,r)}var o=r.get(t);if(!o){if(!n)return;o=new X,r.set(t,o)}return o}function v(e,t,n){var r=g(e,t,n);if(r)return!0;var o=P(t);return null!==o&&v(e,o,n)}function g(e,t,n){var r=y(t,n,!1);return void 0!==r&&Boolean(r.has(e))}function k(e,t,n){var r=g(e,t,n);if(r)return w(e,t,n);var o=P(t);return null!==o?k(e,o,n):void 0}function w(e,t,n){var r=y(t,n,!1);return void 0===r?void 0:r.get(e)}function _(e,t,n,r){var o=y(n,r,!0);o.set(e,t)}function m(e,t){var n=b(e,t),r=P(e);if(null===r)return n;var o=m(r,t);if(o.length<=0)return n;if(n.length<=0)return o;for(var i=new K,a=0;a<n.length;a++){var u=n[a];i.add(u)}for(var c=0;c<o.length;c++){var u=o[c];i.add(u)}return z(i)}function b(e,t){var n=y(e,t,!1),r=[];return n&&M(n,function(e,t){return r.push(t)}),r}function T(e){return void 0===e}function E(e){return Array.isArray?Array.isArray(e):e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function O(e){return"object"==typeof e?null!==e:"function"==typeof e}function D(e){return"function"==typeof e}function S(e){return"symbol"==typeof e}function j(e){return S(e)?e:String(e)}function P(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===N)return t;if(t!==N)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return t;var o=r.constructor;return"function"!=typeof o?t:o===e?t:o}function I(e){var t=e.next();return t.done?void 0:t}function Z(e){var t=e["return"];t&&t.call(e)}function M(e,t,n){var r=e.entries;if("function"==typeof r){var o,i=r.call(e);try{for(;o=I(i);){var a=o.value,u=a[0],c=a[1];t.call(n,c,u,e)}}finally{o&&Z(i)}}else{var s=e.forEach;"function"==typeof s&&s.call(e,t,n)}}function z(e){var t=[];return M(e,function(e,n){t.push(n)}),t}function C(e,t,n){var r=0;return{next:function(){if((e||t)&&r<(e||t).length){var o=r++;switch(n){case"key":return{value:e[o],done:!1};case"value":return{value:t[o],done:!1};case"key+value":return{value:[e[o],t[o]],done:!1}}}return e=void 0,t=void 0,{value:void 0,done:!0}},"throw":function(n){throw(e||t)&&(e=void 0,t=void 0),n},"return":function(n){return(e||t)&&(e=void 0,t=void 0),{value:n,done:!0}}}}function L(){var e={};return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},t.prototype["delete"]=function(t){var n=this._find(t,!1);if(n>=0){for(var r=this._keys.length,o=n+1;o<r;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,this._cacheKey=e,this._cacheIndex=-2,!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return C(this._keys,void 0,"key")},t.prototype.values=function(){return C(void 0,this._values,"value")},t.prototype.entries=function(){return C(this._keys,this._values,"key+value")},t.prototype._find=function(e,t){if(this._cacheKey===e)return this._cacheIndex;var n=this._keys.indexOf(e);return n<0&&t&&(n=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheKey=e,this._cacheIndex=n},t}()}function x(){return function(){function e(){this._map=new X}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype["delete"]=function(e){return this._map["delete"](e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e}()}function F(){function e(e,t){for(var n=0;n<t;++n)e[n]=255*Math.random()|0;return e}function t(t){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):e(new Uint8Array(t),t):e(new Array(t),t)}function n(){var e=t(i);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var n="",r=0;r<i;++r){var o=e[r];4!==r&&6!==r&&8!==r||(n+="-"),o<16&&(n+="0"),n+=o.toString(16).toLowerCase()}return n}function r(){var e;do e="@@WeakMap@@"+n();while(A.has(a,e));return a[e]=!0,e}function o(e,t){if(!H.call(e,u)){if(!t)return;Object.defineProperty(e,u,{value:W()})}return e[u]}var i=16,a=W(),u=r();return function(){function e(){this._key=r()}return e.prototype.has=function(e){var t=o(e,!1);return void 0!==t&&A.has(t,this._key)},e.prototype.get=function(e){var t=o(e,!1);return void 0!==t?A.get(t,this._key):void 0},e.prototype.set=function(e,t){var n=o(e,!0);return n[this._key]=t,this},e.prototype["delete"]=function(e){var t=o(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=r()},e}()}function R(e){return e.__DICTIONARY_MODE__=1,delete e.____DICTIONARY_MODE__,e}var A,H=Object.prototype.hasOwnProperty,B="function"==typeof Object.create,q=function(){function e(){}var t={};e.prototype=t;var n=new e;return n.__proto__===t}(),W=B?function(){return R(Object.create(null))}:q?function(){return R({__proto__:null})}:function(){return R({})};!function(e){var t=!B&&!q;e.has=t?function(e,t){return H.call(e,t)}:function(e,t){return t in e},e.get=t?function(e,t){return H.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}}(A||(A={}));var N=Object.getPrototypeOf(Function),X="function"==typeof Map?Map:L(),K="function"==typeof Set?Set:x(),G="function"==typeof WeakMap?WeakMap:F(),U=new G;t.decorate=n,t.metadata=r,t.defineMetadata=o,t.hasMetadata=i,t.hasOwnMetadata=a,t.getMetadata=u,t.getOwnMetadata=c,t.getMetadataKeys=s,t.getOwnMetadataKeys=l,t.deleteMetadata=f,function(e){if("undefined"!=typeof e.Reflect){if(e.Reflect!==t)for(var n in t)H.call(t,n)&&(e.Reflect[n]=t[n])}else e.Reflect=t}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:"undefined"!=typeof e?e:Function("return this;")())}(t||(t={}))}).call(t,function(){return this}())},35:function(e,t,n){(function(e,t){!function(e,t){t()}(this,function(){"use strict";function n(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function r(e,t){for(var r=e.constructor.name,o=function(o){var i=t[o],a=e[i];a&&(e[i]=function(e){return function(){return e.apply(this,n(arguments,r+"."+i))}}(a))},i=0;i<t.length;i++)o(i)}function o(e,t){var n=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};delete n.writable,delete n.value;var r=t.substr(2),o="_"+t;n.set=function(e){if(this[o]&&this.removeEventListener(r,this[o]),"function"==typeof e){var t=function(t){var n;n=e.apply(this,arguments),void 0==n||n||t.preventDefault()};this[o]=t,this.addEventListener(r,t,!1)}else this[o]=null},n.get=function(){return this[o]||null},Object.defineProperty(e,t,n)}function i(e,t){var n=[];for(var r in e)"on"==r.substr(0,2)&&n.push(r);for(var i=0;i<n.length;i++)o(e,n[i]);if(t)for(var a=0;a<t.length;a++)o(e,"on"+t[a])}function a(e,t,n,r,o){var i=e[M];if(i)for(var a=0;a<i.length;a++){var u=i[a],c=u.data;if(c.handler===t&&c.useCapturing===r&&c.eventName===n)return o&&i.splice(a,1),u}return null}function u(e,t){var n=e[M];n||(n=e[M]=[]),n.push(t)}function c(e,t,n,r){function o(e){var t=e.data;return u(t.target,e),t.target[c](t.eventName,e.invoke,t.useCapturing)}function i(e){var t=e.data;a(t.target,e.invoke,t.eventName,t.useCapturing,!0),t.target[s](t.eventName,e.invoke,t.useCapturing)}void 0===n&&(n=!0),void 0===r&&(r=!1);var c=S(e),s=S(t),l=!n&&void 0;return function(t,n){var u=n[0],s=n[1],f=n[2]||l,p=t||j,h=null;"function"==typeof s?h=s:s&&s.handleEvent&&(h=function(e){return s.handleEvent(e)});var d=!1;try{d=s&&"[object FunctionWrapper]"===s.toString()}catch(y){return}if(!h||d)return p[c](u,s,f);if(!r){var v=a(p,s,u,f,!1);if(v)return p[c](u,v.invoke,f)}var g=Zone.current,k=p.constructor.name+"."+e+":"+u,w={target:p,eventName:u,name:u,useCapturing:f,handler:s};g.scheduleEventTask(k,h,w,o,i)}}function s(e,t){void 0===t&&(t=!0);var n=S(e),r=!t&&void 0;return function(e,t){var o=t[0],i=t[1],u=t[2]||r,c=e||j,s=a(c,i,o,u,!0);s?s.zone.cancelTask(s):c[n](o,i,u)}}function l(e){return!(!e||!e.addEventListener)&&(h(e,z,function(){return L}),h(e,C,function(){return x}),!0)}function f(e){var t=j[e];if(t){j[e]=function(){var r=n(arguments,e);switch(r.length){case 0:this[F]=new t;break;case 1:this[F]=new t(r[0]);break;case 2:this[F]=new t(r[0],r[1]);break;case 3:this[F]=new t(r[0],r[1],r[2]);break;case 4:this[F]=new t(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}};var r,o=new t(function(){});for(r in o)"XMLHttpRequest"===e&&"responseBlob"===r||!function(t){"function"==typeof o[t]?j[e].prototype[t]=function(){return this[F][t].apply(this[F],arguments)}:Object.defineProperty(j[e].prototype,t,{set:function(n){"function"==typeof n?this[F][t]=Zone.current.wrap(n,e+"."+t):this[F][t]=n},get:function(){return this[F][t]}})}(r);for(r in t)"prototype"!==r&&t.hasOwnProperty(r)&&(j[e][r]=t[r])}}function p(e,t){try{return Function("f","return function "+e+"(){return f(this, arguments)}")(t)}catch(n){return function(){return t(this,arguments)}}}function h(e,t,n){for(var r=e;r&&Object.getOwnPropertyNames(r).indexOf(t)===-1;)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,i=S(t);return r&&!(o=r[i])&&(o=r[i]=r[t],r[t]=p(t,n(o,i,t))),o}function d(e,t,n,r){function o(t){var n=t.data;return n.args[0]=function(){t.invoke.apply(this,arguments),delete c[n.handleId]},n.handleId=a.apply(e,n.args),c[n.handleId]=t,t}function i(e){return delete c[e.data.handleId],u(e.data.handleId)}var a=null,u=null;t+=r,n+=r;var c={};a=h(e,t,function(n){return function(a,u){if("function"==typeof u[0]){var c=Zone.current,s={handleId:null,isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?u[1]||0:null,args:u},l=c.scheduleMacroTask(t,u[0],s,o,i);if(!l)return l;var f=l.data.handleId;return f.ref&&f.unref&&(l.ref=f.ref.bind(f),l.unref=f.unref.bind(f)),l}return n.apply(e,u)}}),u=h(e,n,function(t){return function(n,r){var o="number"==typeof r[0]?c[r[0]]:r[0];o&&"string"==typeof o.type?(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}function y(){Object.defineProperty=function(e,t,n){if(g(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);var r=n.configurable;return"prototype"!==t&&(n=k(e,t,n)),w(e,t,n,r)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"!=typeof t||Object.isFrozen(t)||Object.keys(t).forEach(function(n){t[n]=k(e,n,t[n])}),H(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=A(e,t);return g(e,t)&&(n.configurable=!1),n}}function v(e,t,n){var r=n.configurable;return n=k(e,t,n),w(e,t,n,r)}function g(e,t){return e&&e[B]&&e[B][t]}function k(e,t,n){return n.configurable=!0,n.configurable||(e[B]||R(e,B,{writable:!0,value:{}}),e[B][t]=!0),n}function w(e,t,n,r){try{return R(e,t,n)}catch(o){if(!n.configurable)throw o;"undefined"==typeof r?delete n.configurable:n.configurable=r;try{return R(e,t,n)}catch(o){var i=null;try{i=JSON.stringify(n)}catch(o){i=i.toString()}console.log("Attempting to configure '"+t+"' with descriptor '"+i+"' on object '"+e+"' and got error, giving up: "+o)}}}function _(e){var t=[],n=e.wtf;n?t=q.split(",").map(function(e){return"HTML"+e+"Element"}).concat(W):e[N]?t.push(N):t=W;for(var r=0;r<t.length;r++){var o=e[t[r]];l(o&&o.prototype)}}function m(e){var t=e.WebSocket;e.EventTarget||l(t.prototype),e.WebSocket=function(e,n){var r,o=arguments.length>1?new t(e,n):new t(e),a=Object.getOwnPropertyDescriptor(o,"onmessage");return a&&a.configurable===!1?(r=Object.create(o),["addEventListener","removeEventListener","send","close"].forEach(function(e){r[e]=function(){return o[e].apply(o,arguments)}})):r=o,i(r,["close","error","message","open"]),r};for(var n in t)e.WebSocket[n]=t[n]}function b(e){if(!I){var t="undefined"!=typeof WebSocket;T()?(Z&&i(HTMLElement.prototype,X),i(XMLHttpRequest.prototype,null),"undefined"!=typeof IDBIndex&&(i(IDBIndex.prototype,null),i(IDBRequest.prototype,null),i(IDBOpenDBRequest.prototype,null),i(IDBDatabase.prototype,null),i(IDBTransaction.prototype,null),i(IDBCursor.prototype,null)),t&&i(WebSocket.prototype,null)):(E(),f("XMLHttpRequest"),t&&m(e))}}function T(){if(Z&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{get:function(){return!0}});var t=new XMLHttpRequest,n=!!t.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{}),n}function E(){for(var e=function(e){var t=X[e],n="on"+t;self.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][K]&&(t=Zone.current.wrap(o[n],r),t[K]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<X.length;t++)e(t)}function O(e){if(Z&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,r){return r&&r.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(r.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(r.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),v(r.prototype,e,n)):r.prototype[e]=Zone.current.wrap(r.prototype[e],t)}else r.prototype[e]&&(r.prototype[e]=Zone.current.wrap(r.prototype[e],t))}),t.apply(document,[e,r])}}}function D(e){function t(e){var t=e[$];return t}function n(e){var t=e.data;t.target.addEventListener("readystatechange",function(){t.target.readyState===t.target.DONE&&(t.aborted||e.invoke())});var n=t.target[$];return n||(t.target[$]=e),a.apply(t.target,t.args),e}function r(){}function o(e){var t=e.data;return t.aborted=!0,u.apply(t.target,t.args)}var i=h(e.XMLHttpRequest.prototype,"open",function(){return function(e,t){return e[ee]=0==t[2],i.apply(e,t)}}),a=h(e.XMLHttpRequest.prototype,"send",function(){return function(e,t){var i=Zone.current;if(e[ee])return a.apply(e,t);var u={target:e,isPeriodic:!1,delay:null,args:t,aborted:!1};return i.scheduleMacroTask("XMLHttpRequest.send",r,u,n,o)}}),u=h(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,n){var r=t(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn)return;r.zone.cancelTask(r)}}})}var S=(function(e){function t(e){return"__zone_symbol__"+e}function n(){0==O&&0==b.length&&(e[k]?e[k].resolve(0)[w](i):e[g](i,0))}function r(e){n(),b.push(e)}function o(e){var t=e&&e.rejection;t&&console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t,t instanceof Error?t.stack:void 0),console.error(e)}function i(){if(!T){for(T=!0;b.length;){var e=b;b=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){o(r)}}}for(;E.length;)for(var i=function(){var e=E.shift();try{e.zone.runGuarded(function(){throw e})}catch(t){o(t)}};E.length;)i();T=!1}}function a(e){return e&&e.then}function u(e){return e}function c(e){return z.reject(e)}function s(e,t){return function(n){l(e,t,n)}}function l(e,t,r){if(e[D]===P)if(r instanceof z&&r[D]!==P)f(r),l(e,r[D],r[S]);else if(a(r))r.then(s(e,t),s(e,!1));else{e[D]=t;var o=e[S];e[S]=r;for(var i=0;i<o.length;)p(e,o[i++],o[i++],o[i++],o[i++]);if(0==o.length&&t==Z){e[D]=M;try{throw new Error("Uncaught (in promise): "+r+(r&&r.stack?"\n"+r.stack:""))}catch(u){var c=u;c.rejection=r,c.promise=e,c.zone=d.current,c.task=d.currentTask,E.push(c),n()}}}return e}function f(e){if(e[D]===M){e[D]=Z;for(var t=0;t<E.length;t++)if(e===E[t].promise){E.splice(t,1);break}}}function p(e,t,n,r,o){f(e);var i=e[D]?r||u:o||c;t.scheduleMicroTask(j,function(){try{l(n,!0,t.run(i,null,[e[S]]))}catch(r){l(n,!1,r)}})}function h(e){var n=e.prototype,r=n[t("then")]=n.then;n.then=function(e,t){var n=this;return new z(function(e,t){r.call(n,e,t)}).then(e,t)}}if(e.Zone)throw new Error("Zone already loaded.");var d=function(){function n(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new y(this,this._parent&&this._parent._zoneDelegate,t)}return n.assertZonePatched=function(){if(e.Promise!==z)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")},Object.defineProperty(n,"current",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(n,"currentTask",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),n.prototype.get=function(e){var t=this.getZoneWith(e);if(t)return t._properties[e]},n.prototype.getZoneWith=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t;t=t._parent}return null},n.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},n.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},n.prototype.run=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=_;_=this;try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{_=o}},n.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=_;_=this;try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(i){if(this._zoneDelegate.handleError(this,i))throw i}}finally{_=o}},n.prototype.runTask=function(e,t,n){if(e.runCount++,e.zone!=this)throw new Error("A task can only be run in the zone which created it! (Creation: "+e.zone.name+"; Execution: "+this.name+")");var r=m;m=e;var o=_;_=this;try{"macroTask"==e.type&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(i){if(this._zoneDelegate.handleError(this,i))throw i}}finally{_=o,m=r}},n.prototype.scheduleMicroTask=function(e,t,n,r){return this._zoneDelegate.scheduleTask(this,new v("microTask",this,e,t,n,r,null))},n.prototype.scheduleMacroTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new v("macroTask",this,e,t,n,r,o))},n.prototype.scheduleEventTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new v("eventTask",this,e,t,n,r,o))},n.prototype.cancelTask=function(e){var t=this._zoneDelegate.cancelTask(this,e);return e.runCount=-1,e.cancelFn=null,t},n.__symbol__=t,n}(),y=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._hasTaskZS=n&&(n.onHasTask?n:t._hasTaskZS),this._hasTaskDlgt=n&&(n.onHasTask?t:t._hasTaskDlgt)}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new d(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this.zone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this.zone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this.zone,e,t)},e.prototype.scheduleTask=function(e,t){try{if(this._scheduleTaskZS)return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this.zone,e,t);if(t.scheduleFn)t.scheduleFn(t);else{if("microTask"!=t.type)throw new Error("Task is missing scheduleFn.");r(t)}return t}finally{e==this.zone&&this._updateTaskCount(t.type,1)}},e.prototype.invokeTask=function(e,t,n,r){try{return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this.zone,e,t,n,r):t.callback.apply(n,r)}finally{e!=this.zone||"eventTask"==t.type||t.data&&t.data.isPeriodic||this._updateTaskCount(t.type,-1)}},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this.zone,e,t);else{if(!t.cancelFn)throw new Error("Task does not support cancellation, or is already canceled.");n=t.cancelFn(t)}return e==this.zone&&this._updateTaskCount(t.type,-1),n},e.prototype.hasTask=function(e,t){return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this.zone,e,t)},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(o<0)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var i={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};try{this.hasTask(this.zone,i)}finally{this._parentDelegate&&this._parentDelegate._updateTaskCount(e,t)}}},e}(),v=function(){function e(e,t,n,r,o,a,u){this.runCount=0,this.type=e,this.zone=t,this.source=n,this.data=o,this.scheduleFn=a,this.cancelFn=u,this.callback=r;var c=this;this.invoke=function(){O++;try{return t.runTask(c,this,arguments)}finally{1==O&&i(),O--}}}return e.prototype.toString=function(){return this.data&&"undefined"!=typeof this.data.handleId?this.data.handleId:Object.prototype.toString.call(this)},e}(),g=t("setTimeout"),k=t("Promise"),w=t("then"),_=new d(null,null),m=null,b=[],T=!1,E=[],O=0,D=t("state"),S=t("value"),j="Promise.then",P=null,I=!0,Z=!1,M=0,z=function(){function e(t){var n=this;if(!(n instanceof e))throw new Error("Must be an instanceof Promise.");n[D]=P,n[S]=[];try{t&&t(s(n,I),s(n,Z))}catch(r){l(n,!1,r)}}return e.resolve=function(e){return l(new this(null),I,e)},e.reject=function(e){return l(new this(null),Z,e)},e.race=function(e){function t(e){i&&(i=r(e))}function n(e){i&&(i=o(e))}for(var r,o,i=new this(function(e,t){n=[e,t],r=n[0],o=n[1];var n}),u=0,c=e;u<c.length;u++){var s=c[u];a(s)||(s=this.resolve(s)),s.then(t,n)}return i},e.all=function(e){for(var t,n,r=new this(function(e,r){t=e,n=r}),o=0,i=[],u=0,c=e;u<c.length;u++){var s=c[u];a(s)||(s=this.resolve(s)),s.then(function(e){return function(n){i[e]=n,o--,o||t(i)}}(o),n),o++}return o||t(i),r},e.prototype.then=function(e,t){var n=new this.constructor(null),r=d.current;return this[D]==P?this[S].push(r,n,e,t):p(this,r,n,e,t),n},e.prototype["catch"]=function(e){return this.then(null,e)},e}();z.resolve=z.resolve,z.reject=z.reject,z.race=z.race,z.all=z.all;var C=e[t("Promise")]=e.Promise;if(e.Promise=z,C&&(h(C),"undefined"!=typeof e.fetch)){var L=void 0;try{L=e.fetch()}catch(x){L=e.fetch("about:blank")}L.then(function(){return null},function(){return null}),L.constructor!=C&&L.constructor!=z&&h(L.constructor)}return Promise[d.__symbol__("uncaughtPromiseErrors")]=E,e.Zone=d}("object"==typeof window&&window||"object"==typeof self&&self||e),Zone.__symbol__),j="object"==typeof window&&window||"object"==typeof self&&self||e,P="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,I="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),Z=!I&&!P&&!("undefined"==typeof window||!window.HTMLElement),M=S("eventTasks"),z="addEventListener",C="removeEventListener",L=c(z,C),x=s(C),F=S("originalInstance"),R=Object[S("defineProperty")]=Object.defineProperty,A=Object[S("getOwnPropertyDescriptor")]=Object.getOwnPropertyDescriptor,H=Object.create,B=S("unconfigurables"),q="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",W="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex".split(","),N="EventTarget",X="copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror".split(" "),K=S("unbound"),G="set",U="clear",V=["alert","prompt","confirm"],J="object"==typeof window&&window||"object"==typeof self&&self||e;d(J,G,U,"Timeout"),d(J,G,U,"Interval"),d(J,G,U,"Immediate"),d(J,"request","cancel","AnimationFrame"),d(J,"mozRequest","mozCancel","AnimationFrame"),d(J,"webkitRequest","webkitCancel","AnimationFrame");for(var Y=0;Y<V.length;Y++){var Q=V[Y];h(J,Q,function(e,t,n){return function(t,r){return Zone.current.run(e,J,r,n)}})}_(J),b(J),f("MutationObserver"),f("WebKitMutationObserver"),f("FileReader"),y(),O(J),D(J);var $=S("xhrTask"),ee=S("xhrSync");J.navigator&&J.navigator.geolocation&&r(J.navigator.geolocation,["getCurrentPosition","watchPosition"])})}).call(t,function(){return this}(),n(36))},36:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&h&&(y=!1,h.length?d=h.concat(d):v=-1,d.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=d.length;t;){for(h=d,d=[];++v<t;)h&&h[v].run();v=-1,t=d.length}h=null,y=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,d=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||y||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}});
//# sourceMappingURL=polyfills.js.map