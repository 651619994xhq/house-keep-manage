// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
//   WeixinJSBridge.call('hideToolbar');        // 隐藏底部状态栏
//   WeixinJSBridge.call('hideOptionMenu');     // 隐藏右上角的三个点的选项
//   WeixinJSBridge.call('showToolbar');        // 显示底部状态栏
//   WeixinJSBridge.call('showOptionMenu');     // 显示右上角的三个点的选项
// });

import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/base.css'  //导入重置样式
import store from '@/store'
import './common/utils/touchEvent'; //导出自己的手势库 自定义指令
import './icons';
import './filters/index'
// import '@/mockData/index';  //导入mockData 模块
import './common/vant/index';
Vue.config.productionTip = false;
import './common/utils/fastclick';
import {getToken} from "./common/utils/localStorage";
//如果localStorage，cookie中 存在 token 更新vuex 数据
if(getToken()){
  store.commit('UPDATE_TOKEN',getToken());
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
