(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{8195:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t(8222)}])},867:function(n,e,t){"use strict";t.d(e,{z:function(){return r}});var r=function(n){return 1===String(n).length?"00"+n:2===String(n).length?"0"+n:n}},6902:function(n,e,t){"use strict";t.d(e,{AW:function(){return l},Bx:function(){return s},GA:function(){return f},PF:function(){return a},PQ:function(){return d},ZG:function(){return c},gF:function(){return o},x4:function(){return i},z2:function(){return u}});var r=t(3084),i=(t(3997),function(n){return r.Z.post("/user/login",n)}),u=function(n){return r.Z.post("/user/signup",n)},a=function(n){return r.Z.put("/user/like/"+n,{})},c=function(n){return r.Z.put("/user/unlike/"+n,{})},o=function(n){return r.Z.post("user/forgot-password",n)},s=function(n,e){return r.Z.get("/user/reset-password/"+n+"/"+e)},d=function(n,e,t){return r.Z.post("/user/reset-password/"+n+"/"+e,t)},l=function(){return r.Z.get("/user/all")},f=function(n){return r.Z.get("/user/"+n)}},3084:function(n,e,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://backend.gtrans.kz/"});e.Z=i},7570:function(n,e,t){"use strict";t.d(e,{AU:function(){return a},B:function(){return g},ED:function(){return o},HG:function(){return v},LV:function(){return c},R2:function(){return p},TX:function(){return f},Xz:function(){return h},dW:function(){return s},ip:function(){return d},t9:function(){return x},vk:function(){return l}});var r=t(7568),i=t(655),u=t(3084),a=function(){var n=(0,r.Z)((function(){return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return[4,u.Z.get("/orders")];case 1:return[2,n.sent()]}}))}));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.post("/orders",n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)((function(n,e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,u.Z.put("/orders/add/request/"+e,n)];case 1:return[2,t.sent()]}}))}));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)((function(n,e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,u.Z.put("/orders/status/request/"+e,n)];case 1:return[2,t.sent()]}}))}));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/tracker/accept/china",n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/tracker/accept",n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/tracker/return",n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get("/orders/tracker/"+n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get("/orders/account/"+n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.get("/orders/"+n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)((function(n,e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,u.Z.put("/orders/price/"+n,e)];case 1:return[2,t.sent()]}}))}));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)((function(n){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,u.Z.put("/orders/tracker/change",n)];case 1:return[2,e.sent()]}}))}));return function(e){return n.apply(this,arguments)}}()},8222:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return H}});var r=t(5893),i=t(1413),u=t(7294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},c=t(2135),o=function(n,e){return u.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:a}))};o.displayName="UserOutlined";var s=u.forwardRef(o),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M64 556.9l264.2 173.5L512.5 577 246.8 412.7zm896-290.3zm0 0L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7zM513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z"}}]},name:"dropbox",theme:"outlined"},l=function(n,e){return u.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:d}))};l.displayName="DropboxOutlined";var f=u.forwardRef(l),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},p=function(n,e){return u.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:h}))};p.displayName="MenuUnfoldOutlined";var v=u.forwardRef(p),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},g=function(n,e){return u.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:x}))};g.displayName="MenuFoldOutlined";var m=u.forwardRef(g),Z=t(3448),y=t(1577),w=t(2808),k=t(2071),S=t(3251),_=t(2688),C=t(5363),j=t(6245),b=t(6902),I=t(7570),z=t(8625),N=t.n(z),M=t(867),E=t(1163);function L(n,e,t,r,i){return{key:e,icon:t,children:r,label:n,type:i}}var A=[L("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438","\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",(0,r.jsx)(s,{})),L("\u0417\u0430\u043a\u0430\u0437\u044b","\u0417\u0430\u043a\u0430\u0437\u044b",(0,r.jsx)(f,{}))],H=function(){var n=(0,u.useState)(!1),e=n[0],t=n[1],i=(0,u.useState)(),a=(i[0],i[1]),c=(0,u.useState)(""),o=c[0],s=c[1],d=(0,u.useState)(),l=d[0],f=d[1],h=(0,u.useState)(),p=h[0],x=h[1],g=(0,u.useState)(),z=g[0],L=g[1],H=(0,u.useState)(),O=H[0],R=H[1],B=(0,u.useState)(),U=B[0],X=B[1],G=(0,u.useState)(),T=G[0],q=G[1],F=(0,u.useState)(),P=F[0],D=F[1],W=(0,u.useState)(!1),K=W[0],V=W[1],J=(0,u.useState)(),Q=J[0],$=J[1],Y=(0,u.useState)(),nn=Y[0],en=Y[1],tn=(0,u.useState)(),rn=tn[0],un=tn[1],an=(0,u.useState)(),cn=an[0],on=an[1],sn=(0,u.useState)(!1),dn=sn[0],ln=sn[1],fn=(0,E.useRouter)();console.log(cn),(0,u.useEffect)((function(){var n=JSON.parse(localStorage.getItem("user"));if(n){var e=(0,j.Z)(null===n||void 0===n?void 0:n.token);a(e)}else fn.push("/login")}),[]);var hn=function(n){var e={individualCode:P,status:n};(0,I.TX)(e).then((function(n){n.status<400&&(Z.Z.success({message:"\u0412\u044b \u0443\u0431\u0440\u0430\u043b\u0438 \u0433\u0430\u043b\u043e\u0447\u043a\u0443"}),X(!1))}))};return(0,r.jsxs)("div",{className:N().wrapper,children:[(0,r.jsx)("div",{children:(0,r.jsx)(k.Z,{open:K,footer:[],onCancel:function(){return V(!1)},className:"userModal",children:(0,r.jsx)(S.Z,{columns:nn,dataSource:Q,pagination:!1})})}),(0,r.jsx)(k.Z,{open:U,footer:[(0,r.jsx)(y.Z,{onClick:function(){return X(!1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,r.jsx)(y.Z,{onClick:function(){return hn(0)},children:"\u0423\u0431\u0440\u0430\u0442\u044c"})],children:"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0431\u0440\u0430\u0442\u044c \u0433\u0430\u043b\u043e\u0447\u043a\u0443?"}),(0,r.jsx)(k.Z,{open:T,footer:[(0,r.jsx)(y.Z,{onClick:function(){return X(!1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,r.jsx)(y.Z,{onClick:function(){return hn(1)},children:"\u0423\u0431\u0440\u0430\u0442\u044c"})],children:"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0431\u0440\u0430\u0442\u044c \u0433\u0430\u043b\u043e\u0447\u043a\u0443?"}),(0,r.jsx)(k.Z,{open:dn,footer:[(0,r.jsx)(y.Z,{onClick:function(){un(0),on(""),ln(!1)},children:"\u041d\u0430\u0437\u0430\u0434"}),(0,r.jsx)(y.Z,{onClick:function(){var n={price:cn};(0,I.t9)(rn,n).then((function(n){200===n.status&&(un(0),on(""),ln(!1),window.location.reload())}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})],children:(0,r.jsx)(_.Z,{value:cn,onChange:function(n){return on(n.target.value)},style:{marginTop:50}})}),(0,r.jsxs)("div",{style:{width:256},children:[(0,r.jsx)(y.Z,{type:"primary",onClick:function(){t(!e)},style:{marginBottom:16},children:e?(0,r.jsx)(v,{}):(0,r.jsx)(m,{})}),(0,r.jsx)(C.Z,{defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline",onSelect:function(n){"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"===n.key?(s("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),(0,b.AW)().then((function(n){x(n.data),f(n.data)})),L([{title:"Email",dataIndex:"email",key:"email"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"\u0418\u043d\u0434 \u043a\u043e\u0434",dataIndex:"id",key:"id",render:function(n){return(0,r.jsxs)("div",{children:["SM215-",(0,M.z)(n)]})}},{title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b",render:function(n,e){return(0,r.jsx)(y.Z,{type:"primary",onClick:function(){return function(n){(0,I.R2)(n._id).then((function(n){$(n.data),en([{title:"ID",dataIndex:"_id",key:"_id",width:10},{title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",dataIndex:"type",key:"type"},{title:"\u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (\u043a\u0433)",dataIndex:"weight",key:"weight"},{title:"\u0414\u043b\u0438\u043d\u0430 (\u043c3)",dataIndex:"len",key:"len"},{title:"\u0428\u0438\u0440\u0438\u043d\u0430 (\u043c3)",dataIndex:"width",key:"width"},{title:"\u0412\u044b\u0441\u043e\u0442\u0430 (\u043c3)",dataIndex:"height",key:"height"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",dataIndex:"count",key:"count"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",dataIndex:"comment",key:"comment"},{title:"\u0422\u0440\u0435\u043a \u043a\u043e\u0434",dataIndex:"trackCode",key:"trackCode"},{title:"\u0418\u043d\u0434 \u043a\u043e\u0434",dataIndex:"individualCode",key:"individualCode"}]),V(!0)})).catch((function(n){404===n.response.status&&Z.Z.error({message:n.response.data.message})}))}(e)},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b"})}}])):"\u0417\u0430\u043a\u0430\u0437\u044b"===n.key&&(s("\u0417\u0430\u043a\u0430\u0437\u044b"),(0,I.AU)().then((function(n){var e=[],t=n.data.map((function(t,r){return e.includes(null===t||void 0===t?void 0:t.individualCode)||(t.rowSpan=n.data.filter((function(n,e){return(null===n||void 0===n?void 0:n.individualCode)===(null===t||void 0===t?void 0:t.individualCode)})).length),e.push(null===t||void 0===t?void 0:t.individualCode),t}));x(t)})),L([{title:"\u041f\u0440\u0438\u0431\u044b\u043b\u043e \u043d\u0430 \u0441\u043a\u043b\u0430\u0434",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}},render:function(n,e){return(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)(w.Z,{onChange:function(n){return function(n,e){var t={individualCode:e.individualCode};n.target.checked?(0,I.ip)(t).then((function(n){(null===n||void 0===n?void 0:n.status)<400&&Z.Z.success({message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u0441\u043a\u043b\u0430\u0434"})})):(X(!0),D(e.individualCode))}(n,e)},defaultChecked:(null===e||void 0===e?void 0:e.status)>=1})})}},{title:"\u041f\u0440\u0438\u0431\u044b\u043b\u043e \u0432 \u0410\u043b\u043c\u0430\u0442\u0443",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}},render:function(n,e){return(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)(w.Z,{onChange:function(n){return function(n,e){var t={individualCode:e.individualCode};n.target.checked?(0,I.vk)(t).then((function(n){(null===n||void 0===n?void 0:n.status)<400&&Z.Z.success({message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0410\u043b\u043c\u0430\u0442\u0443"})})):(q(!0),D(e.individualCode))}(n,e)},defaultChecked:2===(null===e||void 0===e?void 0:e.status)})})}},{title:"\u0422\u0440\u0435\u043a\u0438\u043d\u0433",dataIndex:"request",key:"request",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}},render:function(n,e){return(0,r.jsx)("div",{children:null===e||void 0===e?void 0:e.trackCode})}},{title:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",dataIndex:"type",key:"type"},{title:"\u0412\u0435\u0441 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u0440\u043e\u0431\u043a\u0438 (\u043a\u0433)",dataIndex:"weight",key:"weight"},{title:"\u0414\u043b\u0438\u043d\u0430 (\u043c3)",dataIndex:"len",key:"len"},{title:"\u0428\u0438\u0440\u0438\u043d\u0430 (\u043c3)",dataIndex:"width",key:"width"},{title:"\u0412\u044b\u0441\u043e\u0442\u0430 (\u043c3)",dataIndex:"height",key:"height"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",dataIndex:"count",key:"count"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",dataIndex:"comment",key:"comment"},{title:"\u0418\u043d\u0434 \u043a\u043e\u0434",dataIndex:"individualCode",key:"individualCode",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}}},{title:"\u0426\u0435\u043d\u0430",dataIndex:"price",key:"price",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}},render:function(n,e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{textAlign:"center"},children:[e.price," $"]}),(0,r.jsx)(y.Z,{type:"primary",onClick:function(){un(e.individualCode),ln(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0435\u043d\u0443"})]})}},{title:"\u0417\u0430\u043a\u0430\u0437\u0449\u0438\u043a",onCell:function(n,e){return{rowSpan:n.rowSpan?n.rowSpan:0}},render:function(n,e){return(0,r.jsx)(y.Z,{type:"primary",onClick:function(){return n=e.accountId,(0,b.GA)(n).then((function(n){$([n.data])})),en([{title:"Email",dataIndex:"email",key:"email"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"\u0418\u043d\u0434 \u043a\u043e\u0434",dataIndex:"id",key:"id",render:function(n){return(0,r.jsxs)("div",{children:["SM215-",(0,M.z)(n)]})}}]),void V(!0);var n},children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u0449\u0438\u043a\u0430"})}}]))},inlineCollapsed:e,items:A})]}),(0,r.jsxs)("div",{className:N().table,children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"===o&&(0,r.jsx)(_.Z,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",className:N().input,phoneInput:O,onChange:function(n){return function(n){R(n.target.value),x(l.filter((function(e){var t;return null===e||void 0===e||null===(t=e.phoneNumber)||void 0===t?void 0:t.includes(n.target.value)})))}(n)}}),(0,r.jsx)(S.Z,{columns:z,dataSource:p,style:{width:"100%"},pagination:!1})]})]})}},8625:function(n){n.exports={wrapper:"Admin_wrapper__bbo2k",table:"Admin_table__xeX5U",input:"Admin_input__GMM4v"}}},function(n){n.O(0,[836,688,513,997,770,369,597,774,888,179],(function(){return e=8195,n(n.s=e);var e}));var e=n.O();_N_E=e}]);