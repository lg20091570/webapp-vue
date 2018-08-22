/**
 * app回调方法
 */

/**
 * App扫码成功返回调用方法(提供给APP处理成功后回调页面方法)
 * @param data 扫描结果
 * 调用示例  javascript:AppBridge.onScanQRCodeSuccess('abc123');
 */
AppBridge.onScanQRCodeSuccess = function(data) {
	if (AppBridge.callback.onScanQRCodeResult.success) {
		AppBridge.callback.onScanQRCodeResult.success.call(this, data);
	}
};
/**
 * App扫码失败返回调用方法(提供给APP处理成功后回调页面方法)
 * @param code 返回错误码
 * @param message 错误提示
 */
AppBridge.onScanQRCodeError = function(code, message) {
	if (AppBridge.callback.onScanQRCodeResult.error) {
		AppBridge.callback.onScanQRCodeResult.error.call(this, code, message);
	}
};
/**
 * App扫码用户取消返回调用方法(提供给APP处理成功后回调页面方法)
 */
AppBridge.onScanQRCodeCancel = function() {
	if (AppBridge.callback.onScanQRCodeResult.cancel) {
		AppBridge.callback.onScanQRCodeResult.cancel.call(this);
	}
};


//app获取缓存回调
/**
 * 获取app缓存成功回调
 * @param data 返回缓存大小（包含单位）
 */
AppBridge.getCacheSizeSuccess = function(data){
	if(AppBridge.callback.onGetAppCacheResult.success){
		AppBridge.callback.onGetAppCacheResult.success.call(this,data);
	}
};
/**
 * 获取app缓存失败
 * @param message 错误消息
 */
AppBridge.getCacheSizeError = function(message){
	if(AppBridge.callback.onGetAppCacheResult.error){
		AppBridge.callback.onGetAppCacheResult.error.call(this,message);
	}
};

/**
 * 清除app缓存成功
 */
AppBridge.clearCacheSuccess=function(){
	if(AppBridge.callback.onClearAppCacheResult.success){
		AppBridge.callback.onClearAppCacheResult.success.call(this);
	}
};
/**
 * 清除app缓存失败
 * @param message 错误消息
 */
AppBridge.clearCacheError=function(message){
	if(AppBridge.callback.onClearAppCacheResult.error){
		AppBridge.callback.onClearAppCacheResult.error.call(this,message);
	}
};
/**
 * 微信登录成功
 * @param message 错误消息
 */
AppBridge.weiXinLoginSuccess=function(data){
    if(AppBridge.callback.onWeixinLoginResult.success){
        AppBridge.callback.onWeixinLoginResult.success.call(this,data);
    }
};
/**
 * 微信登录取消授权
 * @param message 错误消息
 */
AppBridge.weiXinLoginCancel=function(){
    if(AppBridge.callback.onWeixinLoginResult.cancel){
        AppBridge.callback.onWeixinLoginResult.cancel.call(this);
    }
};
/**
 * 微信登录失败
 * @param message 错误消息
 */
AppBridge.weiXinLoginError=function(message){
    if(AppBridge.callback.onWeixinLoginResult.error){
        AppBridge.callback.onWeixinLoginResult.error.call(this,message);
    }
};

/**
 * 选择图片成功
 * @param data 返回的图片数据
 */
AppBridge.choicePicSuccess=function(data){
  if(AppBridge.callback.onChoicePicResult.success){
    AppBridge.callback.onChoicePicResult.success.call(this,data);
  }
};
/**
 * 选择图片失败
 * @param message 错误消息
 */
AppBridge.choicePicError=function(message){
  if(AppBridge.callback.onChoicePicResult.error){
    AppBridge.callback.onChoicePicResult.error.call(this,message);
  }
};

/**
 * 微信支付成功回调
 */
AppBridge.weChatPaySuccess=function(){
  if(AppBridge.callback.onWeChatPayResult.success){
    AppBridge.callback.onWeChatPayResult.success.call(this);
  }
};
/**
 * 微信支付错误
 * @param message
 */
AppBridge.weChatPayError=function(message){
  if(AppBridge.callback.onWeChatPayResult.error){
    AppBridge.callback.onWeChatPayResult.error.call(this,message);
  }
};
/**
 * 微信支付取消
 */
AppBridge.weChatPayCancel=function(){
  if(AppBridge.callback.onWeChatPayResult.cancel){
    AppBridge.callback.onWeChatPayResult.error.cancel(this);
  }
};













