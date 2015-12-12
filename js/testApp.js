 function testAppleOrAndriod(){
    function is_wx(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    function is_ios_android() {
        var ua = navigator.userAgent.toLowerCase();
        if ((/iphone|ipad|ipod/).test(ua)) {
            return 'ios';
        } else if ((/android/).test(ua)) {
            return 'android';
        } else {
            return 'other';
        }
    }

    if(is_ios_android() == 'ios'){
        isTestAppApple();
        }else{
        isTestAppAndriod();
        }
        // 判断是否下载APP  下载好了直接进入 本地app. 没有下载就去跳转到下载页面
        //
    function isTestAppAndriod(){
        if ( is_wx() ) {
            window.location.href = "http://fusion.qq.com/cgi-bin/qzapps/unified_jump?appid=12118072&from=singlemessage&isTimeline=false&actionFlag=0&params=pname%3Dcom.jiyoutang.dailyup%26versioncode%3D10%26channelid%3D%26actionflag%3D0&isappinstalled=0";
        }
        else{
            var tUrl= "dailyupapp://com.jiyoutang.dailyup";
            var timeout;
            var  t = 500;
            var  hasApp = true;
            setTimeout(function () {
                if (hasApp) {
                  return false;
                   // 启动app
                   window.location.href = "dailyupapp://com.jiyoutang.dailyup";
                } else {
                   // 下载app
                    document.location.href = "http://www.daydays.com/source/upgrade/tiantianxiangshangApk/ttxs-jiyoutang-release.apk";
                }
                document.body.removeChild(ifr);
            }, 1000);
            var t1 = Date.now();
            var ifr = document.createElement("iframe");
            ifr.setAttribute('src', tUrl);
            ifr.setAttribute('style', 'display:none');
            document.body.appendChild(ifr);
            timeout = setTimeout(function () {
                var t2 = Date.now();
                if (!t1 || t2 - t1 < t + 100) {
                    hasApp = false;
                }
            }, t);
        }
    }
    // 跳转苹果app
    function isTestAppApple(){
        function openIos(url, callback) {
            if (!url) {
                return;
            }
            var node = document.createElement('iframe');
            node.style.display = 'none';
            var body = document.body;
            var timer;
            var clear = function(evt, isTimeout) {
                (typeof callback==='function') &&  callback(isTimeout);
                window.removeEventListener('pagehide', hide, true);
                window.removeEventListener('pageshow', hide, true);
                if (!node) {
                    return;
                }

                node.onload = null;
                body.removeChild(node);
                node = null;

            };
            var hide = function(e){
                clearTimeout(timer);
                clear(e, false);
            };
            window.addEventListener('pagehide', hide, true);
            window.addEventListener('pageshow', hide, true);
            node.onload = clear;
            node.src = url;
            body.appendChild(node);
            var now = +new Date();
            //如果事件失败，则1秒设置为空
            timer = setTimeout(function(){
                timer = setTimeout(function(){
                    var newTime = +new Date();
                    if(now-newTime>1300){
                        clear(null, false);
                    }else{
                        clear(null, true);
                    }

                }, 1200);
            }, 60);
        }
        if (is_wx()) {
            // $('.load-pop').show();
            // $('#popyun').show();
            window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.jiyoutang.dailyup";
        } else {
            openIos('com.daydays.into://', function (t) {
                if (t) {
                    window.location.href = "https://itunes.apple.com/us/app/tian-tian-xiang-shang/id1037735995?l=zh&ls=1&mt=8";
                } else {
                    info('invoke success');
                }
            });
        }
    }
}