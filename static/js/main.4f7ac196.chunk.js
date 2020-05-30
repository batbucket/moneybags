(this["webpackJsonpmodular-scss"]=this["webpackJsonpmodular-scss"]||[]).push([[0],{141:function(e,a,t){e.exports={longTable:"MoneyTable_longTable__1cOnb"}},172:function(e,a,t){e.exports=t(339)},177:function(e,a,t){},21:function(e,a,t){e.exports={centerContainer:"App_centerContainer__iqYI7",green:"App_green__33vUW",red:"App_red__3LJ88",title:"App_title__o5Gw-"}},339:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),s=t.n(c),l=t(61),i=t(341),o=t(342),u=(t(177),t(21)),d=t.n(u),m=t(343),f=t(91),p=t.n(f);var v=function(e){var a=null;return e.readOnly&&(a=e.isSuccess?p.a.success:p.a.failure),r.a.createElement(m.a,{className:"".concat(p.a.customInput," ").concat(a),placeholder:e.placeholder,prefix:e.prefix,suffix:e.suffix,value:e.value,readOnly:e.readOnly,type:e.readOnly?"text":"number",min:"0",onChange:function(a){return e.onChange(a.target.value)}})},g=t(340),h=t(141),x=t.n(h);var E=function(e){return r.a.createElement(g.a,{size:"small",scroll:{y:400},className:x.a.longTable,dataSource:e.dataSource,pagination:!1,columns:[{title:"Year",dataIndex:"year"},{title:"Savings \u0394",dataIndex:"savings"},{title:"Interest \u0394",dataIndex:"interest"},{title:"Total \u0394",dataIndex:"difference"},{title:"Safe Withdrawal",dataIndex:"swr"},{title:"Net Worth",dataIndex:"netWorth"},{title:"Progress %",dataIndex:"progress"}]})},_=i.a.Title;var b=function(){var e=Object(n.useState)(7e3),a=Object(l.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(6e3),i=Object(l.a)(s,2),u=i[0],m=i[1],f=Object(n.useState)(45e3),p=Object(l.a)(f,2),g=p[0],h=p[1],x=Object(n.useState)(4),b=Object(l.a)(x,2),y=b[0],I=b[1],C=Object(n.useState)(7),w=Object(l.a)(C,2),O=w[0],N=w[1];y>O&&I(O);for(var S=[],j=.01*O,W=.01*y,M=!1,T=0,k=g/W,$=0;$<100&&!M;$++){var A=Y($)+parseInt(t),F=Y($-1)+parseInt(t),B=A*W,J=F*j,G=q(A-F,!0),P=r.a.createElement(o.a,{percent:Math.round(B/g*100),width:30});A>=k&&(M=!0,T=$),A>0&&S.push({key:$,year:$,swr:q(B),savings:q(u,!0),interest:q(J,!0),progress:P,netWorth:q(A),difference:G})}function Y(e){var a=j+1;return u*(Math.pow(a,e+1)-1)/(a-1)}function q(e,a){var t=e>=0,n="",c="";return a&&(n=t?"+":"-",c=t?d.a.green:d.a.red),r.a.createElement("span",{className:c},n+"$"+Math.round(Math.abs(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}return M||(T="\u2620"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(d.a.centerContainer," ").concat(d.a.title)},r.a.createElement(_,null,"Net Worth Milestone Generator")),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"initial savings",value:t,onChange:c})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"yearly savings",value:u,onChange:m})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"yearly retired income",value:g,onChange:h})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% safe withdrawal",value:y,onChange:I})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% annual return",value:O,onChange:N})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{isSuccess:M,readOnly:!0,suffix:"years to retirement",value:T})),r.a.createElement("div",{className:(d.a.centerContainer,d.a.table)},r.a.createElement(E,{dataSource:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,a,t){e.exports={customInput:"InputField_customInput__3P9m0",success:"InputField_success__3eWNs",failure:"InputField_failure__348Q3"}}},[[172,1,2]]]);
//# sourceMappingURL=main.4f7ac196.chunk.js.map