System.register([],(function(e){return{execute:function(){e(function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=985)}({3:function(e,n,t){"use strict";function a(e){return function(n,t){var a,r=t||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):i;a=e.formattingValues[d]||e.formattingValues[i]}else{var o=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(n):n]}}t.d(n,"a",(function(){return a}))},4:function(e,n,t){"use strict";function a(e){return function(n,t){var a=String(n),r=t||{},i=r.width,d=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=a.match(d);if(!o)return null;var u,h=o[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(l)?function(e,n){for(var t=0;t<e.length;t++)if(n(e[t]))return t}(l,(function(e){return e.test(h)})):function(e,n){for(var t in e)if(e.hasOwnProperty(t)&&n(e[t]))return t}(l,(function(e){return e.test(h)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(h.length)}}}t.d(n,"a",(function(){return a}))},5:function(e,n,t){"use strict";function a(e){return function(n){var t=n||{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}t.d(n,"a",(function(){return a}))},8:function(e,n,t){"use strict";function a(e){return function(n,t){var a=String(n),r=t||{},i=a.match(e.matchPattern);if(!i)return null;var d=i[0],o=a.match(e.parsePattern);if(!o)return null;var u=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(d.length)}}}t.d(n,"a",(function(){return a}))},985:function(e,n,t){"use strict";t.r(n);var a={lessThanXSeconds:{one:"llai na eiliad",other:"llai na {{count}} eiliad"},xSeconds:{one:"1 eiliad",other:"{{count}} eiliad"},halfAMinute:"hanner munud",lessThanXMinutes:{one:"llai na munud",two:"llai na 2 funud",other:"llai na {{count}} munud"},xMinutes:{one:"1 munud",two:"2 funud",other:"{{count}} munud"},aboutXHours:{one:"tua 1 awr",other:"tua {{count}} awr"},xHours:{one:"1 awr",other:"{{count}} awr"},xDays:{one:"1 diwrnod",two:"2 ddiwrnod",other:"{{count}} diwrnod"},aboutXWeeks:{one:"tua 1 wythnos",two:"tua pythefnos",other:"tua {{count}} wythnos"},xWeeks:{one:"1 wythnos",two:"pythefnos",other:"{{count}} wythnos"},aboutXMonths:{one:"tua 1 mis",two:"tua 2 fis",other:"tua {{count}} mis"},xMonths:{one:"1 mis",two:"2 fis",other:"{{count}} mis"},aboutXYears:{one:"tua 1 flwyddyn",two:"tua 2 flynedd",other:"tua {{count}} mlynedd"},xYears:{one:"1 flwyddyn",two:"2 flynedd",other:"{{count}} mlynedd"},overXYears:{one:"dros 1 flwyddyn",two:"dros 2 flynedd",other:"dros {{count}} mlynedd"},almostXYears:{one:"bron 1 flwyddyn",two:"bron 2 flynedd",other:"bron {{count}} mlynedd"}};var r=t(5),i={date:Object(r.a)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"eeee 'diwethaf am' p",yesterday:"'ddoe am' p",today:"'heddiw am' p",tomorrow:"'yfory am' p",nextWeek:"eeee 'am' p",other:"P"};var o=t(3);var u={ordinalNumber:function(e,n){var t=Number(e);if(t<20)switch(t){case 0:return t+"fed";case 1:return t+"af";case 2:return t+"ail";case 3:case 4:return t+"ydd";case 5:case 6:return t+"ed";case 7:case 8:case 9:case 10:case 12:case 15:case 18:return t+"fed";case 11:case 13:case 14:case 16:case 17:case 19:return t+"eg"}else if(t>=50&&t<=60||80===t||t>=100)return t+"fed";return t+"ain"},era:Object(o.a)({values:{narrow:["C","O"],abbreviated:["CC","OC"],wide:["Cyn Crist","Ar ôl Crist"]},defaultWidth:"wide"}),quarter:Object(o.a)({values:{narrow:["1","2","3","4"],abbreviated:["Ch1","Ch2","Ch3","Ch4"],wide:["Chwarter 1af","2ail chwarter","3ydd chwarter","4ydd chwarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(o.a)({values:{narrow:["I","Ch","Ma","E","Mi","Me","G","A","Md","H","T","Rh"],abbreviated:["Ion","Chwe","Maw","Ebr","Mai","Meh","Gor","Aws","Med","Hyd","Tach","Rhag"],wide:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},defaultWidth:"wide"}),day:Object(o.a)({values:{narrow:["S","Ll","M","M","I","G","S"],short:["Su","Ll","Ma","Me","Ia","Gw","Sa"],abbreviated:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],wide:["dydd Sul","dydd Llun","dydd Mawrth","dydd Mercher","dydd Iau","dydd Gwener","dydd Sadwrn"]},defaultWidth:"wide"}),dayPeriod:Object(o.a)({values:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"bore",afternoon:"prynhawn",evening:"gyda'r nos",night:"nos"}},defaultWidth:"wide",formattingValues:{narrow:{am:"b",pm:"h",midnight:"hn",noon:"hd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},abbreviated:{am:"yb",pm:"yh",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"},wide:{am:"y.b.",pm:"y.h.",midnight:"hanner nos",noon:"hanner dydd",morning:"yn y bore",afternoon:"yn y prynhawn",evening:"gyda'r nos",night:"yn y nos"}},defaultFormattingWidth:"wide"})},h=t(8),l=t(4),s={code:"cy",formatDistance:function(e,n,t){var r;return t=t||{},r="string"==typeof a[e]?a[e]:1===n?a[e].one:2===n&&a[e].two?a[e].two:a[e].other.replace("{{count}}",n),t.addSuffix?t.comparison>0?"mewn "+r:r+" yn ôl":r},formatLong:i,formatRelative:function(e,n,t,a){return d[e]},localize:u,match:{ordinalNumber:Object(h.a)({matchPattern:/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(l.a)({matchPatterns:{narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},defaultParseWidth:"any"}),quarter:Object(l.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(l.a)({matchPatterns:{narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},defaultParseWidth:"any"}),day:Object(l.a)({matchPatterns:{narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(l.a)({matchPatterns:{narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};n.default=s}}))}}}));