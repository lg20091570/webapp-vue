/**
 * app调用主方法包
 */

/**
 * 调用APP扫码
 *
 * @param callback
 *            对应AppBridge.callback.onScanQRCodeResult方法
 */
AppBridge.doScanQRCode = function (callback) {
  AppBridge.callback.onScanQRCodeResult = callback;
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.scanQRCode();
    } else {
      window.webkit.messageHandlers.scanQRCode.postMessage(null);
    }
  } else if (AppBridge.isWeixin()) {
    wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        AppBridge.onScanQRCodeSuccess(result);
      }
    });
  } else {
    alert('请在app或者微信浏览器上使用该功能！');
  }
};

/**
 * 调用app退出方法 该方法只有app可以调用
 *
 * @param msg
 *            退出提示信息
 */
AppBridge.doExit = function (msg) {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.exit(msg ? msg : null);
    } else {
      window.webkit.messageHandlers.exit.postMessage(msg ? msg : null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 关闭当前activity 该方法只有app可以调用
 * 该方法在二级页面上调用，即主页面调用AppBridge.navigateTo()方法打开的页面才可调用该方法，否则会报错
 */
AppBridge.doClose = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.close();
    } else {
      window.webkit.messageHandlers.close.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};
/**
 * app新窗口打开连接 若非app调用该方法，则直接打开链接
 *
 * @param url
 *            完整请求链接地址
 */
AppBridge.navigateTo = function (url) {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.navigateTo(url);
    } else {
      window.webkit.messageHandlers.navigateTo.postMessage(url);
    }
  } else {
    window.location.href = url;
  }
};
/**
 * 获取缓存大小
 * @param callback 该参数对应AppBridge.callback.onGetAppCacheResult方法
 */
AppBridge.getCacheSize = function (callback) {
  AppBridge.callback.onGetAppCacheResult = callback;
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.getCacheSize();
    } else {
      window.webkit.messageHandlers.getCacheSize.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 清除应用缓存
 * @param callback 该参数对应AppBridge.callback.onClearAppCacheResult方法
 */
AppBridge.clearCache = function (callback) {
  AppBridge.callback.onClearAppCacheResult = callback;
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.clearCache();
    } else {
      window.webkit.messageHandlers.clearCache.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 获取app登录凭证
 * @returns string  若返回为空字符串，则说明未登录
 */
AppBridge.getAuthToken = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getAuthToken();
    } else {
      return window.webkit.messageHandlers.getAuthToken.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 设置app登录凭证
 * @param authtoken
 */
AppBridge.setAuthToken = function (authtoken) {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.setAuthToken(authtoken)
    } else {
      window.webkit.messageHandlers.setAuthToken.postMessage(authtoken);
    }
  } else {
    alert('请在app调用该功能！');
  }
};


/**
 * 获取app二级凭证 特殊需求需要多个凭证的
 * @returns string  若返回为空字符串，则说明未登录
 */
AppBridge.getSecondToken = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getSecondToken();
    } else {
      return window.webkit.messageHandlers.getSecondToken.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 设置app二级凭证 特殊需求需要多个凭证的
 * @param authtoken
 */
AppBridge.setSecondToken = function (authtoken) {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.setSecondToken(authtoken)
    } else {
      window.webkit.messageHandlers.setSecondToken.postMessage(authtoken);
    }
  } else {
    alert('请在app调用该功能！');
  }
};


/**
 * 微信登录
 * @param callback
 */
AppBridge.doWeiXinLogin = function (callback, weiXinUrl) {
  AppBridge.callback.onWeixinLoginResult = callback;
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.doWeiXinLogin();
    } else {
      window.webkit.messageHandlers.doWeiXinLogin.postMessage(null);
    }
  } else if (AppBridge.isWeixin()) {
    window.location.href = weiXinUrl;
  } else {
    alert('请在app或者微信浏览器上使用该功能！');
  }
};

/**
 * 获取设备唯一标识
 * @returns {*}
 */
AppBridge.getDeviceId = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getDeviceId();
    } else {
      return window.webkit.messageHandlers.getDeviceId.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 获取设备百度云推送id
 * @returns {*}
 */
AppBridge.getChannelId = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getChannelId();
    } else {
      return window.webkit.messageHandlers.getChannelId.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};
/**
 * 获取设备版本号
 * @returns {*}
 */
AppBridge.getVersionName = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getVersionName();
    } else {
      return window.webkit.messageHandlers.getVersionName.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};
/**
 * 获得设备版本号
 * @returns {*}
 */
AppBridge.getDeviceName = function () {
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      return App.getDeviceName();
    } else {
      return window.webkit.messageHandlers.getDeviceName.postMessage(null);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 选择图片
 * @param num 最大张数
 * @param callback 该参数对应AppBridge.callback.onChoicePicResult 方法
 * @param isSingle 是否单图模式
 */
AppBridge.choicePic = function (num, isSingle, callback) {
  if (callback) {
    AppBridge.callback.onChoicePicResult = callback;
  }
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.choicePic(num, isSingle);
    } else {
      window.webkit.messageHandlers.choicePic.postMessage(num + ';' + isSingle);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 微信支付
 * @param jsonarray 微信支付所需参数
 *  request.appId = data.getString("appid");
 * request.partnerId = data.getString("partnerid");
 * request.prepayId= data.getString("prepayid");
 * request.packageValue = data.getString("package");
 * request.nonceStr= data.getString("noncestr");
 * request.timeStamp= data.getString("timestamp");
 * request.sign= data.getString("sign");
 * @param callback 该参数对应AppBridge.callback.onWeChatPayResult 方法
 */
AppBridge.onWeChatPay = function (jsonarray, callback) {
  if (callback) {
    AppBridge.callback.onWeChatPayResult = callback;
  }
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.onWeChatPay(jsonarray);
    } else {
      window.webkit.messageHandlers.onWeChatPay.postMessage(jsonarray);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 用第三方浏览器打开页面
 * @param url 网址
 */
AppBridge.browserShare=function(url){
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.browserShare(url);
    } else {
      window.webkit.messageHandlers.browserShare.postMessage(url);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 打开分享面板
 * @param title
 * @param desc
 * @param imageurl
 * @param url
 */
AppBridge.share=function(title,desc ,imageurl,url){
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.share(title,desc ,imageurl,url);
    } else {
      let obj={
        title:title,
        desc:desc,
        imageurl:imageurl,
        url:url
      };
      window.webkit.messageHandlers.share.postMessage(JSON.stringify(obj));
    }
  } else {
    alert('请在app调用该功能！');
  }
};

/**
 * 单渠道分享
 * @param title
 * @param desc
 * @param imageurl
 * @param url
 * @param sharename qq qzone weixin timeline
 */
AppBridge.shareSingle=function(title,desc ,imageurl,url,sharename){
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.shareSingle(title,desc ,imageurl,url,sharename);
    } else {
      let obj={
        title:title,
        desc:desc,
        imageurl:imageurl,
        url:url,
        sharename:sharename
      };
      window.webkit.messageHandlers.shareSingle.postMessage(JSON.stringify(obj));
    }
  } else {
    alert('请在app调用该功能！');
  }
};


/**
 * 改变状态栏颜色
 * @param color 颜色码 六位  如 #ffffff
 */
AppBridge.changeStatusBarColor=function(color){
  if (AppBridge.isApp()) {
    if (AppBridge.isAndroid()) {
      App.changeStatusBarColor(color);
    } else {
      window.webkit.messageHandlers.changeStatusBarColor.postMessage(color);
    }
  } else {
    alert('请在app调用该功能！');
  }
};

