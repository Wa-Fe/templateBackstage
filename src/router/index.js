/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:18:57
 * @LastEditTime: 2022-06-27 11:25:27
 * @LastEditors: Wa_Fe
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta:{
      require:true,
    },
    component:Layout,
    redirect: {name:'home'},
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import("@/views/index/index.vue"),
        meta: { require:true,}
      },
    ]
  },
  {
    path: "/shop",
    name: "shop",
    component: Layout,
    children:[
      {
        path: '/shopindex',
        name: 'shopindex',
        component: () => import('@/views/shop/index'),
        meta: {  require:true,}
      },
      {
        path: '/shopone',
        name: 'shopone',
        component: () => import('@/views/shop/shopone'),
        meta: { require:true,}
      },
      {
        path: '/shoptwo',
        name: 'shoptwo',
        component: () => import('@/views/shop/shoptwo'),
        meta: {  require:true,}
      },
      {
        path: '/shopthree',
        name: 'shopthree',
        component: () => import('@/views/shop/shopthree'),
        meta: {  require:true,}
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta:{
      /**
       * @description: 
       * @return {Boolean} 页面是否需要登录才能查看 
       */
      require:false,
    }
  },

];


// 动态路由 

export const dynamicRoles = [
  {
    path: "/goods",
    name: "goods",
    // component: Layout,
    componenturl:'Layout',
    redirect: {name:'goodsindex'},
    children:[
      {
        path: '/goodsindex',
        name: 'goodsindex',
        // component: () => import('@/views/goods/index'),
        componenturl:'goods/index',
        meta: {  require:true,}
      },
      {
        path: '/goodsone',
        name: 'goodsone',
        // component: resolve => require(["@/views/goods/goodsone.vue"], resolve),
        componenturl:'goods/goodsone',
        meta: {  require:true,}
      },
      {
        path: '/goodstwo',
        name: 'goodstwo',
        // component: () => import('@/views/goods/goodstwo'),
        componenturl:'goods/goodstwo',
        meta: {  require:true,}
      },
      {
        path: '/goodsthree',
        name: 'goodsthree',
        // component: () => import('@/views/goods/goodsthree'),
        componenturl:'goods/goodsthree',
        meta: {  require:true,}
      },
    ]
  },
  {
    path: "/order",
    name: "order",
    // component: Layout,
    componenturl:'Layout',
    redirect: {name:'orderone'},
    children:[
      // {
      //   path: 'orderindex',
      //   name: 'orderindex',
      //   component: () => import('@/views/order/index'),
      //   meta: {  require:true,}
      // },
      {
        path: '/orderone',
        name: 'orderone',
        // component: () => import('@/views/order/orderone'),
        componenturl:'order/orderone',
        meta: {  require:true,}
      },
      {
        path: '/ordertwo',
        name: 'ordertwo',
        // component: () => import('@/views/order/ordertwo'),
        componenturl:'order/ordertwo',
        meta: {  require:true,}
      },
      {
        path: '/orderthree',
        name: 'orderthree',
        // component: () => import('@/views/order/orderthree'),
        componenturl:'order/orderthree',
        meta: {  require:true,}
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
