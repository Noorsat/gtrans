(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{5172:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot",function(){return t(3606)}])},6902:function(e,n,t){"use strict";t.d(n,{AW:function(){return l},Bx:function(){return c},GA:function(){return p},PF:function(){return o},PQ:function(){return f},ZG:function(){return i},gF:function(){return a},x4:function(){return u},z2:function(){return s}});var r=t(3084),u=(t(3997),function(e){return r.Z.post("/user/login",e)}),s=function(e){return r.Z.post("/user/signup",e)},o=function(e){return r.Z.put("/user/like/"+e,{})},i=function(e){return r.Z.put("/user/unlike/"+e,{})},a=function(e){return r.Z.post("user/forgot-password",e)},c=function(e,n){return r.Z.get("/user/reset-password/"+e+"/"+n)},f=function(e,n,t){return r.Z.post("/user/reset-password/"+e+"/"+n,t)},l=function(){return r.Z.get("/user/all")},p=function(e){return r.Z.get("/user/"+e)}},3084:function(e,n,t){"use strict";var r=t(9669),u=t.n(r)().create({baseURL:"https://gtrans-ffxd.onrender.com/"});n.Z=u},3606:function(e,n,t){"use strict";t.r(n);var r=t(5893),u=t(6399),s=t.n(u),o=t(3448),i=t(9636),a=t(2688),c=t(1577),f=t(7294),l=t(6902);n.default=function(){var e=(0,f.useState)(),n=e[0],t=e[1],u={required:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f!",types:{email:"".concat(n," \u043d\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b!")}};return(0,r.jsxs)("div",{className:s().wrapper,children:[(0,r.jsx)("div",{className:s().title,children:"\u0414\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u043d\u0438\u0436\u0435"}),(0,r.jsxs)(i.Z,{name:"basic",validateMessages:u,initialValues:{remember:!0},onFinish:function(){var e={email:n};(0,l.gF)(e).then((function(e){200===e.status&&o.Z.success({message:"\u041c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438\u0435 \u0434\u043b\u044f \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f \u0432\u0430\u043c \u0432 \u043f\u043e\u0447\u0442\u0443!"})})).catch((function(e){o.Z.error({message:e.response.data.message})}))},autoComplete:"off",className:s().form,children:[(0,r.jsx)(i.Z.Item,{name:["Email"],required:!0,rules:[{required:!0,type:"email"}],children:(0,r.jsx)(a.Z,{placeholder:"Email",onChange:function(e){return t(e.target.value)},value:n})}),(0,r.jsx)(i.Z.Item,{className:s().button,children:(0,r.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"})})]})]})}},6399:function(e){e.exports={title:"Forgot_title__x7Q1c",form:"Forgot_form__6XYAW",button:"Forgot_button__pVi_1",wrapper:"Forgot_wrapper__fEk54"}}},function(e){e.O(0,[836,688,513,997,636,774,888,179],(function(){return n=5172,e(e.s=n);var n}));var n=e.O();_N_E=n}]);