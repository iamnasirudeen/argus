(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{176:function(n,e,t){},199:function(n,e){},280:function(n,e,t){"use strict";t.r(e);var a=t(34),o=t(0),r=t.n(o),c=t(32),i=t.n(c),s=t(163),l=t(24),d=(t(176),t(56)),u=t(31),p=t.n(u),b=t(57),f=t(60),j=t(114),h=t(154),m=t.n(h),g=t(8),x=Object(o.createContext)(),O=window.location.origin,v=m()(O,{path:"/argus-websocket-server/"});v.on("connect",(function(){console.log("Websocket conncected to argus server")})),v.on("disconnect",(function(){console.log("Disconnecting from argus server")}));var w,y,k,S,_=function(n){var e=n.children;return Object(g.jsx)(x.Provider,{value:{socket:v},children:e})},I=t(58),C=t(286),q=t(288),P=t(284),z=t(155),L=t.n(z),N=t(169),D=t(112),M=t.n(D);var E,A,R=function(){var n,e,t,r,c,i,s,l,d,u,h,m,O,v,w=Object(o.useContext)(x).socket,y=Object(o.useState)([]),k=Object(a.a)(y,2),S=k[0],_=k[1],I=Object(o.useState)(!1),q=Object(a.a)(I,2),P=q[0],z=q[1],D=Object(o.useState)(!1),E=Object(a.a)(D,2),A=E[0],R=E[1],H=Object(o.useState)(null),U=Object(a.a)(H,2),B=U[0],J=U[1],K=[201,200,304],V=Object(o.useState)({current:1,pageSize:10,total:0}),Q=Object(a.a)(V,2),X=Q[0],Y=Q[1],Z=window.location.pathname,$=C.a.TabPane;function nn(){return(nn=Object(b.a)(p.a.mark((function n(e){var t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),n.next=3,fetch("".concat(Z,"api/logs/").concat(e));case 3:return n.next=5,n.sent.json();case 5:t=n.sent,a=t.data,J(a),z(!1),en();case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function en(){R(!A)}function tn(){return(tn=Object(b.a)(p.a.mark((function n(e,t,a){var o,r,c,i,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e,t,a),z(!0),o=e.current,r=e.pageSize,n.next=5,fetch("".concat(Z,"api/logs?page=").concat(o,"&perPage=").concat(r));case 5:return n.next=7,n.sent.json();case 7:c=n.sent,i=c.data,s=c.record,_(Object(j.a)(i)),Y(Object(f.a)(Object(f.a)({},e),{},{total:null===s||void 0===s?void 0:s.total,current:null===s||void 0===s?void 0:s.curent,pageSize:null===i||void 0===i?void 0:i.length})),z(!1);case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(o.useEffect)((function(){function n(){return e.apply(this,arguments)}function e(){return(e=Object(b.a)(p.a.mark((function n(){var e,t,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(Z,"api/logs"));case 2:return n.next=4,n.sent.json();case 4:e=n.sent,t=e.data,a=e.record,_(Object(j.a)(t)),Y((function(n){return Object(f.a)(Object(f.a)({},n),{},{total:null===a||void 0===a?void 0:a.total,current:null===a||void 0===a?void 0:a.curent})})),z(!1);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return z(!0),w.on("new_request",(function(n){var e=n.request,t=n.response,a=n.total,o={logId:n._id,method:e.method,path:e.path,status:t.status,duration:e.duration,timestamp:e.timestamp};_((function(n){return[o].concat(Object(j.a)(n))})),Y((function(n){return Object(f.a)(Object(f.a)({},n),{},{total:a})}))})),Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),function(){w.off("new_request")}}),[Z,w]);var an=[{title:"VERB",dataIndex:"method",key:"method"},{title:"PATH",dataIndex:"path",key:"path"},{title:"STATUS",dataIndex:"status",key:"status",render:function(n){return Object(g.jsx)("span",{className:"badge ".concat(K.includes(n)?"":"red"),children:n})}},{title:"DURATION",dataIndex:"duration",key:"duration"},{title:"HAPPENED",dataIndex:"timestamp",key:"timestamp",render:function(n){return Object(g.jsx)("span",{className:"date",children:L()(n).fromNow()})}},{title:"VIEW LOG",dataIndex:"logId",key:"logId",render:function(n){return Object(g.jsx)(N.a,{className:"viewLog",onClick:function(){return function(n){return nn.apply(this,arguments)}(n)}})}}];return Object(g.jsxs)(W,{children:[Object(g.jsxs)("div",{className:"innerWrapper",children:[Object(g.jsxs)("div",{className:"liveSection",children:["Live Monitoring : ",Object(g.jsx)("button",{children:"Connected"})]}),Object(g.jsx)(G,{loading:P,pagination:Object(f.a)({position:["bottomCenter"]},X),dataSource:S,columns:an,rowKey:function(n){return n.logId},onChange:function(n,e,t){return tn.apply(this,arguments)}})]}),Object(g.jsxs)(F,{children:["Argus Logger"," ",Object(g.jsx)("a",{href:"https://github.com/iamnasirudeen/argus",target:"_blank",rel:"noreferrer",children:"Repository"})]}),Object(g.jsxs)(T,{width:450,title:"Request & Response Details",placement:"left",onClose:en,visible:A,children:[Object(g.jsxs)("p",{children:["Hostname: ",null===B||void 0===B||null===(n=B.request)||void 0===n?void 0:n.hostname]}),Object(g.jsxs)("p",{children:["Client IP: ",null===B||void 0===B||null===(e=B.request)||void 0===e?void 0:e.ipAddress]}),Object(g.jsxs)("p",{children:["Method: ",null===B||void 0===B||null===(t=B.request)||void 0===t?void 0:t.method]}),Object(g.jsxs)("p",{children:["Status:"," ",Object(g.jsx)("span",{className:"badge ".concat(K.includes(null===B||void 0===B||null===(r=B.response)||void 0===r?void 0:r.status)?"":"red"),children:null===B||void 0===B||null===(c=B.response)||void 0===c?void 0:c.status})]}),Object(g.jsxs)("p",{children:["Path: ",null===B||void 0===B||null===(i=B.request)||void 0===i?void 0:i.path]}),Object(g.jsxs)("p",{children:["URL: ",null===B||void 0===B||null===(s=B.request)||void 0===s?void 0:s.url]}),Object(g.jsxs)("p",{children:["Time Spent: ",null===B||void 0===B||null===(l=B.request)||void 0===l?void 0:l.duration]}),Object(g.jsxs)(C.a,{defaultActiveKey:"1",children:[Object(g.jsx)($,{tab:"Payload",children:Object(g.jsx)(M.a,{themeClassName:"theme",data:(null===B||void 0===B||null===(d=B.request)||void 0===d||null===(u=d.body)||void 0===u?void 0:u[0])||{}})},"1"),Object(g.jsx)($,{tab:"Headers",children:Object(g.jsx)(M.a,{themeClassName:"theme",data:(null===B||void 0===B||null===(h=B.request)||void 0===h||null===(m=h.headers)||void 0===m?void 0:m[0])||{}})},"2"),Object(g.jsx)($,{tab:"Responses",children:Object(g.jsx)(M.a,{themeClassName:"theme",data:(null===B||void 0===B||null===(O=B.response)||void 0===O||null===(v=O.body)||void 0===v?void 0:v[0])||{}})},"3")]})]})]})},T=Object(I.a)(q.a)(w||(w=Object(d.a)(['\n  font-family: DM Sans;\n  font-weight: bold;\n\n  .theme {\n    padding: 1rem;\n    background: #252526;\n    font-family: Consolas, "Courier New", monospace;\n    font-weight: normal;\n    font-size: 13px;\n    font-feature-settings: "liga", "calt";\n    line-height: 18px;\n    letter-spacing: 0px;\n    color: #d4d4d4;\n    border-radius: 10px;\n\n    .__json-key__ {\n      color: #9cdcfe;\n    }\n\n    .__json-value__ {\n      color: #9cdcfe !important;\n    }\n\n    .__json-string__ {\n      color: #b5cea8;\n    }\n    .__json-boolean__ {\n      color: #569cd6;\n    }\n  }\n']))),F=I.a.div(y||(y=Object(d.a)(["\n  padding: 1rem;\n  text-align: center;\n  background: #0d1117;\n  color: #fff;\n  font-family: DM Sans;\n\n  a {\n    color: #ffffff;\n    text-decoration: underline;\n  }\n"]))),W=I.a.div(k||(k=Object(d.a)(['\n  background-color: #edf2f7 !important;\n\n  span.badge {\n    padding: 0.2rem 0.5rem 0.2rem 0.5rem;\n    background: #c6f6d5;\n    opacity: 0.5;\n    border-radius: 9999px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    &.red {\n      color: red !important;\n      background: #fcdbdd !important;\n    }\n  }\n\n  .viewLog {\n    font-size: 20px;\n    color: green;\n    opacity: 0.8;\n  }\n\n  .innerWrapper {\n    padding: 3rem;\n  }\n\n  .liveSection {\n    margin-bottom: 2rem;\n    font-family: DM Sans;\n    font-size: 14px;\n    font-weight: bold !important;\n\n    button {\n      background-color: #48bb78 !important;\n      color: #fff !important;\n      border: none;\n      outline: none;\n      border-radius: 5px;\n      padding: 6px 10px 6px 10px;\n    }\n  }\n\n  ul {\n    background-color: #edf2f7;\n\n    &.ant-pagination.ant-table-pagination.ant-table-pagination-right {\n      margin-right: 20px !important;\n\n      li {\n        border-radius: 8px;\n\n        &.ant-pagination-item-active {\n          background: #0052cc !important;\n\n          a {\n            color: #ffffff !important;\n          }\n        }\n\n        a {\n          font-family: "Work Sans", sans-serif;\n          font-style: normal;\n          font-weight: normal;\n          font-size: 15px;\n          text-align: center;\n        }\n      }\n    }\n  }\n\n  table {\n    background-color: #edf2f7;\n\n    thead {\n      tr {\n        th {\n          font-family: DM Sans;\n          font-style: normal;\n          font-weight: bold;\n          font-size: 12px;\n          line-height: 20px;\n          letter-spacing: 1px;\n          text-transform: uppercase;\n          background: #ffffff;\n          color: #8f92a1;\n        }\n      }\n    }\n    tbody {\n      background: #ffffff;\n      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n      tr {\n        td {\n          font-family: DM Sans;\n          font-weight: bold;\n          font-size: 13px;\n          color: #171717;\n\n          padding-top: 10px;\n          padding-bottom: 10px;\n\n          span.date {\n            font-family: DM Sans;\n            font-style: normal;\n            font-weight: bold;\n            font-size: 12px;\n            line-height: 20px;\n            text-align: right;\n            letter-spacing: 1px;\n            text-transform: uppercase;\n            color: #8f92a1;\n          }\n        }\n      }\n    }\n  }\n']))),G=Object(I.a)(P.a)(S||(S=Object(d.a)([""]))),H=t(285),U=t(283),B=t(287),J=t(48),K=t.p+"static/media/bg.eb85a83b.jpg";var V=function(){var n=Object(o.useState)(!1),e=Object(a.a)(n,2),t=e[0],r=e[1],c=H.a.useForm(),i=Object(a.a)(c,1)[0];return Object(g.jsx)(Q,{children:Object(g.jsx)(X,{isLoading:t,children:Object(g.jsxs)(H.a,{form:i,layout:"vertical",onFinish:function(n){console.log(n),r(!t)},requiredMark:!1,children:[Object(g.jsx)("h2",{children:"ARGUS LOGGER"}),Object(g.jsx)(U.a,{}),Object(g.jsx)(H.a.Item,{label:"Email Address*",name:"email",rules:[{required:!0,message:"Pls enter a valid email address",type:"email"}],children:Object(g.jsx)(B.a,{})}),Object(g.jsx)(H.a.Item,{label:"Password*",name:"password",rules:[{required:!0,message:"Password is required"}],children:Object(g.jsx)(B.a,{type:"password"})}),Object(g.jsx)(U.a,{}),Object(g.jsx)(J.a,{loading:t,htmlType:"submit",children:t?"Signing in...":"Login"})]})})})},Q=I.a.div(E||(E=Object(d.a)(["\n  background-size: cover;\n  font-family: DM Sans;\n  font-size: 14px;\n  background-image: url(",");\n"])),K),X=I.a.div(A||(A=Object(d.a)(["\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h2 {\n    text-align: center;\n    font-weight: bold;\n  }\n\n  form {\n    background: #fff;\n    width: 400px;\n    padding: 1rem;\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n\n    label {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: 12px;\n    }\n\n    button {\n      display: block;\n      width: 100%;\n      background-color: #48bb78 !important;\n      color: #fff !important;\n      border: none;\n      outline: none;\n      padding: 6px 10px 6px 10px;\n      cursor: "," !important;\n    }\n  }\n"])),(function(n){return n.isLoading?"not-allowed":"pointer"})),Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,289)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),o(n),r(n),c(n)}))},Z=(t(278),Object(o.createContext)()),$=function(n){var e=n.children,t=Object(o.useState)(null),r=Object(a.a)(t,2),c=r[0],i=r[1],s=window.location.pathname;return Object(o.useEffect)((function(){function n(){return e.apply(this,arguments)}function e(){return(e=Object(b.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"api/logs/config"));case 2:return n.next=4,n.sent.json();case 4:e=n.sent,console.log(e),i(null===e||void 0===e?void 0:e.authentication);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}),[s]),Object(g.jsx)(Z.Provider,{value:{authenticationStatus:c},children:null===c?"Loading...":e})};function nn(n){var e=n.path,t=n.exact,r=n.component,c=Object(o.useContext)(Z).authenticationStatus,i=Object(o.useState)(null),s=Object(a.a)(i,2),d=s[0],u=s[1];return Object(o.useEffect)((function(){var n=null!==localStorage.getItem("argus::authentication")&&"true"===localStorage.getItem("argus::authentication");u(n)}),[]),Object(g.jsx)(g.Fragment,{children:c?d?Object(g.jsx)(l.b,{path:e,exact:t,component:r}):Object(g.jsx)(l.a,{to:"/auth"}):Object(g.jsx)(l.b,{path:e,exact:t,component:r})})}i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)($,{children:Object(g.jsx)(_,{children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:"/auth",component:V}),Object(g.jsx)(nn,{exact:!0,path:"*",component:R})]})})})})}),document.getElementById("root")),Y()}},[[280,1,2]]]);
//# sourceMappingURL=main.b55cfe88.chunk.js.map