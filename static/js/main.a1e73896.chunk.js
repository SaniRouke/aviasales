(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{137:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"setLoading",(function(){return C})),r.d(n,"setProgress",(function(){return y})),r.d(n,"setError",(function(){return L})),r.d(n,"setData",(function(){return w})),r.d(n,"sortCheapest",(function(){return x})),r.d(n,"sortFastest",(function(){return A})),r.d(n,"setCheckedList",(function(){return D})),r.d(n,"setCheckedAll",(function(){return R}));var a=r(0),c=r.n(a),s=r(26),i=r.n(s),o=(r(76),r(4)),u=r(5),l=r(54),f=r(19),d=r(24),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{checkedList:[],checkAll:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET__CHECKED__LIST":return Object(d.a)(Object(d.a)({},e),{},{checkedList:t.list});case"SET__CHECKED__ALL":return Object(d.a)(Object(d.a)({},e),{},{checkAll:t.checked});default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cheapest",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT__CHEAPEST":return"cheapest";case"SORT__FASTEST":return"fastest";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET__DATA":return[].concat(Object(f.a)(e),Object(f.a)(t.tickets));default:return e}},E=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET__LOADING":return t.isLoading;default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET__PROGRESS":return t.progress;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET__ERROR":return t.error;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{isLoading:E(e.isLoading,t),progress:v(e.progress,t),error:_(e.error,t),data:p(e.data,t),sort:h(e.sort,t),filter:m(e.filter,t)}},g=Object(u.c)(b,Object(u.a)(l.a)),k=(r(82),r(83),r(141)),O=r(14),j=r.n(O),N=r(21),S=function(){var e=Object(N.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://front-test.beta.aviasales.ru/search");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(N.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(t));case 2:if((r=e.sent).ok){e.next=5;break}return e.abrupt("return",[]);case 5:return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){return{type:"SET__LOADING",isLoading:e}},y=function(e){return{type:"SET__PROGRESS",progress:e}},L=function(e){return{type:"SET__ERROR",error:e}},w=function(){return function(){var e=Object(N.a)(j.a.mark((function e(t){var r,n,a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0)),e.prev=1,e.next=4,S();case 4:r=e.sent,e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(1),t(L(e.t0)),t(y(100)),t(C(!1)),e.abrupt("return");case 13:n=30,a=1;case 15:if(!(a<=n)){e.next=38;break}return e.prev=16,e.next=19,T(r.searchId);case 19:if(c=e.sent,s=c.tickets,!c.stop){e.next=25;break}return t(y(100)),e.abrupt("break",38);case 25:t({type:"SET__DATA",tickets:s||[]}),t(y(100*a/n)),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(16),t(L(e.t1));case 32:return e.prev=32,t(C(!1)),e.finish(32);case 35:a++,e.next=15;break;case 38:case"end":return e.stop()}}),e,null,[[1,7],[16,29,32,35]])})));return function(t){return e.apply(this,arguments)}}()},x=function(){return{type:"SORT__CHEAPEST"}},A=function(){return{type:"SORT__FASTEST"}},D=function(e){return{type:"SET__CHECKED__LIST",list:e}},R=function(e){return{type:"SET__CHECKED__ALL",checked:e}},F=r(55),I=r.n(F),H=r(69),G=r(56),P=r.n(G),K=r(57),M=r.n(K),Z=r(36);function z(e){var t,r=e.direction,n=r.origin,a=r.destination,s=r.date,i=r.stops,o=r.duration,u=P.a.asString("hh\u0447 mm\u043c",new Date(0,0,1,0,o)),l=Object(Z.formatToTimeZone)(new Date(s),"hh:mm",{timeZone:"Europe/Moscow"}),f=Object(Z.formatToTimeZone)(M.a.add(new Date(s),o,"minutes"),"hh:mm",{timeZone:"Europe/Moscow"}),d=i.join(", "),m=0===(t=i.length)?"\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===t?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"".concat(t," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438");return c.a.createElement("div",{className:"ticket__flight"},c.a.createElement("div",{className:"ticket__info"},c.a.createElement("p",{className:"font--grey-title"},"".concat(n," - ").concat(a)),c.a.createElement("p",null,"".concat(l," \u2013 ").concat(f))),c.a.createElement("div",{className:"ticket__info"},c.a.createElement("p",{className:"font--grey-title"},"\u0412 \u043f\u0443\u0442\u0438"),c.a.createElement("p",null,u)),c.a.createElement("div",{className:"ticket__info"},c.a.createElement("p",{className:"font--grey-title"},m),c.a.createElement("p",null,d)))}function J(e){var t=e.item,r=t.price,n=t.carrier,a=t.segments,s=Object(H.a)(a,2),i=s[0],o=s[1],u="".concat(r.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ")," \u0420");return c.a.createElement("div",{className:"ticket"},c.a.createElement("div",{className:"ticket__header"},c.a.createElement("h4",{className:"ticket__title font--blue"},u),c.a.createElement("div",{className:"ticket__logo"},c.a.createElement("img",{src:"".concat("//pics.avs.io/99/36/").concat(n,".png"),alt:"logo ".concat(n),className:"src"}))),c.a.createElement(z,{direction:i}),c.a.createElement(z,{direction:o}))}function $(){return c.a.createElement("div",{className:"alert alert--empty"},"\u0420\u0435\u0439\u0441\u043e\u0432, \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u043e\u0434 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b, \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")}function B(){return c.a.createElement("div",{className:"alert alert--error"},"Oshibka")}var W=function(e){var t=e.error,r=e.data;return t?c.a.createElement(B,null):0===r.length?c.a.createElement($,null):r.filter((function(e,t){return t<5})).map((function(e){return c.a.createElement("li",{key:I()()},c.a.createElement(J,{item:e}))}))},q=Object(o.b)((function(e){return{error:e.error}}))(W);W.defaultProps={error:null};var Q=r(140),U=Q.a.Group;var V=Object(o.b)((function(e){return{stateFilter:e.filter}}),(function(e){var t=Object(u.b)(n,e);return{setCheckedList:t.setCheckedList,setCheckedAll:t.setCheckedAll}}))((function(e){var t=e.filters,r=e.stateFilter,n=e.setCheckedList,s=e.setCheckedAll,i=t.allFilters,o=t.defaultFilters,u=r.checkedList,l=r.checkAll;return Object(a.useEffect)((function(){n(o),s(o.length===i.length)}),[n,s,i,o]),c.a.createElement("aside",{className:"sidebar"},c.a.createElement("h4",{className:"sidebar__header"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),c.a.createElement(Q.a,{className:"sidebar__Checkbox-all",onChange:function(e){var t=e.target.checked;s(t),n(t?i:[])},checked:l},"\u0412\u0441\u0435"),c.a.createElement(U,{className:"sidebar__CheckboxGroup",options:i,value:u,onChange:function(e){s(e.length===i.length),n(e)}}))})),X=r(1),Y=r.n(X);var ee=Object(o.b)((function(e){return{sort:e.sort}}),(function(e){var t=Object(u.b)(n,e);return{sortCheapest:t.sortCheapest,sortFastest:t.sortFastest}}))((function(e){var t=e.sort,r=e.sortCheapest,n=e.sortFastest,a=Y()({sort__btn:!0,"sort__btn--cheapest":!0,"sort__btn--active":"cheapest"===t}),s=Y()({sort__btn:!0,"sort__btn--fastest":!0,"sort__btn--active":"fastest"===t});return c.a.createElement("div",{className:"sort"},c.a.createElement("button",{type:"button",className:a,onClick:r},"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"),c.a.createElement("button",{type:"button",className:s,onClick:n},"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"))})),te=(r(110),r(139));var re=Object(o.b)((function(e){return{progress:e.progress}}))((function(e){var t=e.progress;return c.a.createElement(te.a,{style:{position:"fixed",top:0,left:0,maxWidth:"100wv",lineHeight:0,zIndex:1e3},percent:t,showInfo:!1,strokeColor:{"0%":"#108ee9","100%":"#87d068"}})})),ne=["\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438","3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"],ae=["\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438","3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"];var ce=Object(o.b)((function(e){return{searchId:e.searchId,isLoading:e.isLoading,data:e.data,filter:e.filter,sort:e.sort}}),(function(e){return{setData:Object(u.b)(n,e).setData}}))((function(e){var t=e.data,r=e.isLoading,n=e.filter,s=e.setData,i=e.sort,o=function(e,t,r){return function(n){return t.includes(r[n])?e.filter((function(e){return e.segments[0].stops.length===n})):[]}}(t,n.checkedList,ne),u=Object(a.useMemo)((function(){return ne.reduce((function(e,t,r){return[].concat(Object(f.a)(e),Object(f.a)(o(r)))}),[])}),[o]),l=Object(a.useMemo)((function(){return"fastest"===i?u.sort((function(e,t){return e.segments[0].duration>t.segments[0].duration?1:-1})):u.sort((function(e,t){return e.price>t.price?1:-1}))}),[u,i]);Object(a.useEffect)((function(){s()}),[s]);var d=c.a.createElement("div",{className:"skeleton"});return c.a.createElement("div",{className:"App"},c.a.createElement(re,null),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logo"})),c.a.createElement("main",{className:"content"},c.a.createElement(V,{filters:{allFilters:ne,defaultFilters:ae}}),c.a.createElement("section",{className:"ticket-list-wrapper"},c.a.createElement(ee,null),c.a.createElement(k.a,{spinning:r,size:"large"},c.a.createElement("ul",{className:"ticket-list"},r?d:c.a.createElement(q,{data:l}))))))}));i.a.render(c.a.createElement(o.a,{store:g},c.a.createElement(ce,null)),document.getElementById("root"))},71:function(e,t,r){e.exports=r(137)},76:function(e,t,r){},82:function(e,t,r){}},[[71,1,2]]]);
//# sourceMappingURL=main.a1e73896.chunk.js.map