/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:18:57
 * @LastEditTime: 2022-06-27 11:29:31
 * @LastEditors: Wa_Fe
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import Router from 'vue-router'
import './styles/index.scss'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;

let registerRouteFresh = true


router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 首先判断是否有token信息
  if (store.state.user.token) {
    // 有token信息
    if (registerRouteFresh) {
      // 页面刷新进入
      registerRouteFresh = false
      await store.getters['user/getRealyRouter'].then(res=>{
        next({...to,replace: true})
      })
    } else {
      // 平常进入页面
      next()
    }
  } else {
    // 没有token信息
    if (to.meta.require) {
      // 需要登录鉴权限
      next('/login')
    } else {
      // 不需要登录鉴权限
      next()
    }
  }

})
router.afterEach(()=>{
  NProgress.done()
})



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}





new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
