(this.webpackJsonpomarelaoufi=this.webpackJsonpomarelaoufi||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e.n(c),i=e(12),a=e.n(i),u=e(2),s=e(4),b=e(3),f=e(6);function j(){var n=Object(u.a)(["\n  font-size: 1.1rem;\n  line-height: 1.3;\n  font-weight: 500;\n"]);return j=function(){return n},n}var l=b.a.div(j()),m=function(n){var t=n.text,e=void 0===t?"":t,o=n.mainText,i=n.textDone,a=n.setTextDone,u=Object(c.useState)(0),b=Object(s.a)(u,2),j=b[0],m=b[1],d=Object(c.useState)([]),O=Object(s.a)(d,2),p=O[0],x=O[1],g=Object(c.useState)(!0),h=Object(s.a)(g,2),v=h[0],y=h[1];return Object(c.useEffect)((function(){j<=e.length?setTimeout((function(){x((function(n){return Object(f.a)(n.slice(0,-1))})),x((function(n){return[].concat(Object(f.a)(n),[e[j],"\u2593"])})),m((function(n){return n+1}))}),30):(a(!0),(o||!o&&v)&&(v?setTimeout((function(){x((function(n){return Object(f.a)(n.slice(0,-1))})),y(!1)}),500):setTimeout((function(){x((function(n){return[].concat(Object(f.a)(n),["\u2593"])})),y(!0)}),500)))}),[e,a,j,i,v,o]),Object(r.jsx)(l,{children:p.map((function(n){return"\\"===n?Object(r.jsx)("br",{}):n}))})};e(23);function d(){var n=Object(u.a)(["\n  position: absolute;\n  left: 0;\n  height: 70px;\n  opacity: 0;\n  animation: 15s "," linear ","ms infinite\n      running,\n    15s "," linear ","ms infinite running;\n"]);return d=function(){return n},n}function O(){var n=Object(u.a)(["\n  from {\n    left: 0;\n  }\n  to {\n    left: calc(100% - 70px);\n  }\n"]);return O=function(){return n},n}function p(){var n=Object(u.a)(["\n  0% {\n    opacity: 0;\n  }\n  33% {\n    opacity: 1;\n  }\n  66% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(u.a)(["\n  margin-top: 2.2rem;\n  &:hover > img {\n    animation-play-state: paused;\n  }\n"]);return x=function(){return n},n}var g=b.a.div(x()),h=Object(b.b)(p()),v=Object(b.b)(O()),y=b.a.img(d(),h,(function(n){return 1e3*n.order}),v,(function(n){return 1e3*n.order})),k=function(){return Object(r.jsx)(g,{children:["python","django","flask","javascript","node","express","react","redux","formik","postgresql","mongodb","selenium","websocket","bootstrap","cypress"].map((function(n,t){return Object(r.jsx)(y,{order:t,alt:n.toUpperCase(),src:n+".png"})}))})};function w(){var n=Object(u.a)(["\n  background: #fff;\n  border: none;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 10px;\n  box-shadow: ",";\n  margin-bottom: 0.7rem;\n  &:focus {\n    outline: none;\n  }\n  ",";\n"]);return w=function(){return n},n}function T(){var n=Object(u.a)(["\n  margin-top: 1.1rem;\n  text-align: right;\n  animation: "," ease 400ms;\n"]);return T=function(){return n},n}function S(){var n=Object(u.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return S=function(){return n},n}function I(){var n=Object(u.a)(['\n  font-family: "Inconsolata", monospace;\n  color: #282828;\n  width: calc(100% - 50px);\n  max-width: 500px;\n  margin: auto;\n  margin-top: 5rem;\n']);return I=function(){return n},n}var D=b.a.div(I()),C=Object(b.b)(S()),F=b.a.div(T(),C),A=b.a.button(w(),(function(n){return n.clicked?"initial":"0 16px 32px 0 rgba(102, 138, 165, 0.4)"}),(function(n){return n.clicked&&"background: rgba(15,92,121,0.13)"})),B=function(){var n=Object(c.useState)(!1),t=Object(s.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(s.a)(i,2),u=a[0],b=a[1],f=Object(c.useState)(0),j=Object(s.a)(f,2),l=j[0],d=j[1],O=Object(c.useState)(null),p=Object(s.a)(O,2),x=p[0],g=p[1];return Object(r.jsxs)(D,{className:"App",children:[Object(r.jsx)(m,{currentText:0===l,textDone:e,setTextDone:o,text:"Hi, I'm Omar El Aoufi.\\I am the full-stack developer you need."}),e&&Object(r.jsxs)(F,{children:[(null===x||0===x)&&Object(r.jsx)(A,{clicked:0===x,onClick:function(){g(0)},children:"\ud83d\udcbb show me your powers"}),Object(r.jsx)("br",{}),(null===x||1===x)&&Object(r.jsx)(A,{className:"whoYouAreButton",clicked:1===x,onClick:function(){g(1),d(1)},children:"\ud83e\udd37 who are you ?"})]}),0===x&&Object(r.jsx)(k,{}),1===x&&Object(r.jsx)(m,{currentText:1===l,textDone:u,setTextDone:b,text:"I spent 26 years trying to take over the world by developing tech skills.\\My headquarters are in Paris.\\I've been developing since I'm 13 years old."})]})},E=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),o(n),i(n)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),E()}},[[24,1,2]]]);
//# sourceMappingURL=main.c2a5751e.chunk.js.map