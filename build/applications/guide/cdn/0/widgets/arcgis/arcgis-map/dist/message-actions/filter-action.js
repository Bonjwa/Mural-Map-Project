System.register(["jimu-core"],(function(e){var t;return{setters:[function(e){t=e}],execute:function(){e(function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=179)}({0:function(e,r){e.exports=t},179:function(e,t,r){"use strict";r.r(t);var a,n=r(0),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.filterMessageType=function(e,t){return e===n.MessageType.DataRecordsSelectionChange},t.prototype.filterMessage=function(e){return!0},t.prototype.getSettingComponentUri=function(e,t){return"message-actions/filter-action-setting"},t.prototype.onRemoveListen=function(e,t){this.lastMessage&&this.lastMessage.type===e&&this.lastMessage.widgetId===t&&(this.lastFilterActionValue&&this.lastFilterActionValue.querySQL&&(this.lastFilterActionValue.querySQL=""),n.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"filterActionValue",this.lastFilterActionValue),this.lastMessage=null,this.lastFilterActionValue=null)},t.prototype.onExecute=function(e,t){switch(this.lastMessage=e,e.type){case n.MessageType.DataRecordsSelectionChange:var r=null;if(t)if(t.messageUseDataSource&&t.actionUseDataSource){if(e.records.length>0&&e.records[0].dataSource.getMainDataSource().id!==t.messageUseDataSource.mainDataSourceId){n.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"filterActionValue",null);break}var a=n.DataSourceManager.getInstance().getDataSource(t.messageUseDataSource.mainDataSourceId),o=n.DataSourceManager.getInstance().getDataSource(t.actionUseDataSource.mainDataSourceId);if(a&&o)if(t.enabledDataRelationShip){var i=null,s=null;if(t.messageUseDataSource.mainDataSourceId===t.actionUseDataSource.mainDataSourceId&&t.messageUseDataSource.rootDataSourceId===t.actionUseDataSource.rootDataSourceId){var u=a.getSchema(),l=u&&u.fields&&Object.keys(u.fields).find((function(e){return"esriFieldTypeOID"===u.fields[e].esriType}));s=i=u&&u.fields&&u.fields[l]}else{var c=t.messageUseDataSource.fields[0],f=t.actionUseDataSource.fields[0];i=a.getSchema().fields[c],s=o.getSchema().fields[f]}var d="";if(i&&s){for(var p=i.name,g=i.type,S=e,y=[],h=0;h<S.records.length;h++){var D=S.records[h].getData()[p];y.includes(""+this.formatValue(D,g))||y.push(""+this.formatValue(S.records[h].getData()[p],g))}d=s.name+" IN ",d=y.length>0?d+"("+y.join(", ")+")":""}if(e.records.length>0)(m=t.sqlExprObj?n.dataSourceUtils.getArcGISSQL(t.sqlExprObj,o).sql:null)&&(d=d?d+" AND "+m:m);else d="";r={layerDataSourceId:o&&o.id,querySQL:d}}else{var m;d="";if(e.records.length>0)(m=t.sqlExprObj?n.dataSourceUtils.getArcGISSQL(t.sqlExprObj,o).sql:null)&&(d=m);else d="";r={layerDataSourceId:o&&o.id,querySQL:d}}else r=null}else r=null;this.lastFilterActionValue=r,n.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"filterActionValue",r)}return!0},t.prototype.getLayerIdFromLayerDs=function(e){return e.layerId?e.layerId:e.layer?e.layer.id:null},t.prototype.formatValue=function(e,t){return"STRING"===t?"'"+e+"'":"NUMBER"===t?""+e:"DATE"===t?"'"+e+"'":void 0},t}(n.AbstractMessageAction);t.default=i}}))}}}));