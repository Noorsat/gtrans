(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{4308:function(t,n,e){"use strict";e.d(n,{c4:function(){return i}});var r=e(4942),u=e(7462),i=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,o=-1,a={},l={matchHandlers:{},dispatch:function(t){return a=t,c.forEach((function(t){return t(a)})),c.size>=1},subscribe:function(t){return c.size||this.register(),o+=1,c.set(o,t),t(a),o},unsubscribe:function(t){c.delete(t),c.size||this.unregister()},unregister:function(){var t=this;Object.keys(s).forEach((function(n){var e=s[n],r=t.matchHandlers[e];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),c.clear()},register:function(){var t=this;Object.keys(s).forEach((function(n){var e=s[n],i=function(e){var i=e.matches;t.dispatch((0,u.Z)((0,u.Z)({},a),(0,r.Z)({},n,i)))},c=window.matchMedia(e);c.addListener(i),t.matchHandlers[e]={mql:c,listener:i},i(c)}))}};n.ZP=l},6140:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-orders",function(){return e(8105)}])},6902:function(t,n,e){"use strict";e.d(n,{AW:function(){return d},Bx:function(){return a},GA:function(){return f},PF:function(){return s},PQ:function(){return l},ZG:function(){return c},eB:function(){return h},gF:function(){return o},jl:function(){return _},x4:function(){return u},z2:function(){return i}});var r=e(3084),u=(e(3997),function(t){return r.Z.post("/user/login",t)}),i=function(t){return r.Z.post("/user/signup",t)},s=function(t){return r.Z.put("/user/like/"+t,{})},c=function(t){return r.Z.put("/user/unlike/"+t,{})},o=function(t){return r.Z.post("user/forgot-password",t)},a=function(t,n){return r.Z.get("/user/reset-password/"+t+"/"+n)},l=function(t,n,e){return r.Z.post("/user/reset-password/"+t+"/"+n,e)},d=function(){return r.Z.get("/user/all")},f=function(t){return r.Z.get("/user/"+t)},_=function(t){return r.Z.post("/user/admin/signup",t)},h=function(t,n){return r.Z.put("/user/role/".concat(n),t)}},3084:function(t,n,e){"use strict";var r=e(9669),u=e.n(r)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=u},7570:function(t,n,e){"use strict";e.d(n,{AU:function(){return s},B:function(){return m},Cs:function(){return y},ED:function(){return o},HG:function(){return p},LV:function(){return c},R2:function(){return h},TX:function(){return f},Xz:function(){return _},dW:function(){return a},ip:function(){return l},s_:function(){return Z},t9:function(){return v},vk:function(){return d}});var r=e(7568),u=e(655),i=e(3084),s=function(){var t=(0,r.Z)((function(){var t,n=arguments;return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",[4,i.Z.get("/orders"+t)];case 1:return[2,e.sent()]}}))}));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.post("/orders",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)((function(t,n){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,i.Z.put("/orders/add/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),a=function(){var t=(0,r.Z)((function(t,n){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,i.Z.put("/orders/status/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.put("/orders/tracker/accept/china",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.put("/orders/tracker/accept",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.put("/orders/tracker/return",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.get("/orders/tracker/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.get("/orders/account/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.get("/orders/"+t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)((function(t,n){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return[4,i.Z.put("/orders/price/"+t,n)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.put("/orders/tracker/change",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),y=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.put("/orders/",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),Z=function(){var t=(0,r.Z)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,i.Z.get("/orders/details")];case 1:return[2,t.sent()]}}))}));return function(){return t.apply(this,arguments)}}()},1113:function(t,n,e){"use strict";e.d(n,{X:function(){return c},h:function(){return s}});var r=e(7568),u=e(655),i=e(3084),s=function(){var t=(0,r.Z)((function(t){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,i.Z.post("/requests",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)((function(){return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,i.Z.get("/requests")];case 1:return[2,t.sent()]}}))}));return function(){return t.apply(this,arguments)}}()},8105:function(t,n,e){"use strict";e.r(n);var r=e(5893),u=e(3448),i=e(1577),s=e(2071),c=e(9941),o=e(2688),a=e(7294),l=e(7570),d=(e(381),e(1113)),f=e(1163),_=e(6245),h=e(3995),p=e.n(h);e(6902);n.default=function(){var t=(0,a.useState)(),n=t[0],e=t[1],h=(0,a.useState)(),v=h[0],m=h[1],y=(0,a.useState)(),Z=y[0],g=(y[1],(0,a.useState)()),x=g[0],w=(g[1],(0,a.useState)()),k=w[0],b=w[1],j=(0,a.useState)(),N=j[0],C=j[1],q=(0,a.useState)(),O=q[0],I=q[1],S=(0,f.useRouter)(),E=(0,a.useState)(),M=E[0],R=E[1];(0,a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));if(t){var n=(0,_.Z)(null===t||void 0===t?void 0:t.token),r=null===n||void 0===n?void 0:n._id;(0,l.R2)(r).then((function(t){e(t.data)})),b(n)}else S.push("/login")}),[]);var X=(0,a.useState)(!1),z=X[0],H=X[1],A=function(){H(!1);var t={trackCode:O,individualCode:Z};(0,l.ip)(t).then((function(t){(null===t||void 0===t?void 0:t.status)<400&&(I(""),m(0),u.Z.success({message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0442\u0440\u0435\u043a\u0435\u0440 \u043a\u043e\u0434"}),S.push({pathname:"/tracking",query:{trackCode:O}}),I(""))}))},D=function(){C(!1)},L=function(t,n,r){var u={company:null===t||void 0===t?void 0:t.company,price:null===t||void 0===t?void 0:t.price,comment:null===t||void 0===t?void 0:t.comment,requestId:(null===t||void 0===t?void 0:t.requestId)||(null===t||void 0===t?void 0:t._id),status:n};1===n?(0,l.ED)(u,v).then((function(t){(0,l.AU)().then((function(t){e(t.data)})),(0,d.X)().then((function(t){R(t.data)})),H(!1)})):2!==n&&3!==n&&4!==n||(0,l.dW)(u,v||r).then((function(t){(0,l.AU)().then((function(t){e(t.data)})),(0,d.X)().then((function(t){R(t.data)})),H(!1)}))},P=[{title:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",dataIndex:"company",key:"company"},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b (\u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430)",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"\u0426\u0435\u043d\u0430",dataIndex:"price",key:"price"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",dataIndex:"comment",key:"comment"},{title:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430",dataIndex:"acceptRequest",key:"acceptRequest",render:function(t,n){var e,u=null===x||void 0===x?void 0:x.acceptedRequest.filter((function(t){return t.requestId===(null===n||void 0===n?void 0:n._id)}));if(0===u.length)return(0,r.jsx)(i.Z,{type:"primary",className:"w-100",onClick:function(){return L(n,1)},children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"});if((null===x||void 0===x||null===(e=x.acceptedRequest)||void 0===e?void 0:e.filter((function(t){return 3===(null===t||void 0===t?void 0:t.status)})).length)>0){var s,c;if(3===(null===(s=u[0])||void 0===s?void 0:s.status))return(0,r.jsx)("div",{className:"text-center",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430"});switch(null===(c=u[0])||void 0===c?void 0:c.status){case 1:return(0,r.jsx)(i.Z,{type:"primary",className:"w-100",onClick:function(){return L(n,2)},disabled:!0,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0437\u0430\u043a\u0430\u0437"});case 2:return(0,r.jsx)(i.Z,{type:"primary",className:"w-100",onClick:function(){return L(n,3)},disabled:!0,children:"\u041f\u0440\u0438\u043d\u044f\u043b \u0437\u0430\u043a\u0430\u0437"})}}else{var o;switch(null===(o=u[0])||void 0===o?void 0:o.status){case 1:return(0,r.jsx)(i.Z,{type:"primary",className:"w-100",onClick:function(){return L(n,2)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0437\u0430\u043a\u0430\u0437"});case 2:return(0,r.jsx)(i.Z,{type:"primary",className:"w-100",onClick:function(){return L(n,3)},children:"\u041f\u0440\u0438\u043d\u044f\u043b \u0437\u0430\u043a\u0430\u0437"});case 3:return(0,r.jsx)("div",{className:"text-center",children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430"})}}}}];return(0,r.jsxs)("div",{className:p().my__orders,children:[(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:p().my__orders_title,children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),(0,r.jsx)("div",{className:p().my__orders_items,children:null===n||void 0===n?void 0:n.filter((function(t){return(null===t||void 0===t?void 0:t.accountId)===(null===k||void 0===k?void 0:k._id)})).map((function(t){return(0,r.jsxs)("div",{className:p().my__orders_item,onClick:function(){return n=null===t||void 0===t?void 0:t._id,void S.push("/order/"+n);var n},children:[(0,r.jsx)("div",{className:p().my__orders_item_title,children:t.type}),(0,r.jsxs)("div",{className:p().my__orders_item_trackCode,children:["\u0422\u0440\u0435\u043a-\u043a\u043e\u0434: ",t.individualCode]})]})}))})]}),(0,r.jsx)(s.Z,{title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0438",open:z,onOk:A,onCancel:D,width:850,footer:[(0,r.jsx)(i.Z,{onClick:function(){return H(!1)},children:"\u041d\u0430\u0437\u0430\u0434"})],children:(0,r.jsx)(c.Z,{columns:P,dataSource:null===M||void 0===M?void 0:M.filter((function(t){return t.orderID==v})),pagination:!1})}),(0,r.jsx)(s.Z,{open:N,title:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u0440\u0435\u043a \u043a\u043e\u0434",onCancel:D,footer:[(0,r.jsx)(i.Z,{type:"primary",onClick:A,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u0440\u0435\u043a \u043a\u043e\u0434"})],children:(0,r.jsx)(o.Z,{placeholder:"\u0422\u0440\u0435\u043a \u043a\u043e\u0434",value:O,onChange:function(t){return I(t.target.value)}})})]})}},3995:function(t){t.exports={like:"MyOrders_like__DinYI",unlike:"MyOrders_unlike__FQQ3J",my__orders_title:"MyOrders_my__orders_title__lHGa4",my__orders:"MyOrders_my__orders__jwF05",my__orders_items:"MyOrders_my__orders_items__Rau_I",my__orders_item:"MyOrders_my__orders_item__qWRx3",my__orders_item_title:"MyOrders_my__orders_item_title___YDHX","my__orders_item-trackCode":"MyOrders_my__orders_item-trackCode__8ovLK"}}},function(t){t.O(0,[885,836,688,416,997,369,770,546,10,774,888,179],(function(){return n=6140,t(t.s=n);var n}));var n=t.O();_N_E=n}]);