(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{3134:function(e,n,t){"use strict";t.d(n,{ZP:function(){return R}});var r=t(7462),i=t(4942),o=t(7685),l=t(4184),a=t.n(l),s=t(1770),u=t(7294),c=t(3124),d=t(7647);var v=u.createContext(null),h=v.Provider,p=v,m=u.createContext(null),f=m.Provider,_=t(132),b=t(2550),g=t(8866),x=t(5223),N=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t},y=function(e,n){var t,o=u.useContext(p),l=u.useContext(m),s=u.useContext(c.E_),d=s.getPrefixCls,v=s.direction,h=u.useRef(),f=(0,b.sQ)(n,h),y=(0,u.useContext)(x.aM).isFormItemInput,w=e.prefixCls,j=e.className,Z=e.children,C=e.style,k=e.disabled,E=N(e,["prefixCls","className","children","style","disabled"]),O=d("radio",w),R="button"===((null===o||void 0===o?void 0:o.optionType)||l)?"".concat(O,"-button"):O,S=(0,r.Z)({},E),q=u.useContext(g.Z);S.disabled=k||q,o&&(S.name=o.name,S.onChange=function(n){var t,r;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(r=null===o||void 0===o?void 0:o.onChange)||void 0===r||r.call(o,n)},S.checked=e.value===o.value,S.disabled=S.disabled||o.disabled);var P=a()("".concat(R,"-wrapper"),(t={},(0,i.Z)(t,"".concat(R,"-wrapper-checked"),S.checked),(0,i.Z)(t,"".concat(R,"-wrapper-disabled"),S.disabled),(0,i.Z)(t,"".concat(R,"-wrapper-rtl"),"rtl"===v),(0,i.Z)(t,"".concat(R,"-wrapper-in-form-item"),y),t),j);return u.createElement("label",{className:P,style:C,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},u.createElement(_.Z,(0,r.Z)({},S,{type:"radio",prefixCls:R,ref:f})),void 0!==Z?u.createElement("span",null,Z):null)};var w=u.forwardRef(y),j=u.forwardRef((function(e,n){var t,l=u.useContext(c.E_),v=l.getPrefixCls,p=l.direction,m=u.useContext(d.Z),f=(0,s.Z)(e.defaultValue,{value:e.value}),_=(0,o.Z)(f,2),b=_[0],g=_[1],x=e.prefixCls,N=e.className,y=void 0===N?"":N,j=e.options,Z=e.buttonStyle,C=void 0===Z?"outline":Z,k=e.disabled,E=e.children,O=e.size,R=e.style,S=e.id,q=e.onMouseEnter,P=e.onMouseLeave,I=e.onFocus,F=e.onBlur,z=v("radio",x),T="".concat(z,"-group"),D=E;j&&j.length>0&&(D=j.map((function(e){return"string"===typeof e||"number"===typeof e?u.createElement(w,{key:e.toString(),prefixCls:z,disabled:k,value:e,checked:b===e},e):u.createElement(w,{key:"radio-group-value-options-".concat(e.value),prefixCls:z,disabled:e.disabled||k,value:e.value,checked:b===e.value,style:e.style},e.label)})));var W=O||m,M=a()(T,"".concat(T,"-").concat(C),(t={},(0,i.Z)(t,"".concat(T,"-").concat(W),W),(0,i.Z)(t,"".concat(T,"-rtl"),"rtl"===p),t),y);return u.createElement("div",(0,r.Z)({},function(e){return Object.keys(e).reduce((function(n,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(n[t]=e[t]),n}),{})}(e),{className:M,style:R,onMouseEnter:q,onMouseLeave:P,onFocus:I,onBlur:F,id:S,ref:n}),u.createElement(h,{value:{onChange:function(n){var t=b,r=n.target.value;"value"in e||g(r);var i=e.onChange;i&&r!==t&&i(n)},value:b,disabled:e.disabled,name:e.name,optionType:e.optionType}},D))})),Z=u.memo(j),C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t},k=function(e,n){var t=u.useContext(c.E_).getPrefixCls,i=e.prefixCls,o=C(e,["prefixCls"]),l=t("radio",i);return u.createElement(f,{value:"button"},u.createElement(w,(0,r.Z)({prefixCls:l},o,{type:"radio",ref:n})))},E=u.forwardRef(k),O=w;O.Button=E,O.Group=Z,O.__ANT_RADIO=!0;var R=O},6245:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype=new Error,r.prototype.name="InvalidCharacterError";var i="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,i,o=0,l=0,a="";i=n.charAt(l++);~i&&(t=o%4?64*t+i:i,o++%4)?a+=String.fromCharCode(255&t>>(-2*o&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return a};function o(e){var n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(i(e).replace(/(.)/g,(function(e,n){var t=n.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(n)}catch(e){return i(n)}}function l(e){this.message=e}l.prototype=new Error,l.prototype.name="InvalidTokenError",n.Z=function(e,n){if("string"!=typeof e)throw new l("Invalid token specified");var t=!0===(n=n||{}).header?0:1;try{return JSON.parse(o(e.split(".")[t]))}catch(e){throw new l("Invalid token specified: "+e.message)}}},2478:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return t(4721)}])},867:function(e,n,t){"use strict";t.d(n,{z:function(){return r}});var r=function(e){return 1===String(e).length?"00"+e:2===String(e).length?"0"+e:e}},3084:function(e,n,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=i},7570:function(e,n,t){"use strict";t.d(n,{AU:function(){return l},B:function(){return _},Cs:function(){return b},ED:function(){return s},HG:function(){return m},LV:function(){return a},R2:function(){return p},TX:function(){return v},Xz:function(){return h},dW:function(){return u},ip:function(){return c},t9:function(){return f},vk:function(){return d}});var r=t(7568),i=t(655),o=t(3084),l=function(){var e=(0,r.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,o.Z.get("/orders")];case 1:return[2,e.sent()]}}))}));return function(){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.post("/orders",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)((function(e,n){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,o.Z.put("/orders/add/request/"+n,e)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((function(e,n){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,o.Z.put("/orders/status/request/"+n,e)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/orders/tracker/accept/china",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/orders/tracker/accept",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/orders/tracker/return",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.get("/orders/tracker/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.get("/orders/account/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.get("/orders/"+e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)((function(e,n){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,o.Z.put("/orders/price/"+e,n)];case 1:return[2,t.sent()]}}))}));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/orders/tracker/change",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/orders/",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}()},1867:function(e,n,t){"use strict";t.d(n,{v:function(){return l},x:function(){return a}});var r=t(7568),i=t(655),o=t(3084),l=function(){var e=(0,r.Z)((function(e){var n;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return n={},[4,o.Z.get("/prices",(n.headers={Authorization:"Bearer ".concat(e)},n))];case 1:return[2,t.sent()]}}))}));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)((function(e){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,o.Z.put("/prices/change",e)];case 1:return[2,n.sent()]}}))}));return function(n){return e.apply(this,arguments)}}()},4721:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(1799),i=t(9396);t(943);t(3375);t(1566);var o=t(5893),l=t(1369),a=t(3448),s=t(2071),u=t(9636),c=t(2688),d=t(7462),v=t(4942),h=t(888),p=t(4184),m=t.n(p),f=t(7685),_=t(91),b=t(7294),g=t(1770),x=t(5105),N=b.forwardRef((function(e,n){var t,r=e.prefixCls,i=void 0===r?"rc-switch":r,o=e.className,l=e.checked,a=e.defaultChecked,s=e.disabled,u=e.loadingIcon,c=e.checkedChildren,d=e.unCheckedChildren,h=e.onClick,p=e.onChange,N=e.onKeyDown,y=(0,_.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=(0,g.Z)(!1,{value:l,defaultValue:a}),j=(0,f.Z)(w,2),Z=j[0],C=j[1];function k(e,n){var t=Z;return s||(C(t=e),null===p||void 0===p||p(t,n)),t}var E=m()(i,o,(t={},(0,v.Z)(t,"".concat(i,"-checked"),Z),(0,v.Z)(t,"".concat(i,"-disabled"),s),t));return b.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":Z,disabled:s,className:E,ref:n,onKeyDown:function(e){e.which===x.Z.LEFT?k(!1,e):e.which===x.Z.RIGHT&&k(!0,e),null===N||void 0===N||N(e)},onClick:function(e){var n=k(!Z,e);null===h||void 0===h||h(n,e)}}),u,b.createElement("span",{className:"".concat(i,"-inner")},Z?c:d))}));N.displayName="Switch";var y=N,w=t(3124),j=t(8866),Z=t(7647),C=t(8349),k=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t},E=b.forwardRef((function(e,n){var t,r=e.prefixCls,i=e.size,o=e.disabled,l=e.loading,a=e.className,s=void 0===a?"":a,u=k(e,["prefixCls","size","disabled","loading","className"]),c=b.useContext(w.E_),p=c.getPrefixCls,f=c.direction,_=b.useContext(Z.Z),g=b.useContext(j.Z),x=o||g||l,N=p("switch",r),E=b.createElement("div",{className:"".concat(N,"-handle")},l&&b.createElement(h.Z,{className:"".concat(N,"-loading-icon")})),O=m()((t={},(0,v.Z)(t,"".concat(N,"-small"),"small"===(i||_)),(0,v.Z)(t,"".concat(N,"-loading"),l),(0,v.Z)(t,"".concat(N,"-rtl"),"rtl"===f),t),s);return b.createElement(C.Z,{insertExtraNode:!0},b.createElement(y,(0,d.Z)({},u,{prefixCls:N,className:O,disabled:x,ref:n,loadingIcon:E})))}));E.__ANT_SWITCH=!0;var O=E,R=t(3134),S=t(7570),q=t(4858),P=t.n(q),I=(t(381),t(6245)),F=t(1163),z=(t(867),t(1664),t(1867)),T=function(e){var n,t,d,v,h,p,m,f=e.order,_=e.setOrder,g=(l.Z.Option,(0,F.useRouter)()),x=(0,b.useState)(f&&(null===(n=f[0])||void 0===n?void 0:n.totalVolume)||0),N=x[0],y=x[1],w=(0,b.useState)(f&&(null===(t=f[0])||void 0===t?void 0:t.totalWeight)||0),j=w[0],Z=w[1],C=(0,b.useState)(f&&(null===(d=f[0])||void 0===d?void 0:d.totalDensity)||0),k=C[0],E=C[1],q=(0,b.useState)(),T=q[0],D=q[1],W=(0,b.useState)(f||[{type:"",len:"",width:"",height:"",weight:"",count:"",comment:"",volume:"",deliveryType:"",switch:!1}]),M=W[0],K=W[1],A=(0,b.useState)(f&&(null===(v=f[0])||void 0===v?void 0:v.price1)||0),V=A[0],B=A[1],L=(0,b.useState)(f&&(null===(h=f[0])||void 0===h?void 0:h.price2)||0),U=L[0],X=L[1],G=(0,b.useState)(f&&(null===(p=f[0])||void 0===p?void 0:p.price3)||0),Y=G[0],J=G[1],H=(0,b.useState)(f&&(null===(m=f[0])||void 0===m?void 0:m.price4)||0),$=H[0],Q=H[1],ee=(0,b.useState)(),ne=ee[0],te=ee[1],re=(0,b.useState)(!1),ie=re[0],oe=re[1],le=(0,b.useState)(),ae=le[0],se=le[1],ue=(0,b.useState)(!1),ce=(ue[0],ue[1],(0,b.useState)(!1)),de=ce[0],ve=ce[1],he=(0,b.useState)(),pe=he[0],me=he[1],fe=(0,b.useState)(),_e=(fe[0],fe[1]),be=(0,b.useState)(),ge=(be[0],be[1]);(0,b.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user")),n=e&&(0,I.Z)(null===e||void 0===e?void 0:e.token);n&&D(n),window.innerWidth<500&&ve(!0),(0,z.v)(null===e||void 0===e?void 0:e.token).then((function(e){var n,t;me(null===e||void 0===e?void 0:e.data),_e(null===(n=e.data[0])||void 0===n?void 0:n.hoz),ge(null===(t=e.data[0])||void 0===t?void 0:t.tnp)}))}),[]);var xe=function(){var e,n;(null===(e=M[0])||void 0===e?void 0:e.type)?N&&j?(null===(n=M[0])||void 0===n?void 0:n.deliveryType)?j<50?a.Z.warning({message:"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 50 \u043a\u0433"}):T?(0,S.AU)().then((function(e){var n=e.data.length,t=M.map((function(e){return(0,i.Z)((0,r.Z)({},e),{accountId:null===T||void 0===T?void 0:T._id,type:null===e||void 0===e?void 0:e.name,individualCode:"60368-adilet-"+(n+1),price:ne,volume:N,totalWeight:j})}));(0,S.LV)(t).then((function(e){201===(null===e||void 0===e?void 0:e.status)&&(oe(!0),se("60368-adilet-"+(n+1)))}))})).catch((function(e){var n=M.map((function(e){return(0,i.Z)((0,r.Z)({},e),{accountId:null===T||void 0===T?void 0:T._id,type:null===e||void 0===e?void 0:e.name,individualCode:"60368-adilet-"+(count+1),price:ne,volume:N,totalWeight:j})}));(0,S.LV)(n).then((function(e){201===(null===e||void 0===e?void 0:e.status)&&(oe(!0),se("60368-adilet-"+(count+1)))}))})):(g.push("/register"),a.Z.warning({message:"\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0432\u0430\u043c \u043d\u0430\u0434\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),_(M.map((function(e){return e.price1=V,e.price2=U,e.price3=Y,e.price4=$,e.totalVolume=N,e.totalDensity=k,e.totalWeight=j,e})))):a.Z.error({message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}):a.Z.error({message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}):a.Z.error({message:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430"})};(0,b.useEffect)((function(){var e=0,n=0,t=0,r=0;pe&&(null===M||void 0===M||M.map((function(i,o){if(Number(null===i||void 0===i?void 0:i.weight)>0&&Number(null===i||void 0===i?void 0:i.len)>0&&Number(null===i||void 0===i?void 0:i.width)>0&&Number(null===i||void 0===i?void 0:i.height)>0&&Number(null===i||void 0===i?void 0:i.count)>0||Number(null===i||void 0===i?void 0:i.totalVolume)>0&&Number(null===i||void 0===i?void 0:i.totalWeight)>0){var l=(null===i||void 0===i?void 0:i.switch)?Number(null===i||void 0===i?void 0:i.totalWeight):Number(null===i||void 0===i?void 0:i.weight)*Number(null===i||void 0===i?void 0:i.count),a=(null===i||void 0===i?void 0:i.switch)?Number(null===i||void 0===i?void 0:i.totalVolume):Number(null===i||void 0===i?void 0:i.len)/100*(Number(null===i||void 0===i?void 0:i.width)/100)*(Number(null===i||void 0===i?void 0:i.height)/100)*Number(i.count),s=l/a;null===i||void 0===i||i.switch;y(parseFloat(a.toFixed(2))),Z(parseFloat(l.toFixed(2))),E(parseFloat(s.toFixed(2)));var u,c,d,v,h,p,m,f,_=null===pe||void 0===pe?void 0:pe.map((function(e){return null===e||void 0===e?void 0:e.items.filter((function(e){return(null===e||void 0===e?void 0:e.from)<=s&&(null===e||void 0===e?void 0:e.to)>s}))})).flatMap((function(e){return e}));if(console.log(_),l<=30&&a<=.2)e+=7*l,n+=7*l,t+=7*l,r+=7*l;else if("first"===(null===i||void 0===i?void 0:i.type))e+=s<100?Number(a)*Number(null===(u=_[0])||void 0===u?void 0:u.hoz):Number(l)*Number(null===(c=_[0])||void 0===c?void 0:c.hoz),n+=s<100?Number(a)*Number(null===(d=_[1])||void 0===d?void 0:d.hoz):Number(l)*Number(null===(v=_[1])||void 0===v?void 0:v.hoz),t+=s<100?Number(a)*Number(null===(h=_[2])||void 0===h?void 0:h.hoz):Number(l)*Number(null===(p=_[2])||void 0===p?void 0:p.hoz),r+=s<100?Number(a)*Number(null===(m=_[3])||void 0===m?void 0:m.hoz):Number(l)*Number(null===(f=_[3])||void 0===f?void 0:f.hoz);else if("second"===(null===i||void 0===i?void 0:i.type)){var b,g,x,N,w,j,C,k;e+=s<100?Number(a)*Number(null===(b=_[0])||void 0===b?void 0:b.tnp):Number(l)*Number(null===(g=_[0])||void 0===g?void 0:g.tnp),n+=s<100?Number(a)*Number(null===(x=_[1])||void 0===x?void 0:x.tnp):Number(l)*Number(null===(N=_[1])||void 0===N?void 0:N.tnp),t+=s<100?Number(a)*Number(null===(w=_[2])||void 0===w?void 0:w.hoz):Number(l)*Number(null===(j=_[2])||void 0===j?void 0:j.hoz),r+=s<100?Number(a)*Number(null===(C=_[3])||void 0===C?void 0:C.hoz):Number(l)*Number(null===(k=_[3])||void 0===k?void 0:k.hoz)}}else B(0),X(0),J(0),Q(0),E(0),y(0),Z(0)}))),0!==e&&B(e<30?30:Math.round(e)),0!==n&&X(n<30?30:Math.round(n)),0!==t&&J(t<30?30:Math.round(t)),0!==r&&Q(r<30?30:Math.round(r))}),[M]);var Ne=function(e){var n;return(null===f||void 0===f?void 0:f.weight)>20&&(null===f||void 0===f||null===(n=f.type)||void 0===n?void 0:n.length)>0&&(""==f.len||""==f.width||""==f.height)?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f":e+" $"},ye=function(e,n,t){var r=/^[0-9\b,.]+$/;K(M.map((function(i,o){return o===e&&(""===t||r.test(t))&&(i[n]=t.replace(",",".")),i})))},we=function(e,n){K(M.map((function(n){return n.deliveryType=e.target.value,n}))),te(n)};return(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)(s.Z,{open:ie,footer:null,onCancel:function(){a.Z.success({message:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d"}),_([{type:"",len:"",width:"",height:"",weight:"",count:"",comment:"",volume:"",deliveryType:"",switch:!1}]),g.push("/my-orders")},width:de?"95%":"80%",children:[(0,o.jsx)("div",{className:P().modal__title,children:"\u0412\u0430\u0448 \u043a\u043e\u0434"}),(0,o.jsxs)("div",{className:P().inds,children:[(0,o.jsxs)("div",{className:P().ind,children:["\u041a\u043e\u0434 \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f: ",(0,o.jsx)("span",{children:ae})]}),(0,o.jsxs)("div",{className:P().ind,children:["\u0410\u0434\u0440\u0435\u0441 \u0441\u043a\u043b\u0430\u0434\u0430:",(0,o.jsxs)("div",{className:P().account__item_text,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0413\u0443\u0430\u043d\u0447\u0436\u043e\u0443: "})," \xa0\xa0603\u516c\u53f8\u5e7f\u5dde\u5730\u5740\uff1a\u5e7f\u5dde\u5e02\u767d\u4e91\u533a\u6c47\u5bcc\u56fd\u9645\u5546\u8d38\u4e2d\u5fc3A26\u680b103\u53f7-603\u5e93\u623f",(0,o.jsx)("br",{}),"\u7eaa\u963f\u4e50\u8f6c\u4f60\u7684\u540d\u5b57 13811368603"]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"\u0418\u0443:"})," \xa0\xa0\u4e49\u4e4c\u65b0\u5e93\u623f\u5730\u5740\uff1a",(0,o.jsx)("br",{})," \u6d59\u6c5f\u7701\u91d1\u534e\u5e02\u4e49\u4e4c\u5e02\u798f\u7530\u8857\u9053\u8377\u53f6\u5858\u5de5\u4e1a\u533a\u7269\u534e\u8def66\u53f7 603\u5e93\u623f \u6536\u8d27\u4eba \u4e1a\u52a1\u5458\u8f6c\u5ba2\u6237 18966053603/18500791603"]})]})]})]}),(0,o.jsxs)("div",{className:P().modal__tips,children:[(0,o.jsx)("div",{children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043a\u043e\u0440\u043e\u0431\u043a\u0435 \u0441 \u0442\u043e\u0432\u0430\u0440\u043e\u043c."}),(0,o.jsx)("div",{children:"\u0411\u0435\u0437 \u044d\u0442\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u0448\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0430 \u043f\u043e\u0442\u0435\u0440\u044f\u0435\u0442\u0441\u044f."})]})]}),(0,o.jsx)("div",{className:"".concat(P().title),children:(0,o.jsx)("h4",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043a\u0430\u0440\u0433\u043e (\u043f\u0438\u043d\u0434\u0443\u043e/1688 \u0438 \u0434\u0440)"})}),(0,o.jsx)(u.Z,{className:"w-100 ms-auto me-auto ".concat(P().form),children:M&&(null===M||void 0===M?void 0:M.map((function(e,n){var t;return(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsxs)("div",{className:"d-md-flex gap-3 d-block",children:[(0,o.jsx)("div",{className:P().selects__wrapper,children:(0,o.jsxs)("div",{className:P().item,children:[(0,o.jsx)("div",{className:"mb-md-3 mb-2",children:(0,o.jsx)(l.Z,{placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",className:"w-100 select",style:{width:"100%"},onChange:function(e,t){return function(e,n,t){K(null===M||void 0===M?void 0:M.map((function(r,i){return i===t&&(r.type=e,r.name=n.label),r})))}(e,t,n)},value:(null===e||void 0===e?void 0:e.type)||"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",options:[{label:"\u041e\u0434\u0435\u0436\u0434\u0430 \u0438 \u043e\u0431\u0443\u0432\u044c",value:"second"},{label:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 (\u0445\u043e\u0437 \u0442\u043e\u0432\u0430\u0440\u044b)",value:"first"}]})}),(0,o.jsx)("div",{className:"d-block mb-0 mb-md-3 d-md-flex justify-between ".concat(P().inputs),children:(0,o.jsx)("div",{className:"input ".concat(P().input),children:(0,o.jsxs)("div",{className:"".concat(P().inputs__wrapper),children:[(0,o.jsx)("div",{className:"mb-md-3 mb-2",children:(null===e||void 0===e?void 0:e.switch)?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u041e\u0431\u0449\u0438\u0439 \u0432\u0435\u0441"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"totalWeight",e.target.value)},value:null===e||void 0===e?void 0:e.totalWeight})})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u041e\u0431\u044a\u0435\u043c"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"totalVolume",e.target.value)},value:null===e||void 0===e?void 0:e.totalVolume})})]})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2",children:[(0,o.jsx)("div",{className:P().label,children:"\u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (\u043a\u0433)"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"weight",e.target.value)},value:null===e||void 0===e?void 0:e.weight})})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u0414\u043b\u0438\u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (c\u043c)"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"len",e.target.value)},value:null===e||void 0===e?void 0:e.len})})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u0428\u0438\u0440\u0438\u043d\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (c\u043c)"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"width",e.target.value)},value:null===e||void 0===e?void 0:e.width})})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (c\u043c)"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"height",e.target.value)},value:null===e||void 0===e?void 0:e.height})})]}),(0,o.jsxs)("div",{className:"d-flex align-items-center mb-md-3 mb-2 gap-1",children:[(0,o.jsx)("div",{className:P().label,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u0440\u043e\u0431\u043e\u043a"}),(0,o.jsx)("div",{className:P().label__input,children:(0,o.jsx)(c.Z,{onChange:function(e){return ye(n,"count",e.target.value)},value:null===e||void 0===e?void 0:e.count})})]})]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(O,{value:null===e||void 0===e?void 0:e.switch,onChange:function(){return function(e){Z(0),y(0),E(0),K(null===M||void 0===M?void 0:M.map((function(n,t){return t===e&&((null===n||void 0===n?void 0:n.switch)?(n.totalVolume="",n.totalWeight=""):(n.height="",n.len="",n.width="",n.weight="",n.count=""),n.switch=!(null===n||void 0===n?void 0:n.switch)),n})))}(n)}}),(0,o.jsx)("span",{className:P().switch,children:"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u0432\u0435\u0441 \u0438 \u043e\u0431\u044a\u0435\u043c"})]})]})})})]})}),(0,o.jsx)("div",{className:P().overall__wrapper,children:(0,o.jsxs)("div",{className:P().overall,children:[(0,o.jsxs)("div",{className:P().overall__item,children:["\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ",(0,o.jsxs)("span",{children:[(null===e||void 0===e?void 0:e.totalVolume)||N," \u043c3"]})]}),(0,o.jsxs)("div",{className:P().overall__item,children:["\u0412\u0435\u0441: ",(0,o.jsxs)("span",{children:[(null===e||void 0===e?void 0:e.totalWeight)||j," \u043a\u0433"]})]}),(0,o.jsxs)("div",{className:"".concat(P().overall__item," mb-md-3 mb-0"),children:["\u041f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c: ",(0,o.jsxs)("span",{children:[(null===e||void 0===e?void 0:e.totalDensity)||k," \u043a\u0433/\u043a\u0443\u0431"]})]}),(0,o.jsx)("div",{className:P().overall__item,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442:"}),(0,o.jsxs)(R.ZP.Group,{value:null===(t=M[0])||void 0===t?void 0:t.deliveryType,children:[(0,o.jsx)("div",{className:P().price,children:(0,o.jsxs)(R.ZP,{value:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441 (8-10 \u0434\u043d\u0435\u0439)",onChange:function(e){return we(e,V)},children:["\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441 (8-10 \u0434\u043d\u0435\u0439): ",(0,o.jsx)("span",{className:P().price__bold,children:Ne(V)})]})}),(0,o.jsx)("div",{className:P().price,children:(0,o.jsxs)(R.ZP,{value:"\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441 (15-20 \u0434\u043d\u0435\u0439)",onChange:function(e){return we(e,U)},children:["\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441 (15-20 \u0434\u043d\u0435\u0439): ",(0,o.jsx)("span",{className:P().price__bold,children:Ne(U)})]})}),(0,o.jsx)("div",{className:P().price,children:(0,o.jsxs)(R.ZP,{value:"\u0410\u0432\u0442\u043e (18-25 \u0434\u043d\u0435\u0439)",onChange:function(e){return we(e,U)},children:["\u0410\u0432\u0442\u043e (18-25 \u0434\u043d\u0435\u0439) : ",(0,o.jsx)("span",{className:P().price__bold,children:Ne(Y)})]})}),(0,o.jsx)("div",{className:P().price,children:(0,o.jsxs)(R.ZP,{value:"\u0416\u0414 (30-35 \u0434\u043d\u0435\u0439)",onChange:function(e){return we(e,U)},children:["\u0416\u0414 (30-35 \u0434\u043d\u0435\u0439) : ",(0,o.jsx)("span",{className:P().price__bold,children:Ne($)})]})})]}),(0,o.jsx)("div",{className:P().confirm__tip,children:"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0434\u201d"}),(0,o.jsx)("div",{className:"confirm__button",children:(0,o.jsx)("button",{type:"primary",onClick:xe,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0434"})})]})})]})})})))})]})}},4858:function(e){e.exports={price:"Request_price__kp5o5",overall__item:"Request_overall__item___jOA6",price__bold:"Request_price__bold__sZxC1",ind:"Request_ind__dD5Ra",volume:"Request_volume__SAo7V",account__item_text:"Request_account__item_text__061Wh",plus:"Request_plus__LqwIx",plus__icon:"Request_plus__icon__NALZf",title:"Request_title__MEJkZ",overall:"Request_overall___gA7R",confirm__tip:"Request_confirm__tip__Yi7Od",modal__tips:"Request_modal__tips__u5nBY",tip:"Request_tip__a_ynj",tips:"Request_tips__jsoj_",inputs:"Request_inputs__UAY17",input:"Request_input__zmEIf",inputs__wrapper:"Request_inputs__wrapper__JT5G2",plus__text:"Request_plus__text__8CBfD",remove__button:"Request_remove__button__s_lep",item:"Request_item__meMoP",modal__title:"Request_modal__title__sw__8",inds:"Request_inds___pXrX",label:"Request_label__acggF",label__input:"Request_label__input__6eeiY",switch:"Request_switch__6pP61",selects__wrapper:"Request_selects__wrapper__dF8S5",overall__wrapper:"Request_overall__wrapper__jnu1Y"}},132:function(e,n,t){"use strict";var r=t(7462),i=t(4942),o=t(91),l=t(1413),a=t(5671),s=t(3144),u=t(2531),c=t(3568),d=t(7294),v=t(4184),h=t.n(v),p=function(e){(0,u.Z)(t,e);var n=(0,c.Z)(t);function t(e){var r;(0,a.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,i=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),i&&i({target:(0,l.Z)((0,l.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var i="checked"in e?e.checked:e.defaultChecked;return r.state={checked:i},r}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,l=n.className,a=n.style,s=n.name,u=n.id,c=n.type,v=n.disabled,p=n.readOnly,m=n.tabIndex,f=n.onClick,_=n.onFocus,b=n.onBlur,g=n.onKeyDown,x=n.onKeyPress,N=n.onKeyUp,y=n.autoFocus,w=n.value,j=n.required,Z=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),C=Object.keys(Z).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=Z[n]),e}),{}),k=this.state.checked,E=h()(t,l,(e={},(0,i.Z)(e,"".concat(t,"-checked"),k),(0,i.Z)(e,"".concat(t,"-disabled"),v),e));return d.createElement("span",{className:E,style:a},d.createElement("input",(0,r.Z)({name:s,id:u,type:c,required:j,readOnly:p,disabled:v,tabIndex:m,className:"".concat(t,"-input"),checked:!!k,onClick:f,onFocus:_,onBlur:b,onKeyUp:N,onKeyDown:g,onKeyPress:x,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:w},C)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,l.Z)((0,l.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=p}},function(e){e.O(0,[885,836,688,513,636,770,369,774,888,179],(function(){return n=2478,e(e.s=n);var n}));var n=e.O();_N_E=n}]);