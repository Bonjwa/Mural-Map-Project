System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-for-builder","jimu-layouts/layout-builder"],(function(e){var t,n,r,o,i,a;return{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){o=e},function(e){i=e},function(e){a=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=456)}({0:function(e,n){e.exports=t},1:function(e,t){e.exports=n},2:function(e,t){e.exports=r},24:function(e,t){e.exports=a},29:function(e,t,n){"use strict";n.d(t,"h",(function(){return y})),n.d(t,"f",(function(){return w})),n.d(t,"i",(function(){return j})),n.d(t,"m",(function(){return O})),n.d(t,"l",(function(){return x})),n.d(t,"j",(function(){return R})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return C})),n.d(t,"d",(function(){return I})),n.d(t,"c",(function(){return k})),n.d(t,"a",(function(){return A})),n.d(t,"e",(function(){return P})),n.d(t,"k",(function(){return z}));var r,o=n(0),i=n(1),a=n(44),l=n(5),c=n(47),u=n(43),s=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d=o.React.useState,f=o.React.useEffect,p=o.React.useMemo,v=o.React.useRef,g=o.ReactRedux.useSelector,h=function(){return document.body.getBoundingClientRect()},b=function(e,t){return e.right>=t.right||e.left<=t.left},m=function(e,t){return e.bottom>=t.bottom||e.top<=t.top},y=function(e,t,n,r,o,l){var c=d((function(){return h()})),u=c[0],s=c[1],p=d([n]),g=p[0],y=p[1],w=v(0);f((function(){var e=function(){var e=h();s(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var j=i.hooks.useEventCallback((function(t){if(w.current++,w.current>7)return console.warn("Number of cycles: "+w.current+".You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking"),t;var r=function(e,t){return!(!e||!t)&&(b(e,t)||m(e,t))}(t,u);if(!r)return t;var i=t.width,l=t.height,c=t.left,s=t.top,d=t.right,f=t.bottom;if(r){var p=b({left:c,top:s,right:d,bottom:f,width:i,height:l},u),v=m({left:c,top:s,right:d,bottom:f,width:i,height:l},u);p&&(c=e===a.a.SideBySide?n.x:u.right-i),v||e!==a.a.SideBySide||(s+=o),d=c+i,f=s+l}return j({left:c,top:s,right:d,bottom:f,width:i,height:l})}));return f((function(){var i=[],l={width:0,height:0};t.forEach((function(t,c){var u=0!==c?i[c-1]:n,s=u.x,d=u.y;e===a.a.SideBySide?(s+=l.width,s+=0!==c?r:0):e===a.a.Stack&&(s+=0!==c?r:0,d+=0!==c?o:0);var f={left:s,top:d,right:s+t.width,bottom:d+t.height,width:t.width,height:t.height},p=j(f),v=p.left,g=p.top;w.current>7?(s=u.x,d=u.y):(s=v,d=g),w.current=0,i.push({x:s,y:d}),l=t})),y(i)}),[e,n,r,o,u.width,u.height,j,t]),g},w=function(e){return o.ReactRedux.useSelector((function(t){var n=t.appRuntimeInfo.selection,r=t.appConfig,i=!1;if(n&&r.layouts[n.layoutId]){var a=r.layouts[n.layoutId].content[n.layoutItemId],c=a&&a.widgetId,u=[];c&&(u=l.searchUtils.getChildrenContents(r,c,o.LayoutItemType.Widget,!1));var s=[c,e];u&&(s=s.concat(u)),i=s.includes(c)}return i}))},j=function(){var e=o.ReactRedux.useSelector((function(e){return e.appConfig.widgets}));return function(t){var n;return null===(n=null==e?void 0:e[t])||void 0===n?void 0:n.label}},O=function(e){return o.ReactRedux.useSelector((function(t){var n,r;return null===(r=null===(n=t.appConfig.widgets)||void 0===n?void 0:n[e])||void 0===r?void 0:r.label}))},x=function(e,t){return g((function(n){var r,o,i;return null===(i=null===(o=null===(r=n.appConfig.widgets)||void 0===r?void 0:r[e])||void 0===o?void 0:o.layouts)||void 0===i?void 0:i[t]}))},R=function(e,t){var n=o.ReactRedux.useSelector((function(e){return e.widgetsRuntimeInfo})),r=Object(u.b)(e,t),i=p((function(){return Object.keys(n).filter((function(e){var t,r=null===(t=n[e])||void 0===t?void 0:t.state;return!(r!==o.WidgetState.Opened&&r!==o.WidgetState.Active)}))}),[n]);return p((function(){return r.filter((function(e){return i.includes(e)}))}),[r,i])},S=function(e){var t=o.appActions.closeWidget(e);Object(o.getAppStore)().dispatch(t)},C=function(e,t){var n=R(e,t);return i.hooks.useEventCallback((function(){return e=n,t=o.appActions.closeWidgets(e),void Object(o.getAppStore)().dispatch(t);var e,t}))},I=function(e){var t=o.appActions.openWidgets(e);Object(o.getAppStore)().dispatch(t)},k=function(e){var t=o.appActions.openWidget(e);Object(o.getAppStore)().dispatch(t)},A=function(e){var t=o.appActions.activateWidget(e);Object(o.getAppStore)().dispatch(t)},P=function(e,t){var n=null==e?void 0:e.showLabel,r=null==e?void 0:e.labelGrowth,o=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return Object(c.b)(o,n,i)+t+r},z=function(){var e=g((function(e){return e.theme}));return Object(o.css)(r||(r=s(["\n    > .panel-header {\n      .action-close {\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n        &:disabled {\n          color: ",";\n        }\n      }\n    }\n  "],["\n    > .panel-header {\n      .action-close {\n        color: ",";\n        &:hover {\n          color: ",";\n        }\n        &:disabled {\n          color: ",";\n        }\n      }\n    }\n  "])),null==e?void 0:e.colors.palette.primary[200],null==e?void 0:e.colors.white,null==e?void 0:e.colors.palette.primary[400])}},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"g",(function(){return u}));var r=5,o="controller",i="_openwidget",a=150,l=50,c=21,u={sm:24,default:32,lg:48}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n(0),o=n(5),i=r.React.useMemo,a=r.ReactRedux.useSelector,l=function(e){var t=(e.order&&e.order.asMutable()||[]).map((function(t){var n;return null===(n=e.content)||void 0===n?void 0:n[t]}));return(t=t.filter((function(e){return e&&!e.isPending}))).map((function(e){return null==e?void 0:e.id}))},c=function(e,t){var n=u(e,t);return i((function(){return function(e){return l(e).map((function(t){var n,r;return null===(r=null===(n=e.content)||void 0===n?void 0:n[t])||void 0===r?void 0:r.widgetId}))}(n)}),[n])},u=function(e,t){return a((function(n){var r,i,a,l=null===(i=null===(r=(n=n.appContext.isBuilder?n.appStateInBuilder:n).appConfig.widgets)||void 0===r?void 0:r[e])||void 0===i?void 0:i.layouts,c=o.searchUtils.findLayoutId(l[t],n.browserSizeMode,n.appConfig.mainSizeMode);return null===(a=n.appConfig.layouts)||void 0===a?void 0:a[c]}))}},44:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(r||(r={}))},456:function(e,t,n){"use strict";n.r(t);var r,o,i,a=n(0),l=n(67),c=n(29),u=n(33),s=n(47),d=n(5),f=n(24),p=n(1),v=n(8),g=n(43),h=function(e){var t,n,r=null==e?void 0:e.itemType,o=null===(t=null==e?void 0:e.manifest)||void 0===t?void 0:t.widgetType,i=null===(n=null==e?void 0:e.manifest)||void 0===n?void 0:n.name;return r!==a.LayoutItemType.Section&&o!==a.WidgetType.Layout&&"controller"!==i&&!d.utils.isWidgetPlaceholder(d.utils.getAppConfig(),e)},b=function(e,t){var n=Object(c.l)(e,t),r=Object(g.c)(e,t),o=a.ReactRedux.useSelector((function(e){return e.browserSizeMode}));return function(e){console.log("SyncWidgets"),Object.keys(n).forEach((function(t){o!==t&&e.copyLayoutContent(r.id,n[t])}))}},m=function(e,t){var n=b(e,t);return function(e,t,r,o,i){return function(e,t,n,r,o,i){var a={layoutId:e.id},l=Object(v.getAppConfigAction)();Object(f.addItemToLayout)(l.appConfig,t,a,n,r,o||0).then((function(e){l=Object(v.getAppConfigAction)(e.updatedAppConfig),null==i||i(l),l.exec()}))}(e,t,r,o,i,n)}},y=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},O=a.React.useState,x=a.React.useRef,R=a.React.useEffect,S=a.React.forwardRef,C=Object(a.css)(r||(r=y(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    right: 0;\n    background: transparent;\n    z-index: -1;\n    > .drop-area {\n      width: 100%;\n      height: 100%;\n    }\n    > .overlay {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      top: 0;\n      right: 0;\n      background: transparent;\n      z-index: -1;\n      &.hide {\n        display: none;\n      }\n    }\n  "],["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    right: 0;\n    background: transparent;\n    z-index: -1;\n    > .drop-area {\n      width: 100%;\n      height: 100%;\n    }\n    > .overlay {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      top: 0;\n      right: 0;\n      background: transparent;\n      z-index: -1;\n      &.hide {\n        display: none;\n      }\n    }\n  "]))),I=S((function(e,t){var n=e.widgetId,r=e.layout,o=e.layouts,i=e.vertical,l=e.childClass,c=e.placeholder,s=e.className,v=j(e,["widgetId","layout","layouts","vertical","childClass","placeholder","className"]),g=c.color,h=c.size,b=h[0],y=h[1],S=x(null),I=x(null),k=x(null),A=x(null),P=x(null),z=O(!1),E=z[0],N=z[1],L=p.hooks.useForkRef(S,t);R((function(){I.current=new f.CanvasPane(P.current)}),[]);var W=m(n,u.a);return Object(a.jsx)("div",w({className:Object(a.classNames)("drop-zone",s),ref:L},v,{css:C}),Object(a.jsx)(f.DropArea,{style:C,className:"drop-area",layouts:o,highlightDragover:!0,onDragOver:function(e,t,n,r){var o=r,l=A.current,c=S.current.offsetHeight,u=S.current.offsetWidth;if(l&&l.length)if(i){var s=function(e,t,n){var r,o,i=t.top+t.height/2,a=!1;if(n.some((function(e,t){if(e.top+e.height/2>i){if(0===t)r=e.top/2;else{var l=n[t-1];r=(e.top+l.top+l.height)/2}a=!0,o=e.id}return a})),!a){var l=n[n.length-1];r=(l.top+l.height+e.height)/2}return{insertY:r,refId:o}}(n,o,l),d=s.insertY;v=s.refId;k.current=v,o={top:d-b/2+S.current.scrollTop,width:b,left:(u-b)/2+S.current.scrollLeft,height:y}}else{var f=function(e,t,n){var r,o,i=t.left+t.width/2,a=!1;if(n.some((function(e,t){if(e.left+e.width/2>i){if(0===t)r=e.left/2;else{var l=n[t-1];r=(e.left+l.left+l.width)/2}a=!0,o=e.id}return a})),!a){var l=n[n.length-1];r=(l.left+l.width+e.width)/2}return{insertX:r,refId:o}}(n,o,l),p=f.insertX,v=f.refId;k.current=v,o={left:p-y/2+S.current.scrollLeft,width:y,top:(c-b)/2+S.current.scrollTop,height:b}}else o=i?{top:n.height/2-y/2,width:b,left:y/2,height:y}:{left:n.width/2-y/2,width:y,top:(c-b)/2+S.current.scrollTop,height:b};I.current.clear(),I.current.setColor(a.polished.rgba(g,1)),I.current.drawRect(o)},onDrop:function(e,t,n){I.current.clear();var o=0;k.current?o=r.order&&r.order.indexOf(k.current)||0:r.order&&(o=r.order.length),W(r,e,t,n,o),k.current=null,A.current=[]},onToggleDragoverEffect:function(e){e&&(k.current=null,function(){A.current=[];var e=S.current.getBoundingClientRect(),t=S.current.parentNode.querySelectorAll("."+l);t&&t.length&&t.forEach((function(t){var n=t.getAttribute("data-layoutitemid");if(r.order&&r.order.includes(n)){var o=d.utils.relativeClientRect(t.getBoundingClientRect(),e);o.id=n,A.current.push(o)}})),i?A.current.sort((function(e,t){return e.top-t.top})):A.current.sort((function(e,t){return e.left-t.left}))}(),I.current.setSize(S.current.clientWidth,S.current.clientHeight)),N(e)}}),Object(a.jsx)("canvas",{className:Object(a.classNames)("overlay",{hide:!E}),ref:P}))})),k=n(78),A=Object(f.withRnd)(!1)(k.b),P=function(e){var t=e.className,n=e.draggable,r=e.layoutId,o=e.layoutItem,i=e.onClick,l=e.label,c=e.showLabel,u=e.labelGrowth,s=e.markerEnabled,d=e.avatar,f=e.active,p=e.removeWidget;return a.React.createElement(A,{className:Object(a.classNames)(t,"brw-controller__layout-item"),layoutId:r,layoutItem:o,widgetid:o.widgetId,layoutItemId:o.id,label:l,markerEnabled:s,showLabel:c,labelGrowth:u,avatar:d,active:f,editDraggable:n,useDragHandler:!0,onClick:i,onMarkerClick:function(){return p(o.widgetId)}})},z=n(2),E=n(94),N=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},L=function(){return(L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},W=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},M=n(72),T=a.React.useState,B=a.React.useRef,D=Object(a.css)(o||(o=N(["\n  width: 300px;\n  height: 300px;\n  overflow-y: auto;\n"],["\n  width: 300px;\n  height: 300px;\n  overflow-y: auto;\n"]))),_=function(e){var t=e.layout,n=e.item,r=e.insertSyncWidgetToLayout,o=W(e,["layout","item","insertSyncWidgetToLayout"]),i=T(!1),l=i[0],c=i[1],u=B(null),s=B(a.themeUtils.getBuilderThemeVariables()),d=function(){c((function(e){return!e}))},f=p.hooks.useTranslate(E.a);return Object(a.jsx)(a.React.Fragment,null,Object(a.jsx)(k.a,L({},n,o,{title:f("addWidget"),icon:p.utils.toIconResult(M,"add"),ref:u,onClick:function(e){e.stopPropagation(),d()}})),l&&Object(a.jsx)(z.WidgetListPopper,{css:D,builderTheme:s.current,referenceElement:u.current,isItemAccepted:h,onItemSelect:function(e){var n,o,i=null!==(o=null===(n=t.order)||void 0===n?void 0:n.length)&&void 0!==o?o:0;r(t,e,{},{},i)},onClose:d}))},H=function(){return(H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},G=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},F=a.React.useMemo,V=a.React.forwardRef,U=V((function(e,t){var n=e.widgetId,r=e.draggable,o=e.itemStyle,i=e.vertical,f=e.className,p=e.space,y=(e.dropZoneRef,e.onItemClick),w=e.onClick,j=e.scrollListRef,O=G(e,["widgetId","draggable","itemStyle","vertical","className","space","dropZoneRef","onItemClick","onClick","scrollListRef"]),x=Object(c.l)(n,u.a),R=Object(g.c)(n,u.a),S=Object(g.a)(R),C=a.themeUtils.getBuilderThemeVariables(),k=Object(c.j)(n,u.a),A=Object(c.e)(o,p),z={color:null==C?void 0:C.colors.palette.primary[700],size:[A,u.c]},E=function(e,t){var n=b(e,t);return function(e){var t=Object(v.getAppConfigAction)();t.removeWidget(e),n(t),t.exec()}}(n,u.a),N=m(n,u.a),L=function(e,t,n,r){return F((function(){var o,i,l=H(H({},t),{showLabel:!n&&(null==t?void 0:t.showLabel),avatar:null==t?void 0:t.avatar});return{position:"end",length:Object(s.b)(null===(o=null==t?void 0:t.avatar)||void 0===o?void 0:o.size,null==t?void 0:t.showLabel,null===(i=null==t?void 0:t.avatar)||void 0===i?void 0:i.shape),node:a.React.createElement(_,{className:"scroll-list-item",insertSyncWidgetToLayout:r,layout:e,item:l})}}),[t,e,n,r])}(R,o,0===S.length,N);return a.React.createElement(d.LayoutContext.Provider,{value:{isItemAccepted:h}},a.React.createElement("div",{ref:t,className:"layout controller-layout w-100 h-100","data-layoutid":R.id,onClick:w},a.React.createElement(I,{widgetId:n,vertical:i,layout:R,childClass:"layout-"+R.id+"-item",placeholder:z,layouts:x}),a.React.createElement(l.a,H({},O,{ref:j,className:Object(a.classNames)(f,"layout-item-list"),vertical:i,placeholder:L,itemLength:A,space:p,autoHideArrow:!0,lists:S,autoScrollEnd:!0,createItem:function(e,t){var n=R.content[e],i=n&&n.widgetId||"",l=k.indexOf(i)>-1;return a.React.createElement(P,H({},o,{key:e,className:Object(a.classNames)("layout-"+(null==R?void 0:R.id)+"-item layout-item",t),widgetid:i,layoutId:R.id,layoutItemId:e,draggable:r,markerEnabled:!0,layoutItem:n,active:l,removeWidget:E,onClick:y}))}}))))})),Y=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},X=a.React.useEffect,Z=a.React.useState,q=Object(a.css)(i||(i=Y(["\n  /* hide rnd-resize bar for the outermost layout item */\n  .controller-configuration-container > * > * > .builder-layout-item > .select-wrapper > .action-area {\n      > .rnd-resize-top,\n      > .rnd-resize-right,\n      > .rnd-resize-bottom,\n      > .rnd-resize-left {\n        display: none;\n      }\n    }\n\n    .controller-configuration-container .builder-layout-item > .select-wrapper > .lock-layout-tip {\n      display: none;\n    }\n\n  .selectable {\n    > div {\n      cursor: default;\n    }\n  }\n\n  .widget-container {\n    height: 100%;\n    overflow: auto;\n  }\n"],["\n  /* hide rnd-resize bar for the outermost layout item */\n  .controller-configuration-container > * > * > .builder-layout-item > .select-wrapper > .action-area {\n      > .rnd-resize-top,\n      > .rnd-resize-right,\n      > .rnd-resize-bottom,\n      > .rnd-resize-left {\n        display: none;\n      }\n    }\n\n    .controller-configuration-container .builder-layout-item > .select-wrapper > .lock-layout-tip {\n      display: none;\n    }\n\n  .selectable {\n    > div {\n      cursor: default;\n    }\n  }\n\n  .widget-container {\n    height: 100%;\n    overflow: auto;\n  }\n"]))),K={width:150,height:150},J={width:300,height:300},Q=function(){return!1},$=function(e){var t=e.reference,n=e.placement,r=e.widgetId,o=e.controllerId,i=e.onClose,l=e.onSizeChange,s=e.size,d=e.version,h=Object(c.l)(o,u.b),b=Object(g.c)(o,u.b),m=Object(c.f)(o),y=a.ReactRedux.useSelector((function(e){var t;return null===(t=e.widgetsState[o])||void 0===t?void 0:t.layoutAbility})),w=Object(c.m)(r),j=Z(!!r),O=j[0],x=j[1];p.hooks.useUpdateEffect((function(){x(!1),setTimeout((function(){x(!!r)}),100)}),[r]),X((function(){y&&(null==i||i())}),[y,i]),X((function(){m||null==i||i()}),[m,i]);var R=p.hooks.useRefValue(b);X((function(){r&&function(e,t){if(t){var n=Object(v.getAppConfigAction)().appConfig,r=function(e){return{type:"WIDGET",widgetId:e,bbox:{left:0,top:0,bottom:0,right:0},id:"0"}}(e);n=n.setIn(["layouts",t.id,"content",r.id],r).setIn(["layouts",t.id,"order"],[r.id]),Object(v.getAppConfigAction)(n).exec(),Object(a.getAppStore)().dispatch(a.appActions.selectionChanged(Object(a.Immutable)({layoutId:t.id,layoutItemId:"0"})))}}(r,R.current)}),[r,R]);return Object(a.jsx)(a.React.Fragment,null,O&&Object(a.jsx)(p.Popper,{floating:!0,open:!0,headerTitle:w,onHeaderClose:i,minSize:K,onResize:function(e){l(r,e)},dragBounds:"body",defaultSize:s||J,css:q,version:d,className:"flex-grow-1",reference:t,placement:n},Object(a.jsx)("div",{className:"widget-container controller-configuration-container d-flex p-1"},Object(a.jsx)(f.LayoutBuilder,{isItemAccepted:Q,layouts:h,itemDraggable:!1,itemResizable:!0,showDefaultTools:!1}))))},ee=a.ReactRedux.useSelector,te=a.React.useEffect,ne=a.React.useRef,re=a.React.useState;t.default={Builder:function(e){var t,n,r,o,i=e.id,l=e.config,s=e.version,d=null===(t=null==l?void 0:l.behavior)||void 0===t?void 0:t.vertical,f=null===(n=l.behavior)||void 0===n?void 0:n.size,p=d?"right-start":"bottom",g=ee((function(e){return e.widgetsState[i]})),h=null==g?void 0:g.layoutAbility,b=null==g?void 0:g.version,m=ne(null),y=ne({hideArrow:!0,disablePrevious:!0,disableNext:!1,scroll:function(){}}),w=y.current,j=w.hideArrow,O=w.disablePrevious,x=w.disableNext,R=w.scroll,S=re(null),C=S[0],I=S[1],k=Object(c.j)(i,u.a),A=Object(c.g)(i,u.a),P=null==k?void 0:k[0],z=null==f?void 0:f[P];te((function(){A()}),[s,A]);var E=Object(c.f)(i);te((function(){E||Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"layoutAbility",!1))}),[E,i]),te((function(){Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"hideArrow",j)),Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"disablePrevious",O)),Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"disableNext",x)),Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"onArrowClick",R))}),[j,O,x,R,b,i]);return a.React.createElement(a.React.Fragment,null,P&&a.React.createElement($,{reference:C,version:s,widgetId:P,controllerId:i,size:z,onClose:A,onSizeChange:function(e,t){if(e){var n=(null==l?void 0:l.behavior.size)||Object(a.Immutable)({});n=n.set(e,t),function(e){Object(v.getAppConfigAction)().editWidgetConfig(i,e).exec()}(l.setIn(["behavior","size"],n))}},placement:p}),a.React.createElement(U,{ref:m,scrollListRef:y,onClick:function(e){var t;if(h){var n=e.target,r=!(!n.classList||!n.classList.contains("scroll-list-root")),o=!(null===(t=m.current)||void 0===t?void 0:t.contains(n));(r||o)&&Object(a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(i,"layoutAbility",!1))}},vertical:null===(r=null==l?void 0:l.behavior)||void 0===r?void 0:r.vertical,widgetId:i,onItemClick:function(e){var t,n=e.currentTarget,r=null===(t=n.dataset)||void 0===t?void 0:t.widgetid;I(n),A(),Object(c.c)(r)},itemStyle:l.appearance.card,draggable:null==g?void 0:g.layoutAbility,space:null===(o=null==l?void 0:l.appearance)||void 0===o?void 0:o.space}))}}},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r,o=n(0),i=n(1),a=n(33),l=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},s=o.React.useState,d=function(e,t,n){var r=a.g[e];return t&&(r+=a.d),r+=2*f(e,n)},f=function(e,t){return"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6},p=o.React.forwardRef((function(e,t){var n,a=e.label,p=e.className,v=e.title,g=e.showLabel,h=e.labelGrowth,b=void 0===h?0:h,m=e.icon,y=e.marker,w=e.onMarkerClick,j=e.avatar,O=e.autoFlip,x=e.onClick,R=e.active,S=e.editDraggable,C=u(e,["label","className","title","showLabel","labelGrowth","icon","marker","onMarkerClick","avatar","autoFlip","onClick","active","editDraggable"]),I=j||{},k=I.shape,A=I.style,P=u(I,["shape","style"]),z=null==P?void 0:P.size,E=o.React.useMemo((function(){var e=d(z,g,k),t=e+b,n=f(z,k);return Object(o.css)(r||(r=l(["\n      display: flex;\n      align-items:center;\n      flex-direction: column;\n      justify-content: ",";\n      width: "," !important;\n      height: ",";\n      .tool-drag-handler {\n        cursor: auto;\n      }\n      .avatar {\n        padding: ","px;\n        position: relative;\n        text-align: center;\n        .marker {\n          position: absolute;\n          right: 0;\n          top: 0;\n          padding: 0;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          .icon-btn-sizer {\n            min-width: .625rem;\n            min-height: .625rem;\n          }\n        }\n      }\n      .avatar-label {\n        text-align: center;\n        width: 100%;\n        min-height: ",";\n      }\n    "],["\n      display: flex;\n      align-items:center;\n      flex-direction: column;\n      justify-content: ",";\n      width: "," !important;\n      height: ",";\n      .tool-drag-handler {\n        cursor: auto;\n      }\n      .avatar {\n        padding: ","px;\n        position: relative;\n        text-align: center;\n        .marker {\n          position: absolute;\n          right: 0;\n          top: 0;\n          padding: 0;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          .icon-btn-sizer {\n            min-width: .625rem;\n            min-height: .625rem;\n          }\n        }\n      }\n      .avatar-label {\n        text-align: center;\n        width: 100%;\n        min-height: ",";\n      }\n    "])),g?"space-around":"center",o.polished.rem(t),o.polished.rem(e),n,o.polished.rem(21))}),[z,g,k,b]),N=s(null),L=N[0],W=N[1];return Object(o.jsx)("div",c({},C,{ref:t,className:Object(o.classNames)("avatar-card",p+" rw-controller__avatar-card"),css:E,onClick:x}),Object(o.jsx)("div",{className:Object(o.classNames)({"no-drag-action":!S},"avatar tool-drag-handler"),onMouseEnter:function(){W(!0)},onMouseLeave:function(){W(!1)}},y&&L&&Object(o.jsx)(i.Button,{className:"marker",size:"sm",icon:!0,onClick:w},Object(o.jsx)(i.Icon,{size:10,icon:y})),Object(o.jsx)(i.Tooltip,{title:v||a,style:{pointerEvents:"none"}},Object(o.jsx)(i.Button,c({icon:!0,active:R,className:"avatar-button"},P,{style:c({borderRadius:"circle"===k?"50%":void 0},A)}),Object(o.jsx)(i.Icon,{color:"string"!=typeof m&&(null===(n=m.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof m?m.svg:m,autoFlip:O})))),g&&Object(o.jsx)("div",{className:Object(o.classNames)("avatar-label text-capitalize text-truncate",{active:R})},a))}))},5:function(e,t){e.exports=o},50:function(e,t){e.exports='<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r,o=n(0),i=n(1),a=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},u=o.React.useRef,s=o.React.useEffect,d=o.React.useState,f=o.React.useImperativeHandle,p=o.React.forwardRef,v=p((function(e,t){var n,p,v=e.className,g=e.lists,h=void 0===g?[]:g,b=e.createItem,m=e.vertical,y=e.itemLength,w=e.space,j=e.onChange,O=(e.autoHideArrow,e.placeholder),x=e.minLength,R=void 0===x?y:x,S=e.autoScrollEnd,C=c(e,["className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","placeholder","minLength","autoScrollEnd"]),I=m?"clientHeight":"clientWidth",k=null!==(n=null==h?void 0:h.length)&&void 0!==n?n:0,A=null!==(p=null==O?void 0:O.length)&&void 0!==p?p:y,P=null==O?void 0:O.node,z=null==O?void 0:O.position,E=function(e,t,n){return Object(o.css)(r||(r=a(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .root {\n      flex-direction: ",";\n      width: 100%;\n      height: 100%;\n      min-width: ",";\n      display: flex;\n      justify-content: center;\n      flex-wrap: nowrap;\n      align-items: center;\n      .scroll-list-item {\n        &:not(:first-of-type) {\n          margin-top: ",";\n          margin-left: ",";\n        }\n      }\n    }\n"],["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .root {\n      flex-direction: ",";\n      width: 100%;\n      height: 100%;\n      min-width: ",";\n      display: flex;\n      justify-content: center;\n      flex-wrap: nowrap;\n      align-items: center;\n      .scroll-list-item {\n        &:not(:first-of-type) {\n          margin-top: ",";\n          margin-left: ",";\n        }\n      }\n    }\n"])),e?"column":"row",o.polished.rem(n),e?o.polished.rem(t):"unset",e?"unset":o.polished.rem(t))}(m,w,R),N=u(null),L=d(0),W=L[0],M=L[1],T=d(0),B=T[0],D=T[1],_=d(0),H=_[0],G=_[1],F=d(0),V=F[0],U=F[1],Y=d(!0),X=Y[0],Z=Y[1],q=d(!1),K=q[0],J=q[1],Q=d(!0),$=Q[0],ee=Q[1],te=i.hooks.useRefValue(V),ne=i.hooks.useRefValue(H),re=i.hooks.useRefValue(B);f(t,(function(){return{hideArrow:$,disablePrevious:X,disableNext:K,scroll:ce,ref:N}}));var oe=u((function(){}));s((function(){return oe.current=o.lodash.debounce(M,500),function(){var e;null===(e=oe.current)||void 0===e||e.cancel()}}),[]);var ie=i.hooks.useEventCallback((function(){var e,t=N.current[I]||0;t+=w,t-=P?A:0,t=Math.max(t,R),null===(e=oe.current)||void 0===e||e.call(oe,t)}));s((function(){var e=N.current,t=new o.ResizeObserver(ie);return t.observe(e),function(){t.disconnect()}}),[N,ie]),s((function(){var e=Math.floor(W/y);D(e)}),[W,y]),s((function(){var e=ne.current,t=te.current;t-e>B?t=ne.current+B:t-e<B&&(t=(e=0)+B),G(e),U(t)}),[B,ne,te]);var ae=u([]),le=i.hooks.useEventCallback((function(){if(S&&h.length>0&&ae.current.length>0&&h[h.length-1]!==ae.current[ae.current.length-1]){var e,t=0;t=(e=k)-re.current,t=Math.max(0,t),G(t),U(e)}}));s((function(){le(),ae.current=h}),[h,le]);var ce=i.hooks.useEventCallback((function(e,t){void 0===t&&(t=!0);var n=t?1:B,r=0,o=0;e?o=(r=H-n)<0?(r=0)+B:V-n:r=(o=V+n)>k?(o=k)-B:H+n,G(r),U(o)}));return s((function(){var e=V-H>=k,t=V===k;Z(0===H),J(t),ee(e)}),[H,V,k]),Object(o.jsx)(i.NavButtonGroup,l({},C,{css:E,type:"tertiary",vertical:m,onChange:function(e){null==j||j(e),ce(e,!0)},disablePrevious:X,disableNext:K,previousStyle:{visibility:$?"hidden":"visible"},nextStyle:{visibility:$?"hidden":"visible"},className:Object(o.classNames)("scroll-list",v)}),Object(o.jsx)("div",{className:"root scroll-list-root",ref:N},"start"===z&&P,h.slice(H,V).map((function(e){return b(e,"scroll-list-item")})),"end"===z&&P))}))},72:function(e,t){e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.5H.75a.75.75 0 110-1.5h6.5V.75A.75.75 0 018 0z" fill="#000" fill-rule="evenodd"></path></svg>'},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o.a}));var r=n(0),o=n(47),i=n(1),a=n(50),l=function(e){var t,n,l=e.markerEnabled,c=e.onMarkerClick,u=e.widgetid,s=e.showLabel,d=e.labelGrowth,f=e.avatar,p=e.onClick,v=e.active,g=e.editDraggable,h=e.className,b=r.ReactRedux.useSelector((function(e){var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[u]}));return b?r.React.createElement(o.a,{className:"rw-controller__widget-avatar-card "+h,"data-widgetid":u,showLabel:s,labelGrowth:d,avatar:f,label:b.label,icon:b.icon,autoFlip:null===(n=null===(t=null==b?void 0:b.manifest)||void 0===t?void 0:t.properties)||void 0===n?void 0:n.flipIcon,marker:l?a:"",active:v,editDraggable:g,onMarkerClick:c,onClick:p}):r.React.createElement(i.Loading,null)};n(67),n(29)},8:function(e,t){e.exports=i},94:function(e,t,n){"use strict";t.a={_widgetLabel:"Widget Controller",placeholder:"Drag widget here",addWidget:"Add widget",moveOrRemoveWidget:"Move widget"}}}))}}}));