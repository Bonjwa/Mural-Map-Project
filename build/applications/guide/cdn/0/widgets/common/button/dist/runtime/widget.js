System.register(["jimu-core","jimu-ui"],(function(e){var t,o;return{setters:[function(e){t=e},function(e){o=e}],execute:function(){e(function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=485)}({0:function(e,o){e.exports=t},1:function(e,t){e.exports=o},485:function(e,t,o){"use strict";o.r(t);var n,i=o(0),s=o(1),r=o(71),p=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};var u,l,c=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.versions=[{version:"1.0.0",description:"The first release.",upgrader:function(e){var t=e;return t.getIn(["styleConfig","name"])&&(t=t.set("styleConfig",t.styleConfig.without("name"))),t.getIn(["styleConfig","customStyle"])&&(t=t.set("styleConfig",t.styleConfig.without("customStyle"))),t.getIn(["styleConfig","themeStyle","quickStyleType"])&&(t=t.setIn(["styleConfig","themeStyle"],{quickStyleType:t.styleConfig.themeStyle.quickStyleType})),t=t.setIn(["styleConfig","useCustom"],!1)}},{version:"1.1.0",description:"1.1.0",upgrader:function(e){var t=e;return t.getIn(["styleConfig","useCustom"])&&t.getIn(["styleConfig","customStyle","regular","border","width"])&&(t=t.setIn(["styleConfig","customStyle","regular","border","width"],s.utils.stringOfLinearUnit(t.getIn(["styleConfig","customStyle","regular","border","width"])))),t.getIn(["styleConfig","useCustom"])&&t.getIn(["styleConfig","customStyle","hover","border","width"])&&(t=t.setIn(["styleConfig","customStyle","hover","border","width"],s.utils.stringOfLinearUnit(t.getIn(["styleConfig","customStyle","hover","border","width"])))),t}}],t}return c(t,e),t}(i.BaseVersionManager)),f=o(79),g=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(){return(y=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(l||(l={}));var h,v=function(e){function t(t){var o=e.call(this,t)||this;return o.repeat=0,o.getTextFromProps=function(){var e,t,n,i;return"string"==typeof(null===(t=null===(e=o.props.config)||void 0===e?void 0:e.functionConfig)||void 0===t?void 0:t.text)?null===(i=null===(n=o.props.config)||void 0===n?void 0:n.functionConfig)||void 0===i?void 0:i.text:o.props.intl.formatMessage({id:"variableButton",defaultMessage:s.defaultMessages.variableButton})},o.setRepeatType=function(){var e,t=o.props.repeatedDataSource;e=t?0===t.recordIndex?l.Main:l.Sub:l.None,o.repeat=e},o.getTipExpression=function(){var e,t;return o.props.config&&o.props.config.functionConfig&&o.props.config.functionConfig.toolTipExpression&&o.props.config.functionConfig.toolTipExpression||Object(i.Immutable)({name:"",parts:[{type:i.ExpressionPartType.String,exp:'"'+((null===(t=null===(e=o.props.config)||void 0===e?void 0:e.functionConfig)||void 0===t?void 0:t.toolTip)||"")+'"'}]})},o.getTextExpression=function(){var e,t;return o.props.config&&o.props.config.functionConfig&&o.props.config.functionConfig.textExpression&&o.props.config.functionConfig.textExpression||Object(i.Immutable)({name:"",parts:[{type:i.ExpressionPartType.String,exp:'"'+((null===(t=null===(e=o.props.config)||void 0===e?void 0:e.functionConfig)||void 0===t?void 0:t.text)||o.getTextFromProps())+'"'}]})},o.getUrlExpression=function(){return o.props.config&&o.props.config.functionConfig&&o.props.config.functionConfig.linkParam&&o.props.config.functionConfig.linkParam&&o.props.config.functionConfig.linkParam.expression||null},o.onTextExpResolveChange=function(e){if(e.isSuccessful)o.setState({text:e.value});else{var t="";e.value===i.ExpressionResolverErrorCode.Failed&&(t=o.state.textExpression&&o.state.textExpression.name),o.setState({text:t})}},o.onTipExpResolveChange=function(e){if(e.isSuccessful)o.setState({toolTip:e.value});else{var t="";e.value===i.ExpressionResolverErrorCode.Failed&&(t=o.state.tipExpression&&o.state.tipExpression.name),o.setState({toolTip:t})}},o.onUrlExpResolveChange=function(e){if(e.isSuccessful)o.setState({url:e.value});else{var t="";e.value===i.ExpressionResolverErrorCode.Failed&&(t=o.state.urlExpression&&o.state.urlExpression.name),o.setState({url:t})}},o.showQuickStylePanel=function(){if(!window.jimuConfig.isInBuilder)return!1;var e=o.repeat,t=o.props.active;return o.props.showQuickStyle&&t&&e!==l.Sub},o.getWhetherUseQuickStyle=function(e){return!!(e&&e.styleConfig&&e.styleConfig.themeStyle&&e.styleConfig.themeStyle.quickStyleType)},o.getIconStyle=function(e,t){var o=e||{},n=t||{};return Object(i.css)(h||(h=d(["\n      & img, & svg{\n        color: ",";\n        fill: ",";\n        width: ","",";\n        height: ","",";\n      }\n      &:hover{\n        img, svg{\n          color: ",";\n          fill: ",";\n          width: ","",";\n          height: ","",";\n        }\n      }\n    "],["\n      & img, & svg{\n        color: ",";\n        fill: ",";\n        width: ","",";\n        height: ","",";\n      }\n      &:hover{\n        img, svg{\n          color: ",";\n          fill: ",";\n          width: ","",";\n          height: ","",";\n        }\n      }\n    "])),o.color,o.color,o.size,s.UnitTypes.PIXEL,o.size,s.UnitTypes.PIXEL,n.color,n.color,n.size,s.UnitTypes.PIXEL,n.size,s.UnitTypes.PIXEL)},o.removeUndefinedStyle=function(e){if(!e)return e;var t={};return Object.keys(e).forEach((function(o){("string"==typeof e[o]&&e[o].indexOf("undefined")<0||"number"==typeof e[o])&&(t[o]=e[o])})),t},o.getLinkComponent=function(){var e,t,n=o.props.config,p=n.functionConfig.linkParam,u=o.state.text,l=o.state.toolTip;if(n.styleConfig&&n.styleConfig.customStyle){var c=n.styleConfig.customStyle.regular,a=n.styleConfig.customStyle.hover;if(n.styleConfig.useCustom){var f=s.styleUtils.toCSSStyle(c&&c.without("iconProps").asMutable({deep:!0})),g=s.styleUtils.toCSSStyle(a&&a.without("iconProps").asMutable({deep:!0}));if(o.props.active&&o.props.appMode!==i.AppMode.Run){var d=Object(i.getAppStore)().getState().widgetsState[o.props.id]||Object(i.Immutable)({});e={style:d.isConfiguringHover?y(y({},o.removeUndefinedStyle(f)),o.removeUndefinedStyle(g)):f,hoverStyle:g},t=o.getIconStyle(d.isConfiguringHover?y(y({},null==c?void 0:c.iconProps),null==a?void 0:a.iconProps):null==c?void 0:c.iconProps,null==a?void 0:a.iconProps)}else e={style:f,hoverStyle:g},t=o.getIconStyle(c&&c.iconProps,a&&a.iconProps)}}var h,v,m,S=o.getWhetherUseQuickStyle(n)?{type:n.styleConfig.themeStyle.quickStyleType}:null;p&&p.linkType&&(v=p.openType,m={linkType:p.linkType},p.linkType===i.LinkType.WebAddress?m.value=o.state.url:(m.value=p.value,h=o.props.queryObject));var C=n.functionConfig.icon;return Object(i.jsx)(s.Link,{to:m,target:v,queryObject:h,title:l,className:"widget-button-link text-truncate w-100 h-100 p-0 d-flex align-items-center justify-content-center",customStyle:e,themeStyle:S,css:t},Object(i.jsx)("span",{className:"text-truncate widget-button-text"},C&&(!C.position||C.position===r.a.Left)&&Object(i.jsx)(s.Icon,{icon:C.data,className:Object(i.classNames)({"mr-2 ml-0":!!u,"mx-0":!u})}),u,C&&C.position&&C.position===r.a.Right&&Object(i.jsx)(s.Icon,{icon:C.data,className:Object(i.classNames)({"ml-2 mr-0":!!u,"mx-0":!u})})))},o.onQuickStyleChange=function(e){var t=o.props.config,n=o.props.id,i=o.props.builderSupportModules,s=i&&i.jimuForBuilderLib.getAppConfigAction;s&&(t=(t=(t=(t=t.setIn(["styleConfig","useCustom"],!1)).setIn(["styleConfig","themeStyle","quickStyleType"],e)).setIn(["styleConfig","customStyle","regular"],{iconProps:Object(f.a)(!0,e,o.props.theme)})).setIn(["styleConfig","customStyle","hover"],{iconProps:Object(f.a)(!1,e,o.props.theme)}),s().editWidgetProperty(n,"config",t).exec())},o.onClick=function(e){e.exbEventType="linkClick"},o.onQuickStyleClose=function(){return o.props.dispatch(i.appActions.widgetStatePropChange(o.props.id,"showQuickStyle",!1))},o.getQuickStyleComponent=function(){var e,t,n,s,r,p=o.props.builderSupportModules&&o.props.builderSupportModules.widgetModules&&o.props.builderSupportModules.widgetModules.QuickStyle;return p?Object(i.jsx)(p,{onChange:o.onQuickStyleChange,reference:o.domNode&&o.domNode.current,onClose:o.onQuickStyleClose,selectedType:!(null===(t=null===(e=o.props.config)||void 0===e?void 0:e.styleConfig)||void 0===t?void 0:t.useCustom)&&(null===(r=null===(s=null===(n=o.props.config)||void 0===n?void 0:n.styleConfig)||void 0===s?void 0:s.themeStyle)||void 0===r?void 0:r.quickStyleType)}):null},o.state={text:o.getTextFromProps(),toolTip:o.props.config&&o.props.config.functionConfig&&o.props.config.functionConfig.toolTip||"",url:o.props.config&&o.props.config.functionConfig&&o.props.config.functionConfig.linkParam&&o.props.config.functionConfig.linkParam.value||"",textExpression:o.props.useDataSourcesEnabled&&o.getTextExpression(),tipExpression:o.props.useDataSourcesEnabled&&o.getTipExpression(),urlExpression:o.props.useDataSourcesEnabled&&o.getUrlExpression()},o.domNode=i.React.createRef(),o}return g(t,e),t.prototype.componentDidMount=function(){this.setRepeatType(),window.jimuConfig.isInBuilder&&this.props.active&&this.props.dispatch(i.appActions.widgetStatePropChange(this.props.id,"showQuickStyle",!0))},t.prototype.componentDidUpdate=function(e,t){this.props.useDataSourcesEnabled||this.props.config===e.config&&!e.useDataSourcesEnabled||this.setState({text:this.getTextFromProps(),toolTip:this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.toolTip,url:this.props.config&&this.props.config.functionConfig&&this.props.config.functionConfig.linkParam&&this.props.config.functionConfig.linkParam.value}),!this.props.useDataSourcesEnabled||this.props.config===e.config&&e.useDataSourcesEnabled||this.setState({textExpression:this.getTextExpression(),tipExpression:this.getTipExpression(),urlExpression:this.getUrlExpression()}),window.jimuConfig.isInBuilder&&(this.props.appMode!==e.appMode&&this.props.appMode===i.AppMode.Run||!this.props.active&&e.active)&&this.props.dispatch(i.appActions.widgetStatePropChange(this.props.id,"showQuickStyle",!1))},t.prototype.render=function(){var e=this.props.useDataSourcesEnabled,t=this.showQuickStylePanel(),o=this.getLinkComponent(),s=this.getQuickStyleComponent();return Object(i.jsx)("div",{className:"jimu-widget widget-button w-100 h-100",css:(this.props.theme,Object(i.css)(n||(n=p(["\n    &>a {\n      display: flex !important;\n      justify-content: center;\n    }\n\n    .widget-button-text{\n      line-height: initial;\n    }\n\n  "],["\n    &>a {\n      display: flex !important;\n      justify-content: center;\n    }\n\n    .widget-button-text{\n      line-height: initial;\n    }\n\n  "])))),ref:this.domNode,onClick:this.onClick,onTouchEnd:this.onClick},o,t&&s,Object(i.jsx)("div",{style:{display:"none"}},e&&Object(i.jsx)("div",null,Object(i.jsx)(i.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.state.textExpression,onChange:this.onTextExpResolveChange,widgetId:this.props.id}),Object(i.jsx)(i.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.state.tipExpression,onChange:this.onTipExpResolveChange,widgetId:this.props.id}),Object(i.jsx)(i.ExpressionResolverComponent,{useDataSources:this.props.useDataSources,expression:this.state.urlExpression,onChange:this.onUrlExpResolveChange,widgetId:this.props.id}))))},t.mapExtraStateProps=function(e,t){var o=!1,n=e.appRuntimeInfo.selection;if(n&&e.appConfig.layouts[n.layoutId]){var s=e.appConfig.layouts[n.layoutId].content[n.layoutItemId];o=s&&s.widgetId===t.id}var r=e.appContext.isInBuilder&&o;return{active:r,showQuickStyle:!!(e.widgetsState[t.id]||Object(i.Immutable)({})).showQuickStyle,appMode:r?e.appRuntimeInfo.appMode:null,queryObject:e.queryObject}},t.versionManager=a,t}(i.React.PureComponent);t.default=v},71:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e.Left="LEFT",e.Right="RIGHT"}(n||(n={}))},79:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o(0),i=o(1);function s(e,t,o){var s=e?"default":"hover",r=Object(n.Immutable)(o),p=r.getIn(["components","button","variants",t,s,"color"]),u=r.getIn(["components","button","sizes","default","fontSize"]);return{color:p,size:parseFloat(i.styleUtils.remToPixel(u))}}}}))}}}));