/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:18:57
 * @LastEditTime: 2022-06-27 11:02:05
 * @LastEditors: Wa_Fe
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css:{
    loaderOptions:{
      postcss:{
       
      }
    }
  }
});
