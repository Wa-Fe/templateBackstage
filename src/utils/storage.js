/*
 * @Descriptito 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:56:51
 * @LastEditTime: 2022-06-27 10:55:19
 * @LastEditors: Wa_Fe
 */
//获取token信息
export function getToken() {
    return localStorage.getItem("token")
}

export function getMenulist() {
    return JSON.parse(localStorage.getItem("menu"))

}