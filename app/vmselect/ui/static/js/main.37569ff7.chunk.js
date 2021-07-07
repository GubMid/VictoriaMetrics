(this["webpackJsonpvictoria-metrics-ui"]=this["webpackJsonpvictoria-metrics-ui"]||[]).push([[0],{338:function(e,t,n){},346:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(24),o=n.n(i),s=(n(338),n(16)),l=n(421),u=n(419),j=Object(r.createContext)({showInfoMessage:function(){}}),d=function(){return Object(r.useContext)(j)},b=function(e){var t=e.children,n=Object(r.useState)({}),c=Object(s.a)(n,2),i=c[0],o=c[1],d=Object(r.useState)(!1),b=Object(s.a)(d,2),O=b[0],h=b[1],f=Object(r.useState)(void 0),x=Object(s.a)(f,2),p=x[0],v=x[1];Object(r.useEffect)((function(){p&&(o({message:p,key:(new Date).getTime()}),h(!0))}),[p]);return Object(a.jsxs)(j.Provider,{value:{showInfoMessage:v},children:[Object(a.jsx)(l.a,{open:O,autoHideDuration:4e3,onClose:function(e,t){"clickaway"!==t&&(v(void 0),h(!1))},children:Object(a.jsx)(u.a,{children:i.message})},i.key),t]})},O=n(411),h=n(401),f=n(415),x=n(92),p=n(389),v=n(403),m=n(382),y=n(424),g=n(204),S=n(385),E=n(386),w=n(182),T=n.n(w),A=n(183),_=n.n(A),R=n(13),C=n(12),k=n(62),U=n.n(k),D=n(180),M=n.n(D);U.a.extend(M.a);var I=[{long:"days",short:"d",possible:"day"},{long:"weeks",short:"w",possible:"week"},{long:"months",short:"M",possible:"mon"},{long:"years",short:"y",possible:"year"},{long:"hours",short:"h",possible:"hour"},{long:"minutes",short:"m",possible:"min"},{long:"seconds",short:"s",possible:"sec"},{long:"milliseconds",short:"ms",possible:"millisecond"}],N=I.map((function(e){return e.short})),P=function(e,t){var n=(t||new Date).valueOf()/1e3,a=e.trim().split(" ").reduce((function(e,t){var n=function(e){var t=e.match(/\d+/g),n=e.match(/[a-zA-Z]+/g);if(n&&t&&N.includes(n[0]))return Object(R.a)({},n[0],t[0])}(t);return n?Object(C.a)(Object(C.a)({},e),n):Object(C.a)({},e)}),{}),r=U.a.duration(a).asSeconds();return{start:n-r,end:n,step:r/30}},H=function(e){return new Date(1e3*e)},L=function(e,t){t?window.localStorage.setItem(e,JSON.stringify({value:t})):B([e])},F=function(e){var t=window.localStorage.getItem(e);if(null!==t)try{var n;return null===(n=JSON.parse(t))||void 0===n?void 0:n.value}catch(a){return t}},B=function(e){return e.forEach((function(e){return window.localStorage.removeItem(e)}))},z=["BASIC_AUTH_DATA","BEARER_AUTH_DATA"],Y={serverUrl:F("PREFERRED_URL")||"https://",displayType:"chart",query:F("LAST_QUERY")||"\n",time:{duration:"1h",period:P("1h")},queryControls:{autoRefresh:!1}};function Q(e,t){switch(t.type){case"SET_DISPLAY_TYPE":return Object(C.a)(Object(C.a)({},e),{},{displayType:t.payload});case"SET_SERVER":return Object(C.a)(Object(C.a)({},e),{},{serverUrl:t.payload});case"SET_QUERY":return Object(C.a)(Object(C.a)({},e),{},{query:t.payload});case"SET_DURATION":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{duration:t.payload,period:P(t.payload,H(e.time.period.end))})});case"SET_UNTIL":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:P(e.time.duration,t.payload)})});case"SET_PERIOD":var n=function(e){var t=U.a.duration(e.to.valueOf()-e.from.valueOf());return["d","h","m","s"].map((function(e){return{val:t.get(e),str:e}})).filter((function(e){return 0!==e.val})).map((function(e){return"".concat(e.val).concat(e.str)})).join(" ")}(t.payload);return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!1}),time:Object(C.a)(Object(C.a)({},e.time),{},{duration:n,period:P(n,t.payload.to)})});case"TOGGLE_AUTOREFRESH":return Object(C.a)(Object(C.a)({},e),{},{queryControls:Object(C.a)(Object(C.a)({},e.queryControls),{},{autoRefresh:!e.queryControls.autoRefresh})});case"RUN_QUERY":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:P(e.time.duration,H(e.time.period.end))})});case"RUN_QUERY_TO_NOW":return Object(C.a)(Object(C.a)({},e),{},{time:Object(C.a)(Object(C.a)({},e.time),{},{period:P(e.time.duration)})});default:throw new Error}}var q=n(114),W=n.n(q),G=function(e){if(/^(\d+|\d*\.\d+)$/.test(e))return parseFloat(e);var t={true:!0,false:!1,null:null,undefined:void 0};return e in t?t[e]:decodeURI(e)},J=function(e){var t=window;if(t){var n=t.location.protocol+"//"+t.location.host+t.location.pathname+"?"+e;t.history.pushState({path:n},"",n)}},V=Object(r.createContext)({}),Z=function(){return Object(r.useContext)(V).state},$=function(){return Object(r.useContext)(V).dispatch},K=Object.entries(Y).reduce((function(e,t){var n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(C.a)(Object(C.a)({},e),{},Object(R.a)({},a,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search;return W.a.parse(t,{ignoreQueryPrefix:!0,decoder:G})[e]}(a)||r))}),{}),X=function(e){var t=e.children,n=Object(r.useReducer)(Q,K),c=Object(s.a)(n,2),i=c[0],o=c[1];Object(r.useEffect)((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search,n=W.a.parse(t,{ignoreQueryPrefix:!0,decoder:G}),a=W.a.stringify(Object(C.a)(Object(C.a)({},n),e),{encode:!1});J(a)}(i)}),[i]);var l=Object(r.useMemo)((function(){return{state:i,dispatch:o}}),[i,o]);return Object(a.jsx)(V.Provider,{value:l,children:t})},ee=function(e){return Object(a.jsxs)(f.a,{position:"relative",display:"inline-flex",children:[Object(a.jsx)(m.a,Object(C.a)({variant:"determinate"},e)),Object(a.jsx)(f.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(a.jsx)(x.a,{variant:"caption",component:"div",children:"".concat(e.label,"s")})})]})},te=n(383),ne=Object(te.a)({colorizing:{color:"white"}}),ae=function(){var e=ne(),t=$(),n=Z().queryControls.autoRefresh,i=Object(r.useState)(5),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(r.useState)(),d=Object(s.a)(j,2),b=d[0],O=d[1],h=c.a.useState(100),x=Object(s.a)(h,2),p=x[0],v=x[1];Object(r.useEffect)((function(){var e;return n&&(O((new Date).valueOf()),e=setInterval((function(){O((new Date).valueOf()),t({type:"RUN_QUERY_TO_NOW"})}),1e3*l)),function(){e&&clearInterval(e)}}),[l,n]),Object(r.useEffect)((function(){var e=setInterval((function(){if(n&&b){var e=((new Date).valueOf()-b)/1e3,t=Math.floor(e/l*100);v(t)}}),16);return function(){clearInterval(e)}}),[n,b,l]);var m=function(){u((function(e){switch(e){case 1:return 2;case 2:return 5;case 5:return 1;default:return 5}}))};return Object(a.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(f.a,{mr:2,children:Object(a.jsx)(y.a,{title:"Execute Query",children:Object(a.jsx)(g.a,{onClick:function(){return t({type:"RUN_QUERY"})},children:Object(a.jsx)(T.a,{className:e.colorizing,fontSize:"large"})})})}),Object(a.jsx)(S.a,{control:Object(a.jsx)(E.a,{size:"small",className:e.colorizing,checked:n,onChange:function(){t({type:"TOGGLE_AUTOREFRESH"})}}),label:"Auto-refresh"}),n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ee,{className:e.colorizing,label:l,value:p,onClick:function(){m()}}),Object(a.jsx)(f.a,{ml:1,children:Object(a.jsx)(g.a,{onClick:function(){m()},children:Object(a.jsx)(_.a,{style:{color:"white"}})})})]})]})},re=n(186),ce=n.n(re),ie=n(184),oe=n.n(ie),se=n(185),le=n.n(se),ue=n(387),je=n(428),de=n(10),be=Object(de.a)({root:{padding:6,color:"white","&.Mui-selected":{color:"white"}}})(ue.a),Oe=function(){var e=Z().displayType,t=$();return Object(a.jsxs)(je.a,{value:e,exclusive:!0,onChange:function(n,a){return t({type:"SET_DISPLAY_TYPE",payload:null!==a&&void 0!==a?a:e})},children:[Object(a.jsxs)(be,{value:"chart","aria-label":"display as chart",children:[Object(a.jsx)(oe.a,{}),"\xa0Query Range as Chart"]}),Object(a.jsxs)(be,{value:"code","aria-label":"display as code",children:[Object(a.jsx)(le.a,{}),"\xa0Instant Query as JSON"]}),Object(a.jsxs)(be,{value:"table","aria-label":"display as table",children:[Object(a.jsx)(ce.a,{}),"\xa0Instant Query as Table"]})]})},he=n(25),fe=n(27),xe=n(46),pe=n.n(xe),ve=n(106),me=(n(346),n(187)),ye=function(e){var t=e.xScale,n=e.height,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){Object(fe.o)(c.current).call(Object(fe.a)(t))}),[t]),Object(a.jsx)("g",{ref:c,className:"x axis",transform:"translate(0, ".concat(n,")")})},ge=n(417),Se=function(e){var t=Math.abs(e),n=".2~s";return t>0&&t<.001&&(n=".0e"),t>=.001&&t<1&&(n=".3~f"),Object(ge.a)(n)(e)},Ee=function(e){var t=e.yScale,n=e.label,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){t&&Object(fe.o)(c.current).call(Object(fe.b)(t).tickFormat(Se))}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("g",{className:"y axis",ref:c}),n&&Object(a.jsx)("text",{style:{fontSize:"0.6rem"},transform:"translate(0,-2)",children:n})]})},we=function(e){var t=e.height,n=e.x;return Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsx)("line",{x1:n,y1:"0",x2:n,y2:t,stroke:"black",strokeDasharray:"4"})})},Te=function(e){var t=e.yScale,n=e.xScale,c=e.datesInChart,i=e.onInteraction,o=e.setSelection,l=Object(r.useRef)(null),u=Object(r.useState)(),j=Object(s.a)(u,2),d=j[0],b=j[1],O=Object(r.useState)(),h=Object(s.a)(O,2),f=h[0],x=h[1],p=Object(r.useState)(!1),v=Object(s.a)(p,2),m=v[0],y=v[1];function g(e){var t=e.selection;if(t){if(!e.sourceEvent)return;y(!0);var a=t.map((function(e){return n.invert(e)})),r=Object(s.a)(a,2),c=r[0],i=r[1];o(c,i),Object(fe.o)(l.current).call(E.move,null)}else y(!1)}var S=function(e){e.sourceEvent&&b(void 0)},E=Object(r.useMemo)((function(){return Object(fe.d)().extent([[0,0],[n.range()[1],t.range()[0]]]).on("end",g).on("start",S)}),[g,n,t]);return Object(r.useEffect)((function(){var e=Object(fe.c)((function(e){return e})).center;Object(fe.o)(l.current).on("touchmove mousemove",(function(t){var a=Object(fe.i)(t);m||(!function(t){var a=n.invert(t),r=e(c,a,1);b(r)}(a[0]),x(a[1]))})).on("mouseout",(function(){m||b(void 0)}))}),[n,c,m]),Object(r.useEffect)((function(){i(d,f)}),[d,f,i]),Object(r.useEffect)((function(){E&&n&&Object(fe.o)(l.current).call(E)}),[n,E]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("g",{ref:l})})},Ae=n(388),_e=Object(te.a)((function(){return{wrapper:{maxWidth:"40vw"}}})),Re=function(e){var t=e.data,n=e.time,r=_e();return Object(a.jsxs)(f.a,{px:1,className:r.wrapper,children:[Object(a.jsx)(f.a,{fontStyle:"italic",mb:.5,children:Object(a.jsx)(x.a,{variant:"subtitle1",children:"".concat(null===n||void 0===n?void 0:n.toLocaleDateString()," ").concat(null===n||void 0===n?void 0:n.toLocaleTimeString())})}),Object(a.jsx)(f.a,{mb:.5,my:1,children:Object(a.jsx)(x.a,{variant:"subtitle2",children:"Value: ".concat(new Intl.NumberFormat(void 0,{maximumFractionDigits:10}).format(t.value))})}),Object(a.jsx)(f.a,{children:Object(a.jsx)(x.a,{variant:"body2",children:t.metrics.map((function(e){var t=e.key,n=e.value;return Object(a.jsxs)(f.a,{mb:.25,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(a.jsxs)("span",{children:[t,":\xa0"]}),Object(a.jsx)("span",{style:{fontWeight:"bold"},children:n})]},t)}))})})]})},Ce=function(e){var t=e.series,n=e.timePresets,c=e.height,i=e.color,o=e.categories,l=Object(r.useState)(window.innerWidth),u=Object(s.a)(l,2),j=u[0],d=u[1],b=$(),O=10,h=20,x=40,p=50,v=Object(r.useMemo)((function(){return j-p-h}),[j,p,h]),m=Object(r.useMemo)((function(){return c-O-x}),[O,x]),y=Object(r.useMemo)((function(){return Object(fe.m)().domain([n.start,n.end].map(H)).range([0,v])}),[v,n]),g=Object(r.useState)(!1),S=Object(s.a)(g,2),E=S[0],w=S[1],T=Object(r.useState)(),A=Object(s.a)(T,2),_=A[0],R=A[1],C=Object(r.useMemo)((function(){var e,n=t.reduce((function(e,t){return[].concat(Object(he.a)(e),Object(he.a)(t.values))}),[]).map((function(e){return e.value})),a=null!==(e=Object(fe.g)(n))&&void 0!==e?e:1,r=Object(fe.h)(n)||0;return Object(fe.k)().domain([r>0?0:r,a<0?0:a]).range([m,0]).nice()}),[t,m]),k=Object(r.useMemo)((function(){return Object(fe.f)().x((function(e){return y(H(e.key))})).y((function(e){return C(e.value||0)}))}),[y,C]),U=function(e){return k(e.values)},D=Object(r.useCallback)(function(){var e=Object(ve.a)(pe.a.mark((function e(n,a){var r,c,i,o;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"number"===typeof n?a&&t&&t[0]&&(r=C.invert(a),c=t.map((function(e){var t;return null===(t=e.values[n])||void 0===t?void 0:t.value})).reduce((function(e,t,n){var a=Math.abs(r-t);return a<e.delta&&(e={delta:a,index:n}),e}),{delta:1/0,index:0}),i=H(t[0].values[n].key),o=i.valueOf()<(y.domain()[1].valueOf()+y.domain()[0].valueOf())/2,R({date:i,xCoord:y(i),index:n,activeSeries:c.index,leftPart:o}),w(!0)):(w(!1),R(void 0));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[y,C,t]),M=Object(r.useMemo)((function(){return(null===_||void 0===_?void 0:_.activeSeries)?{value:t[_.activeSeries].values[_.index].value,metrics:o.map((function(e){return{key:e.key,value:t[_.activeSeries].metric[e.key]}}))}:void 0}),[_,t]),I=Object(r.useRef)(null),N=Object(r.useMemo)((function(){return t&&t[0]?t[0].values.map((function(e){return e.key})).map(H):[]}),[t]),P=function(e,t){b({type:"SET_PERIOD",payload:{from:e,to:t}})};return Object(a.jsx)(me.a,{bounds:!0,onResize:function(e){var t=e.bounds;return t&&d(null===t||void 0===t?void 0:t.width)},children:function(e){var n=e.measureRef;return Object(a.jsxs)("div",{ref:n,style:{width:"100%"},children:[I&&M&&Object(a.jsx)(Ae.a,{disableScrollLock:!0,style:{pointerEvents:"none"},id:"chart-tooltip-popover",open:E,anchorEl:I.current,anchorOrigin:{vertical:"top",horizontal:(null===_||void 0===_?void 0:_.leftPart)?20:-20},transformOrigin:{vertical:"top",horizontal:(null===_||void 0===_?void 0:_.leftPart)?"left":"right"},disableRestoreFocus:!0,children:Object(a.jsx)(f.a,{m:1,children:Object(a.jsx)(Re,{data:M,time:null===_||void 0===_?void 0:_.date})})}),Object(a.jsx)("svg",{width:"100%",height:c,children:Object(a.jsxs)("g",{transform:"translate(".concat(p,", ").concat(O,")"),children:[Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip-line",children:Object(a.jsx)("rect",{transform:"translate(0, -2)",width:y.range()[1]+4,height:C.range()[0]+2})})}),Object(a.jsx)(ye,{xScale:y,height:m}),Object(a.jsx)(Ee,{yScale:C,label:""}),t.map((function(e,t){return Object(a.jsx)("path",{stroke:i(e.metadata.name),className:"line",style:{opacity:void 0!==(null===_||void 0===_?void 0:_.activeSeries)?t===(null===_||void 0===_?void 0:_.activeSeries)?1:.2:1},d:U(e),clipPath:"url(#clip-line)"},t)})),Object(a.jsx)("g",{ref:I,children:Object(a.jsx)(we,{height:m,x:null===_||void 0===_?void 0:_.xCoord})}),Object(a.jsx)(Te,{xScale:y,yScale:C,datesInChart:N,onInteraction:D,setSelection:P})]})})]})}})},ke=n(113),Ue=function(e){if(0===Object.keys(e.metric).length)return"Query result";var t=e.metric,n=t.__name__,a=Object(ke.a)(t,["__name__"]);return"".concat(n||""," {").concat(Object.entries(a).map((function(e){return"".concat(e[0],": ").concat(e[1])})).join(", "),"}")},De=n(420),Me=Object(te.a)({legendWrapper:{display:"grid",width:"100%",gridTemplateColumns:"repeat(auto-fit)",gridColumnGap:".5em",paddingLeft:"8px"}}),Ie=function(e){var t=e.labels,n=e.onChange,c=e.categories,i=Me(),o=Object(r.useMemo)((function(){return t.length>0?c.filter((function(e){return 1===e.variations})).map((function(e){return"".concat(e.key,": ").concat(t[0].labelData[e.key])})):[]}),[c,t]),s=Object(r.useMemo)((function(){return c.filter((function(e){return 1!==e.variations})).map((function(e){return e.key}))}),[c]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{textAlign:"center"},children:"Legend for ".concat(o.join(", "))}),Object(a.jsx)("div",{className:i.legendWrapper,children:t.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(S.a,{control:Object(a.jsx)(De.a,{size:"small",checked:e.checked,onChange:function(){n(t)},style:{color:e.color,padding:"4px"}}),label:Object(a.jsx)(x.a,{variant:"body2",children:s.map((function(t){return"".concat(t,": ").concat(e.labelData[t])})).join(", ")})})},e.seriesName)}))})]})},Ne=function(e){return Object(r.useMemo)((function(){var t={};return e.forEach((function(e){return Object.entries(e.metric).forEach((function(e){return t[e[0]]?t[e[0]].options.add(e[1]):t[e[0]]={options:new Set([e[1]])}}))})),Object.entries(t).map((function(e){return{key:e[0],variations:e[1].options.size}})).sort((function(e,t){return e.variations-t.variations}))}),[e])},Pe=Object(te.a)({inlineBtn:{"&:hover":{cursor:"pointer"}}}),He=function(e){var t=e.handler,n=e.text,r=Pe();return Object(a.jsx)(p.a,{component:"span",className:r.inlineBtn,onClick:t,children:n})},Le=fe.n,Fe=function(e){var t=e.data,n=e.timePresets,c=Object(r.useState)(20),i=Object(s.a)(c,2),o=i[0],l=i[1],u=Object(r.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return{metadata:{name:Ue(e)},metric:e.metric,values:e.values.map((function(e){return{key:e[0],value:+e[1]}}))}}))}),[t]),j=Object(r.useMemo)((function(){return u.slice(0,o)}),[u,o]),d=Ne(t),b=Object(r.useMemo)((function(){return j.map((function(e){return e.metadata.name}))}),[j]),O=Object(r.useState)(b),h=Object(s.a)(O,2),f=h[0],x=h[1];Object(r.useEffect)((function(){f.join(",")!==b.join(",")&&x(b)}),[b,x,f]);var p=Object(r.useMemo)((function(){return u.length}),[u]),v=Object(r.useMemo)((function(){var e=f.length,t=e<=Le.length?Le:Object(fe.j)(e).map((function(t){return t/e})).map(fe.e);return Object(fe.l)().domain(f).range(t)}),[f]),m=Object(r.useMemo)((function(){return f.map((function(e){var t;return{color:v(e),seriesName:e,labelData:null===(t=j.find((function(t){return t.metadata.name===e})))||void 0===t?void 0:t.metric,checked:!0}}))}),[v,f]),y=Object(r.useState)(m),g=Object(s.a)(y,2),S=g[0],E=g[1];Object(r.useEffect)((function(){E(m)}),[m]);var w=Object(r.useMemo)((function(){return S.filter((function(e){return e.checked})).map((function(e){return e.seriesName}))}),[S]),T=Object(r.useMemo)((function(){return j.filter((function(e){return w.includes(e.metadata.name)}))}),[j,w]);return Object(a.jsx)(a.Fragment,{children:p>0?Object(a.jsxs)(a.Fragment,{children:[p>20&&Object(a.jsx)("div",{style:{textAlign:"center"},children:p>o?Object(a.jsxs)("span",{style:{fontStyle:"italic"},children:["Showing only first ",o," of ",p," series.\xa0",o+20>=p?Object(a.jsx)(He,{handler:function(){return l(p)},text:"Show all"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(He,{handler:function(){return l((function(e){return Math.min(e+20,p)}))},text:"Show ".concat(20," more")}),",\xa0",Object(a.jsx)(He,{handler:function(){return l(p)},text:"show all"}),"."]})]}):Object(a.jsxs)("span",{style:{fontStyle:"italic"},children:["Showing all series.\xa0",Object(a.jsx)(He,{handler:function(){return l(20)},text:"Show only ".concat(20)}),"."]})}),Object(a.jsx)(Ce,{height:400,series:T,color:v,timePresets:n,categories:d}),Object(a.jsx)(Ie,{labels:S,onChange:function(e){E((function(t){if(t){var n=Object(he.a)(t);return n[e]=Object(C.a)(Object(C.a)({},n[e]),{},{checked:!n[e].checked}),n}return t}))},categories:d})]}):Object(a.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},Be=n(390),ze=n(202),Ye=n(391),Qe=n(392),qe=n(393),We=n(394),Ge=n(395),Je=Object(te.a)({deemphasized:{opacity:.4}}),Ve=function(e){var t=e.data,n=Je(),c=Ne(t),i=Object(r.useMemo)((function(){return null===t||void 0===t?void 0:t.map((function(e){return{metadata:c.map((function(t){return e.metric[t.key]||"-"})),value:e.value[1]}}))}),[c,t]);return Object(a.jsx)(a.Fragment,{children:i.length>0?Object(a.jsx)(Be.a,{component:ze.a,children:Object(a.jsxs)(Ye.a,{"aria-label":"simple table",children:[Object(a.jsx)(Qe.a,{children:Object(a.jsxs)(qe.a,{children:[c.map((function(e,t){return Object(a.jsx)(We.a,{style:{textTransform:"capitalize"},children:e.key},t)})),Object(a.jsx)(We.a,{align:"right",children:"Value"})]})}),Object(a.jsx)(Ge.a,{children:i.map((function(e,t){return Object(a.jsxs)(qe.a,{children:[e.metadata.map((function(e,r){var c=i[t-1]&&i[t-1].metadata[r];return Object(a.jsx)(We.a,{className:c===e?n.deemphasized:void 0,children:e},r)})),Object(a.jsx)(We.a,{align:"right",children:e.value})]},t)}))})]})}):Object(a.jsx)("div",{style:{textAlign:"center"},children:"No data to show"})})},Ze=n(422),$e=n(409),Ke=n(410),Xe=n(406),et=n(416),tt=n(3),nt=n(9),at=n(109),rt=n(198),ct=n(199),it=function(e){var t=e.query,n=e.setQuery,c=e.server,i=e.oneLiner,o=void 0!==i&&i,l=Object(r.useRef)(null),u=Object(r.useState)(),j=Object(s.a)(u,2),d=j[0],b=j[1];return Object(r.useEffect)((function(){return l.current&&b(new nt.d({parent:l.current})),function(){return null===d||void 0===d?void 0:d.destroy()}}),[]),Object(r.useEffect)((function(){var e=(new rt.a).setComplete({url:c}),a=nt.d.updateListener.of((function(e){e.docChanged&&n(e.state.doc.toJSON().map((function(e){return e.trim()})).join(""))}));null===d||void 0===d||d.setState(tt.e.create({doc:t,extensions:[ct.a,Object(nt.k)(at.a),a,e.asExtension()]}))}),[c,d]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{ref:l,className:o?"one-line-scroll":void 0})})},ot=n(414),st=function(){return Object(a.jsx)(Be.a,{component:ze.a,children:Object(a.jsxs)(Ye.a,{"aria-label":"simple table",size:"small",children:[Object(a.jsx)(Qe.a,{children:Object(a.jsxs)(qe.a,{children:[Object(a.jsx)(We.a,{children:"Long"}),Object(a.jsx)(We.a,{children:"Short"})]})}),Object(a.jsx)(Ge.a,{children:I.map((function(e,t){return Object(a.jsxs)(qe.a,{children:[Object(a.jsx)(We.a,{component:"th",scope:"row",children:e.long}),Object(a.jsx)(We.a,{children:e.short})]},t)}))})]})})},lt=function(e){var t=e.setDuration,n=Object(r.useState)(!1),i=Object(s.a)(n,2),o=i[0],l=i[1],u=c.a.useState(null),j=Object(s.a)(u,2),d=j[0],b=j[1],O=Object(r.useState)(),h=Object(s.a)(O,2),p=h[0],v=h[1],m=Z().time,y=m.period.end,g=m.duration,S=$(),E=Object(r.useState)(g),w=Object(s.a)(E,2),T=w[0],A=w[1];Object(r.useEffect)((function(){A(g)}),[g]),Object(r.useEffect)((function(){var e;v((e=H(y),U()(e).format("YYYY-MM-DD[T]HH:mm:ss")))}),[y]),Object(r.useEffect)((function(){o||t(T)}),[T,o]);var _=function(){b(null)},R=Boolean(d);return Object(a.jsxs)(f.a,{m:1,flexDirection:"row",display:"flex",children:[Object(a.jsxs)(f.a,{px:1,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(et.a,{label:"Duration",value:T,onChange:function(e){A(e.target.value)},fullWidth:!0,onBlur:function(){l(!1)},onFocus:function(){l(!0)}})}),Object(a.jsx)(f.a,{my:2,children:Object(a.jsxs)(x.a,{variant:"body2",children:["Possible options",Object(a.jsx)("span",{"aria-owns":R?"mouse-over-popover":void 0,"aria-haspopup":"true",style:{cursor:"pointer"},onMouseEnter:function(e){b(e.currentTarget)},onMouseLeave:_,children:"\ufffd:\xa0"}),Object(a.jsx)(Ae.a,{open:R,anchorEl:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},style:{pointerEvents:"none"},onClose:_,disableRestoreFocus:!0,children:Object(a.jsx)(st,{})}),Object(a.jsx)(He,{handler:function(){return A("5m")},text:"5m"}),",\xa0",Object(a.jsx)(He,{handler:function(){return A("1h")},text:"1h"}),",\xa0",Object(a.jsx)(He,{handler:function(){return A("1h 30m")},text:"1h 30m"})]})})]}),Object(a.jsxs)(f.a,{px:1,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(ot.a,{variant:"inline",ampm:!1,label:"Until",value:p,onChange:function(e){return S({type:"SET_UNTIL",payload:e})},onError:console.log,format:"DD/MM/YYYY HH:mm:ss"})}),Object(a.jsx)(f.a,{my:2,children:Object(a.jsxs)(x.a,{variant:"body2",children:["Will be changed to current time for auto-refresh mode.\xa0",Object(a.jsx)(He,{handler:function(){return S({type:"RUN_QUERY_TO_NOW"})},text:"Switch to now"})]})})]})]})},ut=n(191),jt=n.n(ut),dt=n(192),bt=n.n(dt),Ot=n(407),ht=n(427),ft=n(426),xt=n(404),pt=n(408),vt=n(418),mt=n(399),yt=n(397),gt=n(425),St=n(396),Et=n(402),wt=n(398),Tt=n(405),At=n(400),_t=function(e){var t=e.children,n=e.value,r=e.index,c=Object(ke.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(C.a)(Object(C.a)({role:"tabpanel",hidden:n!==r,id:"auth-config-tabpanel-".concat(r),"aria-labelledby":"auth-config-tab-".concat(r)},c),{},{children:n===r&&Object(a.jsx)(f.a,{py:2,children:t})}))},Rt=n(189),Ct=n.n(Rt),kt=n(190),Ut=n.n(kt),Dt={authMethod:"NO_AUTH",saveAuthLocally:!1},Mt=F("AUTH_TYPE"),It=F("BASIC_AUTH_DATA"),Nt=F("BEARER_AUTH_DATA"),Pt=Object(C.a)(Object(C.a)({},Dt),{},{authMethod:Mt||Dt.authMethod,basicData:It,bearerData:Nt,saveAuthLocally:!(!It&&!Nt)}),Ht=function(){B(z)};function Lt(e,t){switch(t.type){case"SET_BASIC_AUTH":return t.payload.checkbox?L("BASIC_AUTH_DATA",t.payload.value):Ht(),L("AUTH_TYPE","BASIC_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BASIC_AUTH",basicData:t.payload.value});case"SET_BEARER_AUTH":return t.payload.checkbox?L("BEARER_AUTH_DATA",t.payload.value):Ht(),L("AUTH_TYPE","BEARER_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"BEARER_AUTH",bearerData:t.payload.value});case"SET_NO_AUTH":return!t.payload.checkbox&&Ht(),L("AUTH_TYPE","NO_AUTH"),Object(C.a)(Object(C.a)({},e),{},{authMethod:"NO_AUTH"});default:throw new Error}}var Ft=Object(r.createContext)({}),Bt=function(){return Object(r.useContext)(Ft).state},zt=function(e){var t=e.children,n=Object(r.useReducer)(Lt,Pt),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(r.useMemo)((function(){return{state:i,dispatch:o}}),[i,o]);return Object(a.jsx)(Ft.Provider,{value:l,children:t})},Yt=Object(te.a)((function(){return Object(ft.a)({tabsContent:{height:"200px"}})})),Qt="Bearer ",qt=[{title:"No auth",id:"NO_AUTH"},{title:"Basic Auth",id:"BASIC_AUTH"},{title:"Bearer Token",id:"BEARER_AUTH"}],Wt=function(e){var t=Yt(),n=e.onClose,c=e.open,i=Bt(),o=i.saveAuthLocally,l=i.basicData,u=i.bearerData,j=i.authMethod,d=Object(r.useContext)(Ft).dispatch,b=Object(r.useState)(o),O=Object(s.a)(b,2),h=O[0],p=O[1],v=Object(r.useState)(l||{password:"",login:""}),m=Object(s.a)(v,2),y=m[0],g=m[1],E=Object(r.useState)((null===u||void 0===u?void 0:u.token)||Qt),w=Object(s.a)(E,2),T=w[0],A=w[1],_=Object(r.useState)(qt.findIndex((function(e){return e.id===j}))||0),R=Object(s.a)(_,2),k=R[0],U=R[1],D=function(){n()};return Object(a.jsxs)(ht.a,{onClose:D,"aria-labelledby":"simple-dialog-title",open:c,children:[Object(a.jsx)(Ot.a,{id:"simple-dialog-title",children:"Request Auth Settings"}),Object(a.jsxs)(xt.a,{children:[Object(a.jsx)(pt.a,{children:"This affects Authorization header sent to the server you specify. Not shown in URL and can be optionally stored on a client side"}),Object(a.jsx)(vt.a,{value:k,onChange:function(e,t){U(t)},indicatorColor:"primary",textColor:"primary",children:qt.map((function(e){return Object(a.jsx)(mt.a,{label:e.title},e.id)}))}),Object(a.jsxs)(f.a,{p:0,display:"flex",flexDirection:"column",className:t.tabsContent,children:[Object(a.jsxs)(f.a,{flexGrow:1,children:[Object(a.jsx)(_t,{value:k,index:0,children:Object(a.jsx)(x.a,{style:{fontStyle:"italic"},children:"No Authorization Header"})}),Object(a.jsxs)(_t,{value:k,index:1,children:[Object(a.jsxs)(yt.a,{margin:"dense",fullWidth:!0,children:[Object(a.jsx)(gt.a,{htmlFor:"basic-login",children:"User"}),Object(a.jsx)(St.a,{id:"basic-login",startAdornment:Object(a.jsx)(Et.a,{position:"start",children:Object(a.jsx)(Ct.a,{})}),required:!0,onChange:function(e){return g((function(t){return Object(C.a)(Object(C.a)({},t),{},{login:e.target.value||""})}))},value:(null===y||void 0===y?void 0:y.login)||""})]}),Object(a.jsxs)(yt.a,{margin:"dense",fullWidth:!0,children:[Object(a.jsx)(gt.a,{htmlFor:"basic-pass",children:"Password"}),Object(a.jsx)(St.a,{id:"basic-pass",startAdornment:Object(a.jsx)(Et.a,{position:"start",children:Object(a.jsx)(Ut.a,{})}),onChange:function(e){return g((function(t){return Object(C.a)(Object(C.a)({},t),{},{password:e.target.value||""})}))},value:(null===y||void 0===y?void 0:y.password)||""})]})]}),Object(a.jsx)(_t,{value:k,index:2,children:Object(a.jsx)(et.a,{id:"bearer-auth",label:"Bearer token",multiline:!0,fullWidth:!0,value:T,onChange:function(e){var t=e.target.value;t.startsWith(Qt)?A(t):A(Qt)},InputProps:{onPaste:function(e){var t=e.clipboardData.getData("text/plain");t.startsWith(Qt)?A(t):A(Qt+t),e.preventDefault()}},rowsMax:6})})]}),Object(a.jsxs)(yt.a,{children:[Object(a.jsx)(S.a,{control:Object(a.jsx)(De.a,{checked:h,onChange:function(){return p((function(e){return!e}))},name:"checkedB",color:"primary"}),label:"Persist Auth Data Locally"}),Object(a.jsx)(wt.a,{children:h?"Auth Data and the Selected method will be saved to LocalStorage":"Auth Data won't be saved. All previously saved Auth Data will be removed"})]})]})]}),Object(a.jsx)(Tt.a,{children:Object(a.jsx)(At.a,{onClick:function(){switch(k){case 0:d({type:"SET_NO_AUTH",payload:{checkbox:h}});break;case 1:d({type:"SET_BASIC_AUTH",payload:{checkbox:h,value:y}});break;case 2:d({type:"SET_BEARER_AUTH",payload:{checkbox:h,value:{token:T}}})}D()},color:"primary",children:"Apply"})})]})},Gt=function(){var e=Z(),t=e.serverUrl,n=e.query,c=e.time.duration,i=$(),o=Object(r.useState)(!1),l=Object(s.a)(o,2),u=l[0],j=l[1],d=Object(r.useState)(!0),b=Object(s.a)(d,2),O=b[0],h=b[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(Ze.a,{expanded:O,onChange:function(){return h((function(e){return!e}))},children:[Object(a.jsxs)($e.a,{expandIcon:Object(a.jsx)(jt.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(a.jsx)(f.a,{mr:2,children:Object(a.jsx)(x.a,{variant:"h6",component:"h2",children:"Query Configuration"})}),!O&&Object(a.jsx)(f.a,{flexGrow:1,onClick:function(e){return e.stopPropagation()},onFocusCapture:function(e){return e.stopPropagation()},children:Object(a.jsx)(it,{server:t,query:n,oneLiner:!0,setQuery:function(e){return i({type:"SET_QUERY",payload:e})}})})]}),Object(a.jsx)(Ke.a,{children:Object(a.jsxs)(Xe.a,{container:!0,spacing:2,children:[Object(a.jsx)(Xe.a,{item:!0,xs:12,md:6,children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a,{py:2,display:"flex",children:[Object(a.jsx)(et.a,{variant:"outlined",fullWidth:!0,label:"Server URL",value:t,inputProps:{style:{fontFamily:"Monospace"}},onChange:function(e){return i({type:"SET_SERVER",payload:e.target.value})}}),Object(a.jsx)(f.a,{pl:.5,flexGrow:0,children:Object(a.jsx)(g.a,{onClick:function(){return j(!0)},children:Object(a.jsx)(bt.a,{})})})]}),Object(a.jsx)(it,{server:t,query:n,setQuery:function(e){return i({type:"SET_QUERY",payload:e})}})]})}),Object(a.jsx)(Xe.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.a,{style:{borderRadius:"4px",borderColor:"#b9b9b9",borderStyle:"solid",borderWidth:"1px",height:"calc(100% - 18px)",marginTop:"16px"},children:Object(a.jsx)(lt,{setDuration:function(e){return i({type:"SET_DURATION",payload:e})},duration:c})})})]})})]}),Object(a.jsx)(Wt,{open:u,onClose:function(){return j(!1)}})]})},Jt=function(){var e=Z(),t=e.query,n=e.displayType,a=e.serverUrl,c=e.time.period,i=Bt(),o=i.basicData,l=i.bearerData,u=i.authMethod,j=Object(r.useState)(!1),d=Object(s.a)(j,2),b=d[0],O=d[1],h=Object(r.useState)(),f=Object(s.a)(h,2),x=f[0],p=f[1],v=Object(r.useState)(),m=Object(s.a)(v,2),y=m[0],g=m[1],S=Object(r.useState)(),E=Object(s.a)(S,2),w=E[0],T=E[1];Object(r.useEffect)((function(){w&&(p(void 0),g(void 0))}),[w]);var A=Object(r.useMemo)((function(){if(c){if(!a)return void T("Please enter Server URL");if(!t.trim())return void T("Please enter a valid Query and execute it");if(function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol}(a))return"chart"===n?function(e,t,n){return"".concat(e,"/api/v1/query_range?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step)}(a,t,c):function(e,t,n){return"".concat(e,"/api/v1/query?query=").concat(encodeURIComponent(t),"&start=").concat(n.start,"&end=").concat(n.end,"&step=").concat(n.step)}(a,t,c);T("Please provide a valid URL")}}),[a,c,n]);return Object(r.useEffect)((function(){Object(ve.a)(pe.a.mark((function e(){var r,c,i,s;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!A){e.next=33;break}return r=new Headers,"BASIC_AUTH"===u&&r.set("Authorization","Basic "+btoa("".concat((null===o||void 0===o?void 0:o.login)||"",":").concat((null===o||void 0===o?void 0:o.password)||""))),"BEARER_AUTH"===u&&r.set("Authorization",(null===l||void 0===l?void 0:l.token)||""),O(!0),e.next=7,fetch(A,{headers:r});case 7:if(!(c=e.sent).ok){e.next=18;break}return L("PREFERRED_URL",a),L("LAST_QUERY",t),e.next=13,c.json();case 13:i=e.sent,T(void 0),"chart"===n?p(i.data.result):g(i.data.result),e.next=32;break;case 18:return e.t0=T,e.next=21,c.json();case 21:if(e.t2=s=e.sent,e.t1=null===e.t2,e.t1){e.next=25;break}e.t1=void 0===s;case 25:if(!e.t1){e.next=29;break}e.t3=void 0,e.next=30;break;case 29:e.t3=s.error;case 30:e.t4=e.t3,(0,e.t0)(e.t4);case 32:O(!1);case 33:case"end":return e.stop()}}),e)})))()}),[A,a,n]),{fetchUrl:A,isLoading:b,graphData:x,liveData:y,error:w}},Vt=function(e){var t=e.data,n=d().showInfoMessage,c=Object(r.useMemo)((function(){return JSON.stringify(t,null,2)}),[t]);return Object(a.jsxs)(f.a,{position:"relative",children:[Object(a.jsx)(f.a,{flexDirection:"column",justifyContent:"flex-end",display:"flex",style:{position:"fixed",right:"16px"},children:Object(a.jsx)(At.a,{variant:"outlined",onClick:function(e){navigator.clipboard.writeText(c),n("Formatted JSON has been copied"),e.preventDefault()},children:"Copy JSON"})}),Object(a.jsx)("pre",{children:c})]})},Zt=n(193),$t=n.n(Zt),Kt=function(e){var t=e.url,n=d().showInfoMessage;return Object(a.jsx)(f.a,{pl:2,py:1,flexShrink:0,display:"flex",children:Object(a.jsx)(y.a,{title:"Copy Query URL",children:Object(a.jsx)(g.a,{size:"small",onClick:function(e){t&&(navigator.clipboard.writeText(t),n("Value has been copied"),e.preventDefault())},children:Object(a.jsx)($t.a,{style:{color:"white"}})})})})},Xt=function(){var e=Z(),t=e.displayType,n=e.time.period,r=Jt(),c=r.fetchUrl,i=r.isLoading,o=r.liveData,s=r.graphData,l=r.error;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{position:"static",children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(f.a,{mr:2,display:"flex",children:[Object(a.jsxs)(x.a,{variant:"h5",children:[Object(a.jsx)("span",{style:{fontWeight:"bolder"},children:"VM"}),Object(a.jsx)("span",{style:{fontWeight:"lighter"},children:"UI"})]}),Object(a.jsx)("div",{style:{fontSize:"10px",marginTop:"-2px"},children:Object(a.jsx)("div",{children:"BETA"})})]}),Object(a.jsx)("div",{style:{fontSize:"10px",position:"absolute",top:"40px",opacity:".4"},children:Object(a.jsx)(p.a,{color:"inherit",href:"https://github.com/VictoriaMetrics/vmui/issues/new",target:"_blank",children:"Create an issue"})}),Object(a.jsx)(f.a,{flexGrow:1,children:Object(a.jsx)(ae,{})}),Object(a.jsx)(Oe,{}),Object(a.jsx)(Kt,{url:c})]})}),Object(a.jsxs)(f.a,{display:"flex",flexDirection:"column",style:{height:"calc(100vh - 64px)"},children:[Object(a.jsx)(f.a,{m:2,children:Object(a.jsx)(Gt,{})}),Object(a.jsxs)(f.a,{flexShrink:1,style:{overflowY:"scroll"},children:[i&&Object(a.jsx)(v.a,{in:i,style:{transitionDelay:i?"300ms":"0ms"},children:Object(a.jsx)(f.a,{alignItems:"center",flexDirection:"column",display:"flex",style:{width:"100%",position:"absolute",height:"150px",background:"linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7), rgba(255,255,255,0))"},m:2,children:Object(a.jsx)(m.a,{})})}),Object(a.jsxs)(f.a,{p:2,children:[l&&Object(a.jsx)(u.a,{color:"error",style:{fontSize:"14px"},children:l}),s&&n&&"chart"===t&&Object(a.jsx)(Fe,{data:s,timePresets:n}),o&&"code"===t&&Object(a.jsx)(Vt,{data:o}),o&&"table"===t&&Object(a.jsx)(Ve,{data:o})]})]})]})]})},en=n(197),tn=n(413),nn=n(412),an=n(31),rn=n(194),cn=function(){var e=Object(en.a)({typography:{fontSize:10}});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(nn.a,{})," ",Object(a.jsxs)(an.a,{utils:rn.a,children:[" ",Object(a.jsxs)(tn.a,{theme:e,children:["  ",Object(a.jsxs)(X,{children:[" ",Object(a.jsxs)(zt,{children:[" ",Object(a.jsxs)(b,{children:[" ",Object(a.jsx)(Xt,{})]})]})]})]})]})]})},on=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(cn,{})}),document.getElementById("root")),on()}},[[348,1,2]]]);