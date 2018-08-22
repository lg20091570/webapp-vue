import {
  baseUrl
} from './env'
import Vue from 'vue'
import store from '../store/'
import VueResource from 'vue-resource'

Vue.use(VueResource);
export default async(url = '', data = {}, type = 'POST', method = 'other') => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == 'GET') {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }

  if (window.fetch && method == 'fetch') {
    console.info(' http with fetch');
    let requestConfig = {
      credentials: 'include',
      method: type,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors",
      cache: "force-cache"
    }

    if (type == 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson
    } catch (error) {
      throw new Error(error)
    }
  } else {
    console.info(' http with POST');
    return new Promise((resolve, reject) => {
      Vue.http.options.xhr = { withCredentials: true };
      Vue.http.options.emulateJSON = true;
      Vue.http.interceptors.push((request, next) => {
        request.credentials = true;
        next();
      });
      Vue.http.post(url, data, {
        emulateJSON:method=='file'?false:true,
        params : {},
        headers: {
          'Content-type': 'application/json',
          'AUTHTOKEN': store.state.appInfo.authToken,
          'SECONDTOKEN': store.state.appInfo.secondToken,
          'SOURCE': AppBridge.isApp() ? (AppBridge.isAndroid() ? "ANDROID" : "IOS") : "MOBIEL",
          'DEVICEID': store.state.appInfo.deviceId,
          'CHANNELID': store.state.appInfo.channelId,
          'DEVICENAME': store.state.appInfo.deviceName,
          'VERSIONNAME': store.state.appInfo.versionName,
          'UAINFO': navigator.userAgent + ';YNZX-APP-' + (AppBridge.isApp() ? (AppBridge.isAndroid() ? "ANDROID" : "IOS") : "MOBIEL")
        }
      }).then(function(response){
        if (response.status == 200) {
          let obj = response.body
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj);
          }
          resolve(obj);
        } else {
          reject(response);
        }
      }, function(response){
        console.error(response);
        reject(response);
      });
    })
  }
}
