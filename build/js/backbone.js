/* backbone.js Date:2015-12-13 22:28:17 */
(function(){var a=this;var b=a.Backbone;var c=[];c.push;var e=c.slice;c.splice;var g;g="undefined"!=typeof exports?exports:a.Backbone={},g.VERSION="1.1.0";var h=a._;h||"undefined"==typeof require||(h=require("underscore.js")),g.$=a.jQuery||a.Zepto||a.ender||a.$,g.noConflict=function(){return a.Backbone=b,this},g.emulateHTTP=!1,g.emulateJSON=!1;var i=g.Events={on:function(a,b,c){if(!k(this,"on",a,[b,c])||!b)return this;this._events||(this._events={});var d=this._events[a]||(this._events[a]=[]);return d.push({callback:b,context:c,ctx:c||this}),this},once:function(a,b,c){if(!k(this,"once",a,[b,c])||!b)return this;var d=this;var e=h.once(function(){d.off(a,e),b.apply(this,arguments)});return e._callback=b,this.on(a,e,c)},off:function(a,b,c){var d,e,f,g,i,j,l,m;if(!this._events||!k(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;for(g=a?[a]:h.keys(this._events),i=0,j=g.length;j>i;i++)if(a=g[i],f=this._events[a]){if(this._events[a]=d=[],b||c)for(l=0,m=f.length;m>l;l++)e=f[l],(b&&b!==e.callback&&b!==e.callback._callback||c&&c!==e.context)&&d.push(e);d.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var b=e.call(arguments,1);if(!k(this,"trigger",a,b))return this;var c=this._events[a];var d=this._events.all;return c&&l(c,b),d&&l(d,arguments),this},stopListening:function(a,b,c){var d=this._listeningTo;if(!d)return this;var e=!b&&!c;c||"object"!=typeof b||(c=this),a&&((d={})[a._listenId]=a);for(var f in d)a=d[f],a.off(b,c,this),(e||h.isEmpty(a._events))&&delete this._listeningTo[f];return this}};var j=/\s+/;var k=function(a,b,c,d){if(!c)return!0;if("object"==typeof c){for(var e in c)a[b].apply(a,[e,c[e]].concat(d));return!1}if(j.test(c)){var f=c.split(j);for(var g=0,h=f.length;h>g;g++)a[b].apply(a,[f[g]].concat(d));return!1}return!0};var l=function(a,b){var c,d=-1,e=a.length,f=b[0],g=b[1],h=b[2];switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);return;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f);return;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g);return;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,f,g,h);return;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}};var m={listenTo:"on",listenToOnce:"once"};h.each(m,function(a,b){i[b]=function(b,c,d){var e=this._listeningTo||(this._listeningTo={});var f=b._listenId||(b._listenId=h.uniqueId("l"));return e[f]=b,d||"object"!=typeof c||(d=this),b[a](c,d,this),this}}),i.bind=i.on,i.unbind=i.off,h.extend(g,i);var n=g.Model=function(a,b){var c=a||{};b||(b={}),this.cid=h.uniqueId("c"),this.attributes={},b.collection&&(this.collection=b.collection),b.parse&&(c=this.parse(c,b)||{}),c=h.defaults({},c,h.result(this,"defaults")),this.set(c,b),this.changed={},this.initialize.apply(this,arguments)};h.extend(n.prototype,i,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return h.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return h.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e,f,g,i,j,k,l;if(null==a)return this;if("object"==typeof a?(e=a,c=b):(e={})[a]=b,c||(c={}),!this._validate(e,c))return!1;f=c.unset,i=c.silent,g=[],j=this._changing,this._changing=!0,j||(this._previousAttributes=h.clone(this.attributes),this.changed={}),l=this.attributes,k=this._previousAttributes,this.idAttribute in e&&(this.id=e[this.idAttribute]);for(d in e)b=e[d],h.isEqual(l[d],b)||g.push(d),h.isEqual(k[d],b)?delete this.changed[d]:this.changed[d]=b,f?delete l[d]:l[d]=b;if(!i){g.length&&(this._pending=!0);for(var m=0,n=g.length;n>m;m++)this.trigger("change:"+g[m],this,l[g[m]],c)}if(j)return this;if(!i)for(;this._pending;)this._pending=!1,this.trigger("change",this,c);return this._pending=!1,this._changing=!1,this},unset:function(a,b){return this.set(a,void 0,h.extend({},b,{unset:!0}))},clear:function(a){var b={};for(var c in this.attributes)b[c]=void 0;return this.set(b,h.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!h.isEmpty(this.changed):h.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?h.clone(this.changed):!1;var b,c=!1;var d=this._changing?this._previousAttributes:this.attributes;for(var e in a)h.isEqual(d[e],b=a[e])||((c||(c={}))[e]=b);return c},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(a){a=a?h.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=this;var c=a.success;return a.success=function(d){return b.set(b.parse(d,a),a)?(c&&c(b,d,a),void b.trigger("sync",b,d,a)):!1},M(this,a),this.sync("read",this,a)},save:function(a,b,c){var d,e,f,g=this.attributes;if(null==a||"object"==typeof a?(d=a,c=b):(d={})[a]=b,c=h.extend({validate:!0},c),d&&!c.wait){if(!this.set(d,c))return!1}else if(!this._validate(d,c))return!1;d&&c.wait&&(this.attributes=h.extend({},g,d)),void 0===c.parse&&(c.parse=!0);var i=this;var j=c.success;return c.success=function(a){i.attributes=g;var b=i.parse(a,c);return c.wait&&(b=h.extend(d||{},b)),h.isObject(b)&&!i.set(b,c)?!1:(j&&j(i,a,c),void i.trigger("sync",i,a,c))},M(this,c),e=this.isNew()?"create":c.patch?"patch":"update","patch"===e&&(c.attrs=d),f=this.sync(e,this,c),d&&c.wait&&(this.attributes=g),f},destroy:function(a){a=a?h.clone(a):{};var b=this;var c=a.success;var d=function(){b.trigger("destroy",b,b.collection,a)};if(a.success=function(e){(a.wait||b.isNew())&&d(),c&&c(b,e,a),b.isNew()||b.trigger("sync",b,e,a)},this.isNew())return a.success(),!1;M(this,a);var e=this.sync("delete",this,a);return a.wait||d(),e},url:function(){var a=h.result(this,"urlRoot")||h.result(this.collection,"url")||L();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(a){return this._validate({},h.extend(a||{},{validate:!0}))},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=h.extend({},this.attributes,a);var c=this.validationError=this.validate(a,b)||null;return c?(this.trigger("invalid",this,c,h.extend(b,{validationError:c})),!1):!0}});var o=["keys","values","pairs","invert","pick","omit"];h.each(o,function(a){n.prototype[a]=function(){var b=e.call(arguments);return b.unshift(this.attributes),h[a].apply(h,b)}});var p=g.Collection=function(a,b){b||(b={}),b.model&&(this.model=b.model),void 0!==b.comparator&&(this.comparator=b.comparator),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,h.extend({silent:!0},b))};var q={add:!0,remove:!0,merge:!0};var r={add:!0,remove:!1};h.extend(p.prototype,i,{model:n,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){return this.set(a,h.extend({merge:!1},b,r))},remove:function(a,b){var c=!h.isArray(a);a=c?[a]:h.clone(a),b||(b={});var d,e,f,g;for(d=0,e=a.length;e>d;d++)g=a[d]=this.get(a[d]),g&&(delete this._byId[g.id],delete this._byId[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g));return c?a[0]:a},set:function(a,b){b=h.defaults({},b,q),b.parse&&(a=this.parse(a,b));var c=!h.isArray(a);a=c?a?[a]:[]:h.clone(a);var d,e,f,g,i,j,k;var l=b.at;var m=this.model;var o=this.comparator&&null==l&&b.sort!==!1;var p=h.isString(this.comparator)?this.comparator:null;var r=[],s=[],t={};var u=b.add,v=b.merge,w=b.remove;var x=!o&&u&&w?[]:!1;for(d=0,e=a.length;e>d;d++){if(i=a[d],f=i instanceof n?g=i:i[m.prototype.idAttribute],j=this.get(f))w&&(t[j.cid]=!0),v&&(i=i===g?g.attributes:i,b.parse&&(i=j.parse(i,b)),j.set(i,b),o&&!k&&j.hasChanged(p)&&(k=!0)),a[d]=j;else if(u){if(g=a[d]=this._prepareModel(i,b),!g)continue;r.push(g),g.on("all",this._onModelEvent,this),this._byId[g.cid]=g,null!=g.id&&(this._byId[g.id]=g)}x&&x.push(j||g)}if(w){for(d=0,e=this.length;e>d;++d)t[(g=this.models[d]).cid]||s.push(g);s.length&&this.remove(s,b)}if(r.length||x&&x.length)if(o&&(k=!0),this.length+=r.length,null!=l)for(d=0,e=r.length;e>d;d++)this.models.splice(l+d,0,r[d]);else{x&&(this.models.length=0);var y=x||r;for(d=0,e=y.length;e>d;d++)this.models.push(y[d])}if(k&&this.sort({silent:!0}),!b.silent){for(d=0,e=r.length;e>d;d++)(g=r[d]).trigger("add",g,this,b);(k||x&&x.length)&&this.trigger("sort",this,b)}return c?a[0]:a},reset:function(a,b){b||(b={});for(var c=0,d=this.models.length;d>c;c++)this._removeReference(this.models[c]);return b.previousModels=this.models,this._reset(),a=this.add(a,h.extend({silent:!0},b)),b.silent||this.trigger("reset",this,b),a},push:function(a,b){return this.add(a,h.extend({at:this.length},b))},pop:function(a){var b=this.at(this.length-1);return this.remove(b,a),b},unshift:function(a,b){return this.add(a,h.extend({at:0},b))},shift:function(a){var b=this.at(0);return this.remove(b,a),b},slice:function(){return e.apply(this.models,arguments)},get:function(a){return null==a?void 0:this._byId[a.id]||this._byId[a.cid]||this._byId[a]},at:function(a){return this.models[a]},where:function(a,b){return h.isEmpty(a)?b?void 0:[]:this[b?"find":"filter"](function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},findWhere:function(a){return this.where(a,!0)},sort:function(a){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return a||(a={}),h.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(h.bind(this.comparator,this)),a.silent||this.trigger("sort",this,a),this},pluck:function(a){return h.invoke(this.models,"get",a)},fetch:function(a){a=a?h.clone(a):{},void 0===a.parse&&(a.parse=!0);var b=a.success;var c=this;return a.success=function(d){var e=a.reset?"reset":"set";c[e](d,a),b&&b(c,d,a),c.trigger("sync",c,d,a)},M(this,a),this.sync("read",this,a)},create:function(a,b){if(b=b?h.clone(b):{},!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var c=this;var d=b.success;return b.success=function(a,b,e){e.wait&&c.add(a,e),d&&d(a,b,e)},a.save(null,b),a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(a,b){if(a instanceof n)return a.collection||(a.collection=this),a;b=b?h.clone(b):{},b.collection=this;var c=new this.model(a,b);return c.validationError?(this.trigger("invalid",this,c.validationError,b),!1):c},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=b)),this.trigger.apply(this,arguments))}});var s=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(s,function(a){p.prototype[a]=function(){var b=e.call(arguments);return b.unshift(this.models),h[a].apply(h,b)}});var t=["groupBy","countBy","sortBy"];h.each(t,function(a){p.prototype[a]=function(b,c){var d=h.isFunction(b)?b:function(a){return a.get(b)};return h[a](this.models,d,c)}});var u=g.View=function(a){this.cid=h.uniqueId("view"),a||(a={}),h.extend(this,h.pick(a,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()};var v=/^(\S+)\s*(.*)$/;var w=["model","collection","el","id","attributes","className","tagName","events"];h.extend(u.prototype,i,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(a,b){return this.$el&&this.undelegateEvents(),this.$el=a instanceof g.$?a:g.$(a),this.el=this.$el[0],b!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(!a&&!(a=h.result(this,"events")))return this;this.undelegateEvents();for(var b in a){var c=a[b];if(h.isFunction(c)||(c=this[a[b]]),c){var d=b.match(v);var e=d[1],f=d[2];c=h.bind(c,this),e+=".delegateEvents"+this.cid,""===f?this.$el.on(e,c):this.$el.on(e,f,c)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(h.result(this,"el"),!1);else{var a=h.extend({},h.result(this,"attributes"));this.id&&(a.id=h.result(this,"id")),this.className&&(a["class"]=h.result(this,"className"));var b=g.$("<"+h.result(this,"tagName")+">").attr(a);this.setElement(b,!1)}}}),g.sync=function(a,b,c){var d=y[a];h.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var e={type:d,dataType:"json"};if(c.url||(e.url=h.result(b,"url")||L()),null!=c.data||!b||"create"!==a&&"update"!==a&&"patch"!==a||(e.contentType="application/json",e.data=JSON.stringify(c.attrs||b.toJSON(c))),c.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{}),c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){e.type="POST",c.emulateJSON&&(e.data._method=d);var f=c.beforeSend;c.beforeSend=function(a){return a.setRequestHeader("X-HTTP-Method-Override",d),f?f.apply(this,arguments):void 0}}"GET"===e.type||c.emulateJSON||(e.processData=!1),"PATCH"===e.type&&x&&(e.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var i=c.xhr=g.ajax(h.extend(e,c));return b.trigger("request",b,i,c),i};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var y={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};var z=g.Router=function(a){a||(a={}),a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var B=/(\(\?)?:\w+/g;var C=/\*\w+/g;var D=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(z.prototype,i,{initialize:function(){},route:function(a,b,c){h.isRegExp(a)||(a=this._routeToRegExp(a)),h.isFunction(b)&&(c=b,b=""),c||(c=this[b]);var d=this;return g.history.route(a,function(e){var f=d._extractParameters(a,e);c&&c.apply(d,f),d.trigger.apply(d,["route:"+b].concat(f)),d.trigger("route",b,f),g.history.trigger("route",d,b,f)}),this},navigate:function(a,b){return g.history.navigate(a,b),this},_bindRoutes:function(){if(this.routes){this.routes=h.result(this,"routes");var a,b=h.keys(this.routes);for(;null!=(a=b.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){return a=a.replace(D,"\\$&").replace(A,"(?:$1)?").replace(B,function(a,b){return b?a:"([^/]+)"}).replace(C,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){var c=a.exec(b).slice(1);return h.map(c,function(a){return a?decodeURIComponent(a):null})}});var E=g.History=function(){this.handlers=[],h.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)};var F=/^[#\/]|\s+$/g;var G=/^\/+|\/+$/g;var H=/msie [\w.]+/;var I=/\/$/;var J=/[?#].*$/;E.started=!1,h.extend(E.prototype,i,{interval:50,getHash:function(a){var b=(a||this).location.href.match(/#(.*)$/);return b?b[1]:""},getFragment:function(a,b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=this.location.pathname;var c=this.root.replace(I,"");a.indexOf(c)||(a=a.slice(c.length))}else a=this.getHash();return a.replace(F,"")},start:function(a){if(E.started)throw new Error("Backbone.history has already been started");E.started=!0,this.options=h.extend({root:"/"},this.options,a),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var b=this.getFragment();var c=document.documentMode;var d=H.exec(navigator.userAgent.toLowerCase())&&(!c||7>=c);this.root=("/"+this.root+"/").replace(G,"/"),d&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(b)),this._hasPushState?g.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!d?g.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=b;var e=this.location;var f=e.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!f)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._hasPushState&&f&&e.hash&&(this.fragment=this.getHash().replace(F,""),this.history.replaceState({},document.title,this.root+this.fragment+e.search))}return this.options.silent?void 0:this.loadUrl()},stop:function(){g.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),E.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var b=this.getFragment();return b===this.fragment&&this.iframe&&(b=this.getFragment(this.getHash(this.iframe))),b===this.fragment?!1:(this.iframe&&this.navigate(b),void this.loadUrl())},loadUrl:function(a){return a=this.fragment=this.getFragment(a),h.any(this.handlers,function(b){return b.route.test(a)?(b.callback(a),!0):void 0})},navigate:function(a,b){if(!E.started)return!1;b&&b!==!0||(b={trigger:!!b});var c=this.root+(a=this.getFragment(a||""));if(a=a.replace(J,""),this.fragment!==a){if(this.fragment=a,""===a&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else{if(!this._wantsHashChange)return this.location.assign(c);this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace))}return b.trigger?this.loadUrl(a):void 0}},_updateHash:function(a,b,c){if(c){var d=a.href.replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash="#"+b}}),g.history=new E;var K=function(a,b){var c=this;var d;d=a&&h.has(a,"constructor")?a.constructor:function(){return c.apply(this,arguments)},h.extend(d,c,b);var e=function(){this.constructor=d};return e.prototype=c.prototype,d.prototype=new e,a&&h.extend(d.prototype,a),d.__super__=c.prototype,d};n.extend=p.extend=z.extend=u.extend=E.extend=K;var L=function(){throw new Error('A "url" property or function must be specified')};var M=function(a,b){var c=b.error;b.error=function(d){c&&c(a,d,b),a.trigger("error",a,d,b)}}}).call(this);
