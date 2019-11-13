import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false;
import {getToken} from "./localStorage";
import {login} from './service';
import {Toast} from 'vant';

let getUrlCode = () => {
  var url = window.location.search
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1)
    var strs = str.split("&")
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1])
    }
  }
  return theRequest
};


let initVue=()=>{
  //这个是已经登录的逻辑
  if (getToken()) {
    store.commit('UPDATE_TOKEN', getToken());
    new Vue({
      el: '#app',
      router,
      store,
      components: {App},
      template: '<App/>'
    });
    return;
  };

  //这个是没有token 现在开始 授权 拿用户信息信息
  let code = '';
  let local = window.location.href;
  let appid = 'wx9e4e8c44087bd7ca';
  code = getUrlCode().code;
  if (code == null || code === '') {
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
    return;
  }
  ;
// //开始登录的逻辑
  let $Login = async () => {
    let [err, data] = await login({code});
    if (err !== null) {Toast(err || '系统错误');return;};
    let $token = data.token;
    store.commit('UPDATE_TOKEN', $token);
    new Vue({
      el: '#app',
      router,
      store,
      components: {App},
      template: '<App/>'
    })
  };
  $Login();
};

initVue();



