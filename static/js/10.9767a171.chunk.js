(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{112:function(e,t,n){"use strict";n.d(t,"g",(function(){return b})),n.d(t,"a",(function(){return O})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return y})),n.d(t,"h",(function(){return g})),n.d(t,"b",(function(){return j}));var a=n(120),r=n.n(a),c=n(127),o=n(158),s=n(25),u=(n(136),n(24)),l=o.a.initializeApp({apiKey:"AIzaSyDebtaQKB9J5DMS2En5flgeKFkTF-8aaJI",authDomain:"saunter-3a6ad.firebaseapp.com",databaseURL:"https://saunter-3a6ad-default-rtdb.firebaseio.com/",projectId:"saunter-3a6ad",OAuth:"https://saunter-3a6ad.firebaseapp.com/__/auth/handler"}),i=l.auth(),p=l.firestore();i.languageCode="en";var d=new o.a.auth.GoogleAuthProvider,f=new o.a.auth.FacebookAuthProvider,b=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithPopup(d);case 3:return(t=e.sent)&&s.b.success("You was successfully Login!",{theme:"colored"}),e.abrupt("return",t);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),s.b.error("".concat(e.t0.message),{theme:"colored"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithPopup(f);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),s.b.error("".concat(e.t0.message),{theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.signInWithEmailAndPassword(t,n);case 3:return(a=e.sent)&&s.b.success("You was successfully Login!",{theme:"colored"}),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),s.b.error("".concat(e.t0.message),{theme:"colored"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.createUserWithEmailAndPassword(n,a);case 3:return(c=e.sent)&&s.b.success("You was successfully registered. Login please!",{theme:"colored"}),o=c.user,e.next=8,p.collection("users").add({uid:o.uid,name:t,authProvider:"local",email:n});case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),s.b.error("".concat(e.t0.message),{theme:"colored"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.sendPasswordResetEmail(t);case 3:e.sent,Object(s.b)("Password reset link sent! Check your email!",{theme:"colored"}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),s.b.error("".concat(e.t0.message),{theme:"colored"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){i.signOut(),s.b.success("signOut success!",{theme:"colored"})},g=function(e,t){o.a.database().ref("users/"+t).set(e),s.b.success("Path added to database!",{theme:"colored"})},j=function(e){o.a.database().ref("users/"+e).on("value",(function(e){var t=e.val();t&&u.a.setUserPath(t)}))}},118:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(118);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},392:function(e,t,n){e.exports={container:"styles_container__26LxO",title:"styles_title__7GF30",subtitle:"styles_subtitle__YbpDT",formContainer:"styles_formContainer__K4jdS",buttonContainer:"styles_buttonContainer__1_CC8",buttonsChange:"styles_buttonsChange__3lDxh",buttonResetPassword:"styles_buttonResetPassword__Xk9Ks"}},413:function(e,t,n){"use strict";n.r(t);var a=n(118),r=n(123),c=n(120),o=n.n(c),s=n(127),u=n(108),l=n(0),i=n.n(l),p=n(16),d=n(12),f=n(112),b=n(408),m=n(410),v=n(95),h=n(6),y=n(93),O=n.n(y),g=n(101),j=n(92),w=n(97),k=n(99),C=n(100),x=n(102),P=function(e){Object(C.a)(n,e);var t=Object(x.a)(n);function n(e){var a;Object(w.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(j.a)(Object(j.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(k.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.style,c=t.name,o=t.id,s=t.type,u=t.disabled,l=t.readOnly,p=t.tabIndex,d=t.onClick,f=t.onFocus,b=t.onBlur,m=t.onKeyDown,y=t.onKeyPress,j=t.onKeyUp,w=t.autoFocus,k=t.value,C=t.required,x=Object(g.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),P=Object.keys(x).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=x[t]),e}),{}),E=this.state.checked,N=O()(n,a,(e={},Object(v.a)(e,"".concat(n,"-checked"),E),Object(v.a)(e,"".concat(n,"-disabled"),u),e));return i.a.createElement("span",{className:N,style:r},i.a.createElement("input",Object(h.a)({name:c,id:o,type:s,required:C,readOnly:l,disabled:u,tabIndex:p,className:"".concat(n,"-input"),checked:!!E,onClick:d,onFocus:f,onBlur:b,onKeyUp:j,onKeyDown:m,onKeyPress:y,onChange:this.handleChange,autoFocus:w,ref:this.saveInput,value:k},P)),i.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(j.a)(Object(j.a)({},t),{},{checked:e.checked}):null}}]),n}(l.Component);P.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var E=P,N=n(103),_=n(94),I=n(114),F=n(182),K=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},S=l.createContext(null),D=function(e,t){var n=e.defaultValue,a=e.children,r=e.options,c=void 0===r?[]:r,o=e.prefixCls,s=e.className,u=e.style,i=e.onChange,p=K(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),d=l.useContext(F.b),f=d.getPrefixCls,b=d.direction,m=l.useState(p.value||n||[]),y=Object(_.a)(m,2),g=y[0],j=y[1],w=l.useState([]),k=Object(_.a)(w,2),C=k[0],x=k[1];l.useEffect((function(){"value"in p&&j(p.value||[])}),[p.value]);var P=function(){return c.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},E=f("checkbox",o),D="".concat(E,"-group"),A=Object(I.a)(p,["value","disabled"]);c&&c.length>0&&(a=P().map((function(e){return l.createElement(q,{prefixCls:E,key:e.value.toString(),disabled:"disabled"in e?e.disabled:p.disabled,value:e.value,checked:-1!==g.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var R={toggleOption:function(e){var t=g.indexOf(e.value),n=Object(N.a)(g);-1===t?n.push(e.value):n.splice(t,1),"value"in p||j(n);var a=P();null===i||void 0===i||i(n.filter((function(e){return-1!==C.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:g,disabled:p.disabled,name:p.name,registerValue:function(e){x((function(t){return[].concat(Object(N.a)(t),[e])}))},cancelValue:function(e){x((function(t){return t.filter((function(t){return t!==e}))}))}},L=O()(D,Object(v.a)({},"".concat(D,"-rtl"),"rtl"===b),s);return l.createElement("div",Object(h.a)({className:L,style:u},A,{ref:t}),l.createElement(S.Provider,{value:R},a))},A=l.forwardRef(D),R=l.memo(A),L=n(116),V=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},U=function(e,t){var n,a=e.prefixCls,r=e.className,c=e.children,o=e.indeterminate,s=void 0!==o&&o,u=e.style,i=e.onMouseEnter,p=e.onMouseLeave,d=e.skipGroup,f=void 0!==d&&d,b=V(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),m=l.useContext(F.b),y=m.getPrefixCls,g=m.direction,j=l.useContext(S),w=l.useRef(b.value);l.useEffect((function(){null===j||void 0===j||j.registerValue(b.value),Object(L.a)("checked"in b||!!j||!("value"in b),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),l.useEffect((function(){if(!f)return b.value!==w.current&&(null===j||void 0===j||j.cancelValue(w.current),null===j||void 0===j||j.registerValue(b.value)),function(){return null===j||void 0===j?void 0:j.cancelValue(b.value)}}),[b.value]);var k=y("checkbox",a),C=Object(h.a)({},b);j&&!f&&(C.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),j.toggleOption&&j.toggleOption({label:c,value:b.value})},C.name=j.name,C.checked=-1!==j.value.indexOf(b.value),C.disabled=b.disabled||j.disabled);var x=O()((n={},Object(v.a)(n,"".concat(k,"-wrapper"),!0),Object(v.a)(n,"".concat(k,"-rtl"),"rtl"===g),Object(v.a)(n,"".concat(k,"-wrapper-checked"),C.checked),Object(v.a)(n,"".concat(k,"-wrapper-disabled"),C.disabled),n),r),P=O()(Object(v.a)({},"".concat(k,"-indeterminate"),s));return l.createElement("label",{className:x,style:u,onMouseEnter:i,onMouseLeave:p},l.createElement(E,Object(h.a)({},C,{prefixCls:k,className:P,ref:t})),void 0!==c&&l.createElement("span",null,c))},M=l.forwardRef(U);M.displayName="Checkbox";var q=M,B=q;B.Group=R,B.__ANT_CHECKBOX=!0;var G=B,T=n(176),J=n(392),W=n.n(J);t.default=function(){var e=Object(p.b)().authAPI,t=Object(d.e)(),n=b.a.useForm(),c=Object(u.a)(n,1)[0],v=Object(l.useState)(!1),h=Object(u.a)(v,2),y=h[0],O=h[1],g=Object(l.useState)({name:"",email:"",password:""}),j=Object(u.a)(g,2),w=j[0],k=j[1],C=function(){var n=Object(s.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!y){n.next=7;break}return n.next=3,Object(f.e)(w.email,w.password);case 3:(a=n.sent)&&(e.setAccessTokenAPI(!0),e.setUserAPI(a.user),t.push("/sounter")),n.next=9;break;case 7:return n.next=9,Object(f.c)(w.name,w.email,w.password);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(e){var t=e.target,n=t.value,c=t.name;k((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(a.a)({},c,n))}))};return i.a.createElement("div",{className:W.a.container},i.a.createElement("a",{className:W.a.title,href:"/home"},"Sounter ",i.a.createElement("p",{className:W.a.subtitle}," create own routes")),i.a.createElement("div",{className:W.a.formContainer},i.a.createElement("div",{className:W.a.buttonContainer},i.a.createElement("button",{className:W.a.buttonsChange,type:"button",onClick:function(){return O(!1)}},"Registration"),i.a.createElement("button",{className:W.a.buttonsChange,type:"button",onClick:function(){return O(!0)}},"Login")),i.a.createElement(b.a,{form:c,name:"RegistrationLoginForm",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(e){C(),O(!0),c.setFieldsValue({name:"",email:"",password:""})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off"},!y&&i.a.createElement(b.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your Name!"}]},i.a.createElement(m.a,{name:"name",value:w.name,onChange:x})),i.a.createElement(b.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},i.a.createElement(m.a,{name:"email",value:w.email,onChange:x})),i.a.createElement(b.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},i.a.createElement(m.a.Password,{name:"password",value:w.password,onChange:x})),y&&i.a.createElement("button",{className:W.a.buttonResetPassword,type:"button",onClick:function(){t.push("/registration/reset")}},"Forgot Password"),i.a.createElement(b.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16}},i.a.createElement(G,null,"Remember me")),i.a.createElement(b.a.Item,{wrapperCol:{offset:8,span:16}},i.a.createElement(T.a,{type:"primary",htmlType:"submit"},"Submit")))))}}}]);
//# sourceMappingURL=10.9767a171.chunk.js.map