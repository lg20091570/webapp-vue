import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex);

const state = {
	userInfo: null, //用户信息
	login: false,//是否已经登录
	inited : false, //是否已初始化
	firstlogincheckd:false, //第一次检测登录
	appInfo:{
        authToken:'',//登录凭证
        deviceName:'',//设备名称
        deviceId:'',//设备唯一标识
        channelId:'',//百度云推送id
        versionName:'',//版本名称
        showStartPage:'' // 第一次进入
	},
  img_upload_cache: [],//上传图片缓存（base64）
  img_paths: [],//上传成功图片路径缓存
  img_status: 'ready' ,// 上传状态 ready selected uploading finished allfinished
  regionList:[]//region数据保存
};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
