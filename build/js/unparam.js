/* unparam.js Date:2015-12-13 22:42:17 */
!function(a){a.unparam=function(b){var c,d,e=/\[(.*?)\]/g,f=/(.+?)\[/,g={};return"string"!=(d=a.type(b))||"string"==d&&!d.length?{}:(c=decodeURIComponent(b).split("&"),!(d=c.length)||1==d&&""===d?g:(a.each(c,function(b,c){if(c.length){d=c.split("=");var j,k,h=d.shift(),i=d.join("=").replace(/\+/g," "),l=[];if(h.length){for(;d=e.exec(h);)l.push(d[1]);if(!(j=l.length))return void(g[h]=i);j--,d=f.exec(h),d&&(h=d[1])&&h.length&&("object"!=a.type(g[h])&&(g[h]={}),k=g[h],a.each(l,function(b,c){(d=c).length||(d=0,a.each(k,function(a){!isNaN(a)&&a>=0&&a%1===0&&a>=d&&(d=Number(a)+1)})),b==j?k[d]=i:k="object"!=a.type(k[d])?k[d]={}:k[d]}))}}}),g))}}(jQuery);
