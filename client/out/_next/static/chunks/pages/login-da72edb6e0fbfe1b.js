(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2808:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(4942),a=t(7462),o=t(4184),u=t.n(o),l=t(132),i=t(7294),c=t(3124),s=t(5223),d=t(4902),f=t(7685),p=t(8423),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},m=i.createContext(null),h=function(e,n){var t=e.defaultValue,o=e.children,l=e.options,s=void 0===l?[]:l,h=e.prefixCls,y=e.className,b=e.style,g=e.onChange,k=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),x=i.useContext(c.E_),C=x.getPrefixCls,O=x.direction,E=i.useState(k.value||t||[]),w=(0,f.Z)(E,2),N=w[0],P=w[1],j=i.useState([]),I=(0,f.Z)(j,2),_=I[0],F=I[1];i.useEffect((function(){"value"in k&&P(k.value||[])}),[k.value]);var K=function(){return s.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},S=C("checkbox",h),V="".concat(S,"-group"),B=(0,p.Z)(k,["value","disabled"]);s&&s.length>0&&(o=K().map((function(e){return i.createElement(Z,{prefixCls:S,key:e.value.toString(),disabled:"disabled"in e?e.disabled:k.disabled,value:e.value,checked:-1!==N.indexOf(e.value),onChange:e.onChange,className:"".concat(V,"-item"),style:e.style},e.label)})));var D={toggleOption:function(e){var n=N.indexOf(e.value),t=(0,d.Z)(N);-1===n?t.push(e.value):t.splice(n,1),"value"in k||P(t);var r=K();null===g||void 0===g||g(t.filter((function(e){return-1!==_.indexOf(e)})).sort((function(e,n){return r.findIndex((function(n){return n.value===e}))-r.findIndex((function(e){return e.value===n}))})))},value:N,disabled:k.disabled,name:k.name,registerValue:function(e){F((function(n){return[].concat((0,d.Z)(n),[e])}))},cancelValue:function(e){F((function(n){return n.filter((function(n){return n!==e}))}))}},M=u()(V,(0,r.Z)({},"".concat(V,"-rtl"),"rtl"===O),y);return i.createElement("div",(0,a.Z)({className:M,style:b},B,{ref:n}),i.createElement(m.Provider,{value:D},o))},y=i.forwardRef(h),b=i.memo(y),g=t(9098),k=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x=function(e,n){var t,o=e.prefixCls,d=e.className,f=e.children,p=e.indeterminate,v=void 0!==p&&p,h=e.style,y=e.onMouseEnter,b=e.onMouseLeave,x=e.skipGroup,Z=void 0!==x&&x,C=e.disabled,O=k(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),E=i.useContext(c.E_),w=E.getPrefixCls,N=E.direction,P=i.useContext(m),j=(0,i.useContext)(s.aM).isFormItemInput,I=(0,i.useContext)(g.Z),_=C||(null===P||void 0===P?void 0:P.disabled)||I,F=i.useRef(O.value);i.useEffect((function(){null===P||void 0===P||P.registerValue(O.value)}),[]),i.useEffect((function(){if(!Z)return O.value!==F.current&&(null===P||void 0===P||P.cancelValue(F.current),null===P||void 0===P||P.registerValue(O.value),F.current=O.value),function(){return null===P||void 0===P?void 0:P.cancelValue(O.value)}}),[O.value]);var K=w("checkbox",o),S=(0,a.Z)({},O);P&&!Z&&(S.onChange=function(){O.onChange&&O.onChange.apply(O,arguments),P.toggleOption&&P.toggleOption({label:f,value:O.value})},S.name=P.name,S.checked=-1!==P.value.indexOf(O.value));var V=u()((t={},(0,r.Z)(t,"".concat(K,"-wrapper"),!0),(0,r.Z)(t,"".concat(K,"-rtl"),"rtl"===N),(0,r.Z)(t,"".concat(K,"-wrapper-checked"),S.checked),(0,r.Z)(t,"".concat(K,"-wrapper-disabled"),_),(0,r.Z)(t,"".concat(K,"-wrapper-in-form-item"),j),t),d),B=u()((0,r.Z)({},"".concat(K,"-indeterminate"),v)),D=v?"mixed":void 0;return i.createElement("label",{className:V,style:h,onMouseEnter:y,onMouseLeave:b},i.createElement(l.Z,(0,a.Z)({"aria-checked":D},S,{prefixCls:K,className:B,disabled:_,ref:n})),void 0!==f&&i.createElement("span",null,f))};var Z=i.forwardRef(x),C=Z;C.Group=b,C.__ANT_CHECKBOX=!0;var O=C},2070:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(8686)}])},6902:function(e,n,t){"use strict";t.d(n,{PF:function(){return l},ZG:function(){return i},x4:function(){return o},z2:function(){return u}});var r=t(9669),a=t.n(r),o=function(e){return a().post("https://backend.gtrans.kz/user/login",e)},u=function(e){return a().post("https://backend.gtrans.kz/user/signup",e)},l=function(e){return a().put("https://backend.gtrans.kz/user/like/"+e,{})},i=function(e){return a().put("https://backend.gtrans.kz/user/unlike/"+e,{})}},8686:function(e,n,t){"use strict";t.r(n);var r=t(6042),a=t(9396),o=t(5893),u=t(3448),l=t(9636),i=t(2688),c=t(2808),s=t(1577),d=t(1664),f=t.n(d),p=t(1163),v=t(7294),m=t(6902);n.default=function(){var e=(0,v.useState)(),n=e[0],t=e[1],d=(0,p.useRouter)();return(0,o.jsxs)(l.Z,{name:"basic",className:"mt-5 pt-5 w-50 ms-auto me-auto",initialValues:{remember:!0},onFinish:function(e){(0,m.x4)(n).then((function(e){localStorage.setItem("user",JSON.stringify(e.data)),d.push("/")})).catch((function(e){u.Z.error({message:e.response.data.error})}))},onFinishFailed:function(e){u.Z.error({message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e!"})},autoComplete:"off",children:[(0,o.jsx)(l.Z.Item,{label:"Email",name:"email",labelCol:{span:3},rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b!"}],children:(0,o.jsx)(i.Z,{onChange:function(e){return t((0,a.Z)((0,r.Z)({},n),{email:e.target.value}))},value:null===n||void 0===n?void 0:n.email})}),(0,o.jsx)(l.Z.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",labelCol:{span:3},rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:(0,o.jsx)(i.Z.Password,{onChange:function(e){return t((0,a.Z)((0,r.Z)({},n),{password:e.target.value}))},value:null===n||void 0===n?void 0:n.password})}),(0,o.jsx)(l.Z.Item,{name:"remember",valuePropName:"checked",style:{marginBottom:"12px!important"},children:(0,o.jsx)(c.Z,{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})}),(0,o.jsx)(l.Z.Item,{style:{marginBottom:12},children:(0,o.jsx)(f(),{href:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),(0,o.jsx)(l.Z.Item,{children:(0,o.jsx)(s.Z,{type:"primary",htmlType:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})})]})}},132:function(e,n,t){"use strict";var r=t(7462),a=t(4942),o=t(5987),u=t(1413),l=t(5671),i=t(3144),c=t(136),s=t(3568),d=t(7294),f=t(4184),p=t.n(f),v=function(e){(0,c.Z)(t,e);var n=(0,s.Z)(t);function t(e){var r;(0,l.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,u.Z)((0,u.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,i.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,u=n.className,l=n.style,i=n.name,c=n.id,s=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,y=n.onFocus,b=n.onBlur,g=n.onKeyDown,k=n.onKeyPress,x=n.onKeyUp,Z=n.autoFocus,C=n.value,O=n.required,E=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(E).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=E[n]),e}),{}),N=this.state.checked,P=p()(t,u,(e={},(0,a.Z)(e,"".concat(t,"-checked"),N),(0,a.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:P,style:l},d.createElement("input",(0,r.Z)({name:i,id:c,type:s,required:O,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!N,onClick:h,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:k,onChange:this.handleChange,autoFocus:Z,ref:this.saveInput,value:C},w)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,u.Z)((0,u.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}},function(e){e.O(0,[162,968,636,774,888,179],(function(){return n=2070,e(e.s=n);var n}));var n=e.O();_N_E=n}]);