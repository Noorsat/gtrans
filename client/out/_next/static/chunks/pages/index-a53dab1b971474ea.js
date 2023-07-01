(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6245:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o,a=0,s=0,i="";o=n.charAt(s++);~o&&(t=a%4?64*t+o:o,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return i};function a(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(n)}catch(e){return o(n)}}function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidTokenError",n.Z=function(e,n){if("string"!=typeof e)throw new s("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(a(e.split(".")[t]))}catch(e){throw new s("Invalid token specified: "+e.message)}}},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},3084:function(e,n,t){"use strict";var r=t(9669),o=t.n(r)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=o},7570:function(e,n,t){"use strict";t.d(n,{AU:function(){return s},B:function(){return g},ED:function(){return i},HG:function(){return d},R2:function(){return h},TX:function(){return f},Xz:function(){return p},dW:function(){return u},ip:function(){return l},t9:function(){return v},vk:function(){return c}});var r=t(7568),o=t(655),a=t(3084),s=function(){var e=(0,r.Z)((function(){return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return[4,a.Z.get("/orders")];case 1:return[2,e.sent()]}}))}));return function(){return e.apply(this,arguments)}}(),i=(function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.post("/orders",e)];case 1:return[2,n.sent()]}}))}))}(),function(){var e=(0,r.Z)((function(e,n){return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,a.Z.put("/orders/add/request/"+n,e)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}()),u=function(){var e=(0,r.Z)((function(e,n){return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,a.Z.put("/orders/status/request/"+n,e)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/accept/china",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/accept",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/return",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/tracker/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/account/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)((function(e,n){return(0,o.__generator)(this,(function(t){switch(t.label){case 0:return[4,a.Z.put("/orders/price/"+e,n)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/change",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}()},1113:function(e,n,t){"use strict";t.d(n,{X:function(){return i},h:function(){return s}});var r=t(7568),o=t(655),a=t(3084),s=function(){var e=(0,r.Z)((function(e){return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.post("/requests",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)((function(){return(0,o.__generator)(this,(function(e){switch(e.label){case 0:return[4,a.Z.get("/requests")];case 1:return[2,e.sent()]}}))}));return function(){return e.apply(this,arguments)}}()},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});t(1799),t(9396);var r=t(5893),o=(t(9008),t(3448),t(1577),t(7294)),a=(t(7570),t(381),t(1113),t(6627),t(1163));t(6245);function s(){var e=(0,o.useState)(),n=(e[0],e[1],(0,o.useState)(!1)),t=(n[0],n[1],(0,o.useState)()),s=(t[0],t[1],(0,o.useState)()),i=(s[0],s[1],(0,o.useState)()),u=(i[0],i[1],(0,a.useRouter)());(0,o.useEffect)((function(){u.push("/request")}),[]);return(0,r.jsx)(r.Fragment,{})}},1163:function(e,n,t){e.exports=t(387)},6627:function(e,n,t){t(6012)},6012:function(e,n,t){"use strict";var r,o=(r=t(7294))&&"object"==typeof r&&"default"in r?r.default:r,a=t(3935);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){e.prototype=Object.create(n.prototype),function(e,n){for(var t=Object.getOwnPropertyNames(n),r=0;r<t.length;r++){var o=t[r],a=Object.getOwnPropertyDescriptor(n,o);a&&a.configurable&&void 0===e[o]&&Object.defineProperty(e,o,a)}}(e.prototype.constructor=e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,n,t,r,o,a,s,i){if(!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,a,s,i],c=0;(u=new Error(n.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}};function c(e,n,t){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=n,e.selectionEnd=t;else{var r=e.createTextRange();r.collapse(!0),r.moveStart("character",n),r.moveEnd("character",t-n),r.select()}}var f={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,n,t){var r="",o="",a=null,s=[];if(void 0===n&&(n="_"),null==t&&(t=f),!e||"string"!=typeof e)return{maskChar:n,formatChars:t,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!t[e]?(s.push(r.length),r.length===s.length-1&&(o+=e)):a=r.length+1,r+=e,!1)})),{maskChar:n,formatChars:t,prefix:o,mask:r,lastEditablePosition:a,permanents:s}}function h(e,n){return-1!==e.permanents.indexOf(n)}function d(e,n,t){var r=e.mask,o=e.formatChars;if(!t)return!1;if(h(e,n))return r[n]===t;var a=o[r[n]];return new RegExp(a).test(t)}function v(e,n){return n.split("").every((function(n,t){return h(e,t)||!d(e,t,n)}))}function g(e,n){var t=e.maskChar,r=e.prefix;if(!t){for(;n.length>r.length&&h(e,n.length-1);)n=n.slice(0,n.length-1);return n.length}for(var o=r.length,a=n.length;a>=r.length;a--){var s=n[a];if(!h(e,a)&&d(e,a,s)){o=a+1;break}}return o}function m(e,n){return g(e,n)===e.mask.length}function k(e,n){var t=e.maskChar,r=e.mask,o=e.prefix;if(!t){for((n=w(e,"",n,0)).length<o.length&&(n=o);n.length<r.length&&h(e,n.length);)n+=r[n.length];return n}if(n)return w(e,k(e,""),n,0);for(var a=0;a<r.length;a++)h(e,a)?n+=r[a]:n+=t;return n}function w(e,n,t,r){var o=e.mask,a=e.maskChar,s=e.prefix,i=t.split(""),u=m(e,n);return!a&&r>n.length&&(n+=o.slice(n.length,r)),i.every((function(t){for(;c=t,h(e,l=r)&&c!==o[l];){if(r>=n.length&&(n+=o[r]),i=t,a&&h(e,r)&&i===a)return!0;if(++r>=o.length)return!1}var i,l,c;return!d(e,r,t)&&t!==a||(r<n.length?n=a||u||r<s.length?n.slice(0,r)+t+n.slice(r+1):(n=n.slice(0,r)+t+n.slice(r),k(e,n)):a||(n+=t),++r<o.length)})),n}function C(e,n){for(var t=e.mask,r=n;r<t.length;++r)if(!h(e,r))return r;return null}function S(e){return e||0===e?e+"":""}function b(e,n,t,r,o){var a=e.mask,s=e.prefix,i=e.lastEditablePosition,u=n,l="",c=0,f=0,p=Math.min(o.start,t.start);return t.end>o.start?f=(c=function(e,n,t,r){var o=e.mask,a=e.maskChar,s=t.split(""),i=r;return s.every((function(n){for(;s=n,h(e,t=r)&&s!==o[t];)if(++r>=o.length)return!1;var t,s;return(d(e,r,n)||n===a)&&r++,r<o.length})),r-i}(e,0,l=u.slice(o.start,t.end),p))?o.length:0:u.length<r.length&&(f=r.length-u.length),u=r,f&&(1!==f||o.length||(p=o.start===t.start?C(e,t.start):function(e,n){for(var t=n;0<=t;--t)if(!h(e,t))return t;return null}(e,t.start)),u=function(e,n,t,r){var o=t+r,a=e.maskChar,s=e.mask,i=e.prefix,u=n.split("");if(a)return u.map((function(n,r){return r<t||o<=r?n:h(e,r)?s[r]:a})).join("");for(var l=o;l<u.length;l++)h(e,l)&&(u[l]="");return t=Math.max(i.length,t),u.splice(t,o-t),n=u.join(""),k(e,n)}(e,u,p,f)),u=w(e,u,l,p),(p+=c)>=a.length?p=a.length:p<s.length&&!c?p=s.length:p>=s.length&&p<i&&c&&(p=C(e,p)),l||(l=null),{value:u=k(e,u),enteredString:l,selection:{start:p,end:p}}}function O(e){return"function"==typeof e}function y(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function I(e){return(y()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function M(e){(y()||clearTimeout)(e)}var _=function(e){function n(n){var t=e.call(this,n)||this;t.focused=!1,t.mounted=!1,t.previousSelection=null,t.selectionDeferId=null,t.saveSelectionLoopDeferId=null,t.saveSelectionLoop=function(){t.previousSelection=t.getSelection(),t.saveSelectionLoopDeferId=I(t.saveSelectionLoop)},t.runSaveSelectionLoop=function(){null===t.saveSelectionLoopDeferId&&t.saveSelectionLoop()},t.stopSaveSelectionLoop=function(){null!==t.saveSelectionLoopDeferId&&(M(t.saveSelectionLoopDeferId),t.saveSelectionLoopDeferId=null,t.previousSelection=null)},t.getInputDOMNode=function(){if(!t.mounted)return null;var e=a.findDOMNode(u(u(t))),n="undefined"!=typeof window&&e instanceof window.Element;if(e&&!n)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},t.getInputValue=function(){var e=t.getInputDOMNode();return e?e.value:null},t.setInputValue=function(e){var n=t.getInputDOMNode();n&&(t.value=e,n.value=e)},t.setCursorToEnd=function(){var e=g(t.maskOptions,t.value),n=C(t.maskOptions,e);null!==n&&t.setCursorPosition(n)},t.setSelection=function(e,n,r){void 0===r&&(r={});var o=t.getInputDOMNode(),a=t.isFocused();o&&a&&(r.deferred||c(o,e,n),null!==t.selectionDeferId&&M(t.selectionDeferId),t.selectionDeferId=I((function(){t.selectionDeferId=null,c(o,e,n)})),t.previousSelection={start:e,end:n,length:Math.abs(n-e)})},t.getSelection=function(){return function(e){var n=0,t=0;if("selectionStart"in e&&"selectionEnd"in e)n=e.selectionStart,t=e.selectionEnd;else{var r=document.selection.createRange();r.parentElement()===e&&(n=-r.moveStart("character",-e.value.length),t=-r.moveEnd("character",-e.value.length))}return{start:n,end:t,length:t-n}}(t.getInputDOMNode())},t.getCursorPosition=function(){return t.getSelection().start},t.setCursorPosition=function(e){t.setSelection(e,e)},t.isFocused=function(){return t.focused},t.getBeforeMaskedValueChangeConfig=function(){var e=t.maskOptions,n=e.mask,r=e.maskChar,o=e.permanents,a=e.formatChars;return{mask:n,maskChar:r,permanents:o,alwaysShowMask:!!t.props.alwaysShowMask,formatChars:a}},t.isInputAutofilled=function(e,n,r,o){var a=t.getInputDOMNode();try{if(a.matches(":-webkit-autofill"))return!0}catch(l){}return!t.focused||o.end<r.length&&n.end===e.length},t.onChange=function(e){var n=u(u(t)).beforePasteState,r=u(u(t)).previousSelection,o=t.props.beforeMaskedValueChange,a=t.getInputValue(),s=t.value,i=t.getSelection();t.isInputAutofilled(a,i,s,r)&&(s=k(t.maskOptions,""),r={start:0,end:0,length:0}),n&&(r=n.selection,s=n.value,i={start:r.start+a.length,end:r.start+a.length,length:0},a=s.slice(0,r.start)+a+s.slice(r.end),t.beforePasteState=null);var l=b(t.maskOptions,a,i,s,r),c=l.enteredString,f=l.selection,p=l.value;if(O(o)){var h=o({value:p,selection:f},{value:s,selection:r},c,t.getBeforeMaskedValueChangeConfig());p=h.value,f=h.selection}t.setInputValue(p),O(t.props.onChange)&&t.props.onChange(e),t.isWindowsPhoneBrowser?t.setSelection(f.start,f.end,{deferred:!0}):t.setSelection(f.start,f.end)},t.onFocus=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions,o=r.mask,a=r.prefix;if(t.focused=!0,t.mounted=!0,o){if(t.value)g(t.maskOptions,t.value)<t.maskOptions.mask.length&&t.setCursorToEnd();else{var s=k(t.maskOptions,a),i=k(t.maskOptions,s),u=g(t.maskOptions,i),l=C(t.maskOptions,u),c={start:l,end:l};if(O(n)){var f=n({value:i,selection:c},{value:t.value,selection:null},null,t.getBeforeMaskedValueChangeConfig());i=f.value,c=f.selection}var p=i!==t.getInputValue();p&&t.setInputValue(i),p&&O(t.props.onChange)&&t.props.onChange(e),t.setSelection(c.start,c.end)}t.runSaveSelectionLoop()}O(t.props.onFocus)&&t.props.onFocus(e)},t.onBlur=function(e){var n=t.props.beforeMaskedValueChange,r=t.maskOptions.mask;if(t.stopSaveSelectionLoop(),t.focused=!1,r&&!t.props.alwaysShowMask&&v(t.maskOptions,t.value)){var o="";O(n)&&(o=n({value:o,selection:null},{value:t.value,selection:t.previousSelection},null,t.getBeforeMaskedValueChangeConfig()).value);var a=o!==t.getInputValue();a&&t.setInputValue(o),a&&O(t.props.onChange)&&t.props.onChange(e)}O(t.props.onBlur)&&t.props.onBlur(e)},t.onMouseDown=function(e){if(!t.focused&&document.addEventListener){t.mouseDownX=e.clientX,t.mouseDownY=e.clientY,t.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(n){if(document.removeEventListener("mouseup",e),t.focused){var r=Math.abs(n.clientX-t.mouseDownX),o=Math.abs(n.clientY-t.mouseDownY),a=Math.max(r,o),s=(new Date).getTime()-t.mouseDownTime;(a<=10&&s<=200||a<=5&&s<=300)&&t.setCursorToEnd()}}))}O(t.props.onMouseDown)&&t.props.onMouseDown(e)},t.onPaste=function(e){O(t.props.onPaste)&&t.props.onPaste(e),e.defaultPrevented||(t.beforePasteState={value:t.getInputValue(),selection:t.getSelection()},t.setInputValue(""))},t.handleRef=function(e){null==t.props.children&&O(t.props.inputRef)&&t.props.inputRef(e)};var r=n.mask,o=n.maskChar,s=n.formatChars,i=n.alwaysShowMask,l=n.beforeMaskedValueChange,f=n.defaultValue,h=n.value;t.maskOptions=p(r,o,s),null==f&&(f=""),null==h&&(h=f);var d=S(h);if(t.maskOptions.mask&&(i||d)&&(d=k(t.maskOptions,d),O(l))){var m=n.value;null==n.value&&(m=f),d=l({value:d,selection:null},{value:m=S(m),selection:null},null,t.getBeforeMaskedValueChangeConfig()).value}return t.value=d,t}i(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),n=new RegExp("phone","i"),t=navigator.userAgent;return e.test(t)&&n.test(t)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},t.componentDidUpdate=function(){var e=this.previousSelection,n=this.props,t=n.beforeMaskedValueChange,r=n.alwaysShowMask,o=n.mask,a=n.maskChar,s=n.formatChars,i=this.maskOptions,u=r||this.isFocused(),l=null!=this.props.value,c=l?S(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(o,a,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||l||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||u))&&(c=k(this.maskOptions,c)),h){var d=g(this.maskOptions,c);(null===f||d<f)&&(f=m(this.maskOptions,c)?d:C(this.maskOptions,d))}!this.maskOptions.mask||!v(this.maskOptions,c)||u||l&&this.props.value||(c="");var w={start:f,end:f};if(O(t)){var b=t({value:c,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=b.value,w=b.selection}this.value=c;var y=this.getInputValue()!==this.value;y?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var I=!1;null!=w.start&&null!=w.end&&(I=!e||e.start!==w.start||e.end!==w.end),(I||y)&&this.setSelection(w.start,w.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},t.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&M(this.selectionDeferId),this.stopSaveSelectionLoop()},t.render=function(){var e,n=this.props,t=(n.mask,n.alwaysShowMask,n.maskChar,n.formatChars,n.inputRef,n.beforeMaskedValueChange,n.children),r=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],0<=n.indexOf(t)||(o[t]=e[t]);return o}(n,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(t){O(t)||l(!1);var a=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=s({},r);a.forEach((function(e){return delete i[e]})),e=t(i),a.filter((function(n){return null!=e.props[n]&&e.props[n]!==r[n]})).length&&l(!1)}else e=o.createElement("input",s({ref:this.handleRef},r));var u={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(r.disabled||r.readOnly||(u.onChange=this.onChange,u.onPaste=this.onPaste,u.onMouseDown=this.onMouseDown),null!=r.value&&(u.value=this.value)),e=o.cloneElement(e,u)},n}(o.Component);e.exports=_},7568:function(e,n,t){"use strict";function r(e,n,t,r,o,a,s){try{var i=e[a](s),u=i.value}catch(l){return void t(l)}i.done?n(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var s=e.apply(n,t);function i(e){r(s,o,a,i,u,"next",e)}function u(e){r(s,o,a,i,u,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return o}})}},function(e){e.O(0,[885,836,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);