(this["webpackJsonpbirthday-wheel-3"]=this["webpackJsonpbirthday-wheel-3"]||[]).push([[0],{12:function(e,t,n){e.exports={root:"LogIn_root__vHi4v",fadeout:"LogIn_fadeout__2d5d_",input:"LogIn_input__39dGj"}},14:function(e,t,n){e.exports={root:"WheelCanvas_root__3FmFe",confirm:"WheelCanvas_confirm__Um2Xc"}},19:function(e,t,n){e.exports={App:"app_App__3ALCk",logo:"app_logo__2B4qm","logo-spin":"app_logo-spin__3ajEN",header:"app_header__2ppV5",link:"app_link__3MCMi",container:"app_container__2JKVN"}},22:function(e,t,n){e.exports={root:"SendGift_root__3wSYA",fadeIn:"SendGift_fadeIn__1HUqg"}},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(18),c=n.n(o),s=(n(28),n(3)),l=n(14),r=n.n(l),u=n(33),b=n(1),h=function(e){var t=e.segments,n=e.segColors,o=e.winningSegment,c=e.onFinished,l=e.onConfirmed,h=e.primaryColor,d=e.contrastColor,j=e.buttonText,f=e.isOnlyOnce,m=void 0===f||f,p=e.size,g=void 0===p?290:p,_=e.upDuration,v=void 0===_?100:_,O=e.downDuration,x=void 0===O?1e3:O,y=e.fontFamily,w=void 0===y?"proxima-nova":y,k="",S=0,C=!1,M=Object(a.useState)(!1),I=Object(s.a)(M,2),P=I[0],N=I[1],F=Object(a.useState)([]),T=Object(s.a)(F,2),z=(T[0],T[1],Object(a.useState)("")),q=Object(s.a)(z,2),E=q[0],A=q[1],B=0,D=t.length,L=0,W=0,G=null,J=Math.PI/t.length,H=t.length*v,R=t.length*x,V=0,X=0,U=300,K=300,Q=i.a.createRef();Object(a.useEffect)((function(){Y(),setTimeout((function(){window.scrollTo(0,1)}),0)}),[]);var Y=function(){Z(),te()},Z=function(){var e,t,n=document.getElementById("canvas");-1!==navigator.appVersion.indexOf("MSIE")&&((n=document.createElement("canvas")).setAttribute("width","1000"),n.setAttribute("height","600"),n.setAttribute("id","canvas"),null===(t=document.getElementById("wheel"))||void 0===t||t.appendChild(n));null===(e=n)||void 0===e||e.addEventListener("click",$,!1),Q.current&&(G=Q.current.getContext("2d"))},$=function(){C=!0,0===B&&(V=(new Date).getTime(),J=Math.PI/t.length,X=0,B=setInterval(ee,D))},ee=function(){X++,ne();var e=(new Date).getTime()-V,n=0,a=!1;for(e<H?(n=e/H,W=J*Math.sin(n*Math.PI/2)):(o&&k===o&&X>t.length?(n=e/H,W=J*Math.sin(n*Math.PI/2+Math.PI/2),n=1):(n=e/R,W=J*Math.sin(n*Math.PI/2+Math.PI/2)),n>=1&&(a=!0)),L+=W;L>=2*Math.PI;)L-=2*Math.PI;a&&(ne(),N(!0),c(k,S),clearInterval(B),B=0,W=0,A(k))},te=function(){ce(),ie(),oe()},ne=function(){ce(),ie(),oe()},ae=function(e,a,i){var o=G,c=t[e].value;o.save(),o.beginPath(),o.moveTo(U,K),o.arc(U,K,g,a,i,!1),o.lineTo(U,K),o.closePath(),t[e].picked?o.fillStyle=n[2]:o.fillStyle=n[e%2],o.fill(),o.stroke(),o.save(),o.translate(U,K),o.rotate((a+i)/2),o.fillStyle=d||"white",o.font="bold 1em "+w,o.fillText(c.substr(0,21),g/2+20,0),o.restore()},ie=function(){var e=G,n=L,a=t.length,i=2*Math.PI;e.lineWidth=1,e.strokeStyle=h||"black",e.textBaseline="middle",e.textAlign="center",e.font="1em "+w;for(var o=1;o<=a;o++){var c=i*(o/a)+L;ae(o-1,n,c),n=c}e.beginPath(),e.arc(U,K,50,0,i,!1),e.closePath(),e.fillStyle=h||"black",e.lineWidth=10,e.strokeStyle=d||"white",e.fill(),e.font="bold 1em "+w,e.fillStyle=d||"white",e.textAlign="center",e.fillText(j||"Spin",U,303),e.stroke(),e.beginPath(),e.arc(U,K,g,0,i,!1),e.closePath(),e.lineWidth=10,e.strokeStyle=h||"black",e.stroke()},oe=function(){var e=G;e.lineWidth=1,e.strokeStyle=d||"white",e.fileStyle=d||"white",e.beginPath(),e.moveTo(320,250),e.lineTo(280,250),e.lineTo(U,230),e.closePath(),e.fill();var n=L+Math.PI/2,a=t.length-Math.floor(n/(2*Math.PI)*t.length)-1;a<0&&(a+=t.length),e.textAlign="center",e.textBaseline="middle",e.fillStyle=h||"black",e.font="bold 1.5em "+w,k=t[a].value,S=a,C&&e.fillText(k,310,K+g+50)},ce=function(){G.clearRect(0,0,1e3,800)};return Object(b.jsxs)("div",{id:"wheel",className:r.a.root,children:[""===E?Object(b.jsx)("h1",{children:"Spin the wheel!"}):Object(b.jsxs)("h1",{children:["You won a very special: ",E]}),Object(b.jsx)("canvas",{ref:Q,id:"canvas",width:"1000",height:"800",style:{pointerEvents:P&&m?"none":"auto"}}),P&&Object(b.jsx)(u.a,{className:r.a.confirm,onClick:l,children:"Confirmed"})]})},d=n(8),j=n.n(d),f=n.p+"static/media/birthdayCake.5004c9cb.gif",m=n.p+"static/media/birthdayBalloon.e7e58333.gif",p=n(16),g=function(e){var t=e.name,n=e.continueShowChoices,o=i.a.useState(0),c=Object(s.a)(o,2),l=c[0],r=c[1],h=Object(a.useState)(!1),d=Object(s.a)(h,2),g=d[0],_=d[1],v=["Happy birthday ".concat(t,"!"),"are you ready to spin the birthday wheel?"];return Object(a.useEffect)((function(){var e=setTimeout((function(){r((function(e){return e+1})),_(!0)}),1500);return function(){return clearTimeout(e)}}),[]),Object(b.jsxs)("div",{className:j.a.root,children:[Object(b.jsxs)("div",{className:j.a.rootFlex,children:[Object(b.jsx)("img",{src:f,className:j.a.gifContainter,alt:"birthday cake..."}),Object(b.jsx)("h1",{className:j.a.birthdayMessage,children:Object(b.jsx)(p.a,{text:v[l%v.length],springConfig:p.b.gentle})}),Object(b.jsx)("img",{src:m,className:j.a.gifContainter,alt:"birthday balloon"})]}),g&&Object(b.jsxs)("div",{children:[Object(b.jsx)(u.a,{onClick:n,children:"yes"}),Object(b.jsx)(u.a,{children:Object(b.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",className:j.a.link,children:"no"})})]})]})},_=(n(17),n(15)),v=n(5),O=n(7),x=n.n(O),y=n(10),w=n.n(y),k=function(e){var t,n=e.img,i=e.points,o=e.onSelect,c=e.onDeselect,l=e.unavailable,r=Object(a.useState)(!1),u=Object(s.a)(r,2),h=u[0],d=u[1],j=Object(a.useCallback)((function(){h?c(i):o(i),d((function(e){return!e}))}),[o,c,h]);return Object(b.jsxs)("div",{className:w()(x.a.quizItem,(t={},Object(v.a)(t,x.a.selected,h),Object(v.a)(t,x.a.unavailable,l&&!h),t)),onClick:j,children:[Object(b.jsx)("img",{src:"halftone.png",className:x.a.halftone}),Object(b.jsx)("img",{src:n,className:x.a.item}),h?Object(b.jsx)("div",{className:x.a.overlay,children:Object(b.jsx)("span",{children:n.split(".")[0]})}):null]})},S=[{img:"armchair.webp",points:1},{img:"donut.webp",points:3},{img:"grapes.webp",points:5},{img:"flowers.webp",points:4},{img:"light-bulb.webp",points:1},{img:"sushi.webp",points:4},{img:"mango.webp",points:3},{img:"popcorn.webp",points:2},{img:"tv.webp",points:2},{img:"cheese.webp",points:5}],C=function(e){var t=e.continueShowMessage,n=Object(a.useState)(0),i=Object(s.a)(n,2),o=i[0],c=i[1],l=Object(a.useState)(0),r=Object(s.a)(l,2),u=r[0],h=r[1],d=Object(a.useMemo)((function(){return 2===o?"book":o>2&&o<6?"uber eats":o>5&&o<8?"messina":8===o?"provider":""}),[o]);Object(a.useEffect)((function(){2===u&&console.log(d)}),[u,d]);var j=Object(a.useCallback)((function(e){h((function(e){return e+1})),c((function(t){return t+e}))}),[]),f=Object(a.useCallback)((function(e){h((function(e){return e-1})),c((function(t){return t-e}))}),[]);return Object(b.jsxs)("div",{className:x.a.root,children:[Object(b.jsx)("h1",{children:"first, we need you to select 2 things here that speak to you..."}),S.map((function(e){return Object(a.createElement)(k,Object(_.a)(Object(_.a)({},e),{},{key:e.img,onSelect:j,onDeselect:f,unavailable:2===u}))})),Object(b.jsx)("button",{onClick:t,className:w()(x.a.continueButton,Object(v.a)({},x.a.visible,2===u)),children:"Continue"})]})},M=n(19),I=n.n(M),P=n(20),N=n.n(P),F=n(12),T=n.n(F),z=function(e){var t=e.setName,n=Object(a.useState)(""),i=Object(s.a)(n,2),o=i[0],c=i[1],l=Object(a.useState)(!1),r=Object(s.a)(l,2),u=r[0],h=r[1];return Object(b.jsxs)("div",{className:u?T.a.fadeout:T.a.root,children:[Object(b.jsx)("h1",{children:"Who are you?"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o),h(!0)},children:[Object(b.jsx)("label",{children:"Enter your name: "}),Object(b.jsx)("input",{className:T.a.input,type:"text",value:o,onChange:function(e){var t=e.currentTarget;c(t.value)}})]}),Object(b.jsx)("a",{href:"https://canva.okta.com/login/login.htm",target:"_blank",children:" or Log In with Okta"})]})},q=n(21),E=n(22),A=n.n(E),B=n.p+"static/media/mail.7c5f271f.gif",D=function(e){return Object(q.a)(e),Object(b.jsxs)("div",{className:A.a.root,children:[Object(b.jsx)("h1",{children:"yay! your prize will be sent to you shortly"}),Object(b.jsx)("img",{src:B})]})};var L=function(){var e=[{value:"oh ouh nothing",picked:!1},{value:"Car",picked:!1},{value:"water bottle",picked:!1},{value:"Nutella Jar",picked:!1},{value:"Trip to Barcelona",picked:!1},{value:"plant of your choice",picked:!1}],t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(s.a)(c,2),r=l[0],u=l[1],d=Object(a.useState)(!1),j=Object(s.a)(d,2),f=j[0],m=j[1],p=Object(a.useState)(""),_=Object(s.a)(p,2),v=_[0],O=_[1],x=Object(a.useState)(!1),y=Object(s.a)(x,2),w=y[0],k=y[1],S=function(t){e[t].picked=!0};return Object(b.jsxs)("div",{className:I.a.app,children:[Object(b.jsx)(z,{setName:O}),""!==v&&!r&&Object(b.jsx)(g,{name:v,continueShowChoices:function(){u(!0),console.log("show choices")}}),r&&!i&&Object(b.jsx)(C,{continueShowMessage:function(){o(!0)}}),i&&Object(b.jsx)(h,{segments:e,segColors:["#BE8FFA","#E2CFFA","#4F445D"],winningSegment:"won 10",onFinished:function(e,t){return function(e,t){S(t),m(!0),console.log(e)}(e,t)},onConfirmed:function(){k(!0)},primaryColor:"black",contrastColor:"white",buttonText:"Spin",isOnlyOnce:!1,size:290,upDuration:100,downDuration:1e3,fontFamily:"Gatwick Bold"}),Object(b.jsx)(N.a,{run:f,tweenDuration:100,onConfettiComplete:function(){m(!1)}}),w&&Object(b.jsx)(D,{})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),W()},7:function(e,t,n){e.exports={root:"quiz_root__3RZAB",quizItem:"quiz_quizItem__1sMCF",halftone:"quiz_halftone__Xsoez",item:"quiz_item__1HUEX",move:"quiz_move__2uDPA",selected:"quiz_selected__JL7xS",overlay:"quiz_overlay__2G312",movetext:"quiz_movetext__1PfFD",continueButton:"quiz_continueButton__1Sdsy",visible:"quiz_visible__3baMa",unavailable:"quiz_unavailable__33d9y"}},8:function(e,t,n){e.exports={rootFlex:"birthdayMessage_rootFlex__2GpWj",root:"birthdayMessage_root__RLw6f",fadeIn:"birthdayMessage_fadeIn__2vGvA",gifContainter:"birthdayMessage_gifContainter__tKjtw",birthdayMessage:"birthdayMessage_birthdayMessage__5ykq0",link:"birthdayMessage_link__3Vnob"}}},[[32,1,2]]]);
//# sourceMappingURL=main.8e479f64.chunk.js.map