(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{112:function(e,t,a){"use strict";a.d(t,"g",(function(){return p})),a.d(t,"a",(function(){return O})),a.d(t,"f",(function(){return f})),a.d(t,"e",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"d",(function(){return _})),a.d(t,"h",(function(){return y})),a.d(t,"b",(function(){return j}));var n=a(120),r=a.n(n),c=a(127),s=a(158),o=a(25),l=(a(136),a(24)),i=s.a.initializeApp({apiKey:"AIzaSyDebtaQKB9J5DMS2En5flgeKFkTF-8aaJI",authDomain:"saunter-3a6ad.firebaseapp.com",databaseURL:"https://saunter-3a6ad-default-rtdb.firebaseio.com/",projectId:"saunter-3a6ad",OAuth:"https://saunter-3a6ad.firebaseapp.com/__/auth/handler"}),u=i.auth(),m=i.firestore();u.languageCode="en";var d=new s.a.auth.GoogleAuthProvider,b=new s.a.auth.FacebookAuthProvider,p=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.signInWithPopup(d);case 3:return(t=e.sent)&&o.b.success("You was successfully Login!",{theme:"colored"}),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),o.b.error("".concat(e.t0.message),{theme:"colored"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.signInWithPopup(b);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o.b.error("".concat(e.t0.message),{theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.signInWithEmailAndPassword(t,a);case 3:return(n=e.sent)&&o.b.success("You was successfully Login!",{theme:"colored"}),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),o.b.error("".concat(e.t0.message),{theme:"colored"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.createUserWithEmailAndPassword(a,n);case 3:return(c=e.sent)&&o.b.success("You was successfully registered. Login please!",{theme:"colored"}),s=c.user,e.next=8,m.collection("users").add({uid:s.uid,name:t,authProvider:"local",email:a});case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),o.b.error("".concat(e.t0.message),{theme:"colored"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.sendPasswordResetEmail(t);case 3:e.sent,Object(o.b)("Password reset link sent! Check your email!",{theme:"colored"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o.b.error("".concat(e.t0.message),{theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){u.signOut(),o.b.success("signOut success!",{theme:"colored"})},y=function(e,t){s.a.database().ref("users/"+t).set(e),o.b.success("Path added to database!",{theme:"colored"})},j=function(e){s.a.database().ref("users/"+e).on("value",(function(e){var t=e.val();t&&l.a.setUserPath(t)}))}},159:function(e,t,a){"use strict";var n=a(123),r=a(18),c=a(108),s=a(0),o=a.n(s),l=a(16),i=a(23),u=a(225),m=function(e,t){switch(t.type){case"success":return Object(n.a)(Object(n.a)({},e),{},{positions:t.payload});case"error":return Object(n.a)(Object(n.a)({},e),{},{error:t.payload});default:throw new Error("Action not Found!")}},d=function(){var e,t=Object(s.useReducer)(m,{positions:null,error:null}),a=Object(c.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){return navigator.geolocation?e=navigator.geolocation.watchPosition((function(e){r({type:"success",payload:e.coords})}),(function(e){return r({type:"error",payload:e})})):r({type:"error",payload:"Browser not supported yet!"}),function(){navigator.geolocation.clearWatch(e)}}),[]),n},b=a(409),p=a(164),f=a.n(p),h=a(121),v=a(122),_={width:"100%",height:"500px"},O=b.a.Option,y=Object(i.b)((function(e){var t=e.button,a=void 0!==t&&t,i=e.click,m=void 0!==i&&i,p=e.currentPos,y=void 0!==p&&p,j=Object(l.b)().sounterStore,g=d().positions,E=Object(s.useState)(null),N=Object(c.a)(E,2),x=N[0],S=N[1],w=Object(s.useState)(null),P=Object(c.a)(w,2),A=(P[0],P[1]),k=Object(s.useState)(),I=Object(c.a)(k,2),D=I[0],F=I[1],C=Object(s.useState)(0),M=Object(c.a)(C,2),z=M[0],L=M[1],T=Object(s.useState)("WALKING"),W=Object(c.a)(T,2),R=W[0],U=W[1],G=Object(s.useState)(null),K=Object(c.a)(G,2),J=K[0],Y=K[1],B=Object(s.useState)(null),Q=Object(c.a)(B,2),X=Q[0],q=Q[1],V=Object(s.useState)([]),H=Object(c.a)(V,2),Z=H[0],$=H[1],ee=Object(s.useState)(null),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=Object(s.useState)([]),ce=Object(c.a)(re,2),se=ce[0],oe=ce[1],le=Object(s.useState)([]),ie=Object(c.a)(le,2),ue=ie[0],me=ie[1],de=Object(s.useState)(null),be=Object(c.a)(de,2),pe=be[0],fe=be[1];Object(s.useEffect)((function(){g&&S({lat:null===g||void 0===g?void 0:g.latitude,lng:null===g||void 0===g?void 0:g.longitude})}),[g]),Object(s.useEffect)((function(){!function(){if(j.item){var e=j.item.markersArr;F(e)}m&&F([])}()}),[j.item,m]),Object(s.useEffect)((function(){D&&D.length>1&&(ye(D),Ee(D),j.setUserMarkers(D))}),[D]),Object(s.useEffect)((function(){!function(){var e,t,a=0;null!==pe&&(null===pe||void 0===pe||null===(e=pe.rows[0])||void 0===e||null===(t=e.elements)||void 0===t||t.map((function(e){var t;return a+=null===(t=e.distance)||void 0===t?void 0:t.value})),L(a))}()}),[pe]),Object(s.useEffect)((function(){z>0&&j.setDistance(z)}),[z,j]);var he=Object(u.f)({id:"myprojectrealsoft",googleMapsApiKey:"AIzaSyARFt_e8aIQbS3evmvme0k4dInWVus72gw"}).isLoaded,ve=Object(s.useCallback)((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),A(e)}),[]),_e=Object(s.useCallback)((function(e){A(null)}),[]),Oe=Object(s.useMemo)((function(){return{destination:X,origin:J,travelMode:R,waypoints:Z,optimizeWaypoints:!0}}),[X,J,R,Z]),ye=function(e){var t=e.map((function(e){return{location:{lat:e.lat,lng:e.lng},stopover:!0}})),a=t.shift().location,n=t.pop().location;Y(a),q(n),$(t)},je=Object(s.useCallback)((function(e){null!==e&&"OK"===e.status&&ne(e)}),[X,J,Z,R]),ge=Object(s.useMemo)((function(){return{destinations:Object(r.a)(ue),origins:Object(r.a)(se),travelMode:R,avoidHighways:!1,avoidTolls:!1}}),[ue,se,R]),Ee=function(e){var t=[e[0]],a=e;oe(t),me(a)},Ne=Object(s.useCallback)((function(e){if(null!==e){var t=!1;e.rows[0].elements.forEach((function(e){t="OK"===e.status})),t&&fe(e)}}),[]);return o.a.createElement("div",{className:f.a.container},a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",className:f.a.clearMap,onClick:function(){F([])}},o.a.createElement(h.a,{icon:v.f,color:"grey",size:"1x",className:f.a.btnIcon}),"Clear Map"),o.a.createElement(b.a,{className:f.a.select,showSearch:!0,style:{width:200},placeholder:"Select trevel mode",optionFilterProp:"children",onChange:function(e){U(e)}},o.a.createElement(O,{value:"DRIVING"},"DRIVING"),o.a.createElement(O,{value:"WALKING"},"WALKING"))),o.a.createElement("div",{className:f.a.containerStyle},he?o.a.createElement(u.d,{mapContainerStyle:_,center:x,zoom:100,onLoad:ve,onUnmount:_e,onClick:m?function(){var e=arguments.length<=0?void 0:arguments[0],t=e.latLng.lat(),a=e.latLng.lng(),n=[].concat(Object(r.a)(D),[{lat:t,lng:a}]);F(n)}:function(){}},y&&o.a.createElement(u.e,{label:"currentPosition",position:x,draggable:!1}),X&&J&&o.a.createElement(u.b,{options:Oe,callback:je}),o.a.createElement(u.c,{options:ge,callback:Ne}),D&&D.length>1?o.a.createElement(u.a,{options:{directions:Object(n.a)({},ae),draggable:!0}}):null):null))}));t.a=o.a.memo(y)},164:function(e,t,a){e.exports={container:"styles_container__1MoTx",clearMap:"styles_clearMap__2PSFD",btnIcon:"styles_btnIcon__iPT5v",select:"styles_select__3941f",containerStyle:"styles_containerStyle__UvNfw"}},317:function(e,t,a){e.exports={modal:"styles_modal__2ORl2"}},319:function(e,t,a){e.exports={container:"styles_container__10z-P",leftSide:"styles_leftSide__2iEWe",label:"styles_label__1CQjx",input:"styles_input__2EzvP",inputFullDescription:"styles_inputFullDescription__3q5mw",lengthContainer:"styles_lengthContainer__uRmyX",length:"styles_length__11_MT",buttonAddPath:"styles_buttonAddPath__2vQJo",btnIcon:"styles_btnIcon__elWBd",rigthSide:"styles_rigthSide__1K3sD"}},388:function(e,t,a){e.exports={container:"styles_container__Du3CD",title:"styles_title__3DduH",buttonAddPath:"styles_buttonAddPath__1w1Oi"}},389:function(e,t,a){e.exports={input:"styles_input__1Xrhl"}},390:function(e,t,a){e.exports={item:"styles_item__1tD-2",icon:"styles_icon__3AXml",title:"styles_title__3obxI",text:"styles_text__39dBX",distance:"styles_distance__3wJ3U",buttonGetDirections:"styles_buttonGetDirections__2f4Aw",itemActive:"styles_itemActive__1uhjn"}},391:function(e,t,a){e.exports={container:"styles_container__999oe",leftSide:"styles_leftSide__1ptMR",list:"styles_list__c1Uea",rigthSide:"styles_rigthSide__3ivMI",icon:"styles_icon__o-CGD",pathContainer:"styles_pathContainer__xs6i4",pathWripper:"styles_pathWripper__1r8J-",title:"styles_title__2QJtx",distance:"styles_distance__OBnfJ",text:"styles_text__3-I34",buttonAddToFavorites:"styles_buttonAddToFavorites__wzZ81",buttonRemove:"styles_buttonRemove__36NQz",notPathYet:"styles_notPathYet__2sybY"}},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a(16),o=a(112),l=a(411),i=a(317),u=a.n(i),m=Object(c.b)((function(e){var t=e.visible,a=e.children,n=Object(s.b)().sounterStore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Add new path",className:u.a.modal,width:"1110px",visible:t,onOk:function(){n.setModal()},onCancel:function(){n.setModal()},footer:null},a))})),d=a(118),b=a(123),p=a(108),f=a(408),h=a(410),v=a(405),_=a(176),O=a(159),y=a(319),j=a.n(y),g=a(121),E=a(122),N=a(1),x=a(180).v4,S=Object(c.b)((function(){var e=Object(s.b)(),t=e.sounterStore,a=e.authAPI,c=t.distance,l=t.userArrMarkers,i=Object(n.useState)({title:"",shortDescription:"",fullDescription:"",id:null}),u=Object(p.a)(i,2),m=u[0],y=u[1],S=Object(n.useState)({title:"",shortDescription:"",fullDescription:"",id:null,distance:0,favorite:!1,markersArr:null}),w=Object(p.a)(S,2),P=w[0],A=w[1];Object(n.useEffect)((function(){!function(){var e=Object(b.a)(Object(b.a)({},m),{},{id:x(),distance:c,markersArr:Object(N.q)(l)});A(e)}()}),[m,c,l]);var k=function(e){var t=e.target,a=t.name,n=t.value;y((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},a,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.container},r.a.createElement("div",{className:j.a.leftSide},r.a.createElement(f.a,{name:"pathForm",onFinish:function(){var e;(t.addUserPath(P),a.user)&&Object(o.h)(t.userPath,null===(e=a.user)||void 0===e?void 0:e.uid);y({title:"",shortDescription:"",fullDescription:"",id:null}),t.setDistance(0),t.setItem(null),t.setModal()},onFinishFailed:function(e){console.log("Failed:",e)}},r.a.createElement(f.a.Item,{label:"Title",className:j.a.label,rules:[{required:!0,message:"Please enter title"}]}),r.a.createElement(h.a,{name:"title",value:m.title,placeholder:"Text input",className:j.a.input,onChange:k,minLength:5}),r.a.createElement(f.a.Item,{label:"Short description",className:j.a.label}),r.a.createElement(h.a.TextArea,{name:"shortDescription",value:m.shortDescription,placeholder:"Text area",className:j.a.input,maxLength:160,onChange:k}),r.a.createElement(v.a,{align:"middle",justify:"end"},"Limit ".concat(m.shortDescription.length," of ").concat(160)),r.a.createElement(f.a.Item,{label:"Full description",className:j.a.label}),r.a.createElement(h.a.TextArea,{name:"fullDescription",value:m.fullDescription,placeholder:"Text area",className:j.a.inputFullDescription,onChange:k}),r.a.createElement("div",{className:j.a.lengthContainer},r.a.createElement(g.a,{icon:E.e,color:"grey",size:"2x"}),r.a.createElement("p",{className:j.a.length},"Length ",(t.distance/1e3).toFixed(1)," km")),r.a.createElement(f.a.Item,null,r.a.createElement(_.a,{type:"primary",htmlType:"submit",className:j.a.buttonAddPath},r.a.createElement(g.a,{icon:E.c,color:"white",size:"1x",className:j.a.btnIcon}),"Add path")))),r.a.createElement("div",{className:j.a.rigthSide},r.a.createElement(O.a,{button:!0,click:!0,currentPos:!0}))))})),w=a(388),P=a.n(w),A=Object(c.b)((function(){var e=Object(s.b)().sounterStore;return r.a.createElement("div",{className:P.a.container},r.a.createElement(m,{visible:e.modal},r.a.createElement(S,null)),r.a.createElement("a",{href:"/home"},r.a.createElement(g.a,{icon:E.b,color:" rgb(0, 110, 255)",size:"2x"}),r.a.createElement("h2",{className:P.a.title},"Sounter")),r.a.createElement("button",{type:"button",className:P.a.buttonAddPath,onClick:function(){e.setModal()}},"AddPath"))})),k=a(5),I=a(389),D=a.n(I),F=h.a.Search,C=Object(k.c)((function(){var e=Object(s.b)().sounterStore,t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{placeholder:"Search...",allowClear:!0,size:"large",className:D.a.input,name:"filter",value:c,onChange:function(t){var a=t.target.value;o(a),e.getFilterUserPath(a)}}))})),M=a(390),z=a.n(M),L=a(93),T=a.n(L),W=Object(c.b)((function(e){var t,a=e.item,n=Object(s.b)().sounterStore,c=n.item;return r.a.createElement("li",{className:T()((t={},Object(d.a)(t,z.a.item,!0),Object(d.a)(t,z.a.itemActive,a.id===(null===c||void 0===c?void 0:c.id)),t)),onClick:function(){n.setItem(a)}},r.a.createElement(g.a,{icon:E.b,color:"grey",size:"2x",className:z.a.icon}),r.a.createElement("div",{className:z.a.container},a.favorite&&r.a.createElement(g.a,{icon:E.h,color:"yellow",size:"2x"}),r.a.createElement("h2",{className:z.a.title},a.title),r.a.createElement("p",{className:z.a.text},a.shortDescription)),r.a.createElement("p",{className:z.a.distance},(a.distance/1e3).toFixed(1)," km"),r.a.createElement("button",{type:"button",className:z.a.buttonGetDirections},r.a.createElement(g.a,{icon:E.a,color:"grey",size:"1x"})))})),R=a(391),U=a.n(R),G=Object(c.b)((function(){var e=Object(s.b)(),t=e.sounterStore,a=e.authAPI,n=t.item,c=t.filteredUserPath;return r.a.createElement("div",{className:U.a.container},r.a.createElement("div",{className:U.a.leftSide},r.a.createElement(C,null),r.a.createElement("ul",{className:U.a.list},c.length>0?c.map((function(e){return r.a.createElement(W,{item:e,key:e.id})})):r.a.createElement("h2",{className:U.a.notPathYet},"Not Path yet!"))),r.a.createElement("div",{className:U.a.rigthSide},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:U.a.pathContainer},r.a.createElement("div",{className:U.a.pathWripper},r.a.createElement("h2",{className:U.a.title},n.title),r.a.createElement("p",{className:U.a.distance},(n.distance/1e3).toFixed(1)," km")),r.a.createElement("p",{className:U.a.text},n.shortDescription)),r.a.createElement(O.a,{key:n.id}),r.a.createElement("button",{className:U.a.buttonAddToFavorites,type:"button",onClick:function(){t.setFavorite()}},n.favorite?"Remuve from favorites":"Add to favorites"),r.a.createElement("button",{className:U.a.buttonRemove,type:"button",onClick:function(){return function(e){var n;(t.removeUserPath(e),t.setItem(null),a.user)&&Object(o.h)(t.userPath,null===(n=a.user)||void 0===n?void 0:n.uid)}(n.id)}},"Remove")):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{icon:E.b,color:"rgb(31, 162, 250)",size:"10x",className:U.a.icon}),r.a.createElement("h2",{className:U.a.notPathYet},"Select any path!"))))})),K=Object(c.b)((function(){var e=Object(s.b)().authAPI;return Object(n.useEffect)((function(){e.user&&Object(o.b)(e.user.uid)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(G,null))}));t.default=K}}]);
//# sourceMappingURL=6.7396300a.chunk.js.map