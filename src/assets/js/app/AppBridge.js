/**
 * app调用主方法包
 */

AppBridge = {};
/**
 * App全局配置
 */
AppBridge.config = {
  client: 'mobile',// android/ios/weixin/mobile
  webclient: 'android', //web客户端类型,// android /ios /web
  initCallback: null,
  phoneModel: 'web'
};


AppBridge.appInit = function (params) {
  if (AppBridge.config.initCallback) AppBridge.config.initCallback.call(this, params);
};

/**
 * 是否app简写
 */
AppBridge.isApp = function () {
  if (AppBridge.config.client == 'android' || AppBridge.config.client == 'ios') {
    return true;
  } else {
    return false;
  }
};
/**
 * 是否Android简写
 */
AppBridge.isAndroid = function () {
  if (AppBridge.config.client == 'android') {
    return true;
  } else {
    return false;
  }
};

/**
 * 是否ios简写
 */
AppBridge.isIos = function () {
  if (AppBridge.config.client == 'ios') {
    return true;
  } else {
    return false;
  }
};

/**
 * 是否微信浏览器简写
 */
AppBridge.isWeixin = function () {
  if (AppBridge.config.client == 'weixin') {
    return true;
  } else {
    return false;
  }
};
/**
 * 是否Android 浏览器
 * @returns {boolean}
 */
AppBridge.isAndroidWeb = function () {
  if (AppBridge.config.webclient == 'android') {
    return true;
  } else {
    return false;
  }
};

/**
 * 是否ios浏览器
 * @returns {boolean}
 */
AppBridge.isIosWeb = function () {
  if (AppBridge.config.webclient == 'ios') {
    return true;
  } else {
    return false;
  }
};
/**
 * 是否移动端（非微信）
 */
AppBridge.isMobile = function () {
  if (AppBridge.config.client == 'mobile') {
    return true;
  } else {
    return false;
  }
};

/**
 * app全局回调方法
 */
AppBridge.callback = {
  /**
   * 扫描二维码回调方法
   */
  onScanQRCodeResult: {
    // data 为扫描结果
    success: function (data) {
    },
    // code 为错误码，message 为提示信息
    error: function (code, message) {
    },
    // 用户取消扫描方法
    cancel: function () {
    }
  },
  /**
   * 获取应用缓存回调方法
   */
  onGetAppCacheResult: {
    // data为应用缓存大小
    success: function (data) {
    },
    // message为获取失败提示信息
    error: function (message) {
    }
  },
  /**
   * 清除应用缓存回调方法
   */
  onClearAppCacheResult: {
    success: function () {
    },
    // message为清除失败提示信息
    error: function (message) {
    }
  },
  //微信登录回调
  onWeixinLoginResult: {
    // data 为微信交互获取到的token
    success: function (data) {
    },
    // message 为错误提示信息
    error: function (message) {
    },
    // 用户取消扫描方法
    cancel: function () {
    }
  },
  //微信支付回调
  onWeChatPayResult: {
    success: function () {
    },
    // message 为错误提示信息
    error: function (message) {
    },
    // 用户取消支付
    cancel: function () {
    }
  },
  /**
   * 选择图片回调
   */
  onChoicePicResult: {
    //data为固定格式类型的json数据
    success: function (data) {
    },
    // message为选择失败的提示信息
    error: function (message) {
    }
  }
};


let ua = navigator.userAgent.toLowerCase();
//初始化app配置
if (window.App) {
  AppBridge.config.client = 'android';//app/weixin/mobile
  AppBridge.config.webclient = 'android';
} else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.isnrdatad1f5b5fade) {
  AppBridge.config.client = 'ios';//app/weixin/mobile
  AppBridge.config.webclient = 'ios';
} else if (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger') {
  AppBridge.config.client = 'weixin'; //app/weixin/mobile
  if (/iphone|ipad|ipod/.test(ua)) {
    AppBridge.config.webclient = 'ios';
  } else if (/android/.test(ua)) {
    AppBridge.config.webclient = 'android';
  }
} else {
  AppBridge.config.client = 'mobile'; //app/weixin/mobile
  if (/iphone|ipad|ipod/.test(ua)) {
    AppBridge.config.webclient = 'ios';
  } else if (/android/.test(ua)) {
    AppBridge.config.webclient = 'android';
  } else {
    AppBridge.config.webclient = 'web';
  }
}
;

//判断机型

var ratio = window.devicePixelRatio || 1;
var screen = {
  width: window.screen.width * ratio,
  height: window.screen.height * ratio
};
if (AppBridge.isIosWeb() && screen.width == 1125 && screen.height === 2436) {
  AppBridge.config.phoneModel = 'iphoneX';
}

