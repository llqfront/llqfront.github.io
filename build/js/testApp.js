/* testApp.js Date:2015-12-12 22:36:50 */
function testAppleOrAndriod(){function a(){var a=navigator.userAgent.toLowerCase();return"micromessenger"==a.match(/MicroMessenger/i)?!0:!1}function b(){var a=navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(a)?"ios":/android/.test(a)?"android":"other"}"ios"==b()?d():c();function c(){if(a())window.location.href="http://fusion.qq.com/cgi-bin/qzapps/unified_jump?appid=12118072&from=singlemessage&isTimeline=false&actionFlag=0&params=pname%3Dcom.jiyoutang.dailyup%26versioncode%3D10%26channelid%3D%26actionflag%3D0&isappinstalled=0";else{var b="dailyupapp://com.jiyoutang.dailyup";var c;var d=500;var e=!0;setTimeout(function(){return e?!1:(document.location.href="http://www.daydays.com/source/upgrade/tiantianxiangshangApk/ttxs-jiyoutang-release.apk",void document.body.removeChild(g))},1e3);var f=Date.now();var g=document.createElement("iframe");g.setAttribute("src",b),g.setAttribute("style","display:none"),document.body.appendChild(g),c=setTimeout(function(){var a=Date.now();(!f||d+100>a-f)&&(e=!1)},d)}}function d(){function b(a,b){if(a){var c=document.createElement("iframe");c.style.display="none";var d=document.body;var e;var f=function(a,e){"function"==typeof b&&b(e),window.removeEventListener("pagehide",g,!0),window.removeEventListener("pageshow",g,!0),c&&(c.onload=null,d.removeChild(c),c=null)};var g=function(a){clearTimeout(e),f(a,!1)};window.addEventListener("pagehide",g,!0),window.addEventListener("pageshow",g,!0),c.onload=f,c.src=a,d.appendChild(c);var h=+new Date;e=setTimeout(function(){e=setTimeout(function(){var a=+new Date;h-a>1300?f(null,!1):f(null,!0)},1200)},60)}}a()?window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jiyoutang.dailyup":b("com.daydays.into://",function(a){a?window.location.href="https://itunes.apple.com/us/app/tian-tian-xiang-shang/id1037735995?l=zh&ls=1&mt=8":info("invoke success")})}}
