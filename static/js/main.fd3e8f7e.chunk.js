(this["webpackJsonpmodular-scss"]=this["webpackJsonpmodular-scss"]||[]).push([[0],{112:function(e,a,t){e.exports={customInput:"InputField_customInput__1hOqU",readOnly:"InputField_readOnly__BwxJm"}},141:function(e,a,t){e.exports={longTable:"MoneyTable_longTable__2Gli8"}},172:function(e,a,t){e.exports=t(339)},177:function(e,a,t){},21:function(e,a,t){e.exports={centerContainer:"App_centerContainer__1InyN",green:"App_green__1qrp_",red:"App_red__32RwF",title:"App_title__25lgh"}},339:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=t(47),s=t(341),i=t(342),u=(t(177),t(21)),d=t.n(u),m=t(343),f=t(112),p=t.n(f);var v=function(e){return r.a.createElement(m.a,{className:"".concat(p.a.customInput," ").concat(e.readOnly?p.a.readOnly:null),placeholder:e.placeholder,prefix:e.prefix,suffix:e.suffix,value:e.value,readOnly:e.readOnly,type:"number",onChange:function(a){return e.onChange(a.target.value)}})},g=t(340),h=t(141),x=t.n(h);var E=function(e){return r.a.createElement(g.a,{size:"small",scroll:{y:400},className:x.a.longTable,dataSource:e.dataSource,pagination:!1,columns:[{title:"Year",dataIndex:"year"},{title:"Savings \u0394",dataIndex:"savings"},{title:"Interest \u0394",dataIndex:"interest"},{title:"Total \u0394",dataIndex:"difference"},{title:"Safe Withdrawal",dataIndex:"swr"},{title:"Net Worth",dataIndex:"netWorth"},{title:"Progress %",dataIndex:"progress"}]})},_=s.a.Title;var b=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(6e3),s=Object(o.a)(c,2),u=s[0],m=s[1],f=Object(n.useState)(45e3),p=Object(o.a)(f,2),g=p[0],h=p[1],x=Object(n.useState)(4),b=Object(o.a)(x,2),y=b[0],O=b[1],C=Object(n.useState)(7),I=Object(o.a)(C,2),w=I[0],N=I[1],S=Object(n.useState)(40),j=Object(o.a)(S,2),W=j[0],M=j[1],T=[];parseInt(y)>parseInt(w)&&O(w);for(var k=.01*w,$=.01*y,A=!1,B=0,F=g/$,J=t,q=0,G=0;G<100&&!A;G++){q=J;var z=(J+=J*k+u)*$,P=q*k,R=Y(J-q,!0),U=r.a.createElement(i.a,{percent:Math.floor(z/g*100),width:30});J>=F&&(A=!0,B=G),J>0&&T.push({key:G,year:G,swr:Y(z),savings:Y(u,!0),interest:Y(P,!0),progress:U,netWorth:Y(J),difference:R})}function Y(e,a){var t=e>=0,n="",l="";return a&&(n=t?"+":"-",l=t?d.a.green:d.a.red),r.a.createElement("span",{className:l},n+"$"+Math.round(Math.abs(e)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}return W!==B&&M(B),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"".concat(d.a.centerContainer," ").concat(d.a.title)},r.a.createElement(_,null,"Net Worth Milestone Generator")),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"initial savings",value:t,onChange:l})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"yearly savings",value:u,onChange:m})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{prefix:"$",suffix:"yearly retirement expenses",value:g,onChange:h})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% safe withdrawal",value:y,onChange:O})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{suffix:"% annual return",value:w,onChange:N})),r.a.createElement("div",{className:d.a.centerContainer},r.a.createElement(v,{readOnly:!0,suffix:"years to retirement",value:W,onChange:M})),r.a.createElement("div",{className:(d.a.centerContainer,d.a.table)},r.a.createElement(E,{dataSource:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.fd3e8f7e.chunk.js.map