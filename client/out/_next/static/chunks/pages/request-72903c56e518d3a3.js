(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{6245:function(n,i,e){"use strict";function o(n){this.message=n}o.prototype=new Error,o.prototype.name="InvalidCharacterError";var t="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(n){var i=String(n).replace(/=+$/,"");if(i.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,t,u=0,l=0,r="";t=i.charAt(l++);~t&&(e=u%4?64*e+t:t,u++%4)?r+=String.fromCharCode(255&e>>(-2*u&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return r};function u(n){var i=n.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(t(n).replace(/(.)/g,(function(n,i){var e=i.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e})))}(i)}catch(n){return t(i)}}function l(n){this.message=n}l.prototype=new Error,l.prototype.name="InvalidTokenError",i.Z=function(n,i){if("string"!=typeof n)throw new l("Invalid token specified");var e=!0===(i=i||{}).header?0:1;try{return JSON.parse(u(n.split(".")[e]))}catch(n){throw new l("Invalid token specified: "+n.message)}}},2478:function(n,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return e(9844)}])},867:function(n,i,e){"use strict";e.d(i,{z:function(){return o}});var o=function(n){return 1===String(n).length?"00"+n:2===String(n).length?"0"+n:n}},3084:function(n,i,e){"use strict";var o=e(9669),t=e.n(o)().create({baseURL:"https://backend.gtrans.kz"});i.Z=t},7570:function(n,i,e){"use strict";e.d(i,{AU:function(){return l},ED:function(){return d},LV:function(){return r},R2:function(){return s},Xz:function(){return a},dW:function(){return v},ip:function(){return c}});var o=e(7568),t=e(655),u=e(3084),l=function(){var n=(0,o.Z)((function(){return(0,t.__generator)(this,(function(n){switch(n.label){case 0:return[4,u.Z.get("/orders")];case 1:return[2,n.sent()]}}))}));return function(){return n.apply(this,arguments)}}(),r=function(){var n=(0,o.Z)((function(n){return(0,t.__generator)(this,(function(i){switch(i.label){case 0:return[4,u.Z.post("/orders",n)];case 1:return[2,i.sent()]}}))}));return function(i){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((function(n,i){return(0,t.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/add/request/"+i,n)];case 1:return[2,e.sent()]}}))}));return function(i,e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((function(n,i){return(0,t.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/status/request/"+i,n)];case 1:return[2,e.sent()]}}))}));return function(i,e){return n.apply(this,arguments)}}(),c=function(){var n=(0,o.Z)((function(n){return(0,t.__generator)(this,(function(i){switch(i.label){case 0:return[4,u.Z.put("/orders/tracker/change",n)];case 1:return[2,i.sent()]}}))}));return function(i){return n.apply(this,arguments)}}(),a=function(){var n=(0,o.Z)((function(n){return(0,t.__generator)(this,(function(i){switch(i.label){case 0:return[4,u.Z.get("/orders/tracker/"+n)];case 1:return[2,i.sent()]}}))}));return function(i){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((function(n){return(0,t.__generator)(this,(function(i){switch(i.label){case 0:return[4,u.Z.get("/orders/account/"+n)];case 1:return[2,i.sent()]}}))}));return function(i){return n.apply(this,arguments)}}()},9844:function(n,i,e){"use strict";e.r(i),e.d(i,{default:function(){return x}});var o=e(6042),t=e(9396),u=e(943);var l=e(3375);var r=e(1566);function d(n){return function(n){if(Array.isArray(n))return(0,u.Z)(n)}(n)||(0,l.Z)(n)||(0,r.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=e(5893),c=e(1369),a=e(3448),s=e(2071),h=e(1577),m=e(9636),f=e(2688),g=e(7294),w=e(7570),p=e(4858),b=e.n(p),N=(e(381),e(6245)),_=e(1163),Z=e(867),y=e(8193),x=function(){c.Z.Option;var n=(0,_.useRouter)(),i=(0,g.useState)({len:"",width:"",height:""}),e=i[0],u=i[1],l=(0,g.useState)(),r=l[0],p=l[1],x=(0,g.useState)(),j=x[0],C=x[1],k=(0,g.useState)([{type:"",len:"",width:"",height:"",weight:"",count:"",comment:""}]),S=k[0],E=k[1],I=(0,g.useState)(),R=I[0],q=I[1],A=(0,g.useState)(!1),L=A[0],z=A[1],O=(0,g.useState)(),T=O[0],U=O[1],V=(0,g.useState)(!1);V[0],V[1];(0,g.useEffect)((function(){var i=JSON.parse(localStorage.getItem("user"));if(i){var e=(0,N.Z)(null===i||void 0===i?void 0:i.token);C(e)}else n.push("/login")}),[]);var X=function(){a.Z.success({message:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d"}),u({}),n.push("/my-orders")},D=function(n){var i=S.reduce((function(n,i){return n+i.count*i.weight}),0);return i>=100?"H792-"+(0,Z.z)(n):i<100?"SM215-"+(0,Z.z)(n):void 0};(0,g.useEffect)((function(){var n=0;null===S||void 0===S||S.map((function(i){if((null===i||void 0===i?void 0:i.weight.length)>0&&(null===i||void 0===i?void 0:i.len.length)>0&&(null===i||void 0===i?void 0:i.width.length)>0&&(null===i||void 0===i?void 0:i.height.length)>0){var e=Number(null===i||void 0===i?void 0:i.weight)/(Number(null===i||void 0===i?void 0:i.len)*Number(null===i||void 0===i?void 0:i.width)*Number(null===i||void 0===i?void 0:i.height));if(e&&i.weight>100){if("first"===(null===i||void 0===i?void 0:i.type))if(e<100){var o=Number(null===i||void 0===i?void 0:i.len)*Number(null===i||void 0===i?void 0:i.width)*Number(null===i||void 0===i?void 0:i.height);n+=490*o*(null===i||void 0===i?void 0:i.count)}else e>100&&e<=110?n+=4.3*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>110&&e<=120?n+=4.2*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>120&&e<=130?n+=4.1*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>130&&e<=140?n+=4*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>140&&e<=150?n+=3.9*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>150&&e<=160?n+=3.8*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>160&&e<=170?n+=3.7*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>170&&e<=180?n+=3.6*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>180&&e<=190?n+=3.5*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>190&&e<=200?n+=3.4*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>200&&e<=250?n+=3.3*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>250&&e<=300?n+=3.2*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>300&&e<=350?n+=3.1*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>350&&e<=400?n+=3*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>400&&e<=600?n+=2.9*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>600&&e<=800?n+=2.8*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>800&&e<=1e3?n+=2.7*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>1e3&&(n+=2.6*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count));else if("second"===(null===i||void 0===i?void 0:i.type))if(e<100){var t=Number(null===i||void 0===i?void 0:i.len)*Number(null===i||void 0===i?void 0:i.width)*Number(null===i||void 0===i?void 0:i.height);n+=580*t*(null===i||void 0===i?void 0:i.count)}else e>100&&e<=110?n+=5.5*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>110&&e<=120?n+=5.4*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>120&&e<=130?n+=5.3*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>130&&e<=140?n+=5.2*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>140&&e<=150?n+=5.1*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>150&&e<=160?n+=5*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>160&&e<=170?n+=4.9*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>170&&e<=180?n+=4.8*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>180&&e<=190?n+=4.7*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>190&&e<=200?n+=4.6*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>200&&e<=250?n+=4.5*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>250&&e<=300?n+=4.4*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>300&&e<=350?n+=4.3*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):e>350&&e<=400?n+=4.2*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count):(e>400&&e<=600||e>600&&e<=800||e>800&&e<=1e3||e>1e3)&&(n+=4.1*Number(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count))}else if((null===i||void 0===i?void 0:i.weight)>20&&(null===i||void 0===i?void 0:i.weight)<=100){var u=Number(null===i||void 0===i?void 0:i.len)*Number(null===i||void 0===i?void 0:i.width)*Number(null===i||void 0===i?void 0:i.height);"first"===(null===i||void 0===i?void 0:i.type)?n+=490*u*(null===i||void 0===i?void 0:i.count):"second"===(null===i||void 0===i?void 0:i.type)&&(n+=580*u*(null===i||void 0===i?void 0:i.count))}}else n+=7*(null===i||void 0===i?void 0:i.weight)*(null===i||void 0===i?void 0:i.count)})),0!==n&&q(n),p(S.reduce((function(n,i){return n+Number(null===i||void 0===i?void 0:i.len)*Number(null===i||void 0===i?void 0:i.height)*Number(null===i||void 0===i?void 0:i.width)*(null===i||void 0===i?void 0:i.count)}),0))}),[S]);var F=function(n,i,e){var o=/^[0-9\b,.]+$/;E(S.map((function(t,u){return u===n&&("weight"===i||"len"===i||"width"===i||"height"===i||"count"===i?(""===e||o.test(e))&&(t[i]=e.replace(",",".")):"comment"===i&&(t[i]=e)),t})))};return(0,v.jsxs)("div",{children:[(0,v.jsx)(s.Z,{open:L,footer:[(0,v.jsx)(h.Z,{onClick:X,children:"\u041e\u041a"})],onCancel:X,children:(0,v.jsxs)("div",{className:b().ind,children:["\u0412\u0430\u0448 \u0438\u043d\u0434\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434: ",(0,v.jsx)("span",{children:T})]})}),(0,v.jsx)("div",{className:"mt-5 text-center",children:(0,v.jsx)("h4",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),(0,v.jsxs)(m.Z,{className:"w-md-50 w-75 ms-auto me-auto",children:[S.map((function(n,i){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"mb-3",children:(0,v.jsx)(c.Z,{placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",className:"w-100",style:{width:"100%"},onChange:function(n,e){return function(n,i,e){E(null===S||void 0===S?void 0:S.map((function(o,t){return t===e&&(o.type=n,o.name=i.label),o})))}(n,e,i)},options:[{label:"\u041e\u0434\u0435\u0436\u0434\u0430 \u0438 \u043e\u0431\u0443\u0432\u044c",value:"second"},{label:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 (\u0445\u043e\u0437 \u0442\u043e\u0432\u0430\u0440\u044b)",value:"first"}]})}),(0,v.jsxs)("div",{className:"d-block gap-3 mb-0 mb-md-3 d-md-flex",children:[(0,v.jsx)(f.Z,{placeholder:"\u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (\u043a\u0433)",className:"mb-3 mb-md-0",onChange:function(n){return F(i,"weight",n.target.value)},value:null===n||void 0===n?void 0:n.weight}),(null===n||void 0===n?void 0:n.weight)>20&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Z,{placeholder:"\u0414\u043b\u0438\u043d\u0430 (\u043c)",className:"mb-3 me-3 mb-md-0",onChange:function(n){return F(i,"len",n.target.value)},value:null===n||void 0===n?void 0:n.len}),(0,v.jsx)(f.Z,{placeholder:"\u0428\u0438\u0440\u0438\u043d\u0430 (\u043c)",className:"mb-3 me-3 mb-md-0",onChange:function(n){return F(i,"width",n.target.value)},value:null===n||void 0===n?void 0:n.width}),(0,v.jsx)(f.Z,{placeholder:"\u0412\u044b\u0441\u043e\u0442\u0430 (\u043c)",className:"mb-3 me-3 mb-md-0",onChange:function(n){return F(i,"height",n.target.value)},value:null===n||void 0===n?void 0:n.height})]}),(0,v.jsx)(f.Z,{placeholder:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",className:"mb-3 mb-md-0",onChange:function(n){return F(i,"count",n.target.value)},value:null===n||void 0===n?void 0:n.count})]}),(0,v.jsx)(f.Z,{placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",className:"w-100 mb-3",onChange:function(n){return F(i,"comment",n.target.value)},value:null===n||void 0===n?void 0:n.comment}),(null===S||void 0===S?void 0:S.length)>1&&(0,v.jsx)(h.Z,{type:"danger",className:"w-100 mb-3",onClick:function(){return function(n){E(null===S||void 0===S?void 0:S.filter((function(i,e){return n!==e})))}(i)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})})),(0,v.jsx)("div",{className:b().plus,children:(0,v.jsx)(y.Lfi,{className:b().plus__icon,size:30,onClick:function(){E(d(S).concat([{type:"",len:"",width:"",height:"",weight:"",count:"",comment:""}]))}})}),R>0&&(0,v.jsxs)("div",{className:b().price,children:["\u0426\u0435\u043d\u0430: ",(0,v.jsx)("span",{children:function(n){var i;return(null===e||void 0===e?void 0:e.weight)>20&&(null===e||void 0===e||null===(i=e.type)||void 0===i?void 0:i.length)>0&&(""==e.len||""==e.width||""==e.height)?"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f":n+" $"}(R)})]}),r>0&&(0,v.jsxs)("div",{className:b().price,children:["\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c: ",(0,v.jsxs)("span",{children:[r," \u043c3"]})]}),(0,v.jsx)(h.Z,{type:"primary",className:"w-100",onClick:function(){(0,w.R2)(null===j||void 0===j?void 0:j._id).then((function(n){var i=D(null===j||void 0===j?void 0:j.id).charAt(0),e=0;n.data.map((function(n){n.individualCode.charAt(0)===i&&e++}));var u=S.map((function(n){return(0,t.Z)((0,o.Z)({},n),{accountId:null===j||void 0===j?void 0:j._id,type:null===n||void 0===n?void 0:n.name,individualCode:D(null===j||void 0===j?void 0:j.id)+"-"+(e+1)})}));(0,w.LV)(u).then((function(n){201===(null===n||void 0===n?void 0:n.status)&&(z(!0),U(D(null===j||void 0===j?void 0:j.id)+"-"+(e+1)))}))})).catch((function(n){var i=S.map((function(n){return(0,t.Z)((0,o.Z)({},n),{accountId:null===j||void 0===j?void 0:j._id,type:null===n||void 0===n?void 0:n.name,individualCode:D(null===j||void 0===j?void 0:j.id)+"-1"})}));(0,w.LV)(i).then((function(n){201===(null===n||void 0===n?void 0:n.status)&&(z(!0),U(D(null===j||void 0===j?void 0:j.id)+"-1"))}))}))},disabled:function(){var n=!1;return null===S||void 0===S||S.map((function(i){Number(null===i||void 0===i?void 0:i.weight)>20?""!==i.type&&""!==(null===i||void 0===i?void 0:i.weight)&&""!==(null===i||void 0===i?void 0:i.len)&&""!==(null===i||void 0===i?void 0:i.height)&&""!==(null===i||void 0===i?void 0:i.width)&&""!=(null===i||void 0===i?void 0:i.count)||(n=!0):""!==i.type&&""!==i.weight&&""!==i.count||(n=!0)})),n}(),children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})}},4858:function(n){n.exports={price:"Request_price__kp5o5",ind:"Request_ind__dD5Ra",volume:"Request_volume__SAo7V",plus:"Request_plus__LqwIx",plus__icon:"Request_plus__icon__NALZf"}},1163:function(n,i,e){n.exports=e(387)}},function(n){n.O(0,[885,276,811,984,909,688,621,636,954,369,538,774,888,179],(function(){return i=2478,n(n.s=i);var i}));var i=n.O();_N_E=i}]);