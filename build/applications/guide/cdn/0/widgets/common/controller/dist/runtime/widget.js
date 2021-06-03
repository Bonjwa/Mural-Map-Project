System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e){var n,t,r;return{setters:[function(e){n=e},function(e){t=e},function(e){r=e}],execute:function(){e(function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=459)}({0:function(e,t){e.exports=n},1:function(e,n){e.exports=t},29:function(e,n,t){"use strict";t.d(n,"h",(function(){return y})),t.d(n,"f",(function(){return w})),t.d(n,"i",(function(){return j})),t.d(n,"m",(function(){return O})),t.d(n,"l",(function(){return x})),t.d(n,"j",(function(){return R})),t.d(n,"b",(function(){return S})),t.d(n,"g",(function(){return I})),t.d(n,"d",(function(){return k})),t.d(n,"c",(function(){return C})),t.d(n,"a",(function(){return E})),t.d(n,"e",(function(){return M})),t.d(n,"k",(function(){return P}));var r,o=t(0),i=t(1),a=t(44),l=t(5),c=t(47),u=t(43),d=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},s=o.React.useState,f=o.React.useEffect,v=o.React.useMemo,p=o.React.useRef,b=o.ReactRedux.useSelector,h=function(){return document.body.getBoundingClientRect()},g=function(e,n){return e.right>=n.right||e.left<=n.left},m=function(e,n){return e.bottom>=n.bottom||e.top<=n.top},y=function(e,n,t,r,o,l){var c=s((function(){return h()})),u=c[0],d=c[1],v=s([t]),b=v[0],y=v[1],w=p(0);f((function(){var e=function(){var e=h();d(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var j=i.hooks.useEventCallback((function(n){if(w.current++,w.current>7)return console.warn("Number of cycles: "+w.current+".You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking"),n;var r=function(e,n){return!(!e||!n)&&(g(e,n)||m(e,n))}(n,u);if(!r)return n;var i=n.width,l=n.height,c=n.left,d=n.top,s=n.right,f=n.bottom;if(r){var v=g({left:c,top:d,right:s,bottom:f,width:i,height:l},u),p=m({left:c,top:d,right:s,bottom:f,width:i,height:l},u);v&&(c=e===a.a.SideBySide?t.x:u.right-i),p||e!==a.a.SideBySide||(d+=o),s=c+i,f=d+l}return j({left:c,top:d,right:s,bottom:f,width:i,height:l})}));return f((function(){var i=[],l={width:0,height:0};n.forEach((function(n,c){var u=0!==c?i[c-1]:t,d=u.x,s=u.y;e===a.a.SideBySide?(d+=l.width,d+=0!==c?r:0):e===a.a.Stack&&(d+=0!==c?r:0,s+=0!==c?o:0);var f={left:d,top:s,right:d+n.width,bottom:s+n.height,width:n.width,height:n.height},v=j(f),p=v.left,b=v.top;w.current>7?(d=u.x,s=u.y):(d=p,s=b),w.current=0,i.push({x:d,y:s}),l=n})),y(i)}),[e,t,r,o,u.width,u.height,j,n]),b},w=function(e){return o.ReactRedux.useSelector((function(n){var t=n.appRuntimeInfo.selection,r=n.appConfig,i=!1;if(t&&r.layouts[t.layoutId]){var a=r.layouts[t.layoutId].content[t.layoutItemId],c=a&&a.widgetId,u=[];c&&(u=l.searchUtils.getChildrenContents(r,c,o.LayoutItemType.Widget,!1));var d=[c,e];u&&(d=d.concat(u)),i=d.includes(c)}return i}))},j=function(){var e=o.ReactRedux.useSelector((function(e){return e.appConfig.widgets}));return function(n){var t;return null===(t=null==e?void 0:e[n])||void 0===t?void 0:t.label}},O=function(e){return o.ReactRedux.useSelector((function(n){var t,r;return null===(r=null===(t=n.appConfig.widgets)||void 0===t?void 0:t[e])||void 0===r?void 0:r.label}))},x=function(e,n){return b((function(t){var r,o,i;return null===(i=null===(o=null===(r=t.appConfig.widgets)||void 0===r?void 0:r[e])||void 0===o?void 0:o.layouts)||void 0===i?void 0:i[n]}))},R=function(e,n){var t=o.ReactRedux.useSelector((function(e){return e.widgetsRuntimeInfo})),r=Object(u.b)(e,n),i=v((function(){return Object.keys(t).filter((function(e){var n,r=null===(n=t[e])||void 0===n?void 0:n.state;return!(r!==o.WidgetState.Opened&&r!==o.WidgetState.Active)}))}),[t]);return v((function(){return r.filter((function(e){return i.includes(e)}))}),[r,i])},S=function(e){var n=o.appActions.closeWidget(e);Object(o.getAppStore)().dispatch(n)},I=function(e,n){var t=R(e,n);return i.hooks.useEventCallback((function(){return e=t,n=o.appActions.closeWidgets(e),void Object(o.getAppStore)().dispatch(n);var e,n}))},k=function(e){var n=o.appActions.openWidgets(e);Object(o.getAppStore)().dispatch(n)},C=function(e){var n=o.appActions.openWidget(e);Object(o.getAppStore)().dispatch(n)},E=function(e){var n=o.appActions.activateWidget(e);Object(o.getAppStore)().dispatch(n)},M=function(e,n){var t=null==e?void 0:e.showLabel,r=null==e?void 0:e.labelGrowth,o=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return Object(c.b)(o,t,i)+n+r},P=function(){var e=b((function(e){return e.theme}));return Object(o.css)(r||(r=d(["\n    > .panel-header {\n      .action-close {\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n        &:disabled {\n          color: ",";\n        }\n      }\n    }\n  "],["\n    > .panel-header {\n      .action-close {\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n        &:disabled {\n          color: ",";\n        }\n      }\n    }\n  "])),null==e?void 0:e.colors.palette.primary[200],null==e?void 0:e.colors.white,null==e?void 0:e.colors.palette.primary[400])}},33:function(e,n,t){"use strict";t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"e",(function(){return l})),t.d(n,"d",(function(){return c})),t.d(n,"g",(function(){return u}));var r=5,o="controller",i="_openwidget",a=150,l=50,c=21,u={sm:24,default:32,lg:48}},43:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u}));var r=t(0),o=t(5),i=r.React.useMemo,a=r.ReactRedux.useSelector,l=function(e){var n=(e.order&&e.order.asMutable()||[]).map((function(n){var t;return null===(t=e.content)||void 0===t?void 0:t[n]}));return(n=n.filter((function(e){return e&&!e.isPending}))).map((function(e){return null==e?void 0:e.id}))},c=function(e,n){var t=u(e,n);return i((function(){return function(e){return l(e).map((function(n){var t,r;return null===(r=null===(t=e.content)||void 0===t?void 0:t[n])||void 0===r?void 0:r.widgetId}))}(t)}),[t])},u=function(e,n){return a((function(t){var r,i,a,l=null===(i=null===(r=(t=t.appContext.isBuilder?t.appStateInBuilder:t).appConfig.widgets)||void 0===r?void 0:r[e])||void 0===i?void 0:i.layouts,c=o.searchUtils.findLayoutId(l[n],t.browserSizeMode,t.appConfig.mainSizeMode);return null===(a=t.appConfig.layouts)||void 0===a?void 0:a[c]}))}},44:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(r||(r={}))},459:function(e,n,t){"use strict";t.r(n);var r,o=t(0),i=t(1),a=t(29),l=t(5),c=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},s=o.React.useEffect;function f(e){var n,t=e.widgetId,l=e.canCrossLayoutBoundary,f=e.className,v=d(e,["widgetId","canCrossLayoutBoundary","className"]),p=o.ReactRedux.useSelector((function(e){var n,r;return null===(r=null===(n=e.widgetsRuntimeInfo)||void 0===n?void 0:n[t])||void 0===r?void 0:r.isClassLoaded})),b=o.ReactRedux.useSelector((function(e){var n,r;return(null===(r=null===(n=e.widgetsRuntimeInfo)||void 0===n?void 0:n[t])||void 0===r?void 0:r.state)===o.WidgetState.Active}));s((function(){t&&!p&&o.WidgetManager.getInstance().loadWidgetClass(t)}),[t]),t&&(n=o.WidgetManager.getInstance().getWidgetClass(t));var h=i.hooks.useEventCallback((function(){window.jimuConfig.isBuilder||b||Object(a.a)(t)})),g=Object(o.classNames)("widget-renderer  w-100 h-100",f),m=function(e){return o.React.useMemo((function(){return Object(o.css)(r||(r=c(["\n      overflow: ",";\n      position: relative;\n      .widget-content {\n        position: relative;\n        height: 100%;\n        width: 100%;\n        z-index: 0;\n      }\n  "],["\n      overflow: ",";\n      position: relative;\n      .widget-content {\n        position: relative;\n        height: 100%;\n        width: 100%;\n        z-index: 0;\n      }\n  "])),e?"visible":"hidden")}),[e])}(l);return Object(o.jsx)("div",u({css:m,className:g,onMouseDownCapture:h},v),Object(o.jsx)("div",{className:"widget-content p-1"},n&&Object(o.jsx)(o.ErrorBoundary,null,Object(o.jsx)(n,{widgetId:t})),!n&&Object(o.jsx)(i.Loading,null)))}var v,p=function(e){var n=e.widgetId,t=e.containerMapId,r=e.onClose,l=Object(a.m)(n);return o.React.createElement(i.MobilePanel,{mapWidgetId:t,title:l,open:!!n,toggle:function(e){null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==r||r(n)}},o.React.createElement(f,{widgetId:n}))},b={width:150,height:120},h={width:300,height:300},g=function(e){var n=e.reference,t=e.placement,r=e.sizes,l=e.widgetIds,c=e.openedWidgets,u=e.onClose,d=o.React.useState((function(){return function(e,n){var t=Object(o.Immutable)({});return e.forEach((function(e){t=t.set(e,n[e]||h)})),t}(l,r)})),s=d[0],v=d[1],p=o.React.useMemo((function(){var e;return(null!==(e=null==c?void 0:c.map((function(e){return e.id})))&&void 0!==e?e:[]).map((function(e){return s[e]}))}),[s,c]),g=Object(a.i)(),m=Object(a.k)();return Object(o.jsx)(o.React.Fragment,null,c.map((function(e,r){var a=e.id,l=e.opening,c=p[r],d=g(a);return Object(o.jsx)(i.Popper,{key:a,className:Object(o.classNames)({"d-none":!l},"rrw-controller__single-widget-launcher"),headerTitle:d,minSize:b,dragBounds:"body",defaultSize:c,onResize:function(e){return n=a,t=e,void v(s.set(n,t));var n,t},onHeaderClose:function(e){return function(e,n){n.stopPropagation(),n.nativeEvent.stopImmediatePropagation(),null==u||u(e)}(a,e)},floating:!0,open:!0,reference:n,placement:t,css:m},Object(o.jsx)(f,{widgetId:a}))})))},m=o.React.useState,y=o.React.useMemo,w={width:300,height:300},j=function(e){var n=e.mode,t=e.start,r=e.spaceX,l=e.spaceY,c=e.sizes,u=e.widgetIds,d=e.openedWidgets,s=e.onClose,v=e.forbidden,p=m((function(){return function(e,n){var t=Object(o.Immutable)({});return e.forEach((function(e){t=t.set(e,n[e]||w)})),t}(u,c)})),b=p[0],h=p[1],g=Object(a.i)(),j=y((function(){var e;return(null!==(e=null==d?void 0:d.map((function(e){return e.id})))&&void 0!==e?e:[]).map((function(e){return b[e]}))}),[b,d]),O=Object(a.h)(n,j,t,r,l,v),x=Object(a.k)();return Object(o.jsx)(o.React.Fragment,null,d.map((function(e,n){var t=e.id,r=e.opening,a=O[n];if(a){var l=j[n],c=g(t);return Object(o.jsx)(i.FloatingPanel,{key:t,headerTitle:c,defaultPosition:a,defaultSize:l,className:Object(o.classNames)({"d-none":!r},"rrw-controller__multiple-widget-launcher"),showHeaderClose:!0,dragBounds:"body",onResize:function(e){return n=t,r=e,void h(b.set(n,r));var n,r},onHeaderClose:function(e){return function(e,n){n.stopPropagation(),n.nativeEvent.stopImmediatePropagation(),null==s||s(e)}(t,e)},css:x},Object(o.jsx)(f,{widgetId:t}))}})))},O=t(67),x=t(78),R=t(33),S=t(43),I=function(){return(I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},k=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r},C=o.ReactRedux.useSelector,E=o.React.useEffect,M=o.React.useState,P=o.React.useCallback,z=o.React.useMemo,L=o.React.useRef,N={x:70,y:70},_={x:30,y:30},A=function(e){return C((function(n){return function(e,n){var t=e.appConfig,r=l.searchUtils.getContentContainerInfo(t,n,o.LayoutItemType.Widget,e.browserSizeMode),i=Object.values(e.appRuntimeInfo.sectionNavInfos||t.sections||{}).map((function(e){return e.currentViewId||(e.views||[])[0]}));return(r||{}).type!==o.ContainerType.View||i.includes(r.id)}(n,e)}))},B=function(e){var n,t,r,c,u,d,s,f,v,b,h,m,y=e.id,B=e.config,T=e.version,W=e.forbidden,U=null===(n=B.behavior)||void 0===n?void 0:n.onlyOpenOne,G=null===(t=B.behavior)||void 0===t?void 0:t.openStarts,H=null===(r=B.behavior)||void 0===r?void 0:r.size,D=null===(c=B.behavior)||void 0===c?void 0:c.vertical,F=null===(u=B.behavior)||void 0===u?void 0:u.displayType,V=null===(d=null==B?void 0:B.appearance)||void 0===d?void 0:d.card,Y=A(y),K=function(e){return C((function(n){var t,r=n.appConfig,i=n.browserSizeMode,a=l.searchUtils.getParentWidgetIdOfContent(r,e,o.LayoutItemType.Widget,i),c=r.widgets[a];return"arcgis-map"===(null===(t=null==c?void 0:c.manifest)||void 0===t?void 0:t.name)?c.id:""}))}(y),X=C((function(e){return e.appContext.isInBuilder})),q=i.hooks.useCheckSmallBrowserSzieMode(),J=C((function(e){return e.appRuntimeInfo.currentPageId})),Q=null===(v=null===(f=null===(s=Object(o.getAppStore)())||void 0===s?void 0:s.getState())||void 0===f?void 0:f.appContext)||void 0===v?void 0:v.isRTL,Z=L(),$=Object(S.b)(y,R.a),ee=Object(a.j)(y,R.a),ne=Object(a.g)(y,R.a),te=M(null),re=te[0],oe=te[1],ie=M(G||[]),ae=ie[0],le=ie[1],ce=z((function(){return ae.map((function(e){return{id:e,opening:ee.includes(e)}}))}),[ae,ee]),ue=null==ee?void 0:ee[0],de=D?"right-start":"bottom",se=P((function(e){var n,t=e.currentTarget,r=null===(n=e.currentTarget.dataset)||void 0===n?void 0:n.widgetid;if(r&&t){oe(t);var o=ae;ae.includes(r)||(o=k(o,[r]),le(o)),!!q||U?(ne(),ee.includes(r)||Object(a.c)(r)):ee.includes(r)?Object(a.b)(r):Object(a.c)(r)}}),[ae,ee,q,U,ne]),fe=function(e){e&&Object(a.b)(e)},ve=i.hooks.useEventCallback((function(){!X&&(null==G?void 0:G.length)&&(U?setTimeout((function(){var e,n=function(e){return document&&document.querySelector(".widget-controller .avatar-card[data-widgetid='"+e+"']")}(G[0]);oe(n||(null===(e=Z.current)||void 0===e?void 0:e.ref.current)),Object(a.d)(G)}),1e3):Object(a.d)(G))}));E((function(){ve()}),[ve]),i.hooks.useUpdateEffect((function(){ne(),le([])}),[T,ne]),i.hooks.useUpdateEffect((function(){ne(),le([])}),[J,ne]),i.hooks.useUpdateEffect((function(){Y||(ne(),le([]))}),[Y,ne]);var pe=P((function(e,n){var t=ee.includes(e);return o.React.createElement(x.b,I({},V,{key:e,className:n+" rrw-controller__layout-item",widgetid:e,markerEnabled:!1,active:t,onClick:se}))}),[V,ee,se]),be=Object(a.e)(null===(b=null==B?void 0:B.appearance)||void 0===b?void 0:b.card,null===(h=null==B?void 0:B.appearance)||void 0===h?void 0:h.space),he=q&&o.React.createElement(p,{widgetId:ue,containerMapId:K,onClose:fe})||null,ge=!q&&U&&o.React.createElement(g,{widgetIds:$,sizes:H,reference:re,placement:de,openedWidgets:ce,onClose:fe})||null,me=Q?I(I({},N),{x:document.body.clientWidth-w.width-N.x}):N,ye=Q?I(I({},_),{x:-_.x}):_,we=!q&&!U&&o.React.createElement(j,{widgetIds:$,sizes:H,mode:F,start:me,spaceX:ye.x,spaceY:ye.y,forbidden:W,openedWidgets:ce,onClose:fe})||null;return o.React.createElement(o.React.Fragment,null,he,ge,we,o.React.createElement(O.a,{ref:Z,className:"rrw-controller__runtime--scroll-list",vertical:D,itemLength:be,space:null===(m=B.appearance)||void 0===m?void 0:m.space,autoHideArrow:!0,lists:$,createItem:pe}))},T=(v=function(e,n){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}v(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),W={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,avatar:{type:"primary",size:"default",shape:"circle"}}}},U=function(e){return"SMALL"===e?"sm":"MEDIUM"===e?"default":"LARGE"===e?"lg":e},G=function(e,n){return void 0===n&&(n="primary"),null==e?void 0:e[n]},H=new(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:function(e){if(!e)return W;if(e.behavior&&e.appearance)return e;var n=e;return e.behavior||(n=(n=(n=(n=(n=(n=n.setIn(["behavior","openStarts"],[])).setIn(["behavior","onlyOpenOne"],e.onlyOpenOne)).setIn(["behavior","displayType"],e.displayType)).setIn(["behavior","vertical"],e.vertical)).setIn(["behavior","size"],e.size)).without(["onlyOpenOne","displayType","size"])),e.appearance||(n=n.setIn(["appearance","advanced"],!1),n=(n=(n=(n=(n=(n=e.vertical?n.setIn(["appearance","space"],e.space):(n=n.setIn(["appearance","space"],0)).setIn(["appearance","card","labelGrowth"],e.space)).setIn(["appearance","card","showLabel"],e.showLabel)).setIn(["appearance","card","avatar","size"],U(e.iconSize))).setIn(["appearance","card","avatar","shape"],e.iconStyle)).setIn(["appearance","card","avatar","type"],"primary")).without(["space","showLabel","iconSize","iconStyle","vertical"])),n}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:function(e){var n,t;if(!e)return W;var r=null===(n=null==e?void 0:e.appearance)||void 0===n?void 0:n.card,o=null==r?void 0:r.variants,i=null===(t=null==r?void 0:r.avatar)||void 0===t?void 0:t.type,a=e;if(o){var l=G(o,i);r=null==r?void 0:r.set("variant",l).without("variants"),a=a.setIn(["appearance","card"],r)}return a}}],n}return T(n,e),n}(o.BaseVersionManager)),D=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},F=o.ReactRedux.useSelector,V=o.React.useState,Y=o.React.useMemo,K=o.React.useRef,X=function(e){var n,t,r,a,l=e.builderSupportModules,c=e.id,u=e.config,d=e.layoutId,s=e.layoutItemId,f=null===(n=u.behavior)||void 0===n?void 0:n.onlyOpenOne,v=null===(t=u.behavior)||void 0===t?void 0:t.displayType,p=null===(r=null==u?void 0:u.behavior)||void 0===r?void 0:r.vertical,b=null==u?void 0:u.appearance.advanced,h=null===(a=null==u?void 0:u.appearance)||void 0===a?void 0:a.card.variant,g=F((function(e){return e.appContext.isInBuilder})),m=F((function(e){return e.appRuntimeInfo.appMode})),y=F((function(e){return e.browserSizeMode})),w=F((function(e){var n,t,r,o,i=null;return g&&(i=null===(o=null===(r=null===(t=null===(n=e.appConfig.layouts)||void 0===n?void 0:n[d])||void 0===t?void 0:t.content)||void 0===r?void 0:r[s])||void 0===o?void 0:o.bbox),i})),j=g&&m!==o.AppMode.Run,O=j&&l.widgetModules.Builder,x=V(0),S=x[0],I=x[1],k=V(null),C=k[0],E=k[1],M=K(null);i.hooks.useUpdateEffect((function(){var e=M.current;if(e){var n=e.getBoundingClientRect();E(n)}}),[w]),i.hooks.useUpdateEffect((function(){I((function(e){return e+1}))}),[f,v,m,y,w]);var P=function(e){return Y((function(){return Object(o.css)(J||(J=D(["\n      overflow: hidden;\n      white-space: nowrap;\n      .controller-container {\n        width: 100%;\n        height: 100%;\n        min-width: ",";\n        min-height: ",";\n      }\n      ",";\n    "],["\n      overflow: hidden;\n      white-space: nowrap;\n      .controller-container {\n        width: 100%;\n        height: 100%;\n        min-width: ",";\n        min-height: ",";\n      }\n      ",";\n    "])),e?o.polished.rem(R.e):o.polished.rem(R.f),e?o.polished.rem(R.f):o.polished.rem(R.e),e&&Object(o.css)(q||(q=D(["\n      .roll-list {\n        .content {\n          width: 100%;\n        }\n      }\n      .layout-item-list {\n        &.icon-list {\n          width: 100%;\n        }\n      }\n        .layout-item {\n          width: 100%;\n        }\n        .avatar-card {\n            width: 100% !important;\n          }\n      "],["\n      .roll-list {\n        .content {\n          width: 100%;\n        }\n      }\n      .layout-item-list {\n        &.icon-list {\n          width: 100%;\n        }\n      }\n        .layout-item {\n          width: 100%;\n        }\n        .avatar-card {\n            width: 100% !important;\n          }\n      "]))))}),[e])}(p),z=function(e,n){var t=null==e?void 0:e.default,r=null==e?void 0:e.active,a=null==e?void 0:e.hover;return Y((function(){return n?Object(o.css)(ne||(ne=D(["\n      .avatar-card:not(.add-widget-btn) {\n        ","\n        ","\n        ","\n      }\n    "],["\n      .avatar-card:not(.add-widget-btn) {\n        ","\n        ","\n        ","\n      }\n    "])),t&&Object(o.css)(Z||(Z=D(["\n          > .avatar {\n            > .avatar-button {\n              background-color: ",";\n              border-color: ",";\n            }\n          }\n          > .avatar-label {\n            color: ",";\n            font-style: ",";\n            font-weight: ",";\n            text-decoration: ",";\n          }\n        "],["\n          > .avatar {\n            > .avatar-button {\n              background-color: ",";\n              border-color: ",";\n            }\n          }\n          > .avatar-label {\n            color: ",";\n            font-style: ",";\n            font-weight: ",";\n            text-decoration: ",";\n          }\n        "])),t.bg,t.bg,t.color,(null==t?void 0:t.italic)?"italic":"normal",(null==t?void 0:t.bold)?"bold":"normal",i.styleUtils.toCSSTextUnderLine({underline:t.underline,strike:t.strike})),a&&Object(o.css)($||($=D(["\n          &:hover {\n            > .avatar {\n              > .avatar-button {\n                background-color: ",";\n                border-color: ",";\n              }\n            }\n            > .avatar-label {\n              color: ",";\n              font-style: ",";\n              font-weight: ",";\n              text-decoration: ",";\n            }\n          }\n        "],["\n          &:hover {\n            > .avatar {\n              > .avatar-button {\n                background-color: ",";\n                border-color: ",";\n              }\n            }\n            > .avatar-label {\n              color: ",";\n              font-style: ",";\n              font-weight: ",";\n              text-decoration: ",";\n            }\n          }\n        "])),a.bg,a.bg,a.color,(null==a?void 0:a.italic)?"italic":"normal",(null==a?void 0:a.bold)?"bold":"normal",i.styleUtils.toCSSTextUnderLine({underline:a.underline,strike:a.strike})),r&&Object(o.css)(ee||(ee=D(['\n            > .avatar {\n              > .avatar-button {\n                &:not(:disabled):not(.disabled):active,\n                &:not(:disabled):not(.disabled).active,\n                &[aria-expanded="true"] {\n                  background-color: ',";\n                  border-color: ",";\n                }\n              }\n            }\n            > .avatar-label {\n              &:not(:disabled):not(.disabled):active,\n              &:not(:disabled):not(.disabled).active {\n                color: ",";\n                font-style: ",";\n                font-weight: ",";\n                text-decoration: ",";\n              }\n            }\n        "],['\n            > .avatar {\n              > .avatar-button {\n                &:not(:disabled):not(.disabled):active,\n                &:not(:disabled):not(.disabled).active,\n                &[aria-expanded="true"] {\n                  background-color: ',";\n                  border-color: ",";\n                }\n              }\n            }\n            > .avatar-label {\n              &:not(:disabled):not(.disabled):active,\n              &:not(:disabled):not(.disabled).active {\n                color: ",";\n                font-style: ",";\n                font-weight: ",";\n                text-decoration: ",";\n              }\n            }\n        "])),r.bg,r.bg,r.color,(null==r?void 0:r.italic)?"italic":"normal",(null==r?void 0:r.bold)?"bold":"normal",i.styleUtils.toCSSTextUnderLine({underline:r.underline,strike:r.strike}))):Object(o.css)(Q||(Q=D([""],[""])))}),[n,t,r,a])}(h,b);return Object(o.jsx)("div",{className:"widget-controller jimu-widget shadow rw-controller",css:[P,z],ref:M},Object(o.jsx)("div",{className:"controller-container"},!j&&Object(o.jsx)(B,{id:c,version:S,config:u,forbidden:C}),j&&O&&Object(o.jsx)(O,{id:c,version:S,config:u})))};X.versionManager=H;var q,J,Q,Z,$,ee,ne;n.default=X},47:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return v}));var r,o=t(0),i=t(1),a=t(33),l=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},c=function(){return(c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},d=o.React.useState,s=function(e,n,t){var r=a.g[e];return n&&(r+=a.d),r+=2*f(e,t)},f=function(e,n){return"circle"===n?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6},v=o.React.forwardRef((function(e,n){var t,a=e.label,v=e.className,p=e.title,b=e.showLabel,h=e.labelGrowth,g=void 0===h?0:h,m=e.icon,y=e.marker,w=e.onMarkerClick,j=e.avatar,O=e.autoFlip,x=e.onClick,R=e.active,S=e.editDraggable,I=u(e,["label","className","title","showLabel","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","onClick","active","editDraggable"]),k=j||{},C=k.shape,E=k.style,M=u(k,["shape","style"]),P=null==M?void 0:M.size,z=o.React.useMemo((function(){var e=s(P,b,C),n=e+g,t=f(P,C);return Object(o.css)(r||(r=l(["\n      display: flex;\n      align-items:center;\n      flex-direction: column;\n      justify-content: ",";\n      width: "," !important;\n      height: ",";\n      .tool-drag-handler {\n        cursor: auto;\n      }\n      .avatar {\n        padding: ","px;\n        position: relative;\n        text-align: center;\n        .marker {\n          position: absolute;\n          right: 0;\n          top: 0;\n          padding: 0;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          .icon-btn-sizer {\n            min-width: .625rem;\n            min-height: .625rem;\n          }\n        }\n      }\n      .avatar-label {\n        text-align: center;\n        width: 100%;\n        min-height: ",";\n      }\n    "],["\n      display: flex;\n      align-items:center;\n      flex-direction: column;\n      justify-content: ",";\n      width: "," !important;\n      height: ",";\n      .tool-drag-handler {\n        cursor: auto;\n      }\n      .avatar {\n        padding: ","px;\n        position: relative;\n        text-align: center;\n        .marker {\n          position: absolute;\n          right: 0;\n          top: 0;\n          padding: 0;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          .icon-btn-sizer {\n            min-width: .625rem;\n            min-height: .625rem;\n          }\n        }\n      }\n      .avatar-label {\n        text-align: center;\n        width: 100%;\n        min-height: ",";\n      }\n    "])),b?"space-around":"center",o.polished.rem(n),o.polished.rem(e),t,o.polished.rem(21))}),[P,b,C,g]),L=d(null),N=L[0],_=L[1];return Object(o.jsx)("div",c({},I,{ref:n,className:Object(o.classNames)("avatar-card",v+" rw-controller__avatar-card"),css:z,onClick:x}),Object(o.jsx)("div",{className:Object(o.classNames)({"no-drag-action":!S},"avatar tool-drag-handler"),onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)}},y&&N&&Object(o.jsx)(i.Button,{className:"marker",size:"sm",icon:!0,onClick:w},Object(o.jsx)(i.Icon,{size:10,icon:y})),Object(o.jsx)(i.Tooltip,{title:p||a,style:{pointerEvents:"none"}},Object(o.jsx)(i.Button,c({icon:!0,active:R,className:"avatar-button"},M,{style:c({borderRadius:"circle"===C?"50%":void 0},E)}),Object(o.jsx)(i.Icon,{color:"string"!=typeof m&&(null===(t=m.properties)||void 0===t?void 0:t.color),icon:"string"!=typeof m?m.svg:m,autoFlip:O})))),b&&Object(o.jsx)("div",{className:Object(o.classNames)("avatar-label text-capitalize text-truncate",{active:R})},a))}))},5:function(e,n){e.exports=r},50:function(e,n){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},67:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r,o=t(0),i=t(1),a=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},l=function(){return(l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},u=o.React.useRef,d=o.React.useEffect,s=o.React.useState,f=o.React.useImperativeHandle,v=o.React.forwardRef,p=v((function(e,n){var t,v,p=e.className,b=e.lists,h=void 0===b?[]:b,g=e.createItem,m=e.vertical,y=e.itemLength,w=e.space,j=e.onChange,O=(e.autoHideArrow,e.placeholder),x=e.minLength,R=void 0===x?y:x,S=e.autoScrollEnd,I=c(e,["className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","placeholder","minLength","autoScrollEnd"]),k=m?"clientHeight":"clientWidth",C=null!==(t=null==h?void 0:h.length)&&void 0!==t?t:0,E=null!==(v=null==O?void 0:O.length)&&void 0!==v?v:y,M=null==O?void 0:O.node,P=null==O?void 0:O.position,z=function(e,n,t){return Object(o.css)(r||(r=a(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .root {\n      flex-direction: ",";\n      width: 100%;\n      height: 100%;\n      min-width: ",";\n      display: flex;\n      justify-content: center;\n      flex-wrap: nowrap;\n      align-items: center;\n      .scroll-list-item {\n        &:not(:first-of-type) {\n          margin-top: ",";\n          margin-left: ",";\n        }\n      }\n    }\n"],["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .root {\n      flex-direction: ",";\n      width: 100%;\n      height: 100%;\n      min-width: ",";\n      display: flex;\n      justify-content: center;\n      flex-wrap: nowrap;\n      align-items: center;\n      .scroll-list-item {\n        &:not(:first-of-type) {\n          margin-top: ",";\n          margin-left: ",";\n        }\n      }\n    }\n"])),e?"column":"row",o.polished.rem(t),e?o.polished.rem(n):"unset",e?"unset":o.polished.rem(n))}(m,w,R),L=u(null),N=s(0),_=N[0],A=N[1],B=s(0),T=B[0],W=B[1],U=s(0),G=U[0],H=U[1],D=s(0),F=D[0],V=D[1],Y=s(!0),K=Y[0],X=Y[1],q=s(!1),J=q[0],Q=q[1],Z=s(!0),$=Z[0],ee=Z[1],ne=i.hooks.useRefValue(F),te=i.hooks.useRefValue(G),re=i.hooks.useRefValue(T);f(n,(function(){return{hideArrow:$,disablePrevious:K,disableNext:J,scroll:ce,ref:L}}));var oe=u((function(){}));d((function(){return oe.current=o.lodash.debounce(A,500),function(){var e;null===(e=oe.current)||void 0===e||e.cancel()}}),[]);var ie=i.hooks.useEventCallback((function(){var e,n=L.current[k]||0;n+=w,n-=M?E:0,n=Math.max(n,R),null===(e=oe.current)||void 0===e||e.call(oe,n)}));d((function(){var e=L.current,n=new o.ResizeObserver(ie);return n.observe(e),function(){n.disconnect()}}),[L,ie]),d((function(){var e=Math.floor(_/y);W(e)}),[_,y]),d((function(){var e=te.current,n=ne.current;n-e>T?n=te.current+T:n-e<T&&(n=(e=0)+T),H(e),V(n)}),[T,te,ne]);var ae=u([]),le=i.hooks.useEventCallback((function(){if(S&&h.length>0&&ae.current.length>0&&h[h.length-1]!==ae.current[ae.current.length-1]){var e,n=0;n=(e=C)-re.current,n=Math.max(0,n),H(n),V(e)}}));d((function(){le(),ae.current=h}),[h,le]);var ce=i.hooks.useEventCallback((function(e,n){void 0===n&&(n=!0);var t=n?1:T,r=0,o=0;e?o=(r=G-t)<0?(r=0)+T:F-t:r=(o=F+t)>C?(o=C)-T:G+t,H(r),V(o)}));return d((function(){var e=F-G>=C,n=F===C;X(0===G),Q(n),ee(e)}),[G,F,C]),Object(o.jsx)(i.NavButtonGroup,l({},I,{css:z,type:"tertiary",vertical:m,onChange:function(e){null==j||j(e),ce(e,!0)},disablePrevious:K,disableNext:J,previousStyle:{visibility:$?"hidden":"visible"},nextStyle:{visibility:$?"hidden":"visible"},className:Object(o.classNames)("scroll-list",p)}),Object(o.jsx)("div",{className:"root scroll-list-root",ref:L},"start"===P&&M,h.slice(G,F).map((function(e){return g(e,"scroll-list-item")})),"end"===P&&M))}))},78:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return o.a}));var r=t(0),o=t(47),i=t(1),a=t(50),l=function(e){var n,t,l=e.markerEnabled,c=e.onMarkerClick,u=e.widgetid,d=e.showLabel,s=e.labelGrowth,f=e.avatar,v=e.onClick,p=e.active,b=e.editDraggable,h=e.className,g=r.ReactRedux.useSelector((function(e){var n;return null===(n=e.appConfig.widgets)||void 0===n?void 0:n[u]}));return g?r.React.createElement(o.a,{className:"rw-controller__widget-avatar-card "+h,"data-widgetid":u,showLabel:d,labelGrowth:s,avatar:f,label:g.label,icon:g.icon,autoFlip:null===(t=null===(n=null==g?void 0:g.manifest)||void 0===n?void 0:n.properties)||void 0===t?void 0:t.flipIcon,marker:l?a:"",active:p,editDraggable:b,onMarkerClick:c,onClick:v}):r.React.createElement(i.Loading,null)};t(67),t(29)}}))}}}));