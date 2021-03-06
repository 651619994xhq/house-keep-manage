import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

const index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
};
const home = (resolve) => {
  import('@/components/home/index').then((module) => {
    resolve(module)
  })
};
const mine = (resolve) => {
  import('@/components/mine/index').then((module) => {
    resolve(module)
  })
};
const login = (resolve) => {
  import('@/components/login/index').then((module) => {
    resolve(module)
  })
};
const appointment = (resolve) => {
  import('@/components/appointment/index').then((module) => {
    resolve(module)
  })
};
//签约
const signContract = (resolve) => {
  import('@/components/signContract/index').then((module) => {
    resolve(module)
  })
};
const personInfo = (resolve) => {
  import('@/components/personInfo/index').then((module) => {
    resolve(module)
  })
};
const myCollect = (resolve) => {
  import('@/components/myCollect/index').then((module) => {
    resolve(module)
  })
};
const order = (resolve) => {
  import('@/components/order/index').then((module) => {
    resolve(module)
  })
};
const orderDetail = (resolve) => {
  import('@/components/orderDetail/index').then((module) => {
    resolve(module)
  })
};
const updatePhone = (resolve) => {
  import('@/components/updatePhone/index').then((module) => {
    resolve(module)
  })
};

//简历
const personResume = (resolve) => {
  import('@/components/personResume/index').then((module) => {
    resolve(module)
  })
};
//档期
const schedule = (resolve) => {
  import('@/components/schedule/index').then((module) => {
    resolve(module)
  })
};
//签约月嫂
const signMonthWoman = (resolve) => {
  import('@/components/signMonthWoman/index').then((module) => {
    resolve(module)
  })
};

//中转页
const enterport = (resolve) => {
  import('@/components/enterport/index').then((module) => {
    resolve(module)
  })
};

Vue.use(Router);

let router = new Router({
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/index', name: 'index', component: index, redirect: '/index/home', meta: {index: 1,keepAlive:true},
      children: [
        {path: 'home', name: 'home', component: home, meta: {title: '首页', index: 1,keepAlive:true}},
        {path: 'mine', name: 'mine', component: mine, meta: {title: '我的', index: 1}},
        {path: 'order', name: 'order', component: order, meta: {title: '我的订单', index: 1}},
      ]
    },
    {path: '/enterport', name: 'enterport', component: enterport, meta: {title: '正在登录...', index: 2}},
    {path: '/login', name: 'login', component: login, meta: {title: '登录/注册', index: 2}},
    {path: '/appointment', name: 'appointment', component: appointment, meta: {title: '预约面试', index: 6}},
    {path: '/person-info', name: 'personInfo', component: personInfo, meta: {title: '个人信息', index: 4}},
    {path: '/my-collect', name: 'myCollect', component: myCollect, meta: {title: '我的收藏', index: 4}},
    {path: '/order-detail', name: 'orderDetail', component: orderDetail, meta: {title: '订单详情', index: 5}},
    {path: '/update-phone', name: 'updatePhone', component: updatePhone,meta:{title:'修改手机',index:6}},
    {path: '/person-resume', name: 'personResume', component: personResume,meta:{title:'简历',index:5}},
    {path: '/schedule', name: 'schedule', component: schedule,meta:{title:'档期',index:6}},
    {path: '/sign-contract', name: 'signContract', component: signContract,meta:{title:'签约',index:6}},
    {path: '/sign-month-woman', name: 'signMonthWoman', component: signMonthWoman,meta:{title:'签约',index:6}},

  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  store.commit('changeTransition', 'slide-none')
  if (from.meta.index > to.meta.index) {
    // 后退,想右滑动
    store.commit('changeTransition', 'slide-right')
  } else if (from.meta.index < to.meta.index) {
    // 前进,想左滑动
    store.commit('changeTransition', 'slide-left')
  } else {
    // 同一层级,无动画
    store.commit('changeTransition', 'slide-none')
  }
  next()
})

export default router
