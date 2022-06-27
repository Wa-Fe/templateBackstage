<!--
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:46:49
 * @LastEditTime: 2022-06-27 09:27:06
 * @LastEditors: Wa_Fe
-->
<template>
  <el-container>
    <el-container>
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <el-main>
        <el-header>Header</el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Nav from "./nav/index.vue";
import AppMain from "./appMain/index.vue";
export default {
  components: { Nav, AppMain },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
