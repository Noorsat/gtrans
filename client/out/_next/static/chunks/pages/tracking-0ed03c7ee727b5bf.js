(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{1878:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tracking",function(){return r(519)}])},3084:function(t,n,r){"use strict";var e=r(9669),s=r.n(e)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=s},7570:function(t,n,r){"use strict";r.d(n,{AU:function(){return c},B:function(){return g},ED:function(){return i},HG:function(){return h},R2:function(){return f},TX:function(){return l},Xz:function(){return d},dW:function(){return u},ip:function(){return o},t9:function(){return v},vk:function(){return _}});var e=r(7568),s=r(655),a=r(3084),c=function(){var t=(0,e.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,a.Z.get("/orders")];case 1:return[2,t.sent()]}}))}));return function(){return t.apply(this,arguments)}}(),i=(function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.post("/orders",t)];case 1:return[2,n.sent()]}}))}))}(),function(){var t=(0,e.Z)((function(t,n){return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,a.Z.put("/orders/add/request/"+n,t)];case 1:return[2,r.sent()]}}))}));return function(n,r){return t.apply(this,arguments)}}()),u=function(){var t=(0,e.Z)((function(t,n){return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,a.Z.put("/orders/status/request/"+n,t)];case 1:return[2,r.sent()]}}))}));return function(n,r){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/accept/china",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),_=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/accept",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/return",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/tracker/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/account/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.get("/orders/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)((function(t,n){return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,a.Z.put("/orders/price/"+t,n)];case 1:return[2,r.sent()]}}))}));return function(n,r){return t.apply(this,arguments)}}(),g=function(){var t=(0,e.Z)((function(t){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return[4,a.Z.put("/orders/tracker/change",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}()},519:function(t,n,r){"use strict";r.r(n);var e=r(5893),s=r(7294),a=r(1163),c=r(3278),i=r.n(c),u=r(3448),o=r(2688),_=r(7570),l=r(381),d=r.n(l);n.default=function(){var t=(0,s.useState)(),n=t[0],r=t[1],c=(0,s.useState)(),l=c[0],f=c[1],h=(0,a.useRouter)().query.trackCode;(0,s.useEffect)((function(){h&&(r(h),(0,_.Xz)(h).then((function(t){if(200===t.status){var n=d()(),r=d()(t.data[0].updatedAt),e=n.diff(r,"days");f(Number(t.data[0].status)),m(e),p(t.data[0])}})).catch((function(t){404===t.response.status&&(u.Z.error({message:t.response.data.message}),p(null))})))}),[]);var v=(0,s.useState)(),g=v[0],p=v[1],k=(0,s.useState)(0),x=k[0],m=k[1];return console.log(x),(0,e.jsx)("div",{className:"container",children:(0,e.jsxs)("div",{className:"d-md-flex d-block",children:[(0,e.jsxs)("div",{className:i().tracking__left,children:[(0,e.jsx)("div",{className:i().tracking__title,children:"\u041e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,e.jsx)("div",{className:i().tracking__text,children:"\u0414\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0442\u0440\u0435\u043a-\u043a\u043e\u0434, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043e\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430."}),(0,e.jsxs)("div",{className:i().tracking__form,children:[(0,e.jsx)("div",{className:"input  tracking__input ".concat(i().tracking__input),children:(0,e.jsx)(o.Z,{placeholder:"\u0412\u0430\u0448 \u0442\u0440\u0435\u043a \u043a\u043e\u0434",value:n,onChange:function(t){return r(t.target.value)}})}),(0,e.jsx)("div",{className:i().tracking__button,onClick:function(){(0,_.Xz)(n).then((function(t){if(200===t.status){var n=d()(),r=d()(t.data[0].updatedAt),e=n.diff(r,"days");f(Number(t.data[0].status)),m(e),p(t.data[0])}})).catch((function(t){404===t.response.status&&(u.Z.error({message:t.response.data.message}),p(null))}))},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"})]})]}),g&&(0,e.jsxs)("div",{className:i().statuses,children:[(0,e.jsx)("div",{className:"".concat(i().status," ").concat(i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-1.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u0412 \u043f\u0443\u0442\u0438 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434 \u0413\u0443\u0430\u043d\u0436\u043e\u0443"})]})}),(0,e.jsx)("div",{className:"".concat(i().status," ").concat((1===l||2===l)&&i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-2.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u041f\u0440\u0438\u0431\u044b\u043b \u043d\u0430 \u0441\u043a\u043b\u0430\u0434 \u0432 \u0413\u0443\u0430\u043d\u0436\u043e\u0443"})]})}),(0,e.jsx)("div",{className:"".concat(i().status," ").concat((x>7&&1===l||2===l)&&i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-3.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u0423\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043e \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"})]})}),(0,e.jsx)("div",{className:"".concat(i().status," ").concat((x>15&&1===l||2===l)&&i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-4-5.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u041d\u0430 \u043f\u0443\u0442\u0438 \u043a \u0433\u0440\u0430\u043d\u0438\u0446\u0435"})]})}),(0,e.jsx)("div",{className:"".concat(i().status," ").concat((x>18&&1===l||2===l)&&i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-4-5.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u041d\u0430 \u043f\u0443\u0442\u0438 \u043a \u0441\u043a\u043b\u0430\u0434\u0443"})]})}),(0,e.jsx)("div",{className:"".concat(i().status," ").concat(2===l&&i().active),children:(0,e.jsxs)("div",{className:i().status__wrapper,children:[(0,e.jsx)("div",{className:i().status__icon,children:(0,e.jsx)("img",{src:"./tracking-6.svg"})}),(0,e.jsx)("div",{className:i().status__text,children:"\u0421\u043a\u043b\u0430\u0434 \u0432 \u0410\u043b\u043c\u0430\u0442\u044b"})]})})]})]})})}},3278:function(t){t.exports={tracking__title:"Tracking_tracking__title__bUJod",tracking__left:"Tracking_tracking__left__U0M_O",tracking__text:"Tracking_tracking__text__Zvpge",tracking__form:"Tracking_tracking__form__kV1vl",tracking__button:"Tracking_tracking__button__XHpLZ",tracking__input:"Tracking_tracking__input__TWw4P",status__wrapper:"Tracking_status__wrapper__rsFb_",statuses:"Tracking_statuses__9QmjY",status:"Tracking_status__qkG2Z",status__icon:"Tracking_status__icon__KrmJ5",status__text:"Tracking_status__text__97uKP",active:"Tracking_active__RtKnv"}},1163:function(t,n,r){t.exports=r(387)},7568:function(t,n,r){"use strict";function e(t,n,r,e,s,a,c){try{var i=t[a](c),u=i.value}catch(o){return void r(o)}i.done?n(u):Promise.resolve(u).then(e,s)}function s(t){return function(){var n=this,r=arguments;return new Promise((function(s,a){var c=t.apply(n,r);function i(t){e(c,s,a,i,u,"next",t)}function u(t){e(c,s,a,i,u,"throw",t)}i(void 0)}))}}r.d(n,{Z:function(){return s}})}},function(t){t.O(0,[885,836,688,774,888,179],(function(){return n=1878,t(t.s=n);var n}));var n=t.O();_N_E=n}]);