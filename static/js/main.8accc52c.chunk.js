(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{73:function(e,n,t){"use strict";t.r(n);var i,a,o,r,c,d,l,s,h,p,x,u,b,f,j,w,g,v,m,O,y,C,D,W=t(2),F=t(0),P=t.n(F),S=t(16),E=t.n(S),I=t(3),J=I.b.select(i||(i=Object(W.a)(["\n  display: block;\n  color: ",";\n  font-size: 16px;\n  height: 48px;\n  padding: 13px 34px 13px 10px;\n  margin-left: 4px;\n  width: 251px;\n  max-width: 100%;\n  border: 2px solid rgba(128, 131, 164, 0.2);\n  border-radius: 8px;\n  outline: none;\n  background: rgba(128, 131, 164, 0.06);\n  transition: background-color 0.7s ease;\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n    border: 2px solid #8083A4;\n  }\n\n  &:active {\n    border: 2px solid #373AF5;\n  }\n\n  @media "," {\n    margin-left: 0px;\n    width: 100%;\n  }\n"])),(function(e){return e.isCitySelected?"#2C2D76":"#8083A4"}),"(max-width: 730px)"),L=I.b.option(a||(a=Object(W.a)(["\n  color:#2C2D76;\n  background-color: #fff;\n  border-radius: 5px;\n"]))),q=[{name:"Samara",value:"lat=53.19&lon=50.10"},{value:"lat=53.50&lon=49.42",name:"Toliatty"},{value:"lat=51.53&lon=46.03",name:"Saratov"},{value:"lat=55.79&lon=49.10",name:"Kazan"},{value:"lat=45.03&lon=38.97",name:"Krasnodar"}],G="04160438ae6d577745ad287cda3d9bca",k=t(1),H=function(e){var n=e.value,t=e.name;return Object(k.jsx)(L,{value:n,children:t},n)},K=function(e){var n=e.city,t=e.selectCity;return Object(k.jsxs)(J,{value:n,onChange:t,placeholder:"Select city",isCitySelected:!!n,children:[Object(k.jsx)(L,{selected:!n,disabled:!0,children:"Select city"}),q.map(H)]})},V=I.b.div(o||(o=Object(W.a)(["\n  background-color: #373AF5;\n  border-radius: 6px;\n  width: ",";\n  height: 237px;\n  padding: 20px 21px 24px 19px;\n  margin: 55px 5px 0px 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media "," {\n    margin-top: 30px;\n  }\n  \n  @media "," {\n    border: 2px solid #2C2D76;\n    margin-right: 16px;\n  }\n"])),(function(e){return e.width}),"(max-width: 730px)","(max-width: 359px)"),z=I.b.div(r||(r=Object(W.a)(["\n  font-weight: 700;\n  text-transform: lowercase;\n"]))),A=I.b.img(c||(c=Object(W.a)(["\n  height: ",";\n  align-self: center;\n"])),(function(e){return e.heightIcon})),N=I.b.div(d||(d=Object(W.a)(["\n  font-size: 32px;\n  font-weight: 700;\n  align-self: flex-end;\n"]))),T=function(e){var n=e.date,t=e.weather,i=e.width,a=e.heightIcon,o=t.temp>0?"+":"";return Object(k.jsxs)(V,{width:i,children:[Object(k.jsx)(z,{children:n}),Object(k.jsx)(A,{heightIcon:a,src:"http://openweathermap.org/img/wn/".concat(t.icon,".png")}),Object(k.jsxs)(N,{children:[o,t.temp,"\xb0"]})]})},X=I.b.div(l||(l=Object(W.a)(["\n  width: 660px;\n  height: 524px;\n  padding: 54px 54px;\n  background: #fff;\n  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25), 14px 14px 20px rgba(5, 6, 114, 0.2);\n  border-radius: 8px;\n\n  @media "," {\n    margin-bottom: 34px;\n  }\n  \n  @media "," {\n    width: 100%;\n    padding: 32px 54px 60px 54px;\n    height: auto;\n  }\n\n  @media "," {\n    padding: 32px 24px 60px 24px;\n    margin-bottom: 10px;\n  }\n"])),"(max-width: 1470px)","(max-width: 730px)","(max-width: 359px)"),Y=I.b.h1(s||(s=Object(W.a)(["\n  margin-bottom: 36px;\n  margin-left: 4px;\n  color: #2C2D76;\n  font-weight: bold;\n  font-size: 32px;\n\n  @media "," {\n    margin-left: 0px;\n    line-height: 32px;\n  }\n  \n  @media "," {\n    margin-left: 0px;\n    line-height: 32px;\n    font-size: 25px;\n  }\n"])),"(max-width: 730px)","(max-width: 390px)"),B=I.b.div(h||(h=Object(W.a)(["\n  font-weight: bold;\n  text-align: center;\n  margin-top: 60px;\n"]))),Q=I.b.img(p||(p=Object(W.a)(["\n  margin-bottom: 22px;\n"]))),R=I.b.p(x||(x=Object(W.a)(["\n  color:#8083A4;\n"]))),M=I.b.div(u||(u=Object(W.a)(["\n  display: flex;\n\n  @media "," {\n    overflow-y: hidden;\n  }\n"])),"(max-width: 705px)"),Z=I.b.button(b||(b=Object(W.a)(["\n  position: relative;\n  top: 21px;\n  left: -33px;\n  border: none;\n  outline: none;\n  opacity: 0.6;\n\n  @media "," {\n    display: none;\n  }\n\n  &:hover {\n      cursor: pointer;\n      opacity: 1;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: block;\n    border-right: solid 2px #8083A4;\n    border-top: solid 2px #8083A4;\n    width: 10px;\n    height: 10px;\n    transform: translate(12px, 0px) rotate(-135deg);\n  }\n"])),"(max-width: 705px)"),U=I.b.button(f||(f=Object(W.a)(["\n  position: relative;\n  top: 21px;\n  right: 1px;\n  border: none;\n  outline: none;\n  opacity: 0.6;\n\n  @media "," {\n    display: none;\n  }\n\n  &:hover {\n      cursor: pointer;\n      opacity: 1;\n  }\n  \n  &:after {\n    content: '';\n    position: absolute;\n    display: block;\n    border-right: solid 2px #8083A4;\n    border-top: solid 2px #8083A4;\n    width: 10px;\n    height: 10px;\n    transform: translate(8px, 0px) rotate(45deg);\n  }\n"])),"(max-width: 705px)"),$=t.p+"static/media/placeholder-icon.1a743710.svg",_=t(5),ee=t(22),ne=t(15),te=t.n(ne),ie=t(20),ae=t(21),oe=t.n(ae),re=function(e){return e.toISOString().slice(0,10)},ce=function(e){return new Date(1e3*e).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}).toLowerCase()+""},de=function(e){return{date:ce(e.dt),temp:Math.round(e.temp.day),icon:e.weather[0].icon}},le=function(){var e=Object(ie.a)(te.a.mark((function e(n){var t,i;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("https://api.openweathermap.org/data/2.5/onecall?".concat(n,"&exclude=current,minutely,hourly,alerts&units=metric&appid=").concat(G));case 2:return t=e.sent,i=t.data,e.abrupt("return",i.daily.map(de));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),se=function(){var e=Object(ie.a)(te.a.mark((function e(n,t){var i,a,o;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Date(t).getTime()/1e3,e.next=3,oe.a.get("https://api.openweathermap.org/data/2.5/onecall/timemachine?".concat(n,"&dt=").concat(i,"&units=metric&appid=").concat(G));case 3:return a=e.sent,o=a.data,e.abrupt("return",{city:n,date:t,weather:(r=o.current,{date:ce(r.dt),temp:Math.round(r.temp),icon:r.weather[0].icon})});case 6:case"end":return e.stop()}var r}),e)})));return function(n,t){return e.apply(this,arguments)}}(),he=function(){var e=Object(F.useState)(),n=Object(_.a)(e,2),t=n[0],i=n[1],a=Object(F.useState)(),o=Object(_.a)(a,2),r=o[0],c=o[1];return{city:t,selectCity:function(e){i(e.target.value)},date:r,selectDate:function(e){c(e.target.value)}}},pe=t(9),xe=t(75),ue=Object(xe.a)("weathers/save"),be=Object(xe.a)("weather/save"),fe=function(e){return Object(k.jsx)(T,{date:e.date,weather:e,heightIcon:"115px",width:"174px"},e.date)},je=function(){var e=function(){var e=Object(F.useState)(),n=Object(_.a)(e,2),t=n[0],i=n[1],a=he(),o=a.city,r=a.selectCity;return Object(F.useEffect)((function(){o&&le(o).then(i)}),[o]),{weathers:t,city:o,selectCity:r}}(),n=e.city,t=e.selectCity,i=e.weathers,a=function(e){var n=Object(ee.a)("(min-width: 706px)"),t=Object(ee.a)("(max-width: 705px)"),i=3,a=7,o=Object(F.useState)(0),r=Object(_.a)(o,2),c=r[0],d=r[1],l=Object(F.useState)(i),s=Object(_.a)(l,2),h=s[0],p=s[1];Object(F.useEffect)((function(){t&&p(a),n&&p(i)}),[n,t]);var x=e?e.slice(c,c+h):[];return{position:c,next:function(){d(c+1)},prev:function(){d(c-1)},list:x,pageSize:h}}(i),o=a.position,r=a.next,c=a.prev,d=a.list,l=a.pageSize;return Object(k.jsxs)(X,{children:[Object(k.jsx)(Y,{children:"7 Days Forecast"}),Object(k.jsx)(K,{city:n,selectCity:t}),i&&d?Object(k.jsxs)(M,{children:[Object(k.jsx)(Z,{disabled:0===o,onClick:c}),d.map(fe),Object(k.jsx)(U,{disabled:o===i.length-l,onClick:r})]}):Object(k.jsxs)(B,{children:[Object(k.jsx)(Q,{src:$}),Object(k.jsx)(R,{children:"Fill in all the fields and the weather will be displayed"})]})]})},we=I.b.input(j||(j=Object(W.a)(["\n  width: 251px;\n  max-width: 100%;\n  height: 48px;\n  margin-right: 5px;\n  border: 2px solid rgba(128, 131, 164, 0.2);\n  border-radius: 8px;\n  outline: none;\n  font-size: 16px;\n  font-weight: 400;\n  color:#8083A4;\n  padding: 14px 9px 13px 15px;\n  background: rgba(128, 131, 164, 0.06);\n\n  &:hover {\n    border: 2px solid #8083A4;\n  }\n\n  &:active {\n    border: 2px solid #373AF5;\n  }\n  \n  &::placeholder {\n    color:#8083A4;\n    font-weight: 400;\n  }\n  \n  @media "," {\n    width: 100%;\n    margin-top: 24px;\n  }\n"])),"(max-width: 730px)"),ge=function(e){var n=e.date,t=e.selectDate,i=P.a.useState("text"),a=Object(_.a)(i,2),o=a[0],r=a[1],c=new Date,d=re(new Date((new Date).setDate(c.getDate()-5))),l=re(c);return Object(k.jsx)(we,{onChange:t,onFocus:function(){"date"!==o&&r("date")},onBlur:function(){n||"text"===o||r("text")},onKeyDown:function(){},type:o,min:d,max:l,value:n,placeholder:"Select date",required:!0})},ve=I.b.div(w||(w=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media "," {\n    flex-direction: column;\n  }\n"])),"(max-width: 730px)"),me=t(39),Oe=Object(me.a)((function(e){return e.weather}),(function(e){return e.list})),ye=function(e,n,t){var i=Object(pe.b)();Object(F.useEffect)((function(){e&&n&&!t&&se(e,n).then((function(e){return i(be(e))}))}),[e,n])},Ce=function(){var e=function(){var e,n=he(),t=n.city,i=n.selectCity,a=n.date,o=n.selectDate,r=Object(pe.c)(Oe),c=t&&a&&(null===r||void 0===r||null===(e=r[t])||void 0===e?void 0:e[a]);return ye(t,a,!!c),{weather:c,city:t,selectCity:i,date:a,selectDate:o}}(),n=e.city,t=e.selectCity,i=e.date,a=e.selectDate,o=e.weather,r=function(e){if(e)return new Date(e).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}).toLowerCase()+""}(i);return Object(k.jsxs)(X,{children:[Object(k.jsx)(Y,{children:"Forecast for a Date in the Past"}),Object(k.jsxs)(ve,{children:[Object(k.jsx)(K,{city:n,selectCity:t}),Object(k.jsx)(ge,{date:i,selectDate:a})]}),o?Object(k.jsx)(T,{date:r,weather:o,heightIcon:"146px",width:"98.5%"}):Object(k.jsxs)(B,{children:[Object(k.jsx)(Q,{src:$}),Object(k.jsx)(R,{children:"Fill in all the fields and the weather will be displayed"})]})]})},De=I.b.div(g||(g=Object(W.a)([""]))),We=I.b.header(v||(v=Object(W.a)(["\n  width: 775px;\n  margin: 0 auto 72px auto;\n\n  @media "," {\n    width: 100%;\n  }\n\n  @media "," {\n    width: 245px;\n    margin-bottom: 24px;\n  }\n"])),"(max-width: 880px)","(max-width: 730px)"),Fe=I.b.h1(m||(m=Object(W.a)(["\n  font-weight: bold;\n  font-size: 102px;\n  line-height: ",";\n  text-align: ",";\n\n  @media "," {\n    font-size: 32px;\n    line-height: 32px;\n  }\n"])),(function(e){return e.lineHeight}),(function(e){return e.textAlign}),"(max-width: 730px)"),Pe=I.b.footer(O||(O=Object(W.a)(["\n  color: #fff;\n  margin-top: 199px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 18px;\n  opacity: 0.6;\n  \n  @media "," {\n    margin-top: 12px;\n  }\n"])),"(max-width: 1470px)"),Se=I.b.img(y||(y=Object(W.a)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  width: 70px;\n"]))),Ee=I.b.div(C||(C=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n"])),"(max-width: 1470px)");function Ie(e){D=!navigator.onLine}window.addEventListener("online",Ie),window.addEventListener("offline",Ie);var Je,Le,qe,Ge,ke=function(){return Object(k.jsxs)(De,{children:[Object(k.jsx)(Se,{src:"data:image/png;base64,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",hidden:D}),Object(k.jsxs)(We,{children:[Object(k.jsx)(Fe,{lineHeight:"83px",textAlign:"left",children:"Weather"}),Object(k.jsx)(Fe,{lineHeight:"97px",textAlign:"right",children:"forecast"})]}),Object(k.jsxs)(Ee,{children:[Object(k.jsx)(je,{}),Object(k.jsx)(Ce,{})]}),Object(k.jsx)(Pe,{children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})]})},He=t.p+"static/media/background-bottom.6be33a07.png",Ke=t.p+"static/media/background-top.1b9e0722.png",Ve=I.b.div(Je||(Je=Object(W.a)(["\n  background-color: #373AF5;\n  background-image: url(","), url(",");\n  background-position: 0% 100%,100% 0%;\n  min-height: 100vh;\n"])),He,Ke),ze=I.b.div(Le||(Le=Object(W.a)(["\n  margin: 0 auto;\n  padding: 84px 43px 16px 43px;\n  max-width: 1440px;\n  @media "," {\n    padding-top: 32px;\n  }\n"])),"(max-width: 730px)"),Ae=(I.b.div(qe||(qe=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),function(){return Object(k.jsx)(Ve,{children:Object(k.jsx)(ze,{children:Object(k.jsx)(ke,{})})})}),Ne=t(6),Te=t(40),Xe=t(23),Ye=t(41),Be=t.n(Ye),Qe=t(11),Re=t(7),Me=t(74),Ze=Object(Me.a)((Ge={},Object(Qe.a)(Ge,"".concat(ue),(function(e,n){var t=n.payload;return Object(Re.a)(Object(Re.a)({},e),{},{list:{samara:{d:t[0]}}})})),Object(Qe.a)(Ge,"".concat(be),(function(e,n){var t,i=n.payload,a=i.city,o=i.date,r=i.weather;return Object(Re.a)(Object(Re.a)({},e),{},{list:Object(Re.a)(Object(Re.a)({},e.list),{},Object(Qe.a)({},a,Object(Re.a)(Object(Re.a)({},null===(t=e.list)||void 0===t?void 0:t[a]),{},Object(Qe.a)({},o,r))))})})),Ge),{list:{}}),Ue=Object(Ne.b)({weather:Ze}),$e=Object(Ne.a)(Te.a);var _e={key:"root",storage:Be.a},en=Object(Ne.d)(Object(Xe.a)(_e,Ue),$e),nn=Object(Xe.b)(en),tn=t(42),an=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function on(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(navigator.serviceWorker.controller.postMessage({type:"SKIP_WAITING"}),console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var rn,cn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),o(e),r(e)}))},dn=Object(I.a)(rn||(rn=Object(W.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n    color: #fff;\n    line-height: 24px;\n    font-family: Ubuntu;\n  }\n"])));E.a.render(Object(k.jsx)(pe.a,{store:en,children:Object(k.jsxs)(tn.a,{loading:null,persistor:nn,children:[Object(k.jsx)(dn,{}),Object(k.jsx)(Ae,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/weather-pwa","/service-worker.js");an?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?(console.log("No service worker found. Probably a different app. Reload the page."),navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))}))):(console.log("Service worker found. Proceed as normal."),on(e,n))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):on(n,e)}))}}(),cn()}},[[73,1,2]]]);
//# sourceMappingURL=main.8accc52c.chunk.js.map