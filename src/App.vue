<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <div class="poorNetWork" v-if="poorNetWork">
      <span class="bottom_20 font_30">当前网络不佳</span>
      <a class="theme_c font_32" href="javascript:void(0)" onclick="location.reload()">刷新重试</a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        poorNetWork:false, // 网络不佳
        isIos:AppBridge.isIos(),
      }
    },
    mounted(){
      // 返回状态栏的颜色码
      if(AppBridge.isApp()){
        if(AppBridge.isIos()){
          AppBridge.changeStatusBarColor('#ffffff');
        }else if(AppBridge.isAndroid()){
          AppBridge.changeStatusBarColor('#000000');
        }
      }
    },
    watch:{
      $route(){
        let image = new Image();
        let t1 = new Date();
        let _this = this;
        image.src='static/images/network.png?t='+t1.valueOf(); // size:1.1kb
        image.onload = function () {
          let t2 = new Date();
          let dis = t2 - t1;
          let lower = 1.8; // 低于这个网速的都不要显示了(根据pc端的slow 3G来写的)
          let speed = (1.1/ (dis/1000)).toFixed(5)*8; // 实际网速=逻辑网速/8
          // console.log('当前的网速是'+speed+'kb/s');
          if(speed<lower){
            _this.poorNetWork=true
          }else{
            _this.poorNetWork=false
          }
        }
      }
    }
  }
</script>

<style lang="less">
  /*取消长按复制*/
  div,span,p,em,li,img,a,h1,h2,h3,h4,h5,h6,strong{
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  // 网络不佳
  .poorNetWork{ position: fixed; width: 100vw; height: 100vh; top: 0; left: 0; background:#fff; z-index: 334; display: flex; justify-content: center; align-items: center; flex-direction: column; }

</style>
