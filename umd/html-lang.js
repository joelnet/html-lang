!function(n,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e=t();for(var r in e)("object"==typeof exports?exports:n)[r]=e[r]}}(self,(function(){return function(){"use strict";var n={};function t(n,e){return t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},t(n,e)}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function r(n,o,i){return r=e()?Reflect.construct:function(n,e,r){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(n,o));return r&&t(i,r.prototype),i},r.apply(null,arguments)}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n,t,e){if(!n.s){if(e instanceof a){if(!e.s)return void(e.o=u.bind(null,n,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(u.bind(null,n,t),u.bind(null,n,2));n.s=t,n.v=e;var r=n.o;r&&r(n)}}(function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})})(n);var a=function(){function n(){}return n.prototype.then=function(t,e){var r=new n,o=this.s;if(o){var i=1&o?t:e;if(i){try{u(r,1,i(this.v))}catch(n){u(r,2,n)}return r}return this}return this.o=function(n){try{var o=n.v;1&n.s?u(r,1,t?t(o):o):e?u(r,1,e(o)):u(r,2,o)}catch(n){u(r,2,n)}},r},n}();function f(n){return n instanceof a&&1&n.s}function c(n,t){return n&&n.then?n.then(t):t(n)}function l(n,t){var e=n();return e&&e.then?e.then(t):t(e)}function s(){}function h(n,t){if(!t)return n&&n.then?n.then(s):Promise.resolve()}var v="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function d(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return y(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){a=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw i}}}}function y(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function p(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}var b=new Map;function m(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}var g=new Map,w=new WeakMap,S=function(n,t){n.style.display=t?"inline-block":""},A=function(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(b.set(n,t),e&&g.has(n)){var r=g.get(n);I(r.values())}},j=function(n){return r(Function,i(b.keys()).concat(["return ".concat(n)])).apply(void 0,i(b.values()))},x=m((function(){return p(fetch.apply(void 0,arguments),(function(n){if(!n.ok)throw new Error("HTTP Error Response: ".concat(n.status," ").concat(n.statusText));return p(n.json())}))})),C=m((function(n){var t,e=d(n.attributes);try{var r=function(){var e=t.value,r=e.name,o=e.value;if(r.endsWith(":number")&&(r=r.substring(0,r.length-7),o=Number(o)),r.endsWith(":bool")&&(r=r.substring(0,r.length-5),o=j(o)),r.endsWith(":object")&&(r=r.substring(0,r.length-7),o=j(o)),r.endsWith(":fetch")){r=r.substring(0,r.length-6),o=[!0,null,null];var u=j(e.value);x(u).then((function(n){A(r,[!1,null,n])})).catch((function(n){A(r,[!1,n,null])})).then((function(){var t=function(n){return i(n.parentNode.children).filter((function(t){return t!==n}))}(n);I(t)}))}r.endsWith(":?")&&(r=r.substring(0,r.length-2),o=j(o)),A(r,o,!1)};for(e.s();!(t=e.n()).done;)r()}catch(n){e.e(n)}finally{e.f()}return p()})),O=function(n){return!!n.hasAttribute("test")&&!!j(n.getAttribute("test"))},E=m((function(n){var t=O(n);for(w.has(n)||w.set(n,i(n.children));n.hasChildNodes();)n.removeChild(n.lastChild);S(n,t);var e=w.get(n);return c(function(n,t,e){for(var r;;){var o=n();if(f(o)&&(o=o.v),!o)return c;if(o.then){r=0;break}var i,c=e();if(c&&c.then){if(!f(c)){r=1;break}c=c.s}}var l=new a,s=u.bind(null,l,2);return(0===r?o.then(v):1===r?c.then(h):i.then(d)).then(void 0,s),l;function h(t){c=t;do{if(!(o=n())||f(o)&&!o.v)return void u(l,1,c);if(o.then)return void o.then(v).then(void 0,s);f(c=e())&&(c=c.v)}while(!c||!c.then);c.then(h).then(void 0,s)}function v(n){n?(c=e())&&c.then?c.then(h).then(void 0,s):h(c):u(l,1,c)}function d(){(o=n())?o.then?o.then(v).then(void 0,s):v(o):u(l,1,c)}}((function(){return!!t}),0,(function(){var r,o=e.map((function(n){return n.cloneNode(!0)})),i=d(o);try{for(i.s();!(r=i.n()).done;){var u=r.value;n.appendChild(u)}}catch(n){i.e(n)}finally{i.f()}return p(I(o),(function(){t=O(n)}))})),(function(){return!1}))})),P=m((function(n){var t=!1;return l((function(){if("VAL"===n.tagName)return t=!0,p(C(n))}),(function(e){var r=!1;if(t)return e;if("IF"===n.tagName){var o=O(n);return S(n,o),o}return l((function(){if("WHILE"===n.tagName)return r=!0,p(E(n))}),(function(t){if(r)return t;!function(n){var t,e=d(n.attributes);try{var r=function(){var e=t.value;if("set:text"===e.name&&(n.textContent=j(e.value)),"onchange:set"===e.name&&n.addEventListener("keyup",(function(n){var t=n.target;A(e.value,t.value)})),"watch"===e.name){var r,o=e.value.split(",").map((function(n){return n.trim()})),i=d(o);try{for(i.s();!(r=i.n()).done;){var u=r.value;g.has(u)||g.set(u,new Set),g.get(u).add(n)}}catch(n){i.e(n)}finally{i.f()}}};for(e.s();!(t=e.n()).done;)r()}catch(n){e.e(n)}finally{e.f()}}(n)}))}))})),I=m((function(n){return function(n){if(n&&n.then)return n.then(s)}(function(n,t,e){if("function"==typeof n[v]){var r,o,i,c=n[v]();function s(n){try{for(;!((r=c.next()).done||e&&e());)if((n=t(r.value))&&n.then){if(!f(n))return void n.then(s,i||(i=u.bind(null,o=new a,2)));n=n.v}o?u(o,1,n):o=n}catch(n){u(o||(o=new a),2,n)}}if(s(),c.return){var l=function(n){try{r.done||c.return()}catch(n){}return n};if(o&&o.then)return o.then(l,(function(n){throw l(n)}));l()}return o}if(!("length"in n))throw new TypeError("Object is not iterable");for(var s=[],h=0;h<n.length;h++)s.push(n[h]);return function(n,t,e){var r,o,i=-1;return function c(l){try{for(;++i<n.length&&(!e||!e());)if((l=t(i))&&l.then){if(!f(l))return void l.then(c,o||(o=u.bind(null,r=new a,2)));l=l.v}r?u(r,1,l):r=l}catch(n){u(r||(r=new a),2,n)}}(),r}(s,(function(n){return t(s[n])}),e)}(n,(function(n){return p(P(n),(function(t){return function(e){var r=function(){if(n.hasChildNodes()&&!1!==t)return h(I(n.children))}();if(r&&r.then)return r.then(s)}()}))})))})),M=m((function(){return c(function(n,t){try{var e=((r=document.createElement("style")).setAttribute("type","text/css"),r.textContent="\nval,\nif,\nwhile {\n    display: none;\n}\n",document.head.appendChild(r),h(I(document.body.children)))}catch(n){return t(n)}var r;return e&&e.then?e.then(void 0,t):e}(0,(function(n){console.error(n)})),(function(){window.globals=b}))}));return window.addEventListener("DOMContentLoaded",M,!0),n}()}));