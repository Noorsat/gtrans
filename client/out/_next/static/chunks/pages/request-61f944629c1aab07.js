(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{2478:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return e(753)}])},7570:function(t,n,e){"use strict";e.d(n,{AU:function(){return l},ED:function(){return d},LV:function(){return a},dW:function(){return s}});var o=e(7568),i=e(655),u=e(9669),r=e.n(u),l=function(){var t=(0,o.Z)((function(){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,r().get("https://backend.gtrans.kz/orders")];case 1:return[2,t.sent()]}}))}));return function(){return t.apply(this,arguments)}}(),a=function(){var t=(0,o.Z)((function(t){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,r().post("https://backend.gtrans.kz/orders",t)];case 1:return[2,n.sent()]}}))}));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,o.Z)((function(t,n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,r().put("https://backend.gtrans.kz/orders/add/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}(),s=function(){var t=(0,o.Z)((function(t,n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,r().put("https://backend.gtrans.kz/orders/status/request/"+n,t)];case 1:return[2,e.sent()]}}))}));return function(n,e){return t.apply(this,arguments)}}()},753:function(t,n,e){"use strict";e.r(n);var o=e(6042),i=e(9396),u=e(5893),r=e(1369),l=e(3448),a=e(9636),d=e(2688),s=e(1577),c=e(8711),v=e(7294),p=e(7570),f=(e(381),e(6245)),m=e(1163);n.default=function(){r.Z.Option;var t,n,e=(0,m.useRouter)(),h=(0,v.useState)(),g=h[0],Z=h[1],x=(0,v.useState)(),y=x[0],w=x[1],k=(0,v.useState)(),_=k[0],b=k[1];(0,v.useEffect)((function(){(0,p.AU)().then((function(t){b(t.data)}));var t=JSON.parse(localStorage.getItem("user"));if(t){var n=(0,f.Z)(null===t||void 0===t?void 0:t.token);w(n)}else e.push("/login")}),[]);var N=[{title:"\u041e\u0442\u043a\u0443\u0434\u0430",dataIndex:"pointA",key:"pointA"},{title:"\u041a\u0443\u0434\u0430",dataIndex:"pointB",key:"pointB"},{title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",dataIndex:"type",key:"type"},{title:"\u0412\u0435\u0441 (\u043a\u0433)",dataIndex:"weight",key:"weight"},{title:"\u041e\u0431\u044a\u0435\u043c\u044b (\u043c3)",dataIndex:"volume",key:"volume"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",dataIndex:"count",key:"count"},{title:"\u0426\u0435\u043d\u0430",dataIndex:"request",key:"request",render:function(t,n){var e,o;return null===(o=null===n||void 0===n||null===(e=n.acceptedRequest)||void 0===e?void 0:e.filter((function(t){return 3===t.status}))[0])||void 0===o?void 0:o.price}},{title:"\u041f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a",dataIndex:"company",key:"company",render:function(t,n){var e,o;return null===(o=null===n||void 0===n||null===(e=n.acceptedRequest)||void 0===e?void 0:e.filter((function(t){return 3===t.status}))[0])||void 0===o?void 0:o.company}}];return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"mt-5 text-center",children:(0,u.jsx)("h4",{children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"})}),(0,u.jsxs)(a.Z,{className:"w-md-50 w-75 ms-auto me-auto",children:[(0,u.jsxs)("div",{className:"d-flex gap-3 mb-3",children:[(0,u.jsx)(d.Z,{className:"w-100",placeholder:"\u041e\u0442\u043a\u0443\u0434\u0430",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{pointA:t.target.value}))},value:null===g||void 0===g?void 0:g.pointA}),(0,u.jsx)(d.Z,{className:"w-100",placeholder:"\u041a\u0443\u0434\u0430",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{pointB:t.target.value}))},value:null===g||void 0===g?void 0:g.pointB})]}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(d.Z,{className:"w-100",placeholder:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{type:t.target.value}))},value:null===g||void 0===g?void 0:g.type})}),(0,u.jsxs)("div",{className:"d-block gap-3 mb-3 d-md-flex",children:[(0,u.jsx)(d.Z,{placeholder:"\u0412\u0435\u0441 (\u043a\u0433)",className:"w-100 mb-3 mb-md-0 ",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{weight:t.target.value}))}}),(0,u.jsx)(d.Z,{placeholder:"\u041e\u0431\u044a\u0435\u043c\u044b (\u043c3)",className:"w-100 mb-3 mb-md-0",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{volume:t.target.value}))}}),(0,u.jsx)(d.Z,{placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",className:"w-100 mb-3 mb-md-0",onChange:function(t){return Z((0,i.Z)((0,o.Z)({},g),{count:t.target.value}))}})]}),(0,u.jsx)(s.Z,{type:"primary",className:"w-100",onClick:function(){var t=(0,i.Z)((0,o.Z)({},g),{accountId:null===y||void 0===y?void 0:y._id});(0,p.LV)(t).then((function(t){201===(null===t||void 0===t?void 0:t.status)&&(l.Z.success({message:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d"}),Z({}),e.push("/"))}))},disabled:!(null===g||void 0===g?void 0:g.pointA)||!(null===g||void 0===g?void 0:g.pointB)||!(null===g||void 0===g?void 0:g.type)||!(null===g||void 0===g?void 0:g.weight)||!(null===g||void 0===g?void 0:g.volume)||!(null===g||void 0===g?void 0:g.count),children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]}),(0,u.jsx)("h4",{className:"text-center mt-3 styles.orders__done}",style:{color:"gold"},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u0430\u0437\u044b"}),(null===g||void 0===g?void 0:g.pointA)&&(null===g||void 0===g?void 0:g.pointB)&&!(null===g||void 0===g?void 0:g.type)&&(0,u.jsx)(c.Z,{dataSource:null===(t=null===_||void 0===_?void 0:_.filter((function(t){return t.pointA===(null===g||void 0===g?void 0:g.pointA)&&t.pointB===(null===g||void 0===g?void 0:g.pointB)})))||void 0===t?void 0:t.filter((function(t){var n;return null===t||void 0===t||null===(n=t.acceptedRequest)||void 0===n?void 0:n.some((function(t){return 3===t.status}))})),columns:N,className:"w-75 ms-auto me-auto mt-4",pagination:!1}),(null===g||void 0===g?void 0:g.pointA)&&(null===g||void 0===g?void 0:g.pointB)&&(null===g||void 0===g?void 0:g.type)&&(0,u.jsx)(c.Z,{dataSource:null===(n=null===_||void 0===_?void 0:_.filter((function(t){return t.pointA===(null===g||void 0===g?void 0:g.pointA)&&t.pointB===(null===g||void 0===g?void 0:g.pointB)&&(null===t||void 0===t?void 0:t.type)==(null===g||void 0===g?void 0:g.type)})))||void 0===n?void 0:n.filter((function(t){var n;return null===t||void 0===t||null===(n=t.acceptedRequest)||void 0===n?void 0:n.some((function(t){return 3===t.status}))})),columns:N,className:"w-75 ms-auto me-auto mt-4",pagination:!1})]})}}},function(t){t.O(0,[885,162,156,954,369,444,896,636,774,888,179],(function(){return n=2478,t(t.s=n);var n}));var n=t.O();_N_E=n}]);