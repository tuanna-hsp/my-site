(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{386:function(e,t,r){"use strict";r(47),r(45),r(65),r(93),r(233),r(91),r(44),r(11),r(21),r(48),r(34),r(38),r(55),r(58);var n=r(4),o=(r(229),r(0)),c=r(94),l=r(3);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=["sm","md","lg","xl"],m=y.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=y.reduce((function(e,t){return e["offset"+Object(l.v)(t)]={type:[String,Number],default:null},e}),{}),v=y.reduce((function(e,t){return e["order"+Object(l.v)(t)]={type:[String,Number],default:null},e}),{}),O={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(v)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var e,t;for(t in d=[],O)O[t].forEach((function(e){var n=r[e],o=j(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},438:function(e,t,r){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";var n=r(4),o=r(5),a=r(2);e.exports={formats:a,parse:o,stringify:n}},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),c=0;c<i.length;++c){var l=i[c],s=a[l];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:a,prop:l}),r.push(s))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),i)}}},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));var n=r(0);const o={className:"commentbox",defaultBoxId:"commentbox",tlcParam:"tlc",backgroundColor:null,textColor:null,subtextColor:null,singleSignOn:null,createBoxUrl:(e,t)=>(t.search="",t.hash=e,t.href),onCommentCount(e){},testMode:!1},a={buttonText:"Single Sign-On",buttonIcon:"",buttonColor:"",autoSignOn:!1,onSignOn(e,t){},onSignOut(){}};function i(e,t=o){if(!e)throw new Error("Please supply a valid projectId.");const{className:r,defaultBoxId:i,tlcParam:c,backgroundColor:l,textColor:s,subtextColor:u,createBoxUrl:f,onCommentCount:d,testMode:p}=Object.keys(o).reduce((e,r)=>(e[r]=t&&t[r]?t[r]:o[r],e),{});let y=t.singleSignOn||null;y&&(y=Object.keys(a).reduce((e,t)=>(e[t]=y[t]||a[t],e),{}));const b=document.createElement("a");b.href=window.location.href;const m=document.getElementsByClassName(r),g=m.length,h={},v=p?"localhost:8000":"app.commentbox.io",O=p?"http:":"https:",j=`${O}//${v}`;for(let t=0;t<g;t++){const r=m[t];if(r.getAttribute("data-loaded"))continue;const o=r.id||i,a=Object(n.parse)(b.search.replace("?",""))[c],d=document.createElement("a");if(h[o])throw new Error("Each box must have a unique ID");h[o]=!0,r.id=o,d.href=f(o,b);const p=Object(n.parse)(d.search.replace("?","")),g=Object.keys(p).reduce((e,t)=>(t.toLowerCase()!==c.toLowerCase()&&(e[t]=p[t]),e),{});d.search=Object.keys(g).length>0?"?"+Object(n.stringify)(g):"";const v=document.createElement("iframe"),O=document.createElement("a"),w={id:o,url:d.href,tlc_param:c,tlc:a,background_color:l,text_color:s,subtext_color:u},x=()=>{O.href=j,O.pathname=e,O.search=Object(n.stringify)(w),v.setAttribute("src",O.href),v.setAttribute("frameborder","0"),v.setAttribute("scrolling","no"),v.setAttribute("style","width: 100%"),r.appendChild(v),r.setAttribute("data-loaded","true")};if(y)if(Object.assign(w,{sso:"1",sso_text:y.buttonText,sso_icon:y.buttonIcon,sso_color:y.buttonColor}),y.autoSignOn){let e=!1;y.onSignOn(t=>{if(e)throw new Error("Callback already called.");e=!0,t&&(w.sso_user_payload=t),x()},t=>{if(e)throw new Error("Callback already called.");e=!0,x()})}else x();else x()}const w=function(e){const t=document.createElement("a");if(t.href=e.origin,e.data&&t.hostname===v||t.protocol===O)try{const t=JSON.parse(e.data),{event:r,id:n,payload:o}=t,a=document.getElementById(n).firstChild;if(!h[n])return;switch(r){case"count":a.setAttribute("data-comments-loaded","true"),d(o);break;case"resize":a.height=o+"px";break;case"tlc":a.setAttribute("data-tlc",o);break;case"sso-user-payload":if(y){let t=!1;y.onSignOn(r=>{if(t)throw new Error("Callback already called.");t=!0;const n=JSON.stringify(r?{event:"sso-user-payload",payload:r}:{event:"sso-user-payload-error",payload:"Could not sign in."});e.source.postMessage(n,e.origin)},r=>{if(t)throw new Error("Callback already called.");t=!0;const n=JSON.stringify({event:"sso-user-payload-error",payload:r.message});e.source.postMessage(n,e.origin)})}break;case"sso-logout":y&&y.onSignOut()}if(a.getAttribute("data-comments-loaded")&&a.getAttribute("data-tlc")&&!a.getAttribute("data-tlc-scrolled")){const e=a.getBoundingClientRect();window.scrollTo(0,window.scrollY+e.top+parseInt(a.getAttribute("data-tlc"))),a.setAttribute("data-tlc-scrolled","true")}}catch(e){}};return window.addEventListener("message",w),function(){window.removeEventListener("message",w)}}},function(e,t,r){"use strict";var n=r(1),o=r(2),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,o,a,i,l,s,u,f,d,p,y){var b=t;if("function"==typeof s)b=s(r,b);else if(b instanceof Date)b=d(b);else if(null===b){if(a)return l&&!y?l(r,c.encoder):r;b=""}if("string"==typeof b||"number"==typeof b||"boolean"==typeof b||n.isBuffer(b))return l?[p(y?r:l(r,c.encoder))+"="+p(l(b,c.encoder))]:[p(r)+"="+p(String(b))];var m,g=[];if(void 0===b)return g;if(Array.isArray(s))m=s;else{var h=Object.keys(b);m=u?h.sort(u):h}for(var v=0;v<m.length;++v){var O=m[v];i&&null===b[O]||(g=Array.isArray(b)?g.concat(e(b[O],o(r,O),o,a,i,l,s,u,f,d,p,y)):g.concat(e(b[O],r+(f?"."+O:"["+O+"]"),o,a,i,l,s,u,f,d,p,y)))}return g};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?c.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:c.skipNulls,d="boolean"==typeof i.encode?i.encode:c.encode,p="function"==typeof i.encoder?i.encoder:c.encoder,y="function"==typeof i.sort?i.sort:null,b=void 0!==i.allowDots&&i.allowDots,m="function"==typeof i.serializeDate?i.serializeDate:c.serializeDate,g="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var h,v,O=o.formatters[i.format];"function"==typeof i.filter?r=(v=i.filter)("",r):Array.isArray(i.filter)&&(h=v=i.filter);var j,w=[];if("object"!=typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var x=a[j];h||(h=Object.keys(r)),y&&h.sort(y);for(var C=0;C<h.length;++C){var S=h[C];f&&null===r[S]||(w=w.concat(l(r[S],S,x,u,f,d?p:null,v,y,b,m,O,g)))}var A=w.join(s),k=!0===i.addQueryPrefix?"?":"";return A.length>0?k+A:""}},function(e,t,r){"use strict";var n=r(1),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=i?n.slice(0,i.index):n,l=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var s=0;null!==(i=a.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=(a=[]).concat(n);else{a=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=n:a[c]=n}n=a}return n}(l,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null==e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=n.split(t.delimiter,i),l=0;l<c.length;++l){var s,u,f=c[l],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(s=t.decoder(f,a.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(f.slice(0,p),a.decoder),u=t.decoder(f.slice(p+1),a.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r}(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(c),u=0;u<s.length;++u){var f=s[u],d=i(f,c[f],r);l=n.merge(l,d,r)}return n.compact(l)}}]).default},461:function(e,t,r){"use strict";r.r(t);var n=r(386),o=r(336),c=(r(56),r(8)),l=r(0),f=r(438),d=l.a.extend({asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.params,t.next=3,r("articles",n.post).fetch();case 3:return article=t.sent,t.abrupt("return",{article:article});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{commentBoxDestroyCallback:function(){}}},mounted:function(){this.commentBoxDestroyCallback=f(this.$config.commentBoxId)},beforeDestroy:function(){this.commentBoxDestroyCallback()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),y=r(25),component=Object(y.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("h1",[e._v("\n      "+e._s(e.article.title)+"\n    ")]),e._v(" "),r(o.a,[r(n.a,{attrs:{cols:"10"}},[r("time",[e._v(e._s(e.formatDate(e.article.createdAt)))]),e._v(" "),r("article",{staticClass:"mt-4"},[r("nuxt-content",{attrs:{document:e.article}})],1)])],1),e._v(" "),r("div",{staticClass:"commentbox mt-8"})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);