
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"16",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    }],
  "tags":[{
      "function":"__ua",
      "vtp_trackingId":"UA-58068936-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"test category",
      "vtp_eventAction":"test action",
      "vtp_eventLabel":"test label",
      "vtp_enableEcommerce":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "vtp_trackingId":"UA-58068936-1",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":false,
      "vtp_doubleClick":false,
      "vtp_advertisingFeaturesType":"NONE",
      "vtp_eventCategory":"gtm",
      "vtp_eventAction":["template",["macro",0],["macro",3],["macro",4],["macro",5]],
      "vtp_eventLabel":["macro",5],
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","anonymizeIp","value","false"]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"967221_1",
      "tag_id":4
    },{
      "function":"__cl",
      "tag_id":5
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"967221_3",
      "tag_id":6
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"nickgajewski"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)967221_1($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/environment-and-energy\/showy-goldenrod"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)967221_3($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"nickgajewski.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    }],
  "rules":[
    [["if",0,1,2],["add",0]],
    [["if",1,3,4],["add",1]],
    [["if",5,6],["add",2]],
    [["if",6],["add",3]],
    [["if",3,6],["add",4]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={lf:!0},fa={};try{fa.__proto__=ea;da=fa.lf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,ka=/^[\w+/_-]+[=]{0,2}$/,ma=null;var na=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},sa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&sa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ca=function(a){var b=[];if(sa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};var qb;
var rb=[],sb=[],tb=[],ub=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(sa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.te&&b.te(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Db(a[n],b,c);zb&&(m=m||q===zb.ub);d.push(q)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&sa(a[1])&&"macro"===a[1][0]&&zb.mg(a))return zb.Jg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!ub[p])throw Error("Unable to resolve tag reference "+p+".");return d={fe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),rh:a("debug_mode_metadata"),ra:a("function"),Qe:a("instance_name"),Ue:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),sh:a("original_vendor_template_id"),af:a("once_per_event"),Dd:a("once_per_load"),Ld:a("setup_tags"),Nd:a("tag_id"),Od:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<ub.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,gc=navigator,hc=F.currentScript&&F.currentScript.src,ic=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},jc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},kc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;jc(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ka.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},lc=function(){if(hc){var a=hc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},mc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);jc(c,b);void 0!==a&&(c.src=a);return c},nc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},oc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},rc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},sc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},tc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},uc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},vc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var xc=function(a){return wc?F.querySelectorAll(a):null},yc=function(a,b){if(!wc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},zc=!1;if(F.querySelectorAll)try{var Ac=F.querySelectorAll(":root");Ac&&1==Ac.length&&Ac[0]==F.documentElement&&(zc=!0)}catch(a){}var wc=zc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ba:"user_properties"};
H.de=[H.X,H.Qa,H.sb];H.ke=[H.Y,H.tb,H.Ra];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ea(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.s="GTM-T7V5LF";Vc.yb="2c0";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},$c="www.googletagmanager.com/gtm.js";var ad=$c,bd=null,cd=null,dd=null,ed="//web.archive.org/web/20200219230139/https://www.googletagmanager.com/a?id="+Vc.s+"&cv=16",fd={},gd={},hd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var id={},I=function(a,b){id[a]=id[a]||[];id[a][b]=!0},jd=function(a){for(var b=[],c=id[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var kd=function(){return"&tc="+ub.filter(function(a){return a}).length},nd=function(){ld||(ld=D.setTimeout(md,500))},md=function(){ld&&(D.clearTimeout(ld),ld=void 0);void 0===od||pd[od]&&!qd&&!rd||(sd[od]||td.og()||0>=ud--?(I("GTM",1),sd[od]=!0):(td.Sg(),nc(vd()),pd[od]=!0,wd=xd=rd=qd=""))},vd=function(){var a=od;if(void 0===a)return"";var b=jd("GTM"),c=jd("TAGGING");return[yd,pd[a]?"":"&es=1",zd[a],b?"&u="+b:"",c?"&ut="+c:"",kd(),qd,rd,xd,wd,"&z=0"].join("")},Ad=function(){return[ed,"&v=3&t=t","&pid="+
wa(),"&rv="+Vc.yb].join("")},Bd="0.005000">Math.random(),yd=Ad(),Cd=function(){yd=Ad()},pd={},qd="",rd="",wd="",xd="",od=void 0,zd={},sd={},ld=void 0,td=function(a,b){var c=0,d=0;return{og:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Sg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),ud=1E3,Dd=function(a,b){if(Bd&&!sd[a]&&od!==a){md();od=a;wd=qd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";zd[a]="&e="+c+"&eid="+a;nd()}},Ed=function(a,b,c){if(Bd&&!sd[a]&&
b){a!==od&&(md(),od=a);var d,e=String(b[Ib.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;qd=qd?qd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;wd=wd?wd+"."+k:"&ti="+k;nd();2022<=vd().length&&md()}},Fd=function(a,b,c){if(Bd&&!sd[a]){a!==od&&(md(),od=a);var d=c+b;rd=rd?rd+
"."+d:"&epr="+d;nd();2022<=vd().length&&md()}};var Gd={},Hd=new xa,Id={},Jd={},Md={name:"dataLayer",set:function(a,b){B(La(a,b),Id);Kd()},get:function(a){return Ld(a,2)},reset:function(){Hd=new xa;Id={};Kd()}},Ld=function(a,b){if(2!=b){var c=Hd.get(a);if(Bd){var d=Nd(a);c!==d&&I("GTM",5)}return c}return Nd(a)},Nd=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Pd(d)},Pd=function(a){for(var b=Id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Rd=function(a,b){Jd.hasOwnProperty(a)||(Hd.set(a,b),B(La(a,b),Id),Kd())},Kd=function(a){za(Jd,function(b,c){Hd.set(b,c);B(La(b,void 0),Id);B(La(b,c),Id);a&&delete Jd[b]})},Sd=function(a,b,c){Gd[a]=Gd[a]||{};var d=1!==c?Nd(b):Hd.get(b);"array"===Pa(d)||"object"===Pa(d)?Gd[a][b]=B(d):Gd[a][b]=d},Td=function(a,b){if(Gd[a])return Gd[a][b]},Ud=function(a,b){Gd[a]&&delete Gd[a][b]};var Vd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Wd()||d||"http:"!=D.location.protocol?a:b)+c},Wd=function(){var a=lc(),b;if(1===a)a:{var c=ad;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var ke=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),le={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},me={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ne="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var pe=function(a){var b=Ld("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ca(b),le),d=Ld("gtm.blacklist");d||(d=Ld("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];oe()&&(d=Ca(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ca(d),"google")&&I("GTM",2);var e=d&&Ka(Ca(d),me),f={};return function(h){var k=h&&h[Ib.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=gd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,ne));return f[k]=v}},oe=function(){return ke.test(D.location&&D.location.hostname)};var qe={Mf:function(a,b){b[Ib.qd]&&"string"===typeof a&&(a=1==b[Ib.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.sd)&&null===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.ud)&&void 0===a&&(a=b[Ib.ud]);b.hasOwnProperty(Ib.td)&&!0===a&&(a=b[Ib.td]);b.hasOwnProperty(Ib.rd)&&!1===a&&(a=b[Ib.rd]);return a}};var re={active:!0,isWhitelisted:function(){return!0}},se=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var te=function(){};var ue=!1,ve=0,we=[];function xe(a){if(!ue){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ue=!0;for(var e=0;e<we.length;e++)G(we[e])}we.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function ye(){if(!ue&&140>ve){ve++;try{F.documentElement.doScroll("left"),xe()}catch(a){D.setTimeout(ye,50)}}}var ze=function(a){ue?a():we.push(a)};var Ae={},Be={},Ce=function(a,b,c,d){if(!Be[a]||Yc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Be[a].tags.push(e)-1},De=function(a,b,c,d){if(Be[a]){var e=Be[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Ee(a){for(var b=Ae[a]||[],c=0;c<b.length;c++)b[c]();Ae[a]={push:function(d){d(Vc.s,Be[a])}}}
var He=function(a,b,c){Be[a]={tags:[]};qa(b)&&Fe(a,b);c&&D.setTimeout(function(){return Ee(a)},Number(c));return Ge(a)},Fe=function(a,b){Ae[a]=Ae[a]||[];Ae[a].push(Ha(function(){return G(function(){b(Vc.s,Be[a])})}))};function Ge(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&Ee(a)})},yf:function(){d=!0;b>=c&&Ee(a)}}};var Ie=function(){function a(d){return!ra(d)||0>d?0:d}if(!Wc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Md.get("gtm.start"))?Md.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(cd-b)}}};var Me={},Ne=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Oe=!1;
var Pe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Ie();return D[b]},Qe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ne();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Se=function(a){},Re=function(){return D.GoogleAnalyticsObject||"ga"};var Ue=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ve=/:[0-9]+$/,We=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ze=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Xe(a.protocol)||Xe(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ve,"").toLowerCase());var f=b,h,k=Xe(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ye(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ve,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=We(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Xe=function(a){return a?a.replace(":","").toLowerCase():""},Ye=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
$e=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ve,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ef(a,b,c,d){var e=ub[a],f=ff(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Ld],c,[]);if(h&&h.length){var k=h[0];f=ef(k.index,{B:f,w:1===k.fe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ff(a,b,c,d){function e(){if(f[Ib.We])k();else{var w=Eb(f,c,[]),y=Ce(c.id,String(f[Ib.ra]),Number(f[Ib.Nd]),w[Ib.Xe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Ed(c.id,ub[a],"5");De(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Ed(c.id,ub[a],"6");De(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Ed(c.id,f,"1");var z=function(){var A=Fa()-C;Ed(c.id,f,"7");De(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=ub[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Db(f[Ib.Od],c,[]);if(m&&m.length){var n=m[0],q=ef(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.fe?l:q}if(f[Ib.Dd]||f[Ib.af]){var u=f[Ib.Dd]?wb:c.ah,p=h,t=k;if(!u[a]){e=Ha(e);var v=gf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function gf(a,b,c){var d=[],e=[];b[a]=hf(d,e,c);return{B:function(){b[a]=jf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=kf;for(var f=0;f<e.length;f++)e[f]()}}}function hf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function jf(a){a()}function kf(a,b){b()};var nf=function(a,b){for(var c=[],d=0;d<ub.length;d++)if(a.kb[d]){var e=ub[d];var f=b.add();try{var h=ef(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ee:d,ze:Fb(e),Xf:h}):(lf(d,a),f())}catch(l){f()}}b.yf();c.sort(mf);for(var k=0;k<c.length;k++)c[k].Xf();return 0<c.length};function mf(a,b){var c,d=b.ze,e=a.ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ee,k=b.Ee;f=h>k?1:h<k?-1:0}return f}
function lf(a,b){if(!Bd)return;var c=function(d){var e=b.Lc(ub[d])?"3":"4",f=Db(ub[d][Ib.Ld],b,[]);f&&f.length&&c(f[0].index);Ed(b.id,ub[d],e);var h=Db(ub[d][Ib.Od],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var of=!1,pf=function(a,b,c,d,e){if("gtm.js"==b){if(of)return!1;of=!0}Dd(a,b);var f=He(a,d,e);Sd(a,"event",1);Sd(a,"ecommerce",1);Sd(a,"gtm");var h={id:a,name:b,Lc:pe(c),kb:[],ah:[],te:function(){I("GTM",6)}};h.kb=Mb(h);var k=nf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Se(Vc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=ub[l];if(m&&!Yc[String(m[Ib.ra])])return!0}return!1};var rf=/^https?:\/\/www\.googletagmanager\.com/;function sf(){var a;return a}function uf(a,b){}
function tf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function vf(){var a=!1;return a};var wf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},xf=function(a){var b=new wf;b.eventModel=a;return b},yf=function(a,b){a.targetConfig=b;return a},zf=function(a,b){a.containerConfig=b;return a},Af=function(a,b){a.h=b;return a},Bf=function(a,b){a.globalConfig=b;return a},Cf=function(a,b){a.B=b;return a},Df=function(a,b){a.w=b;return a};
wf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ef=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ff;if(3===Vc.yb.length)Ff="g";else{var Gf="G";Ff=Gf}
var Hf={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ff,OPT:"o"},If=function(a){var b=Vc.s.split("-"),c=b[0].toUpperCase(),d=Hf[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.yb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.yb+e};function Jf(){for(var a=Kf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Kf,Mf;function Nf(a){Kf=Kf||Lf();Mf=Mf||Jf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Kf[l],Kf[m],Kf[n],Kf[q])}return b.join("")}
function Of(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kf=Kf||Lf();Mf=Mf||Jf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pf;var Tf=function(){var a=Qf,b=Rf,c=Sf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){oc(F,"mousedown",d);oc(F,"keyup",d);oc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Uf=function(a,b,c){for(var d=Sf().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==F.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ia(e,h.callback())}}return e},Sf=function(){var a=ic("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vf=/(.*?)\*(.*?)\*(.*)/,Wf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xf=/^(?:www\.|m\.|amp\.)+/,Yf=/([^?#]+)(\?[^#]*)?(#.*)?/;function Zf(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var bg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Nf(String(d))))}var e=b.join("*");return["1",ag(e),e].join("*")},ag=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Pf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},dg=function(){return function(a){var b=$e(D.location.href),c=b.search.replace("?",""),d=We(c,"_gl",!0)||"";a.query=cg(d)||{};var e=Ze(b,"fragment").match(Zf("_gl"));a.fragment=cg(e&&e[3]||"")||{}}},eg=function(){var a=dg(),b=Sf();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},cg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Vf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ag(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=Of(u[p+1]);return q}}}}catch(t){}};
function fg(a,b,c,d){function e(n){var q=n,u=Zf(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Yf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function gg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Uf(b,1,c),e=Uf(b,2,c),f=Uf(b,3,c);if(Ja(d)){var h=bg(d);c?hg("_gl",h,a):ig("_gl",h,a,!1)}if(!c&&Ja(e)){var k=bg(e);ig("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){ig(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){hg(m,n,q);break a}}"string"==typeof q&&fg(m,n,q,void 0)}}
function ig(a,b,c,d){if(c.href){var e=fg(a,b,c.href,void 0===d?!1:d);Ue.test(e)&&(c.href=e)}}
function hg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=fg(a,b,c.action);Ue.test(m)&&(c.action=m)}}}
var Qf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||gg(e,e.hostname)}}catch(h){}},Rf=function(a){try{if(a.action){var b=Ze($e(a.action),"host");gg(a,b)}}catch(c){}},jg=function(a,b,c,d){Tf();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};Sf().decorators.push(f)},kg=function(){var a=F.location.hostname,
b=Wf.exec(F.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xf,""),l=e.replace(Xf,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},lg=function(a,b){return!1===a?!1:a||b||kg()};var mg=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},pg=function(a,b,c,d){var e=ng(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=og(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=og(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function qg(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=mg(b,e).indexOf(c)}
var tg=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=rg(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!sg(y,u)&&qg(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!sg(q,u)&&qg(m,a,l)}return k};function og(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function ng(a,b){for(var c=[],d=mg(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var ug=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,vg=/(^|\.)doubleclick\.net$/i,sg=function(a,b){return vg.test(document.location.hostname)||"/"===b&&ug.test(a)},rg=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;vg.test(e)||ug.test(e)||a.push("none");return a};var wg={};var xg=/^\w+$/,yg=/^[\w-]+$/,zg=/^~?[\w-]+$/,Ag={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Bg(a){return a&&"string"==typeof a&&a.match(xg)?a:"_gcl"}
var Dg=function(){var a=$e(D.location.href),b=Ze(a,"query",!1,void 0,"gclid"),c=Ze(a,"query",!1,void 0,"gclsrc"),d=Ze(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||We(e,"gclid",void 0);c=c||We(e,"gclsrc",void 0)}return Cg(b,c,d)},Cg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(yg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
wg.gtm_3pds?0:wg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Fg=function(a){var b=Dg();Eg(b,a)};
function Eg(a,b,c){function d(q,u){var p=Gg(q,e);p&&tg(p,u,h,f,l,!0)}b=b||{};var e=Bg(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Lh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Ig=function(a,b,c,d,e){for(var f=eg(),h=Bg(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Ag[l]){var m=Gg(l,h),n=f[m];if(n){var q=Math.min(Hg(n),Fa()),u;b:{for(var p=q,t=mg(m,F.cookie),v=0;v<t.length;++v)if(Hg(t[v])>p){u=!0;break b}u=!1}u||tg(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Eg(Cg(f.gclid,f.gclsrc),w)},Gg=function(a,b){var c=Ag[a];if(void 0!==c)return b+c},Hg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Jg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Kg=function(a,b,c,d,e){if(sa(b)){var f=Bg(e);jg(function(){for(var h={},k=0;k<a.length;++k){var l=Gg(a[k],f);if(l){var m=mg(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Lg=function(a){return a.filter(function(b){return zg.test(b)})},Mg=function(a,b){for(var c=Bg(b&&b.prefix),d={},e=0;e<a.length;e++)Ag[a[e]]&&(d[a[e]]=Ag[a[e]]);za(d,function(f,h){var k=mg(c+h,F.cookie);if(k.length){var l=k[0],m=Hg(l),n={};n[f]=[Jg(l)];Eg(n,b,m)}})};var Wg=function(){for(var a=gc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Zg=function(a,b,c,d){var e=Xg(b);return pg(a,e,Yg(c),d)},$g=function(a,b,c,d){var e=""+Xg(c),f=Yg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Xg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Yg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ah=["1"],bh={},fh=function(a,b,c,d){var e=ch(a);bh[e]||dh(e,b,c)||(eh(e,Wg(),b,c,d),dh(e,b,c))};function eh(a,b,c,d,e){var f=$g(b,"1",d,c);tg(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function dh(a,b,c){var d=Zg(a,b,c,ah);d&&(bh[a]=d);return d}function ch(a){return(a||"_gcl")+"_au"};var gh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({dd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].dd]||(f[a[h].dd]=[]),f[a[h].dd].push({timestamp:k[1],$f:k[2]}))}return f};var hh=/^\d+\.fls\.doubleclick\.net$/;function ih(a){var b=$e(D.location.href),c=Ze(b,"host",!1);if(c&&c.match(hh)){var d=Ze(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function jh(a,b){if("aw"==a||"dc"==a){var c=ih("gcl"+a);if(c)return c.split(".")}var d=Bg(b);if("_gcl"==d){var e;e=Dg()[a]||[];if(0<e.length)return e}var f=Gg(a,d),h;if(f){var k=[];if(F.cookie){var l=mg(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Jg(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Lg(k)}else h=k}else h=k}else h=[];return h}
var kh=function(){var a=ih("gac");if(a)return decodeURIComponent(a);var b=gh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].$f);f=Lg(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},lh=function(a,b,c,d,e){fh(b,c,d,e);var f=bh[ch(b)],h=Dg().dc||[],k=!1;if(f&&0<h.length){var l=Wc.joined_au=Wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://web.archive.org/web/20200219230139/https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+f;gc.sendBeacon&&gc.sendBeacon(u)||nc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=ch(b),t=bh[p];t&&eh(p,t,c,d,e)}};var di={},ei=["G"];di.Fe="";var fi=di.Fe.split(",");function gi(){var a=Wc;return a.gcq=a.gcq||new hi}
var ii=function(a,b,c){gi().register(a,b,c)},ji=function(a,b,c,d){gi().push("event",[b,a],c,d)},ki=function(a,b){gi().push("config",[a],b)},li={},mi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},ni=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},hi=function(){this.i={};this.m={};this.h=[]},oi=function(a,b){var c=Sc(b);return a.i[c.containerId]=a.i[c.containerId]||new mi},pi=function(a,b,c,d){if(d.N){var e=oi(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),q=Ld("gtm.uniqueEventId"),u=Sc(d.N).prefix,p=Df(Cf(Bf(Af(zf(yf(xf(h),k),l),m),n),function(){Fd(q,u,"2");}),function(){Fd(q,u,"3");});try{Fd(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Fd(q,u,"4");}}}};
hi.prototype.register=function(a,b,c){if(3!==oi(this,a).status){oi(this,a).m=b;oi(this,a).status=3;c&&(oi(this,a).i=c);var d=Sc(a),e=li[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Ld("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Bd&&!sd[k]){k!==od&&(md(),od=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);xd=xd?xd+","+n:"&cl="+n}delete li[d.containerId]}this.flush()}};
hi.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===oi(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(oi(this,c).status=2,this.push("require",[],f.containerId),li[f.containerId]=Fa(),Vd()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//web.archive.org/web/20200219230139/https://www.googletagmanager.com";
kc(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new ni(a,e,c,b,d));d||this.flush()};
hi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==oi(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=oi(this,c.N),h=Sc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||pi(this,H.D,d,c);f.h=!0;delete d[H.qa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":pi(this,c.h[1],c.h[0],c)}this.h.shift()}};var qi="G".split(/,/),ri=!1;ri=!0;var si=null,ti={},ui={},vi;function wi(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var Ci={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=wi(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||sa(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},Di={policy:!0};var Ei=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Gi=function(a){var b=Fi(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Hi=!1,Ii=[];function Ji(){if(!Hi){Hi=!0;for(var a=0;a<Ii.length;a++)G(Ii[a])}}var Ki=function(a){Hi?G(a):Ii.push(a)};var $i=function(a){if(Zi(a))return a;this.h=a};$i.prototype.dg=function(){return this.h};var Zi=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};$i.prototype.getUntrustedUpdateValue=$i.prototype.dg;var aj=[],bj=!1,cj=function(a){return D["dataLayer"].push(a)},dj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function ej(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Rd(f,void 0),Rd(f,h))});bd||(bd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=hd(),a["gtm.uniqueEventId"]=d,Rd("gtm.uniqueEventId",d));dd=c;var e=
fj(a);dd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function fj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.s,c):re;return d.active?pf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function gj(){for(var a=!1;!bj&&0<aj.length;){bj=!0;delete Id.eventModel;Kd();var b=aj.shift();if(null!=b){var c=Zi(b);if(c){var d=b;b=Zi(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Ld(h,1);if(sa(k)||Ra(k))k=B(k);Jd[h]=k}}try{if(qa(b))try{b.call(Md)}catch(v){}else if(sa(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Ld(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=Ci[b[0]];if(t&&(!c||!Di[b[0]])){b=t(b);break a}}b=void 0}if(!b){bj=!1;continue}}a=ej(b)||a}}finally{c&&Kd(!0)}}bj=!1}
return!a}function hj(){var a=gj();try{Ei(D["dataLayer"],Vc.s)}catch(b){}return a}
var jj=function(){var a=ic("dataLayer",[]),b=ic("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ze(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ki(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $i(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);aj.push.apply(aj,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return gj()&&h};aj.push.apply(aj,a.slice(0));ij()&&G(hj)},ij=function(){var a=!0;return a};var kj={};kj.ub=new String("undefined");
var lj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===kj.ub?b:a[d]);return c.join("")}};lj.prototype.toString=function(){return this.h("undefined")};lj.prototype.valueOf=lj.prototype.toString;kj.jf=lj;kj.xc={};kj.Pf=function(a){return new lj(a)};var mj={};kj.Tg=function(a,b){var c=hd();mj[c]=[a,b];return c};kj.be=function(a){var b=a?0:1;return function(c){var d=mj[c];if(d&&"function"===typeof d[b])d[b]();mj[c]=void 0}};kj.mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};kj.Jg=function(a){if(a===kj.ub)return a;var b=hd();kj.xc[b]=a;return'google_tag_manager["'+Vc.s+'"].macro('+b+")"};kj.xg=function(a,b,c){a instanceof kj.jf&&(a=a.h(kj.Tg(b,c)),b=na);return{Jc:a,B:b}};var nj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||rc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},oj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},pj=function(a,b,c){oj(a)[b]=c},qj=function(a,b,c,d){var e=oj(a),f=Ga(e,b,d);e[b]=c(f)},rj=function(a,b,c){var d=oj(a);return Ga(d,b,c)};var sj=["input","select","textarea"],tj=["button","hidden","image","reset","submit"],uj=function(a){var b=a.tagName.toLowerCase();return!va(sj,function(c){return c===b})||"input"===b&&va(tj,function(c){return c===a.type.toLowerCase()})?!1:!0},vj=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):uc(a,["form"],100)},wj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(uj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var xj=!!D.MutationObserver,yj=void 0,zj=function(a){if(!yj){var b=function(){var c=F.body;if(c)if(xj)(new MutationObserver(function(){for(var e=0;e<yj.length;e++)G(yj[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;oc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<yj.length;e++)G(yj[e])}))})}};yj=[];F.body?b():G(b)}yj.push(a)};var Uj=D.clearTimeout,Vj=D.setTimeout,R=function(a,b,c){if(Vd()){b&&G(b)}else return kc(a,b,c)},Wj=function(){return D.location.href},Xj=function(a){return Ze($e(a),"fragment")},Yj=function(a){return Ye($e(a))},U=function(a,b){return Ld(a,b||2)},Zj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=cj(a)):d=cj(a);return d},ak=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},bk=function(a,b,c){return mg(a,b,void 0===c?!0:!!c)},ck=function(a,b){if(Vd()){b&&G(b)}else mc(a,b)},dk=function(a){return!!rj(a,"init",!1)},ek=function(a){pj(a,"init",!0)},fk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":ad;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},gk=function(a,b){var c=a[b];return c};
var hk=kj.xg;var ik;var Fk=new xa;function Gk(a,b){function c(h){var k=$e(h),l=Ze(k,"protocol"),m=Ze(k,"host",!0),n=Ze(k,"port"),q=Ze(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Hk(a){return Ik(a)?1:0}
function Ik(a){var b=a.arg0,c=a.arg1;if(a.any_of&&sa(c)){for(var d=0;d<c.length;d++)if(Hk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Fk.get(p);t||(t=new RegExp(c,u),Fk.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Gk(b,
c)}return!1};var Jk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Kk={},Lk=encodeURI,Y=encodeURIComponent,Mk=nc;var Nk=function(a,b){if(!a)return!1;var c=Ze($e(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ok=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Kk.ng=function(){var a=!1;return a};var $l=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var km=window,lm=document,mm=function(a){var b=km._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===km["ga-disable-"+a])return!0;try{var c=km.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=mg("AMP_TOKEN",lm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return lm.getElementById("__gaOptOutExtension")?!0:!1};var pm=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ba]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var tm=function(a,b,c){ji(b,c,a)},um=function(a,b,c){ji(b,c,a,!0)},wm=function(a,b){};
function vm(a,b){}var Z={a:{}};



Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Td(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ze($e(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Yj(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=nj(c,"gtm.click");Zj(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!dk("cl")){var c=X("document");oc(c,"click",a,!0);ek("cl")}G(b.vtp_gtmOnSuccess)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||Wj();var d=b[a("vtp_component")];if(!d||"URL"==d)return Yj(String(c));var e=$e(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?sa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ze(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ze(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Ok(n.vtp_fieldsToSet,"fieldName","value"),f);B(Ok(n.vtp_contentGroup,"index","group"),h);B(Ok(n.vtp_dimension,"index","dimension"),k);B(Ok(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=B(n);d=B(d,q)}B(Ok(d.vtp_fieldsToSet,"fieldName","value"),f);B(Ok(d.vtp_contentGroup,
"index","group"),h);B(Ok(d.vtp_dimension,"index","dimension"),k);B(Ok(d.vtp_metric,"index","metric"),l);var u=Pe(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+hd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var ta in K)K.hasOwnProperty(ta)&&
y("set",O+ta,K[ta])},C=function(){},A=function(O,K,ta){var Hb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var $a=w[Da]?Ba(O[Da]):O[Da];"anonymizeIp"!=Da||$a||($a=void 0);K[Da]=$a;Hb++}return Hb},E={name:t};A(f,E,
!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",If(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var pa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:pa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var la="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:la})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var bb=Q("https:","http:","//web.archive.org/web/20200219230139/https://www.google-analytics.com/"+ua,f&&f.forceSSL);
R(bb,function(){var O=Ne();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();


















Z.a.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.lg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=uc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=rj("lcl",k?"nv.mwt":"mwt",0),m;m=k?rj("lcl","nv.ids",[]):rj("lcl","ids",[]);if(m.length){var n=nj(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var q=String(gk(h,"rel")||""),u=!!va(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&I("GTM",36);var p=X((gk(h,"target")||"_self").substring(1)),t=!0;if(Zj(n,dj(function(){var v;if(v=t&&p){var w;a:if(u){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.lg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=gk(h,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Zj(n,function(){},l||2E3);return!0}}};oc(c,"click",e,!1);oc(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=gk(d,"href"),h=f.indexOf("#"),k=gk(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Yj(f),m=Yj(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};qj("lcl","mwt",k,0);e||qj("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};qj("lcl","ids",l,[]);e||qj("lcl","nv.ids",l,[]);dk("lcl")||(a(),ek("lcl"));G(c.vtp_gtmOnSuccess)})}();

var xm={};xm.macro=function(a){if(kj.xc.hasOwnProperty(a))return kj.xc[a]},xm.onHtmlSuccess=kj.be(!0),xm.onHtmlFailure=kj.be(!1);xm.dataLayer=Md;xm.callback=function(a){fd.hasOwnProperty(a)&&qa(fd[a])&&fd[a]();delete fd[a]};function ym(){Wc[Vc.s]=xm;Ia(gd,Z.a);zb=zb||kj;Ab=qe}
function zm(){wg.gtm_3pds=!0;Wc=D.google_tag_manager=D.google_tag_manager||{};if(Wc[Vc.s]){var a=Wc.zones;a&&a.unregisterChild(Vc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ub.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(q)}xb=Z;yb=Hk;ym();jj();ue=!1;ve=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)xe();else{oc(F,"DOMContentLoaded",xe);oc(F,"readystatechange",xe);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&ye()}oc(D,"load",xe)}Hi=!1;"complete"===F.readyState?Ji():oc(D,
"load",Ji);a:{if(!Bd)break a;D.setInterval(Cd,864E5);}
cd=(new Date).getTime();
}}zm();

})()

/*
     FILE ARCHIVED ON 23:01:39 Feb 19, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:07:55 Mar 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.01
  exclusion.robots: 0.194
  PetaboxLoader3.resolve: 87.114
  exclusion.robots.policy: 0.181
  LoadShardBlock: 112.159 (3)
  load_resource: 171.451
  CDXLines.iter: 11.144 (3)
  captures_list: 139.546
  RedisCDXSource: 0.532
  PetaboxLoader3.datanode: 166.106 (4)
*/