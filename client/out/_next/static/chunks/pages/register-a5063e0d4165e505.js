(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{7572:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return i(4650)}])},6902:function(e,n,i){"use strict";i.d(n,{AW:function(){return _},Bx:function(){return c},GA:function(){return m},PF:function(){return a},PQ:function(){return l},ZG:function(){return u},gF:function(){return o},x4:function(){return r},z2:function(){return s}});var t=i(3084),r=(i(3997),function(e){return t.Z.post("/user/login",e)}),s=function(e){return t.Z.post("/user/signup",e)},a=function(e){return t.Z.put("/user/like/"+e,{})},u=function(e){return t.Z.put("/user/unlike/"+e,{})},o=function(e){return t.Z.post("user/forgot-password",e)},c=function(e,n){return t.Z.get("/user/reset-password/"+e+"/"+n)},l=function(e,n,i){return t.Z.post("/user/reset-password/"+e+"/"+n,i)},_=function(){return t.Z.get("/user/all")},m=function(e){return t.Z.get("/user/"+e)}},3084:function(e,n,i){"use strict";var t=i(9669),r=i.n(t)().create({baseURL:"https://backend.gtrans.kz/"});n.Z=r},4650:function(e,n,i){"use strict";i.r(n);var t=i(1799),r=i(9396),s=i(5893),a=i(1369),u=i(3448),o=i(9636),c=i(2688),l=i(8542),_=i(1664),m=i.n(_),d=i(7294),h=i(6902),v=i(1163),f=i(1484),x=i.n(f),g=i(1612);n.default=function(){var e=(0,d.useState)(),n=e[0],i=e[1],_=(0,v.useRouter)(),f=a.Z.Option;console.log(n);var p=(0,s.jsx)(o.Z.Item,{name:"prefix",noStyle:!0,children:(0,s.jsx)(a.Z,{style:{width:70},defaultValue:"7",children:(0,s.jsx)(f,{value:"7",children:"+7"})})});return(0,s.jsx)("div",{className:"".concat(x().register," register"),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:x().wrapper,children:[(0,s.jsxs)("div",{className:x().instruction__mobile,children:[(0,s.jsx)("div",{className:"".concat(x().instruction__title," ").concat(x().instruction__title_mobile),children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"}),(0,s.jsxs)("div",{className:x().instruction__items,children:[(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"1"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u0430 \u0432 \u041a\u0438\u0442\u0430\u0435"})]}),(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"2"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u041f\u043e\u043a\u0443\u043f\u0430\u0439\u0442\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0432 \u041a\u0438\u0442\u0430\u0435"})]}),(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"3"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u0417\u0430\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u044b\u043b\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 15-20 \u0434\u043d\u0435\u0439 \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435"})]})]})]}),(0,s.jsxs)("div",{className:x().form,children:[(0,s.jsx)("div",{className:x().form__title,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),(0,s.jsxs)(o.Z,{name:"basic",className:"ms-auto me-auto input",labelCol:{span:6},initialValues:{remember:!0},onFinish:function(e){var i={email:n.email,name:null===n||void 0===n?void 0:n.name,surname:null===n||void 0===n?void 0:n.surname,dateOfBirth:null===n||void 0===n?void 0:n.dateOfBirth,password:n.password,companyName:n.companyName,phoneNumber:"+7"+n.phoneNumber};(0,h.z2)(i).then((function(e){u.Z.success({message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0430\u0441\u044c"}),console.log(e.data),localStorage.setItem("user",JSON.stringify(e.data)),_.push("/request")})).catch((function(e){return u.Z.error({message:e.response.data.error})}))},onFinishFailed:function(e){u.Z.error({message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"})},autoComplete:"off",children:[(0,s.jsx)(o.Z.Item,{name:"email",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b!"}],children:(0,s.jsx)(c.Z,{onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{email:e.target.value}))},value:null===n||void 0===n?void 0:n.email,placeholder:"\u0412\u0430\u0448 e-mail *"})}),(0,s.jsx)(o.Z.Item,{name:"name",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f!"}],children:(0,s.jsx)(c.Z,{onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{name:e.target.value}))},value:null===n||void 0===n?void 0:n.name,placeholder:"\u0412\u0430\u0448e \u0438\u043c\u044f *"})}),(0,s.jsx)(o.Z.Item,{name:"surname",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u0444\u0430\u043c\u0438\u043b\u0438\u044e!"}],children:(0,s.jsx)(c.Z,{onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{surname:e.target.value}))},value:null===n||void 0===n?void 0:n.surname,placeholder:"\u0412\u0430\u0448e \u0444\u0430\u043c\u0438\u043b\u0438\u044f *"})}),(0,s.jsx)(o.Z.Item,{name:"dateOfBirth",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f!"}],children:(0,s.jsx)(l.Z,{locale:g.Z,onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{dateOfBirth:e}))},value:null===n||void 0===n?void 0:n.dateOfBirth,className:"w-100 datepicker",placeholder:"\u0412\u0430\u0448\u0430 \u0434\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f *"})}),(0,s.jsx)(o.Z.Item,{name:"password",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"}],children:(0,s.jsx)(c.Z,{type:"password",placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c *",onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{password:e.target.value}))},value:null===n||void 0===n?void 0:n.password})}),(0,s.jsx)(o.Z.Item,{name:"confirm",dependencies:["password"],rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"},function(e){var n=e.getFieldValue;return{validator:function(e,i){return i&&n("password")!==i?Promise.reject(new Error("\u0414\u0432\u0430 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0432\u0430\u043c\u0438 \u043f\u0430\u0440\u043e\u043b\u044f \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!")):Promise.resolve()}}}],children:(0,s.jsx)(c.Z,{type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c *",onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{confirmPassword:e.target.value}))},value:null===n||void 0===n?void 0:n.confirmPassword})}),(0,s.jsx)(o.Z.Item,{name:"phoneNumber",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435!"}],children:(0,s.jsx)(c.Z,{addonBefore:p,style:{width:"100%"},onChange:function(e){return i((0,r.Z)((0,t.Z)({},n),{phoneNumber:e.target.value}))},value:null===n||void 0===n?void 0:n.phoneNumber,placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",className:"number__input"})}),(0,s.jsxs)("div",{className:"d-flex align-items-center justify-content-center flex-column justify-content-md-start flex-md-row",style:{marginTop:33},children:[(0,s.jsx)("div",{className:x().register__button,children:(0,s.jsx)("button",{htmlType:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})}),(0,s.jsx)("div",{className:x().login__link,children:(0,s.jsx)(m(),{href:"/login",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})})]})]})]}),(0,s.jsxs)("div",{className:x().instruction,children:[(0,s.jsx)("div",{className:x().instruction__title,children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"}),(0,s.jsxs)("div",{className:x().instruction__items,children:[(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"1"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u0430 \u0432 \u041a\u0438\u0442\u0430\u0435"})]}),(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"2"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u041f\u043e\u043a\u0443\u043f\u0430\u0439\u0442\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0432 \u041a\u0438\u0442\u0430\u0435"})]}),(0,s.jsxs)("div",{className:x().instruction__item,children:[(0,s.jsx)("div",{className:x().instruction__item_number,children:"3"}),(0,s.jsx)("div",{className:x().instruction__item_text,children:"\u0417\u0430\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u044b\u043b\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 15-20 \u0434\u043d\u0435\u0439 \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435"})]})]})]})]})})})}},1484:function(e){e.exports={register:"Register_register__Y9Kyt",wrapper:"Register_wrapper__HccLh",form__title:"Register_form__title__RilrJ",form:"Register_form__3LgJd",instruction:"Register_instruction__RRQVn",instruction__title:"Register_instruction__title__rdaaL",instruction__items:"Register_instruction__items__Gbh1d",instruction__item:"Register_instruction__item__GmTRI",instruction__item_number:"Register_instruction__item_number__imG6D",instruction__item_text:"Register_instruction__item_text__EUYGD",register__button:"Register_register__button__5tiVj",login__link:"Register_login__link___v7v_",instruction__mobile:"Register_instruction__mobile__wbyYW",instruction__title_mobile:"Register_instruction__title_mobile__kM3hH"}}},function(e){e.O(0,[885,836,688,513,997,636,770,117,774,888,179],(function(){return n=7572,e(e.s=n);var n}));var n=e.O();_N_E=n}]);