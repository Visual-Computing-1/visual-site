"use strict";(self.webpackChunkusaco_guide=self.webpackChunkusaco_guide||[]).push([[949],{42949:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function s(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function d(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"==typeof e}n.r(t),n.d(t,{DiffEditor:function(){return fe},default:function(){return ye},loader:function(){return B},useMonaco:function(){return se}});var g=s((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,t){return d(t)||g("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&g("changeField"),t},selector:function(e){p(e)||g("selectorType")},handler:function(e){p(e)||d(e)||g("handlerType"),d(e)&&Object.values(e).some((function(e){return!p(e)}))&&g("handlersType")},initial:function(e){var t;e||g("initialIsRequired"),d(e)||g("initialType"),t=e,Object.keys(t).length||g("initialContent")}};function v(e,t){return p(t)?t(e.current):t}function y(e,t){return e.current=l(l({},e.current),t),t}function b(e,t,n){return p(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var O={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(t);var n={current:e},r=s(b)(n,t),o=s(y)(n),i=s(h.changes)(e),c=s(v)(n);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(n.current)}function a(e){f(r,o,i,c)(e)}return[u,a]}},m=O,w={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.28.1/min/vs"}};var j=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}};var P=function(e){return{}.toString.call(e).includes("Object")};var M={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},E=j((function(e,t){throw new Error(e[t]||e.default)}))(M),S={config:function(e){return e||E("configIsRequired"),P(e)||E("configType"),e.urls?(console.warn(M.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},k=S,D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var R=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),i(i({},t),n)},C={type:"cancelation",msg:"operation is manually canceled"};var T,I,V=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(C):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n},A=m.create({config:w,isInitialized:!1,resolve:null,reject:null,monaco:null}),L=(I=2,function(e){if(Array.isArray(e))return e}(T=A)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(T,I)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(T,I)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=L[0],x=L[1];function Z(e){return document.body.appendChild(e)}function q(e){var t,n,r=_((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function z(){var e=_((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){N(t),e.resolve(t)}),(function(t){e.reject(t)}))}function N(e){_().monaco||x({monaco:e})}var F=new Promise((function(e,t){return x({resolve:e,reject:t})})),U={config:function(e){x((function(t){return{config:R(t.config,k.config(e))}}))},init:function(){if(!_((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return N(window.monaco),V(Promise.resolve(window.monaco));D(Z,q)(z),x({isInitialized:!0})}return V(F)},__getMonacoInstance:function(){return _((function(e){return e.monaco}))}},B=U,W=n(67294),Y=n(4942),$=n(29439);function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}var H={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var J=function(e){var t=e.content;return W.createElement("div",{style:H},t)},K={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,Y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.width,n=e.height,r=e.isEditorReady,o=e.loading,i=e._ref,c=e.className,u=e.wrapperProps;return W.createElement("section",G({style:X(X({},K.wrapper),{},{width:t,height:n})},u),!r&&W.createElement(J,{content:o}),W.createElement("div",{ref:i,style:X(X({},K.fullWidth),!r&&K.hide),className:c}))},te=(0,W.memo)(ee);var ne=function(e){(0,W.useEffect)(e,[])};var re=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=(0,W.useRef)(!0);(0,W.useEffect)(r.current||!n?function(){r.current=!1}:e,t)};function oe(){}function ie(e,t,n,r){return function(e,t){return e.editor.getModel(ce(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&ce(e,r))}(e,t,n,r)}function ce(e,t){return e.Uri.parse(t)}function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){var t=e.original,n=e.modified,r=e.language,o=e.originalLanguage,i=e.modifiedLanguage,c=e.originalModelPath,u=e.modifiedModelPath,a=e.keepCurrentOriginalModel,l=e.keepCurrentModifiedModel,f=e.theme,s=e.loading,d=e.options,p=e.height,g=e.width,h=e.className,v=e.wrapperProps,y=e.beforeMount,b=e.onMount,O=(0,W.useState)(!1),m=(0,$.Z)(O,2),w=m[0],j=m[1],P=(0,W.useState)(!0),M=(0,$.Z)(P,2),E=M[0],S=M[1],k=(0,W.useRef)(null),D=(0,W.useRef)(null),R=(0,W.useRef)(null),C=(0,W.useRef)(b),T=(0,W.useRef)(y);ne((function(){var e=B.init();return e.then((function(e){return(D.current=e)&&S(!1)})).catch((function(e){return"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return k.current?function(){var e,t,n=k.current.getModel();a||null===(e=n.original)||void 0===e||e.dispose();l||null===(t=n.modified)||void 0===t||t.dispose();k.current.dispose()}():e.cancel()}})),re((function(){var e=k.current.getModifiedEditor();e.getOption(D.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],w),re((function(){k.current.getModel().original.setValue(t)}),[t],w),re((function(){var e=k.current.getModel(),t=e.original,n=e.modified;D.current.editor.setModelLanguage(t,o||r),D.current.editor.setModelLanguage(n,i||r)}),[r,o,i],w),re((function(){D.current.editor.setTheme(f)}),[f],w),re((function(){k.current.updateOptions(d)}),[d],w);var I=(0,W.useCallback)((function(){T.current(D.current);var e=ie(D.current,t,o||r,c),a=ie(D.current,n,i||r,u);k.current.setModel({original:e,modified:a})}),[r,n,i,t,o,c,u]),V=(0,W.useCallback)((function(){k.current=D.current.editor.createDiffEditor(R.current,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,Y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({automaticLayout:!0},d)),I(),D.current.editor.setTheme(f),j(!0)}),[d,f,I]);return(0,W.useEffect)((function(){w&&C.current(k.current,D.current)}),[w]),(0,W.useEffect)((function(){!E&&!w&&V()}),[E,w,V]),W.createElement(te,{width:g,height:p,isEditorReady:w,loading:s,_ref:R,className:h,wrapperProps:v})}ae.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe};var le=ae,fe=(0,W.memo)(le);var se=function(){var e=(0,W.useState)(B.__getMonacoInstance()),t=(0,$.Z)(e,2),n=t[0],r=t[1];return ne((function(){var e;return n||(e=B.init()).then((function(e){r(e)})),function(){var t;return null===(t=e)||void 0===t?void 0:t.cancel()}})),n};var de=function(e){var t=(0,W.useRef)();return(0,W.useEffect)((function(){t.current=e}),[e]),t.current};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ge=new Map;function he(e){var t=e.defaultValue,n=e.defaultLanguage,r=e.defaultPath,o=e.value,i=e.language,c=e.path,u=e.theme,a=e.line,l=e.loading,f=e.options,s=e.overrideServices,d=e.saveViewState,p=e.keepCurrentModel,g=e.width,h=e.height,v=e.className,y=e.wrapperProps,b=e.beforeMount,O=e.onMount,m=e.onChange,w=e.onValidate,j=(0,W.useState)(!1),P=(0,$.Z)(j,2),M=P[0],E=P[1],S=(0,W.useState)(!0),k=(0,$.Z)(S,2),D=k[0],R=k[1],C=(0,W.useRef)(null),T=(0,W.useRef)(null),I=(0,W.useRef)(null),V=(0,W.useRef)(O),A=(0,W.useRef)(b),L=(0,W.useRef)(null),_=(0,W.useRef)(o),x=de(c);ne((function(){var e=B.init();return e.then((function(e){return(C.current=e)&&R(!1)})).catch((function(e){return"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e)})),function(){return T.current?function(){var e,t;null===(e=L.current)||void 0===e||e.dispose(),p?d&&ge.set(c,T.current.saveViewState()):null===(t=T.current.getModel())||void 0===t||t.dispose();T.current.dispose()}():e.cancel()}})),re((function(){var e=ie(C.current,t||o,n||i,c);e!==T.current.getModel()&&(d&&ge.set(x,T.current.saveViewState()),T.current.setModel(e),d&&T.current.restoreViewState(ge.get(c)))}),[c],M),re((function(){T.current.updateOptions(f)}),[f],M),re((function(){T.current.getOption(C.current.editor.EditorOption.readOnly)?T.current.setValue(o):o!==T.current.getValue()&&(T.current.executeEdits("",[{range:T.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),T.current.pushUndoStop())}),[o],M),re((function(){C.current.editor.setModelLanguage(T.current.getModel(),i)}),[i],M),re((function(){void 0!==a&&T.current.revealLine(a)}),[a],M),re((function(){C.current.editor.setTheme(u)}),[u],M);var Z=(0,W.useCallback)((function(){A.current(C.current);var e=c||r,a=ie(C.current,o||t,n||i,e);T.current=C.current.editor.create(I.current,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,Y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({model:a,automaticLayout:!0},f),s),d&&T.current.restoreViewState(ge.get(e)),C.current.editor.setTheme(u),E(!0)}),[t,n,r,o,i,c,f,s,d,u]);return(0,W.useEffect)((function(){M&&V.current(T.current,C.current)}),[M]),(0,W.useEffect)((function(){!D&&!M&&Z()}),[D,M,Z]),_.current=o,(0,W.useEffect)((function(){var e,t;M&&m&&(null===(e=L.current)||void 0===e||e.dispose(),L.current=null===(t=T.current)||void 0===t?void 0:t.onDidChangeModelContent((function(e){var t=T.current.getValue();_.current!==t&&m(t,e)})))}),[M,m]),(0,W.useEffect)((function(){if(M){var e=C.current.editor.onDidChangeMarkers((function(e){var t,n=null===(t=T.current.getModel())||void 0===t?void 0:t.uri;if(n&&e.find((function(e){return e.path===n.path}))){var r=C.current.editor.getModelMarkers({resource:n});null==w||w(r)}}));return function(){null==e||e.dispose()}}}),[M,w]),W.createElement(te,{width:g,height:h,isEditorReady:M,loading:l,_ref:I,className:v,wrapperProps:y})}he.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe,onValidate:oe};var ve=he,ye=(0,W.memo)(ve)}}]);
//# sourceMappingURL=949-2c73e11765329409a8fd.js.map