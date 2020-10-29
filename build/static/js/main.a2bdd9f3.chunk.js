(this.webpackJsonpaccord=this.webpackJsonpaccord||[]).push([[0],{64:function(e,a,n){e.exports=n(92)},69:function(e,a,n){},70:function(e,a,n){},71:function(e,a,n){},76:function(e,a,n){},88:function(e,a,n){},89:function(e,a,n){},90:function(e,a,n){},91:function(e,a,n){},92:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(18),r=n.n(l),s=(n(69),n(70),n(29)),i=(n(71),n(35)),o=n.n(i),m=n(45),u=n.n(m),d=n(11),h=n(21),E=Object(h.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),p=E.actions.setChannelInfo,f=function(e){return e.app.channelId},v=function(e){return e.app.channelName},b=E.reducer;n(76);var N=function(e){var a=e.id,n=e.channelName,t=Object(d.b)();return c.a.createElement("div",{className:"sidebarChannel",onClick:function(){return t(p({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarChannel__hash"},"#"),n))},_=n(46),g=n.n(_),S=n(47),j=n.n(S),I=n(48),O=n.n(I),y=n(49),k=n.n(y),C=n(50),w=n.n(C),z=n(51),H=n.n(z),A=n(106),B=n(23),T=n.n(B),D=T.a.initializeApp({apiKey:"AIzaSyCBJym1dZfsKzoHAjiUiwuPdqrL7k81kek",authDomain:"accord-cloud.firebaseapp.com",databaseURL:"https://accord-cloud.firebaseio.com",projectId:"accord-cloud",storageBucket:"accord-cloud.appspot.com",messagingSenderId:"911929184093",appId:"1:911929184093:web:a125baedfbc7e30ae3a2b4",measurementId:"G-7TV10341E9"}).firestore(),J=T.a.auth(),L=new T.a.auth.GoogleAuthProvider,U=D,G=Object(h.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),P=G.actions,V=P.login,W=P.logout,x=function(e){return e.user.user},F=G.reducer;var K=function(){var e=Object(d.c)(x),a=Object(t.useState)([]),n=Object(s.a)(a,2),l=n[0],r=n[1];return Object(t.useEffect)((function(){U.collection("channels").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__top"},c.a.createElement("h3",null,"Joshua's Test Server"),c.a.createElement(o.a,null)),c.a.createElement("div",{className:"sidebar__channels"},c.a.createElement("div",{className:"sidebar__channelsHeader"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(o.a,null),c.a.createElement("h4",null,"Text Channels")),c.a.createElement(u.a,{onClick:function(){var e=prompt("Enter a new channel name");e&&U.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})),c.a.createElement("div",{className:"sidebar__channelsList"},l.map((function(e){var a=e.id,n=e.channel;return c.a.createElement(N,{key:a,id:a,channelName:n.channelName})})))),c.a.createElement("div",{className:"sidebar__voice"},c.a.createElement(g.a,{className:"sidebar__voiceIcon",fontSize:"large"}),c.a.createElement("div",{className:"sidebar__voiceInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Stream")),c.a.createElement("div",{className:"sidebar__voiceIcons"},c.a.createElement(j.a,null),c.a.createElement(O.a,null))),c.a.createElement("div",{className:"sidebar__profile"},c.a.createElement(A.a,{src:e.photo}),c.a.createElement("div",{className:"sidebar__profileInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar__profileIcons"},c.a.createElement(k.a,null),c.a.createElement(w.a,null),c.a.createElement(H.a,null))))},M=(n(88),n(89),n(52)),R=n.n(M),q=n(53),Y=n.n(q),Z=n(54),$=n.n(Z),Q=n(55),X=n.n(Q),ee=n(56),ae=n.n(ee),ne=n(57),te=n.n(ne);var ce=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader__left"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader__hash"},"#"),a)),c.a.createElement("div",{className:"chatHeader__right"},c.a.createElement(R.a,null),c.a.createElement(Y.a,null),c.a.createElement($.a,null),c.a.createElement("div",{className:"chatHeader__search"},c.a.createElement("input",{placeholderSearch:!0}),c.a.createElement(X.a,null)),c.a.createElement(ae.a,null),c.a.createElement(te.a,null)))},le=n(58),re=n.n(le),se=n(59),ie=n.n(se),oe=n(60),me=n.n(oe),ue=n(61),de=n.n(ue);n(90);var he=function(e){var a=e.timestamp,n=e.user,t=e.message;return c.a.createElement("div",{className:"message"},c.a.createElement(A.a,{src:n.photo}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n.displayName,c.a.createElement("span",{className:"message_timestamp"},"Sent at ",new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("p",null,t)))};var Ee=function(){var e=Object(d.c)(x),a=Object(d.c)(f),n=Object(d.c)(v),l=Object(t.useState)(""),r=Object(s.a)(l,2),i=r[0],o=r[1],m=Object(t.useState)([]),u=Object(s.a)(m,2),h=u[0],E=u[1];return Object(t.useEffect)((function(){a&&U.collection("channels").doc(a).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return E(e.docs.map((function(e){return e.data()})))}))}),[a]),c.a.createElement("div",{className:"chat"},c.a.createElement(ce,{channelName:n}),c.a.createElement("div",{className:"chat__messages"},h.map((function(e){return c.a.createElement(he,{timestamp:e.timestamp,message:e.message,user:e.user})}))),c.a.createElement("div",{className:"chat__input"},c.a.createElement(re.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Message at #".concat(n)}),c.a.createElement("button",{className:"chat__inputButton",type:"submit",onClick:function(n){n.preventDefault(),U.collection("channels").doc(a).collection("messages").add({timestamp:T.a.firestore.FieldValue.serverTimestamp(),message:i,user:e}),o("")}},"If you see these that means Accord is broken \ud83d\ude09")),c.a.createElement("div",{className:"chat__inputIcons"},c.a.createElement(ie.a,{fontSize:"large"}),c.a.createElement(me.a,{fontSize:"large"}),c.a.createElement(de.a,{fontSize:"large"}))))},pe=n(105);n(91);var fe=function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"sky__container"},c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"}),c.a.createElement("div",{className:"star"})),c.a.createElement("h2",null,"You need to login in order to enter the app!"),c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"",alt:""})),c.a.createElement(pe.a,{onClick:function(e){J.signInWithPopup(L).catch((function(e){return alert(e.message)}))}},"Sign in with Google"))};var ve=function(){var e=Object(d.b)(),a=Object(d.c)(x);return Object(t.useEffect)((function(){J.onAuthStateChanged((function(a){e(a?V({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):W())}))}),[e]),c.a.createElement("div",{className:"app"},a?c.a.createElement(c.a.Fragment,null," ",c.a.createElement(K,null)," ",c.a.createElement(Ee,null)," "):c.a.createElement(fe,null))},be=Object(h.a)({reducer:{user:F,app:b}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:be},c.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a2bdd9f3.chunk.js.map