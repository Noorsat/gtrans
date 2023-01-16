(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{8223:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset/[id]/[token]",function(){return r(6175)}])},6902:function(e,n,r){"use strict";r.d(n,{Bx:function(){return c},PF:function(){return o},PQ:function(){return f},ZG:function(){return i},gF:function(){return a},x4:function(){return s},z2:function(){return u}});var t=r(3084),s=(r(3997),function(e){return t.Z.post("/user/login",e)}),u=function(e){return t.Z.post("/user/signup",e)},o=function(e){return t.Z.put("/user/like/"+e,{})},i=function(e){return t.Z.put("/user/unlike/"+e,{})},a=function(e){return t.Z.post("user/forgot-password",e)},c=function(e,n){return t.Z.get("/user/reset-password/"+e+"/"+n)},f=function(e,n,r){return t.Z.post("/user/reset-password/"+e+"/"+n,r)}},3084:function(e,n,r){"use strict";var t=r(9669),s=r.n(t)().create({baseURL:"https://backend.gtrans.kz"});n.Z=s},6175:function(e,n,r){"use strict";r.r(n);var t=r(5893),s=r(7294),u=r(6902),o=r(1163),i=r(3448),a=r(9636),c=r(2688),f=r(1577),d=r(939),p=r.n(d);n.default=function(){var e=(0,o.useRouter)(),n=e.query,r=n.id,d=n.token,l=(0,s.useState)(!1),m=l[0],_=l[1],h=(0,s.useState)(""),Z=h[0],g=h[1],w=(0,s.useState)(""),v=w[0],x=w[1];(0,s.useEffect)((function(){e.isReady&&(0,u.Bx)(r,d).then((function(e){200!==e.status?i.Z.error({message:"\u041e\u0448\u0438\u0431\u043a\u0430",description:"\u0412\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u043f\u0440\u043e\u0448\u043b\u043e!"}):_(!0)}))}),[e.isReady]);return(0,t.jsx)("div",{className:p().wrapper,children:m&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:p().title,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),(0,t.jsxs)(a.Z,{name:"register",className:p().form,onFinish:function(){var n={password:Z};(0,u.PQ)(r,d,n).then((function(n){n.status<400&&(i.Z.success({message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043c\u0435\u043d\u044f\u043b\u0441\u044f"}),e.push("/login"))})).catch((function(e){i.Z.error({message:e.response.data.message})}))},children:[(0,t.jsx)(a.Z.Item,{name:"password",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:(0,t.jsx)(c.Z.Password,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:Z,onChange:function(e){return g(e.target.value)}})}),(0,t.jsx)(a.Z.Item,{name:"confirm",dependencies:["password"],rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c!"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return r&&n("password")!==r?Promise.reject(new Error("\u0414\u0432\u0430 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0432\u0430\u043c\u0438 \u043f\u0430\u0440\u043e\u043b\u044f \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!")):Promise.resolve()}}}],children:(0,t.jsx)(c.Z.Password,{placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",value:v,onChange:function(e){return x(e.target.value)}})}),(0,t.jsx)(a.Z.Item,{className:p().button,children:(0,t.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})})]})]})})}},939:function(e){e.exports={title:"Reset_title__f_D9X",form:"Reset_form__5ZXHH",button:"Reset_button__89pHt",wrapper:"Reset_wrapper__nQomp"}},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[222,156,997,636,774,888,179],(function(){return n=8223,e(e.s=n);var n}));var n=e.O();_N_E=n}]);