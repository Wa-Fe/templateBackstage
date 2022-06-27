<!--
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:51:32
 * @LastEditTime: 2022-06-27 10:56:01
 * @LastEditors: Wa_Fe
-->
<template>
  <div class="login">
    <div class="mainbox">
       <el-radio-group v-model="radio">
          <el-radio :label="item.type" v-for="(item,x) in identityList" :key="x">{{item.name}}</el-radio>
        </el-radio-group>
        <div class="flex j-c buttonbox">
          <el-button type="primary" :loading="subLoading == 1"
           :disabled="radio == ''" @click="subLogim">登录</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import router, {dynamicRoles} from "@/router"
import Layout from "@/layout"
export default {
  components: {},
  props: {},
  data() {
    return {
      identityList: [
        { type: "staff", name: "员工" },
        { type: "administrator", name: "管理员" },
        { type: "visitor", name: "游客登录" },
      ],
      radio:'',
      subLoading:null
    };
  },
  created() {},
  mounted() {
  },
  watch: {},
  computed: {},
  methods: {
    subLogim(){
      var self = this
      self.subLoading = 1
      setTimeout(()=>{
        self.subLoading = null
        
         if(self.radio == 'administrator'){
         localStorage.setItem('menu',JSON.stringify(dynamicRoles))
        }
        this.$store.commit('user/SET_MENU',dynamicRoles)
        localStorage.setItem('token',self.radio)
        this.$store.commit('user/SET_TOKEN',self.radio)
        self.$router.push('/home')
      },2000)
    },
    filterRouter(view){
      return (resolve) => require([`@/views/${view}.vue`], resolve)
    }
  },
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  height: 100vh;
  widows: 100%;
  .mainbox {
    margin-top: 20vh;
    height: 300px;
    padding: 50px;
    box-shadow: 0 0 10px rgb(0 0 0 / 12%);
    .buttonbox{
      padding-top: 50px;
    }
  }
}
</style>
