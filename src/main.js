// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/base.css'  //导入重置样式
import store from '@/store'
import './common/utils/touchEvent'; //导出自己的手势库 自定义指令
import fastclick from 'fastclick';
import './icons';
import 'vant/lib/index.css';
import {Swipe,SwipeItem,Toast,Field,Cell,CellGroup } from 'vant';
import VueKeepScrollPosition from 'vue-keep-scroll-position';
Vue.use(VueKeepScrollPosition);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.prototype.$toast = Toast;
Vue.config.productionTip = false;
fastclick.attach(document.body)
// xhq 2019/4/25 这个是兼容ios input 弹窗 不聚焦的问题
fastclick.prototype.focus = function(targetElement) {
  let u=navigator.userAgent;
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let length;
// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (isiOS&&targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
