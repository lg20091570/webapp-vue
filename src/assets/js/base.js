exports.install = function (Vue, options) {
  /**
   * 提示登录的方法
   */
  Vue.prototype.showLoginTips = function (){
    const _this = this ;// 需要注意 onCancel 和 onConfirm 的 this 指向
    this.$vux.confirm.show({
      title:'登录提示',
      content:'您的当前操作需要登录!',
      confirmText:'立即登录',
      // 组件除show外的属性
      onCancel () {
        // 隐藏
        _this.$vux.confirm.hide();
      },
      onConfirm () {
        // 隐藏
          _this.$router.push({ name: 'login' });
          _this.$vux.confirm.hide();
      }
    });
  };

  /**
   * 请求返回失败信息处理
   */
  Vue.prototype.backDefeated = function(json){
    const _this = this ;// 需要注意 onCancel 和 onConfirm 的 this 指向
    if(json.action){
      if(json.action==='login'){
        this.$vux.confirm.show({
          title:'温馨提示',
          content:json.message,
          // 组件除show外的属性
          onCancel () {
            // 隐藏
            _this.$vux.confirm.hide();
          },
          onConfirm () {
            // 隐藏
            _this.$router.push({ name: 'login' });
            _this.$vux.confirm.hide();
          }
        });
      }else if(json.action==='recharge'){
        this.$vux.confirm.show({
          title:'温馨提示',
          content:json.message,
          // 组件除show外的属性
          onCancel () {
            // 隐藏
            _this.$vux.confirm.hide();
          },
          onConfirm () {
            // 隐藏
            _this.$router.push({ name: 'payCheck' });
            _this.$vux.confirm.hide();
          }
        });
      }else if(json.action==='safepwd'){
        this.$vux.confirm.show({
          title:'温馨提示',
          content:json.message,
          // 组件除show外的属性
          onCancel () {
            // 隐藏
            _this.$vux.confirm.hide();
          },
          onConfirm () {
            // 隐藏
            _this.$router.push({ name: 'transactionPassword' });
            _this.$vux.confirm.hide();
          }
        });
      }else if(json.action==='nameCert'){
        this.$vux.confirm.show({
          title:'温馨提示',
          content:json.message,
          // 组件除show外的属性
          onCancel () {
            // 隐藏
            _this.$vux.confirm.hide();
          },
          onConfirm () {
            // 隐藏
            _this.$router.push({ name: 'realName' });
            _this.$vux.confirm.hide();
          }
        });
      }else{
        this.$vux.alert.show(json.message);
      }
    }else{
      this.$vux.alert.show(json.message);
    }
  }
};
