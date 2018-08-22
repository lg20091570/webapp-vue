// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import FastClick from 'fastclick'
import store from './store'
import base from './assets/js/base'
import { AlertPlugin, ToastPlugin ,LoadingPlugin,ConfirmPlugin  } from 'vux'
import {routerMode} from './config/env'
import './assets/css/common.css'
import './assets/js/app/AppBridge.js'
import './assets/js/app/AppCall.js'
import './assets/js/app/AppCallback.js'
import './assets/js/formatter.js'
import './assets/js/directive.js'
import {getUser} from './service/getData'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}


Vue.use(VueRouter);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);
Vue.use(base);
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
});

var checkLogin = function (to, from, next) {
  let checklogin = false;
  let matched=to.matched;
  //遍历父类的路由，判断是否需要登录
  for(let i=0;i<matched.length;i++){
    if(matched[i].meta.requireAuth){
      checklogin=true;
      break;
    }
  }
  if (checklogin) { // 判断该路由是否需要登录权限
    if (store.state.login) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
};

Vue.config.productionTip = true;
/*页面拦截器*/
router.beforeEach((to, from, next) => {
  /*if (!store.state.firstlogincheckd) {
    getUser().then(function (res) {
      //console.log('getuser'+Date.now());
      if (res.success) {
        store.state.userInfo = res.data;
        store.state.login = true;
      } else {
        store.state.userInfo = {};
        store.state.login = false;
      }
      store.state.firstlogincheckd = true;
      checkLogin(to, from, next);
    }, function (response) {
      console.warn(response);
      store.state.userInfo = {};
      store.state.login = false;
      checkLogin(to, from, next);
    });
  }else {
    checkLogin(to, from, next);
  }*/next();
});
let setRem = function (){
  let hWidth = document.documentElement.getBoundingClientRect().width;
  document.documentElement.style.fontSize=hWidth/7.5 +"px"
};
/* eslint-disable no-new */
let init = function () {
  new Vue({
    router,
    store
  }).$mount('#app');
  setRem();
};

if (AppBridge.isApp()) {
  AppBridge.config.initCallback = function (params) {
    if (!store.state.inited) {
      store.state.appInfo=JSON.parse(params);
      //.....
      init();
      store.state.inited = true;
    }
  };

} else {
  init();
}

