!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(self,(function(){return function(){"use strict";var t={d:function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,n){return r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(t,n)}function o(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}t.r(n),t.d(n,{processChildren:function(){return wt}});var l=function(t){return c(t).map((function(t){return t.cloneNode(!0)}))},s=function(t,n){var e,r=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}(n);try{for(r.s();!(e=r.n()).done;){var o=e.value;t.appendChild(o)}}catch(t){r.e(t)}finally{r.f()}},v=function(t){for(;t.hasChildNodes();)t.removeChild(t.lastChild)};function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,n,e){return y=h()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&r(i,e.prototype),i},y.apply(null,arguments)}function p(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||a(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var b=function(t){return t.name.startsWith("scope:")},m=function(t){for(var n={},e=100;null!=t&&e-- >0;){var r=A.get(t);if(r)for(var o=0,i=Object.keys(r);o<i.length;o++){var u=i[o];u in n==0&&(n[u]=r[u])}t=t.parentNode}return n},g=function(t,n){A.set(t,n)},w=function(t,n,e){for(var r=100;null!=t&&r-- >0;){var o=A.get(t);if(o&&n in o)return void(o[n]=e);t=t.parentNode}},j=function(t,n){return n>=t?function(t,n){for(var e=[],r=t;r<=n;r++)e.push(r);return e}(t,n):function(t,n){for(var e=[],r=t;r>=n;r--)e.push(r);return e}(t,n)},S=new Map,O=new Map,A=new WeakMap,E=[],P=!1,x=function t(){P||0===E.length||(P=!0,E.shift(1)().catch((function(t){return console.error(t)})).finally((function(){P=!1,t()})))},I=function(t,n,e){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=m(t);if(n in o?w(t,n,e):O.set(n,e),r&&S.has(n)){var i=S.get(n);E.push((function(){return wt(i.values())})),x()}},C=function(t,n){var e=new Map(c(O)),r=m(t);Object.entries(r).forEach((function(t){var n=p(t,2),r=n[0],o=n[1];e.set(r,o)}));var o=e.keys(),i=e.values();return y(Function,c(o).concat(["range","return ".concat(n)])).apply(void 0,c(i).concat([j]))},W=function(t,n){var e=n.name,r=n.value;return e.startsWith("scope:")&&(e=e.substring(6)),e.endsWith(":number")?{name:e.substring(0,e.length-7),value:Number(r)}:e.endsWith(":bool")?{name:e.substring(0,e.length-5),value:C(t,r)}:e.endsWith(":object")?{name:e.substring(0,e.length-7),value:C(t,r)}:{name:e,value:r}},M=function(t){return"cmd"===t.name};function N(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}var k=function(t){var n=t.headers.get("content-type");return n&&n.includes("application/json")};function T(t,n){var e=t();return e&&e.then?e.then(n):n(e)}var U,$=(U=function(){return N(fetch.apply(void 0,arguments),(function(t){var n=!1;if(!t.ok)throw new Error("HTTP Error Response: ".concat(t.status," ").concat(t.statusText));return T((function(){if(k(t))return n=!0,N(t.json(),(function(n){return{response:t,json:n}}))}),(function(e){return n?e:{response:t,json:null}}))}))},function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(U.apply(this,t))}catch(t){return Promise.reject(t)}});function D(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var L=new WeakMap,R=function(t,n,e){t.addEventListener(n,e),L.has(t)||L.set(t,[]),L.set(t,[].concat(c(L.get(t)),[[n,e]]))},B=function(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(t.apply(this,n))}catch(t){return Promise.reject(t)}}}((function(t,n){var e=document.querySelector("SUB[name=".concat(t,"]"));if(!e)throw new Error('SUB "'.concat(t,'" was expected to exist.'));return wt(e.children)})),_=function(t,n){t.style.display=n?"inline-block":""};function F(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function q(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?F(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function H(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return V(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?V(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}function V(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var X=function(t){return t.name.endsWith(":for:of")},z=function(t){return t.name.endsWith(":for:in")},G=function(t){return X(t)||z(t)},J=function(t){return c(t.attributes).filter(G)},K=function(t){var n=t.name;return n.substring(0,n.length-7)},Q=new WeakMap,Y=function(t,n){var e,r=H(t);try{for(r.s();!(e=r.n()).done;){var o=e.value;g(o,n)}}catch(t){r.e(t)}finally{r.f()}};function Z(t,n){var e=t();return e&&e.then?e.then(n):n(e)}function tt(){}function nt(t,n){if(!n)return t&&t.then?t.then(tt):Promise.resolve()}var et="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function rt(){rt=function(t,n){return new i(t,void 0,n)};var t=RegExp.prototype,n=new WeakMap;function i(t,e,o){var u=new RegExp(t,e);return n.set(u,o||n.get(t)),r(u,i.prototype)}function u(t,e){var r=n.get(e);return Object.keys(r).reduce((function(n,e){return n[e]=t[r[e]],n}),Object.create(null))}return o(i,RegExp),i.prototype.exec=function(n){var e=t.exec.call(this,n);return e&&(e.groups=u(e,this)),e},i.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var i=n.get(this);return t[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(t,n){return"$"+i[n]})))}if("function"==typeof o){var a=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!==e(t[t.length-1])&&(t=[].slice.call(t)).push(u(t,a)),o.apply(this,t)}))}return t[Symbol.replace].call(this,r,o)},rt.apply(this,arguments)}function ot(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function it(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?ot(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ot(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function ut(t,n,e){if(!t.s){if(e instanceof at){if(!e.s)return void(e.o=ut.bind(null,t,n));1&n&&(n=e.s),e=e.v}if(e&&e.then)return void e.then(ut.bind(null,t,n),ut.bind(null,t,2));t.s=n,t.v=e;var r=t.o;r&&r(t)}}var at=function(){function t(){}return t.prototype.then=function(n,e){var r=new t,o=this.s;if(o){var i=1&o?n:e;if(i){try{ut(r,1,i(this.v))}catch(t){ut(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?ut(r,1,n?n(o):o):e?ut(r,1,e(o)):ut(r,2,o)}catch(t){ut(r,2,t)}},r},t}();function ct(t){return t instanceof at&&1&t.s}function ft(t,n){return t&&t.then?t.then(n):n(t)}function lt(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return st(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?st(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}function st(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function vt(t,n,e){return e?n?n(t):t:(t&&t.then||(t=Promise.resolve(t)),n?t.then(n):t)}var ht=new WeakMap;function yt(t){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(t.apply(this,n))}catch(t){return Promise.reject(t)}}}var pt=yt((function(t){var n,e=lt(t.attributes);try{var r=function(){var e=n.value,r=e.name,o=e.value;if(r.endsWith(":number")||r.endsWith(":bool")||r.endsWith(":object")){var i=W(t,e);r=i.name,o=i.value}if(r.endsWith(":fetch")){r=r.substring(0,r.length-6),o={loading:!0,error:null,response:null,json:null};var u=C(t,e.value);$(u).then((function(n){var e=n.response,o=n.json;I(t,r,{loading:!1,error:null,response:e,json:o})})).catch((function(n){I(t,r,{loading:!1,error:n,response:null,json:null})})).then((function(){var n=function(t){return c(t.parentNode.children).filter((function(n){return n!==t}))}(t);wt(n)}))}r.endsWith(":?")&&(r=r.substring(0,r.length-2),o=C(t,o)),I(t,r,o,!0)};for(e.s();!(n=e.n()).done;)r()}catch(t){e.e(t)}finally{e.f()}return vt()})),dt=function(t){if(!t.hasAttribute("test"))return!1;var n=C(t,t.getAttribute("test")),e=t.nextElementSibling;return"ELSE"===(null==e?void 0:e.tagName)&&(e.removeAttribute("test"),e.setAttribute("test",n?"false":"true")),!!n},bt=yt((function(t){var n=function(t){if(!t.hasAttributes())return null;var n,e={},r=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}(c(t.attributes).filter(b));try{for(r.s();!(n=r.n()).done;){var o=n.value,i=W(t,o),u=i.name,a=i.value;e[u]=a}}catch(t){r.e(t)}finally{r.f()}return e}(t);g(t,n);var e=dt(t);for(ht.has(t)||ht.set(t,c(t.children));t.hasChildNodes();)t.removeChild(t.lastChild);_(t,e);var r=ht.get(t);return ft(function(t,n,e){for(var r;;){var o=t();if(ct(o)&&(o=o.v),!o)return u;if(o.then){r=0;break}var i,u=e();if(u&&u.then){if(!ct(u)){r=1;break}u=u.s}}var a=new at,c=ut.bind(null,a,2);return(0===r?o.then(l):1===r?u.then(f):i.then(s)).then(void 0,c),a;function f(n){u=n;do{if(!(o=t())||ct(o)&&!o.v)return void ut(a,1,u);if(o.then)return void o.then(l).then(void 0,c);ct(u=e())&&(u=u.v)}while(!u||!u.then);u.then(f).then(void 0,c)}function l(t){t?(u=e())&&u.then?u.then(f).then(void 0,c):f(u):ut(a,1,u)}function s(){(o=t())?o.then?o.then(l).then(void 0,c):l(o):ut(a,1,u)}}((function(){return!!e}),0,(function(){var o,i=r.map((function(t){return t.cloneNode(!0)})),u=lt(i);try{for(u.s();!(o=u.n()).done;){var a=o.value;n=it({},n),"VAL"!==a.tagName?g(a,n):g(t,n),t.appendChild(a)}}catch(t){u.e(t)}finally{u.f()}return vt(wt(i),(function(){e=dt(t)}))})),(function(){return!1}))})),mt=function(t){!function(t){if(L.has(t)){var n,e=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return D(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?D(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}(L.get(t));try{for(e.s();!(n=e.n()).done;){var r=p(n.value,2),o=r[0],i=r[1];t.removeEventListener(o,i)}}catch(t){e.e(t)}finally{e.f()}}}(t);var n,e=lt(t.attributes);try{var r=function(){var e=n.value;if("#text"===e.name)t.textContent=C(t,e.value);else if(e.name.startsWith("#")){var r=C(t,e.value);t.setAttribute(e.name.substring(1),r)}if("onchange:set"!==e.name&&"bind:value"!==e.name||(I(t,e.value,t.value),R(t,"keyup",(function(n){var r=n.target;I(t,e.value,r.value)}))),"watch"===e.name){var o,i=e.value.split(",").map((function(t){return t.trim()})),u=lt(i);try{for(u.s();!(o=u.n()).done;){var a=o.value;S.has(a)||S.set(a,new Set),S.get(a).add(t)}}catch(t){u.e(t)}finally{u.f()}}if(e.name.startsWith("on:")){var c=e.name.match(rt(/on:((?:(?!:)[\s\S])*)(:(.*))?/,{event:1,name:3})),f=c?c.groups.event:null,l=c?c.groups.name:null;R(t,f,(function(){if(e.value.match(/^\$.*/g))return B(e.value.substring(1));var n=C(t,e.value);l&&I(t,l,n)}))}};for(e.s();!(n=e.n()).done;)r()}catch(t){e.e(t)}finally{e.f()}},gt=yt((function(t){var n=!1;return Z((function(){if("VAL"===t.tagName)return n=!0,vt(pt(t))}),(function(e){var r=!1;if(n)return e;if("IF"===t.tagName||"ELSE"===t.tagName){var o=dt(t);return _(t,o),o}return Z((function(){if("WHILE"===t.tagName)return r=!0,vt(bt(t))}),(function(n){var e=!1;return r?n:"SUB"!==t.tagName&&Z((function(){if("EXEC"===t.tagName)return e=!0,vt(function(t){var n=c(t.attributes).find(M);return n.value.match(/^\$.*/g)?function(t,n){var e=document.querySelector("SUB[name=".concat(n,"]"));if(!e)throw new Error('SUB "'.concat(n,'" was expected to exist.'));var r=l(e.children);return v(t),s(t,r),!0}(t,n.value.substring(1)):C(t,n.value)}(t))}),(function(n){var r=!1;return e?n:Z((function(){if(function(t){return J(t).length>0}(t))return r=!0,vt(function(t){var n=J(t),e=n.find(X),r=n.find(z),o=e?K(e):null,u=r?K(r):null;!function(t){Q.has(t)||Q.set(t,c(t.children))}(t),v(t);var a,f=C(t,e.value),h=Q.get(t),y=0,p=H(f);try{for(p.s();!(a=p.n()).done;){var d=a.value,b=l(h),m=q(q({},o&&i({},o,d)),u&&i({},u,y));Y(b,m),s(t,b),y+=1}}catch(t){p.e(t)}finally{p.f()}}(t))}),(function(n){if(r)return n;mt(t)}))}))}))}))})),wt=yt((function(t){return function(t){if(t&&t.then)return t.then(tt)}(function(t,n,e){if("function"==typeof t[et]){var r,o,i,u=t[et]();function c(t){try{for(;!((r=u.next()).done||e&&e());)if((t=n(r.value))&&t.then){if(!ct(t))return void t.then(c,i||(i=ut.bind(null,o=new at,2)));t=t.v}o?ut(o,1,t):o=t}catch(t){ut(o||(o=new at),2,t)}}if(c(),u.return){var a=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(a,(function(t){throw a(t)}));a()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var c=[],f=0;f<t.length;f++)c.push(t[f]);return function(t,n,e){var r,o,i=-1;return function u(a){try{for(;++i<t.length&&(!e||!e());)if((a=n(i))&&a.then){if(!ct(a))return void a.then(u,o||(o=ut.bind(null,r=new at,2)));a=a.v}r?ut(r,1,a):r=a}catch(t){ut(r||(r=new at),2,t)}}(),r}(c,(function(t){return n(c[t])}),e)}(t,(function(t){return vt(gt(t),(function(n){return function(e){var r=function(){if(t.hasChildNodes()&&!1!==n)return nt(wt(t.children))}();if(r&&r.then)return r.then(tt)}()}))})))})),jt=yt((function(){return ft(function(t,n){try{var e=((r=document.createElement("style")).setAttribute("type","text/css"),r.textContent="\nval,\nif,\nelse,\nwhile,\nsub {\n  display: none;\n}\n",document.head.appendChild(r),nt(wt(document.body.children)))}catch(t){return n(t)}var r;return e&&e.then?e.then(void 0,n):e}(0,(function(t){console.error(t)})),(function(){window.globals=O}))}));return window.addEventListener("DOMContentLoaded",jt,!0),n}()}));