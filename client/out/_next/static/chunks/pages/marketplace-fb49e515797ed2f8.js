(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{2694:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return r(6499)}])},3084:function(e,t,r){"use strict";var n=r(9669),i=r.n(n)().create({baseURL:"https://backend.gtrans.kz/"});t.Z=i},7570:function(e,t,r){"use strict";r.d(t,{AU:function(){return a},B:function(){return p},Cs:function(){return x},ED:function(){return u},HG:function(){return f},LV:function(){return s},R2:function(){return m},TX:function(){return _},Xz:function(){return v},dW:function(){return o},ip:function(){return c},s_:function(){return j},t9:function(){return h},vk:function(){return d}});var n=r(7568),i=r(655),l=r(3084),a=function(){var e=(0,n.Z)((function(){var e,t=arguments;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:"",[4,l.Z.get("/orders"+e)];case 1:return[2,r.sent()]}}))}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.post("/orders",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)((function(e,t){return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,l.Z.put("/orders/add/request/"+t,e)];case 1:return[2,r.sent()]}}))}));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)((function(e,t){return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,l.Z.put("/orders/status/request/"+t,e)];case 1:return[2,r.sent()]}}))}));return function(t,r){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.put("/orders/tracker/accept/china",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.put("/orders/tracker/accept",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.put("/orders/tracker/return",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.get("/orders/tracker/"+e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.get("/orders/account/"+e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.get("/orders/"+e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)((function(e,t){return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return[4,l.Z.put("/orders/price/"+e,t)];case 1:return[2,r.sent()]}}))}));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.put("/orders/tracker/change",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)((function(e){return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,l.Z.put("/orders/",e)];case 1:return[2,t.sent()]}}))}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,n.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,l.Z.get("/orders/details")];case 1:return[2,e.sent()]}}))}));return function(){return e.apply(this,arguments)}}()},6499:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(9815),i=r(5893),l=r(7294),a=r(7570),s=r(1382),u=r(2071),o=r(2688),c=r(7909),d=r.n(c),_=function(e){var t=e.type,r=e.deliveryType,n=e.totalWeight,a=e.len,s=e.width,c=e.height,_=e.volume,v=e.count,m=(e.price,(0,l.useState)(!1)),f=m[0],h=m[1],p=(0,l.useState)(""),x=p[0],j=p[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(u.Z,{open:f,footer:[],className:"price__modal",onCancel:function(){return h(!1)},children:[(0,i.jsx)("div",{className:d().modal__title,children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0446\u0435\u043d\u0443"}),(0,i.jsx)("div",{className:d().modal__text,children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0446\u0435\u043d\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0443"}),(0,i.jsx)("div",{className:d().modal__input,children:(0,i.jsx)(o.Z,{type:"text",placeholder:"\u0426\u0435\u043d\u0430",value:x,onChange:function(e){return t=e.target.value,void(/^\d*$/.test(t)&&j(t));var t}})}),(0,i.jsx)("div",{className:d().button,children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c"})]}),(0,i.jsxs)("div",{className:d().order,children:[(0,i.jsxs)("div",{className:d().order__items,children:[(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430"}),(0,i.jsx)("div",{className:d().order__item_value,children:t})]}),(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u0422\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,i.jsx)("div",{className:d().order__item_value,children:r})]}),(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u0412\u0435\u0441 (\u043a\u0433)"}),(0,i.jsxs)("div",{className:d().order__item_value,children:[n," \u043a\u0433"]})]})]}),(0,i.jsxs)("div",{className:d().order__items,children:[(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u0414\u043b\u0438\u043d\u0430 (\u0441\u043c)"}),(0,i.jsxs)("div",{className:d().order__item_value,children:[a," \u0441\u043c"]})]}),(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u0428\u0438\u0440\u0438\u043d\u0430  (\u0441\u043c)"}),(0,i.jsxs)("div",{className:d().order__item_value,children:[s," \u0441\u043c"]})]}),(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u0412\u044b\u0441\u043e\u0442\u0430  (\u0441\u043c)"}),(0,i.jsxs)("div",{className:d().order__item_value,children:[c," \u0441\u043c"]})]})]}),(0,i.jsxs)("div",{className:d().order__items,children:[(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u041e\u0431\u044a\u0435\u043c (\u043c3)"}),(0,i.jsxs)("div",{className:d().order__item_value,children:[_," \u043c3"]})]}),(0,i.jsxs)("div",{className:d().order__item,children:[(0,i.jsx)("div",{className:d().order__item_title,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),(0,i.jsx)("div",{className:d().order__item_value,children:v})]})]}),(0,i.jsx)("div",{className:d().button,onClick:function(){h(!0)},children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0446\u0435\u043d\u0443"})]})]})},v=r(3763),m=r.n(v),f=r(4924),h=r(5696),p=r.n(h),x=r(2808),j=r(2918),N=function(e){var t=e.details,r=e.params,n=e.paramsSelectHandler,l=e.paramsSliderHandler,a=e.filtersSaveHandler,s=function(e,t){var n,i;return null===(n=r.filter((function(t){return(null===t||void 0===t?void 0:t.title)===e}))[0])||void 0===n||null===(i=n.items)||void 0===i?void 0:i.includes(t)},u=function(e){var t=null===r||void 0===r?void 0:r.filter((function(t){return(null===t||void 0===t?void 0:t.title)===e}))[0];return[null===t||void 0===t?void 0:t.min,null===t||void 0===t?void 0:t.max]};return(0,i.jsxs)("div",{className:p().filters,children:[null===t||void 0===t?void 0:t.map((function(e){var t,r,a,o,c,d,_,v;return(0,i.jsxs)("div",{className:p().filter,children:[(0,i.jsx)("div",{className:p().title,children:null===e||void 0===e?void 0:e.title}),(0,i.jsx)("div",{children:Array.isArray(null===e||void 0===e?void 0:e.items)?null===e||void 0===e||null===(t=e.items)||void 0===t?void 0:t.map((function(t,r){return(0,i.jsxs)("div",{className:p().item,children:[(0,i.jsx)("div",{className:p().item__checkbox,children:(0,i.jsx)(x.Z,{id:t,checked:s(null===e||void 0===e?void 0:e.title,t),onChange:function(){return n(null===e||void 0===e?void 0:e.title,t)}})}),(0,i.jsx)("div",{className:p().item__text,children:(0,i.jsx)("label",{htmlFor:t,children:t})})]})})):(0,i.jsx)(j.Z,{range:!0,value:u(null===e||void 0===e?void 0:e.title),marks:(v={},(0,f.Z)(v,null===e||void 0===e||null===(r=e.items)||void 0===r?void 0:r.min,null===e||void 0===e||null===(a=e.items)||void 0===a?void 0:a.min),(0,f.Z)(v,null===e||void 0===e||null===(o=e.items)||void 0===o?void 0:o.max,null===e||void 0===e||null===(c=e.items)||void 0===c?void 0:c.max),v),min:null===e||void 0===e||null===(d=e.items)||void 0===d?void 0:d.min,max:null===e||void 0===e||null===(_=e.items)||void 0===_?void 0:_.max,className:p().slider,onChange:function(t){return l(null===e||void 0===e?void 0:e.title,t)}})})]})})),(0,i.jsx)("div",{className:p().button,onClick:a,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})},g=r(9669),k=r.n(g),Z=function(){var e=(0,l.useState)(),t=e[0],r=e[1],u=(0,l.useState)(),o=u[0],c=u[1],d=(0,l.useState)(!1),v=d[0],f=d[1],h=(0,l.useState)([{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430",name:"type",items:[]},{title:"\u0422\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",name:"deliveryType",items:[]},{title:"\u0412\u0435\u0441",name:"weight",min:0,max:0},{title:"\u041e\u0431\u044a\u0435\u043c",name:"volume",min:0,max:0}]),p=h[0],x=h[1];(0,l.useEffect)((function(){f(!0),k().all([(0,a.AU)().then((function(e){r(e.data)})),(0,a.s_)().then((function(e){c(e.data),x(p.map((function(t){var r,n,i,l,a,s;"\u0412\u0435\u0441"!==(null===t||void 0===t?void 0:t.title)&&"\u041e\u0431\u044a\u0435\u043c"!==(null===t||void 0===t?void 0:t.title)||(t.min=null===(n=null===(r=e.data)||void 0===r?void 0:r.filter((function(e){return e.title===(null===t||void 0===t?void 0:t.title)}))[0])||void 0===n||null===(i=n.items)||void 0===i?void 0:i.min,t.max=null===(a=null===(l=e.data)||void 0===l?void 0:l.filter((function(e){return e.title===(null===t||void 0===t?void 0:t.title)}))[0])||void 0===a||null===(s=a.items)||void 0===s?void 0:s.max);return t})))}))]).then(k().spread((function(e,t){f(!1)})))}),[]);return(0,i.jsxs)("div",{className:m().marketplace,children:[v&&(0,i.jsx)("div",{className:m().loading,children:(0,i.jsx)(s.Z,{size:"large"})}),(0,i.jsx)("div",{className:m().marketplace__filters,children:(0,i.jsx)(N,{details:o,params:p,paramsSelectHandler:function(e,t){x(p.map((function(r){var i;e===r.title&&((null===r||void 0===r||null===(i=r.items)||void 0===i?void 0:i.includes(t))?r.items=r.items.filter((function(e){return e!==t})):r.items=(0,n.Z)(r.items).concat([t]));return r})))},paramsSliderHandler:function(e,t){x(p.map((function(r){return r.title===e&&(r.min=t[0],r.max=t[1]),r})))},filtersSaveHandler:function(){f(!0);var e="?";p&&p.map((function(t){if("type"===t.name||"deliveryType"===t.name){var r=t.name+"=";t.items.length>0&&t.items.map((function(e,n){r+=e+(n!==t.items.length-1?",":"")})),e+=r+"&"}else if("weight"===t.name){var n=p.filter((function(e){return"weight"===e.name}))[0];e+="minWeight=".concat(null===n||void 0===n?void 0:n.min,"&maxWeight=").concat(null===n||void 0===n?void 0:n.max,"&")}else if("volume"===t.name){var i=p.filter((function(e){return"volume"===e.name}))[0];e+="minVolume=".concat(null===i||void 0===i?void 0:i.min,"&maxVolume=").concat(null===i||void 0===i?void 0:i.max)}})),(0,a.AU)(e).then((function(e){r(e.data),f(!1)}))}})}),(0,i.jsx)("div",{className:m().marketplace__wrapper,children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(_,{type:null===e||void 0===e?void 0:e.type,deliveryType:null===e||void 0===e?void 0:e.deliveryType,totalWeight:null===e||void 0===e?void 0:e.totalWeight,len:null===e||void 0===e?void 0:e.len,width:null===e||void 0===e?void 0:e.width,height:null===e||void 0===e?void 0:e.height,volume:null===e||void 0===e?void 0:e.volume,count:null===e||void 0===e?void 0:e.count,price:null===e||void 0===e?void 0:e.price})}))})]})}},5696:function(e){e.exports={filters:"MarketplaceFilters_filters__AHy4V",title:"MarketplaceFilters_title__Qjsqh",item:"MarketplaceFilters_item__hsbkJ",filter:"MarketplaceFilters_filter__dKqTp",slider:"MarketplaceFilters_slider__VpkVx",button:"MarketplaceFilters_button__seiyk"}},7909:function(e){e.exports={order:"Order_order__qzZiy",order__items:"Order_order__items__VVXWo",order__item:"Order_order__item__3jRwd",order__item_title:"Order_order__item_title___itRu",order__item_value:"Order_order__item_value__Xsvg6",button:"Order_button__GCEvx",modal__title:"Order_modal__title__Uoekm",modal__text:"Order_modal__text__2zs2L",modal__input:"Order_modal__input__vZsPu"}},3763:function(e){e.exports={marketplace__wrapper:"Marketplace_marketplace__wrapper__wK6zD",marketplace:"Marketplace_marketplace__0CSed",marketplace__filters:"Marketplace_marketplace__filters__eYcHM",loading:"Marketplace_loading__0hVR_"}}},function(e){e.O(0,[836,688,416,369,546,170,774,888,179],(function(){return t=2694,e(e.s=t);var t}));var t=e.O();_N_E=t}]);