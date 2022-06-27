<!--
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:45:37
 * @LastEditTime: 2022-06-24 15:34:57
 * @LastEditors: Wa_Fe
-->
<template>
  <div>
    <el-col :span="24"><div class="grid-content bg-purple-dark">这个地方显示顶部菜单全局</div></el-col>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
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
