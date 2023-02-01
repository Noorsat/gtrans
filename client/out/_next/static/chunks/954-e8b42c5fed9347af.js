"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{4243:function(e,n,t){t.d(n,{Z:function(){return K}});var r=t(7462),a=t(1413),i=t(7685),s=t(5987),c=t(7294),l=t(4184),o=t.n(l),E=t(8555),u=t(8410),N=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],f=void 0;function d(e,n){var t=e.prefixCls,i=e.invalidate,l=e.item,u=e.renderItem,d=e.responsive,m=e.responsiveDisabled,v=e.registerSize,S=e.itemKey,_=e.className,I=e.style,M=e.children,R=e.display,A=e.order,C=e.component,T=void 0===C?"div":C,U=(0,s.Z)(e,N),O=d&&!R;function p(e){v(S,e)}c.useEffect((function(){return function(){p(null)}}),[]);var Z,y=u&&l!==f?u(l):M;i||(Z={opacity:O?0:1,height:O?0:f,overflowY:O?"hidden":f,order:d?A:f,pointerEvents:O?"none":f,position:O?"absolute":f});var P={};O&&(P["aria-hidden"]=!0);var L=c.createElement(T,(0,r.Z)({className:o()(!i&&t,_),style:(0,a.Z)((0,a.Z)({},Z),I)},P,U,{ref:n}),y);return d&&(L=c.createElement(E.Z,{onResize:function(e){p(e.offsetWidth)},disabled:m},L)),L}var m=c.forwardRef(d);m.displayName="Item";var v=m,S=t(5164),_=t(470);var I=["component"],M=["className"],R=["className"],A=function(e,n){var t=c.useContext(O);if(!t){var a=e.component,i=void 0===a?"div":a,l=(0,s.Z)(e,I);return c.createElement(i,(0,r.Z)({},l,{ref:n}))}var E=t.className,u=(0,s.Z)(t,M),N=e.className,f=(0,s.Z)(e,R);return c.createElement(O.Provider,{value:null},c.createElement(v,(0,r.Z)({ref:n,className:o()(E,N)},u,f)))},C=c.forwardRef(A);C.displayName="RawItem";var T=C,U=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],O=c.createContext(null),p="responsive",Z="invalidate";function y(e){return"+ ".concat(e.length," ...")}function P(e,n){var t=e.prefixCls,l=void 0===t?"rc-overflow":t,N=e.data,f=void 0===N?[]:N,d=e.renderItem,m=e.renderRawItem,I=e.itemKey,M=e.itemWidth,R=void 0===M?10:M,A=e.ssr,C=e.style,T=e.className,P=e.maxCount,L=e.renderRest,K=e.renderRawRest,h=e.suffix,F=e.component,g=void 0===F?"div":F,b=e.itemComponent,H=e.onVisibleChange,D=(0,s.Z)(e,U),w=function(){var e=(0,_.Z)({}),n=(0,i.Z)(e,2)[1],t=(0,c.useRef)([]),r=0,a=0;return function(e){var i=r;return r+=1,t.current.length<i+1&&(t.current[i]=e),[t.current[i],function(e){t.current[i]="function"===typeof e?e(t.current[i]):e,S.Z.cancel(a),a=(0,S.Z)((function(){n({},!0)}))}]}}(),W="full"===A,x=w(null),G=(0,i.Z)(x,2),k=G[0],Q=G[1],V=k||0,B=w(new Map),z=(0,i.Z)(B,2),Y=z[0],X=z[1],J=w(0),j=(0,i.Z)(J,2),q=j[0],$=j[1],ee=w(0),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],ae=w(0),ie=(0,i.Z)(ae,2),se=ie[0],ce=ie[1],le=(0,c.useState)(null),oe=(0,i.Z)(le,2),Ee=oe[0],ue=oe[1],Ne=(0,c.useState)(null),fe=(0,i.Z)(Ne,2),de=fe[0],me=fe[1],ve=c.useMemo((function(){return null===de&&W?Number.MAX_SAFE_INTEGER:de||0}),[de,k]),Se=(0,c.useState)(!1),_e=(0,i.Z)(Se,2),Ie=_e[0],Me=_e[1],Re="".concat(l,"-item"),Ae=Math.max(q,te),Ce=P===p,Te=f.length&&Ce,Ue=P===Z,Oe=Te||"number"===typeof P&&f.length>P,pe=(0,c.useMemo)((function(){var e=f;return Te?e=null===k&&W?f:f.slice(0,Math.min(f.length,V/R)):"number"===typeof P&&(e=f.slice(0,P)),e}),[f,R,k,P,Te]),Ze=(0,c.useMemo)((function(){return Te?f.slice(ve+1):f.slice(pe.length)}),[f,pe,Te,ve]),ye=(0,c.useCallback)((function(e,n){var t;return"function"===typeof I?I(e):null!==(t=I&&(null===e||void 0===e?void 0:e[I]))&&void 0!==t?t:n}),[I]),Pe=(0,c.useCallback)(d||function(e){return e},[d]);function Le(e,n,t){(de!==e||void 0!==n&&n!==Ee)&&(me(e),t||(Me(e<f.length-1),null===H||void 0===H||H(e)),void 0!==n&&ue(n))}function Ke(e,n){X((function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r}))}function he(e){return Y.get(ye(pe[e],e))}(0,u.Z)((function(){if(V&&Ae&&pe){var e=se,n=pe.length,t=n-1;if(!n)return void Le(0,null);for(var r=0;r<n;r+=1){var a=he(r);if(W&&(a=a||0),void 0===a){Le(r-1,void 0,!0);break}if(e+=a,0===t&&e<=V||r===t-1&&e+he(t)<=V){Le(t,null);break}if(e+Ae>V){Le(r-1,e-a-se+te);break}}h&&he(0)+se>V&&ue(null)}}),[V,Y,te,se,ye,pe]);var Fe=Ie&&!!Ze.length,ge={};null!==Ee&&Te&&(ge={position:"absolute",left:Ee,top:0});var be,He={prefixCls:Re,responsive:Te,component:b,invalidate:Ue},De=m?function(e,n){var t=ye(e,n);return c.createElement(O.Provider,{key:t,value:(0,a.Z)((0,a.Z)({},He),{},{order:n,item:e,itemKey:t,registerSize:Ke,display:n<=ve})},m(e,n))}:function(e,n){var t=ye(e,n);return c.createElement(v,(0,r.Z)({},He,{order:n,key:t,item:e,renderItem:Pe,itemKey:t,registerSize:Ke,display:n<=ve}))},we={order:Fe?ve:Number.MAX_SAFE_INTEGER,className:"".concat(Re,"-rest"),registerSize:function(e,n){re(n),$(te)},display:Fe};if(K)K&&(be=c.createElement(O.Provider,{value:(0,a.Z)((0,a.Z)({},He),we)},K(Ze)));else{var We=L||y;be=c.createElement(v,(0,r.Z)({},He,we),"function"===typeof We?We(Ze):We)}var xe=c.createElement(g,(0,r.Z)({className:o()(!Ue&&l,T),style:C,ref:n},D),pe.map(De),Oe?be:null,h&&c.createElement(v,(0,r.Z)({},He,{responsive:Ce,responsiveDisabled:!Te,order:ve,className:"".concat(Re,"-suffix"),registerSize:function(e,n){ce(n)},display:!0,style:ge}),h));return Ce&&(xe=c.createElement(E.Z,{onResize:function(e,n){Q(n.clientWidth)},disabled:!Te},xe)),xe}var L=c.forwardRef(P);L.displayName="Overflow",L.Item=T,L.RESPONSIVE=p,L.INVALIDATE=Z;var K=L},5105:function(e,n){var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=t.F1&&n<=t.F12)return!1;switch(n){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=t.ZERO&&e<=t.NINE)return!0;if(e>=t.NUM_ZERO&&e<=t.NUM_MULTIPLY)return!0;if(e>=t.A&&e<=t.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};n.Z=t}}]);