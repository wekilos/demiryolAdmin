"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[419],{9419:function(e,n,t){t.r(n);var r=t(9439),o=t(7309),l=t(8787),i=t(3775),a=t(4447),c=t(1798),s=t(2791),u=t(3519),d=t(1943),f=t(2911),m=t(7441),p=t(184);n.default=function(){var e,n=(0,s.useContext)(m.Y).dil,t=((0,f.k6)(),(0,s.useState)([])),v=(0,r.Z)(t,2),y=v[0],h=v[1],x=(0,s.useState)(!1),A=(0,r.Z)(x,2),g=A[0],C=A[1],b=(0,s.useState)({}),E=(0,r.Z)(b,2),j=E[0],Z=E[1],N=(0,s.useState)([]),k=(0,r.Z)(N,2),w=(k[0],k[1],(0,s.useState)(!1)),O=(0,r.Z)(w,2),P=(O[0],O[1],(0,s.useState)("")),S=(0,r.Z)(P,2),T=(S[0],S[1],(0,s.useState)("")),R=(0,r.Z)(T,2);R[0],R[1];(0,s.useEffect)((function(){B()}),[]);var B=function(){u.b.get("/api/order/allDisActive").then((function(e){console.log(e.data),h(e.data)})).catch((function(e){console.log(e)}))},I=[{title:"tm"===n?"No":"ru"===n?"\u041d\u043e":"No",dataIndex:"surname",render:function(e,n){return(0,p.jsx)("div",{children:null===n||void 0===n?void 0:n.lname})}},{title:"tm"===n?"Edara ady":"ru"===n?"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":"Company name",dataIndex:"name",render:function(e,n){var t;return(0,p.jsx)("div",{children:null===n||void 0===n||null===(t=n.User)||void 0===t?void 0:t.companyName})}},{title:"tm"===n?"Ulanyjy":"ru"===n?"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c":"User",dataIndex:"uploaded",render:function(e,n){var t;return(0,p.jsx)("div",{children:null===n||void 0===n||null===(t=n.User)||void 0===t?void 0:t.fname})}},{title:"tm"===n?"Bellik":"ru"===n?"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435":"Note",dataIndex:"message"},{title:"tm"===n?"Hereket":"ru"===n?"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435":"Action",render:function(e,t){return(0,p.jsxs)("div",{className:"flex",children:[(0,p.jsx)(o.Z,{onClick:function(){C(!0),Z(t)},type:"primary",style:{borderRadius:"7px"},children:"tm"===n?"Maglumat":"ru"===n?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"Information"}),(0,p.jsx)(l.Z,{placement:"top",title:"Are you sure",onConfirm:function(){return F(t.id)},okText:"Yes",cancelText:"No",children:(0,p.jsx)(o.Z,{type:"primary",style:{borderRadius:"7px",marginLeft:"10px"},children:"tm"===n?"Aktiw et":"ru"===n?"\u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"Activete"})})]})}}],F=function(e){u.b.patch("/api/order/disCancel/"+e).then((function(e){i.ZP.success("Aktiwe edildi!"),B()})).catch((function(e){console.log(e),i.ZP.warn("Gaytadan Barlan!")}))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{width:500,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){return C(!1)},visible:g,children:(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{className:"mb-0 font-[700]",children:["tm"===n?"Maglumat":"ru"===n?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"Information",":"]}),(0,p.jsxs)("p",{className:"mb-0 mt-0",children:["tm"===n?"Kod No":"ru"===n?"\u041a\u043e\u0434 \u2116":"Code No",": ",null===j||void 0===j?void 0:j.code]}),(0,p.jsxs)("p",{className:"mt-0 mb-0",children:["tm"===n?"\xf6\u0148 t\xf6leg":"ru"===n?"\u043f\u0435\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430":"prepayment",": ",null===j||void 0===j?void 0:j.payBefore," ",null===j||void 0===j?void 0:j.payBeforeType]}),(0,p.jsxs)("p",{className:"mt-0 mb-0",children:["tm"===n?"T\xf6leg":"ru"===n?"O\u043f\u043b\u0430\u0442\u0430":"Payment",": ",null===j||void 0===j?void 0:j.payment," ",null===j||void 0===j?void 0:j.peymentType]}),(0,p.jsxs)("p",{className:"".concat((null===j||void 0===j?void 0:j.payment)-(null===j||void 0===j?void 0:j.payBefore)>0?"text-[#ff2a2a]":"text-[#27AE60] "," "),children:["tm"===n?"Balans":"ru"===n?"\u041e\u0441\u0442\u0430\u0442\u043e\u043a":"Balance",": ",(null===j||void 0===j?void 0:j.payment)-(null===j||void 0===j?void 0:j.payBefore)," ",null===j||void 0===j?void 0:j.peymentType]}),(0,p.jsxs)("h2",{className:"font-[700]",children:["tm"===n?"Fa\xfdllar":"ru"===n?"\u0424\u0430\u0439\u043b\u044b":"Files",":"]}),null===j||void 0===j||null===(e=j.OrderDocs)||void 0===e?void 0:e.map((function(e){return console.log(u._+e.fileName),(0,p.jsxs)("div",{style:{width:"100%",display:"flex"},children:[(0,p.jsxs)("a",{href:u._+"/"+e.fileName,target:"_blank",children:[" ",(0,p.jsx)("img",{style:{marginRight:"10px",objectFit:"contain",height:"50px"},src:d,alt:"file"})]}),(0,p.jsx)("p",{style:{lineHeight:"50px"},children:e.title})]})}))]})}),(0,p.jsx)(c.Z,{columns:I,dataSource:y,pagination:{pageSize:50},scroll:{y:"72vh"}})]})}},3519:function(e,n,t){t.d(n,{_:function(){return o},b:function(){return l}});var r=t(4569),o="http://216.250.8.203:8181",l=t.n(r)().create({baseURL:o,timeout:1e4,headers:{"Content-Type":"application/json",Accept:"*/*"}})},8787:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(7462),o=t(9439),l=t(187),i=t(1694),a=t.n(i),c=t(5179),s=t(1354),u=t(2791),d=t(1929),f=t(6573),m=function(e){return e?"function"===typeof e?e():e:null},p=t(9464),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},y=u.forwardRef((function(e,n){var t=e.prefixCls,o=e.title,l=e.content,i=e._overlay,a=v(e,["prefixCls","title","content","_overlay"]),c=u.useContext(d.E_).getPrefixCls,s=c("popover",t),y=c();return u.createElement(f.Z,(0,r.Z)({},a,{prefixCls:s,ref:n,overlay:i||function(e){if(o||l)return u.createElement(u.Fragment,null,o&&u.createElement("div",{className:"".concat(e,"-title")},m(o)),u.createElement("div",{className:"".concat(e,"-inner-content")},m(l)))}(s),transitionName:(0,p.mL)(y,"zoom-big",a.transitionName)}))}));y.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var h=y,x=t(1113),A=t(7309),g=t(8926),C=t(8368);function b(e){return!(!e||!e.then)}var E=function(e){var n=u.useRef(!1),t=u.useRef(),l=(0,C.Z)(!1),i=(0,o.Z)(l,2),a=i[0],c=i[1],s=e.close,d=function(){null===s||void 0===s||s.apply(void 0,arguments)};u.useEffect((function(){var n;if(e.autoFocus){var r=t.current;n=setTimeout((function(){return r.focus()}))}return function(){n&&clearTimeout(n)}}),[]);var f=e.type,m=e.children,p=e.prefixCls,v=e.buttonProps;return u.createElement(A.Z,(0,r.Z)({},(0,g.n)(f),{onClick:function(t){var r=e.actionFn;if(!n.current)if(n.current=!0,r){var o;if(e.emitEvent){if(o=r(t),e.quitOnNullishReturnValue&&!b(o))return n.current=!1,void d(t)}else if(r.length)o=r(s),n.current=!1;else if(!(o=r()))return void d();!function(e){b(e)&&(c(!0),e.then((function(){c(!1,!0),d.apply(void 0,arguments),n.current=!1}),(function(e){console.error(e),c(!1,!0),n.current=!1})))}(o)}else d()},loading:a,prefixCls:p},v,{ref:t}),m)},j=t(3486),Z=t(3578);function N(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,l=e.title,i=e.cancelText,a=e.okText,c=e.okType,s=e.icon,f=e.showCancel,p=void 0===f||f,v=e.close,y=e.onConfirm,h=e.onCancel,x=u.useContext(d.E_).getPrefixCls;return u.createElement(j.Z,{componentName:"Popconfirm",defaultLocale:Z.Z.Popconfirm},(function(e){return u.createElement("div",{className:"".concat(n,"-inner-content")},u.createElement("div",{className:"".concat(n,"-message")},s,u.createElement("div",{className:"".concat(n,"-message-title")},m(l))),u.createElement("div",{className:"".concat(n,"-buttons")},p&&u.createElement(A.Z,(0,r.Z)({onClick:h,size:"small"},o),i||e.cancelText),u.createElement(E,{buttonProps:(0,r.Z)((0,r.Z)({size:"small"},(0,g.n)(c)),t),actionFn:y,close:v,prefixCls:x("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},a||e.okText)))}))}var k=void 0,w=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},O=u.forwardRef((function(e,n){var t=u.useContext(d.E_).getPrefixCls,l=(0,c.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),i=(0,o.Z)(l,2),f=i[0],m=i[1],p=function(n,t){var r;m(n,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,n,t)},v=e.prefixCls,y=e.placement,A=e.children,g=e.overlayClassName,C=w(e,["prefixCls","placement","children","overlayClassName"]),b=t("popover",v),E=t("popconfirm",v),j=a()(E,g);return u.createElement(h,(0,r.Z)({},C,{prefixCls:b,placement:y,onVisibleChange:function(n){e.disabled||p(n)},visible:f,_overlay:u.createElement(N,(0,r.Z)({},e,{prefixCls:b,close:function(e){p(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(k,n)},onCancel:function(n){var t;p(!1,n),null===(t=e.onCancel)||void 0===t||t.call(k,n)}})),overlayClassName:j,ref:n}),(0,x.Tm)(A,{onKeyDown:function(e){var n,t;u.isValidElement(A)&&(null===(t=null===A||void 0===A?void 0:(n=A.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.Z.ESC&&f&&p(!1,e)}(e)}}))}));O.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:u.createElement(l.Z,null),disabled:!1};var P=O},1943:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAYAAAAATWqyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7di7DcIwFIXhY4PIAHRIbEHJCKwRsQWvLVCq7ELJFhSskCAR40ipjgCbh+2A7l+lcPHFcq6lqLIsx3VdT5VSA4Rpkef51rVIV1U1CYhA0zSboijWrnXaNkLgfDAakXJhokHgwESF4AkmOgQPMEkguINJBgFhhkhchwkPsXNq5rUOPUkgnEA4gXAC4QTC9QbivPRW+8MRb7Zbzr0uvLbf2ZFX3uqT5LByAuH+Z45866uSOcLJYeUEwgmEEwinjTFXJM7+rLnoLMtO7QMS1W3E+QYP0Fq68a+ubQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=419.e97a39d8.chunk.js.map