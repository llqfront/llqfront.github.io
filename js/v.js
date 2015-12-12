/**
 * Created by liuliqing on 15/10/26.
 */
;(function(){
    if( typeof(winV) == 'undefined'){
        winV = {};
    }
    winV.addEvent = function(obj,type,fn){
        if(!obj){return null;}
        if(obj.addEventListener){
            obj.addEventListener(type,function (ev){
                var rtn=fn.call(obj,ev);
                if(rtn==false){
                    ev.cancelBubble=true;
                    // ev.stopPropagation ? ev.stopPropagation() : (ev.cancelBubble=true);
                    ev.preventDefault();
                }
            },false);
        }else{
            obj.attachEvent('on'+type,function (){
                var rtn=fn.call(obj,event);
                if(rtn==false){
                    event.cancelBubble=true;
                    return false;
                }
            })
        }
    };
    winV.attr = function(obj, attr, value){
        if(!obj){return null;}
        if(attr.toLowerCase()=='class'){
            attr='className';
        }
        if(arguments.length==2){
            if(obj.attributes[attr]){
                return obj.attributes[attr].nodeValue;
            }else{
                return null;
            }
        }
        else if(arguments.length==3){
            obj.setAttribute(attr,value);
        }
    };
    // 字符串转json
    //winV.newJson = function(str){
    //    var json = (new Function("return " + str))();
    //    return json;
    //}
    //winV.createAjax = function() {
    //    var xhr = null;
    //
    //    //非IE系列浏览器
    //    if(window.XMLHttpRequest){
    //
    //        xhr = new XMLHttpRequest();
    //
    //        //IE系列浏览器
    //    }else if (window.ActiveXObject) {
    //        try {
    //            xhr = new ActiveXObject("microsoft.xmlhttp");
    //        } catch (e) {
    //            try {
    //                xhr = new ActiveXObject("msxml2.XMLHTTP");
    //            } catch (e) {
    //            }
    //        }
    //    }
    //    return xhr;
    //};
    //winV.ajax = function(cfg) {
    //    //type参数,可选
    //    var type = cfg.type;
    //    //url参数，必填
    //    var url = cfg.url;
    //    //data参数可选，只有在post请求时需要
    //    var data = cfg.data;
    //    //datatype参数可选
    //    var dataType = cfg.dataType;
    //    //回调函数可选
    //    var success = cfg.success;
    //    if (type == null) {
    //        //type参数可选，默认为get
    //        type = "get";
    //    }
    //    if (dataType == null) {
    //        //dataType参数可选，默认为text
    //        dataType = "text";
    //    }
    //    // 创建ajax引擎对象
    //    var xhr = winV.createAjax();
    //
    //    xhr.onreadystatechange = function () {
    //        if (xhr.readyState == 1) {
    //            console.log('...')
    //        } else if (xhr.readyState == 4 && xhr.status == 200) {
    //            if (dataType.toUpperCase() == "TEXT") {
    //                if (success != null) {
    //                    //普通文本
    //                    success(xhr.responseText);
    //                }
    //
    //            } else if (dataType.toUpperCase() == "XML") {
    //                if (success != null) {
    //                    //接收xml文档
    //                    success(xhr.responseXML);
    //                }
    //
    //            } else if (dataType.toUpperCase() == "JSON") {
    //                if (success != null) {
    //                    //将json字符串转换为js对象
    //                    // success(eval("("+xhr.responseText+")"));
    //                    success(winV.newJson(xhr.responseText))
    //                }
    //            }
    //            xhr = null;
    //        }
    //    };
    //
    //    //打开
    //    xhr.open(type, url, true);
    //
    //    //发送
    //    // if(type == "GET" || type == "get") {
    //    if (type.toUpperCase() == "GET") {
    //        xhr.send(null);
    //
    //        // }else if (type == "POST" || type == "post") {
    //    } else if (type.toUpperCase() == "POST") {
    //        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    //        xhr.send(data);
    //    }
    //}
    winV.isMeta = function(e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return true;
        var which = e.which, button = e.button;
        if (!which && button !== undefined) {
            return (!button & 1) && (!button & 2) && (button & 4);
        } else if (which === 2) {
            return true;
        } else if (button === 2) {
            return true;
        }
        return false;
    }
    // page click
    var doc = document;
    var wd = window;
    /**
     * 2015-11-12
     * llq
     * update
     * 如果点击不到带有clstag 属性的标签就往上找，到body止
     * **/
    winV.addEvent(doc,'click',function(e){
        var oEvent = e || window.event;
        var oTarget = oEvent.target || oEvent.srcElement;
        if( !e.clientX && !e.clientY && !e.pageX && !e.pageY ) { return; }
        var tag = winV.attr(oTarget,'clstag');
        var link = winV.attr(oTarget,'href');
        var blank = winV.attr(oTarget,'target');
        while (!tag) {
            if (!oTarget || (oTarget.nodeName == 'BODY')) {
                break;
            }
            oTarget = oTarget.parentNode;
            tag = winV.attr(oTarget,'clstag');
            link = winV.attr(oTarget,'href');
        }
        if(tag){
            var arr = tag.split('|');
            //["send", "event", "weiboshare", "click"]
            ga(arr[0],arr[1],arr[2],arr[3]);
            if (link && /http:\/\/.*?/.exec(link) && blank !== '_blank' && !winV.isMeta(e)) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                setTimeout(function () {
                    wd.location.href = link;
                }, 200);
            }
        }
    })
    // page pv
    //winV.ajax({
    //    type:"post",
    //    url:"/service/wmsfd/daydaysController/addDaydaysPv",
    //    dataType:"json",
    //    success:function(data){}
    //});
})();
