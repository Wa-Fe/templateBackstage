/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:58:26
 * @LastEditTime: 2022-06-27 11:22:53
 * @LastEditors: Wa_Fe
 */

import {
    getToken,
    getMenulist
} from "@/utils/storage"
import Layout from "@/layout"
import router from "@/router"
const state = {
    token: getToken(),
    menulist: getMenulist()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_MENU: (state, list) => {
        console.log(list)
        state.menulist = list
    },
}


const actions = {


}

const getters = {
    getRealyRouter:(state) => {
        return new Promise((resolve, reject) => {
            let a = state.menulist
            let c = null
            if (a) {
                c = a.map(item => {
                    item.component = Layout;
                    delete item.componenturl
                    if(item.children){
                        item.children.map(item1=>{
                            item1.component = getters.loadview(item1.componenturl)
                            delete item1.componenturl
                        })
                    }
                    return item
                });
                router.addRoutes(c)
                resolve(c)
            }
        })
    },
    loadview:(view)=>{
        return () => import(`@/views/${view}`);
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}