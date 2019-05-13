var customFn = {
	//运动框架，四个参数，第一个要运动的元素，第二，要变化的值，注意此处是个json对象，第三个是要运动的速度，第四个是链式运动的函数
	cartoon: function (el, json, s, fn) {
		clearInterval(el.timer);	//开启定时器前线清除上个定时器
		el.timer = setInterval(function () {	//开启一个定时器
			var isStop = true;
			for (var attr in json) {	//循环参数里的json对象	
			var curStyle = null;	// 声明一个空对象，用来存储当前元素的值
			if(attr === 'opacity'){	// 如果参数是opacity，表示要改变透明度的变化,0-100的透明度，0是透明，100是百分百显示
				curStyle = Math.round(parseFloat(customFn.getCss(el, attr))*100);	//parseFloat是保留小数，Math.round是四舍五入
				//之所以要用Math.round，就是考虑getCss取出来的数会有小数，所以让他四舍五入
			} else {
				curStyle = parseInt(customFn.getCss(el, attr));	//parseInt是取整
			}		 
			var speed = (json[attr] - curStyle) / s;	//计算速度
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);	//如果speed大于0就向上取整，小于0向下取整
				if (curStyle !== json[attr]) {	//如果当前元素的值没有等于目标值
					isStop = false;		//把isStop设置为false
				}
				if (attr === 'opacity') {	//如果属性为opacity透明度，则单独设置属性
					el.style[attr] = (curStyle + speed) / 100;
					el.style.filter = 'alpha(opacity:'+(curStyle+speed)+')';
				} else {	//不是的采用原来设置的方式
					el.style[attr] = curStyle + speed + 'px';	
				}
				if (isStop) {	//只有isStop为true,才停止定时器
					clearInterval(el.timer);
					if (fn) fn();	//判断用户有没有传入链式函数
				}
			}	
		}, 30)
	},
	getCss: function (el, attr) {
		if (el.currentStyle) {
			return el.currentStyle[attr];
		} else {
			return getComputedStyle(el, null)[attr];
		}
	},
	
  /*设置cookie
    * @param name cookie的名称
    * @param value cookie的值
    * @param day cookie的过期时间
   	*注意：expires使用GMT或UTC格式的时间， 我这里没有指定路径(path)和域(domain)，  当没有指定路径时默认为当前路径下，
   	*如对 于“https://home.cnblogs.com/u/maderlzp/”下设置的cookie，其path为"/u/maderlzp"， 其domain为当前域名“home.cnblogs.com”。*/
   	// escape(value)对字符编码
    setCookie: function (name, value, day) {
        if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
	        var expires = day * 24 * 60 * 60 * 1000;
	        var date = new Date(+new Date()+expires);
	        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
        } else {
         	document.cookie = name + "=" + escape(value);
        }
     },
    /**
    * 获取对应名称的cookie
    * @param name cookie的名称
    * @returns null 不存在时，返回null
    *"(^| )" + name + "=([^;]*)(;|$)"  (^| )匹配cookie开头或空格（cookie键值对之间用分号空格隔开），
    *也就是cookie键值对的开始。接着是cookie的名称name，（[^;]*）匹配除分号以外的任意字符，也就是cookie键值对的值。
    *最后(;|$)匹配分号或整个cookie的结尾，也就是cooke键值对的结尾*/
    //unescape(arr[2])解码
    getCookie: function (name) {
				let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      	let arr = document.cookie.match(reg);       
       	if (arr){
       		return unescape(arr[2]);
        } else {
    	 	return null;
    	}       
    },
    /**
     * 删除cookie
     * @param name cookie的名称
     */
    delCookie: function (name) {
			customFn.setCookie(name, ' ', -1);
    },
    // 数据检测方法 检测返回值是以字符串形式： [object String],[object Array],[object Function],[object Object],[object Null]
    // [object RegExp] [object Undefined]
    dataType: function (type){
        var dataType = Object.prototype.toString;
            return dataType.call(type)
    },
    // 解析url数据传参
    queryUrl: function (url) {
    	var objUrl = {};
    	var urlData = url.split('?')[1];
    	if (urlData) {
    		var urlArr = urlData.split('&');
    		for (var i = 0, len = urlArr.length; i < len; i++) {
    			var curArr = urlArr[i].split('=');
    			objUrl[curArr[0]] = curArr[1]
    		}
    		return objUrl
    	}    	
    },
    browser: {	// 检测浏览器类型
		    versions:function(){
		    var u = window.navigator.userAgent;	// 获取浏览器信息
		    return {
		        trident: u.indexOf('Trident') > -1, //IE内核
		        presto: u.indexOf('Presto') > -1, //opera内核
		        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		        gecko: u.indexOf('Firefox') > -1, //火狐内核
		        mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
		        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
		        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
		        iPad: u.indexOf('iPad') > -1, //是否为iPad
		        webApp: u.indexOf('Safari') === -1 ,//是否为web应用程序，没有头部与底部
		        weixin: u.indexOf('MicroMessenger') === -1 //是否为微信浏览器
		        };
		    }()
		}
}

export default customFn;