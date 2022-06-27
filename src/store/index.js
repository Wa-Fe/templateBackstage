/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:18:57
 * @LastEditTime: 2022-06-26 18:18:03
 * @LastEditors: Wa_Fe
 */
import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters:{},
  mutations: {},
  actions: {},
  modules: {
    user
  },
});
