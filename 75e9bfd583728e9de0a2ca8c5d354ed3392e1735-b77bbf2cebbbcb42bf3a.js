(self.webpackChunkusaco_guide=self.webpackChunkusaco_guide||[]).push([[637],{62875:function(r,n,t){"use strict";t.d(n,{KO:function(){return Z},aQ:function(){return P},cn:function(){return M},zt:function(){return S}});var e=t(4942),o=t(29439),i=(t(38559),t(86535),t(99244),t(67294));t(40033);function u(r,n){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,n){if(!r)return;if("string"==typeof r)return a(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(r,n)}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var e=0,o=function(){};return{s:o,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){f=!0,i=r},f:function(){try{u||null==t.return||t.return()}finally{if(f)throw i}}}}function a(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}var f=Symbol(),c=function(r){return!!r[f]},l=function(r){var n,t;null==(t=(n=r[f]).c)||t.call(n)},s=function r(n,t){var e=n[f].o,o=t[f].o;return e===o||n===o||c(e)&&r(e,t)},v=function(r){var n={o:r,c:null},t=new Promise((function(t,e){n.c=function(){n.c=null,t()},r.then(n.c,e)}));return t[f]=n,t},p=Object.defineProperty,d=Object.defineProperties,y=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=function(r,n,t){return n in r?p(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t},g=function(r){return"init"in r},O=function(r){var n,t=new WeakMap,i=new WeakMap,a=new Map;if(r){var p,O=u(r);try{for(O.s();!(p=O.n()).done;){var E=(0,o.Z)(p.value,2),j=E[0],P={v:E[1],r:0,d:new Map};0,t.set(j,P)}}catch(U){O.e(U)}finally{O.f()}}var S=function(r){return t.get(r)},A=function(r,n){var e=t.get(r);t.set(r,n),a.has(r)||a.set(r,e)},M=function(r){return new Map(Array.from(r).map((function(r){var n;return[r,(null==(n=S(r))?void 0:n.r)||0]})))},Z=function(r,n,t,e){var o=S(r);if(o){if(e&&(!("p"in o)||!s(o.p,e)))return o;"p"in o&&l(o.p)}var i={v:n,r:(null==o?void 0:o.r)||0,d:t?M(t):(null==o?void 0:o.d)||new Map};return o&&"v"in o&&Object.is(o.v,n)||(++i.r,i.d.has(r)&&i.d.set(r,i.r)),A(r,i),i},k=function(r,n,t,e){var o=S(r);if(o){if(e&&(!("p"in o)||!s(o.p,e)))return o;"p"in o&&l(o.p)}var i={e:n,r:(null==o?void 0:o.r)||0,d:t?M(t):(null==o?void 0:o.d)||new Map};return A(r,i),i},x=function(r,n,t){var e=S(r);if(e&&"p"in e){if(s(e.p,n))return e;l(e.p)}var o={p:n,r:(null==e?void 0:e.r)||0,d:t?M(t):(null==e?void 0:e.d)||new Map};return A(r,o),o},I=function(r,n,t){if(n instanceof Promise){var e=v(n.then((function(n){Z(r,n,t,e),Q()})).catch((function(n){if(n instanceof Promise)return c(n)&&function(r){return!r[f].c}(n)&&n.then((function(){return T(r,!0)})),n;k(r,n,t,e),Q()})));return x(r,e,t)}return Z(r,n,t)},C=function(r){var n,t,e=S(r);if(e){var o=(n=function(r,n){for(var t in n||(n={}))w.call(n,t)&&m(r,t,n[t]);if(h){var e,o=u(h(n));try{for(o.s();!(e=o.n()).done;)t=e.value,b.call(n,t)&&m(r,t,n[t])}catch(U){o.e(U)}finally{o.f()}}return r}({},e),t={i:e.r},d(n,y(t)));A(r,o)}else 0},T=function r(n,t){if(!t){var e=S(n);if(e&&(e.d.forEach((function(t,e){if(e!==n)if(i.has(e)){var o=S(e);o&&o.r===o.i&&r(e)}else r(e)})),Array.from(e.d.entries()).every((function(r){var n=(0,o.Z)(r,2),t=n[0],e=n[1],i=S(t);return i&&!("e"in i)&&!("p"in i)&&i.r!==i.i&&i.r===e}))))return e}var u=new Set;try{var a=n.read((function(t){u.add(t);var e=t===n?S(t):r(t);if(e){if("e"in e)throw e.e;if("p"in e)throw e.p;return e.v}if(g(t))return t.init;throw new Error("no atom init")}));return I(n,a,u)}catch(c){if(c instanceof Promise){var f=v(c);return x(n,f,u)}return k(n,c,u)}},D=function(r,n){return!n.l.size&&(!n.d.size||1===n.d.size&&n.d.has(r))},R=function r(n){var t=i.get(n);null==t||t.d.forEach((function(t){t!==n&&(C(t),r(t))}))},_=function r(n,t){var e=n.write((function r(n,t){"boolean"==typeof t&&(console.warn("[DEPRECATED] Please use { unstable_promise: true }"),t={unstable_promise:t});var e=T(n);if("e"in e)throw e.e;if("p"in e){if(null==t?void 0:t.unstable_promise)return e.p.then((function(){return r(n,t)}));throw e.p}if("v"in e)return e.v;throw new Error("no value found")}),(function(t,e){var o;if(t===n){if(!g(t))throw new Error("atom not writable");I(t,e),R(t),Q()}else o=r(t,e);return o}),t);return Q(),e},W=function(r,n){return _(r,n)},z=function r(n,t){var e={d:new Set(t&&[t]),l:new Set};if(i.set(n,e),T(n).d.forEach((function(t,e){if(e!==n){var o=i.get(e);o?o.d.add(n):r(e,n)}})),function(r){return!!r.write}(n)&&n.onMount){var o=n.onMount((function(r){return W(n,r)}));o&&(e.u=o)}return e},N=function r(n){var t,e=null==(t=i.get(n))?void 0:t.u;e&&e(),i.delete(n);var o=S(n);o&&o.d.forEach((function(t,e){if(e!==n){var o=i.get(e);o&&(o.d.delete(n),D(e,o)&&r(e))}}))},Q=function(){var r=Array.from(a);a.clear(),r.forEach((function(r){var n=(0,o.Z)(r,2),t=n[0],e=n[1],u=S(t);u&&u.d!==(null==e?void 0:e.d)&&function(r,n,t){var e=new Set(n.d.keys());t.forEach((function(n,t){if(e.has(t))e.delete(t);else{var o=i.get(t);o&&(o.d.delete(r),D(t,o)&&N(t))}})),e.forEach((function(n){var t=i.get(n);t?t.d.add(r):z(n,r)}))}(t,u,(null==e?void 0:e.d)||new Map);var a=i.get(t);null==a||a.l.forEach((function(r){return r()}))}))};return n={},(0,e.Z)(n,"r",(function(r){return T(r)})),(0,e.Z)(n,"w",W),(0,e.Z)(n,"c",(function(r){Q()})),(0,e.Z)(n,"s",(function(r,n){var t=function(r){var n=i.get(r);return n||(n=z(r)),n}(r).l;return t.add(n),function(){t.delete(n),function(r){var n=i.get(r);n&&D(r,n)&&N(r)}(r)}})),(0,e.Z)(n,"h",(function(r){var n,t=u(r);try{for(t.s();!(n=t.n()).done;){var e=(0,o.Z)(n.value,2),i=e[0],a=e[1];g(i)&&(I(i,a),R(i))}}catch(U){t.e(U)}finally{t.f()}Q()})),n},E=function(r){return{s:O(r)}},j=new Map,P=function(r){return j.has(r)||j.set(r,(0,i.createContext)(E())),j.get(r)},S=(Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,function(r){var n=r.initialValues,t=r.scope,e=r.children,o=(0,i.useRef)();o.current||(o.current=E(n));var u=P(t);return(0,i.createElement)(u.Provider,{value:o.current},e)}),A=0;function M(r,n){var t="atom".concat(++A),e={toString:function(){return t}};return"function"==typeof r?e.read=r:(e.init=r,e.read=function(r){return r(e)},e.write=function(r,n,t){return n(e,"function"==typeof t?t(r(e)):t)}),n&&(e.write=n),e}function Z(r,n){"scope"in r&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),n=r.scope);var t=P(n),e=(0,i.useContext)(t).s,u=(0,i.useCallback)((function(){var n=e.r(r);if("e"in n)throw n.e;if("p"in n)throw n.p;if("v"in n)return n.v;throw new Error("no atom value")}),[e,r]),a=(0,i.useReducer)((0,i.useCallback)((function(n){var t=u();return Object.is(n[0],t)&&n[1]===r?n:[t,r]}),[u,r]),void 0,(function(){return[u(),r]})),f=(0,o.Z)(a,2),c=(0,o.Z)(f[0],2),l=c[0],s=c[1],v=f[1];s!==r&&v(),(0,i.useEffect)((function(){var n=e.s(r,v);return v(),n}),[e,r]),(0,i.useEffect)((function(){e.c(r)}));var p=(0,i.useCallback)((function(n){if(function(r){return!!r.write}(r))return e.w(r,n);throw new Error("not writable atom")}),[e,r]);return(0,i.useDebugValue)(l),[l,p]}},3252:function(r,n,t){"use strict";t.d(n,{Dv:function(){return l},xu:function(){return s},yW:function(){return c}});var e=t(84506),o=t(29439),i=(t(87757),t(67294)),u=t(62875);t(40033);function a(r,n){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,n){if(!r)return;if("string"==typeof r)return f(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(r,n)}(r))||n&&r&&"number"==typeof r.length){t&&(r=t);var e=0,o=function(){};return{s:o,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){a=!0,i=r},f:function(){try{u||null==t.return||t.return()}finally{if(a)throw i}}}}function f(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}Symbol();function c(r,n){var t=(0,u.aQ)(n),e=(0,i.useContext)(t).s;return(0,i.useCallback)((function(n){return e.w(r,n)}),[e,r])}function l(r,n){return(0,u.KO)(r,n)[0]}function s(r,n){var t=null,e=new Map,i=function(i){var u;if(void 0===n)u=e.get(i);else{var f,c=a(e);try{for(c.s();!(f=c.n()).done;){var l=(0,o.Z)(f.value,2),s=l[0],v=l[1];if(n(s,i)){u=v;break}}}catch(d){c.e(d)}finally{c.f()}}if(void 0!==u){if(!(null==t?void 0:t(u[1],i)))return u[0];e.delete(i)}var p=r(i);return e.set(i,[p,Date.now()]),p};return i.remove=function(r){if(void 0===n)e.delete(r);else{var t,i=a(e);try{for(i.s();!(t=i.n()).done;){var u=(0,o.Z)(t.value,1)[0];if(n(u,r)){e.delete(u);break}}}catch(f){i.e(f)}finally{i.f()}}},i.setShouldRemove=function(r){if(t=r){var n,i=a(e);try{for(i.s();!(n=i.n()).done;){var u=(0,o.Z)(n.value,2),f=u[0],c=u[1];t(c[1],f)&&e.delete(f)}}catch(l){i.e(l)}finally{i.f()}}},i}var v=function(){var r=new WeakMap;return function(n,t){var o=function(r,n){do{var t=n,o=(0,e.Z)(t),i=o[0],u=o.slice(1),a=r.get(i);if(!a)return;if(!u.length)return a[1];r=a[0],n=u}while(n.length)}(r,t);if(o)return o;var i=n();return function(r,n,t){do{var o=n,i=(0,e.Z)(o),u=i[0],a=i.slice(1),f=r.get(u);if(f||(f=[new WeakMap],r.set(u,f)),!a.length)return void(f[1]=t);r=f[0],n=a}while(n.length)}(r,t,i),i}};v();v();v();Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,v();Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var p;p=function(){return localStorage};new WeakMap;v()},86135:function(r,n,t){"use strict";var e=t(34948),o=t(3070),i=t(79114);r.exports=function(r,n,t){var u=e(n);u in r?o.f(r,u,i(0,t)):r[u]=t}},71246:function(r,n,t){var e=t(70648),o=t(58173),i=t(97497),u=t(5112)("iterator");r.exports=function(r){if(null!=r)return o(r,u)||o(r,"@@iterator")||i[e(r)]}},18554:function(r,n,t){var e=t(17854),o=t(46916),i=t(19662),u=t(19670),a=t(66330),f=t(71246),c=e.TypeError;r.exports=function(r,n){var t=arguments.length<2?f(r):n;if(i(t))return u(o(t,r));throw c(a(r)+" is not iterable")}},9957:function(r,n,t){var e=t(5112),o=t(97497),i=e("iterator"),u=Array.prototype;r.exports=function(r){return void 0!==r&&(o.Array===r||u[i]===r)}},20408:function(r,n,t){var e=t(17854),o=t(49974),i=t(46916),u=t(19670),a=t(66330),f=t(9957),c=t(26244),l=t(47976),s=t(18554),v=t(71246),p=t(99212),d=e.TypeError,y=function(r,n){this.stopped=r,this.result=n},h=y.prototype;r.exports=function(r,n,t){var e,w,b,m,g,O,E,j=t&&t.that,P=!(!t||!t.AS_ENTRIES),S=!(!t||!t.IS_ITERATOR),A=!(!t||!t.INTERRUPTED),M=o(n,j),Z=function(r){return e&&p(e,"normal",r),new y(!0,r)},k=function(r){return P?(u(r),A?M(r[0],r[1],Z):M(r[0],r[1])):A?M(r,Z):M(r)};if(S)e=r;else{if(!(w=v(r)))throw d(a(r)+" is not iterable");if(f(w)){for(b=0,m=c(r);m>b;b++)if((g=k(r[b]))&&l(h,g))return g;return new y(!1)}e=s(r,w)}for(O=e.next;!(E=i(O,e)).done;){try{g=k(E.value)}catch(x){p(e,"throw",x)}if("object"==typeof g&&g&&l(h,g))return g}return new y(!1)}},99212:function(r,n,t){var e=t(46916),o=t(19670),i=t(58173);r.exports=function(r,n,t){var u,a;o(r);try{if(!(u=i(r,"return"))){if("throw"===n)throw t;return t}u=e(u,r)}catch(f){a=!0,u=f}if("throw"===n)throw t;if(a)throw u;return o(u),t}},97497:function(r){r.exports={}},86535:function(r,n,t){"use strict";var e=t(82109),o=t(6790),i=t(19662),u=t(47908),a=t(26244),f=t(65417);e({target:"Array",proto:!0},{flatMap:function(r){var n,t=u(this),e=a(t);return i(r),(n=f(t,0)).length=o(n,t,t,e,0,1,r,arguments.length>1?arguments[1]:void 0),n}})},99244:function(r,n,t){t(51223)("flatMap")},38559:function(r,n,t){var e=t(82109),o=t(20408),i=t(86135);e({target:"Object",stat:!0},{fromEntries:function(r){var n={};return o(r,(function(r,t){i(n,r,t)}),{AS_ENTRIES:!0}),n}})},42288:function(r,n,t){"use strict";t.d(n,{Qn:function(){return f},af:function(){return a},mh:function(){return u}});var e=t(93433),o=t(67294),i=o.createContext(null),u=i.Provider;function a(){var r=o.useContext(i);if(!r)throw new Error("useMarkdownProblems() must be used within a MarkdownProblemListsProvider.");return r}function f(){var r=a();return o.useMemo((function(){var n=[];return r.forEach((function(r){n=[].concat((0,e.Z)(n),(0,e.Z)(r.problems))})),n}),[r])}},84506:function(r,n,t){"use strict";t.d(n,{Z:function(){return a}});var e=t(83878),o=t(59199),i=t(40181),u=t(25267);function a(r){return(0,e.Z)(r)||(0,o.Z)(r)||(0,i.Z)(r)||(0,u.Z)()}}}]);
//# sourceMappingURL=75e9bfd583728e9de0a2ca8c5d354ed3392e1735-b77bbf2cebbbcb42bf3a.js.map