(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{2808:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(4942),a=t(7462),o=t(4184),u=t.n(o),i=t(132),l=t(7294),s=t(3124),c=t(5223),d=t(4902),f=t(7685),p=t(8423),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},m=l.createContext(null),h=function(e,n){var t=e.defaultValue,o=e.children,i=e.options,c=void 0===i?[]:i,h=e.prefixCls,g=e.className,y=e.style,b=e.onChange,x=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),Z=l.useContext(s.E_),k=Z.getPrefixCls,C=Z.direction,O=l.useState(x.value||t||[]),N=(0,f.Z)(O,2),w=N[0],j=N[1],E=l.useState([]),P=(0,f.Z)(E,2),I=P[0],F=P[1];l.useEffect((function(){"value"in x&&j(x.value||[])}),[x.value]);var K=function(){return c.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},S=k("checkbox",h),L="".concat(S,"-group"),V=(0,p.Z)(x,["value","disabled"]);c&&c.length>0&&(o=K().map((function(e){return l.createElement(_,{prefixCls:S,key:e.value.toString(),disabled:"disabled"in e?e.disabled:x.disabled,value:e.value,checked:-1!==w.indexOf(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var D={toggleOption:function(e){var n=w.indexOf(e.value),t=(0,d.Z)(w);-1===n?t.push(e.value):t.splice(n,1),"value"in x||j(t);var r=K();null===b||void 0===b||b(t.filter((function(e){return-1!==I.indexOf(e)})).sort((function(e,n){return r.findIndex((function(n){return n.value===e}))-r.findIndex((function(e){return e.value===n}))})))},value:w,disabled:x.disabled,name:x.name,registerValue:function(e){F((function(n){return[].concat((0,d.Z)(n),[e])}))},cancelValue:function(e){F((function(n){return n.filter((function(n){return n!==e}))}))}},q=u()(L,(0,r.Z)({},"".concat(L,"-rtl"),"rtl"===C),g);return l.createElement("div",(0,a.Z)({className:q,style:y},V,{ref:n}),l.createElement(m.Provider,{value:D},o))},g=l.forwardRef(h),y=l.memo(g),b=t(9098),x=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},Z=function(e,n){var t,o=e.prefixCls,d=e.className,f=e.children,p=e.indeterminate,v=void 0!==p&&p,h=e.style,g=e.onMouseEnter,y=e.onMouseLeave,Z=e.skipGroup,_=void 0!==Z&&Z,k=e.disabled,C=x(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),O=l.useContext(s.E_),N=O.getPrefixCls,w=O.direction,j=l.useContext(m),E=(0,l.useContext)(c.aM).isFormItemInput,P=(0,l.useContext)(b.Z),I=k||(null===j||void 0===j?void 0:j.disabled)||P,F=l.useRef(C.value);l.useEffect((function(){null===j||void 0===j||j.registerValue(C.value)}),[]),l.useEffect((function(){if(!_)return C.value!==F.current&&(null===j||void 0===j||j.cancelValue(F.current),null===j||void 0===j||j.registerValue(C.value),F.current=C.value),function(){return null===j||void 0===j?void 0:j.cancelValue(C.value)}}),[C.value]);var K=N("checkbox",o),S=(0,a.Z)({},C);j&&!_&&(S.onChange=function(){C.onChange&&C.onChange.apply(C,arguments),j.toggleOption&&j.toggleOption({label:f,value:C.value})},S.name=j.name,S.checked=-1!==j.value.indexOf(C.value));var L=u()((t={},(0,r.Z)(t,"".concat(K,"-wrapper"),!0),(0,r.Z)(t,"".concat(K,"-rtl"),"rtl"===w),(0,r.Z)(t,"".concat(K,"-wrapper-checked"),S.checked),(0,r.Z)(t,"".concat(K,"-wrapper-disabled"),I),(0,r.Z)(t,"".concat(K,"-wrapper-in-form-item"),E),t),d),V=u()((0,r.Z)({},"".concat(K,"-indeterminate"),v)),D=v?"mixed":void 0;return l.createElement("label",{className:L,style:h,onMouseEnter:g,onMouseLeave:y},l.createElement(i.Z,(0,a.Z)({"aria-checked":D},S,{prefixCls:K,className:V,disabled:I,ref:n})),void 0!==f&&l.createElement("span",null,f))};var _=l.forwardRef(Z),k=_;k.Group=y,k.__ANT_CHECKBOX=!0;var C=k},2070:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(8686)}])},6902:function(e,n,t){"use strict";t.d(n,{AW:function(){return d},Bx:function(){return s},GA:function(){return f},PF:function(){return u},PQ:function(){return c},ZG:function(){return i},gF:function(){return l},jl:function(){return p},x4:function(){return a},z2:function(){return o}});var r=t(3084),a=(t(3997),function(e){return r.Z.post("/user/login",e)}),o=function(e){return r.Z.post("/user/signup",e)},u=function(e){return r.Z.put("/user/like/"+e,{})},i=function(e){return r.Z.put("/user/unlike/"+e,{})},l=function(e){return r.Z.post("user/forgot-password",e)},s=function(e,n){return r.Z.get("/user/reset-password/"+e+"/"+n)},c=function(e,n,t){return r.Z.post("/user/reset-password/"+e+"/"+n,t)},d=function(){return r.Z.get("/user/all")},f=function(e){return r.Z.get("/user/"+e)},p=function(e){return r.Z.post("/user/admin/signup",e)}},3084:function(e,n,t){"use strict";var r=t(9669),a=t.n(r)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=a},8686:function(e,n,t){"use strict";t.r(n);var r=t(1799),a=t(9396),o=t(5893),u=t(3448),i=t(9636),l=t(2688),s=t(2808),c=t(1664),d=t.n(c),f=t(1163),p=t(9294),v=t.n(p),m=t(7294),h=t(6902);n.default=function(){var e=(0,m.useState)(),n=e[0],t=e[1],c=(0,f.useRouter)();return(0,o.jsxs)("div",{className:v().login,children:[(0,o.jsx)("div",{className:v().login__title,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),(0,o.jsxs)(i.Z,{name:"basic",className:"ms-auto me-auto input ".concat(v().form),initialValues:{remember:!0},onFinish:function(e){(0,h.x4)(n).then((function(e){localStorage.setItem("user",JSON.stringify(e.data)),"admin"===e.data.role?c.push("/admin"):c.push("/request")})).catch((function(e){u.Z.error({message:e.response.data.error})}))},onFinishFailed:function(e){u.Z.error({message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e!"})},autoComplete:"off",children:[(0,o.jsx)(i.Z.Item,{name:"email",labelCol:{span:3},rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b!"}],className:"email-input",children:(0,o.jsx)(l.Z,{onChange:function(e){return t((0,a.Z)((0,r.Z)({},n),{email:e.target.value}))},value:null===n||void 0===n?void 0:n.email,placeholder:"E-mail"})}),(0,o.jsx)(i.Z.Item,{name:"password",labelCol:{span:3},rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c!"}],className:"input",children:(0,o.jsx)(l.Z,{type:"password",onChange:function(e){return t((0,a.Z)((0,r.Z)({},n),{password:e.target.value}))},value:null===n||void 0===n?void 0:n.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),(0,o.jsx)(i.Z.Item,{name:"remember",valuePropName:"checked",style:{textAlign:"center"},children:(0,o.jsx)(s.Z,{className:"remember__label",children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})}),(0,o.jsx)(i.Z.Item,{style:{textAlign:"center"},children:(0,o.jsx)("div",{className:v().register__link,children:(0,o.jsx)(d(),{href:"/forgot",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})})}),(0,o.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(0,o.jsx)("div",{className:v().login__button,children:(0,o.jsx)("button",{type:"primary",htmlType:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})}),(0,o.jsx)("div",{className:v().register__link,children:(0,o.jsx)(d(),{href:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})]})}},9294:function(e){e.exports={login__title:"Login_login__title__ctZqU",login:"Login_login__uDplI",login__button:"Login_login__button__74O8i",register__link:"Login_register__link__O1XUA",form:"Login_form__Lnts1"}},1163:function(e,n,t){e.exports=t(387)},132:function(e,n,t){"use strict";var r=t(7462),a=t(4942),o=t(91),u=t(1413),i=t(5671),l=t(3144),s=t(2531),c=t(3568),d=t(7294),f=t(4184),p=t.n(f),v=function(e){(0,s.Z)(t,e);var n=(0,c.Z)(t);function t(e){var r;(0,i.Z)(this,t),(r=n.call(this,e)).handleChange=function(e){var n=r.props,t=n.disabled,a=n.onChange;t||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:(0,u.Z)((0,u.Z)({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return(0,l.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,u=n.className,i=n.style,l=n.name,s=n.id,c=n.type,f=n.disabled,v=n.readOnly,m=n.tabIndex,h=n.onClick,g=n.onFocus,y=n.onBlur,b=n.onKeyDown,x=n.onKeyPress,Z=n.onKeyUp,_=n.autoFocus,k=n.value,C=n.required,O=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(O).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=O[n]),e}),{}),w=this.state.checked,j=p()(t,u,(e={},(0,a.Z)(e,"".concat(t,"-checked"),w),(0,a.Z)(e,"".concat(t,"-disabled"),f),e));return d.createElement("span",{className:j,style:i},d.createElement("input",(0,r.Z)({name:l,id:s,type:c,required:C,readOnly:v,disabled:f,tabIndex:m,className:"".concat(t,"-input"),checked:!!w,onClick:h,onFocus:g,onBlur:y,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:_,ref:this.saveInput,value:k},N)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,u.Z)((0,u.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},n.Z=v}},function(e){e.O(0,[836,688,513,997,636,774,888,179],(function(){return n=2070,e(e.s=n);var n}));var n=e.O();_N_E=n}]);