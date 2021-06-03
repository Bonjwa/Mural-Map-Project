System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-for-builder","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e){var n,t,i,a,o,r,l;return{setters:[function(e){n=e},function(e){t=e},function(e){i=e},function(e){a=e},function(e){o=e},function(e){r=e},function(e){l=e}],execute:function(){e(function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=474)}({0:function(e,t){e.exports=n},1:function(e,n){e.exports=t},14:function(e,n){e.exports=r},2:function(e,n){e.exports=i},27:function(e,n){e.exports=l},33:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"f",(function(){return r})),t.d(n,"e",(function(){return l})),t.d(n,"d",(function(){return c})),t.d(n,"g",(function(){return u}));var i=5,a="controller",o="_openwidget",r=150,l=50,c=21,u={sm:24,default:32,lg:48}},43:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u}));var i=t(0),a=t(5),o=i.React.useMemo,r=i.ReactRedux.useSelector,l=function(e){var n=(e.order&&e.order.asMutable()||[]).map((function(n){var t;return null===(t=e.content)||void 0===t?void 0:t[n]}));return(n=n.filter((function(e){return e&&!e.isPending}))).map((function(e){return null==e?void 0:e.id}))},c=function(e,n){var t=u(e,n);return o((function(){return function(e){return l(e).map((function(n){var t,i;return null===(i=null===(t=e.content)||void 0===t?void 0:t[n])||void 0===i?void 0:i.widgetId}))}(t)}),[t])},u=function(e,n){return r((function(t){var i,o,r,l=null===(o=null===(i=(t=t.appContext.isBuilder?t.appStateInBuilder:t).appConfig.widgets)||void 0===i?void 0:i[e])||void 0===o?void 0:o.layouts,c=a.searchUtils.findLayoutId(l[n],t.browserSizeMode,t.appConfig.mainSizeMode);return null===(r=t.appConfig.layouts)||void 0===r?void 0:r[c]}))}},44:function(e,n,t){"use strict";var i;t.d(n,"a",(function(){return i})),function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(i||(i={}))},474:function(e,n,t){"use strict";t.r(n);var i,a=t(0),o=t(8),r=t(2),l=t(5),c=t(44),u=t(1),s={_widgetLabel:"Widget Controller",behavior:"Behavior",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",textFormatOverride:"Text",iconBackgroundOverride:"Icon",openStart:"Open widgets when the page is loaded",widgetsSelected:"{widgetNumber} widgets selected"},d=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(i||(i={}));var p,v,f=function(e){var n=e.className,t=e.title,o=e.type,r=e.active,l=e.theme,c=e.onClick,u=function(e){var n=null==e?void 0:e.colors.white,t=null==e?void 0:e.colors.palette.primary[700],i=null==e?void 0:e.colors.palette.dark[900];return a.React.useMemo((function(){return Object(a.css)(p||(p=d(["\n    background-color: ",";\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: ",";\n    height: ",";\n    margin: 2px;\n    &.active{\n      outline: 2px "," solid;\n    }\n    .inner {\n      width: 66%;\n      height: 66%;\n      border: 1px "," solid;\n      border-radius: 2px;\n      &.circle {\n        border-radius: 50%;\n      }\n    }\n  "],["\n    background-color: ",";\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: ",";\n    height: ",";\n    margin: 2px;\n    &.active{\n      outline: 2px "," solid;\n    }\n    .inner {\n      width: 66%;\n      height: 66%;\n      border: 1px "," solid;\n      border-radius: 2px;\n      &.circle {\n        border-radius: 50%;\n      }\n    }\n  "])),n,a.polished.rem(28),a.polished.rem(28),t,i)}),[n,t,i])}(l);return Object(a.jsx)("div",{css:u,onClick:c,title:t,className:Object(a.classNames)("choose-shape",{active:r},n)},Object(a.jsx)("div",{className:Object(a.classNames)("inner",{rectangle:o===i.Rectangle},{circle:o===i.Circle})}))},b=t(14),g=t(43),m=t(33),j=t(27),h=function(e){var n=e.variant,t=e.appTheme,i=e.onSettingConfigChange,o=e.themeBoxDataItems,l=e.getI18nMessage;return Object(a.jsx)(r.SettingRow,{className:"sw-controller__advanced-setting",flow:"wrap"},Object(a.jsx)(u.Tabs,{pills:!0,className:"flex-grow-1 w-100 h-100",fill:!0},o.map((function(e,o){var c=null==n?void 0:n[e.themeKey],s=function(n){return Object(a.jsx)(j.ThemeColorPicker,{specificTheme:t,value:null==c?void 0:c[n],onChange:function(t){return i(["appearance","card","variant",e.themeKey,n],t)}})};return Object(a.jsx)(u.Tab,{key:o,id:e.themeKey,className:"tab-title-item",defaultActive:e.defaultActive||void 0,title:e.title},Object(a.jsx)(r.SettingRow,{className:"mt-2",label:l("textFormatOverride"),flow:"no-wrap"},Object(a.jsx)("div",{className:"font-setting-row"},Object(a.jsx)(b.FontStyle,{bold:null==c?void 0:c.bold,italic:null==c?void 0:c.italic,underline:null==c?void 0:c.underline,strike:null==c?void 0:c.strike,onChange:function(n,t){return i(["appearance","card","variant",e.themeKey,n],t)}}),s("color"))),Object(a.jsx)(r.SettingRow,{className:"mt-2",label:l("iconBackgroundOverride"),flow:"no-wrap"},s("bg")))}))))},y=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},w=a.ReactRedux.useSelector,x=Object(a.css)(v||(v=y(["\n    font-size: 13px;\n    font-weight: lighter;\n    .setting-row-item {\n      width: 100%;\n      display: flex;\n      margin-top: 0.5rem;\n      > span.jimu-radio {\n        flex-shrink: 0;\n        margin-top: 0.1rem;\n      }\n      > label {\n        margin-bottom: 0;\n      }\n    }\n    .font-setting-row {\n      display: flex;\n      align-items: center;\n    }\n    .jimu-multi-select {\n      width: 100%;\n      > .jimu-dropdown {\n        width: 100%;\n      }\n      > .jimu-menu-item {\n        width: 100%;\n        height: ",";\n      }\n    }\n  "],["\n    font-size: 13px;\n    font-weight: lighter;\n    .setting-row-item {\n      width: 100%;\n      display: flex;\n      margin-top: 0.5rem;\n      > span.jimu-radio {\n        flex-shrink: 0;\n        margin-top: 0.1rem;\n      }\n      > label {\n        margin-bottom: 0;\n      }\n    }\n    .font-setting-row {\n      display: flex;\n      align-items: center;\n    }\n    .jimu-multi-select {\n      width: 100%;\n      > .jimu-dropdown {\n        width: 100%;\n      }\n      > .jimu-menu-item {\n        width: 100%;\n        height: ",";\n      }\n    }\n  "])),a.polished.rem(26)),O=function(e,n){var t,i,a,o,r,l=(null===(i=null===(t=null==n?void 0:n.appearance)||void 0===t?void 0:t.card.avatar)||void 0===i?void 0:i.type)||"primary",c=null===(r=null===(o=null===(a=null==e?void 0:e.components)||void 0===a?void 0:a.button)||void 0===o?void 0:o.variants)||void 0===r?void 0:r[l];return c=(c=c.setIn(["default","color"],"#080808")).setIn(["active","color"],"#080808")},S=function(e){var n=e.getI18nMessage;return[{themeKey:"default",title:n("regular"),defaultActive:!0},{themeKey:"active",title:n("selected"),defaultActive:!1},{themeKey:"hover",title:n("hover"),defaultActive:!1}]};n.default=function(e){var n,t,d,p,v,j,y,I,C,k,N,R,T,M,B,L=e.id,P=e.config,A=e.theme,_=e.onSettingChange,z=null===(n=null==P?void 0:P.behavior)||void 0===n?void 0:n.onlyOpenOne,K=null===(t=null==P?void 0:P.behavior)||void 0===t?void 0:t.displayType,D=null===(d=null==P?void 0:P.behavior)||void 0===d?void 0:d.vertical,G=null===(p=null==P?void 0:P.behavior)||void 0===p?void 0:p.openStarts,W=null===(v=null==P?void 0:P.appearance)||void 0===v?void 0:v.space,E=null===(j=null==P?void 0:P.appearance)||void 0===j?void 0:j.advanced,F=null===(y=null==P?void 0:P.appearance.card)||void 0===y?void 0:y.showLabel,U=null!==(C=null===(I=null==P?void 0:P.appearance.card)||void 0===I?void 0:I.labelGrowth)&&void 0!==C?C:0,H=null===(N=null===(k=null==P?void 0:P.appearance.card)||void 0===k?void 0:k.avatar)||void 0===N?void 0:N.size,V=null===(T=null===(R=null==P?void 0:P.appearance.card)||void 0===R?void 0:R.avatar)||void 0===T?void 0:T.shape,X=null!==(M=null==G?void 0:G[0])&&void 0!==M?M:"none",Y=D?W:U,q=w((function(e){return e.appStateInBuilder.theme})),J=function(e,n){var t=Object(g.b)(e,n),i=w((function(e){return e.appStateInBuilder.appConfig.widgets}));return Object(a.Immutable)(t||[]).map((function(e){var n;return{label:null===(n=i[e])||void 0===n?void 0:n.label,value:e}}))}(L,m.a),Q=u.hooks.useTranslate(u.defaultMessages,l.defaultMessages,s),Z=E?null===(B=null==P?void 0:P.appearance)||void 0===B?void 0:B.card.variant:O(q,P),$=function(e,n){var t=null;t=Array.isArray(e)?P.setIn(e,n):P.set(e,n),_({id:L,config:t})},ee=function(e,n,t){if(e.currentTarget.checked){var i=null;"onlyOpenOne"===n?i=P.setIn(["behavior","openStarts"],Object(a.Immutable)([])).setIn(["behavior",n],t):"displayType"===n&&(t=t?c.a.Stack:c.a.SideBySide,i=P.setIn(["behavior",n],t)),_({id:L,config:i})}};return Object(a.jsx)("div",{className:"widget-setting-controller jimu-widget-setting",css:x},Object(a.jsx)(r.SettingSection,null,Object(a.jsx)(r.SettingRow,{flow:"no-wrap",label:Q("direction")},Object(a.jsx)(r.DirectionSelector,{vertical:D,onChange:function(e){var n=P.setIn(["behavior","vertical"],e).setIn(["appearance","card","labelGrowth"],0).setIn(["appearance","space"],0);_({id:L,config:n}),Object(o.getAppConfigAction)().exchangeWidthAndHeight().exec()}}))),Object(a.jsx)(r.SettingSection,{title:Q("behavior")},Object(a.jsx)(r.SettingRow,{flow:"wrap",label:Q("openWidget")},Object(a.jsx)("div",{className:"setting-row-item"},Object(a.jsx)(u.Radio,{id:"only-open-one",style:{cursor:"pointer"},name:"only-open-one",onChange:function(e){return ee(e,"onlyOpenOne",!0)},checked:z}),Object(a.jsx)(u.Label,{style:{cursor:"pointer"},for:"only-open-one",className:"ml-2"},Q("single"))),Object(a.jsx)("div",{className:"setting-row-item"},Object(a.jsx)(u.Radio,{id:"open-multiple",style:{cursor:"pointer"},name:"only-open-one",onChange:function(e){return ee(e,"onlyOpenOne",!1)},checked:!z}),Object(a.jsx)(u.Label,{style:{cursor:"pointer"},for:"open-multiple",className:"ml-2"},Q("multiple")))),Object(a.jsx)(r.SettingRow,{flow:"wrap",label:Q("openStart")},!z&&Object(a.jsx)(u.MultiSelect,{values:G,items:J,onClickItem:function(e,n,t){var i=z?t.length?[n]:[]:t;$(["behavior","openStarts"],i)},displayByValues:function(e){if(z&&e.length){var n=J.find((function(n){return n.value===e[0]}));return null==n?void 0:n.label}var t=(null==e?void 0:e.length)||0;return Q("widgetsSelected",{widgetNumber:t})}}),z&&Object(a.jsx)(u.Select,{value:X,onChange:function(e){var n=e.target.value,t=[];"none"!==n&&(t=[n]),$(["behavior","openStarts"],t)},className:"w-100"},Object(a.jsx)("option",{value:"none"},Q("none")),null==J?void 0:J.map((function(e){return Object(a.jsx)("option",{key:e.value,value:e.value},e.label)})))),!z&&Object(a.jsx)(r.SettingRow,{flow:"wrap",label:Q("displayType")},Object(a.jsx)("div",{className:"setting-row-item"},Object(a.jsx)(u.Radio,{id:"display-stack",style:{cursor:"pointer"},name:"display-type",onChange:function(e){return ee(e,"displayType",!0)},checked:K===c.a.Stack}),Object(a.jsx)(u.Label,{style:{cursor:"pointer"},for:"display-stack",className:"ml-2"},Q("stack"))),Object(a.jsx)("div",{className:"setting-row-item"},Object(a.jsx)(u.Radio,{id:"display-side-by-side",style:{cursor:"pointer"},name:"display-type",onChange:function(e){return ee(e,"displayType",!1)},checked:K===c.a.SideBySide}),Object(a.jsx)(u.Label,{style:{cursor:"pointer"},for:"display-side-by-side",className:"ml-2"},Q("sideBySide"))))),Object(a.jsx)(r.SettingSection,{title:Q("appearance",!0)},Object(a.jsx)(r.SettingRow,{flow:"wrap",label:Q("iconStyle")},Object(a.jsx)(f,{type:i.Circle,title:Q("circle",!0),className:"mr-2",active:"circle"===V,theme:A,onClick:function(){return $(["appearance","card","avatar","shape"],"circle")}}),Object(a.jsx)(f,{type:i.Rectangle,title:Q("rectangle"),active:"rectangle"===V,theme:A,onClick:function(){return $(["appearance","card","avatar","shape"],"rectangle")}})),Object(a.jsx)(r.SettingRow,{label:Q("showIconLabel")},Object(a.jsx)(u.Switch,{checked:F,onChange:function(e){return $(["appearance","card","showLabel"],e.target.checked)}})),Object(a.jsx)(r.SettingRow,{flow:"no-wrap",label:Q("iconSizeOverride")},Object(a.jsx)(u.Select,{value:H,onChange:function(e){return $(["appearance","card","avatar","size"],e.target.value)},className:"w-50"},Object(a.jsx)("option",{value:"sm"},Q("small")),Object(a.jsx)("option",{value:"default"},Q("medium")),Object(a.jsx)("option",{value:"lg"},Q("large")))),Object(a.jsx)(r.SettingRow,{flow:"no-wrap",label:Q("iconInterval")},Object(a.jsx)(b.InputUnit,{className:"w-50",min:0,max:999,value:{distance:Y,unit:u.UnitTypes.PIXEL},onChange:function(e){return function(e){e=+e,isNaN(e)&&(e=0);var n=P;n=n.behavior.vertical?n.setIn(["appearance","space"],e).setIn(["appearance","card","labelGrowth"],0):n.setIn(["appearance","card","labelGrowth"],e).setIn(["appearance","space"],0),_({id:L,config:n})}(e.distance)}}))),Object(a.jsx)(r.SettingSection,null,Object(a.jsx)(r.SettingRow,{flow:"no-wrap",label:Q("advance")},Object(a.jsx)(u.Switch,{checked:E,onChange:function(){var e,n=!(null===(e=null==P?void 0:P.appearance)||void 0===e?void 0:e.advanced),t=P.setIn(["appearance","advanced"],n);if(n){var i=O(q,P);t=t.setIn(["appearance","card","variant"],i)}else t=t.setIn(["appearance","card","variant"],void 0);_({id:L,config:t})}})),E&&Object(a.jsx)(h,{themeBoxDataItems:S({getI18nMessage:Q}),variant:Z,appTheme:q,onSettingConfigChange:$,getI18nMessage:Q})))}},5:function(e,n){e.exports=a},8:function(e,n){e.exports=o}}))}}}));