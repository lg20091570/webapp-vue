import {
	RECORD_USERINFO,
	OUT_LOGIN,
  RECORD_AUTHTOKEN,
  SET_IMG_UPLOAD_CACHE,
  SET_IMG_PATHS,
  SET_IMG_STATUS,
  SET_REGION
} from './mutation-types'

import {setStore, getStore} from '../config/mUtils'

export default {
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
	},
	//退出登录
	[OUT_LOGIN](state) {
		state.userInfo = {};
		state.login = false;
		state.appInfo.authToken='';
	},
  [RECORD_AUTHTOKEN](state, authToken) {
      state.appInfo.authToken=authToken;
  },
  [SET_IMG_UPLOAD_CACHE] (state, arg) {
    state.img_upload_cache = arg;
  },
  [SET_IMG_PATHS] (state, arg) {
    state.img_paths = arg;
  },
  [SET_IMG_STATUS] (state, arg) {
    state.img_status = arg;
  },
  [SET_REGION] (state,arg){
	  state.regionList=arg;
  }
}
