(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{15:function(e,t,r){"use strict";r.d(t,"b",(function(){return z}));var o,a,n,i,c,s,u,l,p,b,h,O,f,m,y,j,P,d=r(5),g=r(11),w=r(2),v=(r(17),r(12)),A=r(1),_=new(o=A.f.bound,a=function(){function e(){Object(g.a)(this,e),Object(d.a)(this,"auth",n,this),Object(d.a)(this,"accessToken",i,this),Object(A.m)(this)}return Object(v.a)(e,[{key:"setAccessTokenAPI",value:function(e){this.accessToken=e,localStorage.setItem("accessToken",JSON.stringify(e))}}]),e}(),n=Object(w.a)(a.prototype,"auth",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),i=Object(w.a)(a.prototype,"accessToken",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return localStorage.getItem("accessToken")?JSON.parse(localStorage.getItem("accessToken")):null}}),Object(w.a)(a.prototype,"setAccessTokenAPI",[o],Object.getOwnPropertyDescriptor(a.prototype,"setAccessTokenAPI"),a.prototype),a),E=r(18),k=new(c=function(){function e(){var t=this;Object(g.a)(this,e),Object(d.a)(this,"modal",s,this),Object(d.a)(this,"item",u,this),Object(d.a)(this,"distance",l,this),Object(d.a)(this,"userArrMarkers",p,this),Object(d.a)(this,"userPath",b,this),Object(d.a)(this,"filteredUserPath",h,this),Object(A.m)(this),Object(A.p)((function(){return t.item}),(function(e){return console.log(Object(A.r)(t.item))}))}return Object(v.a)(e,[{key:"setModal",value:function(){this.modal=!this.modal}},{key:"setItem",value:function(e){this.item=e}},{key:"setDistance",value:function(e){this.distance=e}},{key:"setUserMarkers",value:function(e){this.userArrMarkers=e}},{key:"setUserPath",value:function(e){this.filteredUserPath=Object(E.a)(e),this.userPath=Object(E.a)(e),localStorage.setItem("userPath",JSON.stringify(this.userPath))}},{key:"addUserPath",value:function(e){this.setUserPath([].concat(Object(E.a)(this.userPath),[e]))}},{key:"removeUserPath",value:function(e){var t=this.filteredUserPath.filter((function(t){return t.id!==e}));this.setUserPath(t)}},{key:"setFavorite",value:function(){this.item.favorite=!this.item.favorite}},{key:"getFilterUserPath",value:function(e){var t=e.toLowerCase().trim(),r=this.userPath.filter((function(e){return e.title.toLowerCase().includes(t)}));this.filteredUserPath=r}}]),e}(),s=Object(w.a)(c.prototype,"modal",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u=Object(w.a)(c.prototype,"item",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(w.a)(c.prototype,"distance",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=Object(w.a)(c.prototype,"userArrMarkers",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=Object(w.a)(c.prototype,"userPath",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=Object(w.a)(c.prototype,"filteredUserPath",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return localStorage.getItem("userPath")?JSON.parse(localStorage.getItem("userPath")):[]}}),Object(w.a)(c.prototype,"setModal",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setModal"),c.prototype),Object(w.a)(c.prototype,"setItem",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setItem"),c.prototype),Object(w.a)(c.prototype,"setDistance",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setDistance"),c.prototype),Object(w.a)(c.prototype,"setUserMarkers",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setUserMarkers"),c.prototype),Object(w.a)(c.prototype,"setUserPath",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setUserPath"),c.prototype),Object(w.a)(c.prototype,"addUserPath",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"addUserPath"),c.prototype),Object(w.a)(c.prototype,"removeUserPath",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"removeUserPath"),c.prototype),Object(w.a)(c.prototype,"setFavorite",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"setFavorite"),c.prototype),Object(w.a)(c.prototype,"getFilterUserPath",[A.f],Object.getOwnPropertyDescriptor(c.prototype,"getFilterUserPath"),c.prototype),c),T=new(O=function(){function e(){Object(g.a)(this,e),Object(d.a)(this,"inputs",f,this),Object(A.m)(this)}return Object(v.a)(e,[{key:"setInputs",value:function(e){this.inputs=e}}]),e}(),f=Object(w.a)(O.prototype,"inputs",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(w.a)(O.prototype,"setInputs",[A.f],Object.getOwnPropertyDescriptor(O.prototype,"setInputs"),O.prototype),O),S=r(0);Object(A.g)({enforceActions:"observed"});var I=(m=function e(){Object(g.a)(this,e),Object(d.a)(this,"authAPI",y,this),Object(d.a)(this,"sounterStore",j,this),Object(d.a)(this,"inputsStore",P,this)},y=Object(w.a)(m.prototype,"authAPI",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return _}}),j=Object(w.a)(m.prototype,"sounterStore",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return k}}),P=Object(w.a)(m.prototype,"inputsStore",[A.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return T}}),m),U=new I,D=Object(S.createContext)(U),z=function(){var e=Object(S.useContext)(D);if(!e)throw new Error("You have forgot to use StoreProvider, shame on you.");return e};t.a=new I},21:function(e,t,r){e.exports={loader:"styles_loader__38z53",loadingText:"styles_loadingText__2HtH7"}},42:function(e,t,r){e.exports=r(88)},87:function(e,t,r){},88:function(e,t,r){"use strict";r.r(t);var o=r(37);r.n(o).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/realSoftProjectFirebase",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_AUTH_DOMAIN:"saunter-3a6ad.firebaseapp.com",REACT_APP_DATABASE_URL:"databaseURL",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyARFt_e8aIQbS3evmvme0k4dInWVus72gw",REACT_APP_OAUTH:"https://saunter-3a6ad.firebaseapp.com/__/auth/handler",REACT_APP_PROJECT_ID:"saunter-3a6ad",REACT_APP_WEB_API_KEY:"AIzaSyDebtaQKB9J5DMS2En5flgeKFkTF-8aaJI"}).REACT_APP_HOST}).interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var a=r(0),n=r.n(a),i=r(16),c=r.n(i),s=r(13),u=r(23),l=r(15),p=r(10),b=Object(p.a)(),h=function(e){var t=e.path,r=e.exact,o=e.component;return Object(l.b)().authAPI.accessToken?n.a.createElement(s.b,{path:t,exact:r,component:o}):n.a.createElement(s.a,{to:"/home"})},O=r(21),f=r.n(O),m=r(40),y=r.n(m),j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:f.a.loader},n.a.createElement(y.a,{type:"Circles",color:"#227fcb",height:80,width:80,timeout:3e3}),n.a.createElement("h2",{className:f.a.loadingText},"...Loading")))},P=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(3),r.e(2),r.e(12),r.e(9)]).then(r.bind(null,409))})),d=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(2),r.e(1),r.e(8),r.e(7)]).then(r.bind(null,407))})),g=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(3),r.e(1),r.e(11)]).then(r.bind(null,408))})),w=Object(a.lazy)((function(){return r.e(10).then(r.bind(null,402))})),v=function(){return n.a.createElement(u.a,l.a,n.a.createElement(s.c,{history:b},n.a.createElement(a.Suspense,{fallback:n.a.createElement(j,null)},n.a.createElement(s.d,null,n.a.createElement(h,{exact:!0,path:"/sounter",component:d}),n.a.createElement(s.b,{exact:!0,path:"/home",component:P}),n.a.createElement(s.b,{exact:!0,path:"/registration",component:g}),n.a.createElement(s.b,{exact:!0,path:"/print",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(85),r(86),r(87);c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,5,6]]]);
//# sourceMappingURL=main.29569eab.chunk.js.map