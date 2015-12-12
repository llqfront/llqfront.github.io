/* unit.js Date:2015-12-12 23:25:01 */
define("js/unit.js",[],function(){var c={};return c.Q=function(a){switch(this.aElements=[],typeof a){case"string":switch(a.charAt(0)){case"#":if(/\s/.test(a)){var b=a.split(" ");this.aElements=c.getEle(b[0],b[1])}else this.aElements.push(document.getElementById(a.substring(1)));break;default:this.aElements=c.getEle(document,a)}break;case"function":c.addEvent(window,"load",a)}return this.aElements},c.getEle=function(a,b){var d=[];var e=null;if("."==b.charAt(0)){if("string"==typeof a){var f=document.getElementById(a.substring(1));if(!f)return d;e=f.getElementsByTagName("*")}else e="object"==typeof a&&null!=a?a.getElementsByTagName("*"):[];for(var g=0;g<e.length;g++)if(/\s/.test(e[g].className)){var h=e[g].className.split(" ");c.strComper(b.substring(1),h)===!0&&d.push(e[g])}else e[g].className==b.substring(1)&&d.push(e[g])}else if("string"==typeof a){var f=document.getElementById(a.substring(1));if(!f)return d;d=document.getElementById(a.substring(1)).getElementsByTagName(b)}else"object"==typeof a&&(d=a.getElementsByTagName(b));return d},c.strComper=function(a,b){for(var c=0;c<b.length;c++)if(a==b[c])return!0},c.addEvent=function(a,b,c){return a?void(a.addEventListener?a.addEventListener(b,function(b){var d=c.call(a,b);0==d&&(b.cancelBubble=!0,b.preventDefault())},!1):a.attachEvent("on"+b,function(){var b=c.call(a,event);return 0==b?(event.cancelBubble=!0,!1):void 0})):null},c.contains=function(a,b){if(a.constructor==Array)return a.indexOf(b)>-1?!0:!1;if(a.compareDocumentPosition)return a===b||!!(16&a.compareDocumentPosition(b));if(a.contains&&1===b.nodeType)return a.contains(b)&&a!==b;for(;b=b.parentNode;)if(b===a)return!0;return!1},c.css=function(a,b,c){if(!a)return null;if(2===arguments.length){if("string"==typeof b)return"float"==b&&(b=-[1]?"cssFloat":"styleFloat"),a.currentStyle?a.currentStyle[b]:getComputedStyle(a,!1)[b];for(var d in b)a.style[d]=b[d],"float"==d&&(-[1]?(d="cssFloat",a.style[d]=b["float"]):(d="styleFloat",a.style[d]=b["float"]))}else 3===arguments.length&&("float"==b&&(b=-[1]?"cssFloat":"styleFloat"),a.style[b]=c)},c.attr=function(a,b,c){return a?("class"==b.toLowerCase()&&(b="className"),2==arguments.length?a.attributes[b]?a.attributes[b].nodeValue:null:void(3==arguments.length&&a.setAttribute(b,c))):null},c.getPos=function(a,b){var c={x:0,y:0};return a?(b?(c.x=parseInt(a.getBoundingClientRect().left),c.y=parseInt(a.getBoundingClientRect().top)):(c.x=parseInt(a.getBoundingClientRect().left+(document.documentElement.scrollLeft||document.body.scrollLeft),10),c.y=parseInt(a.getBoundingClientRect().top+(document.documentElement.scrollTop||document.body.scrollTop))),c):c},c.getParents=function(a,b){if(!a)return null;var d=a.parentNode;for(;d;){if(c.haveName(d,b))return d;d=d.parentNode}return null},c.addClass=function(a,b){return!a||c.haveClass(a,b)?null:void(""!==a.className?(a.className+=" ",a.className+=b):a.className=b)},c.removeClass=function(a,b){if(!a)return null;var c=a.className;var d=c.split(" ");for(var e=0,f=d.length;f>e;e++)if(b==d[e]){d[e]=d[f-1],d.pop(d[f-1]);break}a.className=d.join(" ")},c.haveClass=function(a,b){if(!a)return!1;var c=a.className;if(!c)return!1;var d=c.split(" ");var e=!1;for(var f=0,g=d.length;g>f;f++)if(d[f]==b){e=!0;break}return e},c.haveName=function(a,b){return a&&a.tagName?"."==b.charAt(0)&&c.haveClass(a,b.substring(1))?!0:b==a.tagName.toLowerCase()?!0:!1:!1},c.first=function(a){return a?a.firstElementChild||a.firstChild:null},c.last=function(a){return a?a.lastElementChild||a.lastChild:null},c.prev=function(a){return a?a.previousElementSibling||a.previousSibling:null},c.next=function(a){return a?a.nextElementSibling||a.nextSibling:null},c.inArray=function(a,b,c){var d=b.length;var c=c||0;for(c=0>c?d+c:c;d>c;c++)if(b[c]==a)return c;return-1},c.loadScript=function(a,b){var c=document.createElement("script");c.readyState?c.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&(c.onreadystatechange=null,b&&b())}:c.onload=function(){b&&b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)},c.getSib=function(a,b){var a=a;var d=[];for(;a.previousSibling;)a=a.previousSibling,1==a.nodeType&&(b?c.haveName(a,b)&&d.push(a):d.push(a));for(d.reverse();a.nextSibling;)a=a.nextSibling,1==a.nodeType&&(b?c.haveName(a,b)&&d.push(a):d.push(a));return d},c.domfn=[],c.isReady=!1,c.ready=function(){c.initReady();for(var b=0,d=arguments.length;d>b;b++)c.isReady?arguments[b]():c.domfn.push(arguments[b])},c.fireReady=function(){if(!c.isReady){c.isReady=!0;for(var a=0,b=c.domfn.length;b>a;a++){var d=c.domfn[a];d()}c.domfn.length=0}},c.initReady=function(){if(document.addEventListener)document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),c.fireReady()},!1);else{document.write('<script id="ie_ready" defer="defer" src="//:"></script>');var a=document.getElementById("ie_ready");a.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(setTimeout(function(){c.fireReady()},0),this.onreadystatechange=null,this.parentNode&&this.parentNode.removeChild(this))}}},c.startMove=function(a,b,d){return a?(clearInterval(a.timer),a.timer=null,void(a.timer=setInterval(function(){var e=0;var f="";var g=!0;for(f in b){e=parseInt("opacity"==f?100*parseFloat(c.css(a,"opacity")).toFixed(2):c.css(a,f)),isNaN(e)&&(e=0);var h=(b[f]-e)/9;h=h>0?Math.ceil(h):Math.floor(h),e+=h,b[f]!=e&&(g=!1),"opacity"==f?(a.style.filter="alpha(opacity:"+e+")",a.style.opacity=e/100):a.style[f]=e+"px"}g&&(clearInterval(a.timer),a.timer=null,d&&d.call(a))},30))):null},c.stopMove=function(a){return a?void(a.timer&&(clearInterval(a.timer),a.timer=null)):null},c.newJson=function(a){var b=new Function("return "+a)();return b},c.createAjax=function(){var a=null;if(window.XMLHttpRequest)a=new XMLHttpRequest;else if(window.ActiveXObject)try{a=new ActiveXObject("microsoft.xmlhttp")}catch(b){try{a=new ActiveXObject("msxml2.XMLHTTP")}catch(b){}}return a},c.ajax=function(a){var b=a.type;var d=a.url;var e=a.data;var f=a.dataType;var g=a.success;null==b&&(b="get"),null==f&&(f="text");var h=c.createAjax();h.onreadystatechange=function(){1==h.readyState?console.log("..."):4==h.readyState&&200==h.status&&("TEXT"==f.toUpperCase()?null!=g&&g(h.responseText):"XML"==f.toUpperCase()?null!=g&&g(h.responseXML):"JSON"==f.toUpperCase()&&null!=g&&g(c.newJson(h.responseText)),h=null)},h.open(b,d,!0),"GET"==b.toUpperCase()?h.send(null):"POST"==b.toUpperCase()&&(h.setRequestHeader("content-type","application/x-www-form-urlencoded"),h.send(e))},c});
