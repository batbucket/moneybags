(this["webpackJsonpmodular-scss"]=this["webpackJsonpmodular-scss"]||[]).push([[0],{112:function(e,a,t){e.exports={customInput:"InputField_customInput__3P9m0",readOnly:"InputField_readOnly__3Zq3L"}},141:function(e,a,t){e.exports={longTable:"MoneyTable_longTable__1cOnb"}},172:function(e,a,t){e.exports=t(339)},177:function(e,a,t){},21:function(e,a,t){e.exports={centerContainer:"App_centerContainer__iqYI7",green:"App_green__33vUW",red:"App_red__3LJ88",title:"App_title__o5Gw-"}},339:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),o=t(61),i=t(341),s=t(342),u=(t(177),t(21)),d=t.n(u),m=t(343),f=t(112),p=t.n(f);var v=function(e){return r.a.createElement(m.a,{className:"".concat(p.a.customInput," ").concat(e.readOnly?p.a.readOnly:null),placeholder:e.placeholder,prefix:e.prefix,suffix:e.suffix,value:e.value,readOnly:e.readOnly,type:"number",min:"0",onChange:function(a){return e.onChange(a.target.value)}})},g=t(340),h=t(141),x=t.n(h);var E=function(e){return r.a.createElement(g.a,{size:"small",scroll:{y:400},className:x.a.longTable,dataSource:e.dataSource,pagination:!1,columns:[{title:"Year",dataIndex:"year"},{title:"Savings \u0394",dataIndex:"savings"},{title:"Interest \u0394",dataIndex:"interest"},{title:"Total \u0394",dataIndex:"difference"},{title:"Safe Withdrawal",dataIndex:"swr"},{title:"Net Worth",dataIndex:"netWorth"},{title:"Progress %",dataIndex:"progress"}]})},_=i.a.Title;var b=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(6e3),i=Object(o.a)(l,2),u=i[0],m=i[1],f=Object(n.useState)(45e3),p=Object(o.a)(f,2),g=p[0],h=p[1],x=Object(n.useState)(4),b=Object(o.a)(x,2),y=b[0],O=b[1],C=Object(n.useState)(7),I=Object(o.a)(C,2),w=I[0],N=I[1];y>w&&O(w);for(var S=[],j=.01*w,W=.01*y,M=!1,T=0,k=g/W,$=0;$<100&&!M;$++){var A=L($)+parseInt(t),B=L($-1)+parseInt(t),F=A*W,J=B*j,q=P(A-B,!0),G=r.a.createElement(s.a,{percent:Math.round(F/g*100),width:30});A>=k&&(M=!0,T=$),A>0&&S.push({key:$,year:$,swr:P(F),savings:P(u,!0),interest:P(J,!0),progress:G,netWorth:P(A),difference:q})}function L(e){var a=j+1;return u*(Math.pow(a,e+1)-1)/(a-1)}function P(e,a){var t=e>=0,n="",c="";return a&&(n=t?"+":"-",c=t?d.a.green:d.a.red),r.a.createElement("span",{className:c},n+"$"+Math.round(Math.abs(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(d.a.centerContainer," ").concat(d.a.title)},r.a.createElement(_,null,"Net Worth Milestone Generator")),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"initial savings",value:t,onChange:c})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"yearly savings",value:u,onChange:m})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"desired yearly income",value:g,onChange:h})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% safe withdrawal",value:y,onChange:O})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% annual return",value:w,onChange:N})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{readOnly:!0,suffix:"years to retirement",value:T})),r.a.createElement("div",{className:(d.a.centerContainer,d.a.table)},r.a.createElement(E,{dataSource:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.314d6835.chunk.js.map