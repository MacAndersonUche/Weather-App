(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{37:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c,r,a,i,s,o,h,j=t(27),l=t.n(j),d=(t(37),t(15)),b=t(7),x=t(3),u=t(12),p=t.n(u),O=t(1),m=t.n(O),f=t(6),w=t(4),g="39a9c40b686f636e478be8e6b9c56d96",v=m.a.createContext(),y=t(2),k=function(e){var n,t=e.forecast,c=e.itemNo;return Object(y.jsxs)("p",{children:["Temp: ",t.list&&(n=t.list[c].main.temp,"".concat(Math.floor(9*(n-273)/5+32)," F"))]})},C=w.a.div(c||(c=Object(x.a)(["\n\nwidth: 15%;\nheight: 20%;\nfont-size: 0.8rem;\n\nbackground-Color: #0F5A80;\ntext-align: center;\n\n  @media (max-width: 770px) {\n \n        width: 20%;\n        height: 15%;\n        margin: 0 2px;\n     font-size: 0.8rem;\n  }\n\n"]))),S=w.a.img(r||(r=Object(x.a)(["\nheight: 70%;\nwidth: 70%;\n\n"]))),z=function(e){var n,t=e.forecast,c=e.itemNo,r=Object(O.useContext)(v);return Object(y.jsxs)(C,{children:[Object(y.jsx)("h5",{children:new Date(t.list[c].dt_txt).toLocaleDateString()}),Object(y.jsx)(S,{alt:"My Cloud",src:" http://openweathermap.org/img/wn/".concat(t.list[c].weather[0].icon,"@2x.png")}),!r.fiveFar&&Object(y.jsxs)("p",{children:["Temp: ",(n=t.list[c].main.temp,Math.floor(n-273)+"C")]}),r.fiveFar&&Object(y.jsx)(k,{forecast:t,itemNo:c})]})},M=w.a.div(a||(a=Object(x.a)(["\n\ndisplay: flex;\njustify-content: space-between;\nalign-content: center;\ntext-align: center;\n\n  @media (max-width: 770px) {\n \n \n    // width: ;\n   \n    //  font-size: 0.8rem;\n  }\n\n"]))),T=function(e){var n=e.forecast;return Object(y.jsx)("div",{children:n.list&&Object(y.jsxs)(M,{children:[Object(y.jsx)(z,{forecast:n,itemNo:3}),Object(y.jsx)(z,{forecast:n,itemNo:11}),Object(y.jsx)(z,{forecast:n,itemNo:19}),Object(y.jsx)(z,{forecast:n,itemNo:27}),Object(y.jsx)(z,{forecast:n,itemNo:35})]})})},F=w.a.div(i||(i=Object(x.a)(["\nbackground-Color: #0F5A80;\nheight: 10rem;\nwidth: 22.5rem;\n\ntext-align: center;\nmargin: 0.5rem; 1rem;\n\n\n  @media (max-width: 1000px) {\n \n    height: 30%;\n    width: 30%;\n    \n     font-size: 0.8rem;\n\n     text-align: center;\n  }\n\n\n\n\n"]))),N=w.a.div(s||(s=Object(x.a)(["\nheight: 20rem;\nwidth: 100%;\n  display: flex;\n  flex-wrap: wrap;\n\n align-content: space-evenly;\n text-align: center;\n\n  @media (max-width: 1000px) {\n    display: flex;\n    flex-wrap: wrap;\n\n    align-content: space-evenly;\n    height: 20rem;\n    width: 100%;\n    \n     font-size: 0.8rem;\n       text-align: center;\n  }\n\n"]))),Y=function(e){var n=e.weather;function t(e){return+(Math.round(e+"e+2")+"e-2")}return Object(y.jsxs)(N,{children:[Object(y.jsxs)(F,{children:[Object(y.jsx)("p",{children:"Wind Status"}),Object(y.jsxs)("h2",{children:[n.wind&&n.wind.speed," m/s"]})]}),Object(y.jsxs)(F,{children:[Object(y.jsx)("p",{children:"Humidity"}),Object(y.jsxs)("h2",{children:[n.main&&n.main.humidity,"%"]})]}),Object(y.jsxs)(F,{children:[Object(y.jsx)("p",{children:"Visibility"}),Object(y.jsxs)("h2",{children:[n&&t(621e-6*n.visibility)," miles"]})]}),Object(y.jsxs)(F,{children:[Object(y.jsx)("p",{children:"Air Pressure"}),Object(y.jsxs)("h2",{children:[n.main&&t(n.main.pressure/1e3)," atm "]})]})]})},P=w.a.button(o||(o=Object(x.a)(["\nheight: 2rem;\nwidth: 2rem;\nborder-radius: 0.5rem;\nfont-size: 1rem\n\n"]))),D=w.a.div(h||(h=Object(x.a)(["\nleft: 0;\n\n\n"]))),E=function(e){var n=e.weather,t=e.forecast,c=Object(O.useContext)(v);return Object(y.jsxs)("div",{children:[Object(y.jsxs)(D,{children:[Object(y.jsx)(P,{onClick:c.convertToC,children:"C"}),Object(y.jsx)(P,{onClick:c.convertToF,children:"F"})]}),Object(y.jsx)(T,{forecast:t}),Object(y.jsx)("h3",{children:"Todays Highlights"}),Object(y.jsx)(Y,{weather:n})]})},H=t(31),q=t(11);var A,I,J,B,G,L,V,W,_,K,Q,R,U=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Invalid City"}),Object(y.jsxs)(q.b,{to:"/",children:[" ",Object(y.jsx)("button",{children:"  Home "})]})]})},X=t(19),Z=t.n(X),$=t(20),ee=w.a.div(A||(A=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  height: 90%;\n  align-content: flex-end;\n  text-align: center;\n  font-size: 1rem;\n  left: 0;\n\n//     @media (max-width: 770px) {\n \n//      display: flex;\n//      flex-direction: row;\n     \n//      justify-content: space-evenly;\n//      align-content: center;\n//      width: 40%;\n//     height: 80%;\n    \n//      font-size: 0.8rem;\n//   }\n\n @media (max-width: 770px) {\n \n        width: 100%;\n        height: 70%;\n    \n     font-size: 0.8rem;\n  }\n\n"]))),ne=w.a.img(I||(I=Object(x.a)(["\nheight: 25rem;\nwidth: 15rem;\n\n @media (max-width: 770px) {\n        \n        height: 15rem;\n        width: 10rem;\n  }\n\n"]))),te=w.a.p(J||(J=Object(x.a)(["\nfont-size: 2.5rem;\nmargin: 1.2rem 0;\n\n\n   @media (max-width: 770px) {\n        \n        font-size: 1.2rem;\n        margin: 0;\n  }\n\n"]))),ce=function(e){var n=e.weather,t=Object(O.useContext)(v);return Object(y.jsxs)(ee,{children:[Object(y.jsx)(q.b,{to:"/",children:Object(y.jsx)("button",{children:"Go back"})}),Object(y.jsx)("div",{children:n.weather&&Object(y.jsx)(ne,{alt:"cloud",src:" http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png")})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(te,{children:t.tempState}),Object(y.jsx)(te,{children:n.weather&&n.weather[0].description})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:Z()().format("MMMM Do YYYY")}),Object(y.jsxs)("p",{children:[Object(y.jsx)($.a,{})," - ",n&&n.name]})]})]})},re=w.a.div(B||(B=Object(x.a)(["\n\ndisplay: flex;\njustify-content: space-evenly;\nalign-content: center;\n  @media (max-width: 770px) {\n \n    display: block;\n    width: 100vw;\n    height: 100vh;\n    \n     font-size: 0.8rem;\n  }\n\n\n"]))),ae=w.a.input(G||(G=Object(x.a)(["\n padding: 10px;\n  font-size: 17px;\n  border: 1px solid grey;\n  float: left;\n  width: 70%;\n  background: #f1f1f1;\n   height: 100%;\n\n"]))),ie=w.a.button(L||(L=Object(x.a)(["\n float: left;\n  width: 30%;\n  padding: 10px;\n  background: #2196F3;\n  color: white;\n  font-size: 17px;\n  height: 100%;\n  border: 1px solid grey;\n  border-left: none; /* Prevent double borders */\n  cursor: pointer;\n\n  &:hover{\n      background: #0b7dda;\n  }\n\n\n"]))),se=w.a.form(V||(V=Object(x.a)(["\n  box-sizing: border-box;\n  width: 100%;\n   float: left;\n   left: 0;\n\n"]))),oe=function(){var e=Object(O.useState)({}),n=Object(b.a)(e,2),t=n[0],c=n[1],r=Object(O.useState)({}),a=Object(b.a)(r,2),i=a[0],s=a[1],o=Object(O.useState)(!1),h=Object(b.a)(o,2),j=h[0],l=h[1],x=Object(O.useState)(""),u=Object(b.a)(x,2),m=u[0],f=u[1],w=Object(O.useState)(!1),v=Object(b.a)(w,2),k=v[0],C=v[1];function S(e){function n(){return(n=Object(d.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&appid=").concat(g));case 3:if(!(n=e.sent).ok){e.next=13;break}return e.next=7,n.json();case 7:return t=e.sent,c(t),console.log(t),e.abrupt("return",t);case 13:throw C(!0),new U("There was an error"+n.status);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),C(!0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function t(){return(t=Object(d.a)(p.a.mark((function e(){var n,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(m,"&appid=").concat(g));case 3:if(!(n=e.sent).ok){e.next=13;break}return e.next=7,n.json();case 7:return t=e.sent,s(t),console.log(t.list),e.abrupt("return",t);case 13:throw C(!0),new U("There was an error"+n.status);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),C(!0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}e.preventDefault(),l(!0),function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),console.log(m)}return Object(y.jsxs)("div",{children:[!j&&!k&&Object(y.jsxs)(se,{onSubmit:S,children:[Object(y.jsx)(ae,{placeholder:"Search location",value:m,onChange:function(e){return f(e.target.value)}}),Object(y.jsxs)(ie,{onClick:S,children:["Search ",Object(y.jsx)(H.a,{})]})]}),j&&!k&&Object(y.jsxs)(re,{children:[Object(y.jsx)(ce,{weather:t}),Object(y.jsx)(E,{forecast:i,weather:t})]}),k&&Object(y.jsx)(U,{})]})},he=w.a.div(W||(W=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n  align-content: flex-end;\n  text-align: center;\n  font-size: 1rem;\n  left: 0;\n\n    @media (max-width: 770px) {\n \n        width: 100%;\n        height: 50%;\n    \n     font-size: 0.8rem;\n  }\n\n   \n\n"]))),je=w.a.img(_||(_=Object(x.a)(["\nheight: 25rem;\nwidth: 15rem;\n\n  @media (max-width: 770px) {\n        \n        height: 15rem;\n        width: 10rem;\n  }\n\n"]))),le=w.a.p(K||(K=Object(x.a)(["\nfont-size: 2.5rem;\nmargin: 1.2rem 0;\n\n    @media (max-width: 770px) {\n        \n        font-size: 1.2rem;\n        margin: 0;\n  }\n\n"]))),de=function(e){var n=e.weather,t=Object(O.useContext)(v);return Object(y.jsxs)(he,{children:[n.weather&&Object(y.jsx)(je,{alt:"cloud",src:" http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png")}),Object(y.jsx)(le,{children:t.tempState}),Object(y.jsx)(le,{children:n.weather&&n.weather[0].description}),Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:Z()().format("MMMM Do YYYY")}),Object(y.jsxs)("p",{children:[Object(y.jsx)($.a,{})," - ",n&&n.name]})]})]})},be=w.a.div(Q||(Q=Object(x.a)(["\nleft: 0;\n"]))),xe=function(e){var n=e.weather;return Object(y.jsxs)(be,{children:[Object(y.jsx)(q.b,{to:"/search",children:Object(y.jsx)("button",{children:"Search for place"})}),Object(y.jsx)(de,{weather:n})]})},ue=t(23),pe=t(32),Oe=t.n(pe),me=Object(ue.css)(R||(R=Object(x.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));var fe=function(){return Object(y.jsx)("div",{className:"sweet-loading",children:Object(y.jsx)(Oe.a,{css:me,size:150})})};var we,ge=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Please accept request to use location"}),Object(y.jsxs)(q.b,{to:"/",children:[" ",Object(y.jsx)("button",{children:"  Home "})]})]})},ve=w.a.div(we||(we=Object(x.a)(["\n\ndisplay: flex;\njustify-content: space-evenly;\nalign-content: center;\n\n \n\n    @media (max-width: 770px) {\n \n    display: block;\n    width: 100vw;\n    height: 100vh;\n    \n     font-size: 0.8rem;\n  }\n\n\n"])));var ye=function(){var e=Object(O.useState)({}),n=Object(b.a)(e,2),t=n[0],c=n[1],r=Object(O.useState)({}),a=Object(b.a)(r,2),i=a[0],s=a[1],o=Object(O.useState)(!1),h=Object(b.a)(o,2),j=h[0],l=h[1],x=Object(O.useState)(""),u=Object(b.a)(x,2),m=u[0],w=u[1],k=Object(O.useState)(!1),C=Object(b.a)(k,2),S=C[0],z=C[1],M=Object(O.useState)(!0),T=Object(b.a)(M,2),F=T[0],N=T[1],Y=Object(O.useState)(!1),P=Object(b.a)(Y,2),D=P[0],H=P[1],q=t.main&&Math.floor(t.main&&t.main.temp-273.15),A=t.main&&t.main.temp-273.15;console.log(m);var I={convertToF:function(){z(!0),w("".concat(Math.floor(9*A/5)+32," F"))},tempState:m,setTempState:w,convertToC:function(){z(!1),w("".concat(q," C"))},fiveFar:S};return Object(O.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){function n(){return(n=Object(d.a)(p.a.mark((function n(){var t,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.coords.latitude&&e.coords.latitude,"&lon=").concat(e.coords.longitude&&e.coords.longitude,"&appid=").concat(g));case 3:if(!(t=n.sent).ok){n.next=13;break}return n.next=7,t.json();case 7:return r=n.sent,c(r),console.log(r),n.abrupt("return",r);case 13:throw new Error("There was an error"+t.status);case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}function t(){return(t=Object(d.a)(p.a.mark((function n(){var t,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e.coords.latitude&&e.coords.latitude,"&lon=").concat(e.coords.longitude&&e.coords.longitude,"&appid=").concat(g));case 3:if(!(t=n.sent).ok){n.next=13;break}return n.next=7,t.json();case 7:return c=n.sent,s(c),console.log(c.list),n.abrupt("return",c);case 13:throw new Error("There was an error"+t.status);case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}0===Object.keys(e).length&&H(!0),function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),N(!1)})),w("".concat(q," C"))}),[q]),D&&F?Object(y.jsx)(ge,{}):Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{path:"/search",children:Object(y.jsx)(v.Provider,{value:I,children:Object(y.jsx)(oe,{})})}),Object(y.jsx)(f.a,{path:"/",children:Object(y.jsxs)(ve,{children:[!F&&Object(y.jsxs)(v.Provider,{value:I,children:[Object(y.jsx)(xe,{weather:t,setSearchClicked:l,searchClicked:j}),Object(y.jsx)(E,{weather:t,forecast:i,searchClicked:j})]}),F&&Object(y.jsx)(fe,{})]})})]})};l.a.render(Object(y.jsx)(q.a,{children:Object(y.jsx)(ye,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.45db9ea3.chunk.js.map