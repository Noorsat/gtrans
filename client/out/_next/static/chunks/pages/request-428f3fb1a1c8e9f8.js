(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{2478:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return e(753)}])},7570:function(t,n,e){"use strict";e.d(n,{AU:function(){return a},ED:function(){return s},LV:function(){return l},dW:function(){return d}});var o=e(7568),r=e(655),i=e(9669),u=e.n(i),a=function(){var t=(0,o.Z)((function(){return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return[4,u().get("https://backend.gtrans.kz/orders")];case 1:return[2,t.sent()]}}))}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,o.Z)((function(t){return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return[4,u().post("https://backend.gtrans.kz/orders",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((function(t,n){return(0,r.__generator)(this,(function(e){switch(e.label){case 0:return[4,u().put("https://backend.gtrans.kz/orders/add/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((function(t,n){return(0,r.__generator)(this,(function(e){switch(e.label){case 0:return[4,u().put("https://backend.gtrans.kz/orders/status/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}()},753:function(t,n,e){"use strict";e.r(n);var o=e(6042),r=e(9396),i=e(5893),u=e(1369),a=e(3448),l=e(9636),s=e(2688),d=e(8542),c=e(1577),v=e(8711),p=e(7294),f=e(7570),m=e(381),h=e.n(m),g=e(6245),Z=e(1163);n.default=function(){u.Z.Option;var t,n,e=(0,Z.useRouter)(),m=(0,p.useState)(),x=m[0],y=m[1],w=(0,p.useState)(),k=w[0],_=w[1],b=(0,p.useState)(),N=b[0],j=b[1];(0,p.useEffect)((function(){(0,f.AU)().then((function(t){j(t.data)}));var t=JSON.parse(localStorage.getItem("user"));if(t){var n=(0,g.Z)(null===t||void 0===t?void 0:t.token);_(n)}else e.push("/login")}),[]);var A=[{title:"\u041e\u0442\u043a\u0443\u0434\u0430",dataIndex:"pointA",key:"pointA"},{title:"\u041a\u0443\u0434\u0430",dataIndex:"pointB",key:"pointB"},{title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",dataIndex:"type",key:"type"},{title:"\u0414\u0430\u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438",dataIndex:"transportDate",key:"transportDate",render:function(t,n){return h()(t).format("DD.MM.YYYY")}},{title:"\u0412\u0435\u0441 (\u043a\u0433)",dataIndex:"weight",key:"weight"},{title:"\u041e\u0431\u044a\u0435\u043c\u044b (\u043c3)",dataIndex:"volume",key:"volume"},{title:"\u041a\u043e\u043b-\u0432\u043e",dataIndex:"count",key:"count"},{title:"\u0426\u0435\u043d\u0430",dataIndex:"request",key:"request",render:function(t,n){var e,o;return null===(o=null===n||void 0===n||null===(e=n.acceptedRequest)||void 0===e?void 0:e.filter((function(t){return 3===t.status}))[0])||void 0===o?void 0:o.price}},{title:"\u041f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a",dataIndex:"company",key:"company",render:function(t,n){var e,o;return null===(o=null===n||void 0===n||null===(e=n.acceptedRequest)||void 0===e?void 0:e.filter((function(t){return 3===t.status}))[0])||void 0===o?void 0:o.company}}];return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"mt-5 text-center",children:(0,i.jsx)("h4",{children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"})}),(0,i.jsxs)(l.Z,{className:"w-md-50 w-75 ms-auto me-auto",children:[(0,i.jsxs)("div",{className:"d-flex gap-3 mb-3",children:[(0,i.jsx)(s.Z,{className:"w-100",placeholder:"\u041e\u0442\u043a\u0443\u0434\u0430",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{pointA:t.target.value}))},value:null===x||void 0===x?void 0:x.pointA}),(0,i.jsx)(s.Z,{className:"w-100",placeholder:"\u041a\u0443\u0434\u0430",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{pointB:t.target.value}))},value:null===x||void 0===x?void 0:x.pointB})]}),(0,i.jsx)("div",{className:"mb-3",children:(0,i.jsx)(s.Z,{className:"w-100",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{type:t.target.value}))},value:null===x||void 0===x?void 0:x.type})}),(0,i.jsxs)("div",{className:"d-block gap-3 mb-3 d-md-flex",children:[(0,i.jsx)(d.Z,{className:"w-100 mb-3 mb-md-0",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{transportDate:t}))},placeholder:"\u0414\u0430\u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0438"}),(0,i.jsx)(s.Z,{placeholder:"\u0412\u0435\u0441 (\u043a\u0433)",className:"w-100 mb-3 mb-md-0 ",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{weight:t.target.value}))}}),(0,i.jsx)(s.Z,{placeholder:"\u041e\u0431\u044a\u0435\u043c\u044b (\u043c3)",className:"w-100 mb-3 mb-md-0",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{volume:t.target.value}))}}),(0,i.jsx)(s.Z,{placeholder:"\u041a\u043e\u043b-\u0432\u043e",className:"w-100 mb-3 mb-md-0",onChange:function(t){return y((0,r.Z)((0,o.Z)({},x),{count:t.target.value}))}})]}),(0,i.jsx)(c.Z,{type:"primary",className:"w-100",onClick:function(){var t=(0,r.Z)((0,o.Z)({},x),{accountId:null===k||void 0===k?void 0:k._id});(0,f.LV)(t).then((function(t){201===(null===t||void 0===t?void 0:t.status)&&a.Z.success({message:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d"})}))},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]}),(0,i.jsx)("h4",{className:"text-center mt-3 styles.orders__done}",style:{color:"gold"},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u044b"}),(null===x||void 0===x?void 0:x.pointA)&&(null===x||void 0===x?void 0:x.pointB)&&!(null===x||void 0===x?void 0:x.type)&&(0,i.jsx)(v.Z,{dataSource:null===(t=null===N||void 0===N?void 0:N.filter((function(t){return t.pointA===(null===x||void 0===x?void 0:x.pointA)&&t.pointB===(null===x||void 0===x?void 0:x.pointB)})))||void 0===t?void 0:t.filter((function(t){var n;return null===t||void 0===t||null===(n=t.acceptedRequest)||void 0===n?void 0:n.some((function(t){return 3===t.status}))})),columns:A,className:"w-75 ms-auto me-auto mt-4",pagination:!1}),(null===x||void 0===x?void 0:x.pointA)&&(null===x||void 0===x?void 0:x.pointB)&&(null===x||void 0===x?void 0:x.type)&&(0,i.jsx)(v.Z,{dataSource:null===(n=null===N||void 0===N?void 0:N.filter((function(t){return t.pointA===(null===x||void 0===x?void 0:x.pointA)&&t.pointB===(null===x||void 0===x?void 0:x.pointB)&&(null===t||void 0===t?void 0:t.type)==(null===x||void 0===x?void 0:x.type)})))||void 0===n?void 0:n.filter((function(t){var n;return null===t||void 0===t||null===(n=t.acceptedRequest)||void 0===n?void 0:n.some((function(t){return 3===t.status}))})),columns:A,className:"w-75 ms-auto me-auto mt-4",pagination:!1})]})}}},function(t){t.O(0,[885,162,968,954,369,444,896,636,542,774,888,179],(function(){return n=2478,t(t.s=n);var n}));var n=t.O();_N_E=n}]);